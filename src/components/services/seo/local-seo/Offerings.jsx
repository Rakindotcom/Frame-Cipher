'use client'

import React from 'react'
import {
  MapPin,
  Search,
  Globe2,
  FileSpreadsheet,
  Star,
  Compass,
  Users2,
  Code2,
  Activity,
  CheckCircle2,
} from 'lucide-react'

const offerings = [
  {
    icon: MapPin,
    title: 'Google Business Profile (GBP) Optimization',
    description:
      'Your Google Business Profile provides vital signals across Search and Maps. We optimize primary and secondary categories, service/product catalogues, rich descriptions, opening hours, business attributes, and media guidelines to eliminate inconsistencies.',
    bullets: [
      'Primary & secondary category alignment',
      'Services and product menu configuration',
      'High-converting business description writing',
      'Photo and high-res media guidance',
      'Service-area configuration & address hygiene',
      'Profile attribute & amenity verification',
    ],
  },
  {
    icon: Search,
    title: 'Local Keyword & Search Intent Mapping',
    description:
      'We research local search volume and assign high-intent search modifiers (e.g. "near me", neighborhood terms, city-specific terms) to the most appropriate URLs instead of forcing every keyword onto one page.',
    bullets: [
      'Neighborhood and locality keyword research',
      'Commercial buyer intent classification',
      'Service-to-location mapping matrix',
      'Elimination of keyword cannibalization',
    ],
  },
  {
    icon: Globe2,
    title: 'Local Website & Service-Area Page Optimization',
    description:
      'We build and refine dedicated city, branch, and service-area landing pages structured around genuine service coverage with localized on-page SEO, internal linking, and conversion touchpoints.',
    bullets: [
      'High-converting city & branch landing pages',
      'Localized heading and meta tag architecture',
      'Click-to-call, directions & booking touchpoints',
      'Prevention of low-value thin city pages',
    ],
  },
  {
    icon: FileSpreadsheet,
    title: 'Citation Building & NAP Cleanup',
    description:
      'Consistent business citations reinforce local authority. We audit and clean up inaccurate Name, Address, and Phone Number (NAP) listings across vetted directories and remove duplicate citations.',
    bullets: [
      'NAP consistency audits across platforms',
      'Duplicate listing identification & merging',
      'High-authority local directory submissions',
      'Niche industry association listings',
    ],
  },
  {
    icon: Star,
    title: 'Review & Reputation Management',
    description:
      'Customer reviews directly impact consumer choice and Map Pack ranking prominence. We create sustainable customer feedback workflows and compliant review response guidelines.',
    bullets: [
      'Policy-compliant review generation workflows',
      'Timely owner response templates & guidance',
      'Sentiment analysis of recurring customer feedback',
      'Strict adherence to Google review policies',
    ],
  },
  {
    icon: Compass,
    title: 'Google Maps & Geo-Grid Optimization',
    description:
      'Local rankings vary kilometer by kilometer across a metropolitan area. We deploy geo-grid ranking scans to pinpoint strong visibility zones, weak coverage pockets, and competitor strongholds.',
    bullets: [
      'Multi-point geo-grid rank tracking',
      'Proximity drop-off analysis across wards/sectors',
      'Competitor domination heatmaps',
      'Location-specific optimization adjustments',
    ],
  },
  {
    icon: Users2,
    title: 'Local Competitor Analysis',
    description:
      'We benchmark the top 3 Map Pack leaders in your specific locality to dissect category selection, review velocity, website structure, and backlink authority to identify exploitable gaps.',
    bullets: [
      'Map Pack competitor profile reverse-engineering',
      'Review count and rating velocity comparison',
      'Local content & schema benchmarking',
      'Local link profile & citation gap analysis',
    ],
  },
  {
    icon: Code2,
    title: 'Local Schema & Entity Signals',
    description:
      'We embed JSON-LD structured data markup to give search engine crawlers machine-readable certainty about your operational entity, coordinates, opening hours, and service radius.',
    bullets: [
      'LocalBusiness & Organization schema injection',
      'GeoCoordinates & openingHoursSpecification markup',
      'Service, Product, FAQ & Breadcrumb schemas',
      'Entity reconciliation across social & directory URLs',
    ],
  },
  {
    icon: Activity,
    title: 'Local Search Monitoring & Reporting',
    description:
      'Search positions fluctuate with algorithmic updates and competitor actions. We continuously monitor Google Maps visibility, phone calls, direction requests, website clicks, and organic rankings.',
    bullets: [
      'Call, direction & website interaction tracking',
      'Google Maps 3-Pack rank movement alerts',
      'Local organic impressions & query reporting',
      'Actionable monthly performance consultations',
    ],
  },
]

export default function Offerings() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#121214] px-3.5 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
              Service Capabilities // End-to-End Local Footprint
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] tracking-tight text-white">
            Our Local{' '}
            <span className="italic text-frame-accent">SEO Services</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Our local SEO services cover every signal influencing geographic visibility. Each capability plays a coordinated role in turning nearby searchers into paying customers.
          </p>
        </div>

        {/* 9 Offerings Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-xs font-semibold text-frame-accent">
                      Service 0{index + 1}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-frame-accent border border-white/[0.06]">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-frame-accent">
                      Scope Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                          <CheckCircle2 className="h-3.5 w-3.5 text-frame-accent shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
