'use client';

import { useState, useMemo } from 'react';
import { ExternalLink, AlertTriangle } from 'lucide-react';
import {
  SIGNALS, SIGNAL_CATEGORIES, CATEGORY_CONFIG, STRENGTH_CONFIG,
  type SignalStrength
} from '@/data/signals';
import { InstitutionalAcceleration } from '@/components/InstitutionalAcceleration';
import { DVIBadge } from '@/components/DVIBadge';

const DVI = 6.6;

const PHASES = [
  { label: 'Whistleblower\nFilings',    sub: 'Grusch 2023\nProtected disclosures',       done: true,  current: false, parallel: false },
  { label: 'Closed-Door\nBriefings',    sub: 'Congressional Intel\nCommittee briefings', done: true,  current: false, parallel: false },
  { label: 'Official\nInvestigation',   sub: 'AARO created\nNASA study 2022-23',          done: true,  current: false, parallel: false },
  { label: 'Amnesty\nLegislation',      sub: 'UAPDA blocked\nFY2024-2025-2026',           done: false, current: true,  parallel: false },
  { label: 'Mass\nDeclassification',    sub: 'PURSUE launched\nMay 2026 (parallel)',      done: false, current: false, parallel: true  },
  { label: 'Multi-Nation\nAlignment',   sub: 'Japan, EU, Canada\ngaining momentum',       done: false, current: false, parallel: false },
  { label: 'Official\nConfirmation',    sub: 'Executive / multi-gov\nannouncement',       done: false, current: false, parallel: false },
];

const TRIGGERS = [
  { label: 'PURSUE active',            status: 'HIT',   note: '3 tranches released — 275+ files, 6 videos, NASA audio'  },
  { label: 'UAPDA amnesty blocked',    status: 'HIT',   note: 'FY2026 — third year, Rules process push ongoing'          },
  { label: 'Presidential directive',   status: 'HIT',   note: 'Feb 20, 2026'                                             },
  { label: 'Financial ETF launched',   status: 'HIT',   note: 'UFOD on CBOE Feb 2026'                                    },
  { label: 'Central bank warning',     status: 'HIT',   note: 'Bank of England Jan 2026'                                 },
  { label: 'Science Council mandated', status: 'HIT',   note: 'Loeb / White House + AARO + ODNI + FBI Jun 2026'          },
  { label: 'Amnesty bill signed',      status: 'WATCH', note: 'Not yet — key gate'                                       },
  { label: 'Multi-gov coordination',   status: 'WATCH', note: 'Japan signals aligning'                                   },
];

const ACTIONS = [
  { role: 'All organizations',  action: 'Complete Executive Starter Pack readiness check',       toolkit: 'Starter Pack',    href: '/toolkits' },
  { role: 'HR Directors',       action: 'Distribute Manager Action Guide to all team leads',     toolkit: 'HR Toolkit',      href: '/toolkits' },
  { role: 'CFOs / Risk',        action: 'Run sector exposure audit and pre-define triggers',     toolkit: 'Finance Toolkit', href: '/toolkits' },
  { role: 'Legal / Compliance', action: 'Review Reg FD / AMF obligations with outside counsel', toolkit: 'Legal Toolkit',   href: '/toolkits' },
];

const currentLevel = DVI >= 9 ? 'CRITICAL' : DVI >= 7 ? 'ACTIVATION' : DVI >= 5 ? 'READINESS' : DVI >= 3 ? 'MONITOR' : 'BASELINE';

function formatDate(d: string): string {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const parts = d.split('-');
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return `${months[parseInt(parts[1])-1]} ${parts[0]}`;
  return `${months[parseInt(parts[1])-1]} ${parseInt(parts[2])}, ${parts[0]}`;
}

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

  const navy  = '#1B2A4A';
  const gold  = '#C9A84C';
  const border = '#E2E8F0';
  const body  = '#4A5D78';
  const muted = '#8A9BB5';

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '112px 24px 80px', fontFamily: 'DM Sans, sans-serif' }}>

      {/* ── HEADER ── */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 0 3px rgba(239,68,68,0.2)' }} />
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

      {/* ── DVI BADGE — same component as homepage ── */}
      <div style={{ marginBottom: '14px' }}>
        <DVIBadge variant="light" />
      </div>

      {/* ── COUNTS ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', marginBottom: '14px' }}>
        {[
          { label: 'Critical signals', value: counts.critical, color: '#EF4444', sub: 'Highest institutional weight' },
          { label: 'High signals',     value: counts.high,     color: '#F97316', sub: 'Secondary institutional acts' },
          { label: 'Total verified',   value: counts.total,    color: muted,     sub: 'Events in dataset 1946–2026' },
        ].map(({ label, value, color, sub }) => (
          <div key={label} style={{ background: '#FAF8F4', border: `1px solid ${border}`, borderRadius: '8px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '34px', fontWeight: 700, color: navy, lineHeight: 1, flexShrink: 0 }}>{value}</div>
            <div>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color, letterSpacing: '0.12em', marginBottom: '2px' }}>{label.toUpperCase()}</div>
              <div style={{ fontSize: '12px', color: muted }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── HORIZON TIMELINE ── */}
      <div style={{ background: '#FAF8F4', border: `1px solid ${border}`, borderRadius: '8px', padding: '24px', marginBottom: '14px' }}>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.18em', marginBottom: '16px' }}>
          DISCLOSURE HORIZON — INSTITUTIONAL PHASE TRACKER
        </div>
        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(120px, 1fr))', gap: '4px', minWidth: '700px' }}>
            {PHASES.map((phase, i) => {
              const bg      = phase.done ? navy : phase.current ? '#92600A' : phase.parallel ? 'rgba(83,74,183,0.15)' : 'white';
              const textC   = phase.done ? '#B5D4F4' : phase.current ? '#FCD34D' : phase.parallel ? '#7F77DD' : muted;
              const subC    = phase.done ? 'rgba(181,212,244,0.7)' : phase.current ? 'rgba(252,211,77,0.7)' : phase.parallel ? 'rgba(127,119,221,0.7)' : '#CBD5E1';
              const borderC = phase.done ? navy : phase.current ? gold : phase.parallel ? '#534AB7' : border;
              return (
                <div key={i} style={{ background: bg, border: `1px solid ${borderC}`, borderRadius: '4px', padding: '10px 8px', position: 'relative' }}>
                  {phase.current && <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: gold, color: navy, fontSize: '9px', padding: '1px 6px', borderRadius: '2px', whiteSpace: 'nowrap', fontFamily: 'DM Mono, monospace', fontWeight: 700 }}>CURRENT</div>}
                  {phase.parallel && <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#534AB7', color: 'white', fontSize: '9px', padding: '1px 6px', borderRadius: '2px', whiteSpace: 'nowrap', fontFamily: 'DM Mono, monospace', fontWeight: 700 }}>PARALLEL</div>}
                  <div style={{ fontSize: '11px', fontWeight: 500, color: textC, lineHeight: 1.35, whiteSpace: 'pre-line' }}>{phase.label}</div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: subC, lineHeight: 1.35, marginTop: '4px', whiteSpace: 'pre-line' }}>{phase.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
        <p style={{ fontSize: '12px', color: body, marginTop: '12px', lineHeight: 1.6 }}>
          <span style={{ padding: '2px 8px', borderRadius: '3px', background: 'rgba(201,168,76,0.15)', color: '#92600A', fontFamily: 'DM Mono, monospace', fontSize: '10px', marginRight: '8px' }}>CURRENT BOTTLENECK</span>
          System cleared phases 1–3. Phase 4 (amnesty legislation) blocked from NDAA FY2024, FY2025, FY2026. PURSUE (phase 5) running in parallel via executive order.
        </p>
      </div>

      {/* ── INSTITUTIONAL ACCELERATION CHART ── */}
      <div style={{ background: '#0F1C30', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', padding: '24px', marginBottom: '14px', width: '100%', boxSizing: 'border-box' }}>
        <InstitutionalAcceleration />
      </div>

      {/* ── TRIGGER ALERT BOX ── */}
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
                <span style={{ padding: '2px 8px', borderRadius: '3px', background: `${c}18`, color: c, fontFamily: 'DM Mono, monospace', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', flexShrink: 0 }}>{t.status}</span>
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
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: gold, letterSpacing: '0.08em', marginBottom: '4px' }}>{a.role} · {a.toolkit}</div>
                <div style={{ fontSize: '13px', color: navy, lineHeight: 1.4 }}>{a.action} →</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.12em' }}>CATEGORY</span>
          {SIGNAL_CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setActiveCat(cat.id)}
              style={{ padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.05em', border: `1px solid ${activeCat === cat.id ? navy : border}`, background: activeCat === cat.id ? navy : 'white', color: activeCat === cat.id ? 'white' : muted, transition: 'all 0.15s' }}
            >{cat.label}</button>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: muted, letterSpacing: '0.12em' }}>STRENGTH</span>
          {(['all', 'critical', 'high', 'medium', 'low'] as const).map(s => {
            const cfg = s === 'all' ? { color: navy, label: 'ALL' } : { color: STRENGTH_CONFIG[s as SignalStrength]?.color || navy, label: s.toUpperCase() };
            return (
              <button key={s} onClick={() => setActiveStr(s)}
                style={{ padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.06em', border: `1px solid ${activeStr === s ? cfg.color : border}`, background: activeStr === s ? `${cfg.color}18` : 'white', color: activeStr === s ? cfg.color : muted, transition: 'all 0.15s' }}
              >{cfg.label}</button>
            );
          })}
        </div>
      </div>

      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: muted, marginBottom: '14px', letterSpacing: '0.1em' }}>
        {filtered.length} SIGNAL{filtered.length !== 1 ? 'S' : ''} — MOST RECENT FIRST
      </div>

      {/* ── SIGNAL CARDS ── */}
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
                  {signal.isNew && <span style={{ padding: '2px 8px', borderRadius: '3px', fontSize: '10px', fontFamily: 'DM Mono, monospace', fontWeight: 700, color: 'white', background: '#EF4444', letterSpacing: '0.08em' }}>NEW</span>}
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
                  <a href={signal.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: 'DM Mono, monospace', fontSize: '11px', color: gold, textDecoration: 'none' }}>
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

      {/* ── DISCLAIMER ── */}
      <div style={{ marginTop: '48px', padding: '16px 20px', background: '#F8F9FA', borderRadius: '6px', border: `1px solid ${border}` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <AlertTriangle size={13} style={{ color: muted, marginTop: '2px', flexShrink: 0 }} />
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: muted, lineHeight: 1.6 }}>
            All signals derived exclusively from verifiable institutional sources. DVI is an LBDG editorial assessment — not a prediction of disclosure timing. Scale: 0–3 Baseline · 3–5 Monitor · 5–7 Readiness · 7–9 Activation · 9–10 Critical. Dataset: {SIGNALS.length} verified events 1946–2026. This page does not constitute financial, legal, or investment advice.
          </p>
        </div>
      </div>
    </div>
  );
}
