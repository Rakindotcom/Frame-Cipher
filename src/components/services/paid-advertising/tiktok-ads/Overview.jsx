import { SectionIntro, PosterButton } from '../../../Kinetic'

const capabilities = [
  'Campaign strategy and account setup',
  'TikTok-native creative planning',
  'UGC and creator content',
  'Spark Ads',
  'Audience targeting and retargeting',
  'Smart+ campaign management',
  'Catalog and ecommerce advertising',
  'TikTok Shop advertising where the feature is available',
  'Lead generation campaigns',
  'App promotion',
  'TikTok Pixel and Events API',
  'Conversion tracking and attribution',
  'Ongoing testing, optimization, and reporting',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our approach"
          title="TikTok Advertising Built Around Creative, Data, and Business Outcomes"
        >
          TikTok is a creative-led advertising platform, but creativity alone does not make a
          campaign successful.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              The right campaign needs a clear objective, suitable audience strategy, strong
              creative variations, reliable conversion tracking, and enough testing to identify
              what actually works.
            </p>
            <p>
              <span className="font-bold text-frame-fg">Framecipher brings these elements together in one TikTok Ads management service.</span>
              {' '}
              We manage campaigns around measurable business outcomes, run structured creative
              tests, connect reliable conversion data, and optimize the account from evidence
              rather than assumption.
            </p>
            <p>
              TikTok&apos;s current advertising ecosystem supports both manual campaign control
              and automated Smart+ workflows, allowing advertisers to choose the level of
              automation that fits their campaign and account. We decide which setup makes sense
              per campaign, not as a one-size-fits-all default.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Full scope
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              We can help with
            </h3>
            <ul className="mt-6 space-y-2.5">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}