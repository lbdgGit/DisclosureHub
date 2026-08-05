import Link from 'next/link';
import { Radio, ExternalLink } from 'lucide-react';

const SERIF = 'Playfair Display, serif';
const MONO = 'DM Mono, monospace';

const COLUMNS = [
  {
    title: 'Prepare',
    links: [
      { href: '/toolkits',         label: 'Operational Toolkits' },
      { href: '/rapports',         label: 'Reports & Analysis'   },
      { href: '/rapports#starter', label: 'Free Starter Pack'    },
    ],
  },
  {
    title: 'Disclosure Status',
    links: [
      { href: '/signals',  label: 'Disclosure Velocity' },
      { href: '/maturity', label: 'Disclosure Maturity' },
      { href: '/framework', label: 'Scenarios & Impact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/lexique', label: 'Lexicon' },
      { href: '/faq',     label: 'FAQ'     },
      { href: '/about',   label: 'About'   },
    ],
  },
  {
    title: 'Official Sources',
    links: [
      { href: 'https://www.aaro.mil',         label: 'AARO (Pentagon)',  external: true },
      { href: 'https://science.nasa.gov/uap', label: 'NASA UAP Study',   external: true },
      { href: 'https://www.war.gov/ufo',      label: 'PURSUE (war.gov)', external: true },
      { href: 'https://www.cnes-geipan.fr',   label: 'GEIPAN (France)',  external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Radio size={16} className="text-signal" />
              <span className="text-bright text-sm tracking-widest uppercase" style={{ fontFamily: SERIF, fontWeight: 700 }}>
                LBDG
              </span>
            </Link>
            <p className="text-muted text-xs leading-relaxed mb-4" style={{ fontFamily: MONO }}>
              Leadership Bureau for Disclosure Guidance. An independent watch and preparedness initiative for organizations facing the risk of institutional disclosure.
            </p>
            <a href="mailto:contact@readyfordisclosure.com" className="text-2xs text-muted hover:text-bright transition-colors" style={{ fontFamily: MONO }}>
              contact@readyfordisclosure.com
            </a>
          </div>

          {/* Nav columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-2xs font-600 text-muted tracking-widest uppercase mb-4" style={{ fontFamily: MONO }}>
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-muted hover:text-bright transition-colors"
                        style={{ fontFamily: MONO }}
                      >
                        {link.label}
                        <ExternalLink size={9} className="opacity-50" />
                      </a>
                    ) : (
                      <Link href={link.href}
                        className="text-xs text-muted hover:text-bright transition-colors"
                        style={{ fontFamily: MONO }}
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

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-border/30">
          <p className="text-2xs text-muted/50" style={{ fontFamily: MONO }}>
            © 2026 LBDG · readyfordisclosure.com
          </p>
          <div className="flex gap-4">
            <a href="/legal"   className="text-2xs text-muted/40 hover:text-muted transition-colors" style={{ fontFamily: MONO }}>Legal</a>
            <a href="/privacy" className="text-2xs text-muted/40 hover:text-muted transition-colors" style={{ fontFamily: MONO }}>Privacy</a>
            <a href="/terms"   className="text-2xs text-muted/40 hover:text-muted transition-colors" style={{ fontFamily: MONO }}>Terms</a>
          </div>
          <p className="text-2xs text-muted/40 text-center sm:text-right max-w-sm" style={{ fontFamily: MONO }}>
            Independent analysis of public sources. Not affiliated with any government agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
