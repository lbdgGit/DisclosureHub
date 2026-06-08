'use client';

import { useState, useMemo } from 'react';
import { Search, ExternalLink, Tag, AlertTriangle } from 'lucide-react';
import { LEXIQUE, CATEGORIES } from '@/data/lexique';
import { cn } from '@/lib/utils';

const CATEGORY_COLORS: Record<string, string> = {
  institutionnel: 'bg-cold/10 text-cold border-cold/30',
  phenomenologie: 'bg-signal/10 text-signal border-signal/30',
  technologie:    'bg-verified/10 text-verified border-verified/30',
  juridique:      'bg-classified/10 text-classified border-classified/30',
  personnel:      'bg-redacted/10 text-redacted border-redacted/30',
  scientifique:   'bg-green-500/10 text-green-400 border-green-500/30',
  historique:     'bg-amber-500/10 text-amber-400 border-amber-500/30',
  conceptuel:     'bg-purple-500/10 text-purple-400 border-purple-500/30',
  media:          'bg-blue-500/10 text-blue-400 border-blue-500/30',
  conteste:       'bg-red-500/10 text-red-400 border-red-500/30',
};

const CATEGORY_LABELS: Record<string, string> = {
  institutionnel: 'Agencies & Programs',
  phenomenologie: 'Phenomena',
  technologie:    'Technology',
  juridique:      'Legal & Policy',
  personnel:      'Key figures',
  scientifique:   'Science',
  historique:     'Historical cases',
  conceptuel:     'Frameworks',
  media:          'Media',
  conteste:       'Disputed / Alleged',
};

export default function GlossaryPage() {
  const [search, setSearch]       = useState('');
  const [categorie, setCategorie] = useState<string>('all');
  const [tierFilter, setTierFilter] = useState<string>('all');

  const filtered = useMemo(() =>
    LEXIQUE.filter((entry) => {
      const matchCat  = categorie === 'all' || entry.categorie === categorie;
      const matchTier = tierFilter === 'all' || String(entry.tier) === tierFilter;
      const q = search.toLowerCase();
      const matchQ = !q ||
        entry.terme.toLowerCase().includes(q) ||
        (entry.acronyme?.toLowerCase().includes(q) ?? false) ||
        entry.definition.toLowerCase().includes(q) ||
        (entry.tags?.some(t => t.toLowerCase().includes(q)) ?? false);
      return matchCat && matchTier && matchQ;
    }),
    [search, categorie, tierFilter]
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-20">

      {/* Header */}
      <div className="mb-10">
        <span className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          UAP / NHI Glossary — {LEXIQUE.length} entries
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-800 text-bright mb-4"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Know the vocabulary.
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Institutional-grade glossary covering agencies, programs, key figures, cases, legal frameworks, and scientific concepts. Sources: DoD, AARO, ODNI, peer-reviewed journals, congressional testimony. Disputed claims explicitly flagged.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search terms, acronyms, people, cases…"
          className="w-full pl-9 pr-4 py-2.5 rounded border border-border bg-surface text-bright text-sm placeholder:text-muted/50 focus:outline-none focus:border-signal/40 transition-colors"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => setCategorie(cat.id)}
              className={cn('px-3 py-1.5 rounded text-xs font-mono border transition-all',
                categorie === cat.id ? 'bg-signal/15 text-signal border-signal/40' : 'text-muted border-border hover:text-bright')}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {cat.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <span className="text-2xs font-mono text-muted self-center" style={{ fontFamily: 'JetBrains Mono, monospace' }}>DEPTH</span>
          {[{v:'all',l:'All'},{v:'1',l:'Essential'},{v:'2',l:'Detailed'},{v:'3',l:'Reference'}].map(({v,l}) => (
            <button key={v} onClick={() => setTierFilter(v)}
              className={cn('px-3 py-1.5 rounded text-xs font-mono border transition-all',
                tierFilter === v ? 'bg-cold/15 text-cold border-cold/40' : 'text-muted border-border hover:text-bright')}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {l}
            </button>
          ))}
        </div>
      </div>

      <p className="text-2xs font-mono text-muted/60 mb-6" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {filtered.length} term{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Entries */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <p className="text-sm">No terms match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(entry => (
            <div key={entry.id}
              className="flex flex-col p-5 rounded-lg border border-border bg-surface/40 hover:bg-surface hover:border-border/80 transition-all">

              {/* Disputed banner */}
              {entry.isDisputed && (
                <div className="flex items-start gap-2 mb-3 px-3 py-2 rounded bg-red-500/10 border border-red-500/20">
                  <AlertTriangle size={11} className="text-red-400 mt-0.5 shrink-0" />
                  <p className="text-2xs font-mono text-red-400 leading-relaxed" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {entry.disputedNote}
                  </p>
                </div>
              )}

              {/* Title row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="font-display text-base font-700 text-bright"
                      style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                    {entry.terme}
                  </h3>
                  {entry.acronyme && (
                    <span className="text-xs font-mono text-signal" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {entry.acronyme}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className={cn('px-2 py-0.5 rounded text-2xs font-mono border', CATEGORY_COLORS[entry.categorie] ?? 'text-muted border-muted/20')}
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {CATEGORY_LABELS[entry.categorie] ?? entry.categorie}
                  </span>
                  <span className="text-2xs font-mono text-muted/40" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    T{entry.tier}
                  </span>
                </div>
              </div>

              {/* Definition */}
              <p className="text-sm text-body/80 leading-relaxed mb-3 flex-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                {entry.definition}
              </p>

              {/* Footer */}
              <div className="flex flex-wrap items-center gap-3 mt-auto pt-3 border-t border-border/40">
                {entry.tags?.slice(0,4).map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-2xs font-mono text-muted/60"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    <Tag size={8} />
                    {tag}
                  </span>
                ))}
                {entry.sources?.map(src => (
                  <a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1 text-xs font-mono text-signal hover:text-signal/80 transition-colors ml-auto"
                     style={{ fontFamily: 'JetBrains Mono, monospace' }}>
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
