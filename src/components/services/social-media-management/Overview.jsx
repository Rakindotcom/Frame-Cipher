import { SectionIntro, PosterButton } from '../../Kinetic'

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic approach"
          title="Social Media Management Built Around Your Brand &amp; Business Goals"
        >
          A strong social presence needs more than regular posting. It needs a clear strategy,
          useful content, consistent execution, and active community management.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Framecipher provides social media management for SMEs, startups, ecommerce
              businesses, local companies, B2B brands, established businesses, and personal
              brands. We align your social content with your brand voice, audience, business
              goals, and the platforms where your customers actually spend time.
            </p>
            <p>
              Every platform has different content formats, audience behavior, and engagement
              patterns. We plan and manage your presence accordingly instead of publishing the
              same content everywhere and expecting it to work the same way on each one.
            </p>
            <p>
              Our in-house team handles strategy, content planning, creation, publishing,
              community management, and reporting. You stay involved through a clear review and
              approval process before content goes live, so nothing appears under your brand name
              without your sign-off.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Free Social Audit
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              See what is working, what is missing
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review your existing profiles, content, engagement, and platform mix to identify
              where your social presence can improve before any commitment is made.
            </p>
            <div className="mt-7">
              <PosterButton href="/contact">Get Your Free Social Audit &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
