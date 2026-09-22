import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Where ChatGPT Ads Appear',
    body: [
      'ChatGPT Ads appear below ChatGPT responses and are clearly identified as advertisements. An ad can include the advertiser name, favicon or logo, headline, description, landing page, and image creative. The advertisement remains separate from the ChatGPT-generated answer.',
      'That distinction matters. Your ad should support the user\u2019s decision without being confused with ChatGPT\u2019s response. The landing page should then deliver the information, offer, proof, product details, or next step promised by the advertisement.',
      'Framecipher plans the ad and landing-page experience together instead of treating the creative as an isolated asset.',
    ],
  },
  {
    title: 'How Ad Matching & Context Targeting Work',
    body: [
      'ChatGPT Ads do not rely on conventional exact-match keywords alone. Advertisers can provide context hints at the ad-group level. These hints describe the situations, customer needs, topics, products, or conversations where an offering may be relevant. OpenAI states that context hints are not exact-match keywords and do not guarantee delivery for specific conversations.',
      'That changes how campaigns should be structured.',
    ],
    listLabel: 'We develop context around',
    bullets: [
      'What the product or service offers',
      'Who it is designed to help',
      'When the offering becomes useful',
      'Customer problems and decision situations',
      'Relevant use cases and product categories',
      'Geographic or service-area considerations',
    ],
    tail: 'The goal is not to create the longest possible keyword list. The goal is to communicate useful context that helps the platform understand when your offering may be relevant.',
  },
  {
    title: 'ChatGPT Ads Buying & Optimization',
    body: [
      'OpenAI Ads Manager currently supports campaign objectives including Views, Clicks, and Conversions. Depending on the campaign setup, advertisers can use impression-based or click-based buying and eligible conversion-optimized campaigns.',
      'We connect the campaign objective to the business outcome.',
    ],
    bullets: [
      'Awareness \u2192 build qualified visibility',
      'Traffic \u2192 generate relevant website visits',
      'Leads \u2192 drive completed enquiry actions',
      'Sales \u2192 optimize toward supported purchase events',
    ],
    tail: 'Conversion-focused campaigns can optimize toward supported events such as purchases, registrations, and lead submissions. We monitor delivery, clicks, conversions, costs, creative performance, and other available campaign signals. Where automated bidding is available, we assess whether it fits the campaign objective, conversion volume, budget, and account structure rather than assuming one bidding approach works for every business.',
  },
  {
    title: 'Sponsored Agents and Emerging Formats',
    body: [
      'OpenAI is also testing Sponsored Agents, an advertising format that allows people to start a conversation with an AI representative of a business after interacting with an advertisement. Sponsored Agents are currently available only to selected advertisers in a limited alpha test.',
      'Framecipher monitors emerging formats without building your strategy around features you cannot currently access.',
    ],
    tail: 'That keeps your advertising plan grounded in what is available today while leaving room to evaluate new opportunities as the platform develops.',
  },
]

export default function HowItWorks() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Platform mechanics"
          title="How ChatGPT Ads Work"
        >
          ChatGPT Ads require a different approach from traditional keyword-led advertising. The
          campaign still needs a clear objective, budget, creative, targeting, tracking, and
          measurement. The difference is that ad delivery operates within a conversational
          environment where context can play an important role.
        </SectionIntro>

        <div className="space-y-6 border-t-2 border-frame-border pt-12">
          {steps.map((step, index) => (
            <div key={step.title} className="border-2 border-frame-border bg-frame-bg">
              <div
                className={
                  step.bullets?.length > 0
                    ? 'grid gap-8 p-7 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start'
                    : 'grid gap-8 p-7 md:p-10 lg:grid-cols-1 lg:items-start'
                }
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    How it works 0{index + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    {step.title}
                  </h3>
                  <div className="mt-5 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {step.body.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                {step.bullets?.length > 0 && (
                  <div className="border-t-2 border-frame-border/60 pt-6 lg:border-l-2 lg:border-t-0 lg:pl-10 lg:pt-0">
                    {step.listLabel && (
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                        {step.listLabel}:
                      </span>
                    )}
                    <ul className="mt-4 grid gap-2.5 text-xs md:text-sm font-semibold text-frame-fg/90">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {step.tail && (
                <div className="border-t-2 border-frame-border bg-frame-muted/10 px-7 py-5 md:px-10">
                  <p className="text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
                    {step.tail}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}