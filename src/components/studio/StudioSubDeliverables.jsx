'use client'

import { Package, Film, Smartphone, FileVideo, Music, Check } from 'lucide-react'

export default function StudioSubDeliverables({ service }) {
  const deliverables = service.deliverables || [
    'Master high-bitrate 4K (3840x2160) video export in 16:9',
    'Platform-optimized vertical cutdowns (1080x1920) in 9:16',
    'Mastered uncompressed audio stems (24-bit 48kHz WAV)',
    'Synchronized multi-camera project files upon request',
    'Closed captions and subtitle files (.SRT format)',
  ]

  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Final Outputs
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            Confirmed Deliverables & File Formats.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            No ambiguous handoffs. Every deliverable is clearly specified before production, color-calibrated, and exported according to the publishing requirements of your target platforms.
          </p>
        </div>

        {/* Deliverables Cards */}
        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, idx) => (
            <div key={idx} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center border border-frame-border bg-frame-muted/40 text-frame-accent">
                    <Package className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-frame-muted-fg">
                    ITEM {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  {typeof item === 'string' ? item : item.title}
                </h3>
                {typeof item === 'object' && item.desc && (
                  <p className="mt-2 text-xs leading-relaxed text-frame-muted-fg">{item.desc}</p>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-frame-border/60 flex items-center gap-2 text-[11px] font-bold text-frame-accent">
                <Check className="h-3.5 w-3.5" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Output Matrix */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="border border-frame-border bg-frame-bg p-4 text-center">
            <Film className="h-5 w-5 text-frame-accent mx-auto mb-2" />
            <p className="text-xs font-bold uppercase text-frame-fg">YouTube & TV</p>
            <p className="text-[10px] text-frame-muted-fg mt-1">16:9 Landscape (4K / 1080p)</p>
          </div>
          <div className="border border-frame-border bg-frame-bg p-4 text-center">
            <Smartphone className="h-5 w-5 text-frame-accent mx-auto mb-2" />
            <p className="text-xs font-bold uppercase text-frame-fg">Reels, Shorts, TikTok</p>
            <p className="text-[10px] text-frame-muted-fg mt-1">9:16 Vertical Safe Zones</p>
          </div>
          <div className="border border-frame-border bg-frame-bg p-4 text-center">
            <FileVideo className="h-5 w-5 text-frame-accent mx-auto mb-2" />
            <p className="text-xs font-bold uppercase text-frame-fg">E-Commerce & Ads</p>
            <p className="text-[10px] text-frame-muted-fg mt-1">1:1 Square & 4:5 Portrait</p>
          </div>
          <div className="border border-frame-border bg-frame-bg p-4 text-center">
            <Music className="h-5 w-5 text-frame-accent mx-auto mb-2" />
            <p className="text-xs font-bold uppercase text-frame-fg">Streaming Audio</p>
            <p className="text-[10px] text-frame-muted-fg mt-1">24-bit 48kHz WAV Stems</p>
          </div>
        </div>
      </div>
    </section>
  )
}
