import { SectionIntro } from '../../Kinetic'

const businessNeeds = [
  { title: 'Startups', desc: 'Websites for new businesses that need to establish credibility, explain their offering, and create room for future growth.' },
  { title: 'Small & Service Businesses', desc: 'Professional websites designed to explain services clearly, build trust, and generate calls, inquiries, or consultation requests.' },
  { title: 'eCommerce Businesses', desc: 'Online stores designed around products, checkout, payments, inventory, and the overall customer journey.' },
  { title: 'Corporate & Established Businesses', desc: 'Structured websites for established brands that need a stronger digital presence, scalable content, and clear information architecture.' },
  { title: 'SaaS & Web Applications', desc: 'Custom websites and web applications for businesses that require user accounts, dashboards, integrations, or workflows beyond standard CMS functionality.' },
  { title: 'Institutions & Non-Profits', desc: 'Accessible, trust-focused digital portals designed for clear public information, community engagement, and organizational credibility.' },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Target Audience Alignment" title="Website Solutions for Different Business Needs">
          From venture-backed startups to established corporate leaders, we adapt the stack to your operational realities.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {businessNeeds.map((item, index) => (
            <div key={item.title} className="group bg-frame-bg p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-frame-muted/30">
              <div>
                <span className="flex h-10 w-10 items-center justify-center border-2 border-frame-accent/40 bg-frame-accent/10 font-heading text-sm font-bold text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}