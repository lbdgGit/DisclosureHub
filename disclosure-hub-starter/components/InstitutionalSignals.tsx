'use client';

import Link from 'next/link';
import { SIGNALS, CATEGORY_CONFIG, STRENGTH_CONFIG } from '@/data/signals';

function formatDate(d: string): string {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const parts = d.split('-');
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return `${months[parseInt(parts[1])-1]} ${parts[0]}`;
  return `${months[parseInt(parts[1])-1]} ${parseInt(parts[2])}, ${parts[0]}`;
}

export function InstitutionalSignals() {
  // 5 most recent signals sorted by date desc
  const signals = [...SIGNALS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  const totalRecent = SIGNALS.filter(s => s.date >= '2026').length;

  return (
    <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>

      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 28,
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#EF4444',
              boxShadow: '0 0 0 2px rgba(239,68,68,0.25)',
            }} />
            <p style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#8A9BB5',
            }}>
              Institutional Signal Feed · Live
            </p>
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 500,
            color: '#1B2A4A',
            marginBottom: 6,
          }}>
            Latest institutional signals
          </h2>
          <p style={{ fontSize: 13, color: '#8A9BB5', maxWidth: 480 }}>
            Verified events feeding the DVI. Governments, agencies, and credentialed officials only.
          </p>
        </div>

        {/* DVI badge */}
        <div style={{
          backgroundColor: '#1B2A4A',
          borderRadius: 10,
          padding: '14px 22px',
          textAlign: 'center',
          minWidth: 130,
        }}>
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 9,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#8A9BB5',
            marginBottom: 4,
          }}>DVI</p>
          <p style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 36,
            fontWeight: 700,
            color: '#C9A84C',
            lineHeight: 1,
            marginBottom: 4,
          }}>6.2</p>
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 10,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#E8A030',
          }}>HIGH</p>
        </div>
      </div>

      {/* Signal list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {signals.map((signal, i) => {
          const catCfg = CATEGORY_CONFIG[signal.category];
          const strCfg = STRENGTH_CONFIG[signal.strength];

          return (
            <div
              key={signal.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '3px 1fr',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: 8,
                overflow: 'hidden',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(27,42,74,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* Accent bar */}
              <div style={{ backgroundColor: strCfg.dot }} />

              {/* Content */}
              <div style={{ padding: '14px 18px 14px 16px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 7,
                  flexWrap: 'wrap',
                }}>
                  {/* Strength badge */}
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: 9,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: strCfg.color,
                    backgroundColor: `${strCfg.dot}18`,
                    border: `0.5px solid ${strCfg.dot}40`,
                    padding: '2px 7px',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: strCfg.dot }} />
                    {strCfg.label}
                  </span>

                  {/* Category badge */}
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: 9,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: catCfg.color,
                    backgroundColor: catCfg.bg,
                    border: `0.5px solid ${catCfg.border}`,
                    padding: '2px 7px',
                    borderRadius: 3,
                  }}>
                    {signal.category}
                  </span>

                  {/* NEW badge */}
                  {signal.isNew && (
                    <span style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: 9,
                      letterSpacing: '0.08em',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      backgroundColor: '#EF4444',
                      padding: '2px 7px',
                      borderRadius: 3,
                    }}>
                      NEW
                    </span>
                  )}

                  {/* Country */}
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#8A9BB5' }}>
                    {signal.country}
                  </span>

                  {/* Date — right */}
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: 10,
                    color: '#8A9BB5',
                    marginLeft: 'auto',
                  }}>
                    {formatDate(signal.date)}
                  </span>
                </div>

                {/* Institution */}
                <p style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#8A9BB5',
                  marginBottom: 4,
                }}>
                  {signal.institution}
                </p>

                {/* Title */}
                <p style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#1B2A4A',
                  lineHeight: 1.4,
                  marginBottom: 5,
                }}>
                  {signal.title}
                </p>

                {/* Description — 2 lines */}
                <p style={{
                  fontSize: 13,
                  color: '#4A5D78',
                  lineHeight: 1.6,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {signal.description}
                </p>

                {signal.sourceUrl && (
                  <a
                    href={signal.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: 8,
                      fontFamily: 'DM Mono, monospace',
                      fontSize: 11,
                      color: '#C9A84C',
                      textDecoration: 'none',
                    }}
                  >
                    {signal.sourceLabel || 'Source'} →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p style={{ fontSize: 12, color: '#8A9BB5' }}>
          {totalRecent} signals recorded in 2026. {SIGNALS.filter(s => s.isNew).length} new this week.
        </p>
        <Link
          href="/signals"
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#1B2A4A',
            textDecoration: 'none',
            padding: '10px 20px',
            border: '1px solid #1B2A4A',
            borderRadius: 8,
            display: 'inline-block',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '#1B2A4A';
            (e.currentTarget as HTMLElement).style.color = '#FAF8F4';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLElement).style.color = '#1B2A4A';
          }}
        >
          View all signals →
        </Link>
      </div>
    </section>
  );
}
