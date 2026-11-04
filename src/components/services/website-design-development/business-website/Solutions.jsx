const industries = [
  {
    title: 'Service Businesses',
    desc: 'Websites built to explain services clearly, establish credibility, and generate calls, inquiries, consultations, or quote requests.',
  },
  {
    title: 'Professional Firms',
    desc: 'Structured websites for consultants, agencies, legal firms, financial businesses, and other professional services that depend on trust and expertise.',
  },
  {
    title: 'Startups & SMEs',
    desc: 'Scalable websites that help growing businesses establish a professional presence while leaving room for new services, content, and functionality.',
  },
  {
    title: 'Corporate & Established Businesses',
    desc: 'Larger websites with clearer information architecture, structured service sections, multiple audiences, and scalable content management.',
  },
  {
    title: 'Local Businesses',
    desc: 'Websites designed around location, services, contact information, maps, calls, and other actions that help local customers reach the business.',
  },
  {
    title: 'SaaS & Technology Businesses',
    desc: 'Websites that explain complex products clearly while supporting demos, sign-ups, lead generation, integrations, and future product growth.',
  },
]

export default function Solutions() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Business Website Solutions for{' '}
            <span className="italic text-frame-accent">Different Industries.</span>
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            Different businesses need different website structures, content, functionality, and conversion paths. We adapt the website around how your customers research, compare, and contact your business.
          </p>
        </div>

        {/* Modality 3: Blueprint Matrix */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214] sm:p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Industry 0{index + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {ind.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {ind.desc}
                </p>
              </div>
              <div className="mt-6 border-t border-white/[0.06] pt-3 font-mono text-[11px] text-zinc-500">
                Custom Journey Architecture
              </div>
            </div>
          ))}
        </div>

        {/* Footnote callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-5 md:p-6">
          <p className="text-xs sm:text-sm font-medium text-zinc-300 border-l-2 border-frame-accent pl-4">
            Every project starts with your actual business model and customer journey rather than forcing the same structure on every company.
          </p>
        </div>
      </div>
    </section>
  )
}
