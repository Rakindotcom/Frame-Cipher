import { SectionIntro } from '../../../Kinetic'

const techStack = [
  {
    name: 'Webflow Designer',
    desc: 'Responsive page development, reusable styles, components, layouts, interactions, and responsive breakpoints.',
  },
  {
    name: 'Webflow CMS',
    desc: 'Structured Collections, dynamic templates, reference relationships, filtering, sorting, and CMS-driven page experiences.',
  },
  {
    name: 'Webflow Components',
    desc: 'Reusable design elements that help keep large websites consistent and easier to manage.',
  },
  {
    name: 'Custom Code',
    desc: 'HTML, CSS, JavaScript, embeds, and custom functionality where native Webflow capabilities are not enough.',
  },
  {
    name: 'Webflow APIs & Integrations',
    desc: 'Site data integrations, CMS workflows, external systems, automation, and custom application connections.',
  },
  {
    name: 'Webflow Apps',
    desc: 'Apps and extensions selected around genuine business requirements rather than unnecessary third-party functionality.',
  },
  {
    name: 'Webflow Localization',
    desc: 'Localized pages, CMS content, components, URLs, and SEO configurations for multilingual or multi-region websites.',
  },
  {
    name: 'Performance & SEO',
    desc: 'Semantic structure, image optimization, metadata, redirects, accessibility checks, mobile performance, and other technical considerations.',
  },
]

export default function TechStack() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Architecture &amp; Platform Components" title="Webflow Technology Stack">
          Webflow development works best when the visual system, CMS, components, integrations, custom code, SEO, and publishing workflow are planned together. Depending on the project, our Webflow stack can include:
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
          {techStack.map((tech, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6 sm:p-8">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                  Stack Layer 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {tech.name}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 text-sm font-medium text-frame-muted-fg">
          We use the technology required by the project rather than adding complexity simply to make the technical stack look more advanced.
        </div>
      </div>
    </section>
  )
}