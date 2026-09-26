import { SectionIntro, PosterButton } from '../../../Kinetic'

const services = [
  {
    number: '01',
    title: 'YouTube Channel Strategy & Positioning',
    body: 'We establish a clear direction for your channel based on your business, audience, market, competitors, and content opportunities.',
    points: [
      'Channel positioning',
      'Audience research',
      'Content pillars',
      'Topic selection',
      'Competitor research',
      'Content formats',
      'Publishing cadence',
      'Channel goals',
      'Content priorities',
      'Calls to action',
    ],
    note: 'The objective is to make your channel easier to understand for both viewers and your internal team.',
  },
  {
    number: '02',
    title: 'Content Ideation & Scripting',
    body: 'Strong YouTube channels begin with strong content ideas. We research topics around your audience\u2019s questions, interests, problems, products, services, and search behavior.',
    points: [
      'Video topic research',
      'Content briefs',
      'Video concepts',
      'Hooks and introductions',
      'Video outlines',
      'Script development',
      'Educational content',
      'Product-focused content',
      'FAQ-based content',
      'Expert-led content',
      'Content series',
    ],
    note: 'Each idea should have a clear reason to exist rather than simply filling an upload calendar.',
  },
  {
    number: '03',
    title: 'YouTube Video SEO & Metadata Optimization',
    body: 'YouTube SEO helps your videos become easier to discover when people search for relevant topics. We optimize important elements such as titles, descriptions, topics, keywords, structure, playlists, and internal channel connections.',
    note: 'YouTube Search considers relevance, engagement, and quality when determining search results. We therefore optimize for people first, while making the video\u2019s topic and value clear to YouTube.',
  },
  {
    number: '04',
    title: 'Thumbnail & Title Strategy',
    body: 'A great video can struggle if viewers do not understand why they should watch it. We develop titles and thumbnails as part of the same packaging strategy.',
    points: [
      'Viewer intent',
      'Search intent',
      'Topic relevance',
      'Curiosity',
      'Clarity',
      'Brand consistency',
      'Thumbnail readability',
      'Mobile viewing',
      'Expected viewer experience',
    ],
    note: 'CTR is useful for understanding how effectively a video\u2019s packaging encourages viewers to choose it, but it should be evaluated alongside impressions, traffic sources, retention, and other performance signals.',
  },
  {
    number: '05',
    title: 'Long-Form Video Production & Editing',
    body: 'Long-form videos can give your business more room to educate, demonstrate expertise, explain products, answer complex questions, and build viewer trust.',
    points: [
      'Video editing',
      'Story structure',
      'Pacing',
      'Intro development',
      'B-roll integration',
      'Screen recordings',
      'Motion graphics',
      'Captions',
      'Audio cleanup',
      'Visual transitions',
      'Branding',
      'End screens',
      'Calls to action',
    ],
    note: 'Video length is determined by the content and audience rather than an arbitrary target. YouTube itself notes that there is no universal ideal video length.',
  },
  {
    number: '06',
    title: 'YouTube Shorts Strategy & Production',
    body: 'Shorts can create additional discovery opportunities and provide another way to communicate your brand.',
    points: [
      'Original short-form concepts',
      'Repurposed long-form content',
      'Educational tips',
      'Product highlights',
      'FAQs',
      'Quick demonstrations',
      'Expert insights',
      'Behind-the-scenes content',
      'Trend-aware formats where relevant',
    ],
    note: 'Shorts and long-form content can support the same broader channel strategy while serving different viewing behaviors.',
  },
  {
    number: '07',
    title: 'Channel Branding & Optimization',
    body: 'Your channel should communicate who you are before someone watches a video. We help organize key channel elements.',
    points: [
      'Channel name and positioning',
      'Channel description',
      'Profile image',
      'Banner direction',
      'Visual consistency',
      'Featured content',
      'Homepage organization',
      'Content sections',
      'Playlist structure',
      'Brand messaging',
    ],
    note: 'The goal is to create a channel experience that feels consistent, professional, and relevant to your audience.',
  },
  {
    number: '08',
    title: 'Playlist, End Screen & Channel Organization',
    body: 'A well-organized channel makes it easier for viewers to find related content. We can structure the pathways between videos.',
    points: [
      'Topic-based playlists',
      'Series playlists',
      'Educational collections',
      'Product-related collections',
      'End-screen connections',
      'Related-video pathways',
      'Channel homepage sections',
    ],
  },
  {
    number: '09',
    title: 'Publishing & Upload Management',
    body: 'Consistent publishing requires more than pressing the upload button. We can manage the publishing workflow, including titles, descriptions, thumbnails, playlists, chapters, visibility settings, and publishing checks.',
    note: 'Every upload follows an agreed workflow so content is reviewed before it goes live.',
  },
  {
    number: '10',
    title: 'Community Management & Engagement',
    body: 'YouTube is also a community platform. Depending on your package, we can help manage engagement around your videos.',
    points: [
      'Comment monitoring',
      'Comment responses',
      'Audience questions',
      'Community feedback',
      'Engagement opportunities',
      'Frequently asked questions',
      'Content ideas from viewer conversations',
    ],
    note: 'Comments are also useful qualitative feedback. They can reveal questions, objections, and topics your audience wants you to address.',
  },
  {
    number: '11',
    title: 'Content Repurposing',
    body: 'One strong piece of content can often support multiple content formats. We can repurpose suitable long-form content into other platform-ready formats.',
    points: [
      'YouTube Shorts',
      'Short educational clips',
      'Social media videos',
      'Quote-based content',
      'FAQ content',
      'Promotional snippets',
      'Other platform-ready formats',
    ],
    note: 'Repurposing helps extend the value of your original production without treating every platform as if it has the same audience behavior.',
  },
  {
    number: '12',
    title: 'Performance Tracking & Analytics',
    body: 'We monitor channel and video performance to understand what is working and where improvements may be needed.',
    points: [
      'Views',
      'Impressions',
      'CTR',
      'Average view duration',
      'Audience retention',
      'Watch time',
      'Traffic sources',
      'Audience behavior',
      'Top-performing topics',
      'Underperforming content',
      'Subscriber changes',
      'Content format performance',
    ],
    note: 'The goal is not simply to report numbers. We use the data to improve future content decisions.',
  },
  {
    number: '13',
    title: 'YouTube Conversion & CTA Strategy',
    body: 'YouTube can support business outcomes beyond views and subscribers. We structure relevant calls to action around your objective.',
    points: [
      'Visit your website',
      'Request a consultation',
      'Contact your business',
      'Explore a product',
      'Visit an online store',
      'Download a resource',
      'Book a service',
      'Watch another related video',
    ],
    note: 'The CTA should fit the viewer\u2019s stage and the purpose of the video rather than interrupting the content unnecessarily.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service scope"
          title="What Our YouTube Management Service Includes"
        >
          Our YouTube management service can cover the full content lifecycle, from channel strategy and
          ideation to production, optimization, publishing, and performance analysis.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {service.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg md:text-xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {service.body}
                </p>
              </div>

              {service.points && (
                <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 transition-colors duration-200 group-hover:border-frame-accent-fg/30 group-hover:text-frame-accent-fg/90 md:text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {service.note && (
                <p className="mt-4 text-xs font-semibold leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80">
                  {service.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The objective across every stage is the same: useful content that is easy to discover, easy
            to click, and satisfying enough to keep earning views.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Get a Free Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
