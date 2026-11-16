import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Operational Toolkits for Institutional Disclosure Readiness',
  description: 'Preparedness toolkits for HR, finance, communications, legal, boards, marketing, supply chains, and investor relations. Practical templates and decision tools.',
  alternates: { canonical: '/toolkits' },
};

export default function ToolkitsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
