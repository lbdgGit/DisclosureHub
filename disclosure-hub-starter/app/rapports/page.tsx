'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, FileText, ArrowRight, Bell, X, CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

const LS_STARTER_URL = 'https://lbdg.lemonsqueezy.com/checkout/buy/b8c638cd-b612-4acc-95ad-e6b7e9699634?embed=1';
const LS_FINANCE_URL = 'https://lbdg.lemonsqueezy.com/checkout/buy/468ce8c1-92a7-4500-b60a-33e25723684d?embed=1';
const FINANCE_PREVIEW_URL = '/downloads/LBDG-Finance-Risk-Report-PREVIEW.pdf';

const SERIF = 'Playfair Display, serif';
const MONO = 'DM Mono, monospace';
const SANS = 'DM Sans, sans-serif';
const NAVY = '#1B2A4A';
const GOLD = '#C9A84C';
const CREAM = '#FAF8F4';

const REPORTS = [
  {
    id: 'finance-risk',
    title: 'Finance Risk Report — Organizational Financial Exposure to Institutional Disclosure',
    badge: 'Analytical',
    status: 'available',
    price: '€399',
    description: 'How a finance function should reason about exposure to disclosure before it happens. Built on four documented precedents — 1945, 2001, 2008, 2020 — it isolates the mechanisms through which a paradigm-shifting event transmits into financial consequence, maps sector exposure to demonstrated mechanisms rather than speculation, and sets out a 72-hour response framework.',
    features: [
      'The four mechanisms of financial impact, each anchored to a precedent',
      'Sector-exposure grid traced to demonstrated mechanisms',
      'The Disclosure Impact Matrix: preparedness × scenario',
      'A three-tier, 72-hour response framework',
      'DVI methodology and its current reading',
    ],
    pages: 38,
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
            <h3 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 10 }}>
              You&apos;re on the list.
            </h3>
            <p style={{ fontSize: 14, color: '#4A5D78', lineHeight: 1.6, marginBottom: 20 }}>
              We&apos;ll notify you as soon as <strong>{report.title}</strong> is available.
            </p>
            <button
              onClick={onClose}
              style={{ fontFamily: MONO, fontSize: 12, color: '#8A9BB5', background: 'none', border: '1px solid #E2E8F0', borderRadius: 6, padding: '8px 20px', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <Bell size={16} style={{ color: GOLD, flexShrink: 0 }} />
                <span style={{ fontFamily: MONO, fontSize: 10, color: GOLD, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Not yet available
                </span>
              </div>
              <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: 1.3 }}>
                {report.title}
              </h3>
              <p style={{ fontSize: 13, color: '#4A5D78', lineHeight: 1.6 }}>
                This report is currently in production. Enter your email and we&apos;ll notify you the moment it&apos;s released.
              </p>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@company.com"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 6, border: '1px solid #E2E8F0', fontSize: 13, fontFamily: MONO, color: NAVY, outline: 'none', boxSizing: 'border-box' }}
              />
              {error && <p style={{ fontFamily: MONO, fontSize: 11, color: '#EF4444', margin: 0 }}>{error}</p>}
              <button
                type="submit"
                disabled={loading}
                style={{ width: '100%', padding: '11px 0', borderRadius: 6, background: NAVY, color: GOLD, border: 'none', fontFamily: MONO, fontSize: 13, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, letterSpacing: '0.05em' }}
              >
                {loading ? 'Registering…' : 'Notify me when available →'}
              </button>
            </form>
            <p style={{ fontFamily: MONO, fontSize: 10, color: '#8A9BB5', textAlign: 'center', marginTop: 12 }}>
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
    <>
      {notifyModal && <NotifyModal report={notifyModal} onClose={() => setNotifyModal(null)} />}

      <PageHeader eyebrow="LBDG · Reports & Analysis" title="Understand the implications">
        Analytical reports on the geopolitical, financial, and organizational implications of disclosure. Every claim sourced. Inferences explicitly labeled.
      </PageHeader>

      <div style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }} className="px-4 sm:px-6 pb-20">

          {/* Starter Pack — free, LS checkout */}
          <div id="starter" className="relative mb-12 p-6 sm:p-8 rounded-xl border border-green-400/30 bg-green-400/5 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="shrink-0 w-12 h-12 rounded-lg border border-green-400/30 bg-green-400/10 flex items-center justify-center">
                <FileText size={22} className="text-green-500" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-2xs border text-green-500 border-green-400/30 bg-green-400/10 font-600" style={{ fontFamily: MONO }}>
                    FREE
                  </span>
                  <span style={{ fontFamily: MONO, fontSize: 11, color: '#8A9BB5' }}>
                    8 pages · Read before any toolkit
                  </span>
                </div>
                <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 24, marginBottom: 12 }}>
                  Executive Starter Pack
                </h2>
                <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: 'rgba(74,93,120,0.85)', marginBottom: 20 }}>
                  10-minute organizational readiness check, full institutional signal timeline, sector exposure grid across four disclosure scenarios, CEO orchestration sequence, and activation framework. The right starting point for any executive.
                </p>
                <ul className="space-y-1.5 mb-6">
                  {['10-minute readiness check across 6 functions', 'Sector exposure grid — 13 sectors × 4 scenarios', 'CEO orchestration: H+1 / H+4 / H+24 sequence', 'DVI explained — current score and what it means', 'Quick Start: 3 actions in 60 minutes'].map(f => (
                    <li key={f} className="flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 12, color: '#8A9BB5' }}>
                      <span className="w-1 h-1 rounded-full bg-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={LS_STARTER_URL} className="lemonsqueezy-button inline-flex items-center gap-2 px-5 py-2.5 rounded bg-green-400/10 border border-green-400/40 text-green-500 text-sm hover:bg-green-400/20 transition-all" style={{ fontFamily: MONO }}><Download size={14} /> Download free</a>
              </div>
            </div>
          </div>

          {/* Analytical Reports */}
          <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 22, marginBottom: 20 }}>
            Analytical Reports
          </h2>
          <div className="flex flex-col gap-5">
            {REPORTS.map(report => (
              <div key={report.id} className="p-6 rounded-xl border border-border bg-white hover:border-border/80 hover:shadow-lg transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-2xs border text-signal border-signal/30 bg-signal/10" style={{ fontFamily: MONO }}>
                        {report.badge}
                      </span>
                      {report.status === 'available' ? (
                        <span className="px-2 py-0.5 rounded text-2xs border text-green-600 border-green-400/40 bg-green-400/10 font-600" style={{ fontFamily: MONO }}>
                          Available · {report.price}
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-2xs border text-muted border-border bg-white" style={{ fontFamily: MONO }}>
                          In production
                        </span>
                      )}
                      <span style={{ fontFamily: MONO, fontSize: 11, color: '#8A9BB5' }}>
                        {report.pages}p · {report.audience}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 19, marginBottom: 8, lineHeight: 1.3 }}>
                      {report.title}
                    </h3>
                    <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: 'rgba(74,93,120,0.85)', marginBottom: 16 }}>
                      {report.description}
                    </p>
                    <ul className="space-y-1 mb-5">
                      {report.features.map(f => (
                        <li key={f} className="flex items-center gap-2" style={{ fontFamily: MONO, fontSize: 12, color: '#8A9BB5' }}>
                          <span className="w-1 h-1 rounded-full bg-signal/50 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {report.status === 'available' ? (
                  <div className="flex flex-wrap items-center gap-3">
                    <a href={LS_FINANCE_URL} className="lemonsqueezy-button inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm transition-all" style={{ fontFamily: MONO, background: NAVY, color: GOLD, border: `1px solid ${NAVY}` }}><Download size={14} /> Buy the report — {report.price}</a>
                    <a href={FINANCE_PREVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm border border-border text-muted hover:text-bright hover:border-border/80 transition-all" style={{ fontFamily: MONO }}><FileText size={14} /> Preview — 5 pages</a>
                  </div>
                ) : (
                  <button
                    onClick={() => setNotifyModal(report)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm transition-all"
                    style={{ fontFamily: MONO, background: NAVY, color: GOLD, border: `1px solid ${NAVY}` }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#243556'; (e.currentTarget as HTMLButtonElement).style.borderColor = GOLD; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = NAVY; (e.currentTarget as HTMLButtonElement).style.borderColor = NAVY; }}
                  >
                    <Bell size={14} />
                    Notify me when available
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Legal notice for paid analytical reports */}
          <div className="mt-8 p-5 rounded-xl border border-border bg-white">
            <p style={{ fontFamily: MONO, fontSize: 10, color: '#4A7FB5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
              Important notice
            </p>
            <p style={{ fontFamily: SANS, fontSize: 12, lineHeight: 1.7, color: '#8A9BB5' }}>
              LBDG reports are published for informational and educational purposes only. They present analytical frameworks and do not constitute investment, financial, legal, tax, or accounting advice, nor a recommendation to buy, sell, or hold any security or asset. They contain no predictions. Each organization is responsible for its own decisions and should obtain independent professional advice appropriate to its circumstances. A full notice is included in each report.
            </p>
          </div>

          {/* CTA to toolkits */}
          <div className="mt-10 p-6 rounded-xl border border-signal/20 bg-signal/5 text-center">
            <p style={{ fontFamily: SANS, fontSize: 14, color: '#4A5D78', marginBottom: 16 }}>
              Reports explain the implications. Toolkits tell you what to do about them.
            </p>
            <Link href="/toolkits" className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-signal/10 border border-signal/40 text-signal text-sm hover:bg-signal/20 transition-all" style={{ fontFamily: MONO }}>
              View operational toolkits
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
