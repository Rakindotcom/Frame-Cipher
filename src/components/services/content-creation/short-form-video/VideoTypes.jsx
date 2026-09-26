import { SectionIntro, PosterButton } from '../../../Kinetic'

const videoTypes = [
  {
    tag: 'Format 01',
    title: 'Instagram Reels',
    description: 'Instagram Reels support brand awareness, product promotion, founder positioning, customer stories, and ongoing organic social growth with high aesthetic standards.',
    useCases: 'Brand storytelling, curated aesthetic feeds, product drops & community building'
  },
  {
    tag: 'Format 02',
    title: 'TikTok Videos',
    description: 'TikTok content benefits from direct, authentic communication, strong hook openings, relatable visual context, and editing that feels native to the platform culture.',
    useCases: 'Viral trends, product demonstrations, behind-the-scenes & organic discovery'
  },
  {
    tag: 'Format 03',
    title: 'YouTube Shorts',
    description: 'Shorts can be produced as standalone discovery content or as high-converting entry points funneled into your wider long-form YouTube channel ecosystem.',
    useCases: 'Search discovery, long-form teaser highlights & subscriber growth'
  },
  {
    tag: 'Format 04',
    title: 'Product & Promotional Videos',
    description: 'Demonstrate a product or announce a limited-time offer quickly without a lengthy production. Focus on immediate feature utility, unboxing, and real-life usage.',
    useCases: 'Ecommerce product pages, flash sales, unboxings & new product reveals'
  },
  {
    tag: 'Format 05',
    title: 'Founder, Expert & Talking-Head Videos',
    description: 'Founder and expert-led videos simplify complex ideas through direct, human presentation. Establish thought leadership and personal authority on camera.',
    useCases: 'Executive thought leadership, industry perspectives & company announcements'
  },
  {
    tag: 'Format 06',
    title: 'Testimonial & Customer Stories',
    description: 'Real customer experiences provide undeniable context and credibility. We combine interviews, product proof points, on-screen quotes, and dynamic pacing.',
    useCases: 'Conversion landing pages, paid social retargeting & trust building'
  },
  {
    tag: 'Format 07',
    title: 'Educational & Explainer Shorts',
    description: 'Simplify complex subjects, product FAQs, and customer objections into single, high-retention 30–60 second actionable tips that educate and convert.',
    useCases: 'Customer onboarding, how-to tips, industry breakdowns & objection handling'
  },
  {
    tag: 'Format 08',
    title: 'Paid Social Video Creatives',
    description: 'Engineered for performance advertising across Meta, TikTok, and YouTube Shorts. We shoot multiple hook variations and CTA angles to optimize ad spend and ROAS.',
    useCases: 'Performance marketing campaigns, A/B hook testing & direct-response sales'
  }
]

export default function VideoTypes() {
  return (
    <section id="types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Specialized Capabilities"
          title="Short-Form Videos We Produce"
          index="02"
        >
          We produce different types of short-form video based on your content objective, target audience, and primary distribution channels.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {videoTypes.map((item, idx) => (
            <div
              key={idx}
              className="bg-frame-bg p-7 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {item.tag}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                    Primary Use Cases
                  </span>
                  <span className="text-xs font-semibold text-frame-fg leading-relaxed">
                    {item.useCases}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
