import { industries, servicePillars } from '../data/agency'
import { CTASection, InversionCard, PageHero, PosterButton, SectionIntro, TypeMarquee } from '../components/Kinetic'

const principles = [
  'Strategy before production',
  'Creative that supports the offer',
  'Technology that makes growth easier to manage',
  'Clear handoffs, clear ownership, clear reporting',
]

const storyBlocks = [
  {
    eyebrow: 'Why we exist',
    title: 'Connect the work growth depends on',
    description:
      'Many brands hire one person for ads, another for design, another for video, and another for websites. The result is slow execution and campaigns that do not feel connected.',
  },
  {
    eyebrow: 'What changes',
    title: 'Scattered execution becomes one operating system',
    description:
      'We bring strategy, creative, media, software, and performance work into one workflow so content, platforms, campaigns, and data can support the same business goal.',
  },
  {
    eyebrow: 'How it started',
    title: 'From visual production to growth infrastructure',
    description:
      'Frame Cipher began with visual execution and expanded toward the systems that make creative work perform: positioning, websites, campaign planning, software, and optimization.',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="About Frame Cipher"
        meta="Built in Dhaka / made for moving brands"
        number="01"
        title="One team for the whole growth system"
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/services" variant="outline">Explore services</PosterButton>
          </>
        }
      >
        Frame Cipher was built for businesses that do not want scattered execution. We combine strategic
        thinking, creative production, marketing, and technology so brands can move faster from idea to launch.
      </PageHero>

      <TypeMarquee items={['Strategy', 'Creative', 'Media', 'Software', 'Performance']} accent />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Origin" title="The agency is the system.">
            We do not treat brand, content, web, ads, and automation like separate lanes. The useful
            work happens where those lanes collide.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px lg:grid-cols-3">
            {storyBlocks.map((item, index) => (
              <InversionCard key={item.title} eyebrow={item.eyebrow} title={item.title} number={`0${index + 1}`}>
                <p>{item.description}</p>
              </InversionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Capability mix" title="Five engines. One rhythm.">
            The team structure is deliberately connected so strategy can shape production, production can
            feed campaigns, and data can sharpen the next build.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px md:grid-cols-5">
            {servicePillars.map((pillar, index) => (
              <InversionCard key={pillar.title} title={pillar.title} number={`0${index + 1}`}>
                <p>{pillar.description}</p>
              </InversionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="sticky top-28 self-start">
            <SectionIntro eyebrow="Principles" title="No soft middle. No mystery handoffs." />
          </div>

          <div className="grid bg-frame-border gap-px">
            {principles.map((principle, index) => (
              <article key={principle} className="group grid min-h-32 items-center bg-frame-bg p-7 transition-colors duration-300 hover:bg-frame-accent md:grid-cols-[0.22fr_1fr]">
                <p className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg md:text-6xl">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-transform duration-300 group-hover:translate-x-4 group-hover:text-frame-accent-fg md:text-3xl">
                  {principle}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-accent px-4 py-24 text-frame-accent-fg md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-[0.85] tracking-tighter">
            Built for brands that move in public.
          </h2>
          <div>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span key={industry} className="border-2 border-frame-accent-fg px-5 py-3 text-sm font-black uppercase tracking-tighter">
                  {industry}
                </span>
              ))}
            </div>
            <p className="mt-8 text-base font-semibold leading-snug md:text-xl">
              We start with the business problem, define the growth system around it, then move through
              strategy, creative direction, production, development, launch, reporting, and optimization.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Want one team to plan and execute the next move?">
        Bring the problem, the offer, or the messy middle. We will help shape the next useful system for the business.
      </CTASection>
    </main>
  )
}
