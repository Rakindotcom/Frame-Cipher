import { SectionIntro, PosterButton } from '../../Kinetic'

const testimonials = [
  {
    name: 'Dr. Ferdoush Saleheen',
    role: 'Head of Supply Chain Department, Sharjah Maritime University',
    avatar: '/FerdoushSaleheen.webp',
    metric: '1M+ Organic Views',
    quote:
      'Your observations were excellent. You have done an amazing job. Most importantly, you pushed me to make reels. Without your initiative, I would have waited another year. I see this works, and I will recommend you all the way.',
  },
  {
    name: 'Mariam Ispahani',
    role: 'Founder & CEO, Sonali Bioplastics',
    avatar: '/mariamIspahani.webp',
    metric: 'Strategic Brand Launch',
    quote:
      'Wow, that is impressive. These posters and assets are very creative. All these campaign designs are great. Loved working with the Frame Cipher team on our brand visual system.',
  },
  {
    name: 'Shahidul Alam',
    role: 'World-Renowned Photographer, Writer & Activist',
    avatar: '/shahidulAlam.webp',
    metric: 'Global Media Campaign',
    quote:
      'This interview was done by the young group framecipher.info who have been working on developing content for the Bangladesh vessel on the flotilla. Stay tuned for more content from them.',
  },
]

export default function ProofMetrics() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32 bg-[#09090B] text-[#FAFAFA] border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          title={
            <>
              Real Case Studies &amp;{' '}
              <span className="italic text-frame-accent">Verified Impact.</span>
            </>
          }
        >
          We judge our 360 marketing systems by revenue generated, audience captured, and commercial
          authority established. Here is what happens when strategy, creative, and distribution unite.
        </SectionIntro>

        {/* 3 Metric Columns (Modality 2: Divided Column Band) */}
        <div className="grid border-t border-b border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] md:grid-cols-3 mb-16 bg-[#09090B]">
          <div className="p-8 space-y-2.5 transition-colors duration-200 hover:bg-[#121214]">
            <p className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-none tracking-tight text-white">
              1,000,000+
            </p>
            <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
              Breakout Video Views
            </p>
            <p className="text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
              Achieved for Dr. Ferdoush Saleheen with organic Facebook &amp; Instagram short-form reels
              without burning unnecessary ad dollars.
            </p>
          </div>

          <div className="p-8 space-y-2.5 transition-colors duration-200 hover:bg-[#121214]">
            <p className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-none tracking-tight text-white">
              4.8x
            </p>
            <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
              Average Blended ROAS
            </p>
            <p className="text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
              Consistently maintained across active e-commerce and direct response client accounts
              by combining paid ads with high-speed landing pages.
            </p>
          </div>

          <div className="p-8 space-y-2.5 transition-colors duration-200 hover:bg-[#121214]">
            <p className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-none tracking-tight text-white">
              &lt; 100ms
            </p>
            <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
              Page Load (LCP) Speed
            </p>
            <p className="text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
              Lightning-fast custom Next.js web infrastructure that stops ad drop-offs and dramatically
              improves checkout conversion rates.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#151518]"
            >
              <div>
                <span className="inline-block rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                  {t.metric}
                </span>

                <blockquote className="mt-6 text-sm md:text-base font-normal leading-relaxed text-zinc-200">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full border border-white/[0.08] object-cover"
                />
                <div>
                  <h4 className="font-heading text-sm font-medium text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-normal">
                    {t.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PosterButton href="/case-studies">
            View All Documented Case Studies
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
