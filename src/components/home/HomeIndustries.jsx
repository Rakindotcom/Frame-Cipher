import {
  ShoppingBag,
  Building,
  Utensils,
  Hotel,
  GraduationCap,
  Stethoscope,
  Shirt,
  Rocket,
  MapPin,
  Briefcase,
  ShieldCheck,
  User,
  Camera,
  Download,
  Star,
  Activity,
} from 'lucide-react'
import { industryDetails, outcomes } from '../../data/agency'

const industryIcons = {
  'E-commerce': ShoppingBag,
  'Real Estate': Building,
  'Restaurants': Utensils,
  'Hotels': Hotel,
  'Education': GraduationCap,
  'Healthcare': Stethoscope,
  'Fashion & Lifestyle': Shirt,
  'Startups': Rocket,
  'Local Businesses': MapPin,
  'Corporate': Briefcase,
  'Professional Services': ShieldCheck,
  'Personal Brands': User,
  'Creators': Camera,
}

export default function HomeIndustries() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
              Brands that cannot afford boring
            </h2>
          </div>
          <p className="max-w-xl text-base font-normal leading-relaxed text-muted lg:pb-1 md:text-lg">
            Whatever the vertical, the system stays the same: strategy, creative, web, media, and performance
            built as one connected machine. Here is what that looks like for each industry we serve.
          </p>
        </div>

        {/* Nuxt-Grade Module Cards Grid (13 Verticals) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryDetails.map((item, index) => {
            const IconComponent = industryIcons[item.industry] || Briefcase
            return (
              <article
                key={item.industry}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
              >
                <div>
                  {/* Top-Left Iconic Accent Icon (Deep Purple, sitting cleanly on canvas) */}
                  <div className="flex items-center justify-between">
                    <IconComponent
                      className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">
                      Sector {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-heading text-lg sm:text-xl font-semibold text-highlighted tracking-tight">
                    {item.industry}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm font-normal leading-relaxed text-muted transition-colors duration-200 group-hover:text-default">
                    {item.line}
                  </p>
                </div>

                {/* Nuxt Module Card Telemetry Footer */}
                <div className="mt-7 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1" title="Distribution Channels">
                      <Download className="h-3.5 w-3.5 text-zinc-400" />
                      <span>Omni</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="System Architecture">
                      <Star className="h-3.5 w-3.5 text-zinc-400" />
                      <span>Turnkey</span>
                    </span>
                    <span className="inline-flex items-center gap-1" title="Conversion Reliability">
                      <Activity className="h-3.5 w-3.5 text-purple-600" />
                      <span>99</span>
                    </span>
                  </div>

                  {/* Nuxt Terminal Prompt Badge (>_) */}
                  <div className="flex h-6 px-2 items-center justify-center rounded border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-zinc-400 group-hover:border-purple-600/50 group-hover:bg-purple-600/10 group-hover:text-purple-600 transition-colors">
                    &gt;_
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Guaranteed System Outcomes Band */}
        <div className="mt-14 border-t border-white/[0.08] pt-8">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
            Guaranteed System Outcomes
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="relative flex items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-4 text-center transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518]"
              >
                <span className="font-heading text-xs sm:text-sm font-medium text-zinc-200">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
