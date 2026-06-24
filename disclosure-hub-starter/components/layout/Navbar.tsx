'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Radio } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/framework', label: 'Framework'  },
  { href: '/lexique',   label: 'Lexicon'    },
  { href: '/frise',     label: 'Timeline'   },
  { href: '/faq',       label: 'FAQ'        },
  { href: '/toolkits',  label: 'Toolkits'   },
  { href: '/rapports',  label: 'Reports'    },
  { href: '/signals',   label: 'Signals'    },
  { href: '/chatbot',   label: 'AI Signal'  },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-3 border-b border-border/80' : 'py-5',
      )}
      style={{
        backgroundColor: scrolled ? '#0F1B30' : 'rgba(15, 27, 48, 0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Radio size={20} className="text-signal group-hover:text-signal/80 transition-colors" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
          </div>
          <span
            className="font-display font-700 text-white text-sm tracking-[0.15em] uppercase"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
          >
            LBDG
            <span className="text-signal ml-1">·</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-xs font-mono font-500 tracking-widest uppercase transition-colors flex items-center gap-1',
                pathname === link.href
                  ? 'text-signal'
                  : 'text-white/70 hover:text-white',
              )}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {link.href === '/signals' && (
                <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              )}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/rapports"
            className="px-4 py-2 rounded border border-signal/40 text-signal text-xs font-mono font-500 tracking-wider uppercase hover:bg-signal/10 hover:border-signal transition-all"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Access Reports
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 rounded text-muted hover:text-bright transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t border-border/60 mt-0"
          style={{ backgroundColor: '#0F1B30', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2.5 rounded text-sm font-mono tracking-wider uppercase transition-colors flex items-center gap-2',
                  pathname === link.href
                    ? 'text-signal bg-signal/10'
                    : 'text-gray-300 hover:text-bright hover:bg-white/5',
                )}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {link.href === '/signals' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
                )}
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-border/50">
              <Link
                href="/rapports"
                className="block px-3 py-2.5 rounded border border-signal/40 text-signal text-sm font-mono text-center hover:bg-signal/10 transition-all"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Access Reports →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
