'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, FolderTree } from 'lucide-react'
import { getClusterForService } from '../../data/studioServices'
import { renderContextualParagraph } from '../../lib/seo/contextualParagraphLinks'

const STUDIO_AGENCY_BRIDGES = {
  podcast: { href: '/services/content-creation/youtube-videos', anchor: 'YouTube Strategy & Video Podcasting' },
  'video-production': { href: '/services/content-creation/video-production', anchor: 'Full-Service Video Marketing Agency' },
  'product-photography': { href: '/services/website-design-development/ecommerce-website', anchor: 'E-Commerce Website & Catalog Systems' },
  'social-media-video-production': { href: '/services/content-creation/short-form-video', anchor: 'Short-Form Viral Video Agency' },
  'video-editing': { href: '/services/content-creation/motion-graphics-animation', anchor: 'Motion Graphics & VFX Animation' },
  'corporate-video-production': { href: '/services/paid-advertising/linkedin-ads', anchor: 'B2B LinkedIn Video Ad Strategy' },
  'commercial-video-production': { href: '/services/paid-advertising/meta-ads', anchor: 'High-Converting Meta Video Ad Buying' },
  'live-streaming': { href: '/services/social-media-management/facebook', anchor: 'Facebook Live & Community Management' },
  'voice-over': { href: '/services/content-writing/sales-copywriting', anchor: 'Commercial Scriptwriting & Copy' },
}

function SiblingGrid({ siblings, cluster }) {
  if (siblings.length === 0) return null
  return (
    <div className="mb-12">
      <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-frame-accent">
        Related {cluster?.name || 'Production'} Services
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siblings.map((sib) => (
          <Link key={sib.slug} href={`/studio/${sib.slug}/`} className="group border-2 border-frame-border bg-frame-bg p-6 transition-all duration-300 hover:border-frame-accent hover:bg-frame-muted/30">
            <span className="text-[10px] font-black uppercase tracking-widest text-frame-muted-fg transition-colors group-hover:text-frame-accent">{sib.eyebrow || 'Studio Service'}</span>
            <h4 className="mt-2 font-heading text-base font-bold uppercase text-frame-fg transition-colors group-hover:text-frame-accent">{sib.name}</h4>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-frame-muted-fg">{sib.tagline || sib.intro}</p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-accent">
              <span>Explore Service</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function ComplementaryGrid({ complementary }) {
  if (complementary.length === 0) return null
  return (
    <div>
      <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-frame-accent">Connected Workflow Specializations</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {complementary.map((comp) => (
          <Link key={comp.slug} href={`/studio/${comp.slug}/`} className="group border border-frame-border bg-frame-bg p-5 transition-all duration-300 hover:border-frame-accent hover:bg-frame-muted/20">
            <h4 className="font-heading text-xs font-bold uppercase text-frame-fg transition-colors group-hover:text-frame-accent">{comp.name}</h4>
            <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-frame-muted-fg">{comp.tagline || comp.intro}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-frame-accent">View Details &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function StudioSubClusterNav({ currentService, allServices }) {
  const currentCluster = getClusterForService(currentService.slug)
  const agencyBridge = STUDIO_AGENCY_BRIDGES[currentService.slug] || {
    href: '/services/360-marketing',
    anchor: 'Full-Funnel 360° Growth Marketing',
  }

  const siblings = allServices.filter((s) => s.clusterId === currentCluster?.id && s.slug !== currentService.slug)

  const complementary = allServices
    .filter(
      (s) =>
        s.clusterId !== currentCluster?.id &&
        s.slug !== currentService.slug &&
        (s.isParent || s.slug === 'podcast' || s.slug === 'video-editing' || s.slug === 'rental')
    )
    .slice(0, 4)

  const contextualTargets = [...siblings, ...complementary]
    .slice(0, 3)
    .map((service) => service.shortTitle || service.name)
    .filter(Boolean)
  const contextualCopy = contextualTargets.length
    ? `A ${currentService.shortTitle || currentService.name} production can also benefit from ${contextualTargets.join(', ')} when the project needs a complete studio workflow.`
    : ''

  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/15 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b-2 border-frame-border pb-8 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 text-frame-accent">
              <FolderTree className="h-4 w-4" />
              <span className="text-xs font-black uppercase tracking-[0.24em]">{currentCluster?.name || 'Studio Production'}</span>
            </div>
            <h2 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-frame-fg md:text-4xl">Related Studio Capabilities in Dhaka</h2>
          </div>
          <Link href="/studio/" className="inline-flex items-center gap-2 border border-frame-border bg-frame-bg px-5 py-3 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors hover:border-frame-accent hover:text-frame-accent">
            <span>&uarr; Master Studio Hub</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        {contextualCopy && (
          <p className="mb-12 max-w-4xl text-sm font-medium leading-7 text-frame-muted-fg">
            {renderContextualParagraph(contextualCopy, {
              currentPath: `/studio/${currentService.slug}`,
              maxLinks: contextualTargets.length,
              theme: 'frame',
            })}
          </p>
        )}
        <SiblingGrid siblings={siblings} cluster={currentCluster} />
        <ComplementaryGrid complementary={complementary} />
        {agencyBridge && (
          <div className="mt-12 flex flex-col gap-4 border-2 border-dashed border-frame-border/80 bg-frame-bg p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">Digital Distribution &amp; Agency Scale</span>
              <p className="mt-1 text-sm font-bold text-frame-fg">Looking to distribute this media through paid campaigns, organic SEO, or web development?</p>
              <p className="mt-0.5 text-xs text-frame-muted-fg">Our in-house digital marketing agency integrates production directly with performance media.</p>
            </div>
            <Link href={agencyBridge.href} className="inline-flex shrink-0 items-center gap-1.5 border border-frame-accent/40 bg-frame-accent/5 px-4 py-2 text-xs font-black uppercase tracking-wider text-frame-accent transition-colors hover:bg-frame-accent hover:text-frame-accent-fg">
              <span>{agencyBridge.anchor}</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
