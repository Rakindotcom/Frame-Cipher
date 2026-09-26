import { SectionIntro, PosterButton } from '../../Kinetic'

const marketingStages = [
  {
    number: '01',
    title: 'Social Media Content',
    description: 'Create a consistent library of Reels, Shorts, graphics, photography, promotional visuals, and campaign assets for ongoing social publishing across Instagram, Facebook, LinkedIn, TikTok, and X.',
    focus: 'Organic reach, audience engagement, community trust'
  },
  {
    number: '02',
    title: 'Paid Advertising Creative',
    description: 'Produce high-converting video ads, static creatives, product visuals, motion graphics, and hook variations for Meta, Google, TikTok, and LinkedIn campaigns tailored to placement and audience.',
    focus: 'Performance marketing, ROAS optimization, click-through conversion'
  },
  {
    number: '03',
    title: 'Website & Landing Page Visuals',
    description: 'Use professional photography, hero videos, custom graphics, and motion assets to elevate website pages, campaign landing pages, and conversion-focused digital experiences.',
    focus: 'Brand authority, user experience, on-site conversion rates'
  },
  {
    number: '04',
    title: 'Ecommerce & Product Content',
    description: 'Product photography, unboxing videos, lifestyle imagery, and feature graphics that help ecommerce brands present products with commercial clarity and drive purchasing decisions.',
    focus: 'Catalog consistency, checkout confidence, reduced returns'
  },
  {
    number: '05',
    title: 'YouTube & Long-Form Content',
    description: 'Build longer-form video content for YouTube, educational deep-dives, founder interviews, customer case studies, and brand documentaries engineered for high retention.',
    focus: 'Long-term organic authority, search discovery, thought leadership'
  },
  {
    number: '06',
    title: 'Brand Launches & Campaigns',
    description: 'For major launches and seasonal campaigns, multiple creative formats are produced under one visual direction so your campaign feels unified across ads, social, and web touchpoints.',
    focus: 'Market impact, consistent messaging, synchronized rollout'
  }
]

export default function MarketingStages() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Multi-Channel Impact"
          title="Content for Every Stage of Your Marketing"
          index="02"
        >
          Content creation is not limited to social media posts. The same production system can support multiple areas of your marketing.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {marketingStages.map((stage) => (
            <div
              key={stage.number}
              className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-3xl md:text-4xl font-black text-frame-accent">
                  {stage.number}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                  Primary Outcome
                </span>
                <span className="text-xs font-semibold text-frame-fg">
                  {stage.focus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALLOUT */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Holistic Creative Strategy
            </span>
            <h4 className="mt-1 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Need a coordinated campaign or complete marketing asset package?
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg">
              We align video, photography, ads, and web visuals under one cohesive visual direction.
            </p>
          </div>
          <PosterButton href="/contact" className="shrink-0">
            Request a Custom Production Plan &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
