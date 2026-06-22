export type SignalCategory =
  | 'financial'
  | 'government'
  | 'legislative'
  | 'scientific'
  | 'international'
  | 'legal';

export type SignalStrength = 'critical' | 'high' | 'medium' | 'low';

export interface Signal {
  id: string;
  date: string;
  institution: string;
  country: string;
  title: string;
  description: string;
  category: SignalCategory;
  strength: SignalStrength;
  sourceUrl?: string;
  sourceLabel?: string;
  isNew?: boolean;
}

export const SIGNALS: Signal[] = [
  // ─── ACTIVATION ────────────────────────────────────────────────────────────

  {
    id: 'loeb-science-council-2026',
    date: '2026-06-12',
    institution: 'White House / AARO / ODNI / FBI',
    country: 'USA',
    title: 'Avi Loeb appointed to lead White House-mandated UAP Science Advisory Council',
    description: 'Harvard astrophysicist Avi Loeb announces he has been asked by the White House, AARO, ODNI, FBI, and other intelligence agencies to assemble and chair a UAP Science Advisory Council. Five founding researchers covering AI, instrumentation, numerical analysis, astrophysics, and human psychology. First time multiple government agencies have simultaneously mandated a standing scientific council on UAP. Loeb: "Identifying the unidentified deserves a high priority within the U.S. government and the scientific community."',
    category: 'scientific',
    strength: 'critical',
    sourceLabel: 'Disclosure Foundation, June 12 2026',
    sourceUrl: 'https://disclosure.org/news/uap-science-advisory-council',
    isNew: true,
  },
  {
    id: 'pursue-tranche3-2026',
    date: '2026-06-12',
    institution: 'Department of War / AARO / NASA / FBI / CIA',
    country: 'USA',
    title: 'PURSUE Tranche 3 — 53 files, 6 videos, NASA audio recordings released',
    description: 'Third PURSUE release at war.gov/ufo: 53 documents, 10 images, 6 videos, and 3 NASA mission audio recordings from CIA, FBI, NASA, and DoD. Key document: AARO director Kosloski report on October 2023 incident over a sensitive national security site — federal agents observed an orange "mother" orb launching smaller red orbs. Approximately 40% of phenomena in that case remain unexplained. Site has received over 1.7 billion visits since launch May 8, 2026. Rolling releases confirmed to continue.',
    category: 'government',
    strength: 'critical',
    sourceLabel: 'war.gov/ufo, June 12 2026',
    sourceUrl: 'https://www.war.gov/ufo',
    isNew: true,
  },
  {
    id: 'age-of-disclosure-2025',
    date: '2025-11-21',
    institution: 'Farah Films / Amazon Prime Video',
    country: 'USA',
    title: '"The Age of Disclosure" — 34 senior officials on record, including the Secretary of State',
    description: 'Dan Farah\'s documentary features 34 senior U.S. government, military, and intelligence officials — including Secretary of State Marco Rubio, former DNI James Clapper, and former UAP Task Force Director Jay Stratton. Released on Prime Video after debuting at SXSW. Key on-record statements: Rubio: "We\'ve had repeated instances of something operating in the airspace over restricted nuclear facilities — and it\'s not ours." and "Even presidents have been operating on a need-to-know basis, but that begins to ramp out of control." Stratton (former UAP Task Force Director): "I have seen, with my own eyes, non-human craft and non-human beings." Rep. André Carson (House Intelligence Committee): "These are otherworldly things that are performing maneuvers that haven\'t been seen." The sitting U.S. Secretary of State on record about UAPs penetrating nuclear airspace is without precedent in the history of institutional disclosure.',
    category: 'government',
    strength: 'critical',
    sourceLabel: 'Amazon Prime Video',
    sourceUrl: 'https://www.amazon.com/Age-Disclosure/dp/B0DMJL2ZDM',
  },
  {
    id: 'pursue-2026',
    date: '2026-05-08',
    institution: 'Department of War (formerly DoD)',
    country: 'USA',
    title: 'Pentagon launches PURSUE — 222 UAP files released across two tranches',
    description: 'Trump presidential directive (Truth Social, Feb 19 2026) triggers mass declassification. PURSUE (war.gov/ufo) launches with 222 files across two releases from FBI, DoD, NASA, State Dept. Rolling release ongoing. Secretary Hegseth confirms AARO caseload exceeds 2,000 reports dating to 1945.',
    category: 'government',
    strength: 'critical',
    sourceLabel: 'DoD / war.gov/ufo',
    sourceUrl: 'https://www.war.gov/ufo',
  },
  {
    id: 'trump-eo-2026',
    date: '2026-02-20',
    institution: 'White House / President Trump',
    country: 'USA',
    title: 'Presidential executive order: identify and release UAP files',
    description: 'Trump directs DoD and all federal agencies to "begin the process of identifying and releasing Government files related to alien and extraterrestrial life, UAP, and UFOs." First presidential directive of its kind in history.',
    category: 'government',
    strength: 'critical',
    sourceLabel: 'Truth Social / DefenseScoop',
  },
  {
    id: 'ufod-etf-2026',
    date: '2026-02-05',
    institution: 'Tuttle Capital Management',
    country: 'USA',
    title: 'UFOD ETF launches on CBOE — first UAP disclosure fund',
    description: 'Tuttle Capital launches the UFO Disclosure ETF (CBOE: UFOD), investing in aerospace, defense, advanced materials and energy companies positioned to benefit from NHI technology disclosure. Launched following Bank of England analyst warning. $2.9M AUM at launch.',
    category: 'financial',
    strength: 'critical',
    sourceLabel: 'CBOE / Nasdaq',
    sourceUrl: 'https://finance.yahoo.com/quote/UFOD/',
  },
  {
    id: 'boe-mccaw-2026',
    date: '2026-01-18',
    institution: 'Bank of England (former analyst)',
    country: 'UK',
    title: 'Bank of England analyst urges central bank preparedness',
    description: 'Helen McCaw, former senior Bank of England analyst, publicly warns that UAP disclosure could cause "ontological shock" with significant market instability. Urges central banks to begin preparedness planning. First such warning from a major financial institution.',
    category: 'financial',
    strength: 'critical',
  },
  {
    id: 'japan-cabinet-2026',
    date: '2026-03-24',
    institution: 'Japanese Diet UAP Caucus',
    country: 'Japan',
    title: 'Japan proposes Cabinet Office UAP body — AARO equivalent',
    description: 'Following Trump\'s executive order, Japan\'s bipartisan UAP caucus (80+ Diet members) formally proposes a dedicated UAP framework under the Deputy Chief Cabinet Secretary for Crisis Management — moving UAP from MoD to the Cabinet Office.',
    category: 'international',
    strength: 'critical',
  },

  // ─── ACTIVATION ─────────────────────────────────────────────────────────────────

  {
    id: 'burlison-uapda-2026',
    date: '2026-06-17',
    institution: 'U.S. House of Representatives / Rep. Eric Burlison',
    country: 'USA',
    title: 'Full UAPDA text officially deposited to House Rules Committee — Amendment BURLIS_087 to NDAA FY2027',
    description: 'Rep. Eric Burlison (R-MO) deposits a complete 62-page UAP Disclosure Act amendment to the House Rules Committee for inclusion in NDAA FY2027. Establishes: UAP Records Collection at NARA (public access within 30 days); independent 9-member Review Board with Senate confirmation and full SAP access (terminates Sep 30 2030, $20M authorized for FY2027); eminent domain authority over recovered non-human technologies and biologics held by private entities; 25-year maximum classification ceiling; absolute prohibition on destruction or reclassification of UAP records. Formally repeals and supersedes the weaker NDAA FY2024 version. Codifies legal definitions of NHI, Technologies of Unknown Origin, and UAP in federal law.',
    category: 'legislative',
    strength: 'critical',
    sourceLabel: 'House Rules Committee — Amendment BURLIS_087, June 17 2026',
    sourceUrl: 'https://amendments-rules.house.gov/amendments/BURLIS_087_xml260618163721471.pdf',
    isNew: true,
  },
  {
    id: 'deloitte-2026',
    date: '2026-01-01',
    institution: 'Deloitte AG',
    country: 'International',
    title: 'Deloitte classifies NHI disclosure as credible Black Swan',
    description: 'Deloitte AG 2026 Risk Intelligence Report (GPMESII analysis) includes "Non-Human Intelligence Disclosure" as a Social domain scenario. Probability: 2/5 within 5 years. Impact: market and societal disruption, international relations, science domain. Tags: Ontological Shock, Institutional Trust, Narrative Polarisation.',
    category: 'financial',
    strength: 'high',
    sourceLabel: 'Deloitte AG 2026',
  },
  {
    id: 'hegseth-aaro-2026',
    date: '2026-02-25',
    institution: 'Secretary of Defense Pete Hegseth',
    country: 'USA',
    title: 'DoD confirms AARO caseload: 2,000+ reports back to 1945',
    description: 'Defense Secretary Hegseth publicly confirms AARO is tracking over 2,000 UAP reports dating back to 1945. States Pentagon is "eager" to comply with Trump executive order and that "more is coming."',
    category: 'government',
    strength: 'high',
    sourceLabel: 'DefenseScoop',
  },
  {
    id: 'japan-analyze-2026',
    date: '2026-05-11',
    institution: 'Japanese Government',
    country: 'Japan',
    title: 'Japan analyzes Pentagon UAP files near Japan "with great interest"',
    description: 'Japan\'s government spokesman confirms Tokyo is analyzing the Pentagon PURSUE files "with great interest," including two videos of UAP spotted near Japan in 2024. Signals active international coordination.',
    category: 'international',
    strength: 'high',
    sourceLabel: 'Japan Times',
  },
  {
    id: 'uapda-blocked-2025',
    date: '2025-09-09',
    institution: 'U.S. House Rules Committee',
    country: 'USA',
    title: 'UAPDA blocked from NDAA FY2026 — third consecutive year',
    description: 'UAP Disclosure Act amendment blocked from the FY2026 NDAA by the Rules Committee. Third consecutive year of active DoD/AARO opposition to legislative disclosure oversight. Nell: "UAPDA is not optional — catastrophic disclosure risk increases each year it fails." Burlison confirms June 2026 push via Rules process.',
    category: 'legislative',
    strength: 'high',
  },

  // ─── MEDIUM ───────────────────────────────────────────────────────────────

  {
    id: 'grusch-2023',
    date: '2023-07-26',
    institution: 'U.S. House Oversight Committee',
    country: 'USA',
    title: 'Grusch sworn congressional testimony: crash retrieval programs exist',
    description: 'David Grusch (ex-NGA, ex-AARO) testifies under oath: the US operates secret programs for recovery and analysis of non-human craft and biological materials. First such statement under oath in congressional history. Protected by whistleblower statutes.',
    category: 'government',
    strength: 'medium',
    sourceLabel: 'C-SPAN / Congress.gov',
  },
  {
    id: 'nell-framework-2023',
    date: '2023-11-01',
    institution: 'Sol Foundation / Col. Karl Nell (US Army ret.)',
    country: 'USA',
    title: 'Nell presents controlled vs catastrophic disclosure framework',
    description: 'Retired Army Colonel and UAP Task Force liaison Karl Nell presents a "five-phase disclosure timeline" (2024–2034+) at Stanford\'s Sol Foundation. Warns that uncontrolled catastrophic disclosure — by an adversary or NHI itself — could cause "societal collapse." Identifies 2026 as the critical pivot year.',
    category: 'scientific',
    strength: 'medium',
  },
  {
    id: 'nasa-report-2023',
    date: '2023-09-14',
    institution: 'NASA',
    country: 'USA',
    title: 'NASA UAP report: legitimate scientific and security problem',
    description: 'NASA publishes independent study report. Conclusions: UAP are a legitimate scientific problem, stigma must be removed, better data collection needed. NASA names permanent UAP coordinator Mark McInerney. First official NASA engagement with the topic.',
    category: 'scientific',
    strength: 'medium',
    sourceLabel: 'NASA',
    sourceUrl: 'https://science.nasa.gov/uap',
  },
  {
    id: 'japan-caucus-2024',
    date: '2024-06-01',
    institution: 'Japanese Diet',
    country: 'Japan',
    title: 'Japan: 80+ lawmakers form bipartisan UAP caucus',
    description: 'Non-partisan group chaired by former Defense Minister Yasukazu Hamada forms Japan\'s first cross-party UAP caucus. Has hosted briefings with US AARO officials and Navy pilots. Central ask: an AARO-equivalent investigation office.',
    category: 'international',
    strength: 'medium',
  },
  {
    id: 'eu-parliament-2024',
    date: '2024-01-01',
    institution: 'European Parliament',
    country: 'EU',
    title: 'European Parliament pushes for UAP monitoring in EU Space Law',
    description: 'European Parliament moves to include UAP monitoring in forthcoming EU Space Law. European Commission (2025) responds: UAP remains a Member State competence, citing France\'s GEIPAN as the model. ESA names internal UAP contact point.',
    category: 'international',
    strength: 'medium',
  },

  // ─── LOW / HISTORICAL ─────────────────────────────────────────────────────

  {
    id: 'pentagon-videos-2020',
    date: '2020-04-27',
    institution: 'U.S. Department of Defense',
    country: 'USA',
    title: 'Pentagon officially confirms authenticity of Navy UAP videos',
    description: 'DoD releases FLIR, Gimbal, GoFast videos "to clear up any misconception on whether the footage was real." Objects remain officially unidentified. First time DoD officially validates military UAP encounters. Navy separately confirmed authenticity in September 2019.',
    category: 'government',
    strength: 'low',
    sourceLabel: 'DoD / NAVAIR FOIA',
  },
  {
    id: 'aaro-creation-2022',
    date: '2022-07-15',
    institution: 'U.S. Department of Defense',
    country: 'USA',
    title: 'AARO created — first permanent Pentagon UAP office',
    description: 'All-domain Anomaly Resolution Office established to synchronize UAP collection across all military branches and intelligence agencies. Mandated by Congress in NDAA 2022. Publishes reports to Congress semi-annually.',
    category: 'government',
    strength: 'low',
    sourceLabel: 'AARO',
    sourceUrl: 'https://www.aaro.mil',
  },
  {
    id: 'geipan-1977',
    date: '1977-01-01',
    institution: 'CNES / GEIPAN',
    country: 'France',
    title: 'France creates GEIPAN — world\'s first official UAP program (1977)',
    description: 'GEPAN created within CNES at initiative of Defense Ministry. Now GEIPAN (since 2005), still active, 3,200+ archived cases, 3% unexplained. Oversight includes Gendarmerie, Air & Space Force, CNRS, Météo-France. The longest-running official government UAP investigation program in the world.',
    category: 'international',
    strength: 'low',
    sourceLabel: 'CNES GEIPAN',
    sourceUrl: 'https://www.cnes-geipan.fr',
  },
  {
    id: 'nyt-2017',
    date: '2017-12-16',
    institution: 'New York Times / Pentagon',
    country: 'USA',
    title: 'NYT reveals AATIP — $22M secret Pentagon UAP program',
    description: 'NYT publishes investigation revealing AATIP (Advanced Aerospace Threat Identification Program) — a $22M DIA program funded by Senator Harry Reid, running 2007–2012. First Navy UAP video published. Marks beginning of mainstream institutional engagement with the topic.',
    category: 'government',
    strength: 'low',
  },
];

// ─── Signal level calculation ──────────────────────────────
export function getOverallSignalLevel(): { level: number; label: string; description: string } {
  const critical = SIGNALS.filter(s => s.strength === 'critical').length;

  if (critical >= 8) return {
    level: 5,
    label: 'MAXIMUM',
    description: 'Active disclosure scenario — executive branch and intelligence officials confirmed on record'
  };
  if (critical >= 6) return {
    level: 5,
    label: 'MAXIMUM',
    description: 'Imminent confirmation — Science Council mandated + PURSUE Tranche 3 + firsthand testimony'
  };
  if (critical >= 4) return {
    level: 4,
    label: 'PRE-DISCLOSURE',
    description: 'DVI 6.5 — Science Council mandated + active declassification + financial sector pricing'
  };
  if (critical >= 3) return {
    level: 4,
    label: 'ACTIVATION',
    description: 'Multiple critical institutional signals — active disclosure process underway'
  };
  if (critical >= 1) return {
    level: 3,
    label: 'ACTIVE',
    description: 'Significant institutional signals — soft disclosure in progress'
  };
  return {
    level: 1,
    label: 'BASELINE',
    description: 'Standard monitoring — no immediate signals'
  };
}

export const SIGNAL_CATEGORIES = [
  { id: 'all',           label: 'All Signals'      },
  { id: 'financial',     label: 'Financial'        },
  { id: 'government',    label: 'Government'       },
  { id: 'legislative',   label: 'Legislative'      },
  { id: 'scientific',    label: 'Scientific'       },
  { id: 'international', label: 'International'    },
  { id: 'legal',         label: 'Legal'            },
] as const;

export const CATEGORY_CONFIG: Record<SignalCategory, { color: string; bg: string; border: string }> = {
  financial:     { color: '#C9A84C', bg: 'rgba(201,168,76,0.1)',   border: 'rgba(201,168,76,0.3)' },
  government:    { color: '#38BDF8', bg: 'rgba(56,189,248,0.1)',   border: 'rgba(56,189,248,0.3)' },
  legislative:   { color: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.3)' },
  scientific:    { color: '#4ADE80', bg: 'rgba(74,222,128,0.1)',   border: 'rgba(74,222,128,0.3)' },
  international: { color: '#FB923C', bg: 'rgba(251,146,60,0.1)',   border: 'rgba(251,146,60,0.3)' },
  legal:         { color: '#F87171', bg: 'rgba(248,113,113,0.1)',  border: 'rgba(248,113,113,0.3)' },
};

export const STRENGTH_CONFIG: Record<SignalStrength, { label: string; color: string; dot: string }> = {
  critical: { label: 'CRITICAL', color: '#EF4444', dot: '#EF4444' },
  high:     { label: 'HIGH',     color: '#F97316', dot: '#F97316' },
  medium:   { label: 'MEDIUM',   color: '#EAB308', dot: '#EAB308' },
  low:      { label: 'LOW',      color: '#6B7280', dot: '#6B7280' },
};
