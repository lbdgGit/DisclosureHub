'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Radio, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const SERIF = 'Playfair Display, serif';
const MONO = 'DM Mono, monospace';

// Simple top-level links (direct)
const DIRECT_LINKS = [
  { href: '/',         label: 'Home'     },
  { href: '/toolkits', label: 'Toolkits' },
  { href: '/rapports', label: 'Reports'  },
];

// Dropdown menus
const STATUS_LINKS = [
  { href: '/signals',  label: 'Disclosure Velocity', desc: 'How fast it is moving' },
  { href: '/maturity', label: 'Disclosure Maturity', desc: 'How far it has come' },
];
const RESOURCE_LINKS = [
  { href: '/framework', label: 'Scenarios & Impact', desc: 'The impact matrix' },
  { href: '/lexique',   label: 'Lexicon',            desc: 'Glossary of terms' },
  { href: '/faq',       label: 'FAQ',                desc: 'Sourced answers' },
];

export default function Navbar() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [openMenu, setOpenMenu]   = useState<string | null>(null); // desktop hover dropdown
  const [mobileSub, setMobileSub] = useState<string | null>(null); // mobile accordion
  const pathname                  = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); setOpenMenu(null); setMobileSub(null); }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const statusActive = STATUS_LINKS.some(l => isActive(l.href));
  const resourceActive = RESOURCE_LINKS.some(l => isActive(l.href));

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
      <style>{`
        @keyframes lbdgPulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(0.7); } }
        .lbdg-pulse { animation: lbdgPulse 2s ease-in-out infinite; }
        .navlink-underline { position: absolute; bottom: -2px; left: 0; right: 0; height: 2px; background: #C9A84C; border-radius: 1px; transform-origin: left center; transition: transform 0.3s cubic-bezier(0.4,0,0.2,1); }
        .dropdown-panel { position: absolute; top: calc(100% + 10px); left: 0; min-width: 240px; background: #0F1B30; border: 1px solid rgba(201,168,76,0.2); border-radius: 10px; box-shadow: 0 18px 44px rgba(0,0,0,0.45); padding: 8px; opacity: 0; visibility: hidden; transform: translateY(-6px); transition: opacity .18s ease, transform .18s ease, visibility .18s; }
        .dropdown-wrap:hover .dropdown-panel, .dropdown-panel.forceopen { opacity: 1; visibility: visible; transform: translateY(0); }
        .dropdown-item { display: block; padding: 10px 12px; border-radius: 7px; transition: background .15s ease; }
        .dropdown-item:hover { background: rgba(201,168,76,0.1); }
      `}</style>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Radio size={20} className="text-signal group-hover:text-signal/80 transition-colors" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
          </div>
          <span className="text-white text-sm tracking-[0.15em] uppercase" style={{ fontFamily: SERIF, fontWeight: 700 }}>
            LBDG
            <span className="text-signal ml-1">·</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Direct links */}
          {DIRECT_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-xs tracking-widest uppercase transition-colors flex items-center pb-1"
              style={{ fontFamily: MONO, fontWeight: 500, color: isActive(link.href) ? '#ffffff' : 'rgba(255,255,255,0.65)' }}
              onMouseEnter={e => { if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
              onMouseLeave={e => { if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
            >
              {link.label}
              <span className="navlink-underline" style={{ transform: isActive(link.href) ? 'scaleX(1)' : 'scaleX(0)' }} />
            </Link>
          ))}

          {/* Disclosure Status dropdown (with pulse dot) */}
          <div className="dropdown-wrap relative">
            <button
              className="relative text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5 pb-1"
              style={{ fontFamily: MONO, fontWeight: 500, color: statusActive ? '#ffffff' : 'rgba(255,255,255,0.65)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Disclosure Status
              <ChevronDown size={12} style={{ opacity: 0.7 }} />
              {/* pulsing dot */}
              <span
                className="lbdg-pulse"
                style={{ position: 'absolute', top: '-3px', right: '14px', width: '5px', height: '5px', borderRadius: '50%', background: '#38BDF8' }}
              />
              <span className="navlink-underline" style={{ transform: statusActive ? 'scaleX(1)' : 'scaleX(0)' }} />
            </button>
            <div className="dropdown-panel">
              {STATUS_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="dropdown-item" style={{ textDecoration: 'none' }}>
                  <div style={{ fontFamily: MONO, fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: isActive(l.href) ? '#C9A84C' : '#ffffff' }}>
                    {l.label}
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>
                    {l.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Resources dropdown */}
          <div className="dropdown-wrap relative">
            <button
              className="relative text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5 pb-1"
              style={{ fontFamily: MONO, fontWeight: 500, color: resourceActive ? '#ffffff' : 'rgba(255,255,255,0.65)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Resources
              <ChevronDown size={12} style={{ opacity: 0.7 }} />
              <span className="navlink-underline" style={{ transform: resourceActive ? 'scaleX(1)' : 'scaleX(0)' }} />
            </button>
            <div className="dropdown-panel">
              {RESOURCE_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="dropdown-item" style={{ textDecoration: 'none' }}>
                  <div style={{ fontFamily: MONO, fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: isActive(l.href) ? '#C9A84C' : '#ffffff' }}>
                    {l.label}
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>
                    {l.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/toolkits"
            className="px-4 py-2 rounded text-xs tracking-wider uppercase transition-all"
            style={{ fontFamily: MONO, fontWeight: 500, border: '1px solid #C9A84C', color: '#C9A84C', background: 'rgba(201,168,76,0.08)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.18)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.08)'; }}
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
        <div className="lg:hidden border-t border-border/60 mt-0" style={{ backgroundColor: '#0F1B30', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {/* Direct links */}
            {DIRECT_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 rounded text-sm tracking-wider uppercase transition-colors flex items-center"
                style={{
                  fontFamily: MONO,
                  color: isActive(link.href) ? '#ffffff' : 'rgba(255,255,255,0.65)',
                  background: isActive(link.href) ? 'rgba(201,168,76,0.15)' : 'transparent',
                  borderLeft: isActive(link.href) ? '2px solid #C9A84C' : '2px solid transparent',
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Disclosure Status accordion */}
            <button
              onClick={() => setMobileSub(mobileSub === 'status' ? null : 'status')}
              className="px-3 py-2.5 rounded text-sm tracking-wider uppercase flex items-center justify-between"
              style={{ fontFamily: MONO, color: statusActive ? '#ffffff' : 'rgba(255,255,255,0.65)', background: 'transparent', border: 'none', borderLeft: statusActive ? '2px solid #C9A84C' : '2px solid transparent', cursor: 'pointer' }}
            >
              <span className="flex items-center gap-2">
                Disclosure Status
                <span className="lbdg-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38BDF8' }} />
              </span>
              <ChevronDown size={14} style={{ transform: mobileSub === 'status' ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} />
            </button>
            {mobileSub === 'status' && (
              <div className="flex flex-col gap-1 pl-4">
                {STATUS_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="px-3 py-2 rounded text-xs tracking-wider uppercase" style={{ fontFamily: MONO, color: isActive(l.href) ? '#C9A84C' : 'rgba(255,255,255,0.6)' }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Resources accordion */}
            <button
              onClick={() => setMobileSub(mobileSub === 'resources' ? null : 'resources')}
              className="px-3 py-2.5 rounded text-sm tracking-wider uppercase flex items-center justify-between"
              style={{ fontFamily: MONO, color: resourceActive ? '#ffffff' : 'rgba(255,255,255,0.65)', background: 'transparent', border: 'none', borderLeft: resourceActive ? '2px solid #C9A84C' : '2px solid transparent', cursor: 'pointer' }}
            >
              Resources
              <ChevronDown size={14} style={{ transform: mobileSub === 'resources' ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} />
            </button>
            {mobileSub === 'resources' && (
              <div className="flex flex-col gap-1 pl-4">
                {RESOURCE_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="px-3 py-2 rounded text-xs tracking-wider uppercase" style={{ fontFamily: MONO, color: isActive(l.href) ? '#C9A84C' : 'rgba(255,255,255,0.6)' }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-2 pt-2 border-t border-border/50">
              <Link
                href="/toolkits"
                className="block px-3 py-2.5 rounded text-sm text-center transition-all"
                style={{ fontFamily: MONO, border: '1px solid #C9A84C', color: '#C9A84C', background: 'rgba(201,168,76,0.08)' }}
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
