import type { Metadata } from 'next';
import { isAdminAuthenticated, isAdminConfigured } from '@/lib/dvi-admin-auth';
import { DVIAdmin } from '@/components/admin/DVIAdmin';
import { DVIAdminLogin } from '@/components/admin/DVIAdminLogin';

export const metadata: Metadata = {
  title: 'Private DVI Editor — LBDG',
  robots: { index: false, follow: false, nocache: true },
};
export const dynamic = 'force-dynamic';

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ 'session-verified'?: string }> }) {
  if (!isAdminConfigured()) {
    return (
      <main className="mx-auto max-w-xl px-6 py-24">
        <h1 className="text-3xl font-semibold text-slate-800">Éditeur DVI indisponible</h1>
        <p className="mt-4 text-slate-600">La configuration privée n&apos;a pas encore été activée sur le serveur. Les données publiques restent inchangées.</p>
      </main>
    );
  }
  if (!(await isAdminAuthenticated())) {
    const params = await searchParams;
    return <DVIAdminLogin sessionLost={params['session-verified'] === '1'} />;
  }
  return <DVIAdmin />;
}
