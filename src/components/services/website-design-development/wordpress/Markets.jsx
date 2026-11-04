import { Check } from 'lucide-react'

const bangladeshPoints = [
  'Bangla-English content',
  'Mobile-first experiences',
  'Local business information and Google Maps',
  'WhatsApp and click-to-call actions',
  'bKash, Nagad, or other supported payment requirements',
  'Bangladesh-focused SEO and content structures',
]

const internationalPoints = [
  'Target market, audience expectations & language',
  'Content requirements and business workflows',
  'Third-party software & payment integrations',
  'Global performance & technical security standards',
]

export default function Markets() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            WordPress Development for{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; International Businesses.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Frame Cipher builds WordPress websites for businesses across Bangladesh and international markets. The technical architecture, content workflow, integrations, and user experience are adapted to the market your business serves.
          </p>
        </div>

        {/* 2-Column Divided Market Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                For Bangladesh-Based Businesses
              </h3>
              <p className="mt-3 text-xs font-mono text-zinc-400">
                Where relevant, we can account for:
              </p>
              <ul className="mt-4 space-y-2.5 text-xs md:text-sm text-zinc-300">
                {bangladeshPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                For International Businesses
              </h3>
              <p className="mt-3 text-xs md:text-sm leading-relaxed text-zinc-300">
                We consider the target market, language, content requirements, integrations, technical standards, and business workflows required for international audiences.
              </p>
              <ul className="mt-4 space-y-2.5 text-xs md:text-sm text-zinc-300">
                {internationalPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-xs md:text-sm font-medium text-frame-accent border-t border-white/[0.08] pt-4">
              The goal is not to force the same WordPress setup on every market. Your website architecture should match your audience, operations, and growth plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
