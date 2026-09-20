import { SectionIntro } from '../../../Kinetic'

const whyChooseFramecipher = [
  {
    title: 'One In-House Team',
    description: 'Research, wireframing, visual design, testing, and handoff stay coordinated within one team.',
  },
  {
    title: 'Structure Before Visuals',
    description: 'We start with user flow and information architecture instead of jumping directly into colors, decoration, or visual trends.',
  },
  {
    title: 'Development-Aware Design',
    description: 'Our designs consider how the final experience will be implemented, including responsive behavior, component states, interactions, and handoff requirements.',
  },
  {
    title: 'Transparent Review Process',
    description: 'Important stages include review and approval checkpoints so you can confirm the direction before the next phase begins.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    description: 'We recommend the design approach that fits the product rather than forcing every project into the same platform, template, or workflow.',
  },
  {
    title: 'Local & International Experience',
    description: 'Based in Dhaka, we work with businesses in Bangladesh and international markets, adapting the design process around the product, audience, and market requirements.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Agency Advantage" title="Why Choose Framecipher for UI/UX Design" align="center">
          We treat UI/UX design as a connected process from research and structure through visual design, validation, and development handoff.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {whyChooseFramecipher.map((item, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Advantage 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}