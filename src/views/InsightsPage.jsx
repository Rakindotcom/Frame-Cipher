import { insightPosts } from '../data/agency'
import { CTASection, InversionCard, PageHero, PosterButton, SectionIntro, TypeMarquee } from '../components/Kinetic'

export default function InsightsPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="Insights"
        meta="Editorial structure / strategy notes"
        number="03"
        title="Thinking for brands with moving parts"
        actions={
          <>
            <PosterButton href="/contact">Get a growth audit</PosterButton>
            <PosterButton href="/services" variant="outline">Service systems</PosterButton>
          </>
        }
      >
        A prepared editorial structure for Frame Cipher perspectives. These article cards can become
        full posts when the team is ready to publish deeper strategy content.
      </PageHero>

      <TypeMarquee items={insightPosts.map((post) => post.category)} slow />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Signals" title="Useful strategy, not soft thought leadership.">
            The page is structured for practical reads about brand, content, technology, and growth systems.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px md:grid-cols-3">
            {insightPosts.map((post, index) => (
              <InversionCard key={post.title} eyebrow={post.category} title={post.title} number={String(index + 1).padStart(2, '0')}>
                <p>{post.description}</p>
              </InversionCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need a strategy view on your next move?" primaryText="Get a 360 growth audit">
        Send the current problem, the offer, and where the system feels stuck. We will help identify the
        next useful growth move.
      </CTASection>
    </main>
  )
}
