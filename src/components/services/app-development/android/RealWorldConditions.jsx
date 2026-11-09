'use client'

import React from 'react'
import {
  Smartphone,
  Layers,
  WifiOff,
  Database,
  Gauge,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react'

const realWorldConditions = [
  {
    num: '01',
    title: 'Device & Screen Compatibility',
    desc: 'Testing relevant device categories and screen sizes instead of relying on one reference phone.',
    icon: Smartphone,
  },
  {
    num: '02',
    title: 'Android Version Support',
    desc: 'Defining the supported Android range during planning and testing against the required versions.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Low-Bandwidth Conditions',
    desc: 'Considering loading, retry, timeout, caching, and synchronization behavior for limited connectivity.',
    icon: WifiOff,
  },
  {
    num: '04',
    title: 'Offline Workflows',
    desc: 'Supporting local data and synchronization where the application needs useful functionality without a constant connection.',
    icon: Database,
  },
  {
    num: '05',
    title: 'Performance Constraints',
    desc: 'Considering startup time, memory usage, network requests, media size, and other factors that affect responsiveness.',
    icon: Gauge,
  },
  {
    num: '06',
    title: 'API & Service Failures',
    desc: 'Planning appropriate loading, fallback, error, and recovery states when connected services do not respond as expected.',
    icon: AlertTriangle,
  },
]

export default function RealWorldConditions() {
  return (
    <section
      id="real-world-conditions"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Android Apps Built for Real-World Conditions
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            An Android application can work perfectly in development and still behave differently in real-world use. We consider the environment in which the target users will actually use the product.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {realWorldConditions.map((cond, i) => (
            <div
              key={i}
              className="group bg-[#121214] p-8 transition-colors duration-200 hover:bg-[#18181B]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-600">
                  {cond.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-purple-600">
                  <cond.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                {cond.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                {cond.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
