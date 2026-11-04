'use client'

import React from 'react'
import { Check } from 'lucide-react'

const auditReviewItems = [
  'Navigation and information architecture',
  'User journeys and important task flows',
  'Mobile usability',
  'Forms, signup, booking, and checkout flows',
  'Content hierarchy',
  'Interface consistency',
  'Interaction patterns and error states',
  'Accessibility considerations',
  'Analytics or user behavior data where available',
]

export default function UxAudit() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            UX Audit &amp;{' '}
            <span className="italic text-frame-accent">Redesign Services.</span>
          </h2>
        </div>

        {/* Overview Banner */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10 mb-8">
          <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            You do not always need a completely new website or app. Sometimes the existing experience is the real problem.
          </p>
          <p className="md:col-span-2 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            Our UX audit and redesign service examines how users move through your current product, where friction occurs, and which areas need improvement. We can improve specific journeys or redesign the broader experience based on the condition and goals of the product.
          </p>
        </div>

        {/* 2-Column Details: What We Review & What You Receive */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* What We Review */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10">
            <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              What We Review
            </h3>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-normal text-zinc-200">
              {auditReviewItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Receive */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                What You Receive
              </h3>
              <div className="mt-6 space-y-4 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                <p>
                  Depending on the project scope, an audit can include identified UX issues, prioritized recommendations, improved user flows, wireframes, redesigned screens, and a practical roadmap for implementation.
                </p>
                <p className="font-medium text-white">
                  This service is useful for existing business websites, ecommerce stores, SaaS products, dashboards, mobile apps, and web applications that work technically but create unnecessary friction for users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
