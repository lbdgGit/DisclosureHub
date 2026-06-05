export interface FAQItem {
  id: string;
  question: string;
  reponse: string;
  categorie: 'general' | 'scientifique' | 'politique' | 'pratique';
}

export const FAQ: FAQItem[] = [
  {
    id: 'what-is-disclosure',
    question: 'What exactly is "Disclosure"?',
    reponse:
      'Disclosure refers to the official, public acknowledgment by a government of the confirmed existence of non-human phenomena or entities. A distinction is made between "soft disclosure" — a strategy of progressive release through orchestrated leaks, partial declassifications, and implied statements — and "hard disclosure," meaning a direct and unambiguous declaration by a head of state or international institution. Based on current signals, we are in an advanced phase of soft disclosure.',
    categorie: 'general',
  },
  {
    id: 'why-now',
    question: 'Why is this subject receiving so much attention now?',
    reponse:
      'Several factors are converging: (1) Sworn congressional testimony in 2023 from former U.S. intelligence officers. (2) The progressive declassification of videos and reports by the Pentagon since 2017. (3) Official NASA engagement with a report published in September 2023. (4) Bipartisan legislative pressure via the UAP Disclosure Act. (5) A presidential executive order in February 2026 directing all federal agencies to release UAP files. (6) Pentagon PURSUE program launching rolling declassification at war.gov/ufo in May 2026. The subject has moved from taboo to institutional debate in under a decade.',
    categorie: 'politique',
  },
  {
    id: 'uap-vs-ufo',
    question: 'What is the difference between UAP and UFO?',
    reponse:
      'UFO (Unidentified Flying Object) is the popular term that emerged in the 1950s, often associated with science fiction culture. UAP (Unidentified Aerial Phenomenon, or in its expanded form, Unidentified Anomalous Phenomenon) is the official term adopted by governments since 2020. The terminological shift is deliberate: it allows the subject to be treated without the cultural connotations of "UFO" and broadens the scope to include underwater and space-based phenomena.',
    categorie: 'general',
  },
  {
    id: 'who-is-grusch',
    question: 'Who is David Grusch and why does he matter?',
    reponse:
      'David Grusch is a former U.S. intelligence officer who worked for AARO and the National Geospatial-Intelligence Agency (NGA). In July 2023, he testified under oath before Congress claiming that the United States operates secret programs for recovery and analysis of non-human craft and biological materials. This was the first such statement made under oath in an official institutional setting. He is protected under whistleblower statutes. In November 2025, his claims were corroborated by Jay Stratton, former UAP Task Force Director, who stated on record: "I have seen, with my own eyes, non-human craft and non-human beings."',
    categorie: 'politique',
  },
  {
    id: 'nasa-position',
    question: 'What is NASA\'s official position?',
    reponse:
      'Since 2023, NASA considers UAP a legitimate scientific problem. Its September 2023 report recommends using scientific tools to study UAP, improving data collection, and destigmatizing the subject within the scientific community. NASA appointed a permanent UAP coordinator, Mark McInerney. The agency does not confirm extraterrestrial origin for UAP but refuses to rule it out.',
    categorie: 'scientifique',
  },
  {
    id: 'james-webb',
    question: 'Can the James Webb Space Telescope detect signs of life?',
    reponse:
      'James Webb is designed to analyze the atmospheric composition of exoplanets via transit spectroscopy. It can theoretically detect biosignatures such as oxygen, methane, or water vapor in anomalous proportions. In 2023, data on exoplanet K2-18b showed the possible presence of dimethyl sulfide (DMS), a compound produced on Earth exclusively by living organisms. These results require confirmation but illustrate our rapidly growing detection capabilities.',
    categorie: 'scientifique',
  },
  {
    id: 'fermi-paradox',
    question: "What is the Fermi Paradox and how does disclosure affect it?",
    reponse:
      "The Fermi Paradox (1950) highlights the contradiction between the high statistical probability of extraterrestrial civilizations existing and the absence of any detectable contact. If disclosure testimony proves founded, this paradox would be partly resolved: non-human intelligences exist and have been detected, but governments chose not to disclose this information. The paradox would shift from the question of absence to the question of concealment.",
    categorie: 'scientifique',
  },
  {
    id: 'economic-impact',
    question: 'What would be the economic impact of an official announcement?',
    reponse:
      'Prospective analysis identifies several effects: short-term financial market disruption (increased volatility, aerospace and defense sectors impacted), a technology race if materials or propulsion systems are disclosed, transformation of the energy sector if new propulsion sources are revealed, and a massive expansion of cultural, educational, and scientific industries. Deloitte AG (2026) classified this as a credible Black Swan with 2/5 probability within 5 years. The LBDG Finance Toolkit provides a detailed sector risk map and 72-hour crisis protocol.',
    categorie: 'pratique',
  },
  {
    id: 'how-to-prepare',
    question: 'How can an organization prepare?',
    reponse:
      'LBDG recommends four steps: (1) Complete the Executive Starter Pack readiness check — 10 minutes, free. (2) Identify your weakest dimension (HR, Finance, Communications, or Board Governance) and download the corresponding operational toolkit. (3) Run a tabletop drill with your leadership team using the Leadership Workshop Guide. (4) Activate leading indicator monitoring via the LBDG Signal Monitor at readyfordisclosure.com/signals — DVI is currently at 7.0, pre-disclosure threshold.',
    categorie: 'pratique',
  },
  {
    id: 'france-position',
    question: 'What is France\'s position on this subject?',
    reponse:
      "France has operated GEIPAN (Groupe d'Études et d'Informations sur les Phénomènes Aérospatiaux Non-identifiés) since 1977, under the CNES national space agency. It is one of the few government agencies in the world that openly studies and publishes reports on UAP. Over 3,200 cases are archived, with 3% remaining unexplained after full investigation. In 2025, the European Commission cited GEIPAN as the model for EU member state UAP programs. France is arguably better institutionally positioned than most on this topic.",
    categorie: 'politique',
  },
];

export const FAQ_CATEGORIES = [
  { id: 'all',          label: 'All questions'          },
  { id: 'general',      label: 'General'                },
  { id: 'scientifique', label: 'Science'                },
  { id: 'politique',    label: 'Policy & institutions'  },
  { id: 'pratique',     label: 'Practical'              },
] as const;
