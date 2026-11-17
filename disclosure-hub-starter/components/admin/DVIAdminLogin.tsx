'use client';

import { useState, type FormEvent } from 'react';

export function DVIAdminLogin({ sessionLost = false }: { sessionLost?: boolean }) {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(sessionLost ? 'Le serveur a validé la session, mais elle a disparu lors de la navigation. Vérifiez les cookies de ce site ou essayez un autre navigateur.' : '');
  const [pending, setPending] = useState(false);
  async function submit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setMessage('');
    try {
      const response = await fetch('/api/admin/login', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || 'Connexion refusée');
      const sessionResponse = await fetch('/api/admin/login', { credentials: 'same-origin', cache: 'no-store' });
      if (!sessionResponse.ok) throw new Error('Impossible de vérifier la session après connexion.');
      const session = await sessionResponse.json();
      if (!session.authenticated) throw new Error('Mot de passe accepté, mais le cookie de session n’est pas conservé. Vérifiez que les cookies sont autorisés pour ce site.');
      window.location.assign('/admin?session-verified=1');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Erreur de connexion');
      setPassword('');
      setPending(false);
    }
  }
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#F8F6F0] px-5 py-16">
      <form onSubmit={submit} className="w-full max-w-md rounded-xl border border-[#E6DDCA] bg-white p-9 shadow-lg">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#BD9558]">LBDG · Accès privé</p>
        <h1 className="mb-3 font-serif text-3xl font-semibold text-[#1B2A4A]">Éditeur du DVI</h1>
        <p className="mb-8 text-sm leading-6 text-slate-500">Gestion des événements, vérification documentaire et préparation des éditions trimestrielles.</p>
        <label className="mb-2 block text-sm font-semibold text-[#1B2A4A]" htmlFor="admin-password">Mot de passe administrateur</label>
        <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={event => setPassword(event.target.value)} className="mb-5 w-full rounded-md border border-slate-300 p-3 text-slate-900 focus:outline-[#C9A84C]" />
        <button disabled={pending} className="w-full rounded-md bg-[#1B2A4A] px-5 py-3 font-semibold text-white disabled:opacity-60" type="submit">{pending ? 'Connexion…' : 'Accéder à mon espace'}</button>
        {message && <p role="alert" className="mt-4 text-sm text-red-700">{message}</p>}
      </form>
    </main>
  );
}
