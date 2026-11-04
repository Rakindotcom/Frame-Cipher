'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          Ecommerce SEO Results &amp;{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="Proven organic growth for e-commerce catalogs and DTC brands, driving +203% search click growth and 10-pillar topical authority maps."
      eyebrow="Ecommerce SEO Portfolio // Verified Evidence"
      slugs={['pixc-retouch-global-seo', 'jarixo-topical-map-seo-visibility']}
    />
  )
}
