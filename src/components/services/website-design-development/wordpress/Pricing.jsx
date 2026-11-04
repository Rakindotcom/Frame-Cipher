'use client'

import React from 'react'
import { Check } from 'lucide-react'
import { AutoLinks } from '../../../seo/AutoLinks'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Blog / Portfolio',
    price: '৳25,000',
    timeline: '1 to 2 weeks',
    description: 'Content volume, category structure, and custom design',
    featured: false,
    features: [
      'Custom theme design & setup',
      'Content & category structure',
      'Blog / portfolio functionality',
      'On-page SEO setup',
      'Mobile responsiveness',
      'Launch support',
    ],
  },
  {
    name: 'Business Website',
    price: '৳45,000',
    timeline: '2 to 3 weeks',
    description: 'Page count, custom functionality, and integrations',
    featured: true,
    features: [
      'Custom UI/UX design',
      'Multi-page structure',
      'Lead capture & contact forms',
      'CMS / editor training',
      'On-page SEO setup',
      'Speed optimization',
      'Launch support',
    ],
  },
  {
    name: 'E-commerce Store',
    price: '৳90,000',
    timeline: '4 to 6 weeks',
    description: 'Product count, payment gateways, and inventory requirements',
    featured: false,
    features: [
      'Product catalog & category setup',
      'bKash / Nagad integration',
      'International payment gateway',
      'Inventory & order management',
      'Shipping / delivery integration',
      'SEO & product schema',
      'Launch support',
    ],
  },
  {
    name: 'Membership / Directory Site',
    price: '৳120,000+',
    timeline: '5 to 8 weeks',
    description: 'User accounts, subscriptions, access rules, and custom functionality',
    featured: false,
    features: [
      'User accounts & registration',
      'Subscription & access rules',
      'Member directories / listings',
      'Payment integration',
      'Custom functionality (as scoped)',
      'Security hardening',
      'Launch support',
    ],
  },
  {
    name: 'Migration or Complex Custom Build',
    price: 'Custom Quote',
    timeline: '5 to 10+ weeks',
    description: 'Content volume, migration complexity, integrations, and custom development',
    featured: false,
    features: [
      'Content & media migration',
      'URL / redirect planning',
      'Custom plugin & functionality development',
      'Third-party integrations',
      'Security hardening',
      'Performance optimization',
      'Handover documentation',
    ],
  },
]

const timelines = [
  { type: 'Blog / Portfolio', time: '1 to 2 weeks' },
  { type: 'Business Website', time: '2 to 3 weeks' },
  { type: 'E-commerce Store', time: '4 to 6 weeks' },
  { type: 'Membership / Directory Site', time: '5 to 8 weeks' },
  { type: 'Migration / Complex Custom Build', time: '5 to 10+ weeks' },
]

const ownershipDeliverables = [
  'WordPress administrator access',
  'Hosting and domain access where applicable',
  'Website content and page-management access',
  'Agreed design and development deliverables',
  'Handover documentation or guidance',
  'Basic training for supported content-management tasks',
]

const maintenanceItems = [
  'WordPress core, theme, and plugin updates',
  'Security monitoring and hardening',
  'Backup and recovery management',
  'Performance checks and optimization',
  'Technical troubleshooting',
  'Minor content or functionality updates',
  'Compatibility checks after major updates',
  'Future feature improvements',
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-[#09090B] text-white scroll-mt-20">
      {/* 1. WORDPRESS DEVELOPMENT PRICING */}
      <section className="relative border-t border-white/[0.08] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Left-Aligned Header Block */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              WordPress Development{' '}
              <span className="italic text-frame-accent">Pricing.</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              WordPress development pricing depends on the type of website, page count, theme approach, functionality, plugin requirements, content volume, integrations, and migration needs. The following ranges provide a starting point for typical projects.
            </p>
          </div>

          {/* PACKAGE CARDS */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`flex flex-col justify-between rounded-xl border p-7 md:p-8 transition-colors duration-200 ${
                  pkg.featured
                    ? 'border-frame-accent/40 bg-[#14121a] ring-1 ring-frame-accent/30'
                    : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
                }`}
              >
                <div>
                  {pkg.featured && (
                    <span className="mb-3 inline-block font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                    {pkg.name}
                  </h3>
                  <div className="mt-4 font-heading text-2xl md:text-3xl font-medium text-white">
                    {pkg.price}
                  </div>
                  {pkg.timeline && (
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-frame-accent">
                      Typical Delivery: {pkg.timeline}
                    </p>
                  )}
                  <p className="mt-4 text-xs md:text-sm text-zinc-400 border-t border-white/[0.08] pt-4 leading-relaxed">
                    <AutoLinks currentPath="/services/website-design-development/wordpress" allowed={["/services/website-design-development/custom-development"]}>
                      {pkg.description}
                    </AutoLinks>
                  </p>
                  {pkg.features && (
                    <ul className="mt-4 space-y-2.5 text-xs md:text-sm text-zinc-300">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                            <Check className="h-3 w-3 stroke-[2.5]" />
                          </span>
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.08]">
                  <PosterButton
                    href="/contact"
                    variant={pkg.featured || pkg.price === 'Custom Quote' ? 'accent' : 'outline'}
                    className="w-full"
                  >
                    {pkg.price === 'Custom Quote' ? 'Get a Custom Quote' : 'Request Quote'}
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
            <p className="text-sm sm:text-base leading-relaxed text-zinc-300 max-w-2xl">
              Pricing is indicative rather than fixed. Final pricing is based on the project scope and requirements confirmed before development begins.
            </p>
            <div className="shrink-0">
              <PosterButton href="/contact" variant="outline">
                Get a Custom Quote
              </PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WORDPRESS DEVELOPMENT TIMELINE */}
      <section className="relative border-t border-white/[0.08] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              WordPress Development{' '}
              <span className="italic text-frame-accent">Timeline.</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              WordPress projects can take from about one week to several weeks depending on the website type, content volume, custom functionality, integrations, and migration requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {timelines.map((row, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                    Timeline 0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-medium tracking-tight text-white">
                    {row.type}
                  </h3>
                </div>
                <p className="mt-6 pt-4 border-t border-white/[0.08] font-mono text-sm uppercase tracking-wider text-frame-accent font-medium">
                  {row.time}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
            <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
              Projects can move faster when content, brand assets, technical access, and required integrations are ready before development begins. Additional revisions, delayed approvals, custom functionality, or migration issues may extend the timeline.
            </p>
            <p className="mt-3 text-sm text-white font-medium">
              The final delivery schedule is confirmed after reviewing the complete project scope.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WEBSITE OWNERSHIP, EDITORIAL HANDOVER & TRAINING */}
      <section className="relative border-t border-white/[0.08] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Website Ownership,{' '}
              <span className="italic text-frame-accent">Editorial Handover &amp; Training.</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              Your WordPress website should remain a practical business asset after development is complete.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10">
            <p className="text-sm sm:text-base text-zinc-300 mb-6">
              The project agreement defines ownership, access, deliverables, and handover terms. Depending on the platform and project scope, this may include:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {ownershipDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-[#09090B] p-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-white/[0.08] pt-6 text-sm leading-relaxed text-zinc-300">
              <p>
                We can also guide your team through routine WordPress tasks such as editing pages, publishing content, managing supported sections, and updating approved website information.
              </p>
              <p>
                Any source files, custom code, licenses, or third-party assets are handled according to the terms defined in the project agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POST-LAUNCH WORDPRESS SUPPORT & MAINTENANCE */}
      <section className="relative border-t border-white/[0.08] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Post-Launch WordPress{' '}
              <span className="italic text-frame-accent">Support &amp; Maintenance.</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              After launch, WordPress websites may require ongoing updates, security checks, backups, performance monitoring, troubleshooting, and future improvements.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10">
            <p className="text-sm sm:text-base text-zinc-300 mb-6">
              Development projects include the launch support and handover defined in the project agreement. Ongoing maintenance can be provided separately and may include:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {maintenanceItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-[#09090B] p-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-white/[0.08] pt-6 text-sm leading-relaxed text-zinc-300">
              <p>
                Ongoing maintenance, new features, and larger changes are handled according to a separate maintenance scope.
              </p>
              <p className="text-xs italic text-zinc-400">
                WordPress security and performance also depend on hosting, third-party plugins, future updates, and ongoing management. No website can be guaranteed immune to every future security or compatibility issue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
