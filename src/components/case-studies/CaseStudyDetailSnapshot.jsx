import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudyServiceLinks } from '../../lib/seo/internalLinks'

function MetaItem({ label, value, href, wide = false }) {
  return (
    <div className={`bg-frame-bg p-5 md:p-6 ${wide ? 'sm:col-span-2' : ''}`}>
      <dt className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">{label}</dt>
      <dd className="mt-2.5 text-sm font-bold leading-tight text-frame-fg md:text-base">
        {href ? (
          <Link href={href} className="inline-flex items-center gap-1.5 text-frame-fg hover:text-frame-accent transition-colors group">
            <span>{value}</span>
            <span className="text-frame-accent group-hover:translate-x-0.5 transition-transform" aria-hidden="true">&rarr;</span>
          </Link>
        ) : (
          value
        )}
      </dd>
    </div>
  )
}

export default function CaseStudyDetailSnapshot({ study }) {
  const serviceLinks = getCaseStudyServiceLinks(study)

  return (
    <section className="border-b-2 border-frame-border px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="overflow-hidden border-2 border-frame-border bg-frame-muted">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={study.image.src}
                alt={study.image.alt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover object-top"
              />
            </div>
            <div className="border-t-2 border-frame-border bg-frame-bg px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-frame-muted-fg">
              {study.image.caption || `${study.client} - primary campaign reporting view`}
            </div>
          </div>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border">
            <div className="bg-frame-bg p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Project overview
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-3xl">
                {study.summary}
              </h2>
            </div>
            <div className="grid gap-px bg-frame-border sm:grid-cols-2">
              <MetaItem label="Client" value={study.client} />
              <MetaItem label="Industry" value={study.industry} />
              <MetaItem label="Timeline" value={study.timeline} />
              {study.primaryFocus ? (
                <MetaItem
                  label="Primary focus"
                  value={study.primaryFocus}
                  href={serviceLinks[0]?.href}
                />
              ) : null}
            </div>
            {study.snapshot?.length > 0 && (
              <div className="grid gap-px bg-frame-border">
                {study.snapshot.map(([label, value]) => (
                  <MetaItem key={label} label={label} value={value} wide />
                ))}
              </div>
            )}
            {serviceLinks.length > 0 && (
              <div className="bg-frame-bg p-6 md:p-8">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Services that delivered this
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1.5 border-2 border-frame-border bg-frame-muted/15 px-3.5 py-2 text-[11px] font-black uppercase tracking-wider text-frame-fg transition-colors hover:border-frame-accent hover:text-frame-accent"
                      >
                        <span>{link.anchor}</span>
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
