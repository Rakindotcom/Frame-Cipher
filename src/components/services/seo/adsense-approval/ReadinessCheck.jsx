'use client'

import React from 'react'

const criteria = [
  {
    title: 'Original, Useful Content',
    body: 'Google says sites applying for AdSense should have high-quality, original content that provides value to visitors. It also warns against sites with insufficient content, mostly visual pages, unfinished sections, or little original value. We review whether your pages offer genuine information, useful context, complete explanations, and enough substance for visitors to understand the topic. We do not rely on a fixed article count because Google does not publish one universal number of posts required for approval.',
  },
  {
    title: 'Clear Navigation & User Experience',
    body: 'Your visitors should be able to move through the site easily and find the information they are looking for. Google identifies navigation problems as a reason an AdSense application may not be approved. Issues can include broken links, restricted pages, excessive pop-ups, redirects, unfinished pages, and unclear site organization. We review menus, internal links, page hierarchy, usability, mobile presentation, and other structural issues that can make a site difficult to use.',
  },
  {
    title: 'AdSense Policy Compliance',
    body: 'Your website must comply with Google’s AdSense and publisher policies before you apply. Google can update these policies, so we review your site against the requirements that apply at the time of your engagement. We look for prohibited or restricted content, problematic implementations, misleading elements, and other policy risks that could affect your application.',
  },
  {
    title: 'Site Ownership & Technical Access',
    body: 'Google requires applicants to have access to the site’s HTML source code so AdSense can be connected and reviewed properly. We check whether your website is technically prepared for AdSense connection, including access, live pages, site configuration, and the basic setup needed to place and verify AdSense code.',
  },
  {
    title: 'Publisher Eligibility',
    body: 'Google’s current eligibility guidance states that applicants need their own content, must comply with AdSense policies, and must be at least 18 years old. Additional account and product requirements can also apply depending on how AdSense is being used. We review the eligibility factors that are relevant to your website and explain any issue that should be addressed before you submit.',
  },
]

export default function ReadinessCheck() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Eligibility Core // Readiness Criteria</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Is Your Website Ready for{' '}
            <span className="italic text-frame-accent">Google AdSense</span>?
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Google evaluates sites on content, navigation, policy compliance, technical setup, and
            eligibility before deciding on an application.
          </p>
        </div>

        {/* 5 Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 hover:border-white/[0.14] hover:bg-[#18181B] transition-all"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Pillar 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
