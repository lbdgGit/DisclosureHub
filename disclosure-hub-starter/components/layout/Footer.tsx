import Link from 'next/link';
import { Radio, ExternalLink } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Éducation',
    links: [
      { href: '/lexique',   label: 'Lexique UAP' },
      { href: '/frise',     label: 'Timeline historique' },
      { href: '/faq',       label: 'FAQ Disclosure' },
      { href: '/chatbot',   label: 'IA Signal' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { href: '/toolkits',              label: 'Boîtes à outils' },
      { href: '/rapports',              label: 'Rapports prospectifs' },
      { href: '/rapports#free-sample',  label: 'Rapport gratuit' },
    ],
  },
  {
    title: 'Sources officielles',
    links: [
      { href: 'https://www.aaro.mil',                          label: 'AARO (Pentagon)',          external: true },
      { href: 'https://science.nasa.gov/uap',                  label: 'NASA UAP',                 external: true },
      { href: 'https://www.congress.gov',                      label: 'Congrès US',               external: true },
      { href: 'https://www.defense.gouv.fr/dgris',             label: 'SGDSN (France)',           external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Radio size={16} className="text-signal" />
              <span
                className="font-display font-700 text-bright text-sm tracking-widest uppercase"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                Disclosure<span className="text-signal">Hub</span>
              </span>
            </Link>
            <p className="text-muted text-xs leading-relaxed mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Le portail de référence pour comprendre et anticiper l&apos;annonce officielle de l&apos;existence de vie non-humaine.
            </p>
            {/* Signal indicator */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-verified animate-pulse-slow" />
              <span className="text-2xs font-mono text-verified tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                SIGNAL ACTIF
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3
                className="text-2xs font-mono font-600 text-muted tracking-widest uppercase mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-muted hover:text-bright transition-colors"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {link.label}
                        <ExternalLink size={10} className="opacity-50" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-xs text-muted hover:text-bright transition-colors"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-2xs font-mono text-muted/60 tracking-wider"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            © {new Date().getFullYear()} Disclosure Hub — Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            {['Mentions légales', 'Confidentialité', 'CGV'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-2xs font-mono text-muted/60 hover:text-muted transition-colors"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
