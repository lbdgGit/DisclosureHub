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

export const CHAT_NODES: ChatNode[] = [
  {
    id: 'greeting',
    message: 'Hello',
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'greetings'],
    response:
      "Welcome to **Signal**, LBDG's information terminal on the disclosure process.\n\nI am a documentary assistant based on verified institutional sources. I can help you understand key concepts, institutional actors, historical events, and organizational risk frameworks.\n\nWhat would you like to explore?",
    followups: [
      'What exactly is Disclosure?',
      'What official testimonies exist?',
      'What is AARO?',
    ],
  },
  {
    id: 'disclosure-definition',
    message: 'What is Disclosure',
    keywords: ['disclosure', 'what is', 'define', 'meaning', 'announcement'],
    response:
      "**Disclosure** refers to the official, public acknowledgment by a government of the confirmed existence of non-human phenomena or entities.\n\nTwo types are distinguished:\n- **Soft disclosure**: orchestrated leaks, progressive declassifications, implied statements — where we currently are\n- **Hard disclosure**: a direct statement from a head of state or multi-government announcement\n\nSince 2017, a clear soft disclosure sequence has been underway: Navy video declassifications (2020), congressional hearings (2023), NASA report (2023), Trump executive order (Feb 2026), Pentagon PURSUE program (May 2026).",
    followups: [
      'Who are the key whistleblowers?',
      'What did Secretary Rubio say?',
      'What is the PURSUE program?',
    ],
  },
  {
    id: 'aaro',
    message: 'What is AARO',
    keywords: ['aaro', 'pentagon', 'department of defense', 'dod', 'all-domain'],
    response:
      "**AARO** (All-domain Anomaly Resolution Office) is the official Pentagon office created in July 2022 to centralize UAP analysis.\n\nKey facts:\n- Caseload exceeds **2,000 reports** dating to 1945 (confirmed by Sec. Hegseth, 2026)\n- Collects military and civilian reports across air, sea, space, and underwater domains\n- Publishes semi-annual reports to Congress\n- Operates a confidential reporting portal\n\nAAROʼs March 2024 historical report contested Grusch's allegations — a controversy that continues.",
    followups: [
      'Who is David Grusch?',
      'What is in the AARO 2024 report?',
    ],
  },
  {
    id: 'grusch',
    message: 'Who is David Grusch',
    keywords: ['grusch', 'whistleblower', 'congressional testimony', 'sworn testimony'],
    response:
      "**David Grusch** is a former U.S. intelligence officer (NGA & AARO). In July 2023, he testified **under oath** before Congress:\n\n• Secret programs for recovery of non-human craft exist\n• Biological materials have been recovered\n• These programs are operated outside standard congressional oversight\n\nThis was the first statement of this type made under oath in U.S. institutional history. He is protected under whistleblower statutes.\n\nIn November 2025, former UAP Task Force Director **Jay Stratton** independently stated on record: *\"I have seen, with my own eyes, non-human craft and non-human beings.\"*",
    followups: [
      'Who is Jay Stratton?',
      'What did Marco Rubio say?',
      'What is The Age of Disclosure?',
    ],
  },
  {
    id: 'rubio',
    message: 'What did Rubio say',
    keywords: ['rubio', 'secretary of state', 'nuclear', 'age of disclosure'],
    response:
      "**Marco Rubio**, U.S. Secretary of State and former Vice-Chairman of the Senate Intelligence Committee, stated in *The Age of Disclosure* (Amazon Prime, 2025):\n\n*\"We've had repeated instances of something operating in the airspace over restricted nuclear facilities — and it's not ours.\"*\n\nAnd: *\"Even presidents have been operating on a need-to-know basis, but that begins to ramp out of control.\"*\n\nThe sitting U.S. Secretary of State making these statements on record is without precedent in the history of disclosure. The documentary features **34 senior officials** from across the U.S. government and intelligence community.",
    followups: [
      'What is The Age of Disclosure documentary?',
      'What is the LBDG signal level?',
    ],
  },
  {
    id: 'nimitz',
    message: 'USS Nimitz incident',
    keywords: ['nimitz', 'tic-tac', 'fravor', 'navy', '2004', 'flir'],
    response:
      "The **USS Nimitz incident** (November 2004) is one of the best-documented cases:\n\n- Commander **David Fravor** and 3 other F/A-18 pilots observe a wingless Tic-Tac shaped object\n- No wings, no thermal signature, impossible accelerations\n- The **FLIR1 video** was declassified by the Pentagon in April 2020\n- Pentagon confirmed authenticity *\"to clear up any misconception on whether the footage was real\"*\n- AARO classifies this case as **unresolved**\n\nFravor testified to Congress in 2023: *\"I have never seen anything in my life, in the air, that could do what that thing did.\"*",
    followups: [
      'What other videos have been declassified?',
      'What are the Five Observables?',
    ],
  },
  {
    id: 'five-observables',
    message: 'The Five Observables',
    keywords: ['five observables', '5 observables', 'elizondo', 'physics', 'anti-gravity', 'transmedium'],
    response:
      "The **Five Observables** framework was defined by Lue Elizondo (former AATIP director) to characterize UAP:\n\n1. **Anti-gravity lift** — flight without apparent lift mechanisms\n2. **Hypersonic velocity** — no acoustic signature or thermal trail\n3. **Low observability** — multi-spectrum stealth\n4. **Trans-medium travel** — air / water / space transition without speed change\n5. **Positive lift** — apparent manipulation of inertia\n\nNo known human technology combines all five properties simultaneously. This framework is now referenced in congressional testimony and official analyses.",
    followups: [
      'Who is Lue Elizondo?',
      'What is the LBDG Finance Toolkit?',
    ],
  },
  {
    id: 'pursue',
    message: 'What is PURSUE',
    keywords: ['pursue', 'war.gov', 'declassification', 'files released', 'trump executive order'],
    response:
      "**PURSUE** is the Pentagon's rolling declassification program launched in May 2026 at war.gov/ufo, following President Trump's executive order of February 20, 2026.\n\nKey facts:\n- **162 files** released in the initial batch (FBI, DoD, NASA, State Department)\n- Rolling release ongoing — more files expected\n- Defense Secretary Hegseth confirmed the goal: *\"maximum transparency\"*\n- Japan immediately confirmed analyzing files relating to UAP near Japan\n- The archive received over 1 billion views within days of launch\n\nThis is the most significant official declassification in the history of UAP disclosure.",
    followups: [
      'What was Trump\'s executive order?',
      'What is the current LBDG signal level?',
    ],
  },
  {
    id: 'default',
    message: '',
    keywords: [],
    response:
      "I don't have a specific answer in my knowledge base for that question. I recommend:\n\n- Checking our **Glossary** for official definitions\n- Browsing the **Timeline** for historical events\n- Reading our **FAQ** for common questions\n- Visiting the **Signal Board** for current institutional signals\n\nFor in-depth analysis, our operational **toolkits** cover the organizational, financial, and communications dimensions of the disclosure scenario.",
    followups: [
      'View the Glossary',
      'View the Timeline',
      'View the Signal Board',
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
  return CHAT_NODES.find((n) => n.id === 'default')!;
}
