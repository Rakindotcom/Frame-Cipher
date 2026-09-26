import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    title: 'LinkedIn Strategy & Audience Research',
    description:
      'Effective LinkedIn management starts with understanding your business, market, audience, and commercial goals. We research the people and organizations you want to reach and identify the topics, questions, expertise, and content angles that matter to them.',
    bullets: [
      'Business and LinkedIn presence discovery',
      'Ideal customer profile research',
      'Target audience research',
      'Industry and market research',
      'Competitor content analysis',
      'Competitor positioning review',
      'Audience pain-point research',
      'Customer-question research',
      'Content gap analysis',
      'Content pillar development',
      'Content objectives',
      'Topic development',
      'Format selection',
      'Brand positioning',
      'Executive positioning',
      'Content opportunities',
      'Market-specific content planning',
    ],
    note: 'The result is a LinkedIn strategy built around your business and audience rather than a generic posting calendar.',
  },
  {
    title: 'Company Page Management',
    description:
      'Your LinkedIn Company Page provides an official professional presence for your organization. We can manage the page as a business communication, credibility, and content hub.',
    bullets: [
      'Company Page strategy',
      'Page optimization',
      'About section improvement',
      'Company description refinement',
      'Industry and business information',
      'Product and service positioning',
      'Showcase Page strategy where relevant',
      'Company updates',
      'Educational content',
      'Industry insights',
      'Company milestones',
      'Case-study content',
      'Customer-focused content',
      'Employer-brand content',
      'Recruitment-related content',
      'Event and announcement content',
      'Comment monitoring',
      'Page engagement',
      'Publishing and scheduling',
    ],
    note: 'We avoid turning your page into a stream of product announcements. The goal is useful, credible content that gives people a reason to understand and follow your business.',
  },
  {
    title: 'Executive & Founder LinkedIn Management',
    description:
      'Executive profiles can provide a more personal channel for expertise, professional perspective, and relationship building. Framecipher can support founders, CEOs, directors, consultants, subject-matter experts, and other executives with structured LinkedIn management.',
    bullets: [
      'Executive profile review',
      'Personal positioning',
      'Voice development',
      'Content pillar development',
      'Thought leadership planning',
      'Post writing',
      'Founder-led storytelling',
      'Industry commentary',
      'Case-study content',
      'Expertise-based content',
      'Professional experiences and lessons',
      'Content review and approval',
      'Publishing support',
      'Comment and engagement guidance',
      'Performance analysis',
    ],
    note: 'For ghostwritten content, we work from the executive’s experience, opinions, expertise, and communication style. The objective is not to make every executive sound like a marketing department, but to turn genuine expertise into useful content while keeping the executive’s voice central.',
  },
  {
    title: 'LinkedIn Profile & Page SEO',
    description:
      'Your LinkedIn profile and company page should make it easy for people to understand who you are, what you do, and who you serve. We optimize relevant profile and page elements for clarity, professional positioning, and discoverability.',
    bullets: [
      'Profile headline',
      'About section',
      'Company description',
      'Relevant keywords',
      'Industry information',
      'Services',
      'Experience sections',
      'Featured content',
      'Profile positioning',
      'Company Page information',
      'Showcase Pages where relevant',
      'Calls to action',
      'Website links',
      'Visual profile elements',
      'Content-topic alignment',
    ],
    note: 'LinkedIn search and discovery depend on context, relevance, profile information, content, relationships, and other platform factors. We therefore focus on meaningful optimization rather than keyword stuffing.',
  },
  {
    title: 'Thought Leadership Content Strategy',
    description:
      'Strong LinkedIn thought leadership starts with genuine expertise. We identify the subjects where your executives and business have something useful to contribute and turn those insights into a structured content system.',
    bullets: [
      'Industry insights',
      'Expert opinions',
      'Original perspectives',
      'Founder stories',
      'Professional lessons',
      'Case-study insights',
      'Customer problems',
      'Industry developments',
      'Educational content',
      'Data and research commentary',
      'Common misconceptions',
      'Behind-the-scenes expertise',
      'Business lessons',
      'Strategic viewpoints',
      'Practical frameworks',
    ],
    note: 'We avoid producing generic motivational content simply because it is common on LinkedIn. Your content should give the audience a reason to remember the person or business behind it.',
  },
  {
    title: 'LinkedIn Posts, Carousels & Documents',
    description:
      'Different LinkedIn formats can support different communication goals. We create and manage the formats that fit the objective rather than forcing every topic into the same type of post.',
    bullets: [
      'Text posts',
      'Founder-led posts',
      'Executive thought leadership',
      'Company updates',
      'Educational posts',
      'Industry commentary',
      'Case-study posts',
      'Story-driven posts',
      'Image posts',
      'LinkedIn Carousels',
      'Document posts',
      'Data-led content',
      'Frameworks',
      'Checklists',
      'Process explainers',
      'Customer-focused content',
      'Recruitment content',
      'Event-related content',
    ],
    carousel: [
      'Step-by-step guides',
      'Industry insights',
      'Frameworks',
      'Checklists',
      'Comparisons',
      'Case studies',
      'Research summaries',
      'Educational topics',
      'Practical business advice',
    ],
    note: 'The format follows the communication objective rather than forcing every topic into the same type of post.',
  },
  {
    title: 'Employee Advocacy & Internal Amplification',
    description:
      'Your employees can help extend your organization’s professional presence when participation is voluntary, relevant, and properly supported. We can help businesses structure employee advocacy around the right foundations.',
    bullets: [
      'Employee advocacy planning',
      'Internal content distribution',
      'Share-ready content',
      'Employee participation guidelines',
      'Executive amplification',
      'Employee content ideas',
      'Engagement guidance',
      'Company-content sharing',
      'Internal communication workflows',
      'Advocacy performance tracking',
    ],
    note: 'We do not treat employees as automated distribution channels. The goal is to make participation simple while allowing employees to communicate naturally and add their own professional perspective where appropriate.',
  },
  {
    title: 'Community Engagement & Networking',
    description:
      'LinkedIn management should not stop when a post is published. We can support ongoing engagement around your content and relevant industry conversations.',
    bullets: [
      'Comment monitoring',
      'Comment responses',
      'Page engagement',
      'Executive engagement guidance',
      'Strategic commenting',
      'Relevant industry conversations',
      'Professional relationship development',
      'Community participation',
      'Conversation monitoring',
      'Inquiry escalation',
      'Engagement guidelines',
    ],
    note: 'We do not rely on spammy automation or indiscriminate connection activity. Sensitive, sales-critical, or relationship-specific conversations can be escalated to the appropriate person within your organization.',
  },
  {
    title: 'LinkedIn Events, Newsletters & Additional Features',
    description:
      'LinkedIn provides additional publishing and community features that may be useful depending on your business and account eligibility. Where relevant and available, we can support them as part of the broader strategy.',
    bullets: [
      'LinkedIn Events',
      'Event promotion content',
      'Event-related publishing',
      'LinkedIn Newsletter strategy',
      'Newsletter topic planning',
      'Newsletter content',
      'Professional announcements',
      'Showcase Pages',
      'Product-focused content',
      'Recruitment content',
      'Employer-brand content',
      'Additional LinkedIn publishing features',
    ],
    note: 'We assess whether a feature supports your actual business objective before adding it to the strategy. Using more LinkedIn features does not automatically create a better LinkedIn presence.',
  },
  {
    title: 'Performance Tracking & Reporting',
    description:
      'LinkedIn management should be measured against meaningful objectives rather than activity alone. We monitor relevant metrics and, where reliable tracking exists, align them with agreed business indicators.',
    metrics: [
      'Impressions',
      'Reach where available',
      'Engagement',
      'Reactions',
      'Comments',
      'Shares',
      'Saves where available',
      'Follower growth',
      'Page visits',
      'Profile views',
      'Connection growth',
      'Content performance',
      'Audience response',
      'Website clicks where available',
      'Lead or inquiry activity where reliable tracking exists',
    ],
    business: [
      'Qualified inquiries',
      'Contact requests',
      'Website visits',
      'Content-assisted conversions',
      'Lead sources',
      'Relevant audience growth',
      'Sales conversations influenced by LinkedIn',
    ],
    note: 'We compare content performance by topic, format, audience response, and business objective to determine what should be repeated, improved, reduced, or tested.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Services explained"
          title="What Our LinkedIn Management Service Includes"
        >
          Our LinkedIn Management Service covers the strategic, creative, operational, and analytical
          work required to build and maintain a professional LinkedIn presence.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
          {offerings.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-muted/20 md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Service {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>

              {item.bullets && (
                <ul className="mt-6 space-y-2.5 border-t-2 border-frame-border/60 pt-5 text-xs font-medium text-frame-fg/90 md:text-sm">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.metrics && (
                <div className="mt-6 border-t-2 border-frame-border/60 pt-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Metrics we monitor
                  </span>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                      >
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.business && (
                <div className="mt-6 border-2 border-frame-accent/50 bg-frame-accent/5 p-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    B2B indicators we can align reporting with
                  </span>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {item.business.map((indicator) => (
                      <li key={indicator} className="flex items-start gap-2 text-xs font-medium leading-snug text-frame-fg">
                        <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                        <span>{indicator}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.carousel && (
                <div className="mt-6 border-2 border-frame-border bg-frame-muted/10 p-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Carousel &amp; document structures
                  </span>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.carousel.map((entry) => (
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

              {item.note && (
                <p className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
                  {item.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure where to start?
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              Start with a free LinkedIn presence audit
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review the actual pages, profiles, and content performance before any management work
              begins.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <PosterButton href="/contact">Request Your LinkedIn Management Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
