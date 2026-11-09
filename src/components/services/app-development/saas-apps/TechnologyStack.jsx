'use client'

import React from 'react'

const techStackTable = [
  { layer: 'Frontend', technologies: 'React, Next.js, Vue, or another suitable framework' },
  { layer: 'Backend', technologies: 'Node.js, Laravel/PHP, Python, or an existing backend' },
  { layer: 'Database', technologies: 'PostgreSQL, MySQL, MongoDB, or another suitable database' },
  { layer: 'Cache', technologies: 'Redis or another suitable caching layer' },
  { layer: 'Authentication', technologies: 'Session-based authentication, JWT, OAuth, SSO' },
  { layer: 'Payments', technologies: 'Stripe, Paddle, local gateways, or another required provider' },
  { layer: 'APIs', technologies: 'REST, GraphQL where appropriate' },
  { layer: 'Storage', technologies: 'Cloud object storage or another suitable solution' },
  { layer: 'Background Processing', technologies: 'Queues, workers, scheduled jobs' },
  { layer: 'Infrastructure', technologies: 'AWS, cloud platforms, containers, or project-specific hosting' },
  { layer: 'Development', technologies: 'Git, GitHub/GitLab, CI/CD workflows' },
  { layer: 'Monitoring', technologies: 'Logs, error tracking, analytics, uptime monitoring' },
  { layer: 'Testing', technologies: 'Unit, integration, API, UI, regression, load testing' },
]

export default function TechnologyStack() {
  return (
    <section id="tech-stack" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Technology Stack.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We choose technologies based on the application&apos;s requirements rather than forcing every SaaS product into one fixed stack.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0D0F] shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/[0.08] bg-[#18181B] font-mono text-xs uppercase tracking-wider text-zinc-300">
                <tr>
                  <th className="p-4 sm:p-5 border-r border-white/[0.08] text-white">Layer</th>
                  <th className="p-4 sm:p-5 text-purple-400">Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] font-sans">
                {techStackTable.map((item, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-zinc-400 border-r border-white/[0.08] whitespace-nowrap">
                      {item.layer}
                    </td>
                    <td className="p-4 sm:p-5 font-normal text-white">
                      {item.technologies}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
