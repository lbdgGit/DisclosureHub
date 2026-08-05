import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'How a Disclosure Event Could Affect Your Business Financially - LBDG',
  description: 'A defensive guide for CFOs and risk officers on financial exposure to a government disclosure of non-human intelligence. Sector exposure, market volatility, and a 72-hour response framework. Sourced, no speculation, no stock tips.',
  keywords: 'disclosure impact business, disclosure stock market, CFO disclosure risk, financial exposure disclosure, UAP disclosure economy, sector exposure disclosure, business risk disclosure',
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

export default function FinanceDisclosurePage() {
  return (
    <>
      <PageHeader eyebrow="LBDG · Financial Exposure" title="How a disclosure event could affect your business financially">
        A defensive guide for CFOs and risk officers. Not stock tips, not speculation. A structured way to reason about financial exposure before a government disclosure of non-human intelligence, rather than during it.
      </PageHeader>

      <div style={{ background: CREAM }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }} className="px-4 sm:px-6 pb-24">

          <P>
            Most writing on the financial side of disclosure asks the wrong question. It asks how to profit, which company to buy, how to trade the announcement. This page does the opposite. It is written for a CFO or risk officer whose job is not to speculate but to protect the organization: to understand where the business is exposed and to have a response ready before the event, not improvised during it.
          </P>
          <P>
            Institutional disclosure of unidentified anomalous phenomena (UAP) or non-human intelligence (NHI) has become a measurable trajectory rather than a fringe idea. The U.S. Department of Defense has released classified files, senior officials have testified under oath, and at least one major consulting firm has formally classified NHI disclosure as a credible black swan in its risk reporting. Whatever one believes about the phenomenon, the exposure question is legitimate risk management.
          </P>

          <H2>Why this is a risk question, not a speculation question</H2>
          <P>
            A paradigm-shifting announcement does not need to change the physics of your business to change its financial position. It can move markets through sentiment, repricing, and volatility long before anything material is confirmed. A risk function does not need to predict the event to prepare for it. It needs to know which of its exposures would be sensitive to a sharp, sentiment-driven shock, and to have pre-defined triggers and responses ready.
          </P>
          <P>
            This is ordinary scenario planning applied to an unusual trigger. The same discipline a treasury team applies to a geopolitical shock or a sudden rate move applies here. The novelty is the trigger, not the method.
          </P>

          <H2>The mechanisms through which a shock transmits</H2>
          <P>
            Financial impact from a disclosure event would not arrive through a single channel. Drawing on documented precedents from prior shocks, the transmission mechanisms are recognizable:
          </P>

          <H3>1. Sentiment and volatility</H3>
          <P>
            The first effect is psychological, and it is fast. Uncertainty drives volatility, flight to perceived safe havens, and repricing of risk assets, often before any fundamental change. This is the most immediate and least predictable channel, and it is where an unprepared treasury function is most exposed.
          </P>

          <H3>2. Sector repricing</H3>
          <P>
            Exposure is highly uneven across sectors. Some, such as defense, advanced materials, and certain technology segments, could see upside on expectations of new capability. Others, such as conventional energy on very long horizons, or businesses dependent on stable consumer confidence, could face pressure. The point is not to predict winners. It is to know, in advance, which side of that split your organization sits on.
          </P>

          <H3>3. Regulatory and disclosure obligations</H3>
          <P>
            For public companies, a market-moving event raises immediate questions under disclosure regimes such as Reg FD, the EU market abuse framework, and equivalent rules. What must be communicated, when, and by whom? A compliance function that has pre-mapped these obligations acts within hours; one that has not scrambles under legal time pressure.
          </P>

          <H2>Mapping your exposure before the event</H2>
          <P>
            The core defensive exercise is a sector exposure audit: a structured review of where the organization's revenue, assets, supply chain, and financing would be sensitive to each disclosure scenario. The goal is a clear internal picture of exposure traced to demonstrated mechanisms rather than speculation, so that if an event occurs, the CFO is reading from a prepared map rather than building one in real time.
          </P>
          <P>
            Paired with pre-authorized triggers, treasury actions or capital decisions that are agreed in advance and executed on defined thresholds, this turns a potential scramble into a set of decisions that can be made within a day rather than weeks.
          </P>

          <H2>A practical sequence for the first 72 hours</H2>
          <P>
            <strong style={{ color: NAVY }}>Within the first hours:</strong> the pre-mapped exposure audit is pulled, not written. Treasury reviews positions against pre-defined triggers. Compliance checks disclosure obligations against the prepared map.
          </P>
          <P>
            <strong style={{ color: NAVY }}>Within the first day:</strong> capital allocation and hedging decisions that were pre-authorized are executed on their thresholds. The board is briefed with an exposure picture that already exists. Investor communication follows a prepared framework.
          </P>
          <P>
            <strong style={{ color: NAVY }}>Across the first weeks:</strong> the organization operates from its scenario framework rather than reacting to each headline, and adjusts as the situation clarifies.
          </P>

          <H2>What to prepare now</H2>
          <P>
            The LBDG Finance Risk Report sets out exactly this: how a finance function should reason about exposure to disclosure before it happens. Built on four documented precedents, it isolates the mechanisms through which a paradigm-shifting event transmits into financial consequence, maps sector exposure to demonstrated mechanisms rather than speculation, and provides a three-tier, 72-hour response framework. The companion Finance Toolkit provides the working instruments: a sector exposure audit, a scenario decision tree, a trigger threshold monitor, and a compliance quick-check.
          </P>

          <div style={{ marginTop: 28, marginBottom: 8, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/rapports" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: NAVY, color: GOLD, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              Finance Risk Report <ArrowRight size={15} />
            </Link>
            <Link href="/toolkits#finance" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: NAVY, border: `1px solid ${NAVY}`, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              Finance Toolkit →
            </Link>
          </div>

          <H2>How close is this, really?</H2>
          <P>
            Proportionate preparation depends on timing, and timing can be measured. LBDG maintains the Disclosure Velocity Index (DVI), a weighted measure built from dozens of verified institutional events that quantifies how fast the disclosure process is actually moving. It is not a prediction of when disclosure will occur, and it is not investment advice. It is a measure of institutional momentum, so a risk function can judge how much readiness is proportionate today.
          </P>
          <P>
            The companion measure, Disclosure Maturity, maps where the process stands across seven institutional sectors. Together they give a finance function a defensible, sourced basis for deciding how much to prepare, and when.
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
              This page is published for informational and educational purposes only. It does not constitute investment, financial, legal, tax, or accounting advice, nor a recommendation to buy, sell, or hold any security or asset. It contains no predictions and no market forecasts. It presents risk-management frameworks drawn from documented responses to prior disruptive events, and makes no claim about the nature of unidentified anomalous phenomena. Sources referenced across LBDG include DoD/AARO, NASA, the U.S. Congress, Deloitte AG, and the Bank of England. Each organization is responsible for its own decisions and should obtain independent professional advice appropriate to its circumstances.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
