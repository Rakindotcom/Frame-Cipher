'use client'

import React from 'react'
import { Check } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const offerings = [
  {
    title: 'AdSense Readiness Audit',
    body: 'We assess your site before you apply or reapply. The review covers content quality, site structure, navigation, policy risks, technical readiness, traffic sources, eligibility factors, and other issues that may affect the review.',
    closing:
      'You receive clear findings instead of a generic “your site is not ready” answer.',
  },
  {
    title: 'Content Quality & Originality Review',
    body: 'We review whether your important pages provide original, useful, and sufficiently detailed information.',
    lead: 'Our analysis can identify:',
    points: [
      'Thin or underdeveloped pages',
      'Repetitive content',
      'Low-value pages',
      'Auto-generated or minimally useful content',
      'Weak topical coverage',
      'Content that provides little additional value',
      'Affiliate pages that need stronger original value',
    ],
    closing:
      'Google specifically identifies insufficient content and content quality issues as common reasons an application may not be approved.',
  },
  {
    title: 'Policy & Restricted Content Review',
    body: 'We check your published content and site elements for AdSense policy risks. This includes reviewing potentially prohibited or restricted topics, misleading practices, problematic promotional elements, and other content or implementation issues that may require attention.',
    closing:
      'Google’s publisher policies apply to participating publishers, and Google can update those policies over time.',
  },
  {
    title: 'Site Structure & Navigation Review',
    body: 'We examine how your site is organized and how easily users can move between important pages.',
    lead: 'We review:',
    points: [
      'Main navigation',
      'Internal linking',
      'URL and category structure',
      'Broken links',
      'Redirects',
      'Restricted or inaccessible pages',
      'Mobile usability',
      'Unfinished or placeholder sections',
      'Excessive pop-ups or disruptive elements',
    ],
    closing: 'The goal is a website that is clear, accessible, and ready for review.',
  },
  {
    title: 'Essential Trust & Transparency Pages',
    body: 'We review the pages and disclosures appropriate to your website, business model, and audience.',
    lead: 'This may include:',
    points: [
      'Privacy Policy',
      'About page',
      'Contact page',
      'Terms and conditions',
      'Relevant publisher or disclosure information',
    ],
    closing:
      'Google specifically requires publishers to provide certain privacy-policy disclosures relating to advertising cookies and third-party vendors when applicable. We do not treat every legal or informational page as a universal AdSense checklist. Instead, we assess what your particular site needs and identify missing or inadequate information.',
  },
  {
    title: 'AdSense Site Connection & Application Support',
    body: 'Once your website is ready, we can guide you through the AdSense connection and submission process. This includes checking that the site is live, the required code can be placed correctly, and the application is submitted with the right technical setup.',
    closing:
      'Google instructs publishers to connect their site, confirm AdSense code placement, and request a review through the AdSense Sites area.',
  },
  {
    title: 'Rejection Diagnosis & Re-Application Support',
    body: 'Already rejected? We review the rejection information available in your AdSense account together with the actual condition of your website. Then we identify the most relevant issues, prioritize the necessary fixes, and perform a pre-submission review before you apply again. This approach is especially useful when the rejection notice is broad and your site has several possible problem areas.',
  },
  {
    title: 'AdSense Setup & Ad Placement Guidance',
    body: 'After approval, your site still needs compliant implementation. We can help review planned ad placements, page layouts, ad density, and user experience so ads do not interfere with navigation or create misleading click opportunities.',
    closing:
      'Google’s policies prohibit implementations that encourage clicks or cause users to mistake ads for other elements of the page.',
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] py-20 sm:py-24 md:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span>Service Matrix // Scope of Work</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white ">
            Our Google AdSense{' '}
            <span className="italic text-frame-accent">Approval Services</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            AdSense review outcomes hinge on content, policy, navigation, technical, and eligibility
            requirements. Our services map directly to what Google evaluates.
          </p>
        </div>

        {/* 8 Offerings List */}
        <div className="space-y-6 sm:space-y-8">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 hover:border-white/[0.14] transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
            >
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <span className="font-mono text-xs font-semibold text-frame-accent tracking-widest uppercase">
                  Service Module 0{index + 1}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                  {item.body}
                </p>
              </div>

              {/* Right Column (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                {item.lead && (
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {item.lead}
                  </p>
                )}

                {item.points && item.points.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                        <Check className="h-3.5 w-3.5 mt-0.5 text-frame-accent shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.closing && (
                  <div className="pt-3 border-t border-white/[0.06]">
                    <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                      {item.closing}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="max-w-2xl text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            AdSense review outcomes hinge on content, policy, navigation, technical, and eligibility requirements. We prepare your site for a compliant, successful submission.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Get Free Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
