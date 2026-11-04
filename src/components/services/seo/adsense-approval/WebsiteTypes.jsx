'use client'

import React from 'react'

const websiteTypes = [
  {
    title: 'Blogs & Content Publishers',
    body: 'We help bloggers and independent publishers prepare content-focused websites for AdSense by reviewing content depth, originality, navigation, policy compliance, and overall site readiness.',
    closing: null,
  },
  {
    title: 'Niche & Informational Websites',
    body: 'Informational websites need more than a collection of short pages. We review topic coverage, content usefulness, internal structure, originality, and whether the site provides enough value beyond basic or repetitive information.',
    closing: null,
  },
  {
    title: 'Affiliate & Review Websites',
    body: 'Affiliate sites can face additional quality challenges when much of their content provides little value beyond product listings or third-party information. We review whether your pages add genuine original value and whether affiliate content forms an appropriate part of the overall site.',
    closing:
      'Google’s own guidance specifically warns against affiliate content that does not provide sufficient additional value.',
  },
  {
    title: 'News & Magazine Websites',
    body: 'We review category structure, article organization, publishing quality, navigation, author or publication information where relevant, and the broader policy-readiness of the site.',
    closing: null,
  },
  {
    title: 'Multilingual Publishing Websites',
    body: 'Multilingual websites need careful attention to language support, navigation, page organization, and content quality across different versions.',
    closing:
      'Google currently supports several publisher languages, including Bengali and English, but unsupported primary-language content can create AdSense eligibility issues.',
  },
]

export default function WebsiteTypes() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Vertical Adaptation // Supported Publishing Models</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            AdSense Approval Support for{' '}
            <span className="italic text-frame-accent">Different Website Types</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            The right preparation differs by site model. AdSense requirements look different for
            blogs, informational sites, affiliate sites, news publishers, and multilingual websites.
          </p>
        </div>

        {/* 5 Website Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Model 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>

              {item.closing && (
                <div className="mt-6 border-l-2 border-frame-accent bg-[#09090B] p-4 text-xs leading-relaxed text-zinc-400 rounded-r-md">
                  {item.closing}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
