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
  HomeServicesPulse,
  HomeProcess,
  HomeEngagement,
  HomeIndustries,
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
      <HomeServicesPulse />
      <HomeProcess />
      <HomeEngagement />
      <HomeIndustries />
      <HomeCTA />
    </main>
  )
}
