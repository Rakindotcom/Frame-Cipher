import React from 'react'
import { Check } from 'lucide-react'
import { AutoLinks } from '../../../seo/AutoLinks'
import PosterButton from '../../../home/PosterButton'

const costDrivers = [
  'Number of pages',
  'CMS Collection complexity',
  'Reference relationships',
  'Custom components',
  'Figma-to-Webflow implementation',
  'Animation and interaction requirements',
  'Custom JavaScript',
  'Third-party integrations',
  'Migration and redirect requirements',
  'Localization',
  'Ecommerce functionality',
  'SEO and performance requirements',
]

const packages = [
  {
    name: 'Marketing Site',
    price: '৳50,000',
    description: 'Page count, standard design, basic CMS',
    timeline: '~2 to 3 weeks',
    featured: false,
    features: [
      'Custom design within Webflow Designer',
      'Basic CMS structure',
      'Animations & interactions (standard)',
      'On-page SEO setup',
      'CMS handoff & training',
      'Launch support',
    ],
  },
  {
    name: 'Brand / Design-Forward Site',
    price: '৳90,000',
    description: 'Custom animations, expanded CMS collections, component system',
    timeline: '~3 to 5 weeks',
    featured: true,
    features: [
      'Advanced custom design',
      'Expanded CMS collections & references',
      'Reusable component system',
      'Custom animations & interactions',
      'On-page SEO setup',
      'CMS handoff & training',
      'Launch support',
    ],
  },
  {
    name: 'Webflow Ecommerce',
    price: '৳130,000',
    description: 'Product count, checkout customization, store-specific design',
    timeline: '~4 to 6 weeks',
    featured: false,
    features: [
      'Store-specific design',
      'Product catalog structure',
      'Checkout customization',
      'Payment integration',
      'CMS & product collections',
      'On-page SEO setup',
      'Launch support',
    ],
  },
  {
    name: 'Advanced CMS / Custom Interaction Build',
    price: 'Custom Quote',
    description: 'Complex content relationships, custom code, advanced interactions',
    timeline: '~6 to 8+ weeks',
    featured: false,
    features: [
      'Complex content relationships',
      'Custom JavaScript / embeds',
      'Advanced interactions & transitions',
      'Third-party integrations',
      'Localization support',
      'Custom code documentation',
    ],
  },
]

const inclusions = [
  'Strategy & Consultation',
  'CMS Architecture',
  'Custom Design Within Webflow Designer',
  'On-Page SEO Setup',
  'CMS Handoff & Training',
  'Launch Support',
]

const cmsTrainingTopics = [
  'Adding CMS items',
  'Editing existing content',
  'Managing reference relationships',
  'Publishing blog posts',
  'Updating case studies',
  'Managing team or service entries',
  'Using reusable components',
  'Updating approved content areas',
  'Working with collection templates',
]

const supportItems = [
  'CMS structure updates',
  'New Collection development',
  'Component improvements',
  'Design refinements',
  'Interaction updates',
  'Integration troubleshooting',
  'Custom-code updates',
  'SEO updates',
  'Performance reviews',
  'Accessibility improvements',
  'Ongoing content support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* SECTION 1: PRICING & TIMELINE */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Webflow Development Pricing &amp;{' '}
            <span className="italic text-frame-accent">Timeline.</span>
          </h2>
          <div className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            <AutoLinks currentPath="/services/website-design-development/webflow" allowed={["/services/website-design-development/custom-development"]}>
              Webflow development pricing depends on design complexity, CMS architecture, page count, interactions, integrations, and the amount of custom development required.
            </AutoLinks>
          </div>
        </div>

        {/* COST DRIVERS */}
        <div className="mb-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-wider text-frame-accent mb-4 block">
            Common Cost Drivers Include:
          </span>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {costDrivers.map((driver, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-normal text-zinc-200">
                <span className="text-frame-accent font-bold mt-0.5">•</span>
                <span>{driver}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400 border-t border-white/[0.08] pt-4 font-normal">
            A straightforward marketing website can move faster than a build involving complex CMS relationships, extensive interactions, migration work, or custom integrations.
          </p>
        </div>

        {/* PACKAGES CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between rounded-xl p-6 md:p-8 transition-colors duration-200 ${
                pkg.featured
                  ? 'border border-frame-accent/40 bg-purple-500/[0.04]'
                  : 'border border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
              }`}
            >
              <div>
                {pkg.featured && (
                  <span className="mb-4 inline-block rounded-full border border-frame-accent/40 bg-frame-accent/10 px-3 py-0.5 font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                    Most Requested
                  </span>
                )}
                <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                  {pkg.name}
                </h3>
                <p className="mt-4 font-mono text-2xl md:text-3xl font-semibold text-frame-accent">
                  {pkg.price}
                </p>
                {pkg.timeline && (
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Typical Delivery: {pkg.timeline}
                  </p>
                )}
                {pkg.description && (
                  <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400 border-t border-white/[0.08] pt-4">
                    {pkg.description}
                  </p>
                )}
                {pkg.features && (
                  <ul className="mt-4 space-y-2.5 text-xs font-normal text-zinc-300">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08]">
                <PosterButton href="/contact" variant={pkg.featured ? 'accent' : 'outline'} className="w-full text-xs">
                  Request Quote
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* INCLUSIONS AT EVERY APPLICABLE TIER */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-wider text-frame-accent mb-4 block">
            Included at Every Applicable Tier:
          </span>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-[#09090B] p-3 text-xs sm:text-sm font-normal text-zinc-200">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400 font-normal">
            Final pricing and timeline should be confirmed after reviewing the design, content structure, integrations, and technical requirements.
          </p>
        </div>

        {/* SECTION 2: WEBFLOW STORE HANDOVER & CMS TRAINING */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Webflow Store Handover &amp;{' '}
              <span className="italic text-frame-accent">CMS Training.</span>
            </h2>
            <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
              Your Webflow website should remain manageable after development is complete. We provide the agreed access, CMS guidance, and documentation needed for your team to manage routine content without relying on a developer for every update.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  01
                </span>
                <h3 className="mt-2 font-heading text-xl font-medium text-white">
                  CMS Training
                </h3>
                <p className="mt-3 text-xs text-zinc-400">
                  Depending on the project, we can train your team on:
                </p>
                <ul className="mt-4 space-y-2 text-xs font-normal text-zinc-300">
                  {cmsTrainingTopics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  02
                </span>
                <h3 className="mt-2 font-heading text-xl font-medium text-white">
                  Component &amp; Design-System Handover
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  We explain the reusable components, naming conventions, CMS relationships, and approved editing areas included in the project.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  03
                </span>
                <h3 className="mt-2 font-heading text-xl font-medium text-white">
                  Custom Code Documentation
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  Where custom JavaScript, embeds, or integrations are included, documentation can explain what the code does, what it depends on, and how future developers should work with it.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  04
                </span>
                <h3 className="mt-2 font-heading text-xl font-medium text-white">
                  Website Ownership
                </h3>
                <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  At project close, we provide the agreed access and ownership arrangements defined in the project contract.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: POST-LAUNCH SUPPORT & MAINTENANCE */}
        <div className="mt-20 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-10">
          <div className="max-w-3xl space-y-2">
            <h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-white">
              Post-Launch Webflow Support &amp; <span className="italic text-frame-accent">Maintenance.</span>
            </h2>
            <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-400">
              Launching the site is only one part of the project. Ongoing support can include:
            </p>
          </div>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {supportItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#09090B] p-3 text-xs sm:text-sm font-normal text-zinc-200">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm italic text-zinc-400 border-t border-white/[0.08] pt-4 font-normal">
            We scope ongoing support separately based on the level of assistance the website requires.
          </p>
        </div>
      </div>
    </section>
  )
}
