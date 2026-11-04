'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          AI Search &amp; Entity SEO{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="Semantic entity disambiguation, knowledge graph alignment, and structured topical maps powering AI citations across ChatGPT, Gemini, and Google AI Overviews."
      eyebrow="AEO &amp; Entity Portfolio // Empirical Verification"
      slugs={['jarixo-topical-map-seo-visibility', 'pixc-retouch-global-seo']}
    />
  )
}
