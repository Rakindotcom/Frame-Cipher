import { SectionIntro } from '../../../Kinetic'

const ongoingImprovements = [
  'Performance optimization',
  'UX improvements',
  'Conversion-focused changes',
  'New landing pages',
  'Small functionality enhancements',
  'Integration improvements',
  'Technical SEO fixes',
  'Ecommerce improvements',
  'Security hardening',
  'New features through separate development scope',
]

export default function OngoingImprovements() {
  return (
    <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Future Growth" title="Post-Launch Support & Ongoing Improvements">
          Website maintenance can identify opportunities that go beyond routine upkeep. As the website develops, we can support improvements such as:
        </SectionIntro>

        <div className="mt-12 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ongoingImprovements.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 bg-frame-bg border border-frame-border p-3.5">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-xs sm:text-sm font-medium text-frame-fg">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-frame-border pt-6">
            <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              Routine maintenance keeps the website healthy. Ongoing development helps the website improve as the business grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}