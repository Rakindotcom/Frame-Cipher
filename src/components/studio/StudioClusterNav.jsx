'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionIntro } from '../Kinetic'

const hubs = [
  { title: 'Full-Service Video Production', path: '/studio/video-production/', desc: 'End-to-end concept, filming, and post-production in Dhaka.', price: 'from ৳35,000' },
  { title: 'Corporate Video Production', path: '/studio/corporate-video-production/', desc: 'Brand films, executive interviews, and masterclass productions.', price: 'from ৳48,000' },
  { title: 'Commercial Video & TVCs', path: '/studio/commercial-video-production/', desc: 'Advertising spots and digital campaign video creative.', price: 'from ৳78,000' },
  { title: 'Live Streaming Services', path: '/studio/live-streaming/', desc: 'Multi-camera broadcast streaming for webinars and summits.', price: 'from ৳18,000' },
  { title: 'Podcast Recording Studio', path: '/studio/podcast/', desc: 'Acoustic multi-mic audio & 4K video podcast sessions in Dhaka.', price: 'from ৳8,000' },
  { title: 'Product Photography', path: '/studio/product-photography/', desc: 'E-commerce white background, lifestyle and campaign visual assets.', price: '৳1,500 / product' },
  { title: 'Studio Space Rental', path: '/studio/rental/', desc: 'Hourly & daily quiet space rental with lighting grid & backdrops.', price: '৳2,000 / hour' },
  { title: 'Video Editing & Post-Production', path: '/studio/video-editing/', desc: 'DaVinci color grading, speech noise reduction & short reels cutdowns.', price: 'from ৳9,500' },
]

export default function StudioClusterNav() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Internal service hubs" title="Explore dedicated studio specializations." index="11">
          Production pipelines configured for podcasting, commercial video, e-commerce photography, and post-production.
        </SectionIntro>
        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {hubs.map((hub, i) => (
            <Link key={i} href={hub.path} className="group flex flex-col justify-between bg-frame-bg p-5 transition-all duration-300 hover:bg-frame-muted/30">
              <div>
                <span className="bg-frame-accent/15 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-frame-accent">{hub.price}</span>
                <h4 className="mt-3 font-heading text-sm font-bold uppercase text-frame-fg transition-colors group-hover:text-frame-accent">{hub.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-frame-muted-fg">{hub.desc}</p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 border-t border-frame-border/60 pt-4 text-[11px] font-black uppercase tracking-wider text-frame-accent">
                <span>Explore Service</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
