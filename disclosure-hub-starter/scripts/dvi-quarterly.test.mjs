import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateQuarterly, classifyRawDvi, editionWindow, loadCandidates, loadPublishedDataset } from './dvi-quarterly-lib.mjs';

const { events, config } = loadPublishedDataset();

test('quarterly editions use the 36 completed calendar months before publication', () => {
  assert.deepEqual([editionWindow('2026-10').starts, editionWindow('2026-10').ends], ['2023-10', '2026-09']);
  assert.deepEqual([editionWindow('2027-01').starts, editionWindow('2027-01').ends], ['2024-01', '2026-12']);
  assert.throws(() => editionWindow('2027-02'), /Edition must/);
});

test('October 2026 published DVI reconciles exactly to the frozen score and level', () => {
  const report = calculateQuarterly(events, '2026-10');
  assert.equal(events.length, 70);
  assert.equal(report.historical.count, 24);
  assert.ok(Math.abs(report.historical.baseline - 0.3) < 1e-10);
  assert.ok(Math.abs(report.current.weightedTotal - 25.6) < 1e-10);
  assert.ok(Math.abs(report.current.raw - 6.900107) < 1e-5);
  assert.equal(report.current.display, config.value);
  assert.equal(report.current.level, config.level);
});

test('January 2027 preview shows expiring records and does not silently publish a candidate', () => {
  const published = calculateQuarterly(events, '2027-01');
  assert.ok(Math.abs(published.current.weightedTotal - 24.1) < 1e-10);
  assert.deepEqual(Array.from(published.exited, event => event.id), ['sol-symposium-2023', 'uapda-ndaa-2023']);
  assert.equal(published.entered.length, 0);
  const preview = calculateQuarterly(events, '2027-01', loadCandidates());
  assert.ok(Math.abs(preview.current.weightedTotal - 25.1) < 1e-10);
  assert.deepEqual(Array.from(preview.entered, event => event.id), ['pursue-tranche7-2026']);
  assert.equal(preview.current.display, 6.9);
  assert.equal(preview.current.level, 'READINESS');
});

test('the true threshold, not the rounded display, determines the status', () => {
  assert.equal(Math.round(6.979 * 10) / 10, 7.0);
  assert.equal(classifyRawDvi(6.979), 'READINESS');
  assert.equal(classifyRawDvi(7.0), 'ACTIVATION');
});

test('bad candidate data or duplicate IDs abort calculation', () => {
  const duplicate = { ...loadCandidates()[0], id: events[0].id };
  assert.throws(() => calculateQuarterly(events, '2027-01', [duplicate]), /duplicate event id/);
  const missingMonth = { ...loadCandidates()[0], date: '2026' };
  assert.throws(() => calculateQuarterly(events, '2027-01', [missingMonth]), /Year-only date/);
});
