import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Backlink Audit & Baseline',
    description: 'We review referring domains, top linked pages, linking site relevance, anchor text, lost backlinks, and existing publisher relationships, then map competitor gaps and potential risk areas before any outreach begins.',
  },
  {
    number: '02',
    title: 'Strategy & Target Selection',
    description: 'We decide which opportunities, pages, methods, content assets, and markets to pursue, and which prospects to explicitly avoid, rather than chasing every possible placement.',
  },
  {
    number: '03',
    title: 'Target Page & Link Destination Strategy',
    description: 'We decide where each reference should point: homepage, service, research, category, or product page, matched to what the publisher and reader would find most relevant.',
  },
  {
    number: '04',
    title: 'Prospecting & Publisher Vetting',
    description: 'Each prospect is screened for topic relevance, publication quality, audience fit, organic visibility, geographic alignment, content standards, and outbound-link behavior before contact is made.',
  },
  {
    number: '05',
    title: 'Outreach & Content Development',
    description: 'Editorial pitches, guest-content proposals, resource and broken-link outreach, brand-mention requests, and digital PR angles are built and sent in a personalized, human way.',
  },
  {
    number: '06',
    title: 'Placement Verification',
    description: 'We confirm each link is live, points to the right destination, sits in accurate context, matches agreed scope, is accessible to readers and crawlers, and was not materially altered after approval.',
  },
  {
    number: '07',
    title: 'Reporting & Refinement',
    description: 'We report on what was pursued, what was placed, and what changed in the profile, then expand working categories, refine messaging, and reallocate effort where results justify it.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How We Approach Off-Page SEO & Link Building"
        >
          We run each campaign through a structured pipeline: audit, strategy, vetting, outreach,
          verification, and reporting. Quality and transparency stay in place at every stage.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex min-h-64 flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {step.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent transition-colors duration-200 group-hover:text-frame-accent-fg"
              >
                Phase 0{index + 1}
              </span>
            </div>
          ))}

          <div className="flex min-h-64 flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Transparency by default
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              You see which sites are being pursued and which links get placed, with full
              visibility into outreach activity and results throughout the campaign.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}