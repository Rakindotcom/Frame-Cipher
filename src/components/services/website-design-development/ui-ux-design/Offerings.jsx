import { SectionIntro } from '../../../Kinetic'

const coreServices = [
  {
    tag: 'Service 01',
    title: 'User Research & Flow Mapping',
    intro: 'We identify who is using the product, what they need to accomplish, and where important journeys begin and end.',
    items: [
      'User journey mapping',
      'Audience and persona definition',
      'Task and conversion flow analysis',
      'Competitor and pattern review',
      'Key user goal identification',
    ],
    outro: 'A clear interface starts with a clear understanding of what users need to do.',
  },
  {
    tag: 'Service 02',
    title: 'Wireframing & Information Architecture',
    intro: 'We structure content, navigation, and screen hierarchy before visual design decisions are made.',
    items: [
      'Low-fidelity wireframes',
      'Information architecture',
      'Navigation planning',
      'Content prioritization',
      'Interactive prototypes',
    ],
    outro: 'Solving structural problems at the wireframe stage is easier than rebuilding them after development.',
  },
  {
    tag: 'Service 03',
    title: 'UI Design, Interaction & Visual Systems',
    intro: 'Once the structure is validated, we turn it into a clear and consistent interface designed around real user actions.',
    items: [
      'High-fidelity UI design',
      'Interaction design',
      'Responsive interface design',
      'Design system development',
      'Component and state design',
      'Accessibility-aware design',
    ],
    outro: 'Visual design should make the user\'s next action clearer, not simply make the screen look attractive.',
  },
  {
    tag: 'Service 04',
    title: 'Usability Testing & Validation',
    intro: 'We test important design decisions before development where the project scope allows it, then refine the experience based on what the testing reveals.',
    items: [
      'Prototype usability testing',
      'Heuristic evaluation',
      'Stakeholder review',
      'Analytics or behavior review where available',
      'Post-launch UX review',
      'Iterative refinement',
    ],
    outro: 'The goal is to replace assumptions with structured feedback and evidence wherever possible.',
  },
  {
    tag: 'Service 05',
    title: 'Post-Launch UX Support',
    intro: 'Products continue to change after launch. New features, user feedback, and business goals can create new design requirements.',
    items: [
      'New feature interface design',
      'UX refinements',
      'Design system expansion',
      'User-flow improvements',
      'Periodic UX reviews',
      'Ongoing product design support',
    ],
    outro: 'Post-launch UX support is available as a separate service and can continue as your product evolves.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Core Capabilities" title="Our UI/UX Design Services" index="13">
          We provide end-to-end UI/UX design services based on your users, business goals, product structure, and technical requirements. We start with the experience and user flow before moving into visual design, so every screen has a clear purpose.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {coreServices.map((service, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {service.tag}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {service.intro}
                </p>
                <p className="mt-6 text-xs font-black uppercase tracking-wider text-frame-fg">
                  What We Do
                </p>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm font-medium text-frame-fg">
                  {service.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {service.outro && (
                <p className="mt-6 border-t border-frame-border/80 pt-4 text-xs font-medium italic text-frame-muted-fg">
                  {service.outro}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}