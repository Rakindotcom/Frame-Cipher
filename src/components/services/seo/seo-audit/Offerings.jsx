import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "TECHNICAL AUDIT",
    "description": "The infrastructure check that catches issues invisible to a regular site visitor. What We Do A technical issue undermining rankings often produces no visible symptom a business owner would ever notice on their own.",
    "bullets": [
      "Crawlability & Indexation Review: Checking whether search engines can actually find and index your important pages.",
      "Site Speed & Core Web Vitals Analysis: Identifying exactly what's slowing pages down, with specific fixes attached.",
      "Mobile Usability Check: Confirming the site performs correctly on the devices most visitors actually use.",
      "Structured Data Review: Auditing existing schema markup for errors and identifying missed opportunities."
    ]
  },
  {
    "title": "ON-PAGE AUDIT",
    "description": "A review of how well individual pages actually match what searchers are looking for. What We Do Content that technically exists and content that actually competes for a keyword are sometimes two very different things.",
    "bullets": [
      "Content Quality & Intent Alignment Review: Assessing whether pages actually satisfy the search intent behind their target keywords.",
      "Metadata & Heading Audit: Checking title tags, descriptions, and header structure against best practice and competitor benchmarks.",
      "Internal Linking Analysis: Identifying orphan pages and missed opportunities to connect related content.",
      "Content Gap Identification: Finding what's missing compared to pages currently outranking yours."
    ]
  },
  {
    "title": "BACKLINK PROFILE AUDIT",
    "description": "An honest look at your site's authority, including the parts that might be working against you. What We Do A backlink profile can look impressive by volume and still be quietly holding a site back if the quality isn't there.",
    "bullets": [
      "Backlink Quality Assessment: Distinguishing genuinely valuable links from ones adding little or even carrying risk.",
      "Toxic Link Identification: Flagging spammy or manipulative links that could put your site at risk of a penalty.",
      "Competitor Backlink Comparison: Understanding where your authority stands relative to sites actually outranking you.",
      "Anchor Text Distribution Review: Checking for unnatural patterns that could draw unwanted algorithmic attention."
    ]
  },
  {
    "title": "COMPETITIVE & MARKET ANALYSIS",
    "description": "Understanding your rankings isn't just about your own site, it's about what's actually beating you. What We Do Auditing your own site in isolation misses half the picture, rankings are inherently relative to what else is competing for the same space.",
    "bullets": [
      "Competitor Ranking Comparison: Identifying who's currently outranking you and why, specifically.",
      "Keyword Gap Analysis: Finding terms competitors rank for that your site currently doesn't target at all.",
      "SERP Feature Opportunity Review: Identifying where featured snippets, Map Pack, or rich results are realistically within reach.",
      "Market Positioning Assessment: Understanding where genuine opportunity exists versus where competition is too entrenched to be worth pursuing right now."
    ]
  },
  {
    "title": "PRIORITIZED ACTION PLAN & REPORTING",
    "description": "Turning findings into something an actual team can execute against. What We Do A completed audit naturally leads into ongoing work - see our [SEO Strategy & Consulting] page for how audit findings translate into an executed roadmap.",
    "bullets": [
      "Impact-Based Prioritization: Ranking every finding by likely effect on rankings and traffic, not just by severity in isolation.",
      "Plain-Language Explanations: Every issue explained in terms a non-technical stakeholder can actually understand.",
      "Effort vs. Impact Mapping: Flagging quick wins separately from larger structural projects, so resourcing decisions are easier.",
      "Implementation Guidance: Specific enough recommendations that an internal team could execute them without further clarification."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "A raw data export isn't the same thing as knowing what to actually fix first.",
  "Not Every Flagged Issue Matters Equally",
  "Automated tools flag everything without judgment, a proper audit separates what's genuinely costing you rankings from what's technically true but practically irrelevant.",
  "You Can't Fix What You Haven't Actually Diagnosed",
  "Guessing what's wrong wastes both time and budget on fixes that may not address the real problem at all.",
  "Competitors Are Part of the Picture",
  "Understanding your own site's issues without understanding what's actually outranking you gives an incomplete, sometimes misleading, view of the opportunity.",
  "An Audit Is the Cheapest Way to Find Out What's Actually Wrong",
  "Committing to months of ongoing SEO work without first understanding the starting condition risks spending on the wrong priorities entirely."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "A tool can flag a broken link or a slow page. It can't tell you which of your forty flagged issues is actually costing you rankings and which one barely matters. We run the same technical scans as any audit tool, then apply real judgment on top, prioritizing by actual impact, not just by what happened to trigger an automated warning. Every finding gets explained in plain language with a specific recommended action, because a report full of jargon nobody on your team can act on isn't actually useful, however thorough it looks.",
    "text": "\"An audit that lists forty problems with no prioritization isn't a plan, it's a to-do list nobody knows how to start. The value is in the ranking, not just the finding.\" Technical, On-Page & Backlink Review | Prioritized by Real Impact | Plain-Language Findings"
  },
  {
    "title": "Our SEO Audit Services",
    "text": "A proper audit covers several distinct layers, each revealing different kinds of problems."
  },
  {
    "title": "TECHNICAL AUDIT",
    "text": "The infrastructure check that catches issues invisible to a regular site visitor."
  },
  {
    "title": "What We Do",
    "text": "* Crawlability & Indexation Review: Checking whether search engines can actually find and index your important pages. * Site Speed & Core Web Vitals Analysis: Identifying exactly what's slowing pages down, with specific fixes attached. * Mobile Usability Check: Confirming the site performs correctly on the devices most visitors actually use. * Structured Data Review: Auditing existing schema markup for errors and identifying missed opportunities. A technical issue undermining rankings often produces no visible symptom a business owner would ever notice on their own."
  },
  {
    "title": "ON-PAGE AUDIT",
    "text": "A review of how well individual pages actually match what searchers are looking for."
  },
  {
    "title": "What We Do",
    "text": "* Content Quality & Intent Alignment Review: Assessing whether pages actually satisfy the search intent behind their target keywords. * Metadata & Heading Audit: Checking title tags, descriptions, and header structure against best practice and competitor benchmarks. * Internal Linking Analysis: Identifying orphan pages and missed opportunities to connect related content. * Content Gap Identification: Finding what's missing compared to pages currently outranking yours. Content that technically exists and content that actually competes for a keyword are sometimes two very different things."
  },
  {
    "title": "BACKLINK PROFILE AUDIT",
    "text": "An honest look at your site's authority, including the parts that might be working against you."
  },
  {
    "title": "What We Do",
    "text": "* Backlink Quality Assessment: Distinguishing genuinely valuable links from ones adding little or even carrying risk. * Toxic Link Identification: Flagging spammy or manipulative links that could put your site at risk of a penalty. * Competitor Backlink Comparison: Understanding where your authority stands relative to sites actually outranking you. * Anchor Text Distribution Review: Checking for unnatural patterns that could draw unwanted algorithmic attention. A backlink profile can look impressive by volume and still be quietly holding a site back if the quality isn't there."
  },
  {
    "title": "COMPETITIVE & MARKET ANALYSIS",
    "text": "Understanding your rankings isn't just about your own site, it's about what's actually beating you."
  },
  {
    "title": "What We Do",
    "text": "* Competitor Ranking Comparison: Identifying who's currently outranking you and why, specifically. * Keyword Gap Analysis: Finding terms competitors rank for that your site currently doesn't target at all. * SERP Feature Opportunity Review: Identifying where featured snippets, Map Pack, or rich results are realistically within reach. * Market Positioning Assessment: Understanding where genuine opportunity exists versus where competition is too entrenched to be worth pursuing right now. Auditing your own site in isolation misses half the picture, rankings are inherently relative to what else is competing for the same space."
  },
  {
    "title": "PRIORITIZED ACTION PLAN & REPORTING",
    "text": "Turning findings into something an actual team can execute against."
  },
  {
    "title": "What We Do",
    "text": "* Impact-Based Prioritization: Ranking every finding by likely effect on rankings and traffic, not just by severity in isolation. * Plain-Language Explanations: Every issue explained in terms a non-technical stakeholder can actually understand. * Effort vs. Impact Mapping: Flagging quick wins separately from larger structural projects, so resourcing decisions are easier. * Implementation Guidance: Specific enough recommendations that an internal team could execute them without further clarification. A completed audit naturally leads into ongoing work - see our [SEO Strategy & Consulting] page for how audit findings translate into an executed roadmap."
  },
  {
    "title": "Why Your Business Needs a Real SEO Audit",
    "text": "A raw data export isn't the same thing as knowing what to actually fix first."
  },
  {
    "title": "Not Every Flagged Issue Matters Equally",
    "text": "Automated tools flag everything without judgment, a proper audit separates what's genuinely costing you rankings from what's technically true but practically irrelevant. You Can't Fix What You Haven't Actually Diagnosed Guessing what's wrong wastes both time and budget on fixes that may not address the real problem at all."
  },
  {
    "title": "Competitors Are Part of the Picture",
    "text": "Understanding your own site's issues without understanding what's actually outranking you gives an incomplete, sometimes misleading, view of the opportunity. An Audit Is the Cheapest Way to Find Out What's Actually Wrong Committing to months of ongoing SEO work without first understanding the starting condition risks spending on the wrong priorities entirely. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Technical, content, and outreach specialists review findings together, so the audit reflects more than one narrow lens on the site. Judgment, Not Just Automation We don't hand over raw tool exports. Every finding is reviewed and prioritized by people who understand what actually moves rankings."
  },
  {
    "title": "Local & International Audit Experience",
    "text": "Based in Dhaka. Auditing sites for clients across Bangladesh, the US, UK, Australia, Canada, and UAE."
  },
  {
    "title": "No Pressure to Buy More Than You Need",
    "text": "The audit is valuable as a standalone deliverable, whether you execute the fixes with us or hand them to your own team."
  },
  {
    "title": "Technical Audit",
    "text": "A full crawlability, speed, and structured data review, with specific fixes attached to each finding."
  },
  {
    "title": "On-Page Audit",
    "text": "An honest assessment of whether your content actually satisfies the search intent it's targeting."
  },
  {
    "title": "Backlink Profile Audit",
    "text": "A clear picture of your authority, including any links that might be putting the site at risk."
  },
  {
    "title": "Competitive Analysis",
    "text": "Understanding of what's actually outranking you and why, not just an isolated view of your own site."
  },
  {
    "title": "Prioritized Action Plan",
    "text": "Every finding is ranked by real impact, with plain-language explanations and specific next steps."
  },
  {
    "title": "Standalone Deliverable",
    "text": "A report you can act on with your own team, or hand to us for execution, no pressure either way."
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
