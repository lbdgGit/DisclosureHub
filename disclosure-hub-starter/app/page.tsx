import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LBDG — Leadership Bureau for Disclosure Guidance',
  description: 'The reference portal to understand, anticipate and navigate the official announcement of non-human intelligence existence.',
};

const PILLARS = [
  {
    num: '01',
    title: 'Education Hub',
    desc: 'Glossary, historical timeline, FAQ and AI assistant. Everything you need to navigate the UAP disclosure dossier with rigor.',
    links: [
      { href: '/lexique',  label: 'UAP Lexicon'       },
      { href: '/frise',    label: 'Historical Timeline'},
      { href: '/faq',      label: 'FAQ'                },
      { href: '/chatbot',  label: 'AI Signal'          },
    ],
  },
  {
    num: '02',
    title: 'Practical Toolkits',
    desc: 'Downloadable methodology kits filtered by sector and organization size. Concrete frameworks to prepare your organization.',
    links: [
      { href: '/toolkits',                  label: 'All Toolkits'    },
      { href: '/toolkits?secteur=entreprise',label: 'HR & Management' },
      { href: '/toolkits?secteur=finance',   label: 'Finance & Risk'  },
    ],
  },
  {
    num: '03',
    title: 'Prospective Reports',
    desc: 'In-depth analyses on geopolitical, economic, and technological implications of disclosure. Pay-per-access, immediate delivery.',
    links: [
      { href: '/rapports',         label: 'All Reports'     },
      { href: '/rapports#gratuit', label: 'Free Report ↓'   },
    ],
  },
];

const STATS = [
  { value: '757+', label: 'UAP cases under DoD review (2024)' },
  { value: '2/5',  label: 'Deloitte probability score — NHI disclosure in 5 years' },
  { value: '2023', label: 'Year of first sworn congressional UAP testimony' },
  { value: '$22M', label: 'Secret AATIP budget 2007–2012' },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="starfield grain"
        style={{
          minHeight: '100vh',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '120px 24px 80px',
          background: 'radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.08) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(201,168,76,0.05) 0%, transparent 50%), #0F1B30',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>

          {/* Eyebrow */}
          <div className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#C9A84C',
              boxShadow: '0 0 8px rgba(201,168,76,0.6)',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.9)',
            }}>
              Active Signal — Disclosure Dossier
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in-up delay-100"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(48px, 7vw, 88px)',
              fontWeight: 700, lineHeight: 1,
              color: 'white', marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            This is not<br />
            a question of<br />
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>believing.</em>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-in-up delay-200"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '560px', lineHeight: 1.7,
              marginBottom: '44px',
            }}
          >
            It is a question of being ready when governments finally stop not answering.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/faq" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '13px 28px',
              background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
              color: '#0F1B30', fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px', fontWeight: 600,
              textDecoration: 'none', borderRadius: '3px',
              boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
            }}>
              Start Here →
            </Link>
            <Link href="/rapports" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '13px 28px',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px', fontWeight: 500,
              textDecoration: 'none', borderRadius: '3px',
              backdropFilter: 'blur(8px)',
            }}>
              View Reports
            </Link>
          </div>

          {/* Disclaimer */}
          <p
            className="animate-fade-in delay-500"
            style={{
              marginTop: '48px', fontFamily: 'DM Mono, monospace',
              fontSize: '11px', color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.05em', maxWidth: '480px', lineHeight: 1.6,
            }}
          >
            Sources: U.S. Congress · DoD AARO · NASA · CNES GEIPAN · Deloitte AG 2026. No unverified speculation.
          </p>
        </div>

        {/* Decorative compass/circle */}
        <div
          className="animate-float"
          style={{
            position: 'absolute', right: '8%', top: '50%',
            transform: 'translateY(-50%)',
            width: '300px', height: '300px',
            border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          aria-hidden
        >
          <div style={{
            width: '200px', height: '200px',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: '80px', height: '80px',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,168,76,0.1), transparent)',
            }} />
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────── */}
      <section style={{
        borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0',
        padding: '48px 24px', background: 'white',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          {STATS.map((stat) => (
            <div key={stat.value} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '36px', fontWeight: 700,
                color: '#1B2A4A', marginBottom: '6px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: 'DM Mono, monospace', fontSize: '11px',
                color: '#8A9BB5', letterSpacing: '0.04em', lineHeight: 1.4,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3 PILLARS ────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#FAF8F4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, #E8C96A)' }} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase' }}>
                Portal Architecture
              </span>
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#1B2A4A' }}>
              Three levels of engagement
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                style={{
                  background: 'white', border: '1px solid #E2E8F0',
                  borderRadius: '4px', padding: '32px',
                  transition: 'all 0.2s ease',
                }}
                className="card-clean"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <span style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '42px', fontWeight: 700,
                    color: 'rgba(201,168,76,0.15)', lineHeight: 1,
                  }}>
                    {pillar.num}
                  </span>
                  <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, #E8C96A)' }} />
                </div>

                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '22px', fontWeight: 600,
                  color: '#1B2A4A', marginBottom: '12px',
                }}>
                  {pillar.title}
                </h3>

                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px', color: '#4A5D78',
                  lineHeight: 1.7, marginBottom: '28px',
                }}>
                  {pillar.desc}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid #F1F5F9', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {pillar.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px', color: '#4A5D78',
                        textDecoration: 'none', display: 'flex',
                        alignItems: 'center', justifyContent: 'space-between',
                        transition: 'color 0.15s',
                      }}>
                        <span>{link.label}</span>
                        <span style={{ color: '#C9A84C', fontSize: '16px' }}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DELOITTE VALIDATION BAND ─────────────────────── */}
      <section style={{
        background: '#1B2A4A', padding: '64px 24px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div
          style={{
            position: 'absolute', right: '-60px', top: '50%',
            transform: 'translateY(-50%)',
            width: '400px', height: '400px',
            border: '1px solid rgba(201,168,76,0.08)',
            borderRadius: '50%',
          }}
          aria-hidden
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="md:grid-cols-2">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, #E8C96A)' }} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase' }}>
                Institutional Validation
              </span>
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700, color: 'white',
              marginBottom: '16px', lineHeight: 1.2,
            }}>
              Even Deloitte is paying attention.
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px', color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
            }}>
              Deloitte AG (2026) classified Non-Human Intelligence disclosure as a credible Black Swan risk within 5 years — tagged under Ontological Shock, Institutional Trust, and Narrative Polarisation.
            </p>
          </div>

          {/* Deloitte card replica */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '4px', padding: '28px',
          }}>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.7)', marginBottom: '16px' }}>
              DELOITTE AG · 2026 · RISK INTELLIGENCE
            </div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, color: 'white', marginBottom: '20px' }}>
              Is foresight of Black Swans really impossible?
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2px' }}>
              {[
                ['Category', 'Social'],
                ['Scenario', 'Non-human intelligence disclosure'],
                ['Probability 5Y', '2 / 5 — Credible risk'],
                ['Impact', 'Market disruption · Institutional trust · Science domain'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'contents' }}>
                  <div style={{ background: 'rgba(255,255,255,0.06)', padding: '8px 12px', fontFamily: 'DM Mono, monospace', fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{k}</div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px 12px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FREE REPORT CTA ──────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, #E8C96A)' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase' }}>
              Free Introductory Report
            </span>
            <div style={{ width: '32px', height: '2px', background: 'linear-gradient(270deg, #C9A84C, #E8C96A)' }} />
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(26px, 4vw, 38px)',
            fontWeight: 700, color: '#1B2A4A', marginBottom: '16px',
          }}>
            Download the free report
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px', color: '#4A5D78',
            lineHeight: 1.7, marginBottom: '32px',
          }}>
            15 pages covering the key actors, fundamental stakes, and the probable timeline of an official announcement. No sign-up required.
          </p>
          <Link href="/rapports#gratuit" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
            color: '#0F1B30', fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px', fontWeight: 600,
            textDecoration: 'none', borderRadius: '3px',
            boxShadow: '0 4px 20px rgba(201,168,76,0.25)',
          }}>
            Download for free →
          </Link>
        </div>
      </section>
    </>
  );
}
