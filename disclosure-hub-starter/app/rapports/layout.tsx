import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Institutional Disclosure Risk Reports and Analysis',
  description: 'Sourced analysis of potential financial, geopolitical, and organizational exposure to institutional UAP disclosure, including the Finance Risk Report.',
  alternates: { canonical: '/rapports' },
};

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
