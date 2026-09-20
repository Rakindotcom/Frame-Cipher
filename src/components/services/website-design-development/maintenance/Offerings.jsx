import { SectionIntro } from '../../../Kinetic'

const platforms = [
  {
    title: 'WordPress Maintenance',
    description: 'WordPress maintenance can include core, plugin, and theme updates, security checks, malware monitoring, backup verification, performance reviews, and compatibility checks.',
  },
  {
    title: 'WooCommerce Maintenance',
    description: 'WooCommerce stores need additional attention around products, checkout, payments, orders, inventory, shipping, and connected plugins or services.',
  },
  {
    title: 'Shopify Maintenance',
    description: 'Shopify maintenance can include app and theme checks, product and content updates, payment-related monitoring, integration checks, and storefront improvements within the platform.',
  },
  {
    title: 'Wix Maintenance',
    description: 'Wix maintenance can include content updates, responsive checks, forms, bookings, connected apps, ecommerce functions, and ongoing troubleshooting within the Wix environment.',
  },
  {
    title: 'Webflow Maintenance',
    description: 'Webflow maintenance can include CMS content updates, page changes, forms, integrations, responsive adjustments, and ongoing site checks.',
  },
  {
    title: 'Magento Maintenance',
    description: 'Magento stores require more specialized maintenance around platform updates, extensions, security, performance, ecommerce functionality, and integrations.',
  },
  {
    title: 'Custom / Next.js Maintenance',
    description: 'Custom applications need active technical maintenance rather than simple CMS updates. Depending on the application, support can include dependency updates, API monitoring, security improvements, deployment support, performance monitoring, bug fixes, and ongoing feature development.',
  },
]

export default function Offerings() {
  return (
    <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Engineering" title="Platform-Specific Website Maintenance" index="12">
          Different platforms have different update cycles, dependencies, security concerns, and maintenance requirements. We tailor ongoing care around the technology your website actually uses.
        </SectionIntro>

        <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {platforms.map((platform, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Platform 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {platform.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
          <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
            We do not apply the same checklist to every platform. The maintenance scope is defined around the website&apos;s technology, business importance, integrations, and level of risk.
          </p>
        </div>
      </div>
    </section>
  )
}