import { SectionIntro, PosterButton } from '../../../Kinetic'

const reviewed = [
  'The ad or campaign message',
  'The audience segment being targeted',
  'The specific promise or offer in the ad',
  'Search intent, if the traffic is search-based',
  'The keywords or phrases used in the ad',
  'The landing page headline',
  'The landing page subheadline',
  'The offer description on the page',
  'The primary call to action on the page',
]

const related = [
  { label: 'Explore Google Ads Management', href: '/services/paid-advertising/google-ads' },
  { label: 'Explore Meta Ads Management', href: '/services/paid-advertising/meta-ads' },
]

export default function MessageMatch() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Message match"
          title="Message Match: Connecting Your Ads to Your Landing Page"
        >
          When someone clicks an ad, they expect to arrive somewhere that continues the same conversation. The
          landing page should deliver that.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              A mismatch between the ad and the landing page often creates confusion, and confusion reduces the
              chance of conversion.
            </p>
            <p>
              We review the following before writing, so the page can continue the promise made in the
              campaign.
            </p>
            <p>
              If your landing page does not match the ad, you may still get clicks, but the visit is less likely
              to lead anywhere.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Reviewed for message match
            </span>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {reviewed.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-frame-border pt-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Paid media services
          </span>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            {related.map((item) => (
              <PosterButton key={item.href} href={item.href} variant="outline">
                {item.label} &rarr;
              </PosterButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
