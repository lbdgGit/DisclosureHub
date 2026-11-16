import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const quarterMonths = new Set([1, 4, 7, 10]);

export function loadPublishedDataset() {
  const filename = path.join(projectRoot, 'data/signals.ts');
  const js = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const scope = { exports: {} };
  vm.runInNewContext(js, scope, { filename });
  const { SIGNALS, DVI_CONFIG } = scope.exports;
  if (!Array.isArray(SIGNALS) || !DVI_CONFIG) throw new Error('Invalid public DVI dataset');
  return { events: SIGNALS, config: DVI_CONFIG };
}

export function loadCandidates() {
  return JSON.parse(fs.readFileSync(path.join(projectRoot, 'data/dvi-candidates.json'), 'utf8'));
}

function ymIndex(year, month) {
  return year * 12 + month - 1;
}

function fromYmIndex(index) {
  const year = Math.floor(index / 12);
  const month = index % 12 + 1;
  return `${year}-${String(month).padStart(2, '0')}`;
}

export function editionWindow(edition) {
  if (!/^\d{4}-(01|04|07|10)$/.test(edition)) {
    throw new Error('Edition must be YYYY-01, YYYY-04, YYYY-07 or YYYY-10');
  }
  const [year, month] = edition.split('-').map(Number);
  if (!quarterMonths.has(month)) throw new Error('Invalid quarterly publication month');
  const endIndex = ymIndex(year, month) - 1;
  return {
    edition,
    startIndex: endIndex - 35,
    endIndex,
    starts: fromYmIndex(endIndex - 35),
    ends: fromYmIndex(endIndex),
  };
}

function validateEvent(event, seen) {
  if (!event || typeof event.id !== 'string' || !event.id || seen.has(event.id)) {
    throw new Error(`Missing or duplicate event id: ${event?.id ?? '(none)'}`);
  }
  seen.add(event.id);
  if (!Number.isInteger(event.year) || !Number.isInteger(event.mo) || event.mo < 1 || event.mo > 12 ||
      !Number.isFinite(event.w) || event.w <= 0 || !event.sourceLabel || !event.title ||
      (event.sourceUrl && !/^https:\/\//.test(event.sourceUrl))) {
    throw new Error(`Incomplete date, weight, title or source: ${event.id}`);
  }
  const match = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/.exec(event.date);
  if (!match || Number(match[1]) !== event.year || (match[2] && Number(match[2]) !== event.mo)) {
    throw new Error(`Invalid or mismatching date for ${event.id}: ${event.date}`);
  }
  if (match[3]) {
    const testDate = new Date(Date.UTC(event.year, event.mo - 1, Number(match[3])));
    if (testDate.getUTCMonth() !== event.mo - 1 || testDate.getUTCDate() !== Number(match[3])) {
      throw new Error(`Invalid day for ${event.id}: ${event.date}`);
    }
  }
}

function inWindow(event, window) {
  const month = ymIndex(event.year, event.mo);
  if (event.date.length === 4 && event.year >= Math.floor(window.startIndex / 12) && event.year <= Math.floor(window.endIndex / 12)) {
    throw new Error(`Year-only date is insufficient for the rolling window: ${event.id}`);
  }
  return month >= window.startIndex && month <= window.endIndex;
}

// Classification uses the exact score, before one-decimal display rounding.
export function classifyRawDvi(raw) {
  return raw >= 9 ? 'CRITICAL' : raw >= 7 ? 'ACTIVATION' : raw >= 5 ? 'READINESS' : raw >= 3 ? 'MONITOR' : 'BASELINE';
}

function computeDvi(events, window, baseline) {
  const included = events.filter(event => inWindow(event, window));
  const weightedTotal = included.reduce((sum, event) => sum + event.w, 0);
  const densityPerYear = weightedTotal / 3;
  const multiplier = densityPerYear / baseline;
  const raw = Math.max(0, Math.min(10, 10 * Math.log2(multiplier) / 7));
  const display = Math.round(raw * 10) / 10;
  const level = classifyRawDvi(raw);
  return { window, included, count: included.length, weightedTotal, densityPerYear, multiplier, raw, display, level };
}

export function calculateQuarterly(events, edition, candidates = []) {
  const acceptedCandidates = candidates.filter(candidate => candidate.status === 'ready');
  const all = [...events, ...acceptedCandidates];
  const ids = new Set();
  for (const event of all) validateEvent(event, ids);

  // Historical baseline: 1946–2016 inclusive = 71 calendar years.
  // A candidate must never redefine history silently.
  if (acceptedCandidates.some(event => event.year <= 2016)) {
    throw new Error('Review changes to the 1946–2016 historical baseline separately');
  }
  const historical = events.filter(event => event.year >= 1946 && event.year <= 2016);
  const historicalWeight = historical.reduce((sum, event) => sum + event.w, 0);
  const baseline = historicalWeight / 71;
  if (baseline <= 0) throw new Error('Historical baseline must be positive');

  const currentWindow = editionWindow(edition);
  const previousMonth = currentWindow.endIndex - 2; // prior issue was 3 months earlier
  const priorEdition = fromYmIndex(previousMonth);
  const previousWindow = editionWindow(priorEdition);
  const current = computeDvi(all, currentWindow, baseline);
  const previous = computeDvi(events, previousWindow, baseline);

  const oldIds = new Set(previous.included.map(event => event.id));
  const newIds = new Set(current.included.map(event => event.id));
  const sortByDate = (a, b) => a.year - b.year || a.mo - b.mo || a.id.localeCompare(b.id);

  return {
    historical: { count: historical.length, weight: historicalWeight, years: 71, baseline },
    current,
    previous,
    entered: current.included.filter(event => !oldIds.has(event.id)).sort(sortByDate),
    exited: previous.included.filter(event => !newIds.has(event.id)).sort(sortByDate),
    candidateEvents: current.included.filter(event => acceptedCandidates.some(candidate => candidate.id === event.id)),
    pendingCount: candidates.length,
    publishedCount: events.length,
  };
}
