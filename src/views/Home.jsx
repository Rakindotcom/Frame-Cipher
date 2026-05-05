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

const growthFlow = ['Strategy', 'Brand', 'Content', 'Website', 'Campaigns', 'Data', 'Optimization']

const valueProps = [
  {
    title: 'One integrated team',
    description: 'No scattered vendors and no broken handoffs.',
  },
  {
    title: 'Faster execution',
    description: 'Strategy, production, development, and marketing move together.',
  },
  {
    title: 'Premium content',
    description: 'Visuals, videos, and campaigns built for modern platforms.',
  },
  {
    title: 'Growth infrastructure',
    description: 'Websites, automations, dashboards, and systems that support scale.',
  },
]

function SectionIntro({ eyebrow, title, children, align = 'center' }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <div className={`mb-4 flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-px w-16 bg-linear-to-r from-transparent to-cyan-400/60" />
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
        <div className="h-px w-16 bg-linear-to-l from-transparent to-cyan-400/60" />
      </div>
      <h2 className="font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">{children}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_78%_10%,rgba(168,85,247,0.2),transparent_30%),linear-gradient(180deg,#07070b_0%,#0b0d14_55%,#07070b_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[56px_56px] opacity-40" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 inline-flex border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
              One Team for Brand, Content, Tech, and Growth.
            </p>
            <h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl">
              360 Marketing, Media, and Technology Solutions for Brands That Want to Grow Faster
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
              Frame Cipher helps businesses plan, build, produce, launch, advertise, automate, and scale
              through strategy, creative, software, content production, and performance marketing.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-white px-6 py-4 text-sm font-bold text-[#08080d] transition-transform hover:-translate-y-0.5">
                Book a Strategy Call
              </Link>
              <Link href="/projects" className="border border-white/20 px-6 py-4 text-sm font-bold text-white transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10">
                See Our Work
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="border border-white/10 bg-white/[0.04] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Growth OS</p>
                  <p className="mt-1 text-sm text-gray-400">Strategy to execution map</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_22px_rgba(110,231,183,0.8)]" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Strategy', 'Content', 'Software', 'Media', 'Ads', 'Analytics'].map((item, index) => (
                  <div key={item} className="border border-white/10 bg-[#0b0d14]/80 p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">0{index + 1}</span>
                      <span className="h-2 w-12 bg-linear-to-r from-cyan-300 to-purple-400" />
                    </div>
                    <h2 className="font-heading text-xl font-bold text-white">{item}</h2>
                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {item === 'Software'
                        ? 'Websites, CRM, dashboards, and automations.'
                        : 'Campaign-ready planning, assets, and execution.'}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 border border-dashed border-white/15 p-5 text-sm text-gray-400">
                Showreel coming soon. Current work previews are available in the portfolio.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm font-medium leading-7 text-gray-300 md:text-base">
          Trusted by founders, growing brands, creators, and businesses that need strategy, content,
          technology, and execution under one roof.
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What we do"
            title="Everything a modern brand needs to launch, market, and scale."
          >
            We combine strategy, creative, media production, software development, and digital marketing into
            one integrated growth system.
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-5">
            {servicePillars.map((pillar) => (
              <article key={pillar.title} className="border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-cyan-300/40">
                <h3 className="font-heading text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d14] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">360 Growth System</p>
            <h2 className="font-heading text-4xl font-bold text-white md:text-6xl">
              A complete growth system, not disconnected services.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Most businesses struggle because their strategy, content, website, ads, and technology are
              disconnected. Frame Cipher brings them together into one operating system designed to help
              brands launch, market, and scale.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-7">
            {growthFlow.map((step, index) => (
              <div key={step} className="relative border border-white/10 bg-white/[0.04] p-4 text-center">
                <div className="mb-3 text-xs font-bold text-cyan-300">0{index + 1}</div>
                <div className="text-sm font-bold text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Execution model" title="One team instead of five vendors.">
            Your brand should not need separate teams for strategy, design, video, websites, ads, and
            software. Frame Cipher brings the full execution system together so your campaigns, content,
            platforms, and data work in sync.
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-4">
            {valueProps.map((item) => (
              <article key={item.title} className="border border-white/10 bg-linear-to-b from-white/[0.06] to-white/[0.02] p-6">
                <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d14] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Featured work</p>
              <h2 className="font-heading text-4xl font-bold text-white md:text-6xl">
                Selected work built across brand, media, technology, and growth.
              </h2>
            </div>
            <Link href="/projects" className="border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-cyan-300/50">
              See Our Work
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {portfolioProjects.slice(0, 3).map((project) => (
              <article key={project.name} className="overflow-hidden border border-white/10 bg-white/[0.04]">
                <div className="aspect-video bg-[#11131d]">
                  <img src={project.preview} alt={project.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{project.category}</p>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{project.description}</p>
                  <p className="mt-5 border-t border-white/10 pt-4 text-sm text-gray-300">{project.scope}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Process" title="From idea to execution.">
            We start by understanding your business, audience, offer, and market. Then we build the strategy,
            create the assets, develop the platforms, launch the campaigns, and optimize the system based on performance.
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="border border-white/10 bg-white/[0.04] p-6">
                <p className="mb-5 text-sm font-bold text-cyan-300">0{index + 1}</p>
                <h3 className="font-heading text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d14] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Services" title="Strategy, content, software, media, and performance in one place." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-cyan-300/50"
              >
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-cyan-200">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{service.description}</p>
                <span className="mt-6 inline-block text-sm font-bold text-cyan-300">{service.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Engagement models" title="Ways to work with Frame Cipher." />
          <div className="grid gap-4 lg:grid-cols-5">
            {engagementModels.map((model) => (
              <article key={model.title} className="border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-heading text-2xl font-bold text-white">{model.title}</h3>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Best for</p>
                <p className="mt-2 text-sm text-gray-300">{model.bestFor}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Includes</p>
                <p className="mt-2 text-sm leading-7 text-gray-400">{model.includes}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="bg-white px-6 py-4 text-sm font-bold text-[#08080d]">
              Request a Custom Growth Plan
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d14] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Industries"
            title="Built for businesses that need stronger brand, content, and growth systems."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span key={industry} className="border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-gray-300">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Proof structure" title="Client outcomes we build for" />
          <div className="grid gap-4 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome} className="border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-heading text-xl font-bold text-white">{outcome}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),rgba(255,255,255,0.04)_34%,rgba(255,255,255,0.02)_100%)] p-8 text-center md:p-14">
          <h2 className="font-heading text-4xl font-bold text-white md:text-6xl">Ready to build your next growth system?</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Tell us what you are building. We will help you shape the strategy, content, technology, and
            marketing system to launch and scale it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white px-6 py-4 text-sm font-bold text-[#08080d]">
              Book a Strategy Call
            </Link>
            <Link href="/contact" className="border border-white/20 px-6 py-4 text-sm font-bold text-white">
              Send Us a Brief
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
