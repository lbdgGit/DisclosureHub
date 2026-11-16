import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'LBDG - Leadership Bureau for Disclosure Guidance',
    template: '%s | LBDG',
  },
  description: 'Evidence-based monitoring of institutional UAP disclosure and operational preparedness tools for boards, risk officers, and business continuity teams.',
  metadataBase: new URL('https://www.readyfordisclosure.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'LBDG',
    title: 'LBDG - Leadership Bureau for Disclosure Guidance',
    description: 'Evidence-based monitoring of institutional UAP disclosure and operational preparedness tools for boards, risk officers, and business continuity teams.',
    url: 'https://www.readyfordisclosure.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LBDG - Leadership Bureau for Disclosure Guidance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LBDG - Leadership Bureau for Disclosure Guidance',
    description: 'Evidence-based monitoring of institutional UAP disclosure and operational preparedness tools for boards, risk officers, and business continuity teams.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'DM Sans, sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
        <Script
          src="https://assets.lemonsqueezy.com/lemon.js"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}
