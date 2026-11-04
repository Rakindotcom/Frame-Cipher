
import { AutoLinks } from '../../../seo/AutoLinks'
import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Strategy Before Writing',
    text: 'We do not start with a blank document and immediately rewrite the manufacturer\u2019s description. We first determine what the product needs to communicate and what the buyer needs to understand.',
  },
  {
    title: 'One In-House Team',
    text: 'Content can work alongside your broader SEO, website, ecommerce, paid advertising, and design requirements when those services are part of the project.',
  },
  {
    title: 'Buyer-Focused Copy',
    text: 'Features matter, but shoppers also need to understand why those features matter to them. We translate relevant product information into clearer buyer-facing messaging.',
  },
  {
    title: 'SEO-Aware Without Keyword Stuffing',
    text: 'We use search data to guide product copy without turning the description into a list of keywords.',
  },
  {
    title: 'Scalable Catalog Workflow',
    text: 'A five-product store and a 1,000-SKU catalog need different workflows. We can build a consistent structure for larger catalogs while leaving enough flexibility for genuine product differences.',
  },
  {
    title: 'Bangladesh & International Market Understanding',
    text: 'We write for Bangladesh-based ecommerce businesses as well as international clients. Where relevant, product messaging can be adapted for different markets rather than directly translating one version everywhere.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Why Framecipher" title="Why Choose Framecipher">
          Product copy is only useful if it is accurate, original, and written for the platform it will be
          published on.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
              <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]"><AutoLinks currentPath="/services/content-writing/product-descriptions" allowed={["/services/paid-advertising"]}>{reason.text}</AutoLinks></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
