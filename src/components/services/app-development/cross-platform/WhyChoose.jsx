'use client'

import React from 'react'

const whyChooseUs = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, design, development, integrations, testing, and release stay within one coordinated team.',
  },
  {
    title: 'Framework Chosen for Fit',
    desc: 'We do not sell one framework to every client. We evaluate Flutter, React Native, native development, or a hybrid approach around your actual requirements.',
  },
  {
    title: 'Shared Where It Makes Sense',
    desc: 'We use shared code where it improves development and maintenance without forcing platform-specific functionality into awkward workarounds.',
  },
  {
    title: 'Built for Both Platforms',
    desc: 'Android and iOS are tested independently because a working build on one platform does not automatically guarantee the same result on the other.',
  },
  {
    title: 'Business-First Development',
    desc: 'We start with the product goals, users, workflows, and technical requirements before deciding how the application should be built.',
  },
  {
    title: 'Clear Review Points',
    desc: 'Important requirements, designs, builds, and release milestones are reviewed with you before the next stage begins.',
  },
  {
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
            Why Choose Framecipher for{' '}
            <span className="italic text-frame-accent">Cross-Platform App Development.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We focus on building reliable software around your actual business needs, supported devices, and product roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
