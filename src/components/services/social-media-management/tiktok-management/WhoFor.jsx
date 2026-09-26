import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'Ecommerce & Product Brands',
    body: 'We create product-focused content that can explain, demonstrate, compare, and contextualize products.',
    pointsLabel: 'This can include',
    points: [
      'Product education',
      'Demonstrations',
      'UGC',
      'Creator content',
      'Product storytelling',
      'Lifestyle content',
    ],
  },
  {
    title: 'Fashion, Beauty & Lifestyle Brands',
    body: 'Visual categories can use TikTok to demonstrate products, showcase transformations, explain routines, introduce collections, and participate in relevant cultural conversations.',
    note: 'We build content around the brand rather than simply copying trending formats.',
  },
  {
    title: 'Food & Hospitality Businesses',
    body: 'Restaurants, cafes, hotels, food brands, and hospitality businesses can use short-form video to showcase:',
    points: [
      'Products',
      'Experiences',
      'Locations',
      'People',
      'Menus',
      'Customer moments',
      'Behind-the-scenes activity',
    ],
    note: 'Local context can be especially important for these businesses.',
  },
  {
    title: 'Local Businesses',
    body: 'TikTok can support awareness for businesses serving a defined geographic market. We can develop location-relevant content around:',
    points: [
      'Products',
      'Services',
      'Customer questions',
      'Team expertise',
      'Local interests',
      'Local offers',
      'Location-specific experiences',
    ],
  },
  {
    title: 'Service Businesses',
    body: 'Service businesses often need to explain something before a customer feels ready to contact them. TikTok can help turn complex services into understandable short-form content through:',
    points: [
      'Educational videos',
      'FAQs',
      'Demonstrations',
      'Problem-and-solution content',
      'Expert commentary',
      'Customer questions',
    ],
  },
  {
    title: 'SaaS & Technology Businesses',
    body: 'Technology brands can simplify complex ideas through:',
    points: [
      'Tutorials',
      'Product demonstrations',
      'Use cases',
      'Founder content',
      'Industry commentary',
      'Educational videos',
      'Feature explanations',
    ],
  },
  {
    title: 'Creator-Led & Personal Brands',
    body: 'Founders, consultants, creators, coaches, experts, and public-facing professionals often need a content system built around their knowledge and personality. We can help turn expertise into repeatable content formats while maintaining the person’s authentic voice.',
  },
  {
    title: 'International Businesses',
    body: 'Framecipher supports businesses targeting audiences beyond Bangladesh. International TikTok management can be adapted around:',
    points: [
      'Target-market language',
      'Local terminology',
      'Cultural references',
      'Audience expectations',
      'Local trends',
      'Publishing windows',
      'Product positioning',
      'Calls to action',
      'Business goals',
    ],
    note: 'We do not simply publish Bangladesh-focused content to an international audience.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Target audience alignment"
          title="Who Our TikTok Management Service Is For"
        >
          Our TikTok management service can be adapted to different business models, audiences, and content
          requirements.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="flex h-10 w-10 items-center justify-center border-2 border-frame-accent/40 bg-frame-accent/10 font-heading text-sm font-bold text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg md:text-xl">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {audience.body}
                </p>
              </div>

              {audience.points && (
                <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                  {audience.pointsLabel && (
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent transition-colors duration-200 group-hover:text-frame-accent-fg">
                      {audience.pointsLabel}
                    </span>
                  )}
                  <ul className={`grid gap-2 sm:grid-cols-2 ${audience.pointsLabel ? 'mt-3' : ''}`}>
                    {audience.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs font-medium leading-snug text-frame-fg/90 transition-colors duration-200 group-hover:text-frame-accent-fg/90 md:text-sm"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {audience.note && (
                <p className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80">
                  {audience.note}
                </p>
              )}
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure where you fit
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              The free initial TikTok audit helps us understand your requirements before recommending
              a plan, so you are not paying for scope you do not need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
