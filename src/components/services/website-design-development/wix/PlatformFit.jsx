import React from 'react'
import { Check, ArrowRight } from 'lucide-react'

const wixGoodFitPoints = [
  'You need a professional website without managing a complex technical stack',
  'Your team wants to edit content easily',
  'You need a relatively fast website launch',
  'Your site needs business features such as forms, bookings, CMS, or ecommerce',
  'You want design flexibility without managing separate hosting infrastructure',
  'Your website does not require highly specialized backend architecture',
]

const anotherPlatformBetterPoints = [
  'The project depends on highly specialized backend functionality',
  'The ecommerce operation has unusually complex requirements',
  'The website needs a highly customized application architecture',
  'Your team needs platform capabilities that Wix does not support',
  'Long-term technical requirements make another ecosystem a better fit',
]

export default function PlatformFit() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Is Wix the Right Platform for{' '}
            <span className="italic text-frame-accent">Your Business?</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Platform selection should be driven by business logic, editorial velocity, and infrastructure constraints, not platform loyalty.
          </p>
        </div>

        {/* Narrative Context Card */}
        <div className="grid gap-6 md:grid-cols-3 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 mb-10">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            Wix can be an excellent fit for many businesses, but choosing a website platform should start with requirements rather than trends.
          </p>
          <p className="md:col-span-2 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
            We recommend Wix when its editing experience, built-in features, development options, and long-term flexibility match what your business actually needs.
          </p>
        </div>

        {/* Two Comparison Columns */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* GOOD FIT */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                Recommended For
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                Wix Can Be a Good Fit When:
              </h3>
              <ul className="mt-6 space-y-3.5 text-sm sm:text-base font-normal text-zinc-300">
                {wixGoodFitPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 mt-0.5">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ANOTHER PLATFORM */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-amber-400">
                Alternative Architecture
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                Another Platform May Be Better When:
              </h3>
              <ul className="mt-6 space-y-3.5 text-sm sm:text-base font-normal text-zinc-300">
                {anotherPlatformBetterPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 mt-0.5">
                      <ArrowRight className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* OUR ADVISORY STANDARD */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
          <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
            Our Advisory Standard
          </span>
          <h3 className="mt-2 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
            Our Approach
          </h3>
          <p className="mt-4 text-base md:text-lg font-normal leading-relaxed text-zinc-300">
            We do not recommend Wix simply because Wix is what you asked for. We first review the business model, content structure, integrations, functionality, SEO requirements, ecommerce needs, and future plans. Then we recommend the platform that makes the most practical sense for the project.
          </p>
        </div>
      </div>
    </section>
  )
}
