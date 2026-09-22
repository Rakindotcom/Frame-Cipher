import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Full-Funnel Campaign Management',
    body: 'Pinterest performance does not depend on media buying alone. The campaign also depends on the creative, catalog, landing page, tracking, and conversion experience. Framecipher connects those elements within one campaign strategy instead of treating each part as a separate handoff.',
  },
  {
    title: 'Pinterest-Native Creative',
    body: 'We create Pinterest creative for Pinterest. That means considering the visual hook, vertical format, product context, message hierarchy, Pin copy, landing page, and customer intent. The objective is not simply to make an existing social ad fit a different screen. It is to create a Pin that makes sense in the way people discover content on Pinterest.',
  },
  {
    title: 'Seasonal & Demand-Led Planning',
    body: 'We do not build the campaign calendar around when the business remembers to advertise. We plan around when customers begin searching, saving, comparing, and preparing for the purchase. Pinterest Trends, seasonal patterns, campaign history, product priorities, and business calendars can all inform that process.',
  },
  {
    title: 'Paid + Organic Pinterest Strategy',
    body: 'Pinterest Ads and Pinterest SEO are different disciplines, but they can support each other. Paid campaigns can provide immediate visibility and testing. Organic Pinterest strategy can improve the discoverability of Pins, boards, and content over time. Framecipher can coordinate paid and organic activity where a broader Pinterest strategy makes sense, without treating one as a substitute for the other.',
  },
  {
    title: 'One In-House Paid Media & SEO Team',
    body: 'Pinterest Ads can benefit from paid media expertise. Broader Pinterest visibility can also involve keyword strategy, content, SEO, landing pages, analytics, and creative. Framecipher keeps those capabilities under one in-house team, making it easier to connect Pinterest advertising with the wider search and digital growth strategy.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why Framecipher"
          title="Why Choose Framecipher for Pinterest Ads"
        >
          A Pinterest partner should connect creative, catalog, tracking, and landing-page
          performance with campaign management, not just press the launch button.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Reason 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}