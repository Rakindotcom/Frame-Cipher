import React from 'react'
import { Check } from 'lucide-react'

const maintenanceItems = [
  'Content and page updates',
  'Layout and responsive fixes',
  'App and integration checks',
  'Performance reviews',
  'SEO updates',
  'Troubleshooting',
  'Minor functionality improvements',
  'Wix Studio refinements',
  'Ongoing website enhancements',
]

export default function Maintenance() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Post-Launch Wix Support &amp;{' '}
            <span className="italic text-frame-accent">Maintenance.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Launching the website is only the beginning. Businesses often need updates, fixes, improvements, and occasional technical support after launch.
          </p>
        </div>

        {/* Maintenance Container */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <p className="text-sm md:text-base font-medium text-white mb-6">
            Our ongoing Wix support can include:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {maintenanceItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#09090B] p-4 transition-colors duration-200 hover:border-white/[0.14]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="text-xs md:text-sm font-normal text-zinc-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3 border-t border-white/[0.08] pt-6 text-sm md:text-base font-normal leading-relaxed text-zinc-400">
            <p>
              Ongoing support is scoped separately based on the level of assistance your website requires.
            </p>
            <p>
              For businesses that prefer to manage the website independently, we provide the agreed editor handover and basic guidance during launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
