import Link from 'next/link'
import { PageHero, PosterButton, TypeMarquee } from '../Kinetic'

const inlineLink = "text-frame-fg underline decoration-frame-accent/40 hover:decoration-frame-accent hover:text-frame-accent transition-colors"

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
        In-depth breakdowns of how Frame Cipher engineers measurable growth: from high-ROI{' '}
        <Link href="/services/paid-advertising/meta-ads" className={inlineLink}>Meta advertising</Link> campaigns and{' '}
        <Link href="/services/seo" className={inlineLink}>organic search</Link> dominance to{' '}
        <Link href="/services/website-design-development" className={inlineLink}>digital platforms</Link> and{' '}
        <Link href="/services/content-creation" className={inlineLink}>content systems</Link> built to scale.
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
