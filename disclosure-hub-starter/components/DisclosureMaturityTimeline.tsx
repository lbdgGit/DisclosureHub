'use client';

import { useState } from 'react';
import { Check, Circle } from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────
type Status = 'achieved' | 'partial' | 'not-achieved';

interface Milestone {
  label: string;
  status: Status;
  note: string;
  type: 'structural' | 'mass-critical';
}

interface CategoryTrack {
  id: string;
  label: string;
  color: string;
  milestones: Milestone[];
}

const TRACKS: CategoryTrack[] = [
  {
    id: 'military',
    label: 'Military',
    color: '#4A7BA7',
    milestones: [
      { label: 'Formal investigation unit exists, with defined mandate and budget', status: 'achieved', note: 'UAPTF (2020), then AARO (2022) — both publicly mandated and funded.', type: 'structural' },
      { label: 'Unit existence publicly acknowledged', status: 'achieved', note: 'Both units announced via official DoD press release.', type: 'structural' },
      { label: 'Protected, non-punitive reporting channels operational', status: 'partial', note: 'AARO accepts reports including from personnel under NDA, with legal anti-reprisal protections — but no documented case confirms the remedy has been used or enforced.', type: 'structural' },
      { label: 'Personnel authorized to give protected testimony to oversight bodies', status: 'achieved', note: 'Fravor (2023) and Grusch (2023) both testified under oath to congressional oversight.', type: 'structural' },
      { label: 'Custody claims of anomalous materials formally investigated', status: 'not-achieved', note: 'Alleged by testimony; not formally investigated or confirmed by any institutional body.', type: 'structural' },
      { label: 'Engagement protocols disclosed; unclassified doctrine released publicly', status: 'not-achieved', note: 'No public doctrine exists.', type: 'structural' },
    ],
  },
  {
    id: 'government',
    label: 'Government',
    color: '#C9A84C',
    milestones: [
      { label: 'Classified internal program exists', status: 'achieved', note: 'AATIP (2007), DIA-funded, $22M.', type: 'structural' },
      { label: 'Existence confirmed to oversight bodies', status: 'achieved', note: 'Confirmed via funding process and Senate records.', type: 'structural' },
      { label: 'Public report describing scope and findings', status: 'achieved', note: 'ODNI (2021), AARO FY2024 Annual Report — 1,652 cases, 21 anomalous.', type: 'structural' },
      { label: 'Independent review body with binding presumptive-release authority', status: 'not-achieved', note: 'NARA holds an archival mandate, not independent declassification authority. This is the structural gap.', type: 'structural' },
      { label: 'Public directive mandating declassification', status: 'achieved', note: 'Trump Truth Social directive, Feb 2026 — a directive, not a formal executive order.', type: 'structural' },
      { label: 'Default-public records policy operational', status: 'not-achieved', note: 'PURSUE releases remain case-by-case reviewed tranches, not automatic.', type: 'structural' },
    ],
  },
  {
    id: 'legislative',
    label: 'Legislative',
    color: '#A78BFA',
    milestones: [
      { label: 'Committees receive formal, recurring classified briefings', status: 'achieved', note: 'Ongoing per AARO semi-annual reporting requirement to Congress.', type: 'structural' },
      { label: 'Public hearings held with sworn witnesses', status: 'achieved', note: '2022, 2023, 2024 hearings — Grusch, Fravor, Elizondo, Gallaudet all under oath.', type: 'structural' },
      { label: 'Whistleblower protection law enacted, with enforceable remedies', status: 'partial', note: 'General federal whistleblower statutes apply; no UAP-specific protection law with a dedicated complaint channel exists yet.', type: 'structural' },
      { label: 'Narrow amnesty for legacy program participants', status: 'not-achieved', note: 'Amnesty provisions exist in the blocked UAPDA bill text — not yet enacted law.', type: 'structural' },
      { label: 'Law enforced — subpoena authority used, records released under compulsion', status: 'not-achieved', note: 'UAPDA blocked for three consecutive NDAA cycles (FY2024, FY2025, FY2026).', type: 'structural' },
    ],
  },
  {
    id: 'scientific',
    label: 'Scientific',
    color: '#4ADE80',
    milestones: [
      { label: 'Peer-reviewed research with disclosed methodology and primary data', status: 'achieved', note: 'Knuth et al. (2019, 2025) — methodology and data disclosed in journal publications.', type: 'structural' },
      { label: 'Research-grade data released with provenance, calibration, metadata', status: 'not-achieved', note: 'AARO publishes summary reports, not raw calibrated sensor data. This is the field\u2019s core chokepoint.', type: 'structural' },
      { label: 'Institutional research program funded', status: 'achieved', note: 'Galileo Project (Harvard, 2021), NASA independent study team (2021).', type: 'structural' },
      { label: 'Replication becomes a recurring, multi-team pattern across multiple claims', status: 'not-achieved', note: 'VASCO/Villarroel results (2025) have been independently re-analyzed by separate researchers with shared data — a genuine first instance. But one case is not yet a pattern; multi-site observational replication is still explicitly pending per the authors themselves.', type: 'mass-critical' },
      { label: 'Cross-disciplinary uptake — history, sociology, anthropology engage independently', status: 'not-achieved', note: 'No evidence yet of independent engagement from fields outside physics/aerospace.', type: 'mass-critical' },
      { label: 'Field consensus on methods and specific findings', status: 'not-achieved', note: 'No consensus statement exists.', type: 'mass-critical' },
      { label: 'Integration into mainstream curricula', status: 'not-achieved', note: 'Not present in standard science curricula.', type: 'mass-critical' },
    ],
  },
  {
    id: 'international',
    label: 'International',
    color: '#FB923C',
    milestones: [
      { label: 'Unilateral state-level study', status: 'achieved', note: 'GEIPAN (France, 1977) — the most mature single-state program globally, still active.', type: 'structural' },
      { label: 'Bilateral intelligence-sharing arrangement', status: 'not-achieved', note: 'Japan\u2019s analysis of US-released PURSUE files is unilateral review of public material, not a sharing arrangement.', type: 'structural' },
      { label: 'Multilateral sharing within existing alliances (Five Eyes, NATO-type)', status: 'not-achieved', note: 'No evidence of alliance-level UAP information sharing.', type: 'structural' },
      { label: 'Joint public statement by multiple governments', status: 'not-achieved', note: 'No joint statement exists.', type: 'structural' },
      { label: 'Binding treaty or international agreement with verification provisions', status: 'not-achieved', note: 'No treaty framework exists.', type: 'structural' },
    ],
  },
  {
    id: 'financial',
    label: 'Financial',
    color: '#F87171',
    milestones: [
      { label: 'Independent analyst flags the risk publicly', status: 'achieved', note: 'Helen McCaw, former Bank of England analyst, Jan 2026.', type: 'structural' },
      { label: 'Major institution formally classifies the risk', status: 'achieved', note: 'Deloitte AG GPMESII 2026 Risk Intelligence Report — credible Black Swan classification.', type: 'structural' },
      { label: 'Mandatory disclosure obligation for exposed public companies', status: 'not-achieved', note: 'No SEC, AMF, or equivalent regulator requires UAP-related risk disclosure.', type: 'structural' },
      { label: 'Dedicated financial product exists', status: 'achieved', note: 'UFOD ETF, CBOE, Feb 2026 — first listed UAP disclosure fund.', type: 'structural' },
      { label: 'Central bank / regulator contingency guidance', status: 'not-achieved', note: 'McCaw spoke as a former analyst, not as an institutional position of the Bank of England.', type: 'structural' },
      { label: 'Structural asset repricing confirmed by multiple independent attribution studies', status: 'not-achieved', note: 'No attribution study yet isolates UAP-related signal from other macro factors.', type: 'mass-critical' },
    ],
  },
  {
    id: 'media',
    label: 'Media',
    color: '#22D3EE',
    milestones: [
      { label: 'Reputable outlet publishes independently verified documentary evidence', status: 'achieved', note: 'New York Times, Dec 2017 — AATIP revelation, first Navy videos.', type: 'structural' },
      { label: 'Corroboration by multiple editorially independent outlets', status: 'not-achieved', note: 'Broad coverage exists but is reactive to single events, not independent multi-outlet corroboration of a specific claim.', type: 'mass-critical' },
      { label: 'On-record statements from named officials in mainstream outlets', status: 'partial', note: '"The Age of Disclosure" (2025) is a strong single instance — Rubio, Stratton, Carson on record. Not yet a recurring occurrence.', type: 'mass-critical' },
      { label: 'Routine, de-stigmatized treatment', status: 'not-achieved', note: 'No dedicated specialist correspondents at major outlets; coverage remains event-driven.', type: 'mass-critical' },
      { label: 'Cross-generational cultural normalization', status: 'not-achieved', note: 'No longitudinal survey data supports this yet.', type: 'mass-critical' },
    ],
  },
];

// ─── Status visuals ─────────────────────────────────────────
const STATUS_CONFIG: Record<Status, { label: string }> = {
  achieved:       { label: 'Achieved' },
  partial:        { label: 'Partial' },
  'not-achieved': { label: 'Not yet' },
};

function StatusIcon({ status, color }: { status: Status; color: string }) {
  if (status === 'achieved') return <Check size={11} strokeWidth={3} color="#1B2A4A" />;
  if (status === 'partial') return <Circle size={9} strokeWidth={2.5} fill={color} color={color} style={{ opacity: 0.6 }} />;
  return <Circle size={9} strokeWidth={2} color={color} style={{ opacity: 0.5 }} />;
}

function MilestoneRow({ m, color }: { m: Milestone; color: string }) {
  const isAchieved = m.status === 'achieved';
  const isPartial = m.status === 'partial';
  const opacity = m.status === 'not-achieved' ? 0.42 : 1;

  return (
    <div style={{ display: 'flex', gap: 12, opacity, alignItems: 'flex-start' }}>
      {/* Vertical line + dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 20, flexShrink: 0 }}>
        <div style={{
          width: 20, height: 20, borderRadius: '50%',
          background: isAchieved ? color : isPartial ? `${color}30` : 'transparent',
          border: `1.5px solid ${isAchieved ? color : color + '80'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <StatusIcon status={m.status} color={isAchieved ? '#1B2A4A' : color} />
        </div>
        <div style={{ width: 1.5, flex: 1, minHeight: 14, background: `${color}30`, marginTop: 2 }} />
      </div>

      {/* Content */}
      <div style={{ paddingBottom: 16, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 3 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#1B2A4A', lineHeight: 1.4 }}>{m.label}</span>
          {m.type === 'mass-critical' && (
            <span style={{
              fontFamily: 'DM Mono, monospace', fontSize: 8, letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '1px 6px', borderRadius: 3, background: '#F1F5F9', color: '#8A9BB5', flexShrink: 0,
            }}>
              requires pattern
            </span>
          )}
        </div>
        <p style={{ fontSize: 12, color: '#6B7A8D', lineHeight: 1.55, margin: 0 }}>{m.note}</p>
      </div>
    </div>
  );
}

function CategorySection({ track }: { track: CategoryTrack }) {
  const achieved = track.milestones.filter(m => m.status === 'achieved').length;
  const total = track.milestones.length;

  return (
    <div style={{ marginBottom: 8 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <div style={{ width: 10, height: 10, borderRadius: 3, background: track.color, flexShrink: 0 }} />
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 19, fontWeight: 600, color: '#1B2A4A', margin: 0 }}>
          {track.label}
        </h3>
        <span style={{
          fontFamily: 'DM Mono, monospace', fontSize: 11, color: track.color,
          background: `${track.color}15`, padding: '3px 9px', borderRadius: 4, marginLeft: 'auto',
        }}>
          {achieved} / {total} achieved
        </span>
      </div>
      <div>
        {track.milestones.map((m, i) => (
          <MilestoneRow key={i} m={m} color={track.color} />
        ))}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div style={{
      background: '#FAF8F4', border: '1px solid #E2E8F0', borderRadius: 8,
      padding: '14px 18px', marginBottom: 28,
      display: 'flex', flexWrap: 'wrap', gap: '14px 28px', alignItems: 'center',
    }}>
      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#8A9BB5', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Legend
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 16, height: 16, borderRadius: '50%', background: '#1B2A4A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Check size={9} strokeWidth={3} color="white" />
        </span>
        <span style={{ fontSize: 12, color: '#4A5D78' }}>Achieved — confirmed by primary source</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 16, height: 16, borderRadius: '50%', border: '1.5px solid #8A9BB5', background: 'rgba(138,155,181,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Circle size={7} strokeWidth={2.5} fill="#8A9BB5" color="#8A9BB5" style={{ opacity: 0.6 }} />
        </span>
        <span style={{ fontSize: 12, color: '#4A5D78' }}>Partial — exists in part, not fully verified</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, opacity: 0.6 }}>
        <span style={{ width: 16, height: 16, borderRadius: '50%', border: '1.5px solid #8A9BB5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Circle size={7} strokeWidth={2} color="#8A9BB5" />
        </span>
        <span style={{ fontSize: 12, color: '#4A5D78' }}>Not yet — no confirming event</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{
          fontFamily: 'DM Mono, monospace', fontSize: 8, letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '1px 6px', borderRadius: 3, background: '#F1F5F9', color: '#8A9BB5',
        }}>requires pattern</span>
        <span style={{ fontSize: 12, color: '#4A5D78' }}>Needs multiple independent instances — one event cannot complete this</span>
      </div>
    </div>
  );
}

export function DisclosureMaturityTimeline() {
  const [activeTrack, setActiveTrack] = useState<string>('all');

  const totalAchieved = TRACKS.reduce((sum, t) => sum + t.milestones.filter(m => m.status === 'achieved').length, 0);
  const totalMilestones = TRACKS.reduce((sum, t) => sum + t.milestones.length, 0);

  const visibleTracks = activeTrack === 'all' ? TRACKS : TRACKS.filter(t => t.id === activeTrack);

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif' }}>

      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8A9BB5', marginBottom: 8 }}>
          LBDG · Disclosure Maturity Tracker
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 600, color: '#1B2A4A', marginBottom: 8 }}>
          How far has each institutional track actually progressed?
        </h2>
        <p style={{ fontSize: 13, color: '#6B7A8D', lineHeight: 1.6, maxWidth: 640 }}>
          Seven independent tracks, each with its own logical milestones from zero institutional engagement to full transparency. Milestones are validated against named institutions and primary sources only — no track is assumed to follow another's pace.
        </p>
      </div>

      <Legend />

      {/* Filter pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
        <button
          onClick={() => setActiveTrack('all')}
          style={{
            padding: '5px 12px', borderRadius: 5, cursor: 'pointer', fontFamily: 'DM Mono, monospace', fontSize: 11,
            border: `1px solid ${activeTrack === 'all' ? '#1B2A4A' : '#E2E8F0'}`,
            background: activeTrack === 'all' ? '#1B2A4A' : 'white',
            color: activeTrack === 'all' ? 'white' : '#8A9BB5',
          }}
        >
          All tracks · {totalAchieved}/{totalMilestones}
        </button>
        {TRACKS.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTrack(t.id)}
            style={{
              padding: '5px 12px', borderRadius: 5, cursor: 'pointer', fontFamily: 'DM Mono, monospace', fontSize: 11,
              border: `1px solid ${activeTrack === t.id ? t.color : '#E2E8F0'}`,
              background: activeTrack === t.id ? `${t.color}18` : 'white',
              color: activeTrack === t.id ? t.color : '#8A9BB5',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 2, background: t.color }} />
            {t.label}
          </button>
        ))}
      </div>

      {/* Tracks */}
      <div style={{ display: 'grid', gridTemplateColumns: activeTrack === 'all' ? 'repeat(auto-fit, minmax(380px, 1fr))' : '1fr', gap: '8px 32px' }}>
        {visibleTracks.map(track => (
          <CategorySection key={track.id} track={track} />
        ))}
      </div>

      {/* Footer note */}
      <div style={{ marginTop: 24, padding: '14px 18px', background: '#F8F9FA', borderRadius: 8, border: '1px solid #E2E8F0' }}>
        <p style={{ fontSize: 12, color: '#6B7A8D', lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: '#1B2A4A' }}>Worth noting:</strong> Government, Scientific, and Financial each show the same pattern — a visible, fast-moving milestone was reached while a structurally accountable one was skipped (an executive directive before an independent declassification authority; a funded research program before raw data release; a financial product before a disclosure mandate). Politically and commercially convenient steps consistently outpace structurally accountable ones.
        </p>
      </div>
    </div>
  );
}
