'use client';

import Link from 'next/link';

const SCENARIOS = [
  {
    id: 'A',
    label: 'Scenario A',
    desc: 'UAP origin officially attributed to NHI. No crafts, tech or biologics confirmed.',
    isEnd: false,
  },
  {
    id: 'B1',
    label: 'Scenario B1',
    desc: 'Crash retrieval confirmed. No technology mastered or disclosed.',
    isEnd: false,
  },
  {
    id: 'B2',
    label: 'Scenario B2',
    desc: 'Partial reverse engineering confirmed. Tech held as national asset.',
    isEnd: false,
    optional: true,
  },
  {
    id: 'C',
    label: 'Scenario C',
    desc: 'Confirmed ongoing contact with non-human intelligence.',
    isEnd: true,
  },
];

type ImpactLevel = 'manageable' | 'disruptive' | 'transformative' | 'systemic' | 'existential';

interface Cell {
  level: ImpactLevel;
  text: string;
}

const CELLS: Record<string, Cell> = {
  'prepared-A':   { level: 'manageable',    text: 'Markets absorb within days. Messaging activated. No governance gap exposed.' },
  'prepared-B1':  { level: 'manageable',    text: 'Orderly sector rotation. Defense and materials reposition ahead of market.' },
  'prepared-B2':  { level: 'disruptive',    text: 'Energy horizon visible at 20–30y. Prepared orgs reposition. Recovery within months.' },
  'prepared-C':   { level: 'transformative',text: 'Deep restructuring required. Playbooks activate. Survival likely with prior architecture.' },
  'partial-A':    { level: 'manageable',    text: 'Public surprise, limited org impact. Prepared orgs gain immediate credibility advantage.' },
  'partial-B1':   { level: 'disruptive',    text: '2–8 week drawdown. Prepared orgs outperform. Unprepared freeze at board level.' },
  'partial-B2':   { level: 'transformative',text: 'Board-level restructuring required. Non-prepared orgs structurally disadvantaged.' },
  'partial-C':    { level: 'systemic',      text: 'Existing frameworks fail. Crisis architecture needed but incomplete. No recovery timeline.' },
  'unprepared-A': { level: 'disruptive',    text: 'Narrative crisis. Stakeholder panic. No messaging ready. Recovery 2–6 weeks.' },
  'unprepared-B1':{ level: 'transformative',text: 'Governance vacuum. Leadership exposed. Boards demand answers no one has.' },
  'unprepared-B2':{ level: 'systemic',      text: 'Supply chains, energy, capital markets repriced simultaneously. No playbook.' },
  'unprepared-C': { level: 'existential',   text: 'Civilization-scale reorientation. No functioning playbook. Organizational survival in question.' },
};

const IMPACT_CONFIG: Record<ImpactLevel, { label: string; bg: string; border: string; labelColor: string; textColor: string }> = {
  manageable:    { label: 'Manageable',    bg: '#EAF3DE', border: '#97C459', labelColor: '#2D5A0E', textColor: '#4A7A1E' },
  disruptive:    { label: 'Disruptive',    bg: '#FEF3E2', border: '#E8A030', labelColor: '#7A4010', textColor: '#A05820' },
  transformative:{ label: 'Transformative',bg: '#FAECE7', border: '#D85A30', labelColor: '#6B2510', textColor: '#8B3520' },
  systemic:      { label: 'Systemic',      bg: '#FCEBEB', border: '#E24B4A', labelColor: '#701A1A', textColor: '#952525' },
  existential:   { label: 'Existential',   bg: '#F5D5D5', border: '#A32D2D', labelColor: '#3D0808', textColor: '#6B1212' },
};

const PREP_LEVELS = [
  {
    id: 'prepared',
    label: 'Prepared',
    desc: 'Protocols in place. Board-level readiness. Gradual disclosure absorbed into planning.',
  },
  {
    id: 'partial',
    label: 'Partial',
    desc: 'Awareness growing. Some protocols exist. Governments behind curve.',
    note: 'Current state.',
  },
  {
    id: 'unprepared',
    label: 'Unprepared',
    desc: 'No protocols. Complete surprise. No board-level readiness. No playbook exists.',
  },
];

const LEGEND_ITEMS: ImpactLevel[] = ['manageable', 'disruptive', 'transformative', 'systemic', 'existential'];

const TOOLKITS = [
  { name: 'HR Toolkit', href: '/toolkits#hr', scenario: 'All scenarios', desc: 'Workforce readiness, psychological protocols, internal comms.' },
  { name: 'Finance Toolkit', href: '/toolkits#finance', scenario: 'B1 → C', desc: 'Asset rotation, sector exposure, treasury protocols.' },
  { name: 'Communications Toolkit', href: '/toolkits#comms', scenario: 'All scenarios', desc: 'Stakeholder messaging, crisis comms, media frameworks.' },
  { name: 'Leadership & Board Toolkit', href: '/toolkits#leadership', scenario: 'B2 → C', desc: 'Board-level governance, decision architecture, scenario planning.' },
];

export default function FrameworkPage() {
  return (
    <main style={{ backgroundColor: '#FAF8F4', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>

      {/* Hero */}
      <section style={{
        backgroundColor: '#1B2A4A',
        padding: '80px 24px 64px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: 20,
          }}>
            LBDG Framework
          </p>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 500,
            color: '#FAF8F4',
            lineHeight: 1.2,
            marginBottom: 20,
          }}>
            Disclosure Impact Matrix
          </h1>
          <p style={{
            fontSize: 16,
            color: '#8A9BB5',
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto',
          }}>
            Direction is certain. Velocity is not. Your preparedness level determines where your organization stands when each disclosure threshold is crossed.
          </p>
        </div>
      </section>

      {/* Matrix */}
      <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>

        {/* X axis label */}
        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 8, marginBottom: 4 }}>
          <div />
          <div>
            <p style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: 10,
              letterSpacing: '0.08em',
              color: '#8A9BB5',
              textAlign: 'center',
              marginBottom: 4,
            }}>
              Disclosure path — direction certain, velocity unknown
            </p>
            <div style={{ position: 'relative', height: 12, display: 'flex', alignItems: 'center' }}>
              <div style={{
                flex: 1,
                height: 1.5,
                background: 'linear-gradient(to right, #C7D2DE, #E24B4A)',
                borderRadius: 2,
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  right: -1,
                  top: -4,
                  width: 0,
                  height: 0,
                  borderLeft: '7px solid #E24B4A',
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(4, 1fr)', gap: 6, marginBottom: 6 }}>
          <div />
          {SCENARIOS.map(sc => (
            <div key={sc.id} style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: 9,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: sc.isEnd ? '#C9A84C' : '#8A9BB5',
                fontWeight: sc.isEnd ? 600 : 400,
              }}>
                {sc.isEnd ? 'C — end state' : sc.id}
              </p>
            </div>
          ))}
        </div>

        {/* Main grid with Y axis */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'stretch' }}>

          {/* Y axis */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            width: 36,
            flexShrink: 0,
            paddingTop: 68,
          }}>
            <div style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: 9,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#8A9BB5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              fontFamily: 'DM Mono, monospace',
            }}>
              Preparedness level
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 12 }}>
              <div style={{
                flex: 1,
                width: 1.5,
                background: '#C7D2DE',
                borderRadius: 2,
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: -1,
                  left: -3,
                  width: 0,
                  height: 0,
                  borderBottom: '7px solid #8A9BB5',
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                }} />
              </div>
            </div>
            <div style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: 9,
              letterSpacing: '0.06em',
              color: '#C9A84C',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              fontFamily: 'DM Mono, monospace',
            }}>
              You control this
            </div>
          </div>

          {/* Grid */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Scenario row */}
            <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(4, 1fr)', gap: 6, marginBottom: 6 }}>
              <div />
              {SCENARIOS.map(sc => (
                <div key={sc.id} style={{
                  backgroundColor: sc.isEnd ? '#1B2A4A' : '#FFFFFF',
                  border: sc.isEnd ? '1.5px solid #C9A84C' : '1px solid #E2E8F0',
                  borderRadius: 8,
                  padding: '10px 12px',
                  minHeight: 60,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <p style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: 11,
                    fontWeight: 600,
                    color: sc.isEnd ? '#C9A84C' : '#1B2A4A',
                    marginBottom: 3,
                  }}>
                    {sc.label}
                    {sc.optional && (
                      <span style={{ fontSize: 9, color: '#8A9BB5', fontWeight: 400, marginLeft: 4 }}>(optional)</span>
                    )}
                  </p>
                  <p style={{ fontSize: 10, color: sc.isEnd ? '#8A9BB5' : '#6B7A8D', lineHeight: 1.4 }}>
                    {sc.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Impact rows */}
            {PREP_LEVELS.map(prep => (
              <div key={prep.id} style={{
                display: 'grid',
                gridTemplateColumns: '140px repeat(4, 1fr)',
                gap: 6,
                marginBottom: 6,
              }}>
                {/* Y label */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: 8,
                  padding: '12px 14px',
                  minHeight: 96,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#1B2A4A', marginBottom: 4 }}>
                    {prep.label}
                  </p>
                  <p style={{ fontSize: 10, color: '#8A9BB5', lineHeight: 1.4 }}>
                    {prep.desc}
                  </p>
                  {prep.note && (
                    <p style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: 9,
                      color: '#C9A84C',
                      marginTop: 5,
                      letterSpacing: '0.04em',
                    }}>
                      ↳ {prep.note}
                    </p>
                  )}
                </div>

                {/* Impact cells */}
                {SCENARIOS.map(sc => {
                  const key = `${prep.id}-${sc.id}`;
                  const cell = CELLS[key];
                  if (!cell) return <div key={sc.id} />;
                  const config = IMPACT_CONFIG[cell.level];
                  return (
                    <div key={sc.id} style={{
                      backgroundColor: config.bg,
                      border: `1px solid ${config.border}`,
                      borderRadius: 8,
                      padding: '10px 12px',
                      minHeight: 96,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                      <p style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: config.labelColor,
                        marginBottom: 4,
                      }}>
                        {config.label}
                      </p>
                      <p style={{ fontSize: 10, color: config.textColor, lineHeight: 1.5 }}>
                        {cell.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px 16px',
          marginTop: 20,
          paddingLeft: 46,
        }}>
          {LEGEND_ITEMS.map(level => {
            const config = IMPACT_CONFIG[level];
            return (
              <div key={level} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: 3,
                  backgroundColor: config.bg,
                  border: `1.5px solid ${config.border}`,
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: 11, color: '#6B7A8D', fontFamily: 'DM Mono, monospace' }}>
                  {config.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modifier notes */}
      <section style={{ padding: '0 24px 48px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderLeft: '3px solid #E8A030',
            borderRadius: 8,
            padding: '16px 20px',
          }}>
            <p style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: 10,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#E8A030',
              marginBottom: 8,
            }}>
              Governance agility as a modifier
            </p>
            <p style={{ fontSize: 12, color: '#6B7A8D', lineHeight: 1.7 }}>
              A board that takes three weeks to approve a press release shifts your effective position downward on the preparedness axis — regardless of which protocols exist on paper. Preparedness is not just having the playbook. It is the speed at which your organization can activate it.
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderLeft: '3px solid #E24B4A',
            borderRadius: 8,
            padding: '16px 20px',
          }}>
            <p style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: 10,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#E24B4A',
              marginBottom: 8,
            }}>
              The velocity variable
            </p>
            <p style={{ fontSize: 12, color: '#6B7A8D', lineHeight: 1.7 }}>
              The faster disclosure moves from A to C, the less time organizations have to climb the preparedness axis. A slow trajectory over 3–5 years allows adaptation. An abrupt jump — leak, arrival, uncontrolled event — compresses that window to days. You cannot control the scenario. You can only control where you stand on the Y axis when each threshold is crossed.
            </p>
          </div>
        </div>
      </section>

      {/* Trajectories */}
      <section style={{
        backgroundColor: '#1B2A4A',
        padding: '64px 24px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: 12,
          }}>
            Three probable trajectories
          </p>
          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 500,
            color: '#FAF8F4',
            marginBottom: 40,
          }}>
            Where is the world heading — and how fast?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              {
                color: '#4A9A5E',
                label: 'Current trajectory',
                text: 'World is at A/Partial today — PURSUE releases ongoing. Gradual drift toward B1 over 12–24 months. Organizations that act now move up the Y axis before the next threshold is crossed.',
              },
              {
                color: '#C9A84C',
                label: 'Ideal trajectory',
                text: 'Preparedness grows faster than disclosure intensity. Organizations stay in green/yellow even as scenarios escalate. Requires action before the next tranche — not after.',
              },
              {
                color: '#E24B4A',
                label: 'Catastrophic trajectory',
                text: 'Abrupt jump to C with world at Unprepared — arrival scenario, uncontrolled leak, or intelligence failure. Bottom-right cell. No playbook exists. This is the scenario that justifies building the infrastructure now.',
              },
            ].map(t => (
              <div key={t.label} style={{
                borderTop: `2px solid ${t.color}`,
                paddingTop: 16,
              }}>
                <p style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: t.color,
                  marginBottom: 10,
                }}>
                  {t.label}
                </p>
                <p style={{ fontSize: 13, color: '#8A9BB5', lineHeight: 1.7 }}>
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Toolkits */}
      <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <p style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: 10,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#C9A84C',
          marginBottom: 12,
        }}>
          From matrix to action
        </p>
        <h2 style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: 500,
          color: '#1B2A4A',
          marginBottom: 8,
        }}>
          Identify your scenario. Access the right toolkit.
        </h2>
        <p style={{ fontSize: 14, color: '#6B7A8D', marginBottom: 40, maxWidth: 560 }}>
          Each toolkit maps directly to the matrix. Start where you are.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {TOOLKITS.map(tk => (
            <Link key={tk.name} href={tk.href} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: 10,
                padding: '20px 22px',
                height: '100%',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#E2E8F0')}
              >
                <p style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: 9,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  marginBottom: 8,
                }}>
                  {tk.scenario}
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#1B2A4A', marginBottom: 6 }}>
                  {tk.name}
                </p>
                <p style={{ fontSize: 12, color: '#8A9BB5', lineHeight: 1.5 }}>
                  {tk.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <Link href="/toolkits" style={{
            display: 'inline-block',
            backgroundColor: '#1B2A4A',
            color: '#FAF8F4',
            padding: '14px 32px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}>
            View all toolkits →
          </Link>
        </div>
      </section>

    </main>
  );
}
