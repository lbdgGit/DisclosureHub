import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Disclosure Hub — Le Dossier Alien',
    template: '%s | Disclosure Hub',
  },
  description:
    "Le portail de référence pour comprendre, anticiper et décrypter l'annonce imminente de l'existence de vie extraterrestre. Analyses, lexique, timeline et rapports prospectifs.",
  keywords: [
    'disclosure', 'alien', 'UAP', 'OVNI', 'extraterrestre',
    'Pentagon', 'James Webb', 'vie intelligente', 'annonce officielle',
  ],
  metadataBase: new URL('https://disclosure-hub.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Disclosure Hub',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="antialiased">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        style={{
          fontFamily: 'Syne, sans-serif',
        }}
        className="min-h-screen bg-void text-body"
      >
        {/* Background atmosphérique global */}
        <div className="stars-bg" aria-hidden />

        {/* Grille subtile */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,107,53,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden
        />

        {/* Contenu */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
