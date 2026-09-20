import { SectionIntro } from '../../../Kinetic'

const businessModels = [
  {
    title: 'B2C E-commerce',
    desc: 'Direct-to-consumer stores designed around product discovery, fast checkout, promotions, customer accounts, and repeat purchases.',
  },
  {
    title: 'B2B E-commerce',
    desc: 'Stores for businesses that may need account-based pricing, bulk orders, quote requests, approval workflows, or custom purchasing processes.',
  },
  {
    title: 'Multi-Vendor Marketplaces',
    desc: 'Platforms where multiple sellers manage products and customers purchase from different vendors through one marketplace.',
  },
  {
    title: 'Subscription Commerce',
    desc: 'Stores supporting recurring products, memberships, subscriptions, or scheduled purchases where the selected platform supports the required workflow.',
  },
  {
    title: 'Digital Products',
    desc: 'Online stores for software, courses, downloadable products, memberships, licenses, and other non-physical products.',
  },
  {
    title: 'Omnichannel & Retail Businesses',
    desc: 'Ecommerce websites that need to work alongside physical stores, POS systems, inventory systems, or other sales channels where supported.',
  },
]

export default function Models() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Business Models / Adaptive Commerce Setup" title="E-commerce Solutions for Different Business Models">
          Not every online store works the same way. The right website structure depends on what you sell, who you sell to, and how customers purchase from you.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {businessModels.map((model, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Model 0{index + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {model.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {model.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          We recommend the platform and architecture based on your business model rather than forcing every store into the same ecommerce setup.
        </p>
      </div>
    </section>
  )
}