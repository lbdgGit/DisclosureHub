import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclosure Velocity Index (DVI) — Institutional Signals',
  description: 'Explore the sourced Disclosure Velocity Index, its verified institutional events, weights, and open methodology. Measures institutional activity, not UAP origin.',
  alternates: { canonical: '/signals' },
};

export default function SignalsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
