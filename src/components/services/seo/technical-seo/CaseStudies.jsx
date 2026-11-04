'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          Technical SEO Architecture &amp;{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="Solving crawl errors, schema markup, canonical conflicts, robots.txt directives, and core web vitals for measurable search gains from zero to 2.1M impressions."
      eyebrow="Technical SEO Portfolio // Code-Level Proof"
      slugs={['border-locksmiths-local-seo', 'jarixo-topical-map-seo-visibility']}
    />
  )
}

