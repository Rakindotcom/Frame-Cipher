import { PosterButton, SectionIntro } from '../../../Kinetic'

const included = [
  'Channel strategy & positioning',
  'Content planning & scripting',
  'Long-form production & editing',
  'Thumbnails & title strategy',
  'YouTube SEO & metadata',
  'Shorts strategy',
  'Publishing & channel organization',
  'Analytics & reporting',
]

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="grid gap-px border-2 border-frame-accent bg-frame-accent lg:grid-cols-[1.35fr_0.65fr]">
          <div className="bg-frame-bg p-7 md:p-10 lg:p-12">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Free consultation
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-4xl">
              Ready to Build a Stronger YouTube Channel?
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Your YouTube channel can become more than a collection of videos. With the right strategy,
              content system, production workflow, SEO, packaging, and ongoing analysis, it can become a
              valuable part of your broader digital marketing strategy.
            </p>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Whether you are launching a new channel, rebuilding an existing one, or looking for a team
              to manage your ongoing content, Framecipher can build a YouTube management plan around your
              business goals.
            </p>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-frame-fg">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href="/contact">Get a Free YouTube Management Consultation &rarr;</PosterButton>
              <PosterButton href="/contact" variant="outline">
                Request a Proposal
              </PosterButton>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not ready to talk yet?
            </span>
            <p className="text-sm font-medium leading-relaxed text-frame-fg/90">
              Read how Framecipher works across social media management, or start with a one-time YouTube
              Video SEO &amp; Metadata Audit at ৳15,000.
            </p>
            <div className="space-y-3">
              <PosterButton href="/services/social-media-management" variant="outline">
                Social Media Management &rarr;
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Request the ৳15,000 Audit
              </PosterButton>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-frame-border pt-8">
          <SectionIntro
            eyebrow="A note on expectations"
            title="A Credible Channel, Not a Shortcut"
            className="text-left"
          >
            YouTube performance depends on audience interest, competition, seasonality, and platform
            distribution. We do not promise specific views, subscribers, rankings, viral results, leads,
            sales, monetization, or revenue. What we commit to is strategy, production, optimization,
            publishing, and reporting that explains what the data actually shows.
          </SectionIntro>
        </div>
      </div>
    </section>
  )
}
