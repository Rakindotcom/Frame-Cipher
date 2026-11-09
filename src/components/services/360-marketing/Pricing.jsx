import { SectionIntro, PosterButton } from '../../Kinetic'
import { Check, Zap, Rocket, Crown } from 'lucide-react'

const tiers = [
  {
    name: 'Growth Foundation Sprint',
    icon: Zap,
    eyebrow: 'One-Time / 30-Day Turnaround',
    badge: 'Diagnostic & Build',
    description:
      'Ideal for brands needing a complete strategic diagnostic, tracking repair, offer restructuring, and initial high-converting asset setup before scaling paid budgets.',
    features: [
      'Comprehensive 360-degree marketing & ad audit',
      'Meta Conversions API (CAPI) & GA4 server-side setup',
      '1 Custom high-converting Next.js landing page build',
      'Core brand positioning, offer & messaging blueprint',
      '5 Scripted short-form video reels or commercial ad creatives',
      'Full 90-day multi-channel roadmap for your team',
    ],
    cta: 'Book a Foundation Sprint',
    popular: false,
  },
  {
    name: 'Full 360 Growth Retainer',
    icon: Rocket,
    eyebrow: 'Ongoing Growth Partnership',
    badge: 'Most Popular',
    description:
      'Our flagship end-to-end marketing department replacement. We handle all creative production, paid ads, SEO, landing pages, and CRM optimization every single month.',
    features: [
      'Complete creative media: 12-16 video reels & motion ads monthly',
      'Full-funnel paid ad management across Meta, Google & YouTube',
      'Ongoing technical SEO, local search & keyword clustering',
      'Monthly dedicated landing page builds & continuous CRO testing',
      'WhatsApp & email lifecycle marketing automations',
      'Bi-weekly strategic executive growth calls + dedicated Slack channel',
      '24/7 Live Looker Studio business intelligence dashboard',
    ],
    cta: 'Apply for 360 Retainer',
    popular: true,
  },
  {
    name: 'Enterprise Market Transformation',
    icon: Crown,
    eyebrow: 'Custom Scope / High Volume',
    badge: 'Enterprise',
    description:
      'For established enterprise brands, international exporters, and high-volume operations requiring dedicated video crews, custom app architecture, and multi-region media buying.',
    features: [
      'Dedicated on-site cinema video production & studio shoots',
      'Multi-million budget media buying across Bangladesh, UK, USA & UAE',
      'Custom software/mobile app integrations & advanced BI pipeline',
      'Account-Based Marketing (ABM) for high-ticket enterprise contracts',
      'Dedicated senior strategist, art director & technical lead',
      'Custom SLAs and priority on-demand engineering support',
    ],
    cta: 'Request Enterprise Brief',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="relative isolate px-4 py-20 md:px-8 md:py-28 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title="Predictable, Transparent Collaboration Tiers.">
          No surprise bills, no bloated markups, and no hourly nickel-and-diming. Choose the partnership
          model that matches your growth ambitions.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon
            return (
              <article
                key={tier.name}
                className={`flex flex-col justify-between rounded-2xl border p-7 md:p-9 transition-colors duration-300 ${
                  tier.popular
                    ? 'border-purple-600/50 bg-[#151518]'
                    : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.18]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <Icon className="h-7 w-7 text-purple-600" />
                    <span
                      className={`inline-block rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${
                        tier.popular
                          ? 'border border-purple-500/30 bg-purple-600/20 text-purple-200 font-semibold'
                          : 'border border-white/[0.12] bg-[#18181B] text-zinc-400 font-medium'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <span className="mt-4 inline-block font-mono text-xs text-zinc-400 tabular-nums font-semibold">
                    0{idx + 1} &middot; {tier.eyebrow}
                  </span>

                  <h3 className="mt-2 font-heading text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-white">
                    {tier.name}
                  </h3>

                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {tier.description}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-4">
                    What Is Included:
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm font-normal text-zinc-200">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <PosterButton
                  href="/contact"
                  variant={tier.popular ? 'accent' : 'outline'}
                  className="w-full text-center"
                >
                  {tier.cta}
                </PosterButton>
              </div>
            </article>
          )
        })}
        </div>
      </div>
    </section>
  )
}
