import Link from 'next/link'
import { PosterButton } from '../../Kinetic'

export default function CTA() {
  return (
    <section id="cta" className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <div className="border-2 border-[#A855F7]/40 bg-[#A855F7]/10 p-8 md:p-16 lg:p-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-[#A855F7]">
              Get Started Today
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-medium leading-[0.96] tracking-[-0.03em] text-[#FAFAFA]">
              Start Your Content Creation Project
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-xl font-medium leading-relaxed text-[#A1A1AA]">
              You do not need to know exactly what production package you need before contacting us. Tell us what you are trying to create, where you plan to use it, and what your business needs to achieve. We can review the requirements, show you relevant work, and recommend a practical production approach.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <PosterButton href="/projects" variant="outline">
                See Our Portfolio &rarr;
              </PosterButton>
              <PosterButton href="/contact">
                Get a Free Production Consultation &rarr;
              </PosterButton>
            </div>

            <div className="mt-12 grid gap-px border border-white/[0.08] bg-frame-border sm:grid-cols-3 text-left">
              <div className="bg-[#09090B] p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Creative Director Review</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
                  Every inquiry is personally reviewed by our creative leadership before initial consultation.
                </p>
              </div>
              <div className="bg-[#09090B] p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Portfolio Work Matching</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
                  We show you verified production examples in your specific niche, format, and platform.
                </p>
              </div>
              <div className="bg-[#09090B] p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">Transparent Estimates</span>
                <p className="mt-1 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
                  Transparent timelines, deliverables, equipment specs, and pricing before work begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
