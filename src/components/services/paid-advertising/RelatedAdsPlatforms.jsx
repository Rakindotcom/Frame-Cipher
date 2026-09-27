import Link from 'next/link'
import { getAdsComparisonLinks } from '../../../lib/seo/internalLinks'
import { getServiceDisplayName } from '../../../data/servicePages'

/**
 * In-body platform navigation for the ten specific ads service pages.
 *
 * Sibling cards, the pillar hub, cross-cluster links and the geo link stay in
 * ServiceClusterSection at the foot of the page, so this block deliberately
 * carries only the "compare with the other channels" links that the cluster
 * section does not already provide. It sits directly after the calculator
 * banner, where a reader deciding between channels is actually looking.
 */
export default function RelatedAdsPlatforms({ service }) {
  if (!service) return null

  const links = getAdsComparisonLinks(service)
  if (!links.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-14 sm:px-6 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[95vw]">
        <div className="border-2 border-frame-border bg-frame-muted/10 p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
            Not sure which channel fits?
          </p>
          <h2 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tighter text-frame-fg sm:text-2xl">
            Compare {getServiceDisplayName(service)} With Every Other Channel
          </h2>
          <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg">
            Each network runs a different auction, so the same budget buys very different volume.
            Read the channels competing for your money before the budget is split.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center border border-frame-border/70 px-3 py-2.5 text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg transition-colors hover:border-frame-accent hover:text-frame-accent"
              >
                {link.anchor}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
