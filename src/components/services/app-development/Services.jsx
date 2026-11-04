'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const coreOfferings = [
  {
    title: 'Android App Development',
    slug: '/services/app-development/android',
    desc: 'Native Android applications built for performance, device compatibility, and the Google Play ecosystem. We develop around the features, devices, and user requirements that matter to your product.',
  },
  {
    title: 'iOS App Development',
    slug: '/services/app-development/ios',
    desc: 'Native iOS applications built with platform-specific requirements in mind, including Apple interface conventions, device behavior, and App Store release requirements.',
  },
  {
    title: 'Cross-Platform App Development',
    slug: '/services/app-development/cross-platform',
    desc: 'Applications built with technologies such as Flutter or React Native when a shared codebase makes sense for the project. This can be useful for businesses that need to reach Android and iOS users without maintaining two completely separate application codebases.',
  },
  {
    title: 'SaaS App Development',
    slug: '/services/app-development/saas-apps',
    desc: 'Web-based software products with features such as user accounts, subscriptions, dashboards, permissions, billing, and recurring workflows. We build the product around the business model and user roles rather than treating SaaS as a standard website.',
  },
  {
    title: 'Enterprise App Development',
    slug: '/services/app-development/enterprise-apps',
    desc: 'Custom internal and B2B applications designed around business workflows, data, permissions, reporting, integrations, and operational requirements.',
  },
  {
    title: 'API Development & Integration',
    slug: '/services/app-development/api-development',
    desc: 'Custom APIs and third-party integrations that connect the application with payment providers, CRMs, analytics tools, maps, business software, and other required systems.',
  },
  {
    title: 'MVP Development',
    slug: '/services/app-development/mvp-development',
    desc: 'Focused first versions that include the core functionality needed to test a product idea with real users before committing to a larger feature set.',
  },
]

export default function Services() {
  return (
    <section id="offerings" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What We{' '}
            <span className="italic text-frame-accent">Offer.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides end-to-end app development for startups, businesses, and growing digital products. We handle strategy, UI/UX, architecture, development, integrations, testing, launch, and post-launch support through one in-house team.
          </p>
        </div>

        {/* Modality 4: Elevated Surface Card Grid with Top Laser Sheen */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coreOfferings.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors duration-200 hover:border-white/[0.16] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium text-white group-hover:text-frame-accent transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08]">
                <Link
                  href={item.slug}
                  className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08]"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
