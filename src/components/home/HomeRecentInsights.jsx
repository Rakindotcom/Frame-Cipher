'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { insightPosts } from '../../data/agency'
import SectionButton from './SectionButton'

function sortByLatestDate(items) {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.publishDate || a.createdAt || 0).getTime()
    const dateB = new Date(b.publishDate || b.createdAt || 0).getTime()
    if (dateA !== dateB) return dateB - dateA
    return (b.id || '').localeCompare(a.id || '')
  })
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return dateStr
  }
}

function extract20WordExcerpt(post) {
  const metaDesc = (post.metaDescription || '').trim()
  const excerptRaw = (post.excerpt || '').trim()
  const title = (post.title || '').trim()

  const isExcerptTrivial =
    !excerptRaw ||
    excerptRaw.toLowerCase() === title.toLowerCase() ||
    excerptRaw.split(/\s+/).length < 12

  let sourceText = ''
  if (metaDesc && metaDesc.split(/\s+/).length >= 14) {
    sourceText = metaDesc
  } else if (!isExcerptTrivial && excerptRaw && excerptRaw.split(/\s+/).length >= 14) {
    sourceText = excerptRaw
  } else if (post.content) {
    sourceText = post.content
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&[a-z]+;/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  } else {
    sourceText = metaDesc || excerptRaw || post.description || ''
  }

  const words = sourceText.split(/\s+/).filter(Boolean)
  if (words.length === 0) return ''
  if (words.length <= 25) return words.join(' ')
  return words.slice(0, 22).join(' ') + '...'
}

export default function HomeRecentInsights({ initialPosts = [] }) {
  const [posts, setPosts] = useState(() => {
    if (Array.isArray(initialPosts) && initialPosts.length > 0) {
      const published = initialPosts.filter((p) => !p.status || p.status === 'published')
      return sortByLatestDate(published).slice(0, 3)
    }
    return []
  })

  useEffect(() => {
    fetch('/api/blog', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const published = data.filter((p) => !p.status || p.status === 'published')
          if (published.length > 0) {
            setPosts(sortByLatestDate(published).slice(0, 3))
          }
        }
      })
      .catch(() => {})
  }, [])

  const displayItems =
    posts.length > 0
      ? posts.map((p) => ({
          title: p.title,
          description: extract20WordExcerpt(p),
          publishDate: p.publishDate,
          imageUrl: p.featuredImage?.url || null,
          imageAlt: p.featuredImage?.alt || p.title,
          author: p.author || 'FrameCipher',
          href: `/blog/${p.slug}`,
          anchor: 'Read Article',
        }))
      : insightPosts.slice(0, 3).map((p) => ({
          title: p.title,
          description: extract20WordExcerpt(p),
          publishDate: '',
          imageUrl: null,
          imageAlt: p.title,
          author: 'FrameCipher Strategy',
          href: p.serviceLink?.href || '/blog',
          anchor: p.serviceLink ? `Explore ${p.serviceLink.anchor}` : 'Read Article',
        }))

  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Our Latest{' '}
              <span className="italic text-frame-accent">
                Blogs
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Actionable frameworks, front-end architecture benchmarks, and conversion engineering from our senior strategy team.
            </p>
          </div>
          <div className="shrink-0">
            <SectionButton href="/blog">View all blog posts</SectionButton>
          </div>
        </div>

        {/* 3-Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayItems.map((post, index) => (
            <article
              key={post.title + index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div>
                {/* Featured Image Banner (100% Pure Imagery — Zero Overlays) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-[#18181B]">
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.imageAlt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-6 text-center">
                      <span className="text-xs text-zinc-500">
                        FrameCipher Insight
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Text Content */}
                <div className="p-6 sm:p-7">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="font-medium text-frame-accent truncate max-w-[60%]">
                      {post.author}
                    </span>
                    {post.publishDate && (
                      <span className="font-mono text-[11px] text-zinc-500 tabular-nums">
                        {formatDate(post.publishDate)}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-2xl">
                    <Link href={post.href} className="after:absolute after:inset-0 after:content-['']">
                      {post.title}
                    </Link>
                  </h3>
                  {post.description && (
                    <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200 line-clamp-3">
                      {post.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="border-t border-white/[0.08] p-6 pt-4 sm:p-7 sm:pt-4">
                <Link href={post.href} className="group/read relative z-10 inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08] active:scale-[0.98]">
                  <span>{post.anchor}</span>
                  <span aria-hidden="true" className="ml-2 text-base transition-transform duration-200 group-hover/read:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
