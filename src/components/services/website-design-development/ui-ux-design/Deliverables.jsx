import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    category: 'Research & UX Structure',
    items: [
      'User research findings',
      'Audience and persona definitions',
      'User journey maps',
      'Task and conversion flows',
      'Information architecture',
    ],
  },
  {
    category: 'Wireframes & Prototypes',
    items: [
      'Low-fidelity wireframes',
      'High-fidelity UI screens',
      'Interactive prototypes',
      'Key interaction states',
      'Responsive layouts',
    ],
  },
  {
    category: 'Design System',
    items: [
      'Reusable components',
      'Typography and spacing rules',
      'Color and style definitions',
      'Buttons, forms, cards, navigation, and other interface patterns',
      'Component states and variations',
    ],
  },
  {
    category: 'Handoff & Documentation',
    items: [
      'Organized Figma files',
      'Design specifications',
      'Export-ready assets',
      'Responsive behavior guidance',
      'Developer notes where required',
      'Design support during implementation',
    ],
  },
]

export default function Deliverables() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Project Deliverables" title="What You Receive From a UI/UX Design Project">
          The exact deliverables depend on the project scope, but a typical UI/UX engagement can include the design assets and documentation needed to move from an idea or existing product toward development.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
          {deliverables.map((deliv, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Asset Group 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {deliv.category}
                </h3>
                <ul className="mt-6 space-y-2 text-xs sm:text-sm font-medium text-frame-fg">
                  {deliv.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
          <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
            The final deliverables are agreed during project scoping so you know what is included before design begins.
          </p>
        </div>
      </div>
    </section>
  )
}