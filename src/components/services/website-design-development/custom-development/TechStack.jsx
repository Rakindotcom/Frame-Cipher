'use client'

import React from 'react'

const techStack = [
  {
    category: 'Frontend',
    desc: 'Next.js, React, TypeScript, and the frontend technologies selected for the project\'s requirements.',
  },
  {
    category: 'UI & Design Systems',
    desc: 'Reusable interface components, responsive systems, and the styling approach appropriate for the application.',
  },
  {
    category: 'Backend & APIs',
    desc: 'Application logic, APIs, databases, authentication, and integrations based on the system architecture.',
  },
  {
    category: 'Data & CMS',
    desc: 'The database and content management approach selected around the application\'s data model and editorial workflow.',
  },
  {
    category: 'Payments & Integrations',
    desc: 'Payment services, CRM systems, ERP platforms, external APIs, and other business tools where required.',
  },
  {
    category: 'Deployment & Infrastructure',
    desc: 'Hosting, deployment, monitoring, and infrastructure configured according to the application\'s operational requirements.',
  },
]

export default function TechStack() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our Next.js{' '}
            <span className="italic text-frame-accent">Technology Stack.</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We choose the technology stack around the project rather than forcing every application into the same setup. The final stack is confirmed during technical discovery and architecture planning.
          </p>
        </div>

        {/* 6 Layers Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  Layer 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {tech.category}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
