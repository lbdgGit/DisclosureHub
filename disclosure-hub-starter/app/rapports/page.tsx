'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, FileText, ArrowRight, Bell, X, CheckCircle } from 'lucide-react';

const LS_STARTER_URL = 'https://lbdg.lemonsqueezy.com/checkout/buy/2e53ef9a-fa4b-4c3d-9cfd-a10a6ec91c3b?embed=1';

const REPORTS = [
  {
    id: 'finance-risk',
    title: 'Finance Risk Report — Disclosure Scenarios A through C',
    badge: 'Analytical',
    status: 'coming',
    description: 'In-depth financial risk analysis for CFOs and risk managers. Four-scenario framework (A/B1/B2/C) with documented market precedents from COVID-19 and 9/11. The nuclear technology analogy applied to sector repricing.',
    features: [
      'Scenario A/B1/B2/C financial impact analysis',
      'COVID-19 and 9/11 as documented market precedents',
      'Nuclear analogy: 15-30y energy disruption timeline',
      'Defense contractor legal risk framework',
      'Sector winners and losers — verified inference',
    ],
    pages: 42,
    audience: 'CFOs · Risk Managers · Compliance Officers',
  },
  {
    id: 'geopolitical',
    title: 'Geopolitical Implications Report',
    badge: 'Analytical',
    status: 'coming',
    description: 'How state actors are positioning for disclosure. International coordination patterns, the Japan-US alignment, EU regulatory posture, and what controlled vs uncontrolled disclosure means for geopolitical stability.',
    features: [
      'US-Japan-EU institutional alignment analysis',
      'Controlled vs catastrophic disclosure scenarios',
      'State actor positioning and strategic interests',
      'International treaty and sovereignty implications',
    ],
    pages: 38,
    audience: 'Board Members · Government Affairs · Legal',
  },
  {
    id: 'defense-aerospace',
    title: 'Sector Deep-Dive: Defense & Aerospace',
    badge: 'Sector Report',
    status: 'coming',
    description: 'The defense sector faces the most asymmetric exposure of any industry — circle-of-trust programs become national strategic assets while legacy programs face legal risk. This report maps the split.',
    features: [
      'Circle-of-trust vs legacy program exposure',
      'Legal risk framework for defense contractors',
      'IP obsolescence scenarios B2 and C',
      'Advanced materials and rare earths repricing',
    ],
    pages: 34,
    audience: 'Defense · Aerospace · Advanced Materials',
  },
  {
    id: 'hr-resilience',
    title: 'HR & Organizational Resilience Report',
    badge: 'Analytical',
    status: 'coming',
    description: 'Ontological shock and its organizational consequences. Drawing on documented responses to paradigm-shifting events — 9/11, COVID-19, major scientific revisions — to build an evidence-based workforce resilience framework.',
    features: [
      'Ontological shock: documented psychological research',
      'Workforce response patterns from COVID-19 and 9/11',
      'High-risk population mapping',
      'Recovery timeline and KPI framework',
    ],
    pages: 36,
    audience: 'CHROs · HR Directors · People Managers',
  },
];

// ─── Notify Modal ─────────────────────────────────────────
interface NotifyModalProps {
  report: typeof REPORTS[0];
  onClose: () => void;
}

function NotifyModal({ report, onClose }: NotifyModalProps) {
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
    setError('');
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, kitId: 'report-waitlist', reportId: report.id, reportTitle: report.title }),
      });
    } catch {
      // fail silently — still show success
    } finally {
      setLoading(false);
      setSuccess(true);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,27,48,0.75)', backdropFilter: 'blur(4px)' }} onClick={onClose} />
      <div style={{ position: 'relative', width: '100%', maxWidth: 440, background: 'white', borderRadius: 14, border: '1px solid #E2E8F0', padding: 28, boxShadow: '0 24px 64px rgba(27,42,74,0.18)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: '#8A9BB5', fontSize: 18, lineHeight: 1, padding: 4 }}>
          <X size={18} />
        </button>

        {success ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <CheckCircle size={40} style={{ color: '#4ADE80', margin: '0 auto 16px' }} />
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 700, color: '#1B2A4A', marginBottom: 10 }}>
              You're on the list.
            </h3>
            <p style={{ fontSize: 14, color: '#4A5D78', lineHeight: 1.6, marginBottom: 20 }}>
              We'll notify you as soon as <strong>{report.title}</strong> is available.
            </p>
            <button
              onClick={onClose}
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#8A9BB5', background: 'none', border: '1px solid #E2E8F0', borderRadius: 6, padding: '8px 20px', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <Bell size={16} style={{ color: '#C9A84C', flexShrink: 0 }} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#C9A84C', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Not yet available
                </span>
              </div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: '#1B2A4A', marginBottom: 8, lineHeight: 1.3 }}>
                {report.title}
              </h3>
              <p style={{ fontSize: 13, color: '#4A5D78', lineHeight: 1.6 }}>
                This report is currently in production. Enter your email and we'll notify you the moment it's released.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@company.com"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 6, border: '1px solid #E2E8F0', fontSize: 13, fontFamily: 'JetBrains Mono, monospace', color: '#1B2A4A', outline: 'none', boxSizing: 'border-box' }}
              />
              {error && <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#EF4444', margin: 0 }}>{error}</p>}
              <button
                type="submit"
                disabled={loading}
                style={{ width: '100%', padding: '11px 0', borderRadius: 6, background: '#1B2A4A', color: '#C9A84C', border: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, letterSpacing: '0.05em' }}
              >
                {loading ? 'Registering…' : 'Notify me when available →'}
              </button>
            </form>

            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#8A9BB5', textAlign: 'center', marginTop: 12 }}>
              GDPR compliant · No spam · Unsubscribe anytime
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────
export default function ReportsPage() {
  const [notifyModal, setNotifyModal] = useState<typeof REPORTS[0] | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-20">
      {notifyModal && <NotifyModal report={notifyModal} onClose={() => setNotifyModal(null)} />}

      {/* Header */}
      <div className="mb-12">
        <span className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Reports & Analysis
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-800 text-bright mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Understand the implications.
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Analytical reports on the geopolitical, financial, and organizational implications of disclosure. Every claim sourced. Inferences explicitly labeled.
        </p>
      </div>

      {/* Starter Pack — free, LS checkout */}
      <div id="starter" className="relative mb-12 p-6 sm:p-8 rounded-xl border border-green-400/20 bg-green-400/5 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="shrink-0 w-12 h-12 rounded-lg border border-green-400/20 bg-green-400/10 flex items-center justify-center">
            <FileText size={22} className="text-green-400" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-2xs font-mono border text-green-400 border-green-400/30 bg-green-400/10 font-600" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                FREE
              </span>
              <span className="text-2xs font-mono text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                8 pages · Read before any toolkit
              </span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-700 text-bright mb-3" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
              Executive Starter Pack
            </h2>
            <p className="text-sm text-body/80 leading-relaxed mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
              10-minute organizational readiness check, full institutional signal timeline, sector exposure grid across four disclosure scenarios, CEO orchestration sequence, and activation framework. The right starting point for any executive.
            </p>
            <ul className="space-y-1.5 mb-6">
              {['10-minute readiness check across 6 functions', 'Sector exposure grid — 13 sectors × 4 scenarios', 'CEO orchestration: H+1 / H+4 / H+24 sequence', 'DVI explained — current score and what it means', 'Quick Start: 3 actions in 60 minutes'].map(f => (
                <li key={f} className="flex items-center gap-2 text-xs text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <span className="w-1 h-1 rounded-full bg-green-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={LS_STARTER_URL}
              className="lemonsqueezy-button inline-flex items-center gap-2 px-5 py-2.5 rounded bg-green-400/10 border border-green-400/40 text-green-400 font-mono text-sm hover:bg-green-400/20 transition-all"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <Download size={14} />
              Download free
            </a>
          </div>
        </div>
      </div>

      {/* Analytical Reports */}
      <h2 className="font-display text-xl font-700 text-bright mb-5" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
        Analytical Reports
      </h2>

      <div className="flex flex-col gap-5">
        {REPORTS.map(report => (
          <div key={report.id} className="p-6 rounded-xl border border-border bg-surface/40 hover:bg-surface hover:border-border/80 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-2xs font-mono border text-signal border-signal/30 bg-signal/10" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {report.badge}
                  </span>
                  <span className="px-2 py-0.5 rounded text-2xs font-mono border text-muted border-border bg-surface/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    In production
                  </span>
                  <span className="text-2xs font-mono text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {report.pages}p · {report.audience}
                  </span>
                </div>
                <h3 className="font-display text-lg font-700 text-bright mb-2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                  {report.title}
                </h3>
                <p className="text-sm text-body/80 leading-relaxed mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {report.description}
                </p>
                <ul className="space-y-1 mb-5">
                  {report.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      <span className="w-1 h-1 rounded-full bg-signal/50 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              onClick={() => setNotifyModal(report)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm transition-all"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                background: '#1B2A4A',
                color: '#C9A84C',
                border: '1px solid #1B2A4A',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#243556';
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#C9A84C';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#1B2A4A';
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#1B2A4A';
              }}
            >
              <Bell size={14} />
              Notify me when available
            </button>
          </div>
        ))}
      </div>

      {/* CTA to toolkits */}
      <div className="mt-10 p-6 rounded-xl border border-signal/20 bg-signal/5 text-center">
        <p className="text-sm text-body/80 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          Reports explain the implications. Toolkits tell you what to do about them.
        </p>
        <Link
          href="/toolkits"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-signal/10 border border-signal/40 text-signal font-mono text-sm hover:bg-signal/20 transition-all"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          View operational toolkits
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
