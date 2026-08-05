'use client';

import { useState, useMemo } from 'react';
import { ExternalLink, AlertTriangle } from 'lucide-react';
import {
  SIGNALS, SIGNAL_CATEGORIES, CATEGORY_CONFIG, WEIGHT_CONFIG, getWeightTier,
  DVI_CONFIG, getDVILevel,
} from '@/data/signals';
import { InstitutionalAcceleration } from '@/components/InstitutionalAcceleration';
import { DVIBadge } from '@/components/DVIBadge';
import { PageHeader } from '@/components/PageHeader';

const DVI = DVI_CONFIG.value;
const currentLevel = getDVILevel(DVI);

const ACTIONS = [
  { role: 'All organizations',  action: 'Complete Executive Starter Pack readiness check',       toolkit: 'Starter Pack',    href: '/toolkits' },
  { role: 'HR Directors',       action: 'Distribute Manager Action Guide to all team leads',     toolkit: 'HR Toolkit',      href: '/toolkits' },
  { role: 'CFOs / Risk',        action: 'Run sector exposure audit and pre-define triggers',     toolkit: 'Finance Toolkit', href: '/toolkits' },
  { role: 'Legal / Compliance', action: 'Review Reg FD / AMF obligations with outside counsel', toolkit: 'Legal Toolkit',   href: '/toolkits' },
];

function formatDate(d: string): string {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const parts = d.split('-');
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return `${months[parseInt(parts[1])-1]} ${parts[0]}`;
  return `${months[parseInt(parts[1])-1]} ${parseInt(parts[2])}, ${parts[0]}`;
}

export default function SignalsPage() {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [activeStr, setActiveStr] = useState<string>('all');

  const filtered = useMemo(() =>
    SIGNALS
      .filter(s => activeCat === 'all' || s.category === activeCat)
      .filter(s => activeStr === 'all' || getWeightTier(s.w) === activeStr)
      .sort((a, b) => b.date.localeCompare(a.date)),
    [activeCat, activeStr]
  );

  const counts = useMemo(() => ({
    foundational: SIGNALS.filter(s => s.w >= 1.0).length,
    significant:  SIGNALS.filter(s => s.w >= 0.8 && s.w < 1.0).length,
    total:        SIGNALS.length,
  }), []);

  const navy  = '#1B2A4A';
  const gold  = '#C9A84C';
  const border = '#E2E8F0';
  const body  = '#4A5D78';
  const muted = '#8A9BB5';

  return (
    <>
      <PageHeader eyebrow="LBDG · Disclosure Velocity · Last updated August 2026" title="Disclosure Velocity">
        How fast the disclosure process is moving. A single weighted index — the DVI — built from {SIGNALS.length} verified institutional signals across bureaucratic, legislative, and financial activity. Sources: DoD, NASA, CNES, Deloitte, Bank of England, Cboe, U.S. Congress, Japan Diet. No unverified speculation.
      </PageHeader>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px', fontFamily: 'DM Sans, sans-serif' }}>
        {/* cross-link to Maturity */}
        <div style={{ marginBottom: '24px' }}>
          <a href="/maturity" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'DM Mono, monospace', fontSize: '12px', color: navy, textDecoration: 'none', border: `1px solid ${border}`, borderRadius: '6px', padding: '8px 14px' }}>
            Where each sector stands → <span style={{ color: gold, fontWeight: 600 }}>Disclosure Maturity</span>
          </a>
        </div>

        {/* ── DVI BADGE ── */}
        <div style={{ marginBottom: '14px' }}>
          <DVIBadge variant="light" />
        </div>

        {/* ── COUNTS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', marginBottom: '14px' }}>
          {[
            { label: 'Foundational', value: counts.foundational, color: '#B04A3A', sub: 'Weight 1.0 — highest DVI weight' },
            { label: 'Significant',  value: counts.significant,  color: '#C98A2E', sub: 'Weight 0.8 — secondary acts' },
            { label: 'Total verified', value: counts.total,      color: muted,     sub: 'Events in dataset 1946–2026' },
          ].map(({ label, value, color, sub }) => (
            <div key={label} style={{ background: '#FFFFFF', border: `1px solid ${border}`, borderRadius: '8px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '34px', fontWeight: 700, color: navy,
