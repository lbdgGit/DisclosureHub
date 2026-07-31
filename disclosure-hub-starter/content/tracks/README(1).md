# LBDG — Disclosure Maturity Track fiches

Reference material behind the DVI maturity track cards. Raw material for two future outputs:
1. **Website track pages** (one per domain, each rung an anchor, e.g. `/tracks/legislative#rung-6`).
2. **The DVI v5 whitepaper** ("Disclosure Maturity Framework") — the rigorous academic layer.

## Files — all seven tracks built (29 July 2026), same strict bar
- `military.md` — 1 Achieved / 7 Partial / 2 Not yet. Primary .mil/.gov.
- `government.md` — 1 / 8 / 3. Primary .gov/.mil; 2 named-secondary points flagged.
- `legislative.md` — 4 / 3 / 1. Primary govinfo/congress.gov.
- `scientific.md` — 3 / 5 / 2. Journal DOIs + university records; replication rung on flagged preprints. International in scope.
- `financial.md` — 3 / 0 / 5. SEC EDGAR + Cboe. Zero-Partial is correct (threshold sector).
- `media.md` — 5 / 3 / 1. First-party media artifacts, all formats. Impressionistic signals documented but not scored.
- `international.md` — 2 / 2 / 2. Official agency pages, Russian Academy of Sciences, AARO FOIA. Measures internationalization, not foreign domestic depth.

Icons: Military chevrons · Government pediment/columns · Legislative gavel · Scientific atom · Financial candlesticks · Media broadcast waves · International globe.

## Shared rung schema (keep consistent across all tracks)
For each rung: **Title — STATUS** · first-principles rationale · status rationale · primary source (+URL) · limitations/reversibility · arguable-status note if any.

## The status bar (apply identically on every track)
- **Achieved** = the rung's potential for significant progress is **exhausted**. An informed observer looks at it and says "this is settled — nothing significant can still happen here." Typically true only of **discrete, binary, irreversible acts** (a hazard was recognized; sworn testimony was taken; a statute was enacted). "The mechanism exists" or "it works" is NOT enough — the bar is maturity/exhaustion, not existence.
- **Partial** = the capability exists and functions but can still **progress substantially** (more volume, reach, depth, transparency, bindingness). Any **perfectible capability** with meaningful room to grow is Partial, however real it is today.
- **Not yet** = the step has not been taken at all — including a **symbolic act with zero function and zero successor**. A gesture that is de-facto reversible and produced no institution, no follow-through, and no durable effect is Not yet, not Partial: nothing operational was ever *started*, only a paper trace was left. (Example: International "intergovernmental recognition" is Not yet despite the UN's 1978 decision, which created no body and died in 48 years.)
- **Avoid double-penalizing:** if a weakness (e.g. "a lever exists but was never used") is already captured by a *separate higher rung*, don't also downgrade the rung that merely measures existence. (Example: Legislative "fiscal conditionality" is Achieved because "compulsory power actually used" is its own Not-yet rung.)
- **Achieved vs Partial, the sharp test:** Achieved fits **discrete, binary, one-time acts** whose potential is exhausted (a recognition, a sworn hearing, an enacted statute, a first peer-reviewed result). Partial fits **graduated capabilities** that can always deepen (an office that can perform better, coverage that can broaden, an instrument that can scale). When unsure, ask: "can something significant still happen on this rung?" If yes → Partial.

## Other rules baked into these fiches (don't drift)
- **Domain purity:** a statute's *vote* → Legislative; the executive *executing* it → Government. Never both. Foreign national acts → International (for internationalization), not re-scored for domestic depth. Reporting *on* a Gov/Sci/Leg event → Media; the event itself is not Media.
- **One-source-one-event:** a single law/study/product/agreement counted once, at its highest stage reached.
- **Non-ontological:** rungs measure institutional acts (an *admission* of custody, capital *allocated*, a state *cooperating*), never the existence or nature of the phenomenon. A rung must hold whether UAP are drones, sensor errors, or something exotic.
- **First-principles spine + independence test:** each ladder's structure is derived from the *domain's own logic* (how a field/branch/market/sector matures), not from a list of UAP events. Test: the same ladder should make sense for another subject (early climate science, nuclear-incident protocols, a once-tabloid subject becoming legitimate news). Empty upper rungs are proof the ladder wasn't reverse-engineered — a feature, not a gap.
- **Non-linearity is allowed and can be informative:** a Not-yet rung *below* a Partial rung is fine when it reflects reality (e.g. International: cooperation flows through intelligence alliances while the universal UN track stays a dead letter). Note it as a finding, don't force monotonic status.
- **Congressional-record rule:** a document or testimony *formally entered into the official record* of a parliamentary proceeding (a Senate/House hearing) is citable at tier `official-proceeding`, on the basis of its verifiable filing — **never** as validation of its contents. This moves verification from "is the content true?" (often unanswerable) to "was this deposited in the official record?" (binary, checkable). Cite such items only where they illuminate a specific maturity rung (e.g. an alleged undisclosed program → Government custody/accountability), not as an exhaustive catalogue of everything ever filed. Present as "entered into the record, not corroborated." Examples: George Knapp's Soviet-files testimony; the 12-page *Immaculate Constellation* document entered by Rep. Mace, 13 Nov 2024.
- **Evidence discipline:** Achieved/Partial needs a public, verifiable act. Prefer primary (statute, official record, journal DOI, filing, agency page); label press/secondary as such; `[TO SOURCE]` = not yet backed by a primary link, resolve before publishing. Separate *program/act existence* (often verifiable) from *dramatic claims about it* (often not) — credit only what's authenticated.
- **Threshold vs gradual sectors differ by nature:** some sectors move in binary jumps (Financial: an ETF exists or doesn't → no Partial, and change comes in fast cascades once triggered); others mature gradually (Scientific: many perfectible in-progress rungs). Don't force one sector's shape onto another.

## Where to keep this
Recommended: **in the LBDG repo, version-controlled** (e.g. `/content/tracks/*.md`), so the site can read from the same files and git tracks every status change with a date. Second best: a dedicated folder in Drive/Notion if you're not ready to commit to the repo. Either way, one markdown file per track, this schema, and update `Last reviewed` whenever a status moves.
