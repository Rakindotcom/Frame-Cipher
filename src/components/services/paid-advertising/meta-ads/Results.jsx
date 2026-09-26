import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const caseStudyMetrics = [
  'Business objective',
  'Industry',
  'Market',
  'Starting challenge',
  'Campaign objective',
  'Creative strategy',
  'Tracking setup',
  'Campaign period',
  'Advertising spend range',
  'Cost per result',
  'Revenue or ROAS where measurable',
  'Key optimization decisions',
  'Outcome',
]

export default function Results() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Evidence based"
          title="Meta Ads Results & Case Studies"
        >
          Strong Meta Ads performance should be presented with context, not isolated screenshots
          or headline numbers.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              Where verified Framecipher case studies are available, we show:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {caseStudyMetrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-frame-fg">{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Why the context matters
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Verified results should demonstrate not only what happened, but why the campaign
                was structured that way and what conditions influenced the outcome.
              </p>
            </div>
            <div className="border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                We do not publish performance figures that cannot be supported by the underlying
                account or approved client data.
              </p>
            </div>
            <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7 space-y-3">
              <h4 className="font-heading text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                Verified Meta Ads Case Studies
              </h4>
              <ul className="grid gap-2.5 sm:grid-cols-2 text-xs font-semibold">
                <li>
                  <Link href="/case-studies/facebook-instagram-ads-portfolio" className="text-frame-fg hover:text-frame-accent transition-colors flex items-center justify-between">
                    <span className="truncate">FB &amp; IG Ads Portfolio</span>
                    <span className="text-frame-accent">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/sumons-aroma-messenger-commerce" className="text-frame-fg hover:text-frame-accent transition-colors flex items-center justify-between">
                    <span className="truncate">Sumon&apos;s Aroma Commerce</span>
                    <span className="text-frame-accent">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/ipb-edu-happy-tours-meta-ads" className="text-frame-fg hover:text-frame-accent transition-colors flex items-center justify-between">
                    <span className="truncate">IPB Edu &amp; Tours</span>
                    <span className="text-frame-accent">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/ruposhi-mart-meta-ads" className="text-frame-fg hover:text-frame-accent transition-colors flex items-center justify-between">
                    <span className="truncate">Ruposhi Mart E-Commerce</span>
                    <span className="text-frame-accent">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/rihawebtech-meta-ads" className="text-frame-fg hover:text-frame-accent transition-colors flex items-center justify-between">
                    <span className="truncate">Riha Web Tech Leads</span>
                    <span className="text-frame-accent">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/rpl-consultancy-meta-ads" className="text-frame-fg hover:text-frame-accent transition-colors flex items-center justify-between">
                    <span className="truncate">RPL Consultancy Client Gen</span>
                    <span className="text-frame-accent">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/luxury-beauty-rwt-meta-ads" className="text-frame-fg hover:text-frame-accent transition-colors flex items-center justify-between">
                    <span className="truncate">Luxury Beauty Ad Scaling</span>
                    <span className="text-frame-accent">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/travel-lifestyle-meta-ads" className="text-frame-fg hover:text-frame-accent transition-colors flex items-center justify-between">
                    <span className="truncate">Travel &amp; Lifestyle Bookings</span>
                    <span className="text-frame-accent">&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>
            <PosterButton href="/case-studies">View All Case Studies</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}