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
    terme: 'Unidentified Aerial Phenomenon',
    acronyme: 'UAP',
    definition:
      'The official term progressively replacing "UFO" in U.S. government documents since 2020. The Pentagon and NASA use this term to designate any object or phenomenon observed in airspace that cannot be immediately identified. In its expanded form, "Unidentified Anomalous Phenomenon" also covers underwater and space-based incidents. The terminological shift reflects the institutionalization of the subject.',
    categorie: 'phenomenologie',
    sources: [{ label: 'DoD Terminology', url: 'https://www.defense.gov' }],
    tags: ['Pentagon', 'official', 'terminology'],
  },
  {
    id: 'aaro',
    terme: 'All-domain Anomaly Resolution Office',
    acronyme: 'AARO',
    definition:
      'Office created in July 2022 by the U.S. Department of Defense to centralize collection, analysis, and resolution of UAP reports across all domains: air, maritime, space, and underwater. AARO publishes semi-annual reports to Congress. As of 2026, its caseload exceeds 2,000 reports dating back to 1945, confirmed by Defense Secretary Hegseth.',
    categorie: 'institutionnel',
    sources: [{ label: 'AARO official', url: 'https://www.aaro.mil' }],
    tags: ['Pentagon', 'institution', 'surveillance'],
  },
  {
    id: 'nhi',
    terme: 'Non-Human Intelligence',
    acronyme: 'NHI',
    definition:
      'Term used in the 2023 U.S. congressional hearings by sworn witnesses to designate entities of non-terrestrial origin. David Grusch\'s testimony before the House Oversight Committee popularized this term in the institutional public debate. Former UAP Task Force Director Jay Stratton stated in November 2025: "I have seen, with my own eyes, non-human craft and non-human beings."',
    categorie: 'phenomenologie',
    tags: ['Grusch', 'Stratton', 'Congress', 'testimony'],
  },
  {
    id: 'disclosure',
    terme: 'Disclosure',
    definition:
      'The official, public acknowledgment by a government of the confirmed existence of non-human phenomena or entities. Distinguished from "soft disclosure" (organized leaks, progressive declassification, implied statements) and "hard disclosure" (direct statement by a head of state or multi-government announcement). Based on current signals — PURSUE, presidential executive order, Secretary of State Rubio on record — most analysts consider we are in an advanced soft disclosure phase.',
    categorie: 'juridique',
    tags: ['transparency', 'government', 'declassification'],
  },
  {
    id: 'ufo-act',
    terme: 'UAP Disclosure Act',
    definition:
      'U.S. legislation introduced by Senators Chuck Schumer and Mike Rounds in 2023, requiring the government to declassify all UAP documents within 25 years. The version incorporated into NDAA 2024 retained executive veto powers over declassification on national security grounds. The act was subsequently blocked from NDAA FY2025 and FY2026 by active DoD opposition — three consecutive years of legislative failure.',
    categorie: 'juridique',
    sources: [{ label: 'NDAA 2024', url: 'https://www.congress.gov' }],
    tags: ['Schumer', 'Congress', 'legislation', 'declassification'],
  },
  {
    id: 'crash-retrieval',
    terme: 'Crash Retrieval Program',
    definition:
      'Secret program alleged by multiple sworn witnesses before the U.S. Congress, consisting of the recovery, analysis, and reverse engineering of non-human craft. David Grusch testified under oath that such programs exist and are managed outside the standard congressional oversight system. The LBDG Finance Toolkit (Scenario B1/B2) provides the organizational risk framework for this scenario.',
    categorie: 'technologie',
    tags: ['Grusch', 'reverse engineering', 'classified'],
  },
  {
    id: 'gimbal',
    terme: 'Gimbal Video',
    definition:
      'One of three videos declassified by the Pentagon in April 2020 (alongside FLIR1 and GoFast), recorded in 2015 by a U.S. Navy F/A-18. It shows an oval-shaped object performing an inexplicable rotation, with no thermal signature from a conventional engine. Presented by AARO as an unresolved case. Authenticity confirmed by the DoD "to clear up any misconception on whether the footage was real."',
    categorie: 'phenomenologie',
    tags: ['Navy', 'video', 'declassified', 'Pentagon'],
  },
  {
    id: 'five-observables',
    terme: 'The Five Observables',
    definition:
      'Framework defined by Lue Elizondo, former director of the AATIP (Pentagon secret program), to characterize UAP: (1) anti-gravity lift, (2) hypersonic acceleration without acoustic signature, (3) low radar observability, (4) electromagnetic interference, (5) trans-medium travel (air/water/space). This framework has become a reference in official analyses and congressional testimony.',
    categorie: 'technologie',
    tags: ['Elizondo', 'AATIP', 'physics', 'characterization'],
  },
  {
    id: 'aatip',
    terme: 'Advanced Aerospace Threat Identification Program',
    acronyme: 'AATIP',
    definition:
      'Secret Pentagon program active from 2007 to 2012, funded with $22 million secured by Senator Harry Reid, managed by the DIA. Its existence was revealed by the New York Times in December 2017, marking a turning point in the institutional treatment of the UAP subject. Directed by Lue Elizondo, who resigned in protest at what he described as inadequate resources and institutional resistance.',
    categorie: 'institutionnel',
    sources: [{ label: 'NYT 2017', url: 'https://www.nytimes.com' }],
    tags: ['Pentagon', 'DIA', 'classified', 'Reid', 'Elizondo'],
  },
  {
    id: 'pursue',
    terme: 'PURSUE Program',
    definition:
      'Rolling declassification program launched by the Pentagon in May 2026 at war.gov/ufo, following President Trump\'s February 2026 executive order. Initial release: 162 files from FBI, DoD, NASA, and State Department. Defense Secretary Hegseth stated the goal was "maximum transparency." Japan and other governments confirmed they are actively analyzing the released files.',
    categorie: 'institutionnel',
    sources: [{ label: 'war.gov/ufo', url: 'https://www.war.gov/ufo' }],
    tags: ['Pentagon', 'declassification', 'Trump', 'PURSUE'],
  },
  {
    id: 'oumuamua',
    terme: "'Oumuamua",
    definition:
      "The first interstellar object detected passing through the solar system, observed in 2017. Its anomalous behavior — non-gravitational acceleration without visible outgassing — led Harvard professor Avi Loeb to propose an artificial origin hypothesis in his book 'Extraterrestrial' (2021). The hypothesis remains contested but reignited the scientific debate around engineered interstellar objects.",
    categorie: 'phenomenologie',
    sources: [{ label: 'Loeb, Harvard', url: 'https://www.cfa.harvard.edu' }],
    tags: ['Harvard', 'Loeb', 'interstellar', 'astronomy'],
  },
  {
    id: 'galileo-project',
    terme: 'The Galileo Project',
    definition:
      'Scientific initiative founded in 2021 by Harvard professor Avi Loeb, aimed at collecting empirical data on anomalous phenomena through instrumented observatories. All data is published open-access. Represents the first rigorous and transparent academic approach to UAP study. In 2024, the team published initial analyses of metallic spheres recovered from the Pacific Ocean with anomalous compositions.',
    categorie: 'institutionnel',
    sources: [{ label: 'Galileo Project', url: 'https://projects.iq.harvard.edu/galileo' }],
    tags: ['Harvard', 'open-science', 'Loeb'],
  },
];

export const CATEGORIES = [
  { id: 'all',            label: 'All terms'            },
  { id: 'institutionnel', label: 'Institutional'        },
  { id: 'phenomenologie', label: 'Phenomena'            },
  { id: 'technologie',    label: 'Technology'           },
  { id: 'juridique',      label: 'Legal & Policy'       },
  { id: 'personnel',      label: 'Key figures'          },
] as const;
