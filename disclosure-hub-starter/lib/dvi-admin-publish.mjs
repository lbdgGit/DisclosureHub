import { calculateQuarterly, editionWindow } from '../scripts/dvi-quarterly-lib.mjs';

const validCategories = new Set(['military', 'government', 'legislative', 'scientific', 'international', 'financial', 'media']);
const validWeights = new Set([0.5, 0.7, 0.8, 1.0]);
const validStrengths = new Set(['critical', 'high', 'medium', 'low']);

function field(value, key, min, max) {
  if (typeof value !== 'string' || value.trim().length < min || value.length > max) {
    throw new Error(`Invalid ${key}: expected ${min}–${max} characters`);
  }
  return value.trim();
}

export function validateCandidate(candidate, publishedIds = new Set()) {
  if (!candidate || typeof candidate !== 'object') throw new Error('Missing candidate record');
  const id = field(candidate.id, 'ID', 4, 100);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) throw new Error('ID must contain lowercase letters, numbers and hyphens');
  if (publishedIds.has(id)) throw new Error('This event ID is already published');

  const date = field(candidate.date, 'date', 7, 7);
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(date)) throw new Error('Candidates require a YYYY-MM date');
  const [year, mo] = date.split('-').map(Number);
  if (year < 1946 || year > 2100) throw new Error('Event year outside supported range');
  const w = Number(candidate.w);
  if (!validWeights.has(w)) throw new Error('Unsupported weight');
  if (!validCategories.has(candidate.category) || !validStrengths.has(candidate.strength)) throw new Error('Invalid category or strength');
  const sourceUrl = field(candidate.sourceUrl, 'source URL', 12, 1000);
  const parsed = new URL(sourceUrl);
  if (parsed.protocol !== 'https:' || !parsed.hostname.includes('.')) throw new Error('An HTTPS source URL is required');
  const status = candidate.status === 'ready' ? 'ready' : 'draft';

  return {
    id, date, year, mo, w,
    institution: field(candidate.institution, 'institution', 3, 160),
    country: field(candidate.country, 'country', 2, 80),
    title: field(candidate.title, 'title', 8, 250),
    description: field(candidate.description, 'description', 20, 2500),
    category: candidate.category,
    strength: candidate.strength,
    sourceLabel: field(candidate.sourceLabel, 'source citation', 5, 350),
    sourceUrl,
    status,
  };
}

function csvCell(value) {
  const txt = String(value ?? '');
  return /[",\r\n]/.test(txt) ? `"${txt.replaceAll('"', '""')}"` : txt;
}

function makeCsv(events, withStrength) {
  const ordered = events.map((event, index) => ({ event, index }))
    .sort((a, b) => a.event.year - b.event.year || a.event.mo - b.event.mo || a.index - b.index)
    .map(record => record.event);
  const header = ['#', 'Date', 'Year', 'Institution', 'Country', 'Category', 'Weight'];
  if (withStrength) header.push('Strength');
  header.push('Event', 'Primary Source', 'Source URL');
  const rows = ordered.map((event, index) => {
    const values = [index + 1, event.date, event.year, event.institution, event.country, event.category, event.w.toFixed(1)];
    if (withStrength) values.push(event.strength);
    values.push(event.title, event.sourceLabel || event.sourceUrl || '', event.sourceUrl || '');
    return values.map(csvCell).join(',');
  });
  return '\uFEFF' + [header.join(','), ...rows].join('\n') + '\n';
}

function updateSource(source, selected, score, edition) {
  const delimiter = '\n];\n\n// ─── Derived helpers';
  const at = source.indexOf(delimiter);
  if (at === -1) throw new Error('Cannot locate the public SIGNALS dataset boundary');
  const additions = selected.map(({ status, ...record }) => {
    const serialized = JSON.stringify({ ...record, isNew: true }, null, 2);
    return `  ${serialized.replaceAll('\n', '\n  ')},`;
  }).join('\n');
  let next = source.slice(0, at) + '\n' + additions + source.slice(at);

  const begin = next.indexOf('export const DVI_CONFIG = {');
  const close = next.indexOf('} as const;', begin);
  if (begin === -1 || close === -1) throw new Error('Cannot locate DVI_CONFIG');
  const [year, month] = edition.split('-').map(Number);
  const monthLabel = new Date(Date.UTC(year, month - 1, 1)).toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
  let config = next.slice(begin, close);
  const transformations = [
    [/value:\s*[\d.]+,/, `value:     ${score.current.display.toFixed(1)},`],
    [/level:\s*'[^']+'\s+as const,/, `level:     '${score.current.level}' as const,`],
    [/updatedAt:\s*'[^']+',/, `updatedAt: '${monthLabel} ${year}',`],
    [/baseline:\s*'[^']+',/, `baseline:  '${Math.round(score.current.multiplier)}× the historical baseline',`],
  ];
  for (const [pattern, replacement] of transformations) {
    if (!pattern.test(config)) throw new Error(`DVI configuration field not found: ${pattern}`);
    config = config.replace(pattern, replacement);
  }
  next = next.slice(0, begin) + config + next.slice(close);
  return next;
}

export function preparePublication(events, source, candidates, selectedIds, edition, now = Date.now()) {
  if (!Array.isArray(selectedIds)) throw new Error('Invalid selection of approved events');
  const window = editionWindow(edition);
  if (now < Date.UTC(Number(edition.slice(0, 4)), Number(edition.slice(5, 7)) - 1, 1)) {
    throw new Error('The quarterly window has not ended. Publication may be prepared from the first day of its edition month.');
  }
  if (new Set(selectedIds).size !== selectedIds.length) throw new Error('Duplicate selected IDs');
  const existingIds = new Set(events.map(event => event.id));
  const selected = selectedIds.map(id => {
    const candidate = candidates.find(item => item.id === id);
    if (!candidate) throw new Error(`Candidate not found: ${id}`);
    const record = validateCandidate(candidate, existingIds);
    if (record.status !== 'ready') throw new Error(`Candidate is not approved: ${id}`);
    return record;
  });
  const score = calculateQuarterly(events, edition, selected);
  if (!selected.every(candidate => score.current.included.some(event => event.id === candidate.id))) {
    throw new Error('An approved candidate falls outside this quarterly scoring window');
  }
  const merged = [...events, ...selected.map(({ status, ...event }) => ({ ...event, isNew: true }))];
  return {
    score,
    files: {
      'data/signals.ts': updateSource(source, selected, score, edition),
      // The staging branch may lag behind main across releases. Never copy
      // already-published records back into the next public candidate queue.
      'data/dvi-candidates.json': `${JSON.stringify(candidates.filter(item => !selectedIds.includes(item.id) && !existingIds.has(item.id)), null, 2)}\n`,
      'public/downloads/LBDG-DVI-Dataset.csv': makeCsv(merged, false),
      'public/downloads/LBDG-DVI-Dataset(1).csv': makeCsv(merged, true),
    },
    window,
  };
}
