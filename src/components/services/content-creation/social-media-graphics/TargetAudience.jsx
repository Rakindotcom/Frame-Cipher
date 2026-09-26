import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const clientProfiles = [
  {
    num: "01",
    title: "Ecommerce Brands",
    desc: "For online stores needing high-conversion product showcases, promotional sale banners, and customer review carousels that drive direct checkouts.",
    fit: "High-CTR feed & story ads"
  },
  {
    num: "02",
    title: "Product Businesses",
    desc: "For physical and consumer goods companies wanting crisp feature highlights, unboxing teasers, and lifestyle composite visuals across channels.",
    fit: "Feature callouts & launch teasers"
  },
  {
    num: "03",
    title: "Service Businesses",
    desc: "For service providers needing to articulate intangible value, package offerings, client transformations, and clear pricing models visually.",
    fit: "Service explainers & offer cards"
  },
  {
    num: "04",
    title: "Startups & Scaleups",
    desc: "For agile tech startups needing polished launch campaign creatives, product feature announcements, and fundraising milestone announcements.",
    fit: "Speed-to-market launch assets"
  },
  {
    num: "05",
    title: "Personal Brands & Creators",
    desc: "For founders, authors, and industry consultants who require authoritative quote cards, carousel frameworks, and YouTube/Reel cover systems.",
    fit: "Thought leadership carousels"
  },
  {
    num: "06",
    title: "Professional Services",
    desc: "For legal, financial, architectural, and advisory firms requiring restrained, credible visual communication that reinforces institutional trust.",
    fit: "Corporate authority & advisory posts"
  },
  {
    num: "07",
    title: "B2B Companies",
    desc: "For enterprise B2B organizations needing LinkedIn-optimized research graphics, industry data visualizations, and whitepaper promotion assets.",
    fit: "LinkedIn-optimized infographics"
  },
  {
    num: "08",
    title: "Retail Businesses",
    desc: "For brick-and-mortar storefronts promoting in-store events, seasonal discounts, new arrivals, and localized community promotions.",
    fit: "In-store event & promo graphics"
  },
  {
    num: "09",
    title: "Hospitality & Dining",
    desc: "For restaurants, cafes, and hospitality venues wanting appetizing menu highlights, weekly specials, and experiential ambiance visuals.",
    fit: "Appetizing culinary showcase"
  },
  {
    num: "10",
    title: "Education & EdTech",
    desc: "For training academies, course creators, and EdTech platforms needing digestible infographic carousels, student proof, and workshop announcements.",
    fit: "Step-by-step learning carousels"
  },
  {
    num: "11",
    title: "Corporate Brands",
    desc: "For established corporations requiring strict brand guideline adherence, ESG reporting graphics, executive communications, and PR announcements.",
    fit: "Enterprise brand governance"
  },
  {
    num: "12",
    title: "Marketing Teams",
    desc: "For in-house marketing departments that need reliable, high-velocity design overflow capacity without expanding internal headcount.",
    fit: "Overflow monthly studio capacity"
  }
]

export default function TargetAudience() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Market Fit"
          title="Who Our Social Media Graphics Service Is For"
          align="center"
        >
          From standalone campaigns to recurring monthly production retainers, structured for businesses that demand high-retention social creatives.
        </SectionIntro>

        {/* 12 BALANCED PROFILES IN A PERFECT 4x3 GRID */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {clientProfiles.map((item, index) => (
            <div
              key={index}
              className="bg-frame-bg p-6 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-2 mb-3">
                  <span className="font-heading text-xl font-black text-frame-accent">
                    {item.num}
                  </span>
                  <span className="font-mono text-[10px] text-frame-muted-fg uppercase border border-frame-border px-1.5 py-0.5">
                    Profile
                  </span>
                </div>

                <h3 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 border-t border-frame-border/60 pt-3 flex items-center gap-1.5 text-xs font-mono font-bold text-frame-accent">
                <CheckIcon className="h-3.5 w-3.5" />
                <span className="leading-snug">{item.fit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ACTION */}
        <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
              Need A Single Campaign Or Dedicated Monthly Capacity?
            </h4>
            <p className="text-xs sm:text-sm font-medium text-frame-muted-fg">
              We structure engagements for standalone launch sprints, template handoffs, or monthly design retainers.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Discuss Your Project Scope &rarr;
            </PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
