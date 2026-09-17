import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "KEYWORD & TOPIC RESEARCH",
    "description": "Every piece starts with understanding what's actually worth writing about, not a topic pulled from thin air. What We Do Writing a technically excellent piece for the wrong topic wastes the writing quality entirely.",
    "bullets": [
      "Keyword & Search Intent Research: Identifying terms your actual customers search, and understanding what they genuinely want when they search them.",
      "Competitor Content Analysis: Reviewing what's currently ranking, to understand what a genuinely competitive piece needs to cover.",
      "Content Gap Identification: Finding topics your site hasn't addressed yet that represent real ranking opportunities.",
      "Realistic Opportunity Assessment: Prioritizing topics your site can genuinely compete for, not just the highest-volume terms available."
    ]
  },
  {
    "title": "CONTENT STRUCTURE & SEO INTEGRATION",
    "description": "Getting a piece structured correctly matters as much as the words themselves. What We Do A well-researched topic written without proper structure often underperforms a less ambitious topic that's genuinely well organized.",
    "bullets": [
      "Heading Structure Planning: Organizing content around clear, logical headings that help both readers scan and search engines understand topic coverage.",
      "On-Page SEO Integration: Title tags, meta descriptions, and keyword placement handled naturally, without compromising readability.",
      "Internal Linking Strategy: Connecting new content to relevant existing pages, supporting both SEO and genuine reader navigation.",
      "Featured Snippet Formatting: Structuring direct-answer sections where a piece has a realistic shot at snippet placement."
    ]
  },
  {
    "title": "WRITING & VOICE DEVELOPMENT",
    "description": "The actual writing is where a technically sound piece either earns real engagement or doesn't. What We Do Content that reads like ten other articles stitched together rarely earns the engagement signals that help it actually rank and stay ranked.",
    "bullets": [
      "Genuine Expertise Integration: Writing that reflects real knowledge of the topic, not surface-level information restated from other articles.",
      "Brand Voice Consistency: Matching your established tone, whether that's authoritative, conversational, or somewhere specific in between.",
      "Scannable Formatting: Short paragraphs, clear subheadings, and formatting built for how people actually read on screens, not dense academic blocks.",
      "Original Angle Development: Finding a genuine point of view or fresh angle, rather than restating what every other ranking article already says."
    ]
  },
  {
    "title": "CONTENT REFRESH & UPDATING",
    "description": "Published content isn't finished the day it goes live it ages, and ranking pieces need attention to stay ranking. What We Do A piece that ranked well two years ago and hasn't been touched since is often quietly losing ground to competitors who kept updating theirs.",
    "bullets": [
      "Existing Content Audits: Reviewing older content for what's outdated, thin, or losing ground to competitor updates.",
      "Statistical & Fact Updates: Keeping data, examples, and references current as they age past relevance.",
      "Ranking Performance Review: Identifying which pieces have dropped and what a refresh could realistically recover.",
      "Content Expansion: Adding depth to thin pieces that are ranking despite, not because of, their current coverage."
    ]
  },
  {
    "title": "PUBLISHING & PERFORMANCE TRACKING",
    "description": "Delivered content should be ready to actually go live, and its performance worth tracking afterward. What We Do Blog content performs best as part of a broader keyword and technical foundation - see our Keyword Research and Technical SEO pages for how those connect.",
    "bullets": [
      "Publish-Ready Formatting: Content delivered structured and formatted correctly for your specific CMS or platform.",
      "Image & Alt Text Guidance: Recommendations for supporting visuals and properly optimized alt text.",
      "Ranking & Traffic Monitoring: Tracking how published content actually performs against the keywords it targeted.",
      "Iterative Improvement: Adjusting future content based on what's genuinely working, not repeating a formula regardless of results."
    ]
  },
  {
    "title": "Ranking and Reading Are the Same Job Now",
    "description": "This used to be a genuine tradeoff. It largely isn't anymore, and that shift is worth understanding. The Old Approach Write primarily for the algorithm keyword density, length targets, technical checkboxes and treat reader experience as a secondary concern. Why That Stopped Working Search engines increasingly weigh genuine user engagement time on page, bounce rate, whether people actually finish reading, as a real ranking signal, not just an afterthought to keyword matching. What That Means for How Content Gets Written A piece optimized only for the algorithm, without genuine reader value, increasingly underperforms a piece that's honestly good to read and reasonably well-structured for search. The Practical Result Writing for the reader first, with proper research and structure layered in, tends to outperform writing for the algorithm first with reader experience treated as optional polish.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Content that fails at either ranking or engagement is effort spent without the return it should have produced.",
  "Thin Content Rarely Ranks and Rarely Converts",
  "A short, generic piece written to hit a quota usually fails at both jobs - it doesn't rank competitively, and it doesn't hold a reader's attention on the rare occasion it does.",
  "Genuine Expertise Is Increasingly What Separates Content",
  "With so much content now easy to produce quickly, pieces that demonstrate real, specific knowledge stand out more than they used to, both to readers and increasingly to search engines evaluating quality.",
  "Old Content Ages Whether You Update It or Not",
  "A blog post that hasn't been touched in years is competing against fresher, more current content from competitors who kept theirs updated.",
  "One Good Piece Beats Several Mediocre Ones",
  "A single well-researched, well-written piece that genuinely ranks and converts often outperforms a much larger volume of thin, forgettable content."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Most underperforming blog content fails at one of two things, it's optimized for a keyword nobody was ever going to click on, or it ranks reasonably well and still loses the reader within the first paragraph because it never actually answers what they came for. We start with genuine keyword research to solve the first problem, then write with the reader's actual question in mind to solve the second, since a piece of content that only solves one of these ends up half-working at best. Search engines increasingly reward content that people genuinely engage with, which means writing for the reader and writing for the algorithm have converged more than most content strategies have caught up to.",
    "text": "\"A blog post ranking for a keyword nobody clicks, or getting clicks and immediately losing the reader, both are the same failure wearing a different costume. The content didn't actually do its job either way.\" Keyword Research Built In | Written to Hold Attention, Not Just Earn a Click | Structured for How People Actually Read Online"
  },
  {
    "title": "Our SEO & Blog Writing Services",
    "text": "Good SEO content requires research, structure, and genuine writing quality working together, not any one of them alone."
  },
  {
    "title": "KEYWORD & TOPIC RESEARCH",
    "text": "Every piece starts with understanding what's actually worth writing about, not a topic pulled from thin air."
  },
  {
    "title": "What We Do",
    "text": "* Keyword & Search Intent Research: Identifying terms your actual customers search, and understanding what they genuinely want when they search them. * Competitor Content Analysis: Reviewing what's currently ranking, to understand what a genuinely competitive piece needs to cover. * Content Gap Identification: Finding topics your site hasn't addressed yet that represent real ranking opportunities. * Realistic Opportunity Assessment: Prioritizing topics your site can genuinely compete for, not just the highest-volume terms available. Writing a technically excellent piece for the wrong topic wastes the writing quality entirely."
  },
  {
    "title": "CONTENT STRUCTURE & SEO INTEGRATION",
    "text": "Getting a piece structured correctly matters as much as the words themselves."
  },
  {
    "title": "What We Do",
    "text": "* Heading Structure Planning: Organizing content around clear, logical headings that help both readers scan and search engines understand topic coverage. * On-Page SEO Integration: Title tags, meta descriptions, and keyword placement handled naturally, without compromising readability. * Internal Linking Strategy: Connecting new content to relevant existing pages, supporting both SEO and genuine reader navigation. * Featured Snippet Formatting: Structuring direct-answer sections where a piece has a realistic shot at snippet placement. A well-researched topic written without proper structure often underperforms a less ambitious topic that's genuinely well organized."
  },
  {
    "title": "WRITING & VOICE DEVELOPMENT",
    "text": "The actual writing is where a technically sound piece either earns real engagement or doesn't."
  },
  {
    "title": "What We Do",
    "text": "* Genuine Expertise Integration: Writing that reflects real knowledge of the topic, not surface-level information restated from other articles. * Brand Voice Consistency: Matching your established tone, whether that's authoritative, conversational, or somewhere specific in between. * Scannable Formatting: Short paragraphs, clear subheadings, and formatting built for how people actually read on screens, not dense academic blocks. * Original Angle Development: Finding a genuine point of view or fresh angle, rather than restating what every other ranking article already says. Content that reads like ten other articles stitched together rarely earns the engagement signals that help it actually rank and stay ranked."
  },
  {
    "title": "CONTENT REFRESH & UPDATING",
    "text": "Published content isn't finished the day it goes live it ages, and ranking pieces need attention to stay ranking."
  },
  {
    "title": "What We Do",
    "text": "* Existing Content Audits: Reviewing older content for what's outdated, thin, or losing ground to competitor updates. * Statistical & Fact Updates: Keeping data, examples, and references current as they age past relevance. * Ranking Performance Review: Identifying which pieces have dropped and what a refresh could realistically recover. * Content Expansion: Adding depth to thin pieces that are ranking despite, not because of, their current coverage. A piece that ranked well two years ago and hasn't been touched since is often quietly losing ground to competitors who kept updating theirs."
  },
  {
    "title": "PUBLISHING & PERFORMANCE TRACKING",
    "text": "Delivered content should be ready to actually go live, and its performance worth tracking afterward."
  },
  {
    "title": "What We Do",
    "text": "* Publish-Ready Formatting: Content delivered structured and formatted correctly for your specific CMS or platform. * Image & Alt Text Guidance: Recommendations for supporting visuals and properly optimized alt text. * Ranking & Traffic Monitoring: Tracking how published content actually performs against the keywords it targeted. * Iterative Improvement: Adjusting future content based on what's genuinely working, not repeating a formula regardless of results. Blog content performs best as part of a broader keyword and technical foundation - see our Keyword Research and Technical SEO pages for how those connect."
  },
  {
    "title": "Ranking and Reading Are the Same Job Now",
    "text": "This used to be a genuine tradeoff. It largely isn't anymore, and that shift is worth understanding."
  },
  {
    "title": "The Old Approach",
    "text": "Write primarily for the algorithm keyword density, length targets, technical checkboxes and treat reader experience as a secondary concern."
  },
  {
    "title": "Why That Stopped Working",
    "text": "Search engines increasingly weigh genuine user engagement time on page, bounce rate, whether people actually finish reading, as a real ranking signal, not just an afterthought to keyword matching. What That Means for How Content Gets Written A piece optimized only for the algorithm, without genuine reader value, increasingly underperforms a piece that's honestly good to read and reasonably well-structured for search."
  },
  {
    "title": "The Practical Result",
    "text": "Writing for the reader first, with proper research and structure layered in, tends to outperform writing for the algorithm first with reader experience treated as optional polish. Why Your Business Needs Real SEO & Blog Writing Content that fails at either ranking or engagement is effort spent without the return it should have produced. Thin Content Rarely Ranks and Rarely Converts A short, generic piece written to hit a quota usually fails at both jobs - it doesn't rank competitively, and it doesn't hold a reader's attention on the rare occasion it does. Genuine Expertise Is Increasingly What Separates Content With so much content now easy to produce quickly, pieces that demonstrate real, specific knowledge stand out more than they used to, both to readers and increasingly to search engines evaluating quality. Old Content Ages Whether You Update It or Not A blog post that hasn't been touched in years is competing against fresher, more current content from competitors who kept theirs updated. One Good Piece Beats Several Mediocre Ones A single well-researched, well-written piece that genuinely ranks and converts often outperforms a much larger volume of thin, forgettable content. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Writing, SEO strategy, and technical implementation coordinated together, so content isn't written blind to what actually needs to rank."
  },
  {
    "title": "We Write for the Reader First",
    "text": "Research and structure support the writing, rather than the writing being squeezed to fit a keyword density formula."
  },
  {
    "title": "Local & International Content Experience",
    "text": "Based in Dhaka. Writing SEO content for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Content Refresh Is Part of the Conversation We don't treat publishing as the finish line, aging content is flagged and addressed, not left to quietly decline."
  },
  {
    "title": "Keyword & Topic Research",
    "text": "Content built around terms your actual customers search, filtered by realistic ranking potential."
  },
  {
    "title": "Structure & SEO Integration",
    "text": "Headings, metadata, and internal linking handled correctly without compromising readability."
  },
  {
    "title": "Genuinely Well-Written Content",
    "text": "Writing that reflects real expertise and a distinct voice, not restated filler."
  },
  {
    "title": "Content Refresh Support",
    "text": "Older content is reviewed and updated, so ranking pieces don't quietly lose ground over time."
  },
  {
    "title": "Publish-Ready Delivery",
    "text": "Content formatted and ready to go live on your specific platform."
  },
  {
    "title": "Performance Tracking",
    "text": "Real visibility into how published content is actually performing against its target keywords."
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
