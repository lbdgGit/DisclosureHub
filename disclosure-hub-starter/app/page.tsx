import Link from 'next/link';
import { ArrowRight, Radio, AlertTriangle, BookOpen, Wrench, FileText, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclosure Hub — Le Dossier Alien',
  description:
    "Le portail de référence pour comprendre, anticiper et décrypter l'annonce imminente de l'existence de vie extraterrestre.",
};

const PILLARS = [
  {
    icon: BookOpen,
    numero: '01',
    titre: 'Pôle Éducatif',
    label: 'Comprendre',
    description:
      "Lexique, timeline historique, FAQ et IA documentaire. Tout ce qu'il faut pour naviguer dans le complexe dossier UAP sans a priori.",
    liens: [
      { href: '/lexique',  label: 'Lexique UAP'       },
      { href: '/frise',    label: 'Timeline'           },
      { href: '/faq',      label: 'FAQ'                },
      { href: '/chatbot',  label: 'IA Signal'          },
    ],
    color: 'cold',
    gradient: 'from-cold/20 to-transparent',
  },
  {
    icon: Wrench,
    numero: '02',
    titre: 'Boîtes à Outils',
    label: 'Se préparer',
    description:
      "Des kits méthodologiques téléchargeables, filtrés par secteur et taille d'organisation. Pour anticiper concrètement une annonce officielle.",
    liens: [
      { href: '/toolkits',              label: 'Tous les kits'     },
      { href: '/toolkits?secteur=media', label: 'Kit Médias'       },
      { href: '/toolkits?secteur=entreprise', label: 'Kit Entreprise' },
    ],
    color: 'classified',
    gradient: 'from-classified/20 to-transparent',
  },
  {
    icon: FileText,
    numero: '03',
    titre: 'Rapports Prospectifs',
    label: 'Analyser',
    description:
      "Des analyses approfondies sur les enjeux géopolitiques, économiques et technologiques d'une disclosure. Achat à l'acte, accès immédiat.",
    liens: [
      { href: '/rapports',              label: 'Voir les rapports'    },
      { href: '/rapports#gratuit',      label: 'Rapport gratuit ↓'   },
    ],
    color: 'signal',
    gradient: 'from-signal/20 to-transparent',
  },
];

const STATS = [
  { valeur: '144+', label: 'Cas UAP non résolus (DoD 2021)' },
  { valeur: '2023', label: 'Année du témoignage Grusch sous serment' },
  { valeur: '22M$', label: 'Budget secret AATIP 2007–2012' },
  { valeur: '100M+', label: 'Exoplanètes dans la zone habitable' },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-24 pb-16">
        {/* Orbe central */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgba(255,107,53,0.06) 0%, rgba(56,189,248,0.04) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto w-full relative">
          {/* Badge alerte */}
          <div className="animate-fade-in flex items-center gap-2.5 mb-8">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-signal/30 bg-signal/10">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              <span
                className="text-2xs font-mono font-600 text-signal tracking-[0.2em] uppercase"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Signal actif — Dossier en cours
              </span>
            </span>
          </div>

          {/* Titre principal */}
          <h1
            className="animate-fade-in-up delay-100 font-display text-5xl sm:text-6xl lg:text-8xl font-800 text-bright leading-[0.95] tracking-tight mb-4"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
          >
            Ce n&apos;est pas
            <br />
            <span className="text-gradient-signal">une question</span>
            <br />
            <span className="text-bright">de croire.</span>
          </h1>

          {/* Sous-titre */}
          <p
            className="animate-fade-in-up delay-200 font-serif text-xl sm:text-2xl text-body/80 max-w-2xl mt-6 mb-10 leading-relaxed"
            style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic' }}
          >
            C&apos;est une question d&apos;être prêt quand les gouvernements
            cesseront enfin de ne pas répondre.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
            <Link
              href="/faq"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-signal text-void font-display font-700 text-sm tracking-wide hover:bg-signal/90 transition-all glow-signal"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
            >
              Commencer ici
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/rapports"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-border hover:border-signal/40 text-bright font-display font-600 text-sm tracking-wide hover:bg-signal/5 transition-all"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
            >
              Voir les rapports →
            </Link>
          </div>

          {/* Avertissement */}
          <div className="animate-fade-in delay-500 mt-12 flex items-start gap-3 max-w-xl">
            <AlertTriangle size={14} className="text-muted mt-0.5 shrink-0" />
            <p
              className="text-xs text-muted leading-relaxed"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Ce site compile exclusivement des sources institutionnelles vérifiables
              (Congrès américain, NASA, DoD, CNES). Aucune spéculation non étayée.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-border" />
          <span
            className="text-2xs font-mono text-muted/50 tracking-widest"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            SCROLL
          </span>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────── */}
      <section className="py-16 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.valeur} className="text-center">
                <div
                  className="font-display text-3xl sm:text-4xl font-800 text-gradient-signal mb-1"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
                >
                  {stat.valeur}
                </div>
                <div
                  className="text-xs font-mono text-muted leading-snug"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3 PILIERS ────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header section */}
          <div className="mb-16">
            <span
              className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-3"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Architecture du portail
            </span>
            <h2
              className="font-display text-3xl sm:text-4xl font-700 text-bright"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
            >
              Trois niveaux d&apos;engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const colorMap: Record<string, string> = {
                cold:       'text-cold border-cold/30 bg-cold/10',
                classified: 'text-classified border-classified/30 bg-classified/10',
                signal:     'text-signal border-signal/30 bg-signal/10',
              };
              const iconColor: Record<string, string> = {
                cold:       'text-cold',
                classified: 'text-classified',
                signal:     'text-signal',
              };

              return (
                <div
                  key={pillar.numero}
                  className="group relative p-7 rounded-lg border border-border hover:border-border/80 bg-surface/50 hover:bg-surface transition-all duration-300"
                >
                  {/* Gradient fond */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-32 rounded-t-lg bg-gradient-to-b ${pillar.gradient} opacity-50`}
                    aria-hidden
                  />

                  <div className="relative">
                    {/* Numéro + badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="font-mono text-xs text-muted/50 tracking-widest"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {pillar.numero}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-full text-2xs font-mono font-600 tracking-widest uppercase border ${colorMap[pillar.color]}`}
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {pillar.label}
                      </span>
                    </div>

                    {/* Icône */}
                    <Icon
                      size={28}
                      className={`mb-4 ${iconColor[pillar.color]}`}
                    />

                    {/* Titre */}
                    <h3
                      className="font-display text-xl font-700 text-bright mb-3"
                      style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                    >
                      {pillar.titre}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm text-body/80 leading-relaxed mb-6"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      {pillar.description}
                    </p>

                    {/* Liens */}
                    <ul className="space-y-2 border-t border-border/50 pt-4">
                      {pillar.liens.map((lien) => (
                        <li key={lien.href}>
                          <Link
                            href={lien.href}
                            className="flex items-center justify-between text-xs font-mono text-muted hover:text-bright group/link transition-colors"
                            style={{ fontFamily: 'JetBrains Mono, monospace' }}
                          >
                            <span>{lien.label}</span>
                            <ArrowRight
                              size={12}
                              className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA CHATBOT ──────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-xl border border-cold/20 bg-surface/50 overflow-hidden">
            {/* Fond atmosphérique */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 30% 50%, rgba(56,189,248,0.06) 0%, transparent 60%)',
              }}
              aria-hidden
            />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full border border-cold/30 bg-cold/10 flex items-center justify-center">
                  <Zap size={28} className="text-cold" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Radio size={12} className="text-cold animate-pulse" />
                  <span
                    className="text-2xs font-mono text-cold tracking-widest uppercase"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    IA Documentaire — Signal
                  </span>
                </div>
                <h2
                  className="font-display text-2xl sm:text-3xl font-700 text-bright mb-2"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                >
                  Des questions ? Interrogez Signal.
                </h2>
                <p
                  className="text-sm text-body/80 mb-6"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Notre assistant documentaire répond sur les concepts, personnalités, événements et enjeux du dossier UAP. Basé sur des sources institutionnelles vérifiées — sans hallucinations.
                </p>
                <Link
                  href="/chatbot"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded border border-cold/40 text-cold font-mono font-500 text-sm hover:bg-cold/10 hover:border-cold transition-all"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Ouvrir le terminal
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA RAPPORT GRATUIT ──────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="text-2xs font-mono text-muted tracking-[0.25em] uppercase block mb-4"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Rapport d&apos;introduction
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl font-700 text-bright mb-4"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
          >
            Téléchargez le rapport gratuit
          </h2>
          <p
            className="text-body/80 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            15 pages pour comprendre les enjeux fondamentaux, les acteurs clés et le calendrier probable d&apos;une annonce officielle. Sans inscription.
          </p>
          <Link
            href="/rapports#gratuit"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded bg-signal/10 border border-signal/40 text-signal font-mono font-500 text-sm hover:bg-signal/20 hover:border-signal transition-all"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Télécharger gratuitement
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
