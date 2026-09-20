import { SectionIntro } from '../../../Kinetic'

const commonMistakes = [
  {
    title: 'Redesigning Without an Audit',
    description: 'A new design cannot fix problems nobody identified. We audit the existing website before deciding what should change.',
  },
  {
    title: 'Changing URLs Without a Redirect Plan',
    description: 'Changing URLs without mapping their replacements can create broken links and unnecessary loss of search equity.',
  },
  {
    title: 'Removing Valuable Content',
    description: 'Content that looks outdated visually may still generate rankings, traffic, backlinks, or conversions. Content decisions should be based on evidence.',
  },
  {
    title: 'Designing for Desktop First',
    description: 'A polished desktop layout does not guarantee a usable mobile experience. Important interactions need to work across actual screen sizes.',
  },
  {
    title: 'Rebuilding Without Understanding Analytics',
    description: 'Without reviewing existing user behavior, redesign decisions become assumptions rather than evidence-based improvements.',
  },
  {
    title: 'Launching Without Full QA',
    description: 'Broken forms, incorrect canonicals, blocked indexing, missing redirects, tracking failures, and broken links can survive a simple visual review.',
  },
  {
    title: 'Treating Launch as the Finish Line',
    description: 'A redesign still needs monitoring after launch. Search engines need time to process changes, and real users can reveal issues that staging tests may not catch.',
  },
]

export default function Mistakes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Risk Mitigation" title="Common Website Redesign Mistakes We Help Prevent">
          A redesign can look successful in a browser while creating serious problems underneath. Many avoidable failures happen when the existing website is treated as disposable instead of as an asset that needs to be understood first.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {commonMistakes.map((mistake, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Mistake 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {mistake.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {mistake.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}