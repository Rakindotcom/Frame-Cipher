'use client'

import React from 'react'
import Link from 'next/link'
import {
  Compass,
  Layout,
  Code2,
  Database,
  CheckCircle2,
  Rocket,
  Wrench,
  Gauge,
  ArrowUpRight,
} from 'lucide-react'

const androidServices = [
  {
    num: '01',
    title: 'Product Strategy & Architecture',
    desc: 'We define the core functionality, user requirements, technical structure, supported devices, and future roadmap before development begins.',
    icon: Compass,
  },
  {
    num: '02',
    title: 'UI/UX Design for Android',
    desc: 'We design user flows, interfaces, interactions, and responsive layouts around Android conventions and the actual tasks users need to complete.',
    icon: Layout,
  },
  {
    num: '03',
    title: 'Native Android Development',
    desc: 'We build native Android applications in Kotlin with direct access to Android platform capabilities.',
    icon: Code2,
  },
  {
    num: '04',
    title: 'API & Backend Integration',
    desc: 'We connect the Android app with custom backends, APIs, databases, payment systems, CRMs, and other required services.',
    icon: Database,
  },
  {
    num: '05',
    title: 'Testing & Quality Assurance',
    desc: 'We test important features, integrations, supported devices, Android versions, and performance conditions before release.',
    icon: CheckCircle2,
  },
  {
    num: '06',
    title: 'Google Play Launch',
    desc: 'We prepare the production build and support the Google Play submission and release process where included.',
    icon: Rocket,
  },
  {
    num: '07',
    title: 'Post-Launch Support',
    desc: 'We can continue with bug fixes, OS compatibility updates, dependency maintenance, performance improvements, and new feature development after launch.',
    icon: Wrench,
  },
  {
    num: '08',
    title: 'App Performance Optimisation',
    desc: 'We review startup time, memory usage, network behaviour, and render performance to identify improvements that affect the real-world experience on target devices.',
    icon: Gauge,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our Android App Development Services
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We provide end-to-end Android development from product planning and UI/UX through native development, testing, deployment, and post-launch support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {androidServices.map((svc, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-8 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-600">
                    {svc.num}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-purple-600">
                    <svc.icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                  {svc.title}
                </h3>

                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08]"
                >
                  <span>Discuss Service</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
