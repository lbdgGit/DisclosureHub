import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { loadCandidates, loadPublishedDataset } from './dvi-quarterly-lib.mjs';
import { preparePublication, validateCandidate } from '../lib/dvi-admin-publish.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = fs.readFileSync(path.join(root, 'data/signals.ts'), 'utf8');
const { events } = loadPublishedDataset();
const candidates = loadCandidates();
const releaseTime = Date.UTC(2027, 0, 2);

function readGeneratedDataset(text) {
  const compiled = ts.transpileModule(text, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const scope = { exports: {} };
  vm.runInNewContext(compiled, scope);
  return scope.exports;
}

test('candidate validation prevents weak provenance and reusing public event IDs', () => {
  const proposed = validateCandidate(candidates[0], new Set(events.map(event => event.id)));
  assert.equal(proposed.status, 'ready');
  assert.equal(proposed.year, 2026);
  assert.equal(proposed.mo, 10);
  assert.throws(() => validateCandidate({ ...candidates[0], sourceUrl: 'http://other.com/file' }), /HTTPS/);
  assert.throws(() => validateCandidate({ ...candidates[0], id: events[0].id }, new Set(events.map(event => event.id))), /already published/);
});

test('January editorial publication produces 71 coherent signals and two matching CSVs', () => {
  const result = preparePublication(events, source, candidates, [candidates[0].id], '2027-01', releaseTime);
  const next = readGeneratedDataset(result.files['data/signals.ts']);
  assert.equal(next.SIGNALS.length, 71);
  assert.equal(next.DVI_CONFIG.value, 6.9);
  assert.equal(next.DVI_CONFIG.level, 'READINESS');
  assert.equal(next.DVI_CONFIG.updatedAt, 'January 2027');
  assert.ok(next.SIGNALS.some(event => event.id === 'pursue-tranche7-2026'));
  assert.equal(JSON.parse(result.files['data/dvi-candidates.json']).length, 0);
  for (const filename of ['LBDG-DVI-Dataset.csv', 'LBDG-DVI-Dataset(1).csv']) {
    const lines = result.files[`public/downloads/${filename}`].trim().split('\n');
    assert.equal(lines.length, 72);
    assert.ok(lines[0].includes('Source URL'));
    assert.ok(result.files[`public/downloads/${filename}`].includes('PURSUE Release 07'));
  }
});

test('editor will not publish an edition before its 36-month reporting window closes', () => {
  assert.throws(() => preparePublication(events, source, candidates, [candidates[0].id], '2027-01', Date.UTC(2026, 10, 16)), /window has not ended/);
});

test('zero newly eligible events still permits a quarterly rollover in January', () => {
  const result = preparePublication(events, source, candidates, [], '2027-01', releaseTime);
  const next = readGeneratedDataset(result.files['data/signals.ts']);
  assert.equal(next.SIGNALS.length, 70);
  assert.equal(next.DVI_CONFIG.updatedAt, 'January 2027');
  assert.equal(result.score.entered.length, 0);
  assert.equal(result.score.exited.length, 2);
});
