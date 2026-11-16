import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclosure Scenarios and Business Impact Matrix',
  description: 'Explore preparedness scenarios and potential organizational impacts of institutional UAP disclosure, from workforce and governance to financial exposure.',
  alternates: { canonical: '/framework' },
};

export default function FrameworkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
