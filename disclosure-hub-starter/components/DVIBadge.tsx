'use client';

import { useState } from 'react';
import Link from 'next/link';

const DVI_VALUE = 6.5;
const DVI_LEVEL = 'READINESS';
const DVI_LEVEL_NUM = '3 of 5';

const DVI_SCALE = [
  { range: '0 – 3', level: 'BASELINE',   color: '#4A9A5E', action: 'No urgent action. Read the Starter Pack.' },
  { range: '3 – 5', level: 'MONITOR',    color: '#6B8CAE', action: 'Conduct preparedness review. Download relevant toolkits.' },
  { range: '5 – 7', level: 'READINESS',  color: '#E8A030', action: 'Activate priority toolkits. Brief leadership and board.' },
  { range: '7 – 9', level: 'ACTIVATION', color: '#E24B4A', action: 'Activate all toolkits. Assign function owners. Sign decision authority matrix.' },
  { range: '9 – 10', level: 'CRITICAL',  color: '#9B2C2C', action: 'Maintain D0 readiness posture. All protocols active.' },
];

const SEGMENTS = [
  { level: 'BASELINE',   from: 0, to: 3,  color: '#4A9A5E', flex: 3 },
  { level: 'MONITOR',    from: 3, to: 5,  color: '#6B8CAE', flex: 2 },
  { level: 'READINESS',  from: 5, to: 7,  color: '#E8A030', flex: 2 },
  { level: 'ACTIVATION', from: 7, to: 9,  color: 'rgba(226,75,74,0.55)', flex: 2 },
  { level: 'CRITICAL',   from: 9, to: 10, color: 'rgba(155,44,44,0.55)', flex: 1 },
];

const SEGMENT_LABELS_DARK = [
  { level: 'BASELINE',   color: '#4A9A5E',              flex: 3 },
  { level: 'MONITOR',    color: '#6B8CAE',              flex: 2 },
  { level: 'READINESS',  color: '#E8A030',              flex: 2, bold: true },
  { level: 'ACTIVATION', color: 'rgba(226,75,74,0.9)',  flex: 2 },
  { level: 'CRITICAL',   color: 'rgba(200,80,80,0.9)',  flex: 1 },
];

function DVIModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(27,42,74,0.55)', backdropFilter: 'blur(4px)' }} onClick={onClose} />
      <div style={{ position: 'relative', width: '100%', maxWidth: 480, background: 'white', borderRadius: 14, border: '1px solid #E2E8F0', padding: 28, boxShadow: '0 24px 64px rgba(27,42,74,0.18)', maxHeight: '90vh', overflowY: 'auto' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: '#8A9BB5', fontSize: 18, lineHeight: 1, padding: 4 }}>✕</button>

        <div style={{ marginBottom: 20 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8A9BB5', marginBottom: 6 }}>LBDG · Methodology</p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#1B2A4A', marginBottom: 8 }}>Disclosure Velocity Index</h3>
          <p style={{ fontSize: 13, color: '#4A5D78', lineHeight: 1.65 }}>
            The DVI measures the density of verified institutional signals related to UAP governance — governments, legislatures, scientific agencies, and financial institutions — compared to the 1946–2016 historical baseline. It does not predict timing or confirm NHI existence.
          </p>
        </div>

        <div style={{ background: '#1B2A4A', borderRadius: 10, padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 4 }}>Current DVI — June 2026</p>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: '#E8A030' }}>Level {DVI_LEVEL_NUM} — <strong style={{ color: '#C9A84C' }}>{DVI_LEVEL}</strong></p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 44, fontWeight: 700, color: '#C9A84C', lineHeight: 1 }}>{DVI_VALUE}</p>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>/10</p>
          </div>
        </div>

        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#8A9BB5', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Formula</p>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: '#1B2A4A', lineHeight: 1.8 }}>DVI = 10 × log₂[ D36(t) / D₀ ] / 7</p>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#8A9BB5', marginTop: 6, lineHeight: 1.6 }}>
            D36 = weighted event density over 36 months<br />
            D₀ = 0.300 events/year (baseline 1946–2016)<br />
            7 = doublings to reach DVI 10 (saturation)
          </p>
        </div>

        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8A9BB5', marginBottom: 10 }}>Scale</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
          {DVI_SCALE.map((s) => {
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
            Based on 63 verified institutional events. Peer reviewed by ChatGPT, Gemini, Claude.
          </p>
        </div>
      </div>
    </div>
  );
}

function ScaleBar({ variant }: { variant: 'dark' | 'light' }) {
  const pct = (DVI_VALUE / 10) * 100;
  const cursor = variant === 'dark' ? 'white' : '#1B2A4A';
  const labelColors = variant === 'dark'
    ? { BASELINE: '#4A9A5E', MONITOR: '#6B8CAE', READINESS: '#E8A030', ACTIVATION: 'rgba(226,75,74,0.9)', CRITICAL: 'rgba(200,80,80,0.9)' }
    : { BASELINE: '#4A9A5E', MONITOR: '#6B8CAE', READINESS: '#8A5C00', ACTIVATION: '#C03030', CRITICAL: '#7B1F1F' };

  return (
    <div>
      <div style={{ position: 'relative', marginBottom: 10 }}>
        <div style={{ display: 'flex', height: 6, borderRadius: 3, overflow: 'hidden', gap: 2 }}>
          {SEGMENTS.map((s) => (
            <div key={s.level} style={{ flex: s.flex, background: s.color }} />
          ))}
        </div>
        <div style={{ position: 'absolute', left: `calc(${pct}% - 1.5px)`, top: -4, width: 3, height: 14, background: cursor, borderRadius: 2 }} />
      </div>
      <div style={{ display: 'flex', gap: 2 }}>
        {[
          { label: 'BASELINE', flex: 3 },
          { label: 'MONITOR', flex: 2 },
          { label: 'READINESS', flex: 2 },
          { label: 'ACTIVATION', flex: 2 },
          { label: 'CRITICAL', flex: 1 },
        ].map((s) => (
          <div key={s.label} style={{ flex: s.flex, textAlign: 'center' }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 8, letterSpacing: '0.03em', color: labelColors[s.label as keyof typeof labelColors], fontWeight: s.label === DVI_LEVEL ? 700 : 400 }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DVIBadge({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const [showModal, setShowModal] = useState(false);

  const isDark = variant === 'dark';

  const bg = isDark ? '#1B2A4A' : '#FAF8F4';
  const border = isDark ? 'rgba(201,168,76,0.25)' : 'rgba(27,42,74,0.1)';
  const borderHover = isDark ? 'rgba(201,168,76,0.5)' : 'rgba(27,42,74,0.22)';
  const labelColor = isDark ? 'rgba(201,168,76,0.65)' : '#8A9BB5';
  const dateColor = isDark ? 'rgba(255,255,255,0.25)' : '#B0BCCF';
  const scoreColor = isDark ? '#C9A84C' : '#1B2A4A';
  const badgeBg = isDark ? 'rgba(232,160,48,0.18)' : 'rgba(186,117,23,0.1)';
  const badgeBorder = isDark ? 'rgba(232,160,48,0.45)' : 'rgba(186,117,23,0.35)';
  const badgeText = isDark ? '#E8A030' : '#8A5C00';
  const levelNumColor = isDark ? 'rgba(255,255,255,0.3)' : '#8A9BB5';
  const footerBorder = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(27,42,74,0.07)';
  const footerLeft = isDark ? 'rgba(255,255,255,0.3)' : '#8A9BB5';
  const footerRight = isDark ? 'rgba(201,168,76,0.5)' : 'rgba(186,117,23,0.7)';

  return (
    <>
      {showModal && <DVIModal onClose={() => setShowModal(false)} />}
      <button
        onClick={() => setShowModal(true)}
        style={{ background: bg, borderRadius: 12, padding: '18px 22px', width: 340, border: `1px solid ${border}`, cursor: 'pointer', textAlign: 'left', display: 'block', transition: 'border-color 0.2s' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = borderHover; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = border; }}
        title="Click to learn about the DVI"
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 16 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#C9A84C', boxShadow: isDark ? '0 0 0 3px rgba(201,168,76,0.2)' : 'none', flexShrink: 0 }} />
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: labelColor }}>
            Disclosure Velocity Index
          </span>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: dateColor, marginLeft: 'auto' }}>Jun 2026</span>
        </div>

        {/* Score + Level */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 54, fontWeight: 700, color: scoreColor, lineHeight: 1 }}>
            {DVI_VALUE}
          </span>
          <div style={{ textAlign: 'right' }}>
            <div style={{ background: badgeBg, border: `1px solid ${badgeBorder}`, borderRadius: 5, padding: '4px 12px', marginBottom: 5, display: 'inline-block' }}>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: badgeText }}>
                {DVI_LEVEL}
              </span>
            </div>
            <div>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: levelNumColor, letterSpacing: '0.06em' }}>
                level {DVI_LEVEL_NUM}
              </span>
            </div>
          </div>
        </div>

        {/* Scale bar */}
        <div style={{ marginBottom: 14 }}>
          <ScaleBar variant={variant} />
        </div>

        {/* Footer */}
        <div style={{ borderTop: `1px solid ${footerBorder}`, paddingTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: footerLeft }}>63 verified events</span>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: footerRight }}>tap to learn more ↗</span>
        </div>
      </button>
    </>
  );
}
