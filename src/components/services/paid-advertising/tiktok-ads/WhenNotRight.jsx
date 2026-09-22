import { SectionIntro } from '../../../Kinetic'

const signals = [
  'The target audience is difficult to reach on TikTok',
  'The product has little visual or creative appeal',
  'The landing page or offer is not conversion-ready',
  'The business cannot support regular creative testing',
  'The available market has limited TikTok advertising or commerce functionality',
  'The sales cycle requires a channel better suited to high-intent search',
  'There is not enough budget for meaningful testing',
]

export default function WhenNotRight() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Honest channel fit"
          title="When TikTok Ads May Not Be the Right Primary Channel"
        >
          TikTok is not automatically the right paid channel for every business.
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-10">
          <p className="text-base font-medium leading-relaxed text-frame-fg md:text-lg">
            It may not be the best primary channel when:
          </p>
          <ul className="mt-6 space-y-3">
            {signals.map((item, index) => (
              <li key={index} className="flex items-start gap-4 border-b border-frame-border/60 pb-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-border text-frame-muted-fg">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-sm md:text-base font-semibold text-frame-fg/90">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-l-2 border-frame-accent bg-frame-bg p-5">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              In these situations, another channel may deserve priority, or TikTok may work
              better as part of a broader paid media strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}