'use client';

import { useState } from 'react';
import { Download, Lock, CheckCircle, FileText, X } from 'lucide-react';
import { TOOLKITS, TOOLKIT_SECTEURS, TOOLKIT_TAILLES } from '@/data/resources';
import { cn } from '@/lib/utils';

const SECTEUR_COLORS: Record<string, string> = {
  media:          'text-cold border-cold/30 bg-cold/10',
  entreprise:     'text-signal border-signal/30 bg-signal/10',
  finance:        'text-verified border-verified/30 bg-verified/10',
  education:      'text-classified border-classified/30 bg-classified/10',
  sante:          'text-redacted border-redacted/30 bg-redacted/10',
  administration: 'text-muted border-muted/30 bg-muted/10',
};

interface EmailGateProps {
  kitId: string;
  kitTitre: string;
  onClose: () => void;
}

function EmailGate({ kitId, kitTitre, onClose }: EmailGateProps) {
  const [email, setEmail]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [error, setError]       = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Email invalide');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, kitId }),
      });

      if (res.ok) {
        setSuccess(true);
        // Dans une vraie implémentation, ici on déclencherait le téléchargement
        setTimeout(() => {
          alert(`Merci ! Le kit "${kitTitre}" vous sera envoyé à ${email} dans quelques minutes.`);
          onClose();
        }, 1500);
      } else {
        setError('Une erreur est survenue. Réessayez.');
      }
    } catch {
      setError('Impossible de contacter le serveur.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-void/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-xl border border-signal/30 bg-surface p-6 shadow-signal">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-bright transition-colors"
        >
          <X size={18} />
        </button>

        {success ? (
          <div className="text-center py-4">
            <CheckCircle size={40} className="text-verified mx-auto mb-3" />
            <h3
              className="font-display text-xl font-700 text-bright mb-2"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
            >
              Accès accordé !
            </h3>
            <p
              className="text-sm text-body/70"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Vous allez recevoir le kit par email sous peu.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <span
                className="text-2xs font-mono text-signal tracking-widest uppercase block mb-1"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Téléchargement
              </span>
              <h3
                className="font-display text-lg font-700 text-bright"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                {kitTitre}
              </h3>
            </div>

            <p
              className="text-sm text-body/70 mb-5"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Entrez votre email professionnel pour recevoir le kit immédiatement. Aucun spam — uniquement les mises à jour de ce kit.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.pro"
                className="w-full px-4 py-2.5 rounded border border-border bg-panel text-bright text-sm placeholder:text-muted/50 focus:outline-none focus:border-signal/50 transition-colors"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              />

              {error && (
                <p
                  className="text-xs text-redacted"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded bg-signal/10 border border-signal/40 text-signal font-mono font-600 text-sm hover:bg-signal/20 disabled:opacity-50 transition-all"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {loading ? 'Envoi…' : 'Accéder au kit →'}
              </button>
            </form>

            <p
              className="text-2xs text-muted/50 text-center mt-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Données personnelles traitées conformément au RGPD
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function ToolkitsPage() {
  const [secteur, setSecteur]   = useState<string>('all');
  const [taille, setTaille]     = useState<string>('all');
  const [activeGate, setActiveGate] = useState<{ id: string; titre: string } | null>(null);

  const filtered = TOOLKITS.filter((kit) => {
    const matchS = secteur === 'all' || kit.secteur === secteur;
    const matchT = taille  === 'all' || kit.taille  === taille;
    return matchS && matchT;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      {/* Modal email gate */}
      {activeGate && (
        <EmailGate
          kitId={activeGate.id}
          kitTitre={activeGate.titre}
          onClose={() => setActiveGate(null)}
        />
      )}

      {/* Header */}
      <div className="mb-12">
        <span
          className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Pilier 02 — Acquisition
        </span>
        <h1
          className="font-display text-4xl sm:text-5xl font-800 text-bright mb-4"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          Boîtes à outils
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Des kits méthodologiques téléchargeables pour anticiper concrètement une annonce officielle. Filtrés par secteur et taille d&apos;organisation.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Secteur */}
        <div>
          <p
            className="text-2xs font-mono text-muted mb-2 tracking-wider"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Secteur
          </p>
          <div className="flex flex-wrap gap-2">
            {TOOLKIT_SECTEURS.map((f) => (
              <button
                key={f.id}
                onClick={() => setSecteur(f.id)}
                className={cn(
                  'px-3 py-1.5 rounded text-xs font-mono border transition-all',
                  secteur === f.id
                    ? 'bg-signal/15 text-signal border-signal/40'
                    : 'text-muted border-border hover:text-bright',
                )}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Taille */}
        <div>
          <p
            className="text-2xs font-mono text-muted mb-2 tracking-wider"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Taille d&apos;organisation
          </p>
          <div className="flex flex-wrap gap-2">
            {TOOLKIT_TAILLES.map((f) => (
              <button
                key={f.id}
                onClick={() => setTaille(f.id)}
                className={cn(
                  'px-3 py-1.5 rounded text-xs font-mono border transition-all',
                  taille === f.id
                    ? 'bg-cold/15 text-cold border-cold/40'
                    : 'text-muted border-border hover:text-bright',
                )}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Compteur */}
      <p
        className="text-2xs font-mono text-muted/60 mb-6 tracking-wider"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        {filtered.length} kit{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
      </p>

      {/* Grille */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <p className="text-sm">Aucun kit ne correspond à ces filtres.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((kit) => (
            <div
              key={kit.id}
              className="flex flex-col p-5 rounded-lg border border-border bg-surface/40 hover:bg-surface hover:border-border/80 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <FileText size={20} className="text-muted shrink-0 mt-0.5" />
                <div className="flex flex-wrap gap-1.5 ml-auto">
                  {kit.gratuit && (
                    <span
                      className="px-2 py-0.5 rounded text-2xs font-mono border text-verified border-verified/30 bg-verified/10"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      Gratuit
                    </span>
                  )}
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded text-2xs font-mono border capitalize',
                      SECTEUR_COLORS[kit.secteur] ?? 'text-muted border-muted/20',
                    )}
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {kit.secteur}
                  </span>
                </div>
              </div>

              {/* Titre */}
              <h3
                className="font-display text-base font-700 text-bright mb-2"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                {kit.titre}
              </h3>

              {/* Description */}
              <p
                className="text-xs text-body/70 leading-relaxed mb-4 flex-1"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {kit.description}
              </p>

              {/* Meta */}
              <div
                className="flex items-center gap-3 text-2xs font-mono text-muted/60 mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span>{kit.pages} pages</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{kit.format}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="capitalize">{kit.taille}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {kit.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 rounded text-2xs font-mono text-muted/50 bg-panel border border-border/40"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => setActiveGate({ id: kit.id, titre: kit.titre })}
                className={cn(
                  'w-full flex items-center justify-center gap-2 py-2.5 rounded border text-sm font-mono font-600 transition-all',
                  kit.gratuit
                    ? 'border-signal/40 text-signal hover:bg-signal/10'
                    : 'border-muted/30 text-muted hover:border-signal/30 hover:text-signal',
                )}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {kit.gratuit ? (
                  <>
                    <Download size={14} />
                    Télécharger gratuitement
                  </>
                ) : (
                  <>
                    <Lock size={14} />
                    Accéder (email requis)
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
