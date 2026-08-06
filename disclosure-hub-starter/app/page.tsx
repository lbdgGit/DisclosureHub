import Link from 'next/link';
import { ArrowRight, Wrench, FileText, TrendingUp, Compass, BookOpen, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import AnimatedStats from '@/components/AnimatedStats';

export const metadata: Metadata = {
  title: 'LBDG - Leadership Bureau for Disclosure Guidance',
  description: 'Institutional preparedness for a disclosure event. Measured, sourced, and built for the people who carry the risk.',
};

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
        The evidence that unidentified anomalous phenomena are real and under official investigation is now part of the public record. A formal disclosure would be one of the most destabilizing events an organization can face. LBDG measures how close that moment is, and helps you be ready for it.
      </PageHeader>

      {/* ── STATS (animated count-up) ── */}
      <section className="py-8 sm:py-12 border-y border-border/40" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }} className="px-4 sm:px-6">
          <AnimatedStats />
        </div>
      </section>

      {/* ── PANIC QUESTIONS (the star: relief + photos) ── */}
      <section className="py-10 sm:py-14 px-4 sm:px-6" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="mb-8 sm:mb-10">
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8A9BB5', display: 'block', marginBottom: 12 }}>
              If disclosure happens
            </span>
            <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 'clamp(26px, 3.5vw, 40px)', letterSpacing: '-0.01em' }}>
              The questions you will be asking
            </h2>
          </div>

          <div className="qgrid">
            {/* HERO - HR */}
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

            {/* SMALL - Leadership */}
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

            {/* SMALL - Finance */}
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
          .qgrid { display: grid; grid-template-columns: 1.7fr 1fr; grid-template-rows: 1fr 1fr; gap: 20px; }
          .qhero { grid-row: 1 / 3; position: relative; border-radius: 14px; overflow: hidden; min-height: 420px; display: flex; align-items: flex-end; box-shadow: 0 18px 40px rgba(27,42,74,0.18); transition: transform .28s ease, box-shadow .28s ease; }
          .qhero:hover { transform: translateY(-4px); box-shadow: 0 26px 56px rgba(27,42,74,0.26); }
          .qhero-media { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform .5s ease; }
          .qhero:hover .qhero-media { transform: scale(1.05); }
          .qhero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,22,40,0.15) 0%, rgba(15,22,40,0.55) 55%, rgba(15,22,40,0.9) 100%); }
          .qhero-body { position: relative; padding: 32px; }
          .qsmall { position: relative; border-radius: 14px; overflow: hidden; background: #FFFFFF; border: 1px solid #E3DCCE; display: flex; flex-direction: column; box-shadow: 0 10px 26px rgba(27,42,74,0.10); transition: transform .28s ease, box-shadow .28s ease; }
          .qsmall:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(27,42,74,0.18); }
          .qsmall-media { height: 120px; background-size: cover; background-position: center; }
          .qsmall-body { padding: 18px 20px 20px; }
          @media (max-width: 820px) { .qgrid { grid-template-columns: 1fr; grid-template-rows: none; } .qhero { grid-row: auto; min-height: 340px; } }
        `}</style>
      </section>

      {/* ── PREPARE: Toolkits + Reports ── */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 border-t border-border/30" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="mb-8 sm:mb-10">
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8A9BB5', display: 'block', marginBottom: 12 }}>
              Prepare
            </span>
            <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 'clamp(26px, 3.5vw, 40px)', letterSpacing: '-0.01em' }}>
              Two ways to get your organization ready
            </h2>
          </div>

          <div className="prepgrid">
            <Link href="/toolkits" className="prepcard group" style={{ textDecoration: 'none' }}>
              <div className="prepcard-icon"><Wrench size={26} style={{ color: NAVY }} /></div>
              <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 10, display: 'block' }}>
                Practical
              </span>
              <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 24, marginBottom: 12, lineHeight: 1.2 }}>
                Operational Toolkits
              </h3>
              <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.65, color: 'rgba(74,93,120,0.85)', marginBottom: 20, flex: 1 }}>
                Eight ready-to-use toolkits for HR, Finance, Communications, Legal, Leadership &amp; Board, Marketing, Supply Chain, and Investor Relations. Scorecards, checklists, decision trees, and word-for-word scripts. Built to be used in the moment, not read in advance.
              </p>
              <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 13, color: NAVY }}>
                Browse the toolkits
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link href="/rapports" className="prepcard group" style={{ textDecoration: 'none' }}>
              <div className="prepcard-icon"><FileText size={26} style={{ color: NAVY }} /></div>
              <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 10, display: 'block' }}>
                In depth
              </span>
              <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 24, marginBottom: 12, lineHeight: 1.2 }}>
                Reports &amp; Analysis
              </h3>
              <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.65, color: 'rgba(74,93,120,0.85)', marginBottom: 20, flex: 1 }}>
                Analytical reports on the financial, geopolitical, and organizational implications of disclosure. Built on documented precedents, every claim sourced, inferences explicitly labeled. For the leader who needs to understand the mechanisms, not just the checklist.
              </p>
              <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 13, color: NAVY }}>
                Read the reports
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>

        <style>{`
          .prepgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          .prepcard { display: flex; flex-direction: column; background: #FFFFFF; border: 1px solid #E3DCCE; border-radius: 14px; padding: 32px; box-shadow: 0 10px 26px rgba(27,42,74,0.09); transition: transform .28s ease, box-shadow .28s ease; }
          .prepcard:hover { transform: translateY(-4px); box-shadow: 0 20px 42px rgba(27,42,74,0.16); }
          .prepcard-icon { width: 52px; height: 52px; border-radius: 11px; background: rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.3); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
          @media (max-width: 720px) { .prepgrid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* ── IS IT REALLY HAPPENING: Velocity + Maturity as proof (navy contrast) ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6" style={{ background: NAVY }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="mb-8 sm:mb-10">
            <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.8)', display: 'block', marginBottom: 12 }}>
              Is it really happening
            </span>
            <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: CREAM, fontSize: 'clamp(26px, 3.5vw, 40px)', letterSpacing: '-0.01em', marginBottom: 12 }}>
              Judge for yourself. Every signal is sourced.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', maxWidth: 640 }}>
              We do not ask you to take our word for it. Two open instruments track the disclosure process from public, verifiable sources: how fast it is moving, and how far it has actually come.
            </p>
          </div>

          <div className="proofgrid">
            <Link href="/signals" className="proofcard group" style={{ textDecoration: 'none' }}>
              <div className="proofcard-icon"><TrendingUp size={26} style={{ color: GOLD }} /></div>
              <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.9)', marginBottom: 10, display: 'block' }}>
                The speed
              </span>
              <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: CREAM, fontSize: 22, marginBottom: 12, lineHeight: 1.2 }}>
                Disclosure Velocity
              </h3>
              <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', marginBottom: 20, flex: 1 }}>
                A single weighted index built from 66 verified institutional events, congressional hearings, official file releases, agency reports, financial instruments. It measures how fast the process is moving. Download the dataset and recompute it yourself.
              </p>
              <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 13, color: GOLD }}>
                See the index
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link href="/maturity" className="proofcard group" style={{ textDecoration: 'none' }}>
              <div className="proofcard-icon"><Compass size={26} style={{ color: GOLD }} /></div>
              <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.9)', marginBottom: 10, display: 'block' }}>
                The state
              </span>
              <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: CREAM, fontSize: 22, marginBottom: 12, lineHeight: 1.2 }}>
                Disclosure Maturity
              </h3>
              <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', marginBottom: 20, flex: 1 }}>
                Where disclosure actually stands across seven institutional sectors, from military and government to legislative, scientific, and financial. Each sector is a first-principles ladder, and every status is sourced against the public record.
              </p>
              <span className="inline-flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 13, color: GOLD }}>
                See where it stands
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>

        <style>{`
          .proofgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          .proofcard { display: flex; flex-direction: column; background: rgba(255,255,255,0.04); border: 1px solid rgba(201,168,76,0.22); border-radius: 14px; padding: 32px; box-shadow: 0 14px 34px rgba(0,0,0,0.28); transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease; }
          .proofcard:hover { transform: translateY(-4px); box-shadow: 0 24px 50px rgba(0,0,0,0.4); border-color: rgba(201,168,76,0.5); }
          .proofcard-icon { width: 52px; height: 52px; border-radius: 11px; background: rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.35); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
          @media (max-width: 720px) { .proofgrid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* ── RESOURCES: full-width card with photo band + 3 inner links ── */}
      <section className="pb-10 sm:pb-14 px-4 sm:px-6" style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="resshell">
            {/* photo side */}
            <div className="resphoto" style={{ backgroundImage: "url('/images/library.jpg')" }}>
              <div className="resphoto-overlay" />
              <div className="resphoto-text">
                <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: GOLD, marginBottom: 10, display: 'block' }}>
                  Reference library
                </span>
                <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: '#FFFFFF', fontSize: 26, lineHeight: 1.15 }}>
                  Go deeper
                </h3>
              </div>
            </div>
            {/* links side */}
            <div className="resinner">
              <Link href="/framework" className="resitem group" style={{ textDecoration: 'none' }}>
                <Compass size={20} style={{ color: NAVY, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 15, marginBottom: 3 }}>Scenarios &amp; Impact</h4>
                  <p style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.5, color: 'rgba(74,93,120,0.8)' }}>The impact matrix: preparedness by scenario.</p>
                </div>
              </Link>
              <Link href="/lexique" className="resitem group" style={{ textDecoration: 'none' }}>
                <BookOpen size={20} style={{ color: NAVY, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 15, marginBottom: 3 }}>Lexicon</h4>
                  <p style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.5, color: 'rgba(74,93,120,0.8)' }}>Glossary of agencies, cases, and terms.</p>
                </div>
              </Link>
              <Link href="/faq" className="resitem group" style={{ textDecoration: 'none' }}>
                <HelpCircle size={20} style={{ color: NAVY, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 15, marginBottom: 3 }}>FAQ</h4>
                  <p style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.5, color: 'rgba(74,93,120,0.8)' }}>Answers from verified institutional sources.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .resshell { background: #FFFFFF; border: 1px solid #E3DCCE; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 26px rgba(27,42,74,0.08); display: grid; grid-template-columns: 300px 1fr; align-items: stretch; }
          .resphoto { position: relative; background-size: cover; background-position: center; min-height: 220px; display: flex; align-items: flex-end; }
          .resphoto-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,22,40,0.25) 0%, rgba(15,22,40,0.75) 100%); }
          .resphoto-text { position: relative; padding: 28px; }
          .resinner { display: grid; grid-template-columns: 1fr; gap: 8px; padding: 24px; align-content: center; }
          .resitem { display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; border-radius: 10px; border: 1px solid transparent; transition: background .2s ease, border-color .2s ease; }
          .resitem:hover { background: #FAF8F4; border-color: #E3DCCE; }
          @media (max-width: 820px) { .resshell { grid-template-columns: 1fr; } .resphoto { min-height: 160px; } }
        `}</style>
      </section>

      {/* ── STARTER PACK CTA ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: NAVY }}>
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
