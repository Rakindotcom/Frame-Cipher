'use client'

import VideoPortfolioPreview from '../components/projects/VideoPortfolioPreview'
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
} from '../components/studio'
import StudioAtGlance from '../components/studio/StudioAtGlance'
import StudioHubExtended from '../components/studio/StudioHubExtended'
import StudioClusterNav from '../components/studio/StudioClusterNav'

export default function StudioPage() {
  return (
    <main className="bg-frame-bg text-frame-fg pt-16 md:pt-20">
      {/* Hero: H1 + tagline + booking CTAs */}
      <StudioHero />

      {/* At a glance: location, hours, prices, payment */}
      <StudioAtGlance />

      {/* Services: 6 production services + more on request */}
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

      {/* Packages: Studio Session / Studio + Crew / Full Production */}
      <StudioComparison />

      {/* Rate card + what moves a quote */}
      <StudioPricing />

      {/* Booking process: 5 steps */}
      <StudioProcess />

      {/* Why a physical studio */}
      <StudioWhyMatters />

      {/* Location + who can book + map */}
      <StudioLocation />

      {/* What to know before you book */}
      <StudioHubExtended />

      {/* Dedicated studio specializations */}
      <StudioClusterNav />

      {/* FAQs */}
      <StudioFaq />

      {/* Booking form */}
      <StudioBookingForm />
    </main>
  )
}
