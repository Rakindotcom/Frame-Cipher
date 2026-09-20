import { SectionIntro } from '../../../Kinetic'

const marketingBenefits = [
  {
    title: 'Design Control',
    desc: 'Webflow gives teams strong control over layouts, responsive behavior, typography, interactions, and visual systems.',
  },
  {
    title: 'Structured Content',
    desc: 'The CMS allows blogs, case studies, services, team members, resources, listings, and other structured content to be managed separately from page design.',
  },
  {
    title: 'Reusable Components',
    desc: 'Reusable components help teams maintain consistent layouts while allowing approved content and properties to change across instances.',
  },
  {
    title: 'Marketing-Team Independence',
    desc: 'A well-architected Webflow project lets marketing teams make routine content changes without editing source code.',
  },
  {
    title: 'SEO & Performance Foundations',
    desc: 'SEO settings, structured content, redirects, responsive design, image optimization, and technical configuration can be considered throughout the Webflow build.',
  },
  {
    title: 'International Publishing',
    desc: 'Localization can support different languages and regions through localized content, URLs, SEO settings, and CMS publishing workflows.',
  },
  {
    title: 'A Platform That Can Stay Simple',
    desc: 'Webflow is powerful, but not every project needs extensive custom code or complex integrations. We use native capabilities first and add custom development only when the business requirement justifies it.',
  },
]

export default function WhyWebflow() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Operational Agility" title="Why Webflow Works for Modern Marketing Teams">
          Webflow is particularly useful for organizations that need strong visual control, structured content, and the ability for marketing teams to publish without depending on developers for every routine update.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {marketingBenefits.map((item, idx) => (
            <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                  Benefit 0{idx + 1}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}