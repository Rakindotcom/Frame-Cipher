import { SectionIntro } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Market Alignment / Domain Tailoring" title="Business Website Solutions for Different Industries">
          Different businesses need different website structures, content, functionality, and conversion paths. We adapt the website around how your customers research, compare, and contact your business.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Industry 0{index + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {ind.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          Every project starts with your actual business model and customer journey rather than forcing the same structure on every company.
        </p>
      </div>
    </section>
  )
}