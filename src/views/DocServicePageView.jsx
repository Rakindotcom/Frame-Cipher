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

      {/* BREADCRUMB (Semantic DOM & SEO, visually hidden) */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <div>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          {service.pillarParent && (
            <Link href={`/services/${service.pillarSlug}`}>
              {service.pillarParent.replace(' Services in Bangladesh', '').replace(' Service Page', '')}
            </Link>
          )}
          <span>{service.sheetTitle}</span>
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
        <section className="relative isolate border-b border-white/10 bg-gradient-to-b from-purple-950/20 via-[#0D0E14] to-[#09090B] px-4 py-12 md:px-8 md:py-16">
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-64 w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-purple-400 text-3xl font-black">“</span>
            <blockquote className="font-quote text-xl md:text-2xl font-medium italic text-zinc-100 leading-relaxed">
              {service.quote}
            </blockquote>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.24em] text-purple-400">
              Frame Cipher Strategic Principle
            </p>
          </div>
        </section>
      )}

      {/* MARQUEE TICKER */}
      {marqueeItems.length > 0 && <TypeMarquee items={marqueeItems} slow />}

      {/* PILLAR VIEW: SUB-SERVICES GRID */}
      {isPillar && subServices.length > 0 && (
        <section id="sub-services" className="relative isolate px-4 py-24 md:px-8 md:py-32 scroll-mt-20">
          <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 flex justify-center">
            <div className="h-96 w-[800px] rounded-full bg-purple-600/10 blur-[140px]" />
          </div>
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Architecture & Scope"
              title={`Specialized ${displayName} Capabilities`}
            >
              Each service is engineered for a specific business outcome. Choose the precise focus your brand needs next.
            </SectionIntro>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {subServices.map((sub, index) => (
                <Link
                  key={sub.slug}
                  href={`/services/${sub.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div>
                    <p className="font-heading text-4xl font-bold leading-none tracking-tighter text-purple-400/40 transition-colors duration-300 group-hover:text-purple-300">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-6 font-heading text-2xl font-bold leading-none tracking-tighter text-white transition-colors duration-300 group-hover:text-purple-300">
                      {sub.sheetTitle}
                    </h3>
                    <p className="mt-4 text-base font-medium leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200 wide:text-lg">
                      {sub.shortDesc || sub.heroHook?.slice(0, 160) || sub.metaDescription}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-purple-400 transition-colors duration-300 group-hover:text-purple-300">
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
        <section className="relative isolate px-4 py-24 md:px-8 md:py-32">
          <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 flex justify-center">
            <div className="h-96 w-[700px] rounded-full bg-purple-600/10 blur-[130px]" />
          </div>
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Core Capabilities" title="What We Build & Deliver">
              A concrete breakdown of what this service covers and how each module contributes to conversions.
            </SectionIntro>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.offerings.map((offering, idx) => (
                <article key={offering.title} className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-purple-400">
                      Module {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-white">
                      {offering.title}
                    </h3>
                    {offering.description && (
                      <p className="mt-4 text-base font-medium leading-relaxed text-zinc-400 wide:text-lg">
                        {offering.description}
                      </p>
                    )}
                    {offering.bullets?.length > 0 && (
                      <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                        {offering.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5 text-sm font-medium text-zinc-300">
                            <span className="text-purple-400 font-bold text-base leading-none">•</span>
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
        <section className="relative isolate border-y border-white/10 bg-gradient-to-b from-[#09090B] via-[#0D0E14] to-[#09090B] px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">
            {/* Why it matters */}
            {service.whyMatters?.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.26em] text-purple-400">Strategic Context</p>
                <h2 className="mt-4 font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-tighter text-white">
                  Why This Service Matters
                </h2>
                <div className="mt-6 space-y-4 text-base font-medium leading-relaxed text-zinc-400 wide:text-lg">
                  {service.whyMatters.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Why choose us */}
            {advantages.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.26em] text-purple-400">Our Advantage</p>
                <h2 className="mt-4 font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-tighter text-white">
                  Why We're Different
                </h2>
                <div className="mt-6 space-y-6">
                  {advantages.map((diff) => (
                    <div key={`${diff.title}-${diff.text}`} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                      <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                        {diff.title}
                      </h3>
                      <p className="mt-2 text-base font-medium leading-relaxed text-zinc-400 wide:text-lg">
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
        <section className="relative isolate px-4 py-24 md:px-8 md:py-32">
          <div className="pointer-events-none absolute inset-x-0 bottom-1/4 -z-10 flex justify-center">
            <div className="h-96 w-[700px] rounded-full bg-purple-600/10 blur-[130px]" />
          </div>
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Workflow Sequence" title="How the Build Moves Forward">
              Every milestone is structured with review checkpoints so you maintain full transparency from start to finish.
            </SectionIntro>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.processSteps.map((step, idx) => (
                <article key={step.title} className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-purple-500/10">
                  <div>
                    <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-purple-400/40 transition-colors duration-300 group-hover:text-purple-300">
                      {String(step.number || idx + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-6 font-heading text-xl font-bold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-purple-300">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base font-medium leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200 wide:text-lg">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRICING & TIERS */}
      {(service.pricing?.packages?.length > 0 || pricingTable) && (
        <section className="relative isolate border-y border-white/10 bg-gradient-to-b from-[#09090B] via-[#0D0E14] to-[#09090B] px-4 py-24 md:px-8 md:py-32">
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-96 w-[900px] rounded-full bg-purple-600/10 blur-[150px]" />
          </div>
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Investment & Scope" title="Transparent Pricing & Engagement Levels">
              {service.pricing.intro || 'Pricing is tailored to project scope, custom integrations, and growth objectives.'}
            </SectionIntro>

            {/* Package Cards */}
            {service.pricing.packages?.length > 0 && (
              <div className="mb-14 grid gap-6 md:grid-cols-3">
                {service.pricing.packages.map((pkg, i) => (
                  <article
                    key={pkg.name}
                    className={`flex flex-col justify-between rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 ${
                      i === 1
                        ? 'border-purple-500/50 bg-gradient-to-b from-purple-950/30 to-white/[0.04] shadow-2xl shadow-purple-950/40 ring-1 ring-purple-500/50'
                        : 'border-white/10 bg-white/[0.03] hover:border-purple-500/30'
                    }`}
                  >
                    <div>
                      {i === 1 && (
                        <span className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-md shadow-purple-600/30 mb-4">
                          Most Popular
                        </span>
                      )}
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-white">
                        {pkg.name}
                      </h3>
                      {pkg.description && (
                        <p className="mt-2 text-sm font-medium text-zinc-400 wide:text-lg">
                          {pkg.description}
                        </p>
                      )}
                      <p className="mt-6 font-heading text-3xl font-bold tracking-tight text-purple-400">
                        {pkg.price}
                      </p>

                      {pkg.features?.length > 0 && (
                        <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                          {pkg.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-2.5 text-sm font-medium text-zinc-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" aria-hidden="true" />
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
              <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl shadow-purple-950/20">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-white/10 bg-white/[0.04]">
                    <tr>
                      {pricingTable.headers.map((heading) => (
                        <th key={heading} scope="col" className="p-4 font-heading text-sm font-bold uppercase tracking-wider text-white md:p-5 md:text-base">
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {pricingTable.rows.map((row) => (
                      <tr key={row.join('|')} className="transition-colors hover:bg-white/[0.03]">
                        {row.map((cell, cIdx) => (
                          cIdx === 0 ? (
                            <th key={cell} scope="row" className="p-4 text-left font-semibold text-white md:p-5">
                              {cell}
                            </th>
                          ) : (
                            <td key={`${cell}-${cIdx}`} className="p-4 text-center font-medium text-zinc-400 md:p-5">
                              {cell === 'Included' ? <span className="font-bold text-purple-400">Included</span> : cell}
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
        <section className="relative isolate px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <SectionIntro eyebrow="Market Presence" title="Built from Dhaka for Local & Global Scale" />
              <RichParagraphs text={service.serviceAreas} className="text-lg" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
                <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                  Bangladesh Market Fit
                </h3>
                <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-zinc-400">
                  Tested for typical local mobile connection speeds, local user intent, and seamless bKash/Nagad checkout gateways.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
                <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                  International Standards
                </h3>
                <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-zinc-400">
                  Delivering projects across the US, UK, Canada, Australia, and UAE with clean code architecture and timezone-friendly communication.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TIMELINE & GUARANTEE */}
      {(service.timeline || service.guarantee) && (
        <section className="relative isolate border-y border-white/10 bg-gradient-to-b from-[#09090B] via-[#0D0E14] to-[#09090B] px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2">
            {service.timeline && (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-purple-400">Delivery Schedule</span>
                <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-white">
                  Timeline & Duration
                </h3>
                <RichParagraphs text={service.timeline} className="mt-4" />
              </div>
            )}
            {service.guarantee && (
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-purple-400">Accountability</span>
                <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-white">
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
        <section className="relative isolate px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Onboarding" title="What Happens Next After You Contact Us">
              Getting started is straightforward and transparent. Here is what to expect from day one.
            </SectionIntro>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.nextSteps.map((step) => (
                <article key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl hover:border-purple-500/30 transition-all">
                  <span className="font-heading text-3xl font-bold text-purple-400">
                    0{step.step}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-zinc-400">
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
        <section className="relative isolate border-t border-white/10 bg-gradient-to-b from-[#09090B] via-[#0D0E14] to-[#09090B] px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Frequently Asked Questions" title={`Questions About ${service.sheetTitle}`} />
            <FAQList faqs={service.faqs} />
          </div>
        </section>
      )}

      {/* RELATED / SISTER SERVICES */}
      {relatedServices.length > 0 && (
        <section className="border-t border-white/10 px-4 py-20 md:px-8 md:py-28 bg-[#09090B]">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Related Solutions" title="Explore Connected Services" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-400 group-hover:text-purple-300">
                    {rel.pageType}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-bold tracking-tight text-white group-hover:text-purple-300">
                    {rel.sheetTitle}
                  </h3>
                  <span className="mt-4 inline-block text-xs font-black uppercase tracking-wider text-zinc-400 group-hover:text-white">
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
      <p key={paragraph} className={`mb-4 text-base font-medium leading-relaxed text-zinc-400 last:mb-0 ${className}`}>
        {paragraph}
      </p>
    ))
}
