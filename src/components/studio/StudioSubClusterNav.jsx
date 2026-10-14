'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, FolderTree } from 'lucide-react'
import { studioClusters, getClusterForService } from '../../data/studioServices'

export default function StudioSubClusterNav({ currentService, allServices }) {
  const currentCluster = getClusterForService(currentService.slug)

  // Sibling services in the same cluster
  const siblings = allServices.filter(
    (s) => s.clusterId === currentCluster?.id && s.slug !== currentService.slug
  )

  // Cross-cluster complementary services (e.g., video editing, podcast, rental)
  const complementary = allServices
    .filter(
      (s) =>
        s.clusterId !== currentCluster?.id &&
        s.slug !== currentService.slug &&
        (s.isParent || s.slug === 'podcast' || s.slug === 'video-editing' || s.slug === 'rental')
    )
    .slice(0, 4)

  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/15 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Cluster Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-frame-border pb-8">
          <div>
            <div className="flex items-center gap-2 text-frame-accent mb-2">
              <FolderTree className="h-4 w-4" />
              <span className="text-xs font-black uppercase tracking-[0.24em]">
                {currentCluster?.name || 'Studio Production'}
              </span>
            </div>
            <h2 className="font-heading text-2xl md:text-4xl font-extrabold uppercase text-frame-fg tracking-tight">
              Related Studio Capabilities in Dhaka
            </h2>
          </div>

          <Link
            href="/studio/"
            className="inline-flex items-center gap-2 border border-frame-border bg-frame-bg px-5 py-3 text-xs font-black uppercase tracking-wider text-frame-fg hover:border-frame-accent hover:text-frame-accent transition-colors"
          >
            <span>&uarr; Master Studio Hub</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Siblings Grid */}
        {siblings.length > 0 && (
          <div className="mb-12">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-frame-accent mb-4">
              Related {currentCluster?.name || 'Production'} Services
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((sib) => (
                <Link
                  key={sib.slug}
                  href={`/studio/${sib.slug}/`}
                  className="group border-2 border-frame-border bg-frame-bg p-6 transition-all duration-300 hover:border-frame-accent hover:bg-frame-muted/30"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-frame-muted-fg group-hover:text-frame-accent transition-colors">
                    {sib.eyebrow || 'Studio Service'}
                  </span>
                  <h4 className="mt-2 font-heading text-base font-bold uppercase text-frame-fg group-hover:text-frame-accent transition-colors">
                    {sib.name}
                  </h4>
                  <p className="mt-2 text-xs text-frame-muted-fg line-clamp-2 leading-relaxed">
                    {sib.tagline || sib.intro}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-accent">
                    <span>Explore Service</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Cross-Cluster Workflow Integrations */}
        {complementary.length > 0 && (
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-frame-accent mb-4">
              Connected Workflow Specializations
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {complementary.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/studio/${comp.slug}/`}
                  className="group border border-frame-border bg-frame-bg p-5 transition-all duration-300 hover:border-frame-accent hover:bg-frame-muted/20"
                >
                  <h4 className="font-heading text-xs font-bold uppercase text-frame-fg group-hover:text-frame-accent transition-colors">
                    {comp.name}
                  </h4>
                  <p className="mt-1.5 text-[11px] text-frame-muted-fg line-clamp-2 leading-relaxed">
                    {comp.tagline || comp.intro}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-frame-accent">
                    View Details &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
