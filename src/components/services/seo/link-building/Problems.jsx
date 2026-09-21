import { SectionIntro, PosterButton } from '../../../Kinetic'

const criteria = [
  {
    title: 'Topical Relevance',
    body: 'A link is worth pursuing when the source site discusses topics your business genuinely relates to, not merely when the platform itself has a high authority score. Yet several considerations matter before you commit to a target. The publication, the section, and the article all play a part in whether a reference is genuinely useful.',
  },
  {
    title: 'Editorial Context',
    body: 'The environment around the link matters as much as the site itself. A reference placed inside genuinely useful, well-published content signals that a real person considered the resource worth mentioning, which is exactly the signal search engines look for when distinguishing earned links from manufactured ones.',
  },
  {
    title: 'Real Audience & Organic Visibility',
    body: 'A site that draws real organic and direct traffic has readers who can actually discover your business, and its links reflect genuine editorial decisions. We prefer placements on sites where a real audience exists rather than sites whose value exists only inside an SEO tool.',
  },
  {
    title: 'Geographic Relevance',
    body: 'Where your customers sit changes which publishers deserve pursuit. For local businesses, links from publications and directories in their market matter more than links from anywhere in the world. For international operations, the target publications shift to the markets the business actually serves.',
  },
  {
    title: 'Natural Anchor & Destination Fit',
    body: 'We use the anchor text a publisher would naturally write and steer each link toward the page that genuinely helps the reader: a service, product, research resource, or guide. Forced anchor patterns and links dropped onto irrelevant pages are among the clearest signs of manufactured placement.',
  },
  {
    title: 'Spam & Manipulation Screening',
    body: 'Before any outreach, we screen for patterns that indicate a site exists primarily to sell links: link farms, excessive unrelated guest-post sections, large volumes of cheap sponsored articles, automated publishing, keyword-stuffed outbound anchors, irrelevant directories, and manipulative cross-linking networks.',
  },
]

export default function Problems() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Quality screening"
          title="What Makes a Backlink Worth Pursuing?"
        >
          Not every link is worth chasing, and not every high-&ldquo;authority&rdquo;
          site is worth risking a pitch on. We evaluate every prospect against a clear
          set of criteria before any outreach begins.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((criterion, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {criterion.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {criterion.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure which links are worth pursuing?
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              We screen prospects before any outreach starts
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
              A relevance-first screening keeps effort off unrelated targets and keeps your
              profile clear of placements that could become a problem later.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact">Start a Backlink Review &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}