'use client';

import { useState } from 'react';
import { Download, FileText, X, CheckCircle, Users, TrendingUp, Radio, Crown } from 'lucide-react';
import type { Metadata } from 'next';

const TOOLKITS = [
  {
    id: 'starter',
    title: 'Executive Starter Pack',
    badge: 'FREE',
    badgeColor: 'text-green-400 border-green-400/30 bg-green-400/10',
    description: 'A 10-minute organizational readiness check. Full institutional signal timeline (1947–2026). Decision tree to identify which LBDG toolkit your organization needs. The right starting point for any executive.',
    tools: ['10-minute readiness scorecard', 'Institutional signal timeline', 'Toolkit decision tree', 'Which-toolkit guide'],
    pages: 3,
    audience: 'All organizations',
    icon: FileText,
    pdfPath: '/downloads/LBDG-Executive-Starter-Pack-v2.pdf',
    free: true,
    anchor: 'starter',
  },
  {
    id: 'hr',
    title: 'HR Operational Toolkit',
    badge: 'Operational',
    badgeColor: 'text-signal border-signal/30 bg-signal/10',
    description: 'Five operational tools for HR Directors, CHROs, and people managers. Designed to be completed, not read. Covers readiness assessment, leadership workshop facilitation, communication cascade, manager scripts, and recovery monitoring.',
    tools: ['Organizational Readiness Scorecard', 'Leadership Workshop Guide (2h)', 'Communication Cascade Checklist', 'Manager Action Guide + scripts', 'Recovery KPI Dashboard'],
    pages: 40,
    audience: 'HR Directors · CHROs · People Managers',
    icon: Users,
    pdfPath: '/downloads/LBDG-HR-Toolkit-Operational-2025.pdf',
    free: false,
    anchor: 'hr',
  },
  {
    id: 'finance',
    title: 'Finance Operational Toolkit',
    badge: 'Operational',
    badgeColor: 'text-signal border-signal/30 bg-signal/10',
    description: 'Five operational tools for CFOs and risk managers. Sector exposure audit, scenario decision tree (A/B1/B2/C), 72-hour crisis checklist, trigger threshold monitor, and compliance quick-check. Grounded in the nuclear technology analogy framework.',
    tools: ['Sector Exposure Audit (fill-in)', 'Scenario Decision Tree (A/B1/B2/C)', '72-Hour Crisis Checklist', 'Trigger Threshold Monitor', 'Compliance Quick-Check (Reg FD/AMF/FCA)'],
    pages: 38,
    audience: 'CFOs · Risk Managers · Compliance Officers',
    icon: TrendingUp,
    pdfPath: '/downloads/LBDG-Finance-Toolkit-Operational-2025.pdf',
    free: false,
    anchor: 'finance',
  },
  {
    id: 'comms',
    title: 'Communications Operational Toolkit',
    badge: 'Operational',
    badgeColor: 'text-signal border-signal/30 bg-signal/10',
    description: 'Five operational tools for CCOs, communications directors, and PR teams. Readiness scorecard, stakeholder cascade, media relations guide with bridge statements, digital/social protocol, and message framework — including how to communicate about NHI disclosure in credible business language.',
    tools: ['Communications Readiness Scorecard', 'Stakeholder Map & Cascade Checklist', 'Media Relations Guide + bridge statements', 'Digital & Social Media Protocol', 'Message Framework (NHI in business language)'],
    pages: 44,
    audience: 'CCOs · PR Directors · Media Relations',
    icon: Radio,
    pdfPath: '/downloads/LBDG-Communications-Toolkit-Operational-2025.pdf',
    free: false,
    anchor: 'comms',
  },
  {
    id: 'board',
    title: 'Leadership & Board Toolkit',
    badge: 'C-Suite',
    badgeColor: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
    description: 'The orchestration layer for all other LBDG toolkits. For CEOs and board members: governance readiness scorecard, decision authority matrix, board briefing templates by scenario (A/B1/B2/C), CEO leadership guide with word-for-word scripts, and a strategic review checklist.',
    tools: ['Board Governance Readiness Scorecard', 'Decision Authority Matrix', 'Board Briefing Templates (A/B1/B2/C)', 'CEO Leadership Guide + scripts', 'Strategic Review Checklist (30/60/90 days)'],
    pages: 42,
    audience: 'CEOs · Board Members · C-Suite',
    icon: Crown,
    pdfPath: '/downloads/LBDG-Leadership-Board-Toolkit-2025.pdf',
    free: false,
    anchor: 'board',
  },
];

interface EmailGateProps {
  toolkit: typeof TOOLKITS[0];
  onClose: () => void;
}

function EmailGate({ toolkit, onClose }: EmailGateProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, kitId: toolkit.id }),
      });
    } catch {
      // API failed — still give access
    } finally {
      setLoading(false);
      setSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-xl border border-signal/30 bg-surface p-6 shadow-signal">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted hover:text-bright transition-colors">
          <X size={18} />
        </button>

        {success ? (
          <div className="text-center py-4">
            <CheckCircle size={40} className="text-green-400 mx-auto mb-3" />
            <h3 className="font-display text-xl font-700 text-bright mb-3" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
              Access granted
            </h3>
            <p className="text-sm text-body/70 mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Your PDF is ready to download. You will also receive LBDG signal alerts when new toolkits are released.
            </p>
            <a
              href={toolkit.pdfPath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-signal/10 border border-signal/40 text-signal font-mono text-sm hover:bg-signal/20 transition-all"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <Download size={14} />
              Download {toolkit.title} PDF
            </a>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <span className="text-2xs font-mono text-signal tracking-widest uppercase block mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Download
              </span>
              <h3 className="font-display text-lg font-700 text-bright" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                {toolkit.title}
              </h3>
            </div>
            <p className="text-sm text-body/70 mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
              Enter your professional email to access this toolkit and receive LBDG signal alerts. No spam — only updates that matter.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                className="w-full px-4 py-2.5 rounded border border-border bg-panel text-bright text-sm placeholder:text-muted/50 focus:outline-none focus:border-signal/50 transition-colors"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              />
              {error && (
                <p className="text-xs text-red-400" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded bg-signal/10 border border-signal/40 text-signal font-mono font-600 text-sm hover:bg-signal/20 disabled:opacity-50 transition-all"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {loading ? 'Processing…' : 'Access toolkit →'}
              </button>
            </form>
            <p className="text-2xs text-muted/50 text-center mt-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              GDPR compliant · Unsubscribe anytime
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function ToolkitsPage() {
  const [activeGate, setActiveGate] = useState<typeof TOOLKITS[0] | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-20">
      {activeGate && <EmailGate toolkit={activeGate} onClose={() => setActiveGate(null)} />}

      {/* Header */}
      <div className="mb-12">
        <span className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Operational Toolkits
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-800 text-bright mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Prepare your organization. Now.
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Five operational toolkits for CFOs, HR Directors, Communications teams, and Boards. Scorecards to fill in. Checklists to activate. Scripts to read. Designed to be used, not read.
        </p>
      </div>

      {/* Starter Pack — highlighted */}
      {TOOLKITS.filter(t => t.free).map(toolkit => {
        const Icon = toolkit.icon;
        return (
          <div key={toolkit.id} id={toolkit.anchor} className="mb-6 p-6 sm:p-8 rounded-xl border border-green-400/20 bg-green-400/5 hover:bg-green-400/8 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-lg border border-green-400/20 bg-green-400/10 flex items-center justify-center">
                <Icon size={22} className="text-green-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded text-2xs font-mono border font-600 ${toolkit.badgeColor}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {toolkit.badge}
                  </span>
                  <span className="text-2xs font-mono text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {toolkit.pages} pages · {toolkit.audience}
                  </span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-700 text-bright mb-2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                  {toolkit.title}
                </h2>
                <p className="text-sm text-body/80 leading-relaxed mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {toolkit.description}
                </p>
                <a
                  href={toolkit.pdfPath}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-green-400/10 border border-green-400/40 text-green-400 font-mono text-sm hover:bg-green-400/20 transition-all"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  <Download size={14} />
                  Download free PDF
                </a>
              </div>
            </div>
          </div>
        );
      })}

      {/* Paid toolkits grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {TOOLKITS.filter(t => !t.free).map(toolkit => {
          const Icon = toolkit.icon;
          return (
            <div key={toolkit.id} id={toolkit.anchor} className="flex flex-col p-6 rounded-xl border border-border bg-surface/40 hover:bg-surface hover:border-border/80 transition-all">

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
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-700 text-bright" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                    {toolkit.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-body/70 leading-relaxed mb-4 flex-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                {toolkit.description}
              </p>

              {/* Tools list */}
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

              <button
                onClick={() => setActiveGate(toolkit)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded border border-signal/30 text-signal font-mono text-sm hover:bg-signal/10 hover:border-signal/50 transition-all"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <Download size={14} />
                Access toolkit PDF
              </button>
            </div>
          );
        })}
      </div>

      {/* Coming soon */}
      <div className="mt-10 p-5 rounded-lg border border-border/40 bg-surface/20 text-center">
        <span className="text-2xs font-mono text-muted tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Coming soon — Communications Toolkit · SME Lite Pack · Sector-specific editions · Signal Monitor subscription
        </span>
      </div>
    </div>
  );
}
