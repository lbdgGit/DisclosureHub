import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use — LBDG',
  description: 'Terms and conditions for using readyfordisclosure.com and LBDG materials.',
};

const SECTIONS = [
  {
    title: '1. Acceptance of terms',
    content: `By accessing readyfordisclosure.com or downloading any LBDG material, you agree to these terms. If you do not agree, do not use this website or its materials. LBDG reserves the right to update these terms at any time. Continued use of the website constitutes acceptance of any changes.`
  },
  {
    title: '2. Nature of the content',
    content: `All LBDG content — including toolkits, reports, and the Signal Monitor — is provided for informational purposes only. Nothing on this website constitutes legal, financial, investment, medical, or professional advice. LBDG materials are designed to help organizations think through preparedness scenarios. They are not a substitute for qualified professional counsel in your specific situation.`
  },
  {
    title: '3. No warranties',
    content: `LBDG materials are provided "as is" without any warranty of any kind, express or implied. We make no warranties regarding accuracy, completeness, fitness for a particular purpose, or non-infringement. The institutional signals referenced are sourced from public documents and verified sources, but signal strength ratings reflect LBDG editorial judgment and are not predictions of any specific event or timing.`
  },
  {
    title: '4. Limitation of liability',
    content: `To the maximum extent permitted by law, LBDG shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website or its materials, including decisions made based on LBDG content. Any action you take based on LBDG materials is taken at your own risk.`
  },
  {
    title: '5. Intellectual property',
    content: `All content on readyfordisclosure.com — including toolkits, reports, the Signal Monitor, and all written content — is the property of LBDG and is protected by applicable intellectual property laws. You may download materials for your personal or organizational use. You may not resell, redistribute, sublicense, or publish LBDG materials without prior written permission. Brief quotations with attribution to LBDG and readyfordisclosure.com are permitted for editorial and journalistic purposes.`
  },
  {
    title: '6. Third-party sources',
    content: `LBDG references third-party institutional sources (government reports, academic publications, financial disclosures) which are in the public domain or are publicly available. LBDG is not affiliated with any of the institutions cited. Quotes from public figures are attributed and sourced. LBDG does not claim endorsement from any cited institution.`
  },
  {
    title: '7. Email communications',
    content: `By providing your email address, you consent to receive LBDG transactional emails (toolkit delivery) and signal updates. You may unsubscribe at any time. See our Privacy Policy for full details.`
  },
  {
    title: '8. Governing law',
    content: `These terms are governed by French law. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the competent courts of France.`
  },
  {
    title: '9. Contact',
    content: `Questions about these terms: contact@readyfordisclosure.com`
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-20">
      <div className="mb-10">
        <span className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Legal
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-800 text-bright mb-3"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Terms of Use
        </h1>
        <p className="text-sm text-muted font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Last updated: June 2025 — readyfordisclosure.com
        </p>
      </div>

      <div className="space-y-8">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-lg font-700 text-bright mb-3"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
              {section.title}
            </h2>
            <p className="text-sm text-body/80 leading-relaxed" style={{ fontFamily: 'Syne, sans-serif' }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
