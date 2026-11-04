import React from 'react'
import { Check } from 'lucide-react'

const supportItems = [
  'Magento updates',
  'Security patch assistance',
  'Performance checks',
  'Integration troubleshooting',
  'Extension compatibility review',
  'Minor development changes',
  'Technical maintenance',
  'SEO-related technical updates',
  'Backup and recovery support',
]

export default function Support() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Post-Launch Support &amp;{' '}
            <span className="italic text-frame-accent">Warranty.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Launching a Magento store is only one part of the project. Ongoing maintenance helps keep the store secure, stable, and compatible as the business and its technology environment change.
          </p>
        </div>

        {/* 2 Support Columns */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* POST-LAUNCH SUPPORT */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Ongoing Maintenance
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                Post-Launch Support
              </h3>
              <p className="mt-3 text-sm md:text-base font-normal text-zinc-400">
                Support can include:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm md:text-base font-normal text-zinc-300">
                {supportItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* WARRANTY & WORKMANSHIP */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Accountability &amp; Scope
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                Warranty &amp; Workmanship
              </h3>
              <div className="mt-4 space-y-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                <p>
                  Any post-launch warranty or workmanship coverage should follow the exact terms agreed in the project contract.
                </p>
                <p>
                  We do not guarantee a specific sales volume, revenue figure, traffic level, or conversion rate from the website alone. Ecommerce results also depend on products, pricing, traffic, competition, customer demand, marketing, and other factors outside the development project.
                </p>
                <p className="text-white font-medium border-t border-white/[0.08] pt-4">
                  Our responsibility is to deliver the agreed architecture, functionality, integrations, and technical implementation according to the approved scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
