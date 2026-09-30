import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const reasons = [
  {
    num: '01',
    title: 'Business-Focused Design',
    desc: 'We design around commercial objectives, target audiences, and information hierarchy, not just decorative aesthetics. Every layout is built to clarify your value proposition.'
  },
  {
    num: '02',
    title: 'Consistent Visual Systems',
    desc: 'When multiple assets are required, we create a cohesive visual direction rather than treating every piece in isolation. Typography, color, and spacing remain strictly unified.'
  },
  {
    num: '03',
    title: 'Production-Ready Delivery',
    desc: 'Artwork is prepared to uncompromised technical standards: CMYK, bleed, safe margins, and packaging dielines for print; crisp RGB dimensions for digital screens.'
  },
  {
    num: '04',
    title: 'Flexible Project Scope',
    desc: 'Commission a single flagship deliverable (pitch deck, company profile), a complete collateral package, or an ongoing monthly design retainer tailored to your pace.'
  },
  {
    num: '05',
    title: 'Connected Creative Support',
    desc: 'Graphic design operates side-by-side with our in-house Branding, Copywriting, Video Production, and Paid Advertising teams, making multi-channel campaigns effortless to coordinate.'
  }
]

const clientChecklist = [
  'Approved text, copy, or bullet points for the document',
  'Vector logo files (.AI, .EPS, or SVG) and brand assets',
  'Brand guidelines or style manual (if available)',
  'Required physical dimensions, page counts, or pixel sizes',
  'Visual references or stylistic benchmarks you admire',
  'Intended distribution environment (print press vs. digital screen)',
  'Required final file formats and editable software preferences',
  'Target delivery date or campaign launch deadline',
  'Printer or manufacturer dieline templates (for packaging/print)'
]

const portfolioAttributes = [
  'Project Type & Scope of Work',
  'Industry & Target Audience',
  'Design Requirement & Core Objective',
  'Key Deliverables & File Handovers',
  'Design Approach & Typographic Grid',
  'Final Application & Production Specs',
  'Commercial Mockups & Physical Prints',
  'Measurable Business Outcomes'
]

export default function WhyChoose() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        {/* WHY CHOOSE US */}
        <SectionIntro
          eyebrow="Proven Methodology"
          title="Why Businesses Choose Our Graphic Design Service"
        >
          We bridge strategic communication, sophisticated aesthetics, and mechanical production rigor to deliver collateral that performs in boardrooms, retail shelves, and digital feeds.
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className={`border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <span className="font-mono text-xs font-black text-frame-accent">
                  PILLAR {item.num}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WHAT WE NEED FROM YOU */}
        <div className="mt-16 border-2 border-frame-border bg-frame-bg p-6 md:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-frame-border/60 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Streamlined Production
              </span>
              <h3 className="mt-1 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                What We Need From You
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-frame-muted-fg">
              Kickoff Checklist
            </span>
          </div>

          <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
            To keep production fast and focused, we review these inputs before production begins. If any asset is missing or in progress, we help identify and coordinate requirements during briefing:
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clientChecklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 border border-frame-border/80 bg-frame-muted/20 p-3.5">
                <CheckIcon />
                <span className="text-xs font-medium text-frame-fg leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SELECTED GRAPHIC DESIGN WORK / PORTFOLIO TRIGGER */}
        <div className="mt-12 border-2 border-frame-accent bg-frame-bg p-6 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-frame-border/60 pb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Work In The Real World
              </span>
              <h3 className="mt-1 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
                Selected Graphic Design Work
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg max-w-2xl">
                Explore selected graphic design projects across business presentations, company profiles, brochures, packaging, print collateral, marketing materials, and corporate communication.
              </p>
            </div>
            <div className="shrink-0">
              <PosterButton href="/projects#graphic-design">
                View Graphic Design Portfolio &rarr;
              </PosterButton>
            </div>
          </div>

          <div className="mt-6">
            <span className="text-[11px] font-black uppercase tracking-wider text-frame-muted-fg">
              Detailed Case Study Documentation Includes:
            </span>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {portfolioAttributes.map((attr, idx) => (
                <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/30 px-3 py-2 text-[11px] font-bold uppercase tracking-tight text-frame-fg">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                  <span className="truncate">{attr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
