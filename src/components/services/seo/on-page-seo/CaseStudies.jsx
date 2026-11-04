'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          On-Page SEO Optimization &amp;{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="Targeted title tags, semantic metadata, internal linking SILOs, and user-intent alignment resulting in sustained top-10 keyword rankings."
      eyebrow="On-Page SEO Portfolio // Content &amp; Structure"
      slugs={['border-locksmiths-local-seo', 'jarixo-topical-map-seo-visibility']}
    />
  )
}

