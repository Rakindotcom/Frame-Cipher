import Clients from '../components/Clients'
import { GrowthOSHome } from '../components/GrowthOS'
import Testimonials from '../components/Testimonials'
import {
  HomeHero,
  HomeMarqueeStats,
  HomePillars,
  HomeLoop,
  HomeManifesto,
  HomeTextMarquee,
  HomeFeaturedWork,
  HomeRecentInsights,
  HomeCaseStudies,
  HomeServicesPulse,
  HomeProcess,
  HomeEngagement,
  HomeIndustries,
  HomeComparison,
  HomeAbout,
  HomeFAQ,
  HomeCTA,
} from '../components/home'

export default function Home() {
  return (
    <main className="relative bg-frame-bg text-frame-fg">
      <HomeHero />
      <Clients />
      <Testimonials />
      <GrowthOSHome />
      <HomeMarqueeStats />
      <HomePillars />
      <HomeLoop />
      <HomeManifesto />
      <HomeTextMarquee />
      <HomeFeaturedWork />
      <HomeRecentInsights />
      <HomeCaseStudies />
      <HomeServicesPulse />
      <HomeProcess />
      <HomeEngagement />
      <HomeIndustries />
      <HomeComparison />
      <HomeAbout />
      <HomeFAQ />
      <HomeCTA />
    </main>
  )
}
