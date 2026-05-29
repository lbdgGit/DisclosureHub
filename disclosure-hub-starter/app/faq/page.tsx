'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ, FAQ_CATEGORIES } from '@/data/faq';
import { cn } from '@/lib/utils';

export default function FAQPage() {
  const [openId, setOpenId]     = useState<string | null>(null);
  const [categorie, setCategorie] = useState<string>('all');

  const filtered = FAQ.filter(
    (item) => categorie === 'all' || item.categorie === categorie,
  );

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  // Formatter le markdown simple en JSX (gras, listes)
  function renderAnswer(text: string) {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('- ')) {
        return (
          <li key={i} className="flex items-start gap-2 text-sm text-body/80 leading-relaxed">
            <span className="text-signal mt-1.5">•</span>
            <span dangerouslySetInnerHTML={{ __html: formatInline(line.slice(2)) }} />
          </li>
        );
      }
      if (line.startsWith('(') || line === '') return null;
      return (
        <p key={i} className="text-sm text-body/80 leading-relaxed mb-3"
          dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      );
    });
  }

  function formatInline(text: string): string {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-bright font-600">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20">
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
          Questions fréquentes
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Les vraies questions sur la disclosure — avec des réponses ancrées dans les faits institutionnels, pas la spéculation.
        </p>
      </div>

      {/* Filtre catégories */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FAQ_CATEGORIES.map((cat) => (
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

      {/* Accordion */}
      <div className="space-y-2">
        {filtered.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={cn(
                'rounded-lg border transition-all duration-200',
                isOpen
                  ? 'border-signal/30 bg-surface'
                  : 'border-border bg-surface/40 hover:bg-surface/70',
              )}
            >
              {/* Question */}
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span
                  className={cn(
                    'font-display text-sm sm:text-base font-600 transition-colors',
                    isOpen ? 'text-bright' : 'text-body/90 hover:text-bright',
                  )}
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    'shrink-0 text-muted transition-transform duration-200',
                    isOpen && 'rotate-180 text-signal',
                  )}
                />
              </button>

              {/* Réponse */}
              {isOpen && (
                <div className="px-5 pb-5 border-t border-border/50 pt-4">
                  <div className="space-y-0">
                    {renderAnswer(item.reponse)}
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/30">
                    <span
                      className={cn(
                        'text-2xs font-mono px-2 py-0.5 rounded border capitalize',
                        item.categorie === 'scientifique' && 'text-verified border-verified/30 bg-verified/10',
                        item.categorie === 'politique'    && 'text-cold border-cold/30 bg-cold/10',
                        item.categorie === 'general'      && 'text-signal border-signal/30 bg-signal/10',
                        item.categorie === 'pratique'     && 'text-classified border-classified/30 bg-classified/10',
                      )}
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {item.categorie}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA bas */}
      <div className="mt-16 p-6 rounded-lg border border-border/50 bg-surface/30 text-center">
        <p
          className="text-sm text-body/70 mb-4"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Une question non couverte ici ? Notre assistant documentaire peut y répondre.
        </p>
        <a
          href="/chatbot"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-cold/40 text-cold font-mono text-sm hover:bg-cold/10 transition-all"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Interroger Signal →
        </a>
      </div>
    </div>
  );
}
