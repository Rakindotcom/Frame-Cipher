import React from 'react'

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
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Wix Solutions for{' '}
            <span className="italic text-frame-accent">Different Business Needs.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Wix can support different website models when the platform matches the business requirements. We tailor the structure, content, functionality, and editing experience around what each business needs.
          </p>
        </div>

        {/* 9 Solution Cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {businessSolutions.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent block mb-2">
                  {item.number}
                </span>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-400">
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
