import { caseStudyPlaceholders } from '../data/agency'
import { CTASection, PageHero, PosterButton, SectionIntro, TypeMarquee } from '../components/Kinetic'
import Testimonials from '../components/Testimonials'
import GrowthCaseStudyLibrary from '../components/GrowthCaseStudyLibrary'
import CaseStudyNavigation from '../components/CaseStudyNavigation'
export default function CaseStudiesPage() {
  const featuredStudy = caseStudyPlaceholders[0]

  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="Case Studies"
        meta="Documented outcomes / Multi-channel growth"
        number="13"
        title="Documented growth across paid media, search, and brand systems"
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/projects" variant="outline">View portfolio</PosterButton>
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

      <Testimonials
        eyebrow="Client voice"
        title="The proof before the breakdown."
        description="Before the process details, here is the client-side signal: public mentions, direct feedback, and the reactions that show the work landed."
      />

      <div>
        <CaseStudyNavigation />

        <section id="featured-case-study" tabIndex={-1} aria-label="Featured case study" className="scroll-mt-[var(--case-study-scroll-offset,160px)] px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw]">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
                  Featured case study
                </p>
                <h2 className="mt-5 font-heading text-[clamp(2.35rem,7vw,6rem)] font-bold uppercase leading-[0.82] tracking-tighter text-frame-fg">
                  {featuredStudy.title}
                </h2>
                <p className="mt-7 max-w-4xl text-lg font-medium leading-snug text-frame-muted-fg md:text-2xl">
                  {featuredStudy.overview}
                </p>
              </div>

              <dl className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
                <SnapshotItem label="Client" value={featuredStudy.client} />
                <SnapshotItem label="Industry" value={featuredStudy.industry} />
                <SnapshotItem label="Role" value={featuredStudy.role} />
                <SnapshotItem label="Timeline" value={featuredStudy.timeline} />
                <SnapshotItem label="Services" value={featuredStudy.servicesUsed.join(', ')} wide />
                <SnapshotItem label="Goal" value={featuredStudy.goal} wide />
              </dl>
            </div>
          </div>
        </section>

        <section className="border-y-2 border-frame-border px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[95vw] gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-4">
            {featuredStudy.results.map((result) => (
              <article key={result.label} className="bg-frame-bg p-6 md:p-8">
                <p className="font-heading text-[clamp(3rem,8vw,6.5rem)] font-bold uppercase leading-none tracking-tighter text-frame-accent">
                  {result.metric}
                </p>
                <h3 className="mt-5 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg">
                  {result.label}
                </h3>
                <p className="mt-4 text-base font-medium leading-tight text-frame-muted-fg">
                  {result.impact}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro eyebrow="The challenge" title="Credibility existed. Content presence did not.">
              {featuredStudy.problem}
            </SectionIntro>

            <div className="grid gap-6 lg:grid-cols-3">
              <StoryPanel label="Goal" title="Start with trust">
                {featuredStudy.objective}
              </StoryPanel>
              <StoryPanel label="Strategy" title="Make expertise watchable">
                {featuredStudy.strategy}
              </StoryPanel>
              <StoryPanel label="Execution" title="Build the content system">
                {featuredStudy.execution}
              </StoryPanel>
            </div>
          </div>
        </section>

        <section className="border-y-2 border-frame-border px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro eyebrow="The work process" title="A structured production engine for compound reach.">
              {featuredStudy.solution}
            </SectionIntro>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredStudy.processStages?.map((stage) => (
                <article
                  key={stage.number}
                  className="group border-2 border-frame-border bg-frame-bg p-6 transition-colors duration-300 hover:border-frame-accent hover:bg-frame-accent"
                >
                  <p className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg">
                    {stage.number}
                  </p>
                  <h3 className="mt-4 font-heading text-xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg md:text-2xl">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                    {stage.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-5">
              {featuredStudy.focusPoints.map((point, index) => (
                <div key={point} className="flex items-center gap-3 bg-frame-bg p-4">
                  <span className="font-heading text-xl font-bold text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-frame-fg">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro eyebrow="Documented results & verified proof" title="Real platform data from standing start to 1M+ views.">
              {featuredStudy.result}
            </SectionIntro>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="border-2 border-frame-border bg-frame-accent p-7 text-frame-accent-fg md:p-10">
                <p className="text-sm font-black uppercase tracking-[0.26em] opacity-80">Highlight outcome</p>
                <h3 className="mt-5 font-heading text-[clamp(2.3rem,7vw,5.5rem)] font-bold uppercase leading-[0.82] tracking-tighter">
                  {featuredStudy.keyResult}
                </h3>
                <p className="mt-6 max-w-3xl text-lg font-semibold leading-snug md:text-2xl">
                  From a starting channel with just 5 subscribers, the very first YouTube Short generated 350K+ views. Today, the content engine scales past 7.2 million views on Facebook alone with individual breakout reels crossing 1 million views.
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5 border-t-2 border-frame-accent-fg/30 pt-6">
                  <span className="border border-current px-3 py-1.5 text-xs font-black uppercase tracking-wider">
                    1M+ Breakout Reel
                  </span>
                  <span className="border border-current px-3 py-1.5 text-xs font-black uppercase tracking-wider">
                    7.2M+ Facebook Views
                  </span>
                  <span className="border border-current px-3 py-1.5 text-xs font-black uppercase tracking-wider">
                    350K+ First Upload
                  </span>
                  <span className="border border-current px-3 py-1.5 text-xs font-black uppercase tracking-wider">
                    100K–450K+ Repeatable Range
                  </span>
                </div>
              </article>

              <div className="grid gap-4">
                <article className="border-2 border-frame-border bg-frame-bg p-6">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">First upload velocity</p>
                  <h4 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg md:text-3xl">
                    350K+ Views on Video 01
                  </h4>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    Proved that hook engineering and audience retention outperform channel size. The client reached massive organic reach immediately without paid boost or existing follower base.
                  </p>
                </article>
                <article className="border-2 border-frame-border bg-frame-bg p-6">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Retention-led scaling</p>
                  <h4 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg md:text-3xl">
                    Consistent 100K to 1M Views
                  </h4>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    Subsequent videos repeatedly hit 447K, 390K, 378K, 333K, 287K, and 1M views, establishing Dr. Saleheen as a recognized thought leader in supply chain and organizational leadership.
                  </p>
                </article>
              </div>
            </div>

            {/* Real Work & Channel Proof Gallery */}
            <div className="mt-14">
              <div className="flex flex-col gap-3 border-b-2 border-frame-border pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    First-Party Platform Proof
                  </p>
                  <h3 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tighter text-frame-fg md:text-5xl">
                    Dr. Ferdoush Saleheen Channel Reporting
                  </h3>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                  Live Facebook Reels view metrics
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {featuredStudy.proofImages?.map((proof) => (
                  <figure
                    key={proof.src}
                    className="group overflow-hidden border-2 border-frame-border bg-frame-bg transition-colors duration-300 hover:border-frame-accent"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={proof.src}
                        alt={proof.title}
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-3 top-3 border border-frame-accent bg-frame-bg/95 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-wider text-frame-accent">
                        {proof.badge}
                      </span>
                    </div>
                    <figcaption className="border-t-2 border-frame-border p-5">
                      <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                        {proof.title}
                      </h4>
                      <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">
                        {proof.subtitle}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <GrowthCaseStudyLibrary />
      </div>

      <CTASection title="Want a growth system built around measurable outcomes?">
        Frame Cipher connects content, paid media, SEO, websites, and measurement into one
        practical system for growth.
      </CTASection>
    </main>
  )
}

function SnapshotItem({ label, value, wide = false }) {
  return (
    <div className={`bg-frame-bg p-6 ${wide ? 'sm:col-span-2' : ''}`}>
      <dt className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">{label}</dt>
      <dd className="mt-3 text-base font-bold leading-tight text-frame-fg md:text-lg">{value}</dd>
    </div>
  )
}

function StoryPanel({ label, title, children }) {
  return (
    <article className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{label}</p>
      <h3 className="mt-5 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-4xl">
        {title}
      </h3>
      <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg md:text-lg">{children}</p>
    </article>
  )
}

function ProofBox({ label, value }) {
  return (
    <article className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{label}</p>
      <p className="mt-4 text-xl font-black uppercase leading-tight tracking-tighter text-frame-fg md:text-3xl">
        {value}
      </p>
    </article>
  )
}
