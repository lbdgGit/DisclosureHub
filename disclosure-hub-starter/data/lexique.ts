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
    definition: `The primary U.S. government UAP investigative office, established July 2022 within the Department of Defense, directed by the Deputy Secretary of Defense. Created by Congress in NDAA 2022 to synchronize UAP collection, analysis, and reporting across all military branches and intelligence agencies. AARO's caseload exceeded 2,000 reports dating to 1945 as of 2026, confirmed by Defense Secretary Hegseth. However, AARO's record is deeply contested: multiple congressional sources accused it of functioning as a "catch and kill" mechanism — identifying and mapping whistleblowers who came forward to its reporting portal rather than investigating their claims. First director Sean Kirkpatrick resigned in December 2023 under congressional pressure. His AARO Historical Record Vol. I (March 2024) contradicted Grusch's testimony but was condemned by the research community and congressional members: lacking citations, riddled with factual errors, and reaching categorical conclusions about the non-existence of crash retrieval programs while acknowledging incomplete access to the SAP compartments where such programs would reside. Congressional members with SCIF access stated its findings contradicted their classified briefings. David Grusch himself warned witnesses that the AARO reporting portal was not safe to use. Its mandate and its contested record represent the central tension in the current institutional UAP ecosystem.`,
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
    definition: `Rolling declassification program launched May 2026 by the Department of War at war.gov/ufo, following President Trump's presidential directive of February 19, 2026. Initial batch: 162 files from FBI, DoD, NASA, and State Department. Defense Secretary Hegseth confirmed the goal: "maximum transparency." The archive received over one billion views within days of launch. Japan immediately confirmed analyzing PURSUE files relating to UAP near Japan in 2024. PURSUE is the largest official UAP declassification in U.S. history and a direct signal of executive-branch pressure to bypass congressional legislative failure (UAPDA blocked FY2024–2026).`,
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


  // ─── BATCH 4: CONTRACTORS, TECHNICAL, INTERNATIONAL, REMAINING ──

  // DEFENSE CONTRACTORS & LABS ─────────────────────────────

  {
    id: 'lockheed-skunkworks',
    terme: 'Lockheed Martin / Skunk Works',
    definition: `Lockheed Martin is the world's largest defense contractor by revenue. Its Advanced Development Programs division — "Skunk Works" — based in Palmdale, California, is the most secretive aerospace R&D operation in the world, responsible for the U-2, SR-71 Blackbird, F-117 Nighthawk, and F-22. In UAP discourse, Skunk Works is frequently cited in alleged crash retrieval and reverse engineering contexts. Former Senate Majority Leader Harry Reid stated before his death that he had been told Lockheed held recovered UAP materials — a claim he said he could not verify. Skunk Works' culture of extreme compartmentalization and plausible deniability makes external verification structurally impossible.`,
    categorie: 'institutionnel',
    tier: 2,
    isDisputed: true,
    disputedNote: `Reid's statement about Lockheed holding recovered materials is unverified and disputed by Lockheed. Cited here because of its source credibility (Senate Majority Leader) not as confirmed fact.`,
    tags: ['contractor', 'Reid', 'classified', 'aerospace', 'alleged', 'reverse engineering'],
  },

  {
    id: 'northrop-grumman',
    terme: 'Northrop Grumman',
    definition: `Second-largest U.S. defense contractor; designer of the B-2 Spirit stealth bomber, B-21 Raider, and multiple classified space and ISR platforms. In the UAP disclosure ecosystem, Northrop Grumman is frequently cited alongside Lockheed as a potential contractor involved in classified UAP-related research, given its expertise in advanced materials, stealth, and exotic propulsion concepts. No verified evidence links Northrop to UAP programs beyond standard defense contracting. The company operates multiple classified facilities and holds numerous SAPs. Its aerospace engineering capabilities make it a plausible candidate in alleged reverse engineering scenarios — emphasis on alleged.`,
    categorie: 'institutionnel',
    tier: 3,
    isDisputed: true,
    disputedNote: `No verified evidence of UAP-specific programs at Northrop. Listed for completeness given its repeated appearance in UAP researcher analysis. Treat as speculative.`,
    tags: ['contractor', 'stealth', 'aerospace', 'classified', 'alleged'],
  },

  {
    id: 'saic',
    terme: 'SAIC — Science Applications International Corporation',
    acronyme: 'SAIC',
    definition: `A major U.S. defense and intelligence contractor providing IT, engineering, and research services to the DoD and intelligence community. SAIC is relevant to UAP discourse for two reasons: (1) it provides analytical and IT support to AARO and predecessor organizations; (2) several key UAP-adjacent figures (including Eric Davis) have had SAIC affiliations. SAIC managed classified programs during the AATIP era. As with all large defense IT contractors, its involvement in UAP analysis is structural rather than program-specific — it provides the analytical infrastructure that any large classified program would use.`,
    categorie: 'institutionnel',
    tier: 3,
    tags: ['contractor', 'IT', 'intelligence', 'DoD', 'AARO', 'analytical'],
  },

  {
    id: 'mitre',
    terme: 'MITRE Corporation',
    definition: `A federally funded research and development center (FFRDC) that operates multiple research centers for U.S. government sponsors including DoD, FAA, and intelligence community. MITRE is unique: it has no profit motive, cannot hold patents for competitive gain, and exists solely to serve government research needs. In the UAP context, MITRE has conducted analysis of sensor data and anomalous detection methodologies for DoD sponsors. FFRDCs like MITRE are often used for the most sensitive analytical work precisely because their FFRDC status allows deeper integration with government systems than commercial contractors.`,
    categorie: 'institutionnel',
    tier: 3,
    tags: ['FFRDC', 'DoD', 'research', 'sensors', 'analytical', 'non-profit'],
  },

  {
    id: 'los-alamos-sandia',
    terme: 'Los Alamos & Sandia National Laboratories',
    definition: `The two premier U.S. national security laboratories, managed by the Department of Energy. Los Alamos (New Mexico) designed the first nuclear weapons and continues advanced materials, physics, and computational research. Sandia (New Mexico/California) focuses on nuclear weapons engineering, advanced sensors, and emerging technologies. Both labs have appeared in UAP researcher analyses as potential sites for materials analysis of alleged recovered UAP components, given their capabilities in exotic materials characterization, nuclear forensics, and advanced physics. Their involvement in classified UAP programs is alleged but unverified.`,
    categorie: 'institutionnel',
    tier: 3,
    isDisputed: true,
    disputedNote: `No verified evidence of UAP-specific programs at either laboratory. Their materials analysis capabilities make them logical candidates in hypothetical crash retrieval scenarios, but this remains speculative.`,
    tags: ['DOE', 'nuclear', 'materials', 'New Mexico', 'classified', 'alleged'],
  },

  {
    id: 'battelle',
    terme: 'Battelle Memorial Institute',
    definition: `An independent non-profit research and development organization, the world's largest, with over $6 billion in annual revenue. Battelle manages Oak Ridge, Brookhaven, Pacific Northwest, and Idaho national laboratories for the DOE. In the UAP context, Battelle is historically significant: the Battelle Institute was commissioned by Project Blue Book to conduct a statistical analysis of UFO sightings (Special Report 14, 1955), which found that the best cases — those with the most witness reliability and data quality — were the LEAST explainable by conventional means. This finding was suppressed in the Blue Book era but has been cited repeatedly in the scientific case for UAP study.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['non-profit', 'DOE', 'Blue Book', 'Special Report 14', 'statistics', 'historical'],
  },

  {
    id: 'darpa',
    terme: 'DARPA — Defense Advanced Research Projects Agency',
    acronyme: 'DARPA',
    definition: `The DoD agency responsible for developing emerging technologies for military use. DARPA created the internet (ARPANET), stealth technology, GPS, and numerous other transformative innovations. In the UAP context, DARPA is relevant as the institutional home for research into exotic propulsion, advanced materials, and anomalous physics that could inform UAP understanding. DARPA's Tactical Technology Office and Defense Sciences Office have funded research adjacent to UAP-related physics. DARPA's structure — short-term program managers with high risk tolerance — is designed precisely for problems that conventional DoD research avoids.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['DoD', 'research', 'emerging technology', 'propulsion', 'materials', 'physics'],
  },

  // TECHNICAL / SENSOR ADVANCED ─────────────────────────────

  {
    id: 'aesa-radar',
    terme: 'AESA Radar — Active Electronically Scanned Array',
    acronyme: 'AESA',
    definition: `Advanced radar technology used in modern military aircraft (F-22, F-35, F/A-18 Super Hornet) and naval vessels. AESA systems can simultaneously perform multiple functions: air-to-air tracking, ground mapping, electronic warfare, and communications. Unlike mechanically scanned radar, AESA can shift its beam electronically in microseconds. The F/A-18 squadrons that encountered UAP in the 2014-2015 Roosevelt incidents were equipped with AESA radar, providing high-confidence tracking data. AESA's ability to classify objects by their radar signature makes its inability to identify UAP more significant — not a sensor limitation but a genuine anomaly.`,
    categorie: 'technologie',
    tier: 2,
    tags: ['radar', 'F-18', 'F-22', 'F-35', 'Navy', 'sensors', 'tracking'],
  },

  {
    id: 'spy-1-radar',
    terme: 'AN/SPY-1 Aegis Radar',
    definition: `The primary radar system of U.S. Navy Aegis-equipped cruisers and destroyers, including the USS Princeton (Ticonderoga-class) involved in the 2004 Nimitz encounter. AN/SPY-1 is a passive phased-array radar capable of simultaneously tracking hundreds of targets across all elevation angles. During the Nimitz encounter, the Princeton's SPY-1 tracked objects descending from 80,000 feet to sea level in approximately 0.78 seconds — an acceleration of roughly 5,000 g-forces, exceeding by orders of magnitude what any known material or biological system can withstand. This radar data, combined with visual and FLIR confirmation, is the strongest multi-sensor UAP evidence in the public record.`,
    categorie: 'technologie',
    tier: 2,
    tags: ['Navy', 'Nimitz', 'Princeton', 'radar', 'tracking', 'acceleration', 'sensor'],
  },

  {
    id: 'irst',
    terme: 'IRST — Infrared Search and Track',
    acronyme: 'IRST',
    definition: `A passive sensor system that detects and tracks airborne objects by their infrared (heat) signature without emitting radar waves. Because IRST is passive, it cannot be detected by the target. Unlike radar, IRST is not affected by electronic countermeasures or stealth coatings. Relevant to UAP analysis: objects showing near-zero radar cross-section (stealthy) while simultaneously showing no infrared signature from propulsion would be doubly anomalous — invisible to both active (radar) and passive (IR) detection. Some Navy UAP encounters involved objects detected visually but showing anomalously low or absent infrared signatures despite apparent high-speed flight.`,
    categorie: 'technologie',
    tier: 3,
    tags: ['infrared', 'passive', 'sensors', 'Navy', 'stealth', 'detection'],
  },

  {
    id: 'sonobuoy',
    terme: 'Sonobuoy Detection Systems',
    definition: `Expendable underwater acoustic sensors deployed by aircraft or ships to detect and track submarines and other submerged objects. Sonobuoys are directly relevant to transmedium UAP incidents: the USS Omaha 2019 sphere incident occurred in an area with active ASW (anti-submarine warfare) operations, potentially including sonobuoy deployment. If a transmedium UAP entering the ocean were detected by sonobuoy arrays, that acoustic data would be classified and routed through the Navy's undersea surveillance network (SOSUS). Sonobuoy data from UAP transmedium incidents is referenced in protected disclosures but has not been officially released.`,
    categorie: 'technologie',
    tier: 3,
    tags: ['acoustic', 'underwater', 'Navy', 'transmedium', 'USS Omaha', 'classified'],
  },

  {
    id: 'sbirs',
    terme: 'SBIRS — Space-Based Infrared System',
    acronyme: 'SBIRS',
    definition: `A constellation of U.S. military satellites in geosynchronous and highly elliptical orbits providing persistent global infrared surveillance, primarily designed for missile launch detection. SBIRS sensors can detect any sufficiently hot object from space — including rocket launches, nuclear detonations, and potentially anomalous phenomena. In the UAP context: SBIRS data is among the most classified sensor data in the U.S. inventory. Multiple UAP researchers and congressional members have referenced the potential role of space-based infrared sensors in tracking UAP. Whether SBIRS has captured anomalous detections attributed to UAP remains classified.`,
    categorie: 'technologie',
    tier: 3,
    tags: ['satellite', 'infrared', 'space', 'classified', 'surveillance', 'NRO'],
  },

  {
    id: 'multi-domain-ops',
    terme: 'All-Domain Awareness',
    definition: `The military concept of integrating sensor data across all physical domains — air, land, sea, space, and cyberspace — into a unified operational picture. AARO's full name ("All-domain Anomaly Resolution Office") reflects this concept: UAP must be tracked across all domains because they transition between them. All-domain awareness is the sensor fusion framework within which military UAP detection operates. The challenge: each domain's sensor data is managed by different commands with different classification architectures, making cross-domain UAP tracking structurally difficult even with AARO's mandate to synchronize across agencies.`,
    categorie: 'technologie',
    tier: 2,
    tags: ['AARO', 'sensor fusion', 'military', 'transmedium', 'DoD', 'integration'],
  },

  // GOVERNMENT BODIES (DETAILED) ────────────────────────────

  {
    id: 'hasc-sasc',
    terme: 'HASC / SASC — Armed Services Committees',
    definition: `The House Armed Services Committee (HASC) and Senate Armed Services Committee (SASC) are the primary congressional bodies overseeing DoD programs and funding. Both committees have held classified UAP briefings and have included UAP provisions in the National Defense Authorization Act (NDAA) — the annual legislation that funds the U.S. military. The repeated blocking of the UAP Disclosure Act from NDAA through HASC and SASC markup processes represents the primary legislative battlefield for disclosure advocates. Committee members with SCIF access to UAP briefings have stated publicly that what they heard motivated their advocacy.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Congress', 'DoD', 'NDAA', 'oversight', 'legislation', 'SASC', 'HASC'],
  },

  {
    id: 'ssci-hpsci',
    terme: 'Senate & House Intelligence Committees',
    definition: `The Senate Select Committee on Intelligence (SSCI) and House Permanent Select Committee on Intelligence (HPSCI) provide congressional oversight of the 18 agencies of the U.S. Intelligence Community. These committees receive classified UAP briefings through the ODNI and AARO pipelines. Their members operate under strict SCIF confidentiality — they cannot publicly disclose classified content. Multiple SSCI and HPSCI members have made public statements expressing significant concern about UAP after classified briefings, without being able to specify what they heard. The intelligence committees are the primary recipients of AARO's classified annual reports to Congress.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Congress', 'intelligence', 'classified', 'oversight', 'ODNI', 'SCIF'],
  },

  {
    id: 'oni',
    terme: 'Office of Naval Intelligence',
    acronyme: 'ONI',
    definition: `The U.S. Navy's intelligence arm and one of the oldest intelligence agencies in the country (est. 1882). The UAP Task Force (UAPTF) was established within ONI in 2020, making ONI the institutional home of the first official modern UAP investigation program. ONI's particular relevance: Navy pilots and ships have generated a disproportionate share of the most credible UAP encounters (Nimitz, Roosevelt, Omaha), making naval intelligence data the richest single-service UAP dataset. ONI's classified encounter reports fed into AARO's caseload and inform the most sensitive UAP analyses.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Navy', 'UAPTF', 'intelligence', 'historical', 'Nimitz', 'Roosevelt'],
  },

  {
    id: 'afrl',
    terme: 'Air Force Research Laboratory',
    acronyme: 'AFRL',
    definition: `The primary research organization of the U.S. Air Force and Space Force, managing a $2.9B annual research portfolio across 10 technical directorates. AFRL's Aerospace Systems, Materials, and Directed Energy directorates conduct research directly relevant to UAP-related physics: advanced propulsion, exotic materials, high-energy sensing. The Air Force's historical role in UAP investigation (Projects Sign, Grudge, Blue Book) has transitioned to AARO, but AFRL's technical expertise in aerospace anomalies continues. AFRL also manages the Foreign Technology Division (now NASIC), which analyzes adversary aerospace technology — the framework relevant to crash retrieval claims.`,
    categorie: 'institutionnel',
    tier: 3,
    tags: ['Air Force', 'research', 'propulsion', 'materials', 'FTD', 'NASIC'],
  },

  // MORE HISTORICAL CASES ───────────────────────────────────

  {
    id: 'lakenheath-bentwaters',
    terme: 'Lakenheath-Bentwaters Incident (1956)',
    definition: `A multi-sensor, multi-witness UAP encounter on August 13–14, 1956, over Suffolk, England, involving two USAF bases and RAF stations. Multiple ground radar stations tracked objects simultaneously performing maneuvers beyond any known aircraft — including sharp turns at high speed. RAF Venom interceptors were scrambled; one pilot reported a UFO "locking onto" his aircraft. The encounter was documented in a classified USAF report. The Condon Report (1968), which generally minimized UAP, acknowledged that this case — given its multi-radar confirmation and pilot visual contact — "in the judgement of this project...remains unexplained." One of the most thoroughly documented Cold War-era military UAP cases.`,
    categorie: 'historique',
    tier: 2,
    tags: ['UK', 'USAF', 'RAF', 'radar', 'Cold War', '1956', 'Condon Report', 'unexplained'],
  },

  {
    id: 'kecksburg',
    terme: 'Kecksburg Incident (1965)',
    definition: `On December 9, 1965, a fireball was observed across multiple U.S. states and Canada, ultimately appearing to land near Kecksburg, Pennsylvania. Civilian witnesses described a bronze, acorn-shaped object the size of a Volkswagen with hieroglyphic-like markings near a ridge. The U.S. Army arrived and removed something on a flatbed truck. NASA's official explanation (2005): it was a Soviet satellite (Cosmos 96). Critics note Cosmos 96 had already reentered over Canada earlier. A FOIA request by investigative journalist Leslie Kean resulted in NASA acknowledging it had lost the relevant files. The case remains officially explained (Soviet satellite) and practically unresolved.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Pennsylvania', '1965', 'crash', 'Army', 'NASA', 'FOIA', 'Kean', 'Cold War'],
  },

  {
    id: 'ariel-school',
    terme: 'Ariel School Incident (1994)',
    definition: `On September 16, 1994, approximately 62 schoolchildren aged 5–12 at Ariel School in Ruwa, Zimbabwe, reported witnessing craft land on the school grounds during recess and observed beings approaching them. Harvard psychiatrist Dr. John Mack interviewed the children and concluded they were not fabricating the account. The children's descriptions were remarkably consistent. Documentary filmmaker Randall Nickell produced Ariel Phenomenon (2022) interviewing the now-adult witnesses, who maintain their accounts decades later. The incident is distinctive for the number of child witnesses, the independent consistency of accounts, and the subsequent professional psychiatric investigation by Mack.`,
    categorie: 'historique',
    tier: 2,
    tags: ['Zimbabwe', 'Africa', 'children', 'John Mack', 'Harvard', '1994', 'witnesses', 'landing'],
  },

  // INTERNATIONAL REMAINING ─────────────────────────────────

  {
    id: 'project-magnet',
    terme: 'Project Magnet (Canada)',
    definition: `Canada's official government UAP investigation, established in 1950 by the Department of Transport under radio engineer Wilbert Smith. Project Magnet was unusually candid — Smith obtained classified confirmation from U.S. officials that UAP were real and classified at a higher level than the hydrogen bomb. Project Magnet operated a monitoring station at Shirley Bay, Ontario, and made a significant detection in August 1954 before equipment failure. The project was officially terminated in 1954 but Smith continued privately. Canada's early official engagement with UAP, and Smith's recorded intelligence contacts, makes Project Magnet a key Cold War-era institutional data point.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Canada', 'Cold War', 'Smith', '1950', 'government', 'historical', 'classified'],
  },

  {
    id: 'norway-hessdalen',
    terme: 'Norway — Hessdalen Lights / Armed Forces Observations',
    definition: `Hessdalen Valley in central Norway has been the site of persistent, recurring anomalous light phenomena since at least the 1930s, peaking in 1981–1984 with 15–20 observations per week. The Norwegian military and civilian scientists have monitored the valley. Project Hessdalen (est. 1983) is one of the few long-term scientific monitoring programs for recurring UAP specifically. The Norwegian Armed Forces have separately documented radar returns of anomalous objects. Some Hessdalen phenomena have been attributed to geological piezoelectric effects; a residual unexplained fraction remains. Norway's systematic scientific approach to a specific recurring phenomenon is a unique methodological contribution.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Norway', 'Hessdalen', 'scientific monitoring', 'lights', 'recurring', 'geology'],
  },

  {
    id: 'russia-cold-war',
    terme: 'Soviet / Russian UAP Programs',
    definition: `The Soviet Union conducted extensive classified UAP research throughout the Cold War, driven by concern that UAP might represent advanced U.S. technology — mirroring U.S. concern that UAP might be Soviet. The KGB maintained a classified UAP file known as "File 13." Soviet military pilots reported UAP encounters at rates comparable to U.S. counterparts. Post-Soviet declassified materials revealed a 1978 directive from Soviet Chief of Staff ordering systematic UAP reporting. Russian research program "SETKA-MO" (military) and "SETKA-AN" (Academy of Sciences) operated in parallel. The mutual Cold War UAP investigation dynamic — each superpower fearing the other was responsible — adds a significant layer to the institutional history.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Russia', 'Soviet', 'Cold War', 'KGB', 'military', 'declassified', 'historical'],
  },

  {
    id: 'john-mack',
    terme: 'Dr. John Mack',
    definition: `Harvard Medical School professor of psychiatry (1929–2004); Pulitzer Prize winner (A Prince of Our Lives, 1977). Beginning in the early 1990s, Mack investigated hundreds of individuals reporting alien abduction experiences, publishing Abduction: Human Encounters with Aliens (1994) and Passport to the Cosmos (1999). His conclusion: the experiences were real events to the witnesses, not psychopathology. His Harvard position triggered a formal university investigation of his academic methodology — ultimately dismissed. Mack died in 2004 after being struck by a drunk driver in London. His work represents the most credentialed psychiatric engagement with anomalous contact experience, relevant to the NHI witness testimony ecosystem.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['Harvard', 'psychiatry', 'Pulitzer', 'abduction', 'witnesses', 'deceased', 'academic'],
  },

  // SCIENTIFIC / CONCEPTUAL REMAINING ──────────────────────

  {
    id: 'zero-point-energy',
    terme: 'Zero-Point Energy (ZPE)',
    definition: `The lowest possible energy state of a quantum mechanical system — the energy that remains when all thermal energy has been removed (absolute zero). Quantum field theory predicts a non-zero ZPE throughout all of space (the quantum vacuum). In the UAP context, ZPE has been proposed as a theoretical basis for seemingly "reactionless" propulsion — drawing energy from the vacuum rather than expelling reaction mass. The DIA-funded AATIP program commissioned a report on ZPE as a potential UAP propulsion mechanism. ZPE extraction remains theoretically contested and practically undemonstrated. It is scientifically legitimate as a hypothesis, not a demonstrated technology.`,
    categorie: 'scientifique',
    tier: 3,
    tags: ['physics', 'quantum', 'propulsion', 'AATIP', 'DIA', 'theoretical', 'vacuum'],
  },

  {
    id: 'warp-field',
    terme: 'Spacetime Metric Engineering / Warp Field',
    definition: `A theoretical propulsion concept based on the Alcubierre metric (1994), which mathematically describes a spacetime "bubble" that contracts space ahead of a vessel and expands it behind, enabling faster-than-light travel without the vessel itself exceeding c locally. The Alcubierre drive requires exotic matter with negative energy density — not currently known to exist in stable form, though Casimir effect experiments show negative energy densities are not excluded by physics. AATIP commissioned research on metric engineering as a potential UAP propulsion mechanism. The concept is mathematically consistent with general relativity. The energy requirements at current understanding are prohibitive (Jupiter mass-energy equivalent).`,
    categorie: 'scientifique',
    tier: 3,
    tags: ['physics', 'Alcubierre', 'propulsion', 'AATIP', 'theoretical', 'relativity', 'FTL'],
  },

  {
    id: 'simulation-hypothesis',
    terme: 'Simulation Hypothesis (UAP application)',
    definition: `The philosophical proposition that physical reality is a computational simulation, proposed most prominently by philosopher Nick Bostrom (2003). In the UAP context: some researchers have noted that UAP behavior — apparently violating conservation laws, appearing and disappearing, manipulating witnesses' perception and memory — would be consistent with deliberate "rendering" exceptions in a simulated environment. This is a fringe application of an already speculative hypothesis. It is included here because it appears in serious academic UAP literature (including Sol Foundation discussions) as a conceptual framework, not because it has any empirical support. It is the least falsifiable of all UAP origin hypotheses.`,
    categorie: 'conceptuel',
    tier: 3,
    tags: ['Bostrom', 'philosophy', 'speculative', 'simulation', 'hypothesis', 'consciousness'],
  },

  {
    id: 'condon-cover',
    terme: 'Robertson Panel (1953)',
    definition: `A secret CIA-sponsored scientific panel convened January 1953, chaired by physicist H.P. Robertson, charged with assessing whether UAP posed a national security threat. Conclusion: UAP did not pose a direct threat, but mass public interest in them did — creating a potential channel for enemy psychological warfare and clogging military communication networks. The panel recommended a public education campaign to "debunk" UAP and reduce public reporting. Critically: the Robertson Panel was explicitly about managing public perception, not resolving the scientific question. It established the institutional template for UAP debunking as official policy — a posture maintained until 2017.`,
    categorie: 'historique',
    tier: 2,
    tags: ['CIA', 'Robertson', '1953', 'Cold War', 'debunking', 'policy', 'historical', 'psychological'],
  },

  {
    id: 'radar-spoofing',
    terme: 'Radar Spoofing / Electronic Deception',
    definition: `A skeptical framework proposing that some military UAP radar detections represent adversary electronic warfare — deliberately injecting false tracks into radar systems to probe detection and response capabilities. Russia and China both possess sophisticated electronic warfare capabilities. The radar spoofing hypothesis is most applicable to radar-only detections without corroborating visual or FLIR confirmation. It is specifically NOT applicable to cases like Nimitz (multi-sensor, multi-witness, visual plus radar plus FLIR plus pilot intercept) or Roosevelt (similarly multi-confirmed). AARO's analytic protocol screens for electronic warfare signatures as a priority alternative explanation.`,
    categorie: 'conceptuel',
    tier: 2,
    tags: ['skeptical', 'electronic warfare', 'Russia', 'China', 'AARO', 'methodology', 'adversary'],
  },

  {
    id: 'parallax-errors',
    terme: 'Parallax and Tracking Errors',
    definition: `A technical skeptical explanation for some UAP footage anomalies. Parallax occurs when an object at distance appears to move faster or in unexpected directions relative to a closer reference point. Tracking errors occur when a sensor's gimbal system loses lock and the apparent motion of the tracked object is actually the motion of the sensor. The Gimbal video has been specifically analyzed for this effect: some researchers argue the object's apparent rotation is a gimbal derotation artifact of the ATFLIR pod. Others argue the tracking data is inconsistent with a pure sensor artifact. This debate remains unresolved and illustrates why raw sensor footage without full telemetry data is analytically limited.`,
    categorie: 'conceptuel',
    tier: 2,
    tags: ['skeptical', 'Gimbal', 'FLIR', 'sensors', 'methodology', 'analysis', 'artifact'],
  },

  {
    id: 'psychological-bias',
    terme: 'Perception Bias and Witness Psychology',
    definition: `A collection of cognitive and psychological mechanisms that can cause individuals to misidentify conventional phenomena as anomalous: pareidolia (pattern recognition in noise), expectation bias (seeing what one expects), memory confabulation (unconscious reconstruction), social contagion (adopting the observations of others), and stress-induced perceptual distortion. Legitimate UAP analysis must account for these factors — which is why multi-sensor, multi-independent-witness cases are considered far more significant than single-witness testimonies. The U.S. Air Force used psychological explanations extensively to dismiss UAP reports during the Blue Book era, often without examining the underlying evidence.`,
    categorie: 'conceptuel',
    tier: 2,
    tags: ['psychology', 'skeptical', 'methodology', 'cognitive bias', 'witnesses', 'Blue Book'],
  },

  // LEGISLATION DETAIL ──────────────────────────────────────

  {
    id: 'foia-exemptions',
    terme: 'FOIA Exemptions b(1) through b(9)',
    definition: `The nine exemptions to the U.S. Freedom of Information Act that allow agencies to withhold requested documents. The most relevant to UAP: b(1) — classified national security information (the primary exemption used for UAP records); b(3) — information specifically exempted by statute (covers NSA and CIA materials); b(5) — deliberative process privilege (internal agency deliberations). UAP FOIA responses routinely cite b(1) and b(3). The existence of a document can be withheld entirely under a "Glomar response" — neither confirming nor denying existence — when even acknowledging a document would reveal classified information. The Black Vault's John Greenewald has documented extensive Glomar responses on UAP requests.`,
    categorie: 'juridique',
    tier: 2,
    tags: ['FOIA', 'classification', 'Glomar', 'national security', 'legal', 'Black Vault'],
  },

  {
    id: 'executive-privilege',
    terme: 'Executive Privilege and Presidential Declassification',
    definition: `The constitutional doctrine allowing the President and executive branch officials to withhold information from Congress and courts to protect national security and executive deliberations. Critically: the President has inherent authority to declassify any information at any time — a power exercised by Trump's February 2026 executive order directing UAP file release. Congressional oversight authority is in tension with executive privilege on classified UAP matters: Congress can demand records, but classification review provides significant delay leverage. The UAP Disclosure Act attempted to pierce this through a presidentially appointed review board modeled on the JFK Records Act — which was specifically designed to overcome executive privilege on historical secrets.`,
    categorie: 'juridique',
    tier: 2,
    tags: ['classification', 'Trump', 'Congress', 'UAPDA', 'JFK Records Act', 'legal', 'constitutional'],
  },

  // TIMELINE ERAS ───────────────────────────────────────────

  {
    id: 'era-blue-book',
    terme: 'Blue Book Era (1947–1969)',
    definition: `The first institutional phase of U.S. government UAP engagement, characterized by official investigation combined with systematic debunking. Projects Sign (1948), Grudge (1949), and Blue Book (1952–1969) investigated 12,618 reports. Key events: the Estimate of the Situation (1948) concluded UAP were likely extraterrestrial — immediately suppressed; the Robertson Panel (1953) established debunking as official policy; J. Allen Hynek shifted from skeptic to serious researcher; the Condon Report (1968) provided cover for Blue Book closure. The era established the institutional template for UAP management: acknowledge investigation, suppress significant findings, apply alternative explanations regardless of evidence quality.`,
    categorie: 'historique',
    tier: 2,
    tags: ['historical', 'Blue Book', 'Air Force', 'CIA', 'Hynek', 'Cold War', 'institutional'],
  },

  {
    id: 'era-stagnation',
    terme: 'Stagnation Era (1970–2004)',
    definition: `Following Blue Book's closure, official U.S. government UAP investigation essentially ceased for 35 years. No open program existed. Military encounters continued — pilots were instructed not to report them through official channels. AATIP was secretly funded from 2007 but its public existence was unknown. The CIA, DIA, and NSA continued classified monitoring. This era created the institutional data gap: thousands of military encounters went unreported or were filed in inaccessible classified archives. The Nimitz encounter (2004) — the event that eventually broke the stagnation — occurred precisely during this period of official inaction.`,
    categorie: 'historique',
    tier: 2,
    tags: ['historical', 'post-Blue Book', 'gap', 'military', 'classified', 'unreported'],
  },

  {
    id: 'era-disclosure',
    terme: 'Modern Disclosure Era (2017–present)',
    definition: `The current phase of institutional UAP engagement, initiated by the New York Times revelation of AATIP in December 2017. Key milestones: Pentagon video authentication (2020), ODNI UAP report (2021), AARO creation (2022), congressional hearings (2022–2023), Grusch sworn testimony (2023), NASA UAP report (2023), Trump presidential directive (Feb 2026), PURSUE launch (May 2026). The era is characterized by progressive official acknowledgment without full disclosure — each step reveals more while the core question (what are they?) remains officially unresolved. This era is the context within which all LBDG organizational preparedness work operates.`,
    categorie: 'historique',
    tier: 1,
    tags: ['NYT', '2017', 'AARO', 'Grusch', 'NASA', 'PURSUE', 'Trump', 'LBDG'],
  },

  // ADDITIONAL CONCEPTS ─────────────────────────────────────

  {
    id: 'aoimsg',
    terme: 'AOIMSG — Airborne Object Identification and Management Synchronization Group',
    acronyme: 'AOIMSG',
    definition: `A short-lived DoD UAP body that briefly replaced the UAPTF in November 2021 before being superseded by AARO in July 2022. Created following Senator Gillibrand's successful insertion of UAP provisions into NDAA 2022 requiring a more formal DoD structure. The AOIMSG's brief existence illustrates the bureaucratic evolution: each organizational form reflected congressional pressure and DoD resistance. AOIMSG → AARO represents the institutionalization of UAP investigation within a permanent, presidentially confirmed structure with broader authority than its predecessors.`,
    categorie: 'institutionnel',
    tier: 3,
    tags: ['DoD', 'UAP', 'Congress', 'Gillibrand', 'NDAA', 'historical', 'bureaucratic'],
  },

  {
    id: 'ufo-stigma-military',
    terme: '"Foo Fighters" — WWII UAP Reports',
    definition: `Allied and Axis pilots during World War II reported anomalous objects they called "foo fighters" — small, fast, luminous spheres or discs that appeared to follow aircraft without attacking. Reported independently by American, British, German, and Japanese pilots, suggesting the phenomena were not attributable to any single nation's secret weapon program. Post-war investigation found no conventional explanation. The foo fighter reports are the earliest documented mass military UAP encounters from the modern era and establish that the phenomenon predates Cold War politics and was observed symmetrically by opposing sides — a significant data point against the adversary technology hypothesis.`,
    categorie: 'historique',
    tier: 2,
    tags: ['WWII', 'historical', 'military', 'spheres', 'Allied', 'Axis', '1944', 'pilots'],
  },

  {
    id: 'uap-latin-america',
    terme: 'Latin American UAP Programs',
    definition: `Several Latin American countries have developed official UAP investigation frameworks beyond Brazil and Chile. Argentina: the National Commission for the Investigation of Aerospace Phenomena (CNDVNI) operates under the Air Force. Uruguay: CRIDOVNI (Commission for the Reception and Investigation of UFO Denunciations) has operated since 1979. Peru: DIFAA (Anomalous Aerial Phenomena Investigation Department) was established in 2013 under the Air Force. Ecuador, Colombia, and Venezuela have documented military encounter files. The relatively high institutional transparency of Latin American programs — compared to the U.S. and UK — reflects different political and cultural attitudes toward UAP acknowledgment.`,
    categorie: 'institutionnel',
    tier: 3,
    tags: ['Latin America', 'Argentina', 'Uruguay', 'Peru', 'Air Force', 'international', 'official'],
  },

  {
    id: 'deloitte-blackswan',
    terme: 'Deloitte AG 2026 Black Swan Classification',
    definition: `In the 2026 GPMESII (Geopolitical, Military, Economic, Social, Infrastructure, Information Space) Risk Intelligence Report, Deloitte AG classified NHI disclosure as a credible Black Swan event in the Social domain. Key parameters: probability 2/5 within 5 years; impact tags include Ontological Shock, Institutional Trust erosion, and Narrative Polarisation. This classification represents a watershed moment: when a Big Four professional services firm with 457,000 employees and major corporate clients includes NHI disclosure in its formal risk taxonomy, the subject has definitively crossed from fringe speculation into institutional risk management. The LBDG toolkit suite exists specifically in response to this institutional signal.`,
    categorie: 'institutionnel',
    tier: 1,
    tags: ['Deloitte', 'Black Swan', 'risk', 'institutional', '2026', 'LBDG', 'GPMESII'],
  },

  {
    id: 'bank-of-england-warning',
    terme: 'Bank of England UAP Warning (2026)',
    definition: `In January 2026, Helen McCaw, former senior analyst at the Bank of England, publicly urged central banks to begin preparedness planning for the potential market instability that could follow UAP/NHI disclosure. Her warning cited "ontological shock" as a potential trigger for systemic financial disruption — consumer confidence collapse, market volatility, and institutional trust erosion. The Bank of England's institutional weight as one of the world's most respected central banks made this the highest-credibility financial institution to engage with disclosure risk to date. Her warning preceded the UFOD ETF launch by two weeks, suggesting coordinated awareness in financial circles. LBDG's Finance Toolkit is partly designed in response to this signal.`,
    categorie: 'institutionnel',
    tier: 1,
    tags: ['Bank of England', 'McCaw', 'financial', 'systemic risk', '2026', 'LBDG', 'UFOD'],
  },

  {
    id: 'ufod-etf',
    terme: 'UFOD ETF — UFO Disclosure Fund',
    acronyme: 'UFOD',
    definition: `The first investment fund explicitly designed to capitalize on UAP/NHI disclosure, launched February 5, 2026 on CBOE (Chicago Board Options Exchange) by Tuttle Capital Management. Ticker: UFOD. The fund invests in aerospace, defense, advanced materials, and energy companies positioned to benefit from the release of non-human technology. $2.9M AUM at launch; rapidly grew as institutional interest increased following Trump's executive order. UFOD's existence on a regulated major exchange is one of the most significant financial signals in the modern disclosure era — it demonstrates that sophisticated market participants are pricing disclosure risk into investable instruments, not merely discussing it.`,
    categorie: 'institutionnel',
    tier: 1,
    sources: [{ label: 'CBOE: UFOD', url: 'https://finance.yahoo.com/quote/UFOD/' }],
    tags: ['ETF', 'CBOE', 'Tuttle', 'financial', '2026', 'investment', 'institutional'],
  },


  // ─── BATCH 5: MEDIA, PEOPLE, INSTITUTIONS ────────────────

  // MEDIA ───────────────────────────────────────────────────

  {
    id: '60-minutes-uap',
    terme: '60 Minutes UAP Segment (2021)',
    definition: `The May 16, 2021 episode of CBS 60 Minutes featuring correspondent Bill Whitaker interviewing Luis Elizondo, Christopher Mellon, former Navy pilots Ryan Graves and David Fravor, and former Deputy Secretary of Defense David Norquist. The segment reached an estimated 10 million U.S. viewers — the largest mainstream media audience ever exposed to institutional UAP claims at that point. Its timing, three weeks before the ODNI UAP preliminary report release, was deliberate. The combination of CBS credibility, senior government officials on camera, and authenticated footage made this the single most impactful mainstream media moment of the modern disclosure era, immediately before the 2021 ODNI report.`,
    categorie: 'media',
    tier: 1,
    tags: ['CBS', 'Elizondo', 'Mellon', 'Fravor', 'Graves', '2021', 'mainstream', 'television'],
  },

  {
    id: 'netflix-unidentified',
    terme: 'Unidentified: Inside America\'s UFO Investigation (History Channel)',
    definition: `A documentary series (2019–2020) produced by Tom DeLonge's To The Stars Academy, airing on History Channel. Featured Luis Elizondo, Christopher Mellon, and former military intelligence officers investigating UAP cases. Reached millions of viewers and significantly expanded public awareness of the institutional UAP case beyond traditional enthusiast audiences. The series was significant for featuring active (and recently retired) government officials discussing UAP on camera with apparent institutional backing. It preceded the congressional hearing era and helped establish the cultural context for the 2020 Pentagon video authentication and the 2021 ODNI report.`,
    categorie: 'media',
    tier: 2,
    tags: ['History Channel', 'To The Stars', 'DeLonge', 'Elizondo', 'Mellon', 'television', '2019'],
  },

  {
    id: 'washington-post-uap',
    terme: 'Washington Post UAP Coverage',
    definition: `The Washington Post has been one of the two primary mainstream newspapers (alongside the NYT) covering the modern disclosure era. Key contributions: reporter Craig Whitlock's investigation into the Pentagon's handling of UAP reports; coverage of the 2022 and 2023 congressional hearings; analysis of the AARO Historical Record Report. The Post's national security reporting infrastructure — built around DoD and intelligence community sourcing — gives its UAP coverage particular institutional weight. Post coverage has consistently focused on the oversight and accountability angle rather than the phenomenological claims, making it complementary to NYT's more disclosure-oriented framing.`,
    categorie: 'media',
    tier: 2,
    tags: ['journalism', 'Washington Post', 'Pentagon', 'oversight', 'Congress', 'accountability'],
  },

  {
    id: 'politico-uap',
    terme: 'Politico UAP Coverage',
    definition: `Politico has emerged as one of the most important outlets for UAP legislative and policy reporting, covering the congressional UAP battle from inside the Capitol. Its reporters have covered the UAPDA amendment fights in NDAA markup sessions, the classified briefings to congressional members, and the political dynamics of the UAP Caucus. Politico's strength — real-time congressional sourcing — makes it the primary outlet for breaking news on UAP legislation, amendment language, and the behind-the-scenes dynamics of DoD resistance to congressional oversight. Its coverage is complementary to The War Zone (technical) and The Debrief (intelligence community).`,
    categorie: 'media',
    tier: 2,
    tags: ['journalism', 'Congress', 'legislation', 'UAPDA', 'NDAA', 'policy', 'Capitol'],
  },

  {
    id: 'phenomenon-documentary',
    terme: 'The Phenomenon (2020)',
    definition: `Documentary film directed by James Fox, widely considered the most credible and technically accomplished UAP documentary produced to date. Features on-the-record testimony from former government officials including John Podesta (former White House Chief of Staff), Fife Symington (former Governor of Arizona, Phoenix Lights witness), Sen. Harry Reid, Jacques Vallée, and international military figures from Belgium, France, and Chile. The film covers cases from 1947 to the present with institutional sourcing. Its Metacritic score of 78 and distribution through major platforms represented a breakthrough for mainstream critical reception of UAP documentary content. James Fox began production over 20 years before its 2020 release.`,
    categorie: 'media',
    tier: 1,
    tags: ['Fox', 'documentary', 'Podesta', 'Reid', 'Symington', 'Vallée', '2020', 'mainstream'],
  },

  {
    id: 'nyt-2017-article',
    terme: 'New York Times AATIP Investigation (December 2017)',
    definition: `The December 16, 2017 front-page New York Times investigation by Leslie Kean, Ralph Blumenthal, and Helene Cooper that revealed the existence of AATIP, published the first declassified Navy UAP videos (FLIR1/Tic-Tac), and introduced the U.S. government's secret UAP program to mainstream public awareness. The article's publication is the most consequential single media event in the history of UAP disclosure — it triggered congressional action, forced Pentagon acknowledgment of the videos, and made UAP a legitimate subject for institutional discussion globally. Everything in the modern disclosure era (ODNI report, AARO, congressional hearings, PURSUE) traces institutionally to this article.`,
    categorie: 'media',
    tier: 1,
    sources: [{ label: 'NYT Investigation 2017', url: 'https://www.nytimes.com/2017/12/16/us/politics/pentagon-program-ufo-harry-reid.html' }],
    tags: ['NYT', 'Kean', 'Blumenthal', 'Cooper', 'AATIP', '2017', 'watershed', 'FLIR1'],
  },

  {
    id: 'age-of-disclosure-doc',
    terme: 'The Age of Disclosure (2025)',
    definition: `Documentary film directed by Dan Farah, premiered at SXSW 2025 and released on Amazon Prime Video November 2025. Features 34 senior U.S. government, military, and intelligence officials on record — the largest single gathering of institutional witnesses in UAP documentary history. Includes Secretary of State Marco Rubio: "We\'ve had repeated instances of something operating in the airspace over restricted nuclear facilities — and it\'s not ours." Former UAP Task Force Director Jay Stratton: "I have seen, with my own eyes, non-human craft and non-human beings." Former DNI James Clapper and Rep. André Carson also appear. Represents the qualitative peak of institutional on-the-record testimony: the sitting U.S. Secretary of State is without precedent in the history of UAP disclosure.`,
    categorie: 'media',
    tier: 1,
    sources: [{ label: 'Amazon Prime', url: 'https://www.amazon.com/Age-Disclosure/dp/B0DMJL2ZDM' }],
    tags: ['Farah', 'Rubio', 'Stratton', 'Clapper', 'Amazon Prime', 'SXSW', '2025', 'watershed'],
  },

  // KEY PEOPLE (ADDITIONAL) ─────────────────────────────────

  {
    id: 'dietrich',
    terme: 'Lt. Cmdr. Alex Dietrich',
    definition: `Retired U.S. Navy Lt. Commander and F/A-18 pilot; the second eyewitness to the 2004 USS Nimitz Tic-Tac encounter alongside David Fravor. Dietrich\'s account is significant as corroboration: she and Fravor both describe the same wingless, white, oblong object performing physics-defying maneuvers. Dietrich testified to the Senate Armed Services Committee in 2021 (in addition to public statements) and appeared on CBS 60 Minutes in May 2021 — the most watched mainstream UAP media moment of that era. Her willingness to go on record as a named, decorated Navy pilot corroborating Fravor\'s account substantially strengthens the multi-witness evidentiary basis of the Nimitz case.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['Navy', 'Nimitz', 'Tic-Tac', 'F-18', 'pilot', 'witness', '2004', '60 Minutes'],
  },

  {
    id: 'kirkpatrick',
    terme: 'Dr. Sean Kirkpatrick',
    definition: `First director of AARO (2022–2023). A physicist and career intelligence officer with the DIA. Kirkpatrick resigned in December 2023 under sustained congressional pressure, following accusations that he had misled Congress about AARO's mandate and investigative access. His March 2024 AARO Historical Record Vol. I contested David Grusch's crash retrieval claims — but was condemned as intellectually dishonest: lacking citations, containing factual errors, and reaching conclusions about the non-existence of crash retrieval programs while acknowledging it had not accessed the most sensitive SAP compartments where such programs would reside. The document was widely ridiculed in the UAP research community and rejected by congressional members with SCIF access who stated its findings contradicted what they had been told in classified briefings. Multiple congressional members publicly stated Kirkpatrick had been dishonest in testimony. AARO's reporting portal, designed for whistleblowers, was accused by Grusch and congressional sources of functioning as a mechanism to identify rather than protect witnesses. After leaving AARO, Kirkpatrick co-authored an article with Avi Loeb in Scientific American on the possibility of anomalous interstellar probes — a notable shift for the former head of the government's official skeptical UAP office.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['AARO', 'DIA', 'physicist', 'government', 'Loeb', 'Scientific American'],
  },

  {
    id: 'kosloski',
    terme: 'Dr. Jon Kosloski',
    definition: `Current director of AARO (appointed 2024), succeeding Sean Kirkpatrick. A physicist with a background in the National Reconnaissance Office. Kosloski has overseen AARO during the PURSUE era, managing the interface between the executive-driven declassification push (Trump EO, 2026) and AARO\'s analytical mandate. His NRO background brings space-based sensor expertise. Under his tenure, AARO\'s caseload surpassed 2,000 reports. Kosloski has maintained AARO\'s publicly skeptical posture while implementing the expanded reporting and declassification mandates from the 2026 executive order.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['AARO', 'NRO', 'physicist', 'director', 'PURSUE', 'Trump', '2024'],
  },

  {
    id: 'gillibrand',
    terme: 'Senator Kirsten Gillibrand',
    definition: `U.S. Senator (D-NY); the primary legislative architect of AARO\'s creation and the UAP congressional reporting requirements within NDAA 2022. Gillibrand successfully inserted language creating AARO and mandating classified and unclassified reports to Congress on UAP. She chairs the Senate Armed Services subcommittee on emerging threats. Gillibrand\'s approach created AARO through NDAA 2022 — more durable than the later UAPDA which was blocked three times. She also chaired multiple Senate Armed Services Committee hearings on UAP, less publicized than the 2023 House Oversight hearings but institutionally significant. However, AARO\'s subsequent failure to fulfill its mandate — accused of catch-and-kill rather than genuine investigation — partially undermines the legacy of her legislative work. She has consistently framed UAP as a national security and aviation safety issue.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['Senate', 'AARO', 'NDAA', 'Democrat', 'Armed Services', 'legislation', '2022'],
  },

  {
    id: 'davis-eric',
    terme: 'Dr. Eric Davis',
    definition: `Astrophysicist; Senior Research Physicist at the Institute for Advanced Studies at Austin; former NIDS researcher; former AAWSAP/BAASS contractor. A central node connecting the government\'s classified UAP research ecosystem with private researchers. Named in the disputed Wilson-Davis memo as having met with Admiral Wilson in 2002 regarding private contractor UAP programs. Davis has testified to the Senate Armed Services Committee in closed session. He is one of very few credentialed physicists who has worked within both the classified government UAP research infrastructure and published in peer-reviewed physics journals. His work spans UAP propulsion theory, quantum vacuum energy, and materials analysis.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['astrophysicist', 'NIDS', 'AAWSAP', 'Wilson-Davis', 'Senate', 'physics', 'contractor'],
  },

  {
    id: 'knapp-george-complete',
    terme: 'Lue Elizondo — extended',
    definition: `See main Elizondo entry. Additional context: Elizondo\'s December 2017 resignation letter to Secretary Mattis cited "bureaucratic challenges and inflexible mindsets" obstructing UAP research. He subsequently navigated significant legal questions about what he could publicly disclose, working under NDA constraints. His 2024 memoir Imminent contains his most detailed public account of AATIP operations, including descriptions of programs he cannot fully name. Elizondo remains one of the most credentialed public advocates: a 20-year DoD career, counterintelligence background, and direct program management of the government\'s primary UAP research effort.`,
    categorie: 'personnel',
    tier: 3,
    tags: ['AATIP', 'Mattis', 'NDA', 'memoir', 'Imminent', 'DoD', 'counterintelligence'],
  },

  {
    id: 'spergel',
    terme: 'Dr. David Spergel',
    definition: `Astrophysicist; President of the Simons Foundation; former Chair of Princeton\'s Astrophysics Department; former Chair of the National Academies Board on Physics and Astronomy. Chaired NASA\'s UAP independent study team (2022–2023), producing the September 2023 NASA UAP report. His involvement was significant: Spergel has impeccable mainstream scientific credentials, including the Gruber Prize in Cosmology. His willingness to chair the UAP study, and his public statements that UAP "potentially represents an opportunity for scientific discovery," represented a major shift in how elite academic scientists engage with the subject. He has stated publicly that more systematic data collection is urgently needed.`,
    categorie: 'personnel',
    tier: 2,
    tags: ['NASA', 'Princeton', 'Simons Foundation', 'cosmology', 'astrophysics', '2023', 'academic'],
  },

  // INSTITUTIONS (ADDITIONAL) ───────────────────────────────

  {
    id: 'faa-uap',
    terme: 'FAA — Federal Aviation Administration (UAP role)',
    acronyme: 'FAA',
    definition: `The U.S. agency responsible for civil aviation safety and airspace management. The FAA is directly relevant to UAP in three ways: (1) it receives pilot UAP reports from commercial and private pilots and routes them to AARO; (2) it manages the airspace in which military UAP encounters (Nimitz, Roosevelt) occurred, including restricted warning areas; (3) its radar data provides independent corroboration for some military UAP tracks. The FAA\'s approach has historically been to avoid publicizing UAP reports to prevent public concern, creating a reporting bias. Americans for Safe Aerospace (Ryan Graves\' organization) has specifically engaged the FAA to reform pilot reporting procedures and reduce stigma.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['FAA', 'aviation', 'pilots', 'reporting', 'Graves', 'ASA', 'radar', 'airspace'],
  },

  {
    id: 'sci-classification',
    terme: 'SCI — Sensitive Compartmented Information',
    acronyme: 'SCI',
    definition: `A classification level above Top Secret, covering intelligence sources and methods that must be protected from unauthorized disclosure. SCI information is handled only in SCIFs and requires specific "code word" access in addition to a TS clearance. Most UAP program data resides at TS/SCI level or above (in SAPs). Congressional members who receive UAP briefings receive them in SCIF environments and are bound by the same access controls as cleared personnel — they cannot discuss SCI content with uncleared staff or publicly. The layered nature of classification (Secret → Top Secret → TS/SCI → SAP → USAP) explains why congressional oversight is so difficult: each layer requires separate authorization.`,
    categorie: 'juridique',
    tier: 2,
    tags: ['classification', 'SCIF', 'Congress', 'clearance', 'oversight', 'intelligence'],
  },

  {
    id: 'boeing-defense',
    terme: 'Boeing Defense, Space & Security',
    definition: `The defense and government division of The Boeing Company; one of the U.S.\'s largest defense contractors, producing the F/A-18 Super Hornet (the aircraft involved in all three declassified Navy UAP video encounters), the E-3 Sentry (AWACS airborne radar), the P-8 Poseidon (maritime patrol aircraft used in ASW operations potentially relevant to transmedium UAP). Boeing\'s direct relevance: the ATFLIR targeting pods used to film the Gimbal, GoFast, and FLIR1 videos were carried by Boeing F/A-18s. As a prime contractor for aircraft and sensor systems used in UAP encounters, Boeing\'s engineering data on platform performance is relevant to anomaly analysis.`,
    categorie: 'institutionnel',
    tier: 3,
    tags: ['contractor', 'F-18', 'AWACS', 'P-8', 'Navy', 'ATFLIR', 'aerospace'],
  },

  {
    id: 'raytheon',
    terme: 'Raytheon Technologies (RTX)',
    definition: `One of the largest U.S. defense contractors, producing the AN/APG-79 AESA radar (F/A-18 Super Hornet), the AN/SPY-6 radar (next-generation Aegis), the ATFLIR targeting pod (used in all three declassified UAP videos), Patriot missile systems, and a wide range of EW and sensors. Raytheon\'s direct UAP relevance: it manufactured the sensors that captured the most significant authenticated UAP footage. The ATFLIR pod\'s operational parameters (field of view, gimbal limits, infrared sensitivity) are central to the technical analysis of the Gimbal, GoFast, and FLIR1 videos. Raytheon holds the technical specifications needed to definitively resolve whether the Gimbal rotation is a sensor artifact — specifications that remain proprietary.`,
    categorie: 'institutionnel',
    tier: 3,
    tags: ['contractor', 'ATFLIR', 'AESA', 'Aegis', 'sensors', 'Gimbal', 'FLIR', 'F-18'],
  },

  {
    id: 'sol-foundation-conference',
    terme: 'Sol Foundation Conference (Stanford, November 2023)',
    definition: `The inaugural academic conference on UAP and non-human intelligence organized by The Sol Foundation at Stanford University, November 2023. The first conference of its kind at a major research university with full institutional backing. Key presentations: Col. Karl Nell (controlled vs catastrophic disclosure framework), Dr. Garry Nolan (materials and biological analysis), Dr. Peter Skafish (anthropological frameworks for NHI contact), and multiple other academics and former government officials. The conference established a formal academic venue for UAP research — a significant institutional shift from the conference being held in fringe settings to a sandstone building at one of the world\'s top universities.`,
    categorie: 'institutionnel',
    tier: 2,
    tags: ['Stanford', 'Sol Foundation', 'Nolan', 'Nell', 'academic', '2023', 'conference'],
  },

  {
    id: 'black-vault',
    terme: 'The Black Vault',
    definition: `An online repository of declassified U.S. government documents founded in 1996 by John Greenewald Jr., who began filing FOIA requests at age 15. The Black Vault has filed over 10,000 FOIA requests and published millions of pages of declassified documents across all national security agencies. For UAP specifically, it is the primary public archive of FOIA-obtained government UAP records — CIA, DIA, NSA, FBI, and AARO documents that would otherwise be inaccessible. Greenewald\'s systematic FOIA methodology has made The Black Vault an indispensable research resource, revealing patterns in government UAP documentation that no single researcher could compile independently.`,
    categorie: 'institutionnel',
    tier: 2,
    sources: [{ label: 'The Black Vault', url: 'https://www.theblackvault.com' }],
    tags: ['FOIA', 'documents', 'Greenewald', 'declassified', 'CIA', 'DIA', 'NSA', 'archive'],
  },

  {
    id: 'national-security-archive',
    terme: 'National Security Archive (George Washington University)',
    definition: `An independent non-governmental research institute at George Washington University that collects and publishes declassified U.S. documents obtained through FOIA, maintaining the world\'s largest non-governmental FOIA document library. The NSA\'s UAP collection includes key Cold War-era documents on Project Blue Book, CIA Robertson Panel records, and State Department cables referencing UAP incidents internationally. Unlike The Black Vault (which focuses on quantity), the NSA provides curated, contextualized document collections with scholarly analysis. Its publications have established primary source baselines for the history of U.S. government UAP engagement.`,
    categorie: 'institutionnel',
    tier: 3,
    sources: [{ label: 'National Security Archive', url: 'https://nsarchive.gwu.edu' }],
    tags: ['GWU', 'FOIA', 'archive', 'academic', 'Cold War', 'historical', 'documents'],
  },


  {
    id: 'lacatski',
    terme: 'Dr. James Lacatski',
    definition: `Defense Intelligence Agency physicist and program manager who initiated and directed AAWSAP — the $22 million DIA program that funded BAASS and the Skinwalker Ranch research. Lacatski is credited with writing the original contract solicitation that created AAWSAP in 2008, making him the institutional architect of the government\'s most ambitious private-sector UAP research program. Co-authored Skinwalkers at the Pentagon: An Insider\'s Account of the Secret Government Program to Study Unidentified Aerial Phenomena (2021) with Dr. Colm Kelleher and George Knapp — the first insider account of AAWSAP written by its director. In appearances on George Knapp and Jeremy Corbell\'s Weaponized podcast, Lacatski made an extraordinary personal claim: that he had a direct anomalous experience during his time with the program in which he describes being inside a craft or anomalous space — a first-person account from the DIA official who ran the program, not a secondhand witness report. His accounts remain unverified but carry exceptional institutional weight given his position as the program\'s architect.`,
    categorie: 'personnel',
    tier: 1,
    tags: ['DIA', 'AAWSAP', 'Skinwalker', 'Weaponized', 'Corbell', 'Knapp', 'physicist', 'firsthand'],
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
