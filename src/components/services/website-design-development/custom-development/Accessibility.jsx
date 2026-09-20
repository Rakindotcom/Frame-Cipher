import { SectionIntro } from '../../../Kinetic'

const accessibilityAreas = [
  'Semantic HTML',
  'Keyboard navigation',
  'Focus management',
  'Accessible forms',
  'Screen-reader support',
  'Appropriate ARIA usage',
  'Readable interfaces',
  'Responsive interaction patterns',
]

export default function Accessibility() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Universal Usability" title="Accessibility &amp; Inclusive Next.js Development">
          Accessibility starts during interface and frontend development. Depending on the project, we consider:
        </SectionIntro>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {accessibilityAreas.map((acc, idx) => (
            <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/20 p-3.5 text-xs sm:text-sm font-medium text-frame-fg">
              <span className="text-frame-accent font-bold">✓</span>
              <span>{acc}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm text-frame-muted-fg">
          Accessibility requirements depend on the audience, project scope, and applicable standards. We address them as part of the design and development process rather than leaving them as a final check.
        </p>
      </div>
    </section>
  )
}