'use client'

import Link from 'next/link'
import { Mic, Video, Camera, UserCheck, Scissors, Building2, CheckCircle2, ArrowRight } from 'lucide-react'
import { SectionIntro } from '../Kinetic'

const offerings = [
  {
    id: 'podcast',
    title: 'Podcast Recording Studio in Dhaka',
    tag: 'Audio & Video Podcasts',
    icon: Mic,
    description: 'An acoustically treated, multi-mic room for audio or 4K video podcasts, isolated from Dhaka street traffic.',
    features: [
      'Podcast episodes and founder interview sessions',
      'Executive thought-leadership and educational shows',
      'Multi-camera video podcasts formatted for YouTube',
      'Vertical 9:16 clips for Reels, TikTok and Shorts',
      'Broadcast microphones and sound isolation',
      'Repeatable recording schedules for recurring shows',
    ],
    anchor: 'podcast recording studio in Dhaka',
    href: '/studio/podcast/',
  },
  {
    id: 'video',
    title: 'Video Production and Shooting',
    tag: 'Planned Visuals',
    icon: Video,
    description: 'Corporate, brand and campaign video that is planned, lit and directed in the studio.',
    features: [
      'Corporate overviews and company profile videos',
      'Founder interviews, keynote talks and case studies',
      'YouTube series, tutorials and educational masterclasses',
      'Social media campaign and promotional videos',
      'Lighting grid with softboxes, backdrops and live monitoring',
      'Pre-production shot lists and written deliverable specs',
    ],
    anchor: 'video production company in Dhaka',
    href: '/studio/video-production/',
  },
  {
    id: 'photography',
    title: 'Product Photography and Brand Content',
    tag: 'Commercial & E-commerce',
    icon: Camera,
    description: 'Controlled lighting and colour accuracy for catalogues, campaigns and online stores.',
    features: [
      'White-background e-commerce catalogue photography',
      'Styled product images for advertising',
      'Lifestyle, cosmetics, fashion and tech product shoots',
      'Platform-ready images for Daraz, Shopify and websites',
      'Product spotlight video reels',
    ],
    anchor: 'product photography in Dhaka',
    href: '/studio/product-photography/',
  },
  {
    id: 'branding',
    title: 'Personal Branding and Corporate Content',
    tag: 'Thought Leadership',
    icon: UserCheck,
    description: 'Portraits, interviews and media kits for founders, executives and consultants.',
    features: [
      'Executive portraits and media kits',
      'Founder interview videos and company vision talks',
      'Styling that matches your brand guidelines',
      'Assets sized for website heroes, press features and social profiles',
      'Direction on wardrobe, framing, pacing and talking points',
    ],
    anchor: 'corporate video production in Dhaka',
    href: '/studio/corporate-video-production/',
  },
  {
    id: 'editing',
    title: 'Video Editing and Post-Production',
    tag: 'Finishing & Polish',
    icon: Scissors,
    description: 'Raw takes turned into publish-ready masters.',
    features: [
      'Multi-camera switching and narrative cuts',
      'Audio cleanup, room noise reduction and speech levelling',
      'Colour grading and correction in DaVinci Resolve',
      'Kinetic typography, lower thirds and EN/BN subtitles',
      'Short-form cutdowns from long-form masters',
      'Exports for YouTube (16:9) and mobile (9:16)',
    ],
    anchor: 'video editing and post-production in Dhaka',
    href: '/studio/video-editing/',
  },
  {
    id: 'rental',
    title: 'Studio Space Rental in Dhaka',
    tag: 'Space & Equipment',
    icon: Building2,
    description: 'Hourly or daily hire of the sound-treated stage. Add crew when you need it.',
    features: [
      'Acoustically treated room away from street noise',
      'Continuous lighting and colour backdrops (black, white, neutral grey)',
      'Green screen setup for keying and virtual sets',
      'High-speed fibre internet for live streaming or monitoring',
      'IPS and generator power backup',
      'Makeup, styling and client lounge area',
      'Optional technical crew and equipment add-ons',
    ],
    anchor: 'studio space rental in Dhaka',
    href: '/studio/rental/',
  },
]

const moreServices = [
  { label: 'documentary shorts', href: '/studio/documentary-production/' },
  { label: 'event coverage', href: '/studio/event-video-production/' },
  { label: 'live streaming', href: '/studio/live-streaming/' },
  { label: 'wedding cinema', href: '/studio/wedding-videography/' },
  { label: 'property tours', href: '/studio/property-videography/' },
  { label: 'voice-over', href: '/studio/voice-over/' },
]

function OfferingCard({ service }) {
  const Icon = service.icon
  return (
    <div className="group flex flex-col justify-between bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-muted/30 md:p-8">
      <div>
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center border border-frame-border bg-frame-muted/50 text-frame-accent transition-colors duration-300 group-hover:border-frame-accent group-hover:bg-frame-accent group-hover:text-frame-accent-fg">
            <Icon className="h-6 w-6" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">{service.tag}</span>
        </div>
        <h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-frame-muted-fg wide:text-lg">{service.description}</p>
        <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-6">
          {service.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-frame-muted-fg">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 border-t border-frame-border/60 pt-6">
        <Link href={service.href} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors group-hover:text-frame-accent">
          <span>{service.anchor}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

function MoreServicesStrip() {
  return (
    <div className="mt-8 border-2 border-frame-border bg-frame-muted/15 p-6 md:p-8">
      <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">More services on request</h3>
      <p className="mt-2 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
        We also quote{' '}
        {moreServices.map((s, i) => (
          <span key={s.href}>
            <Link href={s.href} className="font-bold text-frame-fg underline decoration-frame-accent/40 transition-colors hover:text-frame-accent">
              {s.label}
            </Link>
            {i < moreServices.length - 1 ? ', ' : '. '}
          </span>
        ))}
        See the rate card below.
      </p>
    </div>
  )
}

export default function StudioOfferings() {
  return (
    <section id="services" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="What we offer" title="Podcast, video and photo production services in Dhaka." index="03">
          Six production services, each scoped in writing before the shoot. Choose one or bundle them.
        </SectionIntro>
        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((service) => (
            <OfferingCard key={service.id} service={service} />
          ))}
        </div>
        <MoreServicesStrip />
      </div>
    </section>
  )
}
