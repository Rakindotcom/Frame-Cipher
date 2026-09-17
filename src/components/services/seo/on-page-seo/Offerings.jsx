import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "CONTENT OPTIMIZATION",
    "description": "The words on the page still matter more than any other single factor in on-page work. What We Do A page that technically ranks but doesn't satisfy the searcher usually gets replaced by one that does, sooner or later.",
    "bullets": [
      "Search Intent Analysis: Understanding what a searcher actually wants before writing or editing a word.",
      "Content Depth & Coverage Review: Making sure a page thoroughly answers the query, not just mentions the keyword.",
      "Readability & Structure Improvements: Formatting content so both users and search engines can parse it easily.",
      "Content Gap Identification: Finding what competitors' top-ranking pages cover that yours currently doesn't."
    ]
  },
  {
    "title": "METADATA & HEADING OPTIMIZATION",
    "description": "The small elements that shape both rankings and whether someone actually clicks your result. What We Do A perfectly optimized page with a forgettable title tag still loses clicks to a worse page with a better one.",
    "bullets": [
      "Title Tag Optimization: Written to be both keyword-relevant and genuinely click-worthy in search results.",
      "Meta Description Writing: Compelling summaries that earn the click, not just technically present metadata.",
      "Header Tag Structure (H1-H6): Logical hierarchy that helps search engines understand page structure and topic focus.",
      "Image Alt Text Optimization: Descriptive, keyword-relevant alt text that also serves genuine accessibility purposes."
    ]
  },
  {
    "title": "INTERNAL LINKING & SITE STRUCTURE",
    "description": "How pages connect to each other affects both rankings and how easily users navigate your site. What We Do Internal linking is one of the few ranking factors entirely within your control, and one of the most commonly neglected.",
    "bullets": [
      "Strategic Internal Link Placement: Connecting related content in ways that pass authority and guide users naturally.",
      "Anchor Text Optimization: Descriptive, varied anchor text instead of repetitive, over-optimized phrasing.",
      "Topic Cluster Structuring: Organizing related content around pillar and cluster pages that reinforce each other.",
      "Orphan Page Resolution: Making sure every important page has internal links pointing to it."
    ]
  },
  {
    "title": "URL & ON-PAGE TECHNICAL ELEMENTS",
    "description": "The structural details that support everything else on the page. What We Do Small technical details on an individual page compound with everything else to determine how competitively it ranks.",
    "bullets": [
      "URL Structure Optimization: Clean, descriptive URLs that reflect content and hierarchy.",
      "Schema Markup for Content: Article, FAQ, or product schema matched to what the page actually contains.",
      "Featured Snippet Optimization: Structuring content to compete for position zero where the opportunity exists.",
      "Mobile Content Formatting: Confirming content displays and reads well on the devices most visitors actually use."
    ]
  },
  {
    "title": "ONGOING CONTENT & ON-PAGE MAINTENANCE",
    "description": "Pages that ranked well a year ago don't necessarily still do, without attention. What We Do Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing on-page work fits into a broader retainer.",
    "bullets": [
      "Content Freshness Updates: Keeping information, statistics, and recommendations current as they age.",
      "Ranking Performance Review: Tracking which pages are gaining or losing ground over time.",
      "Competitor Content Monitoring: Watching what's changing in top-ranking competitor pages.",
      "Ongoing Optimization Recommendations: Adjustments based on real performance data, not a set-and-forget approach."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "The gap between a page that ranks and a page that ranks and converts is almost entirely on-page work.",
  "Intent Mismatch Is an Invisible Ranking Ceiling",
  "A page can hit every technical checkbox and still underperform if it doesn't actually satisfy what the searcher wanted.",
  "Metadata Determines Whether Rankings Even Matter",
  "A page ranking on page one with a weak title tag and description still loses clicks to a lower-ranking page with a more compelling one.",
  "Internal Linking Compounds Over Time",
  "Every new piece of content is an opportunity to reinforce existing pages - skip it consistently, and you're leaving ranking authority on the table.",
  "Content Ages Whether You Update It or Not",
  "A page that ranked well at launch can quietly lose ground as competitors' content gets refreshed and yours doesn't."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Ranking for a keyword and satisfying the intent behind it are two different problems, and most on-page work only solves the first one. We start by figuring out what someone searching a term actually wants, a quick answer, a comparison, a product to buy, then structure the page around delivering that, with the technical optimization layered on top rather than treated as the whole job. A page stuffed with keywords but misaligned with intent underperforms even when the keyword density looks perfect on paper.",
    "text": "\"Optimizing a page for a keyword and optimizing it for the person searching that keyword aren't automatically the same task. Get the second one right, and the first one usually follows.\" Intent-Matched Content | Technical On-Page Fundamentals | Built to Rank and Convert"
  },
  {
    "title": "Our On-Page SEO Services",
    "text": "Getting a single page to rank well touches more elements than most people expect."
  },
  {
    "title": "CONTENT OPTIMIZATION",
    "text": "The words on the page still matter more than any other single factor in on-page work."
  },
  {
    "title": "What We Do",
    "text": "* Search Intent Analysis: Understanding what a searcher actually wants before writing or editing a word. * Content Depth & Coverage Review: Making sure a page thoroughly answers the query, not just mentions the keyword. * Readability & Structure Improvements: Formatting content so both users and search engines can parse it easily. * Content Gap Identification: Finding what competitors' top-ranking pages cover that yours currently doesn't. A page that technically ranks but doesn't satisfy the searcher usually gets replaced by one that does, sooner or later."
  },
  {
    "title": "METADATA & HEADING OPTIMIZATION",
    "text": "The small elements that shape both rankings and whether someone actually clicks your result."
  },
  {
    "title": "What We Do",
    "text": "* Title Tag Optimization: Written to be both keyword-relevant and genuinely click-worthy in search results. * Meta Description Writing: Compelling summaries that earn the click, not just technically present metadata. * Header Tag Structure (H1-H6): Logical hierarchy that helps search engines understand page structure and topic focus. * Image Alt Text Optimization: Descriptive, keyword-relevant alt text that also serves genuine accessibility purposes. A perfectly optimized page with a forgettable title tag still loses clicks to a worse page with a better one."
  },
  {
    "title": "INTERNAL LINKING & SITE STRUCTURE",
    "text": "How pages connect to each other affects both rankings and how easily users navigate your site."
  },
  {
    "title": "What We Do",
    "text": "* Strategic Internal Link Placement: Connecting related content in ways that pass authority and guide users naturally. * Anchor Text Optimization: Descriptive, varied anchor text instead of repetitive, over-optimized phrasing. * Topic Cluster Structuring: Organizing related content around pillar and cluster pages that reinforce each other. * Orphan Page Resolution: Making sure every important page has internal links pointing to it. Internal linking is one of the few ranking factors entirely within your control, and one of the most commonly neglected."
  },
  {
    "title": "URL & ON-PAGE TECHNICAL ELEMENTS",
    "text": "The structural details that support everything else on the page."
  },
  {
    "title": "What We Do",
    "text": "* URL Structure Optimization: Clean, descriptive URLs that reflect content and hierarchy. * Schema Markup for Content: Article, FAQ, or product schema matched to what the page actually contains. * Featured Snippet Optimization: Structuring content to compete for position zero where the opportunity exists. * Mobile Content Formatting: Confirming content displays and reads well on the devices most visitors actually use. Small technical details on an individual page compound with everything else to determine how competitively it ranks."
  },
  {
    "title": "ONGOING CONTENT & ON-PAGE MAINTENANCE",
    "text": "Pages that ranked well a year ago don't necessarily still do, without attention."
  },
  {
    "title": "What We Do",
    "text": "* Content Freshness Updates: Keeping information, statistics, and recommendations current as they age. * Ranking Performance Review: Tracking which pages are gaining or losing ground over time. * Competitor Content Monitoring: Watching what's changing in top-ranking competitor pages. * Ongoing Optimization Recommendations: Adjustments based on real performance data, not a set-and-forget approach. Available as a separate ongoing service - see our [SEO Strategy & Consulting] page for how ongoing on-page work fits into a broader retainer. Why Your Business Needs Real On-Page SEO Work The gap between a page that ranks and a page that ranks and converts is almost entirely on-page work. Intent Mismatch Is an Invisible Ranking Ceiling A page can hit every technical checkbox and still underperform if it doesn't actually satisfy what the searcher wanted. Metadata Determines Whether Rankings Even Matter A page ranking on page one with a weak title tag and description still loses clicks to a lower-ranking page with a more compelling one."
  },
  {
    "title": "Internal Linking Compounds Over Time",
    "text": "Every new piece of content is an opportunity to reinforce existing pages - skip it consistently, and you're leaving ranking authority on the table."
  },
  {
    "title": "Content Ages Whether You Update It or Not",
    "text": "A page that ranked well at launch can quietly lose ground as competitors' content gets refreshed and yours doesn't. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Content, technical, and strategy work together, so on-page recommendations are grounded in both search intent and what's technically achievable on your platform. Intent First, Keywords Second We don't optimize around a keyword in isolation. We start with what the searcher actually wants, then build the page to satisfy that."
  },
  {
    "title": "Local & International Content Experience",
    "text": "Based in Dhaka. Working with clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every content and structural change goes through your review before it's published."
  },
  {
    "title": "Content Optimization",
    "text": "Pages structured and written around genuine search intent, not keyword density alone."
  },
  {
    "title": "Metadata & Heading Optimization",
    "text": "Title tags, descriptions, and header structure built to rank and to actually earn the click."
  },
  {
    "title": "Internal Linking Strategy",
    "text": "Site structure organized to pass authority and guide users naturally between related pages."
  },
  {
    "title": "Technical On-Page Elements",
    "text": "URLs, schema markup, and mobile formatting handled as standard, not an afterthought."
  },
  {
    "title": "Ongoing Content Review",
    "text": "Regular checks to catch pages losing ground before the decline becomes significant."
  },
  {
    "title": "Transparent Process",
    "text": "Every change reviewed and approved by you before it goes live."
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
