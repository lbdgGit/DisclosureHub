import Link from 'next/link';

const COLS = [
  {
    title: 'Education',
    links: [
      { href: '/lexique',  label: 'UAP Lexicon'         },
      { href: '/frise',    label: 'Historical Timeline'  },
      { href: '/faq',      label: 'FAQ Disclosure'       },
      { href: '/chatbot',  label: 'AI Signal'            },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/toolkits',             label: 'Toolkits'         },
      { href: '/rapports',             label: 'Reports'          },
      { href: '/rapports#gratuit',     label: 'Free Report'      },
    ],
  },
  {
    title: 'Official Sources',
    links: [
      { href: 'https://www.aaro.mil',              label: 'AARO — DoD',      ext: true },
      { href: 'https://science.nasa.gov/uap',      label: 'NASA UAP',        ext: true },
      { href: 'https://www.congress.gov',          label: 'U.S. Congress',   ext: true },
      { href: 'https://www.cnes.fr/geipan',        label: 'GEIPAN — CNES',   ext: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#FAF8F4', borderTop: '1px solid #E2E8F0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px 40px' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr repeat(3, auto)', gap: '48px', marginBottom: '48px', flexWrap: 'wrap' }} className="flex flex-col md:grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '28px', height: '32px',
                background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
                clipPath: 'polygon(50% 0%, 100% 15%, 100% 70%, 50% 100%, 0% 70%, 0% 15%)',
              }} />
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '15px', color: '#1B2A4A' }}>LBDG</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px', letterSpacing: '0.12em', color: '#C9A84C', textTransform: 'uppercase' }}>Leadership Bureau</div>
              </div>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#8A9BB5', lineHeight: 1.6, maxWidth: '220px' }}>
              The reference portal for understanding and anticipating the official announcement of non-human intelligence existence.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', animation: 'pulse 3s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: '#4ADE80', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Signal Active</span>
            </div>
          </div>

          {/* Nav columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <h3 style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', color: '#8A9BB5', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 500 }}>
                {col.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    {'ext' in link && link.ext ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#4A5D78', textDecoration: 'none' }}>
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link href={link.href} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#4A5D78', textDecoration: 'none' }}>
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
        <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#8A9BB5' }}>
            © {new Date().getFullYear()} Leadership Bureau for Disclosure Guidance
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Legal', 'Privacy', 'Terms'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#8A9BB5', textDecoration: 'none' }}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
