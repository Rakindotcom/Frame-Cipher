import { SectionIntro } from '../../Kinetic'
import { Target, ShieldCheck, Zap, Repeat, Check } from 'lucide-react'

const funnelStages = [
  {
    stage: 'Top of Funnel (TOFU)',
    name: 'Attention & Category Authority',
    icon: Target,
    purpose: 'Capturing cold audience attention, establishing subject-matter authority, and positioning your brand as the obvious benchmark.',
    mechanisms: [
      'Viral short-form Reels, YouTube Shorts & TikTok content loops',
      'High-authority podcasts, interviews & executive personal branding',
      'Programmatic and editorial SEO capturing informational search queries',
      'Targeted brand awareness and video view campaigns across Meta & YouTube',
    ],
    metric: 'Reach, Video Completion Rate, Topical Authority, Inflow Volume',
  },
  {
    stage: 'Middle of Funnel (MOFU)',
    name: 'Trust, Proof & Consideration',
    icon: ShieldCheck,
    purpose: 'Nurturing interested prospects who know they have a problem and are actively evaluating the best solution.',
    mechanisms: [
      'Deep case study teardowns, client before/after video breakdowns',
      'High-intent retargeting campaigns addressing specific buyer objections',
      'Interactive tools, cost calculators, and diagnostic audit lead magnets',
      'Educational carousel posts and detailed founder video walkthroughs',
    ],
    metric: 'Engagement Time, Lead Quality, Retargeting CTR, Resource Downloads',
  },
  {
    stage: 'Bottom of Funnel (BOFU)',
    name: 'Conversion, Booking & Direct Sales',
    icon: Zap,
    purpose: 'Guiding high-intent prospects across the finish line with clear offers, risk-reversal guarantees, and zero-friction purchase paths.',
    mechanisms: [
      'Direct response paid ads targeting high-intent in-market buyers',
      'Ultra-fast Next.js landing pages with sub-second mobile checkout',
      'Automated WhatsApp inquiry routing for sub-5-minute sales team response',
      'Time-sensitive campaign offers, bundle discounts, and satisfaction guarantees',
    ],
    metric: 'Cost per Acquisition (CAC), Return on Ad Spend (ROAS), Conversion Rate',
  },
  {
    stage: 'Retention & Expansion',
    name: 'Lifetime Value (LTV) & Advocacy',
    icon: Repeat,
    purpose: 'Turning first-time buyers into repeat brand evangelists who generate organic word-of-mouth and higher customer lifetime value.',
    mechanisms: [
      'Automated onboarding and post-purchase email/WhatsApp sequences',
      'VIP customer rewards, review generation, and loyalty incentives',
      'Upsell and cross-sell campaigns tailored to past purchasing behavior',
      'Customer advocacy loops and strategic referral program setups',
    ],
    metric: 'Repeat Purchase Rate, Customer LTV, Churn Rate, Referral Revenue',
  },
]

export default function FullFunnelModel() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title="The 360 Full-Funnel Growth Flywheel.">
          Single-point tactics only treat symptoms. Our 360 marketing system maps out every single
          touchpoint in your buyer&apos;s journey, from the moment they first see a video on their social feed
          to the moment they sign a contract or make a repeat purchase.
        </SectionIntro>

        <div className="grid border-t border-b border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] lg:grid-cols-4 md:grid-cols-2 bg-[#09090B]">
          {funnelStages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <div
                key={stage.stage}
                className="group flex flex-col justify-between bg-[#121214] p-7 md:p-8 transition-colors duration-200 hover:bg-[#18181B]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <Icon className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="mt-4 inline-block font-mono text-[11px] uppercase tracking-wider text-purple-400 font-medium">
                    {stage.stage}
                  </span>

                  <h3 className="mt-2 font-heading text-xl font-semibold leading-tight tracking-tight text-white transition-colors">
                    {stage.name}
                  </h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                    {stage.purpose}
                  </p>

                  <div className="mt-6 border-t border-white/[0.08] pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Key Mechanisms:</p>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm font-normal text-zinc-300">
                      {stage.mechanisms.map((m) => (
                        <li key={m} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-medium">Primary KPI:</p>
                  <p className="mt-1 text-sm font-medium text-white">{stage.metric}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
