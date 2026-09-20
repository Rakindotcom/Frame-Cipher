import { SectionIntro } from '../../../Kinetic'

const businessSolutions = [
  {
    number: '01',
    title: 'Small Business Websites',
    description: 'Professional websites for businesses that need a clear online presence, service information, lead capture, and easy content updates.',
  },
  {
    number: '02',
    title: 'Service Business Websites',
    description: 'Websites for agencies, consultants, contractors, clinics, professionals, and other service providers that need strong service pages, inquiries, bookings, and calls to action.',
  },
  {
    number: '03',
    title: 'Startup Websites',
    description: 'Flexible websites for startups that need to launch quickly, explain their offer clearly, validate their positioning, and keep managing content as the business grows.',
  },
  {
    number: '04',
    title: 'Corporate & Professional Websites',
    description: 'Structured websites for established businesses that need strong brand presentation, organized content, lead generation, company information, and internal review workflows.',
  },
  {
    number: '05',
    title: 'Portfolio Websites',
    description: 'Visual websites for designers, photographers, architects, agencies, creators, and professionals who need to present projects through a consistent content structure.',
  },
  {
    number: '06',
    title: 'Booking & Appointment Websites',
    description: 'Websites that connect visitors with appointments, consultations, classes, or other scheduled services through supported Wix booking functionality.',
  },
  {
    number: '07',
    title: 'Membership Websites',
    description: 'Wix websites that require controlled member experiences, gated content, profiles, or member-focused interactions where the required functionality fits the platform.',
  },
  {
    number: '08',
    title: 'Ecommerce Websites',
    description: 'Online stores for businesses that need product catalogs, checkout, payments, orders, and manageable store content within the Wix ecosystem.',
  },
  {
    number: '09',
    title: 'Dynamic CMS Websites',
    description: 'Content-driven websites that use structured collections and dynamic pages to publish larger sets of similar content without manually designing every page.',
  },
]

export default function Solutions() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Versatility / Specific Niches" title="Wix Solutions for Different Business Needs">
          Wix can support different website models when the platform matches the business requirements. We tailor the structure, content, functionality, and editing experience around what each business needs.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {businessSolutions.map((item, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[200px]">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                  Solution {item.number}
                </span>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
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