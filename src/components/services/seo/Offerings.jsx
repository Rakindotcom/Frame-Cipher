import { SectionIntro, PosterButton } from '../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "Search engine optimization covers the technical, content, and authority work needed to get a website found on Google and increasingly cited by AI search tools, and it typically includes technical fixes, keyword strategy, content and link-building work, and local or international visibility depending on where your customers actually are. It's built for businesses that want sustainable, compounding visibility rather than a short-term traffic spike that disappears the moment work stops.",
    "description": "Technical SEO The infrastructure work behind rankings site speed, crawlability, indexation, mobile performance, and structured data fixed at the source instead of patched around. On-Page SEO Content, headings, metadata, and internal linking optimized around what your customers actually search for, not keyword-stuffed guesswork. Off-Page SEO & Link Building Earning backlinks through outreach and relevance-based placements is the slow, defensible kind of authority-building that doesn't put your site at risk of a future penalty. Local SEO Visibility for businesses that serve a specific city or service area, including Google Business Profile management and the Google Map Pack. Ecommerce SEO Product and category page optimization built around buyer-intent search terms, not just informational traffic that never converts. International SEO Structuring a site to rank across multiple countries or languages, without the technical conflicts that come from doing it carelessly. SEO Audit A full technical, on-page, and backlink review delivered as a prioritized action plan, not a raw data dump you have to interpret yourself. SEO Strategy & Consulting Planning and guidance for businesses that want an expert-built roadmap, whether they're executing it in-house or through us. Keyword Research Identifying the terms your customers actually search, filtered by what your site can realistically compete for right now. AI Search Optimization (AEO/GEO) Structuring content so it gets cited by ChatGPT, Gemini, Perplexity, and other AI tools that are increasingly answering search queries directly. Google AdSense Approval Reviewing and fixing the site issues that most commonly cause AdSense rejection, before or after you've already applied. Penalty Recovery Diagnosing and reversing a Google penalty or algorithmic traffic drop, with a documented path back to where your rankings were.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Every month a site stays technically broken or invisible to AI search tools, competitors who are already investing in SEO widen the gap, rankings compound the way debt does, just in the other direction, and catching up gets harder the longer it's left unaddressed. The payoff isn't abstract either: organic traffic converts at a meaningfully higher rate than most paid channels, because the person searching already has intent, not just curiosity.",
  "A common misunderstanding treats SEO like a paid ad campaign, flip it on, see results, flip it off, results stop. It doesn't work that way. Organic visibility builds gradually and keeps producing results even in months you're not actively running other marketing, but it needs patience and consistent work, not a one-time setup you forget about."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Framecipher runs SEO, content, and technical development under one in-house team, so strategy and execution don't get lost in translation between separate vendors who've never spoken to each other. Every recommendation goes through your review before anything gets published or changed on the live site, which keeps you informed instead of finding out what happened after the fact.",
    "text": "We work with Bangladeshi businesses and international clients across the US, UK, Australia, Canada, and UAE, which means our process accounts for different search behaviors and competitive landscapes rather than applying one market's playbook everywhere. AI search optimization is treated as a core service here, not an afterthought bolted onto traditional SEO, a growing share of queries now get answered without a click, and most agencies still haven't caught up to that shift."
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
