import { SectionIntro } from '../../../Kinetic'

const manualActions = [
  {
    title: 'Unnatural Links',
    body: 'Google can issue a manual action when it detects a pattern of unnatural, artificial, deceptive, or manipulative links pointing to or from a site.',
    closing:
      'We investigate the link profile, identify relevant violations, support removal efforts, and disavow only where the situation meets Google\u2019s guidance for that tool.',
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
    body: 'Structured data can also create issues when markup does not accurately represent the visible page or otherwise violates Google\u2019s guidelines.',
    closing:
      'We review affected markup and other identified policy violations, correct the implementation, and document the remediation before any reconsideration request.',
  },
]

export default function ManualActions() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Manual action scope" title="Manual Actions We Can Help Resolve">
          When a manual action is present, the recovery work needs to address the specific violation
          Google identified rather than applying a generic cleanup.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {manualActions.map((item, index) => (
            <div key={item.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                {item.closing && (
                  <p className="mt-4 border-l-2 border-frame-accent pl-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {item.closing}
                  </p>
                )}
              </div>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}