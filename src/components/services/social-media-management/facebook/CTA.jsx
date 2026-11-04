import { PosterButton } from '../../../Kinetic'

const expectations = [
  'Clear, documented scope',
  'Consistent regular content',
  'Human-reviewed responses',
  'Transparent monthly reporting',
  'Direct escalation paths',
  'Zero fake engagement or shortcuts',
]

export default function CTA() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10 md:p-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
            Next move · Facebook Page Growth
          </p>

          {/* Heading beside oversized directional arrow */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Ready to Build a More Active,{' '}
              <br className="hidden sm:inline" />
              <span className="italic text-frame-accent">
                Trustworthy Facebook Presence?
              </span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-heading text-7xl xl:text-8xl font-medium leading-none tracking-tight text-white/20 shrink-0 transition-transform duration-300 group-hover:translate-x-3"
            >
              
            </span>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
            <div className="space-y-6">
              <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
                Your Facebook Page should not exist simply because every business is expected to have one.
                It should have a clear role in your customer journey. Framecipher helps you turn that Page
                into a more organized, useful, and professionally managed asset.
              </p>

              {/* Expectations Grid */}
              <ul className="grid gap-2.5 sm:grid-cols-2 font-mono text-xs text-zinc-300">
                {expectations.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <PosterButton href="/contact">
                Get Your Free Page Audit 
           </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Request a Custom Quote 
           </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
