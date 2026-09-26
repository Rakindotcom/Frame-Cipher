import { SectionIntro, PosterButton } from '../../../Kinetic'

const approvalChecks = [
  'Accuracy',
  'Tone',
  'Messaging',
  'Offers',
  'Product information',
  'Brand requirements',
]

const reporting = [
  'What is being produced',
  'What was published',
  'What performed well',
  'What underperformed',
  'What we learned',
  'What we recommend changing',
]

const reasons = [
  {
    number: '01',
    title: 'One In-House Team',
    body: 'Strategy, content, SEO, creative production, and reporting stay connected through one in-house team. You do not need to coordinate separate freelancers for every part of your TikTok workflow.',
  },
  {
    number: '02',
    title: 'TikTok-Native Content Strategy',
    body: 'TikTok content should not feel like a resized Facebook post or an Instagram caption placed on a video. We develop content around short-form storytelling, hooks, audience questions, trends, visual communication, and the way your specific market consumes content.',
  },
  {
    number: '03',
    title: 'Search-Aware Content',
    body: 'We incorporate search and discoverability into content planning without turning every video into keyword-stuffed copy. Topics, captions, on-screen text, profile information, and content structure are considered together.',
  },
  {
    number: '04',
    title: 'Human Review & Approval',
    body: 'Your brand should remain yours. We use a defined review process so content can be checked for:',
    list: approvalChecks,
    note: 'before publishing.',
  },
  {
    number: '05',
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Bangladesh and supports businesses targeting both local and international markets.',
    sub: [
      'For Bangladesh campaigns, content can be adapted to Bangla, English, or natural Banglish where appropriate.',
      'For international campaigns, we adapt content to the target market rather than applying one generic content calendar everywhere.',
    ],
  },
  {
    number: '06',
    title: 'Client-Owned Accounts & Secure Access',
    body: 'Your TikTok account remains under your ownership. Where supported, we prefer platform-based or role-based access rather than unnecessary password sharing. Access is limited to what the team needs to perform the agreed work.',
  },
  {
    number: '07',
    title: 'Clear Reporting & Communication',
    body: 'You should know:',
    list: reporting,
    note: 'Our reporting is designed to make those decisions easier to understand.',
  },
  {
    number: '08',
    title: 'Evidence-Based Optimization',
    body: 'We do not rely on assumptions about what will work forever. We use content performance, audience response, and business data where available to guide future content decisions.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why Framecipher"
          title="Why Choose Framecipher for TikTok Management"
        >
          Strategy, content, production, discoverability, community, and reporting stay in one workflow
          instead of being split across disconnected providers.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article key={reason.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {reason.number}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.body}
                </p>
              </div>

              {reason.sub && (
                <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4">
                  {reason.sub.map((entry) => (
                    <li
                      key={entry}
                      className="flex items-start gap-2.5 text-xs font-medium leading-relaxed text-frame-fg/90 md:text-sm"
                    >
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              )}

              {reason.list && (
                <div className="mt-5 border-t-2 border-frame-border/60 pt-4">
                  {reason.listLabel && (
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      {reason.listLabel}
                    </span>
                  )}
                  <ul className={`flex flex-wrap gap-2 ${reason.listLabel ? 'mt-3' : ''}`}>
                    {reason.list.map((entry) => (
                      <li
                        key={entry}
                        className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                      >
                        {entry}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {reason.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {reason.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
            Your brand should remain yours. Content goes through human review before publication.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Request a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
