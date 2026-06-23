import Link from 'next/link';
import { ArrowRight, Radio, AlertTriangle, Wrench, FileText, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';
import { InstitutionalSignals } from '@/components/InstitutionalSignals';
import { DVIBadge } from '@/components/DVIBadge';

export const metadata: Metadata = {
  title: 'LBDG — Leadership Bureau for Disclosure Guidance',
  description:
    'Operational toolkits and institutional signal tracking for organizations preparing for a paradigm-shifting government announcement.',
};

const STATS = [
  { value: '2,000+', label: 'UAP cases tracked by AARO (confirmed by Sec. Hegseth, 2026)' },
  { value: '34',     label: 'Senior officials on record — The Age of Disclosure (Amazon Prime)' },
  { value: '63',     label: 'Verified institutional events in the DVI dataset (39 since 2017)' },
  { value: '$22M',   label: 'Pentagon secret UAP program AATIP 2007-2012 (NYT, 2017)' },
];

const PILLARS = [
  {
    icon: TrendingUp,
    number: '01',
    title: 'Signal Monitor',
    badge: 'Live',
    description: 'Real-time tracking of institutional disclosure signals — government actions, financial instruments, legislative developments. DVI 6.5 — READINESS threshold crossed.',
    links: [
      { href: '/signals', label: 'Open Signal Board' },
      { href: '/frise',   label: 'Historical Timeline' },
    ],
    color: 'signal',
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Operational Toolkits',
    badge: 'Action',
    description: 'Five-tool kits for HR, Finance, Communications, and Leadership. Scorecards, checklists, decision trees, and templates — designed to be used, not read.',
    links: [
      { href: '/toolkits',         label: 'All Toolkits'          },
      { href: '/toolkits#hr',      label: 'HR Toolkit'            },
      { href: '/toolkits#finance', label: 'Finance Toolkit'       },
      { href: '/toolkits#comms',   label: 'Communications Toolkit'},
    ],
    color: 'classified',
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
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-20 pb-16">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[600px] sm:h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, rgba(27,42,74,0.04) 40%, transparent 70%)', filter: 'blur(40px)' }}
          aria-hidden
        />
        <div className="max-w-5xl mx-auto w-full relative">

          {/* DVI Badge — clickable, with visual scale */}
          <div className="mb-6">
            <DVIBadge variant="dark" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-800 leading-[1.05] tracking-tight mb-5" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            <span className="text-bright">It is not a question</span>
            <br />
            <span className="text-bright">of belief.</span>
            <br />
            <span className="text-gradient-signal">It is a question</span>
            <br />
            <span className="text-gradient-signal">of being ready.</span>
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-xl text-body/80 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: 'Syne, sans-serif', fontStyle: 'italic' }}>
            The sitting U.S. Secretary of State is on record. The former UAP Task Force Director has personally seen non-human craft. 34 senior officials are on Amazon Prime. The Pentagon is releasing classified files. Your organization is not prepared.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/toolkits" className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-signal text-void font-display font-700 text-sm tracking-wide hover:bg-signal/90 transition-all glow-signal" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
              Get the Toolkits
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/signals" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-border hover:border-signal/40 text-bright font-display font-600 text-sm tracking-wide hover:bg-signal/5 transition-all" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
              <Radio size={14} className="text-signal" />
              Signal Board →
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start gap-3 max-w-xl">
            <AlertTriangle size={13} className="text-muted mt-0.5 shrink-0" />
            <p className="text-xs text-muted leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              LBDG compiles exclusively verifiable institutional sources: U.S. Congress, DoD/AARO, NASA, CNES/GEIPAN, Deloitte AG, Bank of England, CBOE. No unverified speculation.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 sm:py-16 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-display text-2xl sm:text-4xl font-800 text-gradient-signal mb-1" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-muted leading-snug" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL SIGNALS */}
      <InstitutionalSignals />

      {/* 3 PILLARS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-14">
            <span className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>What LBDG provides</span>
            <h2 className="font-display text-2xl sm:text-4xl font-700 text-bright" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
              Three ways to prepare your organization
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const colorMap: Record<string, string> = {
                signal:     'text-signal border-signal/30 bg-signal/10',
                classified: 'text-classified border-classified/30 bg-classified/10',
                cold:       'text-cold border-cold/30 bg-cold/10',
              };
              const iconColor: Record<string, string> = {
                signal: 'text-signal', classified: 'text-classified', cold: 'text-cold',
              };
              return (
                <div key={pillar.number} className="group p-6 rounded-lg border border-border hover:border-border/80 bg-surface/50 hover:bg-surface transition-all duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-muted/50 tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{pillar.number}</span>
                    <span className={`px-2.5 py-1 rounded-full text-2xs font-mono font-600 tracking-widest uppercase border ${colorMap[pillar.color]}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>{pillar.badge}</span>
                  </div>
                  <Icon size={26} className={`mb-4 ${iconColor[pillar.color]}`} />
                  <h3 className="font-display text-lg font-700 text-bright mb-3" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>{pillar.title}</h3>
                  <p className="text-sm text-body/80 leading-relaxed mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>{pillar.description}</p>
                  <ul className="space-y-2 border-t border-border/50 pt-4">
                    {pillar.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="flex items-center justify-between text-xs font-mono text-muted hover:text-bright group/link transition-colors" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
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

      {/* STARTER PACK CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Free — Start here</span>
          <h2 className="font-display text-2xl sm:text-4xl font-700 text-bright mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
            Download the Executive Starter Pack
          </h2>
          <p className="text-body/80 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
            A 10-minute organizational readiness check. Full institutional signal timeline. Decision tree to identify which toolkit your organization needs. 3 pages. Free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/rapports#starter" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-signal/10 border border-signal/40 text-signal font-mono font-500 text-sm hover:bg-signal/20 hover:border-signal transition-all" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Download free
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/toolkits" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded border border-border hover:border-border/80 text-muted hover:text-bright font-mono font-500 text-sm transition-all" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              View all toolkits →
            </Link>
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="py-8 px-4 sm:px-6 border-t border-border/20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-muted/60 leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Sources: DoD/AARO · NASA · CNES/GEIPAN · Deloitte AG 2026 · Bank of England · Tuttle Capital (CBOE: UFOD) · U.S. Congress · The Age of Disclosure (Dan Farah, 2025) · Pentagon PURSUE (war.gov/ufo, 2026) · Col. Karl Nell (US Army ret.)
          </p>
        </div>
      </section>
    </>
  );
}
