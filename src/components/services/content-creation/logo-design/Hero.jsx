import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-[#A855F7] mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const realWorldContexts = [
  'Reduced to a 16px digital favicon or mobile app icon',
  'Printed in single-color black, white, or monochrome foil stamp',
  'Placed on complex dark or vibrant photographic backgrounds',
  'Used as a standalone mark without a supporting tagline',
  'Applied to physical retail packaging, cartons, or bottles',
  'Reproduced in high-speed commercial newsprint or embroidery',
  'Used across various social media avatar circles and banners',
  'Combined seamlessly with secondary partner and sub-brand marks'
]

const evaluationPoints = [
  { label: 'Brand Positioning', desc: 'Communicating market stance and category authority.' },
  { label: 'Target Audience', desc: 'Resonating with buyer demographics and cultural expectations.' },
  { label: 'Category Conventions', desc: 'Understanding industry symbols to avoid generic clichés.' },
  { label: 'Competitor Visuals', desc: 'Carving out unmistakable contrast against direct rivals.' },
  { label: 'Application Reqs', desc: 'Engineered for screen headers, signage, and print substrates.' },
  { label: 'Typography & Kerning', desc: 'Custom letterforms balanced for long-term recognition.' },
  { label: 'Color & Monochrome', desc: 'Tested for full spectrum, monochrome, and reversed use.' },
  { label: 'Scalability', desc: 'Maintaining crisp geometry from micro-icons to billboards.' },
  { label: 'Production Rigor', desc: 'Vector files prepared to exact print and web standards.' },
  { label: 'Future Scalability', desc: 'Modular foundation ready to expand into a full identity.' }
]

export default function Hero({ service }) {
  const title = service?.h1 || "Logo Design Service in Bangladesh"
  const subtitle = service?.shortDesc || "Your logo needs to work beyond the presentation mockup. Framecipher provides logo design service for businesses that need a new logo, a professional redesign, or a practical logo system built for real-world use."

  return (
    <div className="bg-[#09090B] text-[#FAFAFA]">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.06] bg-[#09090B]/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] md:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-[#FAFAFA]">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-[#FAFAFA]">Services</Link>
          <span>/</span>
          <Link href="/services/content-creation" className="transition hover:text-[#FAFAFA]">Content Creation</Link>
          <span>/</span>
          <span className="text-[#A855F7]">Logo Design</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Visual Identity Architecture"
        meta="Vector Master Artwork / Responsive Variations / Real-World Usability"
        number="06"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">
              Get a Free Consultation &rarr;
            </PosterButton>
            <PosterButton href="/projects#logo-design" variant="outline">
              View Logo Design Portfolio &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
        <span className="mt-4 block text-xs md:text-sm font-normal text-[#A1A1AA] leading-relaxed wide:text-lg">
          We develop distinctive logo concepts, refine the selected direction into scalable vector artwork, create the required variations, and prepare the final files for print and digital use.
        </span>
      </PageHero>

      {/* LOGO DESIGN BUILT FOR REAL-WORLD USE */}
      <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-[#A855F7] mb-4">
              Real-World Engineering
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-medium leading-[0.96] tracking-[-0.03em] text-[#FAFAFA]">
              Logo Design Built for Real-World Use
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-[#A1A1AA] wide:text-lg">
              A logo should not only look good when presented large on a screen mockup. It must remain immediately recognizable and technically reproducible across real-world production environments.
            </p>
          </div>

          {/* 8 STRESS TEST CONTEXTS */}
          <div className="mt-12 border border-white/[0.08] bg-[#09090B] p-6 md:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.06] pb-4">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                Stress-Tested Usability
              </span>
              <span className="text-xs font-mono font-bold text-[#A1A1AA]">
                8 Environmental Benchmarks
              </span>
            </div>
            <p className="mt-3 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
              Before finalizing any mark, we verify that it functions flawlessly in demanding real-world conditions:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {realWorldContexts.map((context, idx) => (
                <div key={idx} className="flex items-start gap-2.5 border border-white/[0.08] bg-[#121214] p-3.5">
                  <CheckIcon />
                  <span className="text-xs font-medium text-[#FAFAFA] leading-snug">{context}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 10-POINT EVALUATION GRID */}
          <div className="mt-8 border border-white/[0.08] bg-[#09090B] p-6 md:p-8">
            <div className="border-b border-white/[0.06] pb-4">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                Systematic Assessment
              </span>
              <h3 className="mt-1 font-heading text-xl font-bold tracking-tight text-[#FAFAFA]">
                Our 10-Point Logo Design Evaluation
              </h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {evaluationPoints.map((pt, idx) => (
                <div key={idx} className="border border-white/[0.06] bg-[#121214] p-4 flex flex-col justify-between">
                  <span className="font-mono text-[10px] font-black text-[#A855F7]">
                    0{idx + 1}
                  </span>
                  <div className="mt-3">
                    <h4 className="font-heading text-sm font-bold tracking-tight text-[#FAFAFA]">
                      {pt.label}
                    </h4>
                    <p className="mt-1 text-[11px] font-medium leading-relaxed text-[#A1A1AA]">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
