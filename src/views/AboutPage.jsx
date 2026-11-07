import {
  AboutHero,
  AboutVision,
  AboutClients,
  AboutOrigin,
  AboutGlobalDelivery,
  AboutTechStack,
  AboutTimeline,
  AboutFounders,
  AboutPrinciples,
  AboutTestimonials,
  AboutCapabilityMix,
  AboutIndustries,
  AboutFAQ,
  AboutCTA,
} from '../components/about'

export default function AboutPage() {
  return (
    <main className="about-page bg-[#09090B] text-[#FAFAFA] min-h-screen overflow-x-hidden">
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

      {/* 07: Company Milestones & Growth Roadmap (2022 to 2026+) */}
      <AboutTimeline />

      {/* 08: Executive Leadership & Hands-on Operators */}
      <AboutFounders />

      {/* 09: 6 Non-Negotiable Operating Principles */}
      <AboutPrinciples />

      {/* 10: Verified Client Social Proof & Testimonials */}
      <AboutTestimonials />

      {/* 11: Capability Mix & Core Engine Pillars */}
      <AboutCapabilityMix />

      {/* 12: Industry Verticals Served */}
      <AboutIndustries />

      {/* 13: Comprehensive Due Diligence FAQs & Schema.org */}
      <AboutFAQ />

      {/* 14: Conversion CTA */}
      <AboutCTA />
    </main>
  )
}
