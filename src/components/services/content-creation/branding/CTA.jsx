
import { AutoLinks } from '../../../seo/AutoLinks'
import { PosterButton } from '../../../Kinetic'

const trustPillars = [
  {
    num: '01',
    title: 'Visual & Verbal Unity',
    desc: 'Coordinating graphic design and copywriting voice under one unified in-house team.'
  },
  {
    num: '02',
    title: 'Operational Governance',
    desc: 'A comprehensive brand manual that eliminates daily guesswork and protects consistency.'
  },
  {
    num: '03',
    title: 'Commercial Longevity',
    desc: 'Strategic positioning designed to outlast passing visual fads and scale gracefully.'
  }
]

export default function CTA({ service }) {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="border border-white/[0.08] bg-[#121214] p-8 md:p-14 lg:p-20">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-[#A855F7]">
              Architectural Clarity
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-medium leading-[0.96] tracking-[-0.03em] text-[#FAFAFA]">
              Start Your Branding Project
            </h2>
            <p className="mt-6 text-sm md:text-base font-medium leading-relaxed text-[#A1A1AA] max-w-3xl wide:text-lg">
              Your brand should give your business a clear direction for how it looks, how it sounds, and how it stays consistent as it grows.
            </p>
            <p className="mt-3 text-xs md:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] max-w-3xl">
              Whether you need a new brand identity, a system around an existing logo, or a strategic rebrand, we can scope the work around what your business actually needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <PosterButton href="/contact">
                Get Free Consultation &rarr;
              </PosterButton>
              <PosterButton href="/projects#branding" variant="outline">
                View Branding Portfolio &rarr;
              </PosterButton>
            </div>
          </div>

          <div className="mt-14 grid gap-6 border-t border-white/[0.08]/60 pt-10 sm:grid-cols-3">
            {trustPillars.map((item, idx) => (
              <div key={idx}>
                <span className="font-mono text-xs font-black text-[#A855F7]">
                  ANCHOR 0{idx + 1}
                </span>
                <h4 className="mt-2 font-heading text-base font-bold tracking-tight text-[#FAFAFA]">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs font-medium leading-relaxed text-[#A1A1AA]"><AutoLinks currentPath="/services/content-creation/branding" allowed={["/services/content-creation/graphic-design"]}>
                  {item.desc}
                </AutoLinks></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
