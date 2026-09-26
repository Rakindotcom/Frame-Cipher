import Image from 'next/image'
import Link from 'next/link'

function getServiceLinkForStudy(study) {
  if (!study) return null
  const slug = study.slug || ''
  if (slug.includes('local-seo') || slug.includes('locksmith') || slug.includes('phone')) {
    return '/services/seo/local-seo'
  }
  if (slug.includes('topical-map') || slug.includes('jarixo')) {
    return '/services/seo/technical-seo'
  }
  if (slug.includes('pixc') || slug.includes('global-seo')) {
    return '/services/seo/international-seo'
  }
  if (study.category === 'Paid Ads' || slug.includes('ads') || slug.includes('meta')) {
    return '/services/paid-advertising/meta-ads'
  }
  if (study.category === 'Personal Brand' || slug.includes('saleheen')) {
    return '/services/content-creation/branding'
  }
  return null
}

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
              <MetaItem
                label="Primary focus"
                value={study.primaryFocus}
                href={getServiceLinkForStudy(study)}
              />
            </div>
            {study.snapshot?.length > 0 && (
              <div className="grid gap-px bg-frame-border">
                {study.snapshot.map(([label, value]) => (
                  <MetaItem key={label} label={label} value={value} wide />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
