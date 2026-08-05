import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Mail } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'About LBDG - Who we are',
  description: 'LBDG is an independent watch and preparedness initiative on institutional disclosure risk. Sourced, non-speculative, and built for the people who carry organizational risk.',
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
  return <h2 style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 'clamp(22px, 3vw, 30px)', letterSpacing: '-0.01em', margin: '44px 0 14px' }}>{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.75, color: BODY, marginBottom: 16 }}>{children}</p>;
}

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="LBDG · About" title="Who we are">
        LBDG is an independent watch and preparedness initiative on the risk of institutional disclosure. Not a government body, not a claim to inside knowledge. A rigorous, sourced reading of a subject the established institutions have not yet moved to address.
      </PageHeader>

      <div style={{ background: CREAM }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }} className="px-4 sm:px-6 pb-24">

          <H2>Why LBDG exists</H2>
          <P>
            Over the past few years, the question of unidentified anomalous phenomena and non-human intelligence has moved from the fringe into the institutional record: classified files released by the U.S. Department of Defense, senior officials testifying under oath, agency reports, financial instruments, legislative activity. The trajectory became measurable.
          </P>
          <P>
            Yet almost no one was equipping organizations for it. There is abundant content for the curious, the investor, and the enthusiast. There was next to nothing for the people who would actually carry the operational risk inside a company: the HR director whose workforce panics, the CFO managing exposure, the executive who has to decide what the organization does in the first hours. LBDG was built to close that gap.
          </P>

          <H2>How we work</H2>
          <P>
            One principle governs everything here: every claim is sourced, and speculation is labeled as such or left out. LBDG measures institutional acts, hearings, releases, reports, filings, against the public record. It does not measure the phenomenon itself, and it makes no prediction about when or whether disclosure will occur. Where the evidence is thin, we say so. Where a claim cannot be verified, it does not enter the dataset.
          </P>
          <P>
            This is what separates LBDG from the wider disclosure conversation. The instruments on this site, the Disclosure Velocity Index and the Disclosure Maturity framework, are open: the data can be downloaded, audited, and recomputed. The goal is not to convince anyone that a particular belief is true. It is to give an organization a defensible, sourced basis for deciding how much preparation is proportionate today.
          </P>

          <H2>Who is behind it</H2>
          <P>
            LBDG is an independent initiative founded and run by Laurent Barrere, drawing on a background in the earth and environmental sciences (MSc) and in business and organizational management (MBA). That combination is deliberate: the scientific side informs the discipline around evidence and sourcing, the business side informs the focus on organizational risk and continuity.
          </P>
          <P>
            LBDG is operated independently. It is not affiliated with any government agency, defense contractor, or advocacy organization, and it claims no privileged or classified access. Everything published here is derived from public, verifiable sources. That independence is the point: it is precisely because the established institutions have not yet moved to address organizational readiness that an independent, rigorous effort has a role to play.
          </P>

          <H2>Contact</H2>
          <P>
            For questions, partnership enquiries, or media, the best way to reach LBDG is by email. We read everything, and we respond to serious enquiries.
          </P>

          <div style={{ marginTop: 20, marginBottom: 8 }}>
            <a href="mailto:contact@readyfordisclosure.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: NAVY, color: GOLD, borderRadius: 8, padding: '14px 22px', fontFamily: MONO, fontSize: 14, textDecoration: 'none' }}>
              <Mail size={16} />
              contact@readyfordisclosure.com
            </a>
          </div>

          <div style={{ marginTop: 40, marginBottom: 40, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/toolkits" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: NAVY, border: `1px solid ${NAVY}`, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              See the toolkits <ArrowRight size={15} />
            </Link>
            <Link href="/signals" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: NAVY, border: `1px solid ${NAVY}`, borderRadius: 6, padding: '12px 20px', fontFamily: MONO, fontSize: 13, textDecoration: 'none' }}>
              See the method →
            </Link>
          </div>

          <div style={{ borderTop: `1px solid #E3DCCE`, paddingTop: 20, marginTop: 40 }}>
            <p style={{ fontFamily: MONO, fontSize: 11, lineHeight: 1.7, color: MUTE }}>
              LBDG publishes for informational and educational purposes only. Nothing on this site constitutes investment, financial, legal, or governance advice, and nothing here should be read as a claim that disclosure has occurred or a prediction that it will. All analysis is derived from public, verifiable sources.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
