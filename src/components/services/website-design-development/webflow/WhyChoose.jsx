import { SectionIntro } from '../../../Kinetic'

const whyChooseUsPillars = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, design, CMS architecture, development, integrations, SEO setup, and launch support stay within one coordinated team.',
  },
  {
    title: 'CMS-First Planning',
    desc: 'We plan the content model before building pages so your team can add and update content without breaking the design structure.',
  },
  {
    title: 'Design & Development in One Workflow',
    desc: 'Visual design, responsive behavior, components, interactions, and CMS implementation are developed as one system rather than being handed between disconnected teams.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Webflow when design flexibility, structured content, and marketing-team editing are the right priorities. When the project requires a different architecture, we explain that before development starts.',
  },
  {
    title: 'Clean Custom-Code Strategy',
    desc: 'We use custom JavaScript, embeds, APIs, and external integrations when they solve genuine requirements while avoiding unnecessary code that makes the site harder to maintain.',
  },
  {
    title: 'SEO & Performance Built In',
    desc: 'We consider page structure, metadata, redirects, images, mobile behavior, accessibility, and performance throughout the build.',
  },
  {
    title: 'International-Ready Development',
    desc: 'For businesses serving multiple markets, we can plan localization, multilingual content, localized SEO, and regional publishing workflows around the project\'s requirements.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'CMS architecture, design, interactions, development, and testing move through defined review checkpoints so you can approve the direction before launch.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The Framecipher Advantage" title="Why Choose Framecipher for Webflow Development" align="center">
          Webflow development is not only about making a site look good. CMS architecture, responsive behavior, interactions, SEO, integrations, performance, and the way your team manages content after launch all affect the quality of the final website.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
          {whyChooseUsPillars.map((pillar, idx) => (
            <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {pillar.title}
                </h3>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {pillar.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}