import { SectionIntro } from '../../../Kinetic'
import { CheckIcon } from './ui'

const controlled = [
  'Content strategy framework',
  'Content pillars',
  'Master calendar',
  'Campaign coordination',
  'Platform planning',
  'Repurposing roadmap',
  'Approval workflow',
  'Planning and review process',
  'Calendar maintenance where included',
]

const notGuaranteed = [
  'Specific reach',
  'Specific engagement',
  'Follower growth',
  'Leads',
  'Sales',
  'Revenue',
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
        <SectionIntro eyebrow="Service commitments" title="What We Commit To">
          A content calendar alone cannot guarantee specific business results. We separate what we control
          from what depends on execution, audience response, and other marketing activity.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What We Control
            </span>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              Within the agreed scope, we commit to providing an organized content planning system with the
              following:
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
              We also communicate scope, responsibilities, timelines, and deliverables before work begins.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
              What We Don&rsquo;t Guarantee
            </span>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              A content calendar alone cannot guarantee:
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
              Actual performance depends on factors including content quality, audience response, platform
              distribution, competition, offer strength, creative execution, account history, market
              conditions, and other marketing activities.
            </p>
          </div>
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
          <p className="max-w-4xl text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
            Our role is to create a clear and practical content system that gives your business a stronger
            foundation for consistent execution, measurement, and improvement.
          </p>
        </div>
      </div>
    </section>
  )
}
