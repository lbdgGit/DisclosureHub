'use client';

import Link from 'next/link';

const SCENARIOS = [
  { id: 'A',  label: 'Scenario A',  desc: 'UAP origin officially attributed to NHI. No crafts, tech or biologics confirmed.', isEnd: false },
  { id: 'B1', label: 'Scenario B1', desc: 'Crash retrieval confirmed. No technology mastered or disclosed.', isEnd: false },
  { id: 'B2', label: 'Scenario B2', desc: 'Partial reverse engineering confirmed. Tech held as national asset.', isEnd: false },
  { id: 'C',  label: 'Scenario C',  desc: 'Confirmed ongoing contact with non-human intelligence.', isEnd: true },
];

type ImpactLevel = 'manageable' | 'disruptive' | 'transformative' | 'systemic' | 'existential';
interface Cell { level: ImpactLevel; text: string; }

const CELLS: Record<string, Cell> = {
  'prepared-A':   { level: 'manageable',    text: 'Holding statement issued within H+1. Board briefed within H+4. No internal confusion, no media scrambling.' },
  'prepared-B1':  { level: 'manageable',    text: 'Sector exposure pre-mapped. Treasury triggers pre-authorized. Capital allocation decisions made within H+24, not weeks.' },
  'prepared-B2':  { level: 'disruptive',    text: 'Energy/materials exposure already audited. Board reviews repricing scenarios same week. No emergency restructuring needed.' },
  'prepared-C':   { level: 'transformative',text: 'Crisis governance activated on schedule. Existing playbooks adapted, not built from scratch. Leadership retains decision authority throughout.' },
  'partial-A':    { level: 'manageable',    text: 'Comms team scrambles for 48h before stabilizing. Some internal confusion. No reputational damage if response lands within the week.' },
  'partial-B1':   { level: 'disruptive',    text: 'Finance team builds exposure analysis reactively. Board requests emergency briefing. Capital decisions delayed 1-2 weeks vs prepared peers.' },
  'partial-B2':   { level: 'transformative',text: 'Board convenes emergency sessions without a pre-built framework. Decision authority unclear. External advisors brought in under time pressure.' },
  'partial-C':    { level: 'systemic',      text: 'Existing governance structures strain under decision volume. No clear chain of command for crisis-scale choices. Leadership fatigue sets in within days.' },
  'unprepared-A': { level: 'disruptive',    text: 'No holding statement exists. Employees and stakeholders learn from external media first. Leadership response is reactive and inconsistent across channels.' },
  'unprepared-B1':{ level: 'transformative',text: 'No one owns the decision. CFO and board discover exposure gaps in real time. External counsel and advisors engaged under maximum time pressure.' },
  'unprepared-B2':{ level: 'systemic',      text: 'No existing framework for the scale of decisions required. Leadership turnover risk rises. Operational paralysis while basic questions get answered for the first time.' },
  'unprepared-C': { level: 'existential',   text: 'No functioning decision structure exists for this scale of disruption. Organizational continuity itself becomes the open question, independent of sector or size.' },
};

const IMPACT_CONFIG: Record<ImpactLevel, { label: string; bg: string; border: string; labelColor: string; textColor: string }> = {
  manageable:    { label: 'Manageable',    bg: '#EAF3DE', border: '#97C459', labelColor: '#2D5A0E', textColor: '#4A7A1E' },
  disruptive:    { label: 'Disruptive',    bg: '#FEF3E2', border: '#E8A030', labelColor: '#7A4010', textColor: '#A05820' },
  transformative:{ label: 'Transformative',bg: '#FAECE7', border: '#D85A30', labelColor: '#6B2510', textColor: '#8B3520' },
  systemic:      { label: 'Systemic',      bg: '#FCEBEB', border: '#E24B4A', labelColor: '#701A1A', textColor: '#952525' },
  existential:   { label: 'Existential',   bg: '#F5D5D5', border: '#A32D2D', labelColor: '#3D0808', textColor: '#6B1212' },
};

const PREP_LEVELS = [
  { id: 'prepared',   label: 'Prepared',   desc: 'Protocols in place. Board-level readiness. Gradual disclosure absorbed into planning.' },
  { id: 'partial',    label: 'Partial',    desc: 'Awareness growing. Some protocols exist. Governments behind curve.', note: 'Current state.' },
  { id: 'unprepared', label: 'Unprepared', desc: 'No protocols. Complete surprise. No board-level readiness. No playbook exists.' },
];

const LEGEND_ITEMS: ImpactLevel[] = ['manageable', 'disruptive', 'transformative', 'systemic', 'existential'];

const SECTORS = [
  { name: 'Defense — circle of trust',  risk: 10, dir: 'opportunity', scenario: 'B1/B2/C'       },
  { name: 'Cybersecurity / EW',         risk: 8,  dir: 'opportunity', scenario: 'All'            },
  { name: 'Gold / Safe havens',         risk: 7,  dir: 'opportunity', scenario: 'All'            },
  { name: 'Rare earths / Materials',    risk: 6,  dir: 'opportunity', scenario: 'B2'             },
  { name: 'Consumer staples',           risk: 5,  dir: 'watch',       scenario: 'C rotation'     },
  { name: 'Defense — legacy exposure',  risk: 5,  dir: 'watch',       scenario: 'B2/C legal'     },
  { name: 'Media / Information',        risk: 4,  dir: 'watch',       scenario: 'A/B1'           },
  { name: 'Financials / Banks',         risk: 7,  dir: 'risk',        scenario: 'B1/C'           },
  { name: 'Airlines / Travel',          risk: 8,  dir: 'risk',        scenario: 'A/B1/C'         },
  { name: 'Energy (conventional)',      risk: 3,  dir: 'risk',        scenario: 'B2 20-30y only' },
];

const TOOLKITS = [
  { name: 'HR Toolkit',             href: '/toolkits#hr',          scenario: 'DVI 3+ — Monitor',    desc: 'Workforce readiness, psychological protocols, internal comms.' },
  { name: 'Finance Toolkit',        href: '/toolkits#finance',     scenario: 'DVI 5+ — Readiness',  desc: 'Asset rotation, sector exposure, treasury protocols.' },
  { name: 'Communications Toolkit', href: '/toolkits#comms',       scenario: 'DVI 5+ — Readiness',  desc: 'Stakeholder messaging, crisis comms, media frameworks.' },
  { name: 'Legal & Compliance',     href: '/toolkits#legal',       scenario: 'DVI 5+ — Readiness',  desc: 'Reg FD / AMF obligations, disclosure triggers, record management.' },
  { name: 'Leadership & Board',     href: '/toolkits#board',       scenario: 'DVI 5+ — Readiness',  desc: 'Board-level governance, decision authority matrix, scenario planning.' },
  { name: 'Marketing Toolkit',      href: '/toolkits#marketing',   scenario: 'DVI 7+ — Activation', desc: 'Demand model review, campaign pause/adapt, brand narrative.' },
  { name: 'Supply Chain Toolkit',   href: '/toolkits#supplychain', scenario: 'DVI 7+ — Activation', desc: 'Supplier exposure mapping, demand surge, logistics continuity.' },
  { name: 'Investor Relations',     href: '/toolkits#ir',          scenario: 'DVI 7+ — Activation', desc: 'Investor call scripts, analyst FAQ, SEC/AMF filing obligations.' },
];

const COL_Y = 130;
const COL_X = 150;
const MATRIX_MIN_WIDTH = COL_Y + COL_X * 4 + 6 * 5;

export default function FrameworkPage() {
  return (
    <main style={{ backgroundColor: '#FAF8F4', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#1B2A4A', padding: '80px 24px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 20 }}>
            LBDG · Scenarios & Impact
          </p>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 500, color: '#FAF8F4', lineHeight: 1.2, marginBottom: 20 }}>
            Disclosure Impact Matrix
          </h1>
          <p style={{ fontSize: 16, color: '#8A9BB5', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            Direction is certain. Velocity is not. Your preparedness level determines where your organization stands when each disclosure threshold is crossed.
          </p>
        </div>
      </section>

      {/* Matrix */}
      <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <div style={{ minWidth: MATRIX_MIN_WIDTH + 46 }}>

            {/* X axis label */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
              <div style={{ width: 46, flexShrink: 0 }} />
              <div style={{ width: COL_Y, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.08em', color: '#8A9BB5', textAlign: 'center', marginBottom: 4 }}>
                  Disclosure path — direction certain, velocity unknown
                </p>
                <div style={{ position: 'relative', height: 12, display: 'flex', alignItems: 'center' }}>
                  <div style={{ flex: 1, height: 1.5, background: 'linear-gradient(to right, #C7D2DE, #E24B4A)', borderRadius: 2, position: 'relative' }}>
                    <div style={{ position: 'absolute', right: -1, top: -4, width: 0, height: 0, borderLeft: '7px solid #E24B4A', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Column headers */}
            <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
              <div style={{ width: 46, flexShrink: 0 }} />
              <div style={{ width: COL_Y, flexShrink: 0 }} />
              {SCENARIOS.map(sc => (
                <div key={sc.id} style={{ width: COL_X, flexShrink: 0, textAlign: 'center' }}>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: sc.isEnd ? '#C9A84C' : '#8A9BB5', fontWeight: sc.isEnd ? 600 : 400 }}>
                    {sc.isEnd ? 'C — end state' : sc.id}
                  </p>
                </div>
              ))}
            </div>

            {/* Y axis + grid */}
            <div style={{ display: 'flex', gap: 6, alignItems: 'stretch' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', width: 40, flexShrink: 0, paddingTop: 68 }}>
                <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8A9BB5', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, fontFamily: 'DM Mono, monospace' }}>
                  Preparedness level
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 12 }}>
                  <div style={{ flex: 1, width: 1.5, background: '#C7D2DE', borderRadius: 2, position: 'relative' }}>
                    <div style={{ position: 'absolute', top: -1, left: -3, width: 0, height: 0, borderBottom: '7px solid #8A9BB5', borderLeft: '4px solid transparent', borderRight: '4px solid transparent' }} />
                  </div>
                </div>
                <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: 9, letterSpacing: '0.06em', color: '#C9A84C', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, fontFamily: 'DM Mono, monospace' }}>
                  You control this
                </div>
              </div>

              <div style={{ flex: 1 }}>
                {/* Scenario row */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                  <div style={{ width: COL_Y, flexShrink: 0 }} />
                  {SCENARIOS.map(sc => (
                    <div key={sc.id} style={{ width: COL_X, flexShrink: 0, backgroundColor: sc.isEnd ? '#1B2A4A' : '#FFFFFF', border: sc.isEnd ? '1.5px solid #C9A84C' : '1px solid #E2E8F0', borderRadius: 8, padding: '10px 12px', minHeight: 60, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 600, color: sc.isEnd ? '#C9A84C' : '#1B2A4A', marginBottom: 3 }}>
                        {sc.label}
                      </p>
                      <p style={{ fontSize: 10, color: sc.isEnd ? '#8A9BB5' : '#6B7A8D', lineHeight: 1.4 }}>{sc.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Impact rows */}
                {PREP_LEVELS.map(prep => (
                  <div key={prep.id} style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                    <div style={{ width: COL_Y, flexShrink: 0, backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 8, padding: '12px 14px', minHeight: 96, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ fontSize: 13, fontWeight: 600, color: '#1B2A4A', marginBottom: 4 }}>{prep.label}</p>
                      <p style={{ fontSize: 10, color: '#8A9BB5', lineHeight: 1.4 }}>{prep.desc}</p>
                      {prep.note && <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, color: '#C9A84C', marginTop: 5, letterSpacing: '0.04em' }}>{prep.note}</p>}
                    </div>
                    {SCENARIOS.map(sc => {
                      const key = `${prep.id}-${sc.id}`;
                      const cell = CELLS[key];
                      if (!cell) return <div key={sc.id} style={{ width: COL_X, flexShrink: 0 }} />;
                      const config = IMPACT_CONFIG[cell.level];
                      return (
                        <div key={sc.id} style={{ width: COL_X, flexShrink: 0, backgroundColor: config.bg, border: `1px solid ${config.border}`, borderRadius: 8, padding: '10px 12px', minHeight: 96, display: 'flex', flexDirection: 'column' }}>
                          <p style={{ fontSize: 12, fontWeight: 600, color: config.labelColor, marginBottom: 4 }}>{config.label}</p>
                          <p style={{ fontSize: 10, color: config.textColor, lineHeight: 1.5 }}>{cell.text}</p>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '10px 24px',
              marginTop: 28, marginLeft: 46,
              padding: '16px 20px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: 8,
            }}>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A9BB5', display: 'flex', alignItems: 'center' }}>
                Impact level
              </span>
              {LEGEND_ITEMS.map(level => {
                const config = IMPACT_CONFIG[level];
                return (
                  <div key={level} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{ width: 11, height: 11, borderRadius: 3, backgroundColor: config.bg, border: `1.5px solid ${config.border}`, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: '#4A5568', fontFamily: 'DM Mono, monospace' }}>{config.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modifier notes */}
      <section style={{ padding: '0 24px 48px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '3px solid #E8A030', borderRadius: 8, padding: '16px 20px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E8A030', marginBottom: 8 }}>Governance agility as a modifier</p>
            <p style={{ fontSize: 12, color: '#6B7A8D', lineHeight: 1.7 }}>
              A board that takes three weeks to approve a press release shifts your effective position downward on the preparedness axis — regardless of which protocols exist on paper. Preparedness is not just having the playbook. It is the speed at which your organization can activate it.
            </p>
          </div>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderLeft: '3px solid #E24B4A', borderRadius: 8, padding: '16px 20px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E24B4A', marginBottom: 8 }}>The velocity variable</p>
            <p style={{ fontSize: 12, color: '#6B7A8D', lineHeight: 1.7 }}>
              The faster disclosure moves from A to C, the less time organizations have to climb the preparedness axis. An abrupt jump — leak, arrival, uncontrolled event — compresses that window to days. You cannot control the scenario. You can only control where you stand on the Y axis when each threshold is crossed.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTOR RISK HEATMAP ── */}
      <section style={{ padding: '0 24px 64px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 8 }}>
            Sector exposure
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: '#1B2A4A', marginBottom: 8 }}>
            How is your industry affected?
          </h2>
          <p style={{ fontSize: 14, color: '#6B7A8D', maxWidth: 560 }}>
            Exposure varies significantly by sector and scenario. Cross-reference with the matrix above to identify your organization's position.
          </p>
        </div>
        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 10, padding: '20px 24px' }}>
          <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: '#8A9BB5', letterSpacing: '0.15em', marginBottom: 16 }}>
            SECTOR RISK HEATMAP
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {SECTORS.map(s => {
              const c  = s.dir === 'opportunity' ? '#4ADE80' : s.dir === 'watch' ? '#FCD34D' : '#F87171';
              const tc = s.dir === 'opportunity' ? '#166534' : s.dir === 'watch' ? '#92600A' : '#991B1B';
              return (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ fontSize: 13, color: '#1B2A4A', width: 220, flexShrink: 0 }}>{s.name}</div>
                  <div style={{ flex: 1, height: 16, background: '#F1F5F9', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.risk * 10}%`, background: c, borderRadius: 3 }} />
                  </div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: tc, width: 90, flexShrink: 0 }}>{s.scenario}</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
            {[{ label: 'Opportunity', c: '#4ADE80' }, { label: 'Watch', c: '#FCD34D' }, { label: 'High risk', c: '#F87171' }].map(({ label, c }) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#6B7A8D' }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: c, flexShrink: 0 }} />{label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trajectories */}
      <section style={{ backgroundColor: '#1B2A4A', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
            Three probable trajectories
          </p>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: '#FAF8F4', marginBottom: 40 }}>
            Where is the world heading — and how fast?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { color: '#4A9A5E', label: 'Current trajectory',      text: 'World is at A/Partial today — PURSUE releases ongoing. Gradual drift toward B1 over 12-24 months. Organizations that act now move up the Y axis before the next threshold is crossed.' },
              { color: '#C9A84C', label: 'Ideal trajectory',         text: 'Preparedness grows faster than disclosure intensity. Organizations stay in green/yellow even as scenarios escalate. Requires action before the next tranche — not after.' },
              { color: '#E24B4A', label: 'Catastrophic trajectory',  text: 'Abrupt jump to C with world at Unprepared — arrival scenario, uncontrolled leak, or intelligence failure. Bottom-right cell. No playbook exists. This is the scenario that justifies building the infrastructure now.' },
            ].map(t => (
              <div key={t.label} style={{ borderTop: `2px solid ${t.color}`, paddingTop: 16 }}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: t.color, marginBottom: 10 }}>{t.label}</p>
                <p style={{ fontSize: 13, color: '#8A9BB5', lineHeight: 1.7 }}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Toolkits */}
      <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>
          From matrix to action
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500, color: '#1B2A4A', marginBottom: 8 }}>
          Identify your scenario. Access the right toolkit.
        </h2>
        <p style={{ fontSize: 14, color: '#6B7A8D', marginBottom: 40, maxWidth: 560 }}>
          Each toolkit maps directly to the matrix. Start where you are.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {TOOLKITS.map(tk => {
            const isActivation = tk.scenario.includes('7+');
            const labelColor = isActivation ? '#E24B4A' : tk.scenario.includes('3+') ? '#4A9A5E' : '#E8A030';
            return (
            <Link key={tk.name} href={tk.href} style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 10, padding: '20px 22px', height: '100%', cursor: 'pointer', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#E2E8F0')}
              >
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: labelColor, marginBottom: 8 }}>{tk.scenario}</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#1B2A4A', marginBottom: 6 }}>{tk.name}</p>
                <p style={{ fontSize: 12, color: '#8A9BB5', lineHeight: 1.5 }}>{tk.desc}</p>
              </div>
            </Link>
            );
          })}
        </div>
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <Link href="/toolkits" style={{ display: 'inline-block', backgroundColor: '#1B2A4A', color: '#FAF8F4', padding: '14px 32px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.02em' }}>
            View all toolkits
          </Link>
        </div>
      </section>

    </main>
  );
}
