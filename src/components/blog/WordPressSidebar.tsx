"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FolderOpen, BookOpen, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { blogCategorySlug } from "@/lib/blog/getBlogPosts";

export function WordPressSidebar({
  categories = [],
  activeCategory = "All Articles",
  onSelectCategory = null,
  recentPosts = [],
  currentPostSlug = "",
}) {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  // Show exactly 3 latest posts
  const filteredRecent = recentPosts
    .filter((p) => p.slug !== currentPostSlug)
    .slice(0, 3);

  return (
    <aside className="space-y-6">
      {/* WIDGET 2: Strategic Disciplines (Side Categories) */}
      <div className="border-2 border-frame-border bg-[#121214] p-6 shadow-sm space-y-4 text-frame-fg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-frame-accent font-heading">
            <FolderOpen className="h-4 w-4" />
            <span>Blog Categories</span>
          </div>
          <span className="text-[10px] font-mono text-frame-muted-fg uppercase">{categories.length} Topics</span>
        </div>

        <div className="space-y-1">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory && onSelectCategory(cat)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold font-body transition-all text-left ${
                  isSelected
                    ? "bg-frame-accent text-white shadow-xs font-bold"
                    : "text-frame-muted-fg hover:bg-[#1C1C1F] hover:text-white"
                }`}
              >
                <span className="truncate pr-2">{cat}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 font-mono ${
                    isSelected ? "bg-white/20 text-white" : "bg-frame-muted text-frame-muted-fg"
                  }`}
                >
                  {cat === "All Articles"
                    ? recentPosts.length
                    : recentPosts.filter((p) => p.category === cat).length || 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* WIDGET 3: Latest 3 Posts with Featured Image Thumbnail */}
      {filteredRecent.length > 0 && (
        <div className="border-2 border-frame-border bg-[#121214] p-6 shadow-sm space-y-4 text-frame-fg rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-frame-accent font-heading">
              <BookOpen className="h-4 w-4" />
              <span>Latest Posts (3)</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              Fresh
            </span>
          </div>

          <div className="divide-y divide-frame-border space-y-3 pt-1">
            {filteredRecent.map((p) => {
              const imgUrl = p.featuredImage?.url || "/logo.png";
              return (
                <div key={p.slug} className="pt-3 first:pt-0 flex items-start gap-3 group">
                  {/* Featured Thumbnail */}
                  <Link
                    href={`/blog/${p.slug}`}
                    className="w-16 h-16 rounded-xl overflow-hidden bg-slate-900 border border-frame-border shrink-0 block relative group-hover:border-frame-accent transition-colors"
                  >
                    <img
                      src={imgUrl}
                      alt={p.featuredImage?.alt || p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/logo.png";
                      }}
                    />
                  </Link>

                  <div className="min-w-0 flex-1 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-frame-accent tracking-wider block truncate">
                      {p.category}
                    </span>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="font-bold font-heading text-xs uppercase text-frame-fg group-hover:text-frame-accent transition-colors line-clamp-2 leading-snug block"
                    >
                      {p.title}
                    </Link>
                    <div className="text-[10px] text-frame-muted-fg font-body flex items-center gap-2">
                      <span>{p.publishDate}</span>
                      <span>&bull;</span>
                      <span>{p.readTime}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* WIDGET 4: Newsletter / 360 Growth Audit CTA */}
      <div className="border-2 border-frame-accent/40 bg-linear-to-br from-[#1E112A] to-[#121214] p-6 shadow-sm space-y-4 text-frame-fg">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-frame-accent font-heading">
          <Mail className="h-4 w-4" />
          <span>Growth Dispatch</span>
        </div>

        <div className="space-y-1">
          <h4 className="font-heading font-bold uppercase text-sm text-frame-fg">Get practical growth playbooks</h4>
          <p className="text-xs font-body text-frame-muted-fg leading-relaxed">
            Bi-weekly strategy notes on connected growth systems, offer messaging, and technical conversion infrastructure.
          </p>
        </div>

        {subscribed ? (
          <div className="p-3 rounded-lg bg-[#064E3B] text-[#A7F3D0] text-xs font-bold font-body flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>You are subscribed to the dispatch!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              placeholder="Your business email..."
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg text-xs bg-frame-bg border border-frame-border text-frame-fg font-body focus:outline-hidden focus:border-frame-accent"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-frame-accent hover:bg-[#9333EA] text-white rounded-lg text-xs font-heading font-black uppercase tracking-wider transition-all shadow-xs"
            >
              Subscribe Free
            </button>
          </form>
        )}
      </div>
    </aside>
  );
}
