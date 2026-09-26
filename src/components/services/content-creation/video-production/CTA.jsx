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
              Start Your Video Production Project
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Have an idea for a corporate video, brand film, product video, commercial, or social campaign? Let&apos;s turn the idea into a clear production plan. Tell us what you want to create, where the video will be used, who it needs to reach, and what you want it to achieve.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <PosterButton href="/contact">
                Get a Free Video Production Consultation &rarr;
              </PosterButton>
              <PosterButton href="/projects#video-work" variant="outline">
                View Our Video Portfolio &rarr;
              </PosterButton>
            </div>

            <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3 text-left">
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Director Collaboration</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Direct consultation with our creative directors to shape your video structure before filming.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Cinema-Grade Equipment</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  4K cinema cameras, prime optics, professional gaffer lighting, and wireless audio setups.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Transparent Milestones</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Fixed quotes, structured review checkpoints, and clear turnaround schedules from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
