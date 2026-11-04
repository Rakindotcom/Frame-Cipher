import Link from 'next/link'
import { getHubOfHubsLinks } from '../../lib/seo/internalLinks'

export default function ServicePillarClusterLinks({ service }) {
  const hubs = getHubOfHubsLinks()

  if (!hubs.length) return null
  if (service?.slug && hubs.some((hub) => hub.slug === service.slug)) return null

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
            Everything this offer runs on,{' '}
            <span className="italic text-frame-accent">cluster by cluster.</span>
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-zinc-400 wide:text-lg">
            Each pillar below is a full service line with its own deliverables, process, and proof.
            Start with the cluster that matches the constraint you are solving first.
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub, index) => (
            <article
              key={hub.href}
              className="group relative flex w-full min-w-0 flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.14] hover:bg-[#18181B]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-sm text-zinc-500 transition-colors duration-200 group-hover:text-frame-accent wide:text-lg"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-medium leading-snug text-white transition-colors group-hover:text-frame-accent">
                  <Link href={hub.href} className="after:absolute after:inset-0 after:content-['']">
                    {hub.anchor}
                  </Link>
                </h3>
                {hub.summary && (
                  <p className="mt-2 line-clamp-3 text-xs font-medium leading-relaxed text-zinc-400">
                    {hub.summary}
                  </p>
                )}
              </div>
              <span className="mt-5 text-[11px] font-black uppercase tracking-wider text-purple-400" aria-hidden="true">
                View Pillar &rarr;
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
