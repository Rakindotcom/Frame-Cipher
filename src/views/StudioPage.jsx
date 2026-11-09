'use client'

import React from 'react'
import VideoPortfolioPreview from '../components/projects/VideoPortfolioPreview'
import { HomeStudioShowcase } from '../components/home'
import {
  StudioHero,
  StudioOfferings,
  StudioComparison,
  StudioWhyMatters,
  StudioProcess,
  StudioPricing,
  StudioLocation,
  StudioFaq,
  StudioBookingForm,
  StudioEventCarousel,
} from '../components/studio'
import StudioAtGlance from '../components/studio/StudioAtGlance'
import StudioHubExtended from '../components/studio/StudioHubExtended'
import StudioClusterNav from '../components/studio/StudioClusterNav'

export default function StudioPage() {
  return (
    <main className="studio-page relative min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden [overflow-anchor:none]">
      {/* Hero: H1 + tagline + symmetrical 52px CTAs + canonical marquee ticker + 4-column ribbon */}
      <StudioHero />

      {/* Two in-house production studios in Dhaka: Physical Stage & Rigs Carousel */}
      <HomeStudioShowcase exploreHref="#packages" bookingHref="#booking" />

      {/* At a glance: Modality 3 Blueprint Matrix */}
      <StudioAtGlance />

      {/* Services: Modality 3 2x3 Blueprint Matrix */}
      <StudioOfferings />

      {/* Studio video portfolio */}
      <VideoPortfolioPreview
        category="all"
        limit={4}
        eyebrow="Studio Work & Deployments"
        title="Our Studio Video Portfolio"
        description="Commercial reels, brand films and multi-camera podcast sessions filmed and edited at FrameCipher Studio in Dhaka."
        buttonText="View All Video Work →"
        buttonHref="/projects#short-video-work"
      />

      {/* On-location event production showcase carousel */}
      <StudioEventCarousel />

      {/* Packages: Modality 2 Architectural Divided Column Band */}
      <StudioComparison />

      {/* Rate card + quote parameters: Architectural Table & Matrix */}
      <StudioPricing />

      {/* Booking process: Modality 2 5-Column Divided Band */}
      <StudioProcess />

      {/* Why a physical studio: Modality 4 Asymmetrical Split + Modality 3 Matrix */}
      <StudioWhyMatters />

      {/* Location + who can book + access logistics */}
      <StudioLocation />

      {/* What to know before you book */}
      <StudioHubExtended />

      {/* Dedicated studio specializations: Modality 3 Matrix */}
      <StudioClusterNav />

      {/* Center-aligned FAQ with Schema.org JSON-LD */}
      <StudioFaq />

      {/* Sharp-cornered Booking Form & WhatsApp CTAs */}
      <StudioBookingForm />
    </main>
  )
}
