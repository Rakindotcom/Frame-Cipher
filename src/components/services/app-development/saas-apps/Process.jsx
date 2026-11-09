'use client'

import React from 'react'
import {
  Search,
  Compass,
  Layers,
  Layout,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
} from 'lucide-react'

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery & Requirements',
    desc: 'We discuss your product idea, target customers, business model, core workflows, existing systems, and project priorities.',
  },
  {
    step: '02',
    icon: Compass,
    title: 'Product & Business Model Planning',
    desc: 'We define the SaaS model, primary users, subscription approach, core functionality, and initial product roadmap.',
  },
  {
    step: '03',
    icon: Layers,
    title: 'SaaS Architecture Planning',
    desc: 'We plan tenancy, data structure, permissions, APIs, integrations, infrastructure, and other major technical decisions before development begins.',
  },
  {
    step: '04',
    icon: Layout,
    title: 'UI/UX & Workflow Design',
    desc: 'We design customer journeys, onboarding flows, dashboards, administration screens, and user interactions.',
  },
  {
    step: '05',
    icon: Code2,
    title: 'Core SaaS Development & Integrations',
    desc: 'We build the approved product and connect the required APIs, billing systems, authentication, business systems, and third-party services.',
  },
  {
    step: '06',
    icon: ShieldCheck,
    title: 'Testing & Validation',
    desc: 'We test the product across functionality, tenant isolation, billing, integrations, performance, security, and important user journeys.',
  },
  {
    step: '07',
    icon: Rocket,
    title: 'Deployment & Launch',
    desc: 'We prepare the production environment, deploy the application, validate core workflows, and support the agreed launch process.',
  },
  {
    step: '08',
    icon: RefreshCw,
    title: 'Post-Launch Support & Iteration',
    desc: 'We monitor performance, fix issues, support updates, and help you plan future improvements as customers adopt the software.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Development Process.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            How We Plan, Build, Launch &amp; Support SaaS Products from strategy to scaled production.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {item.step}
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
