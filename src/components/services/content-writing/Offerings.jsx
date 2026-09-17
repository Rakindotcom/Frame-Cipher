import { SectionIntro, PosterButton } from '../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "Content writing covers the words that do the actual work of a website, ranking in search, explaining a product clearly, persuading someone to buy, or building enough trust that a reader keeps reading. It typically includes research, drafting, SEO integration where relevant, and revision based on real feedback, and it's built for businesses that want writing treated as a specific tool for a specific job, not a generic service applied the same way regardless of purpose.",
    "description": "SEO & Blog Writing Blog content built around real search intent and structured for both traditional and AI-driven search, Semantic SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), and E-E-A-T signals applied together, not treated as separate checklists. Includes keyword and competitor gap research, outline development, full drafting, and structured data recommendations. Website Content Writing The core pages a business runs on homepage, about page, service pages written to explain what you do clearly within the first few seconds a visitor spends deciding whether to keep reading. Includes messaging strategy around your actual value proposition, tone consistency across every page, and copy structured to guide a visitor toward a next step rather than just describing the business in the abstract. This is often the highest-traffic, highest-stakes writing on a site, since it's frequently a visitor's first real impression. Landing Page Copywriting Single-purpose copy stripped of the navigation and distraction a broader website page can afford, built entirely around one offer and one clear call to action. Includes headline and subheadline development, benefit-focused body copy (what the reader gets, not just what the product does), objection handling built into the copy itself, and CTA language tested against what actually moves people to act rather than generic \"Learn More\" defaults. Product Description Writing Copy built around the specific reasons a particular product is worth buying material, use case, what makes it different from a similar option, rather than a manufacturer spec sheet copied verbatim. Includes SEO-aware writing for product and category pages, a consistent voice and format across large catalogs, and attention to the details that actually influence a purchase decision (sizing, care, compatibility) without burying them in unnecessary length. Sales Copywriting Persuasive writing for the specific moments where the entire job is moving someone from interested to convinced sales pages, proposals, pitch decks, and comparison pages. Includes research into genuine objections and hesitations a prospect actually has, structuring copy around a logical persuasion sequence rather than just listing features, and copy built to work alongside a sales process rather than replace it entirely. Email Copywriting Sequences and individual campaigns written to actually get opened, read, and acted on, in an inbox where most emails get deleted within seconds of arriving. Includes subject line development and testing approaches, welcome and nurture sequence writing, promotional and re-engagement campaigns, and copy structured for how people actually skim email on mobile devices, which is most of the time. Case Study Writing Turning a real customer result into a specific, credible story: the actual problem, the actual approach, the actual outcome rather than a vague testimonial that could plausibly describe any business in any industry. Includes structuring the narrative around a clear before-and-after, incorporating real quotes and data where available, and writing specific enough that a skeptical reader finds it genuinely convincing rather than dismissing it as a marketing copy. Content Strategy The planning layer that decides what actually gets written, in what order, and for what reason, so individual pieces build toward something coherent instead of accumulating as a random assortment of blog posts with no shared direction. Includes content audits of what already exists, topic and keyword prioritization, content calendar development, and identifying gaps between what your business needs to say and what's actually been written so far.",
    "bullets": []
  },
  {
    "title": "Different Writing, Different Jobs",
    "description": "Treating every piece of content the same way is one of the more common, avoidable mistakes in how businesses approach writing. Writing to Be Found SEO and blog content has to satisfy both a search engine's technical expectations and a reader's actual question, it's judged by whether it ranks and whether anyone stays to read it once it does. Writing to Explain Website and product content has to make something genuinely clear, often to someone who's never encountered your business before and is deciding in seconds whether to keep reading. Writing to Persuade Landing pages, sales copy, and email sequences are judged almost entirely by whether someone takes the specific action the writing was built to produce. Writing to Prove Case studies exist to demonstrate real, specific outcomes, their entire value is in being credible and concrete, not polished in a way that reads as marketing spin. Confusing these jobs is how a landing page ends up reading like a blog post, or a product description ends up sounding like a sales pitch nobody asked for.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Every piece of generic, purpose-confused content sitting on a website is a missed opportunity that compounds the longer it stays unaddressed, a product page that doesn't actually sell, a landing page that doesn't actually convert, keeps underperforming at the same rate until someone rewrites it with the right job in mind. The cost isn't always obvious either, since a page can get traffic and still fail entirely at the one thing it needed to accomplish once someone actually arrived.",
  "A common misunderstanding treats content writing as a single, interchangeable skill, hire any decent writer, get any decent result. It doesn't work that way. SEO writing, sales copywriting, and product description writing are genuinely different disciplines with different success criteria, and writing that's excellent for one job can quietly underperform at another."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Framecipher writes content alongside the SEO, design, and development work happening on the same site, so a blog post isn't written in isolation from what actually needs to rank, and a landing page isn't written without knowing what the design and conversion goals actually are. Every draft goes through your review before it's considered final, which keeps your brand voice consistent and keeps you informed instead of discovering the tone was wrong after it's already published.",
    "text": "We write for Bangladeshi businesses and international clients across the US, UK, Australia, Canada, and UAE, which means content strategy accounts for real audience and market differences rather than one region's tone and references applied everywhere. Content here is written to do a specific job first, and to read well second, not the other way around."
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
