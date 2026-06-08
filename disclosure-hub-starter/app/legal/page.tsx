import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Notice — LBDG',
  description: 'Legal notice and editorial responsibility for readyfordisclosure.com.',
};

export default function LegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-20">
      <div className="mb-10">
        <span
          className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Legal
        </span>
        <h1
          className="font-display text-3xl sm:text-4xl font-800 text-bright mb-3"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          Legal Notice
        </h1>
        <p className="text-sm text-muted font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Last updated: June 2026 — readyfordisclosure.com
        </p>
      </div>

      <div className="space-y-8 text-sm text-body/80 leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>

        <div>
          <h2 className="font-display text-lg font-700 text-bright mb-3"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
            Website publisher
          </h2>
          <p>
            <strong className="text-bright">Website:</strong> readyfordisclosure.com<br />
            <strong className="text-bright">Publisher:</strong> LBDG — Leadership Bureau for Disclosure Guidance<br />
            <strong className="text-bright">Legal form:</strong> Entrepreneur Individuel (Sole trader — French law)<br />
            <strong className="text-bright">SIREN:</strong> 877 873 729<br />
            <strong className="text-bright">SIRET:</strong> 877 873 729 00017<br />
            <strong className="text-bright">VAT number:</strong> FR01877873729<br />
            <strong className="text-bright">Registered:</strong> France — Occitanie region<br />
            <strong className="text-bright">Contact:</strong> contact@readyfordisclosure.com
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-bright mb-3"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
            Hosting
          </h2>
          <p>
            This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA —{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
               className="text-signal hover:text-signal/80 transition-colors">
              vercel.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-bright mb-3"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
            Intellectual property
          </h2>
          <p>
            All content published on readyfordisclosure.com — including toolkits, reports, signal analyses,
            and written content — is the exclusive property of LBDG and is protected by French and
            international intellectual property law. Any reproduction, distribution, or commercial use
            without prior written permission is prohibited.
          </p>
          <p className="mt-3">
            Third-party sources cited on this website (government reports, academic publications,
            institutional statements) remain the property of their respective authors and institutions.
            Their citation does not imply affiliation with or endorsement by LBDG.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-bright mb-3"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
            Disclaimer
          </h2>
          <p>
            All LBDG content is provided for informational purposes only and does not constitute legal,
            financial, investment, or professional advice. LBDG makes no warranty regarding the accuracy
            or completeness of the information published. LBDG shall not be liable for any decisions
            made on the basis of materials published on this website.
          </p>
          <p className="mt-3">
            Signal strength ratings and the Disclosure Velocity Index (DVI) reflect LBDG editorial
            judgment and are not predictions of any specific event or timeline.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-bright mb-3"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
            Personal data
          </h2>
          <p>
            The collection and processing of personal data on this website is described in our{' '}
            <a href="/privacy" className="text-signal hover:text-signal/80 transition-colors">
              Privacy Policy
            </a>.
            In accordance with the GDPR and French data protection law (Loi Informatique et Libertés),
            you have the right to access, correct, and delete your personal data by contacting us at
            contact@readyfordisclosure.com. You may also lodge a complaint with the CNIL (cnil.fr).
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-bright mb-3"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
            Applicable law
          </h2>
          <p>
            This website and its content are governed by French law. Any dispute relating to the
            use of this website shall be subject to the jurisdiction of the competent French courts.
          </p>
        </div>

        <div className="pt-4 border-t border-border/40">
          <p className="text-xs text-muted font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            © 2026 LBDG — readyfordisclosure.com ·{' '}
            <a href="/privacy" className="hover:text-bright transition-colors">Privacy Policy</a>
            {' '}·{' '}
            <a href="/terms" className="hover:text-bright transition-colors">Terms of Use</a>
          </p>
        </div>
      </div>
    </div>
  );
}
