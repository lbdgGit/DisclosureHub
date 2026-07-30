import DisclosureMaturity from "@/components/DisclosureMaturity";
import military from "@/content/tracks/military.json";
import government from "@/content/tracks/government.json";
import legislative from "@/content/tracks/legislative.json";
import scientific from "@/content/tracks/scientific.json";
import financial from "@/content/tracks/financial.json";
import media from "@/content/tracks/media.json";
import international from "@/content/tracks/international.json";

const tracks = [military, government, legislative, scientific, financial, media, international];

export default function Page() {
  return <DisclosureMaturity tracks={tracks} />;
}
