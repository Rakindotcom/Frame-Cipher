'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          Strategic SEO Roadmaps &amp;{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="Long-term organic strategies combining technical hygiene with content silos, achieving 200%+ organic traffic expansion and top-10 commercial dominance."
      eyebrow="SEO Strategy Portfolio // High-Impact Outcomes"
      slugs={['pixc-retouch-global-seo', 'jarixo-topical-map-seo-visibility']}
    />
  )
}

