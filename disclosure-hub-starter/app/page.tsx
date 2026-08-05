import Link from 'next/link';
import { ArrowRight, Wrench, FileText, TrendingUp, BookOpen, HelpCircle, Compass } from 'lucide-react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'LBDG - Leadership Bureau for Disclosure Guidance',
  description: 'Institutional preparedness for a disclosure event. Measured, sourced, and built for the people who carry the risk.',
};

const STATS = [
  { value: '2,000+', label: 'UAP cases tracked by AARO (confirmed by Sec. Hegseth, 2026)' },
  { value: '34',     label: 'Senior officials on record in The Age of Disclosure (Amazon Prime)' },
  { value: '66',     label: 'Verified institutional events in the DVI dataset (40 since 2017)' },
  { value: '$22M',   label: 'Pentagon secret UAP program AATIP 2007-2012 (NYT, 2017)' },
];

const PILLARS = [
  {
    icon: TrendingUp,
    number: '01',
    title: 'Disclosure Velocity',
    badge: 'Live',
    description: 'A single weighted index, the DVI, tracking how fast institutional disclosure is moving across 66 verified events. Government actions, financial instruments, legislative developments.',
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
    description: 'Eight operational toolkits for HR, Finance, Communications, Legal, Leadership & Board, Marketing, Supply Chain, and Investor Relations. Scorecards, checklists, decision trees, and templates, designed to be used, not read.',
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

const RESOURCES = [
  { icon: Compass,    title: 'Scenarios & Impact', blurb: 'The disclosure impact matrix: preparedness by scenario.', href: '/framework' },
  { icon: BookOpen,   title: 'Lexicon',            blurb: 'Institutional-grade glossary of agencies, cases, and terms.', href: '/lexique' },
  { icon: HelpCircle, title: 'FAQ',                blurb: 'Answers grounded exclusively in verified institutional sources.', href: '/faq' },
];

const LS_STARTER_URL = 'https://lbdg.lemonsqueezy.com/checkout/buy/b8c638cd-b612-4acc-95ad-e6b7e9699634?embed=1';

const SERIF = 'Playfair Display, serif';
const SANS = 'DM Sans, sans-serif';
const MONO = 'DM Mono, monospace';
const NAVY = '#1B2A4A';
const GOLD = '#C9A84C';
const CREAM = '#FAF8F4';

export default function HomePage() {
  return (
    <>
      {/* ── STANDARD HEADER ── */}
      <PageHeader eyebrow="LBDG · Leadership Bureau for Disclosure Guidance" title="Institutional preparedness for a disclosure event.">
        Measured, sourced, and built for the people who carry the risk. The direction is settled; your position when the threshold is crossed is not. LBDG measures how close that moment is, and what it costs to be unprepared.
      </PageHeader>

      {/* ── STATS ── */}
      <section className="py-12 sm:py-16 border-y border-border/40" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }} className="px-4 sm:px-6">
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

      {/* ── PANIC QUESTIONS (SEO cards, with relief) ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="mb-10 sm:mb-14">
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8A9BB5', display: 'block', marginBottom: 12 }}>
              If disclosure happens
            </span>
            <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 'clamp(26px, 3.5vw, 40px)', letterSpacing: '-0.01em' }}>
              The questions you will be asking
            </h2>
          </div>

          <div className="qgrid">
            {/* HERO — HR */}
            <Link href="/workforce-disclosure" className="qhero group" style={{ textDecoration: 'none' }}>
              <div className="qhero-media" style={{ backgroundImage: "url('/images/hr.jpg')" }} />
              <div className="qhero-overlay" />
              <div className="qhero-body">
                <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: 12, display: 'block' }}>
                  Workforce
                </span>
                <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: '#FFFFFF', fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.15, marginBottom: 12, maxWidth: 460 }}>
                  My employees are panicking. What do I do?
                </h3>
                <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.82)', marginBottom: 18, maxWidth: 420 }}>
                  Managing absenteeism, stress, and workplace stability if a disclosure announcement lands on your people.
                </p>
                <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 13, color: '#FFFFFF' }}>
                  Read the guide
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* SMALL — Leadership */}
            <Link href="/leadership-disclosure" className="qsmall group" style={{ textDecoration: 'none' }}>
              <div className="qsmall-media" style={{ backgroundImage: "url('/images/leadership.jpg')" }} />
              <div className="qsmall-body">
                <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 6, display: 'block' }}>
                  Leadership
                </span>
                <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 19, lineHeight: 1.25, marginBottom: 8 }}>
                  What should my company actually do?
                </h3>
                <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 12, color: NAVY }}>
                  Read the guide
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* SMALL — Finance */}
            <Link href="/finance-disclosure" className="qsmall group" style={{ textDecoration: 'none' }}>
              <div className="qsmall-media" style={{ backgroundImage: "url('/images/finance.jpg')" }} />
              <div className="qsmall-body">
                <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 6, display: 'block' }}>
                  Finance
                </span>
                <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 19, lineHeight: 1.25, marginBottom: 8 }}>
                  How exposed is my business financially?
                </h3>
                <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 12, color: NAVY }}>
                  Read the guide
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>

        <style>{`
          .qgrid {
            display: grid;
            grid-template-columns: 1.7fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 20px;
          }
          .qhero {
            grid-row: 1 / 3;
            position: relative;
            border-radius: 14px;
            overflow: hidden;
            min-height: 420px;
            display: flex;
            align-items: flex-end;
            box-shadow: 0 18px 40px rgba(27,42,74,0.18);
            transition: transform .28s ease, box-shadow .28s ease;
          }
          .qhero:hover { transform: translateY(-4px); box-shadow: 0 26px 56px rgba(27,42,74,0.26); }
          .qhero-media {
            position: absolute; inset: 0;
            background-size: cover; background-position: center;
            transition: transform .5s ease;
          }
          .qhero:hover .qhero-media { transform: scale(1.05); }
          .qhero-overlay {
            position: absolute; inset: 0;
            background: linear-gradient(180deg, rgba(15,22,40,0.15) 0%, rgba(15,22,40,0.55) 55%, rgba(15,22,40,0.9) 100%);
          }
          .qhero-body { position: relative; padding: 32px; }

          .qsmall {
            position: relative;
            border-radius: 14px;
            overflow: hidden;
            background: #FFFFFF;
            border: 1px solid #E3DCCE;
            display: flex;
            flex-direction: column;
            box-shadow: 0 10px 26px rgba(27,42,74,0.10);
            transition: transform .28s ease, box-shadow .28s ease;
          }
          .qsmall:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(27,42,74,0.18); }
          .qsmall-media {
            height: 120px;
            background-size: cover; background-position: center;
          }
          .qsmall-body { padding: 18px 20px 20px; }

          @media (max-width: 820px) {
            .qgrid { grid-template-columns: 1fr; grid-template-rows: none; }
            .qhero { grid-row: auto; min-height: 340px; }
          }
        `}</style>
      </section>

     {/* ── 4 PILLARS (relief, icons) ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-border/30" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="mb-10 sm:mb-14">
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8A9BB5', display: 'block', marginBottom: 12 }}>
              What LBDG provides
            </span>
            <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 'clamp(26px, 3.5vw, 40px)', letterSpacing: '-0.01em' }}>
              Four ways to prepare your organization
            </h2>
          </div>

          <div className="pgrid">
            {[
              { icon: TrendingUp, eyebrow: 'Live index',   title: 'Disclosure Velocity', blurb: 'A single weighted index tracking how fast institutional disclosure is moving across 66 verified events.', href: '/signals' },
              { icon: Compass,    eyebrow: 'State of play', title: 'Disclosure Maturity', blurb: 'Where disclosure actually stands across seven institutional sectors, each a first-principles ladder, every status sourced.', href: '/maturity' },
              { icon: Wrench,     eyebrow: 'Action',        title: 'Operational Toolkits', blurb: 'Eight toolkits for HR, Finance, Legal, Board and more. Scorecards, checklists, decision trees, designed to be used.', href: '/toolkits' },
              { icon: FileText,   eyebrow: 'Analysis',      title: 'Reports & Analysis', blurb: 'In-depth analytical reports on the financial, geopolitical, and organizational implications of disclosure.', href: '/rapports' },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <Link key={p.href} href={p.href} className="pcard group" style={{ textDecoration: 'none' }}>
                  <div className="pcard-icon"><Icon size={24} style={{ color: NAVY }} /></div>
                  <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 8, display: 'block' }}>
                    {p.eyebrow}
                  </span>
                  <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 20, marginBottom: 10, lineHeight: 1.2 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: 'rgba(74,93,120,0.85)', marginBottom: 16, flex: 1 }}>
                    {p.blurb}
                  </p>
                  <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 12, color: NAVY }}>
                    Explore
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <style>{`
          .pgrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          .pcard {
            display: flex;
            flex-direction: column;
            background: #FFFFFF;
            border: 1px solid #E3DCCE;
            border-radius: 14px;
            padding: 24px;
            box-shadow: 0 10px 26px rgba(27,42,74,0.09);
            transition: transform .28s ease, box-shadow .28s ease;
          }
          .pcard:hover { transform: translateY(-4px); box-shadow: 0 20px 42px rgba(27,42,74,0.16); }
          .pcard-icon {
            width: 48px; height: 48px;
            border-radius: 10px;
            background: rgba(201,168,76,0.12);
            border: 1px solid rgba(201,168,76,0.3);
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 18px;
          }
          @media (max-width: 900px) { .pgrid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 520px) { .pgrid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* ── RESOURCES ── */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RESOURCES.map((r) => {
              const Icon = r.icon;
              return (
                <Link key={r.href} href={r.href} className="group flex items-start gap-4 p-5 rounded-lg border border-border/50 bg-white hover:border-border hover:shadow-md transition-all" style={{ textDecoration: 'none' }}>
                  <Icon size={22} style={{ color: NAVY, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 16, marginBottom: 4 }}>
                      {r.title}
                    </h4>
                    <p style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.5, color: 'rgba(74,93,120,0.8)' }}>
                      {r.blurb}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STARTER PACK CTA ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto text-center">
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)', display: 'block', marginBottom: 16 }}>
            Free · Start here
          </span>
          <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: CREAM, fontSize: 'clamp(26px, 3.5vw, 40px)', marginBottom: 16 }}>
            Download the Executive Starter Pack
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto 32px' }}>
            A 10-minute organizational readiness check. Full institutional signal timeline. Sector exposure grid. Decision tree to identify which toolkit your organization needs. Free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={LS_STARTER_URL} className="lemonsqueezy-button group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded transition-all" style={{ background: GOLD, color: NAVY, fontFamily: MONO, fontWeight: 700, fontSize: 13 }}>Download free <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></a>
            <Link href="/toolkits" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded transition-all" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', fontFamily: MONO, fontSize: 13 }}>View all toolkits →</Link>
          </div>
        </div>
      </section>

      {/* ── SOURCES ── */}
      <section className="py-8 px-4 sm:px-6 border-t border-border/20" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }} className="text-center">
          <p className="text-xs text-muted/60 leading-relaxed" style={{ fontFamily: MONO }}>
            Sources: DoD/AARO · NASA · CNES/GEIPAN · Deloitte AG 2026 · Bank of England · Tuttle Capital (CBOE: UFOD) · U.S. Congress · The Age of Disclosure (Dan Farah, 2025) · Pentagon PURSUE (war.gov/ufo, 2026) · Col. Karl Nell (US Army ret.)
          </p>
        </div>
      </section>
    </>
  );
}
