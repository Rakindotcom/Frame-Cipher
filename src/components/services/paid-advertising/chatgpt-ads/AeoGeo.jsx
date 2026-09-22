import { SectionIntro } from '../../../Kinetic'

const pillars = [
  {
    title: 'Paid AI Advertising',
    body: [
      'ChatGPT Ads allow brands to appear in supported placements when the advertising system determines the ad is relevant to the conversation. Paid placements remain under your control in terms of budget, targeting, and campaign duration.',
      'Conversion tracking, creative testing, and landing-page alignment remain part of the process. You pay for delivery, and what you get is controlled, measurable presence inside the conversation.',
    ],
    accent: true,
  },
  {
    title: 'Organic AI Search Visibility',
    body: [
      'AI search engines and assistants synthesize answers from available web content. AEO/GEO (Answer Engine Optimization / Generative Engine Optimization) improves the way search engines understand, cite, and represent your content inside AI-generated answers.',
      'Organic AI visibility gives the brand a presence in AI answers and citations that are not yet available as paid inventory, building a foundation that does not depend on a daily advertising budget.',
    ],
  },
  {
    title: 'Coordinated AI Visibility Strategy',
    body: [
      'Paid and organic visibility should not be planned as separate projects. Creative, proof, landing pages, and conversion messaging can be aligned with content built for AI visibility so the brand says the same credible things across paid and organic AI surfaces.',
      'When both work together, the ad earns the click and the organic-optimized page earns the conversion. The result is representation that is more consistent, more credible, and more efficient across AI search.',
    ],
  },
]

export default function AeoGeo() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Paid + organic"
          title="ChatGPT Ads + AEO/GEO"
        >
          ChatGPT Ads cover the paid surface of AI search. AEO/GEO covers the organic surface.
          Both matter because users do not stop at the ad when they research, compare, and verify.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item, index) => (
            <div
              key={index}
              className={
                item.accent
                  ? 'flex flex-col border-2 border-frame-accent bg-frame-accent/5 p-7 md:p-8'
                  : 'flex flex-col border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8'
              }
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Channel 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            This is why Framecipher manages ChatGPT Ads and AI visibility (AEO/GEO) as one team.
            The advertising conversation and the organic representation of your brand should be
            telling the same truthful story.
          </p>
        </div>
      </div>
    </section>
  )
}