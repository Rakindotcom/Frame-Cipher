import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "LINK PROSPECTING & OUTREACH",
    "description": "Finding the right sites to pursue matters as much as the pitch itself. What We Do A hundred low-quality links rarely outperform ten genuinely relevant ones, and the risk profile isn't close.",
    "bullets": [
      "Relevant Site Identification: Finding publications and sites genuinely related to your industry, not just ones with a high metric score.",
      "Editorial Quality Assessment: Vetting sites for real editorial standards before pursuing a placement.",
      "Personalized Outreach: Pitches written for the specific publication, not a mail-merged template sent to five hundred sites at once.",
      "Relationship Building: Maintaining ongoing relationships with publishers rather than treating every outreach as a one-time transaction."
    ]
  },
  {
    "title": "GUEST POSTING & CONTENT PLACEMENT",
    "description": "Contributing genuinely useful content to sites your target audience already reads. What We Do A guest post that wouldn't get published on its own merit isn't a link building strategy, it's a liability waiting to be noticed.",
    "bullets": [
      "Guest Post Pitching: Identifying topics and publications where a contribution would add real value, not just a link.",
      "Content Development: Writing genuinely useful articles, not thin content built solely to house a link.",
      "Placement Negotiation: Securing publication on sites with actual traffic and editorial standards.",
      "Anchor Text Strategy: Natural, varied anchor text that reads like normal writing, not an optimization pattern."
    ]
  },
  {
    "title": "BROKEN LINK & RESOURCE OUTREACH",
    "description": "Finding existing opportunities where a link to your content genuinely improves someone else's page. What We Do This is link building that solves someone else's problem first, which is exactly why it tends to work.",
    "bullets": [
      "Broken Link Identification: Finding dead links on relevant sites that could be replaced with a link to your content.",
      "Resource Page Outreach: Identifying curated resource pages where your content is a genuine fit.",
      "Competitor Backlink Analysis: Finding where competitors are earning links, to identify opportunities you might be missing.",
      "Digital PR & Content-Based Outreach: Pitching original research, data, or content genuinely newsworthy enough to earn coverage."
    ]
  },
  {
    "title": "LOCAL & INDUSTRY CITATIONS",
    "description": "Building the kind of foundational authority that supports both rankings and trust. What We Do Citations won't carry a link building strategy alone, but skipping them leaves an easy foundation unbuilt.",
    "bullets": [
      "Local Citation Building: Consistent business listings across relevant directories, supporting local search visibility.",
      "Industry Directory Submissions: Placement in directories genuinely relevant to your sector, not a mass submission to hundreds of low-quality ones.",
      "NAP Consistency Audits: Making sure your business name, address, and phone number match everywhere they appear.",
      "Social Signal Support: Profile and presence consistency that reinforces overall brand authority."
    ]
  },
  {
    "title": "BACKLINK MONITORING & DISAVOW SUPPORT",
    "description": "Protecting the authority you've built and catching problems before they compound. What We Do Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing link monitoring fits into a broader retainer.",
    "bullets": [
      "Backlink Profile Monitoring: Tracking new links, both good and potentially harmful, as they appear.",
      "Toxic Link Identification: Flagging spammy or manipulative links that could put your site at risk.",
      "Disavow File Management: Preparing and submitting disavow requests where genuinely warranted.",
      "Link Velocity Monitoring: Watching for unnatural link growth patterns that could draw unwanted algorithmic attention."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Authority built the slow way is authority that survives Google's next update. Authority bought the fast way often doesn't.",
  "Manufactured Links Carry Real Penalty Risk",
  "Bulk-bought links and link networks can trigger a manual action or algorithmic penalty that takes far longer to recover from than the links took to acquire.",
  "Relevance Matters More Than Volume",
  "A handful of links from genuinely relevant, respected sites in your industry typically carries more weight than a large volume of unrelated ones.",
  "Authority Compounds, Slowly",
  "Link building is one of the few SEO channels where the effect builds cumulatively over time, each earned link adds to a foundation, rather than resetting with each new campaign.",
  "Your Backlink Profile Needs Active Protection",
  "New links, including harmful ones from spam sites linking to you without your involvement, keep appearing whether you're actively building or not, monitoring catches problems before they compound."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "A shortcut in link building almost always shows up later as a problem, usually right when a site is starting to gain real traction. We don't buy links in bulk, run automated outreach blasts, or participate in link networks; those tactics can move a needle briefly and then cost months of recovery once Google catches up, which it eventually does. Every link we build goes on a genuinely relevant site, placed in an editorial context that makes sense to an actual reader, because that's exactly the pattern Google's systems are built to distinguish from the manufactured version.",
    "text": "\"The links that actually help a site are the ones that would exist even if Google didn't. A link earned because the content deserved it holds up. A link bought because a tool made it easy usually doesn't.\" Manual, Relevance-Based Outreach | No Bulk Buying or Link Networks | Built to Last, Not Just to Rank"
  },
  {
    "title": "Our Off-Page SEO & Link Building Services",
    "text": "Authority gets built through several different channels, each with its own approach."
  },
  {
    "title": "LINK PROSPECTING & OUTREACH",
    "text": "Finding the right sites to pursue matters as much as the pitch itself."
  },
  {
    "title": "What We Do",
    "text": "* Relevant Site Identification: Finding publications and sites genuinely related to your industry, not just ones with a high metric score. * Editorial Quality Assessment: Vetting sites for real editorial standards before pursuing a placement. * Personalized Outreach: Pitches written for the specific publication, not a mail-merged template sent to five hundred sites at once. * Relationship Building: Maintaining ongoing relationships with publishers rather than treating every outreach as a one-time transaction. A hundred low-quality links rarely outperform ten genuinely relevant ones, and the risk profile isn't close."
  },
  {
    "title": "GUEST POSTING & CONTENT PLACEMENT",
    "text": "Contributing genuinely useful content to sites your target audience already reads."
  },
  {
    "title": "What We Do",
    "text": "* Guest Post Pitching: Identifying topics and publications where a contribution would add real value, not just a link. * Content Development: Writing genuinely useful articles, not thin content built solely to house a link. * Placement Negotiation: Securing publication on sites with actual traffic and editorial standards. * Anchor Text Strategy: Natural, varied anchor text that reads like normal writing, not an optimization pattern. A guest post that wouldn't get published on its own merit isn't a link building strategy, it's a liability waiting to be noticed."
  },
  {
    "title": "BROKEN LINK & RESOURCE OUTREACH",
    "text": "Finding existing opportunities where a link to your content genuinely improves someone else's page."
  },
  {
    "title": "What We Do",
    "text": "* Broken Link Identification: Finding dead links on relevant sites that could be replaced with a link to your content. * Resource Page Outreach: Identifying curated resource pages where your content is a genuine fit. * Competitor Backlink Analysis: Finding where competitors are earning links, to identify opportunities you might be missing. * Digital PR & Content-Based Outreach: Pitching original research, data, or content genuinely newsworthy enough to earn coverage. This is link building that solves someone else's problem first, which is exactly why it tends to work."
  },
  {
    "title": "LOCAL & INDUSTRY CITATIONS",
    "text": "Building the kind of foundational authority that supports both rankings and trust."
  },
  {
    "title": "What We Do",
    "text": "* Local Citation Building: Consistent business listings across relevant directories, supporting local search visibility. * Industry Directory Submissions: Placement in directories genuinely relevant to your sector, not a mass submission to hundreds of low-quality ones. * NAP Consistency Audits: Making sure your business name, address, and phone number match everywhere they appear. * Social Signal Support: Profile and presence consistency that reinforces overall brand authority. Citations won't carry a link building strategy alone, but skipping them leaves an easy foundation unbuilt."
  },
  {
    "title": "BACKLINK MONITORING & DISAVOW SUPPORT",
    "text": "Protecting the authority you've built and catching problems before they compound."
  },
  {
    "title": "What We Do",
    "text": "* Backlink Profile Monitoring: Tracking new links, both good and potentially harmful, as they appear. * Toxic Link Identification: Flagging spammy or manipulative links that could put your site at risk. * Disavow File Management: Preparing and submitting disavow requests where genuinely warranted. * Link Velocity Monitoring: Watching for unnatural link growth patterns that could draw unwanted algorithmic attention. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing link monitoring fits into a broader retainer. Why Your Business Needs Real Link Building Work Authority built the slow way is authority that survives Google's next update. Authority bought the fast way often doesn't. Manufactured Links Carry Real Penalty Risk Bulk-bought links and link networks can trigger a manual action or algorithmic penalty that takes far longer to recover from than the links took to acquire."
  },
  {
    "title": "Relevance Matters More Than Volume",
    "text": "A handful of links from genuinely relevant, respected sites in your industry typically carries more weight than a large volume of unrelated ones. Authority Compounds, Slowly Link building is one of the few SEO channels where the effect builds cumulatively over time, each earned link adds to a foundation, rather than resetting with each new campaign. Your Backlink Profile Needs Active Protection New links, including harmful ones from spam sites linking to you without your involvement, keep appearing whether you're actively building or not, monitoring catches problems before they compound. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Outreach, content, and monitoring handled by people who actually understand your industry, not an outsourced link-buying operation running the same playbook for every client. Manual Outreach, Not Automation Every pitch is written for the specific publication we're reaching out to no mail-merged templates blasted to hundreds of sites at once."
  },
  {
    "title": "Local & International Outreach Experience",
    "text": "Based in Dhaka. Building authority for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process You see exactly which sites we're pursuing and which links get placed, with full visibility into the process."
  },
  {
    "title": "Link Prospecting & Outreach",
    "text": "Relevant, editorially credible sites identified and pursued through personalized outreach, not automation."
  },
  {
    "title": "Guest Posting & Content Placement",
    "text": "Genuinely useful content placed on sites your audience actually reads."
  },
  {
    "title": "Broken Link & Digital PR Outreach",
    "text": "Opportunities that solve a publisher's problem first, earning links as a natural byproduct."
  },
  {
    "title": "Local & Industry Citations",
    "text": "Consistent, accurate business listings that support both rankings and trust."
  },
  {
    "title": "Backlink Monitoring",
    "text": "Ongoing tracking of your link profile, with disavow support where genuinely needed."
  },
  {
    "title": "Transparent Process",
    "text": "Full visibility into which sites are being pursued and which links get placed."
  }
]

  if (!offerings?.length && !whyMatters?.length) return null

  return (
    <div className="bg-frame-bg text-frame-fg">
      {offerings?.length > 0 && (
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro
              eyebrow="Capabilities & Scope"
              title="What We Deliver"
            >
              Structured deliverables and execution phases designed for measurable outcomes and reliable business growth.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
              {offerings.map((item, index) => (
                <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      Scope 0{index + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.bullets?.length > 0 && (
                    <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY IT MATTERS & WHY CHOOSE US */}
      {(whyMatters?.length > 0 || whyChooseUs?.length > 0) && (
        <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {whyMatters?.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Business Context
                  </span>
                  <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    Why This Matters for Growth
                  </h2>
                  <div className="mt-6 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {whyMatters.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <PosterButton href="/contact">Book a Strategy Session</PosterButton>
                  </div>
                </div>
              )}

              {whyChooseUs?.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      The Frame Cipher Standard
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      Why Choose Frame Cipher
                    </h3>
                  </div>

                  <div className="grid bg-frame-border gap-px border-2 border-frame-border">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="bg-frame-bg p-6">
                        <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                          {item.text || item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
