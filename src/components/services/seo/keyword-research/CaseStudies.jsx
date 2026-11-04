'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          Keyword Research &amp; Mapping{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="Granular keyword-to-URL intent mapping and topical clustering converting untapped search demand into measurable revenue and ranking velocity."
      eyebrow="Keyword Architecture Portfolio // Intent Mapping"
      slugs={['phone-fashion-fix-local-seo', 'jarixo-topical-map-seo-visibility']}
    />
  )
}
