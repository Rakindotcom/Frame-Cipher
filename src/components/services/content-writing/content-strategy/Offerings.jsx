import { SectionIntro, PosterButton } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Content Audit & Performance Assessment',
    lead: 'Before recommending new content, we examine what you already have. We review your existing content library to identify what is working, what needs improvement, and where your biggest opportunities are. What we assess:',
    items: [
      'Existing content inventory',
      'Organic visibility and performance',
      'Content quality and relevance',
      'Outdated or declining content',
      'Content gaps',
      'Topic overlap and cannibalization',
      'Pages worth refreshing',
      'Pages worth consolidating or retiring',
      'Opportunities to strengthen existing assets',
    ],
    note: 'The goal is not to publish more simply because more content is possible. The goal is to determine what deserves attention first.',
  },
  {
    number: '02',
    title: 'Audience, ICP & Buyer Journey Research',
    lead: 'Content works better when it reflects the people you actually want to reach. We define the audiences, customer segments, problems, questions, objections, and buying stages your content needs to address. Our research can map content to:',
    items: [
      'Ideal customer profiles',
      'Audience segments',
      'Customer problems and priorities',
      'Search and information needs',
      'Common questions',
      'Buying objections',
      'Awareness stage',
      'Consideration stage',
      'Decision stage',
      'Post-purchase education',
    ],
    note: 'This helps your content answer the right questions at the right point in the customer journey.',
  },
  {
    number: '03',
    title: 'Keyword & Search Intent Research',
    lead: 'SEO can be part of a broader content strategy when organic search is an important acquisition channel. We identify meaningful search opportunities and connect them to the right content purpose. This includes:',
    items: [
      'Keyword themes',
      'Search intent',
      'Topic relationships',
      'Commercial opportunities',
      'Informational opportunities',
      'Long-tail questions',
      'Supporting queries',
      'Search-demand patterns',
      'Keyword-to-content mapping',
    ],
    note: 'We do not build the strategy around keyword volume alone. A topic needs to make sense for your audience and your business before it earns a place on the roadmap.',
  },
  {
    number: '04',
    title: 'Competitive Content Gap Analysis',
    lead: 'Your competitors can reveal opportunities, but copying their content is not a strategy. We analyze the competitive content landscape to understand:',
    items: [
      'Topics competitors cover',
      'Important topics they overlook',
      'Search-intent gaps',
      'Content-depth gaps',
      'Format opportunities',
      'Commercial content gaps',
      'Buyer-journey gaps',
      'Areas where stronger expertise can differentiate your content',
    ],
    note: 'This helps us find opportunities that are relevant to your business rather than simply producing another version of what already exists.',
  },
  {
    number: '05',
    title: 'Content Pillar & Topic Cluster Architecture',
    lead: 'We organize content around connected themes instead of isolated topics. This can include:',
    items: [
      'Core content pillars',
      'Supporting topic clusters',
      'Subtopics',
      'Search-intent relationships',
      'Pillar and supporting-page roles',
      'Internal-linking opportunities',
      'Content hierarchy',
      'Commercial destination pages',
    ],
    note: 'The goal is a structure where individual pieces support a larger subject area, which gives your content program clearer direction as it grows.',
  },
  {
    number: '06',
    title: 'Content Prioritization & Roadmap',
    lead: 'Not every topic deserves to be created immediately. We prioritize opportunities based on factors such as:',
    items: [
      'Business value',
      'Audience relevance',
      'Search opportunity',
      'Competitive difficulty',
      'Buyer-journey importance',
      'Existing content strength',
      'Production effort',
      'Available resources',
    ],
    note: 'The result is a prioritized roadmap that helps your team understand what to create first, what can wait, and what should not be produced at all.',
  },
  {
    number: '07',
    title: 'Content Brief Development',
    lead: 'A good strategy should make execution easier. For priority content, we can develop production-ready briefs that define the purpose and direction of each piece. Depending on the project, briefs can include:',
    items: [
      'Target topic',
      'Primary search intent',
      'Audience',
      'Buyer-journey stage',
      'Primary keyword',
      'Supporting topics',
      'Important questions',
      'Entities and concepts',
      'Recommended structure',
      'Internal-link opportunities',
      'CTA direction',
      'E-E-A-T considerations',
      'Content format',
    ],
    note: 'This gives writers, editors, subject-matter experts, and stakeholders a clear direction before drafting begins.',
  },
  {
    number: '08',
    title: 'Editorial Calendar Development',
    lead: 'Once the strategy is clear, we turn it into an executable publishing plan. Your editorial calendar can define:',
    items: [
      'Content topic',
      'Content type',
      'Priority',
      'Target audience',
      'Funnel stage',
      'Publishing date',
      'Responsible team member',
      'Campaign or seasonal alignment',
      'Refresh opportunities',
      'Repurposing opportunities',
    ],
    note: 'We build calendars around realistic production capacity. A sustainable schedule is more useful than an ambitious calendar that becomes impossible to maintain.',
  },
  {
    number: '09',
    title: 'Content Distribution & Repurposing Planning',
    lead: 'Creating content is only one part of the system. We identify where important content can support other channels and business activities. Depending on your goals, one core asset may support:',
    items: [
      'Website content',
      'Blog content',
      'Email campaigns',
      'Social content',
      'Sales materials',
      'Case studies',
      'Lead-generation assets',
      'Presentations',
      'Customer education',
      'Other supporting content',
    ],
    note: 'The strategy determines which ideas deserve broader distribution and which should remain focused on their primary purpose.',
  },
  {
    number: '10',
    title: 'Performance Measurement & Strategy Refinement',
    lead: 'Content strategy should evolve as evidence accumulates. We establish a measurement framework around the goals of the engagement. Depending on the strategy, this can include:',
    items: [
      'Organic visibility',
      'Search impressions',
      'Clicks',
      'Rankings',
      'Content engagement',
      'Leads',
      'Assisted conversions',
      'Content-assisted opportunities',
      'Cluster performance',
      'Content decay',
      'Priority completion',
      'Conversion contribution',
    ],
    note: 'Performance findings then inform future priorities. The strategy is not treated as a document that becomes irrelevant after the calendar is delivered.',
  },
]

export default function Offerings() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities & scope" title="What Our Content Strategy Service Includes">
          Ten connected disciplines that turn an existing content library into a system with priorities, owners, and
          measurable intent.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {blocks.map((block) => (
            <article
              key={block.number}
              className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {block.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {block.lead}
                </p>

                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-fg"
                    >
                      <span aria-hidden="true" className="mt-1 text-frame-accent">
                        &bull;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {block.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {block.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Every engagement is scoped to the library and market you actually have, rather than a fixed package
            applied to everyone.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Content Strategy Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
