import Link from 'next/link'
import {
  engagementModels,
  industries,
  outcomes,
  portfolioProjects,
  processSteps,
  servicePillars,
  services,
} from '../data/agency'

const stats = [
  { value: '360', label: 'growth system' },
  { value: '12+', label: 'service engines' },
  { value: '01', label: 'integrated team' },
  { value: '24/7', label: 'always on' },
  { value: '5', label: 'core pillars' },
  { value: '10+', label: 'brands served' },
  { value: '6', label: 'step process' },
  { value: '100%', label: 'in-house' },
]

const operatingLoop = ['Audit', 'Position', 'Produce', 'Build', 'Launch', 'Measure', 'Scale']

const proofLines = [
  'Strategy that has teeth',
  'Content built for campaigns',
  'Software that carries growth',
  'Media that moves fast',
  'Reporting that changes decisions',
]

const manifesto = [
  {
    number: '01',
    title: 'Stop buying fragments',
    description:
      'A brand does not grow because one vendor made a logo, another edited reels, and a third shipped a landing page. Growth needs one connected operating rhythm.',
  },
  {
    number: '02',
    title: 'Make the system visible',
    description:
      'We map the offer, message, creative, web flow, campaigns, automations, and data so every moving part knows what the others are doing.',
  },
  {
    number: '03',
    title: 'Ship with pressure',
    description:
      'Frame Cipher turns strategy into assets, assets into launches, launches into data, and data into the next sharper move.',
  },
]

const duplicatedStats = [...stats, ...stats]
const duplicatedProofLines = [...proofLines, ...proofLines]

function MarqueeStats() {
  return (
    <section className="kinetic-marquee border-y-2 border-frame-border bg-frame-accent py-5 text-frame-accent-fg">
      <p className="sr-only">Frame Cipher combines one team, twelve service engines, and 360 growth systems.</p>
      <div className="kinetic-marquee-track" aria-hidden="true">
        {duplicatedStats.map((item, index) => (
          <div key={`${item.label}-${index}`} className="flex shrink-0 items-center">
            <div className="flex shrink-0 flex-col px-10">
              <span className="font-heading text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-none tracking-tighter">
                {item.value}
              </span>
              <span className="mt-1 whitespace-nowrap text-xs font-black uppercase tracking-[0.25em] opacity-70">
                {item.label}
              </span>
            </div>
            <span className="shrink-0 text-lg opacity-30">◆</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function TextMarquee() {
  return (
    <section className="kinetic-marquee border-y-2 border-frame-border bg-frame-bg py-8 text-frame-fg">
      <p className="sr-only">Proof points: strategy, campaign content, growth software, fast media, and useful reporting.</p>
      <div className="kinetic-marquee-track kinetic-marquee-track-slow kinetic-marquee-track-reverse" aria-hidden="true">
        {duplicatedProofLines.map((line, index) => (
          <div key={`${line}-${index}`} className="flex items-center gap-8 px-6">
            <span className="font-heading text-[clamp(2rem,6vw,5.5rem)] font-bold uppercase leading-none tracking-tighter text-frame-muted">
              {line}
            </span>
            <span className="h-4 w-4 bg-frame-accent" />
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-12 max-w-[95vw]">
      <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-frame-accent">{eyebrow}</p>
      <h2 className="font-heading text-[clamp(2.6rem,8vw,7.5rem)] font-bold uppercase leading-[0.82] tracking-tighter text-frame-fg">
        {title}
      </h2>
      {children && <p className="mt-7 max-w-3xl text-lg font-medium leading-tight text-frame-muted-fg md:text-2xl">{children}</p>}
    </div>
  )
}

function PosterButton({ href, children, variant = 'accent' }) {
  const classes =
    variant === 'accent'
      ? 'border-frame-accent bg-frame-accent text-frame-accent-fg hover:scale-105'
      : 'border-frame-border bg-transparent text-frame-fg hover:border-frame-fg hover:bg-frame-fg hover:text-frame-accent-fg'

  return (
    <Link
      href={href}
      className={`inline-flex min-h-14 items-center border-2 px-8 py-4 text-sm font-black uppercase tracking-tighter transition-all duration-200 active:scale-95 md:min-h-20 md:px-12 md:text-lg ${classes}`}
    >
      {children}
    </Link>
  )
}

export default function Home() {
  const featuredProjects = portfolioProjects.slice(0, 3)
  const featuredServices = services.slice(0, 6)

  return (
    <main className="relative bg-frame-bg text-frame-fg">
      <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden border-b-2 border-frame-border px-4 pb-14 pt-28 md:px-8 md:pb-20 md:pt-36">
        <div className="absolute -right-8 top-28 -z-10 font-heading text-[34vw] font-bold leading-none tracking-tighter text-frame-muted md:top-12 md:text-[24vw]" aria-hidden="true">
          360
        </div>
        <div className="mx-auto flex max-w-[95vw] flex-col gap-10">
          <div className="flex flex-wrap items-center gap-6 pb-5">
            <p className="whitespace-nowrap text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-base">
              Dhaka / Worldwide / Growth OS
            </p>
            <div className="hidden h-[2px] flex-grow bg-frame-border md:block" />
            <p className="whitespace-nowrap text-xs font-black uppercase tracking-[0.28em] text-frame-muted-fg md:text-base">
              Brand + Media + Tech + Performance
            </p>
          </div>

          <div>
            <h1 className="max-w-[15ch] font-heading text-[clamp(3.4rem,13vw,14rem)] font-bold uppercase leading-[0.78] tracking-tighter text-frame-fg">
              Frame Cipher builds brands that move
            </h1>
            <div className="mt-12 grid gap-8 border-t-2 border-frame-border pt-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
              <p className="max-w-5xl text-xl font-medium leading-tight text-frame-muted-fg md:text-3xl">
                One integrated team for brand strategy, content production, websites, software,
                campaigns, automations, and the data loop that keeps growth from going soft.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <PosterButton href="/contact">Book a strategy call</PosterButton>
                <PosterButton href="/projects" variant="outline">View the work</PosterButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStats />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionHeader eyebrow="The offer" title="One roof. No vendor drift.">
            Frame Cipher is built for teams that need the thinking, the assets, the platforms, and
            the campaign machine to behave like one system.
          </SectionHeader>

          <div className="grid bg-frame-border gap-px md:grid-cols-5">
            {servicePillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group min-h-72 bg-frame-bg p-7 transition-colors duration-300 hover:bg-frame-accent"
              >
                <p className="font-heading text-[5rem] font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg" aria-hidden="true">
                  0{index + 1}
                </p>
                <h3 className="mt-8 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg md:text-5xl">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="sticky top-28">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Growth loop
            </p>
            <h2 className="font-heading text-[clamp(3rem,9vw,8rem)] font-bold uppercase leading-[0.82] tracking-tighter">
              Not a campaign. A machine.
            </h2>
          </div>

          <div className="grid bg-frame-border gap-px">
            {operatingLoop.map((step, index) => (
              <div
                key={step}
                className="group grid min-h-28 items-center bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-accent md:grid-cols-[0.26fr_1fr]"
              >
                <span className="font-heading text-6xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg md:text-8xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-transform duration-300 group-hover:translate-x-4 group-hover:text-frame-accent-fg md:text-7xl">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionHeader eyebrow="Manifesto" title="The old agency stack is broken.">
            Disconnected work creates slow teams, mixed messages, weaker campaigns, and websites
            that cannot carry the weight of the offer.
          </SectionHeader>

          <div className="grid gap-6 lg:grid-cols-3">
            {manifesto.map((item) => (
              <article key={item.number} className="sticky top-28 border-2 border-frame-border bg-frame-bg p-8 md:p-10">
                <p className="font-heading text-[clamp(6rem,13vw,12rem)] font-bold leading-[0.75] tracking-tighter text-frame-muted" aria-hidden="true">
                  {item.number}
                </p>
                <h3 className="mt-8 font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-6xl">
                  {item.title}
                </h3>
                <p className="mt-6 text-lg font-medium leading-tight text-frame-muted-fg md:text-xl">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TextMarquee />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow="Selected work" title="Proof with pixels." />
            <PosterButton href="/projects" variant="outline">All projects</PosterButton>
          </div>

          <div className="grid bg-frame-border gap-px lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article key={project.name} className="group bg-frame-bg">
                <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-frame-border bg-frame-muted">
                  <img
                    src={project.preview}
                    alt={project.name}
                    className="h-full w-full object-cover saturate-0 transition duration-300 group-hover:scale-105 group-hover:saturate-100"
                  />
                  <p className="absolute left-4 top-4 bg-frame-accent px-3 py-2 text-xs font-black uppercase tracking-[0.22em] text-frame-accent-fg">
                    0{index + 1} / {project.category}
                  </p>
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-5xl">
                    {project.name}
                  </h3>
                  <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg">
                    {project.description}
                  </p>
                  <p className="mt-6 border-t-2 border-frame-border pt-5 text-sm font-black uppercase tracking-[0.18em] text-frame-accent">
                    {project.scope}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-accent px-4 py-24 text-frame-accent-fg md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="font-heading text-[clamp(3.2rem,10vw,10rem)] font-bold uppercase leading-[0.78] tracking-tighter">
              Services with one pulse.
            </h2>
            <p className="text-xl font-semibold leading-tight md:text-3xl">
              Pick one service or wire the whole growth system together. The point is alignment:
              message, media, web, software, campaigns, and reporting moving in the same direction.
            </p>
          </div>

          <div className="grid bg-frame-accent-fg gap-px md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group min-h-72 bg-frame-accent p-7 text-frame-accent-fg transition-colors duration-300 hover:bg-frame-bg hover:text-frame-fg"
              >
                <p className="text-xs font-black uppercase tracking-[0.28em] opacity-70">{service.navTitle}</p>
                <h3 className="mt-7 font-heading text-3xl font-bold uppercase leading-none tracking-tighter md:text-5xl">
                  {service.title}
                </h3>
                <p className="mt-5 text-base font-semibold leading-tight opacity-80">
                  {service.description}
                </p>
                <span className="mt-8 inline-block border-b-2 border-current pb-1 text-sm font-black uppercase tracking-tighter">
                  {service.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionHeader eyebrow="Process" title="From signal to scale.">
            The work moves in a loop: understand the market, sharpen the message, create the assets,
            build the system, launch, measure, and improve.
          </SectionHeader>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="group relative min-h-80 overflow-hidden border-2 border-frame-border bg-frame-bg p-8 transition-colors duration-300 hover:bg-frame-accent"
              >
                <p className="absolute -right-3 -top-4 font-heading text-[9rem] font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg/20 md:text-[12rem]" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="relative">
                  <h3 className="font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg md:text-6xl">
                    {step.title}
                  </h3>
                  <p className="mt-6 max-w-sm text-lg font-medium leading-tight text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionHeader eyebrow="Engagement" title="Choose the pressure level.">
            From launch kits to full 360 partnerships, the model changes around your stage and the
            amount of execution your team needs.
          </SectionHeader>

          <div className="grid bg-frame-border gap-px lg:grid-cols-5">
            {engagementModels.map((model) => (
              <article key={model.title} className="bg-frame-bg p-7">
                <h3 className="font-heading text-3xl font-bold uppercase leading-none tracking-tighter md:text-4xl">
                  {model.title}
                </h3>
                <p className="mt-8 text-xs font-black uppercase tracking-[0.26em] text-frame-accent">Best for</p>
                <p className="mt-3 text-base font-medium leading-tight text-frame-muted-fg">{model.bestFor}</p>
                <p className="mt-8 text-xs font-black uppercase tracking-[0.26em] text-frame-accent">Includes</p>
                <p className="mt-3 text-base font-medium leading-tight text-frame-muted-fg">{model.includes}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-frame-accent">Built for</p>
            <h2 className="font-heading text-[clamp(2.8rem,8vw,8rem)] font-bold uppercase leading-[0.82] tracking-tighter">
              Brands that cannot afford boring.
            </h2>
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="border-2 border-frame-border px-5 py-3 text-sm font-black uppercase tracking-tighter text-frame-fg"
                >
                  {industry}
                </span>
              ))}
            </div>

            <div className="mt-10 grid bg-frame-border gap-px md:grid-cols-2">
              {outcomes.map((outcome) => (
                <article key={outcome} className="bg-frame-bg p-6">
                  <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-4xl">
                    {outcome}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-frame-border px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-12">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Next move
            </p>
            <h2 className="font-heading text-[clamp(3.2rem,11vw,12rem)] font-bold uppercase leading-[0.78] tracking-tighter">
              Bring us the brief. We will bring the system.
            </h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <p className="max-w-4xl text-xl font-medium leading-tight text-frame-muted-fg md:text-3xl">
                Tell us what you are building, selling, launching, or fixing. We will shape the
                strategy, content, technology, and marketing path around it.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <PosterButton href="/contact">Book a strategy call</PosterButton>
                <PosterButton href="/contact" variant="outline">Send a brief</PosterButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
