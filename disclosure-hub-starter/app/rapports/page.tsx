import Link from 'next/link';
import { ExternalLink, Download, ShoppingCart, Star, Lock } from 'lucide-react';
import { REPORTS } from '@/data/resources';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rapports Prospectifs',
  description:
    "Analyses approfondies sur les enjeux géopolitiques, économiques et technologiques de la disclosure. Achat à l'acte, accès immédiat.",
};

const BADGE_COLORS: Record<string, string> = {
  Gratuit:      'bg-verified/10 text-verified border-verified/30',
  Populaire:    'bg-cold/10 text-cold border-cold/30',
  'Best-seller':'bg-signal/10 text-signal border-signal/30',
};

function formatPrice(prix: number): string {
  if (prix === 0) return 'Gratuit';
  return `${prix} €`;
}

export default function RapportsPage() {
  const freeReport  = REPORTS.find((r) => r.gratuit);
  const paidReports = REPORTS.filter((r) => !r.gratuit);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      {/* Header */}
      <div className="mb-16">
        <span
          className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Pilier 03 — Monétisation
        </span>
        <h1
          className="font-display text-4xl sm:text-5xl font-800 text-bright mb-4"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          Rapports prospectifs
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Des analyses de fond sur les enjeux géopolitiques, économiques et technologiques d&apos;une annonce officielle.
          Achat à l&apos;acte, accès immédiat par email.
        </p>
      </div>

      {/* Rapport gratuit — Mise en avant */}
      {freeReport && (
        <div
          id="gratuit"
          className="relative mb-16 p-8 rounded-xl border border-verified/30 bg-surface overflow-hidden scroll-mt-24"
        >
          {/* Fond */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 20% 50%, rgba(74,222,128,0.06) 0%, transparent 60%)',
            }}
            aria-hidden
          />

          <div className="relative flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="px-2.5 py-1 rounded-full text-2xs font-mono font-600 border bg-verified/10 text-verified border-verified/30"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Rapport gratuit
                </span>
                <span
                  className="text-2xs font-mono text-muted"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {freeReport.pages} pages — PDF
                </span>
              </div>

              <h2
                className="font-display text-2xl sm:text-3xl font-700 text-bright mb-2"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                {freeReport.titre}
              </h2>
              <p
                className="text-sm text-verified/80 font-mono mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {freeReport.sous_titre}
              </p>
              <p
                className="text-sm text-body/80 leading-relaxed mb-6 max-w-xl"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {freeReport.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {freeReport.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-2xs font-mono text-muted/60 bg-panel border border-border/40"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={freeReport.achat_url}
                className="inline-flex items-center gap-2 px-6 py-3 rounded border border-verified/40 text-verified font-mono font-600 text-sm hover:bg-verified/10 transition-all"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <Download size={16} />
                Télécharger gratuitement
              </a>
            </div>

            {/* Prix affiché */}
            <div className="shrink-0 text-center p-6 rounded-lg border border-verified/20 bg-verified/5">
              <div
                className="font-display text-4xl font-800 text-verified mb-1"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
              >
                0 €
              </div>
              <div
                className="text-xs font-mono text-muted"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Sans inscription
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rapports payants */}
      <div className="mb-8">
        <h2
          className="font-display text-2xl font-700 text-bright mb-2"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
        >
          Analyses approfondies
        </h2>
        <p
          className="text-sm text-muted"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Achat unique — accès PDF immédiat par email.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {paidReports.map((rapport) => (
          <div
            key={rapport.id}
            className="flex flex-col p-5 rounded-lg border border-border bg-surface/40 hover:bg-surface hover:border-border/80 transition-all"
          >
            {/* Badge */}
            <div className="flex items-center justify-between mb-4">
              <Lock size={16} className="text-muted" />
              {rapport.badge && (
                <span
                  className={cn(
                    'px-2.5 py-0.5 rounded-full text-2xs font-mono font-600 border',
                    BADGE_COLORS[rapport.badge] ?? 'text-muted border-muted/30',
                  )}
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {rapport.badge}
                </span>
              )}
            </div>

            {/* Titre */}
            <h3
              className="font-display text-lg font-700 text-bright mb-1"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
            >
              {rapport.titre}
            </h3>
            <p
              className="text-xs font-mono text-signal/80 mb-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {rapport.sous_titre}
            </p>

            <p
              className="text-xs text-body/70 leading-relaxed mb-4 flex-1"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {rapport.description}
            </p>

            {/* Meta */}
            <div
              className="flex items-center gap-2 text-2xs font-mono text-muted/60 mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span>{rapport.pages} pages</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>PDF</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {rapport.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 rounded text-2xs font-mono text-muted/50 bg-panel border border-border/40"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Prix + CTA */}
            <div className="flex items-center justify-between gap-3">
              <span
                className="font-display text-2xl font-700 text-bright"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                {formatPrice(rapport.prix_eur)}
              </span>

              <a
                href={rapport.achat_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded border border-signal/40 text-signal font-mono font-600 text-xs hover:bg-signal/10 transition-all"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <ShoppingCart size={13} />
                Acheter
                <ExternalLink size={11} className="opacity-60" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Note paiement */}
      <div className="mt-12 p-5 rounded-lg border border-border/40 bg-panel/30">
        <p
          className="text-xs font-mono text-muted/60 leading-relaxed"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          <strong className="text-muted">Paiement sécurisé</strong> via Stripe Checkout ou Gumroad.
          Les rapports sont envoyés par email en format PDF immédiatement après confirmation du paiement.
          Facturation disponible sur demande. Aucune subscription — achat unique.
        </p>
      </div>
    </div>
  );
}
