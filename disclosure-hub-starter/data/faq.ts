export interface FAQItem {
  id: string;
  question: string;
  reponse: string;
  categorie: 'general' | 'scientifique' | 'politique' | 'pratique';
}

export const FAQ: FAQItem[] = [
  {
    id: 'qu-est-ce-disclosure',
    question: "Qu'est-ce que la « Disclosure » exactement ?",
    reponse:
      "La Disclosure désigne une divulgation officielle et publique par un gouvernement de l'existence avérée de phénomènes ou d'entités d'origine non-humaine. On distingue la « soft disclosure » — une stratégie de divulgation progressive via des fuites orchestrées, des déclassifications partielles et des déclarations sous-entendues — de la « hard disclosure », c'est-à-dire une déclaration directe et sans équivoque d'un chef d'État ou d'une institution internationale. Actuellement, nous serions dans une phase avancée de soft disclosure.",
    categorie: 'general',
  },
  {
    id: 'pourquoi-maintenant',
    question: "Pourquoi parle-t-on de plus en plus de ce sujet maintenant ?",
    reponse:
      "Plusieurs facteurs convergent : (1) Des témoignages sous serment au Congrès américain en 2023 de la part d'anciens officiers du renseignement. (2) La déclassification progressive de vidéos et de rapports par le Pentagone depuis 2017. (3) L'implication officielle de la NASA avec un rapport publié en 2023. (4) Une pression législative bipartisane via l'UAP Disclosure Act. (5) Des avancées en astronomie — notamment avec le télescope James Webb — qui renforcent la probabilité statistique de vie intelligente. Le sujet est passé du tabou au débat institutionnel en moins d'une décennie.",
    categorie: 'politique',
  },
  {
    id: 'uap-vs-ovni',
    question: "Quelle est la différence entre UAP et OVNI ?",
    reponse:
      "OVNI (Objet Volant Non Identifié) est le terme populaire apparu dans les années 1950, souvent associé à la culture science-fiction. UAP (Unidentified Aerial Phenomenon ou, dans sa version élargie, Unidentified Anomalous Phenomenon) est le terme officiel adopté par les gouvernements depuis 2020. Ce changement terminologique est délibéré : il permet de traiter le sujet sans les connotations culturelles de l'OVNI et d'élargir le périmètre aux phénomènes sous-marins et spatiaux.",
    categorie: 'general',
  },
  {
    id: 'qui-est-grusch',
    question: "Qui est David Grusch et pourquoi est-il important ?",
    reponse:
      "David Grusch est un ancien officier du renseignement américain qui a travaillé pour l'AARO et le National Geospatial-Intelligence Agency (NGA). En 2023, il a témoigné sous serment devant le Congrès affirmant que les États-Unis disposent de programmes secrets de récupération et d'analyse de craft d'origine non-humaine, ainsi que de matériaux biologiques. C'est la première fois qu'une telle déclaration est faite sous serment dans un cadre institutionnel officiel. Il est protégé par les lois whistleblower. Ses allégations restent contestées par l'AARO dans son rapport de mars 2024.",
    categorie: 'politique',
  },
  {
    id: 'nasa-position',
    question: "Quelle est la position officielle de la NASA ?",
    reponse:
      "Depuis 2023, la NASA considère les UAP comme un problème scientifique légitime. Son rapport de septembre 2023 recommande d'utiliser les outils de la science pour l'étude des UAP, d'améliorer la collecte de données, et de déstigmatiser le sujet dans la communauté scientifique. La NASA a nommé un coordinateur UAP permanent, Mark McInerney. L'agence ne confirme pas l'origine extraterrestre des UAP mais refuse d'écarter cette possibilité.",
    categorie: 'scientifique',
  },
  {
    id: 'james-webb',
    question: "Le télescope James Webb peut-il détecter des signes de vie ?",
    reponse:
      "James Webb est conçu pour analyser la composition atmosphérique des exoplanètes via la spectroscopie de transit. Il peut théoriquement détecter des biosignatures comme l'oxygène, le méthane ou la vapeur d'eau dans des proportions anormales. En 2023, des données sur l'exoplanète K2-18b ont montré la présence possible de diméthylsulfure (DMS), produit sur Terre exclusivement par des organismes vivants. Ces résultats demandent confirmation mais illustrent la capacité croissante de détection.",
    categorie: 'scientifique',
  },
  {
    id: 'paradoxe-fermi',
    question: "Qu'est-ce que le paradoxe de Fermi et comment le disclosure l'affecte-t-il ?",
    reponse:
      "Le paradoxe de Fermi (1950) souligne la contradiction entre la haute probabilité statistique de l'existence de civilisations extraterrestres et l'absence de tout contact détectable. Si les témoignages de disclosure se révèlent fondés, ce paradoxe serait en partie résolu : des intelligences non-humaines existent et ont été détectées, mais les gouvernements ont choisi de ne pas divulguer cette information. Cela déplacerait le paradoxe vers la question de la dissimulation plutôt que de l'absence.",
    categorie: 'scientifique',
  },
  {
    id: 'impact-economique',
    question: "Quel serait l'impact économique d'une annonce officielle ?",
    reponse:
      "Les analyses prospectives suggèrent plusieurs effets : une disruption à court terme des marchés financiers (volatilité accrue, secteurs aéronautique et défense impactés), une course technologique si des matériaux ou technologies sont divulgués, une transformation des secteurs de l'énergie si de nouvelles sources propulsives sont révélées, et un essor massif des industries culturelles, éducatives et scientifiques. Des économistes comme Tyler Cowen estiment que l'impact dépendra entièrement de la nature et des modalités de l'annonce.",
    categorie: 'pratique',
  },
  {
    id: 'comment-se-preparer',
    question: "Comment se préparer personnellement à cette annonce ?",
    reponse:
      "Les experts en résilience et en communication de crise recommandent : (1) S'informer via des sources institutionnelles (AARO, NASA) pour distinguer les faits vérifiés des spéculations. (2) Maintenir un cadre critique face aux informations virales. (3) Anticiper des impacts psychologiques potentiels (remise en question des croyances, sentiment d'insécurité) et en parler ouvertement. (4) Surveiller les décisions de politique publique qui pourraient précéder une annonce. Nos boîtes à outils sectorielles proposent des cadres d'analyse adaptés.",
    categorie: 'pratique',
  },
  {
    id: 'france-position',
    question: "Quelle est la position de la France sur ce sujet ?",
    reponse:
      "La France dispose depuis 1977 du GEIPAN (Groupe d'Études et d'Informations sur les Phénomènes Aérospatiaux Non-identifiés), rattaché au CNES. C'est l'une des rares agences gouvernementales au monde à étudier et publier ouvertement des rapports sur les OVNI/UAP. En 2007, une partie des archives du GEIPAN a été rendue publique. Le SGDSN et la DRM n'ont pas exprimé de position publique sur les récentes révélations américaines, mais des contacts institutionnels entre alliés sont vraisemblables.",
    categorie: 'politique',
  },
];

export const FAQ_CATEGORIES = [
  { id: 'all',          label: 'Toutes les questions' },
  { id: 'general',      label: 'Général' },
  { id: 'scientifique', label: 'Science' },
  { id: 'politique',    label: 'Politique & institutions' },
  { id: 'pratique',     label: 'Pratique' },
] as const;
