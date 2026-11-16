'use client';

import { useEffect, useState, type FormEvent, type ReactNode } from 'react';

type RecordCandidate = {
  id: string; date: string; year?: number; mo?: number; w: number;
  institution: string; country: string; title: string; description: string;
  category: string; strength: string; sourceLabel: string; sourceUrl: string;
  status: 'draft' | 'ready';
};
type EventSummary = { id: string; date: string; w: number; title: string; sourceUrl: string | null };
type AdminState = {
  edition: string;
  published: { count: number; value: number; level: string; updatedAt: string; missingSources: number };
  window: { start: string; end: string };
  score: { raw: number; display: number; level: string; weight: number; multiplier: number };
  entrants: EventSummary[];
  exits: EventSummary[];
  candidates: RecordCandidate[];
  version: string | null;
  writable: boolean;
};

const empty: RecordCandidate = {
  id: '', date: '2026-11', w: 1.0, institution: '', country: '',
  title: '', description: '', category: 'government', strength: 'high',
  sourceLabel: '', sourceUrl: '', status: 'draft',
};
const categories = ['government', 'legislative', 'military', 'international', 'scientific', 'financial', 'media'];
const inputClass = 'w-full rounded-md border border-[#DBDFE5] bg-white px-3 py-2.5 text-sm text-[#1B2A4A] focus:outline-[#C9A84C]';
const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#63738A]';

async function requestData(url: string, options?: RequestInit) {
  const response = await fetch(url, { credentials: 'same-origin', cache: 'no-store', ...options });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error || `Erreur HTTP ${response.status}`);
  return body;
}

export function DVIAdmin() {
  const [edition, setEdition] = useState('2027-01');
  const [data, setData] = useState<AdminState | null>(null);
  const [draft, setDraft] = useState<RecordCandidate>(empty);
  const [editing, setEditing] = useState(false);
  // null means "initially select every candidate marked ready".
  const [selected, setSelected] = useState<string[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  async function refresh(value = edition, ids = selected) {
    const query = ids === null ? '' : `&selected=${encodeURIComponent(ids.join(','))}`;
    const next = await requestData(`/api/admin?edition=${encodeURIComponent(value)}${query}`);
    setData(next);
    if (ids === null) setSelected(next.candidates.filter((candidate: RecordCandidate) => candidate.status === 'ready').map((candidate: RecordCandidate) => candidate.id));
  }

  useEffect(() => {
    let active = true;
    const query = selected === null ? '' : `&selected=${encodeURIComponent(selected.join(','))}`;
    requestData(`/api/admin?edition=${encodeURIComponent(edition)}${query}`)
      .then(value => {
        if (!active) return;
        setData(value);
        if (selected === null) setSelected(value.candidates.filter((candidate: RecordCandidate) => candidate.status === 'ready').map((candidate: RecordCandidate) => candidate.id));
      })
      .catch(reason => { if (active) setError(reason.message); });
    return () => { active = false; };
  }, [edition, selected]);

  function update<K extends keyof RecordCandidate>(field: K, value: RecordCandidate[K]) {
    setDraft(current => ({ ...current, [field]: value }));
  }

  async function save(event: FormEvent) {
    event.preventDefault();
    if (!data) return;
    setBusy(true); setError(''); setNotice('');
    try {
      await requestData('/api/admin', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'save', candidate: draft, version: data.version }),
      });
      await refresh();
      setDraft(empty); setEditing(false);
      setNotice('Événement enregistré sur la branche GitHub de préparation. Le site public et le DVI restent inchangés.');
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Enregistrement impossible'); }
    finally { setBusy(false); }
  }

  async function prepare() {
    if (!data || !window.confirm(`Préparer une Pull Request pour ${edition} avec ${(selected || []).length} nouveaux événements approuvés ? Aucun déploiement automatique.`)) return;
    setBusy(true); setError(''); setNotice('');
    try {
      const result = await requestData('/api/admin', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'publish', edition, ids: selected || [] }),
      });
      setNotice(`Proposition créée : ${result.pullRequest}. Le site ne changera qu'après revue et fusion de cette Pull Request.`);
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Création impossible'); }
    finally { setBusy(false); }
  }

  async function logout() {
    await requestData('/api/admin/logout', { method: 'POST' });
    window.location.reload();
  }

  const publishAllowed = Boolean(data?.writable && new Date(`${edition}-01T00:00:00Z`).getTime() <= Date.now());

  return (
    <main className="min-h-screen bg-[#F8F6F0] px-4 py-10 text-[#1B2A4A] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-9 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B08A50]">LBDG · Espace privé</p>
            <h1 className="font-serif text-4xl font-semibold">Éditeur du DVI</h1>
            <p className="mt-2 text-sm text-[#65748C]">Sourcer · Vérifier · Prévisualiser · Proposer la publication</p>
          </div>
          <button onClick={logout} className="rounded-md border border-[#CBD4DF] bg-white px-4 py-2 text-sm font-semibold">Déconnexion</button>
        </header>

        {(notice || error) && (
          <div role={error ? 'alert' : 'status'} className={`mb-6 rounded-md border p-4 text-sm ${error ? 'border-red-300 bg-red-50 text-red-800' : 'border-emerald-300 bg-emerald-50 text-emerald-900'}`}>
            {error || notice}
          </div>
        )}

        {data ? (
          <>
            <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Résumé du DVI">
              <Summary title={`DVI publié · ${data.published.updatedAt}`} value={data.published.value.toFixed(1)} note={data.published.level} />
              <Summary title={`Projection · ${edition}`} value={data.score.display.toFixed(1)} note={`${data.score.level} · aperçu`} />
              <Summary title="Événements publics" value={String(data.published.count)} note={`${data.published.missingSources} sans lien de source`} />
              <Summary title="Fenêtre de calcul" value="36 mois" note={`${data.window.start} → ${data.window.end}`} />
            </section>

            <section className="mb-8 rounded-xl border border-[#E5DFD0] bg-white p-6 shadow-sm">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-semibold">Simulation trimestrielle</h2>
                  <p className="mt-1 text-sm text-[#65748C]">Les événements prêts sont inclus dans l’aperçu, jamais dans le score publié sans validation.</p>
                </div>
                <label className="text-sm font-semibold">Édition
                  <select value={edition} onChange={event => { setData(null); setSelected(null); setEdition(event.target.value); }} className="ml-3 rounded border border-slate-300 bg-white px-3 py-2">
                    <option value="2026-10">Octobre 2026</option>
                    <option value="2027-01">Janvier 2027</option>
                    <option value="2027-04">Avril 2027</option>
                    <option value="2027-07">Juillet 2027</option>
                    <option value="2027-10">Octobre 2027</option>
                  </select>
                </label>
              </div>
              <p className="mb-4 rounded-lg bg-[#F7F4EC] p-4 text-sm text-[#435673]">
                Poids 36 mois : <strong>{data.score.weight.toFixed(1)}</strong> · Ratio historique : <strong>{data.score.multiplier.toFixed(2)}×</strong> · Valeur non arrondie : <strong>{data.score.raw.toFixed(6)}</strong>
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Changes heading="Entrent dans la fenêtre" items={data.entrants} symbol="+" />
                <Changes heading="Sortent de la fenêtre" items={data.exits} symbol="−" />
              </div>
            </section>

            <section className="mb-8 rounded-xl border border-[#E5DFD0] bg-white p-6 shadow-sm">
              <h2 className="mb-2 font-serif text-2xl font-semibold">Événements en préparation ({data.candidates.length})</h2>
              <p className="mb-5 text-sm text-[#65748C]">Un événement « prêt » a une source et un poids proposés. Coche-le pour l’inclure dans la prochaine proposition de publication.</p>
              {data.candidates.length ? (
                <div className="space-y-3">
                  {data.candidates.map(item => (
                    <div key={item.id} className="flex flex-wrap items-start gap-4 rounded-lg border border-[#E3E8ED] p-4">
                      <input type="checkbox" className="mt-1 h-4 w-4 accent-[#1B2A4A]" aria-label={`Inclure ${item.title}`} disabled={item.status !== 'ready'} checked={(selected || []).includes(item.id)} onChange={event => setSelected(old => event.target.checked ? [...(old || []), item.id] : (old || []).filter(id => id !== item.id))} />
                      <div className="min-w-[200px] flex-1">
                        <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-[#77859A]">
                          <span>{item.date}</span><span>·</span><span>Poids {item.w}</span>
                          <span className={`rounded px-2 py-0.5 font-bold uppercase ${item.status === 'ready' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>{item.status === 'ready' ? 'Prêt' : 'Brouillon'}</span>
                        </div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <a className="mt-1 block break-all text-xs text-[#9D7E46] underline" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Source officielle / documentaire</a>
                      </div>
                      <button className="rounded border border-slate-300 px-3 py-1.5 text-xs font-semibold" onClick={() => { setDraft(item); setEditing(true); document.getElementById('dvi-form')?.scrollIntoView({ behavior: 'smooth' }); }}>Modifier</button>
                    </div>
                  ))}
                </div>
              ) : <p className="text-sm text-[#65748C]">Aucun événement en attente.</p>}
              <div className="mt-6 border-t border-[#E8E5E0] pt-5">
                <button onClick={prepare} disabled={busy || !publishAllowed} className="rounded-md bg-[#1B2A4A] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">Préparer la Pull Request de publication</button>
                {!publishAllowed && <p className="mt-2 text-xs text-[#8A6871]">{!data.writable ? 'Activer l’accès GitHub du serveur pour enregistrer et proposer les modifications.' : `Publication possible à partir du premier jour de l’édition ${edition}, après clôture des 36 mois.`}</p>}
                <p className="mt-2 text-xs text-[#65748C]">Cette action crée uniquement une proposition à examiner dans GitHub. Elle ne fusionne rien dans le site public.</p>
              </div>
            </section>

            <section id="dvi-form" className="rounded-xl border border-[#E5DFD0] bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-semibold">{editing ? 'Modifier la fiche' : 'Ajouter un événement'}</h2>
                  <p className="mt-1 text-sm text-[#65748C]">Date vérifiée, action institutionnelle précise, référence primaire, poids justifié.</p>
                </div>
                {editing && <button onClick={() => { setDraft(empty); setEditing(false); }} className="text-sm underline">Annuler</button>}
              </div>
              <form onSubmit={save} className="grid gap-5 sm:grid-cols-2">
                <Field label="Identifiant stable" input={<input className={inputClass} required value={draft.id} readOnly={editing} placeholder="nouvel-evenement-2026" onChange={event => update('id', event.target.value)} />} />
                <Field label="Date de l’action" input={<input className={inputClass} required type="month" value={draft.date} onChange={event => update('date', event.target.value)} />} />
                <Field label="Institution" input={<input className={inputClass} required value={draft.institution} onChange={event => update('institution', event.target.value)} />} />
                <Field label="Pays" input={<input className={inputClass} required value={draft.country} onChange={event => update('country', event.target.value)} />} />
                <Field label="Catégorie" input={<select className={inputClass} value={draft.category} onChange={event => update('category', event.target.value)}>{categories.map(value => <option key={value} value={value}>{value}</option>)}</select>} />
                <Field label="Poids DVI" input={<select className={inputClass} value={draft.w} onChange={event => update('w', Number(event.target.value))}>{[1, 0.8, 0.7, 0.5].map(value => <option key={value} value={value}>{value.toFixed(1)}</option>)}</select>} />
                <Field label="Force de la preuve" input={<select className={inputClass} value={draft.strength} onChange={event => update('strength', event.target.value)}>{['critical', 'high', 'medium', 'low'].map(value => <option key={value} value={value}>{value}</option>)}</select>} />
                <Field label="Statut éditorial" input={<select className={inputClass} value={draft.status} onChange={event => update('status', event.target.value as RecordCandidate['status'])}><option value="draft">Brouillon</option><option value="ready">Prêt — source vérifiée</option></select>} />
                <div className="sm:col-span-2"><label className={labelClass}>Titre factuel</label><input required className={inputClass} value={draft.title} onChange={event => update('title', event.target.value)} /></div>
                <div className="sm:col-span-2"><label className={labelClass}>Description — distinguer fait, témoignage et interprétation</label><textarea rows={4} required className={inputClass} value={draft.description} onChange={event => update('description', event.target.value)} /></div>
                <div className="sm:col-span-2"><label className={labelClass}>Référence de la source</label><input required className={inputClass} value={draft.sourceLabel} onChange={event => update('sourceLabel', event.target.value)} placeholder="Agence / texte / date" /></div>
                <div className="sm:col-span-2"><label className={labelClass}>Lien HTTPS de la source</label><input required type="url" pattern="https://.*" className={inputClass} value={draft.sourceUrl} onChange={event => update('sourceUrl', event.target.value)} placeholder="https://…" /></div>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={busy || !data.writable} className="rounded-md bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#1B2A4A] disabled:opacity-40">{busy ? 'Enregistrement…' : editing ? 'Enregistrer les corrections' : 'Ajouter à la préparation'}</button>
                  <p className="mt-2 text-xs text-[#65748C]">Aucun brouillon ne modifie le DVI publié ou les CSV. Les modifications sont historisées sur une branche GitHub distincte.</p>
                </div>
              </form>
            </section>
          </>
        ) : <p className="rounded-lg bg-white p-6 text-sm text-[#65748C]">Chargement des données éditoriales…</p>}
      </div>
    </main>
  );
}

function Summary({ title, value, note }: { title: string; value: string; note: string }) {
  return <div className="rounded-xl border border-[#E5DFD0] bg-white p-5 shadow-sm"><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#65748C]">{title}</p><p className="font-serif text-4xl font-semibold text-[#1B2A4A]">{value}</p><p className="mt-2 text-xs text-[#9D7E46]">{note}</p></div>;
}

function Changes({ heading, items, symbol }: { heading: string; items: EventSummary[]; symbol: string }) {
  return <div><h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#1B2A4A]">{symbol} {heading} ({items.length})</h3>{items.length ? <div className="space-y-2">{items.map(item => <div className="rounded-md border border-[#E7EAF0] p-3" key={item.id}><div className="mb-1 text-xs text-[#77859A]">{item.date} · Poids {item.w}</div><p className="text-sm font-semibold">{item.title}</p></div>)}</div> : <p className="rounded-md bg-[#F7F7F7] p-3 text-sm text-[#77859A]">Aucun changement.</p>}</div>;
}

function Field({ label, input }: { label: string; input: ReactNode }) {
  return <div><label className={labelClass}>{label}</label>{input}</div>;
}
