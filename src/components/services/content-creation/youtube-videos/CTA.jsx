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
              Start Your YouTube Video Production Project
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Have a YouTube video, recurring series, interview, product demonstration, or founder content in mind? Tell us what you want to create, who it is for, and what you need from the production team.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Framecipher can help scope the format, production requirements, timeline, and deliverables from the very first brief to the finished export.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <PosterButton href="/contact">
                Get a Free YouTube Video Production Consultation &rarr;
              </PosterButton>
              <PosterButton href="/projects#video-work" variant="outline">
                View Our YouTube Video Portfolio &rarr;
              </PosterButton>
            </div>

            <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3 text-left">
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">In-House Cinema Team</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Directors, camera operators, gaffers, and editors collaborating under one synchronized creative roof.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Retention-Engineered Editing</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Long-form pacing calibrated for maximum watch-time, audience retention, and clear value delivery.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Turnkey Deliverables</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">
                  Finished 4K video masters, click-worthy custom thumbnails, and vertical Shorts cutdowns included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
