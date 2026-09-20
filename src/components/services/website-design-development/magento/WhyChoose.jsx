import { SectionIntro, PosterButton } from '../../../Kinetic'

const whyChoosePillars = [
  {
    tag: 'Pillar 01',
    title: 'One In-House Team',
    desc: 'Strategy, ecommerce planning, design, development, integrations, and launch support stay within one coordinated team rather than being divided across unrelated vendors.',
  },
  {
    tag: 'Pillar 02',
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend Magento when the business requirements justify it. When Shopify, WooCommerce, or another platform is more appropriate, we explain that before development begins.',
  },
  {
    tag: 'Pillar 03',
    title: 'Business-First Architecture',
    desc: 'We plan around your catalog, customers, pricing model, fulfillment process, integrations, and growth requirements instead of starting with a generic store template.',
  },
  {
    tag: 'Pillar 04',
    title: 'Custom Magento Development',
    desc: 'We can extend the standard platform through custom modules, integrations, APIs, CMS structures, and supported frontend approaches where the project requires them.',
  },
  {
    tag: 'Pillar 05',
    title: 'SEO-Ready Ecommerce Foundations',
    desc: 'We consider category structure, product architecture, URLs, internal linking, metadata, redirects, indexation, performance, and analytics as part of the website architecture.',
  },
  {
    tag: 'Pillar 06',
    title: 'Transparent Review Checkpoints',
    desc: 'Architecture, design, development, and testing are reviewed at defined stages so major decisions are approved before the project moves forward.',
  },
  {
    tag: 'Pillar 07',
    title: 'Practical Handover & Support',
    desc: 'We provide the agreed access, documentation, launch guidance, and post-launch support required to manage the store according to the project scope.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Engineering Excellence" title="Why Choose Framecipher for Magento Development" align="center">
          Magento development involves more than writing code. Catalog architecture, ecommerce strategy, integrations, frontend experience, SEO, infrastructure, performance, and maintenance all affect the final store.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {whyChoosePillars.map((diff, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[220px]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {diff.tag}
                </span>
                <h3 className="mt-4 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {diff.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {diff.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PosterButton href="/contact">Start Your Magento Project &rarr;</PosterButton>
        </div>
      </div>
    </section>
  )
}