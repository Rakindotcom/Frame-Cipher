import { PageHero, PosterButton, TypeMarquee } from '../Kinetic'

export default function CaseStudiesHero() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        meta="Documented outcomes / Multi-channel growth"
        number="13"
        title="Documented growth across paid media, search, and brand systems"
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/projects" variant="outline">
              View portfolio
            </PosterButton>
          </>
        }
      >
        In-depth breakdowns of how Frame Cipher engineers measurable growth: from high-ROI
        Meta advertising campaigns and organic search dominance to digital platforms and
        content systems built to scale.
      </PageHero>

      <TypeMarquee
        items={[
          'Meta Ads Scale',
          'Search Growth & SEO',
          '1.8M+ Ad Impressions',
          'High-Converting Websites',
          '7.2M+ Facebook Views',
          '350K+ First Short Views',
        ]}
        accent
      />
    </>
  )
}
