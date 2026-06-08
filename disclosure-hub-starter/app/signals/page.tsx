'use client';

import { useState, useMemo } from 'react';
import { ExternalLink, Radio, AlertTriangle } from 'lucide-react';
import {
  SIGNALS, SIGNAL_CATEGORIES, CATEGORY_CONFIG, STRENGTH_CONFIG,
  getOverallSignalLevel, type SignalCategory, type SignalStrength
} from '@/data/signals';

// ─── Constants ────────────────────────────────────────────
const DVI = 6.2;
const ISS = 64;

const PHASES = [
  { label: 'Whistleblower\nFilings',    sub: 'Grusch 2023\nProtected disclosures',       done: true,  current: false, parallel: false },
  { label: 'Closed-Door\nBriefings',    sub: 'Congressional Intel\nCommittee briefings', done: true,  current: false, parallel: false },
  { label: 'Official\nInvestigation',   sub: 'AARO created\nNASA study 2022-23',          done: true,  current: false, parallel: false },
  { label: 'Amnesty\nLegislation',      sub: 'UAPDA blocked\nFY2024-2025-2026',           done: false, current: true,  parallel: false },
  { label: 'Mass\nDeclassification',    sub: 'PURSUE launched\nMay 2026 (parallel)',      done: false, current: false, parallel: true  },
  { label: 'Multi-Nation\nAlignment',   sub: 'Japan, EU, Canada\ngaining momentum',       done: false, current: false, parallel: false },
  { label: 'Official\nConfirmation',    sub: 'Executive / multi-gov\nannouncement',       done: false, current: false, parallel: false },
];

const SECTORS = [
  { name: 'Defense — circle of trust',    risk: 10, dir: 'opportunity', scenario: 'B1/B2/C'       },
  { name: 'Cybersecurity / EW',           risk: 8,  dir: 'opportunity', scenario: 'All'            },
  { name: 'Gold / Safe havens',           risk: 7,  dir: 'opportunity', scenario: 'All'            },
  { name: 'Rare earths / Materials',      risk: 6,  dir: 'opportunity', scenario: 'B2'             },
  { name: 'Consumer staples',             risk: 5,  dir: 'watch',       scenario: 'C rotation'     },
  { name: 'Defense — legacy exposure',    risk: 5,  dir: 'watch',       scenario: 'B2/C legal'     },
  { name: 'Media / Information',          risk: 4,  dir: 'watch',       scenario: 'A/B1'           },
  { name: 'Financials / Banks',           risk: 7,  dir: 'risk',        scenario: 'B1/C'           },
  { name: 'Airlines / Travel',            risk: 8,  dir: 'risk',        scenario: 'A/B1/C'         },
  { name: 'Energy (conventional)',        risk: 3,  dir: 'risk',        scenario: 'B2 20-30y only' },
];

const TRIGGERS = [
  { label: 'PURSUE active',              status: 'HIT',   note: '162 files released May 2026'  },
  { label: 'UAPDA amnesty blocked',      status: 'HIT',   note: 'FY2026 — third year'          },
  { label: 'Presidential EO issued',     status: 'HIT',   note: 'Feb 20, 2026'                 },
  { label: 'Financial ETF launched',     status: 'HIT',   note: 'UFOD on CBOE Feb 2026'        },
  { label: 'Central bank warning',       status: 'HIT',   note: 'Bank of England Jan 2026'     },
  { label: 'Amnesty bill signed',        status: 'WATCH', note: 'Not yet — key gate'           },
  { label: 'Defense contractor CDS',     status: 'WATCH', note: 'Monitor quarterly'            },
  { label: 'Multi-gov coordination',     status: 'WATCH', note: 'Japan signals aligning'       },
];

const ACTIONS = [
  { role: 'All organizations',  action: 'Complete Executive Starter Pack readiness check',      toolkit: 'Starter Pack',  href: '/toolkits' },
  { role: 'HR Directors',       action: 'Distribute Manager Action Guide to all team leads',    toolkit: 'HR Toolkit',    href: '/toolkits' },
  { role: 'CFOs / Risk',        action: 'Run sector exposure audit and pre-define triggers',    toolkit: 'Finance Toolkit', href: '/toolkits' },
  { role: 'Legal / Compliance', action: 'Review Reg FD / AMF obligations with outside counsel', toolkit: 'Finance Tool 5', href: '/toolkits' },
];

// ─── Velocity data methodology ───────────────────────────
// Institutional: LBDG weighted scoring of verified institutional events
//   per year (Presidential action=3, sworn testimony=2.5, body created=2,
//   official report/hearing=1.5, intl signal=1). Normalized: 10 = confirmed
//   official multi-government NHI announcement (not yet reached).
// Media: Google Trends 'UAP'/'UFO' worldwide web + US news search,
//   normalized to 2026 all-time peak, then × 0.7 "hedging discount"
//   (10 = mainstream coverage without systematic debunking — not yet reached).
// Source: Google Trends screenshots captured June 2026.
const VELOCITY_DATA = {
  labels: ['2017','2018','2019','2020','2021','2022','2023','2024','2025','2026'],
  institutional: [2,   1,   2,   3.5, 3,   4.5, 6,   4.5, 5,   8  ],
  media:         [0.7, 0.4, 0.5, 1,   1.8, 1.5, 3,   1.5, 2,   7  ],
};

// ─── Helpers ──────────────────────────────────────────────
function formatDate(d: string): string {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const parts = d.split('-');
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return `${months[parseInt(parts[1])-1]} ${parts[0]}`;
  return `${months[parseInt(parts[1])-1]} ${parseInt(parts[2])}, ${parts[0]}`;
}

const dirColors = { opportunity: '#4ADE80', watch: '#FCD34D', risk: '#F87171' };

// ─── Chart component ──────────────────────────────────────
function VelocityChart() {
  const inst  = VELOCITY_DATA.institutional;
  const media = VELOCITY_DATA.media;
  const labels = VELOCITY_DATA.labels;
  const max = 10;
  const W = 560, H = 160, padL = 24, padR = 8, padT = 8, padB = 24;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const px = (i: number) => padL + (i / (labels.length - 1)) * chartW;
  const py = (v: number) => padT + chartH - (v / max) * chartH;

  const instPath = inst.map((v, i) => `${i === 0 ? 'M' : 'L'}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ');
  const mediaPath = media.map((v, i) => `${i === 0 ? 'M' : 'L'}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ');
  const areaPath = `${instPath} L${px(inst.length-1).toFixed(1)},${py(0).toFixed(1)} L${px(0).toFixed(1)},${py(0).toFixed(1)} Z`;

  return (
    <div style={{ position: 'relative', height: '180px', width: '100%' }}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
           style={{ width: '100%', height: '100%' }}
           role="img" aria-label="Institutional signals accelerating sharply in 2026 while media coverage remains low">
        <defs>
          <linearGradient id="instGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[2,4,6,8,10].map(v => (
          <line key={v} x1={padL} x2={W-padR} y1={py(v)} y2={py(v)}
                stroke="#E2E8F0" strokeWidth="0.5" />
        ))}
        {/* Y axis labels */}
        {[0,5,10].map(v => (
          <text key={v} x={padL - 4} y={py(v) + 3} textAnchor="end"
                fontSize="8" fill="#8A9BB5">{v}</text>
        ))}
        {/* X axis labels */}
        {labels.filter((_, i) => i % 2 === 0).map((l, idx) => {
          const i = idx * 2;
          return <text key={l} x={px(i)} y={H - 6} textAnchor="middle"
                       fontSize="8" fill="#8A9BB5">{l}</text>;
        })}
        {/* Area fill */}
        <path d={areaPath} fill="url(#instGrad)" />
        {/* Institutional line */}
        <path d={instPath} fill="none" stroke="#38BDF8" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
        {/* Media dashed line */}
        <path d={mediaPath} fill="none" stroke="#4A5D78" strokeWidth="1.5"
              strokeDasharray="4 3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Data points - institutional */}
        {inst.map((v, i) => (
          <circle key={i} cx={px(i)} cy={py(v)} r="2.5" fill="#38BDF8" />
        ))}
        {/* Data points - media */}
        {media.map((v, i) => (
          <circle key={i} cx={px(i)} cy={py(v)} r="2" fill="#4A5D78" />
        ))}
      </svg>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────
export default function SignalsPage() {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [activeStr, setActiveStr] = useState<string>('all');

  const filtered = useMemo(() =>
    SIGNALS
      .filter(s => activeCat === 'all' || s.category === activeCat)
      .filter(s => activeStr === 'all' || s.strength === activeStr)
      .sort((a, b) => b.date.localeCompare(a.date)),
    [activeCat, activeStr]
  );

  const counts = useMemo(() => ({
    critical: SIGNALS.filter(s => s.strength === 'critical').length,
    high:     SIGNALS.filter(s => s.strength === 'high').length,
    total:    SIGNALS.length,
  }), []);

  const navy = '#1B2A4A';
  const gold = '#C9A84C';
  const light = '#F1F5F9';
  const border = '#E2E8F0';
  const body = '#4A5D78';
  const muted = '#8A9BB5';

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '112px 24px 80px', fontFamily: 'DM Sans, sans-serif' }}>

      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#EF4444', animation: 'pulse 2s infinite' }} />
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: muted, letterSpacing: '0.15em' }}>
            LBDG · INSTITUTIONAL DISCLOSURE TRACKER · LAST UPDATED MAY 2026
          </span>
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, color: navy, marginBottom: '8px', lineHeight: 1.1 }}>
          Disclosure Signal Board
        </h1>
        <p style={{ fontSize: '15px', color: body, maxWidth: '600px', lineHeight: 1.7 }}>
          Verified institutional signals tracking the bureaucratic, legislative, and financial velocity of the disclosure process. Sources: DoD, NASA, CNES, Deloitte AG, Bank of England, CBOE, U.S. Congress, Japan Diet. No unverified speculation.
        </p>
      </div>

      {/* ROW 1: DVI + ISS + Counts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginBottom: '14px' }}>

        {/* DVI */}
        <div style={{ background: navy, borderRadius: '8px', padding: '24px', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-40px', top: '-40px', width: '180px', height: '180px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: 'rgba(201,168,76,0.8)', letterSpacing: '0.18em', marginBottom: '12px' }}>
            DISCLOSURE VELOCITY INDEX (DVI)
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '14px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 700, color: gold, lineHeight: 1 }}>{DVI}</span>
            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.4)' }}>/10</span>
            <span style={{ padding: '3px 10px', borderRadius: '3px', background: 'rgba(239,68,68,0.2)', color: '#FCA5A5', fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em' }}>ELEVATED</span>
          </div>
          <div style={{ position: 'relative', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '10px' }}>
            <div style={{ width: `${DVI * 10}%`, height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg, #4ADE80, #C9A84C, #EF4444)' }} />
            <div style={{ position: 'absolute', left: `${DVI * 10}%`, top: '-4px', width: '2px', height: '16px', background: 'white', borderRadius: '1px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'DM Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
            <span>1 — Denial</span><span>4 — Leaks</span><span>7 — Pre-Disclosure</span><span>10 — Confirmed</span>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
            Active declassification (PURSUE), presidential directive, financial sector pricing (UFOD ETF). System jammed at amnesty legislation — the last institutional gate before open confirmation.
          </p>
        </div>

        {/* ISS */}
        <div style={{ background: '#FAF8F4', border: `1px solid ${border}`, borderRadius: '8px', padding: '24px' }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.15em', marginBottom: '12px' }}>
            SINCERITY SCORE (ISS)
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', fontWeight: 700, color: navy, lineHeight: 1 }}>{ISS}</span>
            <span style={{ fontSize: '18px', color: muted }}>%</span>
          </div>
          <div style={{ height: '6px', background: border, borderRadius: '3px', marginBottom: '10px' }}>
            <div style={{ width: `${ISS}%`, height: '100%', borderRadius: '3px', background: '#C9A84C' }} />
          </div>
          <p style={{ fontSize: '12px', color: body, lineHeight: 1.6 }}>
            PURSUE files, sworn testimony, bipartisan hearings. Offset by pre-reviewed documents and UAPDA blocked twice. Improving but not yet audited military telemetry.
          </p>
        </div>

        {/* Counts */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
          {[
            { label: 'Critical', value: counts.critical, color: '#EF4444' },
            { label: 'High',     value: counts.high,     color: '#F97316' },
            { label: 'Total',    value: counts.total,    color: muted     },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ flex: 1, background: '#FAF8F4', border: `1px solid ${border}`, borderRadius: '8px', padding: '14px 16px' }}>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color, letterSpacing: '0.12em', marginBottom: '4px' }}>{label.toUpperCase()} SIGNALS</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '34px', fontWeight: 700, color: navy, lineHeight: 1 }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HORIZON TIMELINE */}
      <div style={{ background: '#FAF8F4', border: `1px solid ${border}`, borderRadius: '8px', padding: '24px', marginBottom: '14px' }}>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.18em', marginBottom: '16px' }}>
          DISCLOSURE HORIZON — INSTITUTIONAL PHASE TRACKER
        </div>
        <div style={{ overflowX: 'auto', marginLeft: '-4px', marginRight: '-4px', paddingLeft: '4px', paddingRight: '4px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(120px, 1fr))', gap: '4px', minWidth: '700px' }}>
          {PHASES.map((phase, i) => {
            const bg     = phase.done ? navy : phase.current ? '#92600A' : phase.parallel ? 'rgba(83,74,183,0.15)' : 'white';
            const textC  = phase.done ? '#B5D4F4' : phase.current ? '#FCD34D' : phase.parallel ? '#7F77DD' : muted;
            const subC   = phase.done ? 'rgba(181,212,244,0.7)' : phase.current ? 'rgba(252,211,77,0.7)' : phase.parallel ? 'rgba(127,119,221,0.7)' : '#CBD5E1';
            const borderC = phase.done ? navy : phase.current ? '#C9A84C' : phase.parallel ? '#534AB7' : border;
            return (
              <div key={i} style={{ background: bg, border: `1px solid ${borderC}`, borderRadius: '4px', padding: '10px 8px', position: 'relative' }}>
                {phase.current && (
                  <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#C9A84C', color: '#1B2A4A', fontSize: '9px', padding: '1px 6px', borderRadius: '2px', whiteSpace: 'nowrap', fontFamily: 'DM Mono, monospace', fontWeight: 700 }}>
                    CURRENT
                  </div>
                )}
                {phase.parallel && (
                  <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#534AB7', color: 'white', fontSize: '9px', padding: '1px 6px', borderRadius: '2px', whiteSpace: 'nowrap', fontFamily: 'DM Mono, monospace', fontWeight: 700 }}>
                    PARALLEL
                  </div>
                )}
                <div style={{ fontSize: '11px', fontWeight: 500, color: textC, lineHeight: 1.35, whiteSpace: 'pre-line' }}>{phase.label}</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: subC, lineHeight: 1.35, marginTop: '4px', whiteSpace: 'pre-line' }}>{phase.sub}</div>
              </div>
            );
          })}
        </div>
        </div>
        <p style={{ fontSize: '12px', color: body, marginTop: '12px', lineHeight: 1.6 }}>
          <span style={{ padding: '2px 8px', borderRadius: '3px', background: 'rgba(201,168,76,0.15)', color: '#92600A', fontFamily: 'DM Mono, monospace', fontSize: '10px', marginRight: '8px' }}>CURRENT BOTTLENECK</span>
          System cleared phases 1–3. Phase 4 (amnesty legislation) blocked from NDAA FY2024, FY2025, FY2026. PURSUE (phase 5) running in parallel via executive order — signaling pressure to bypass the legislative gate.
        </p>
      </div>

      {/* ROW 3: Heatmap + Velocity */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px', marginBottom: '14px' }}>

        {/* Sector Heatmap */}
        <div style={{ background: '#FAF8F4', border: `1px solid ${border}`, borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.15em', marginBottom: '14px' }}>
            SECTOR RISK HEATMAP — DVI {DVI}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {SECTORS.map(s => {
              const c = s.dir === 'opportunity' ? '#4ADE80' : s.dir === 'watch' ? '#FCD34D' : '#F87171';
              const bg = s.dir === 'opportunity' ? 'rgba(74,222,128,0.12)' : s.dir === 'watch' ? 'rgba(252,211,77,0.12)' : 'rgba(248,113,113,0.12)';
              return (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ fontSize: '12px', color: navy, width: '185px', flexShrink: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.name}</div>
                  <div style={{ flex: 1, height: '14px', background: border, borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.risk * 10}%`, background: c, borderRadius: '2px' }} />
                  </div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: c === '#4ADE80' ? '#166534' : c === '#FCD34D' ? '#92600A' : '#991B1B', width: '80px', flexShrink: 0 }}>{s.scenario}</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
            {[{ label: 'Opportunity', c: '#4ADE80' }, { label: 'Watch', c: '#FCD34D' }, { label: 'High risk', c: '#F87171' }].map(({ label, c }) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: body }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: c }} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Velocity Chart */}
        <div style={{ background: '#FAF8F4', border: `1px solid ${border}`, borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.15em', marginBottom: '14px' }}>
            SIGNAL VELOCITY — INSTITUTIONAL VS MEDIA ATTENTION
          </div>
          <VelocityChart />
          <div style={{ display: 'flex', gap: '16px', marginTop: '10px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: body }}>
              <span style={{ width: '16px', height: '2px', background: '#38BDF8', display: 'inline-block' }} />
              Institutional action (LBDG weighted scoring)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: body }}>
              <span style={{ width: '16px', height: '0', borderTop: '2px dashed #4A5D78', display: 'inline-block' }} />
              Media coverage (Google Trends ×0.7 hedging discount)
            </span>
          </div>
          <p style={{ fontSize: '12px', color: body, marginTop: '10px', lineHeight: 1.6 }}>
            <strong>2026: the lines are converging for the first time.</strong> Institutional action (8/10) now nearly matches media coverage (7/10) — the highest media score ever, driven by PURSUE. But "10" on both axes means something that has not happened yet: official confirmation treated without hedging, no debunkers invited, NHI as established fact. The preparation window is closing, not closed.
          </p>
        </div>
      </div>

      {/* TRIGGER ALERT BOX */}
      <div style={{ borderLeft: '3px solid #EF4444', borderTop: '1px solid rgba(239,68,68,0.25)', borderRight: '1px solid rgba(239,68,68,0.25)', borderBottom: '1px solid rgba(239,68,68,0.25)', borderRadius: '0 8px 8px 0', padding: '20px 24px', marginBottom: '16px', background: 'rgba(239,68,68,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#EF4444' }} />
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: '#EF4444', letterSpacing: '0.18em' }}>SYSTEM ALERT — TRIGGER STATUS</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px', marginBottom: '16px' }}>
          {TRIGGERS.map(t => {
            const isHit = t.status === 'HIT';
            const c = isHit ? '#EF4444' : '#F97316';
            return (
              <div key={t.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px 12px', background: isHit ? 'rgba(239,68,68,0.04)' : 'rgba(249,115,22,0.04)', borderRadius: '6px', border: `0.5px solid ${c}30` }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: c, marginTop: '4px', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: navy }}>{t.label}</div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: muted }}>{t.note}</div>
                </div>
                <span style={{ padding: '2px 8px', borderRadius: '3px', background: `${c}18`, color: c, fontFamily: 'DM Mono, monospace', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', flexShrink: 0 }}>
                  {t.status}
                </span>
              </div>
            );
          })}
        </div>
        <div style={{ borderTop: `1px solid ${border}`, paddingTop: '14px' }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.12em', marginBottom: '10px' }}>
            RECOMMENDED ACTIONS AT CURRENT DVI {DVI}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
            {ACTIONS.map(a => (
              <a key={a.role} href={a.href} style={{ padding: '12px 14px', background: 'white', borderRadius: '6px', border: `1px solid ${border}`, textDecoration: 'none', display: 'block' }}>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: '#C9A84C', letterSpacing: '0.08em', marginBottom: '4px' }}>
                  {a.role} · {a.toolkit}
                </div>
                <div style={{ fontSize: '13px', color: navy, lineHeight: 1.4 }}>{a.action} →</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.12em' }}>CATEGORY</span>
          {SIGNAL_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              style={{
                padding: '4px 10px', borderRadius: '4px', cursor: 'pointer',
                fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.05em',
                border: `1px solid ${activeCat === cat.id ? '#1B2A4A' : border}`,
                background: activeCat === cat.id ? '#1B2A4A' : 'white',
                color: activeCat === cat.id ? 'white' : muted,
                transition: 'all 0.15s',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.12em' }}>STRENGTH</span>
          {(['all', 'critical', 'high', 'medium', 'low'] as const).map(s => {
            const c = s === 'all' ? navy : STRENGTH_CONFIG[s as SignalStrength]?.color || navy;
            return (
              <button
                key={s}
                onClick={() => setActiveStr(s)}
                style={{
                  padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase',
                  fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.06em',
                  border: `1px solid ${activeStr === s ? c : border}`,
                  background: activeStr === s ? `${c}18` : 'white',
                  color: activeStr === s ? c : muted,
                  transition: 'all 0.15s',
                }}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: muted, marginBottom: '14px', letterSpacing: '0.1em' }}>
        {filtered.length} SIGNAL{filtered.length !== 1 ? 'S' : ''} — MOST RECENT FIRST
      </div>

      {/* SIGNAL CARDS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.map(signal => {
          const catCfg = CATEGORY_CONFIG[signal.category];
          const strCfg = STRENGTH_CONFIG[signal.strength];
          return (
            <div
              key={signal.id}
              style={{
                background: 'white', borderRadius: '0 6px 6px 0',
                border: `1px solid ${border}`, borderLeft: `3px solid ${strCfg.dot}`,
                padding: '16px 20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ padding: '2px 8px', borderRadius: '3px', fontSize: '10px', fontFamily: 'DM Mono, monospace', fontWeight: 600, letterSpacing: '0.08em', color: strCfg.color, background: `${strCfg.dot}18`, border: `0.5px solid ${strCfg.dot}40`, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: strCfg.dot }} />
                    {strCfg.label}
                  </span>
                  <span style={{ padding: '2px 8px', borderRadius: '3px', fontSize: '10px', fontFamily: 'DM Mono, monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: catCfg.color, background: catCfg.bg, border: `0.5px solid ${catCfg.border}` }}>
                    {signal.category}
                  </span>
                  {signal.isNew && (
                    <span style={{ padding: '2px 8px', borderRadius: '3px', fontSize: '10px', fontFamily: 'DM Mono, monospace', fontWeight: 700, color: 'white', background: '#EF4444', letterSpacing: '0.08em' }}>NEW</span>
                  )}
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted }}>{signal.country}</span>
                </div>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: muted }}>{formatDate(signal.date)}</span>
              </div>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                {signal.institution}
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: 600, color: navy, marginBottom: '6px', lineHeight: 1.3 }}>
                {signal.title}
              </h3>
              <p style={{ fontSize: '13px', color: body, lineHeight: 1.7, marginBottom: signal.sourceUrl ? '10px' : '0' }}>
                {signal.description}
              </p>
              {(signal.sourceUrl || signal.sourceLabel) && (
                signal.sourceUrl ? (
                  <a href={signal.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#C9A84C', textDecoration: 'none' }}>
                    <ExternalLink size={10} />
                    {signal.sourceLabel}
                  </a>
                ) : (
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: muted }}>{signal.sourceLabel}</span>
                )
              )}
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <div style={{ marginTop: '48px', padding: '16px 20px', background: '#F8F9FA', borderRadius: '6px', border: `1px solid ${border}` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <AlertTriangle size={13} style={{ color: muted, marginTop: '2px', flexShrink: 0 }} />
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: muted, lineHeight: 1.6 }}>
            All signals derived exclusively from verifiable institutional sources. DVI and ISS are LBDG editorial assessments — not predictions of disclosure timing. Sector heatmap reflects inference from documented market precedents. This page does not constitute financial, legal, or investment advice.
          </p>
        </div>
      </div>
    </div>
  );
}
