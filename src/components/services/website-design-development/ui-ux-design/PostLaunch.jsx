import { SectionIntro } from '../../../Kinetic'

const postLaunchItems = [
  'New feature and screen design',
  'User-flow improvements',
  'Usability issue resolution',
  'Design-system expansion',
  'Interface updates',
  'Conversion-focused UX improvements',
  'Periodic UX reviews',
  'Design support for product iterations',
]

export default function PostLaunch() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Product Evolution" title="Post-Launch UX Support">
          Launching a product does not mean the design work has to stop. New features, user feedback, analytics, and business changes can reveal opportunities for further improvement.
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg mb-4">
            Post-launch UX support can include:
          </h3>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm font-medium text-frame-fg">
            {postLaunchItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border bg-frame-bg p-3">
                <span className="text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-frame-border pt-6">
            <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              This service is useful for businesses that want to keep their product experience consistent as the product grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}