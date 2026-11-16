import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UAP Disclosure FAQ — Sources and Business Preparedness',
  description: 'Sourced answers about institutional UAP disclosure, what the public record establishes, and how organizations can assess preparedness.',
  alternates: { canonical: '/faq' },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
