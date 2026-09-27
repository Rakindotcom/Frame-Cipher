import Link from 'next/link'
import { getHubOfHubsLinks } from '../../lib/seo/internalLinks'

export default function ServicePillarClusterLinks({ service }) {
  const hubs = getHubOfHubsLinks()

  if (!hubs.length) return null
  if (service?.slug && hubs.some((hub) => hub.slug === service.slug)) return null

  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-[95vw]">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            The Seven Capability Pillars
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-4xl">
            Everything this offer runs on, cluster by cluster
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            Each pillar below is a full service line with its own deliverables, process, and proof.
            Start with the cluster that matches the constraint you are solving first.
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub, index) => (
            <article
              key={hub.href}
              className="group relative flex w-full min-w-0 flex-col justify-between border-2 border-frame-border bg-frame-muted/15 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-frame-accent hover:bg-frame-bg hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-sm text-frame-muted-fg transition-all group-hover:translate-x-1 group-hover:text-frame-accent"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold uppercase leading-snug text-frame-fg transition-colors group-hover:text-frame-accent">
                  <Link href={hub.href} className="after:absolute after:inset-0 after:content-['']">
                    {hub.anchor}
                  </Link>
                </h3>
                {hub.summary && (
                  <p className="mt-2 line-clamp-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {hub.summary}
                  </p>
                )}
              </div>
              <span className="mt-5 text-[11px] font-black uppercase tracking-wider text-frame-accent" aria-hidden="true">
                View Pillar
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
