'use client'

import React from 'react'
import Link from 'next/link'
import { Mic, Video, Camera, UserCheck, Scissors, Building2, Check, ArrowRight } from 'lucide-react'

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

export default function StudioOfferings() {
  return (
    <section id="services" className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Studio Production Services.
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Six specialized production workflows, each scoped in writing before the shoot. Choose a standalone discipline or bundle full-funnel production.
          </p>
        </div>

        {/* Discrete Cards Grid (gap-6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-8 sm:p-9 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400 font-medium">
                      {service.tag}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600 transition-colors group-hover:border-purple-600/40 group-hover:bg-purple-600/15">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-normal text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.5} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-purple-400 transition-colors hover:text-white"
                  >
                    <span>{service.anchor}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* More Services Strip */}
        <div className="relative mt-10 overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-medium">
              More Services on Request
            </h3>
          </div>
          <p className="text-sm font-normal leading-relaxed text-zinc-300">
            We also quote{' '}
            {moreServices.map((s, i) => (
              <span key={s.href}>
                <Link
                  href={s.href}
                  className="font-medium text-white underline decoration-purple-600/50 transition-colors hover:text-purple-300"
                >
                  {s.label}
                </Link>
                {i < moreServices.length - 1 ? ', ' : '. '}
              </span>
            ))}
            See the rate card below for baseline pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
