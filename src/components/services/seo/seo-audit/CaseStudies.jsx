'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          SEO Audit Results &amp;{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="In-depth technical and architectural audits identifying baseline deficits, resolving indexation bottlenecks, and growing visibility from near-zero to 2.1M impressions."
      eyebrow="SEO Audit Portfolio // Technical Diagnosis"
      slugs={['border-locksmiths-local-seo', 'phone-fashion-fix-local-seo']}
    />
  )
}
