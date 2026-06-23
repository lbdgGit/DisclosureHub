'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DVIBadge } from '@/components/DVIBadge';
import { SIGNALS, CATEGORY_CONFIG, STRENGTH_CONFIG } from '@/data/signals';

const DVI_VALUE = 6.5;
const DVI_LEVEL = 'READINESS';

function formatDate(d: string): string {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const parts = d.split('-');
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return `${months[parseInt(parts[1])-1]} ${parts[0]}`;
  return `${months[parseInt(parts[1])-1]} ${parseInt(parts[2])}, ${parts[0]}`;
}

const DVI_SCALE = [
  { range: '0 – 3', level: 'BASELINE',   color: '#4A9A5E', action: 'No urgent action. Read the Starter Pack.' },
  { range: '3 – 5', level: 'MONITOR',    color: '#6B8CAE', action: 'Conduct preparedness review. Download relevant toolkits.' },
  { range: '5 – 7', level: 'READINESS',  color: '#E8A030', action: 'Activate priority toolkits. Brief leadership and board.' },
  { range: '7 – 9', level: 'ACTIVATION', color: '#E24B4A', action: 'Activate all toolkits. Assign function owners. Sign decision authority matrix.' },
  { range: '9 – 10',level: 'CRITICAL',   color: '#9B2C2C', action: 'Maintain D0 readiness posture. All protocols active.' },
];

function DVIModal({ onClose }: { onClose: () => void }) {
  const navy = '#1B2A4A';
  const gold = '#C9A84C';
  const border = '#E2E8F0';
  const muted = '#8A9BB5';
  const body = '#4A5D78';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      {/* Backdrop */}
      <div
        style={{ position: 'absolute', inset: 0, background: 'rgba(27,42,74,0.55)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />
      {/* Panel */}
      <div style={{
        position: 'relative', width: '100%', maxWidth: 480,
        background: 'white', borderRadius: 14,
        border: `1px solid ${border}`, padding: 28,
        boxShadow: '0 24px 64px rgba(27,42,74,0.18)',
        maxHeight: '90vh', overflowY: 'auto',
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: muted, fontSize: 18, lineHeight: 1, padding: 4 }}
        >✕</button>

        {/* Title */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: muted, marginBottom: 6 }}>
            LBDG · Methodology
          </p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: navy, marginBottom: 8 }}>
            Disclosure Velocity Index
          </h3>
          <p style={{ fontSize: 13, color: body, lineHeight: 1.65 }}>
            The DVI measures the density of verified institutional signals related to UAP governance — governments, legislatures, scientific agencies, and financial institutions — compared to the 1946–2016 historical baseline. It does not predict timing or confirm NHI existence.
          </p>
        </div>

        {/* Current score */}
        <div style={{ background: navy, borderRadius: 10, padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>Current DVI — June 2026</p>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: '#E8A030', letterSpacing: '0.1em' }}>
              Signal density is <strong style={{ color: gold }}>22× the historical baseline</strong>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 44, fontWeight: 700, color: gold, lineHeight: 1 }}>{DVI_VALUE}</p>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#E8A030', letterSpacing: '0.08em' }}>{DVI_LEVEL}</p>
          </div>
        </div>

        {/* Formula */}
        <div style={{ background: '#F8FAFC', border: `1px solid ${border}`, borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Formula</p>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: navy, lineHeight: 1.8 }}>
            DVI = 10 × log₂[ D36(t) / D₀ ] / 7
          </p>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: muted, marginTop: 6, lineHeight: 1.6 }}>
            D36 = weighted event density over 36 months<br/>
            D₀ = 0.300 events/year (baseline 1946–2016)<br/>
            7 = doublings to reach DVI 10 (institutional saturation)
          </p>
        </div>

        {/* Scale */}
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: 10 }}>Scale</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
          {DVI_SCALE.map(s => {
            const isCurrent = s.level === DVI_LEVEL;
            return (
              <div key={s.level} style={{
                display: 'flex', alignItems: 'flex-start', gap: 10, padding: '9px 12px',
                borderRadius: 6,
                background: isCurrent ? `${s.color}12` : '#F8FAFC',
                border: `1px solid ${isCurrent ? s.color + '50' : border}`,
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 80 }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 700, color: s.color }}>{s.level}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: muted }}>{s.range}</span>
                </div>
                <span style={{ fontSize: 12, color: body, lineHeight: 1.5 }}>{s.action}</span>
                {isCurrent && (
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: s.color, marginLeft: 'auto', whiteSpace: 'nowrap', fontWeight: 700 }}>← now</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer links */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link
            href="/signals"
            onClick={onClose}
            style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: navy, textDecoration: 'none', padding: '8px 16px', border: `1px solid ${border}`, borderRadius: 6, display: 'inline-block' }}
          >
            Signal Board →
          </Link>
          <p style={{ fontSize: 11, color: muted, lineHeight: 1.5, flex: 1 }}>
            Based on 63 verified institutional events. Peer reviewed by ChatGPT, Gemini, Claude.
          </p>
        </div>
      </div>
    </div>
  );
}

export function InstitutionalSignals() {
  const [showModal, setShowModal] = useState(false);

  const signals = [...SIGNALS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  const totalRecent = SIGNALS.filter(s => s.date >= '2026').length;

  return (
    <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
      {showModal && <DVIModal onClose={() => setShowModal(false)} />}

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 0 2px rgba(239,68,68,0.25)' }} />
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8A9BB5' }}>
              Institutional Signal Feed · Live
            </p>
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 500, color: '#1B2A4A', marginBottom: 6 }}>
            Latest institutional signals
          </h2>
          <p style={{ fontSize: 13, color: '#8A9BB5', maxWidth: 480 }}>
            Verified events feeding the DVI. Governments, agencies, and credentialed officials only.
          </p>
        </div>

        <DVIBadge variant="light" />
      </div>

      {/* Signal list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {signals.map((signal) => {
          const catCfg = CATEGORY_CONFIG[signal.category];
          const strCfg = STRENGTH_CONFIG[signal.strength];

          return (
            <div
              key={signal.id}
              style={{ display: 'grid', gridTemplateColumns: '3px 1fr', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 8, overflow: 'hidden', transition: 'box-shadow 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(27,42,74,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div style={{ backgroundColor: strCfg.dot }} />
              <div style={{ padding: '14px 18px 14px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: strCfg.color, backgroundColor: `${strCfg.dot}18`, border: `0.5px solid ${strCfg.dot}40`, padding: '2px 7px', borderRadius: 3, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: strCfg.dot }} />
                    {strCfg.label}
                  </span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: catCfg.color, backgroundColor: catCfg.bg, border: `0.5px solid ${catCfg.border}`, padding: '2px 7px', borderRadius: 3 }}>
                    {signal.category}
                  </span>
                  {signal.isNew && (
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.08em', fontWeight: 700, color: '#FFFFFF', backgroundColor: '#EF4444', padding: '2px 7px', borderRadius: 3 }}>NEW</span>
                  )}
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#8A9BB5' }}>{signal.country}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#8A9BB5', marginLeft: 'auto' }}>{formatDate(signal.date)}</span>
                </div>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8A9BB5', marginBottom: 4 }}>{signal.institution}</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#1B2A4A', lineHeight: 1.4, marginBottom: 5 }}>{signal.title}</p>
                <p style={{ fontSize: 13, color: '#4A5D78', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{signal.description}</p>
                {signal.sourceUrl && (
                  <a href={signal.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 8, fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#C9A84C', textDecoration: 'none' }}>
                    {signal.sourceLabel || 'Source'} →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: 12, color: '#8A9BB5' }}>
          {totalRecent} signals recorded in 2026. {SIGNALS.filter(s => s.isNew).length} new this week.
        </p>
        <Link
          href="/signals"
          style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1B2A4A', textDecoration: 'none', padding: '10px 20px', border: '1px solid #1B2A4A', borderRadius: 8, display: 'inline-block', transition: 'all 0.15s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1B2A4A'; (e.currentTarget as HTMLElement).style.color = '#FAF8F4'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#1B2A4A'; }}
        >
          View all signals →
        </Link>
      </div>
    </section>
  );
}
