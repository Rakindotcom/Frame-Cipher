import PosterButton from '../../home/PosterButton'
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] sm:p-10 md:p-16">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent">
            Next move · Social Media Strategy &amp; Growth
          </p>

          {/* Heading beside oversized directional arrow */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              Ready to improve your{' '}
              <br className="hidden sm:inline" />
              <span className="italic text-frame-accent">
                social presence?
              </span>
            </h2>
            <span
              aria-hidden="true"
              className="hidden lg:block select-none font-heading text-7xl xl:text-8xl font-medium leading-none tracking-tight text-white/20 shrink-0 transition-transform duration-300 group-hover:translate-x-3"
            >
              &rarr;
            </span>
          </div>

          <div className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
            <div className="space-y-6">
              <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
                Get a free social audit and see what is working, what is missing, and where your social presence can improve. Framecipher manages content, publishing, community engagement, and reporting across the platforms that matter to your business, with one in-house team managing your social presence from planning to reporting.
              </p>

              {/* Quality Indicators */}
              <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-frame-accent" />
                  <span>Zero obligation audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-frame-accent" />
                  <span>One in-house team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-frame-accent" />
                  <span>Client approval gate</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <PosterButton href="/contact">
                Get Your Free Social Audit
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Talk to Our Social Team
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
