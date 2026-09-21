import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    title: 'AI Visibility Baseline',
    body: 'A starting report showing where your brand appears, where competitors appear, what sources are cited, and which important queries currently show limited visibility.',
    points: [],
  },
  {
    title: 'Target Prompt & Query Set',
    body: 'A structured set of relevant prompts and queries covering:',
    points: [
      'Brand',
      'Services',
      'Products',
      'Commercial questions',
      'Comparisons',
      'Recommendations',
      'Informational topics',
      'Competitor-related searches',
    ],
    closing: 'The exact set depends on your business and target market.',
  },
  {
    title: 'Citation & Mention Report',
    body: 'A structured view of:',
    points: [
      'Brand mentions',
      'Citation sources',
      'Competitor mentions',
      'Query-level visibility',
      'Business-information accuracy',
      'Changes over time',
    ],
  },
  {
    title: 'Content & Entity Gap Analysis',
    body: 'We identify gaps involving:',
    points: [
      'Missing answers',
      'Weak topic coverage',
      'Unclear entities',
      'Inconsistent business information',
      'Missing supporting evidence',
      'Content competitors use successfully',
    ],
  },
  {
    title: 'AI-Ready Content Recommendations',
    body: 'Recommendations can cover:',
    points: [
      'Direct-answer sections',
      'Definitions',
      'FAQs',
      'Content structure',
      'Topic coverage',
      'Evidence',
      'Internal links',
      'Supporting pages',
      'Page-level improvements',
    ],
  },
  {
    title: 'Brand & Source Authority Plan',
    body: 'We identify credible opportunities to strengthen the information ecosystem around your business through:',
    points: [
      'Expert profiles',
      'Industry references',
      'Publications',
      'Digital PR',
      'Relevant third-party sources',
      'Brand consistency',
    ],
  },
  {
    title: 'Technical Recommendations',
    body: 'Depending on the audit scope, we can provide recommendations around:',
    points: [
      'Crawlability',
      'Indexation',
      'Structured data',
      'Internal linking',
      'Page accessibility',
      'Content structure',
      'Performance',
      'Technical SEO foundations',
    ],
  },
  {
    title: 'Ongoing Visibility Tracking',
    body: 'For ongoing engagements, we can monitor:',
    points: [
      'Prompt coverage',
      'AI mentions',
      'Citations',
      'Competitor visibility',
      'Source changes',
      'Search performance',
      'Relevant traffic and conversion signals',
    ],
  },
]

export default function WhatYouGet() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Deliverables" title="What You Get With Framecipher">
          Our deliverables are designed to turn AI-search research into a practical optimization
          plan.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent md:p-8"
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
              {item.points.length > 0 && (
                <ul className="mt-5 space-y-2.5 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.closing && (
                <p className="mt-5 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {item.closing}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}