'use client'

import { useEffect, useState } from 'react'
import { CTASection } from '../components/Kinetic'
import Testimonials from '../components/Testimonials'
import { growthCaseStudies } from '../data/growthWork'
import {
  CaseStudiesHero,
  CaseStudiesFilterBar,
  CaseStudiesGrid,
  CaseStudiesFeaturedSpotlight,
} from '../components/case-studies'

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Compute category counts
  const personalBrandCount = growthCaseStudies.filter((s) => s.category === 'Personal Brand').length
  const paidAdsCount = growthCaseStudies.filter((s) => s.category === 'Paid Ads').length
  const seoCount = growthCaseStudies.filter((s) => s.category === 'SEO').length

  const filterTabs = [
    { id: 'All', label: 'All', count: growthCaseStudies.length },
    { id: 'Personal Brand', label: 'Personal Brand', count: personalBrandCount },
    { id: 'Paid Ads', label: 'Paid Ads', count: paidAdsCount },
    { id: 'SEO', label: 'SEO', count: seoCount },
  ]

  const handleFilterSelect = (filterId) => {
    setActiveFilter(filterId)
    const filterEl = document.getElementById('case-studies-controls')
    if (filterEl) {
      const rect = filterEl.getBoundingClientRect()
      if (rect.top < 74) {
        filterEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  // Hash listener for deep links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash.includes('paid-ads') || hash.includes('facebook') || hash.includes('meta')) {
        setActiveFilter('Paid Ads')
      } else if (hash.includes('seo') || hash.includes('search')) {
        setActiveFilter('SEO')
      } else if (hash.includes('personal-brand') || hash.includes('featured') || hash.includes('saleheen')) {
        setActiveFilter('Personal Brand')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Filter & Search Logic
  const q = searchQuery.trim().toLowerCase()

  const filteredStudies = growthCaseStudies.filter((study) => {
    // 1. Category Filter
    if (activeFilter !== 'All' && study.category !== activeFilter) {
      return false
    }

    // 2. Search Query Filter
    if (!q) return true

    const matchesClient = study.client?.toLowerCase().includes(q)
    const matchesTitle = study.title?.toLowerCase().includes(q)
    const matchesSummary = study.summary?.toLowerCase().includes(q)
    const matchesIndustry = study.industry?.toLowerCase().includes(q)
    const matchesCategory = study.category?.toLowerCase().includes(q)
    const matchesFocus = study.primaryFocus?.toLowerCase().includes(q)
    const matchesTimeline = study.timeline?.toLowerCase().includes(q)
    const matchesTools = study.tools?.some((t) => t.toLowerCase().includes(q))
    const matchesLessons = study.lessons?.some((l) => l.toLowerCase().includes(q))
    const matchesMetrics = study.metrics?.some(
      ([val, lbl]) => val.toLowerCase().includes(q) || lbl.toLowerCase().includes(q)
    )

    return (
      matchesClient ||
      matchesTitle ||
      matchesSummary ||
      matchesIndustry ||
      matchesCategory ||
      matchesFocus ||
      matchesTimeline ||
      matchesTools ||
      matchesLessons ||
      matchesMetrics
    )
  })

  // Whether Dr. Ferdoush Saleheen flagship deep-dive is visible
  const isSpotlightVisible =
    (activeFilter === 'All' || activeFilter === 'Personal Brand') &&
    (!q ||
      'saleheen'.includes(q) ||
      'ferdoush'.includes(q) ||
      'personal brand'.includes(q) ||
      'supply chain'.includes(q) ||
      'youtube'.includes(q) ||
      'facebook'.includes(q) ||
      'reels'.includes(q))

  return (
    <main className="bg-frame-bg text-frame-fg">
      <CaseStudiesHero />

      <CaseStudiesFilterBar
        filterTabs={filterTabs}
        activeFilter={activeFilter}
        onFilterSelect={handleFilterSelect}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={growthCaseStudies.length}
        filteredCount={filteredStudies.length}
      />

      <CaseStudiesGrid
        caseStudies={filteredStudies}
        activeFilter={activeFilter}
        searchQuery={searchQuery}
        onResetFilters={() => {
          setActiveFilter('All')
          setSearchQuery('')
        }}
      />

      {isSpotlightVisible && <CaseStudiesFeaturedSpotlight />}

      <Testimonials
        eyebrow="Client voice"
        title="The proof before the breakdown."
        description="Before the process details, here is the client-side signal: public mentions, direct feedback, and the reactions that show the work landed."
      />

      <CTASection title="Want a growth system built around measurable outcomes?">
        Frame Cipher connects content, paid media, SEO, websites, and measurement into one
        practical system for growth.
      </CTASection>
    </main>
  )
}
