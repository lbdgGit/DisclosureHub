import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceFile = path.join(appRoot, 'data/signals.ts');
const exportDirectory = path.join(appRoot, 'public/downloads');
const mode = process.argv[2];

if (mode !== '--check' && mode !== '--write') {
  console.error('Usage: node scripts/sync-dvi-csv.mjs --check|--write');
  process.exit(2);
}

// The existing TypeScript dataset has no runtime imports. Evaluate its
// transpiled exports so the CSVs use exactly the same records as the website.
const compiled = ts.transpileModule(fs.readFileSync(sourceFile, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const scope = { exports: {} };
vm.runInNewContext(compiled, scope, { filename: sourceFile });
const source = scope.exports.SIGNALS;

if (!Array.isArray(source) || !source.length) {
  throw new Error('SIGNALS is empty or unavailable');
}

const ids = new Set();
const categories = new Set(['military', 'government', 'legislative', 'scientific', 'international', 'financial', 'media']);
const strengths = new Set(['critical', 'high', 'medium', 'low']);
for (const event of source) {
  if (!event.id || !event.date || !event.title || !event.institution || !event.country ||
      !categories.has(event.category) || !strengths.has(event.strength) ||
      !Number.isFinite(event.w) || (!event.sourceLabel && !event.sourceUrl) ||
      !Number.isInteger(event.year) || !Number.isInteger(event.mo) ||
      event.mo < 1 || event.mo > 12 || Number(event.date.slice(0, 4)) !== event.year) {
    throw new Error(`Incomplete event: ${event.id ?? '(no id)'}`);
  }
  if (ids.has(event.id)) throw new Error(`Duplicate event ID: ${event.id}`);
  ids.add(event.id);
}

const events = source.map((event, index) => ({ event, index }))
  .sort((a, b) => a.event.year - b.event.year || a.event.mo - b.event.mo || a.index - b.index)
  .map(({ event }) => event);

function csvCell(value) {
  const text = String(value ?? '');
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function makeCsv(includeStrength) {
  const header = ['#', 'Date', 'Year', 'Institution', 'Country', 'Category', 'Weight'];
  if (includeStrength) header.push('Strength');
  header.push('Event', 'Primary Source');

  const rows = events.map((event, index) => {
    const fields = [index + 1, event.date, event.year, event.institution, event.country,
      event.category, event.w.toFixed(1)];
    if (includeStrength) fields.push(event.strength);
    fields.push(event.title, event.sourceLabel || event.sourceUrl || '');
    return fields.map(csvCell).join(',');
  });
  return '\uFEFF' + [header.join(','), ...rows].join('\n') + '\n';
}

const outputs = [
  { name: 'LBDG-DVI-Dataset.csv', content: makeCsv(false) },
  { name: 'LBDG-DVI-Dataset(1).csv', content: makeCsv(true) },
];

let stale = false;
for (const { name, content } of outputs) {
  const file = path.join(exportDirectory, name);
  if (mode === '--write') {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${name}: ${events.length} events`);
  } else if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== content) {
    stale = true;
    console.error(`Outdated export: ${name}`);
  } else {
    console.log(`Verified ${name}: ${events.length} events`);
  }
}
if (stale) process.exitCode = 1;
