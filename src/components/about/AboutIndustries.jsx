import { industryDetails } from '../../data/agency'
import {
  ShoppingBag,
  Building,
  Utensils,
  Hotel,
  GraduationCap,
  Activity,
  Sparkles,
  Rocket,
  MapPin,
  Briefcase,
  Scale,
  UserCheck,
  Video,
} from 'lucide-react'

const industryIcons = {
  'E-commerce': ShoppingBag,
  'Real Estate': Building,
  'Restaurants': Utensils,
  'Hotels': Hotel,
  'Education': GraduationCap,
  'Healthcare': Activity,
  'Fashion & Lifestyle': Sparkles,
  'Startups': Rocket,
  'Local Businesses': MapPin,
  'Corporate': Briefcase,
  'Professional Services': Scale,
  'Personal Brands': UserCheck,
  'Creators': Video,
}

export default function AboutIndustries() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.96] tracking-tight text-highlighted">
              Built for brands that move in public.
            </h2>
          </div>
          <div>
            <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              We start with the business problem, define the growth system around it, then move through strategy, creative direction, production, development, launch, reporting, and optimization across 13 specialized verticals.
            </p>
          </div>
        </div>

        {/* 13-Card Nuxt Module Industry Matrix (Clean, Zero Clutter) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {industryDetails.map((item, index) => {
            const Icon = industryIcons[item.industry] || Briefcase
            return (
              <article
                key={item.industry}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-5 flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-purple-600/40 hover:bg-[#18181B] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              >
                <div className="space-y-3">
                  {/* Top: Pure Icon on left + Sequence number on right */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                    <Icon className="h-5 w-5 text-purple-600 transition-transform duration-200 group-hover:scale-110" />
                    <span className="font-mono text-[10px] text-zinc-500 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-semibold tracking-tight text-highlighted">
                    {item.industry}
                  </h3>

                  <p className="text-sm font-normal leading-relaxed text-zinc-300 group-hover:text-white transition-colors">
                    {item.line}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
