import Link from 'next/link';
import { ArrowRight, Wrench, FileText, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';
import { InstitutionalSignals } from '@/components/InstitutionalSignals';

export const metadata: Metadata = {
  title: 'LBDG — Leadership Bureau for Disclosure Guidance',
  description: 'Institutional preparedness for a disclosure event. Measured, sourced, and built for the people who carry the risk.',
};

const STATS = [
  { value: '2,000+', label: 'UAP cases tracked by AARO (confirmed by Sec. Hegseth, 2026)' },
  { value: '34',     label: 'Senior officials on record — The Age of Disclosure (Amazon Prime)' },
  { value: '66',     label: 'Verified institutional events in the DVI dataset (40 since 2017)' },
  { value: '$22M',   label: 'Pentagon secret UAP program AATIP 2007–2012 (NYT, 2017)' },
];

const PILLARS = [
  {
    icon: TrendingUp,
    number: '01',
    title: 'Disclosure Velocity',
    badge: 'Live',
    description: 'A single weighted index — the DVI — tracking how fast institutional disclosure is moving across 66 verified events. Government actions, financial instruments, legislative developments.',
    links: [
      { href: '/signals',  label: 'Open Velocity Index' },
      { href: '/maturity', label: 'See Disclosure Maturity' },
    ],
    color: 'signal',
    hoverBorder: 'hover:border-signal/50',
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Operational Toolkits',
    badge: 'Action',
    description: 'Eight operational toolkits for HR, Finance, Communications, Legal, Leadership & Board, Marketing, Supply Chain, and Investor Relations. Scorecards, checklists, decision trees, and templates — designed to be used, not read.',
    links: [
      { href: '/toolkits',         label: 'All Toolkits'           },
      { href: '/toolkits#hr',      label: 'HR Toolkit'             },
      { href: '/toolkits#finance', label: 'Finance Toolkit'        },
      { href: '/toolkits#comms',   label: 'Communications Toolkit' },
    ],
    color: 'classified',
    hoverBorder: 'hover:border-classified/50',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Reports & Analysis',
    badge: 'Insight',
    description: 'In-depth analytical reports on the geopolitical, financial, and organizational implications of disclosure. Nuclear technology analogy. Scenario A through C frameworks.',
    links: [
      { href: '/rapports',      label: 'View Reports'      },
      { href: '/rapports#free', label: 'Free Intro Report' },
    ],
    color: 'cold',
    hoverBorder: 'hover:border-cold/50',
  },
];

const LS_STARTER_URL = 'https://lbdg.lemonsqueezy.com/checkout/buy/b8c638cd-b612-4acc-95ad-e6b7e9699634?embed=1';

// shared type tokens (match Velocity / Maturity)
const SERIF = 'Playfair Display, serif';
const SANS = 'DM Sans, sans-serif';
const MONO = 'DM Mono, monospace';
const NAVY = '#1B2A4A';
const GOLD = '#C9A84C';
const CREAM = '#FAF8F4';

export default function HomePage() {
  return (
    <>
      {/* ── STANDARD HEADER (cream, serif) — matches all other pages ── */}
      <section style={{ background: CREAM, padding: '128px 24px 56px' }}>
        <div className="max-w-5xl mx-auto">
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A9BB5', marginBottom: 14 }}>
            LBDG · Leadership Bureau for Disclosure Guidance
          </div>
          <h1 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 18, maxWidth: 900 }}>
            Institutional preparedness for a disclosure event.
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.7, color: '#4A5D78', maxWidth: 640, marginBottom: 28 }}>
            Measured, sourced, and built for the people who carry the risk. The direction is settled; your position when the threshold is crossed is not. LBDG measures how close that moment is, and what it costs to be unprepared.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/toolkits"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded transition-all"
              style={{ background: NAVY, color: GOLD, fontFamily: MONO, fontWeight: 500, fontSize: 13, letterSpacing: '0.04em' }}
            >
              Get the Toolkits
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/signals"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded transition-all"
              style={{ border: `1px solid ${NAVY}`, color: NAVY, fontFamily: MONO, fontWeight: 500, fontSize: 13 }}
            >
              Disclosure Velocity →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 sm:py-16 border-y border-border/40" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat, idx) => (
              <div key={stat.value + idx} className="text-center">
                <div style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1, marginBottom: 6 }}>
                  {stat.value}
                </div>
                <div className="text-xs leading-snug" style={{ fontFamily: MONO, color: '#8A9BB5' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL SIGNALS teaser — no DVI badge ── */}
      <InstitutionalSignals hideDVIBadge />

      {/* ── 3 PILLARS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-border/30" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8A9BB5', display: 'block', marginBottom: 12 }}>
              What LBDG provides
            </span>
            <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 'clamp(26px, 3.5vw, 40px)', letterSpacing: '-0.01em' }}>
              Three ways to prepare your organization
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const badgeColors: Record<string, string> = {
                signal:     'text-signal border-signal/30 bg-signal/10',
                classified: 'text-classified border-classified/30 bg-classified/10',
                cold:       'text-cold border-cold/30 bg-cold/10',
              };
              const iconColors: Record<string, string> = {
                signal: 'text-signal', classified: 'text-classified', cold: 'text-cold',
              };
              return (
                <div
                  key={pillar.number}
                  className={`group p-6 rounded-lg border border-border/60 bg-white ${pillar.hoverBorder} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(138,155,181,0.5)', letterSpacing: '0.1em' }}>
                      {pillar.number}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-2xs font-600 tracking-widest uppercase border ${badgeColors[pillar.color]}`} style={{ fontFamily: MONO }}>
                      {pillar.badge}
                    </span>
                  </div>
                  <Icon size={26} className={`mb-4 ${iconColors[pillar.color]}`} />
                  <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 20, marginBottom: 12 }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: 'rgba(74,93,120,0.85)', marginBottom: 24 }}>
                    {pillar.description}
                  </p>
                  <ul className="space-y-2 border-t border-border/50 pt-4">
                    {pillar.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center justify-between text-xs text-muted hover:text-bright group/link transition-colors"
                          style={{ fontFamily: MONO }}
                        >
                          <span>{link.label}</span>
                          <ArrowRight size={12} className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STARTER PACK CTA — navy accent block ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto text-center">
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)', display: 'block', marginBottom: 16 }}>
            Free — Start here
          </span>
          <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: CREAM, fontSize: 'clamp(26px, 3.5vw, 40px)', marginBottom: 16 }}>
            Download the Executive Starter Pack
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto 32px' }}>
            A 10-minute organizational readiness check. Full institutional signal timeline. Sector exposure grid. Decision tree to identify which toolkit your organization needs. Free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            </a>
              href={LS_STARTER_URL}
              className="lemonsqueezy-button group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded transition-all"
              style={{ background: GOLD, color: NAVY, fontFamily: MONO, fontWeight: 700, fontSize: 13 }}
            >
              Download free
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/toolkits"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', fontFamily: MONO, fontSize: 13 }}
            >
              View all toolkits →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOURCES ── */}
      <section className="py-8 px-4 sm:px-6 border-t border-border/20" style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-muted/60 leading-relaxed" style={{ fontFamily: MONO }}>
            Sources: DoD/AARO · NASA · CNES/GEIPAN · Deloitte AG 2026 · Bank of England · Tuttle Capital (CBOE: UFOD) · U.S. Congress · The Age of Disclosure (Dan Farah, 2025) · Pentagon PURSUE (war.gov/ufo, 2026) · Col. Karl Nell (US Army ret.)
          </p>
        </div>
      </section>
    </>
  );
}
