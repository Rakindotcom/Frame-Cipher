'use client'

import React from 'react'

const techStackTable = [
  { layer: 'Frontend', technologies: 'React, Next.js, Angular, Vue, or another suitable framework' },
  { layer: 'Backend', technologies: 'Node.js, .NET, Java, Python, Laravel/PHP, or an existing backend' },
  { layer: 'Database', technologies: 'PostgreSQL, MySQL, MongoDB, Oracle, or another suitable system' },
  { layer: 'APIs', technologies: 'REST, GraphQL, gRPC, Webhooks' },
  { layer: 'Authentication', technologies: 'SSO, OAuth, JWT, enterprise identity providers' },
  { layer: 'Cache & Data', technologies: 'Redis, queues, suitable messaging systems' },
  { layer: 'Cloud', technologies: 'AWS, Azure, Google Cloud, or project-specific infrastructure' },
  { layer: 'Infrastructure', technologies: 'Docker, Kubernetes, CI/CD, automation where required' },
  { layer: 'Testing', technologies: 'Unit, integration, API, security, performance, load, regression testing' },
  { layer: 'Monitoring', technologies: 'Logs, metrics, error tracking, uptime and application monitoring' },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Enterprise <span className="italic text-frame-accent">Technology Stack.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We choose technologies around the organization&apos;s requirements, existing systems, security needs, and long-term maintenance plan. The final technology stack is selected around the project rather than using the same tools for every enterprise system.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs sm:text-sm">
              <thead className="border-b border-white/[0.08] bg-white/[0.02] font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                <tr>
                  <th scope="col" className="px-6 py-4">Architecture Layer</th>
                  <th scope="col" className="px-6 py-4">Supported Technologies &amp; Platforms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {techStackTable.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                    <td className="whitespace-nowrap px-6 py-4 font-mono font-medium text-white">
                      {row.layer}
                    </td>
                    <td className="px-6 py-4 text-zinc-300 font-sans">
                      {row.technologies}
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
