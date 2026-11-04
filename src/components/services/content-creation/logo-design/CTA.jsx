import { PosterButton } from '../../../Kinetic'

const trustPillars = [
  {
    num: '01',
    title: 'Genuinely Distinct Concepts',
    desc: 'Three thoughtfully developed, unique creative directions, not minor tweaks.'
  },
  {
    num: '02',
    title: 'Complete Vector Systems',
    desc: 'Master AI, SVG, EPS, and PDF files delivered with full commercial ownership.'
  },
  {
    num: '03',
    title: 'Real-World Performance',
    desc: 'Tested for 16px favicons, app icons, single-color stamps, and screen headers.'
  }
]

export default function CTA({ service }) {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="border border-white/[0.08] bg-[#121214] p-8 md:p-14 lg:p-20">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-[#A855F7]">
              Foundation For Growth
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-medium leading-[0.96] tracking-[-0.03em] text-[#FAFAFA]">
              Start Your Logo Design Project
            </h2>
            <p className="mt-6 text-sm md:text-base font-medium leading-relaxed text-[#A1A1AA] max-w-3xl wide:text-lg">
              Whether you are launching a new business, replacing an outdated logo, introducing a new product, or building a stronger visual identity, we can help define the right logo scope.
            </p>
            <p className="mt-3 text-xs md:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] max-w-3xl">
              Share your business information, existing brand materials, preferred applications, and preferred timeline. We will review the requirements and recommend the appropriate logo approach, deliverables, timeline, and pricing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <PosterButton href="/contact">
                Start Your Logo Design Project &rarr;
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Get a Free Consultation &rarr;
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
                <p className="mt-1 text-xs font-medium leading-relaxed text-[#A1A1AA]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
