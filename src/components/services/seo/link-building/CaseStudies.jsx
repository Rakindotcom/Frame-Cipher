'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          Off-Page SEO &amp; Authority{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="Editorial outreach, digital PR, and authoritative backlink acquisition that built over 3.1K natural backlinks without link schemes or private networks."
      eyebrow="Link Building Portfolio // Editorial Authority"
      slugs={['border-locksmiths-local-seo', 'pixc-retouch-global-seo']}
    />
  )
}

