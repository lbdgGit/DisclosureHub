'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ, FAQ_CATEGORIES } from '@/data/faq';
import { cn } from '@/lib/utils';
import { PageHeader } from '@/components/PageHeader';

const SERIF = 'Playfair Display, serif';
const MONO = 'DM Mono, monospace';
const NAVY = '#1B2A4A';
const CREAM = '#FAF8F4';

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
    <>
      <PageHeader eyebrow="LBDG · Frequently Asked Questions" title="What you need to know">
        Answers grounded exclusively in verified institutional sources. Every claim is sourced.
      </PageHeader>

      <div style={{ background: CREAM }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }} className="px-4 sm:px-6 pb-20">

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategorie(cat.id)}
                className={cn(
                  'px-3 py-1.5 rounded text-xs border transition-all',
                  categorie === cat.id
                    ? 'bg-signal/15 text-signal border-signal/40'
                    : 'text-muted border-border hover:text-bright',
                )}
                style={{ fontFamily: MONO }}
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
                className="rounded-lg border border-border bg-white overflow-hidden"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-black/[0.02] transition-colors"
                >
                  <span style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 16 }}>
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

          <div className="mt-12 p-5 rounded-lg border border-border/40 bg-white text-center">
            <p style={{ fontFamily: MONO, fontSize: 11, lineHeight: 1.7, color: 'rgba(138,155,181,0.7)' }}>
              Sources: DoD/AARO · NASA · U.S. Congress · CNES/GEIPAN · Deloitte AG · Bank of England · The Age of Disclosure (2025)
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
