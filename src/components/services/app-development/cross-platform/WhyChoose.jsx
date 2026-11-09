'use client'

import React from 'react'
import {
  Users,
  Sliders,
  GitMerge,
  Smartphone,
  Briefcase,
  Eye,
  HeartHandshake,
} from 'lucide-react'

const whyChooseUs = [
  {
    icon: Users,
    title: 'One In-House Team',
    desc: 'Strategy, design, development, integrations, testing, and release stay within one coordinated team.',
  },
  {
    icon: Sliders,
    title: 'Framework Chosen for Fit',
    desc: 'We do not sell one framework to every client. We evaluate Flutter, React Native, native development, or a hybrid approach around your actual requirements.',
  },
  {
    icon: GitMerge,
    title: 'Shared Where It Makes Sense',
    desc: 'We use shared code where it improves development and maintenance without forcing platform-specific functionality into awkward workarounds.',
  },
  {
    icon: Smartphone,
    title: 'Built for Both Platforms',
    desc: 'Android and iOS are tested independently because a working build on one platform does not automatically guarantee the same result on the other.',
  },
  {
    icon: Briefcase,
    title: 'Business-First Development',
    desc: 'We start with the product goals, users, workflows, and technical requirements before deciding how the application should be built.',
  },
  {
    icon: Eye,
    title: 'Clear Review Points',
    desc: 'Important requirements, designs, builds, and release milestones are reviewed with you before the next stage begins.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Support',
    desc: 'The same team can continue with bug fixes, framework updates, platform changes, performance work, and new feature development after launch.',
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for Cross-Platform App Development.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We focus on building reliable software around your actual business needs, supported devices, and product roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
