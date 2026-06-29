'use client';

import { useState } from 'react';
import { ArrowRight, Download, FileText, Users, TrendingUp, Radio, Crown, Scale, BarChart2, Truck, LineChart, Package } from 'lucide-react';

const LS_URLS: Record<string, string> = {
  starter:    'https://lbdg.lemonsqueezy.com/checkout/buy/b8c638cd-b612-4acc-95ad-e6b7e9699634?embed=1',
  hr:         'https://lbdg.lemonsqueezy.com/checkout/buy/70b2894a-54b5-4e52-850c-9b2ba54971f7?embed=1',
  finance:    'https://lbdg.lemonsqueezy.com/checkout/buy/babe7e6a-bb93-407a-9845-dc0db2e90eaa?embed=1',
  comms:      'https://lbdg.lemonsqueezy.com/checkout/buy/0e03c5a7-fb39-4d03-927f-7037b49a9b1e?embed=1',
  board:      'https://lbdg.lemonsqueezy.com/checkout/buy/2f0bc701-7b7c-4f22-833d-5e439b774ac9?embed=1',
  legal:      'https://lbdg.lemonsqueezy.com/checkout/buy/325c2dee-f1f8-4a89-8b51-43e36cb0bcba?embed=1',
  marketing:  'https://lbdg.lemonsqueezy.com/checkout/buy/6fb93fdc-000f-4669-bf5b-d96bb6b476fa?embed=1',
  supplychain:'https://lbdg.lemonsqueezy.com/checkout/buy/b4847129-1bee-4b9e-8145-6c7f0ebf86f6?embed=1',
  ir:         'https://lbdg.lemonsqueezy.com/checkout/buy/6a4d61d6-b5cd-4179-8c21-847fb7edab1a?embed=1',
  bundle:     'https://lbdg.lemonsqueezy.com/checkout/buy/d420ff06-5bca-4f1c-8931-cf58dc783fdd?embed=1',
};

const TOOLKITS = [
  {
    id: 'hr',
    title: 'HR Toolkit',
    subtitle: 'Workforce Readiness for Institutional Disclosure',
    badge: 'FREE',
    badgeColor: 'text-green-400 border-green-400/30 bg-green-400/10',
    price: 'Free',
    description: 'Workforce communication protocols, psychological safety frameworks, absenteeism planning, and manager cascade scripts. Covers readiness assessment, leadership workshop facilitation, and recovery monitoring.',
    tools: ['Organizational Readiness Scorecard', 'Leadership Workshop Guide (2h)', 'Communication Cascade Checklist', 'Manager Action Guide + scripts', 'Recovery KPI Dashboard'],
    pages: 40,
    audience: 'HR Directors · CHROs · People Managers',
    icon: Users,
    free: true,
    anchor: 'hr',
  },
  {
    id: 'finance',
    title: 'Finance Toolkit',
    subtitle: 'CFO Crisis Protocol',
    badge: 'Operational',
    badgeColor: 'text-signal border-signal/30 bg-signal/10',
    price: '€49',
    description: 'Sector exposure audit, scenario decision tree (A/B1/B2/C), 72-hour crisis checklist, trigger threshold monitor, and compliance quick-check. Grounded in the nuclear technology analogy framework.',
    tools: ['Sector Exposure Audit (fill-in)', 'Scenario Decision Tree (A/B1/B2/C)', '72-Hour Crisis Checklist', 'Trigger Threshold Monitor', 'Compliance Quick-Check (Reg FD/AMF/FCA)'],
    pages: 38,
    audience: 'CFOs · Risk Managers · Compliance Officers',
    icon: TrendingUp,
    free: false,
    anchor: 'finance',
  },
  {
    id: 'comms',
    title: 'Communications Toolkit',
    subtitle: 'Crisis Comms Protocol',
    badge: 'Operational',
    badgeColor: 'text-signal border-signal/30 bg-signal/10',
    price: '€49',
    description: 'Readiness scorecard, stakeholder cascade, media relations guide with bridge statements, digital/social protocol, and message framework — including how to communicate about NHI disclosure in credible business language.',
    tools: ['Communications Readiness Scorecard', 'Stakeholder Map & Cascade Checklist', 'Media Relations Guide + bridge statements', 'Digital & Social Media Protocol', 'Message Framework (NHI in business language)'],
    pages: 44,
    audience: 'CCOs · PR Directors · Media Relations',
    icon: Radio,
    free: false,
    anchor: 'comms',
  },
  {
    id: 'board',
    title: 'Leadership & Board Toolkit',
    subtitle: 'Governance Protocol',
    badge: 'C-Suite',
    badgeColor: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
    price: '€79',
    description: 'The orchestration layer for all other LBDG toolkits. Governance readiness scorecard, decision authority matrix, board briefing templates by scenario, CEO leadership guide with word-for-word scripts.',
    tools: ['Board Governance Readiness Scorecard', 'Decision Authority Matrix', 'Board Briefing Templates (A/B1/B2/C)', 'CEO Leadership Guide + scripts', 'Strategic Review Checklist (30/60/90 days)'],
    pages: 42,
    audience: 'CEOs · Board Members · C-Suite',
    icon: Crown,
    free: false,
    anchor: 'board',
  },
  {
    id: 'legal',
    title: 'Legal & Compliance Toolkit',
    subtitle: 'Disclosure & Compliance Protocol',
    badge: 'Operational',
    badgeColor: 'text-signal border-signal/30 bg-signal/10',
    price: '€49',
    description: 'Reg FD / AMF / UK MAR obligations, materiality assessment framework, disclosure triggers checklist, record management protocol, and outside counsel briefing guide.',
    tools: ['Disclosure Obligations Checklist (Reg FD/AMF/MAR)', 'Materiality Assessment Framework', 'Trigger Event Decision Tree', 'Record Management Protocol', 'Outside Counsel Briefing Guide'],
    pages: 36,
    audience: 'General Counsel · Legal Directors · Compliance Officers',
    icon: Scale,
    free: false,
    anchor: 'legal',
  },
  {
    id: 'marketing',
    title: 'Marketing Toolkit',
    subtitle: 'Demand Disruption Protocol',
    badge: 'Operational',
    badgeColor: 'text-signal border-signal/30 bg-signal/10',
    price: '€49',
    description: 'Demand model review, campaign pause/adapt decision tree, brand narrative framework for paradigm-shifting context, customer communication templates, and digital channel protocol.',
    tools: ['Demand Model Review Scorecard', 'Campaign Pause/Adapt Decision Tree', 'Brand Narrative Framework', 'Customer Communication Templates', 'Digital Channel Protocol'],
    pages: 34,
    audience: 'CMOs · Marketing Directors · Brand Managers',
    icon: BarChart2,
    free: false,
    anchor: 'marketing',
  },
  {
    id: 'supplychain',
    title: 'Supply Chain Toolkit',
    subtitle: 'Operations Continuity Protocol',
    badge: 'Operational',
    badgeColor: 'text-signal border-signal/30 bg-signal/10',
    price: '€49',
    description: 'Supplier exposure mapping, demand surge planning, backup supplier identification, logistics continuity protocol, and 72-hour operational checklist for COOs and operations leads.',
    tools: ['Supplier Exposure Map (fill-in)', 'Demand Surge Planning Tool', 'Backup Supplier Identification Matrix', 'Logistics Continuity Protocol', '72-Hour Operations Checklist'],
    pages: 36,
    audience: 'COOs · Supply Chain Directors · Procurement',
    icon: Truck,
    free: false,
    anchor: 'supplychain',
  },
  {
    id: 'ir',
    title: 'Investor Relations Toolkit',
    subtitle: 'IR Crisis Protocol',
    badge: 'Operational',
    badgeColor: 'text-signal border-signal/30 bg-signal/10',
    price: '€49',
    description: 'Investor call scripts by scenario, analyst FAQ, SEC/AMF exchange filing obligations, holding statement templates, and investor communication cascade for public companies.',
    tools: ['Investor Call Scripts (A/B1/B2/C)', 'Analyst FAQ Template', 'SEC/AMF Filing Obligations Checklist', 'Holding Statement Templates', 'Investor Communication Cascade'],
    pages: 34,
    audience: 'IR Directors · CFOs · Public Companies',
    icon: LineChart,
    free: false,
    anchor: 'ir',
  },
];

export default function ToolkitsPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  const freeToolkit = TOOLKITS.find(t => t.free)!;
  const paidToolkits = TOOLKITS.filter(t => !t.free);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-20">

      {/* ── HEADER ── */}
      <div className="mb-12">
        <span className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Operational Toolkits
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-800 text-bright mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Prepare your organization. Now.
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Eight operational toolkits for HR, Finance, Communications, Legal, Leadership & Board, Marketing, Supply Chain, and Investor Relations. Scorecards, checklists, decision trees, and templates — designed to be used, not read.
        </p>
      </div>

      {/* ── STARTER PACK CTA ── */}
      <div className="mb-8 p-5 rounded-xl border border-border/40 bg-surface/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-2xs font-mono text-muted/60 tracking-widest uppercase block mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Read first
          </span>
          <p className="text-sm text-body/80" style={{ fontFamily: 'Syne, sans-serif' }}>
            <strong className="text-bright">Executive Starter Pack</strong> — 10-minute readiness check, sector exposure grid, DVI explained, CEO orchestration. Free.
          </p>
        </div>
        <a
          href={LS_URLS.starter}
          className="lemonsqueezy-button shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded border border-green-400/40 bg-green-400/10 text-green-400 font-mono text-sm hover:bg-green-400/20 transition-all whitespace-nowrap"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          <Download size={14} />
          Download free
        </a>
      </div>

      {/* ── FREE HR TOOLKIT ── */}
      <div id={freeToolkit.anchor} className="mb-6 p-6 sm:p-8 rounded-xl border border-green-400/20 bg-green-400/5 hover:bg-green-400/8 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          <div className="shrink-0 w-12 h-12 rounded-lg border border-green-400/20 bg-green-400/10 flex items-center justify-center">
            <freeToolkit.icon size={22} className="text-green-400" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 rounded text-2xs font-mono border font-600 ${freeToolkit.badgeColor}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {freeToolkit.badge}
              </span>
              <span className="text-2xs font-mono text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {freeToolkit.pages} pages · {freeToolkit.audience}
              </span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-700 text-bright mb-1" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
              {freeToolkit.title}
            </h2>
            <p className="text-xs font-mono text-muted mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {freeToolkit.subtitle}
            </p>
            <p className="text-sm text-body/80 leading-relaxed mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              {freeToolkit.description}
            </p>
            <ul className="space-y-1 mb-5">
              {freeToolkit.tools.map(tool => (
                <li key={tool} className="flex items-center gap-2 text-xs text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <span className="w-1 h-1 rounded-full bg-green-400 shrink-0" />
                  {tool}
                </li>
              ))}
            </ul>
            <a
              href={LS_URLS.hr}
              className="lemonsqueezy-button inline-flex items-center gap-2 px-5 py-2.5 rounded bg-green-400/10 border border-green-400/40 text-green-400 font-mono text-sm hover:bg-green-400/20 transition-all"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <Download size={14} />
              Download free
            </a>
          </div>
        </div>
      </div>

      {/* ── PAID TOOLKITS GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {paidToolkits.map(toolkit => {
          const Icon = toolkit.icon;
          return (
            <div
              key={toolkit.id}
              id={toolkit.anchor}
              className="flex flex-col p-6 rounded-xl border border-border bg-surface/40 hover:bg-surface hover:border-border/80 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-lg border border-border bg-surface/80 flex items-center justify-center">
                  <Icon size={18} className="text-muted" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-2xs font-mono border ${toolkit.badgeColor}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {toolkit.badge}
                    </span>
                    <span className="text-2xs font-mono text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {toolkit.pages}p
                    </span>
                    <span className="ml-auto text-sm font-mono font-700 text-bright" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {toolkit.price}
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-700 text-bright" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                    {toolkit.title}
                  </h3>
                  <p className="text-2xs font-mono text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {toolkit.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-body/70 leading-relaxed mb-4 flex-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                {toolkit.description}
              </p>

              <ul className="space-y-1 mb-5 border-t border-border/50 pt-4">
                {toolkit.tools.map(tool => (
                  <li key={tool} className="flex items-center gap-2 text-xs text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    <span className="w-1 h-1 rounded-full bg-signal shrink-0" />
                    {tool}
                  </li>
                ))}
              </ul>

              <div className="text-2xs font-mono text-muted/60 mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {toolkit.audience}
              </div>

              <a
                href={LS_URLS[toolkit.id]}
                className="lemonsqueezy-button w-full flex items-center justify-center gap-2 py-2.5 rounded border border-signal/30 text-signal font-mono text-sm hover:bg-signal/10 hover:border-signal/50 transition-all"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <Download size={14} />
                Get toolkit — {toolkit.price}
              </a>
            </div>
          );
        })}
      </div>

      {/* ── BUNDLE ── */}
      <div className="p-6 sm:p-8 rounded-xl border border-yellow-400/30 bg-yellow-400/5 hover:bg-yellow-400/8 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-lg border border-yellow-400/30 bg-yellow-400/10 flex items-center justify-center">
              <Package size={22} className="text-yellow-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-2xs font-mono border text-yellow-400 border-yellow-400/30 bg-yellow-400/10 font-600" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Bundle
                </span>
                <span className="text-2xs font-mono text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  All 8 toolkits
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-700 text-bright mb-1" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                Full Toolkit Bundle
              </h3>
              <p className="text-sm text-body/70 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
                HR, Finance, Communications, Legal & Compliance, Leadership & Board, Marketing, Supply Chain, and Investor Relations. Designed for parallel activation at D0 across all organizational functions.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <span className="font-display text-3xl font-800 text-bright" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
              €249
            </span>
            <a
              href={LS_URLS.bundle}
              className="lemonsqueezy-button inline-flex items-center gap-2 px-6 py-3 rounded border border-yellow-400/40 bg-yellow-400/10 text-yellow-400 font-mono text-sm hover:bg-yellow-400/20 transition-all whitespace-nowrap"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}
            >
              <ArrowRight size={14} />
              Get full bundle
            </a>
            <span className="text-2xs font-mono text-muted/50" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              vs €392 individually
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
