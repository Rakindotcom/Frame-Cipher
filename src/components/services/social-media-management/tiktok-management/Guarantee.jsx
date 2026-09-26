import { SectionIntro, PosterButton } from '../../../Kinetic'
import { CheckIcon } from './ui'

const controlled = [
  'Strategy development',
  'Audience research',
  'Competitor research',
  'Content planning',
  'Brand voice development',
  'Agreed video production',
  'Publishing',
  'TikTok SEO implementation',
  'Community management within scope',
  'Trend research',
  'Creator/UGC coordination where included',
  'Performance reporting',
  'Content testing',
  'Ongoing optimization',
  'Client review and approval',
]

const notGuaranteed = [
  'Viral videos',
  'A specific number of followers',
  'A specific number of views',
  'Guaranteed For You Page placement',
  'Guaranteed search visibility',
  'Guaranteed sales',
  'Guaranteed leads',
  'Guaranteed revenue',
]

const factors = [
  'Audience response',
  'Competition',
  'Market conditions',
  'Account history',
  'Platform changes',
  'Offer quality',
  'Conversion experience',
  'Product-market fit',
]

function CrossIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-border bg-frame-muted/20 text-frame-muted-fg"
    >
      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
      </svg>
    </span>
  )
}

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Service commitments" title="What We Commit to">
          No TikTok management service can responsibly guarantee platform outcomes. We separate what we
          control from what depends on audience response and platform distribution.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What We Control
            </span>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              Our scope can include:
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {controlled.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-frame-fg">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-frame-accent bg-frame-bg p-3 text-xs font-semibold leading-relaxed text-frame-fg">
              We commit to delivering the agreed work according to the approved scope and schedule.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
              What We Don&rsquo;t Guarantee
            </span>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              No TikTok management service can responsibly guarantee:
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {notGuaranteed.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                  <CrossIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
              Performance depends on factors outside the content team&rsquo;s control, including{' '}
              {factors.join(', ').replace(/, ([^,]*)$/, ', and $1')}.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t-2 border-frame-border pt-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
            <p className="max-w-4xl text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              Our responsibility is to control the process, produce the agreed work, measure performance,
              and improve the content system using available evidence.
            </p>
          </div>

          <div className="flex flex-col justify-center border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Ready to talk scope?
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              We will be direct about what a realistic plan looks like for your account.
            </p>
            <div className="mt-6 space-y-3">
              <PosterButton href="/contact" className="w-full">
                Get Your Free TikTok Audit &rarr;
              </PosterButton>
              <PosterButton href="/contact" variant="outline" className="w-full">
                Request a Custom Quote &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
