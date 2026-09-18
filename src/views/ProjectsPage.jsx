'use client'

import { useEffect, useRef, useState } from 'react'
import { growthPortfolio } from '../data/growthWork'
import {
  ProjectsHero,
  ProjectsFilterBar,
  ProjectsWebsitesSection,
  ProjectsVideoSection,
  ProjectsSeoSection,
  ProjectsPaidAdsSection,
  ProjectsDesignSection,
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
    items: [
      {
        title: 'Long video 01',
        videoId: 'j5r_HVWKnAA',
        thumbnailUrl: '/video-thumbnails/long-01.webp',
      },
      {
        title: 'Long video 02',
        videoId: 'bqdK_EifW8k',
        thumbnailUrl: '/video-thumbnails/long-02.webp',
      },
      {
        title: 'Long video 03',
        videoId: '3MR8SvdrMkU',
        thumbnailUrl: '/video-thumbnails/long-03.webp',
      },
      {
        title: 'Long video 04',
        videoId: 'kekOmxPCfNw',
        thumbnailUrl: '/video-thumbnails/long-04.webp',
      },
      {
        title: 'Long video 05',
        videoId: 'GiHzlVvUN-E',
        thumbnailUrl: '/video-thumbnails/long-05.webp',
      },
    ],
  },
  {
    title: 'Short videos',
    description: 'Vertical short-form edits built for retention, rhythm, and fast social distribution.',
    items: [
      {
        title: 'Life & Perspective: "আমি প্রস্তুত না"',
        videoId: 'KGD6GGqEliA',
        thumbnailUrl: '/video-thumbnails/short-01.webp',
        isShort: true,
        category: 'Inspirational Short',
      },
      {
        title: 'Dr. Ferdoush Saleheen: Mindset & Action',
        client: 'Dr. Ferdoush Saleheen',
        videoId: 'Qw1unPMli6k',
        thumbnailUrl: '/video-thumbnails/short-02.webp',
        isShort: true,
        category: 'Personal Brand · 1M+ Views',
      },
      {
        title: 'Dr. Ferdoush Saleheen: Career Reflection & Growth',
        client: 'Dr. Ferdoush Saleheen',
        videoId: 'fkiGzxB6qTE',
        thumbnailUrl: '/video-thumbnails/short-03.webp',
        isShort: true,
        category: 'Personal Brand · Viral Short',
      },
      {
        title: 'Dr. Ferdoush Saleheen: Supply Chain Frameworks',
        client: 'Dr. Ferdoush Saleheen',
        videoId: 'JjHHwtdk1Lg',
        thumbnailUrl: '/video-thumbnails/short-04.webp',
        isShort: true,
        category: 'Personal Brand · Leadership',
      },
      {
        title: 'Dr. Ferdoush Saleheen: Core Leadership Insights',
        client: 'Dr. Ferdoush Saleheen',
        videoId: 'HBFYhnWH2Go',
        thumbnailUrl: '/video-thumbnails/short-05.webp',
        isShort: true,
        category: 'Personal Brand · Authority',
      },
      {
        title: 'Career in Textile & Lifestyle: Conference Short',
        videoId: '8J5r9BbGGys',
        thumbnailUrl: '/video-thumbnails/short-06.webp',
        isShort: true,
        category: 'Conference Coverage',
      },
      {
        title: 'Brand Media & Campaign Recap Short',
        videoId: 'ufDXseYbDZA',
        thumbnailUrl: '/video-thumbnails/short-07.webp',
        isShort: true,
        category: 'Campaign Short',
      },
    ],
  },
]

const websiteProjects = [
  {
    name: 'Jarixo',
    url: 'https://jarixo.com/',
    domain: 'jarixo.com',
    category: 'Wellness E-commerce platform',
    screenshot: '/website-shots/jarixo.com.png',
    summary:
      'A premium wellness storefront built around calm visual storytelling, product discovery, and a smoother path to purchase.',
  },
  {
    name: 'Dr. Ferdoush Saleheen',
    url: 'https://ferdoushsaleheen.com/',
    domain: 'ferdoushsaleheen.com',
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
    category: 'Hospitality website',
    screenshot: '/website-shots/hotel-ashrafee.webp',
    summary: 'Hotel website presentation for rooms, location, and direct guest trust.',
  },
  {
    name: 'ALFIS Limited',
    url: 'https://alfisltd.vercel.app/',
    domain: 'alfisltd.vercel.app',
    category: 'Business website',
    screenshot: '/website-shots/alfis-limited.webp',
    summary: 'Company website structure for a garments accessories business.',
  },
  {
    name: 'StitchBD',
    url: 'https://stitchbd.net',
    domain: 'stitchbd.net',
    category: 'Fashion E-commerce platform',
    screenshot: '/website-shots/stitchbd.png',
    summary:
      'A modern fashion e-commerce storefront designed to present traditional Punjabi and Burka collections through a clean, conversion-focused shopping journey.',
  },
  {
    name: 'BD For Palestine',
    url: 'https://bdforpalestine.org/',
    domain: 'bdforpalestine.org',
    category: 'Community platform',
    screenshot: '/website-shots/bd-for-palestine.webp',
    summary: 'Public-facing advocacy and information site for a movement-focused initiative.',
  },
  {
    name: 'Riha WebTech',
    url: 'https://rihawebtech.com',
    domain: 'rihawebtech.com',
    category: 'Agency platform',
    screenshot: '/website-shots/rihawebtech.png',
    summary:
      'A modern digital agency website showcasing enterprise software development, digital solutions, and client capabilities with responsive architecture.',
  },
  {
    name: 'Dont Validate Labels',
    url: 'https://dontvalidatelabels.store/',
    domain: 'dontvalidatelabels.store',
    category: 'E-commerce Apparel store',
    screenshot: '/website-shots/dontvalidatelabels.png',
    summary:
      'An urban apparel store experience built with bold aesthetic identity, streamlined product discovery, and friction-free mobile checkout.',
  },
  {
    name: 'Dr. Shafiul Islam Kawsar',
    url: 'https://drshafiulahmedkawsar.vercel.app/',
    domain: 'drshafiulahmedkawsar.vercel.app',
    category: 'Personal brand website',
    screenshot: '/website-shots/dr-shafiul-islam-kawsar.png',
    summary:
      'A professional personal website presenting academic credentials, medical insight, and digital thought leadership in an accessible structure.',
  },
  {
    name: 'Pharmacity',
    url: 'https://pharmacity.com.bd/',
    domain: 'pharmacity.com.bd',
    category: 'Healthcare website',
    screenshot: '/website-shots/pharmacity.png',
    summary:
      'A responsive healthcare and pharmacy platform structured for accessible service discovery, patient trust, and mobile browsing.',
  },
  {
    name: 'Plan Abroad',
    url: 'https://planabroad.org/',
    domain: 'planabroad.org',
    category: 'Education & Study Abroad platform',
    screenshot: '/website-shots/plan-abroad.png',
    summary:
      'An international study-abroad advisory platform engineered to guide students through global university planning, visa prep, and consultations.',
  },
  {
    name: 'Nazmulhoq',
    url: 'https://nazmulhoq.com/',
    domain: 'nazmulhoq.com',
    category: 'Personal brand website',
    screenshot: '/website-shots/Nazmulhoq.png',
    summary:
      'A polished personal brand platform communicating professional consulting services, public profile, and strategic business leadership.',
  },
  {
    name: 'Business Club',
    url: 'https://businessclub.com.bd/',
    domain: 'businessclub.com.bd',
    category: 'Corporate community platform',
    screenshot: '/website-shots/businessclub.png',
    summary:
      'A business community platform built to present corporate initiatives, professional networking events, and member resources.',
  },
  {
    name: 'Muhsin Mashkur',
    url: 'https://www.muhsinmashkur.com/',
    domain: 'muhsinmashkur.com',
    category: 'Personal website',
    screenshot: '/website-shots/muhsin-mashkur.webp',
    summary: 'Personal site for profile, public identity, and digital presence.',
  },
  {
    name: 'Real Estate Platform Demo',
    url: 'https://realestate.framecipher.info/',
    domain: 'realestate.framecipher.info',
    category: 'Real estate platform',
    screenshot: '/website-shots/real-estate-demo.png',
    summary:
      'A premium real estate platform demo designed for high-value property showcases, virtual walkthroughs, neighborhood insights, and direct buyer inquiry capture.',
  },
  {
    name: 'E-Commerce Store Demo',
    url: 'https://ecommerce.framecipher.info/',
    domain: 'ecommerce.framecipher.info',
    category: 'E-commerce storefront',
    screenshot: '/website-shots/ecommerce-demo.png',
    summary:
      'A modern lifestyle and beauty e-commerce storefront engineered for seamless mobile browsing, dynamic product catalogs, and high-conversion checkouts.',
  },
  {
    name: 'Mahedi Hasan Portfolio',
    url: 'https://mahedi.framecipher.info/',
    domain: 'mahedi.framecipher.info',
    category: 'Personal portfolio',
    screenshot: '/website-shots/mahedi-hasan-perves-portfolio.png',
    summary:
      'Personal portfolio showcasing technical SEO campaigns, full-stack web platforms, performance marketing systems, and agency growth engineering.',
  },
  {
    name: 'Business Byte',
    url: 'https://businessbyte-rakin.vercel.app/',
    domain: 'businessbyte-rakin.vercel.app',
    category: 'Web product',
    screenshot: '/website-shots/business-byte.webp',
    summary: 'Digital business resource presented as a lightweight web experience.',
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

  const currentWork = designWorks[currentWorkIndex]

  const handleFilterSelect = (filterId) => {
    setActiveFilter(filterId)
    const filterEl = document.getElementById('portfolio-controls')
    if (filterEl) {
      const rect = filterEl.getBoundingClientRect()
      if (rect.top < 74) {
        filterEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
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
      p.summary.toLowerCase().includes(q)
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
      (v.category && v.category.toLowerCase().includes(q))
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

  const hasZeroMatches =
    q !== '' &&
    !isWebsitesVisible &&
    !isLongVideosVisible &&
    !isShortVideosVisible &&
    !isSeoVisible &&
    !isPaidAdsVisible &&
    !isBrandingVisible

  return (
    <main className="bg-frame-bg text-frame-fg">
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

      {hasZeroMatches && (
        <div className="mx-auto my-16 max-w-[95vw] border-2 border-frame-border bg-frame-muted p-12 text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">No matches</p>
          <h3 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tighter text-frame-fg md:text-5xl">
            No projects found matching &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="mt-4 text-base font-medium text-frame-muted-fg">
            Try searching for another client name, service, or keyword, or reset the filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setActiveFilter('All')
            }}
            className="mt-6 inline-flex border-2 border-frame-accent bg-frame-accent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent"
          >
            Reset filters & search
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
