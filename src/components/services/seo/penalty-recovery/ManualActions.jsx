import React from 'react'

const manualActions = [
  {
    title: 'Unnatural Links',
    body: 'Google can issue a manual action when it detects a pattern of unnatural, artificial, deceptive, or manipulative links pointing to or from a site.',
    closing:
      'We investigate the link profile, identify relevant violations, support removal efforts, and disavow only where the situation meets Google’s guidance for that tool.',
  },
  {
    title: 'Thin or Low-Value Content',
    body: 'Content-focused manual actions can require significant remediation across affected pages.',
    closing:
      'We identify pages that provide little useful value, improve or remove them where appropriate, and strengthen important sections so the site provides a more useful experience.',
  },
  {
    title: 'User-Generated & Third-Party Spam',
    body: 'Spam appearing in comments, forums, profiles, or other user-generated areas can create site-level problems when it is not properly controlled.',
    closing:
      'We investigate affected sections, remove or restrict problematic content, and improve preventive controls where appropriate.',
  },
  {
    title: 'Scaled Content & Spam Abuse',
    body: 'Large volumes of low-value or automatically produced pages can create broader quality and spam concerns.',
    closing:
      'We review page patterns, content generation practices, indexing exposure, and the overall value of affected sections before planning remediation.',
  },
  {
    title: 'Cloaking & Sneaky Redirects',
    body: 'Serving substantially different content to search engines and users, or using deceptive redirects, can create serious search-policy problems.',
    closing:
      'We investigate the implementation, identify affected URLs, correct the underlying behavior, and document the changes required for review.',
  },
  {
    title: 'Structured Data & Other Policy Violations',
    body: 'Structured data can also create issues when markup does not accurately represent the visible page or otherwise violates Google’s guidelines.',
    closing:
      'We review affected markup and other identified policy violations, correct the implementation, and document the remediation before any reconsideration request.',
  },
]

export default function ManualActions() {
  return (
    <section className="bg-[#09090B] py-20 md:py-28 border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A855F7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span>Manual Action Scope</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl">
            Manual Actions We Can Help Resolve
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            When a manual action is present, the recovery work needs to address the specific violation Google identified rather than applying a generic cleanup.
          </p>
        </div>

        {/* Modality 3: Seamless Blueprint Matrix Grid */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {manualActions.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214] sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-rose-400">
                    Violation // 0{index + 1}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-rose-500/30 transition-colors duration-300 group-hover:bg-rose-500" />
                </div>

                <h3 className="mt-6 text-xl font-medium text-white transition-colors duration-200 group-hover:text-rose-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>

              {item.closing && (
                <div className="mt-6 rounded-xl border-l-2 border-rose-500 bg-[#141418] p-3.5 text-xs text-zinc-400 leading-relaxed">
                  {item.closing}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
