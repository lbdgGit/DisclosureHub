import { NextResponse } from 'next/server';
import { SIGNALS, DVI_CONFIG } from '@/data/signals';
import { assertSameOrigin, isAdminAuthenticated } from '@/lib/dvi-admin-auth';
import { calculateQuarterly } from '../../../scripts/dvi-quarterly-lib.mjs';
import { readCandidateStore, readPublishedSource, saveCandidateToStaging, publishDraftPullRequest } from '../../../lib/dvi-admin-github.mjs';
import { preparePublication, validateCandidate } from '../../../lib/dvi-admin-publish.mjs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function failure(error, defaultStatus = 400) {
  console.error('DVI admin request failed:', error.message);
  return NextResponse.json({ error: error.message || 'Editor request failed' }, { status: error.status || defaultStatus, headers: { 'Cache-Control': 'no-store' } });
}

function eventSummary(event) {
  return { id: event.id, date: event.date, w: event.w, title: event.title, sourceUrl: event.sourceUrl || null };
}

export async function GET(request) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const params = new URL(request.url).searchParams;
    const edition = params.get('edition') || '2027-01';
    const store = await readCandidateStore();
    const publicIds = new Set(SIGNALS.map(event => event.id));
    const unpublished = store.items.filter(item => !publicIds.has(item.id));
    const selectedParam = params.get('selected');
    const selected = selectedParam === null ? unpublished : unpublished.filter(item => selectedParam.split(',').includes(item.id));
    const report = calculateQuarterly(SIGNALS, edition, selected);
    return NextResponse.json({
      edition,
      published: { count: SIGNALS.length, value: DVI_CONFIG.value, level: DVI_CONFIG.level, updatedAt: DVI_CONFIG.updatedAt, missingSources: SIGNALS.filter(event => !event.sourceUrl).length },
      window: { start: report.current.window.starts, end: report.current.window.ends },
      score: { raw: report.current.raw, display: report.current.display, level: report.current.level, weight: report.current.weightedTotal, multiplier: report.current.multiplier },
      entrants: report.entered.map(eventSummary),
      exits: report.exited.map(eventSummary),
      candidates: unpublished,
      version: store.sha,
      writable: store.writable,
    }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) { return failure(error, 503); }
}

export async function POST(request) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try { assertSameOrigin(request); } catch (error) { return failure(error, 403); }
  try {
    const body = await request.json();
    if (body.action === 'save') {
      if (typeof body.version !== 'string') throw new Error('Refresh the editor to get the latest source version');
      const publishedIds = new Set(SIGNALS.map(event => event.id));
      const candidate = validateCandidate(body.candidate, publishedIds);
      const result = await saveCandidateToStaging(candidate, body.version);
      return NextResponse.json({ ok: true, ...result });
    }
    if (body.action === 'publish') {
      if (!Array.isArray(body.ids) || body.ids.some(id => typeof id !== 'string')) throw new Error('Invalid approval selection');
      const store = await readCandidateStore();
      const source = await readPublishedSource();
      const publication = preparePublication(SIGNALS, source, store.items, body.ids, body.edition);
      const pr = await publishDraftPullRequest(publication.files, body.edition);
      return NextResponse.json({ ok: true, pullRequest: pr.html_url, score: publication.score.current.display });
    }
    return NextResponse.json({ error: 'Unknown editor action' }, { status: 400 });
  } catch (error) { return failure(error); }
}
