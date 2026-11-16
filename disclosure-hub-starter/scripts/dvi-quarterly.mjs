import { calculateQuarterly, loadCandidates, loadPublishedDataset } from './dvi-quarterly-lib.mjs';

const args = process.argv.slice(2);
function option(flag) {
  const at = args.indexOf(flag);
  if (at >= 0 && !args[at + 1]) throw new Error(`Missing value for ${flag}`);
  return at >= 0 ? args[at + 1] : undefined;
}

const edition = option('--edition') ?? '2026-10';
const includeCandidates = args.includes('--include-candidates');
const asJson = args.includes('--json');
const assertPublished = args.includes('--assert-published');

if (args.includes('--help')) {
  console.log('Usage: npm run dvi:quarter -- --edition 2027-01 [--include-candidates] [--json]');
  console.log('       npm run dvi:quarter -- --edition 2026-10 --assert-published');
  process.exit(0);
}

const { events, config } = loadPublishedDataset();
const report = calculateQuarterly(events, edition, includeCandidates ? loadCandidates() : []);
if (assertPublished) {
  if (includeCandidates || edition !== '2026-10' || report.current.display !== config.value || report.current.level !== config.level) {
    throw new Error('Published October 2026 DVI snapshot does not reconcile');
  }
}

const present = event => ({ id: event.id, date: event.date, w: event.w, title: event.title, sourceUrl: event.sourceUrl ?? null });
if (asJson) {
  console.log(JSON.stringify({
    edition, window: { start: report.current.window.starts, end: report.current.window.ends },
    historical: report.historical,
    score: { raw: report.current.raw, display: report.current.display, level: report.current.level, weightedTotal: report.current.weightedTotal, multiplier: report.current.multiplier },
    previous: { edition: report.previous.window.edition, display: report.previous.display, level: report.previous.level, weightedTotal: report.previous.weightedTotal },
    entered: report.entered.map(present), exited: report.exited.map(present),
    candidates: report.candidateEvents.map(present),
    publishedCount: report.publishedCount,
    provisional: includeCandidates,
    warning: includeCandidates ? 'Preview only — candidates are not on the public site' : null,
  }, null, 2));
} else {
  console.log(`${edition} DVI | ${report.current.window.starts}–${report.current.window.ends} (36 complete months)`);
  console.log(`Historical 1946–2016: ${report.historical.count} events; weight ${report.historical.weight.toFixed(1)} / 71 years = ${report.historical.baseline.toFixed(3)}/year`);
  console.log(`Score: ${report.current.raw.toFixed(6)} -> ${report.current.display.toFixed(1)}/10 ${report.current.level} (${report.current.count} events, weighted sum ${report.current.weightedTotal.toFixed(1)}, ${report.current.multiplier.toFixed(2)}x baseline)`);
  console.log(`Previous edition ${report.previous.window.edition}: ${report.previous.display.toFixed(1)} (${report.previous.weightedTotal.toFixed(1)} weighted)`);
  console.log(`Entered: ${report.entered.length}; exited: ${report.exited.length}`);
  for (const event of report.entered) console.log(`  + ${event.date} [${event.w}] ${event.id}: ${event.title}`);
  for (const event of report.exited) console.log(`  - ${event.date} [${event.w}] ${event.id}: ${event.title}`);
  if (includeCandidates) console.log(`PREVIEW ONLY: ${report.candidateEvents.length} accepted candidate(s), not published`);
  if (assertPublished) console.log('Published October 2026 score verified.');
}
