import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    title: 'Initial Website & Eligibility Review',
    body: 'We start by understanding your site, its publishing model, its audience, its current AdSense status, and the reason you are seeking approval.',
    closing: 'Then we review the eligibility factors and technical access needed for the application.',
  },
  {
    title: 'Content & Policy Assessment',
    body: 'We examine your important pages for originality, usefulness, content depth, prohibited or restricted topics, and other policy risks.',
    closing: 'We also review the broader publishing experience rather than judging one isolated article.',
  },
  {
    title: 'Technical & Structural Fixes',
    body: 'We address the site-level issues that can make the website difficult to navigate, review, or maintain.',
    closing:
      'This may include broken links, redirects, accessibility problems, structural issues, page errors, and unfinished sections.',
  },
  {
    title: 'Content and Page Improvements',
    body: 'Where necessary, we improve weak pages, strengthen important site sections, create or refine trust and transparency pages, and improve content organization.',
    closing:
      'The goal is not to inflate your page count. The goal is to make the existing site more useful and complete.',
  },
  {
    title: 'Pre-Submission Review',
    body: 'After the agreed fixes are completed, we conduct a final review against the issues identified during the initial assessment.',
    closing:
      'We only recommend submission when the agreed readiness work has been completed to a reasonable standard.',
  },
  {
    title: 'Post-Decision Support',
    body: 'Once Google makes its decision, we can help you interpret the outcome.',
    closing:
      'If the site is approved, we can support compliant setup and ad implementation. If it is not approved, we use the new information to determine what should be reviewed or corrected before the next submission.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="How we work" title="How We Prepare Your Website for AdSense">
          Each engagement follows the same path: understand the site, assess its readiness, fix what
          needs fixing, and review it again before you submit.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-3xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.body}
                </p>
                {step.closing && (
                  <p className="mt-4 border-l-2 border-frame-accent pl-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {step.closing}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10">
          <p className="text-sm md:text-base font-black uppercase leading-tight tracking-tight text-frame-fg">
            A prepared website that presents useful content, clear structure, and compliant
            implementation before Google reviews it.
          </p>
        </div>
      </div>
    </section>
  )
}