import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'Ecommerce & DTC Brands',
    body: 'TikTok can be useful for product discovery, creative-led acquisition, catalog advertising, and retargeting. We help ecommerce brands connect their products, creative, landing pages, and conversion tracking into one advertising workflow.',
  },
  {
    title: 'Fashion, Beauty & Lifestyle',
    body: 'Visual products often give brands a wide range of creative angles. We can test demonstrations, styling content, UGC, product education, creator content, offers, and other concepts based on the brand and audience.',
  },
  {
    title: 'Education & Consumer Services',
    body: 'Lead-generation campaigns can help education providers and consumer-service businesses reach potential customers and collect inquiries. The key is connecting advertising with a clear lead qualification and follow-up process.',
  },
  {
    title: 'Apps & Digital Products',
    body: 'TikTok can support app acquisition and re-engagement campaigns where the required app measurement and campaign setup are available. We manage creative testing alongside event tracking and acquisition measurement.',
  },
  {
    title: 'Brands Targeting Younger Audiences',
    body: 'TikTok has a strong role in short-form content discovery, but audience fit should be evaluated by market, product, age eligibility, buying behavior, and campaign objective. We do not recommend TikTok simply because a business wants to \u201Creach young people.\u201D',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Who we help"
          title="Who Is TikTok Ads Management For?"
        >
          TikTok fits businesses whose product, audience, and funnel can support a creative-led,
          testing-heavy acquisition model.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Business 0{index + 1}
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