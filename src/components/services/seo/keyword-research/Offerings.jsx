import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "SEED KEYWORD & TOPIC DISCOVERY",
    "description": "Finding the full range of terms and topics relevant to your business before narrowing anything down. What We Do The words your business uses internally and the words customers actually search are sometimes surprisingly different.",
    "bullets": [
      "Business & Industry Term Mapping: Identifying every core term and topic genuinely relevant to what you offer.",
      "Customer Language Research: Finding the actual words and phrases your customers use, which don't always match internal industry terminology.",
      "Question & Query Mining: Surfacing the specific questions people ask related to your products or services.",
      "Seasonal & Trending Term Identification: Catching time-sensitive search patterns worth planning content around."
    ]
  },
  {
    "title": "SEARCH VOLUME & DIFFICULTY ANALYSIS",
    "description": "Weighing genuine opportunity against what it would actually take to compete for a given term. What We Do A high-volume term dominated entirely by page-one authority sites isn't really an opportunity, whatever the volume number says.",
    "bullets": [
      "Search Volume Assessment: Understanding real demand behind each term, not just a rounded estimate from a single tool.",
      "Ranking Difficulty Evaluation: Assessing how competitive a term is relative to your site's current authority.",
      "Realistic Opportunity Scoring: Balancing volume against difficulty to flag terms genuinely worth pursuing right now.",
      "SERP Feature Analysis: Checking whether a term's search results include features Map Pack, featured snippets, that change the actual opportunity."
    ]
  },
  {
    "title": "SEARCH INTENT CLASSIFICATION",
    "description": "Understanding what someone actually wants when they search a specific term. What We Do Targeting a term without understanding its intent often means creating the wrong type of content entirely, however well it's written.",
    "bullets": [
      "Intent Categorization: Sorting terms by informational, commercial, transactional, or navigational intent.",
      "SERP Result Analysis: Reviewing what's currently ranking to understand what format and content type Google favors for each term.",
      "Buyer Journey Mapping: Connecting keywords to where a searcher likely sits in their decision process.",
      "Content Format Recommendations: Matching each keyword to the content type most likely to satisfy its actual intent."
    ]
  },
  {
    "title": "COMPETITOR KEYWORD ANALYSIS",
    "description": "Understanding what's already working for sites you're actually competing against. What We Do Competitors have often already done some of the discovery work for you, reviewing what's working for them is a shortcut worth taking.",
    "bullets": [
      "Competitor Ranking Discovery: Identifying the terms your direct competitors currently rank for.",
      "Keyword Gap Analysis: Finding terms competitors target that your site currently doesn't address at all.",
      "Content Format Benchmarking: Understanding what kind of content is winning for shared target terms.",
      "Opportunity Prioritization: Flagging gaps that represent genuine, realistic opportunity versus ones too competitive to pursue yet."
    ]
  },
  {
    "title": "KEYWORD MAPPING & DELIVERY",
    "description": "Turning research into something your team can actually act on. What We Do A completed keyword map naturally feeds into execution - see our On-Page SEO and SEO Strategy & Consulting pages for how research becomes published content.",
    "bullets": [
      "Topic Cluster Organization: Grouping related keywords around pillar and cluster page structures.",
      "Page-Type Assignment: Mapping each keyword group to the specific page blog, product, service best suited to target it.",
      "Priority Sequencing: Ordering the keyword map by realistic impact and difficulty, so execution has a clear starting point.",
      "Content Brief Foundations: Delivering keyword groups structured to feed directly into content planning."
    ]
  },
  {
    "title": "The Kinds of Intent Behind a Search",
    "description": "Not every keyword deserves the same kind of page, and mixing them up is one of the more common research mistakes. Informational Someone looking to learn something, \"how does X work,\" \"what is Y.\" Best served by educational content, not a sales pitch. Navigational Someone searching for a specific brand or site by name. Usually low-competition, but only relevant if it's actually your brand being searched. Commercial Investigation Someone comparing options before deciding, \"best X for Y,\" \"X vs Y.\" A strong fit for comparison content and buying guides. Transactional Someone ready to act, \"buy X,\" \"X near me,\" \"X pricing.\" The terms that most directly connect to leads and sales, and usually the most competitive. Getting a keyword's intent right determines whether the page built for it has any realistic chance of ranking, let alone converting.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Content built without proper research tends to target either the wrong terms or the right terms with the wrong content type.",
  "Volume Without Realistic Opportunity Wastes Effort",
  "Chasing high-volume terms your site has no realistic chance of ranking for burns content budget on pages that will likely sit on page three indefinitely.",
  "Customer Language Isn't Always Industry Language",
  "Content written around internal terminology can miss the actual words your customers are typing into search.",
  "Intent Mismatch Undermines Even Good Content",
  "A well-written page built for the wrong search intent underperforms regardless of quality, because it's answering a question nobody asked.",
  "Research Without Organization Is Just a List",
  "Raw keyword data without topic clustering and page-type assignment leaves your team guessing how to actually use it."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "High search volume and realistic ranking potential are two different things, and chasing the first without checking the second is how businesses end up with content that never sees page one. We balance volume against actual competition and your site's current authority, instead of building a strategy around terms a national brand with a decade of domain history already owns. The output isn't just a list, it's a prioritized map organized by topic, intent, and page type, ready to guide content decisions without requiring anyone on your team to interpret raw tool data themselves.",
    "text": "\"The keyword with the highest search volume isn't automatically the right one to target. The right one is the highest-volume term you can actually realistically rank for, and those aren't always the same word.\" Intent-Mapped, Not Just Volume-Sorted | Filtered by Realistic Ranking Potential | Delivered Ready to Use"
  },
  {
    "title": "Our Keyword Research Services",
    "text": "Good keyword research goes well beyond running a term through a volume tool."
  },
  {
    "title": "SEED KEYWORD & TOPIC DISCOVERY",
    "text": "Finding the full range of terms and topics relevant to your business before narrowing anything down."
  },
  {
    "title": "What We Do",
    "text": "* Business & Industry Term Mapping: Identifying every core term and topic genuinely relevant to what you offer. * Customer Language Research: Finding the actual words and phrases your customers use, which don't always match internal industry terminology. * Question & Query Mining: Surfacing the specific questions people ask related to your products or services. * Seasonal & Trending Term Identification: Catching time-sensitive search patterns worth planning content around. The words your business uses internally and the words customers actually search are sometimes surprisingly different."
  },
  {
    "title": "SEARCH VOLUME & DIFFICULTY ANALYSIS",
    "text": "Weighing genuine opportunity against what it would actually take to compete for a given term."
  },
  {
    "title": "What We Do",
    "text": "* Search Volume Assessment: Understanding real demand behind each term, not just a rounded estimate from a single tool. * Ranking Difficulty Evaluation: Assessing how competitive a term is relative to your site's current authority. * Realistic Opportunity Scoring: Balancing volume against difficulty to flag terms genuinely worth pursuing right now. * SERP Feature Analysis: Checking whether a term's search results include features Map Pack, featured snippets, that change the actual opportunity. A high-volume term dominated entirely by page-one authority sites isn't really an opportunity, whatever the volume number says."
  },
  {
    "title": "SEARCH INTENT CLASSIFICATION",
    "text": "Understanding what someone actually wants when they search a specific term."
  },
  {
    "title": "What We Do",
    "text": "* Intent Categorization: Sorting terms by informational, commercial, transactional, or navigational intent. * SERP Result Analysis: Reviewing what's currently ranking to understand what format and content type Google favors for each term. * Buyer Journey Mapping: Connecting keywords to where a searcher likely sits in their decision process. * Content Format Recommendations: Matching each keyword to the content type most likely to satisfy its actual intent. Targeting a term without understanding its intent often means creating the wrong type of content entirely, however well it's written."
  },
  {
    "title": "COMPETITOR KEYWORD ANALYSIS",
    "text": "Understanding what's already working for sites you're actually competing against."
  },
  {
    "title": "What We Do",
    "text": "* Competitor Ranking Discovery: Identifying the terms your direct competitors currently rank for. * Keyword Gap Analysis: Finding terms competitors target that your site currently doesn't address at all. * Content Format Benchmarking: Understanding what kind of content is winning for shared target terms. * Opportunity Prioritization: Flagging gaps that represent genuine, realistic opportunity versus ones too competitive to pursue yet. Competitors have often already done some of the discovery work for you, reviewing what's working for them is a shortcut worth taking."
  },
  {
    "title": "KEYWORD MAPPING & DELIVERY",
    "text": "Turning research into something your team can actually act on."
  },
  {
    "title": "What We Do",
    "text": "* Topic Cluster Organization: Grouping related keywords around pillar and cluster page structures. * Page-Type Assignment: Mapping each keyword group to the specific page blog, product, service best suited to target it. * Priority Sequencing: Ordering the keyword map by realistic impact and difficulty, so execution has a clear starting point. * Content Brief Foundations: Delivering keyword groups structured to feed directly into content planning. A completed keyword map naturally feeds into execution - see our On-Page SEO and SEO Strategy & Consulting pages for how research becomes published content."
  },
  {
    "title": "The Kinds of Intent Behind a Search",
    "text": "Not every keyword deserves the same kind of page, and mixing them up is one of the more common research mistakes."
  },
  {
    "title": "Informational",
    "text": "Someone looking to learn something, \"how does X work,\" \"what is Y.\" Best served by educational content, not a sales pitch."
  },
  {
    "title": "Navigational",
    "text": "Someone searching for a specific brand or site by name. Usually low-competition, but only relevant if it's actually your brand being searched."
  },
  {
    "title": "Commercial Investigation",
    "text": "Someone comparing options before deciding, \"best X for Y,\" \"X vs Y.\" A strong fit for comparison content and buying guides."
  },
  {
    "title": "Transactional",
    "text": "Someone ready to act, \"buy X,\" \"X near me,\" \"X pricing.\" The terms that most directly connect to leads and sales, and usually the most competitive. Getting a keyword's intent right determines whether the page built for it has any realistic chance of ranking, let alone converting. Why Your Business Needs Real Keyword Research Content built without proper research tends to target either the wrong terms or the right terms with the wrong content type. Volume Without Realistic Opportunity Wastes Effort Chasing high-volume terms your site has no realistic chance of ranking for burns content budget on pages that will likely sit on page three indefinitely. Customer Language Isn't Always Industry Language Content written around internal terminology can miss the actual words your customers are typing into search. Intent Mismatch Undermines Even Good Content A well-written page built for the wrong search intent underperforms regardless of quality, because it's answering a question nobody asked. Research Without Organization Is Just a List Raw keyword data without topic clustering and page-type assignment leaves your team guessing how to actually use it. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Research, content, and technical specialists review keyword priorities together, so the final map reflects more than just tool output."
  },
  {
    "title": "Realistic Over Aspirational",
    "text": "We don't hand over a wish list of high-volume terms your site has no near-term shot at. Every recommendation accounts for your actual competitive position."
  },
  {
    "title": "Local & International Research Experience",
    "text": "Based in Dhaka. Researching for clients across Bangladesh, the US, UK, Australia, Canada, and UAE."
  },
  {
    "title": "Delivered Ready to Execute",
    "text": "The output is a structured map your team can act on directly, not raw data requiring further interpretation."
  },
  {
    "title": "Seed Keyword & Topic Discovery",
    "text": "A comprehensive starting list built around real customer language, not just internal terminology."
  },
  {
    "title": "Search Volume & Difficulty Analysis",
    "text": "Every term weighed against your site's actual ability to compete for it."
  },
  {
    "title": "Search Intent Classification",
    "text": "Keywords sorted by what searchers actually want, matched to the right content format."
  },
  {
    "title": "Competitor Keyword Analysis",
    "text": "Genuine gaps identified by reviewing what's already working for sites you're competing against."
  },
  {
    "title": "Keyword Mapping & Delivery",
    "text": "A structured, prioritized map organized by topic cluster and page type."
  },
  {
    "title": "Ready-to-Execute Output",
    "text": "Research delivered in a form your team can act on immediately, not raw data to decode."
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
