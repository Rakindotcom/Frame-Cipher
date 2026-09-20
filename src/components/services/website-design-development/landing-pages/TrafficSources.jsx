import { SectionIntro } from '../../../Kinetic'

const trafficSources = [
  {
    title: 'Google Ads Landing Pages',
    desc: 'We align the landing page with the search intent, keyword theme, ad message, offer, and conversion goal so visitors immediately understand they are in the right place.',
  },
  {
    title: 'Meta & Instagram Ad Landing Pages',
    desc: 'The page can be structured around the audience, creative, offer, and message introduced in the ad, creating a smoother transition from social click to conversion.',
  },
  {
    title: 'TikTok Campaign Landing Pages',
    desc: 'For mobile-first audiences, we focus on fast loading, strong visual communication, concise messaging, and a clear action that matches the campaign.',
  },
  {
    title: 'LinkedIn & B2B Landing Pages',
    desc: 'B2B campaigns often need stronger value propositions, proof, trust signals, qualification questions, and a clear path to a demo, consultation, or sales conversation.',
  },
  {
    title: 'Email & Social Campaign Landing Pages',
    desc: 'Dedicated pages can be created for product launches, promotions, registrations, downloads, events, and other campaign-specific actions.',
  },
]

export default function TrafficSources() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Traffic Source Continuity / Message Matching" title="Landing Pages Built for Your Traffic Source">
          Visitors arrive with different expectations depending on where they came from. A landing page should carry the same message and intent from the traffic source through to the final action.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {trafficSources.map((source, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Channel 0{index + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {source.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {source.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          The traffic source helps shape the headline, offer, proof, CTA, and page structure. We build the landing experience around the audience you actually paid or worked to reach.
        </p>
      </div>
    </section>
  )
}