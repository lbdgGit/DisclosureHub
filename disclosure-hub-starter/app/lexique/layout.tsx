import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UAP and Disclosure Glossary — Institutions, Terms, Evidence',
  description: 'A reference glossary of UAP and disclosure terminology, institutional programs, evidence categories, legislation, and historical context.',
  alternates: { canonical: '/lexique' },
};

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
