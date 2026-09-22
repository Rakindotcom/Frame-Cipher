import { SectionIntro, PosterButton } from '../../../Kinetic'

const objectives = [
  'Brand Awareness',
  'Video Completion',
  'Consideration',
  'Leads',
  'Sales',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our approach"
          title="Pinterest Ads Built for Discovery, Planning & Purchase Intent"
        >
          Pinterest is not just another social platform.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              People use Pinterest to collect ideas, compare possibilities, plan occasions,
              discover products, and prepare for purchases. A wedding, home renovation, seasonal
              wardrobe, recipe, room makeover, or product shortlist can begin on Pinterest long
              before the final transaction.
            </p>
            <p>
              <span className="font-bold text-frame-fg">That changes how advertising should work.</span>
              {' '}
              A strong Pinterest campaign needs more than reach. The creative needs to fit the
              platform. The targeting needs to reflect what people are searching for and
              planning. The landing page needs to continue the same experience after the click.
            </p>
            <p>
              <span className="font-bold text-frame-fg">Framecipher builds Pinterest campaigns around that journey.</span>
              {' '}
              We align the campaign objective, targeting, creative, catalog, landing page,
              tracking, and optimization around a defined business outcome. Depending on the
              campaign, that may be relevant website traffic, leads, purchases, or another
              measurable conversion.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Campaign objectives today
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Objectives Pinterest currently offers
            </h3>
            <ul className="mt-6 space-y-2.5">
              {objectives.map((item, index) => (
                <li key={index} className="flex items-center gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-frame-border/60 pt-5 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              Bidding and creative options vary by objective. We match the objective to the
              business outcome before structuring the campaign around it.
            </p>
            <div className="mt-7">
              <PosterButton href="/contact">Request a Consultation &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}