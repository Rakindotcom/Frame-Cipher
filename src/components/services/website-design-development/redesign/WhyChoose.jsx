import { SectionIntro } from '../../../Kinetic'

const rightTeamPoints = [
  {
    title: 'Audit Before Design',
    description: 'We start by understanding the current website instead of immediately creating a new design. Every major redesign decision should have a reason behind it.',
  },
  {
    title: 'One In-House Team',
    description: 'Audit, strategy, design, development, migration, and launch support are handled by one team. This keeps the technical findings and business goals connected throughout the project.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    description: 'We don\'t recommend a platform simply because it\'s the one we prefer. If the existing platform can support the required improvements, we can redesign it. If it is holding the website back, we can recommend a more suitable solution.',
  },
  {
    title: 'SEO-Aware Redesign',
    description: 'Your existing rankings, URLs, content, backlinks, and organic traffic are treated as assets that need protection during the redesign.',
  },
  {
    title: 'Business-Focused Decisions',
    description: 'The goal isn\'t simply to produce a newer-looking website. We focus on usability, conversion paths, performance, search visibility, content management, and the actual goals of the business.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Core Expertise" title="Why We're the Right Website Redesign Team" align="center">
          A successful redesign needs more than a designer and a new visual concept. It needs someone to understand what the existing website is doing, what is failing, and what should happen after the redesign.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {rightTeamPoints.map((point, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Advantage 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}