import {
  AboutHero,
  AboutOrigin,
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
      <AboutCapabilityMix />
      <AboutPrinciples />
      <AboutIndustries />
      <AboutCTA />
    </main>
  )
}
