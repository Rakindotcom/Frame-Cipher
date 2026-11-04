'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          Penalty Recovery &amp;{' '}
          <span className="italic text-frame-accent">Search Restorations.</span>
        </>
      }
      subtitle="Remediating indexing issues, toxic footprints, thin content deficits, and algorithmic update drops with documented Search Console recoveries."
      eyebrow="Recovery Portfolio // Verified Search Restorations"
      slugs={['border-locksmiths-local-seo', 'pixc-retouch-global-seo']}
    />
  )
}
