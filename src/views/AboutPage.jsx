import {
  AboutHero,
  AboutOrigin,
  AboutFounders,
  AboutCapabilityMix,
  AboutPrinciples,
  AboutIndustries,
  AboutCTA,
} from '../components/about'

export default function AboutPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <AboutHero />
      <AboutOrigin />
      <AboutFounders />
      <AboutCapabilityMix />
      <AboutPrinciples />
      <AboutIndustries />
      <AboutCTA />
    </main>
  )
}
