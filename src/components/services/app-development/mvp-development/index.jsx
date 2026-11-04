'use client'

import React from 'react'
import Hero from './Hero'
import Offerings from './Offerings'
import StageComparison from './StageComparison'
import WhenToBuild from './WhenToBuild'
import TypesOfMvp from './TypesOfMvp'
import ValidationMeasurement from './ValidationMeasurement'
import CommonMistakes from './CommonMistakes'
import TechStack from './TechStack'
import Process from './Process'
import Pricing from './Pricing'
import WhyChoose from './WhyChoose'
import BangladeshWorldwide from './BangladeshWorldwide'
import FAQ from './FAQ'
import CTA from './CTA'
import HomeTextMarquee from '../../../home/HomeTextMarquee'

export default function AppDevelopmentMvpDevelopmentService({ service }) {
  return (
    <main className="service-page min-h-screen bg-[#09090B] text-white selection:bg-[#704bd2]/30 selection:text-white">
      {/* 01. Canonical Hero with Realistic MVP Product Ecosystem Visual */}
      <Hero service={service} />

      {/* Marquee Ticker */}
      <HomeTextMarquee />

      {/* 02. Our MVP Development Services (9 Core Disciplines) */}
      <Offerings />

      {/* 03. MVP vs Prototype vs PoC vs Full Product Comparison Matrix */}
      <StageComparison />

      {/* 04. When Should You Build an MVP? (Signals vs Alternatives) */}
      <WhenToBuild />

      {/* 05. Types of MVPs We Build (8 Product Typologies) */}
      <TypesOfMvp />

      {/* 06. How We Measure MVP Validation (Telemetry & Metrics) */}
      <ValidationMeasurement />

      {/* 07. Common MVP Mistakes That Distort Validation (5 Risk Anti-Patterns) */}
      <CommonMistakes />

      {/* 08. MVP Development Technology Stack (12 Architectural Categories) */}
      <TechStack />

      {/* 09. How We Approach an MVP Build (6-Stage Engineering Process) */}
      <Process />

      {/* 10. Pricing, Timelines, IP Handover & Warranty Governance */}
      <Pricing />

      {/* 11. Why Choose Framecipher (6 Strategic Pillars) */}
      <WhyChoose />

      {/* 12. Bangladesh & Worldwide Delivery Reach */}
      <BangladeshWorldwide />

      {/* 13. Canonical Centered FAQ (All 14 Verbatim FAQs + Schema) */}
      <FAQ service={service} />

      {/* 14. Asymmetrical High-Conversion CTA */}
      <CTA />
    </main>
  )
}

export {
  Hero,
  Offerings,
  StageComparison,
  WhenToBuild,
  TypesOfMvp,
  ValidationMeasurement,
  CommonMistakes,
  TechStack,
  Process,
  Pricing,
  WhyChoose,
  BangladeshWorldwide,
  FAQ,
  CTA,
}
