import { SectionIntro, PosterButton } from '../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "Paid advertising covers the strategy, creative, and ongoing management needed to turn ad spend into actual leads or sales, and it typically includes platform strategy, campaign setup, ad creative, landing page alignment, and continuous optimization based on real performance data, not just platform-reported vanity metrics. It's built for businesses that want spend treated as an investment with a measurable return, not a monthly line item nobody's fully accountable for.",
    "description": "Google Ads Management Search and Shopping campaigns that capture people actively looking for what you sell, built around the terms and intent that actually drive purchases. Meta Ads Management Facebook and Instagram campaigns built around genuine buyer behavior and interest data, not just broad demographic guessing. LinkedIn Ads Management B2B-focused campaigns targeted by job title, industry, and company size, where the buyer research and decision-making around higher-consideration purchases actually happens. Pinterest Ads Management Visual discovery campaigns for businesses whose products or content fit how Pinterest users actually browse and plan purchases. ChatGPT Ads Management Advertising placements within ChatGPT and similar AI assistants as sponsored formats open up, an early-mover channel worth testing before it gets more competitive. TikTok Ads Management Short-form video campaigns built around the platform's specific content style and audience behavior, not a repurposed Instagram ad. Microsoft Ads Management Search campaigns on Bing and the Microsoft Search Network, often less competitive and lower-cost than Google Ads for the same search terms. Amazon Ads Management Sponsored product and brand campaigns built around Amazon's own search and buying behavior, for businesses selling directly on the platform. Remarketing Re-engaging people who've already shown interest, visited your site, added to cart, started a form, before that intent quietly disappears. Lead Generation Ads Campaigns built specifically around form fills and direct inquiries rather than ecommerce checkout, with lead quality treated as seriously as lead volume.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Every platform charges for something slightly different, and understanding that changes how a campaign should actually be built.",
  "Search Platforms: Paying for Intent",
  "Google Ads and Microsoft Ads charge when someone actively searching for what you offer clicks through, you're paying to reach people who've already expressed intent, which is why search campaigns often convert at a higher rate than platforms built around passive scrolling.",
  "Social & Discovery Platforms: Paying for Attention",
  "Meta, TikTok, and Pinterest charge based on reach and engagement among people who weren't necessarily looking for you, the campaign's job is to interrupt attention convincingly enough to create the intent search ads get to assume already exists.",
  "LinkedIn: Paying for Precision",
  "LinkedIn's targeting costs more per click than most platforms, but it buys access to job titles, industries, and company sizes that are hard to reach accurately anywhere else; the premium is for precision, not volume.",
  "Amazon: Paying for Purchase-Ready Traffic",
  "Amazon Ads put your product in front of people already in a buying mindset on the platform itself, competing directly against similar listings at the exact moment someone's deciding what to buy.",
  "Remarketing: Paying to Close the Loop",
  "Remarketing budgets are typically smaller but often carry the highest return, since you're spending to bring back someone who already showed real interest rather than trying to create interest from nothing.",
  "AI Platform Ads: Paying for a Conversation",
  "ChatGPT and similar AI assistants are early in monetizing sponsored placements, and the mechanic looks less like a search results page and more like being recommended inside an answer someone's actively asking for, a genuinely different kind of attention than a scroll feed or a search results list.",
  "Most effective strategies blend a few of these deliberately, rarely all nine at once, based on where your specific buyers actually spend their attention, not which platforms happen to be trending.",
  "Why This Service Matters",
  "Every week a poorly structured campaign keeps running, budget keeps flowing toward clicks that were never going to convert, and unlike organic SEO, paid advertising doesn't compound in your favor if it's set up wrong, it just keeps costing money at the same rate until someone actually fixes it. The upside cuts the same way: a properly optimized campaign can start producing results almost immediately, which is the real advantage paid advertising has over slower-building organic channels.",
  "A common misunderstanding treats ad platforms' own reported metrics, clicks, impressions, reach, as proof of success. A campaign can look excellent by every number the platform shows you and still be losing money once you check what actually happened after the click. The number that matters is what a click turned into, not how many happened."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Framecipher runs paid media, landing page development, and conversion tracking under one in-house team, so a campaign's creative, its destination page, and its performance data all get reviewed by people who can actually see the whole picture, not a media buyer optimizing blind to what happens after the click. Every campaign change goes through your review before budget moves, which keeps you informed instead of finding out what happened to your spend after the fact.",
    "text": "We work with Bangladeshi businesses and international clients across the US, UK, Australia, Canada, and UAE, which means campaign strategy accounts for real differences in platform costs, competition, and buyer behavior between markets rather than applying one region's playbook everywhere. Conversion tracking gets set up properly from day one here, not treated as an afterthought once someone finally asks where the budget actually went."
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
