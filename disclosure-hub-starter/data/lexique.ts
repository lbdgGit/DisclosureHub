export interface LexiqueEntry {
  id: string;
  terme: string;
  acronyme?: string;
  definition: string;
  categorie: 'institutionnel' | 'phenomenologie' | 'technologie' | 'juridique' | 'personnel';
  sources?: { label: string; url: string }[];
  tags?: string[];
}

export const LEXIQUE: LexiqueEntry[] = [
  {
    id: 'uap',
    terme: 'Phénomène Aérien Non-Identifié',
    acronyme: 'UAP',
    definition:
      "Terme officiel remplaçant progressivement « OVNI » dans les documents gouvernementaux américains depuis 2020. Le Pentagone et la NASA emploient ce terme pour désigner tout objet ou phénomène observé dans l'espace aérien qui ne peut être immédiatement identifié. Le glissement terminologique reflète une institutionnalisation du sujet.",
    categorie: 'phenomenologie',
    sources: [{ label: 'DoD Terminology', url: 'https://www.defense.gov' }],
    tags: ['Pentagone', 'officiel', 'terminologie'],
  },
  {
    id: 'aaro',
    terme: 'All-domain Anomaly Resolution Office',
    acronyme: 'AARO',
    definition:
      "Bureau créé en juillet 2022 par le Département de la Défense américain pour centraliser la collecte, l'analyse et la résolution des signalements UAP dans tous les domaines : aérien, maritime, spatial et sous-marin. L'AARO publie des rapports semestriels au Congrès.",
    categorie: 'institutionnel',
    sources: [{ label: 'AARO officiel', url: 'https://www.aaro.mil' }],
    tags: ['Pentagone', 'institution', 'surveillance'],
  },
  {
    id: 'nhi',
    terme: 'Intelligence Non-Humaine',
    acronyme: 'NHI',
    definition:
      "Terme utilisé dans les auditions du Congrès américain de 2023 par des témoins sous serment pour désigner des entités d'origine non-terrestre. Le témoignage de David Grusch, ancien officier du renseignement, devant le sous-comité de surveillance de la Chambre des représentants a popularisé ce terme dans le débat public institutionnel.",
    categorie: 'phenomenologie',
    tags: ['Grusch', 'Congrès', 'témoignage'],
  },
  {
    id: 'disclosure',
    terme: 'Disclosure',
    definition:
      "Concept désignant la divulgation officielle et publique par un gouvernement de l'existence avérée de phénomènes ou d'entités d'origine non-humaine. Distinguée de la « soft disclosure » (fuites organisées, déclassification progressive) et de la « hard disclosure » (déclaration directe d'un chef d'état). Le mouvement pro-disclosure milite pour une transparence totale des dossiers classifiés.",
    categorie: 'juridique',
    tags: ['transparence', 'gouvernement', 'déclassification'],
  },
  {
    id: 'ufo-act',
    terme: 'UAP Disclosure Act',
    definition:
      "Proposition de loi américaine portée par les sénateurs Chuck Schumer et Mike Rounds en 2023, visant à obliger le gouvernement à déclassifier sous 25 ans tout document lié aux UAP. La version finale, amendée et intégrée dans le NDAA 2024, conserve un pouvoir exécutif de refus de déclassification sous condition de sécurité nationale.",
    categorie: 'juridique',
    sources: [{ label: 'NDAA 2024', url: 'https://www.congress.gov' }],
    tags: ['Schumer', 'Congrès', 'loi', 'déclassification'],
  },
  {
    id: 'crash-retrieval',
    terme: "Programme de récupération d'épave",
    acronyme: 'Crash Retrieval Program',
    definition:
      "Programme secret allégué par plusieurs témoins sous serment devant le Congrès américain, consistant en la récupération, l'analyse et la rétro-ingénierie d'engins d'origine non-humaine. David Grusch affirme que des programmes de ce type sont gérés hors du système de supervision classique du Congrès.",
    categorie: 'technologie',
    tags: ['Grusch', 'rétro-ingénierie', 'secret défense'],
  },
  {
    id: 'gimbal',
    terme: 'Vidéo Gimbal',
    definition:
      "L'une des trois vidéos déclassifiées par le Pentagone en avril 2020 (avec FLIR1 et GoFast), enregistrée en 2015 par un F/A-18 de l'US Navy. Elle montre un objet de forme ovale effectuant une rotation inexplicable, sans signature thermique d'un moteur conventionnel. Présentée par l'AARO comme un cas non-résolu.",
    categorie: 'phenomenologie',
    tags: ['Navy', 'vidéo', 'déclassifié', 'Pentagone'],
  },
  {
    id: 'skyhook',
    terme: 'Projet Skyhook / Mogul',
    definition:
      "Explication officielle tardive de l'incident de Roswell (1947) par l'USAF. Le projet Mogul désignait des ballons stratosphériques utilisés pour détecter les essais nucléaires soviétiques. L'enquête officielle de 1994 conclut que les débris retrouvés provenaient d'un tel ballon. Sujet de vives contestations par les témoins oculaires.",
    categorie: 'phenomenologie',
    tags: ['Roswell', 'historique', 'USAF', '1947'],
  },
  {
    id: 'five-observables',
    terme: 'Les 5 Observables',
    definition:
      "Framework défini par Lue Elizondo, ancien directeur de l'AATIP (programme secret du Pentagone), pour caractériser les UAP : (1) résistance anti-gravité, (2) accélération hypersonique sans signature acoustique, (3) faible observabilité radar, (4) interférence électromagnétique, (5) transmédiativité (transition air/eau/espace). Ce cadre est devenu un référentiel dans les analyses officielles.",
    categorie: 'technologie',
    tags: ['Elizondo', 'AATIP', 'physique', 'caractérisation'],
  },
  {
    id: 'aatip',
    terme: 'Advanced Aerospace Threat Identification Program',
    acronyme: 'AATIP',
    definition:
      "Programme secret du Pentagone actif de 2007 à 2012, financé à hauteur de 22 millions de dollars par le sénateur Harry Reid, géré par l'agence DIA. Son existence a été révélée par le New York Times en décembre 2017, marquant un tournant dans la médiatisation du sujet UAP au niveau institutionnel.",
    categorie: 'institutionnel',
    sources: [{ label: 'NYT 2017', url: 'https://www.nytimes.com' }],
    tags: ['Pentagone', 'DIA', 'secret', 'Reid'],
  },
  {
    id: 'oumuamua',
    terme: "'Oumuamua",
    definition:
      "Premier objet interstellaire détecté traversant le système solaire, observé en 2017. Son comportement anomal (accélération non-gravitationnelle sans dégazage visible) a conduit le professeur Avi Loeb (Harvard) à émettre l'hypothèse d'une origine artificielle dans son livre « Extraterrestrial » (2021). L'hypothèse reste contestée mais a relancé le débat scientifique.",
    categorie: 'phenomenologie',
    sources: [{ label: 'Loeb, Harvard', url: 'https://www.cfa.harvard.edu' }],
    tags: ['Harvard', 'Loeb', 'interstellaire', 'astronomie'],
  },
  {
    id: 'galileo-project',
    terme: 'Projet Galilée',
    definition:
      "Initiative scientifique fondée en 2021 par le professeur Avi Loeb (Harvard) visant à collecter des données empiriques sur les phénomènes anormaux par le biais d'observatoires instrumentés. Le projet publie ses données en open-access et représente la première démarche académique rigoureuse et transparente d'étude des UAP.",
    categorie: 'institutionnel',
    sources: [{ label: 'Galileo Project', url: 'https://projects.iq.harvard.edu/galileo' }],
    tags: ['Harvard', 'open-science', 'Loeb'],
  },
];

export const CATEGORIES = [
  { id: 'all',             label: 'Tous'              },
  { id: 'institutionnel',  label: 'Institutionnel'    },
  { id: 'phenomenologie',  label: 'Phénoménologie'    },
  { id: 'technologie',     label: 'Technologie'       },
  { id: 'juridique',       label: 'Juridique & Lois'  },
  { id: 'personnel',       label: 'Personnalités'     },
] as const;
