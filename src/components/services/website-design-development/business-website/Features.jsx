import { SectionIntro, SectionLabel } from '../../../Kinetic'

const featuresList = [
  {
    title: 'Lead Capture Forms',
    desc: 'Contact, inquiry, quote, and consultation forms designed to collect the information your sales team needs.',
  },
  {
    title: 'CRM Integration',
    desc: 'Where supported, website leads can be connected to your existing CRM so inquiries can move into your sales workflow without manual copying.',
  },
  {
    title: 'Analytics & Conversion Tracking',
    desc: 'We can configure analytics and relevant conversion events so you can understand where visitors come from and which actions they take.',
  },
  {
    title: 'WhatsApp & Call Integration',
    desc: 'For businesses that rely on direct communication, we can add WhatsApp, click-to-call, and other contact options where appropriate.',
  },
  {
    title: 'Booking & Appointment Tools',
    desc: 'Service businesses can connect booking or scheduling tools to make it easier for visitors to request appointments or consultations.',
  },
  {
    title: 'Live Chat & Communication Tools',
    desc: 'We can integrate suitable chat and communication tools based on your business workflow and technical requirements.',
  },
  {
    title: 'Maps & Location Features',
    desc: 'Location-based businesses can include Google Maps, service areas, directions, and other relevant local contact information.',
  },
  {
    title: 'Marketing Integrations',
    desc: 'Email platforms, newsletter tools, remarketing systems, and other marketing integrations can be included when they support the project goals.',
  },
]

export default function Features() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Tools & Ecosystem / Lead Capture" title="Business Website Features & Integrations">
          A business website often needs more than pages and contact information. We can connect the website to the tools your team uses to manage leads, communication, bookings, and marketing.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <SectionLabel className="mb-2">Capability {String(index + 1).padStart(2, '0')}</SectionLabel>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {feature.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          Integration availability depends on the platform, third-party software, API access, and project scope. We confirm compatibility before development begins.
        </p>
      </div>
    </section>
  )
}