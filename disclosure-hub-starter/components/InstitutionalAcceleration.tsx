'use client';

import { useState } from 'react';
import { SIGNALS, CATEGORY_CONFIG, CAT_ORDER, type Signal } from '@/data/signals';

const ALL_YEARS = [
  1946, 1947, 1949, 1950, 1952, 1953, 1966, 1969, 1977, 1978, 1979, 1997, 2004, 2007, 2009, 2011,
  2017, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
];

const BREAK_AFTER = 2011;

const CAT_LABELS: Record<string, string> = {
  military:      'Military',
  government:    'Government',
  legislative:   'Legislative',
  scientific:    'Scientific',
  international: 'International',
  financial:     'Financial',
  media:         'Media',
};

interface TooltipState { event: Signal; }

function evKey(ev: Signal) { return `${ev.year}-${ev.mo}-${ev.category}`; }

export function InstitutionalAcceleration() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [pinned, setPinned] = useState(false);
  const [pinnedKey, setPinnedKey] = useState<string | null>(null);

  const pre2017  = SIGNALS.filter(e => e.year < 2017).length;
  const from2017 = SIGNALS.filter(e => e.year >= 2017 && e.year < 2026).length;
  const in2026   = SIGNALS.filter(e => e.year === 2026).length;

  // Build byYear — sorted by category order
  const byYear: Record<number, Signal[]> = {};
  ALL_YEARS.forEach(y => {
    byYear[y] = SIGNALS
      .filter(e => e.year === y)
      .sort((a, b) => (CAT_ORDER[a.category] ?? 99) - (CAT_ORDER[b.category] ?? 99));
  });

  const maxStack = Math.max(...ALL_YEARS.map(y => byYear[y]?.length ?? 0));

  const SQ     = 20;
  const GAP    = 3;
  const YEAR_W = 48;
  const GAP_W  = 32;
  const PAD_L  = 24;
  const PAD_R  = 12;
  const PAD_T  = 28;
  const PAD_B  = 44;

  let curX = PAD_L;
  const yearX: Record<number, number> = {};
  ALL_YEARS.forEach(y => {
    yearX[y] = curX;
    curX += YEAR_W;
    if (y === BREAK_AFTER) curX += GAP_W;
  });
  const totalW = curX + PAD_R;
  const totalH = (maxStack + 1) * (SQ + GAP) + PAD_T + PAD_B;

  const sqX = (y: number) => yearX[y] + (YEAR_W - SQ) / 2;
  const sqY = (si: number) => PAD_T + (maxStack - si - 1) * (SQ + GAP);
  const breakX = yearX[BREAK_AFTER] + YEAR_W + GAP_W / 2;

  const handleClick = (e: React.MouseEvent, ev: Signal) => {
    e.stopPropagation();
    const key = evKey(ev);
    if (pinned && pinnedKey === key) {
      setPinned(false); setPinnedKey(null); setTooltip(null);
    } else {
      setPinned(true); setPinnedKey(key); setTooltip({ event: ev });
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
            {SIGNALS.length} verified institutional events — 1946 to 2026
          </h3>
          <p style={{ fontSize: 12, color: '#8A9BB5', lineHeight: 1.6 }}>
            Each square = one verified event. Click for source. Opacity reflects weight (1.0 / 0.8 / 0.5).
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { label: '1946–2016', value: pre2017,  sub: '71 years' },
            { label: '2017–2025', value: from2017, sub: '8 years'  },
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

      {/* Chart */}
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }} onClick={handleDismiss}>
        <svg
          viewBox={`0 0 ${totalW} ${totalH}`}
          width={totalW} height={totalH}
          style={{ display: 'block', minWidth: totalW }}
        >
          {/* Era bands */}
          <rect x={0} y={0} width={breakX - GAP_W / 2} height={totalH} fill="rgba(255,255,255,0.015)" />
          <rect x={breakX + GAP_W / 2} y={0} width={totalW - breakX - GAP_W / 2} height={totalH} fill="rgba(201,168,76,0.04)" />

          {/* Era labels */}
          <text x={(breakX - GAP_W / 2) / 2} y={12} textAnchor="middle" fontSize={8} fill="#8A9BB5" fontFamily="DM Mono, monospace" letterSpacing="0.12em">
            1946 – 2016 · CONTAINMENT
          </text>
          <text x={breakX + GAP_W / 2 + (totalW - breakX - GAP_W / 2) / 2} y={12} textAnchor="middle" fontSize={8} fill="#C9A84C" fontFamily="DM Mono, monospace" letterSpacing="0.12em">
            2017 – 2026 · ACCELERATION
          </text>

          {/* Break line */}
          <line x1={breakX} y1={PAD_T - 8} x2={breakX} y2={totalH - PAD_B + 20} stroke="rgba(201,168,76,0.3)" strokeWidth={1} strokeDasharray="4 3" />
          <text x={breakX} y={totalH - PAD_B + 34} textAnchor="middle" fontSize={7} fill="rgba(201,168,76,0.5)" fontFamily="DM Mono, monospace">2012–2016</text>

          {/* Y axis */}
          {Array.from({ length: maxStack }, (_, i) => i + 1).map(i =>
            i % 2 === 0 ? (
              <text key={i} x={PAD_L - 4} y={sqY(i - 1) + SQ / 2 + 3} textAnchor="end" fontSize={7} fill="#8A9BB5" fontFamily="DM Mono, monospace">{i}</text>
            ) : null
          )}

          {/* CSS hover */}
          <defs>
            <style>{`.sq{cursor:pointer;transition:opacity 0.12s}.sq:hover{opacity:1!important;stroke:rgba(255,255,255,0.7)!important;stroke-width:1.5!important}`}</style>
          </defs>

          {/* Squares */}
          {ALL_YEARS.map(year =>
            (byYear[year] || []).map((ev, si) => {
              const color = CATEGORY_CONFIG[ev.category]?.color || '#C9A84C';
              const isAccel = year >= 2017;
              const isPinned = pinned && pinnedKey === evKey(ev);
              const baseOpacity = ev.w >= 1.0 ? 0.9 : ev.w >= 0.8 ? 0.65 : 0.38;
              return (
                <rect
                  key={`${year}-${si}`}
                  className="sq"
                  x={sqX(year)} y={sqY(si)}
                  width={SQ} height={SQ} rx={2}
                  fill={color}
                  opacity={isPinned ? 1 : baseOpacity}
                  stroke={isPinned ? '#fff' : isAccel ? 'rgba(201,168,76,0.15)' : 'none'}
                  strokeWidth={isPinned ? 2 : isAccel ? 0.5 : 0}
                  onClick={(e) => handleClick(e, ev)}
                />
              );
            })
          )}

          {/* Year labels */}
          {ALL_YEARS.map(year => (
            <text key={year} x={sqX(year) + SQ / 2} y={totalH - PAD_B + 16} textAnchor="middle"
              fill={year >= 2017 ? '#C9A84C' : '#8A9BB5'}
              fontSize={year >= 2017 ? 9 : 8}
              fontFamily="DM Mono, monospace"
              fontWeight={year >= 2017 ? '700' : '400'}
            >{year}</text>
          ))}

          {/* Count labels */}
          {ALL_YEARS.map(year => {
            const count = byYear[year]?.length ?? 0;
            if (!count) return null;
            return (
              <text key={`c-${year}`} x={sqX(year) + SQ / 2} y={sqY(count - 1) - 5} textAnchor="middle"
                fill={count >= 5 ? '#E24B4A' : '#8A9BB5'}
                fontSize={count >= 5 ? 10 : 8}
                fontFamily="DM Mono, monospace"
                fontWeight={count >= 5 ? '700' : '400'}
              >{count}</text>
            );
          })}
        </svg>
      </div>

      {/* Tooltip — fixed height, no layout shift */}
      <div style={{
        marginTop: 10, height: 90, borderRadius: 8, overflow: 'hidden',
        transition: 'background 0.15s, border-color 0.15s',
        background: tooltip ? '#0F1C30' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${tooltip ? (CATEGORY_CONFIG[tooltip.event.category]?.color || '#C9A84C') : 'rgba(255,255,255,0.06)'}`,
      }}>
        {tooltip ? (
          <div style={{ padding: '10px 14px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: CATEGORY_CONFIG[tooltip.event.category]?.color, flexShrink: 0 }} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {CAT_LABELS[tooltip.event.category]} · {tooltip.event.year} · Weight {tooltip.event.w}
              </span>
              {pinned && (
                <button onClick={handleDismiss} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#8A9BB5', cursor: 'pointer', fontSize: 14, lineHeight: 1, padding: 2 }}>✕</button>
              )}
            </div>
            <p style={{ fontSize: 12, color: '#FAF8F4', lineHeight: 1.4, margin: '0 0 3px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {tooltip.event.title}
            </p>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#8A9BB5', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontStyle: 'italic' }}>
              {tooltip.event.sourceLabel || tooltip.event.institution}
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

      {/* Legend — categories */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', marginTop: 16, marginBottom: 10 }}>
        {Object.entries(CAT_LABELS).map(([key, label]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: CATEGORY_CONFIG[key as keyof typeof CATEGORY_CONFIG]?.color, opacity: 0.85, flexShrink: 0 }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#8A9BB5' }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Legend — weights */}
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
        LBDG EDITORIAL · VERIFIED SOURCES ONLY · readyfordisclosure.com · {SIGNALS.length} verified events 1946–2026
      </p>
    </div>
  );
}
