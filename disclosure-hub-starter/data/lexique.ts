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
    terme: `Unidentified Anomalous Phenomenon`,
    acronyme: 'UAP',
    definition: `Official U.S. government term replacing "UFO" since 2020, progressively adopted across all defense and intelligence agencies. The AARO definition covers anomalous detections in any domain — airborne, seaborne, spaceborne, or transmedium — that are not attributable to known actors and demonstrate behaviors not readily understood by sensors or observers. The expanded "Anomalous" (rather than "Aerial") was adopted in the FY2023 NDAA to encompass underwater and space-based phenomena. Use of this term signals institutional legitimacy.`,
    categorie: 'phenomenologie',
    tier: 1,
    sources: [{ label: 'AARO official definition', url: 'https://www.aaro.mil' }],
    tags: ['official', 'terminology', 'DoD', 'Congress'],
  },

  {
    id: 'nhi',
    terme: `Non-Human Intelligence`,
    acronyme: 'NHI',
    definition: `Term introduced into institutional vocabulary during the July 2023 U.S. congressional hearings by David Grusch and subsequently used in sworn testimony. Refers to intelligent entities or agency of non-terrestrial origin, deliberately avoiding culturally loaded terms such as "extraterrestrial" or "alien." Former UAP Task Force Director Jay Stratton stated on record in The Age of Disclosure (Amazon Prime, 2025): "I have seen, with my own eyes, non-human craft and non-human beings." The term is now used in classified program discussions per multiple protected disclosures.`,
    categorie: 'conceptuel',
    tier: 1,
    tags: ['Grusch', 'Stratton', 'Congress', 'sworn testimony'],
  },

  {
    id: 'transmedium',
    terme: `Transmedium Object`,
    definition: `A UAP observed transitioning between multiple physical domains — atmosphere, ocean, and space — without loss of speed or apparent structural change. First formally included in the NDAA FY2022 UAP definition. The USS Omaha 2019 sphere video shows an unidentified object entering the Pacific Ocean. Transmedium behavior is one of the most physics-defying observed characteristics because it requires simultaneously managing atmospheric drag, hydrodynamic pressure, and vacuum conditions. No known human technology achieves this.`,
    categorie: 'phenomenologie',
    tier: 1,
    tags: ['Five Observables', 'physics', 'USS Omaha', 'NDAA'],
  },

  {
    id: 'five-observables',
    terme: `The Five Observables`,
    definition: `Analytical framework defined by Luis Elizondo, former AATIP director, to characterize UAP that exceed known physics: (1) anti-gravity lift — flight without conventional lift mechanisms, (2) hypersonic velocity — extreme speed without acoustic or thermal signature, (3) low observability — multi-spectrum stealth including radar cross-section near zero, (4) trans-medium travel — seamless air/water/space transition, (5) positive lift — apparent manipulation of inertia. Some researchers add a sixth: biological effects on human witnesses. No known engineered system combines all five simultaneously. This framework is referenced in congressional testimony and official AARO analyses.`,
    categorie: 'technologie',
    tier: 1,
    tags: ['Elizondo', 'AATIP', 'physics', 'characterization'],
  },

  {
    id: 'ontological-shock',
    terme: `Ontological Shock`,
    definition: `Psychological and societal response to a paradigm-shattering event that fundamentally invalidates prior assumptions about reality, humanity's place in the universe, or the nature of intelligence. In the UAP/NHI context, refers specifically to the potential societal impact of confirmed non-human intelligence existence. The term was used by Bank of England analyst Helen McCaw in her January 2026 warning to central banks, and appears in the Deloitte AG 2026 GPMESII Risk Intelligence Report under "Narrative Polarisation" and "Institutional Trust" risk tags. Key concept for organizational preparedness planning.`,
    categorie: 'conceptuel',
    tier: 1,
    tags: ['Deloitte', 'Bank of England', 'risk management', 'organizational impact'],
  },

  // ─── AGENCIES & PROGRAMS ────────────────────────────────

  {
    id: 'aaro',
    terme: `All-domain Anomaly Resolution Office`,
    acronyme: 'AARO',
    definition: `The primary U.S. government UAP investigative office, established July 2022 within the Department of Defense, directed by the Deputy Secretary of Defense. Created by Congress in NDAA 2022 to synchronize UAP collection, analysis, and reporting across all military branches and intelligence agencies. AARO's caseload exceeded 2,000 reports dating to 1945 as of 2026, confirmed by Defense Secretary Hegseth. Publishes semi-annual reports to Congress. Operates a classified reporting portal for current and former government employees with direct knowledge of UAP programs.`,
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'AARO official', url: 'https://www.aaro.mil' }],
    tags: ['Pentagon', 'DoD', 'Congress', 'surveillance'],
  },

  {
    id: 'aatip',
    terme: `Advanced Aerospace Threat Identification Program`,
    acronyme: 'AATIP',
    definition: `Secret Pentagon program 2007–2012, funded with $22 million secured by Senate Majority Leader Harry Reid, managed by the Defense Intelligence Agency. Existence revealed by the New York Times in December 2017 — the trigger event of the modern disclosure era. Directed by Luis Elizondo, who resigned in protest at institutional resistance. AATIP produced multiple internal reports on UAP propulsion, materials, and sensor data. Its contractor vehicle was AAWSAP, operated by Robert Bigelow's BAASS, which funded research at Skinwalker Ranch. AATIP files remain partially classified.`,
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'NYT 2017', url: 'https://www.nytimes.com/2017/12/16/us/politics/pentagon-program-ufo-harry-reid.html' }],
    tags: ['Pentagon', 'DIA', 'classified', 'Reid', 'Elizondo', '2017'],
  },

  {
    id: 'uaptf',
    terme: `UAP Task Force`,
    acronyme: 'UAPTF',
    definition: `Interim DoD body established August 2020 within the Office of Naval Intelligence to standardize collection and reporting of UAP sightings, following the Senate Intelligence Committee's directive. Directed by Jay Stratton. Produced the June 2021 ODNI preliminary report — the first official U.S. government UAP assessment — documenting 144 cases with 143 remaining unexplained. Replaced by AARO in July 2022. The UAPTF was the institutional bridge between the classified Navy encounters and the current open AARO program.`,
    categorie: 'institutionnel',
    tier: 1,
    tags: ['ONI', 'Navy', 'Stratton', 'ODNI', '2020'],
  },

  {
    id: 'aawsap',
    terme: `Advanced Aerospace Weapon System Applications Program`,
    acronyme: 'AAWSAP',
    definition: `The DIA contract vehicle (2008–2012) that funded AATIP research. Awarded to Bigelow Aerospace Advanced Space Studies (BAASS), Robert Bigelow's company. AAWSAP was broader than AATIP — it included research at Skinwalker Ranch in Utah, studies of anomalous phenomena, consciousness research, and materials analysis. The distinction between AATIP and AAWSAP was publicly clarified by Elizondo and others. AAWSAP reports remain largely classified; their public release was a key demand of the UAP Disclosure Act.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['DIA', 'Bigelow', 'BAASS', 'classified', 'Skinwalker'],
  },

  {
    id: 'pursue',
    terme: `PURSUE Program`,
    acronyme: 'PURSUE',
    definition: `Rolling declassification program launched May 2026 by the Department of War at war.gov/ufo, following President Trump's executive order of February 20, 2026. Initial batch: 162 files from FBI, DoD, NASA, and State Department. Defense Secretary Hegseth confirmed the goal: "maximum transparency." The archive received over one billion views within days of launch. Japan immediately confirmed analyzing PURSUE files relating to UAP near Japan in 2024. PURSUE is the largest official UAP declassification in U.S. history and a direct signal of executive-branch pressure to bypass congressional legislative failure (UAPDA blocked FY2024–2026).`,
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'war.gov/ufo', url: 'https://www.war.gov/ufo' }],
    tags: ['declassification', 'Trump', '2026', 'Pentagon', 'transparency'],
  },

  {
    id: 'cia-oga',
    terme: `CIA Office of Global Access`,
    acronyme: 'OGA',
    definition: `CIA office named in protected disclosures by multiple witnesses, including David Grusch's testimony ecosystem, as an entity that coordinates access to sensitive foreign collection sites and allegedly plays a role in the management of recovered non-human materials and related exploitation programs. The OGA's official mandate includes enabling covert collection and exploitation of foreign intelligence material globally. Its alleged role in crash retrieval logistics remains unverified and disputed by the CIA. The office's existence is confirmed; its alleged UAP-related function is not officially acknowledged.`,
    categorie: 'institutionnel',
    tier: 2,
    isDisputed: true,
    disputedNote: `OGA exists as a confirmed CIA office. Its alleged role in UAP crash retrieval programs is not officially acknowledged and is derived from protected disclosures only.`,
    tags: ['CIA', 'alleged', 'crash retrieval', 'intelligence'],
  },

  {
    id: 'sap',
    terme: `Special Access Program`,
    acronyme: 'SAP',
    definition: `U.S. classification level above Top Secret/SCI, requiring specific authorization ("bigot list") rather than general clearance. SAPs have their own compartmented security systems, separate from standard classification channels. A "waived SAP" (USAP — Unacknowledged Special Access Program) does not need to be reported to Congress under normal oversight channels — a loophole David Grusch alleges was exploited to keep UAP programs outside congressional awareness. Understanding SAPs is essential to understanding why Congress's repeated UAP legislation has been blocked.`,
    categorie: 'juridique',
    tier: 1,
    tags: ['classification', 'Congress', 'Grusch', 'oversight', 'USAP'],
  },

  {
    id: 'nasa-uap',
    terme: `NASA UAP Independent Study`,
    definition: `Independent study commissioned by NASA in 2022, led by astrophysicist David Spergel (formerly Princeton). Final report published September 2023. Key conclusions: UAP are a legitimate national security and scientific problem; stigma must be removed from reporting; better data collection is needed; no current evidence of extraterrestrial origin but cannot be excluded. Named first NASA UAP coordinator: Mark McInerney. The report legitimized UAP as a topic for mainstream scientific inquiry and represented a significant institutional shift.`,
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'NASA UAP Study', url: 'https://science.nasa.gov/uap' }],
    tags: ['NASA', 'science', 'Spergel', '2023'],
  },

  {
    id: 'geipan',
    terme: `Groupe d'Études et d'Informations sur les Phénomènes Aérospatiaux Non-identifiés`,
    acronyme: 'GEIPAN',
    definition: `The world's longest-running official government UAP investigation program, established in France within CNES (national space agency) in 1977 as GEPAN, renamed GEIPAN in 2005. Still fully active in 2026 with 3,200+ archived cases. Oversight includes Gendarmerie, Air and Space Force, and CNRS. Approximately 3% of cases remain unexplained after full investigation. In 2025, the European Commission cited GEIPAN as the model for EU member state UAP programs. France's institutional posture on UAP is arguably more advanced than most NATO allies.`,
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'CNES GEIPAN', url: 'https://www.cnes-geipan.fr' }],
    tags: ['France', 'CNES', 'international', 'official', 'EU'],
  },

  {
    id: 'sol-foundation',
    terme: `The Sol Foundation`,
    definition: `Independent academic and policy think tank founded in 2023, affiliated with Stanford University, dedicated to rigorous interdisciplinary research on UAP and non-human intelligence. Co-founded by Dr. Garry Nolan and Dr. Peter Skafish. Hosted the first academic conference on UAP in November 2023 at Stanford, where Col. Karl Nell (US Army ret.) presented his controlled vs catastrophic disclosure framework. The Sol Foundation represents the institutionalization of UAP research within mainstream academia. Publishes peer-reviewed policy papers.`,
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'Sol Foundation', url: 'https://www.thesolfoundation.org' }],
    tags: ['Stanford', 'Nolan', 'Nell', 'academic', 'policy'],
  },

  {
    id: 'galileo-project',
    terme: `The Galileo Project`,
    definition: `Scientific initiative founded July 2021 by Harvard professor Avi Loeb, aimed at collecting systematic empirical data on anomalous aerial phenomena using purpose-built observatories. All data published open-access. Represents the first fully transparent, rigorously scientific approach to UAP study. The project operates multiple observation stations with multi-sensor arrays. In 2024, the team published preliminary analyses of metallic spheres recovered from a Pacific Ocean meteor impact site showing anomalous compositions. Funded by private donations; no government affiliation.`,
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'Galileo Project', url: 'https://projects.iq.harvard.edu/galileo' }],
    tags: ['Harvard', 'Loeb', 'open-science', 'empirical'],
  },

  // ─── KEY FIGURES ─────────────────────────────────────────

  {
    id: 'grusch',
    terme: `David Grusch`,
    definition: `Former U.S. intelligence officer (NGA/AARO); key figure in the 2023 disclosure ecosystem. Testified under oath before the House Oversight Committee on July 26, 2023, stating that the U.S. operates secret programs for recovery and analysis of non-human craft and biological materials, managed outside standard congressional oversight. First such statement under oath in American institutional history. Protected under whistleblower statutes (Intelligence Community Whistleblower Protection Act). Filed an Inspector General complaint prior to public testimony. The DoD and AARO have denied his specific claims about crash retrieval programs.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['sworn testimony', 'Congress', 'whistleblower', 'crash retrieval', '2023'],
  },

  {
    id: 'elizondo',
    terme: `Luis Elizondo`,
    definition: `Former career intelligence officer and counterintelligence specialist; directed AATIP from approximately 2010 to 2017. Resigned from the Pentagon in October 2017 in protest at what he described as inadequate institutional response and obstruction of UAP research. Co-founded To The Stars Academy with Tom DeLonge. Defined the Five Observables framework. Has testified before Congress multiple times and briefed senior government officials. A central figure in the 2017–present disclosure era. Author of Imminent (2024), detailing his experience inside the Pentagon UAP program.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['AATIP', 'Pentagon', 'whistleblower', 'Five Observables', 'disclosure'],
  },

  {
    id: 'fravor',
    terme: `Commander David Fravor`,
    definition: `Retired U.S. Navy Commander (F/A-18 pilot); primary military witness to the USS Nimitz 2004 Tic-Tac encounter. Testified before Congress in July 2023. Described the object as white, elongated, with no wings or propulsion systems, capable of instantaneous acceleration and impossible maneuvers. Quote: "I have never seen anything in my life, in the air, that could do what that thing did." His first-hand military pilot testimony under oath is among the highest-credibility UAP witness accounts in institutional history. The FLIR1 video from this encounter was declassified by the Pentagon in 2020.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['Nimitz', 'Navy', 'sworn testimony', 'Tic-Tac', '2004', '2023'],
  },

  {
    id: 'graves',
    terme: `Ryan Graves`,
    definition: `Retired U.S. Navy F/A-18 pilot; founder of Americans for Safe Aerospace (ASA), a non-profit advocating for UAP reporting reform. Testified before Congress in July 2023 alongside Grusch and Fravor. Reported persistent UAP encounters by his squadron over restricted airspace off the East Coast from 2014–2015, including the events that produced the Gimbal and GoFast videos. Testified that UAP were observed "every day for at least a couple years." His advocacy has focused on pilot safety reporting stigma and the systematic underreporting of military UAP incidents.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['Navy', 'sworn testimony', 'Congress', 'Gimbal', 'GoFast', '2023'],
  },

  {
    id: 'stratton',
    terme: `Jay Stratton`,
    definition: `Former director of the UAP Task Force (UAPTF) and former DIA senior official; the highest-ranking intelligence official to make explicit firsthand UAP claims on public record. In The Age of Disclosure (Dan Farah, Amazon Prime, November 2025): "I have seen, with my own eyes, non-human craft and non-human beings." This statement, made by the former head of the government's own UAP investigative body, is without institutional precedent. Stratton also served as director of the National Reconnaissance Office's UAP analysis cell and has briefed presidents.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['UAPTF', 'DIA', 'NRO', 'firsthand testimony', 'Age of Disclosure', '2025'],
  },

  {
    id: 'nell',
    terme: `Col. Karl Nell (ret.)`,
    definition: `Retired U.S. Army Colonel; former UAP Task Force liaison to the intelligence community; former Army intelligence officer. Presented the "controlled vs catastrophic disclosure" framework at Stanford University's Sol Foundation inaugural conference in November 2023. Framework: (1) controlled disclosure = planned, phased, preserves institutions; (2) catastrophic disclosure = uncontrolled release causing societal disruption. Identified 2026 as the critical institutional pivot year. Quote: "UAPDA is not optional — catastrophic disclosure risk increases each year it fails." His framework is the conceptual basis of the LBDG toolkit architecture.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['Sol Foundation', 'Army', 'disclosure framework', 'Stanford', '2023'],
  },

  {
    id: 'mellon',
    terme: `Christopher Mellon`,
    definition: `Former Deputy Assistant Secretary of Defense for Intelligence (1997–2002) and former Senate Intelligence Committee staff director. Key architect of the modern disclosure push — provided the Navy UAP videos to the New York Times in 2017, triggering the public revelation of AATIP. Has since advised multiple congressional members on UAP legislation. Mellon is unusual in the disclosure ecosystem: a deeply credentialed former senior government official who advocates openly for transparency. Has testified before Congress and published extensively on UAP policy.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['DoD', 'Senate', 'NYT', 'disclosure', 'policy'],
  },

  {
    id: 'nolan',
    terme: `Dr. Garry Nolan`,
    definition: `Professor of Pathology at Stanford University School of Medicine; inventor of multiple patented technologies in genomics and immunology; co-founder of The Sol Foundation. Has conducted scientific analysis of alleged UAP-related biological materials at the request of U.S. intelligence community members. His research on the brains of UAP witnesses (published in peer-reviewed journals) identified structural anomalies in the caudate-putamen region correlated with exposure to anomalous phenomena. His institutional credibility as a Stanford scientist has legitimized material analysis of UAP-related claims.`,
    categorie: 'personnel',
    tier: 1,
    sources: [{ label: 'Stanford Medicine', url: 'https://med.stanford.edu' }],
    tags: ['Stanford', 'science', 'biological analysis', 'Sol Foundation', 'materials'],
  },

  {
    id: 'loeb',
    terme: `Professor Avi Loeb`,
    definition: `Frank B. Baird Jr. Professor of Science at Harvard University; former chair of Harvard's astronomy department and former chair of the Board on Physics and Astronomy of the National Academies. Proposed an artificial origin hypothesis for 'Oumuamua in his book Extraterrestrial (2021), triggering significant academic debate. Founded the Galileo Project (2021) for systematic UAP study. In 2024, published analysis of metallic spheres from the IM1 Pacific Ocean meteor site showing iron, beryllium, and barium compositions inconsistent with known natural or human-made objects. The most credentialed mainstream scientist engaged in UAP research.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['Harvard', 'astronomy', 'Galileo Project', 'Oumuamua', 'peer-reviewed'],
  },

  {
    id: 'villaroel',
    terme: `Dr. Beatriz Villarroel`,
    definition: `Astrophysicist at the Nordic Institute for Theoretical Physics (Nordita) and Stockholm University; co-investigator at the Instituto de Astrofísica de Canarias. Leads the VASCO project (Vanishing and Appearing Sources during a Century of Observations), which systematically compares historical photographic sky surveys (1950s) against modern digital catalogs to identify objects that have appeared or vanished. Her peer-reviewed paper in The Astronomical Journal (2021) identified 100 "transient" point sources with no modern counterparts — statistically anomalous candidates that cannot be explained by known astrophysical processes. Her work represents one of the most rigorous scientific approaches to anomalous astronomical observations.`,
    categorie: 'scientifique',
    tier: 1,
    sources: [{ label: 'VASCO Project', url: 'https://vasconsite.wordpress.com' }],
    tags: ['Nordita', 'VASCO', 'transients', 'peer-reviewed', 'astronomy', 'vanishing stars'],
  },

  {
    id: 'vallee',
    terme: `Dr. Jacques Vallée`,
    definition: `French-American computer scientist, venture capitalist, and pioneering UAP researcher. As a young scientist at Paris Observatory, tracked the Soviet Sputnik satellite. His early work influenced J. Allen Hynek. Author of Passport to Magonia (1969) and multiple subsequent works challenging the extraterrestrial hypothesis in favor of an interdimensional or control-system hypothesis. Has analyzed alleged UAP physical trace evidence for decades. Vallée's scientific rigor and career credibility (Silicon Valley VC, former ARPANET node) distinguish him from most UAP researchers. Currently involved in private material analysis programs.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['interdimensional hypothesis', 'materials', 'France', 'pioneer'],
  },

  {
    id: 'hynek',
    terme: `Dr. J. Allen Hynek`,
    definition: `Astrophysicist at Northwestern University; U.S. Air Force scientific consultant on Projects Sign, Grudge, and Blue Book (1948–1969). Originally tasked with debunking UAP reports, Hynek became convinced over time that a genuine anomaly existed within the data. Coined the terms "Close Encounter of the First Kind (CE1)," "CE2," and "CE3" — still the standard classification framework. Founded the Center for UFO Studies (CUFOS) in 1973. Quote: "The UFO phenomenon is real — I am not embarrassed to admit it." Hynek's evolution from official skeptic to serious researcher is the archetype of institutional credibility shift.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['Blue Book', 'Air Force', 'historical', 'classification system'],
  },

  {
    id: 'kean',
    terme: `Leslie Kean`,
    definition: `Investigative journalist; co-author with Ralph Blumenthal and Helene Cooper of the December 2017 New York Times article that revealed AATIP and ignited the modern disclosure era. Author of UFOs: Generals, Pilots, and Government Officials Go on the Record (2010). Her work with government officials across multiple countries to document on-the-record testimony is a journalistic landmark. Recipient of multiple journalism awards. Her 2017 NYT investigation changed the institutional trajectory of the UAP subject globally.`,
    categorie: 'media',
    tier: 1,
    tags: ['NYT', 'journalism', '2017', 'disclosure', 'AATIP'],
  },

  {
    id: 'coulthart',
    terme: `Ross Coulthart`,
    definition: `Australian investigative journalist (formerly 60 Minutes Australia, Channel 7, News Nation); author of In Plain Sight (2021), which documented extensive on-record source testimony from intelligence and military figures about UAP crash retrieval programs. Winner of five Walkley Awards (Australia's highest journalism honor). His sources include multiple individuals who have since provided protected disclosures to the ICIG. In Plain Sight predated Grusch's public testimony and described in detail the crash retrieval program structure that Grusch later confirmed under oath. Currently covering disclosure developments for News Nation.`,
    categorie: 'media',
    tier: 1,
    tags: ['journalism', 'Australia', 'crash retrieval', 'In Plain Sight', 'sources'],
  },

  {
    id: 'knapp',
    terme: `George Knapp`,
    definition: `Investigative journalist (Las Vegas CBS affiliate KLAS-TV); recipient of the Edward R. Murrow Award and multiple Peabody-related honors. First journalist to interview Bob Lazar in 1989, giving Lazar's claims national exposure. Has covered UAP for over three decades with access to military and intelligence sources. Co-author with Jeremy Corbell of documentary work on UAP. Knapp's relationship with Robert Bigelow provided early access to NIDS and BAASS research. His long-term source relationships within the intelligence community make him one of the most embedded journalists on the subject.`,
    categorie: 'media',
    tier: 2,
    tags: ['journalism', 'Lazar', 'NIDS', 'Las Vegas', 'KLAS'],
  },

  {
    id: 'corbell',
    terme: `Jeremy Corbell`,
    definition: `American filmmaker and UAP activist (not a journalist by training). Known for releasing authentic DoD UAP footage that was subsequently confirmed by the Pentagon and Navy: the "Pyramid UFOs" (USS Russell, 2019), the "Sphere UAP" entering the ocean (USS Omaha, 2019), and multiple others. His releases, controversial in method, accelerated institutional acknowledgment — each released video required official confirmation or denial, forcing the government's hand. His documentary Bob Lazar: Area 51 & Flying Saucers (2018) renewed mainstream interest in Lazar's claims. His role in the ecosystem is that of an accelerant for official disclosure.`,
    categorie: 'media',
    tier: 2,
    tags: ['filmmaker', 'USS Omaha', 'USS Russell', 'footage', 'Pentagon'],
  },

  {
    id: 'fox',
    terme: `James Fox`,
    definition: `American documentary filmmaker; director of The Phenomenon (2020) — widely considered the most credible mainstream UAP documentary produced to date — and Moment of Contact (2022), documenting the Varginha, Brazil incident with military and medical witnesses. The Phenomenon features on-the-record testimony from former government officials including John Podesta, Fife Symington (Governor of Arizona during the Phoenix Lights), and international military figures. Fox's approach of using credentialed institutional sources rather than conspiracy-oriented framing distinguishes his work from most UAP documentary production.`,
    categorie: 'media',
    tier: 2,
    tags: ['documentary', 'The Phenomenon', 'Varginha', 'institutional witnesses'],
  },

  // ─── KEY CASES ───────────────────────────────────────────

  {
    id: 'nimitz',
    terme: `USS Nimitz Encounter (2004)`,
    definition: `The most extensively documented military UAP incident in U.S. history. In November 2004 off the California coast, USS Princeton's AN/SPY-1 radar tracked multiple objects descending from 80,000 feet to hovering at 50 feet in seconds. Commander David Fravor and Lt. Cmdr. Jim Slaight intercepted a white, oblong, wingless craft ("Tic-Tac") exhibiting impossible accelerations. The encounter was captured on the FLIR1 video. The FLIR1 video was declassified by the Pentagon in April 2020 "to clear up any misconception on whether the footage was real." AARO classifies this case as unresolved.`,
    categorie: 'historique',
    tier: 1,
    tags: ['Navy', 'Fravor', 'Tic-Tac', 'FLIR1', '2004', 'declassified'],
  },

  {
    id: 'gimbal-gofast',
    terme: `Gimbal and GoFast Videos (2015)`,
    definition: `Two of three declassified Pentagon UAP videos (alongside FLIR1). Filmed by USS Theodore Roosevelt strike group F/A-18 pilots in 2014–2015 off the U.S. East Coast. Gimbal shows an oval object performing an inexplicable rotation against wind direction, with no thermal propulsion signature. GoFast shows an object traveling at extremely low altitude at speed inconsistent with its apparent size. Ryan Graves reported his squadron encountered similar objects "every day for at least a couple years." Both videos were officially released April 27, 2020 with Pentagon authentication.`,
    categorie: 'historique',
    tier: 1,
    tags: ['Navy', 'Roosevelt', 'Graves', 'declassified', 'Pentagon', '2020'],
  },

  {
    id: 'rendlesham',
    terme: `Rendlesham Forest Incident (1980)`,
    definition: `A series of reported sightings of unexplained lights over three nights in late December 1980 near RAF Woodbridge and RAF Bentwaters (U.S. Air Force bases) in Suffolk, England. U.S. Air Force Lt. Col. Charles Halt filed an official memorandum to the British Ministry of Defence documenting physical trace evidence: broken branches, radiation readings 10 times higher than background, and craft descriptions from multiple security personnel. The UK MOD's response: "no defence significance." Often called "Britain's Roswell." Halt later publicly stated the events were not adequately investigated.`,
    categorie: 'historique',
    tier: 2,
    tags: ['UK', 'USAF', 'RAF', 'Cold War', 'physical evidence', '1980'],
  },

  {
    id: 'phoenix-lights',
    terme: `Phoenix Lights (1997)`,
    definition: `Mass UFO sighting event on March 13, 1997 over Arizona and Nevada, witnessed by thousands including Arizona Governor Fife Symington. Two distinct events: a triangular formation of lights traveling slowly across the state, and separate stationary lights over Phoenix. The USAF attributed the latter to A-10 flares. Symington initially held a press conference mocking the event; he later confirmed seeing an unexplained structured craft and called it "otherworldly." The Phoenix Lights remain one of the most witnessed UAP events in North American history and were featured in James Fox's The Phenomenon.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Arizona', 'mass sighting', 'Symington', '1997'],
  },

  {
    id: 'belgian-wave',
    terme: `Belgian UFO Wave (1989–1990)`,
    definition: `Prolonged series of UAP sightings across Belgium involving thousands of civilian witnesses and Belgian Air Force radar tracking. The Belgian Air Force scrambled F-16 fighters on multiple occasions. A triangular craft with lights at each corner was reported by gendarmes (police), military, and civilians simultaneously. The Belgian Air Force published official records acknowledging the encounters and their inability to identify the objects. Chief of Staff Gen. Wilfried De Brouwer personally acknowledged the reality of the phenomena in official statements. One of the best-documented mass military UAP events in European history.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Belgium', 'Air Force', 'F-16', 'Europe', 'mass sighting', '1989'],
  },

  {
    id: 'roswell',
    terme: `Roswell Incident (1947)`,
    definition: `The foundational event of modern UAP culture. In July 1947, an object crashed on a ranch near Roswell, New Mexico. The USAAF initially announced recovery of a "flying disc," then retracted and claimed it was a weather balloon. The 1994 USAF report attributed it to Project Mogul balloon debris; a 1997 supplementary report attributed "bodies" to crash test dummies. Multiple witnesses over decades maintained accounts inconsistent with these explanations. Roswell established the template for government denial and cover-up allegations that defined the next 70 years of UAP discourse. Institutionally, it remains formally explained; culturally and investigatively, contested.`,
    categorie: 'historique',
    tier: 2,
    tags: ['1947', 'USAAF', 'New Mexico', 'crash', 'cover-up'],
  },

  // ─── LEGAL & POLICY ──────────────────────────────────────

  {
    id: 'uap-disclosure-act',
    terme: `UAP Disclosure Act`,
    definition: `Bipartisan U.S. legislation proposed by Senators Chuck Schumer (D-NY) and Mike Rounds (R-SD) in 2023, modeled on the JFK Records Act. Would require all government UAP records to be reviewed and released within 25 years, with a presidentially appointed Review Board. A version was incorporated into NDAA 2024 but with expanded executive veto powers. The act was subsequently blocked from NDAA FY2025 and FY2026 — three consecutive years of DoD opposition. The PURSUE executive order in 2026 can be seen as a partial executive bypass of the failed legislative route.`,
    categorie: 'juridique',
    tier: 1,
    tags: ['Schumer', 'Rounds', 'Congress', 'legislation', 'declassification', 'NDAA'],
  },

  {
    id: 'foia',
    terme: `Freedom of Information Act`,
    acronyme: 'FOIA',
    definition: `U.S. federal law (5 U.S.C. § 552) enabling any person to request access to federal agency records. Nine exemptions exist, including national security (b1), internal agency rules (b2), and trade secrets (b4). UAP researchers have used FOIA to recover thousands of documents from AARO, DIA, CIA, NSA, and FBI. The Black Vault (John Greenewald Jr.) has filed thousands of FOIA requests specific to UAP. Key limitation: classified SAP materials can be entirely withheld under b1 exemption. The FOIA process is a critical tool for independent verification of institutional UAP claims.`,
    categorie: 'juridique',
    tier: 1,
    tags: ['transparency', 'documents', 'government', 'research', 'Black Vault'],
  },

  {
    id: 'whistleblower-protection',
    terme: `Intelligence Community Whistleblower Protection Act`,
    acronyme: 'ICWPA',
    definition: `U.S. law protecting federal employees and contractors who report "urgent concerns" to the Intelligence Community Inspector General (ICIG). The Grusch complaint was filed under this act. Protection covers retaliation, employment consequences, and criminal prosecution for the disclosure itself (to the ICIG, not to the public). Key limitation: protection applies to reporting through official channels (ICIG → congressional intelligence committees) — NOT to public disclosure. Grusch obtained additional protections through congressional notification procedures before going public. This legal architecture is why structured IG complaints preceded public congressional testimony.`,
    categorie: 'juridique',
    tier: 1,
    tags: ['Grusch', 'ICIG', 'Congress', 'legal protection', 'classified'],
  },

  // ─── SCIENCE ─────────────────────────────────────────────

  {
    id: 'oumuamua',
    terme: `'Oumuamua`,
    definition: `The first interstellar object confirmed to have passed through the solar system, detected October 2017. Exhibited non-gravitational acceleration (speeding up while leaving the solar system) with no detectable outgassing consistent with a comet. Its shape was elongated beyond any known natural object. Harvard professor Avi Loeb proposed an artificial origin in his analysis, citing the unexplained acceleration as potentially consistent with a light sail. The mainstream scientific consensus remains "natural but unusual." Named from Hawaiian: "scout" or "messenger." Its passage occurred two months before the NYT AATIP revelation — the timing is noted by some researchers.`,
    categorie: 'scientifique',
    tier: 1,
    sources: [{ label: 'Loeb, Harvard', url: 'https://www.cfa.harvard.edu' }],
    tags: ['Harvard', 'Loeb', 'interstellar', 'astronomy', 'artificial hypothesis'],
  },

  {
    id: 'fermi-paradox',
    terme: `Fermi Paradox`,
    definition: `The apparent contradiction between high probability estimates for extraterrestrial civilizations existing (based on the scale of the universe and the prevalence of potentially habitable planets) and the complete absence of detectable evidence for such civilizations. Named for physicist Enrico Fermi's 1950 question: "Where is everybody?" In the context of UAP disclosure: if verified NHI testimony is accurate, the Fermi Paradox is partly resolved — intelligence exists but chose not to be broadly detected, or has been suppressed from public awareness. The Drake Equation (1961) quantified the probability framework Fermi intuited.`,
    categorie: 'scientifique',
    tier: 2,
    tags: ['Drake', 'SETI', 'probability', 'astrobiology', 'philosophy'],
  },

  {
    id: 'technosignature',
    terme: `Technosignature`,
    definition: `Observable evidence of technological activity by an intelligent civilization, detectable from a distance. Contrasts with biosignature (biological markers). In the UAP context: the Five Observables (anti-gravity, hypersonic velocity, low observability, transmedium travel, inertia manipulation) could constitute technosignatures if verified. NASA's 2023 UAP study explicitly incorporated technosignature frameworks. The Galileo Project's observation methodology is designed to detect both biosignatures and technosignatures from anomalous objects. The concept bridges SETI (searching elsewhere) and UAP research (studying nearby anomalies).`,
    categorie: 'scientifique',
    tier: 2,
    tags: ['NASA', 'SETI', 'Galileo Project', 'detection', 'intelligence'],
  },

  // ─── CONCEPTUAL FRAMEWORKS ───────────────────────────────

  {
    id: 'eth',
    terme: `Extraterrestrial Hypothesis`,
    acronyme: 'ETH',
    definition: `The hypothesis that UAP of unknown origin represent technology or intelligence from other star systems or planetary bodies. The dominant popular hypothesis and the one implicitly referenced in most congressional disclosure discussions. Not the consensus among serious UAP researchers, who note that interstellar travel timescales and the diversity of reported phenomena complicate a simple ETH explanation. The ETH is a starting hypothesis, not a conclusion. Grusch's testimony does not specify ETH; he used the term "non-human intelligence" deliberately to remain agnostic about origin.`,
    categorie: 'conceptuel',
    tier: 2,
    tags: ['hypothesis', 'extraterrestrial', 'origin', 'Grusch'],
  },

  {
    id: 'idh',
    terme: `Interdimensional Hypothesis`,
    acronyme: 'IDH',
    definition: `Alternative hypothesis to ETH proposing that UAP represent intelligence from other dimensions, densities, or quantum states of reality rather than other star systems. Associated primarily with Jacques Vallée, who proposed it as better explaining the folkloric continuity of encounter reports across cultures and centuries. The IDH is not scientifically testable in its current form but has gained traction among some physicists exploring higher-dimensional geometry. The "cryptoterrestrial hypothesis" (NHI originated on Earth, hidden) is a related variant. These frameworks remain speculative.`,
    categorie: 'conceptuel',
    tier: 3,
    tags: ['Vallée', 'theoretical', 'hypothesis', 'dimension', 'physics'],
  },

  // ─── DISPUTED / ALLEGED ──────────────────────────────────

  {
    id: 'lazar',
    terme: `Bob Lazar`,
    definition: `American who claimed in 1989 (through journalist George Knapp) to have worked at a classified facility designated "S-4" near Area 51, Nevada, reverse engineering extraterrestrial propulsion systems. His specific technical claims — element 115 as propulsion fuel, nine craft in storage, gravity wave propulsion — were largely considered science fiction at the time. Element 115 (Moscovium) was subsequently synthesized in 2003 and officially named in 2016. Lazar's educational credentials remain disputed. He has never recanted. Jeremy Corbell's documentary Bob Lazar: Area 51 & Flying Saucers (2018) renewed mainstream interest. His claims remain unverified and are disputed by the U.S. government.`,
    categorie: 'conteste',
    tier: 2,
    isDisputed: true,
    disputedNote: `Lazar's claims have never been officially verified. His educational credentials could not be confirmed. Element 115 was subsequently discovered but does not validate his specific propulsion claims. Include as culturally significant and historically influential, not as verified testimony.`,
    tags: ['Area 51', 'element 115', 'alleged', 'reverse engineering', 'unverified', '1989'],
  },

  {
    id: 'wilson-davis',
    terme: `Wilson–Davis Memo`,
    definition: `A document allegedly recording a 2002 conversation between Admiral Thomas Wilson (former DIA director) and Dr. Eric Davis (astrophysicist, then at NIDS) in which Wilson describes being denied access to a private contractor's UAP crash retrieval program despite his senior position. The document surfaced publicly in 2019. Wilson has denied the meeting occurred as described. Davis has neither confirmed nor denied. If authentic, it would represent documentary evidence of a non-governmental crash retrieval program operating outside federal oversight. The document's provenance remains disputed; it has not been verified by any official investigation.`,
    categorie: 'conteste',
    tier: 2,
    isDisputed: true,
    disputedNote: `Authenticity disputed. Thomas Wilson denies the account. Eric Davis has not confirmed publicly. Provenance unverified. Significant if genuine; unverifiable with current evidence.`,
    tags: ['Wilson', 'Davis', 'crash retrieval', 'contractor', 'alleged', 'disputed'],
  },

  {
    id: 'immaculate-constellation',
    terme: `Immaculate Constellation`,
    definition: `Alleged classified UAP surveillance program named in protected disclosures filed with the ICIG, referenced in reporting by journalists including Matthew Phelan and subsequently in congressional contexts. Allegedly collects imagery and data on UAP from classified orbital and airborne platforms. Has not been officially acknowledged. Named alongside other alleged program structures in unverified claims.`,
    categorie: 'conteste',
    tier: 3,
    isDisputed: true,
    disputedNote: `Named in protected disclosures to the ICIG. Not officially acknowledged. Cannot be independently verified. Listed for completeness; treat as alleged until confirmed.`,
    tags: ['alleged', 'surveillance', 'classified', 'ICIG', 'unverified'],
  },

  // ─── INTERNATIONAL ───────────────────────────────────────

  {
    id: 'cometa',
    terme: `COMETA Report`,
    definition: `A 1999 French study on UFOs, produced by COMETA (Comité d'études approfondies), a private association of high-ranking French military officers, scientists, and officials. Titled "UFOs and Defense: What Should We Prepare For?" the report concluded that the extraterrestrial hypothesis was the most scientifically plausible explanation for a subset of documented cases. It recommended France engage NATO and the UN on the subject. While not an official government report, its authors' institutional credentials (generals, aerospace engineers, former DGA officials) gave it significant weight and it remains a reference in the French UAP research community.`,
    categorie: 'historique',
    tier: 2,
    tags: ['France', 'military', 'ETH', '1999', 'NATO'],
  },

  {
    id: 'cefaa',
    terme: `CEFAA`,
    definition: `Committee for the Studies of Anomalous Aerial Phenomena — Chile's official civilian government UAP investigation body, operating under the Civil Aeronautics Directorate (DGAC). One of the most active and transparent official UAP programs globally. In 2014, released a 9-minute infrared video of an unknown object recorded by a Chilean Navy helicopter that stumped military analysts for two years. CEFAA published full investigation details publicly. Chile's approach — official acknowledgment, systematic investigation, transparent reporting — is often cited as the international gold standard.`,
    categorie: 'institutionnel',
    tier: 2,
    sources: [{ label: 'CEFAA', url: 'http://www.dgac.gob.cl' }],
    tags: ['Chile', 'official', 'Navy', 'infrared', 'international'],
  },

  // ─── PROGRAMS & HISTORICAL ───────────────────────────────

  {
    id: 'project-blue-book',
    terme: `Project Blue Book`,
    definition: `The U.S. Air Force's third and final official UFO study program (1952–1969), following Projects Sign (1948) and Grudge (1949). Investigated 12,618 reported sightings; 701 remained "unidentified" after analysis. Led from 1966 by J. Allen Hynek as scientific consultant. The project was terminated following the 1968 Condon Report, which concluded further scientific study was unwarranted. Critics, including Hynek himself, noted the program's primary purpose was public relations rather than genuine scientific inquiry, and that the most compelling cases were often classified before reaching Blue Book analysts. All Blue Book files were declassified in 1976.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Air Force', 'Hynek', '1952', 'historical', 'classification'],
  },

  {
    id: 'baass-nids',
    terme: `BAASS / NIDS`,
    definition: `Bigelow Aerospace Advanced Space Studies (BAASS) and its predecessor the National Institute for Discovery Science (NIDS), both funded by aerospace entrepreneur Robert Bigelow. NIDS (1995–2004) conducted private UAP and anomalous phenomena research, including Skinwalker Ranch. BAASS was the primary contractor for the DIA's AAWSAP program (2008–2012), receiving the bulk of AATIP's $22 million. BAASS researchers produced a classified library of reports on UAP propulsion, materials, and biological effects. The reports are now held by the U.S. government; their full release is a congressional demand.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Bigelow', 'contractor', 'AAWSAP', 'DIA', 'private research'],
  },


  // ─── BATCH 2: KEY FIGURES (LEGISLATORS & ADVOCATES) ────

  {
    id: 'schumer',
    terme: `Senator Chuck Schumer`,
    definition: `U.S. Senate Majority Leader (D-NY); primary legislative architect of the UAP Disclosure Act, co-introduced with Senator Mike Rounds in 2023. Schumer explicitly modeled the act on the JFK Records Act and stated publicly that UAP programs have been "hidden from Congress" in violation of oversight obligations. His political weight behind UAP legislation represented a major institutional shift — the subject moved from fringe committees to Senate leadership. The UAPDA's repeated blocking despite his sponsorship illustrates the degree of executive resistance.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['Senate', 'UAPDA', 'legislation', 'disclosure', 'Democrat'],
  },

  {
    id: 'rounds',
    terme: `Senator Mike Rounds`,
    definition: `U.S. Senator (R-SD); co-author with Schumer of the UAP Disclosure Act (2023). Member of the Senate Armed Services Committee. His bipartisan sponsorship of UAPDA was significant — it prevented the legislation from being dismissed as a partisan issue. Rounds has stated he was briefed in classified settings and believes the UAP phenomenon warrants serious government attention. His continued advocacy following UAPDA's repeated blocking signals sustained Republican-side institutional concern.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['Senate', 'UAPDA', 'Republican', 'bipartisan', 'Armed Services'],
  },

  {
    id: 'burchett',
    terme: `Representative Tim Burchett`,
    definition: `U.S. Congressman (R-TN); the most vocal House member demanding UAP transparency. Organized the July 2023 House Oversight hearing featuring Grusch, Graves, and Fravor. Has conducted multiple interviews with UAP witnesses and pushed for unclassified briefings to all members of Congress rather than only select committee members. Burchett's approach has been combative with DoD — he publicly accused Pentagon officials of stonewalling Congress and lying in testimony. A central figure in the House UAP Caucus.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['House', 'Republican', 'Oversight', '2023 hearing', 'UAP Caucus'],
  },

  {
    id: 'luna',
    terme: `Representative Anna Paulina Luna`,
    definition: `U.S. Congresswoman (R-FL); co-chair of the House UAP Caucus alongside Jared Moskowitz. One of the primary organizers of the 2023 congressional UAP hearings. Has pushed for a formal investigation into alleged government secrecy, including subpoena authority over classified programs. Luna has stated publicly she believes the government is hiding information from Congress and supports full declassification. Her combative posture toward Pentagon officials on UAP has been consistent across multiple hearings.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['House', 'Republican', 'UAP Caucus', 'Florida', 'transparency'],
  },

  {
    id: 'moskowitz',
    terme: `Representative Jared Moskowitz`,
    definition: `U.S. Congressman (D-FL); co-chair of the House UAP Caucus alongside Anna Paulina Luna. Provides the Democratic co-leadership of the bipartisan UAP Caucus in the House. Has questioned DoD witnesses on UAP in multiple hearings and supported the legislative effort for greater transparency. His involvement ensures the UAP issue maintains bipartisan framing in the House, making it harder for either party to dismiss as politically motivated.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['House', 'Democrat', 'UAP Caucus', 'Florida', 'bipartisan'],
  },

  {
    id: 'podesta',
    terme: `John Podesta`,
    definition: `Former White House Chief of Staff (Clinton), former Counselor to President Obama, former Biden campaign chair, and former U.S. Special Presidential Envoy for Climate. Has publicly stated his interest in UAP transparency and regrets not having declassified UAP files during his government service. Appeared in James Fox's The Phenomenon. His repeated engagement with the UAP subject across decades of senior government service signals the issue's persistence at the highest levels of Democratic politics. In 2014, tweeted that his "biggest failure" was not achieving UFO disclosure.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['Clinton', 'Obama', 'White House', 'disclosure', 'Democrat', 'Fox'],
  },

  {
    id: 'bigelow',
    terme: `Robert Bigelow`,
    definition: `American aerospace entrepreneur; founder of Bigelow Aerospace, Budget Suites of America. Funded the National Institute for Discovery Science (NIDS, 1995–2004) and Bigelow Aerospace Advanced Space Studies (BAASS), the contractor that received the DIA's AAWSAP program. Bigelow purchased Skinwalker Ranch in 1996 for paranormal research. In a 2017 60 Minutes interview, stated: "I'm absolutely convinced. That's all there is to it." His private funding of institutional UAP research predated government programs by decades. His properties and research archives contain potentially significant unreleased data.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['BAASS', 'NIDS', 'AAWSAP', 'Skinwalker', 'private research'],
  },

  {
    id: 'reid',
    terme: `Senator Harry Reid`,
    definition: `Former U.S. Senate Majority Leader (D-NV, 1987–2021). Secured the $22 million in classified funding for AATIP in 2007, working with Senators Ted Stevens (R-AK) and Daniel Inouye (D-HI). Reid was a close friend of Robert Bigelow and had a longstanding personal interest in UAP. Shortly before his death in December 2021, Reid stated: "I was told for decades that Lockheed had some of these retrieved materials" — a claim he said he could not verify. He consistently advocated for scientific investigation and congressional oversight of UAP programs.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['Senate', 'AATIP', 'Nevada', 'Bigelow', 'Democrat', 'deceased'],
  },

  {
    id: 'blumenthal-cooper',
    terme: `Ralph Blumenthal & Helene Cooper`,
    definition: `New York Times journalists who, with Leslie Kean, co-authored the December 16, 2017 investigation revealing AATIP and publishing the first Pentagon-authenticated UAP videos. Blumenthal was a veteran investigative journalist who covered the story for years before publication. Cooper is a national security correspondent. Their institutional credibility as NYT bylines was essential in legitimizing the story — the same information from a less credible outlet might not have triggered the same governmental and cultural response. The article is widely considered the starting gun of the modern disclosure era.`,
    categorie: 'media',
    tier: 1,
    tags: ['NYT', 'AATIP', '2017', 'journalism', 'disclosure', 'Kean'],
  },

  {
    id: 'war-zone',
    terme: `The War Zone`,
    definition: `Defense and aerospace analysis publication (part of The Drive media group), edited by Tyler Rogoway. Consistently the most technically rigorous media outlet covering UAP from an aerospace and national security perspective. First outlet to extensively analyze the declassified Navy UAP videos from a sensor and engineering standpoint. Has obtained multiple FOIA documents before official releases. The War Zone is the reference outlet for defense professionals seeking technically grounded UAP analysis, distinct from more advocacy-oriented UAP media.`,
    categorie: 'media',
    tier: 1,
    sources: [{ label: 'The War Zone', url: 'https://www.thedrive.com/the-war-zone' }],
    tags: ['journalism', 'defense', 'FOIA', 'analysis', 'Navy', 'sensors'],
  },

  {
    id: 'debrief',
    terme: `The Debrief`,
    definition: `American independent media outlet covering national security, intelligence, and advanced technology, co-founded by journalist Marik von Rennenkampff. Broke major UAP stories including aspects of the Grusch disclosure ecosystem and the Immaculate Constellation reporting. The Debrief has cultivated sources within the intelligence community and has published stories subsequently corroborated by congressional testimony. Occupies a space between mainstream journalism and specialized UAP reporting, with emphasis on institutional sourcing over speculation.`,
    categorie: 'media',
    tier: 2,
    sources: [{ label: 'The Debrief', url: 'https://thedebrief.org' }],
    tags: ['journalism', 'intelligence', 'Grusch', 'national security', 'institutional'],
  },

  // ─── INTELLIGENCE ARCHITECTURE ───────────────────────────

  {
    id: 'usap',
    terme: `Unacknowledged Special Access Program`,
    acronyme: 'USAP',
    definition: `The most sensitive tier of U.S. classified programs. A USAP does not have to be reported to Congress under standard oversight procedures — program existence itself is classified. Personnel assigned to USAPs are not permitted to confirm or deny program existence even to members of Congress who lack specific authorization. Grusch's core allegation is that UAP crash retrieval programs operate as USAPs, outside the congressional awareness that normal SAPs would require. If accurate, this structure would legally prevent congressional oversight — which Schumer's UAPDA was designed to pierce.`,
    categorie: 'juridique',
    tier: 1,
    tags: ['SAP', 'classification', 'Congress', 'oversight', 'Grusch', 'secrecy'],
  },

  {
    id: 'icig',
    terme: `Intelligence Community Inspector General`,
    acronyme: 'ICIG',
    definition: `Presidentially appointed inspector general who oversees the 18 agencies of the U.S. Intelligence Community. The ICIG's office is the legally designated channel for intelligence community whistleblower complaints under the ICWPA. Grusch filed his complaint with the ICIG before going public — a legally required step. The ICIG determined his complaint was "credible and urgent" in classified findings, triggering mandatory congressional notification. The ICIG process provides legal protection to filers and is the primary mechanism for structured UAP disclosure through official channels.`,
    categorie: 'juridique',
    tier: 1,
    tags: ['whistleblower', 'Grusch', 'oversight', 'classified', 'Congress', 'legal'],
  },

  {
    id: 'scif',
    terme: `Sensitive Compartmented Information Facility`,
    acronyme: 'SCIF',
    definition: `A specially accredited room or facility used to process, store, and discuss classified information above Secret level. Designed to prevent electronic eavesdropping and unauthorized access. Congressional UAP briefings occur in SCIFs — which means members present cannot take notes out, discuss content with uncleared staff, or speak publicly about what they heard. This structure is one reason why congressional members who receive UAP briefings often cannot explain publicly why they are concerned. Multiple senators and representatives have stated that what they heard in SCIF briefings motivated their UAP legislative activity.`,
    categorie: 'juridique',
    tier: 2,
    tags: ['classification', 'Congress', 'briefings', 'security', 'oversight'],
  },

  {
    id: 'dia',
    terme: `Defense Intelligence Agency`,
    acronyme: 'DIA',
    definition: `U.S. combat support agency responsible for military intelligence. The DIA administered AATIP/AAWSAP funding and contracted BAASS. Has produced classified assessments of UAP encounters going back decades. Several key figures in the UAP ecosystem (Elizondo, Stratton, Eric Davis) have DIA connections. The DIA's role in managing classified UAP-related research makes it a central node in the institutional secrecy architecture. Multiple FOIA requests to the DIA on UAP have produced partially redacted documents confirming interest in UAP propulsion and materials.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Pentagon', 'intelligence', 'AATIP', 'AAWSAP', 'classified'],
  },

  {
    id: 'nro',
    terme: `National Reconnaissance Office`,
    acronyme: 'NRO',
    definition: `U.S. intelligence agency responsible for designing, building, launching, and maintaining America's intelligence satellites. Manages the most capable space-based intelligence collection systems in the world. Jay Stratton directed an NRO UAP analysis cell before leading the UAPTF. The NRO's relevance to UAP: its assets (imagery satellites, signals collection platforms) are among the sensors most capable of tracking anomalous objects in near-space. NRO involvement in UAP analysis is referenced in protected disclosures but not officially confirmed.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['satellites', 'space', 'intelligence', 'Stratton', 'classified'],
  },

  {
    id: 'nga',
    terme: `National Geospatial-Intelligence Agency`,
    acronyme: 'NGA',
    definition: `U.S. intelligence agency producing geospatial intelligence from imagery and geospatial data. David Grusch worked at the NGA before his AARO assignment. The NGA's imagery analysis capabilities — processing satellite and aerial imagery — are directly relevant to UAP analysis. Grusch's NGA background gave him access to geospatial data about specific locations relevant to his crash retrieval claims. The NGA is one of the agencies that contributed to AARO's analytical resources.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Grusch', 'imagery', 'intelligence', 'geospatial', 'satellite'],
  },

  // ─── MORE HISTORICAL CASES ───────────────────────────────

  {
    id: 'washington-1952',
    terme: `Washington D.C. UFO Incident (1952)`,
    definition: `A series of UAP detections over restricted airspace above Washington D.C. in July 1952, tracked simultaneously on radar at Washington National Airport (now Reagan) and Andrews Air Force Base. F-94 interceptors were scrambled multiple times. The event triggered the largest Pentagon press conference since WWII, led by Air Force General John Samford. The official explanation — temperature inversion causing radar anomalies — was contested by Air Force and CAA radar operators. This remains the most significant UAP event over the U.S. capital and directly influenced the CIA's Robertson Panel (1953) to recommend UAP debunking.`,
    categorie: 'historique',
    tier: 2,
    tags: ['USAF', 'radar', 'Washington', '1952', 'CIA', 'Robertson Panel'],
  },

  {
    id: 'tehran-1976',
    terme: `Tehran UAP Incident (1976)`,
    definition: `A documented military UAP encounter on September 19, 1976 over Tehran, Iran, involving two Imperial Iranian Air Force F-4 Phantom jets scrambled to intercept a highly luminous object. Both aircraft experienced instrumentation failures when attempting to fire missiles — weapons systems failed to engage as the aircraft approached. A U.S. Defense Intelligence Agency report on the incident, subsequently declassified via FOIA, described it as "an outstanding report" with "all the elements necessary for a valid study of the UFO phenomenon." The DIA documentation makes this one of the most officially validated military UAP encounters on record.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Iran', 'IIAF', 'F-4', 'DIA', 'FOIA', '1976', 'weapons failure'],
  },

  {
    id: 'varginha',
    terme: `Varginha Incident (1996)`,
    definition: `A series of events in January 1996 in Varginha, Minas Gerais, Brazil, in which multiple civilian witnesses reported seeing a creature with large red eyes and oily brownish skin in distress in a park. Brazilian military and fire brigade reportedly captured or recovered entities. Witnesses include nurses from a local hospital who reportedly encountered a creature. The Brazilian Army's 6th Military Fire Department has never officially acknowledged involvement. James Fox documented the case extensively in Moment of Contact (2022), including on-the-record military witnesses who broke their silence. Widely considered the most significant alleged NHI biological encounter in South American history.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Brazil', 'biologics', 'Fox', 'military', 'witnesses', '1996'],
  },

  {
    id: 'uss-omaha',
    terme: `USS Omaha Sphere Incident (2019)`,
    definition: `UAP encounter involving the USS Omaha (LCS-12) in which a spherical object was observed and filmed by the ship's electro-optical/infrared sensors flying around the vessel before entering the ocean. The video was released by Jeremy Corbell in 2021 and subsequently authenticated by the U.S. Navy and Pentagon. The object's entry into the ocean without splash, at speed, is a documented example of transmedium behavior. AARO classified this as an active unresolved case. Combined with the USS Russell "pyramid UAP" incident from the same period, these 2019 encounters represent the most recent confirmed military UAP video evidence.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Navy', 'transmedium', 'Corbell', 'sphere', '2019', 'authenticated'],
  },

  {
    id: 'skinwalker',
    terme: `Skinwalker Ranch`,
    definition: `A 512-acre property in the Uinta Basin, Utah, with a documented history of anomalous phenomena reports including UAP sightings, cattle mutilations, poltergeist-like activity, and unusual electromagnetic effects. Purchased by Robert Bigelow in 1996 for NIDS research. Subsequently became the primary research site for AAWSAP/BAASS during the DIA contract period. Colm Kelleher (NIDS senior scientist) and George Knapp documented research in Hunt for the Skinwalker (2005). Now owned by Brandon Fugal and the subject of a History Channel documentary series. The ranch's connection to AAWSAP means government-funded research occurred there — the scope and findings remain classified.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Bigelow', 'NIDS', 'AAWSAP', 'Utah', 'anomalous phenomena', 'BAASS'],
  },

  // ─── PROGRAMS (ALLEGED & HISTORICAL) ─────────────────────

  {
    id: 'project-sign-grudge',
    terme: `Projects Sign & Grudge (1948–1952)`,
    definition: `The first two official U.S. Air Force UFO investigation programs, preceding Project Blue Book. Project Sign (1948) produced the classified "Estimate of the Situation" concluding that many UAP were likely interplanetary craft — a conclusion immediately rejected by Air Force Chief of Staff Gen. Hoyt Vandenberg, who ordered the document burned. Project Grudge (1949–1951) replaced Sign with an explicitly debunking mandate. The destruction of Sign's key document is cited by researchers as evidence that early conclusions were suppressed rather than refuted. Both projects' existence and some findings were declassified post-Blue Book.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Air Force', 'historical', 'classified', '1948', 'Vandenberg', 'burned'],
  },

  {
    id: 'project-moon-dust',
    terme: `Project Moon Dust`,
    definition: `Declassified (via FOIA) U.S. Air Force Cold War program tasked with recovering foreign space debris and objects of unknown origin that landed on foreign territory, collecting intelligence before the Soviets could. Moon Dust teams were deployed globally. FOIA documents confirm the program collected and analyzed material from UAP-related crash sites on at least one occasion (Bolivia, 1978). The program demonstrates that a formal U.S. government "crash recovery" infrastructure existed independent of UFO-specific programs — a fact relevant to Grusch's crash retrieval allegations.`,
    categorie: 'historique',
    tier: 3,
    tags: ['Air Force', 'Cold War', 'FOIA', 'recovery', 'foreign material', 'declassified'],
  },

  {
    id: 'mj-12',
    terme: `Majestic-12 (MJ-12)`,
    definition: `A set of documents surfacing in the mid-1980s purporting to describe a secret U.S. government committee established by President Truman in 1947 to investigate and manage UAP crash retrieval, including Roswell. The FBI and most serious researchers consider the documents to be forgeries — the FBI's internal 1988 investigation concluded they were fabricated. No independent provenance has been established. MJ-12 documents are cited here for completeness: they significantly shaped 1980s–1990s UAP discourse and disinformation debates. They should not be used as evidence of government programs.`,
    categorie: 'conteste',
    tier: 3,
    isDisputed: true,
    disputedNote: `FBI concluded these are forgeries (1988). No independent verification exists. Listed for historical completeness only. Do not cite as evidence.`,
    tags: ['alleged', 'forged', 'FBI', 'Roswell', 'disinformation', 'disputed'],
  },

  {
    id: 'to-the-stars',
    terme: `To The Stars Academy`,
    definition: `A U.S. public benefit corporation founded in 2017 by musician Tom DeLonge with Luis Elizondo, former CIA officer Jim Semivan, and aerospace engineer Steve Justice. Acted as a vehicle for releasing declassified UAP materials (including facilitating the NYT 2017 story) and conducting research. To The Stars licensed the UAP video footage that was later officially authenticated by the Pentagon. Controversial in the UAP community for its mixed commercial-research model. Effectively wound down its active operations by 2021 but served as the primary vehicle for institutionalizing the 2017 disclosure moment.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Elizondo', 'DeLonge', 'CIA', '2017', 'declassification', 'media'],
  },

  // ─── SCIENTIFIC & TECHNICAL ──────────────────────────────

  {
    id: 'metamaterials',
    terme: `Metamaterials (UAP context)`,
    definition: `Engineered composite materials with electromagnetic properties not found in nature, designed at sub-wavelength scale to achieve effects like negative refraction, near-zero permeability, or cloaking properties. In the UAP context: multiple witnesses including Elizondo and Eric Davis have referenced alleged recovered materials with isotopic ratios and layered structures inconsistent with known manufacturing processes. Garry Nolan has analyzed alleged UAP-related material samples. The Defense Intelligence Agency commissioned a 2009 study on metamaterials specifically in the context of UAP propulsion hypotheses. Confirmed metamaterials exist as an engineering field; alleged recovered UAP metamaterials are unverified.`,
    categorie: 'technologie',
    tier: 2,
    tags: ['DIA', 'Nolan', 'materials', 'propulsion', 'engineering', 'isotopic'],
  },

  {
    id: 'biologics',
    terme: `Biological Materials (UAP context)`,
    definition: `In UAP disclosure testimony, refers to alleged organic or biological matter recovered alongside non-human craft. David Grusch testified under oath: "Biologics came with some of these recoveries, yeah" in response to Rep. Nancy Mace's question "Were they human or non-human?" — Grusch: "Non-human... that was the assessment of people with direct knowledge of the program." This exchange represents the most explicit public congressional testimony about alleged non-human biological recovery. The claims are disputed by the DoD and AARO. No physical evidence has been presented publicly.`,
    categorie: 'phenomenologie',
    tier: 1,
    isDisputed: true,
    disputedNote: `Based solely on Grusch's sworn testimony citing second-hand accounts from other witnesses. No physical evidence presented publicly. DoD denies the claims.`,
    tags: ['Grusch', 'sworn testimony', 'Congress', 'alleged', 'non-human', '2023'],
  },

  {
    id: 'nolan-brain-study',
    terme: `Nolan Brain Study`,
    definition: `A series of peer-reviewed neurological studies by Dr. Garry Nolan (Stanford) analyzing MRI brain scans of individuals reporting close-range UAP encounters, many referred by U.S. intelligence community members. Published in Entropy (2023) and other journals. Key finding: some subjects showed structural changes in the caudate-putamen region of the brain, an area associated with pattern recognition, intuition, and information processing. Subjects with these anomalies included military intelligence officers. Nolan has stated the changes appear consistent across a population of witnesses. The study does not prove UAP causation but identifies a physiological correlate worth scientific investigation.`,
    categorie: 'scientifique',
    tier: 2,
    sources: [{ label: 'Stanford Medicine', url: 'https://med.stanford.edu' }],
    tags: ['Nolan', 'Stanford', 'peer-reviewed', 'neurology', 'MRI', 'brain', 'witnesses'],
  },

  {
    id: 'cryptoterrestrial',
    terme: `Cryptoterrestrial Hypothesis`,
    definition: `A hypothesis proposing that UAP and alleged NHI have terrestrial rather than extraterrestrial origins — representing a hidden civilization on Earth, potentially underground, underwater, or in isolated regions. First formally articulated as an academic hypothesis in a 2024 paper by scholar Michael P. Masters. Variants include: (1) remnant ancient human civilization, (2) parallel evolutionary branch, (3) far-future humans navigating time. The hypothesis attempts to explain why detected NHI behavior appears familiar with Earth geography and biology. It remains highly speculative with no empirical support but is gaining traction as a serious alternative framing among some researchers.`,
    categorie: 'conceptuel',
    tier: 3,
    tags: ['hypothesis', 'terrestrial', 'alternative', 'Masters', 'speculative'],
  },

  {
    id: 'sixth-observable',
    terme: `Sixth Observable — Biological Effects`,
    definition: `An extension of Elizondo's Five Observables framework, proposed by multiple researchers and referenced in DIA-commissioned studies. Refers to documented physiological effects on human witnesses following close-range UAP encounters: skin burns, eye damage, neurological symptoms, radiation-consistent injuries, and long-term health effects. The 1995 Brazilian Varginha military witnesses reported health deterioration; multiple Nimitz strike group personnel reported anomalous medical symptoms. The DIA's 2009 AAWSAP reports documented biological effects across a database of cases. This observable is rarely discussed publicly due to sensitivity around witness privacy and medical liability.`,
    categorie: 'technologie',
    tier: 2,
    tags: ['Five Observables', 'biological', 'witnesses', 'DIA', 'AAWSAP', 'medical'],
  },

  {
    id: 'americans-safe-aerospace',
    terme: `Americans for Safe Aerospace`,
    acronyme: 'ASA',
    definition: `Non-profit organization founded by Ryan Graves in 2022, dedicated to aerospace safety and UAP transparency advocacy. ASA's primary argument: UAP in restricted military airspace represent an aviation safety hazard regardless of origin, and the stigma around reporting creates dangerous underreporting. ASA has briefed members of Congress, met with FAA officials, and collected testimony from civilian pilots reporting UAP encounters. By framing UAP as a safety issue rather than a metaphysical one, ASA has made significant inroads with safety-focused regulators and legislators who might otherwise be dismissive.`,
    categorie: 'institutionnel',
    tier: 2,
    sources: [{ label: 'ASA', url: 'https://www.americansforsafeaerospace.org' }],
    tags: ['Graves', 'aviation safety', 'FAA', 'Congress', 'non-profit', 'pilots'],
  },

  {
    id: 'uap-caucus',
    terme: `Congressional UAP Caucus`,
    definition: `An informal bipartisan group of U.S. House members organized around UAP transparency, co-chaired by Representatives Anna Paulina Luna (R-FL) and Jared Moskowitz (D-FL). The caucus organizes member briefings, facilitates witness testimony, and coordinates legislative strategy on UAP disclosure. It has provided a formal institutional home for congressional UAP activity beyond the specific committee jurisdictions (Armed Services, Intelligence, Oversight). Similar caucus structures have emerged in the Japanese Diet (80+ members) and are developing in European parliamentary bodies.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Luna', 'Moskowitz', 'Congress', 'House', 'bipartisan', 'transparency'],
  },

  {
    id: 'stigma',
    terme: `UAP Reporting Stigma`,
    definition: `The institutional and cultural disincentive for military personnel, pilots, and government employees to report UAP encounters, driven by fear of professional repercussions, ridicule, mental fitness evaluations, and career impact. The NASA 2023 UAP report identified stigma as the single largest barrier to quality data collection. Ryan Graves testified that Navy pilots routinely do not report encounters to avoid career risk. AARO's classified reporting portal was partially designed to reduce stigma by providing a secure, confidential channel. The persistence of stigma across decades is cited as a key reason why the institutional data gap exists.`,
    categorie: 'conceptuel',
    tier: 1,
    tags: ['NASA', 'Graves', 'Navy', 'pilots', 'culture', 'reporting', 'data gap'],
  },


  // ─── BATCH 3: TECHNICAL, INTERNATIONAL, SCIENCE, SKEPTICAL ──

  // TECHNICAL / SENSOR ──────────────────────────────────────

  {
    id: 'masint',
    terme: `MASINT — Measurement & Signature Intelligence`,
    acronyme: 'MASINT',
    definition: `A technical intelligence discipline that collects and analyzes data from the physical signatures of detected phenomena — radar, acoustic, nuclear, electromagnetic, chemical, and biological signatures. MASINT is particularly relevant to UAP analysis because it captures non-visual data that can characterize objects independently of optical observation. AARO's multi-sensor correlation methodology draws heavily on MASINT. If a UAP is detected simultaneously by radar (MASINT), infrared (EO/IR), and acoustic sensors with anomalous readings across all three, the MASINT profile provides the strongest technical evidence base.`,
    categorie: 'technologie',
    tier: 2,
    tags: ['sensors', 'intelligence', 'radar', 'electromagnetic', 'AARO', 'multi-sensor'],
  },

  {
    id: 'flir',
    terme: `FLIR — Forward Looking Infrared`,
    acronyme: 'FLIR',
    definition: `Imaging technology that detects infrared radiation (heat) rather than visible light, enabling detection and tracking of objects by their thermal signature. All three declassified Pentagon UAP videos (FLIR1/Tic-Tac, Gimbal, GoFast) were captured by AN/ASQ-228 ATFLIR (Advanced Targeting Forward-Looking Infrared) pods carried by F/A-18 Super Hornets. The absence of expected thermal signatures (jet exhaust, heat from friction at high speed) in UAP FLIR footage is one of the core anomalies analysts cannot explain with conventional propulsion hypotheses.`,
    categorie: 'technologie',
    tier: 2,
    tags: ['infrared', 'sensors', 'Navy', 'F-18', 'Tic-Tac', 'Gimbal', 'GoFast'],
  },

  {
    id: 'rcs',
    terme: `Radar Cross-Section`,
    acronyme: 'RCS',
    definition: `A measure of how detectable an object is on radar, expressed in square meters. A stealth aircraft like the B-2 has an RCS roughly equivalent to a golf ball despite its large size. Some UAP tracked by military radar show near-zero RCS — smaller than a bird — while simultaneously demonstrating hypersonic velocities and maneuverability beyond any known aircraft. The combination of low observability (low RCS) with confirmed visual contact, infrared detection, and high-g maneuvers across multiple independent sensor platforms is one of the core multi-sensor anomalies AARO cannot resolve.`,
    categorie: 'technologie',
    tier: 2,
    tags: ['radar', 'stealth', 'sensors', 'anomaly', 'Five Observables', 'detection'],
  },

  {
    id: 'sensor-fusion',
    terme: `Multi-Sensor Correlation / Sensor Fusion`,
    definition: `The process of combining data from multiple independent sensor systems to produce a more accurate and reliable picture of a detected object or event. In UAP analysis, multi-sensor correlation is the gold standard for eliminating sensor artifacts, optical illusions, and misidentification. The Nimitz encounter is notable for being confirmed across radar (SPY-1), visual (pilot), and FLIR simultaneously. AARO's analytic framework explicitly requires multi-sensor confirmation before classifying a case as genuinely anomalous. Cases with single-sensor detection remain in the "sensor artifact" candidate category.`,
    categorie: 'technologie',
    tier: 1,
    tags: ['AARO', 'Nimitz', 'radar', 'FLIR', 'analysis', 'gold standard'],
  },

  {
    id: 'sigint-humint',
    terme: `SIGINT / HUMINT / OSINT`,
    definition: `Three core intelligence collection disciplines relevant to UAP: SIGINT (Signals Intelligence) — collecting electromagnetic emissions from radar, communications, or propulsion; HUMINT (Human Intelligence) — human sources, witnesses, and debriefs; OSINT (Open Source Intelligence) — publicly available documents, satellite imagery, news, and research. The UAP case is unusual in that HUMINT (sworn witnesses, protected disclosures) has driven public understanding while SIGINT data remains classified. The Debrief and The War Zone have practiced systematic OSINT by combining FOIA documents, public radar data, and flight tracking records.`,
    categorie: 'technologie',
    tier: 3,
    tags: ['intelligence', 'collection', 'FOIA', 'witnesses', 'classified'],
  },

  // KEY DOCUMENTS ───────────────────────────────────────────

  {
    id: 'dni-2021-report',
    terme: `ODNI Preliminary UAP Assessment (2021)`,
    definition: `A 9-page unclassified report delivered to Congress in June 2021 by the Office of the Director of National Intelligence — the first official U.S. government UAP assessment made public. Documented 144 cases from U.S. government sources between 2004 and 2021. Key findings: 143 cases unexplained; UAP categorized into 5 possible explanations (airborne clutter, natural phenomena, USG/industry programs, foreign adversaries, "other"); recommends improved data collection and reporting. The report's brevity and hedging were criticized by congressional members who had seen the classified annex.`,
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'ODNI Report', url: 'https://www.dni.gov/files/ODNI/documents/assessments/Prelimary-Assessment-UAP-20210625.pdf' }],
    tags: ['ODNI', 'Congress', '2021', 'official', '144 cases', 'classification'],
  },

  {
    id: 'aaro-historical-report',
    terme: `AARO Historical Record Report Vol. I (2024)`,
    definition: `A congressionally mandated report published by AARO in March 2024, reviewing historical U.S. government involvement with UAP. Key finding: "AARO found no empirical evidence for claims that the U.S. government has, or had, a program focused on the reverse engineering of extraterrestrial materials." The report contested Grusch's allegations and the Wilson-Davis memo. Critically received: multiple sources noted AARO had limited access to the deepest SAP compartments; congressional members with SCIF-briefing access disputed the report's completeness. The report acknowledges program misidentifications and confusion in the record.`,
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'AARO Report', url: 'https://www.aaro.mil/Portals/136/PDFs/AARO_Historical_Record_Report_Vol_1_2024.pdf' }],
    tags: ['AARO', 'Congress', '2024', 'Grusch', 'Wilson-Davis', 'contested'],
  },

  {
    id: 'condon-report',
    terme: `Condon Report (1968)`,
    definition: `A $500,000 USAF-funded scientific study of UAP conducted by the University of Colorado under physicist Edward Condon (1966–1968). Conclusion: further scientific study of UAP would be unlikely to yield scientific discoveries of significance. The conclusion was widely disputed — 30% of the 96 cases studied remained unexplained, and the final report's conclusion contradicted its own data. Internal documents later revealed Condon concluded the project would recommend against UAP study before the study began. Led directly to the closing of Project Blue Book (1969). Often cited as a case study in predetermined scientific conclusions.`,
    categorie: 'historique',
    tier: 2,
    tags: ['USAF', 'Colorado', 'Blue Book', '1968', 'scientific', 'contested'],
  },

  // INTERNATIONAL ───────────────────────────────────────────

  {
    id: 'uk-mod',
    terme: `UK Ministry of Defence UFO Desk`,
    definition: `The British government's official UAP investigation unit, operational from 1950 to 2009 when it was closed due to "lack of evidence of any threat." Received approximately 12,000 reports during its operation. Produced the classified Condign Report (2000), which acknowledged that UAP posed "potential hazard" to aircraft but attributed most sightings to "plasma-related" phenomena. The Condign Report was declassified in 2006. The MOD's 2009 decision to close the desk was made while simultaneously acknowledging that approximately 5% of reports remained unexplained after full investigation.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['UK', 'MOD', 'Condign', 'British', 'declassified', 'historical'],
  },

  {
    id: 'japan-uap',
    terme: `Japan UAP Framework`,
    definition: `A rapidly developing institutional ecosystem. Japan's bipartisan UAP caucus in the Diet reached 80+ members by 2024 under the chairmanship of former Defense Minister Yasukazu Hamada. In March 2026, the caucus formally proposed a dedicated Cabinet Office UAP framework equivalent to AARO, to be placed under the Deputy Chief Cabinet Secretary for Crisis Management — a significant governance escalation. Japan's government confirmed in May 2026 it was analyzing Pentagon PURSUE files relating to UAP near Japan, including two videos from 2024. Japan's Self-Defense Forces established UAP reporting protocols following the U.S. Navy's 2020 guidelines.`,
    categorie: 'institutionnel',
    tier: 1,
    tags: ['Japan', 'Diet', 'Hamada', 'PURSUE', '2026', 'international', 'Cabinet'],
  },

  {
    id: 'brazil-archives',
    terme: `Brazilian Air Force UAP Archives`,
    definition: `Brazil's Air Force (FAB) has one of the most extensive official UAP archive programs outside the U.S. and France. Operation Prato (1977): a classified FAB investigation in the Amazon region documenting mass civilian encounters with aerial phenomena causing injuries. The operation's files were declassified and released in 2004 — one of the most significant government UAP document releases globally. The FAB has held multiple public UAP disclosure sessions and continues to accept and archive UAP reports through its Centro de Investigação e Prevenção de Acidentes Aeronáuticos (CENIPA).`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Brazil', 'Air Force', 'Operation Prato', 'Amazon', 'declassified', 'international'],
  },

  {
    id: 'chile-navy-video',
    terme: `Chilean Navy UAP Video (2014)`,
    definition: `An 9-minute infrared video recorded by a Chilean Navy Airbus Cougar helicopter crew in November 2014 showing an elongated object emitting a plume of material at high altitude. Despite two years of analysis by Chilean military and civilian agencies, the object could not be identified. CEFAA released the full video and investigation report publicly in 2017, representing an extraordinary level of official transparency. The object's behavior — consistent speed, controlled flight, thermal emission pattern — defied explanation as balloon, drone, aircraft, or meteorological phenomenon.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Chile', 'CEFAA', 'Navy', 'infrared', '2014', 'official investigation'],
  },

  {
    id: 'jal-1628',
    terme: `JAL Flight 1628 Incident (1986)`,
    definition: `A Japan Air Lines cargo flight incident on November 17, 1986, over Alaska in which Captain Kenjyu Terauchi and crew observed and tracked anomalous objects for approximately 50 minutes. Terauchi described a massive structured craft, "two times bigger than an aircraft carrier," visible to the naked eye. The encounter was confirmed on FAA and NORAD radar. The FAA's investigation concluded radar contact was genuine but the object remained unidentified. Captain Terauchi was temporarily grounded after going public — a documented case of the career stigma surrounding UAP reporting.`,
    categorie: 'historique',
    tier: 2,
    tags: ['JAL', 'Japan', 'Alaska', 'radar confirmed', 'FAA', 'NORAD', 'stigma', '1986'],
  },

  {
    id: 'aguadilla',
    terme: `Aguadilla Puerto Rico UAP (2013)`,
    definition: `A UAP incident in April 2013 over Rafael Hernández Airport in Aguadilla, Puerto Rico, recorded by U.S. Customs and Border Protection on FLIR video. The object was tracked splitting into two separate objects, one of which entered the ocean. The video was analyzed by a team of physicists and scientists (Scientific Coalition for UAP Studies) who published a detailed technical report. Speed estimated at up to 120 mph; thermal signature inconsistent with any identified aircraft, balloon, or drone. Represents one of the best-documented transmedium UAP cases on FLIR prior to the 2019 Navy incidents.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Puerto Rico', 'CBP', 'FLIR', 'transmedium', '2013', 'scientific analysis'],
  },

  // SCIENTIFIC & SKEPTICAL ──────────────────────────────────

  {
    id: 'seti',
    terme: `SETI — Search for Extraterrestrial Intelligence`,
    definition: `Scientific program using radio telescopes and other instruments to detect electromagnetic signals from extraterrestrial civilizations at interstellar distances. Founded formally with Frank Drake's Project Ozma in 1960. SETI has operated on the assumption that ETI would communicate via detectable signals over astronomical distances. The UAP phenomenon presents a different hypothesis: that ETI or NHI may already be proximate rather than distant. Some SETI researchers including Seth Shostak have acknowledged the UAP phenomenon warrants their attention. The Galileo Project explicitly bridges SETI methodology with near-Earth anomaly detection.`,
    categorie: 'scientifique',
    tier: 2,
    tags: ['Drake', 'radio telescope', 'ETI', 'Galileo Project', 'astronomy', 'signals'],
  },

  {
    id: 'plasma-hypothesis',
    terme: `Atmospheric Plasma Hypothesis`,
    definition: `A skeptical explanatory framework proposing that some UAP are natural or induced plasma formations — ionized gas that can emit light and interact with electromagnetic systems. The UK MOD's Condign Report (2000) concluded that "buoyant plasma formations" of "natural but poorly understood" origin could explain a significant fraction of UAP reports. While plasma phenomena exist (ball lightning, St. Elmo's fire), critics argue the hypothesis cannot explain structured craft observed at close range by multiple independent witnesses simultaneously. The plasma hypothesis is academically legitimate for some UAP categories but over-applied as a catch-all explanation.`,
    categorie: 'conceptuel',
    tier: 2,
    tags: ['skeptical', 'Condign', 'UK MOD', 'ball lightning', 'scientific', 'natural'],
  },

  {
    id: 'ball-lightning',
    terme: `Ball Lightning`,
    definition: `A rare atmospheric electrical phenomenon consisting of a luminous, spherical, floating object that persists for seconds to minutes. Ball lightning is scientifically confirmed to exist but remains poorly understood. It is regularly invoked as a skeptical explanation for luminous UAP, particularly at sea. Limitations of this explanation: ball lightning typically occurs during or after thunderstorms, is short-lived, shows no intelligent movement, cannot be tracked on radar, and cannot explain structured craft observed at distance. Ball lightning is a legitimate atmospheric phenomenon; its use as a UAP catch-all explanation is scientifically contested.`,
    categorie: 'conceptuel',
    tier: 3,
    tags: ['skeptical', 'atmospheric', 'natural', 'lightning', 'scientific', 'debunking'],
  },

  {
    id: 'sensor-artifacts',
    terme: `Sensor Artifacts and Instrument Errors`,
    definition: `A primary skeptical framework for UAP analysis: many apparent anomalies in UAP video footage may be artifacts of sensor limitations, gimbal lock, parallax, atmospheric lensing, or instrument calibration errors rather than genuine physical anomalies. The Gimbal video's object rotation, for example, has been analyzed by some researchers as a FLIR camera gimbal derotation artifact. AARO's analytic protocol explicitly screens for sensor artifacts before classifying a case as genuinely anomalous. The framework is scientifically sound and necessary — and is why multi-sensor correlation is the evidentiary gold standard.`,
    categorie: 'conceptuel',
    tier: 2,
    tags: ['skeptical', 'FLIR', 'Gimbal', 'analysis', 'AARO', 'methodology'],
  },

  {
    id: 'stanton-friedman',
    terme: `Stanton Friedman`,
    definition: `Nuclear physicist and UFO researcher (1934–2019). Worked on classified nuclear projects for companies including GE and Aerojet. Investigated the Roswell incident from the late 1970s and located key witnesses including Jesse Marcel and Vern Walters. Authored multiple books on Roswell and MJ-12. Argued for the extraterrestrial hypothesis from a technical physics background, making him unusual among UAP researchers. One of the first serious scientists to apply professional analytic rigor to UAP cases. Testified before committees and the United Nations. His death in 2019 preceded the major 2023 congressional hearings he had advocated for throughout his career.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['nuclear physicist', 'Roswell', 'ETH', 'historical', 'deceased', '2019'],
  },

  {
    id: 'shellenberger',
    terme: `Michael Shellenberger`,
    definition: `American journalist and author; known for environmental policy work (The Breakthrough Institute) and the Twitter Files reporting. Since 2023, has covered UAP extensively through his Public Substack, breaking stories on the Immaculate Constellation and congressional UAP intelligence battles. His work bridges mainstream political journalism and the UAP ecosystem, bringing a new audience and analytic lens focused on government accountability and information suppression rather than the phenomena themselves. His sourcing within congressional circles has produced several exclusives on the legislative battle over disclosure.`,
    categorie: 'media',
    tier: 2,
    tags: ['journalism', 'Congress', 'Immaculate Constellation', 'Substack', 'accountability'],
  },

  {
    id: 'project-aquarius',
    terme: `Project Aquarius`,
    definition: `An alleged classified U.S. government UAP research program, referenced in documents that surfaced in the 1980s alongside MJ-12 materials. Supposedly managed UAP intelligence collection and crash retrieval analysis. The FBI investigated the documents and found no confirmation of the program's existence. The CIA denied any program by this name. Unlike AATIP (which was confirmed), Project Aquarius remains entirely unverified. It appears in UAP discourse primarily because of Bob Lazar's claims and the MJ-12 document ecosystem. Treat as alleged until independently verified.`,
    categorie: 'conteste',
    tier: 3,
    isDisputed: true,
    disputedNote: `No independent verification. FBI found no confirmation. CIA denied existence. Associated with MJ-12 document ecosystem which the FBI assessed as forged. Do not cite as evidence.`,
    tags: ['alleged', 'FBI', 'CIA', 'unverified', 'disputed', 'Lazar', 'MJ-12'],
  },

  {
    id: 'foreign-material',
    terme: `Foreign Material Exploitation`,
    acronyme: 'FME',
    definition: `A legitimate and well-documented U.S. intelligence program category covering the collection, analysis, and reverse engineering of foreign adversary technology — aircraft, missiles, electronics, materials. The Air Force's Foreign Technology Division (FTD), later the National Air and Space Intelligence Center (NASIC), formally manages FME programs. Grusch's crash retrieval allegations operate within this framework: if UAP materials are recovered, they would logically be processed through or alongside existing FME infrastructure. This connection makes FME programs institutional cover candidates for alleged UAP exploitation. FME itself is not disputed — its alleged UAP application is.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['intelligence', 'reverse engineering', 'Air Force', 'FTD', 'NASIC', 'materials'],
  },

  // CONCEPTUAL ──────────────────────────────────────────────

  {
    id: 'ultra-terrestrial',
    terme: `Ultra-terrestrial Hypothesis`,
    definition: `A hypothesis related to the cryptoterrestrial framework, proposing that UAP represent an intelligence that evolved on Earth long before humans — possibly in deep geological time — and now exists in hidden ecological niches (deep ocean, underground caverns, or as an uploaded/non-biological intelligence). Distinct from the extraterrestrial hypothesis (origin elsewhere) and the interdimensional hypothesis (different dimensional substrate). The ultra-terrestrial hypothesis attempts to explain NHI familiarity with Earth biology and geography. It has no empirical support but has gained attention as a conceptual alternative to the more common ET framing.`,
    categorie: 'conceptuel',
    tier: 3,
    tags: ['hypothesis', 'speculative', 'cryptoterrestrial', 'terrestrial', 'alternative'],
  },

  {
    id: 'disclosure-paradox',
    terme: `Disclosure Paradox`,
    definition: `The contradiction between the strategic imperative to control a paradigm-shattering revelation and the democratic imperative to inform the public. Governments face a structural dilemma: controlled disclosure risks being seen as deception when complete; uncontrolled disclosure risks societal disruption. Col. Karl Nell's controlled vs catastrophic disclosure framework addresses this directly. A second paradox: the longer governments wait, the greater the catastrophic risk when disclosure occurs — but acting requires admitting prior secrecy. LBDG's organizational preparedness approach exists precisely because the paradox implies institutions will be caught unprepared regardless of which path is chosen.`,
    categorie: 'conceptuel',
    tier: 1,
    tags: ['Nell', 'government', 'secrecy', 'democracy', 'LBDG', 'preparedness'],
  },

  {
    id: 'information-asymmetry',
    terme: `Information Asymmetry (UAP)`,
    definition: `The condition in which different actors in the UAP ecosystem have access to fundamentally different quality and quantity of information, creating structural advantage for those with classified access. Government insiders operate with classified data from thousands of military sensor encounters; the public operates on declassified fragments. Congress operates with SCIF briefings but cannot share them. Companies operate with regulated uncertainty. LBDG's business case is grounded in this asymmetry: the institutional preparation window exists precisely because information reaches organizations unevenly and too late for reactive planning.`,
    categorie: 'conceptuel',
    tier: 1,
    tags: ['classified', 'SCIF', 'Congress', 'LBDG', 'strategic', 'business'],
  },

  {
    id: 'drake-equation',
    terme: `Drake Equation`,
    definition: `A probabilistic formula proposed by astronomer Frank Drake in 1961 to estimate the number of active, communicating extraterrestrial civilizations in the Milky Way. Variables include: rate of star formation, fraction with planets, fraction with habitable conditions, fraction developing life/intelligence/technology, and communication longevity. Estimates range from near-zero (Rare Earth hypothesis) to millions of civilizations. The Drake Equation does not directly address UAP but provides the mathematical framework for the prior probability that observed anomalous phenomena could involve non-human intelligence. Recent exoplanet data has made most Drake variables more favorable for extraterrestrial life estimates.`,
    categorie: 'scientifique',
    tier: 2,
    tags: ['SETI', 'probability', 'astronomy', 'ETH', 'Fermi', 'statistics'],
  },

  {
    id: 'anthropocentric-bias',
    terme: `Anthropocentric Bias in UAP Analysis`,
    definition: `The tendency to assume that UAP phenomena, if non-human, would operate according to human logical frameworks — communicating, trading, declaring intent, following recognizable behavioral patterns. Many UAP analytical frameworks implicitly assume human-like agency, motivation, and timescale. Critics argue this bias corrupts analysis: if NHI operates on geological timescales, with motivations incomprehensible to current human cognition, or via physics not yet understood, then human-centric interpretations of UAP behavior are systematically misleading. The NASA 2023 report specifically called for removing anthropocentric assumptions from UAP data analysis frameworks.`,
    categorie: 'conceptuel',
    tier: 2,
    tags: ['NASA', 'analysis', 'methodology', 'cognitive bias', 'philosophy', 'science'],
  },

  {
    id: 'bigot-list',
    terme: `Bigot List`,
    definition: `A classified register of personnel who are authorized access to a specific Special Access Program (SAP). Named from WWII-era practice ("BIGOT" was a reversed stamp on documents going to Gibraltar for the Overlord planning staff). Individuals not on a bigot list cannot be briefed on a SAP regardless of their general security clearance level or seniority. Admiral Thomas Wilson's alleged experience, documented in the disputed Wilson-Davis memo, describes being denied access to a program's bigot list despite his senior rank — illustrating how compartmentalization can wall off even senior officials from specific programs.`,
    categorie: 'juridique',
    tier: 2,
    tags: ['SAP', 'USAP', 'classification', 'Wilson-Davis', 'compartmentalization', 'access'],
  },

  {
    id: 'black-budget',
    terme: `Black Budget`,
    definition: `The classified portion of the U.S. federal budget that funds intelligence community and military programs whose existence or scope is classified. The black budget was officially acknowledged after Edward Snowden's 2013 leaks revealed its scale: approximately $52.6 billion for intelligence programs in FY2013 alone, plus a separate military intelligence black budget. UAP programs like AATIP operated within the black budget. The scale of the black budget — potentially hundreds of billions over decades — makes it structurally plausible that significant UAP-related programs could operate without broad congressional knowledge.`,
    categorie: 'juridique',
    tier: 2,
    tags: ['classified', 'budget', 'intelligence', 'Congress', 'AATIP', 'Snowden'],
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
