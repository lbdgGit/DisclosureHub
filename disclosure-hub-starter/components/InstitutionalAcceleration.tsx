'use client';

import { useState } from 'react';

const EVENTS = [
  { year:1946, mo:6,  w:1.0, cat:"international", event:"Swedish Defence Staff Ghost Rocket investigation — official committee established", source:"National Archives memo Dec 3 1946; Swedish Defence Staff documents" },
  { year:1946, mo:8,  w:0.8, cat:"military",      event:"US Army Air Forces Intelligence Ghost Rocket investigation — Gen. Vandenberg directive", source:"National Archives; CIA declassified documents; Vandenberg memo Aug 1946" },
  { year:1947, mo:7,  w:1.0, cat:"military",      event:"Roswell — USAF issues and retracts 'flying disc' statement", source:"DoD/USAF official records" },
  { year:1947, mo:12, w:1.0, cat:"military",      event:"Project Sign established — first official USAF UAP investigation", source:"USAF official records" },
  { year:1949, mo:2,  w:0.8, cat:"military",      event:"Project Grudge established — pivot to public containment", source:"USAF official records; National Archives" },
  { year:1949, mo:7,  w:0.8, cat:"military",      event:"Project Twinkle established — USAF investigation of green fireballs near nuclear facilities", source:"USAF declassified Project Twinkle final report Nov 1951" },
  { year:1950, mo:10, w:0.8, cat:"international", event:"UK Flying Saucer Working Party established — MoD first official UFO study", source:"UK National Archives DEFE 44/119; Oct 1950" },
  { year:1950, mo:12, w:0.8, cat:"international", event:"Project Magnet established — Transport Canada official UAP study program", source:"Canadian Archives BAC-LAC; approved Dec 2 1950" },
  { year:1952, mo:3,  w:1.0, cat:"military",      event:"Project Blue Book established — USAF official investigation", source:"USAF / National Archives; Britannica" },
  { year:1952, mo:4,  w:0.8, cat:"international", event:"Project Second Storey established — Canadian inter-agency UAP committee", source:"University of Toronto UTIAS; Apr 1952" },
  { year:1952, mo:7,  w:1.0, cat:"military",      event:"Washington DC UAP flyover — radar National Airport + Andrews AFB, jets scrambled", source:"National Archives Identifier 595553" },
  { year:1953, mo:1,  w:1.0, cat:"government",    event:"CIA Robertson Panel — systematic public debunking recommended", source:"CIA declassified report (FOIA); declassified 1966" },
  { year:1966, mo:10, w:1.0, cat:"government",    event:"University of Colorado UFO Project commissioned — Condon Committee, Air Force funded", source:"Condon Report (1968); CU Boulder archives; AARO Historical Report Vol.1" },
  { year:1969, mo:12, w:1.0, cat:"military",      event:"Project Blue Book terminated — 12,618 cases archived, 701 unexplained", source:"USAF termination order Dec 17 1969; Condon Report 1968" },
  { year:1977, mo:1,  w:1.0, cat:"international", event:"France creates GEPAN/GEIPAN within CNES — world's first official government UAP program", source:"CNES official records; GEIPAN official site" },
  { year:1977, mo:10, w:0.8, cat:"international", event:"Operação Prato — Brazilian Air Force official UAP investigation, Colares Island", source:"Brazilian National Archives; Oct 1977" },
  { year:1978, mo:1,  w:1.0, cat:"international", event:"Institute 22 established — Soviet Academy of Sciences + Ministry of Defence UAP program", source:"Wikipedia; Skeptical Inquirer; Moscow Times" },
  { year:1979, mo:1,  w:0.7, cat:"international", event:"CRIDOVNI established — Uruguay Air Force official UAP commission", source:"Established by presidential decree 1979" },
  { year:1997, mo:1,  w:0.8, cat:"international", event:"Chile creates CEFAA — official UAP investigation under Civil Aviation Authority", source:"CEFAA official records; dgac.gob.cl" },
  { year:1997, mo:1,  w:0.8, cat:"international", event:"Project Condign commissioned — UK Defence Intelligence Staff secret UAP study", source:"UK National Archives (released 2006 via FOIA)" },
  { year:2004, mo:11, w:0.8, cat:"military",      event:"USS Nimitz Tic-Tac UAP encounter — classified, officially confirmed 2020", source:"DoD / NAVAIR FOIA; officially confirmed Apr 2020" },
  { year:2007, mo:1,  w:1.0, cat:"government",    event:"AATIP established — $22M DIA-funded secret Pentagon UAP program", source:"DoD / Senate records; Harry Reid statements; FOIA" },
  { year:2009, mo:11, w:0.8, cat:"international", event:"UK MoD closes UFO desk and public hotline — institutional retraction", source:"UK National Archives press release; Dr. David Clarke" },
  { year:2011, mo:1,  w:0.8, cat:"international", event:"Argentina creates CEFAe — Air Force UAP investigation office", source:"Argentine Air Force official records" },
  { year:2017, mo:12, w:0.8, cat:"media",         event:"NYT investigative article reveals AATIP — first public disclosure of secret Pentagon UAP program", source:"NYT Dec 16 2017 (Cooper, Blumenthal, Kean)" },
  { year:2019, mo:9,  w:0.8, cat:"military",      event:"US Navy officially acknowledges UAP video authenticity — spokesman Gradisher", source:"CNN Sep 18 2019; UPI Sep 19 2019" },
  { year:2019, mo:9,  w:0.8, cat:"scientific",    event:"Knuth, Powell & Reali — peer-reviewed quantitative analysis of UAP flight characteristics (Entropy)", source:"Entropy 2019 21(10) 939; DOI 10.3390/e21100939" },
  { year:2020, mo:4,  w:1.0, cat:"government",    event:"Pentagon officially releases and confirms three Navy UAP videos", source:"DoD official statement Apr 27 2020" },
  { year:2020, mo:4,  w:0.8, cat:"international", event:"Japan MoD issues formal UAP documentation directives to Self-Defense Forces", source:"Japan MoD official directive Apr 2020" },
  { year:2020, mo:8,  w:1.0, cat:"military",      event:"UAP Task Force (UAPTF) established by Deputy SecDef Norquist", source:"DoD press release Aug 4 2020" },
  { year:2021, mo:5,  w:0.5, cat:"government",    event:"Obama public statement on unidentified aerial objects", source:"CBS Late Late Show May 2021" },
  { year:2021, mo:6,  w:1.0, cat:"government",    event:"ODNI Preliminary Assessment — 144 UAP cases, 143 unexplained", source:"ODNI report Jun 25 2021" },
  { year:2021, mo:7,  w:0.5, cat:"scientific",    event:"Galileo Project established — Harvard systematic UAP research program", source:"Harvard Crimson Aug 2021; Space.com Jul 26 2021" },
  { year:2021, mo:9,  w:1.0, cat:"scientific",    event:"NASA establishes formal independent UAP study team — Dr. Spergel chair", source:"NASA official announcement Sep 2021" },
  { year:2022, mo:5,  w:1.0, cat:"legislative",   event:"House Intelligence Subcommittee — first public UAP hearing in 50+ years (Bray, Moultrie)", source:"Congress.gov; C-SPAN May 17 2022" },
  { year:2022, mo:7,  w:1.0, cat:"government",    event:"AARO established — first permanent Pentagon UAP office, NDAA 2022 mandate", source:"DoD / NDAA FY2022; DoD press release Jul 15 2022" },
  { year:2023, mo:4,  w:1.0, cat:"legislative",   event:"Senate Armed Services (Gillibrand) — AARO Director Kirkpatrick testifies", source:"Senate Armed Services Committee Apr 19 2023" },
  { year:2023, mo:7,  w:1.0, cat:"legislative",   event:"House Oversight — Grusch, Graves, Fravor sworn testimony on crash retrieval programs", source:"Congress.gov; C-SPAN Jul 26 2023" },
  { year:2023, mo:8,  w:0.5, cat:"scientific",    event:"Sol Foundation established at Stanford — private UAP research foundation", source:"Sol Foundation press release Aug 15 2023" },
  { year:2023, mo:8,  w:0.8, cat:"legislative",   event:"US House UAP Caucus launched — Rep. Burchett bipartisan caucus + ICIG letter", source:"Rep. Tim Burchett official House press release Aug 22 2023" },
  { year:2023, mo:9,  w:1.0, cat:"scientific",    event:"NASA UAP Independent Study Report published", source:"NASA official report Sep 14 2023" },
  { year:2023, mo:11, w:0.5, cat:"scientific",    event:"Sol Foundation inaugural symposium — Karl Nell, Grusch, Gallaudet, McCullough at Stanford", source:"Sol Foundation / Stanford Nov 17-18 2023" },
  { year:2023, mo:12, w:1.0, cat:"legislative",   event:"Bipartisan UAP Disclosure Act — Schumer/Rounds, partial version signed into NDAA FY2024", source:"Senate records; NDAA FY2024; White House" },
  { year:2024, mo:3,  w:1.0, cat:"government",    event:"AARO Historical Record Report Vol.1 published — cleared for open publication", source:"DoD/AARO; cleared for open publication Mar 6 2024" },
  { year:2024, mo:6,  w:0.8, cat:"international", event:"Japan: 80+ Diet members form bipartisan UAP caucus — formal cross-party body", source:"Japan Diet official records Jun 2024" },
  { year:2024, mo:11, w:1.0, cat:"legislative",   event:"House Oversight 'Exposing the Truth' — Elizondo, Gallaudet, Shellenberger, Gold testify", source:"Congress.gov; C-SPAN Nov 13 2024" },
  { year:2024, mo:11, w:1.0, cat:"legislative",   event:"Senate Armed Services (Gillibrand) — AARO Director Kosloski testifies", source:"Senate Armed Services Committee Nov 2024" },
  { year:2024, mo:12, w:1.0, cat:"legislative",   event:"Partial UAP disclosure legislation signed into NDAA FY2025", source:"NDAA FY2025 / White House" },
  { year:2025, mo:1,  w:0.8, cat:"financial",     event:"Deloitte AG GPMESII 2026 Risk Intelligence Report — NHI disclosure classified as Black Swan", source:"Deloitte AG GPMESII 2026 report" },
  { year:2025, mo:9,  w:1.0, cat:"legislative",   event:"House Oversight Task Force — Knapp, Borland, Nuccetelli testify; MQ-9 Yemen footage presented", source:"Congress.gov; C-SPAN Sep 9 2025" },
  { year:2025, mo:10, w:0.8, cat:"scientific",    event:"Villarroel/VASCO — two peer-reviewed papers in Scientific Reports and PASP", source:"Scientific Reports Oct 2025; PASP Oct 2025" },
  { year:2025, mo:11, w:0.5, cat:"media",         event:"'The Age of Disclosure' — 34 senior officials on record, Amazon Prime Video", source:"Amazon Prime Nov 2025" },
  { year:2025, mo:6,  w:0.8, cat:"scientific",    event:"Knuth et al. — 'The New Science of UAP' published in Progress in Aerospace Sciences", source:"Progress in Aerospace Sciences Vol.156, DOI 10.1016/j.paerosci.2025.101097" },
  { year:2026, mo:1,  w:0.5, cat:"financial",     event:"Helen McCaw urges central bank UAP preparedness — former Bank of England analyst", source:"McCaw public statement Jan 2026" },
  { year:2026, mo:2,  w:0.8, cat:"financial",     event:"UFOD ETF launches on CBOE — first UAP disclosure fund, official exchange listing", source:"CBOE official listing Feb 5 2026" },
  { year:2026, mo:2,  w:1.0, cat:"government",    event:"Presidential directive — all federal agencies to release UAP files", source:"DefenseScoop; Truth Social Feb 20 2026" },
  { year:2026, mo:3,  w:0.8, cat:"international", event:"Japan Cabinet Office UAP body formally proposed — AARO equivalent", source:"Japanese Diet records Mar 2026" },
  { year:2026, mo:4,  w:0.5, cat:"legislative",   event:"Rep. Luna states she personally viewed evidence of non-human origin in SCIF", source:"Rep. Luna public statement Apr 29 2026" },
  { year:2026, mo:5,  w:1.0, cat:"government",    event:"PURSUE Tranche 1 — 162 classified files released at war.gov/ufo", source:"DoD / war.gov/ufo May 8 2026" },
  { year:2026, mo:5,  w:1.0, cat:"government",    event:"PURSUE Tranche 2 — additional files, videos, NASA audio released", source:"DoD / war.gov/ufo May 2026" },
  { year:2026, mo:6,  w:0.5, cat:"scientific",    event:"White House-mandated UAP Science Advisory Council — Avi Loeb chair (provisional)", source:"Loeb Medium post; disclosure.org Jun 12 2026" },
  { year:2026, mo:6,  w:1.0, cat:"legislative",   event:"Burlison Amendment BURLIS_087 — full UAPDA text deposited to House Rules Committee for NDAA FY2027", source:"House Rules Committee official amendment BURLIS_087, Jun 17 2026" },
  { year:2026, mo:6,  w:1.0, cat:"government",    event:"PURSUE Tranche 3 — 53 files, 6 videos, NASA audio, mother orb incident", source:"DoD / war.gov/ufo Jun 12 2026" },
];

const CAT_COLORS: Record<string, string> = {
  military:      '#4A7BA7',
  government:    '#C9A84C',
  legislative:   '#A78BFA',
  scientific:    '#4ADE80',
  international: '#FB923C',
  financial:     '#F87171',
  media:         '#22D3EE',
};

const CAT_LABELS: Record<string, string> = {
  military:      'Military',
  government:    'Government',
  legislative:   'Legislative',
  scientific:    'Scientific',
  international: 'International',
  financial:     'Financial',
  media:         'Media',
};

// All years in order, with a visual gap between 2011 and 2017
const ALL_YEARS = [
  1946, 1947, 1949, 1950, 1952, 1953, 1966, 1969, 1977, 1978, 1979, 1997, 2004, 2007, 2009, 2011,
  2017, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
];

const BREAK_AFTER = 2011; // year after which we render the gap

// Category sort order — most institutional at bottom, most indirect at top
const CAT_ORDER: Record<string, number> = {
  military:      0,
  government:    1,
  legislative:   2,
  international: 3,
  scientific:    4,
  financial:     5,
  media:         6,
};

interface Event {
  year: number;
  mo: number;
  w: number;
  cat: string;
  event: string;
  source: string;
}

interface TooltipState {
  event: Event;
}

// Unique key per event for pinned tracking
function evKey(ev: Event) { return `${ev.year}-${ev.mo}-${ev.cat}`; }

export function InstitutionalAcceleration() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [pinned, setPinned] = useState(false);
  const [pinnedKey, setPinnedKey] = useState<string | null>(null);

  const pre2017  = EVENTS.filter(e => e.year < 2017).length;
  const from2017 = EVENTS.filter(e => e.year >= 2017 && e.year < 2026).length;
  const in2026   = EVENTS.filter(e => e.year === 2026).length;

  // Build byYear — sorted by category order (most institutional at bottom = index 0)
  const byYear: Record<number, Event[]> = {};
  ALL_YEARS.forEach(y => {
    byYear[y] = EVENTS
      .filter(e => e.year === y)
      .sort((a, b) => (CAT_ORDER[a.cat] ?? 99) - (CAT_ORDER[b.cat] ?? 99));
  });

  const maxStack = Math.max(...ALL_YEARS.map(y => byYear[y]?.length ?? 0));

  // Layout constants
  const SQ      = 20;
  const GAP     = 3;
  const YEAR_W  = 48;
  const GAP_W   = 32; // width of the break gap
  const PAD_L   = 24;
  const PAD_R   = 12;
  const PAD_T   = 28;
  const PAD_B   = 44;

  // Compute x positions
  let curX = PAD_L;
  const yearX: Record<number, number> = {};
  ALL_YEARS.forEach((y, i) => {
    yearX[y] = curX;
    curX += YEAR_W;
    // Insert break gap after BREAK_AFTER
    if (y === BREAK_AFTER) curX += GAP_W;
  });
  const totalW = curX + PAD_R;
  const totalH = (maxStack + 1) * (SQ + GAP) + PAD_T + PAD_B;

  const sqX = (y: number) => yearX[y] + (YEAR_W - SQ) / 2;
  const sqY = (si: number) => PAD_T + (maxStack - si - 1) * (SQ + GAP);

  // Break line x position
  const breakX = yearX[BREAK_AFTER] + YEAR_W + GAP_W / 2;

  const handleEnter = (ev: Event) => {
    if (pinned) return;
    setTooltip({ event: ev });
  };
  const handleLeave = () => { if (!pinned) setTooltip(null); };
  const handleClick = (e: React.MouseEvent, ev: Event) => {
    e.stopPropagation();
    const key = evKey(ev);
    if (pinned && pinnedKey === key) {
      // clicking same square — unpin
      setPinned(false);
      setPinnedKey(null);
      setTooltip(null);
    } else {
      // new square — pin it, clear previous
      setPinned(true);
      setPinnedKey(key);
      setTooltip({ event: ev });
    }
  };
  const handleDismiss = () => { setPinned(false); setPinnedKey(null); setTooltip(null); };

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8A9BB5', marginBottom: 6 }}>
            LBDG · Institutional Signal Chart
          </p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 500, color: '#1B2A4A', marginBottom: 4 }}>
            64 verified institutional events — 1946 to 2026
          </h3>
          <p style={{ fontSize: 12, color: '#8A9BB5', lineHeight: 1.6 }}>
            Each square = one verified event. Click for source. Opacity reflects weight (1.0 / 0.8 / 0.5).
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { label: '1946–2016', value: pre2017,  sub: '71 years' },
            { label: '2017–2025', value: from2017, sub: '8 years' },
            { label: '2026',      value: in2026,   sub: 'ongoing', gold: true },
          ].map(s => (
            <div key={s.label} style={{
              background: s.gold ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${s.gold ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 8, padding: '10px 14px', textAlign: 'center', minWidth: 80,
            }}>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 8, color: '#8A9BB5', marginBottom: 4, letterSpacing: '0.06em' }}>{s.label}</p>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, fontWeight: 700, color: s.gold ? '#C9A84C' : '#FAF8F4', lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 8, color: '#8A9BB5', marginTop: 3 }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Single unified chart */}
      <div
        style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
        onClick={handleDismiss}
      >
        <svg
          viewBox={`0 0 ${totalW} ${totalH}`}
          width={totalW}
          height={totalH}
          style={{ display: 'block', minWidth: totalW }}
        >
          {/* Era background bands */}
          <rect
            x={0} y={0}
            width={breakX - GAP_W / 2}
            height={totalH}
            fill="rgba(255,255,255,0.015)"
          />
          <rect
            x={breakX + GAP_W / 2}
            y={0}
            width={totalW - breakX - GAP_W / 2}
            height={totalH}
            fill="rgba(201,168,76,0.04)"
          />

          {/* Era labels at top */}
          <text
            x={(breakX - GAP_W / 2) / 2}
            y={12}
            textAnchor="middle"
            fontSize={8}
            fill="#8A9BB5"
            fontFamily="DM Mono, monospace"
            letterSpacing="0.12em"
          >
            1946 – 2016 · CONTAINMENT
          </text>
          <text
            x={breakX + GAP_W / 2 + (totalW - breakX - GAP_W / 2) / 2}
            y={12}
            textAnchor="middle"
            fontSize={8}
            fill="#C9A84C"
            fontFamily="DM Mono, monospace"
            letterSpacing="0.12em"
          >
            2017 – 2026 · ACCELERATION
          </text>

          {/* Break line */}
          <line
            x1={breakX} y1={PAD_T - 8}
            x2={breakX} y2={totalH - PAD_B + 20}
            stroke="rgba(201,168,76,0.3)"
            strokeWidth={1}
            strokeDasharray="4 3"
          />
          <text x={breakX} y={totalH - PAD_B + 34} textAnchor="middle" fontSize={7} fill="rgba(201,168,76,0.5)" fontFamily="DM Mono, monospace">
            2012–2016
          </text>

          {/* Y axis labels */}
          {Array.from({ length: maxStack }, (_, i) => i + 1).map(i =>
            i % 2 === 0 ? (
              <text key={i} x={PAD_L - 4} y={sqY(i - 1) + SQ / 2 + 3}
                textAnchor="end" fontSize={7} fill="#8A9BB5" fontFamily="DM Mono, monospace"
              >{i}</text>
            ) : null
          )}

          {/* Squares */}
          {ALL_YEARS.map(year =>
            (byYear[year] || []).map((ev, si) => {
              const color = CAT_COLORS[ev.cat] || '#C9A84C';
              const isAccel = year >= 2017;
              const isPinned = pinned && pinnedKey === evKey(ev);
              const baseOpacity = ev.w >= 1.0 ? 0.9 : ev.w >= 0.8 ? 0.65 : 0.38;
              return (
                <rect
                  key={`${year}-${si}`}
                  x={sqX(year)} y={sqY(si)}
                  width={SQ} height={SQ} rx={2}
                  fill={color}
                  opacity={isPinned ? 1 : baseOpacity}
                  stroke={isPinned ? '#fff' : isAccel ? 'rgba(201,168,76,0.15)' : 'none'}
                  strokeWidth={isPinned ? 2 : isAccel ? 0.5 : 0}
                  style={{ cursor: 'pointer', transition: 'opacity 0.12s, stroke-width 0.12s' }}
                  onMouseEnter={e => {
                    if (isPinned) return;
                    const el = e.currentTarget as SVGRectElement;
                    el.style.opacity = '1';
                    el.style.stroke = 'rgba(255,255,255,0.6)';
                    el.style.strokeWidth = '1.5';
                  }}
                  onMouseLeave={e => {
                    if (isPinned) return;
                    const el = e.currentTarget as SVGRectElement;
                    el.style.opacity = String(baseOpacity);
                    el.style.stroke = isAccel ? 'rgba(201,168,76,0.15)' : 'none';
                    el.style.strokeWidth = isAccel ? '0.5' : '0';
                  }}
                  onClick={(e) => handleClick(e, ev)}
                />
              );
            })
          )}

          {/* Year labels */}
          {ALL_YEARS.map(year => (
            <text
              key={year}
              x={sqX(year) + SQ / 2}
              y={totalH - PAD_B + 16}
              textAnchor="middle"
              fill={year >= 2017 ? '#C9A84C' : '#8A9BB5'}
              fontSize={year >= 2017 ? 9 : 8}
              fontFamily="DM Mono, monospace"
              fontWeight={year >= 2017 ? '700' : '400'}
            >
              {year}
            </text>
          ))}

          {/* Count labels above columns */}
          {ALL_YEARS.map(year => {
            const count = byYear[year]?.length ?? 0;
            if (!count) return null;
            return (
              <text
                key={`c-${year}`}
                x={sqX(year) + SQ / 2}
                y={sqY(count - 1) - 5}
                textAnchor="middle"
                fill={count >= 5 ? '#E24B4A' : '#8A9BB5'}
                fontSize={count >= 5 ? 10 : 8}
                fontFamily="DM Mono, monospace"
                fontWeight={count >= 5 ? '700' : '400'}
              >
                {count}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Tooltip — fixed height reserved, no layout shift */}
      <div style={{
        marginTop: 10,
        height: 90,
        borderRadius: 8,
        overflow: 'hidden',
        transition: 'background 0.15s, border-color 0.15s',
        background: tooltip ? '#0F1C30' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${tooltip ? (CAT_COLORS[tooltip.event.cat] || '#C9A84C') : 'rgba(255,255,255,0.06)'}`,
      }}>
        {tooltip ? (
          <div style={{ padding: '10px 14px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: CAT_COLORS[tooltip.event.cat], flexShrink: 0 }} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {CAT_LABELS[tooltip.event.cat]} · {tooltip.event.year} · Weight {tooltip.event.w}
              </span>
              {pinned && (
                <button
                  onClick={handleDismiss}
                  style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#8A9BB5', cursor: 'pointer', fontSize: 14, lineHeight: 1, padding: 2 }}
                >✕</button>
              )}
            </div>
            <p style={{ fontSize: 12, color: '#FAF8F4', lineHeight: 1.4, margin: '0 0 3px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {tooltip.event.event}
            </p>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#8A9BB5', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontStyle: 'italic' }}>
              {tooltip.event.source}
            </p>
            {!pinned && (
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 8, color: 'rgba(138,155,181,0.4)', margin: '4px 0 0' }}>
                click to pin · click again to close
              </p>
            )}
          </div>
        ) : (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: 'rgba(138,155,181,0.3)', letterSpacing: '0.1em' }}>
              HOVER A SQUARE TO PREVIEW · CLICK TO PIN
            </p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', marginTop: 16, marginBottom: 10 }}>
        {Object.entries(CAT_LABELS).map(([key, label]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: CAT_COLORS[key], opacity: 0.85, flexShrink: 0 }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#8A9BB5' }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
        {[
          { w: 1.0, label: 'Weight 1.0 — formal institutional action' },
          { w: 0.8, label: 'Weight 0.8 — secondary signal' },
          { w: 0.5, label: 'Weight 0.5 — credentialed/semi-institutional' },
        ].map(s => (
          <div key={s.w} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: '#8A9BB5', opacity: s.w >= 1.0 ? 0.88 : s.w >= 0.8 ? 0.65 : 0.38, flexShrink: 0 }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#8A9BB5' }}>{s.label}</span>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 8, color: 'rgba(138,155,181,0.4)', marginTop: 16, letterSpacing: '0.06em' }}>
        LBDG EDITORIAL · VERIFIED SOURCES ONLY · readyfordisclosure.com · Dataset: LBDG-DVI-Event-Audit.csv
      </p>
    </div>
  );
}
