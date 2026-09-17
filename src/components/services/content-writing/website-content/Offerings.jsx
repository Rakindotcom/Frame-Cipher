import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "HOMEPAGE COPYWRITING",
    "description": "The page carrying the most weight and the least time to make an impression. What We Do A homepage trying to say everything at once usually ends up communicating almost nothing clearly.",
    "bullets": [
      "Value Proposition Development: Clarifying what you actually offer and why it matters, stated plainly rather than buried in clever phrasing.",
      "Above-the-Fold Copy: The first few lines a visitor sees, written to answer \"does this business do what I need\" as fast as possible.",
      "Navigation & Flow Copy: Structuring how sections lead a visitor logically toward understanding and action, not a random assortment of blocks.",
      "Trust Signal Integration: Weaving credibility elements client logos, results, credentials into the copy naturally, not as a bolted-on afterthought."
    ]
  },
  {
    "title": "ABOUT PAGE WRITING",
    "description": "Often visited right before a decision gets made, and frequently underwritten as a result. What We Do A visitor reading your About page is often close to a decision: vague, generic copyright at that moment is a real missed opportunity.",
    "bullets": [
      "Brand Story Development: Telling a genuine, specific story about the business, not generic industry boilerplate that could describe any competitor.",
      "Credibility & Experience Framing: Presenting real experience and expertise in a way that builds trust without reading as boastful.",
      "Team & Founder Content: Writing that introduces the people behind the business where that adds genuine credibility.",
      "Values & Differentiation: Articulating what genuinely makes this business different, not generic claims every competitor also makes."
    ]
  },
  {
    "title": "SERVICE PAGE WRITING",
    "description": "Where a visitor evaluates whether a specific service actually solves their specific problem. What We Do A confused visitor on a service page doesn't ask for clarification they usually just leave.",
    "bullets": [
      "Service Explanation & Clarity: Explaining what's included, what the process looks like, and what outcome to expect, in plain language.",
      "Benefit-Focused Structure: Framing service details around what the customer actually gets, not just a feature list.",
      "Objection Handling: Addressing the hesitations a prospect is likely having, directly within the copy itself.",
      "Clear Calls to Action: Guiding a visitor toward the specific next step contact, quote, booking without ambiguity."
    ]
  },
  {
    "title": "BRAND VOICE & MESSAGING CONSISTENCY",
    "description": "Making sure every page sounds like it belongs to the same business. What We Do Inconsistent voice across pages quietly undermines the sense that a visitor is dealing with one coherent, trustworthy business.",
    "bullets": [
      "Voice & Tone Guidelines: Establishing a consistent voice formal, conversational, technical appropriate to your actual brand and audience.",
      "Messaging Framework Development: A consistent core message that carries across every page, rather than each page inventing its own pitch.",
      "Terminology Consistency: Using the same language for services, products, and concepts throughout, avoiding confusing internal variation.",
      "Cross-Page Review: Checking that pages read as a coherent whole, not disconnected pieces written in isolation from each other."
    ]
  },
  {
    "title": "REWRITES & CONTENT REFRESH",
    "description": "For sites where the copy hasn't kept pace with how the business has actually evolved. What We Do Website copy performs best alongside a design and structure built to support it - see our UI/UX Design page for how the two connect.",
    "bullets": [
      "Existing Page Audits: Reviewing current copy for clarity gaps, outdated information, and missed opportunities.",
      "Full Page Rewrites: Rebuilding copy from the ground up where the existing content isn't salvageable.",
      "Targeted Copy Edits: Sharper, more focused revisions where the existing structure is sound but the execution needs work.",
      "Update Alignment: Making sure copy reflects current offerings, pricing structure, and positioning as the business changes."
    ]
  },
  {
    "title": "Why Clarity Beats Cleverness on Core Pages",
    "description": "Website copy has a different job than most other kinds of writing, and it's worth being direct about what that actually means. The Instinct to Be Clever Businesses often want their website to sound impressive, distinctive, unlike anyone else's which is understandable, but frequently comes at the cost of a visitor actually understanding what's on offer. What Actually Happens on a Real Page A visitor scanning a homepage isn't reading closely enough to appreciate a clever turn of phrase if it costs them a few extra seconds of confusion about what you do. The Right Order of Priorities Clear first, distinctive second a page that's instantly understandable and reasonably distinctive outperforms one that's brilliantly clever and genuinely confusing. Where Personality Still Belongs None of this means website copy has to be boring voice and personality matter, they just can't come at the expense of a visitor actually understanding the offer within the first few seconds.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "The pages carrying the most first-impression weight are often the ones written with the least intention.",
  "First Impressions Happen Fast, and Copy Drives Them",
  "A visitor forms an impression of your business within seconds, largely based on whether the copy is clear and the offer is obvious.",
  "Generic Copy Fails to Differentiate",
  "Vague claims that any competitor could also make \"quality service,\" \"customer-focused\", do little to actually convince anyone of anything.",
  "Inconsistent Voice Undermines Trust Quietly",
  "A homepage that sounds professional and a service page that sounds casual, with no clear reason for the difference, subtly signals a business that isn't fully put together.",
  "Copy Written Once Ages Along With the Business",
  "Content written at launch and never revisited often stops accurately reflecting what the business actually offers today."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "The pages most businesses treat as an afterthought written once at launch and never revisited, are usually the ones doing the most first-impression work on the entire site. We write homepage, about, and service page content with that reality in mind: clarity first, because confusion loses a visitor faster than almost anything else, then structure that actually guides someone toward understanding what you offer and what to do next. A beautifully designed page with vague, generic copy still leaves a visitor unclear on what you actually do, and unclear visitors rarely become customers.",
    "text": "\"Nobody reads a homepage the way they read an article. They scan it, half-formed, looking for the answer to one question: does this business do what I need. Copy that doesn't answer that fast loses the visitor before it gets a real chance.\" Clarity-First Copywriting | Built to Explain Fast | Structured to Guide the Next Step"
  },
  {
    "title": "Our Website Content Writing Services",
    "text": "Core website pages each carry a different job, and each one needs writing built for that specific job."
  },
  {
    "title": "HOMEPAGE COPYWRITING",
    "text": "The page carrying the most weight and the least time to make an impression."
  },
  {
    "title": "What We Do",
    "text": "* Value Proposition Development: Clarifying what you actually offer and why it matters, stated plainly rather than buried in clever phrasing. * Above-the-Fold Copy: The first few lines a visitor sees, written to answer \"does this business do what I need\" as fast as possible. * Navigation & Flow Copy: Structuring how sections lead a visitor logically toward understanding and action, not a random assortment of blocks. * Trust Signal Integration: Weaving credibility elements client logos, results, credentials into the copy naturally, not as a bolted-on afterthought. A homepage trying to say everything at once usually ends up communicating almost nothing clearly."
  },
  {
    "title": "ABOUT PAGE WRITING",
    "text": "Often visited right before a decision gets made, and frequently underwritten as a result."
  },
  {
    "title": "What We Do",
    "text": "* Brand Story Development: Telling a genuine, specific story about the business, not generic industry boilerplate that could describe any competitor. * Credibility & Experience Framing: Presenting real experience and expertise in a way that builds trust without reading as boastful. * Team & Founder Content: Writing that introduces the people behind the business where that adds genuine credibility. * Values & Differentiation: Articulating what genuinely makes this business different, not generic claims every competitor also makes. A visitor reading your About page is often close to a decision: vague, generic copyright at that moment is a real missed opportunity."
  },
  {
    "title": "SERVICE PAGE WRITING",
    "text": "Where a visitor evaluates whether a specific service actually solves their specific problem."
  },
  {
    "title": "What We Do",
    "text": "* Service Explanation & Clarity: Explaining what's included, what the process looks like, and what outcome to expect, in plain language. * Benefit-Focused Structure: Framing service details around what the customer actually gets, not just a feature list. * Objection Handling: Addressing the hesitations a prospect is likely having, directly within the copy itself. * Clear Calls to Action: Guiding a visitor toward the specific next step contact, quote, booking without ambiguity. A confused visitor on a service page doesn't ask for clarification they usually just leave."
  },
  {
    "title": "BRAND VOICE & MESSAGING CONSISTENCY",
    "text": "Making sure every page sounds like it belongs to the same business."
  },
  {
    "title": "What We Do",
    "text": "* Voice & Tone Guidelines: Establishing a consistent voice formal, conversational, technical appropriate to your actual brand and audience. * Messaging Framework Development: A consistent core message that carries across every page, rather than each page inventing its own pitch. * Terminology Consistency: Using the same language for services, products, and concepts throughout, avoiding confusing internal variation. * Cross-Page Review: Checking that pages read as a coherent whole, not disconnected pieces written in isolation from each other. Inconsistent voice across pages quietly undermines the sense that a visitor is dealing with one coherent, trustworthy business."
  },
  {
    "title": "REWRITES & CONTENT REFRESH",
    "text": "For sites where the copy hasn't kept pace with how the business has actually evolved."
  },
  {
    "title": "What We Do",
    "text": "* Existing Page Audits: Reviewing current copy for clarity gaps, outdated information, and missed opportunities. * Full Page Rewrites: Rebuilding copy from the ground up where the existing content isn't salvageable. * Targeted Copy Edits: Sharper, more focused revisions where the existing structure is sound but the execution needs work. * Update Alignment: Making sure copy reflects current offerings, pricing structure, and positioning as the business changes. Website copy performs best alongside a design and structure built to support it - see our UI/UX Design page for how the two connect. Why Clarity Beats Cleverness on Core Pages Website copy has a different job than most other kinds of writing, and it's worth being direct about what that actually means."
  },
  {
    "title": "The Instinct to Be Clever",
    "text": "Businesses often want their website to sound impressive, distinctive, unlike anyone else's which is understandable, but frequently comes at the cost of a visitor actually understanding what's on offer."
  },
  {
    "title": "What Actually Happens on a Real Page",
    "text": "A visitor scanning a homepage isn't reading closely enough to appreciate a clever turn of phrase if it costs them a few extra seconds of confusion about what you do."
  },
  {
    "title": "The Right Order of Priorities",
    "text": "Clear first, distinctive second a page that's instantly understandable and reasonably distinctive outperforms one that's brilliantly clever and genuinely confusing."
  },
  {
    "title": "Where Personality Still Belongs",
    "text": "None of this means website copy has to be boring voice and personality matter, they just can't come at the expense of a visitor actually understanding the offer within the first few seconds. Why Your Business Needs Real Website Content Writing The pages carrying the most first-impression weight are often the ones written with the least intention. First Impressions Happen Fast, and Copy Drives Them A visitor forms an impression of your business within seconds, largely based on whether the copy is clear and the offer is obvious."
  },
  {
    "title": "Generic Copy Fails to Differentiate",
    "text": "Vague claims that any competitor could also make \"quality service,\" \"customer-focused\", do little to actually convince anyone of anything. Inconsistent Voice Undermines Trust Quietly A homepage that sounds professional and a service page that sounds casual, with no clear reason for the difference, subtly signals a business that isn't fully put together. Copy Written Once Ages Along With the Business Content written at launch and never revisited often stops accurately reflecting what the business actually offers today. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Copy, design, and development coordinated together, so website content isn't written in isolation from how it'll actually be laid out."
  },
  {
    "title": "Clarity Is the Non-Negotiable",
    "text": "Cleverness never comes at the expense of a visitor understanding your offer within the first few seconds. Local & International Website Content Experience Based in Dhaka. Writing website content for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. We Review Pages as a Whole, Not in Isolation Cross-page consistency gets checked deliberately, not left to chance across separately written pages."
  },
  {
    "title": "Homepage Copywriting",
    "text": "Above-the-fold copy built to answer the visitor's core question fast, with trust signals woven in naturally."
  },
  {
    "title": "About Page Writing",
    "text": "A genuine, specific brand story that builds credibility without reading as boastful."
  },
  {
    "title": "Service Page Writing",
    "text": "Clear explanations, benefit-focused structure, and objection handling built into the copy itself."
  },
  {
    "title": "Brand Voice Consistency",
    "text": "A coherent voice and messaging framework carried across every page on the site."
  },
  {
    "title": "Rewrites & Refresh",
    "text": "Existing pages audited and rebuilt where copy hasn't kept pace with the business."
  },
  {
    "title": "Transparent Revision Process",
    "text": "Every draft is reviewed against your feedback before being finalized."
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
