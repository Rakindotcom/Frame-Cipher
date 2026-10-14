'use client'

import { Mic, Video, Camera, UserCheck, Scissors, Building2, CheckCircle2, ArrowRight } from 'lucide-react'

const offerings = [
  {
    id: 'podcast',
    title: 'Podcast Recording & Production',
    tag: 'Audio & Video Podcasts',
    icon: Mic,
    description:
      'A dedicated podcast studio in Dhaka giving hosts, businesses and content creators an acoustically controlled, multi-mic environment to record audio or 4K video conversations.',
    features: [
      'Podcast episodes & founder interview sessions',
      'Executive thought-leadership & educational podcasts',
      'Multi-camera video podcasts optimized for YouTube',
      'Short-form vertical clips (9:16) for Reels, TikTok & Shorts',
      'Acoustic sound isolation & professional broadcast mics',
      'Repeatable recording schedules for recurring shows',
    ],
    ctaText: 'Plan a Podcast Session',
    href: '#booking',
  },
  {
    id: 'video',
    title: 'Video Production & Shooting',
    tag: 'Planned Visuals',
    icon: Video,
    description:
      'Purpose-built video production for brands, businesses and creators who need structured, intentional video content rather than unstructured raw footage.',
    features: [
      'Corporate overviews & business profile videos',
      'Founder interviews, keynote talks & case studies',
      'YouTube series, tutorials & educational masterclasses',
      'Social media campaigns & high-converting promotional videos',
      'Studio lighting grid with softboxes, backdrops & monitoring',
      'Detailed pre-production shot lists and deliverable specs',
    ],
    ctaText: 'Discuss Video Production',
    href: '#booking',
  },
  {
    id: 'photography',
    title: 'Product Photography & Brand Content',
    tag: 'Commercial & E-commerce',
    icon: Camera,
    description:
      'Commercial product photography in a controlled studio setup, ensuring exact lighting, framing, reflections and color fidelity across digital storefronts.',
    features: [
      'Clean white-background ecommerce catalogue photography',
      'Creative staged product images for advertising campaigns',
      'Lifestyle, cosmetics, fashion & tech product shoots',
      'Platform-compliant image assets for Daraz, Shopify & websites',
      'High-definition product spotlight video reels',
      'Precise styling and background setups per product type',
    ],
    ctaText: 'Book Product Shoot',
    href: '#booking',
  },
  {
    id: 'branding',
    title: 'Personal Branding & Corporate Content',
    tag: 'Thought Leadership',
    icon: UserCheck,
    description:
      'Designed for executives, founders, consultants and professionals who need consistent, high-credibility media assets for their websites, PR, and LinkedIn presence.',
    features: [
      'Professional executive portraits and media kits',
      'Structured founder interview videos and company vision talks',
      'Consistent visual aesthetics matching personal brand guidelines',
      'Assets formatted for website heroes, press features & social profiles',
      'Direction on wardrobe, framing, pacing and talking points',
    ],
    ctaText: 'Plan Branding Shoot',
    href: '#booking',
  },
  {
    id: 'editing',
    title: 'Video Editing & Post-Production Suite',
    tag: 'Finishing & Polish',
    icon: Scissors,
    description:
      'Post-production determines the pacing, polish and impact of your footage. We transform raw studio takes into platform-optimized, high-retention media.',
    features: [
      'Multi-camera video switching, pacing and narrative cuts',
      'Audio cleanup, room noise reduction and speech leveling',
      'Cinematic color grading & DaVinci Resolve color correction',
      'Kinetic typography, animated lower thirds & subtitles in English / Bangla',
      'Hook-driven short-form cutdowns from long-form master files',
      'Multi-format export presets for YouTube (16:9) and Mobile (9:16)',
    ],
    ctaText: 'Request Editing Scope',
    href: '#booking',
  },
  {
    id: 'rental',
    title: 'Studio Rental & Production Assistance',
    tag: 'Space & Equipment',
    icon: Building2,
    description:
      'If you have your own crew, book our sound-treated studio on an hourly or day basis. If you need crew support, add camera operators and sound engineers to your session.',
    features: [
      'Acoustically treated room isolated from Dhaka street traffic',
      'Continuous studio lighting infrastructure & color backdrops',
      'Green screen setup for keying and virtual environments',
      'High-speed fiber internet for live streaming or remote monitoring',
      'Dedicated makeup, styling and client lounge area',
      'Optional technical crew support and equipment add-ons',
    ],
    ctaText: 'Check Studio Availability',
    href: '#booking',
  },
]

export default function StudioOfferings() {
  return (
    <section id="services" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            What We Offer
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            Studio Production Under One Roof.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            FrameCipher Studio provides studio-based content production for businesses, creators and brands that need help planning, recording, shooting and editing visual content through a clearly defined production process.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-frame-bg p-6 md:p-8 transition-colors duration-300 hover:bg-frame-muted/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center border border-frame-border bg-frame-muted/50 text-frame-accent transition-colors duration-300 group-hover:border-frame-accent group-hover:bg-frame-accent group-hover:text-frame-accent-fg">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-frame-muted-fg">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-frame-border/60">
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors group-hover:text-frame-accent"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
