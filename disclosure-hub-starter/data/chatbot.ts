export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: number;
}

export interface ChatNode {
  id: string;
  message: string;
  keywords: string[];
  response: string;
  followups?: string[];
}

// Arbre de décision local — pas d'appel API externe
// Matching par mots-clés dans le message utilisateur
export const CHAT_NODES: ChatNode[] = [
  {
    id: 'bonjour',
    message: 'Bonjour',
    keywords: ['bonjour', 'salut', 'hello', 'bonsoir', 'coucou', 'hey'],
    response:
      "Bienvenue sur **Signal**, votre terminal d'information sur la disclosure. Je suis un assistant documentaire — je peux vous aider à comprendre les concepts clés, les acteurs institutionnels, les événements historiques ou les enjeux prospectifs.\n\nQuel aspect vous intéresse le plus ?",
    followups: [
      "C'est quoi exactement la Disclosure ?",
      "Quels sont les témoignages officiels ?",
      "Qu'est-ce que l'AARO ?",
    ],
  },
  {
    id: 'disclosure-definition',
    message: "C'est quoi la Disclosure",
    keywords: ['disclosure', 'divulgation', 'annonce', "qu'est-ce que"],
    response:
      "La **Disclosure** désigne la divulgation officielle et publique par un gouvernement de l'existence de phénomènes ou d'entités d'origine non-humaine.\n\nOn distingue :\n- **Soft disclosure** : fuites orchestrées, déclassifications progressives (là où nous en sommes)\n- **Hard disclosure** : déclaration directe d'un chef d'État\n\nDepuis 2017, une séquence de soft disclosure est clairement observable : déclassification des vidéos Navy, auditions au Congrès, rapport NASA 2023.",
    followups: [
      "Qui sont les lanceurs d'alerte ?",
      "Quand pourrait arriver l'annonce officielle ?",
      "Que dit le rapport NASA ?",
    ],
  },
  {
    id: 'aaro',
    message: "Qu'est-ce que l'AARO",
    keywords: ['aaro', 'pentagone', 'department of defense', 'dod'],
    response:
      "L'**AARO** (All-domain Anomaly Resolution Office) est le bureau officiel du Pentagone créé en juillet 2022 pour centraliser l'analyse des UAP.\n\nSes missions :\n- Collecter les signalements militaires et civils\n- Coordonner avec la CIA, NSA et autres agences\n- Publier des rapports semestriels au Congrès\n- Gérer un portail de signalement confidentiel\n\nSon rapport de mars 2024 a contesté les allégations de David Grusch, ce qui a alimenté une controverse sur son indépendance réelle.",
    followups: [
      "Qui est David Grusch ?",
      "Que contient le rapport AARO 2024 ?",
    ],
  },
  {
    id: 'grusch',
    message: 'Qui est David Grusch',
    keywords: ['grusch', 'lanceur alerte', 'whistleblower', 'témoignage congrès'],
    response:
      "**David Grusch** est un ancien officier du renseignement américain (NGA & AARO). En juillet 2023, il a témoigné **sous serment** devant le Congrès :\n\n• Des programmes secrets de récupération de *craft* non-humains existeraient\n• Des matériaux biologiques auraient été récupérés\n• Ces programmes sont gérés hors supervision du Congrès\n\nC'est la première déclaration de ce type sous serment dans l'histoire institutionnelle américaine. Il est protégé par la loi sur les lanceurs d'alerte. Ses affirmations restent non-confirmées officiellement.",
    followups: [
      "L'AARO a-t-il vérifié ses allégations ?",
      "Y a-t-il d'autres témoins ?",
    ],
  },
  {
    id: 'uap-vs-ovni',
    message: 'Différence UAP OVNI',
    keywords: ['uap', 'ovni', 'différence', 'terminologie', 'terme officiel'],
    response:
      "**OVNI** (Objet Volant Non Identifié) est le terme populaire des années 1950, chargé culturellement.\n\n**UAP** (Unidentified Anomalous Phenomenon) est le terme officiel adopté par les gouvernements depuis 2020. Ce glissement est délibéré :\n- Il déstigmatise le sujet dans les milieux institutionnels\n- Il élargit le périmètre (sous-marin, spatial, pas seulement aérien)\n- Il permet un traitement sérieux sans association science-fiction\n\nAujourd'hui, les militaires, la NASA et le Congrès utilisent exclusivement UAP.",
    followups: [
      "Quelles vidéos UAP ont été déclassifiées ?",
      "Qu'est-ce que le cas Nimitz ?",
    ],
  },
  {
    id: 'nimitz',
    message: 'Cas Nimitz',
    keywords: ['nimitz', 'tic-tac', 'fravor', 'navy', '2004', 'flir'],
    response:
      "L'incident du **USS Nimitz** (novembre 2004) est l'un des cas les mieux documentés :\n\n- Le commandant **David Fravor** et 3 autres pilotes F/A-18 observent un objet en forme de Tic-Tac\n- Pas d'ailes, pas de signature thermique, accélérations impossibles\n- La vidéo **FLIR1** a été déclassifiée par le Pentagone en avril 2020\n- L'AARO classe ce cas comme **non-résolu**\n\nFravor a témoigné au Congrès en 2023 : *« Je n'ai jamais rien vu se comporter de cette façon dans tout l'espace aérien mondial. »*",
    followups: [
      "Y a-t-il d'autres vidéos déclassifiées ?",
      "Qu'est-ce que les 5 Observables ?",
    ],
  },
  {
    id: 'cinq-observables',
    message: 'Les 5 observables',
    keywords: ['5 observables', 'cinq observables', 'elizondo', 'physique', 'antigravité'],
    response:
      "Le framework des **5 Observables** a été défini par Lue Elizondo (ex-directeur AATIP) pour caractériser les UAP :\n\n1. **Résistance anti-gravité** — vol sans portance apparente\n2. **Accélération hypersonique** — sans signature acoustique ni traînée thermique\n3. **Faible observabilité radar** — furtivité multi-spectre\n4. **Interférence électromagnétique** — perturbation des systèmes avioniques\n5. **Transmédiativité** — transition air / eau / espace sans changement de vitesse\n\nAucune technologie humaine connue ne combine ces 5 propriétés simultanément.",
    followups: [
      "Qui est Lue Elizondo ?",
      "Comment la physique explique-t-elle ces comportements ?",
    ],
  },
  {
    id: 'james-webb',
    message: 'James Webb télescope',
    keywords: ['james webb', 'jwst', 'télescope', 'exoplanète', 'biosignature'],
    response:
      "Le **télescope James Webb** (lancé décembre 2021) change la donne :\n\n- Analyse la composition atmosphérique des exoplanètes par **spectroscopie de transit**\n- Peut détecter des **biosignatures** : oxygène, méthane, vapeur d'eau, DMS\n- En 2023 : détection possible de **diméthylsulfure** sur K2-18b (produit uniquement par des organismes vivants sur Terre)\n- Ces données demandent confirmation mais illustrent notre capacité croissante\n\nSi des biosignatures sont confirmées, ce serait la première preuve de vie extraterrestre — même microbienne.",
    followups: [
      "Qu'est-ce que le Projet Galilée ?",
      "Quelle est la probabilité statistique de vie intelligente ?",
    ],
  },
  {
    id: 'default',
    message: '',
    keywords: [],
    response:
      "Je n'ai pas de réponse précise dans ma base documentaire pour cette question. Je vous recommande de :\n\n- Consulter notre **Lexique** pour les définitions officielles\n- Parcourir la **Timeline** pour les événements historiques\n- Lire notre **FAQ** pour les questions fréquentes\n\nPour des analyses approfondies, nos **rapports prospectifs** couvrent les enjeux géopolitiques, économiques et technologiques en détail.",
    followups: [
      "Voir le lexique",
      "Voir la timeline",
      "Voir les rapports",
    ],
  },
];

export function findResponse(userMessage: string): ChatNode {
  const lower = userMessage.toLowerCase();

  for (const node of CHAT_NODES) {
    if (node.id === 'default') continue;
    if (node.keywords.some((kw) => lower.includes(kw))) {
      return node;
    }
  }

  // Fallback : default node
  return CHAT_NODES.find((n) => n.id === 'default')!;
}
