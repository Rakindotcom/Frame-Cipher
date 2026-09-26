import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const applications = [
  {
    category: 'Website & Digital Products',
    badge: 'Digital Presence',
    desc: 'Ensuring your online user experience reflects the brand’s visual and typographic authority.',
    items: [
      'Website visual direction & color balance',
      'Heading & body typography hierarchy',
      'UI component styling & button treatments',
      'Hero banners, landing pages & graphic accents',
      'Consistent call-to-action styling & layout grids'
    ]
  },
  {
    category: 'Social Media & Content',
    badge: 'Audience Engagement',
    desc: 'Establishing scroll-stopping visual continuity across fast-moving feed environments.',
    items: [
      'Feed post layouts & carousel slide sequences',
      'Vertical Story & Reels cover templates',
      'Social profile avatars, banners & watermarks',
      'Content series visual themes & color rules',
      'Promotional creative frameworks'
    ]
  },
  {
    category: 'Advertising & Marketing',
    badge: 'Paid Campaigns',
    desc: 'Maintaining visual cohesion across diverse digital ad networks and display placements.',
    items: [
      'Google Display & Meta campaign key visuals',
      'High-converting landing page graphic assets',
      'Email newsletter layouts & header banners',
      'Promotional campaign graphic toolkits',
      'Multi-format banner adaptation guidelines'
    ]
  },
  {
    category: 'Presentations & Sales Materials',
    badge: 'Commercial Clout',
    desc: 'Elevating enterprise proposals, pitch decks, and internal reports into polished assets.',
    items: [
      'Investor & startup pitch deck master slides',
      'Corporate company profile publication grids',
      'B2B sales presentation & proposal decks',
      'Annual corporate report layouts & charts',
      'Internal executive training & keynote decks'
    ]
  },
  {
    category: 'Packaging & Commercial Print',
    badge: 'Physical Artifacts',
    desc: 'Engineering physical packaging, labels, and stationery to precise press specifications.',
    items: [
      'Retail box packaging & product carton dielines',
      'Bottle, jar, pouch, and container label systems',
      'Corporate stationery (business cards, letterheads)',
      'Multi-page product catalogues & brochures',
      'Event backdrops, roll-up banners & facility signage'
    ]
  },
  {
    category: 'Internal & Customer Communication',
    badge: 'Operational Alignment',
    desc: 'Ensuring day-to-day employee and customer correspondence speaks with one unified voice.',
    items: [
      'Employee handbooks & culture documents',
      'Internal team training guides & SOP manuals',
      'Transactional customer emails & system notices',
      'Service agreement & invoice document styling',
      'Official company memos & announcements'
    ]
  }
]

export default function RealWorldApplications() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Practical Deployment"
          title="Branding Designed for Real-World Applications"
        >
          A brand system needs to thrive outside the brand guidebook. We engineer the identity to perform seamlessly across the 6 major touchpoint environments where customers and stakeholders actually interact with your business.
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    ENV 0{idx + 1}
                  </span>
                  <span className="rounded bg-frame-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    {app.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {app.category}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {app.desc}
                </p>
                <ul className="mt-6 space-y-2 border-t border-frame-border/60 pt-4">
                  {app.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-xs font-medium text-frame-fg/90">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SUMMARY CALLOUT */}
        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 text-center md:p-8">
          <p className="text-xs sm:text-sm font-medium text-frame-fg leading-relaxed max-w-4xl mx-auto">
            The core objective is uncompromising consistency: your brand should remain instantly recognizable, unmistakably distinct, and commercially credible, regardless of whether a customer encounters you on a smartphone screen, a retail store shelf, or a formal legal proposal.
          </p>
        </div>
      </div>
    </section>
  )
}
