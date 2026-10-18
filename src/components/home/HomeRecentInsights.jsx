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

  // If live blog posts exist, show top 3 latest. Otherwise fall back to canonical agency insight posts.
  const displayItems =
    posts.length > 0
      ? posts.map((p) => ({
          title: p.title,
          description: p.excerpt || p.metaDescription || '',
          category: p.category || 'Strategy',
          publishDate: p.publishDate,
          imageUrl: p.featuredImage?.url || null,
          imageAlt: p.featuredImage?.alt || p.title,
          author: p.author || 'FrameCipher',
          href: `/blog/${p.slug}`,
          anchor: 'Read Article',
        }))
      : insightPosts.slice(0, 3).map((p) => ({
          title: p.title,
          description: p.description || '',
          category: p.category || 'Strategy',
          publishDate: '',
          imageUrl: null,
          imageAlt: p.title,
          author: 'FrameCipher Strategy',
          href: p.serviceLink?.href || '/blog',
          anchor: p.serviceLink ? `Explore ${p.serviceLink.anchor}` : 'Read Article',
        }))

  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              Blog / Dispatches
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              Our Latest Blogs
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg font-medium text-frame-muted-fg leading-relaxed">
              Actionable frameworks, front-end architecture benchmarks, and conversion engineering from our senior strategy team.
            </p>
          </div>
          <SectionButton href="/blog">View all blog posts</SectionButton>
        </div>

        {/* 3-Blog Grid */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {displayItems.map((post, index) => (
            <article
              key={post.title + index}
              className="group relative flex flex-col justify-between bg-frame-bg transition-colors duration-300 hover:bg-[#121216]"
            >
              <div>
                {/* Featured Image Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b-2 border-frame-border bg-linear-to-br from-[#181124] to-[#121214]">
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
                      <span className="font-heading text-lg font-bold uppercase tracking-wider text-frame-muted-fg/40">
                        {post.category}
                      </span>
                    </div>
                  )}

                  {/* Category Pill Overlay */}
                  <span className="absolute left-3 top-3 z-10 bg-frame-accent px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg shadow-lg sm:left-4 sm:top-4 sm:text-xs">
                    {post.category}
                  </span>

                  {/* Date Badge Overlay */}
                  {post.publishDate && (
                    <span className="absolute right-3 top-3 z-10 rounded-xs border border-white/10 bg-black/80 px-2.5 py-1 text-[10px] font-mono font-medium text-frame-muted-fg backdrop-blur-md sm:right-4 sm:top-4 sm:text-xs">
                      {formatDate(post.publishDate)}
                    </span>
                  )}
                </div>

                {/* Card Text Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent sm:text-2xl md:text-2xl">
                    <Link href={post.href} className="after:absolute after:inset-0 after:content-['']">
                      {post.title}
                    </Link>
                  </h3>
                  {post.description && (
                    <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg sm:text-base line-clamp-3">
                      {post.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer / Author & CTA */}
              <div className="border-t border-frame-border/70 p-6 pt-4 sm:p-7 sm:pt-4 flex items-center justify-between text-xs">
                <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg truncate max-w-[60%]">
                  {post.author}
                </span>
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg">
                  <span>{post.anchor}</span>
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}