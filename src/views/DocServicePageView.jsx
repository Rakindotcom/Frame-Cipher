import Link from 'next/link'
import { PageHero, PosterButton, SectionIntro, TypeMarquee, CTASection } from '../components/Kinetic'
import FAQList from '../components/FAQList'
import {
  getRelatedSubServices,
  getServiceAdvantages,
  getServiceDisplayName,
  getServicePricingTable,
  getServiceSummary,
  getSubServicesForPillar,
} from '../data/servicePages'

export default function DocServicePageView({ service }) {
  const isPillar = service.pageType === 'Pillar Service'
  const subServices = isPillar ? getSubServicesForPillar(service.slug) : []
  const relatedServices = getRelatedSubServices(service, 4)
  const advantages = getServiceAdvantages(service)
  const pricingTable = getServicePricingTable(service)
  const displayName = getServiceDisplayName(service)

  // Marquee items
  const marqueeItems = isPillar
    ? subServices.map((s) => s.sheetTitle)
    : service.processSteps?.length > 0
    ? service.processSteps.map((p) => p.title)
    : ['Strategy', 'Execution', 'Optimization', 'Growth', 'Measurement']

  // FAQ Schema JSON-LD
  const faqSchema = service.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null

  return (
    <main className="bg-frame-bg text-frame-fg">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replaceAll('<', '\\u003c') }}
        />
      )}

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          {service.pillarParent && (
            <>
              <Link href={`/services/${service.pillarSlug}`} className="transition hover:text-frame-fg">
                {service.pillarParent.replace(' Services in Bangladesh', '').replace(' Service Page', '')}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-frame-accent truncate max-w-[200px] sm:max-w-none">{service.sheetTitle}</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow={service.pillarParent ? `${service.pillarParent.replace(' Services in Bangladesh', '')} / Focused Service` : 'Complete Solution'}
        meta={isPillar ? `${subServices.length} Focused Services Included` : 'Focused Execution / In-House Team'}
        number={String(service.index).padStart(2, '0')}
        title={service.h1 || service.sheetTitle}
        actions={
          <>
            <PosterButton href="/contact">{service.primaryCta || 'Get a Free Quote'}</PosterButton>
            {isPillar ? (
              <PosterButton href="#sub-services" variant="outline">
                Explore Services ({subServices.length})
              </PosterButton>
            ) : service.pillarSlug ? (
              <PosterButton href={`/services/${service.pillarSlug}`} variant="outline">
                View Complete Solution
              </PosterButton>
            ) : (
              <PosterButton href="/projects" variant="outline">See Our Work</PosterButton>
            )}
          </>
        }
      >
        {getServiceSummary(service)}
      </PageHero>

      {/* QUOTE HIGHLIGHT */}
      {service.quote && (
        <section className="border-b-2 border-frame-border bg-frame-muted/40 px-4 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-frame-accent text-3xl font-black">“</span>
            <blockquote className="font-quote text-xl md:text-2xl font-medium italic text-frame-fg/95 leading-relaxed">
              {service.quote}
            </blockquote>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Frame Cipher Strategic Principle
            </p>
          </div>
        </section>
      )}

      {/* MARQUEE TICKER */}
      {marqueeItems.length > 0 && <TypeMarquee items={marqueeItems} accent slow />}

      {/* PILLAR VIEW: SUB-SERVICES GRID */}
      {isPillar && subServices.length > 0 && (
        <section id="sub-services" className="px-4 py-24 md:px-8 md:py-32 scroll-mt-20">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro
              eyebrow="Architecture & Scope"
              title={`Specialized ${displayName} Capabilities`}
            >
              Each service is engineered for a specific business outcome. Choose the precise focus your brand needs next.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
              {subServices.map((sub, index) => (
                <Link
                  key={sub.slug}
                  href={`/services/${sub.slug}`}
                  className="group block min-h-72 bg-frame-bg p-7 transition-colors duration-300 hover:bg-frame-accent"
                >
                  <p className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-6 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                    {sub.sheetTitle}
                  </h3>
                  <p className="mt-4 text-base font-medium leading-normal text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                    {sub.shortDesc || sub.heroHook?.slice(0, 160) || sub.metaDescription}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg">
                    View Details & Pricing &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUB-SERVICE VIEW: CAPABILITIES / WHAT WE OFFER */}
      {!isPillar && service.offerings?.length > 0 && (
        <section className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro eyebrow="Core Capabilities" title="What We Build & Deliver">
              A concrete breakdown of what this service covers and how each module contributes to conversions.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
              {service.offerings.map((offering, idx) => (
                <article key={offering.title} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      Module {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-fg">
                      {offering.title}
                    </h3>
                    {offering.description && (
                      <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
                        {offering.description}
                      </p>
                    )}
                    {offering.bullets?.length > 0 && (
                      <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-5">
                        {offering.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5 text-sm font-medium text-frame-fg/90">
                            <span className="text-frame-accent font-bold text-base leading-none">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY THIS SERVICE MATTERS & WHY FRAME CIPHER */}
      {(service.whyMatters?.length > 0 || advantages.length > 0) && (
        <section className="border-y-2 border-frame-border bg-frame-muted/30 px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw] grid gap-12 lg:grid-cols-2">
            {/* Why it matters */}
            {service.whyMatters?.length > 0 && (
              <div className="bg-frame-bg p-8 md:p-12 border-2 border-frame-border">
                <p className="text-xs font-black uppercase tracking-[0.26em] text-frame-accent">Strategic Context</p>
                <h2 className="mt-4 font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-bold uppercase leading-tight tracking-tighter text-frame-fg">
                  Why This Service Matters
                </h2>
                <div className="mt-6 space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg">
                  {service.whyMatters.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Why choose us */}
            {advantages.length > 0 && (
              <div className="bg-frame-bg p-8 md:p-12 border-2 border-frame-border">
                <p className="text-xs font-black uppercase tracking-[0.26em] text-frame-accent">Our Advantage</p>
                <h2 className="mt-4 font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-bold uppercase leading-tight tracking-tighter text-frame-fg">
                  Why We're Different
                </h2>
                <div className="mt-6 space-y-6">
                  {advantages.map((diff) => (
                    <div key={`${diff.title}-${diff.text}`} className="border-b border-frame-border/50 pb-5 last:border-b-0 last:pb-0">
                      <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                        {diff.title}
                      </h3>
                      <p className="mt-2 text-base font-medium leading-snug text-frame-muted-fg">
                        {diff.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* PROCESS ROADMAP */}
      {service.processSteps?.length > 0 && (
        <section className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro eyebrow="Workflow Sequence" title="How the Build Moves Forward">
              Every milestone is structured with review checkpoints so you maintain full transparency from start to finish.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
              {service.processSteps.map((step, idx) => (
                <article key={step.title} className="group min-h-64 bg-frame-bg p-7 md:p-8 transition-colors duration-300 hover:bg-frame-accent">
                  <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg">
                    {String(step.number || idx + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-6 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRICING & TIERS */}
      {(service.pricing?.packages?.length > 0 || pricingTable) && (
        <section className="border-y-2 border-frame-border bg-frame-muted/30 px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro eyebrow="Investment & Scope" title="Transparent Pricing & Engagement Levels">
              {service.pricing.intro || 'Pricing is tailored to project scope, custom integrations, and growth objectives.'}
            </SectionIntro>

            {/* Package Cards */}
            {service.pricing.packages?.length > 0 && (
              <div className="mb-14 grid bg-frame-border gap-px md:grid-cols-3">
                {service.pricing.packages.map((pkg, i) => (
                  <article key={pkg.name} className={`flex flex-col justify-between bg-frame-bg p-8 ${i === 1 ? 'ring-2 ring-frame-accent' : ''}`}>
                    <div>
                      {i === 1 && (
                        <span className="inline-block bg-frame-accent px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-frame-accent-fg mb-4">
                          Most Popular
                        </span>
                      )}
                      <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                        {pkg.name}
                      </h3>
                      {pkg.description && (
                        <p className="mt-2 text-sm font-medium text-frame-muted-fg">
                          {pkg.description}
                        </p>
                      )}
                      <p className="mt-6 font-heading text-3xl font-bold tracking-tight text-frame-accent">
                        {pkg.price}
                      </p>

                      {pkg.features?.length > 0 && (
                        <ul className="mt-8 space-y-3 border-t border-frame-border/60 pt-6">
                          {pkg.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-2.5 text-sm font-medium text-frame-fg/90">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-frame-accent" aria-hidden="true" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="mt-10">
                      <PosterButton href="/contact" variant={i === 1 ? 'accent' : 'outline'} className="w-full text-center">
                        Select Plan
                      </PosterButton>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Feature Comparison Table */}
            {pricingTable?.rows?.length > 0 && (
              <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
                <table className="w-full text-left text-sm">
                  <thead className="border-b-2 border-frame-border bg-frame-muted">
                    <tr>
                      {pricingTable.headers.map((heading) => (
                        <th key={heading} scope="col" className="p-4 font-heading text-sm font-bold uppercase tracking-wider text-frame-fg md:p-5 md:text-base">
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-frame-border/60">
                    {pricingTable.rows.map((row) => (
                      <tr key={row.join('|')} className="transition-colors hover:bg-frame-muted/40">
                        {row.map((cell, cIdx) => (
                          cIdx === 0 ? (
                            <th key={cell} scope="row" className="p-4 text-left font-semibold text-frame-fg md:p-5">
                              {cell}
                            </th>
                          ) : (
                            <td key={`${cell}-${cIdx}`} className="p-4 text-center font-medium text-frame-muted-fg md:p-5">
                              {cell === 'Included' ? <span className="font-bold text-frame-accent">Included</span> : cell}
                            </td>
                          )
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SERVICE AREAS & LOCAL RELEVANCE */}
      {service.serviceAreas && (
        <section className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw] grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <SectionIntro eyebrow="Market Presence" title="Built from Dhaka for Local & Global Scale" />
              <RichParagraphs text={service.serviceAreas} className="text-lg" />
            </div>
            <div className="grid gap-px bg-frame-border sm:grid-cols-2">
              <div className="bg-frame-bg p-7">
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  Bangladesh Market Fit
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Tested for typical local mobile connection speeds, local user intent, and seamless bKash/Nagad checkout gateways.
                </p>
              </div>
              <div className="bg-frame-bg p-7">
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  International Standards
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Delivering projects across the US, UK, Canada, Australia, and UAE with clean code architecture and timezone-friendly communication.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TIMELINE & GUARANTEE */}
      {(service.timeline || service.guarantee) && (
        <section className="border-y-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw] grid gap-8 md:grid-cols-2">
            {service.timeline && (
              <div className="bg-frame-bg p-8 border-2 border-frame-border">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Delivery Schedule</span>
                <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Timeline & Duration
                </h3>
                <RichParagraphs text={service.timeline} className="mt-4" />
              </div>
            )}
            {service.guarantee && (
              <div className="bg-frame-bg p-8 border-2 border-frame-border">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Accountability</span>
                <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Review & Approval Guarantee
                </h3>
                <RichParagraphs text={service.guarantee} className="mt-4" />
              </div>
            )}
          </div>
        </section>
      )}

      {/* NEXT STEPS (ONBOARDING) */}
      {service.nextSteps?.length > 0 && (
        <section className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro eyebrow="Onboarding" title="What Happens Next After You Contact Us">
              Getting started is straightforward and transparent. Here is what to expect from day one.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
              {service.nextSteps.map((step) => (
                <article key={step.title} className="bg-frame-bg p-7">
                  <span className="font-heading text-3xl font-bold text-frame-accent">
                    0{step.step}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQS */}
      {service.faqs?.length > 0 && (
        <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro eyebrow="Frequently Asked Questions" title={`Questions About ${service.sheetTitle}`} />
            <FAQList faqs={service.faqs} />
          </div>
        </section>
      )}

      {/* RELATED / SISTER SERVICES */}
      {relatedServices.length > 0 && (
        <section className="border-t-2 border-frame-border px-4 py-20 md:px-8 md:py-28 bg-frame-bg">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro eyebrow="Related Solutions" title="Explore Connected Services" />
            <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group bg-frame-bg p-6 transition-colors hover:bg-frame-accent"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent group-hover:text-frame-accent-fg">
                    {rel.pageType}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent-fg">
                    {rel.sheetTitle}
                  </h3>
                  <span className="mt-4 inline-block text-xs font-black uppercase tracking-wider text-frame-muted-fg group-hover:text-frame-accent-fg">
                    Read More &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <CTASection
        title={`Ready to start your ${displayName} project?`}
        primaryText={service.primaryCta || 'Request Free Consultation'}
      >
        Talk to our in-house team in Dhaka. We will review your goals and provide an honest, actionable roadmap without sales pressure.
      </CTASection>
    </main>
  )
}

function RichParagraphs({ text, className = '' }) {
  return String(text)
    .split(/\n{2,}/)
    .filter(Boolean)
    .map((paragraph) => (
      <p key={paragraph} className={`mb-4 text-base font-medium leading-relaxed text-frame-muted-fg last:mb-0 ${className}`}>
        {paragraph}
      </p>
    ))
}
