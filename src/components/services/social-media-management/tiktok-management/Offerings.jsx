import { SectionIntro, PosterButton } from '../../../Kinetic'

const services = [
  {
    number: '01',
    title: 'TikTok Strategy & Audience Research',
    lead: 'We begin by understanding who you want to reach, what you offer, and what you want TikTok to accomplish.',
    groups: [
      {
        label: 'Our research can cover',
        items: [
          'Target audience',
          'Customer questions',
          'Buyer interests',
          'Competitor accounts',
          'Competitor content patterns',
          'Content gaps',
          'Market opportunities',
          'Brand positioning',
          'Existing account performance',
          'Conversion paths',
          'Business goals',
        ],
      },
    ],
    notes: [
      'We also review how competitors communicate with the same audience.',
      'This helps us identify repeated content patterns, underserved topics, audience questions, and opportunities for your account to develop a distinct content position.',
      'The result is a TikTok strategy connected to your business rather than a generic monthly content calendar.',
    ],
  },
  {
    number: '02',
    title: 'Content Strategy & Content Pillars',
    lead: 'A strong TikTok account needs more than individual video ideas.',
    notes: [
      'We create content pillars that give your account a clear direction while leaving room for trends, audience questions, cultural moments, and new opportunities.',
    ],
    groups: [
      {
        label: 'Depending on your business, content pillars may include',
        items: [
          'Educational content',
          'Product demonstrations',
          'Problem-and-solution videos',
          'Tutorials',
          'Product comparisons',
          'Founder-led content',
          'Behind-the-scenes content',
          'Customer questions',
          'Customer stories',
          'Industry insights',
          'Lifestyle content',
          'Community-focused content',
          'Trend-based content',
        ],
      },
      {
        label: 'We also define the brand voice and creative direction. This can include',
        items: [
          'Messaging style',
          'Tone of voice',
          'Visual direction',
          'On-camera style',
          'Hook style',
          'Storytelling approach',
          'Calls to action',
        ],
      },
    ],
    notesAfter: [
      'Each content pillar has a purpose. Some content builds awareness. Some create trust. Some introduce products. Others encourage profile visits, website actions, inquiries, or product discovery.',
    ],
  },
  {
    number: '03',
    title: 'TikTok Video Production & Editing',
    lead: 'TikTok is a video-first platform, so production needs to support the content strategy.',
    notes: [
      'We can manage the short-form production workflow from concept development through editing and publishing, depending on your selected scope.',
    ],
    groups: [
      {
        label: 'Production may include',
        items: [
          'Video concepts',
          'Content hooks',
          'Scripts',
          'Talking points',
          'Storyboards or shot planning',
          'Filming guidance',
          'Short-form editing',
          'Captions',
          'On-screen text',
          'Visual transitions',
          'Brand elements',
          'Product demonstrations',
          'Educational videos',
          'Founder or team videos',
          'UGC-based content',
          'Repurposed content',
        ],
      },
    ],
    flowLead: 'For suitable videos, we can structure the content around a clear sequence such as:',
    flow: ['Hook', 'Context', 'Value', 'Proof or Demonstration', 'Next Action'],
    notesAfter: [
      'The structure changes according to the content rather than forcing every video into the same template.',
      'If you already have footage, we can turn suitable raw material into platform-ready TikTok content.',
      'If filming is required, production requirements such as location, talent, equipment, travel, and filming responsibilities are defined in the project scope.',
    ],
  },
  {
    number: '04',
    title: 'TikTok Trend Research & Adaptation',
    lead: 'Trends can create opportunities, but blindly copying trends can make a brand look disconnected from its audience.',
    groups: [
      {
        label: 'We monitor relevant',
        items: [
          'Formats',
          'Sounds',
          'Topics',
          'Storytelling patterns',
          'Cultural moments',
          'Creative styles',
          'Audience conversations',
        ],
      },
    ],
    notesAfter: [
      'We then evaluate whether a trend fits your brand, audience, market, and content strategy.',
      'The goal is not to chase every viral format. It is to identify useful opportunities and adapt them in a way that makes sense for your business.',
    ],
  },
  {
    number: '05',
    title: 'TikTok SEO & Content Discoverability',
    lead: 'TikTok can function as both a content platform and a discovery environment.',
    notes: [
      'People may use it to explore products, find information, discover businesses, learn how something works, or research topics that interest them.',
    ],
    groups: [
      {
        label: 'Our TikTok SEO approach can include',
        items: [
          'Topic research',
          'Search-oriented content ideas',
          'Keyword research',
          'Search-aware video concepts',
          'Captions',
          'On-screen text',
          'Spoken topic context',
          'Profile optimization',
          'Bio optimization',
          'Pinned-content planning',
          'Relevant hashtags',
          'Content organization',
        ],
      },
    ],
    notesAfter: [
      'We do not treat any single element as a guaranteed ranking factor. Instead, we make the subject, purpose, and value of each video clearer while using relevant search terminology naturally.',
    ],
  },
  {
    number: '06',
    title: 'Posting & Publishing Management',
    lead: 'Consistent publishing becomes easier when strategy, production, scheduling, and publishing are handled through one workflow.',
    groups: [
      {
        label: 'Depending on your plan, publishing management can include',
        items: [
          'Content scheduling',
          'Caption preparation',
          'Hashtag selection',
          'Publishing',
          'Profile checks',
          'Content organization',
          'Publishing calendar management',
          'Campaign-content coordination',
          'Timely trend publishing',
        ],
      },
    ],
    notesAfter: [
      'We maintain the agreed publishing schedule while allowing room for relevant trends and timely opportunities.',
    ],
  },
  {
    number: '07',
    title: 'Community Management & Engagement',
    lead: 'Publishing is only one part of managing a TikTok account.',
    notes: [
      'Your audience may ask questions, request product information, share experiences, mention your brand, or provide feedback. We manage these interactions within the agreed scope.',
    ],
    groups: [
      {
        label: 'Basic community management may include',
        items: [
          'Comment monitoring',
          'Basic comment responses',
          'Customer questions',
          'Relevant brand mentions',
          'Issue escalation',
        ],
      },
      {
        label: 'Active community management may include',
        items: [
          'Regular comment monitoring',
          'Comment responses',
          'DM management within scope',
          'Customer-question escalation',
          'Audience feedback collection',
          'Recurring-question identification',
          'Content opportunities from community conversations',
        ],
      },
    ],
    notesAfter: [
      'Community interactions can also inform future content. A recurring question can become a tutorial. A product concern can become an explanation video. A common customer request can become a new content topic.',
      'Response volume, monitoring frequency, and escalation procedures are defined in the selected service scope.',
    ],
  },
  {
    number: '08',
    title: 'TikTok LIVE Support',
    lead: 'TikTok LIVE can provide a more direct format for audience interaction when it fits the business and account.',
    notes: ['Where LIVE is available and appropriate, we can support:'],
    groups: [
      {
        items: [
          'LIVE content ideas',
          'Session topics',
          'Promotional planning',
          'Talking points',
          'Product or service demonstrations',
          'Audience-question planning',
          'Promotional content',
          'Post-LIVE content opportunities',
        ],
      },
    ],
    notesAfter: [
      'Our standard LIVE support focuses on planning and content preparation. If you require hosting, technical production, real-time moderation, or full LIVE operations, those requirements can be scoped separately.',
      'LIVE availability and account requirements can vary by market and account.',
    ],
  },
  {
    number: '09',
    title: 'Creator & UGC Coordination',
    lead: 'Creator and user-generated content can introduce different voices, formats, and audience perspectives to a TikTok strategy.',
    notes: [
      'Where appropriate, we can coordinate creator or UGC activities around your content plan. This workflow may include:',
    ],
    flow: ['Creator Research', 'Brief', 'Production', 'Review', 'Usage Coordination', 'Publishing', 'Performance Review'],
    groups: [
      {
        label: 'Our support may include',
        items: [
          'Creator research',
          'UGC concepts',
          'Creator selection support',
          'Creative briefs',
          'Content requirements',
          'Creator communication',
          'Content review',
          'Usage coordination',
          'Publishing coordination',
          'Repurposing suitable creator content',
        ],
      },
    ],
    notesAfter: [
      'Creator content is planned around your wider brand strategy rather than treated as a disconnected influencer activity.',
      'Creator fees, influencer payments, and third-party production costs are separate unless specifically included in your proposal.',
    ],
  },
  {
    number: '10',
    title: 'Cross-Platform Content Repurposing',
    lead: 'A strong TikTok idea does not always need to stay on TikTok.',
    notes: ['Where appropriate, we can adapt suitable short-form content for:'],
    chips: ['Instagram Reels', 'Facebook', 'YouTube Shorts', 'Other agreed channels'],
    groups: [
      {
        label: 'Repurposing does not mean publishing the same asset everywhere. We can adapt',
        items: [
          'Hooks',
          'Captions',
          'Format',
          'Aspect requirements',
          'Calls to action',
          'Platform context',
          'Audience angle',
        ],
      },
    ],
    notesAfter: [
      'We also decide which platform should lead the content when appropriate. Not every TikTok should be copied to another platform, and not every existing social post should automatically become a TikTok.',
    ],
  },
  {
    number: '11',
    title: 'Performance Tracking & Reporting',
    lead: 'We track performance against the goals defined during strategy development.',
    groups: [
      {
        label: 'Depending on your account, goals, and available analytics, reporting may include',
        items: [
          'Video views',
          'Reach',
          'Average watch time',
          'Completion rate',
          'Retention patterns',
          'Engagement',
          'Shares',
          'Saves',
          'Comments',
          'Profile visits',
          'Follower growth',
          'Website clicks',
          'Leads',
          'Product interest',
          'Content-level performance',
          'Top-performing topics',
          'Format performance',
          'Audience response',
        ],
      },
    ],
    notesAfter: [
      'We do not treat follower growth or views as the only measures of success.',
      'For businesses with reliable tracking, we can connect TikTok activity with relevant business outcomes such as website visits, inquiries, leads, product interest, or conversions.',
      'The purpose of reporting is not to create a list of numbers. We use performance data to determine what should be repeated, tested, refined, or removed from future content cycles.',
    ],
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Service scope" title="What Our TikTok Management Service Includes">
          Our TikTok management service covers the full content lifecycle: research, strategy, content
          pillars, production, trends, discoverability, publishing, community, LIVE, creators,
          repurposing, and reporting.
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
                  {service.lead}
                </p>
              </div>

              {(service.notes || service.groups || service.chips || service.flow || service.flowLead) && (
                <div className="mt-6 space-y-5 border-t-2 border-frame-border/60 pt-5 transition-colors duration-200 group-hover:border-frame-accent-fg/30">
                  {service.notes &&
                    service.notes.map((note) => (
                      <p
                        key={note}
                        className="text-xs font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90 md:text-sm"
                      >
                        {note}
                      </p>
                    ))}

                  {service.chips && (
                    <ul className="flex flex-wrap gap-2">
                      {service.chips.map((chip) => (
                        <li
                          key={chip}
                          className="border border-frame-accent/50 bg-frame-accent/5 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                        >
                          {chip}
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.groups &&
                    service.groups.map((group, gIdx) => (
                      <div key={group.label || `group-${gIdx}`}>
                        {group.label && (
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                            {group.label}
                          </span>
                        )}
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs font-medium leading-snug text-frame-fg/90 transition-colors duration-200 group-hover:text-frame-accent-fg/90 md:text-sm"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  {service.flowLead && (
                    <p className="text-xs font-semibold leading-relaxed text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg md:text-sm">
                      {service.flowLead}
                    </p>
                  )}

                  {service.flow && (
                    <ul className="flex flex-wrap items-center gap-1.5">
                      {service.flow.map((entry, index) => (
                        <li key={entry} className="flex items-center gap-1.5">
                          <span className="border border-frame-accent/50 bg-frame-bg px-2 py-0.5 text-[10px] font-bold text-frame-fg">
                            {entry}
                          </span>
                          {index < service.flow.length - 1 && (
                            <span aria-hidden="true" className="text-frame-accent">
                              &rarr;
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.notesAfter && (
                    <div className="space-y-3">
                      {service.notesAfter.map((note) => (
                        <p
                          key={note}
                          className="text-xs font-semibold leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80"
                        >
                          {note}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The result is a TikTok strategy connected to your business rather than a generic monthly content
            calendar.
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
