"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FolderOpen, BookOpen, Mail, CheckCircle2 } from "lucide-react";
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
      {/* WIDGET 1: Blog Categories */}
      <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14] space-y-4 text-white">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-300">
            <FolderOpen className="h-3.5 w-3.5 text-frame-accent" />
            <span>Blog Categories</span>
          </div>
          <span className="font-mono text-[10px] text-zinc-500 uppercase">{categories.length} Topics</span>
        </div>

        <div className="space-y-1">
          {categories.map((cat) => {
            const isSelected = activeCategory?.toLowerCase().trim() === cat.toLowerCase().trim();
            const count =
              cat === "All Articles"
                ? recentPosts.length
                : recentPosts.filter((p) => {
                    const catNorm = cat.toLowerCase().trim();
                    const pCatNorm = (p.category || "").toLowerCase().trim();
                    return pCatNorm === catNorm;
                  }).length;

            const className = `w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors duration-150 ${
              isSelected
                ? "bg-purple-500/10 text-purple-300 border border-purple-500/30 font-medium"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
            }`;

            const content = (
              <>
                <span className="truncate pr-2">{cat}</span>
                <span className="font-mono text-[10px] text-zinc-500">({count})</span>
              </>
            );

            if (onSelectCategory) {
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  className={className}
                >
                  {content}
                </button>
              );
            }

            const href = cat === "All Articles" ? "/blog" : `/blog/category/${blogCategorySlug(cat)}`;
            return (
              <Link
                key={cat}
                href={href}
                className={className}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>

      {/* WIDGET 2: Latest Posts with Featured Image Thumbnail */}
      {filteredRecent.length > 0 && (
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14] space-y-4 text-white">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-300">
              <BookOpen className="h-3.5 w-3.5 text-frame-accent" />
              <span>Latest Posts ({filteredRecent.length})</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-300 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Fresh
            </span>
          </div>

          <div className="divide-y divide-white/[0.08] space-y-3 pt-1">
            {filteredRecent.map((p) => {
              const imgUrl = p.featuredImage?.url || "/logo.png";
              return (
                <div key={p.slug} className="pt-3 first:pt-0 flex items-start gap-3 group">
                  {/* Featured Thumbnail */}
                  <Link
                    href={`/blog/${p.slug}`}
                    className="w-14 h-14 rounded-lg overflow-hidden bg-[#09090B] border border-white/[0.08] shrink-0 block relative group-hover:border-white/[0.16] transition-colors"
                  >
                    <img
                      src={imgUrl}
                      alt={p.featuredImage?.alt || p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/logo.png";
                      }}
                    />
                  </Link>

                  <div className="min-w-0 flex-1 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-frame-accent tracking-wider block truncate">
                      {p.category}
                    </span>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="font-heading font-medium text-xs sm:text-sm text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug block"
                    >
                      {p.title}
                    </Link>
                    <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-2">
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

      {/* WIDGET 3: Newsletter / Growth Dispatch */}
      <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14] space-y-4 text-white">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-300 border-b border-white/[0.08] pb-3.5">
          <Mail className="h-3.5 w-3.5 text-frame-accent" />
          <span>Growth Dispatch</span>
        </div>

        <div className="space-y-1.5">
          <h4 className="font-heading font-medium text-base text-white">Get practical growth playbooks</h4>
          <p className="text-xs font-normal text-zinc-400 leading-relaxed">
            Bi-weekly strategy notes on connected growth systems, offer messaging, and technical conversion infrastructure.
          </p>
        </div>

        {subscribed ? (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>You are subscribed to the dispatch!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
            <input
              type="email"
              placeholder="Your business email..."
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#18181B] border border-white/[0.08] text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-purple-400"
              required
            />
            <button
              type="submit"
              className="sw-btn sw-btn-primary w-full justify-center text-xs"
            >
              <span>Subscribe Free</span>
            </button>
          </form>
        )}
      </div>
    </aside>
  );
}
