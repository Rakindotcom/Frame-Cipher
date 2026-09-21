import { SectionIntro, PosterButton } from '../../../Kinetic'

const documented = [
  'Initial rejection or readiness issues',
  'Key content and technical findings',
  'Fixes implemented',
  'Preparation timeline',
  'Final AdSense decision',
  'Additional improvements made after review',
]

export default function CaseStudies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Verified evidence" title="Google AdSense Approval Results & Case Studies">
          We believe AdSense case studies should show the real condition of the website before and
          after preparation.
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
          <p className="text-sm font-semibold leading-relaxed text-frame-fg">
            Where verified project data is available, we document:
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {documented.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm font-medium leading-snug text-frame-fg/90"
              >
                <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium leading-relaxed text-frame-muted-fg">
            We do not publish invented approval percentages or unsupported &ldquo;100%
            approval&rdquo; claims. Verified results only.
          </p>
          <div className="mt-8">
            <PosterButton href="/case-studies/adsense-approval" variant="outline" className="whitespace-nowrap">
              View Our Case Studies &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}