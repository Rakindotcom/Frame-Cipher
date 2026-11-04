import React from 'react'
import PosterButton from '../../../home/PosterButton'

const whyChoosePillars = [
  {
    tag: '01',
    num: '01',
    title: 'One In-House Team',
    description: 'Strategy, design, development, content structure, SEO setup, and launch support stay within one coordinated team.',
  },
  {
    tag: '02',
    num: '02',
    title: 'Platform-Neutral Recommendations',
    description: 'We recommend Wix when it fits the project. When another platform is more suitable, we explain why instead of forcing the project into Wix.',
  },
  {
    tag: '03',
    num: '03',
    title: 'Business-First Website Planning',
    description: "We start with the website's purpose, target audience, customer journey, content structure, and conversion goals before choosing the implementation approach.",
  },
  {
    tag: '04',
    num: '04',
    title: 'Wix Studio & Custom Development',
    description: 'We can go beyond standard drag-and-drop builds when the project needs advanced responsive design, CMS functionality, custom code, APIs, or other supported integrations.',
  },
  {
    tag: '05',
    num: '05',
    title: 'SEO-Ready Foundations',
    description: 'We consider site structure, metadata, internal linking, indexation, mobile experience, performance, and analytics from the beginning.',
  },
  {
    tag: '06',
    num: '06',
    title: 'Easy Client Handover',
    description: 'The finished website should remain manageable after launch. We provide the agreed access, setup, and basic guidance needed to manage the site confidently.',
  },
  {
    tag: '07',
    num: '07',
    title: 'Transparent Review Process',
    description: 'We use review checkpoints throughout the project so you can approve structure, design, functionality, and content direction before launch.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky Left Column (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Why Businesses Choose Framecipher for{' '}
              <span className="italic text-frame-accent">Wix Development.</span>
            </h2>

            <p className="text-base font-normal leading-relaxed text-zinc-300">
              We build Wix websites around business requirements, not around a fixed template or one-size-fits-all package.
            </p>

            {/* Ownership Stat Card */}
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                100% · No Vendor Lock-In
              </span>
              <h3 className="font-heading text-lg font-medium text-white">
                Direct Admin Control &amp; Clean Transfer
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                You maintain full administrative ownership of your Wix account, domain, custom Velo code, media assets, and connected third-party tools from day one.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton href="/contact" variant="accent">
                Start Your Wix Project &rarr;
              </PosterButton>
            </div>
          </div>

          {/* Right Column: Divided Numbered Rows (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {whyChoosePillars.map((pillar) => (
              <div key={pillar.num} className="py-8 first:pt-0 last:pb-0 group">
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
