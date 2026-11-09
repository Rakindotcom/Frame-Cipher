import { SectionIntro } from '../../Kinetic'
import { ShoppingBag, Building, Briefcase, Activity, Check } from 'lucide-react'

const playbooks = [
  {
    sector: 'E-Commerce & D2C Brands',
    icon: ShoppingBag,
    problem: 'High customer acquisition cost (CAC) and razor-thin margins on single product sales.',
    solution:
      'We combine Meta CAPI and Google Performance Max with high-converting short-form video reels, lightning-fast Next.js store speeds, and automated Klaviyo SMS/email flows to maximize repeat purchases and customer lifetime value.',
    deliverables: ['Creative ad testing matrix', 'Store speed optimization (<100ms)', 'Klaviyo retention flows', 'Influencer/UGC seeding'],
  },
  {
    sector: 'Real Estate & Property Developers',
    icon: Building,
    problem: 'Generating thousands of low-intent junk leads that waste valuable sales agent call time.',
    solution:
      'We deploy 4K cinematic architectural video tours, geo-targeted Google & Meta campaigns targeting high-net-worth individuals in Dhaka (Gulshan, Banani, Uttara) and NRB expats in the UK, USA & UAE, backed by instant CRM lead qualification.',
    deliverables: ['Architectural video production', 'NRB expat campaigns', 'Interactive unit floorplan pages', 'CRM lead scoring'],
  },
  {
    sector: 'B2B Companies & Enterprise Tech',
    icon: Briefcase,
    problem: 'Long 3 to 9 month sales cycles where decision-makers cannot be reached through generic social ads.',
    solution:
      'We execute LinkedIn Account-Based Marketing (ABM), founder executive thought-leadership videos, programmatic technical SEO rankings, and gated high-value case studies to build unmatched category trust with enterprise buyers.',
    deliverables: ['Executive personal branding', 'High-intent B2B SEO clusters', 'LinkedIn ABM ads', 'Case study tear-downs'],
  },
  {
    sector: 'Healthcare, Clinics & Specialized Services',
    icon: Activity,
    problem: 'Patients and clients require deep trust, credential verification, and effortless appointment booking.',
    solution:
      'We dominate local Google Maps search (Local SEO 3-pack), produce authentic doctor/specialist video interviews answering patient fears, and implement frictionless WhatsApp booking automations that secure confirmed appointments.',
    deliverables: ['Google Business 3-pack domination', 'Specialist video interviews', 'WhatsApp booking bot', 'Review generation engine'],
  },
]

export default function IndustryPlaybooks() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title="Tailored 360 Playbooks for Your Industry.">
          Different business models require fundamentally different growth architectures. Here is how
          our integrated 360 marketing system adapts to your specific market dynamics.
        </SectionIntro>

        <div className="grid border-t border-l border-white/[0.08] md:grid-cols-2 bg-[#09090B]">
          {playbooks.map((playbook, idx) => {
            const Icon = playbook.icon
            return (
              <article
                key={playbook.sector}
                className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:bg-[#18181B]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <Icon className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-white transition-colors">
                    {playbook.sector}
                  </h3>

                  <div className="mt-6 border-t border-white/[0.08] pt-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-rose-400 font-semibold">The Primary Hurdle:</p>
                    <p className="mt-1.5 text-sm font-normal leading-relaxed text-zinc-300">
                      {playbook.problem}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-white/[0.08] pt-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold">The 360 Solution:</p>
                    <p className="mt-1.5 text-sm sm:text-base font-normal leading-relaxed text-zinc-200">
                      {playbook.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                    Core Tactical Deliverables:
                  </p>
                  <ul className="space-y-2 text-sm font-normal text-zinc-200">
                    {playbook.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
