'use client';

import { useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { TIMELINE } from '@/data/timeline';
import { cn } from '@/lib/utils';

const IMPORTANCE_CONFIG = {
  majeur:       { dot: 'bg-signal border-signal', label: 'Majeur',        class: 'text-signal border-signal/30 bg-signal/10' },
  significatif: { dot: 'bg-cold border-cold',     label: 'Significatif',  class: 'text-cold border-cold/30 bg-cold/10'   },
  notable:      { dot: 'bg-muted border-muted',   label: 'Notable',       class: 'text-muted border-muted/30 bg-muted/10' },
};

const CATEGORIE_COLORS: Record<string, string> = {
  militaire:   'text-redacted',
  scientifique:'text-verified',
  juridique:   'text-classified',
  temoignage:  'text-signal',
  media:       'text-cold',
};

const FILTRES_IMPORTANCE = [
  { id: 'all',          label: 'Tous'         },
  { id: 'majeur',       label: 'Majeurs'      },
  { id: 'significatif', label: 'Significatifs'},
] as const;

const FILTRES_CATEGORIE = [
  { id: 'all',          label: 'Toutes'       },
  { id: 'militaire',    label: 'Militaire'    },
  { id: 'scientifique', label: 'Science'      },
  { id: 'juridique',    label: 'Juridique'    },
  { id: 'temoignage',   label: 'Témoignages'  },
  { id: 'media',        label: 'Médias'       },
] as const;

function formatDate(dateStr: string): string {
  const parts = dateStr.split('-');
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) {
    const months = ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return `${months[parseInt(parts[1]) - 1]} ${parts[0]}`;
  }
  return dateStr;
}

export default function FrisePage() {
  const [filtreImp, setFiltreImp]   = useState<string>('all');
  const [filtreCat, setFiltreCat]   = useState<string>('all');

  const filtered = TIMELINE.filter((ev) => {
    const matchI = filtreImp === 'all' || ev.importance === filtreImp;
    const matchC = filtreCat === 'all' || ev.categorie === filtreCat;
    return matchI && matchC;
  }).sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20">
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
          Timeline UAP
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          De Roswell à Grusch — les événements fondateurs du dossier disclosure, par ordre chronologique.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap gap-4 mb-10">
        <div className="flex items-center gap-2">
          <span
            className="text-2xs font-mono text-muted tracking-wider"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Importance :
          </span>
          {FILTRES_IMPORTANCE.map((f) => (
            <button
              key={f.id}
              onClick={() => setFiltreImp(f.id)}
              className={cn(
                'px-2.5 py-1 rounded text-2xs font-mono border transition-all',
                filtreImp === f.id
                  ? 'bg-signal/15 text-signal border-signal/40'
                  : 'text-muted border-border hover:text-bright',
              )}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-2xs font-mono text-muted tracking-wider"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Catégorie :
          </span>
          {FILTRES_CATEGORIE.map((f) => (
            <button
              key={f.id}
              onClick={() => setFiltreCat(f.id)}
              className={cn(
                'px-2.5 py-1 rounded text-2xs font-mono border transition-all',
                filtreCat === f.id
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

      {/* Timeline */}
      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-4 sm:left-[5.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-signal/30 via-border/50 to-transparent" />

        <div className="space-y-6">
          {filtered.map((event, idx) => {
            const imp = IMPORTANCE_CONFIG[event.importance];
            const catColor = CATEGORIE_COLORS[event.categorie] ?? 'text-muted';

            return (
              <div
                key={event.id}
                className={cn(
                  'relative flex gap-4 sm:gap-6 pl-12 sm:pl-36 animate-fade-in',
                )}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Date (desktop) */}
                <div
                  className="hidden sm:block absolute left-0 w-20 text-right pt-1"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  <span className="text-2xs font-mono text-muted/70 leading-tight">
                    {formatDate(event.date)}
                  </span>
                </div>

                {/* Dot */}
                <div
                  className={cn(
                    'absolute left-[0.875rem] sm:left-[5.375rem] top-2 w-2.5 h-2.5 rounded-full border-2 z-10',
                    imp.dot,
                  )}
                />

                {/* Carte */}
                <div className="flex-1 p-4 rounded-lg border border-border bg-surface/40 hover:bg-surface hover:border-border/80 transition-all">
                  {/* Header carte */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {/* Date mobile */}
                    <span
                      className="sm:hidden text-2xs font-mono text-muted/70 flex items-center gap-1"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      <Calendar size={10} />
                      {formatDate(event.date)}
                    </span>

                    <span
                      className={cn(
                        'px-2 py-0.5 rounded text-2xs font-mono font-500 border capitalize',
                        imp.class,
                      )}
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {imp.label}
                    </span>
                    <span
                      className={cn(
                        'text-2xs font-mono capitalize',
                        catColor,
                      )}
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {event.categorie}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3
                    className="font-display text-base font-700 text-bright mb-2"
                    style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                  >
                    {event.titre}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm text-body/75 leading-relaxed"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {event.description}
                  </p>

                  {/* Source */}
                  {(event.source || event.lienSource) && (
                    <div className="mt-3 pt-3 border-t border-border/40">
                      {event.lienSource ? (
                        <a
                          href={event.lienSource}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-2xs font-mono text-cold/60 hover:text-cold transition-colors"
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          <ExternalLink size={10} />
                          {event.source ?? 'Source officielle'}
                        </a>
                      ) : (
                        <span
                          className="text-2xs font-mono text-muted/50"
                          style={{ fontFamily: 'JetBrains Mono, monospace' }}
                        >
                          {event.source}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Légende */}
      <div className="mt-12 flex flex-wrap gap-4 pt-8 border-t border-border/40">
        <span
          className="text-2xs font-mono text-muted/50 tracking-wider"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Légende :
        </span>
        {Object.entries(IMPORTANCE_CONFIG).map(([key, val]) => (
          <span
            key={key}
            className="flex items-center gap-1.5 text-2xs font-mono text-muted"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <span className={cn('w-2 h-2 rounded-full border', val.dot)} />
            {val.label}
          </span>
        ))}
      </div>
    </div>
  );
}
