'use client'

import React from 'react'
import SeoCaseStudiesSection from '../SeoCaseStudiesSection'

export default function CaseStudies() {
  return (
    <SeoCaseStudiesSection
      title={
        <>
          Publisher Readiness &amp;{' '}
          <span className="italic text-frame-accent">Case Studies.</span>
        </>
      }
      subtitle="Building original, high-value, comprehensive topical structures and clean site hierarchies that meet Google's strict publisher and quality guidelines."
      eyebrow="Publisher Quality Portfolio // Compliance Proof"
      slugs={['jarixo-topical-map-seo-visibility', 'phone-fashion-fix-local-seo']}
    />
  )
}
