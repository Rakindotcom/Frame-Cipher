'use client'

import React from 'react'
import { Check } from 'lucide-react'
import { AutoLinks } from '../../../seo/AutoLinks'
import PosterButton from '../../../home/PosterButton'

const packages = [
  {
    name: 'Essential Care',
    price: '৳3,500/month',
    subtitle: 'Suitable for smaller websites that need regular technical upkeep and basic protection.',
    bestFor: 'Best for: Small business websites, portfolios, blogs and informational websites.',
    typicalCoverage: 'Updates, backups, security checks, uptime monitoring, minor fixes',
    scope: [
      'WordPress, theme, plugin or platform updates',
      'Monthly website backups',
      'Backup verification',
      'Uptime monitoring',
      'Basic security checks',
      'Minor bug fixes',
      'Broken-link checks',
      'Basic website health review',
      'Maintenance report',
    ],
    featured: false,
  },
  {
    name: 'Business Care',
    price: '৳7,500/month',
    subtitle: 'Designed for businesses that depend on their website for leads, inquiries, bookings, or regular customer interactions.',
    bestFor: 'Best for: Service businesses, corporate websites, growing companies and active content websites.',
    typicalCoverage: 'Everything in Essential + performance checks, content updates, integrations and technical support',
    scopePrefix: 'Includes everything in Essential Care, plus:',
    scope: [
      'More frequent updates and monitoring',
      'Performance checks',
      'Minor content and image updates',
      'Form and integration checks',
      'Minor functionality fixes',
      'Analytics and tracking checks',
      'Technical troubleshooting',
      'Priority support',
      'Monthly maintenance report',
    ],
    featured: true,
  },
  {
    name: 'Ecommerce Care',
    price: '৳15,000/month',
    subtitle: 'Ecommerce websites need more attention because technical problems can affect products, checkout, payments, orders, and revenue.',
    bestFor: 'Best for: WooCommerce, Shopify, Magento and other active ecommerce stores.',
    typicalCoverage: 'Store updates, checkout checks, payment monitoring, product support and performance monitoring',
    scope: [
      'Product and category updates',
      'Checkout testing',
      'Payment gateway checks',
      'Order-flow monitoring',
      'Inventory-related checks',
      'Shipping integration checks',
      'Coupon and promotion functionality',
      'Plugin, app or extension updates',
      'Store performance monitoring',
      'Security and compatibility checks',
      'Minor product/content updates',
      'Priority technical support',
      'Monthly maintenance report',
    ],
    featured: false,
  },
  {
    name: 'Custom / Priority Care',
    price: 'From ৳25,000/month',
    subtitle: 'For websites and applications that require a more specialized maintenance setup.',
    bestFor: 'Best for: Custom applications, high-traffic or business-critical websites.',
    typicalCoverage: 'Custom monitoring, priority support, technical maintenance and incident response',
    scopePrefix: 'Potential coverage includes:',
    scope: [
      'Custom application maintenance',
      'Dependency and framework updates',
      'API monitoring',
      'Advanced performance optimization',
      'Security improvements',
      'Deployment support',
      'Bug fixing',
      'Priority incident response',
      'Custom integrations',
      'Ongoing development support',
    ],
    note: 'The final price depends on application complexity, traffic, integrations, support requirements, response targets, and the amount of development work involved.',
    featured: false,
  },
]

const auditReviewItems = [
  'Security and update status',
  'Existing backups',
  'Website performance',
  'Platform and dependencies',
  'Important integrations',
  'Forms, checkout or other critical functions',
  'Known technical issues',
  'Maintenance requirements',
]

const timelineTableRows = [
  {
    stage: 'Initial Website Review',
    timeline: '1 to 2 business days',
    whatWeDo: 'Review the website, platform, security status, backups, performance, integrations, and existing technical issues.',
  },
  {
    stage: 'Maintenance Setup',
    timeline: '1 to 2 business days',
    whatWeDo: 'Confirm the maintenance scope, backup process, monitoring, access requirements, support level, and reporting setup.',
  },
  {
    stage: 'Initial Fixes & Updates',
    timeline: '2 to 5 business days*',
    whatWeDo: 'Apply important updates, resolve existing minor issues, verify backups, and address priority technical problems.',
  },
  {
    stage: 'Ongoing Maintenance',
    timeline: 'Weekly / Monthly',
    whatWeDo: 'Perform updates, security checks, backups, monitoring, performance checks, minor fixes, and other tasks included in your plan.',
  },
  {
    stage: 'Monthly Review & Report',
    timeline: 'Every month',
    whatWeDo: 'Review website health, completed maintenance tasks, issues found, and recommended actions for the next maintenance cycle.',
  },
]

export default function Pricing() {
  return (
    <div id="pricing" className="bg-[#09090B] text-white scroll-mt-20">
      {/* SECTION 1: WEBSITE MAINTENANCE PRICING */}
      <section className="border-b border-white/[0.08] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Left-Aligned Header */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Website Maintenance{' '}
              <span className="italic text-frame-accent">Pricing.</span>
            </h2>

            <div className="space-y-3 text-base sm:text-lg leading-relaxed text-zinc-300">
              <p>
                Website maintenance pricing depends on your platform, website size, update frequency, security requirements, support needs, and how important the website is to your daily business operations.
              </p>
              <p>
                <AutoLinks currentPath="/services/website-design-development/maintenance" allowed={["/services/website-design-development/business-website"]}>
                  A simple business website may only need routine updates, backups, security checks, and minor fixes. An ecommerce store or custom application needs closer monitoring, more technical support, and faster response when critical functions fail.
                </AutoLinks>
              </p>
              <p className="font-medium text-white">
                Our maintenance plans are structured around the actual needs and risk level of your website.
              </p>
            </div>
          </div>

          {/* HIGH-LEVEL COMPARISON TABLE */}
          <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
            <table className="w-full text-left min-w-[640px]">
              <thead className="border-b border-white/[0.08] bg-white/[0.02]">
                <tr>
                  <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Maintenance Plan</th>
                  <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Price</th>
                  <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Best For</th>
                  <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Typical Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-sm md:text-base font-normal text-zinc-300">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base font-medium uppercase text-white">Essential Care</td>
                  <td className="p-5 md:p-6 font-mono font-medium text-frame-accent whitespace-nowrap">৳3,500/month</td>
                  <td className="p-5 md:p-6 text-zinc-300">Small business websites, blogs &amp; portfolios</td>
                  <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed">Updates, backups, security checks, uptime monitoring, minor fixes</td>
                </tr>
                <tr className="bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base font-medium uppercase text-white flex items-center gap-2">
                    <span>Business Care</span>
                    <span className="rounded-full border border-frame-accent/40 bg-frame-accent/10 px-2 py-0.5 text-[10px] font-mono uppercase text-frame-accent">Popular</span>
                  </td>
                  <td className="p-5 md:p-6 font-mono font-medium text-frame-accent whitespace-nowrap">৳7,500/month</td>
                  <td className="p-5 md:p-6 text-zinc-300">Active business and service websites</td>
                  <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed">Everything in Essential + performance checks, content updates, integrations and technical support</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base font-medium uppercase text-white">Ecommerce Care</td>
                  <td className="p-5 md:p-6 font-mono font-medium text-frame-accent whitespace-nowrap">৳15,000/month</td>
                  <td className="p-5 md:p-6 text-zinc-300">WooCommerce, Shopify &amp; Magento stores</td>
                  <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed">Store updates, checkout checks, payment monitoring, product support and performance monitoring</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 md:p-6 font-heading text-base font-medium uppercase text-white">Custom / Priority Care</td>
                  <td className="p-5 md:p-6 font-mono font-medium text-frame-accent whitespace-nowrap">From ৳25,000/month</td>
                  <td className="p-5 md:p-6 text-zinc-300">Custom applications, high-traffic or business-critical websites</td>
                  <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed">Custom monitoring, priority support, technical maintenance and incident response</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* DETAILED PLAN CARDS */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-xl p-6 sm:p-7 md:p-8 transition-colors ${
                  pkg.featured
                    ? 'border-2 border-frame-accent/40 bg-[#15121c] shadow-[0_0_50px_rgba(168,85,247,0.12)]'
                    : 'border border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
                }`}
              >
                <div>
                  {pkg.featured && (
                    <span className="mb-4 inline-block rounded-full border border-frame-accent/40 bg-frame-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                    {pkg.name}
                  </h3>
                  <p className="mt-4 font-mono text-2xl md:text-3xl font-medium text-frame-accent">
                    {pkg.price}
                  </p>
                  <p className="mt-2 text-xs font-normal text-zinc-400 leading-relaxed">
                    {pkg.subtitle}
                  </p>
                  <p className="mt-4 text-xs font-medium text-white border-t border-white/[0.08] pt-4">
                    {pkg.bestFor}
                  </p>

                  <div className="mt-6 border-t border-white/[0.08] pt-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-white mb-3">
                      {pkg.scopePrefix || 'Includes:'}
                    </p>
                    <ul className="space-y-2 text-xs font-normal text-zinc-200">
                      {pkg.scope.map((item, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                            <Check className="h-3 w-3 stroke-[2.5]" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.note && (
                    <p className="mt-6 border-t border-white/[0.08] pt-4 text-xs italic text-zinc-400 leading-relaxed">
                      {pkg.note}
                    </p>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.08]">
                  <PosterButton
                    href="/contact"
                    variant={pkg.featured ? 'accent' : 'outline'}
                    className="w-full text-xs"
                  >
                    Select Plan
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>

          {/* ONE-TIME WEBSITE HEALTH AUDIT */}
          <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  One-Time Website Health Audit
                </h3>
              </div>
              <p className="font-mono text-2xl sm:text-3xl font-medium text-frame-accent">
                From ৳7,500
              </p>
            </div>

            <p className="mt-4 text-sm sm:text-base font-normal text-zinc-300 leading-relaxed max-w-4xl">
              If you are not ready for a monthly maintenance plan, we can first assess the current condition of your website.
            </p>

            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-wider text-white mb-3">
                The audit can review:
              </p>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm font-normal text-zinc-200">
                {auditReviewItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs sm:text-sm font-normal text-zinc-400 italic">
              The audit gives you a clearer picture of what needs attention before committing to ongoing maintenance.
            </p>

            <div className="mt-6">
              <PosterButton href="/contact">
                Request a Website Health Assessment
              </PosterButton>
            </div>
          </div>

          {/* SCOPE BOUNDARY SUMMARY */}
          <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
            <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              What&apos;s Included, and What&apos;s Not
            </h3>
            <p className="mt-4 text-sm sm:text-base font-normal text-zinc-300 leading-relaxed max-w-4xl">
              Maintenance plans cover routine website care, monitoring, minor updates, and technical support within the selected scope.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-zinc-400">
              Major work is normally quoted separately, including:
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm font-normal text-zinc-400">
              {[
                'Full website redesigns',
                'New website development',
                'Major new features',
                'Platform migrations',
                'Complex integrations',
                'Large ecommerce changes',
                'Extensive content creation',
                'Full SEO campaigns',
                'Large content migrations'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                  <span className="text-frame-accent font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
              Before maintenance begins, we clearly define the included services, support level, response expectations, update frequency, and additional-work terms.
            </p>
            <div className="mt-6 border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-white">Need ongoing support for your website?</p>
                <p className="text-xs text-zinc-400">We help you choose the right tier for your tech stack.</p>
              </div>
              <PosterButton href="/contact">
                Start Your Website Maintenance Plan
              </PosterButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WEBSITE MAINTENANCE TIMELINE */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Left-Aligned Header */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Website Maintenance{' '}
              <span className="italic text-frame-accent">Timeline.</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              Website maintenance is an ongoing process rather than a one-time task. We first review your website, identify priority issues, and set up the maintenance scope. After that, we handle routine updates, monitoring, fixes, and reporting based on your selected plan.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
            <table className="w-full text-left min-w-[640px]">
              <thead className="border-b border-white/[0.08] bg-white/[0.02]">
                <tr>
                  <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Stage</th>
                  <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">Timeline</th>
                  <th className="p-5 md:p-6 font-mono text-xs uppercase tracking-wider text-frame-accent">What We Do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-sm md:text-base font-normal text-zinc-300">
                {timelineTableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 md:p-6 font-heading text-base font-medium uppercase text-white">{row.stage}</td>
                    <td className="p-5 md:p-6 font-mono font-medium text-frame-accent whitespace-nowrap">{row.timeline}</td>
                    <td className="p-5 md:p-6 text-sm text-zinc-400 leading-relaxed">{row.whatWeDo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs font-normal text-zinc-400 italic">
            *The timeline for initial fixes can vary depending on the website&apos;s condition, technical complexity, and the number of issues identified.
          </p>

          <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 max-w-4xl space-y-3">
            <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              How Ongoing Maintenance Works
            </h3>
            <p className="text-sm sm:text-base font-normal text-zinc-300 leading-relaxed">
              Once your maintenance plan is active, we continuously manage the technical tasks included in your selected package. Routine work may happen weekly or monthly depending on your website and its maintenance requirements.
            </p>
            <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
              For ecommerce stores and business-critical websites, we can provide more frequent monitoring and priority support where required.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
