'use client'

import React from 'react'

const whyOngoingMaintenance = [
  {
    num: '01',
    title: 'Skipping Maintenance Increases Technical Debt',
    takeaway: 'Deferred maintenance compounds exponentially over time',
    desc: 'Small technical problems can become larger when they remain unresolved. Outdated dependencies, deprecated components, inefficient code, and recurring bugs can make future development slower and more expensive. Regular maintenance helps identify these issues before they become harder to address.',
  },
  {
    num: '02',
    title: 'OS & SDK Changes Can Break Existing Apps',
    takeaway: 'Platform evolution causes silent regressions',
    desc: 'An application that worked correctly last year may require updates after a major platform change. New operating systems can affect APIs, permissions, background processes, device behavior, and store requirements. Regular compatibility checks help your team prepare for these changes instead of reacting after users encounter problems.',
  },
  {
    num: '03',
    title: 'Security Risks Grow Over Time',
    takeaway: 'Zero-day vulnerabilities target aging dependencies',
    desc: 'Old dependencies and unpatched components can create unnecessary security exposure. Security maintenance helps keep application components and supporting infrastructure updated as vulnerabilities and technical requirements change.',
  },
  {
    num: '04',
    title: 'Performance Problems Affect User Experience',
    takeaway: 'App store ratings plummet when latency spikes',
    desc: 'Users notice slow loading, crashes, failed requests, and unreliable features quickly. Performance monitoring helps identify problems that may not be obvious during development or basic testing.',
  },
  {
    num: '05',
    title: 'Third-Party Integrations Can Fail',
    takeaway: 'External API version deprecation breaks mission-critical flows',
    desc: 'Your app may depend on payment providers, APIs, authentication services, analytics systems, maps, messaging services, or other external platforms. When those services change, your application may require corresponding updates.',
  },
  {
    num: '06',
    title: 'Maintenance Helps Prevent Costly Rework',
    takeaway: 'Continuous tuning is far cheaper than full rebuilds',
    desc: 'Regular maintenance keeps technical issues from accumulating. It can also make future feature development easier because your application remains closer to a supported and maintainable state.',
  },
]

export default function WhyOngoingMaintenance() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Your Business Needs Ongoing App Maintenance.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Software is a dynamic, living asset. In modern software engineering, maintenance is not a cosmetic expense—it is your operational insurance policy.
          </p>
        </div>

        {/* Editorial Divided Rows */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] shadow-2xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="divide-y divide-white/10">
            {whyOngoingMaintenance.map((item) => (
              <div
                key={item.num}
                className="group p-6 sm:p-8 transition-colors duration-200 hover:bg-[#121214]"
              >
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-baseline">
                  {/* Metric Num */}
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="font-mono text-2xl sm:text-3xl font-semibold text-purple-400">
                      {item.num}
                    </span>
                  </div>

                  {/* Title & Takeaway */}
                  <div className="lg:col-span-4">
                    <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                      {item.title}
                    </h3>
                    <span className="mt-1 font-mono text-xs text-purple-400/90 block">
                      &bull; {item.takeaway}
                    </span>
                  </div>

                  {/* Consequence Explanation */}
                  <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
