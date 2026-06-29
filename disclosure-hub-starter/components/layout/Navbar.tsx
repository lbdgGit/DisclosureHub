'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Radio } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/',          label: 'Home'              },
  { href: '/signals',   label: 'Signals'           },
  { href: '/toolkits',  label: 'Toolkits'          },
  { href: '/framework', label: 'Scenarios & Impact' },
  { href: '/rapports',  label: 'Reports'            },
  { href: '/lexique',   label: 'Lexicon'            },
  { href: '/faq',       label: 'FAQ'                },
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
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-xs font-mono font-500 tracking-widest uppercase transition-colors flex items-center gap-1.5 pb-1"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.65)',
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
              >
                {link.href === '/signals' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
                )}
                {link.label}
                {/* Animated gold underline */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: '#C9A84C',
                    borderRadius: '1px',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left center',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/toolkits"
            className="px-4 py-2 rounded border border-signal/40 text-signal text-xs font-mono font-500 tracking-wider uppercase hover:bg-signal/10 hover:border-signal transition-all"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Get Toolkits →
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 rounded transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{ color: '#ffffff' }}
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
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 rounded text-sm font-mono tracking-wider uppercase transition-colors flex items-center"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.65)',
                    background: isActive ? 'rgba(201,168,76,0.15)' : 'transparent',
                    borderLeft: isActive ? '2px solid #C9A84C' : '2px solid transparent',
                  }}
                >
                  {link.label}
                  {link.href === '/signals' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse ml-2" />
                  )}
                </Link>
              );
            })}
            <div className="mt-2 pt-2 border-t border-border/50">
              <Link
                href="/toolkits"
                className="block px-3 py-2.5 rounded text-sm font-mono text-center transition-all"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  border: '1px solid #C9A84C',
                  color: '#C9A84C',
                  background: 'rgba(201,168,76,0.08)',
                }}
              >
                Get Toolkits →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
