import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Managing Your Workforce After a Disclosure Event ,  LBDG',
  description: 'A practical guide for HR leaders and executives on managing employees, absenteeism, and workplace stability if a government disclosure of non-human intelligence occurs. Sourced, operational, no speculation.',
  keywords: 'workforce disclosure, managing employees after disclosure, UAP disclosure workplace, employee panic disclosure, HR crisis disclosure, business continuity disclosure',
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

export default function WorkforceDisclosurePage() {
  return (
    <>
      <PageHeader eyebrow="LBDG · Workforce Readiness" title="Managing your workforce after a disclosure event">
        If a government confirms the reality of non-human intelligence, the first place the shock lands is your workforce. This is a practical, sourced guide for HR leaders and executives on keeping people ,  and operations ,  stable.
      </PageHeader>

      <div style={{ background: CREAM }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }} className="px-4 sm:px-6 pb-24">

          <P>
            Institutional disclosure of unidentified anomalous phenomena (UAP) or non-human intelligence (NHI) is no longer a fringe hypothesis. The U.S. Department of Defense has released classified files, senior officials have testified under oath before Congress, and a sitting Secretary of State has appeared on the record in a documentary on the subject. Whatever any individual believes about the underlying phenomenon, the institutional trajectory is measurable and public.
          </P>
          <P>
            For an organization, the question is not whether the underlying claims are true. It is operational: <strong style={{ color: NAVY }}>if a major disclosure announcement is made, how do you keep your people functioning?</strong> This page addresses that question for HR directors, people managers, and executives. It contains no predictions and no speculation about the phenomenon itself ,  only workforce management grounded in documented organizational responses to prior shock events.
          </P>

          <H2>Why the workforce is the first point of impact</H2>
          <P>
            A paradigm-shifting announcement does not arrive as a spreadsheet. It arrives as an emotional event that every employee experiences individually, often before leadership has said anything. People will learn the news from their phones, not from an internal memo. In the hours that follow, an organization faces a predictable set of pressures: distraction, absenteeism, rumor, anxiety, and a sudden collapse of attention on normal work.
          </P>
          <P>
            This pattern is not hypothetical. It has been documented repeatedly in the aftermath of large-scale disruptive events ,  the September 11 attacks, the early weeks of the COVID-19 pandemic, and other moments where a shared assumption about the world was abruptly revised. In each case, organizations that had communication protocols and clear leadership recovered function faster than those improvising in real time. The workforce impact of a disclosure event would follow the same logic, regardless of the specific content of the announcement.
          </P>

          <H2>The four immediate risks to plan for</H2>

          <H3>1. Absenteeism and presenteeism</H3>
          <P>
            Some employees will not come to work. Others will be physically present but mentally absent ,  unable to concentrate, checking news feeds, talking in corridors. Both reduce operational capacity. The organizations that handle this best do not pretend the event is not happening; they acknowledge it directly and give people a reason and a structure to keep working.
          </P>

          <H3>2. Information vacuum and rumor</H3>
          <P>
            In the absence of an official internal position, employees will fill the gap themselves ,  with social media, speculation, and each other's anxieties. The single most stabilizing action a leadership team can take is to issue a clear, calm internal holding statement quickly, even if it only says "we are monitoring the situation and will update you by a specific time." Silence is read as either ignorance or concealment, and both erode trust.
          </P>

          <H3>3. Psychological strain and ontological stress</H3>
          <P>
            A confirmed revision to humanity's understanding of its place in the universe is, for some people, genuinely destabilizing. This is sometimes described as ontological shock ,  the stress that follows when a foundational assumption about reality is overturned. Managers are not therapists and should not attempt to be. But they can normalize the reaction, point people to existing employee assistance resources, and avoid dismissing or mocking the responses of others.
          </P>

          <H3>4. Division and polarization</H3>
          <P>
            Employees will not react uniformly. Some will be fascinated, some indifferent, some frightened, some skeptical of the announcement itself. Workplaces can fracture along these lines. Leadership's role is to hold the organization together around shared work and shared respect, not to adjudicate what anyone should believe.
          </P>

          <H2>A practical sequence for the first 72 hours</H2>
          <P>
            The goal in the immediate aftermath is not to have all the answers. It is to demonstrate that the organization is functioning, that leadership is present, and that there is a plan. A workable sequence looks like this:
          </P>
          <P>
            <strong style={{ color: NAVY }}>Within the first hour:</strong> a brief internal acknowledgment from leadership. Not a position on the phenomenon ,  an acknowledgment that the organization is aware, is monitoring, and cares about its people. A named time for the next update.
          </P>
          <P>
            <strong style={{ color: NAVY }}>Within the first day:</strong> a manager cascade. Team leads are briefed with a short, consistent set of talking points so that every employee hears the same calm message from someone they know, rather than conflicting versions. Employee assistance and mental-health resources are re-shared.
          </P>
          <P>
            <strong style={{ color: NAVY }}>Within the first three days:</strong> a return to structured work with explicit permission to be affected. People perform better when they are told it is normal to be distracted and are also given a clear, achievable set of priorities to focus on.
          </P>

           <H3>Work as an anchor, not a demand</H3>
          <P>
            One principle underlies all of the above, and it is easy to get backwards. In the immediate aftermath, the goal is not to restore productivity. It is to keep people steady. Letting employees process the news ,  talking it through, checking on family and friends, stepping away ,  is not lost time. It is the normal, healthy way a person absorbs a shock, and trying to suppress it does more harm than the distraction ever would.
          </P>
          <P>
            At the same time, structure itself can be a genuine support. For those the event would otherwise leave frozen or adrift, a clear role, a routine, and a concrete task to hold onto can be steadying ,  a reason to stand up and stay grounded rather than sit still. The distinction that matters is how it is offered. Work that is extended as an anchor helps; the same work imposed as pressure breaks people. Give people permission to be affected, and offer structure as something to lean on, never as an obligation to perform.
          </P>
          
          <H2>What to prepare now, before anything happens</H2>
          <P>
            None of the above can be improvised well in the moment. The organizations that will manage a disclosure event calmly are the ones that prepared the machinery in advance ,  the same way they would for any other business-continuity scenario. Concretely, that means: a pre-drafted internal holding statement, a manager briefing guide with talking points, a mapped list of employee assistance resources, and a named owner for internal communications. These are ordinary crisis-management artifacts applied to an unusual trigger.
          </P>
          <P>
            This is precisely the gap the LBDG HR Toolkit is built to close. It contains an organizational readiness scorecard, a leadership workshop guide, a communication cascade checklist, a manager action guide with word-for-word scripts, and a recovery KPI framework ,  designed to be used, not read. It is free.
          </P>

          <div style={{ marginTop: 28, marginBottom: 8, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/toolkits#hr" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: NAVY, color: GOLD, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              Get the HR Toolkit (free) <ArrowRight size={15} />
            </Link>
            <Link href="/signals" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: NAVY, border: `1px solid ${NAVY}`, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              See where disclosure stands →
            </Link>
          </div>

          <H2>How close is this, really?</H2>
          <P>
            Preparedness is a function of timing, and timing can be tracked. LBDG maintains the Disclosure Velocity Index (DVI), a weighted measure built from dozens of verified institutional events ,  congressional hearings, official file releases, agency reports, financial instruments ,  that quantifies how fast the disclosure process is actually moving. It is not a prediction of when disclosure will happen. It is a measure of institutional momentum, updated as events occur, so that an organization can calibrate how much readiness is proportionate today.
          </P>
          <P>
            The companion measure, Disclosure Maturity, maps where the process actually stands across seven institutional sectors. Together they let a leadership team answer a concrete question: given where things are, how much should we have prepared by now?
          </P>

          <div style={{ marginTop: 28, marginBottom: 40, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/signals" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: NAVY, border: `1px solid ${NAVY}`, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              Disclosure Velocity Index →
            </Link>
            <Link href="/maturity" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: NAVY, border: `1px solid ${NAVY}`, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              Disclosure Maturity →
            </Link>
          </div>

          <div style={{ borderTop: `1px solid #E3DCCE`, paddingTop: 20, marginTop: 40 }}>
            <p style={{ fontFamily: MONO, fontSize: 11, lineHeight: 1.7, color: MUTE }}>
              This page is published for informational purposes only and does not constitute psychological, medical, legal, or financial advice. It presents workforce-management frameworks drawn from documented organizational responses to prior disruptive events, and makes no claim or prediction about the nature of unidentified anomalous phenomena. Sources referenced across LBDG include DoD/AARO, NASA, the U.S. Congress, CNES/GEIPAN, and peer-reviewed literature. Each organization is responsible for its own decisions and should obtain professional advice appropriate to its circumstances.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
