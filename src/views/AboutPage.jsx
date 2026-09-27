import {
  AboutHero,
  AboutVision,
  AboutClients,
  AboutOrigin,
  AboutGlobalDelivery,
  AboutTechStack,
  AboutTimeline,
  AboutFounders,
  AboutCapabilityMix,
  AboutPrinciples,
  AboutIndustries,
  AboutFAQ,
  AboutCTA,
} from '../components/about'

export default function AboutPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      {/* 01: Hero & Identity */}
      <AboutHero />

      {/* 02: The Multinational Vision & Manifesto */}
      <AboutVision />

      {/* 03: Verified Client Roster Showcase (Marquee & Structured Grid) */}
      <AboutClients />

      {/* 04: The Origin Story & Problem We Solve */}
      <AboutOrigin />

      {/* 05: Global Delivery Architecture & Enterprise Governance */}
      <AboutGlobalDelivery />

      {/* 06: Engineering Architecture & Proprietary Tech Stack */}
      <AboutTechStack />

      {/* 07: Company Milestones & Growth Roadmap (2022 - 2026+) */}
      <AboutTimeline />

      {/* 08: Executive Leadership & Hands-on Operators */}
      <AboutFounders />

      {/* 09: 6 Non-Negotiable Operating Principles */}
      <AboutPrinciples />

      {/* 10: Capability Mix & Core Engine Pillars */}
      <AboutCapabilityMix />

      {/* 11: Industry Verticals Served */}
      <AboutIndustries />

      {/* 12: Comprehensive Due Diligence FAQs & Schema.org */}
      <AboutFAQ />

      {/* 13: Conversion CTA */}
      <AboutCTA />
    </main>
  )
}
