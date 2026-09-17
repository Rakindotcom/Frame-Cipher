import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "Getting cited by AI systems touches content structure, technical signals, and brand presence together.",
    "description": "ANSWER ENGINE OPTIMIZATION (AEO) Structuring individual pieces of content to get directly cited, quoted, and surfaced in AI-generated answers. What We Do Content buried behind a long, meandering introduction rarely gets extracted, however good the actual answer eventually is. GENERATIVE ENGINE OPTIMIZATION (GEO) Building your brand's broader presence and authority across the generative web, not just optimizing individual pages. What We Do GEO is less about a single optimized page and more about becoming the source an AI system trusts enough to cite repeatedly.",
    "bullets": [
      "Direct Answer Block Writing: Leading with a clear, self-contained answer AI systems can extract without needing surrounding context.",
      "Definition & FAQ Formatting: Structuring content in the question-and-answer patterns AI systems are built to parse and cite.",
      "Retrieval-Ready Language: Writing in subject-predicate clarity that avoids vague openers AI extraction tools struggle with.",
      "Entity Relationship Depth: Making sure content clearly connects related concepts, not just mentions them in isolation.",
      "Topical Authority Building: Establishing depth across a subject area so AI systems recognize your brand as a credible source on it.",
      "Entity-Based Content Structuring: Organizing content around clear entities and their relationships, the way a knowledge graph does.",
      "Semantic Coverage Mapping: Identifying and filling gaps in how comprehensively your content covers a topic area.",
      "Cross-Source Consistency: Making sure your brand, services, and expertise are represented consistently everywhere AI systems draw information from."
    ]
  },
  {
    "title": "TECHNICAL FOUNDATIONS FOR AI VISIBILITY",
    "description": "The structural signals that help AI crawlers and retrieval systems understand your content correctly. What We Do An AI system can only cite content it can actually access and parse correctly in the first place.",
    "bullets": [
      "Structured Data for AI Parsing: Schema markup that helps both traditional search and AI retrieval systems understand page content.",
      "Content Chunking Strategy: Structuring long-form content into clearly delineated, independently extractable sections.",
      "Clear Heading Hierarchy: Question-based and topic-clear headings that map directly to how AI systems scan for relevant sections.",
      "Crawlability for AI Bots: Confirming AI crawlers can actually access and parse your content, not just traditional search bots."
    ]
  },
  {
    "title": "BRAND ENTITY & KNOWLEDGE GRAPH PRESENCE",
    "description": "Making sure AI systems understand who you are, not just what a single page on your site says. What We Do An AI system forms an understanding of your brand from scattered sources across the web, inconsistency across those sources creates a blurry picture, not a trustworthy one.",
    "bullets": [
      "Entity Consistency Auditing: Checking that your brand name, services, and details are represented the same way across the web.",
      "Third-Party Source Alignment: Identifying where AI systems likely draw brand information from, and making sure it's accurate.",
      "Structured About & Service Pages: Building pages specifically structured to establish your brand as a clear, defined entity.",
      "Citation & Mention Monitoring: Tracking where and how your brand is currently being referenced across AI-accessible sources."
    ]
  },
  {
    "title": "AI VISIBILITY TRACKING & OPTIMIZATION",
    "description": "Measuring whether the work is actually translating into AI citations, not just assuming it is. What We Do AI search optimization works best paired with strong content and technical foundations - see our On-Page SEO and Technical SEO pages for how the two connect.",
    "bullets": [
      "AI Citation Monitoring: Tracking when and how your content actually gets referenced in AI-generated answers.",
      "Competitor AI Visibility Comparison: Understanding who's currently winning citations for queries relevant to your business.",
      "Content Performance Review: Identifying which content formats and structures are actually earning citations for you.",
      "Ongoing Structural Refinement: Adjusting based on what's actually working, since AI retrieval patterns continue to evolve."
    ]
  },
  {
    "title": "How AEO and GEO Actually Differ",
    "description": "The two terms get used almost interchangeably, but they're solving different parts of the same problem. AEO: Getting a Specific Answer Cited Answer Engine Optimization works at the content level - a single page, a single question, structured so an AI system can extract and quote it directly. Think of it as optimizing for the moment someone asks a specific question. GEO: Becoming a Trusted Source Generative Engine Optimization works at the brand level - building enough topical depth and consistency that AI systems recognize your business as a credible entity worth citing repeatedly, not just once. Why Both Matter Together AEO without GEO gets individual pages cited occasionally, without building lasting authority. GEO without AEO builds brand credibility that never quite translates into actual citations, because no individual page is structured to be extracted. The two work as a pair, not a choice between them.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Search behavior has shifted enough that ignoring AI visibility now has a real, measurable cost.",
  "A Growing Share of Queries Never Produce a Click",
  "When an AI system answers a question directly, the traffic that would have gone to your site goes nowhere, unless your content was the one actually cited.",
  "Traditional SEO Rankings Don't Automatically Transfer",
  "A page ranking well on Google isn't automatically well-structured for AI extraction, the two require genuinely different formatting and structural choices.",
  "Early Movers Are Building an Advantage",
  "As more businesses catch up to AI search optimization, the sites already structured for it now have a head start that gets harder to close later.",
  "Brand Consistency Compounds Trust With AI Systems",
  "Inconsistent information about your business across the web makes it harder for AI systems to confidently cite you as an authoritative source."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Ranking on Google and getting cited by an AI answer engine are governed by genuinely different mechanics, even though both start with a search box. Traditional SEO rewards backlinks and domain authority built over years. AI systems weight retrieval-ready structure, clear entity relationships, and direct answer formatting far more heavily, a smaller, newer site with genuinely well-structured content can get cited over a larger competitor whose content was never built to be extracted and quoted. We build for both mechanics deliberately, not just one inherited from traditional SEO habits.",
    "text": "\"Google ranks pages. AI engines extract answers from them. Those are related problems, but they're not the same problem, and optimizing for only one of them is leaving half the opportunity on the table.\" Structured for Extraction, Not Just Ranking | Entity & Knowledge Graph Optimization | Built for ChatGPT, Gemini & Perplexity"
  },
  {
    "title": "Our AI Search Optimization Services",
    "text": "Getting cited by AI systems touches content structure, technical signals, and brand presence together. ANSWER ENGINE OPTIMIZATION (AEO) Structuring individual pieces of content to get directly cited, quoted, and surfaced in AI-generated answers."
  },
  {
    "title": "What We Do",
    "text": "* Direct Answer Block Writing: Leading with a clear, self-contained answer AI systems can extract without needing surrounding context. * Definition & FAQ Formatting: Structuring content in the question-and-answer patterns AI systems are built to parse and cite. * Retrieval-Ready Language: Writing in subject-predicate clarity that avoids vague openers AI extraction tools struggle with. * Entity Relationship Depth: Making sure content clearly connects related concepts, not just mentions them in isolation. Content buried behind a long, meandering introduction rarely gets extracted, however good the actual answer eventually is. GENERATIVE ENGINE OPTIMIZATION (GEO) Building your brand's broader presence and authority across the generative web, not just optimizing individual pages."
  },
  {
    "title": "What We Do",
    "text": "* Topical Authority Building: Establishing depth across a subject area so AI systems recognize your brand as a credible source on it. * Entity-Based Content Structuring: Organizing content around clear entities and their relationships, the way a knowledge graph does. * Semantic Coverage Mapping: Identifying and filling gaps in how comprehensively your content covers a topic area. * Cross-Source Consistency: Making sure your brand, services, and expertise are represented consistently everywhere AI systems draw information from. GEO is less about a single optimized page and more about becoming the source an AI system trusts enough to cite repeatedly."
  },
  {
    "title": "TECHNICAL FOUNDATIONS FOR AI VISIBILITY",
    "text": "The structural signals that help AI crawlers and retrieval systems understand your content correctly."
  },
  {
    "title": "What We Do",
    "text": "* Structured Data for AI Parsing: Schema markup that helps both traditional search and AI retrieval systems understand page content. * Content Chunking Strategy: Structuring long-form content into clearly delineated, independently extractable sections. * Clear Heading Hierarchy: Question-based and topic-clear headings that map directly to how AI systems scan for relevant sections. * Crawlability for AI Bots: Confirming AI crawlers can actually access and parse your content, not just traditional search bots. An AI system can only cite content it can actually access and parse correctly in the first place."
  },
  {
    "title": "BRAND ENTITY & KNOWLEDGE GRAPH PRESENCE",
    "text": "Making sure AI systems understand who you are, not just what a single page on your site says."
  },
  {
    "title": "What We Do",
    "text": "* Entity Consistency Auditing: Checking that your brand name, services, and details are represented the same way across the web. * Third-Party Source Alignment: Identifying where AI systems likely draw brand information from, and making sure it's accurate. * Structured About & Service Pages: Building pages specifically structured to establish your brand as a clear, defined entity. * Citation & Mention Monitoring: Tracking where and how your brand is currently being referenced across AI-accessible sources. An AI system forms an understanding of your brand from scattered sources across the web, inconsistency across those sources creates a blurry picture, not a trustworthy one."
  },
  {
    "title": "AI VISIBILITY TRACKING & OPTIMIZATION",
    "text": "Measuring whether the work is actually translating into AI citations, not just assuming it is."
  },
  {
    "title": "What We Do",
    "text": "* AI Citation Monitoring: Tracking when and how your content actually gets referenced in AI-generated answers. * Competitor AI Visibility Comparison: Understanding who's currently winning citations for queries relevant to your business. * Content Performance Review: Identifying which content formats and structures are actually earning citations for you. * Ongoing Structural Refinement: Adjusting based on what's actually working, since AI retrieval patterns continue to evolve. AI search optimization works best paired with strong content and technical foundations - see our On-Page SEO and Technical SEO pages for how the two connect."
  },
  {
    "title": "How AEO and GEO Actually Differ",
    "text": "The two terms get used almost interchangeably, but they're solving different parts of the same problem. AEO: Getting a Specific Answer Cited Answer Engine Optimization works at the content level - a single page, a single question, structured so an AI system can extract and quote it directly. Think of it as optimizing for the moment someone asks a specific question. GEO: Becoming a Trusted Source Generative Engine Optimization works at the brand level - building enough topical depth and consistency that AI systems recognize your business as a credible entity worth citing repeatedly, not just once."
  },
  {
    "title": "Why Both Matter Together",
    "text": "AEO without GEO gets individual pages cited occasionally, without building lasting authority. GEO without AEO builds brand credibility that never quite translates into actual citations, because no individual page is structured to be extracted. The two work as a pair, not a choice between them. Why Your Business Needs Real AI Search Optimization Search behavior has shifted enough that ignoring AI visibility now has a real, measurable cost. A Growing Share of Queries Never Produce a Click When an AI system answers a question directly, the traffic that would have gone to your site goes nowhere, unless your content was the one actually cited. Traditional SEO Rankings Don't Automatically Transfer A page ranking well on Google isn't automatically well-structured for AI extraction, the two require genuinely different formatting and structural choices."
  },
  {
    "title": "Early Movers Are Building an Advantage",
    "text": "As more businesses catch up to AI search optimization, the sites already structured for it now have a head start that gets harder to close later. Brand Consistency Compounds Trust With AI Systems Inconsistent information about your business across the web makes it harder for AI systems to confidently cite you as an authoritative source. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Content, technical, and brand strategy work together, so AEO and GEO recommendations aren't disconnected from what your site can actually support. We Treat This as Core Work, Not an Add-On AI search optimization gets the same strategic attention as traditional SEO here, not a bolted-on afterthought most agencies still haven't caught up to offering properly. Local & International AI Search Experience Based in Dhaka. Optimizing for AI visibility for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Grounded in How AI Systems Actually Retrieve Content Recommendations are based on genuine retrieval and citation mechanics, not guesswork applied to a genuinely new and evolving field."
  },
  {
    "title": "Answer Engine Optimization",
    "text": "Content structured with direct, extractable answers AI systems can actually cite."
  },
  {
    "title": "Generative Engine Optimization",
    "text": "Topical authority and entity consistency built so your brand becomes a trusted, repeatedly-cited source."
  },
  {
    "title": "Technical AI Visibility Foundations",
    "text": "Structured data, content chunking, and crawlability handled specifically for AI retrieval systems."
  },
  {
    "title": "Brand Entity Consistency",
    "text": "Your business represents accurately and consistently everywhere AI systems draw information from."
  },
  {
    "title": "AI Citation Tracking",
    "text": "Real visibility into whether your content is actually getting cited, not just an assumption that it is."
  },
  {
    "title": "Forward-Positioned Strategy",
    "text": "Work built for where search is heading, not just where it's been."
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
