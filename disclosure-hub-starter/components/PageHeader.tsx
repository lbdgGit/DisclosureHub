export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header style={{ background: '#FAF8F4', padding: '128px 24px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A9BB5', marginBottom: 14 }}>
          {eyebrow}
        </p>
        <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 700, color: '#1B2A4A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 18 }}>
          {title}
        </h1>
        {children && (
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: '#4A5D78', lineHeight: 1.7, maxWidth: 640 }}>
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
