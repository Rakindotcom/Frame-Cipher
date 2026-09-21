import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    title: 'AdSense Readiness Assessment',
    body: 'A structured review of your current website against relevant AdSense eligibility, content, policy, navigation, technical, and traffic considerations.',
  },
  {
    title: 'Written Findings & Priority Fixes',
    body: 'You receive clear findings that explain: What is wrong → Why it matters → What needs to change → What should be fixed first. This makes the review actionable instead of leaving you with a long list of disconnected issues.',
  },
  {
    title: 'Content and Site Corrections',
    body: 'Where included in your project scope, we fix or improve the content, pages, navigation, structure, and technical elements identified during the assessment.',
  },
  {
    title: 'Policy-Readiness Review',
    body: 'We review the site again after remediation to confirm that the identified policy and readiness issues have been addressed as thoroughly as possible.',
  },
  {
    title: 'Pre-Application Check',
    body: 'Before you submit, we perform a final readiness review to make sure the major issues identified during the engagement have been resolved.',
  },
  {
    title: 'Re-Application Guidance',
    body: 'For previously rejected sites, we provide targeted guidance on what to change before submitting again, rather than simply resending the same application.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Deliverables" title="What You Get With Framecipher">
          Our deliverables are structured so you can act on the review without interpreting a raw
          audit data dump yourself.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Deliverable 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}