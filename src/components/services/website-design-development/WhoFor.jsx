import React from 'react'

const businessNeeds = [
  { title: 'Startups', desc: 'Websites for new businesses that need to establish credibility, explain their offering, and create room for future growth.' },
  { title: 'Small & Service Businesses', desc: 'Professional websites designed to explain services clearly, build trust, and generate calls, inquiries, or consultation requests.' },
  { title: 'eCommerce Businesses', desc: 'Online stores designed around products, checkout, payments, inventory, and the overall customer journey.' },
  { title: 'Corporate & Established Businesses', desc: 'Structured websites for established brands that need a stronger digital presence, scalable content, and clear information architecture.' },
  { title: 'SaaS & Web Applications', desc: 'Custom websites and web applications for businesses that require user accounts, dashboards, integrations, or workflows beyond standard CMS functionality.' },
  { title: 'Institutions & Non-Profits', desc: 'Accessible, trust-focused digital portals designed for clear public information, community engagement, and organizational credibility.' },
]

export default function WhoFor() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Solutions for different{' '}
              <span className="italic text-frame-accent">business needs.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            From venture-backed startups to established corporate leaders, we adapt the technology stack and architecture to your operational realities.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (2x3 Structured Grid) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {businessNeeds.map((item, index) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
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
