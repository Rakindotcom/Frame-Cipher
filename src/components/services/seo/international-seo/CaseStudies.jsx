'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          International SEO Results &amp;{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="Global search footprint expansion across US, UK, Australia, and Canadian markets with 91% top-10 visibility and multi-million search impressions."
      eyebrow="Global Search Portfolio // Cross-Border Proof"
      slugs={['pixc-retouch-global-seo', 'border-locksmiths-local-seo']}
    />
  )
}
