import Link from 'next/link'
import PosterButton from '../home/PosterButton'
import { Check, Target, Sparkles, Globe, Cpu } from 'lucide-react'

const problems = [
  {
    number: '01',
    icon: Target,
    title: 'Get More Customers',
    description: 'For businesses that need more leads, sales, or customers.',
    services: ['SEO', 'Local SEO', 'Google Ads', 'Meta Ads', 'Social Media Marketing', 'Landing Pages'],
    cta: 'Explore Growth Solutions',
    href: '/services/paid-advertising',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Build Your Brand',
    description: 'For businesses that need a stronger and more consistent brand presence.',
    services: ['Brand Strategy', 'Creative Design', 'Content', 'Photography', 'Videography', 'Personal Branding'],
    cta: 'Explore Brand Solutions',
    href: '/services/content-creation',
  },
  {
    number: '03',
    icon: Globe,
    title: 'Build Your Digital Presence',
    description: 'For businesses that need a professional online presence.',
    services: ['Website Development', 'WordPress', 'Shopify', 'Next.js', 'E-commerce', 'UI/UX'],
    cta: 'Explore Web Solutions',
    href: '/services/website-design-development',
  },
  {
    number: '04',
    icon: Cpu,
    title: 'Improve Your Business Operations',
    description: 'For businesses that need custom systems and automation.',
    services: ['Custom Software', 'CRM', 'ERP', 'Inventory Management', 'POS', 'Business Automation'],
    cta: 'Explore Software Solutions',
    href: '/services/app-development',
  },
]

export default function ServicesProblemSelector() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            What are you trying to{' '}
            <span className="text-white">
              solve?
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            You may not need every service. Start with the problem you&apos;re trying to solve, and find the
            right solution.
          </p>
        </div>

        {/* Nuxt-Grade Modality B Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {problems.map((problem) => {
            const IconComponent = problem.icon
            return (
              <article
                key={problem.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-9 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#151518] hover:shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100 overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-3">
                      <IconComponent
                        className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110 shrink-0"
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 tabular-nums font-medium">
                        Pathway {problem.number}
                      </span>
                    </div>
                    <span className="font-mono text-sm font-medium text-zinc-500 tabular-nums">
                      /{problem.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white transition-colors duration-200">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
                    {problem.description}
                  </p>

                  <div className="mt-8">
                    <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400">
                      Relevant services
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {problem.services.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-[#18181B] px-3 py-1 font-mono text-xs text-zinc-300"
                        >
                          <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                          <span>{service}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <PosterButton href={problem.href} variant="outline" className="w-full sm:w-auto">
                    {problem.cta}
                  </PosterButton>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-white/[0.08] bg-[#121214] p-5 rounded-2xl">
          <p className="font-mono text-xs text-zinc-400">
            Not sure which problem fits? Book a call and we&apos;ll map it together.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[1.1px] text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>Book Strategy Call</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
