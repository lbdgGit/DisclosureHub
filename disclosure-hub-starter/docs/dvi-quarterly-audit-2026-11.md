# LBDG DVI — documentary audit and January 2027 release preparation

**Prepared:** 16 November 2026. **Status:** working audit, not a certified full-dataset review.

## Publication policy (agreed)

- The DVI is a **quarterly editorial publication**: January, April, July and October.
- Use the **36 completed calendar months preceding publication**. October 2026 covers **2023-10 through 2026-09**; January 2027 covers **2024-01 through 2026-12**.
- New evidence can be researched and staged during the quarter. It must **not silently change the currently published DVI**.
- At publication, review all candidates; explicitly approve weights and count one distinct institutional act once; reconcile the original dataset and CSV exports; calculate the new score, level and baseline multiple; publish with a change log.
- Classify readiness using the **unrounded index**. Round to one decimal only for display. A raw 6.98 displays as 7.0 but remains **READINESS**, not ACTIVATION.
- Historical records remain in the dataset after they leave the current 36-month scoring window.
- An institutional action or hypothetical scenario does **not** validate extraordinary claims or establish NHI existence.

## Reconciliation: frozen October 2026 edition

| Metric | Audited result |
|---|---:|
| Full historical + recent dataset | 70 distinct event IDs |
| Historical baseline events, 1946–2016 inclusive | 24 |
| Historical baseline weighted sum | 21.3 |
| Historical baseline annualized | 21.3 / 71 = **0.3000** |
| Events within Oct 2023–Sep 2026 | 29 |
| Weighted 36-month total | **25.6** |
| Annualized / historical baseline | **28.444×** |
| Raw DVI | **6.900107** |
| Display / classification | **6.9 · READINESS** |

The displayed index **remains 6.9** until the next release. Correcting the dates and institutional wording below does not change this score.

## Source-supported corrections staged in this branch

| Record | Correction and rationale | Primary or firsthand material |
|---|---|---|
| NASA independent study | **2021-09 → 2022-06**; NASA *announced commissioning*, rather than completing formation of the team. | [NASA, 9 June 2022](https://www.nasa.gov/news-release/nasa-to-discuss-new-unidentified-aerial-phenomena-study-today/) |
| Deloitte Black Swans | **2025-01 → 2026-03**. A hypothetical NHI-disclosure scenario rated **2/5** in a foresight exercise is **not an empirical probability or confirmation**. | [Deloitte, 19 March 2026](https://www.deloitte.com/ch/en/services/consulting/perspectives/how-to-foresee-black-swans.html) |
| AARO FY2024 report | **2024-12 → 2024-11**. There were **1,652 cumulative** reports, **757** received in the reporting period; **21** warrant further analysis. The report was **drafted in coordination** with other agencies, not "co-signed" as an endorsement of extraordinary claims. | [DoD original FY2024 report, 14 Nov 2024, pages 3–5](https://media.defense.gov/2024/Nov/14/2003583603/-1/-1/0/FY24-CONSOLIDATED-ANNUAL-REPORT-ON-UAP-508.PDF) |
| Uruguay CRIDOVNI | **1979-01 → 1979-08**; the Uruguayan Air Force cites **7 August 1979**. Removed unsupported decree language. | [Fuerza Aérea Uruguaya](https://www.fau.mil.uy/noticias/242) |
| Soviet government research | Replaced imprecise “Institute 22” programme title with the **1978 Soviet state research programme (SETKA)**. Original month was unverified, so the display now says **1978** rather than inventing January. | [Platov and Sokolov, *Herald of the Russian Academy of Sciences* 70 (2000), 244–251](https://noufors.com/Documents/Platov.pdf) — authors coordinated the programme; PDF is a third-party host of their firsthand journal article. |

Both downloadable CSVs were regenerated with 70 records and now also export a **Source URL** field (blank where a direct link has not yet been added). The existing field order is unchanged except for the appended column.

## January 2027 **illustrative preview — not a release**

Assumes **no additional approved October–December 2026 event** beyond the candidate listed here, and **no later corrections to weights**:

| Change versus October 2026 | Date | Weight |
|---|---|---:|
| **Leaves** 36-month window: Sol Foundation inaugural symposium | 2023-11 | −0.5 |
| **Leaves** 36-month window: partial UAPDA provisions in FY2024 NDAA | 2023-12 | −1.0 |
| **Enters** as unpublished candidate: PURSUE Release 07 | 2026-10 | +1.0 |
| **Net movement** | | **−0.5** |

- Published data only, **without** candidate: weight **24.1**. This is a mechanistic preview, **not** a finalized January score.
- With one ready-but-unpublished candidate: weight **25.1**, raw **6.859455**, display **6.9 · READINESS**. This is equally **provisional**.
- [Department of War original PURSUE Release 07 announcement, 23 October 2026](https://www.war.gov/News/Releases/Release/Article/4632058/department-of-war-publishes-seventh-release-of-unidentified-anomalous-phenomena/); candidate stored in `data/dvi-candidates.json`, **not** in the 70 public records.
- Full source review and additional event discovery through **31 December 2026** are still necessary before January's publication.

## Documentary quality gaps: next audit priority

- **23/70** records now contain a direct `sourceUrl`; **47/70** lack one. Of **34 events from 2023 onward**, **16** still lack a direct link. The dataset is internally complete and its arithmetic reproducible; **its 70 individual historical claims are not yet fully source-certified**.
- `sourceLabel` is a human-readable reference, not automatically a verified **primary source**. The legacy CSV field name `Primary Source` predates this audit; its contents should not be construed as independently authenticated. Source URLs should prioritize actual legal texts, original agency releases, official hearing records and scholarly papers.
- Review the methodological eligibility and weight of **a former Bank of England analyst's personal letter**: it is not an official decision of the Bank of England. [Contemporaneous press report](https://www.thetimes.com/uk/scotland/article/bank-of-england-must-prepare-for-ufo-announcement-f3mh8l9vh).
- Check the provenance and exact designation of the **February 2026 presidential UAP instruction** (`trump-eo-2026`): the event title calls it a directive, but its ID suggests an executive order; avoid claiming a formal executive order without one.
- Confirm the exact dates rather than the currently assumed January month for **CEFAA (Chile, 1997)**, **Project Condign (1997)**, **AATIP (2007)** and **CEFAe (Argentina, 2011)**. If only the year is supported, publish the year, not an invented month.
- Audit **one text = one event** and ensure each counted act is distinct from republished commentary or unverified content. In particular, examine 2026 governance-board/advisory-council entries against the original agency records.
- Audit the site and downloaded methodology PDF for references to old scores, old dates and qualitative overclaims. Other content tracks are **not** automatically recalculated by this script.

## Reproducible workflow for the next edition

From the Next.js project root:

```bash
npm run dvi:test
npm run dvi:quarter -- --edition 2026-10 --assert-published
npm run dvi:quarter -- --edition 2027-01
npm run dvi:quarter -- --edition 2027-01 --include-candidates
npm run dvi:quarter -- --edition 2027-01 --include-candidates --json
```

`--json` provides structured output for a later admin interface and quarterly commentary. **None of these commands publishes a score.** When ready in January, a human must review event sources, formally transfer approved candidates to `data/signals.ts`, remove them from the candidate queue, set `DVI_CONFIG` to the approved new value/level/period/baseline, regenerate both CSVs via `npm run dvi:export`, and run `npm run dvi:check`, `npm run dvi:test` and `npm run build` before deploying. The public dashboard must remain on the last approved quarterly snapshot until that point.

## Administrative interface (future development)

Build a private reviewer interface with four separate concepts: **source record → review/approve event → preview quarterly snapshot → explicitly publish**. Each event should carry unique ID, factual event date (with precision indicator), original URL, separate source and claim summaries, institution/country/category, provisional weight, review status, editor and change history. Display the entrants, exits, reweights, new score and threshold *before* approval. Do not allow a draft event to alter the public score or downloads automatically.
