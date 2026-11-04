
import { AutoLinks } from '../../../seo/AutoLinks'
import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section id="cta" className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <div className="border-2 border-[#A855F7]/40 bg-[#A855F7]/10 p-8 md:p-16 lg:p-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-[#A855F7]">
              Let&apos;s Build Together
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-medium leading-[0.96] tracking-[-0.03em] text-[#FAFAFA]">
              Start Your Video Production Project
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-xl font-medium leading-relaxed text-[#A1A1AA]"><AutoLinks currentPath="/services/content-creation/video-production" allowed={["/studio/corporate-video-production"]}>
              Have an idea for a corporate video, brand film, product video, commercial, or social campaign? Let&apos;s turn the idea into a clear production plan. Tell us what you want to create, where the video will be used, who it needs to reach, and what you want it to achieve.
            </AutoLinks></p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <PosterButton href="/contact">
                Get a Free Video Production Consultation &rarr;
              </PosterButton>
              <PosterButton href="/projects#video-work" variant="outline">
                View Our Video Portfolio &rarr;
              </PosterButton>
            </div>

            <div className="mt-12 grid gap-px border border-white/[0.08] bg-frame-border sm:grid-cols-3 text-left">
              <div className="bg-[#09090B] p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Director Collaboration</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
                  Direct consultation with our creative directors to shape your video structure before filming.
                </p>
              </div>
              <div className="bg-[#09090B] p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Cinema-Grade Equipment</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
                  4K cinema cameras, prime optics, professional gaffer lighting, and wireless audio setups.
                </p>
              </div>
              <div className="bg-[#09090B] p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Transparent Milestones</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
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
