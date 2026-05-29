'use client';

import { useState, useMemo } from 'react';
import { Search, ExternalLink, Tag } from 'lucide-react';
import { LEXIQUE, CATEGORIES } from '@/data/lexique';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

// Note: metadata doit être dans un Server Component séparé si besoin
// Ici on garde tout client pour la recherche interactive

const CATEGORY_COLORS: Record<string, string> = {
  institutionnel: 'bg-cold/10 text-cold border-cold/30',
  phenomenologie: 'bg-signal/10 text-signal border-signal/30',
  technologie:    'bg-verified/10 text-verified border-verified/30',
  juridique:      'bg-classified/10 text-classified border-classified/30',
  personnel:      'bg-redacted/10 text-redacted border-redacted/30',
};

export default function LexiquePage() {
  const [search, setSearch]     = useState('');
  const [categorie, setCategorie] = useState<string>('all');

  const filtered = useMemo(() => {
    return LEXIQUE.filter((entry) => {
      const matchCat = categorie === 'all' || entry.categorie === categorie;
      const q        = search.toLowerCase();
      const matchQ   =
        !q ||
        entry.terme.toLowerCase().includes(q) ||
        (entry.acronyme?.toLowerCase().includes(q) ?? false) ||
        entry.definition.toLowerCase().includes(q) ||
        (entry.tags?.some((t) => t.toLowerCase().includes(q)) ?? false);
      return matchCat && matchQ;
    });
  }, [search, categorie]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
      {/* Header */}
      <div className="mb-12">
        <span
          className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Pilier 01 — Éducation
        </span>
        <h1
          className="font-display text-4xl sm:text-5xl font-800 text-bright mb-4"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          Lexique UAP
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Les termes officiels, acronymes et concepts indispensables pour naviguer dans le dossier disclosure — définis depuis les sources primaires.
        </p>
      </div>

      {/* Filtres & Recherche */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Rechercher un terme, acronyme, tag…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded border border-border bg-surface/50 text-bright text-sm placeholder:text-muted/50 focus:outline-none focus:border-signal/50 transition-colors"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          />
        </div>

        {/* Catégories */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategorie(cat.id)}
              className={cn(
                'px-3 py-1.5 rounded text-xs font-mono tracking-wide transition-all border',
                categorie === cat.id
                  ? 'bg-signal/15 text-signal border-signal/40'
                  : 'text-muted border-border hover:text-bright hover:border-border/80',
              )}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Compteur */}
      <div
        className="text-2xs font-mono text-muted/60 mb-6 tracking-wider"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        {filtered.length} terme{filtered.length > 1 ? 's' : ''} affiché{filtered.length > 1 ? 's' : ''}
      </div>

      {/* Entrées */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <p className="text-sm">Aucun résultat pour &quot;{search}&quot;</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((entry) => (
            <div
              key={entry.id}
              className="group p-6 rounded-lg border border-border bg-surface/40 hover:bg-surface hover:border-border/80 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-3">
                {/* Terme */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2
                      className="font-display text-lg font-700 text-bright"
                      style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                    >
                      {entry.terme}
                    </h2>
                    {entry.acronyme && (
                      <span
                        className="px-2 py-0.5 rounded font-mono text-xs font-600 text-signal bg-signal/10 border border-signal/20"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {entry.acronyme}
                      </span>
                    )}
                    <span
                      className={cn(
                        'px-2 py-0.5 rounded text-2xs font-mono font-500 border capitalize',
                        CATEGORY_COLORS[entry.categorie] ?? 'text-muted border-muted/20',
                      )}
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {entry.categorie}
                    </span>
                  </div>
                </div>
              </div>

              {/* Définition */}
              <p
                className="text-sm text-body/80 leading-relaxed mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {entry.definition}
              </p>

              {/* Footer : tags + sources */}
              <div className="flex flex-wrap items-center gap-3">
                {entry.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-2xs font-mono text-muted/60"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
                {entry.sources?.map((src) => (
                  <a
                    key={src.url}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-2xs font-mono text-cold/70 hover:text-cold transition-colors ml-auto"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    <ExternalLink size={10} />
                    {src.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
