'use client';

import { useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { TIMELINE } from '@/data/timeline';
import { cn } from '@/lib/utils';

const IMPORTANCE_CONFIG = {
  majeur:       { dot: 'bg-signal border-signal',   label: 'Major',       class: 'text-signal border-signal/30 bg-signal/10'   },
  significatif: { dot: 'bg-cold border-cold',       label: 'Significant', class: 'text-cold border-cold/30 bg-cold/10'         },
  notable:      { dot: 'bg-muted border-muted',     label: 'Notable',     class: 'text-muted border-muted/30 bg-muted/10'      },
};

const CATEGORIE_COLORS: Record<string, string> = {
  militaire:    'text-redacted',
  scientifique: 'text-verified',
  juridique:    'text-classified',
  temoignage:   'text-signal',
  media:        'text-cold',
};

const CATEGORIE_LABELS: Record<string, string> = {
  militaire:    'Military',
  scientifique: 'Science',
  juridique:    'Legal',
  temoignage:   'Testimony',
  media:        'Media',
};

const FILTERS_IMPORTANCE = [
  { id: 'all',          label: 'All'         },
  { id: 'majeur',       label: 'Major'       },
  { id: 'significatif', label: 'Significant' },
] as const;

const FILTERS_CATEGORY = [
  { id: 'all',          label: 'All'       },
  { id: 'militaire',    label: 'Military'  },
  { id: 'scientifique', label: 'Science'   },
  { id: 'juridique',    label: 'Legal'     },
  { id: 'temoignage',   label: 'Testimony' },
  { id: 'media',        label: 'Media'     },
] as const;

function formatDate(dateStr: string): string {
  const parts = dateStr.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return `${months[parseInt(parts[1]) - 1]} ${parts[0]}`;
  return `${months[parseInt(parts[1]) - 1]} ${parseInt(parts[2])}, ${parts[0]}`;
}

export default function TimelinePage() {
  const [importance, setImportance] = useState<string>('all');
  const [categorie, setCategorie]   = useState<string>('all');

  const filtered = TIMELINE.filter((e) => {
    const matchI = importance === 'all' || e.importance === importance;
    const matchC = categorie  === 'all' || e.categorie  === categorie;
    return matchI && matchC;
  }).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-20">
      <div className="mb-10">
        <span
          className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Institutional Timeline
        </span>
        <h1
          className="font-display text-3xl sm:text-5xl font-800 text-bright mb-4"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          From Roswell to PURSUE
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          A chronology of verified institutional events — from the first government denials to the current rolling declassification.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div>
          <p className="text-2xs font-mono text-muted mb-2 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Importance
          </p>
          <div className="flex flex-wrap gap-2">
            {FILTERS_IMPORTANCE.map((f) => (
              <button
                key={f.id}
                onClick={() => setImportance(f.id)}
                className={cn(
                  'px-3 py-1.5 rounded text-xs font-mono border transition-all',
                  importance === f.id
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
        <div>
          <p className="text-2xs font-mono text-muted mb-2 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Category
          </p>
          <div className="flex flex-wrap gap-2">
            {FILTERS_CATEGORY.map((f) => (
              <button
                key={f.id}
                onClick={() => setCategorie(f.id)}
                className={cn(
                  'px-3 py-1.5 rounded text-xs font-mono border transition-all',
                  categorie === f.id
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

      <p className="text-2xs font-mono text-muted/60 mb-6 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        {filtered.length} event{filtered.length !== 1 ? 's' : ''} — most recent first
      </p>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/60" />
        <div className="space-y-6">
          {filtered.map((event) => {
            const cfg = IMPORTANCE_CONFIG[event.importance];
            return (
              <div key={event.id} className="relative flex gap-4 sm:gap-6">
                {/* Dot */}
                <div className={cn('relative z-10 w-3.5 h-3.5 rounded-full border-2 mt-1.5 shrink-0', cfg.dot)} />

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span
                      className="text-2xs font-mono text-muted"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      <Calendar size={10} className="inline mr-1" />
                      {formatDate(event.date)}
                    </span>
                    <span className={cn('text-2xs font-mono px-1.5 py-0.5 rounded border', cfg.class)} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {cfg.label}
                    </span>
                    <span className={cn('text-2xs font-mono', CATEGORIE_COLORS[event.categorie])} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {CATEGORIE_LABELS[event.categorie]}
                    </span>
                  </div>

                  <h3
                    className="font-display text-base font-600 text-bright mb-1.5"
                    style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
                  >
                    {event.titre}
                  </h3>

                  <p className="text-sm text-body/80 leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {event.description}
                  </p>

                  {event.lienSource && (
                    <a
                      href={event.lienSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs font-mono text-signal hover:text-signal/80 transition-colors"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      <ExternalLink size={10} />
                      Source
                    </a>
                  )}
                  {event.source && !event.lienSource && (
                    <span className="block mt-1.5 text-xs font-mono text-muted/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {event.source}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
