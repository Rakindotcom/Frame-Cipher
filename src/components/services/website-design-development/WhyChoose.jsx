import React from 'react'
import PosterButton from '../../home/PosterButton'

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
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Why your website matters for{' '}
              <span className="italic text-frame-accent">business growth.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            A slow or confusing website actively loses visitors before they see your offer. We build digital assets that establish enduring credibility and drive measurable revenue.
          </p>
        </div>

        {/* 2-Column Comparative Architecture */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: The Compounding Cost */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                The Compounding Cost of Weak Websites
              </h3>

              <div className="mt-8 space-y-4">
                {weakSiteCosts.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-lg border border-white/[0.04] bg-[#18181B] p-5 transition-colors hover:border-white/[0.08]"
                  >
                    <span className="font-mono text-xs uppercase text-frame-accent mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-heading text-base font-medium text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm font-normal leading-relaxed text-zinc-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <PosterButton href="/contact" variant="accent">
                Book a Strategy Session
              </PosterButton>
            </div>
          </div>

          {/* Right: The Frame Cipher Standard */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Why Choose Frame Cipher for Website Development
            </h3>

            <div className="mt-8 space-y-4">
              {advantages.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/[0.04] bg-[#18181B] p-5 transition-colors hover:border-white/[0.08]"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-frame-accent">
                      0{index + 1}
                    </span>
                    <h4 className="font-heading text-base font-medium text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm font-normal leading-relaxed text-zinc-300">
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
