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
  HomeProblems,
  HomeBuild,
  HomeStudioShowcase,
  HomeWhy,
  HomeTech,
  HomeFeaturedWork,
  HomeRecentInsights,
  HomeCaseStudies,
  HomeCalculatorsGrid,
  HomeProcess,
  HomeEngagement,
  HomeIndustries,
  HomeComparison,
  HomeAbout,
  HomeFAQ,
  HomeCTA,
} from '../components/home'
import HomePortfolioShowcase from '../components/home/HomePortfolioShowcase'

export default function Home({ latestPosts = [] }) {
  return (
    <main className="relative bg-frame-bg text-frame-fg">
      <HomeHero />
      <Clients />
      <HomeProblems />
      <HomeBuild />
      <HomeStudioShowcase />
      <Testimonials />
      <GrowthOSHome />
      <HomeMarqueeStats />
      <HomePillars />
      <HomeLoop />
      <HomeManifesto />
      <HomeTextMarquee />
      <HomeFeaturedWork />
      <HomePortfolioShowcase />
      <HomeRecentInsights initialPosts={latestPosts} />
      <HomeCaseStudies />
      <HomeCalculatorsGrid />
      <HomeProcess />
      <HomeEngagement />
      <HomeIndustries />
      <HomeWhy />
      <HomeTech />
      <HomeComparison />
      <HomeAbout />
      <HomeFAQ />
      <HomeCTA />
    </main>
  )
}
