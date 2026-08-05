import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'What Should a Company Do After a Disclosure Event - LBDG',
  description: 'A practical guide for CEOs, boards, and executives on leading an organization through a government disclosure of non-human intelligence. Governance, decision authority, and the first 72 hours. Sourced, no speculation.',
  keywords: 'what should companies do disclosure, leadership disclosure event, CEO disclosure UAP, board governance disclosure, business continuity disclosure, executive crisis disclosure',
};

const SERIF = 'Playfair Display, serif';
const SANS = 'DM Sans, sans-serif';
const MONO = 'DM Mono, monospace';
const NAVY = '#1B2A4A';
const GOLD = '#C9A84C';
const CREAM = '#FAF8F4';
const BODY = '#3A4256';
const MUTE = '#6E7480';

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 'clamp(24px, 3vw, 32px)', letterSpacing: '-0.01em', margin: '48px 0 16px' }}>{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 20, margin: '28px 0 10px' }}>{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.75, color: BODY, marginBottom: 16 }}>{children}</p>;
}

export default function LeadershipDisclosurePage() {
  return (
    <>
      <PageHeader eyebrow="LBDG · Leadership & Governance" title="What should a company do after a disclosure event">
        If a government confirms the reality of non-human intelligence, leadership has hours, not weeks, to respond. This is a practical, sourced guide for CEOs, boards, and executives on governing an organization through the shock.
      </PageHeader>

      <div style={{ background: CREAM }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }} className="px-4 sm:px-6 pb-24">

          <P>
            Institutional disclosure of unidentified anomalous phenomena (UAP) or non-human intelligence (NHI) has moved from speculation to a measurable trajectory. The U.S. Department of Defense has released classified files, senior officials have testified under oath, and the subject now appears regularly on the official record. Whatever leadership believes about the underlying phenomenon, the institutional signals are public and quantifiable.
          </P>
          <P>
            For an executive, the relevant question is not whether the claims are ultimately true. It is a governance question: <strong style={{ color: NAVY }}>if a major disclosure announcement is made, how does leadership respond in the first hours and days so that the organization stays coherent?</strong> This guide is written for that moment. It contains no predictions about the phenomenon and no speculation. It applies ordinary crisis-governance discipline to an unusual trigger.
          </P>

          <H2>Why leadership response is the decisive variable</H2>
          <P>
            In a disruptive event, the outcome for an organization depends less on the event itself than on how quickly and clearly leadership acts. This is well documented across prior shocks, from the September 11 attacks to the onset of the COVID-19 pandemic. Organizations with pre-defined decision authority, clear communication, and rehearsed protocols recovered function far faster than those improvising under pressure. The content of a disclosure announcement would be novel; the leadership dynamics would not.
          </P>
          <P>
            The most common failure is not panic. It is paralysis: no one is sure who owns the decision, briefings multiply, and hours pass while the organization waits for a signal that never comes clearly. Speed and clarity of authority matter more than having the perfect answer.
          </P>

          <H2>The three questions leadership must answer immediately</H2>

          <H3>1. Who decides?</H3>
          <P>
            Before anything else, the organization needs a clear decision authority. Who speaks for the company internally and externally? Who authorizes a holding statement, a change in operations, a communication to investors? In a fast-moving event, ambiguity about authority is more damaging than any single decision. This should be settled in advance, mapped to scenarios, not negotiated in the moment.
          </P>

          <H3>2. What do we say, and when?</H3>
          <P>
            Leadership does not need a position on the nature of the phenomenon. It needs a calm, timely acknowledgment that the organization is aware, is monitoring, and is acting in the interests of its people and stakeholders. A brief internal statement within the first hour, followed by a named time for the next update, stabilizes an organization more than any detailed analysis delivered too late. Silence is read as either ignorance or concealment.
          </P>

          <H3>3. What keeps running, and what pauses?</H3>
          <P>
            Some operations continue as normal, some require judgment, and a few may need to pause. Leadership that has pre-mapped which decisions are pre-authorized and which require escalation can act within hours rather than debating basics for days. This is the difference between a manageable disruption and operational paralysis.
          </P>

          <H2>A practical sequence for the first 72 hours</H2>
          <P>
            <strong style={{ color: NAVY }}>Within the first hour (H+1):</strong> a brief internal acknowledgment from the top, and confirmation of who holds decision authority. Not a position on the phenomenon, a signal that leadership is present and functioning.
          </P>
          <P>
            <strong style={{ color: NAVY }}>Within the first four hours (H+4):</strong> the board or senior leadership is briefed with a consistent picture. Key stakeholders, employees, investors, major clients, are identified and a communication cascade begins. Decision authority is confirmed in writing.
          </P>
          <P>
            <strong style={{ color: NAVY }}>Within the first day (H+24):</strong> capital, operational, and communication decisions that were pre-authorized are executed. Decisions requiring escalation are triaged. The organization moves from reacting to operating.
          </P>
          <P>
            The organizations that manage this calmly are not the ones with the best analysis in the moment. They are the ones that decided, in advance, who does what.
          </P>

          <H2>What to prepare now, before anything happens</H2>
          <P>
            None of this can be improvised well under pressure. The governance machinery has to exist in advance, the same way it would for any other business-continuity scenario. Concretely: a decision authority matrix, board briefing templates mapped to scenarios, a pre-drafted holding statement, a stakeholder cascade, and a named owner for the response. These are standard crisis-governance artifacts applied to an unusual trigger.
          </P>
          <P>
            This is what the LBDG Leadership & Board Toolkit is built to provide. It is the orchestration layer for an organization's whole response: a governance readiness scorecard, a decision authority matrix, board briefing templates by scenario, and a CEO leadership guide with word-for-word scripts. The free Executive Starter Pack is the fastest place to begin, with a ten-minute readiness check and the core sequence.
          </P>

          <div style={{ marginTop: 28, marginBottom: 8, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/toolkits#board" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: NAVY, color: GOLD, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              Leadership &amp; Board Toolkit <ArrowRight size={15} />
            </Link>
            <Link href="/toolkits" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: NAVY, border: `1px solid ${NAVY}`, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              All toolkits &amp; free Starter Pack →
            </Link>
          </div>

          <H2>How close is this, really?</H2>
          <P>
            Proportionate preparation depends on timing, and timing can be measured. LBDG maintains the Disclosure Velocity Index (DVI), a weighted measure built from dozens of verified institutional events, congressional hearings, official file releases, agency reports, and financial instruments, that quantifies how fast the disclosure process is actually moving. It is not a prediction of when disclosure will occur. It is a measure of institutional momentum, so leadership can judge how much readiness is proportionate today rather than reacting to headlines.
          </P>
          <P>
            The companion measure, Disclosure Maturity, maps where the process stands across seven institutional sectors, from military and government to legislative, scientific, and financial. Together they give a leadership team a defensible basis for deciding how much to prepare, and when.
          </P>

          <div style={{ marginTop: 28, marginBottom: 40, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/signals" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: NAVY, border: `1px solid ${NAVY}`, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              Disclosure Velocity Index →
            </Link>
            <Link href="/framework" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: NAVY, border: `1px solid ${NAVY}`, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              Scenarios &amp; impact matrix →
            </Link>
          </div>

          <div style={{ borderTop: `1px solid #E3DCCE`, paddingTop: 20, marginTop: 40 }}>
            <p style={{ fontFamily: MONO, fontSize: 11, lineHeight: 1.7, color: MUTE }}>
              This page is published for informational purposes only and does not constitute legal, financial, or governance advice. It presents crisis-governance frameworks drawn from documented organizational responses to prior disruptive events, and makes no claim or prediction about the nature of unidentified anomalous phenomena. Sources referenced across LBDG include DoD/AARO, NASA, the U.S. Congress, and CNES/GEIPAN. Each organization is responsible for its own decisions and should obtain professional advice appropriate to its circumstances.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
