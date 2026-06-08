import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — LBDG',
  description: 'How LBDG collects, uses, and protects your personal data.',
};

const SECTIONS = [
  {
    title: '1. Who we are',
    content: `LBDG (Leadership Bureau for Disclosure Guidance) operates the website readyfordisclosure.com. We provide operational toolkits, analytical reports, and signal monitoring for organizations preparing for paradigm-shifting announcements. Contact: contact@readyfordisclosure.com`
  },
  {
    title: '2. What data we collect',
    content: `We collect only your email address, and only when you voluntarily provide it to access a toolkit or report. We do not collect names, phone numbers, payment information, or any other personal data through this website. We do not use cookies for tracking purposes. Standard server access logs may be retained by our hosting provider (Vercel) for operational purposes.`
  },
  {
    title: '3. How we use your data',
    content: `Your email address is used exclusively to: (1) send you the toolkit or report you requested, (2) send you LBDG signal alerts and product updates. We will never sell, rent, or share your email address with any third party. We will never send you unsolicited commercial communications unrelated to LBDG.`
  },
  {
    title: '4. Data processors',
    content: `We use Resend (resend.com) as our email delivery service. Resend processes your email address on our behalf to deliver transactional emails. Resend is GDPR-compliant. Our website is hosted on Vercel (vercel.com), which may process server access data. Both services operate under appropriate data processing agreements.`
  },
  {
    title: '5. Legal basis (GDPR)',
    content: `We process your email address on the basis of your explicit consent, given when you submit your email address to access LBDG materials. You may withdraw this consent at any time by unsubscribing.`
  },
  {
    title: '6. Your rights',
    content: `Under GDPR and applicable data protection law, you have the right to: access the personal data we hold about you, request correction or deletion of your data, withdraw consent and unsubscribe at any time, lodge a complaint with your national data protection authority (in France: CNIL — cnil.fr). To exercise any of these rights, email us at contact@readyfordisclosure.com with the subject line "Data Request." We will respond within 30 days.`
  },
  {
    title: '7. Unsubscribing',
    content: `You can unsubscribe from LBDG emails at any time by replying to any email with "unsubscribe" in the subject line, or by emailing contact@readyfordisclosure.com. Upon unsubscribing, your email address will be removed from our active lists.`
  },
  {
    title: '8. Data retention',
    content: `We retain your email address for as long as you remain subscribed to LBDG communications. Upon unsubscribing or upon request, your data will be deleted within 30 days.`
  },
  {
    title: '9. Changes to this policy',
    content: `We may update this privacy policy from time to time. The current version is always available at readyfordisclosure.com/privacy. Material changes will be communicated to subscribers by email.`
  },
  {
    title: '10. Contact',
    content: `For any privacy-related questions: contact@readyfordisclosure.com`
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-20">
      <div className="mb-10">
        <span className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Legal
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-800 text-bright mb-3"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
          Privacy Policy
        </h1>
        <p className="text-sm text-muted font-mono" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          Last updated: June 2026 — readyfordisclosure.com
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
