import type { Metadata } from 'next';
import DisclosureMaturity from "@/components/DisclosureMaturity";
import military from "@/content/tracks/military.json";
import government from "@/content/tracks/government.json";
import legislative from "@/content/tracks/legislative.json";
import scientific from "@/content/tracks/scientific.json";
import financial from "@/content/tracks/financial.json";
import media from "@/content/tracks/media.json";
import international from "@/content/tracks/international.json";

export const metadata: Metadata = {
  title: 'Disclosure Maturity by Institutional Sector',
  description: 'A sourced, seven-sector assessment of how far UAP disclosure has progressed across government, defense, science, finance, and other institutions.',
  alternates: { canonical: '/maturity' },
};

const tracks = [
  military,
  government,
  legislative,
  scientific,
  financial,
  media,
  international,
] as any[];

export default function MaturityPage() {
  return <DisclosureMaturity tracks={tracks} />;
}
