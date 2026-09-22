import { SectionIntro } from '../../../Kinetic'

const advantages = [
  {
    title: 'One In-House Team',
    body: 'LinkedIn Ads does not operate separately from creative, content, landing pages, websites, analytics, or conversion systems. Framecipher brings these capabilities together through one in-house team, making it easier to identify and fix problems outside the ad account itself.',
  },
  {
    title: 'ICP Before Campaign Setup',
    body: 'We start with who the business needs to reach and how those people participate in the buying process before selecting targeting options. That connects advertising strategy with the actual sales strategy.',
  },
  {
    title: 'Lead Quality Over Vanity Metrics',
    body: 'We do not treat impressions, clicks, or raw form submissions as the final business outcome. Where reliable data is available, we look at qualified leads, opportunities, pipeline contribution, and downstream results.',
  },
  {
    title: 'Bangladesh & Global B2B Experience',
    body: 'Framecipher is based in Bangladesh and supports businesses targeting both local and international B2B markets. Campaign strategy can be adapted to different industries, target-account structures, countries, audience sizes, and sales cycles.',
  },
  {
    title: 'Transparent Account Ownership',
    body: 'Your LinkedIn Campaign Manager account remains under your control. You retain access to campaign history, advertising data, audiences, spend information, and performance reporting throughout the engagement.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Frame Cipher Standard"
          title="Why Businesses Choose Framecipher for LinkedIn Ads"
        >
          ICP definition, professional audience targeting, creative, and CRM measurement working
          together under one in-house team.
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
                Full ownership, always
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-accent-fg/90">
                Campaign history, advertising data, audiences, and spend information stay under
                your control throughout the engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}