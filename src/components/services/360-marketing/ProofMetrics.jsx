import Link from 'next/link'
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
    <section className="px-4 py-24 md:px-8 md:py-32 bg-frame-bg text-frame-fg border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Proven Results"
          title="Real Case Studies &amp; Verified Impact."
        >
          We judge our 360 marketing systems by revenue generated, audience captured, and commercial
          authority established. Here is what happens when strategy, creative, and distribution unite.
        </SectionIntro>

        {/* 3 Metric Cards */}
        <div className="grid bg-frame-border gap-px md:grid-cols-3 mb-16">
          <div className="bg-frame-bg p-8 text-center md:text-left">
            <p className="font-heading text-6xl font-bold uppercase tracking-tighter text-frame-accent">
              1,000,000+
            </p>
            <p className="mt-3 font-heading text-lg font-bold uppercase text-frame-fg">
              Breakout Video Views
            </p>
            <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
              Achieved for Dr. Ferdoush Saleheen with organic Facebook &amp; Instagram short-form reels
              without burning unnecessary ad dollars.
            </p>
          </div>

          <div className="bg-frame-bg p-8 text-center md:text-left">
            <p className="font-heading text-6xl font-bold uppercase tracking-tighter text-frame-accent">
              4.8x
            </p>
            <p className="mt-3 font-heading text-lg font-bold uppercase text-frame-fg">
              Average Blended ROAS
            </p>
            <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
              Consistently maintained across active e-commerce and direct response client accounts
              by combining paid ads with high-speed landing pages.
            </p>
          </div>

          <div className="bg-frame-bg p-8 text-center md:text-left">
            <p className="font-heading text-6xl font-bold uppercase tracking-tighter text-frame-accent">
              &lt; 100ms
            </p>
            <p className="mt-3 font-heading text-lg font-bold uppercase text-frame-fg">
              Page Load (LCP) Speed
            </p>
            <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
              Lightning-fast custom Next.js web infrastructure that stops ad drop-offs and dramatically
              improves checkout conversion rates.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid bg-frame-border gap-px md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-300 hover:bg-neutral-900/60"
            >
              <div>
                <span className="inline-block border border-frame-accent/40 bg-frame-accent/10 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-frame-accent">
                  {t.metric}
                </span>

                <blockquote className="mt-6 text-sm md:text-base font-medium leading-relaxed text-frame-fg/90 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-frame-border/60 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full border border-frame-border object-cover"
                />
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">
                    {t.name}
                  </h4>
                  <p className="text-xs text-frame-muted-fg font-medium">
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
