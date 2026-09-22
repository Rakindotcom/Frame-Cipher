import { SectionIntro } from '../../../Kinetic'

const advantages = [
  {
    title: 'One In-House Team',
    body: 'Your advertising strategy does not sit in isolation. Framecipher can connect paid advertising with landing pages, website development, creative, analytics, and other digital services through one in-house team. That makes it easier to identify problems that exist outside the ad account itself.',
  },
  {
    title: 'Audit Before Optimization',
    body: 'We do not assume an existing campaign is broken simply because performance is weak. We first examine the structure, tracking, search traffic, budgets, offers, landing pages, and available performance data before deciding what should change.',
  },
  {
    title: 'Conversion Tracking Before Scaling',
    body: 'Scaling without reliable measurement creates more exposure to the same uncertainty. We prioritize measurement so that campaign decisions are based on clearer information about what is producing leads, purchases, calls, or other defined outcomes.',
  },
  {
    title: 'Local & International Experience',
    body: 'Framecipher is based in Bangladesh and works with businesses targeting both local and international markets. That allows us to consider the differences in search behavior, competition, targeting, commercial expectations, and customer journeys between markets.',
  },
  {
    title: 'Transparent Account Ownership',
    body: 'Your Google Ads account remains yours. You retain access to campaigns, spend data, conversion data, and account history throughout the engagement. Our role is to manage and improve the advertising system without placing your business inside a black-box account you cannot access.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Frame Cipher Standard"
          title="Why Businesses Choose Framecipher"
        >
          The way an account is managed matters as much as the platform, the budget, and the offer.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standard 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-between bg-frame-accent p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent-fg">
                Your account access
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-accent-fg">
                Full visibility, always
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-accent-fg/90">
                Campaigns, spend, conversions, and account history stay under your ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}