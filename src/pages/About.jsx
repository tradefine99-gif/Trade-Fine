import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory"
import ManufacturingExcellence from "../components/about/ManufacturingExcellence"
import Capabilities from "../components/about/Capabilities"
import GlobalPartner from "../components/about/GlobalPartner"
import MissionVision from "../components/about/MissionVision"
import AboutCTA from "../components/about/AboutCTA"
import Seo from "../components/common/Seo";
import JsonLd from "../components/common/JsonLd";
import { buildBreadcrumbSchema } from "../data/structuredData";

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function About() {
  return (
    <main className="min-h-screen bg-[#080D16]">
      <Seo
        title="About TradeFine — Sportswear Manufacturing, Sialkot"
        description="Meet TradeFine: a Sialkot, Pakistan-based sportswear manufacturer with 10+ years producing custom teamwear and athletic apparel for global brands."
      />
      <JsonLd data={breadcrumbSchema} />
      <AboutHero />
      <OurStory />
      <ManufacturingExcellence />
      <Capabilities />
      <GlobalPartner />
      <MissionVision />
      <AboutCTA />
    </main>
  );
}