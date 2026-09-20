import { SectionIntro, PosterButton } from '../../Kinetic'

const weakSiteCosts = [
  { title: 'Lost Visitors', desc: 'A slow or confusing website loses visitors before they see your offer, and the gap widens the longer it is left unaddressed.' },
  { title: 'Mobile-First Risk', desc: 'A large share of Bangladeshi traffic is mobile-first; a site not built for that loses customers before they scroll past the homepage.' },
  { title: 'Maintenance Blind Spot', desc: 'Treating a website as a one-time project instead of infrastructure leads to skipped updates, security patches, and periodic review.' },
  { title: 'Deferred Cost', desc: 'Skipping maintenance rarely saves money; it usually costs more later when a small fix becomes an emergency rebuild.' },
]

const advantages = [
  { title: 'One In-House Team', desc: 'Your design, development, and content work under one team. This helps keep the project consistent and reduces communication gaps.' },
  { title: 'Business-First Planning', desc: 'We start with your business goals, audience, content needs, and budget. Our recommendations focus on what your business needs rather than pushing one platform.' },
  { title: 'Flexible Platform Choices', desc: 'We work with WordPress, Shopify, Webflow, Wix, Magento, and custom Next.js development, recommending the right fit for your requirements.' },
  { title: 'Clear Project Communication', desc: 'You review the project at defined stages before we move forward. We discuss scope, timeline, and quotation before development begins.' },
  { title: 'Design & Marketing Considerations', desc: 'We consider content structure, SEO-friendly foundations, and future marketing needs so your website is ready to grow with your business.' },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Strategic Impact" title="Why Your Website Matters for Business Growth" align="center">
          A slow or confusing website actively loses visitors before they see your offer. We build digital assets that establish enduring credibility and drive measurable revenue.
        </SectionIntro>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Value & Impact
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              The Compounding Cost of Weak Websites
            </h3>
            <div className="mt-6 grid bg-frame-border gap-px border-2 border-frame-border">
              {weakSiteCosts.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-frame-bg p-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border-2 border-frame-accent/50 bg-frame-accent/10 font-heading text-xs font-bold text-frame-accent">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-heading text-sm md:text-base font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <PosterButton href="/contact">Book a Strategy Session</PosterButton>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                The Frame Cipher Standard
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Why Choose Frame Cipher for Website Development
              </h3>
            </div>

            <div className="grid border-2 border-frame-border bg-frame-border gap-px">
              {advantages.map((item, index) => (
                <div key={item.title} className="bg-frame-bg p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-sm font-bold text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}