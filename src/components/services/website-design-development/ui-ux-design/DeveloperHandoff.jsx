import { SectionIntro } from '../../../Kinetic'

const developerHandoffItems = [
  'Organized Figma files',
  'Reusable components',
  'Design system references',
  'Typography and spacing rules',
  'Responsive layouts',
  'Hover, focus, active, disabled, loading, and error states',
  'Navigation and interaction flows',
  'Prototype links',
  'Export-ready assets',
  'Development notes and specifications',
]

export default function DeveloperHandoff() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Engineering Handoff" title="Developer-Ready UI/UX Handoff" />

        <div className="mt-10 grid gap-6 md:grid-cols-3 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
          <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
            A design file should not leave developers guessing how the product is supposed to work.
          </p>
          <p className="md:col-span-2 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
            We organize UI/UX deliverables so developers can understand the structure, states, interactions, and responsive behavior before implementation begins.
          </p>
        </div>

        <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6">
            What Developers Can Receive
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {developerHandoffItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 border border-frame-border bg-frame-muted/10 p-3.5">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-xs sm:text-sm font-medium text-frame-fg">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-frame-border pt-6 space-y-3 text-sm sm:text-base font-medium text-frame-muted-fg">
            <p>
              Because Framecipher also provides website and application development, we can support the transition from approved design into implementation where required.
            </p>
            <p className="font-bold text-frame-fg">
              The result is a clearer handoff with fewer assumptions between design and development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}