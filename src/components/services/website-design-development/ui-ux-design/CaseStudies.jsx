import { SectionIntro } from '../../../Kinetic'

const caseStudyPillars = [
  {
    title: 'The Challenge',
    desc: 'What the business or product needed to improve, clarify, or build from scratch.',
  },
  {
    title: 'UX Approach',
    desc: 'How we approached research, user flows, information architecture, wireframing, and usability decisions.',
  },
  {
    title: 'Interface Design',
    desc: 'How the approved structure became the final visual system, responsive interface, and interaction patterns.',
  },
  {
    title: 'Prototype & Handoff',
    desc: 'How the experience was tested, refined, documented, and prepared for development.',
  },
  {
    title: 'Outcome',
    desc: 'Where verified project data is available, we can show measurable outcomes such as resolved usability issues, improved task completion, reduced friction, or other documented improvements.',
  },
]

export default function CaseStudies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Verification Standards" title="What Each UI/UX Case Study Demonstrates">
          We document our design projects with rigorous UX rationale and verified outcomes, showing how user-centered thinking solves real product challenges.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {caseStudyPillars.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                  Stage 0{idx + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm text-frame-muted-fg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 md:p-10">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Methodology &amp; Standards
          </span>
          <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            Core Design Capabilities Demonstrated
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              'User Journey & Persona Mapping',
              'Information Architecture Validation',
              'Interactive Clickable Prototypes',
              'WCAG AA Accessibility Standards',
              'Atomic Design System Tokens',
              'Multi-State Component Variants',
              'Responsive Breakpoint Adaptation',
              'Organized Developer Specifications',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 border border-frame-border/80 bg-frame-muted/20 p-3.5">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs md:text-sm italic text-frame-muted-fg">
            Only publish project metrics, performance claims, or business results that are supported by actual project evidence.
          </p>
        </div>
      </div>
    </section>
  )
}