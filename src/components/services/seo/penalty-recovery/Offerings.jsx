import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const offerings = [
  {
    title: 'Penalty Diagnosis & Investigation',
    body: 'We begin with evidence.',
    lead: 'Our investigation can include:',
    points: [
      'Search Console data',
      'Analytics data where available',
      'Manual-action and security reports',
      'Traffic patterns',
      'Ranking changes',
      'Affected URL groups',
      'Technical changes',
      'Backlink history',
      'Content changes',
      'Relevant Google update timing',
    ],
    closing: 'The goal is a defensible diagnosis before remediation begins.',
  },
  {
    title: 'Manual Action Remediation',
    body: 'When Google has issued a manual action, the remediation needs to address the specific violation described in Search Console.',
    lead: 'Depending on the issue, this may involve:',
    points: [
      'Content removal or improvement',
      'Link remediation',
      'Technical corrections',
      'Structured-data changes',
      'Spam cleanup',
      'Other violation-specific work',
    ],
    closing:
      'Google’s current manual-action guidance provides issue-specific remediation steps and requires the problem to be addressed before a review request.',
  },
  {
    title: 'Unnatural Link Remediation & Disavow When Appropriate',
    body: 'We investigate backlinks for patterns that may violate Google’s link spam policies, document problematic links, and pursue removal where appropriate.',
    closing:
      'Disavow is treated as an advanced tool, not a routine cleanup step. Google says most sites do not need to use it and recommends removal efforts first when dealing with a genuine unnatural-link issue.',
  },
  {
    title: 'Content Quality & People-First Recovery',
    body: 'For quality-related ranking declines, we review whether important pages provide original, useful, complete, and relevant information for the people searching for it. We assess content depth, topical coverage, intent alignment, originality, page usefulness, first-hand value where relevant, and the overall quality of the publishing experience.',
    closing:
      'We also consider E-E-A-T-related qualities without treating E-E-A-T as a single ranking score.',
  },
  {
    title: 'Technical SEO & Migration Recovery',
    body: 'We investigate technical changes that could have caused lost visibility.',
    lead: 'This can include:',
    points: [
      'Indexing and crawlability',
      'No index directives',
      'Canonical implementation',
      'Redirects',
      'URL changes',
      'XML sitemaps',
      'Internal linking',
      'HTTP status issues',
      'Rendering problems',
      'Migration configuration',
      'Accidental site-wide changes',
    ],
    closing:
      'The objective is to restore clear, consistent signals that allow search engines to discover, crawl, and understand the intended pages.',
  },
  {
    title: 'Google Core & Spam Update Recovery',
    body: 'When the evidence points toward an update-related ranking decline rather than a manual action, recovery requires broader improvement rather than reconsideration.',
    closing:
      'We analyze the pages and queries most affected, identify quality and relevance gaps, compare competing results, and prioritize changes that improve the site’s usefulness and search alignment.',
  },
  {
    title: 'Reconsideration Request Support',
    body: 'For manual actions, we prepare the reconsideration process after the underlying issues have been addressed.',
    closing:
      'Google recommends that a reconsideration request explain the exact problem, the steps taken to fix it, and the outcome of the remediation. We help prepare the request, organize supporting documentation, and make sure it accurately reflects the work completed.',
  },
  {
    title: 'Post-Recovery Monitoring & Prevention',
    body: 'Recovery is not complete simply because rankings begin to improve.',
    closing:
      'We monitor important visibility indicators, track the pages and queries involved in the original loss, document changes, and look for signs that the original problem could return. Where appropriate, we also recommend preventive technical, content, and SEO controls.',
  },
]

export default function Offerings() {
  return (
    <section className="bg-[#09090B] py-20 md:py-28 border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A855F7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span>Core Recovery Solutions</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl">
            Our Google Penalty Recovery Services
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            Penalty recovery is only effective when it targets the actual cause. Our services cover the full arc from diagnosis to remediation, reconsideration, and ongoing monitoring.
          </p>
        </div>

        {/* Modality 3: Seamless Blueprint Matrix Grid */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-2">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                    Service // 0{index + 1}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-frame-accent" />
                </div>

                <h3 className="mt-6 text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {item.body}
                </p>

                {item.lead && (
                  <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-white">
                    {item.lead}
                  </p>
                )}

                {item.points && (
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {item.closing && (
                <div className="mt-6 rounded-xl border-l-2 border-frame-accent bg-[#141418] p-4 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                  {item.closing}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Conversion Ledger */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-medium text-white sm:text-xl">
              Not sure which recovery service fits your traffic loss?
            </h4>
            <p className="text-sm text-zinc-400">
              We begin with a data-driven diagnosis to confirm whether a penalty exists before recommending work.
            </p>
          </div>
          <PosterButton href="/contact">
            Get Free Consultation &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
