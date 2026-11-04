'use client'

import React from 'react'
import Hero from './Hero'
import Offerings from './Offerings'
import WhoFor from './WhoFor'
import WhyChoose from './WhyChoose'
import Process from './Process'
import Pricing from './Pricing'
import Markets from './Markets'
import FAQ from './FAQ'
import CTA from './CTA'
import WebsitePortfolioPreview from '../../projects/WebsitePortfolioPreview'
import ServiceSubServices from '../ServiceSubServices'
import { TypeMarquee } from '../../Kinetic'

const marqueeItems = [
  'Business Websites',
  'Ecommerce Stores',
  'Landing Pages',
  'WordPress',
  'Wix',
  'Magento',
  'Webflow',
  'Shopify',
  'Custom Next.js',
  'Website Redesign',
  'Maintenance',
  'UI/UX Design',
]

export default function WebsiteDesignDevelopmentService({ service }) {
  return (
    <main className="service-page bg-[#09090B] text-[#FAFAFA] min-h-screen">
      {/* Hero: Breadcrumbs + Display H1 + Symmetrical 52px Buttons + Strategic Callout */}
      <Hero />

      {/* Canonical Marquee Ticker */}
      <TypeMarquee items={marqueeItems} slow />

      {/* Verified Web Portfolio Preview */}
      <WebsitePortfolioPreview
        category="pillar"
        eyebrow="Our Website Design & Development Portfolio"
        title="Practical, User-Focused Websites"
        description="See how we turn business goals into practical, user-focused websites. Our portfolio includes business websites, eCommerce stores, landing pages, and custom web solutions built around each client's requirements. For each project, we focus on clear structure, responsive design, usability, and a strong foundation for future marketing and growth."
        buttonText="View Project →"
        buttonHref="/projects#website-work"
      />

      {/* 12 Sub-services Directory */}
      <ServiceSubServices
        service={{
          pageType: 'Pillar Service',
          slug: 'website-design-development',
          sheetTitle: 'Website Design & Development Services',
        }}
      />

      {/* Offerings: Modality 3 4x3 Blueprint Matrix */}
      <Offerings />

      {/* Who For: Modality 3 2x3 Blueprint Matrix */}
      <WhoFor />

      {/* Why Choose: 2-Column Comparative Ledger */}
      <WhyChoose />

      {/* Process: Modality 3 2x3 Blueprint Matrix + Timeline Ledger */}
      <Process />

      {/* Pricing: Modality 2 4-Tier Architectural Column Band */}
      <Pricing />

      {/* Markets: Modality 2 Domestic vs International Split */}
      <Markets />

      {/* FAQ: Strictly Centered Header + max-w-4xl Accordion */}
      <FAQ service={service} />

      {/* CTA: Modality 3 Onboarding Matrix + Master Conversion Banner */}
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, Markets, FAQ, CTA }
