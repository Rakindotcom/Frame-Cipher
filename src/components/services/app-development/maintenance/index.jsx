'use client'

import React from 'react'
import Hero from './Hero'
import OurServices from './OurServices'
import TypesOfMaintenance from './TypesOfMaintenance'
import AppsWeMaintain from './AppsWeMaintain'
import WhyOngoingMaintenance from './WhyOngoingMaintenance'
import TakingOverExistingApp from './TakingOverExistingApp'
import Process from './Process'
import Pricing from './Pricing'
import WhatsIncluded from './WhatsIncluded'
import SupportLevels from './SupportLevels'
import MaintenanceVsNewDev from './MaintenanceVsNewDev'
import WhyChoose from './WhyChoose'
import BangladeshWorldwide from './BangladeshWorldwide'
import FAQ from './FAQ'
import CTA from './CTA'
import HomeTextMarquee from '../../../home/HomeTextMarquee'

export default function AppDevelopmentMaintenanceService({ service }) {
  return (
    <main className="service-page min-h-screen bg-[#09090B] text-white selection:bg-[#704bd2]/30 selection:text-white">
      {/* 01. Canonical Hero with Hardware Frame SLA Visual */}
      <Hero service={service} />

      {/* Marquee Ticker */}
      <HomeTextMarquee />

      {/* 02. Our App Maintenance & Support Services (8 Disciplines) */}
      <OurServices />

      {/* 03. Types of App Maintenance We Provide (4 Modalities Blueprint Matrix) */}
      <TypesOfMaintenance />

      {/* 04. Apps We Maintain (5 Production Ecosystems) */}
      <AppsWeMaintain />

      {/* 05. Why Your Business Needs Ongoing App Maintenance (6 Risk Factors) */}
      <WhyOngoingMaintenance />

      {/* 06. Taking Over an Existing App (4 Onboarding Stages) */}
      <TakingOverExistingApp />

      {/* 07. How We Approach App Maintenance & Support (6-Stage Process) */}
      <Process />

      {/* 08. App Maintenance Pricing & Retainers (4 Plans + Comparison Table) */}
      <Pricing />

      {/* 09. What’s Included in Every Maintenance Plan (6 Inclusions) */}
      <WhatsIncluded />

      {/* 10. Support Levels & Response Times (Severity Matrix Table) */}
      <SupportLevels />

      {/* 11. App Maintenance vs. New Development (Strategic Decision Matrix) */}
      <MaintenanceVsNewDev />

      {/* 12. Why Choose Framecipher (6 Strategic Pillars) */}
      <WhyChoose />

      {/* 13. App Maintenance Across Bangladesh & Worldwide */}
      <BangladeshWorldwide />

      {/* 14. Canonical Centered FAQ (All 12 Verbatim Questions) */}
      <FAQ service={service} />

      {/* 15. Start Your App Maintenance Plan (Asymmetrical High-Conversion CTA) */}
      <CTA />
    </main>
  )
}

export {
  Hero,
  OurServices,
  TypesOfMaintenance,
  AppsWeMaintain,
  WhyOngoingMaintenance,
  TakingOverExistingApp,
  Process,
  Pricing,
  WhatsIncluded,
  SupportLevels,
  MaintenanceVsNewDev,
  WhyChoose,
  BangladeshWorldwide,
  FAQ,
  CTA,
}
