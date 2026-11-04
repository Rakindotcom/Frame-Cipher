import React from 'react'
import PosterButton from '../../../home/PosterButton'

const whyChooseUsPillars = [
  {
    tag: '01',
    num: '01',
    title: 'One In-House Team',
    desc: 'Strategy, design, CMS architecture, development, integrations, SEO setup, and launch support stay within one coordinated team.',
  },
  {
    tag: '02',
    num: '02',
    title: 'CMS-First Planning',
    desc: 'We plan the content model before building pages so your team can add and update content without breaking the design structure.',
  },
  {
    tag: '03',
    num: '03',
    title: 'Design & Development in One Workflow',
    desc: 'Visual design, responsive behavior, components, interactions, and CMS implementation are developed as one system rather than being handed between disconnected teams.',
  },
  {
    tag: '04',
    num: '04',
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Webflow when design flexibility, structured content, and marketing-team editing are the right priorities. When the project requires a different architecture, we explain that before development starts.',
  },
  {
    tag: '05',
    num: '05',
    title: 'Clean Custom-Code Strategy',
    desc: 'We use custom JavaScript, embeds, APIs, and external integrations when they solve genuine requirements while avoiding unnecessary code that makes the site harder to maintain.',
  },
  {
    tag: '06',
    num: '06',
    title: 'SEO & Performance Built In',
    desc: 'We consider page structure, metadata, redirects, images, mobile behavior, accessibility, and performance throughout the build.',
  },
  {
    tag: '07',
    num: '07',
    title: 'International-Ready Development',
    desc: "For businesses serving multiple markets, we can plan localization, multilingual content, localized SEO, and regional publishing workflows around the project's requirements.",
  },
  {
    tag: '08',
    num: '08',
    title: 'Transparent Review Process',
    desc: 'CMS architecture, design, interactions, development, and testing move through defined review checkpoints so you can approve the direction before launch.',
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
              <span className="italic text-frame-accent">Webflow Development.</span>
            </h2>

            <p className="text-base font-normal leading-relaxed text-zinc-300">
              Webflow development is not only about making a site look good. CMS architecture, responsive behavior, interactions, SEO, integrations, performance, and the way your team manages content after launch all affect the quality of the final website.
            </p>

            {/* Ownership Stat Card */}
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                100% · No Vendor Lock-In
              </span>
              <h3 className="font-heading text-lg font-medium text-white">
                Full Workspace Transfer &amp; Clean Handoff
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                You maintain full administrative ownership of your Webflow workspace, custom code, exported assets, domains, and CMS content collections from day one.
              </p>
            </div>

            <div className="pt-2">
              <PosterButton href="/contact" variant="accent">
                Start Your Webflow Project
              </PosterButton>
            </div>
          </div>

          {/* Right Column: Divided Numbered Rows (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {whyChooseUsPillars.map((pillar) => (
              <div key={pillar.num} className="py-8 first:pt-0 last:pb-0 group">
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
