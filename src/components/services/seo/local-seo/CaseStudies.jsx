'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          Local SEO Results &amp;{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="Documented local search campaigns in Australia and the US featuring 2.1M impressions, 34-page service architectures, and top-tier Google 3-Pack rankings."
      eyebrow="Local Search Portfolio // Verified Evidence"
      slugs={['border-locksmiths-local-seo', 'phone-fashion-fix-local-seo']}
    />
  )
}
