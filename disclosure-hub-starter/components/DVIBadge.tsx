'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SIGNALS, DVI_CONFIG } from '@/data/signals';

const DVI_VALUE  = DVI_CONFIG.value;
const DVI_LEVEL  = DVI_CONFIG.level;
const DVI_EVENTS = SIGNALS.length;

const DVI_SCALE = [
  { range: '0 – 3', level: 'BASELINE',   color: '#4A9A5E', action: 'No urgent action. Read the Starter Pack.' },
  { range: '3 – 5', level: 'MONITOR',    color: '#6B8CAE', action: 'Conduct preparedness review. Download relevant toolkits.' },
  { range: '5 – 7', level: 'READINESS',  color: '#E8A030', action: 'Activate priority toolkits. Brief leadership and board.' },
  { range: '7 – 9', level: 'ACTIVATION', color: '#E24B4A', action: 'Activate all toolkits. Assign function owners. Sign decision authority matrix.' },
  { range: '9 – 10', level: 'CRITICAL',  color: '#9B2C2C', action: 'Maintain D0 readiness posture. All protocols active.' },
];

function DVIModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(27,42,74,0.55)', backdropFilter: 'blur(4px)' }} onClick={onClose} />
      <div style={{ position: 'relative', width: '100%', maxWidth: 480, background: 'white', borderRadius: 14, border: '1px solid #E2E8F0', padding: 28, boxShadow: '0 24px 64px rgba(27,42,74,0.18)', maxHeight: '90vh', overflowY: 'auto' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: '#8A9BB5', fontSize: 18, lineHeight: 1, padding: 4 }}>✕</button>

        <div style={{ marginBottom: 20 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8A9BB5', marginBottom: 6 }}>
            LBDG · Methodology
          </p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#1B2A4A', marginBottom: 8 }}>
            Disclosure Velocity Index™
          </h3>
          <p style={{ fontSize: 13, color: '#4A5D78', lineHeight: 1.65 }}>
            The DVI measures the density of verified institutional signals related to UAP governance — governments, legislatures, scientific agencies, and financial institutions — compared to the 1946–2016 historical baseline. It does not predict timing or confirm NHI existence.
          </p>
        </div>

        {/* Current score */}
        <div style={{ background: '#1B2A4A', borderRadius: 10, padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>
              Current DVI — June 2026
            </p>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#E8A030' }}>
              Signal density <strong style={{ color: '#C9A84C' }}>22× the historical baseline</strong>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 44, fontWeight: 700, color: '#C9A84C', lineHeight: 1 }}>{DVI_VALUE}</p>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>/10</p>
          </div>
        </div>

        {/* Formula */}
        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#8A9BB5', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Formula</p>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 13, color: '#1B2A4A', lineHeight: 1.8 }}>
            DVI = 10 × log₂[ D₃₆(t) / D₀ ] / log₂(128)
          </p>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#8A9BB5', marginTop: 6, lineHeight: 1.6 }}>
            D₃₆ = weighted event density over 36 months<br />
            D₀ = 0.300 events/year (baseline 1946–2016)<br />
            log₂(128) = normalization — DVI 10 = institutional saturation
          </p>
        </div>

        {/* Scale */}
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8A9BB5', marginBottom: 10 }}>Scale</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
          {DVI_SCALE.map(s => {
            const isCurrent = s.level === DVI_LEVEL;
            return (
              <div key={s.level} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '9px 12px', borderRadius: 6, background: isCurrent ? `${s.color}12` : '#F8FAFC', border: `1px solid ${isCurrent ? s.color + '50' : '#E2E8F0'}` }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 88 }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 700, color: s.color }}>{s.level}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#8A9BB5' }}>{s.range}</span>
                </div>
                <span style={{ fontSize: 12, color: '#4A5D78', lineHeight: 1.5 }}>{s.action}</span>
                {isCurrent && <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: s.color, marginLeft: 'auto', whiteSpace: 'nowrap', fontWeight: 700 }}>← now</span>}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/signals" onClick={onClose} style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#1B2A4A', textDecoration: 'none', padding: '8px 16px', border: '1px solid #E2E8F0', borderRadius: 6 }}>
            Signal Board →
          </Link>
          <p style={{ fontSize: 11, color: '#8A9BB5', lineHeight: 1.5, flex: 1 }}>
            Based on {DVI_EVENTS} verified institutional events, 1946–2026.
          </p>
        </div>
      </div>
    </div>
  );
}

function ScaleBar({ variant }: { variant: 'dark' | 'light' }) {
  const pct = (DVI_VALUE / 10) * 100;
  const cursor = variant === 'dark' ? 'white' : '#1B2A4A';
  const rangeColor = variant === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(27,42,74,0.45)';

  const segments = [
    { width: '30%', bg: '#4A9A5E' },
    { width: '20%', bg: '#6B8CAE' },
    { width: '20%', bg: '#E8A030' },
    { width: '20%', bg: variant === 'dark' ? 'rgba(226,75,74,0.7)' : 'rgba(226,75,74,0.75)' },
    { width: '10%', bg: variant === 'dark' ? 'rgba(155,44,44,0.7)' : 'rgba(155,44,44,0.75)' },
  ];

  const ticks = [
    { val: '0',  pct: 0   },
    { val: '3',  pct: 30  },
    { val: '5',  pct: 50  },
    { val: '7',  pct: 70  },
    { val: '9',  pct: 90  },
    { val: '10', pct: 100 },
  ];

  return (
    <div>
      <div style={{ position: 'relative', marginBottom: 8 }}>
        <div style={{ display: 'flex', height: 10, borderRadius: 5, overflow: 'hidden' }}>
          {segments.map((s, i) => (
            <div key={i} style={{ width: s.width, background: s.bg }} />
          ))}
        </div>
        <div style={{ position: 'absolute', left: `calc(${pct}% - 2px)`, top: -5, width: 4, height: 20, background: cursor, borderRadius: 2 }} />
      </div>
      <div style={{ position: 'relative', height: 16 }}>
        {ticks.map(t => (
          <span key={t.val} style={{
            position: 'absolute',
            left: t.pct === 100 ? undefined : `${t.pct}%`,
            right: t.pct === 100 ? '0%' : undefined,
            transform: t.pct > 0 && t.pct < 100 ? 'translateX(-50%)' : undefined,
            fontFamily: 'DM Mono, monospace',
            fontSize: 9,
            color: rangeColor,
            lineHeight: 1,
          }}>
            {t.val}
          </span>
        ))}
      </div>
      <div style={{ position: 'relative', height: 14, marginTop: 2 }}>
        <span style={{
          position: 'absolute',
          left: `${pct}%`,
          transform: 'translateX(-50%)',
          fontFamily: 'DM Mono, monospace',
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '0.08em',
          color: variant === 'dark' ? '#E8A030' : '#8A5C00',
          whiteSpace: 'nowrap',
        }}>
          ▲ {DVI_LEVEL}
        </span>
      </div>
    </div>
  );
}

export function DVIBadge({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const [showModal, setShowModal] = useState(false);

  const isDark = variant === 'dark';
  const bg           = isDark ? 'rgba(255,255,255,0.04)' : '#FAF8F4';
  const border       = isDark ? 'rgba(201,168,76,0.2)'   : 'rgba(27,42,74,0.1)';
  const borderHover  = isDark ? 'rgba(201,168,76,0.45)'  : 'rgba(27,42,74,0.22)';
  const labelColor   = isDark ? 'rgba(201,168,76,0.6)'   : '#8A9BB5';
  const dateColor    = isDark ? 'rgba(255,255,255,0.25)' : '#B0BCCF';
  const scoreColor   = isDark ? '#C9A84C'                : '#1B2A4A';
  const badgeBg      = isDark ? 'rgba(232,160,48,0.15)'  : 'rgba(186,117,23,0.1)';
  const badgeBorder  = isDark ? 'rgba(232,160,48,0.4)'   : 'rgba(186,117,23,0.35)';
  const badgeText    = isDark ? '#E8A030'                : '#8A5C00';
  const footerBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(27,42,74,0.07)';
  const footerColor  = isDark ? 'rgba(201,168,76,0.4)'   : 'rgba(186,117,23,0.6)';

  return (
    <>
      {showModal && <DVIModal onClose={() => setShowModal(false)} />}
      <button
        onClick={() => setShowModal(true)}
        style={{ background: bg, borderRadius: 14, padding: '28px 36px', border: `1px solid ${border}`, cursor: 'pointer', textAlign: 'left', display: 'block', width: '100%', transition: 'border-color 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = borderHover; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = border; }}
        title="Click to learn about the DVI"
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#C9A84C', boxShadow: isDark ? '0 0 0 3px rgba(201,168,76,0.2)' : 'none', flexShrink: 0 }} />
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: labelColor }}>
            Disclosure Velocity Index™
          </span>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: dateColor, marginLeft: 'auto' }}>
            June 2026 · {DVI_EVENTS} verified events
          </span>
        </div>

        {/* Score + level */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 64, fontWeight: 700, color: scoreColor, lineHeight: 1, flexShrink: 0 }}>
            {DVI_VALUE}
          </span>
          <div style={{ background: badgeBg, border: `1px solid ${badgeBorder}`, borderRadius: 5, padding: '4px 12px', flexShrink: 0 }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: badgeText }}>
              {DVI_LEVEL}
            </span>
          </div>
        </div>

        {/* Scale bar */}
        <ScaleBar variant={variant} />

        {/* Footer */}
        <div style={{ borderTop: `1px solid ${footerBorder}`, paddingTop: 12, marginTop: 24, textAlign: 'right' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: footerColor }}>
            tap to learn more ↗
          </span>
        </div>
      </button>
    </>
  );
}
