'use client';

import { useState, useMemo } from 'react';
import { Search, ExternalLink, Tag } from 'lucide-react';
import { LEXIQUE, CATEGORIES } from '@/data/lexique';
import { cn } from '@/lib/utils';

const CATEGORY_COLORS: Record<string, string> = {
  institutionnel: 'bg-cold/10 text-cold border-cold/30',
  phenomenologie: 'bg-signal/10 text-signal border-signal/30',
  technologie:    'bg-verified/10 text-verified border-verified/30',
  juridique:      'bg-classified/10 text-classified border-classified/30',
  personnel:      'bg-redacted/10 text-redacted border-redacted/30',
};

export default function GlossaryPage() {
  const [search, setSearch]       = useState('');
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-20">
      {/* Header */}
      <div className="mb-10">
        <span
          className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          UAP / NHI Glossary
        </span>
        <h1
          className="font-display text-3xl sm:text-5xl font-800 text-bright mb-4"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          Know the vocabulary.
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Official definitions, institutional terminology, and key concepts. All entries sourced from government documents, congressional testimony, or peer-reviewed publications.
        </p>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search terms, acronyms, definitions…"
            className="w-full pl-9 pr-4 py-2.5 rounded border border-border bg-surface text-bright text-sm placeholder:text-muted/50 focus:outline-none focus:border-signal/40 transition-colors"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategorie(cat.id)}
              className={cn(
                'px-3 py-1.5 rounded text-xs font-mono border transition-all',
                categorie === cat.id
                  ? 'bg-signal/15 text-signal border-signal/40'
                  : 'text-muted border-border hover:text-bright',
              )}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-2xs font-mono text-muted/60 mb-6 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {filtered.length} term{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Entries grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          <p className="text-sm">No terms match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((entry) => (
            <div
              key={entry.id}
              className="p-5 rounded-lg border border-border bg-surface/40 hover:bg-surface hover:border-border/80 transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3
                    className="font-display text-base font-700 text-bright"
                    style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                  >
                    {entry.terme}
                  </h3>
                  {entry.acronyme && (
                    <span
                      className="text-xs font-mono text-signal"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {entry.acronyme}
                    </span>
                  )}
                </div>
                <span
                  className={cn('px-2 py-0.5 rounded text-2xs font-mono border shrink-0', CATEGORY_COLORS[entry.categorie])}
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {entry.categorie}
                </span>
              </div>

              <p className="text-sm text-body/80 leading-relaxed mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                {entry.definition}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-auto">
                {entry.tags && entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-1.5 py-0.5 rounded text-2xs font-mono text-muted/60 bg-panel border border-border/40"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        <Tag size={8} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {entry.sources?.map((src) => (
                  <a
                    key={src.url}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-signal hover:text-signal/80 transition-colors"
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
