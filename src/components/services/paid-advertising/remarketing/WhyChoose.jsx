import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Segmented Audience Architecture',
    body: 'Audiences are structured around behavior, intent, recency, and customer status rather than one broad visitor list.',
  },
  {
    title: 'Privacy-Aware Tracking',
    body: 'Tracking and audience infrastructure are designed around current platform requirements, consent, first-party data, and available server-side options.',
  },
  {
    title: 'Sequential Messaging',
    body: 'Different audience stages can receive different creative and offers instead of repeating one message throughout the funnel.',
  },
  {
    title: 'Suppression & Exclusion Logic',
    body: 'Customers, converted leads, and other completed audiences can be removed from campaigns where appropriate.',
  },
  {
    title: 'Cross-Platform Coordination',
    body: 'We align remarketing strategy across relevant platforms while respecting each platform\u2019s available targeting, attribution, and delivery controls.',
  },
  {
    title: 'One In-House Team',
    body: 'Strategy, paid media, tracking, creative coordination, and reporting are handled through one in-house team. You do not need separate vendors to coordinate every part of the remarketing system.',
  },
  {
    title: 'Client-Owned Accounts & Data',
    body: 'Advertising accounts, audience data, tracking assets, and campaign history remain within the appropriate client-owned environment.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Why Framecipher" title="What You Get With Framecipher" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="border-2 border-frame-border bg-frame-muted/10 p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}