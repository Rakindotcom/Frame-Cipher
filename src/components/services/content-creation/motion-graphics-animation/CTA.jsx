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
              Start Your Motion Graphics Project
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Have an idea that is difficult to explain with a static image or live-action video? Send us the concept, script, reference, or even a rough description.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We will review what needs to be communicated and recommend the appropriate motion graphics or animation approach.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <PosterButton href="/contact">
                Get a Free Consultation &rarr;
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Request a Production Quote &rarr;
              </PosterButton>
            </div>

            <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3 text-left">
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">In-House Animation Lab</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Illustrators, 2D/3D motion designers, and audio engineers collaborating directly under one roof.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Milestone Approvals</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Sign-off checkpoints on scripts, storyboards, and style frames before full animation begins to eliminate costly rework.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Multi-Ratio Exports</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Turnkey platform deliveries formatted natively for 16:9 widescreen, 9:16 vertical, and 1:1 square feeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
