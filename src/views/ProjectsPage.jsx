'use client'

import { useEffect, useRef, useState } from 'react'
import { growthPortfolio } from '../data/growthWork'
import { longVideos, shortVideos } from '../data/videoProjects'
import { videoScriptSamples, contentWritingSamples } from '../data/writingWork'
import {
  ProjectsHero,
  ProjectsFilterBar,
  ProjectsWebsitesSection,
  ProjectsVideoSection,
  ProjectsSeoSection,
  ProjectsPaidAdsSection,
  ProjectsDesignSection,
  ProjectsWritingSection,
  ProjectsFAQ,
  WorkArchiveModal,
  WorkImageModal,
  VideoPlayerModal,
  PreviewToast,
} from '../components/projects'

const paidAds = growthPortfolio.filter((project) => project.category === 'Paid Ads')
const seoProjects = growthPortfolio.filter((project) => project.category === 'SEO')

const filterTabs = [
  { id: 'All', label: 'All' },
  { id: 'Website', label: 'Website' },
  { id: 'Long Video', label: 'Long Video' },
  { id: 'Short Video', label: 'Short Video' },
  { id: 'SEO', label: 'SEO' },
  { id: 'Paid ads', label: 'Paid ads' },
  { id: 'Branding', label: 'Branding' },
  { id: 'Writing', label: 'Writing' },
]

function resolveInitialFilter(initialView) {
  if (!initialView) return 'All'
  const normalized = String(initialView).toLowerCase().replace(/-/g, ' ')
  if (normalized === 'software' || normalized === 'website') return 'Website'
  if (normalized === 'long video' || normalized === 'long') return 'Long Video'
  if (normalized === 'short video' || normalized === 'short' || normalized === 'reels') return 'Short Video'
  if (normalized === 'video' || normalized === 'media') return 'Long Video'
  if (normalized === 'seo') return 'SEO'
  if (normalized === 'paid ads' || normalized === 'performance' || normalized === 'paid') return 'Paid ads'
  if (normalized === 'branding' || normalized === 'design') return 'Branding'
  if (normalized === 'writing' || normalized === 'copy' || normalized === 'content' || normalized === 'scripts')
    return 'Writing'
  return 'All'
}

const designWorks = Array.from({ length: 25 }, (_, index) => ({
  number: index + 1,
  src: `/${index + 1}.webp`,
}))

const videoWorkSections = [
  {
    title: 'Long videos',
    description: 'Long-form video work produced for deeper storytelling, campaign context, and platform publishing.',
    items: longVideos,
  },
  {
    title: 'Short videos',
    description: 'Vertical short-form edits built for retention, rhythm, and fast social distribution.',
    items: shortVideos,
  },
]

const allWritingSamples = [...contentWritingSamples, ...videoScriptSamples]

const websiteProjects = [
  {
    name: 'Jarixo',
    url: 'https://jarixo.com/',
    domain: 'jarixo.com',
    platform: 'Shopify',
    category: 'Wellness E-commerce platform',
    screenshot: '/website-shots/jarixo.com.webp',
    summary:
      'A premium wellness storefront built around calm visual storytelling, product discovery, and a smoother path to purchase.',
  },
  {
    name: 'Dr. Ferdoush Saleheen',
    url: 'https://ferdoushsaleheen.com/',
    domain: 'ferdoushsaleheen.com',
    platform: 'React / Next.js',
    category: 'Personal brand website',
    caseStudyUrl: '/case-studies',
    screenshot: '/website-shots/ferdoush-saleheen.webp',
    summary:
      'Bilingual personal platform for his profile, books, audiobooks, podcasts, research, and public thought leadership.',
  },
  {
    name: 'Hotel Ashrafee',
    url: 'https://www.hotelashrafee.com/',
    domain: 'hotelashrafee.com',
    platform: 'React / Next.js',
    category: 'Hospitality website',
    screenshot: '/website-shots/hotel-ashrafee.webp',
    summary: 'Hotel website presentation for rooms, location, and direct guest trust.',
  },
  {
    name: 'ALFIS Limited',
    url: 'https://alfisltd.vercel.app/',
    domain: 'alfisltd.vercel.app',
    platform: 'React / Next.js',
    category: 'Business website',
    screenshot: '/website-shots/alfis-limited.webp',
    summary: 'Company website structure for a garments accessories business.',
  },
  {
    name: 'BD For Palestine',
    url: 'https://bdforpalestine.org/',
    domain: 'bdforpalestine.org',
    platform: 'React / Next.js',
    category: 'Community platform',
    screenshot: '/website-shots/bd-for-palestine.webp',
    summary: 'Public-facing advocacy and information site for a movement-focused initiative.',
  },
  {
    name: 'Riha WebTech',
    url: 'https://rihawebtech.com',
    domain: 'rihawebtech.com',
    platform: 'React / Next.js',
    category: 'Agency platform',
    screenshot: '/website-shots/rihawebtech.webp',
    summary:
      'A modern digital agency website showcasing enterprise software development, digital solutions, and client capabilities with responsive architecture.',
  },
  {
    name: 'Dr. Shafiul Islam Kawsar',
    url: 'https://drshafiulahmedkawsar.vercel.app/',
    domain: 'drshafiulahmedkawsar.vercel.app',
    platform: 'React / Next.js',
    category: 'Personal brand website',
    screenshot: '/website-shots/dr-shafiul-islam-kawsar.webp',
    summary:
      'A professional personal website presenting academic credentials, medical insight, and digital thought leadership in an accessible structure.',
  },
  {
    name: 'Pharmacity',
    url: 'https://pharmacity.com.bd/',
    domain: 'pharmacity.com.bd',
    platform: 'WordPress',
    category: 'Healthcare website',
    screenshot: '/website-shots/pharmacity.webp',
    summary:
      'A responsive healthcare and pharmacy platform structured for accessible service discovery, patient trust, and mobile browsing.',
  },
  {
    name: 'Plan Abroad',
    url: 'https://planabroad.org/',
    domain: 'planabroad.org',
    platform: 'WordPress',
    category: 'Education & Study Abroad platform',
    screenshot: '/website-shots/plan-abroad.webp',
    summary:
      'An international study-abroad advisory platform engineered to guide students through global university planning, visa prep, and consultations.',
  },
  {
    name: 'Nazmulhoq',
    url: 'https://nazmulhoq.com/',
    domain: 'nazmulhoq.com',
    platform: 'WordPress',
    category: 'Personal brand website',
    screenshot: '/website-shots/Nazmulhoq.webp',
    summary:
      'A polished personal brand platform communicating professional consulting services, public profile, and strategic business leadership.',
  },
  {
    name: 'Business Club',
    url: 'https://businessclub.com.bd/',
    domain: 'businessclub.com.bd',
    platform: 'React / Next.js',
    category: 'Corporate community platform',
    screenshot: '/website-shots/businessclub.webp',
    summary:
      'A business community platform built to present corporate initiatives, professional networking events, and member resources.',
  },
  {
    name: 'Muhsin Mashkur',
    url: 'https://www.muhsinmashkur.com/',
    domain: 'muhsinmashkur.com',
    platform: 'React / Next.js',
    category: 'Personal website',
    screenshot: '/website-shots/muhsin-mashkur.webp',
    summary: 'Personal site for profile, public identity, and digital presence.',
  },
  {
    name: 'Real Estate Platform Demo',
    url: 'https://realestate.framecipher.info/',
    domain: 'realestate.framecipher.info',
    platform: 'React / Next.js',
    category: 'Real estate platform',
    screenshot: '/website-shots/real-estate-demo.webp',
    summary:
      'A premium real estate platform demo designed for high-value property showcases, virtual walkthroughs, neighborhood insights, and direct buyer inquiry capture.',
  },
  {
    name: 'E-Commerce Store Demo',
    url: 'https://ecommerce.framecipher.info/',
    domain: 'ecommerce.framecipher.info',
    platform: 'React / Next.js',
    category: 'E-commerce storefront',
    screenshot: '/website-shots/ecommerce-demo.webp',
    summary:
      'A modern lifestyle and beauty e-commerce storefront engineered for seamless mobile browsing, dynamic product catalogs, and high-conversion checkouts.',
  },
  {
    name: 'Mahedi Hasan Portfolio',
    url: 'https://mahedi.framecipher.info/',
    domain: 'mahedi.framecipher.info',
    platform: 'React / Next.js',
    category: 'Personal portfolio',
    screenshot: '/website-shots/mahedi-hasan-perves-portfolio.webp',
    summary:
      'Personal portfolio showcasing technical SEO campaigns, full-stack web platforms, performance marketing systems, and agency growth engineering.',
  },
  {
    name: 'Business Byte',
    url: 'https://businessbyte-rakin.vercel.app/',
    domain: 'businessbyte-rakin.vercel.app',
    platform: 'React / Next.js',
    category: 'Web product',
    screenshot: '/website-shots/business-byte.webp',
    summary: 'Digital business resource presented as a lightweight web experience.',
  },
  {
    name: 'Thrive Clothing',
    url: 'https://thriveclothing.online/',
    domain: 'thriveclothing.online',
    platform: 'WordPress',
    category: 'Fashion E-commerce store',
    screenshot: '/website-shots/thriveclothing.online.webp',
    summary:
      'A WordPress fashion storefront for apparel collections, built around clean product browsing, category discovery, and a straightforward path to checkout.',
  },
  {
    name: 'Derma Ghor',
    url: 'https://dermaghor.com/',
    domain: 'dermaghor.com',
    platform: 'React / Next.js',
    category: 'Skincare E-commerce platform',
    screenshot: '/website-shots/dermaghor.com.webp',
    summary:
      'A Next.js skincare e-commerce platform for authentic imported products from France, Korea, USA, UK, and Japan, with guided product discovery and nationwide delivery.',
  },
]

export default function ProjectsPage({ initialView = null }) {
  const [activeFilter, setActiveFilter] = useState(() => resolveInitialFilter(initialView))
  const [searchQuery, setSearchQuery] = useState('')
  const [activeWork, setActiveWork] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0)
  const [showWorkArchive, setShowWorkArchive] = useState(false)
  const [showPreviewToast, setShowPreviewToast] = useState(false)
  const [toastDismissed, setToastDismissed] = useState(false)
  const imageSectionRef = useRef(null)
  const carouselRef = useRef(null)
  // Remembers the filter bar's "resting" document position (measured while near
  // the top of the page, before sticky positioning engages). Used to bring the
  // user back to the top of the work list instead of a clamped page bottom.
  const filterBarNaturalTopRef = useRef(null)

  const currentWork = designWorks[currentWorkIndex]

  useEffect(() => {
    const measureBar = () => {
      // Only meaningful near the top where the bar is not sticky-displaced.
      if (window.scrollY > 400) return
      const bar = document.getElementById('portfolio-controls')
      if (bar) filterBarNaturalTopRef.current = bar.getBoundingClientRect().top + window.scrollY
    }
    measureBar()
    window.addEventListener('scroll', measureBar, { passive: true })
    window.addEventListener('resize', measureBar, { passive: true })
    return () => {
      window.removeEventListener('scroll', measureBar)
      window.removeEventListener('resize', measureBar)
    }
  }, [])

  const handleFilterSelect = (filterId) => {
    // Capture scroll BEFORE React re-renders and the browser clamps the scroll
    // position. When the next view is shorter than the current scroll offset
    // (e.g. switching from "All" while deep in the Writing section), the
    // browser would otherwise clamp straight to the very bottom of the page.
    const scrollYBefore = window.scrollY

    setActiveFilter(filterId)

    // The new sections need a frame to mount and layout to settle. Re-check
    // shortly after as well in case images/fonts change the final page height.
    const reAnchor = () => {
      const doc = document.documentElement
      const maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight)
      // Enough content remains at the old scroll offset: keep the position.
      if (maxScroll >= scrollYBefore) return

      // The viewport was clamped (previous content collapsed). Land the user
      // at the top of the work list with the filter bar pinned under the nav.
      const bar = document.getElementById('portfolio-controls')
      const barTop = bar ? bar.getBoundingClientRect().top : 0
      const targetY =
        filterBarNaturalTopRef.current != null
          ? filterBarNaturalTopRef.current - 76
          : window.scrollY + barTop - 76
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'auto' })
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(reAnchor)
    })
    setTimeout(reAnchor, 200)
  }

  useEffect(() => {
    setActiveFilter(resolveInitialFilter(initialView))
  }, [initialView])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash.includes('website')) setActiveFilter('Website')
      else if (hash.includes('long-video')) setActiveFilter('Long Video')
      else if (hash.includes('short-video')) setActiveFilter('Short Video')
      else if (hash.includes('seo')) setActiveFilter('SEO')
      else if (hash.includes('paid-ads')) setActiveFilter('Paid ads')
      else if (hash.includes('branding')) setActiveFilter('Branding')
      else if (hash.includes('writing')) setActiveFilter('Writing')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (!activeWork && !activeVideo && !showWorkArchive) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveWork(null)
        setActiveVideo(null)
        setShowWorkArchive(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeWork, activeVideo, showWorkArchive])

  useEffect(() => {
    if (activeFilter !== 'All' && activeFilter !== 'Branding') return

    const timer = setInterval(() => {
      setCurrentWorkIndex((prev) => (prev + 1) % designWorks.length)
    }, 2800)

    return () => clearInterval(timer)
  }, [activeFilter])

  useEffect(() => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const card = container.querySelector(
      `[data-carousel-card="${currentWork.number}"]`
    )
    if (!card) return

    const cardLeft = card.offsetLeft
    const cardWidth = card.offsetWidth
    const containerWidth = container.clientWidth
    const targetScroll = cardLeft - (containerWidth / 2) + (cardWidth / 2)

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: 'smooth',
    })
  }, [currentWork.number])

  useEffect(() => {
    if (toastDismissed) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPreviewToast(true)
        }
      },
      { threshold: 0.25 }
    )

    const target = imageSectionRef.current
    if (target) observer.observe(target)

    return () => {
      if (target) observer.unobserve(target)
    }
  }, [toastDismissed])

  // Filtered Lists Based on Active Filter & Search Query
  const q = searchQuery.trim().toLowerCase()

  const filteredPaidAds = paidAds.filter((p) => {
    if (!q) return true
    return (
      p.client.toLowerCase().includes(q) ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q))
    )
  })

  const filteredSeo = seoProjects.filter((p) => {
    if (!q) return true
    return (
      p.client.toLowerCase().includes(q) ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q))
    )
  })

  const filteredWebsites = websiteProjects.filter((p) => {
    if (!q) return true
    return (
      p.name.toLowerCase().includes(q) ||
      p.domain.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      (p.platform && p.platform.toLowerCase().includes(q))
    )
  })

  const filteredLongVideos = videoWorkSections[0].items.filter((v) => {
    if (!q) return true
    return v.title.toLowerCase().includes(q) || 'video'.includes(q) || 'long video'.includes(q)
  })

  const filteredShortVideos = videoWorkSections[1].items.filter((v) => {
    if (!q) return true
    return (
      v.title.toLowerCase().includes(q) ||
      'video'.includes(q) ||
      'short video'.includes(q) ||
      'reels'.includes(q) ||
      (v.client && v.client.toLowerCase().includes(q)) ||
      (v.category && v.category.toLowerCase().includes(q)) ||
      (v.genre && v.genre.toLowerCase().includes(q)) ||
      (v.tags && v.tags.some((t) => t.toLowerCase().includes(q)))
    )
  })

  const filteredWriting = allWritingSamples.filter((sample) => {
    if (!q) return true
    return (
      sample.title.toLowerCase().includes(q) ||
      (sample.client && sample.client.toLowerCase().includes(q)) ||
      sample.category.toLowerCase().includes(q)
    )
  })

  const matchesBranding =
    !q ||
    'branding'.includes(q) ||
    'design'.includes(q) ||
    'creative'.includes(q) ||
    'visual'.includes(q) ||
    'poster'.includes(q) ||
    'archive'.includes(q)

  // Visibility flags per category
  const isWebsitesVisible =
    (activeFilter === 'All' || activeFilter === 'Website') && filteredWebsites.length > 0
  const isLongVideosVisible =
    (activeFilter === 'All' || activeFilter === 'Long Video') && filteredLongVideos.length > 0
  const isShortVideosVisible =
    (activeFilter === 'All' || activeFilter === 'Short Video') && filteredShortVideos.length > 0
  const isSeoVisible =
    (activeFilter === 'All' || activeFilter === 'SEO') && filteredSeo.length > 0
  const isPaidAdsVisible =
    (activeFilter === 'All' || activeFilter === 'Paid ads' || activeFilter === 'Paid Ads') &&
    filteredPaidAds.length > 0
  const isBrandingVisible =
    (activeFilter === 'All' || activeFilter === 'Branding') && matchesBranding
  const isWritingVisible =
    (activeFilter === 'All' || activeFilter === 'Writing') && filteredWriting.length > 0

  const hasZeroMatches =
    q !== '' &&
    !isWebsitesVisible &&
    !isLongVideosVisible &&
    !isShortVideosVisible &&
    !isSeoVisible &&
    !isPaidAdsVisible &&
    !isBrandingVisible &&
    !isWritingVisible

  return (
    <main className="projects-page min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden [overflow-anchor:none]">
      <ProjectsHero />

      <ProjectsFilterBar
        filterTabs={filterTabs}
        activeFilter={activeFilter}
        onFilterSelect={handleFilterSelect}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {isWebsitesVisible && <ProjectsWebsitesSection websites={filteredWebsites} />}

      <ProjectsVideoSection
        longVideos={filteredLongVideos}
        shortVideos={filteredShortVideos}
        isLongVideosVisible={isLongVideosVisible}
        isShortVideosVisible={isShortVideosVisible}
        onPlayVideo={setActiveVideo}
      />

      {isSeoVisible && <ProjectsSeoSection projects={filteredSeo} />}

      {isPaidAdsVisible && <ProjectsPaidAdsSection projects={filteredPaidAds} />}

      {isBrandingVisible && (
        <ProjectsDesignSection
          designWorks={designWorks}
          currentWork={currentWork}
          currentWorkIndex={currentWorkIndex}
          imageSectionRef={imageSectionRef}
          carouselRef={carouselRef}
          onSelectWork={setActiveWork}
          onOpenArchive={() => setShowWorkArchive(true)}
        />
      )}

      {isWritingVisible && <ProjectsWritingSection samples={filteredWriting} />}

      <ProjectsFAQ />

      {hasZeroMatches && (
        <div className="mx-auto my-16 max-w-2xl rounded-2xl border border-white/[0.08] bg-[#121214] p-8 text-center sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl" />
          <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-purple-300">
            No matches found
          </span>
          <h3 className="mt-4 font-heading text-2xl font-medium tracking-tight text-white md:text-3xl">
            No projects found matching &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="mt-3 text-sm text-zinc-400 max-w-md mx-auto">
            Try searching for another client name, service, or keyword, or reset the filters to browse all verified work.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setActiveFilter('All')
            }}
            className="group mt-6 inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:bg-zinc-200 active:scale-[0.98]"
          >
            <span>Reset filters &amp; search</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </button>
        </div>
      )}

      <WorkArchiveModal
        isOpen={showWorkArchive}
        onClose={() => setShowWorkArchive(false)}
        designWorks={designWorks}
        onSelectWork={(work) => {
          setCurrentWorkIndex(work.number - 1)
          setActiveWork(work)
        }}
      />

      <PreviewToast
        show={showPreviewToast}
        onClose={() => {
          setToastDismissed(true)
          setShowPreviewToast(false)
        }}
      />

      <WorkImageModal work={activeWork} onClose={() => setActiveWork(null)} />

      <VideoPlayerModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </main>
  )
}
