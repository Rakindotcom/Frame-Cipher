import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../Kinetic'

const offeringsList = [
  {
    tag: 'Format 01',
    title: 'Video Production',
    slug: '/services/content-creation/video-production',
    description: 'We produce promotional, corporate, product, brand, campaign, and other commercial videos from concept through final delivery. The exact production setup depends on the project\'s goals, locations, talent, equipment, duration, and required output.',
    bullets: [
      'Creative direction, scripting, and shot planning',
      'Studio and on-location filming with high-end optics',
      'Commercial video editing, color correction, and grading',
      'Sound design, custom audio mixing, and licensed music',
      'Motion graphics, subtitles, and platform-specific exports'
    ],
    actionText: 'Explore Video Production →',
    actionHref: '/services/content-creation/video-production'
  },
  {
    tag: 'Format 02',
    title: 'Short-Form Video (Reels, Shorts & TikTok)',
    slug: '/services/content-creation/short-form-video',
    description: 'Short-form content needs a different production approach from longer video. We create vertical videos designed around fast openings, clear messaging, strong pacing, visual variety, and platform-ready delivery.',
    bullets: [
      'Concept and high-retention hook development',
      'Vertical 9:16 filming or footage sourcing',
      'Platform-native fast-paced editing and pacing',
      'Captions, text overlays, and dynamic motion elements',
      'Music, sound effects, and multiple testing cutdowns'
    ],
    actionText: 'Plan Your Short-Form Content →',
    actionHref: '/contact'
  },
  {
    tag: 'Format 03',
    title: 'YouTube Video Production',
    slug: '/services/content-creation/youtube-videos',
    description: 'Long-form video needs more than simply extending a short clip. We produce YouTube content with attention to structure, pacing, audio quality, visual continuity, editing, thumbnails, and the viewing experience across longer videos.',
    bullets: [
      'Video concept and outline development',
      'Script development or script support',
      'Filming and multi-camera capture',
      'Video editing, sound editing, and grading',
      'Motion graphics, captions, and thumbnail design'
    ],
    actionText: 'Explore YouTube Production →',
    actionHref: '/services/content-creation/youtube-videos'
  },
  {
    tag: 'Format 04',
    title: 'Motion Graphics & Animation',
    slug: '/services/content-creation/motion-graphics-animation',
    description: 'Some ideas are easier to explain through movement than live footage. We create motion graphics and animation for product explanations, processes, statistics, presentations, social content, advertisements, brand assets, and other communication needs.',
    bullets: [
      'Kinetic typography & dynamic animated graphics',
      '2D character and vector animation',
      'Product animations and 3D/2D explainer visuals',
      'Logo animation, intro stings, and brand identifiers',
      'Data visualization and social motion graphics'
    ],
    actionText: 'Explore Motion Graphics →',
    actionHref: '/services/content-creation/motion-graphics-animation'
  },
  {
    tag: 'Format 05',
    title: 'Commercial & Brand Photography',
    slug: '/services/content-creation/product-photography',
    description: 'Professional photography helps businesses present products, people, places, and experiences with greater consistency. Our photography covers product, ecommerce, lifestyle, corporate, campaign, food, fashion, and other commercial requirements.',
    bullets: [
      'Shoot planning, styling direction, and moodboards',
      'Studio lighting, product setups, and on-location shoots',
      'Commercial ecommerce catalog and lifestyle visuals',
      'Corporate headshots, office culture, and facility capture',
      'High-end editing, color calibration, and retouching'
    ],
    actionText: 'Explore Photography →',
    actionHref: '/services/content-creation/product-photography'
  },
  {
    tag: 'Format 06',
    title: 'Graphic Design & Marketing Assets',
    slug: '/services/content-creation/graphic-design',
    description: 'Graphic design supports the everyday visual needs of a business. Every design is created within an agreed visual direction so individual assets remain part of the same brand system.',
    bullets: [
      'Social media graphics & paid advertising creatives',
      'Pitch decks, keynote presentations & one-pagers',
      'Brochures, flyers, lookbooks & print collaterals',
      'Digital banners, display ads & web graphic assets',
      'Unified brand campaign collateral systems'
    ],
    actionText: 'Explore Graphic Design →',
    actionHref: '/services/content-creation/graphic-design'
  },
  {
    tag: 'Format 07',
    title: 'Logo Design',
    slug: '/services/content-creation/logo-design',
    description: 'A logo needs to work across more than a presentation mockup. We design logos that can be used across websites, social profiles, packaging, business materials, advertising, print, and other real-world applications.',
    bullets: [
      'Concept development and initial creative directions',
      'Typographic marks, emblems, and abstract brand icons',
      'Rigorous legibility testing at micro and macro scales',
      'Refinement cycles based on structured feedback',
      'Comprehensive vector (AI, SVG) and raster formats'
    ],
    actionText: 'Explore Logo Design →',
    actionHref: '/services/content-creation/logo-design'
  },
  {
    tag: 'Format 08',
    title: 'Branding & Visual Identity',
    slug: '/services/content-creation/branding',
    description: 'A logo is only one part of a brand identity. Our branding work establishes the broader visual system that guides future content, including color direction, typography, imagery style, graphic elements, visual consistency, and usage guidelines.',
    bullets: [
      'Color palette direction and contrast standards',
      'Typography hierarchy and pairing guidelines',
      'Imagery styling, art direction, and moodboards',
      'Graphic elements, patterns, and iconography',
      'Comprehensive brand usage guidelines and applications'
    ],
    actionText: 'Explore Branding →',
    actionHref: '/services/content-creation/branding'
  },
  {
    tag: 'Format 09',
    title: 'Social Media Graphics',
    slug: '/services/content-creation/social-media-graphics',
    description: 'Social media graphics need to work within the format and context of each platform. We create custom and recurring graphics for announcements, promotions, educational content, campaigns, product launches, offers, and reusable template systems.',
    bullets: [
      'Platform-native sizing for Instagram, LinkedIn, Facebook & X',
      'Educational multi-slide carousels and infographics',
      'Promotional announcements, discount reveals, and event graphics',
      'Reusable templates for recurring, scalable publishing',
      'Cohesive feed aesthetics aligned with your brand guidelines'
    ],
    actionText: 'Explore Social Graphics →',
    actionHref: '/services/content-creation/social-media-graphics'
  },
  {
    tag: 'Format 10',
    title: 'UGC & Creator-Style Content',
    slug: '/contact',
    description: 'For businesses that use creator-led or user-generated-style content, we support production requirements such as concepts, creative direction, editing, platform formatting, and branded variations.',
    bullets: [
      'Native creator hooks and authentic visual scripting',
      'Pacing and retention editing for supplied footage',
      'Dynamic typography, captions, and trending audio sync',
      'Original creator coordination and on-screen talent guidance',
      'Ad creative variations for Meta and TikTok advertising'
    ],
    actionText: 'Discuss UGC Production →',
    actionHref: '/contact'
  }
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Capabilities & Scope"
          title="What Content Creation Services Include"
          index="01"
        >
          Our content creation services cover the main visual formats businesses use to communicate, promote products, launch campaigns, and maintain a consistent brand presence.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {offeringsList.map((item, index) => (
            <div
              key={index}
              className="group bg-frame-bg p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-frame-muted/20"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {item.tag}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>

                {item.bullets?.length > 0 && (
                  <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 border-t-2 border-frame-border/60 pt-4">
                <Link
                  href={item.actionHref}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent hover:underline"
                >
                  <span>{item.actionText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
