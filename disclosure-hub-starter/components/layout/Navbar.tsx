'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/lexique',  label: 'Lexicon'   },
  { href: '/frise',    label: 'Timeline'  },
  { href: '/faq',      label: 'FAQ'       },
  { href: '/toolkits', label: 'Toolkits'  },
  { href: '/rapports', label: 'Reports'   },
  { href: '/chatbot',  label: 'AI Signal' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname              = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isHome = pathname === '/';

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'white' : (isHome ? 'transparent' : 'white'),
        borderBottom: scrolled ? '1px solid #E2E8F0' : 'none',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          {/* Shield icon — simplified */}
          <div style={{
            width: 32, height: 36,
            background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
            clipPath: 'polygon(50% 0%, 100% 15%, 100% 70%, 50% 100%, 0% 70%, 0% 15%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(201,168,76,0.3)',
          }}>
            <span style={{ color: '#0F1B30', fontSize: '10px', fontFamily: 'DM Mono, monospace', fontWeight: 500, letterSpacing: '0.05em' }}>L</span>
          </div>
          <div>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700, fontSize: '16px',
              color: scrolled || !isHome ? '#1B2A4A' : 'white',
              letterSpacing: '0.02em', lineHeight: 1.1,
            }}>
              LBDG
            </div>
            <div style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '8px', letterSpacing: '0.15em',
              color: scrolled || !isHome ? '#C9A84C' : 'rgba(201,168,76,0.9)',
              textTransform: 'uppercase', lineHeight: 1,
            }}>
              Leadership Bureau
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                color: pathname === link.href
                  ? '#C9A84C'
                  : (scrolled || !isHome ? '#4A5D78' : 'rgba(255,255,255,0.8)'),
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/rapports"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '9px 20px',
              background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
              color: '#0F1B30',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px', fontWeight: 600,
              textDecoration: 'none', borderRadius: '3px',
              boxShadow: '0 2px 8px rgba(201,168,76,0.25)',
              transition: 'all 0.2s',
            }}
          >
            Access Reports →
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
            color: scrolled || !isHome ? '#1B2A4A' : 'white',
          }}
          className="lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'white', borderTop: '1px solid #E2E8F0',
          padding: '16px 24px 20px',
        }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'block', padding: '10px 0',
                fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
                color: pathname === link.href ? '#C9A84C' : '#1B2A4A',
                textDecoration: 'none', fontWeight: 500,
                borderBottom: '1px solid #F1F5F9',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/rapports"
            style={{
              display: 'block', marginTop: '12px',
              padding: '11px', textAlign: 'center',
              background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
              color: '#0F1B30', fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px', fontWeight: 600,
              textDecoration: 'none', borderRadius: '3px',
            }}
          >
            Access Reports →
          </Link>
        </div>
      )}
    </header>
  );
}
