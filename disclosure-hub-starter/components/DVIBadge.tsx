'use client';

import { useState } from 'react';
import Link from 'next/link';

const DVI_VALUE = 6.5;
const DVI_LEVEL = 'READINESS';
const DVI_MAX = 10;

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
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(27,42,74,0.55)', backdropFilter: 'blur(4px)' }} onClick={onClose} />
      <div style={{ position: 'relative', width: '100%', maxWidth: 480, background: 'white', borderRadius: 14, border: `1px solid ${border}`, padding: 28, boxShadow: '0 24px 64px rgba(27,42,74,0.18)', maxHeight: '90vh', overflowY: 'auto' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: muted, fontSize: 18, lineHeight: 1, padding: 4 }}>✕</button>

        <div style={{ marginBottom: 20 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: muted, marginBottom: 6 }}>LBDG · Methodology</p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: navy, marginBottom: 8 }}>Disclosure Velocity Index</h3>
          <p style={{ fontSize: 13, color: body, lineHeight: 1.65 }}>
            The DVI measures the density of verified institutional signals related to UAP governance — governments, legislatures, scientific agencies, and financial institutions — compared to the 1946–2016 historical baseline. It does not predict timing or confirm NHI existence.
          </p>
        </div>

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

        <div style={{ background: '#F8FAFC', border: `1px solid ${border}`, borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Formula</p>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: navy, lineHeight: 1.8 }}>DVI = 10 × log₂[ D36(t) / D₀ ] / 7</p>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: muted, marginTop: 6, lineHeight: 1.6 }}>
            D36 = weighted event density over 36 months<br/>
            D₀ = 0.300 events/year (baseline 1946–2016)<br/>
            7 = doublings to reach DVI 10 (institutional saturation)
          </p>
        </div>

        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: 10 }}>Scale</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
          {DVI_SCALE.map(s => {
            const isCurrent = s.level === DVI_LEVEL;
            return (
              <div key={s.level} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '9px 12px', borderRadius: 6, background: isCurrent ? `${s.color}12` : '#F8FAFC', border: `1px solid ${isCurrent ? s.color + '50' : border}` }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 88 }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, fontWeight: 700, color: s.color }}>{s.level}</span>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: muted }}>{s.range}</span>
                </div>
                <span style={{ fontSize: 12, color: body, lineHeight: 1.5 }}>{s.action}</span>
                {isCurrent && <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: s.color, marginLeft: 'auto', whiteSpace: 'nowrap', fontWeight: 700 }}>← now</span>}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/signals" onClick={onClose} style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: navy, textDecoration: 'none', padding: '8px 16px', border: `1px solid ${border}`, borderRadius: 6 }}>
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

export function DVIBadge() {
  const [showModal, setShowModal] = useState(false);

  const segments = [
    { level: 'BASELINE',   from: 0, to: 3,  color: '#4A9A5E' },
    { level: 'MONITOR',    from: 3, to: 5,  color: '#6B8CAE' },
    { level: 'READINESS',  from: 5, to: 7,  color: '#E8A030' },
    { level: 'ACTIVATION', from: 7, to: 9,  color: '#E24B4A' },
    { level: 'CRITICAL',   from: 9, to: 10, color: '#9B2C2C' },
  ];

  const currentSegment = segments.find(s => DVI_VALUE >= s.from && DVI_VALUE < s.to) || segments[2];
  const pct = (DVI_VALUE / DVI_MAX) * 100;

  return (
    <>
      {showModal && <DVIModal onClose={() => setShowModal(false)} />}

      <button
        onClick={() => setShowModal(true)}
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          gap: 8,
          padding: '12px 18px',
          borderRadius: 12,
          border: '1px solid rgba(201,168,76,0.25)',
          background: 'rgba(27,42,74,0.6)',
          backdropFilter: 'blur(8px)',
          cursor: 'pointer',
          transition: 'border-color 0.2s',
          textAlign: 'left',
          minWidth: 280,
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)')}
        title="Click to learn about the DVI"
      >
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#C9A84C',
            boxShadow: '0 0 0 3px rgba(201,168,76,0.2)',
            flexShrink: 0,
          }} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)' }}>
            Disclosure Velocity Index
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 20, fontWeight: 700, color: '#C9A84C', lineHeight: 1, marginLeft: 'auto' }}>
            {DVI_VALUE}
          </span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 9, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: currentSegment.color,
            background: `${currentSegment.color}25`,
            border: `1px solid ${currentSegment.color}60`,
            padding: '2px 8px', borderRadius: 4,
          }}>
            {DVI_LEVEL}
          </span>
        </div>

        {/* Segmented scale bar */}
        <div style={{ width: '100%', position: 'relative' }}>
          <div style={{ display: 'flex', height: 5, borderRadius: 3, overflow: 'hidden', gap: 1 }}>
            {segments.map(s => (
              <div
                key={s.level}
                style={{
                  flex: s.to - s.from,
                  background: DVI_VALUE >= s.from ? s.color : `${s.color}25`,
                }}
              />
            ))}
          </div>
          {/* Cursor */}
          <div style={{
            position: 'absolute',
            left: `calc(${pct}% - 1px)`,
            top: -3,
            width: 2,
            height: 11,
            background: 'white',
            borderRadius: 1,
            boxShadow: '0 0 6px rgba(255,255,255,0.8)',
          }} />
          {/* Scale labels */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
            {['0', '3', '5', '7', '9', '10'].map(v => (
              <span key={v} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 8, color: 'rgba(138,155,181,0.5)' }}>{v}</span>
            ))}
          </div>
        </div>

        {/* Tap hint */}
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 8, color: 'rgba(138,155,181,0.4)', letterSpacing: '0.06em' }}>
          tap to learn more ↗
        </div>
      </button>
    </>
  );
}
