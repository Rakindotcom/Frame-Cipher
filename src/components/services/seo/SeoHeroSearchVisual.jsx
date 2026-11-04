'use client'

import React, { useState, useEffect } from 'react'
import { Search, Plus, ArrowRight } from 'lucide-react'

const queries = [
  'best seo services agency',
  'best seo services in bangladesh',
  'best seo services agency in dhaka',
  'best seo services company',
]

export default function SeoHeroSearchVisual() {
  const [queryIndex, setQueryIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentTarget = queries[queryIndex]

  useEffect(() => {
    let timer

    if (!isDeleting) {
      if (typedText.length < currentTarget.length) {
        timer = setTimeout(() => {
          setTypedText(currentTarget.slice(0, typedText.length + 1))
        }, 70 + Math.random() * 40) // natural typing variance
      } else {
        // Finished typing full query, hold for 2.8s
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2800)
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(typedText.slice(0, -1))
        }, 30)
      } else {
        // Finished deleting, move to next query
        setIsDeleting(false)
        setQueryIndex((prev) => (prev + 1) % queries.length)
      }
    }

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, currentTarget, queryIndex])

  // Dynamic autocomplete suggestions based on current query
  const suggestions = [
    { text: typedText || 'best seo services', isDirectSearch: true },
    { text: `${typedText || 'best seo services'} in bangladesh` },
    { text: `${typedText || 'best seo services'} in dhaka` },
    { text: `${typedText || 'best seo services'} framecipher` },
  ]

  return (
    <div className="relative mx-auto w-full max-w-[560px] select-none py-2">
      {/* Ambient Radial Under-Glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-purple-600/20 via-blue-500/15 to-transparent blur-3xl opacity-75" />

      {/* Main Container Styled as Google Experience */}
      <div className="overflow-hidden rounded-3xl border border-white/[0.12] bg-[#121214] shadow-[0_25px_60px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05]">
        {/* Google Top Navigation Bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-2 text-xs font-normal text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20 inline-block" />
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-default text-[13px]">Gmail</span>
            <span className="hover:text-white transition-colors cursor-default text-[13px]">Images</span>
            
            {/* 3x3 App Launcher Grid */}
            <div className="grid grid-cols-3 gap-1 p-1 hover:bg-white/[0.06] rounded-full cursor-default transition-colors">
              {[...Array(9)].map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-zinc-400" />
              ))}
            </div>

            {/* User Profile Avatar */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 text-white font-heading text-xs font-bold ring-2 ring-white/10">
              FC
            </div>
          </div>
        </div>

        {/* Google Logo Area */}
        <div className="flex flex-col items-center justify-center pt-8 pb-7">
          <div className="flex items-center text-4xl sm:text-5xl font-bold tracking-tight font-sans">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>
        </div>

        {/* Google Active Search & Autocomplete Container */}
        <div className="px-4 sm:px-8 pb-8">
          <div className="overflow-hidden rounded-[26px] border border-white/[0.14] bg-[#1c1c1f] shadow-2xl transition-all">
            {/* Search Input Bar (Top portion) */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-white/[0.08]">
              <div className="flex flex-1 items-center gap-3 mr-2 min-w-0">
                <Plus className="h-4 w-4 text-zinc-400 shrink-0" />
                <div className="font-sans text-sm sm:text-base text-white tracking-normal flex items-center overflow-hidden">
                  <span className="truncate">{typedText}</span>
                  <span className="inline-block h-4 sm:h-5 w-0.5 bg-[#4285F4] animate-pulse ml-0.5 shrink-0" />
                </div>
              </div>

              {/* "AI Mode ->" Pill Button (matches uploaded screenshot) */}
              <div className="flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-[#2a2a2e] px-3 py-1 font-sans text-xs font-medium text-white shadow-sm shrink-0 hover:bg-[#34343a] transition-colors cursor-default">
                <span>AI Mode</span>
                <ArrowRight className="h-3 w-3 text-frame-accent" />
              </div>
            </div>

            {/* Dropdown Autocomplete Items (matches uploaded screenshot) */}
            <div className="py-2">
              {suggestions.map((item, idx) => {
                const isActive = idx === 0
                return (
                  <div
                    key={idx}
                    className={[
                      'group relative flex items-center px-4 sm:px-5 py-2.5 transition-colors cursor-default',
                      isActive ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]',
                    ].join(' ')}
                  >
                    {/* Blue active line indicator on left (exact match to screenshot) */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r bg-[#4285F4]" />
                    )}

                    <Search className={`h-4 w-4 mr-3.5 shrink-0 ${isActive ? 'text-white' : 'text-zinc-400'}`} />

                    <div className="font-sans text-xs sm:text-sm text-zinc-200 truncate">
                      <span className="font-medium text-white">{item.text}</span>
                      {item.isDirectSearch && (
                        <span className="text-zinc-500 font-normal ml-2">
                          — Google Search
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
