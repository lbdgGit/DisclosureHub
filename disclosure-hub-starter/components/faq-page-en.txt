'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ, FAQ_CATEGORIES } from '@/data/faq';
import { cn } from '@/lib/utils';

export default function FAQPage() {
  const [openId, setOpenId]       = useState<string | null>(null);
  const [categorie, setCategorie] = useState<string>('all');

  const filtered = FAQ.filter(
    (item) => categorie === 'all' || item.categorie === categorie,
  );

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

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
      if (line === '') return null;
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-20">
      <div className="mb-10">
        <span
          className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Frequently Asked Questions
        </span>
        <h1
          className="font-display text-3xl sm:text-5xl font-800 text-bright mb-4"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          What you need to know
        </h1>
        <p className="text-body/80 max-w-xl leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
          Answers grounded exclusively in verified institutional sources. Every claim is sourced.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
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

      {/* FAQ list */}
      <div className="space-y-2">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-border bg-surface/40 overflow-hidden"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-surface/80 transition-colors"
            >
              <span
                className="font-display text-sm sm:text-base font-600 text-bright"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
              >
                {item.question}
              </span>
              <ChevronDown
                size={16}
                className={cn(
                  'text-muted shrink-0 transition-transform',
                  openId === item.id && 'rotate-180',
                )}
              />
            </button>

            {openId === item.id && (
              <div className="px-5 pb-5 border-t border-border/50">
                <div className="pt-4 space-y-1">
                  {renderAnswer(item.reponse)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-5 rounded-lg border border-border/40 bg-surface/20 text-center">
        <p
          className="text-xs text-muted/70 leading-relaxed"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Sources: DoD/AARO · NASA · U.S. Congress · CNES/GEIPAN · Deloitte AG · Bank of England · The Age of Disclosure (2025)
        </p>
      </div>
    </div>
  );
}
