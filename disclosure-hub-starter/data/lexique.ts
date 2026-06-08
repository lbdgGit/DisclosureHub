export interface LexiqueEntry {
  id: string;
  terme: string;
  acronyme?: string;
  definition: string;
  categorie:
    | 'institutionnel'
    | 'phenomenologie'
    | 'technologie'
    | 'juridique'
    | 'personnel'
    | 'scientifique'
    | 'historique'
    | 'conceptuel'
    | 'media'
    | 'conteste';
  tier: 1 | 2 | 3;
  isDisputed?: boolean;
  disputedNote?: string;
  sources?: { label: string; url: string }[];
  tags?: string[];
}

export const LEXIQUE: LexiqueEntry[] = [

  // ─── CORE TERMINOLOGY ────────────────────────────────────

  {
    id: 'uap',
    terme: 'Unidentified Anomalous Phenomenon',
    acronyme: 'UAP',
    definition: 'Official U.S. government term replacing "UFO" since 2020, progressively adopted across all defense and intelligence agencies. The AARO definition covers anomalous detections in any domain — airborne, seaborne, spaceborne, or transmedium — that are not attributable to known actors and demonstrate behaviors not readily understood by sensors or observers. The expanded "Anomalous" (rather than "Aerial") was adopted in the FY2023 NDAA to encompass underwater and space-based phenomena. Use of this term signals institutional legitimacy.',
    categorie: 'phenomenologie',
    tier: 1,
    sources: [{ label: 'AARO official definition', url: 'https://www.aaro.mil' }],
    tags: ['official', 'terminology', 'DoD', 'Congress'],
  },

  {
    id: 'nhi',
    terme: 'Non-Human Intelligence',
    acronyme: 'NHI',
    definition: 'Term introduced into institutional vocabulary during the July 2023 U.S. congressional hearings by David Grusch and subsequently used in sworn testimony. Refers to intelligent entities or agency of non-terrestrial origin, deliberately avoiding culturally loaded terms such as "extraterrestrial" or "alien." Former UAP Task Force Director Jay Stratton stated on record in The Age of Disclosure (Amazon Prime, 2025): "I have seen, with my own eyes, non-human craft and non-human beings." The term is now used in classified program discussions per multiple protected disclosures.',
    categorie: 'conceptuel',
    tier: 1,
    tags: ['Grusch', 'Stratton', 'Congress', 'sworn testimony'],
  },

  {
    id: 'transmedium',
    terme: 'Transmedium Object',
    definition: 'A UAP observed transitioning between multiple physical domains — atmosphere, ocean, and space — without loss of speed or apparent structural change. First formally included in the NDAA FY2022 UAP definition. The USS Omaha 2019 sphere video shows an unidentified object entering the Pacific Ocean. Transmedium behavior is one of the most physics-defying observed characteristics because it requires simultaneously managing atmospheric drag, hydrodynamic pressure, and vacuum conditions. No known human technology achieves this.',
    categorie: 'phenomenologie',
    tier: 1,
    tags: ['Five Observables', 'physics', 'USS Omaha', 'NDAA'],
  },

  {
    id: 'five-observables',
    terme: 'The Five Observables',
    definition: 'Analytical framework defined by Luis Elizondo, former AATIP director, to characterize UAP that exceed known physics: (1) anti-gravity lift — flight without conventional lift mechanisms, (2) hypersonic velocity — extreme speed without acoustic or thermal signature, (3) low observability — multi-spectrum stealth including radar cross-section near zero, (4) trans-medium travel — seamless air/water/space transition, (5) positive lift — apparent manipulation of inertia. Some researchers add a sixth: biological effects on human witnesses. No known engineered system combines all five simultaneously. This framework is referenced in congressional testimony and official AARO analyses.',
    categorie: 'technologie',
    tier: 1,
    tags: ['Elizondo', 'AATIP', 'physics', 'characterization'],
  },

  {
    id: 'ontological-shock',
    terme: 'Ontological Shock',
    definition: 'Psychological and societal response to a paradigm-shattering event that fundamentally invalidates prior assumptions about reality, humanity\'s place in the universe, or the nature of intelligence. In the UAP/NHI context, refers specifically to the potential societal impact of confirmed non-human intelligence existence. The term was used by Bank of England analyst Helen McCaw in her January 2026 warning to central banks, and appears in the Deloitte AG 2026 GPMESII Risk Intelligence Report under "Narrative Polarisation" and "Institutional Trust" risk tags. Key concept for organizational preparedness planning.',
    categorie: 'conceptuel',
    tier: 1,
    tags: ['Deloitte', 'Bank of England', 'risk management', 'organizational impact'],
  },

  // ─── AGENCIES & PROGRAMS ────────────────────────────────

  {
    id: 'aaro',
    terme: 'All-domain Anomaly Resolution Office',
    acronyme: 'AARO',
    definition: 'The primary U.S. government UAP investigative office, established July 2022 within the Department of Defense, directed by the Deputy Secretary of Defense. Created by Congress in NDAA 2022 to synchronize UAP collection, analysis, and reporting across all military branches and intelligence agencies. AARO\'s caseload exceeded 2,000 reports dating to 1945 as of 2026, confirmed by Defense Secretary Hegseth. Publishes semi-annual reports to Congress. Operates a classified reporting portal for current and former government employees with direct knowledge of UAP programs.',
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'AARO official', url: 'https://www.aaro.mil' }],
    tags: ['Pentagon', 'DoD', 'Congress', 'surveillance'],
  },

  {
    id: 'aatip',
    terme: 'Advanced Aerospace Threat Identification Program',
    acronyme: 'AATIP',
    definition: 'Secret Pentagon program 2007–2012, funded with $22 million secured by Senate Majority Leader Harry Reid, managed by the Defense Intelligence Agency. Existence revealed by the New York Times in December 2017 — the trigger event of the modern disclosure era. Directed by Luis Elizondo, who resigned in protest at institutional resistance. AATIP produced multiple internal reports on UAP propulsion, materials, and sensor data. Its contractor vehicle was AAWSAP, operated by Robert Bigelow\'s BAASS, which funded research at Skinwalker Ranch. AATIP files remain partially classified.',
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'NYT 2017', url: 'https://www.nytimes.com/2017/12/16/us/politics/pentagon-program-ufo-harry-reid.html' }],
    tags: ['Pentagon', 'DIA', 'classified', 'Reid', 'Elizondo', '2017'],
  },

  {
    id: 'uaptf',
    terme: 'UAP Task Force',
    acronyme: 'UAPTF',
    definition: 'Interim DoD body established August 2020 within the Office of Naval Intelligence to standardize collection and reporting of UAP sightings, following the Senate Intelligence Committee\'s directive. Directed by Jay Stratton. Produced the June 2021 ODNI preliminary report — the first official U.S. government UAP assessment — documenting 144 cases with 143 remaining unexplained. Replaced by AARO in July 2022. The UAPTF was the institutional bridge between the classified Navy encounters and the current open AARO program.',
    categorie: 'institutionnel',
    tier: 1,
    tags: ['ONI', 'Navy', 'Stratton', 'ODNI', '2020'],
  },

  {
    id: 'aawsap',
    terme: 'Advanced Aerospace Weapon System Applications Program',
    acronyme: 'AAWSAP',
    definition: 'The DIA contract vehicle (2008–2012) that funded AATIP research. Awarded to Bigelow Aerospace Advanced Space Studies (BAASS), Robert Bigelow\'s company. AAWSAP was broader than AATIP — it included research at Skinwalker Ranch in Utah, studies of anomalous phenomena, consciousness research, and materials analysis. The distinction between AATIP and AAWSAP was publicly clarified by Elizondo and others. AAWSAP reports remain largely classified; their public release was a key demand of the UAP Disclosure Act.',
    categorie: 'institutionnel',
    tier: 2,
    tags: ['DIA', 'Bigelow', 'BAASS', 'classified', 'Skinwalker'],
  },

  {
    id: 'pursue',
    terme: 'PURSUE Program',
    acronyme: 'PURSUE',
    definition: 'Rolling declassification program launched May 2026 by the Department of War at war.gov/ufo, following President Trump\'s executive order of February 20, 2026. Initial batch: 162 files from FBI, DoD, NASA, and State Department. Defense Secretary Hegseth confirmed the goal: "maximum transparency." The archive received over one billion views within days of launch. Japan immediately confirmed analyzing PURSUE files relating to UAP near Japan in 2024. PURSUE is the largest official UAP declassification in U.S. history and a direct signal of executive-branch pressure to bypass congressional legislative failure (UAPDA blocked FY2024–2026).',
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'war.gov/ufo', url: 'https://www.war.gov/ufo' }],
    tags: ['declassification', 'Trump', '2026', 'Pentagon', 'transparency'],
  },

  {
    id: 'cia-oga',
    terme: 'CIA Office of Global Access',
    acronyme: 'OGA',
    definition: 'CIA office named in protected disclosures by multiple witnesses, including David Grusch\'s testimony ecosystem, as an entity that coordinates access to sensitive foreign collection sites and allegedly plays a role in the management of recovered non-human materials and related exploitation programs. The OGA\'s official mandate includes enabling covert collection and exploitation of foreign intelligence material globally. Its alleged role in crash retrieval logistics remains unverified and disputed by the CIA. The office\'s existence is confirmed; its alleged UAP-related function is not officially acknowledged.',
    categorie: 'institutionnel',
    tier: 2,
    isDisputed: true,
    disputedNote: 'OGA exists as a confirmed CIA office. Its alleged role in UAP crash retrieval programs is not officially acknowledged and is derived from protected disclosures only.',
    tags: ['CIA', 'alleged', 'crash retrieval', 'intelligence'],
  },

  {
    id: 'sap',
    terme: 'Special Access Program',
    acronyme: 'SAP',
    definition: 'U.S. classification level above Top Secret/SCI, requiring specific authorization ("bigot list") rather than general clearance. SAPs have their own compartmented security systems, separate from standard classification channels. A "waived SAP" (USAP — Unacknowledged Special Access Program) does not need to be reported to Congress under normal oversight channels — a loophole David Grusch alleges was exploited to keep UAP programs outside congressional awareness. Understanding SAPs is essential to understanding why Congress\'s repeated UAP legislation has been blocked.',
    categorie: 'juridique',
    tier: 1,
    tags: ['classification', 'Congress', 'Grusch', 'oversight', 'USAP'],
  },

  {
    id: 'nasa-uap',
    terme: 'NASA UAP Independent Study',
    definition: 'Independent study commissioned by NASA in 2022, led by astrophysicist David Spergel (formerly Princeton). Final report published September 2023. Key conclusions: UAP are a legitimate national security and scientific problem; stigma must be removed from reporting; better data collection is needed; no current evidence of extraterrestrial origin but cannot be excluded. Named first NASA UAP coordinator: Mark McInerney. The report legitimized UAP as a topic for mainstream scientific inquiry and represented a significant institutional shift.',
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'NASA UAP Study', url: 'https://science.nasa.gov/uap' }],
    tags: ['NASA', 'science', 'Spergel', '2023'],
  },

  {
    id: 'geipan',
    terme: 'Groupe d\'Études et d\'Informations sur les Phénomènes Aérospatiaux Non-identifiés',
    acronyme: 'GEIPAN',
    definition: 'The world\'s longest-running official government UAP investigation program, established in France within CNES (national space agency) in 1977 as GEPAN, renamed GEIPAN in 2005. Still fully active in 2026 with 3,200+ archived cases. Oversight includes Gendarmerie, Air and Space Force, and CNRS. Approximately 3% of cases remain unexplained after full investigation. In 2025, the European Commission cited GEIPAN as the model for EU member state UAP programs. France\'s institutional posture on UAP is arguably more advanced than most NATO allies.',
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'CNES GEIPAN', url: 'https://www.cnes-geipan.fr' }],
    tags: ['France', 'CNES', 'international', 'official', 'EU'],
  },

  {
    id: 'sol-foundation',
    terme: 'The Sol Foundation',
    definition: 'Independent academic and policy think tank founded in 2023, affiliated with Stanford University, dedicated to rigorous interdisciplinary research on UAP and non-human intelligence. Co-founded by Dr. Garry Nolan and Dr. Peter Skafish. Hosted the first academic conference on UAP in November 2023 at Stanford, where Col. Karl Nell (US Army ret.) presented his controlled vs catastrophic disclosure framework. The Sol Foundation represents the institutionalization of UAP research within mainstream academia. Publishes peer-reviewed policy papers.',
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'Sol Foundation', url: 'https://www.thesolfoundation.org' }],
    tags: ['Stanford', 'Nolan', 'Nell', 'academic', 'policy'],
  },

  {
    id: 'galileo-project',
    terme: 'The Galileo Project',
    definition: 'Scientific initiative founded July 2021 by Harvard professor Avi Loeb, aimed at collecting systematic empirical data on anomalous aerial phenomena using purpose-built observatories. All data published open-access. Represents the first fully transparent, rigorously scientific approach to UAP study. The project operates multiple observation stations with multi-sensor arrays. In 2024, the team published preliminary analyses of metallic spheres recovered from a Pacific Ocean meteor impact site showing anomalous compositions. Funded by private donations; no government affiliation.',
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'Galileo Project', url: 'https://projects.iq.harvard.edu/galileo' }],
    tags: ['Harvard', 'Loeb', 'open-science', 'empirical'],
  },

  // ─── KEY FIGURES ─────────────────────────────────────────

  {
    id: 'grusch',
    terme: 'David Grusch',
    definition: 'Former U.S. intelligence officer (NGA/AARO); key figure in the 2023 disclosure ecosystem. Testified under oath before the House Oversight Committee on July 26, 2023, stating that the U.S. operates secret programs for recovery and analysis of non-human craft and biological materials, managed outside standard congressional oversight. First such statement under oath in American institutional history. Protected under whistleblower statutes (Intelligence Community Whistleblower Protection Act). Filed an Inspector General complaint prior to public testimony. The DoD and AARO have denied his specific claims about crash retrieval programs.',
    categorie: 'personnel',
    tier: 1,
    tags: ['sworn testimony', 'Congress', 'whistleblower', 'crash retrieval', '2023'],
  },

  {
    id: 'elizondo',
    terme: 'Luis Elizondo',
    definition: 'Former career intelligence officer and counterintelligence specialist; directed AATIP from approximately 2010 to 2017. Resigned from the Pentagon in October 2017 in protest at what he described as inadequate institutional response and obstruction of UAP research. Co-founded To The Stars Academy with Tom DeLonge. Defined the Five Observables framework. Has testified before Congress multiple times and briefed senior government officials. A central figure in the 2017–present disclosure era. Author of Imminent (2024), detailing his experience inside the Pentagon UAP program.',
    categorie: 'personnel',
    tier: 1,
    tags: ['AATIP', 'Pentagon', 'whistleblower', 'Five Observables', 'disclosure'],
  },

  {
    id: 'fravor',
    terme: 'Commander David Fravor',
    definition: 'Retired U.S. Navy Commander (F/A-18 pilot); primary military witness to the USS Nimitz 2004 Tic-Tac encounter. Testified before Congress in July 2023. Described the object as white, elongated, with no wings or propulsion systems, capable of instantaneous acceleration and impossible maneuvers. Quote: "I have never seen anything in my life, in the air, that could do what that thing did." His first-hand military pilot testimony under oath is among the highest-credibility UAP witness accounts in institutional history. The FLIR1 video from this encounter was declassified by the Pentagon in 2020.',
    categorie: 'personnel',
    tier: 1,
    tags: ['Nimitz', 'Navy', 'sworn testimony', 'Tic-Tac', '2004', '2023'],
  },

  {
    id: 'graves',
    terme: 'Ryan Graves',
    definition: 'Retired U.S. Navy F/A-18 pilot; founder of Americans for Safe Aerospace (ASA), a non-profit advocating for UAP reporting reform. Testified before Congress in July 2023 alongside Grusch and Fravor. Reported persistent UAP encounters by his squadron over restricted airspace off the East Coast from 2014–2015, including the events that produced the Gimbal and GoFast videos. Testified that UAP were observed "every day for at least a couple years." His advocacy has focused on pilot safety reporting stigma and the systematic underreporting of military UAP incidents.',
    categorie: 'personnel',
    tier: 1,
    tags: ['Navy', 'sworn testimony', 'Congress', 'Gimbal', 'GoFast', '2023'],
  },

  {
    id: 'stratton',
    terme: 'Jay Stratton',
    definition: 'Former director of the UAP Task Force (UAPTF) and former DIA senior official; the highest-ranking intelligence official to make explicit firsthand UAP claims on public record. In The Age of Disclosure (Dan Farah, Amazon Prime, November 2025): "I have seen, with my own eyes, non-human craft and non-human beings." This statement, made by the former head of the government\'s own UAP investigative body, is without institutional precedent. Stratton also served as director of the National Reconnaissance Office\'s UAP analysis cell and has briefed presidents.',
    categorie: 'personnel',
    tier: 1,
    tags: ['UAPTF', 'DIA', 'NRO', 'firsthand testimony', 'Age of Disclosure', '2025'],
  },

  {
    id: 'nell',
    terme: 'Col. Karl Nell (ret.)',
    definition: 'Retired U.S. Army Colonel; former UAP Task Force liaison to the intelligence community; former Army intelligence officer. Presented the "controlled vs catastrophic disclosure" framework at Stanford University\'s Sol Foundation inaugural conference in November 2023. Framework: (1) controlled disclosure = planned, phased, preserves institutions; (2) catastrophic disclosure = uncontrolled release causing societal disruption. Identified 2026 as the critical institutional pivot year. Quote: "UAPDA is not optional — catastrophic disclosure risk increases each year it fails." His framework is the conceptual basis of the LBDG toolkit architecture.',
    categorie: 'personnel',
    tier: 1,
    tags: ['Sol Foundation', 'Army', 'disclosure framework', 'Stanford', '2023'],
  },

  {
    id: 'mellon',
    terme: 'Christopher Mellon',
    definition: 'Former Deputy Assistant Secretary of Defense for Intelligence (1997–2002) and former Senate Intelligence Committee staff director. Key architect of the modern disclosure push — provided the Navy UAP videos to the New York Times in 2017, triggering the public revelation of AATIP. Has since advised multiple congressional members on UAP legislation. Mellon is unusual in the disclosure ecosystem: a deeply credentialed former senior government official who advocates openly for transparency. Has testified before Congress and published extensively on UAP policy.',
    categorie: 'personnel',
    tier: 1,
    tags: ['DoD', 'Senate', 'NYT', 'disclosure', 'policy'],
  },

  {
    id: 'nolan',
    terme: 'Dr. Garry Nolan',
    definition: 'Professor of Pathology at Stanford University School of Medicine; inventor of multiple patented technologies in genomics and immunology; co-founder of The Sol Foundation. Has conducted scientific analysis of alleged UAP-related biological materials at the request of U.S. intelligence community members. His research on the brains of UAP witnesses (published in peer-reviewed journals) identified structural anomalies in the caudate-putamen region correlated with exposure to anomalous phenomena. His institutional credibility as a Stanford scientist has legitimized material analysis of UAP-related claims.',
    categorie: 'personnel',
    tier: 1,
    sources: [{ label: 'Stanford Medicine', url: 'https://med.stanford.edu' }],
    tags: ['Stanford', 'science', 'biological analysis', 'Sol Foundation', 'materials'],
  },

  {
    id: 'loeb',
    terme: 'Professor Avi Loeb',
    definition: 'Frank B. Baird Jr. Professor of Science at Harvard University; former chair of Harvard\'s astronomy department and former chair of the Board on Physics and Astronomy of the National Academies. Proposed an artificial origin hypothesis for \'Oumuamua in his book Extraterrestrial (2021), triggering significant academic debate. Founded the Galileo Project (2021) for systematic UAP study. In 2024, published analysis of metallic spheres from the IM1 Pacific Ocean meteor site showing iron, beryllium, and barium compositions inconsistent with known natural or human-made objects. The most credentialed mainstream scientist engaged in UAP research.',
    categorie: 'personnel',
    tier: 1,
    tags: ['Harvard', 'astronomy', 'Galileo Project', 'Oumuamua', 'peer-reviewed'],
  },

  {
    id: 'villaroel',
    terme: 'Dr. Beatriz Villarroel',
    definition: 'Astrophysicist at the Nordic Institute for Theoretical Physics (Nordita) and Stockholm University; co-investigator at the Instituto de Astrofísica de Canarias. Leads the VASCO project (Vanishing and Appearing Sources during a Century of Observations), which systematically compares historical photographic sky surveys (1950s) against modern digital catalogs to identify objects that have appeared or vanished. Her peer-reviewed paper in The Astronomical Journal (2021) identified 100 "transient" point sources with no modern counterparts — statistically anomalous candidates that cannot be explained by known astrophysical processes. Her work represents one of the most rigorous scientific approaches to anomalous astronomical observations.',
    categorie: 'scientifique',
    tier: 1,
    sources: [{ label: 'VASCO Project', url: 'https://vasconsite.wordpress.com' }],
    tags: ['Nordita', 'VASCO', 'transients', 'peer-reviewed', 'astronomy', 'vanishing stars'],
  },

  {
    id: 'vallee',
    terme: 'Dr. Jacques Vallée',
    definition: 'French-American computer scientist, venture capitalist, and pioneering UAP researcher. As a young scientist at Paris Observatory, tracked the Soviet Sputnik satellite. His early work influenced J. Allen Hynek. Author of Passport to Magonia (1969) and multiple subsequent works challenging the extraterrestrial hypothesis in favor of an interdimensional or control-system hypothesis. Has analyzed alleged UAP physical trace evidence for decades. Vallée\'s scientific rigor and career credibility (Silicon Valley VC, former ARPANET node) distinguish him from most UAP researchers. Currently involved in private material analysis programs.',
    categorie: 'personnel',
    tier: 2,
    tags: ['interdimensional hypothesis', 'materials', 'France', 'pioneer'],
  },

  {
    id: 'hynek',
    terme: 'Dr. J. Allen Hynek',
    definition: 'Astrophysicist at Northwestern University; U.S. Air Force scientific consultant on Projects Sign, Grudge, and Blue Book (1948–1969). Originally tasked with debunking UAP reports, Hynek became convinced over time that a genuine anomaly existed within the data. Coined the terms "Close Encounter of the First Kind (CE1)," "CE2," and "CE3" — still the standard classification framework. Founded the Center for UFO Studies (CUFOS) in 1973. Quote: "The UFO phenomenon is real — I am not embarrassed to admit it." Hynek\'s evolution from official skeptic to serious researcher is the archetype of institutional credibility shift.',
    categorie: 'personnel',
    tier: 2,
    tags: ['Blue Book', 'Air Force', 'historical', 'classification system'],
  },

  {
    id: 'kean',
    terme: 'Leslie Kean',
    definition: 'Investigative journalist; co-author with Ralph Blumenthal and Helene Cooper of the December 2017 New York Times article that revealed AATIP and ignited the modern disclosure era. Author of UFOs: Generals, Pilots, and Government Officials Go on the Record (2010). Her work with government officials across multiple countries to document on-the-record testimony is a journalistic landmark. Recipient of multiple journalism awards. Her 2017 NYT investigation changed the institutional trajectory of the UAP subject globally.',
    categorie: 'media',
    tier: 1,
    tags: ['NYT', 'journalism', '2017', 'disclosure', 'AATIP'],
  },

  {
    id: 'coulthart',
    terme: 'Ross Coulthart',
    definition: 'Australian investigative journalist (formerly 60 Minutes Australia, Channel 7, News Nation); author of In Plain Sight (2021), which documented extensive on-record source testimony from intelligence and military figures about UAP crash retrieval programs. Winner of five Walkley Awards (Australia\'s highest journalism honor). His sources include multiple individuals who have since provided protected disclosures to the ICIG. In Plain Sight predated Grusch\'s public testimony and described in detail the crash retrieval program structure that Grusch later confirmed under oath. Currently covering disclosure developments for News Nation.',
    categorie: 'media',
    tier: 1,
    tags: ['journalism', 'Australia', 'crash retrieval', 'In Plain Sight', 'sources'],
  },

  {
    id: 'knapp',
    terme: 'George Knapp',
    definition: 'Investigative journalist (Las Vegas CBS affiliate KLAS-TV); recipient of the Edward R. Murrow Award and multiple Peabody-related honors. First journalist to interview Bob Lazar in 1989, giving Lazar\'s claims national exposure. Has covered UAP for over three decades with access to military and intelligence sources. Co-author with Jeremy Corbell of documentary work on UAP. Knapp\'s relationship with Robert Bigelow provided early access to NIDS and BAASS research. His long-term source relationships within the intelligence community make him one of the most embedded journalists on the subject.',
    categorie: 'media',
    tier: 2,
    tags: ['journalism', 'Lazar', 'NIDS', 'Las Vegas', 'KLAS'],
  },

  {
    id: 'corbell',
    terme: 'Jeremy Corbell',
    definition: 'American filmmaker and UAP activist (not a journalist by training). Known for releasing authentic DoD UAP footage that was subsequently confirmed by the Pentagon and Navy: the "Pyramid UFOs" (USS Russell, 2019), the "Sphere UAP" entering the ocean (USS Omaha, 2019), and multiple others. His releases, controversial in method, accelerated institutional acknowledgment — each released video required official confirmation or denial, forcing the government\'s hand. His documentary Bob Lazar: Area 51 & Flying Saucers (2018) renewed mainstream interest in Lazar\'s claims. His role in the ecosystem is that of an accelerant for official disclosure.',
    categorie: 'media',
    tier: 2,
    tags: ['filmmaker', 'USS Omaha', 'USS Russell', 'footage', 'Pentagon'],
  },

  {
    id: 'fox',
    terme: 'James Fox',
    definition: 'American documentary filmmaker; director of The Phenomenon (2020) — widely considered the most credible mainstream UAP documentary produced to date — and Moment of Contact (2022), documenting the Varginha, Brazil incident with military and medical witnesses. The Phenomenon features on-the-record testimony from former government officials including John Podesta, Fife Symington (Governor of Arizona during the Phoenix Lights), and international military figures. Fox\'s approach of using credentialed institutional sources rather than conspiracy-oriented framing distinguishes his work from most UAP documentary production.',
    categorie: 'media',
    tier: 2,
    tags: ['documentary', 'The Phenomenon', 'Varginha', 'institutional witnesses'],
  },

  // ─── KEY CASES ───────────────────────────────────────────

  {
    id: 'nimitz',
    terme: 'USS Nimitz Encounter (2004)',
    definition: 'The most extensively documented military UAP incident in U.S. history. In November 2004 off the California coast, USS Princeton\'s AN/SPY-1 radar tracked multiple objects descending from 80,000 feet to hovering at 50 feet in seconds. Commander David Fravor and Lt. Cmdr. Jim Slaight intercepted a white, oblong, wingless craft ("Tic-Tac") exhibiting impossible accelerations. The encounter was captured on the FLIR1 video. The FLIR1 video was declassified by the Pentagon in April 2020 "to clear up any misconception on whether the footage was real." AARO classifies this case as unresolved.',
    categorie: 'historique',
    tier: 1,
    tags: ['Navy', 'Fravor', 'Tic-Tac', 'FLIR1', '2004', 'declassified'],
  },

  {
    id: 'gimbal-gofast',
    terme: 'Gimbal and GoFast Videos (2015)',
    definition: 'Two of three declassified Pentagon UAP videos (alongside FLIR1). Filmed by USS Theodore Roosevelt strike group F/A-18 pilots in 2014–2015 off the U.S. East Coast. Gimbal shows an oval object performing an inexplicable rotation against wind direction, with no thermal propulsion signature. GoFast shows an object traveling at extremely low altitude at speed inconsistent with its apparent size. Ryan Graves reported his squadron encountered similar objects "every day for at least a couple years." Both videos were officially released April 27, 2020 with Pentagon authentication.',
    categorie: 'historique',
    tier: 1,
    tags: ['Navy', 'Roosevelt', 'Graves', 'declassified', 'Pentagon', '2020'],
  },

  {
    id: 'rendlesham',
    terme: 'Rendlesham Forest Incident (1980)',
    definition: 'A series of reported sightings of unexplained lights over three nights in late December 1980 near RAF Woodbridge and RAF Bentwaters (U.S. Air Force bases) in Suffolk, England. U.S. Air Force Lt. Col. Charles Halt filed an official memorandum to the British Ministry of Defence documenting physical trace evidence: broken branches, radiation readings 10 times higher than background, and craft descriptions from multiple security personnel. The UK MOD\'s response: "no defence significance." Often called "Britain\'s Roswell." Halt later publicly stated the events were not adequately investigated.',
    categorie: 'historique',
    tier: 2,
    tags: ['UK', 'USAF', 'RAF', 'Cold War', 'physical evidence', '1980'],
  },

  {
    id: 'phoenix-lights',
    terme: 'Phoenix Lights (1997)',
    definition: 'Mass UFO sighting event on March 13, 1997 over Arizona and Nevada, witnessed by thousands including Arizona Governor Fife Symington. Two distinct events: a triangular formation of lights traveling slowly across the state, and separate stationary lights over Phoenix. The USAF attributed the latter to A-10 flares. Symington initially held a press conference mocking the event; he later confirmed seeing an unexplained structured craft and called it "otherworldly." The Phoenix Lights remain one of the most witnessed UAP events in North American history and were featured in James Fox\'s The Phenomenon.',
    categorie: 'historique',
    tier: 2,
    tags: ['Arizona', 'mass sighting', 'Symington', '1997'],
  },

  {
    id: 'belgian-wave',
    terme: 'Belgian UFO Wave (1989–1990)',
    definition: 'Prolonged series of UAP sightings across Belgium involving thousands of civilian witnesses and Belgian Air Force radar tracking. The Belgian Air Force scrambled F-16 fighters on multiple occasions. A triangular craft with lights at each corner was reported by gendarmes (police), military, and civilians simultaneously. The Belgian Air Force published official records acknowledging the encounters and their inability to identify the objects. Chief of Staff Gen. Wilfried De Brouwer personally acknowledged the reality of the phenomena in official statements. One of the best-documented mass military UAP events in European history.',
    categorie: 'historique',
    tier: 2,
    tags: ['Belgium', 'Air Force', 'F-16', 'Europe', 'mass sighting', '1989'],
  },

  {
    id: 'roswell',
    terme: 'Roswell Incident (1947)',
    definition: 'The foundational event of modern UAP culture. In July 1947, an object crashed on a ranch near Roswell, New Mexico. The USAAF initially announced recovery of a "flying disc," then retracted and claimed it was a weather balloon. The 1994 USAF report attributed it to Project Mogul balloon debris; a 1997 supplementary report attributed "bodies" to crash test dummies. Multiple witnesses over decades maintained accounts inconsistent with these explanations. Roswell established the template for government denial and cover-up allegations that defined the next 70 years of UAP discourse. Institutionally, it remains formally explained; culturally and investigatively, contested.',
    categorie: 'historique',
    tier: 2,
    tags: ['1947', 'USAAF', 'New Mexico', 'crash', 'cover-up'],
  },

  // ─── LEGAL & POLICY ──────────────────────────────────────

  {
    id: 'uap-disclosure-act',
    terme: 'UAP Disclosure Act',
    definition: 'Bipartisan U.S. legislation proposed by Senators Chuck Schumer (D-NY) and Mike Rounds (R-SD) in 2023, modeled on the JFK Records Act. Would require all government UAP records to be reviewed and released within 25 years, with a presidentially appointed Review Board. A version was incorporated into NDAA 2024 but with expanded executive veto powers. The act was subsequently blocked from NDAA FY2025 and FY2026 — three consecutive years of DoD opposition. The PURSUE executive order in 2026 can be seen as a partial executive bypass of the failed legislative route.',
    categorie: 'juridique',
    tier: 1,
    tags: ['Schumer', 'Rounds', 'Congress', 'legislation', 'declassification', 'NDAA'],
  },

  {
    id: 'foia',
    terme: 'Freedom of Information Act',
    acronyme: 'FOIA',
    definition: 'U.S. federal law (5 U.S.C. § 552) enabling any person to request access to federal agency records. Nine exemptions exist, including national security (b1), internal agency rules (b2), and trade secrets (b4). UAP researchers have used FOIA to recover thousands of documents from AARO, DIA, CIA, NSA, and FBI. The Black Vault (John Greenewald Jr.) has filed thousands of FOIA requests specific to UAP. Key limitation: classified SAP materials can be entirely withheld under b1 exemption. The FOIA process is a critical tool for independent verification of institutional UAP claims.',
    categorie: 'juridique',
    tier: 1,
    tags: ['transparency', 'documents', 'government', 'research', 'Black Vault'],
  },

  {
    id: 'whistleblower-protection',
    terme: 'Intelligence Community Whistleblower Protection Act',
    acronyme: 'ICWPA',
    definition: 'U.S. law protecting federal employees and contractors who report "urgent concerns" to the Intelligence Community Inspector General (ICIG). The Grusch complaint was filed under this act. Protection covers retaliation, employment consequences, and criminal prosecution for the disclosure itself (to the ICIG, not to the public). Key limitation: protection applies to reporting through official channels (ICIG → congressional intelligence committees) — NOT to public disclosure. Grusch obtained additional protections through congressional notification procedures before going public. This legal architecture is why structured IG complaints preceded public congressional testimony.',
    categorie: 'juridique',
    tier: 1,
    tags: ['Grusch', 'ICIG', 'Congress', 'legal protection', 'classified'],
  },

  // ─── SCIENCE ─────────────────────────────────────────────

  {
    id: 'oumuamua',
    terme: '\'Oumuamua',
    definition: 'The first interstellar object confirmed to have passed through the solar system, detected October 2017. Exhibited non-gravitational acceleration (speeding up while leaving the solar system) with no detectable outgassing consistent with a comet. Its shape was elongated beyond any known natural object. Harvard professor Avi Loeb proposed an artificial origin in his analysis, citing the unexplained acceleration as potentially consistent with a light sail. The mainstream scientific consensus remains "natural but unusual." Named from Hawaiian: "scout" or "messenger." Its passage occurred two months before the NYT AATIP revelation — the timing is noted by some researchers.',
    categorie: 'scientifique',
    tier: 1,
    sources: [{ label: 'Loeb, Harvard', url: 'https://www.cfa.harvard.edu' }],
    tags: ['Harvard', 'Loeb', 'interstellar', 'astronomy', 'artificial hypothesis'],
  },

  {
    id: 'fermi-paradox',
    terme: 'Fermi Paradox',
    definition: 'The apparent contradiction between high probability estimates for extraterrestrial civilizations existing (based on the scale of the universe and the prevalence of potentially habitable planets) and the complete absence of detectable evidence for such civilizations. Named for physicist Enrico Fermi\'s 1950 question: "Where is everybody?" In the context of UAP disclosure: if verified NHI testimony is accurate, the Fermi Paradox is partly resolved — intelligence exists but chose not to be broadly detected, or has been suppressed from public awareness. The Drake Equation (1961) quantified the probability framework Fermi intuited.',
    categorie: 'scientifique',
    tier: 2,
    tags: ['Drake', 'SETI', 'probability', 'astrobiology', 'philosophy'],
  },

  {
    id: 'technosignature',
    terme: 'Technosignature',
    definition: 'Observable evidence of technological activity by an intelligent civilization, detectable from a distance. Contrasts with biosignature (biological markers). In the UAP context: the Five Observables (anti-gravity, hypersonic velocity, low observability, transmedium travel, inertia manipulation) could constitute technosignatures if verified. NASA\'s 2023 UAP study explicitly incorporated technosignature frameworks. The Galileo Project\'s observation methodology is designed to detect both biosignatures and technosignatures from anomalous objects. The concept bridges SETI (searching elsewhere) and UAP research (studying nearby anomalies).',
    categorie: 'scientifique',
    tier: 2,
    tags: ['NASA', 'SETI', 'Galileo Project', 'detection', 'intelligence'],
  },

  // ─── CONCEPTUAL FRAMEWORKS ───────────────────────────────

  {
    id: 'eth',
    terme: 'Extraterrestrial Hypothesis',
    acronyme: 'ETH',
    definition: 'The hypothesis that UAP of unknown origin represent technology or intelligence from other star systems or planetary bodies. The dominant popular hypothesis and the one implicitly referenced in most congressional disclosure discussions. Not the consensus among serious UAP researchers, who note that interstellar travel timescales and the diversity of reported phenomena complicate a simple ETH explanation. The ETH is a starting hypothesis, not a conclusion. Grusch\'s testimony does not specify ETH; he used the term "non-human intelligence" deliberately to remain agnostic about origin.',
    categorie: 'conceptuel',
    tier: 2,
    tags: ['hypothesis', 'extraterrestrial', 'origin', 'Grusch'],
  },

  {
    id: 'idh',
    terme: 'Interdimensional Hypothesis',
    acronyme: 'IDH',
    definition: 'Alternative hypothesis to ETH proposing that UAP represent intelligence from other dimensions, densities, or quantum states of reality rather than other star systems. Associated primarily with Jacques Vallée, who proposed it as better explaining the folkloric continuity of encounter reports across cultures and centuries. The IDH is not scientifically testable in its current form but has gained traction among some physicists exploring higher-dimensional geometry. The "cryptoterrestrial hypothesis" (NHI originated on Earth, hidden) is a related variant. These frameworks remain speculative.',
    categorie: 'conceptuel',
    tier: 3,
    tags: ['Vallée', 'theoretical', 'hypothesis', 'dimension', 'physics'],
  },

  // ─── DISPUTED / ALLEGED ──────────────────────────────────

  {
    id: 'lazar',
    terme: 'Bob Lazar',
    definition: 'American who claimed in 1989 (through journalist George Knapp) to have worked at a classified facility designated "S-4" near Area 51, Nevada, reverse engineering extraterrestrial propulsion systems. His specific technical claims — element 115 as propulsion fuel, nine craft in storage, gravity wave propulsion — were largely considered science fiction at the time. Element 115 (Moscovium) was subsequently synthesized in 2003 and officially named in 2016. Lazar\'s educational credentials remain disputed. He has never recanted. Jeremy Corbell\'s documentary Bob Lazar: Area 51 & Flying Saucers (2018) renewed mainstream interest. His claims remain unverified and are disputed by the U.S. government.',
    categorie: 'conteste',
    tier: 2,
    isDisputed: true,
    disputedNote: 'Lazar\'s claims have never been officially verified. His educational credentials could not be confirmed. Element 115 was subsequently discovered but does not validate his specific propulsion claims. Include as culturally significant and historically influential, not as verified testimony.',
    tags: ['Area 51', 'element 115', 'alleged', 'reverse engineering', 'unverified', '1989'],
  },

  {
    id: 'wilson-davis',
    terme: 'Wilson–Davis Memo',
    definition: 'A document allegedly recording a 2002 conversation between Admiral Thomas Wilson (former DIA director) and Dr. Eric Davis (astrophysicist, then at NIDS) in which Wilson describes being denied access to a private contractor\'s UAP crash retrieval program despite his senior position. The document surfaced publicly in 2019. Wilson has denied the meeting occurred as described. Davis has neither confirmed nor denied. If authentic, it would represent documentary evidence of a non-governmental crash retrieval program operating outside federal oversight. The document\'s provenance remains disputed; it has not been verified by any official investigation.',
    categorie: 'conteste',
    tier: 2,
    isDisputed: true,
    disputedNote: 'Authenticity disputed. Thomas Wilson denies the account. Eric Davis has not confirmed publicly. Provenance unverified. Significant if genuine; unverifiable with current evidence.',
    tags: ['Wilson', 'Davis', 'crash retrieval', 'contractor', 'alleged', 'disputed'],
  },

  {
    id: 'immaculate-constellation',
    terme: 'Immaculate Constellation',
    definition: 'Alleged classified UAP surveillance program named in protected disclosures filed with the ICIG, referenced in reporting by journalists including Matthew Phelan and subsequently in congressional contexts. Allegedly collects imagery and data on UAP from classified orbital and airborne platforms. Has not been officially acknowledged. Named alongside other alleged program structures in unverified claims.',
    categorie: 'conteste',
    tier: 3,
    isDisputed: true,
    disputedNote: 'Named in protected disclosures to the ICIG. Not officially acknowledged. Cannot be independently verified. Listed for completeness; treat as alleged until confirmed.',
    tags: ['alleged', 'surveillance', 'classified', 'ICIG', 'unverified'],
  },

  // ─── INTERNATIONAL ───────────────────────────────────────

  {
    id: 'cometa',
    terme: 'COMETA Report',
    definition: 'A 1999 French study on UFOs, produced by COMETA (Comité d\'études approfondies), a private association of high-ranking French military officers, scientists, and officials. Titled "UFOs and Defense: What Should We Prepare For?" the report concluded that the extraterrestrial hypothesis was the most scientifically plausible explanation for a subset of documented cases. It recommended France engage NATO and the UN on the subject. While not an official government report, its authors\' institutional credentials (generals, aerospace engineers, former DGA officials) gave it significant weight and it remains a reference in the French UAP research community.',
    categorie: 'historique',
    tier: 2,
    tags: ['France', 'military', 'ETH', '1999', 'NATO'],
  },

  {
    id: 'cefaa',
    terme: 'CEFAA',
    definition: 'Committee for the Studies of Anomalous Aerial Phenomena — Chile\'s official civilian government UAP investigation body, operating under the Civil Aeronautics Directorate (DGAC). One of the most active and transparent official UAP programs globally. In 2014, released a 9-minute infrared video of an unknown object recorded by a Chilean Navy helicopter that stumped military analysts for two years. CEFAA published full investigation details publicly. Chile\'s approach — official acknowledgment, systematic investigation, transparent reporting — is often cited as the international gold standard.',
    categorie: 'institutionnel',
    tier: 2,
    sources: [{ label: 'CEFAA', url: 'http://www.dgac.gob.cl' }],
    tags: ['Chile', 'official', 'Navy', 'infrared', 'international'],
  },

  // ─── PROGRAMS & HISTORICAL ───────────────────────────────

  {
    id: 'project-blue-book',
    terme: 'Project Blue Book',
    definition: 'The U.S. Air Force\'s third and final official UFO study program (1952–1969), following Projects Sign (1948) and Grudge (1949). Investigated 12,618 reported sightings; 701 remained "unidentified" after analysis. Led from 1966 by J. Allen Hynek as scientific consultant. The project was terminated following the 1968 Condon Report, which concluded further scientific study was unwarranted. Critics, including Hynek himself, noted the program\'s primary purpose was public relations rather than genuine scientific inquiry, and that the most compelling cases were often classified before reaching Blue Book analysts. All Blue Book files were declassified in 1976.',
    categorie: 'historique',
    tier: 2,
    tags: ['Air Force', 'Hynek', '1952', 'historical', 'classification'],
  },

  {
    id: 'baass-nids',
    terme: 'BAASS / NIDS',
    definition: 'Bigelow Aerospace Advanced Space Studies (BAASS) and its predecessor the National Institute for Discovery Science (NIDS), both funded by aerospace entrepreneur Robert Bigelow. NIDS (1995–2004) conducted private UAP and anomalous phenomena research, including Skinwalker Ranch. BAASS was the primary contractor for the DIA\'s AAWSAP program (2008–2012), receiving the bulk of AATIP\'s $22 million. BAASS researchers produced a classified library of reports on UAP propulsion, materials, and biological effects. The reports are now held by the U.S. government; their full release is a congressional demand.',
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Bigelow', 'contractor', 'AAWSAP', 'DIA', 'private research'],
  },

];

export const CATEGORIES = [
  { id: 'all',            label: 'All terms'            },
  { id: 'institutionnel', label: 'Agencies & Programs'  },
  { id: 'phenomenologie', label: 'Phenomena'            },
  { id: 'technologie',    label: 'Technology'           },
  { id: 'juridique',      label: 'Legal & Policy'       },
  { id: 'personnel',      label: 'Key figures'          },
  { id: 'scientifique',   label: 'Science'              },
  { id: 'historique',     label: 'Historical cases'     },
  { id: 'conceptuel',     label: 'Frameworks'           },
  { id: 'media',          label: 'Media & Journalism'   },
  { id: 'conteste',       label: 'Disputed / Alleged'   },
] as const;
