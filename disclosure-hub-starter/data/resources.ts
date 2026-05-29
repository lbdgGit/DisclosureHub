// ─── TOOLKITS ────────────────────────────────────────────────────────────────

export interface Toolkit {
  id: string;
  titre: string;
  description: string;
  secteur: 'media' | 'entreprise' | 'education' | 'sante' | 'finance' | 'administration';
  taille: 'pme' | 'eti' | 'grand-groupe' | 'independant';
  pages: number;
  format: 'PDF' | 'PDF + Excel';
  gratuit: boolean;
  tags: string[];
}

export const TOOLKITS: Toolkit[] = [
  {
    id: 'media-communication',
    titre: 'Kit Communication — Médias & Journalisme',
    description: "Cadre de traitement éditorial pour couvrir une annonce disclosure sans tomber dans la sensationnalisation ni le rejet. Inclut des guides de vérification des sources, des templates d'articles et un lexique validé.",
    secteur: 'media',
    taille: 'independant',
    pages: 24,
    format: 'PDF',
    gratuit: false,
    tags: ['édito', 'sources', 'lexique', 'vérification'],
  },
  {
    id: 'rh-communication-interne',
    titre: 'Kit RH — Gérer l'incertitude organisationnelle',
    description: "Protocole de communication interne pour les RH et managers. Anticiper les questions des collaborateurs, maintenir la cohésion d'équipe et préserver la productivité dans un contexte d'information instable.",
    secteur: 'entreprise',
    taille: 'pme',
    pages: 18,
    format: 'PDF',
    gratuit: true,
    tags: ['management', 'communication interne', 'crise', 'RH'],
  },
  {
    id: 'finance-risque',
    titre: 'Kit Gestion des risques — Secteur financier',
    description: "Analyse de scénarios prospectifs et matrices de risque pour les équipes compliance et risk management. Inclut 3 scénarios d'impact marché (soft, hard, partiel disclosure) avec indicateurs de suivi.",
    secteur: 'finance',
    taille: 'eti',
    pages: 32,
    format: 'PDF + Excel',
    gratuit: false,
    tags: ['risque', 'compliance', 'scénarios', 'marchés'],
  },
  {
    id: 'education-lycee',
    titre: 'Kit Pédagogique — Lycée & Enseignement supérieur',
    description: "Séquences pédagogiques clé-en-main pour aborder les UAP, l'astrobiologie et les implications éthiques de la disclosure. Approche interdisciplinaire : SVT, philosophie, histoire-géo, SES.",
    secteur: 'education',
    taille: 'independant',
    pages: 28,
    format: 'PDF',
    gratuit: false,
    tags: ['enseignement', 'astrobiologie', 'éthique', 'lycée'],
  },
  {
    id: 'sante-psychologie',
    titre: 'Kit Santé mentale — Accompagner l'impact psychologique',
    description: "Ressources pour les professionnels de santé mentale. Cadre théorique sur la rupture épistémique, outils d'évaluation de la résilience et protocoles d'écoute adaptés à une annonce de cette nature.",
    secteur: 'sante',
    taille: 'independant',
    pages: 22,
    format: 'PDF',
    gratuit: false,
    tags: ['psychologie', 'résilience', 'rupture épistémique', 'thérapeute'],
  },
  {
    id: 'admin-continuité',
    titre: 'Kit Administration — Plan de continuité d'activité',
    description: "Modèle de PCA pour les collectivités et administrations. Anticiper les perturbations d'ordre public, gérer la communication institutionnelle et maintenir les services essentiels.",
    secteur: 'administration',
    taille: 'eti',
    pages: 20,
    format: 'PDF + Excel',
    gratuit: false,
    tags: ['PCA', 'collectivités', 'ordre public', 'communication institutionnelle'],
  },
];

export const TOOLKIT_SECTEURS = [
  { id: 'all',            label: 'Tous les secteurs' },
  { id: 'entreprise',     label: 'Entreprise'        },
  { id: 'media',          label: 'Médias'            },
  { id: 'finance',        label: 'Finance'           },
  { id: 'education',      label: 'Éducation'         },
  { id: 'sante',          label: 'Santé'             },
  { id: 'administration', label: 'Administration'    },
] as const;

export const TOOLKIT_TAILLES = [
  { id: 'all',          label: 'Toutes tailles' },
  { id: 'independant',  label: 'Indépendant / Auto'  },
  { id: 'pme',          label: 'PME (< 250 salariés)' },
  { id: 'eti',          label: 'ETI (250–5 000)'      },
  { id: 'grand-groupe', label: 'Grand groupe'          },
] as const;

// ─── REPORTS ─────────────────────────────────────────────────────────────────

export interface Report {
  id: string;
  titre: string;
  sous_titre: string;
  description: string;
  date: string;
  pages: number;
  prix_eur: number;
  gratuit: boolean;
  tags: string[];
  achat_url: string; // Lien Stripe Checkout ou Gumroad
  preview_url?: string;
  badge?: string;
}

export const REPORTS: Report[] = [
  {
    id: 'rapport-gratuit-intro',
    titre: 'Introduction à la Disclosure',
    sous_titre: 'Rapport d'introduction gratuit',
    description:
      "Un rapport de 15 pages pour comprendre les enjeux fondamentaux, les acteurs clés et le calendrier probable d'une annonce officielle. Offert sans inscription.",
    date: '2025-01-15',
    pages: 15,
    prix_eur: 0,
    gratuit: true,
    tags: ['introduction', 'grands acteurs', 'calendrier'],
    achat_url: '/rapports/gratuit',
    badge: 'Gratuit',
  },
  {
    id: 'rapport-geopolitique',
    titre: 'Géopolitique de la Disclosure',
    sous_titre: 'Qui annoncera en premier, et pourquoi ?',
    description:
      "Analyse comparative des positions de 15 gouvernements face à la divulgation. Scénarios d'annonce par acteur (USA, Chine, Europe, ONU) avec probabilités pondérées et implications stratégiques.",
    date: '2025-02-10',
    pages: 48,
    prix_eur: 29,
    gratuit: false,
    tags: ['géopolitique', 'USA', 'Chine', 'ONU', 'scénarios'],
    achat_url: 'https://buy.stripe.com/xxx', // À remplacer
    badge: 'Populaire',
  },
  {
    id: 'rapport-impact-economique',
    titre: 'Impact Économique : Scénarios 2025–2030',
    sous_titre: 'Secteurs gagnants et perdants post-annonce',
    description:
      "Modélisation de l'impact économique selon 3 scénarios de disclosure (partielle, technologique, totale). Analyse sectorielle détaillée : énergie, défense, pharma, espace, tourisme.",
    date: '2025-03-05',
    pages: 64,
    prix_eur: 49,
    gratuit: false,
    tags: ['économie', 'marchés', 'énergie', 'investissement'],
    achat_url: 'https://buy.stripe.com/yyy',
    badge: 'Best-seller',
  },
  {
    id: 'rapport-technologique',
    titre: 'Rétro-ingénierie & Technologies NHI',
    sous_titre: 'Ce que la science dit des capabilities observées',
    description:
      "Analyse physique des 5 observables UAP documentés. État de l'art des recherches en propulsion avancée, matériaux métamorphiques et manipulation du champ gravitationnel.",
    date: '2025-04-01',
    pages: 72,
    prix_eur: 59,
    gratuit: false,
    tags: ['technologie', 'propulsion', 'physique', 'rétro-ingénierie'],
    achat_url: 'https://buy.stripe.com/zzz',
  },
];
