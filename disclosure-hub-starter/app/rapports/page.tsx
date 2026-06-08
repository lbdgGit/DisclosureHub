import Link from 'next/link';
import { Download, FileText, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reports — LBDG',
  description: 'In-depth analytical reports on the geopolitical, financial, and organizational implications of disclosure.',
};

const FREE_REPORT = {
  id: 'starter',
  title: 'Executive Starter Pack',
  badge: 'FREE',
  description: 'The right starting point for any executive or board member. A 10-minute organizational readiness check, full institutional signal timeline (1947–2026), and decision tree to identify which LBDG toolkit your organization needs.',
  features: [
    '10-minute readiness check across 4 dimensions',
    'Institutional signal timeline — 20 verified events',
    'Decision tree: which toolkit does your organization need?',
    'Controlled vs catastrophic disclosure framework (Col. Karl Nell)',
  ],
  pages: 3,
  pdfPath: '/downloads/LBDG-Executive-Starter-Pack-v2.pdf',
};

const REPORTS = [
  {
    id: 'finance-risk',
    title: 'Finance Risk Report — Disclosure Scenarios A through C',
    badge: 'Analytical',
    description: 'In-depth financial risk analysis for CFOs and risk managers. Four-scenario framework (A/B1/B2/C) with documented market precedents from COVID-19 and 9/11. The nuclear technology analogy applied to sector repricing. Defense contractor legal risk analysis.',
    features: [
      'Scenario A/B1/B2/C financial impact analysis',
      'COVID-19 and 9/11 as documented market precedents',
      'Nuclear analogy: 15-30y energy disruption timeline',
      'Defense contractor legal risk framework',
      'Sector winners and losers — verified inference',
    ],
    pages: 42,
    pdfPath: '/downloads/LBDG-Finance-Risk-Toolkit-v2-2025.pdf',
  },
];

export default function ReportsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-20">

      {/* Header */}
      <div className="mb-12">
        <span
          className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Reports & Analysis
        </span>
        <h1
          className="font-display text-3xl sm:text-5xl font-800 text-bright mb-4"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          Understand the implications.
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Analytical reports on the geopolitical, financial, and organizational implications of disclosure. Every claim sourced. Inferences explicitly labeled.
        </p>
      </div>

      {/* Free Report — Featured */}
      <div id="starter" className="relative mb-12 p-6 sm:p-8 rounded-xl border border-green-400/20 bg-green-400/5 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="shrink-0 w-12 h-12 rounded-lg border border-green-400/20 bg-green-400/10 flex items-center justify-center">
            <FileText size={22} className="text-green-400" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="px-2 py-0.5 rounded text-2xs font-mono border text-green-400 border-green-400/30 bg-green-400/10 font-600"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {FREE_REPORT.badge}
              </span>
              <span className="text-2xs font-mono text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {FREE_REPORT.pages} pages · No email required
              </span>
            </div>

            <h2
              className="font-display text-xl sm:text-2xl font-700 text-bright mb-3"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
            >
              {FREE_REPORT.title}
            </h2>

            <p className="text-sm text-body/80 leading-relaxed mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
              {FREE_REPORT.description}
            </p>

            <ul className="space-y-1.5 mb-6">
              {FREE_REPORT.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <span className="w-1 h-1 rounded-full bg-green-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={FREE_REPORT.pdfPath}
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

      {/* Analytical Reports */}
      <h2
        className="font-display text-xl font-700 text-bright mb-5"
        style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
      >
        Analytical Reports
      </h2>

      <div className="flex flex-col gap-5">
        {REPORTS.map((report) => (
          <div
            key={report.id}
            className="p-6 rounded-xl border border-border bg-surface/40 hover:bg-surface hover:border-border/80 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="px-2 py-0.5 rounded text-2xs font-mono border text-signal border-signal/30 bg-signal/10"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {report.badge}
                  </span>
                  <span className="text-2xs font-mono text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {report.pages} pages
                  </span>
                </div>

                <h3
                  className="font-display text-lg font-700 text-bright mb-2"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                >
                  {report.title}
                </h3>

                <p className="text-sm text-body/80 leading-relaxed mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {report.description}
                </p>

                <ul className="space-y-1 mb-5">
                  {report.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      <span className="w-1 h-1 rounded-full bg-signal shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={report.pdfPath}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-signal/30 text-signal font-mono text-sm hover:bg-signal/10 transition-all"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>
        ))}
      </div>

      {/* Coming soon */}
      <div className="mt-10 p-5 rounded-lg border border-border/40 bg-surface/20">
        <p
          className="text-2xs font-mono text-muted tracking-widest uppercase text-center"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Coming soon — Geopolitical Implications Report · Sector Deep-Dive: Defense & Aerospace · HR & Organizational Resilience Report
        </p>
      </div>

      {/* CTA to toolkits */}
      <div className="mt-10 p-6 rounded-xl border border-signal/20 bg-signal/5 text-center">
        <p
          className="text-sm text-body/80 mb-4"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
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
