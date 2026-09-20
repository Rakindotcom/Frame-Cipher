import { SectionIntro } from '../../../Kinetic'

const productTypes = [
  {
    title: 'Website UI/UX',
    description: 'We design clear navigation, content hierarchy, responsive layouts, lead-generation flows, and conversion-focused journeys for business and marketing websites.',
  },
  {
    title: 'Mobile App UI/UX',
    description: 'We design mobile-first experiences for onboarding, navigation, account management, notifications, repeated tasks, and other app-specific interactions.',
  },
  {
    title: 'SaaS & Dashboard Design',
    description: 'We design complex interfaces for SaaS products, dashboards, analytics systems, admin panels, and products with multiple users, roles, permissions, and recurring workflows.',
  },
  {
    title: 'Ecommerce UX',
    description: 'We structure product discovery, search, filtering, product pages, cart, checkout, payment, account, and post-purchase experiences around a smoother customer journey.',
  },
  {
    title: 'Web Application & Customer Portal Design',
    description: 'We design booking systems, customer portals, marketplaces, internal tools, client dashboards, and other web applications with more complex interactions.',
  },
  {
    title: 'Landing Page UI/UX',
    description: 'We create focused page structures around a specific goal such as lead generation, product promotion, signup, or campaign conversion.',
  },
]

export default function ProductTypes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Product Categories" title="UI/UX Design for Websites, Apps & Digital Products">
          Different products require different design decisions. We adapt the UX process around what users actually need to accomplish, how often they use the product, and how complex the underlying workflows are.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {productTypes.map((prod, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Category 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {prod.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {prod.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}