'use client';

import { useState, useMemo } from 'react';
import { ExternalLink, Radio, AlertTriangle } from 'lucide-react';
import {
  SIGNALS, SIGNAL_CATEGORIES, CATEGORY_CONFIG, STRENGTH_CONFIG,
  getOverallSignalLevel, type SignalCategory, type SignalStrength
} from '@/data/signals';

// ─── Methodology constants ────────────────────────────────
const DVI_METHODOLOGY = [
  { dimension: 'Executive action',       score: 1.5, max: 2, note: 'Presidential directive (Truth Social, Feb 2026) + PURSUE launched — NOT a formal EO. No NDA releases, no amnesty, no official press conference yet.' },
  { dimension: 'Legislative action',     score: 0.7, max: 2, note: 'UAPDA blocked 3× (FY2024-2025-2026) but Burlison confirms active push via Rules Committee for NDAA FY2027 (June 2026). Multiple hearings on record. AARO created by NDAA 2022 — but accused of catch-and-kill.' },
  { dimension: 'Witness testimony',      score: 1.3, max: 2, note: 'Grusch sworn to Congress but secondhand. Fravor sworn but craft only (not NHI beings). Stratton firsthand but in documentary — not under oath. Critical gap: no firsthand congressional sworn testimony of NHI beings.' },
  { dimension: 'Financial / institutional', score: 1.7, max: 2, note: 'UFOD ETF on CBOE + Deloitte Black Swan + Bank of England warning + Avi Loeb Science Council mandated by White House/AARO/ODNI/FBI (June 2026)' },
  { dimension: 'International alignment', score: 1.0, max: 2, note: 'Japan Cabinet proposal + GEIPAN + EU — active but not coordinated' },
];

const ISS_METHODOLOGY = [
  { dimension: 'Source authority',   score: 20, max: 25, note: 'Secretary of State + former program director + 34 officials — on record in documentary, not official press conference' },
  { dimension: 'Verifiability',      score: 16, max: 25, note: 'PURSUE Tranche 3 released June 12 2026 — 53 files, 6 videos, NASA audio. Files public but selective — no physical evidence released publicly' },
  { dimension: 'Consistency',        score: 15, max: 25, note: 'AARO Historical Report contradicts Grusch; UAPDA blocked vs EO signed — mixed signals' },
  { dimension: 'Completeness',       score: 13, max: 25, note: 'Clearly partial — most significant classified materials still withheld' },
];

// ─── Info Modal Component ─────────────────────────────────
interface InfoModalProps {
  type: 'dvi' | 'iss';
  onClose: () => void;
}

function InfoModal({ type, onClose }: InfoModalProps) {
  const isDVI = type === 'dvi';
  const navy = '#1B2A4A';
  const gold = '#C9A84C';
  const border = '#E2E8F0';
  const body = '#4A5D78';
  const muted = '#8A9BB5';
  const light = '#F1F5F9';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(27,42,74,0.6)', backdropFilter: 'blur(4px)' }} onClick={onClose} />
      <div style={{ position: 'relative', width: '100%', maxWidth: '520px', background: 'white', borderRadius: '12px', border: `1px solid ${border}`, padding: '24px', boxShadow: '0 20px 60px rgba(27,42,74,0.2)' }}>

        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: muted, fontSize: '18px', lineHeight: 1 }}>✕</button>

        <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: `1px solid ${border}` }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>
            Methodology — {isDVI ? 'DVI' : 'ISS'}
          </div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 700, color: navy }}>
            {isDVI ? 'Disclosure Velocity Index' : 'Institutional Sincerity Score'}
          </div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', color: body, marginTop: '6px', lineHeight: 1.5 }}>
            {isDVI
              ? 'Logarithmic index of institutional UAP signal density over a 36-month rolling window, compared to the 1946–2016 historical baseline. Scale: 0–3 Baseline · 3–5 Monitor · 5–7 Readiness · 7–9 Activation · 9–10 Critical.'
              : '4 dimensions scored 0–25% each, total out of 100%. Measures quality and credibility of released information, not just volume. A 100% requires complete, verifiable, consistent data from highest authority — not yet reached.'
            }
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          {(isDVI ? DVI_METHODOLOGY : ISS_METHODOLOGY).map((item, idx) => {
            const pct = (item.score / item.max) * 100;
            const color = pct >= 80 ? '#1A6B3C' : pct >= 60 ? '#C9A84C' : pct >= 40 ? '#BA7517' : '#E24B4A';
            return (
              <div key={idx} style={{ padding: '10px 12px', background: light, borderRadius: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '13px', fontWeight: 600, color: navy }}>
                    {item.dimension}
                  </span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', fontWeight: 700, color }}>
                    {item.score} / {item.max}{isDVI ? '' : '%'}
                  </span>
                </div>
                <div style={{ height: '4px', background: border, borderRadius: '2px', marginBottom: '6px' }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: '2px', transition: 'width 0.3s' }} />
                </div>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: muted, lineHeight: 1.5, margin: 0 }}>
                  {item.note}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', background: navy, borderRadius: '8px' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>
            CURRENT {isDVI ? 'DVI' : 'ISS'} SCORE
          </span>
          <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '24px', fontWeight: 700, color: gold }}>
            {isDVI ? '6.5 / 10' : '64%'}
          </span>
        </div>

        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, marginTop: '12px', lineHeight: 1.5, textAlign: 'center' }}>
          LBDG editorial assessment · Updated June 2026 · Sources: DoD, AARO, ODNI, U.S. Congress, Deloitte AG, Bank of England, CBOE, Avi Loeb / Disclosure Foundation
        </p>
      </div>
    </div>
  );
}

// ─── Constants ────────────────────────────────────────────
const DVI = 6.5;
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
  { label: 'PURSUE active',              status: 'HIT',   note: '3 tranches released — 275+ files, 6 videos, NASA audio'  },
  { label: 'UAPDA amnesty blocked',      status: 'HIT',   note: 'FY2026 — third year, Rules process push ongoing'          },
  { label: 'Presidential EO issued',     status: 'HIT',   note: 'Feb 20, 2026'                 },
  { label: 'Financial ETF launched',     status: 'HIT',   note: 'UFOD on CBOE Feb 2026'        },
  { label: 'Central bank warning',       status: 'HIT',   note: 'Bank of England Jan 2026'     },
  { label: 'Science Council mandated',   status: 'HIT',   note: 'Loeb / White House + AARO + ODNI + FBI Jun 2026' },
  { label: 'Amnesty bill signed',        status: 'WATCH', note: 'Not yet — key gate'           },
  { label: 'Multi-gov coordination',     status: 'WATCH', note: 'Japan signals aligning'       },
];

const ACTIONS = [
  { role: 'All organizations',  action: 'Complete Executive Starter Pack readiness check',      toolkit: 'Starter Pack',  href: '/toolkits' },
  { role: 'HR Directors',       action: 'Distribute Manager Action Guide to all team leads',    toolkit: 'HR Toolkit',    href: '/toolkits' },
  { role: 'CFOs / Risk',        action: 'Run sector exposure audit and pre-define triggers',    toolkit: 'Finance Toolkit', href: '/toolkits' },
  { role: 'Legal / Compliance', action: 'Review Reg FD / AMF obligations with outside counsel', toolkit: 'Finance Tool 5', href: '/toolkits' },
];

const VELOCITY_DATA = {
  labels: ['2017','2018','2019','2020','2021','2022','2023','2024','2025','2026'],
  institutional: [2,   1,   2,   3.5, 3,   4.5, 6,   4.5, 5,   8.5],
  media:         [0.7, 0.4, 0.5, 1,   1.8, 1.5, 3,   1.5, 2,   7  ],
};

// ─── DVI Scale ────────────────────────────────────────────
const DVI_SCALE = [
  { range: '0 – 3', level: 'BASELINE',   color: '#4A9A5E' },
  { range: '3 – 5', level: 'MONITOR',    color: '#6B8CAE' },
  { range: '5 – 7', level: 'READINESS',  color: '#E8A030' },
  { range: '7 – 9', level: 'ACTIVATION', color: '#E24B4A' },
  { range: '9 – 10',level: 'CRITICAL',   color: '#9B2C2C' },
];

const currentLevel = DVI >= 9 ? 'CRITICAL' : DVI >= 7 ? 'ACTIVATION' : DVI >= 5 ? 'READINESS' : DVI >= 3 ? 'MONITOR' : 'BASELINE';
const currentLevelColor = DVI >= 9 ? '#9B2C2C' : DVI >= 7 ? '#E24B4A' : DVI >= 5 ? '#E8A030' : DVI >= 3 ? '#6B8CAE' : '#4A9A5E';

// ─── Helpers ──────────────────────────────────────────────
function formatDate(d: string): string {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const parts = d.split('-');
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return `${months[parseInt(parts[1])-1]} ${parts[0]}`;
  return `${months[parseInt(parts[1])-1]} ${parseInt(parts[2])}, ${parts[0]}`;
}

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
        {[2,4,6,8,10].map(v => (
          <line key={v} x1={padL} x2={W-padR} y1={py(v)} y2={py(v)} stroke="#E2E8F0" strokeWidth="0.5" />
        ))}
        {[0,5,10].map(v => (
          <text key={v} x={padL - 4} y={py(v) + 3} textAnchor="end" fontSize="8" fill="#8A9BB5">{v}</text>
        ))}
        {labels.filter((_, i) => i % 2 === 0).map((l, idx) => {
          const i = idx * 2;
          return <text key={l} x={px(i)} y={H - 6} textAnchor="middle" fontSize="8" fill="#8A9BB5">{l}</text>;
        })}
        <path d={areaPath} fill="url(#instGrad)" />
        <path d={instPath} fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={mediaPath} fill="none" stroke="#4A5D78" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" strokeLinejoin="round" />
        {inst.map((v, i) => (
          <circle key={i} cx={px(i)} cy={py(v)} r="2.5" fill="#38BDF8" />
        ))}
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
  const [infoModal, setInfoModal] = useState<'dvi' | 'iss' | null>(null);
  const [showAllFeed, setShowAllFeed] = useState(false);

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
    total:      SIGNALS.length,
  }), []);

  const navy = '#1B2A4A';
  const gold = '#C9A84C';
  const light = '#F1F5F9';
  const border = '#E2E8F0';
  const body = '#4A5D78';
  const muted = '#8A9BB5';

  const feedSignals = useMemo(() =>
    [...SIGNALS].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '112px 24px 80px', fontFamily: 'DM Sans, sans-serif' }}>
      {infoModal && <InfoModal type={infoModal} onClose={() => setInfoModal(null)} />}

      {/* ─── INSTITUTIONAL SIGNAL FEED ─── */}
      <div style={{ marginBottom: '48px', paddingBottom: '40px', borderBottom: `1px solid ${border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 0 2px rgba(239,68,68,0.2)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Institutional Signal Feed · Updated June 2026
            </span>
          </div>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#EF4444', letterSpacing: '0.08em' }}>
            {SIGNALS.filter(s => s.isNew).length} NEW THIS WEEK
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {feedSignals
            .slice(0, showAllFeed ? feedSignals.length : 5)
            .map(signal => {
              const catCfg = CATEGORY_CONFIG[signal.category];
              const strCfg = STRENGTH_CONFIG[signal.strength];
              return (
                <div
                  key={signal.id}
                  style={{
                    background: 'white', borderRadius: '0 6px 6px 0',
                    border: `1px solid ${border}`, borderLeft: `3px solid ${strCfg.dot}`,
                    padding: '14px 18px', display: 'grid',
                    gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'start',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '5px' }}>
                      <span style={{ padding: '2px 7px', borderRadius: '3px', fontSize: '9px', fontFamily: 'DM Mono, monospace', fontWeight: 600, letterSpacing: '0.08em', color: strCfg.color, background: `${strCfg.dot}18`, border: `0.5px solid ${strCfg.dot}40` }}>
                        {strCfg.label}
                      </span>
                      <span style={{ padding: '2px 7px', borderRadius: '3px', fontSize: '9px', fontFamily: 'DM Mono, monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: catCfg.color, background: catCfg.bg, border: `0.5px solid ${catCfg.border}` }}>
                        {signal.category}
                      </span>
                      {signal.isNew && (
                        <span style={{ padding: '2px 7px', borderRadius: '3px', fontSize: '9px', fontFamily: 'DM Mono, monospace', fontWeight: 700, color: 'white', background: '#EF4444' }}>NEW</span>
                      )}
                      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted }}>{signal.country}</span>
                    </div>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', color: muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>
                      {signal.institution}
                    </div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '14px', fontWeight: 600, color: navy, lineHeight: 1.35, marginBottom: '4px' }}>
                      {signal.title}
                    </div>
                    <div style={{ fontSize: '12px', color: body, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {signal.description}
                    </div>
                    {signal.sourceUrl && (
                      <a href={signal.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px', fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#C9A84C', textDecoration: 'none' }}>
                        <ExternalLink size={10} />
                        {signal.sourceLabel || 'Source'}
                      </a>
                    )}
                  </div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, whiteSpace: 'nowrap', textAlign: 'right' }}>
                    {formatDate(signal.date)}
                  </div>
                </div>
              );
            })
          }
        </div>

        {feedSignals.length > 5 && (
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button
              onClick={() => setShowAllFeed(!showAllFeed)}
              style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '8px 20px', borderRadius: '6px', border: `1px solid ${border}`, background: 'transparent', color: muted, cursor: 'pointer' }}
            >
              {showAllFeed ? 'Show fewer signals ↑' : `Show all ${feedSignals.length} signals ↓`}
            </button>
          </div>
        )}
      </div>

      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#EF4444', animation: 'pulse 2s infinite' }} />
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: muted, letterSpacing: '0.15em' }}>
            LBDG · INSTITUTIONAL DISCLOSURE TRACKER · LAST UPDATED JUNE 2026
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
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: 'rgba(201,168,76,0.8)', letterSpacing: '0.18em', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            DISCLOSURE VELOCITY INDEX (DVI)
            <button onClick={() => setInfoModal('dvi')} style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.1)', color: 'rgba(201,168,76,0.8)', fontSize: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'serif', fontStyle: 'italic', fontWeight: 'bold', lineHeight: 1 }}>i</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '14px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 700, color: gold, lineHeight: 1 }}>{DVI}</span>
            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.4)' }}>/10</span>
            <span style={{ padding: '3px 10px', borderRadius: '3px', background: `${currentLevelColor}30`, color: currentLevelColor === '#E8A030' ? '#FCD34D' : '#FCA5A5', fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', border: `1px solid ${currentLevelColor}50` }}>
              {currentLevel}
            </span>
          </div>
          <div style={{ position: 'relative', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '10px' }}>
            <div style={{ width: `${DVI * 10}%`, height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg, #4ADE80, #C9A84C, #EF4444)' }} />
            <div style={{ position: 'absolute', left: `${DVI * 10}%`, top: '-4px', width: '2px', height: '16px', background: 'white', borderRadius: '1px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'DM Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
            <span>0 — Baseline</span><span>3 — Monitor</span><span>5 — Readiness</span><span>7 — Activation</span>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
            Science Council mandated by White House + AARO + ODNI + FBI (June 2026). PURSUE Tranche 3 released. Active declassification accelerating. System jammed at amnesty legislation — the last institutional gate before open confirmation.
          </p>
        </div>

        {/* ISS */}
        <div style={{ background: '#FAF8F4', border: `1px solid ${border}`, borderRadius: '8px', padding: '24px' }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.15em', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            SINCERITY SCORE (ISS)
            <button onClick={() => setInfoModal('iss')} style={{ width: '16px', height: '16px', borderRadius: '50%', border: `1px solid ${border}`, background: light, color: muted, fontSize: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'serif', fontStyle: 'italic', fontWeight: 'bold', lineHeight: 1 }}>i</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', fontWeight: 700, color: navy, lineHeight: 1 }}>{ISS}</span>
            <span style={{ fontSize: '18px', color: muted }}>%</span>
          </div>
          <div style={{ height: '6px', background: border, borderRadius: '3px', marginBottom: '10px' }}>
            <div style={{ width: `${ISS}%`, height: '100%', borderRadius: '3px', background: '#C9A84C' }} />
          </div>
          <p style={{ fontSize: '12px', color: body, lineHeight: 1.6 }}>
            PURSUE Tranche 3 + Science Council mandate improve verifiability. Offset by selective document release and UAPDA still blocked. Improving incrementally.
          </p>
        </div>

        {/* Counts */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
          {[
            { label: 'Critical', value: counts.critical, color: '#EF4444' },
            { label: 'High',     value: counts.high,     color: '#F97316' },
            { label: 'Total',      value: counts.total,      color: muted     },
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
        <div style={{ background: '#FAF8F4', border: `1px solid ${border}`, borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.15em', marginBottom: '14px' }}>
            SECTOR RISK HEATMAP — DVI {DVI}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {SECTORS.map(s => {
              const c = s.dir === 'opportunity' ? '#4ADE80' : s.dir === 'watch' ? '#FCD34D' : '#F87171';
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
            <strong>2026: the lines are converging for the first time.</strong> Institutional action (8.5/10) now outpaces media coverage (7/10). Science Council mandate + PURSUE Tranche 3 push institutional score to highest ever recorded. The preparation window is closing, not closed.
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
            RECOMMENDED ACTIONS AT CURRENT DVI {DVI} — {currentLevel}
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
              style={{ padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.05em', border: `1px solid ${activeCat === cat.id ? '#1B2A4A' : border}`, background: activeCat === cat.id ? '#1B2A4A' : 'white', color: activeCat === cat.id ? 'white' : muted, transition: 'all 0.15s' }}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.12em' }}>STRENGTH</span>
          {(['all', 'critical', 'high', 'medium', 'low'] as const).map(s => {
            const cfg = s === 'all' ? { color: navy, label: 'ALL' } : { color: STRENGTH_CONFIG[s as SignalStrength]?.color || navy, label: s.toUpperCase() };
            return (
              <button
                key={s}
                onClick={() => setActiveStr(s)}
                style={{ padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.06em', border: `1px solid ${activeStr === s ? cfg.color : border}`, background: activeStr === s ? `${cfg.color}18` : 'white', color: activeStr === s ? cfg.color : muted, transition: 'all 0.15s' }}
              >
                {cfg.label}
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
            <div key={signal.id} style={{ background: 'white', borderRadius: '0 6px 6px 0', border: `1px solid ${border}`, borderLeft: `3px solid ${strCfg.dot}`, padding: '16px 20px' }}>
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
            All signals derived exclusively from verifiable institutional sources. DVI and ISS are LBDG editorial assessments — not predictions of disclosure timing. Scale: 0–3 Baseline · 3–5 Monitor · 5–7 Readiness · 7–9 Activation · 9–10 Critical. This page does not constitute financial, legal, or investment advice.
          </p>
        </div>
      </div>
    </div>
  );
}
