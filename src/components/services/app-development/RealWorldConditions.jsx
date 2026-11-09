'use client'

import React from 'react'
import {
  Smartphone,
  WifiOff,
  CloudOff,
  AlertTriangle,
  Zap,
} from 'lucide-react'

const realWorldConditions = [
  {
    title: 'Device Compatibility',
    icon: Smartphone,
    desc: 'Designing and testing around the devices and screen sizes relevant to the target audience.',
  },
  {
    title: 'Slow or Unstable Networks',
    icon: WifiOff,
    desc: 'Considering loading, retry, timeout, error, and synchronization behavior when connectivity is limited.',
  },
  {
    title: 'Offline Workflows',
    icon: CloudOff,
    desc: 'Supporting offline functionality or data synchronization when the business case requires continued operation.',
  },
  {
    title: 'API & Service Failures',
    icon: AlertTriangle,
    desc: 'Planning appropriate loading, timeout, fallback, and recovery states when connected services fail.',
  },
  {
    title: 'Performance',
    icon: Zap,
    desc: 'Considering API response times, asset size, memory use, loading behavior, and other factors that affect responsiveness.',
  },
]

export default function RealWorldConditions() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Built for Real-World App Conditions.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            An application can work in development and still fail under real-world conditions. We consider how your users will actually access and use the product.
          </p>
        </div>

        {/* Modality 1: Editorial Divided Rows */}
        <div className="divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {realWorldConditions.map((cond, i) => {
            const Icon = cond.icon
            return (
              <div
                key={i}
                className="group grid grid-cols-1 gap-4 p-6 sm:p-8 transition-colors duration-200 hover:bg-[#18181B] lg:grid-cols-12 lg:items-baseline lg:gap-8"
              >
                <div className="flex items-center gap-4 lg:col-span-5">
                  <Icon className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110 shrink-0" />
                  <span className="font-mono text-xs text-purple-600 font-semibold tabular-nums shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-white transition-colors">
                    {cond.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300 lg:col-span-7">
                  {cond.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Takeaway Callout */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            The goal is to build for real usage conditions, not only controlled development environments.
          </p>
        </div>
      </div>
    </section>
  )
}
