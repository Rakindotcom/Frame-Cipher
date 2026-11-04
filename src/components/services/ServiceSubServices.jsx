import React from 'react'
import Link from 'next/link'
import { getServiceDisplayName, getSubServicesForPillar } from '../../data/servicePages'
import { ArrowRight } from 'lucide-react'

export default function ServiceSubServices({ service }) {
  if (!service || service.pageType !== 'Pillar Service') return null

  const subServices = getSubServicesForPillar(service.slug)
  if (!subServices.length) return null

  return (
    <section id="sub-services-directory" className="relative isolate scroll-mt-24 border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Choose the right{' '}
              <span className="italic text-frame-accent">
                {getServiceDisplayName(service)} service.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Start with the focused capability that matches your immediate goal, or combine several services into one coordinated engagement.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix */}
        <div className={`grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 ${subServices.length % 4 === 0 && subServices.length <= 8 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {subServices.map((subService, index) => (
            <Link
              key={subService.slug}
              href={subService.fullPath}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                  <span className="font-mono text-xs text-frame-accent tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {getServiceDisplayName(subService)}
                </h3>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.08]">
                <span className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.12] bg-[#18181B] px-5 text-xs font-medium text-white transition-all duration-200 group-hover:border-frame-accent/60 group-hover:bg-frame-accent group-hover:text-white">
                  <span>Inspect Discipline</span>
                  <ArrowRight className="h-3.5 w-3.5 text-frame-accent group-hover:text-white transition-all duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
