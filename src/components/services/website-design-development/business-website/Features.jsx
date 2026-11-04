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
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Business Website{' '}
            <span className="italic text-frame-accent">Features &amp; Integrations.</span>
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            A business website often needs more than pages and contact information. We can connect the website to the tools your team uses to manage leads, communication, bookings, and marketing.
          </p>
        </div>

        {/* Modality 3: 4-Column Blueprint Matrix */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Capability {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {feature.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300">
                  {feature.desc}
                </p>
              </div>
              <div className="mt-6 border-t border-white/[0.06] pt-3 font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                Full API Compatibility
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Footnote Box */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-5 md:p-6">
          <p className="text-xs sm:text-sm font-medium text-zinc-300 border-l-2 border-frame-accent pl-4">
            Integration availability depends on the platform, third-party software, API access, and project scope. We confirm compatibility before development begins.
          </p>
        </div>
      </div>
    </section>
  )
}
