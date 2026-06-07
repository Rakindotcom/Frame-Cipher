import { caseStudyPlaceholders } from '../data/agency'
import { CTASection, PageHero, PosterButton, SectionIntro, TypeMarquee } from '../components/Kinetic'
import Testimonials from '../components/Testimonials'

export default function CaseStudiesPage() {
  const featuredStudy = caseStudyPlaceholders[0]

  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="Case Studies"
        meta={featuredStudy.industry}
        number="02"
        title="Launching a personal brand from 5 subscribers to 350K+ views"
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/projects" variant="outline">View portfolio</PosterButton>
          </>
        }
      >
        Frame Cipher helped Ferdous Saleheen start content creation from zero with strategy,
        video shooting, and short-form editing built for trust and early momentum.
      </PageHero>

      <TypeMarquee items={['350K+ Views', '5 Subscribers', '50K Average Reels', 'Personal Brand']} accent />

      <Testimonials
        eyebrow="Client voice"
        title="The proof before the breakdown."
        description="Before the process details, here is the client-side signal: public mentions, direct feedback, and the reactions that show the work landed."
      />

      <section className="px-4 py-24 md:px-8 md:py-32">
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
        <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro eyebrow="The solution" title="A launch system for a first-time creator." className="mb-0">
            {featuredStudy.solution}
          </SectionIntro>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border">
            {featuredStudy.focusPoints.map((point, index) => (
              <div key={point} className="grid grid-cols-[auto_1fr] items-center gap-5 bg-frame-bg p-6">
                <span className="font-heading text-3xl font-bold leading-none tracking-tighter text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-base font-black uppercase leading-tight tracking-tighter text-frame-fg md:text-xl">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Results" title="Strong early traction from a standing start.">
            {featuredStudy.result}
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <article className="border-2 border-frame-border bg-frame-accent p-7 text-frame-accent-fg md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.26em] opacity-80">Highlight metric</p>
              <h3 className="mt-5 font-heading text-[clamp(2.3rem,7vw,5.5rem)] font-bold uppercase leading-[0.82] tracking-tighter">
                {featuredStudy.keyResult}
              </h3>
              <p className="mt-6 max-w-3xl text-lg font-semibold leading-snug md:text-2xl">
                The first video proved the content could travel beyond the starting audience,
                even with only 5 subscribers at launch.
              </p>
            </article>

            <div className="grid gap-6">
              <ProofBox label="Secondary metric" value={featuredStudy.secondaryResult} />
              <ProofBox
                label="Proof assets to add"
                value={featuredStudy.visualSlots.join(', ')}
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Want to build a personal brand that earns attention and trust?">
        Frame Cipher helps professionals, founders, and experts turn their knowledge into
        high-performing content systems.
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
