import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    title: 'Backlink Prospecting & Competitor Link Gap Analysis',
    description: 'Internal linking helps search engines understand the relationships between pages. We build contextual links that pass relevance and authority where they matter.',
    micro: 'We start by understanding where your website stands and where relevant opportunities already exist. This is the research layer that keeps outreach from becoming guesswork.',
    bullets: [
      'Relevant referring domains that already cite your space',
      'Competitor link sources you have not yet pursued',
      'Links pointing to competitor content but not yours',
      'Industry publications and resource pages worth targeting',
      'Local and regional websites relevant to your audience',
      'Publisher categories genuinely related to your market',
      'Unlinked brand mentions that could become links',
      'Broken or lost backlinks worth reclaiming',
      'Content assets that could attract references',
    ],
  },
  {
    title: 'Manual Outreach & Relationship Building',
    description: 'Finding the right sites to pursue matters as much as the pitch itself. Good outreach begins before the first email is ever sent.',
    micro: 'We research each publisher, understand what they cover, and write pitches that make sense to their editors rather than mail-merged templates.',
    bullets: [
      'Publication-specific research before contact',
      'Personalized pitch development for each target',
      'Relevant topic selection for every publisher',
      'Relationship-focused communication',
      'Follow-up without excessive messaging',
      'Clear placement expectations from the start',
      'Ongoing publisher relationships where appropriate',
    ],
  },
  {
    title: 'Guest Content & Editorial Placements',
    description: 'Contributing genuinely useful content to sites your target audience already reads, not content built only to house a link.',
    micro: 'We develop topics that fit each publication, write original articles, and place links contextually and naturally within them.',
    bullets: [
      'Topic research aligned with publisher and audience',
      'Publisher-specific content ideas',
      'Editorial pitch development',
      'Original article writing',
      'Contextual link placement',
      'Natural anchor selection',
      'Editorial revisions and approvals',
      'Final placement verification',
    ],
    note: 'Google\u2019s spam policies discourage paid or manipulative guest-post links. We only pursue guest content that contributes real value to the target publication.',
  },
  {
    title: 'Digital PR & Linkable Asset Promotion',
    description: 'Pitching original research, data, or genuinely newsworthy content that earns coverage instead of requiring placement.',
    micro: 'We build and promote the kinds of assets publishers naturally reference, turning owned research into earned links.',
    bullets: [
      'Original research and industry statistics',
      'Data studies and surveys',
      'Expert insights and commentary',
      'Useful guides and tools',
      'Original visual resources',
      'Proprietary business findings',
    ],
  },
  {
    title: 'Broken Link Building & Link Reclamation',
    description: 'Finding existing opportunities where a link to your content genuinely improves someone else\u2019s page, solving a publisher problem first.',
    micro: 'We find dead links and outdated references, then show publishers how your resource improves their page \u2014 the referral earns itself.',
    bullets: [
      'Broken external link identification',
      'Lost or removed backlink tracking',
      'Links pointing to outdated URLs',
      'Redirected or changed destinations',
      'Missing links from relevant brand mentions',
      'Older references that could be updated',
      'Resource pages with outdated sources',
    ],
  },
  {
    title: 'Unlinked Brand Mention Outreach',
    description: 'Finding relevant mentions of your brand across the web that do not yet link to your site, and turning them into references.',
    micro: 'When a publisher already talks about your business, connecting that mention to the right page benefits both sides.',
    bullets: [
      'Relevant brand mentions without links',
      'Publisher contact with clear context',
      'Link addition where it genuinely improves the page',
      'Placement verification after changes',
    ],
  },
  {
    title: 'Local & Industry Citation Building',
    description: 'The foundational authority that supports both rankings and trust, built through consistent, relevant listings.',
    micro: 'We build citations in directories and industry sources that matter, not mass submissions to hundreds of low-quality ones.',
    bullets: [
      'Local business directory research',
      'Industry-specific directory submissions',
      'Organization and association listings',
      'Consistent business profile details',
      'Duplicate listing identification',
      'Relevant regional references',
    ],
  },
  {
    title: 'Backlink Monitoring & Risk Review',
    description: 'Protecting the authority you have built and catching issues before they compound across your profile.',
    micro: 'New links keep appearing whether you are actively building or not. We monitor the change and flag anything potentially harmful.',
    bullets: [
      'New referring domain tracking',
      'Lost or removed backlink detection',
      'Linking page change monitoring',
      'Anchor text pattern review',
      'Target pages receiving external links',
      'Potentially manipulative pattern flags',
      'Directive-level review for genuinely warranted disavow',
    ],
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Services explained"
          title="Our Off-Page SEO & Link Building Services"
        >
          Authority gets built through several different channels, each with its own approach.
          The right mix depends on your industry, existing reputation, content assets, and goals.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 xl:grid-cols-4">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-muted/10 md:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.micro}
                </p>
              </div>
              {item.bullets?.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure which methods fit your business?
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              We review your industry, competitors, and profile first
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We recommend the off-page work most likely to move your business forward, then
              confirm scope and pricing before any outreach begins.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Get a Custom Link Building Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}