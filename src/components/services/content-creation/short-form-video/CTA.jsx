import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section id="cta" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <div className="border-2 border-frame-accent bg-frame-accent/10 p-8 md:p-16 lg:p-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Let&apos;s Build Together
            </span>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,6vw,5.5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Start Your Short-Form Video Project
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Need Reels, TikTok videos, YouTube Shorts, or a recurring batch of short-form content? Framecipher can help you define the concepts, plan the production, film the content, edit the final videos, and prepare the agreed platform-ready deliverables.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Tell us what you want to create, who you want to reach, where the content will be used, and how many videos you need. We&apos;ll help define the production scope, content approach, timeline, and next steps.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <PosterButton href="/contact">
                Get a Free Short-Form Video Consultation &rarr;
              </PosterButton>
              <PosterButton href="/projects#video-work" variant="outline">
                View Our Short-Form Video Portfolio &rarr;
              </PosterButton>
            </div>

            <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3 text-left">
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">In-House Creative Team</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Concept writers, directors, videographers, and mobile editors collaborate under one synchronized roof.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Native 9:16 Vertical Optics</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Filmed natively in vertical 9:16 with dedicated monitor cages, wireless audio, and platform framing guides.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Batch Production Agility</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Produce weeks of high-performing Reels and Shorts in coordinated monthly or multi-video shoot sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
