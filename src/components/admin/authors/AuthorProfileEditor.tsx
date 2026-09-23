"use client";

import React, { useState, useMemo } from "react";
import { AuthorProfile } from "@/types/author";
import {
  buildPersonSchema,
} from "@/lib/schema/personSchema";
import { MediaLibraryModal, MediaItem } from "@/components/admin/cms/MediaLibraryModal";
import {
  ArrowLeft,
  Check,
  Copy,
  CheckCircle2,
  AlertTriangle,
  Image as ImageIcon,
  Trash2,
  Sparkles,
  BrainCircuit,
  Save,
  FileCheck2,
  Eye,
  Link2,
  X,
} from "lucide-react";

const SITE_URL = "https://framecipher.com";

interface AuthorProfileEditorProps {
  author: Partial<AuthorProfile>;
  onSave: (updated: AuthorProfile) => void;
  onClose: () => void;
}

const SOCIAL_FIELDS: { key: string; label: string; placeholder: string }[] = [
  { key: "linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/in/..." },
  { key: "twitter", label: "X / Twitter", placeholder: "https://x.com/..." },
  { key: "facebook", label: "Facebook", placeholder: "https://facebook.com/..." },
  { key: "instagram", label: "Instagram", placeholder: "https://instagram.com/..." },
  { key: "github", label: "GitHub", placeholder: "https://github.com/..." },
  { key: "dribbble", label: "Dribbble", placeholder: "https://dribbble.com/..." },
  { key: "youtube", label: "YouTube", placeholder: "https://youtube.com/@..." },
];

export function AuthorProfileEditor({ author, onSave, onClose }: AuthorProfileEditorProps) {
  const [name, setName] = useState(author.name || "");
  const [slug, setSlug] = useState(author.slug || "");
  const [isEditingSlug, setIsEditingSlug] = useState(false);
  const [jobTitle, setJobTitle] = useState(author.jobTitle || "Founder & Lead Strategist");
  const [worksFor, setWorksFor] = useState(author.worksFor || "FrameCipher");
  const [shortBio, setShortBio] = useState(author.shortBio || "");
  const [bio, setBio] = useState(author.bio || "");
  const [email, setEmail] = useState(author.email || "");
  const [website, setWebsite] = useState(author.website || "");
  const [socialLinks, setSocialLinks] = useState<Record<string, string>>(
    author.socialLinks || {}
  );
  const [status, setStatus] = useState<"published" | "draft">(author.status || "published");
  const [publishDate, setPublishDate] = useState(
    author.publishDate || new Date().toISOString().split("T")[0]
  );

  // Author Image
  const [imageUrl, setImageUrl] = useState(author.image?.url || "");
  const [imageAlt, setImageAlt] = useState(author.image?.alt || "");
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  // SEO & Schema
  const [seoTitle, setSeoTitle] = useState(author.seoTitle || (author.name ? `${author.name} — Founder & Lead Strategist — FrameCipher` : ""));
  const [metaDescription, setMetaDescription] = useState(author.metaDescription || "");
  const [focusKeyword, setFocusKeyword] = useState(author.focusKeyword || "");
  const [tags, setTags] = useState<string[]>(author.tags || []);
  const [tagInput, setTagInput] = useState("");
  const [copiedSchema, setCopiedSchema] = useState(false);

  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    const splitTags = tagInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    const unique = splitTags.filter((t) => !tags.includes(t));
    setTags([...tags, ...unique]);
    setTagInput("");
  };

  const liveAuthor: Partial<AuthorProfile> = {
    name,
    slug,
    jobTitle,
    worksFor,
    shortBio,
    bio,
    email,
    website,
    socialLinks,
    image: { url: imageUrl, alt: imageAlt, hasAlt: Boolean(imageAlt.trim()) },
    tags,
  };

  const personSchema = useMemo(() => buildPersonSchema(liveAuthor), [
    name,
    slug,
    jobTitle,
    worksFor,
    shortBio,
    bio,
    email,
    website,
    socialLinks,
    imageUrl,
    imageAlt,
    tags,
  ]);

  const schemaJson = useMemo(() => JSON.stringify(personSchema, null, 2), [personSchema]);

  const handleCopySchema = () => {
    navigator.clipboard.writeText(schemaJson);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  const seoAnalysis = useMemo(() => {
    const kw = focusKeyword.toLowerCase().trim();
    const kwInTitle = kw.length > 0 && seoTitle.toLowerCase().includes(kw);
    const kwInMeta = kw.length > 0 && metaDescription.toLowerCase().includes(kw);
    const titleLen = seoTitle.length;
    const descLen = metaDescription.length;
    const goodTitle = titleLen >= 40 && titleLen <= 65;
    const goodDesc = descLen >= 120 && descLen <= 160;
    const hasImage = Boolean(imageUrl.trim());
    const hasAlt = Boolean(imageAlt.trim());
    let score = 40;
    if (kw.length > 0) score += 10;
    if (kwInTitle) score += 12;
    if (kwInMeta) score += 12;
    if (goodTitle) score += 8;
    if (goodDesc) score += 8;
    if (hasImage) score += 5;
    if (hasAlt) score += 5;
    return {
      score: Math.min(100, score),
      kwInTitle,
      kwInMeta,
      goodTitle,
      goodDesc,
      hasImage,
      hasAlt,
      titleLen,
      descLen,
    };
  }, [focusKeyword, seoTitle, metaDescription, imageUrl, imageAlt]);

  const slugFromName = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const finalSlug = slug.trim() || slugFromName || "author";

  const handleSave = (targetStatus?: "published" | "draft") => {
    const updated: AuthorProfile = {
      id: author.id || `author-${Date.now()}`,
      name: name.trim() || "Untitled Author",
      slug: finalSlug,
      jobTitle: jobTitle.trim() || "Contributor",
      image: {
        url: imageUrl,
        alt: imageAlt,
        hasAlt: Boolean(imageAlt.trim()),
      },
      shortBio: shortBio.trim(),
      bio: bio.trim(),
      email: email.trim(),
      website: website.trim(),
      worksFor: worksFor.trim() || "FrameCipher",
      socialLinks,
      status: targetStatus || status,
      publishDate: publishDate || new Date().toISOString().split("T")[0],
      seoTitle: seoTitle.trim() || `${name.trim() || "Author"} — ${jobTitle || "FrameCipher"} — FrameCipher`,
      metaDescription: metaDescription.trim(),
      focusKeyword: focusKeyword.trim(),
      tags,
      postsCount: author.postsCount || 0,
      views: author.views || 0,
    };
    onSave(updated);
  };

  const handleSelectMedia = (item: MediaItem) => {
    setImageUrl(item.url);
    setImageAlt(item.alt || item.title || name);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#F8FAFC] text-[#0F172A] animate-in fade-in duration-150 font-body overflow-hidden">
      {/* Top Bar */}
      <div className="px-3 sm:px-6 bg-white border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-x-3 gap-y-2 py-2 sm:py-0 sm:h-16 shrink-0 shadow-xs">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F1F5F9] transition-colors shrink-0"
            aria-label="Back"
            title="Back to authors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <h2 className="text-sm font-heading font-bold uppercase tracking-wider truncate">
              {author.id ? "Edit Author Profile" : "Create Author Profile"}
            </h2>
            <div className="text-[11px] text-[#64748B] font-mono truncate">
              /authors/{finalSlug} ·&nbsp;
              <span className={status === "published" ? "text-emerald-600" : "text-amber-600"}>
                {status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => handleSave("draft")}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#475569] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#F8FAFC] transition-colors"
          >
            <Save className="h-4 w-4" />
            <span className="hidden sm:inline">Save Draft</span>
            <span className="sm:hidden">Draft</span>
          </button>
          <button
            onClick={() => handleSave("published")}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs transition-colors"
          >
            <FileCheck2 className="h-4 w-4" />
            <span>Publish</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#64748B] hover:text-[#0F172A] transition-colors shrink-0"
            aria-label="Close"
            title="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 items-start">
          {/* Main column */}
          <div className="w-full lg:flex-1 min-w-0 space-y-5">
            {/* Identity */}
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 shadow-xs space-y-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                  Author Identity
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#8B5CF6] bg-[#F5F3FF] px-2.5 py-1 rounded-full border border-[#DDD6FE]">
                  <Sparkles className="h-3 w-3" />
                  Person Schema Auto-Generated
                </span>
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                  Full Name (TITLE)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Mahedi Hasan Perves"
                  className="w-full p-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-lg font-heading font-bold text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g. Founder & Lead Strategist"
                    className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                    Works For (Organization)
                  </label>
                  <input
                    type="text"
                    value={worksFor}
                    onChange={(e) => setWorksFor(e.target.value)}
                    placeholder="e.g. FrameCipher"
                    className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                  Author URL (Permalink)
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#64748B] shrink-0">/authors/</span>
                  {isEditingSlug ? (
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      onBlur={() => setIsEditingSlug(false)}
                      autoFocus
                      className="flex-1 min-w-0 p-2 bg-[#F8FAFC] border border-[#1D4ED8] rounded-lg text-xs font-mono text-[#0F172A] focus:outline-none"
                    />
                  ) : (
                    <button
                      onClick={() => setIsEditingSlug(true)}
                      className="flex-1 min-w-0 text-left p-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-xs font-mono text-[#1D4ED8] hover:border-[#1D4ED8] truncate"
                      title="Click to edit slug"
                    >
                      {finalSlug}
                    </button>
                  )}
                  <span className="text-[10px] text-[#94A3B8] hidden sm:block shrink-0">
                    {SITE_URL}/authors/{finalSlug}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="author@framecipher.com"
                    className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                    Personal Website
                  </label>
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://..."
                    className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 shadow-xs space-y-5">
              <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                Author Bio
              </h3>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                  Short Bio (Schema description)
                </label>
                <textarea
                  rows={3}
                  value={shortBio}
                  onChange={(e) => setShortBio(e.target.value)}
                  placeholder="1–2 sentences used by search engines as the Person schema description and author card excerpt..."
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                />
                <p className="text-[10px] text-[#64748B] mt-1">
                  {shortBio.length}/160 characters ·
                  {shortBio.length >= 120 && shortBio.length <= 160
                    ? " optimal meta length"
                    : " maps to `Person.description`"}
                </p>
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                  Full Bio
                </label>
                <textarea
                  rows={5}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Detailed professional background, expertise and agency experience..."
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                  Social Profiles
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#BFDBFE]">
                  <Link2 className="h-3 w-3" />
                  Maps to `sameAs[]`
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SOCIAL_FIELDS.map((sf) => (
                  <div key={sf.key}>
                    <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                      {sf.label}
                    </label>
                    <input
                      type="text"
                      value={socialLinks[sf.key] || ""}
                      onChange={(e) =>
                        setSocialLinks((prev) => ({ ...prev, [sf.key]: e.target.value }))
                      }
                      placeholder={sf.placeholder}
                      className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise Tags */}
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                Expertise / Topics (knowsAbout)
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] text-xs font-bold"
                  >
                    {tag}
                    <button
                      onClick={() => setTags((prev) => prev.filter((t) => t !== tag))}
                      className="text-[#1D4ED8]/60 hover:text-[#DC2626] transition-colors"
                      aria-label={`Remove ${tag}`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  placeholder="Add expertise topic (comma-separated)"
                  className="flex-1 min-w-0 p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
                />
                <button
                  onClick={handleAddTag}
                  className="px-4 py-2 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#DBEAFE] transition-colors shrink-0"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 shrink-0 space-y-5">
            {/* Publish */}
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-xs space-y-4">
              <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                Publish
              </h3>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as "published" | "draft")}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Publish Date
                </label>
                <input
                  type="date"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleSave("draft")}
                  className="px-3 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#475569] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#F1F5F9] transition-colors"
                >
                  Save Draft
                </button>
                <button
                  onClick={() => handleSave("published")}
                  className="px-3 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs transition-colors"
                >
                  Publish
                </button>
              </div>
            </div>

            {/* Author Image */}
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-xs space-y-3">
              <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                Author Image (Profile Photo)
              </h3>
              {imageUrl ? (
                <div className="flex items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl bg-[#F1F5F9] border border-[#E2E8F0] overflow-hidden shrink-0 flex items-center justify-center">
                    <img
                      src={imageUrl}
                      alt={imageAlt || name || "Author photo"}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/logo.png";
                      }}
                    />
                  </div>
                  <div className="min-w-0 space-y-1.5 flex-1">
                    <button
                      onClick={() => setIsMediaModalOpen(true)}
                      className="w-full px-3 py-2 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#DBEAFE] transition-colors"
                    >
                      Replace
                    </button>
                    <button
                      onClick={() => {
                        setImageUrl("");
                        setImageAlt("");
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#CBD5E1] text-[#DC2626] text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#FEF2F2] transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsMediaModalOpen(true)}
                  className="w-full py-7 rounded-2xl border-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] text-[#64748B] flex flex-col items-center justify-center gap-2 hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors"
                >
                  <ImageIcon className="h-6 w-6" />
                  <span className="text-xs font-heading font-bold uppercase tracking-wider">
                    Set Author Image
                  </span>
                </button>
              )}
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Alt Text (Image SEO)
                </label>
                <input
                  type="text"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="e.g. Mahedi Hasan Perves, Founder of FrameCipher"
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
              {seoAnalysis.hasImage && (
                <p className="text-[11px] font-semibold text-[#16A34A] flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Image {seoAnalysis.hasAlt ? "with alt" : "missing alt"} — mapped to
                  `Person.image`
                </p>
              )}
            </div>

            {/* SEO Meta */}
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-xs space-y-4">
              <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A]">
                SEO Parameters
              </h3>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  SEO Title
                </label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Author name — Role — FrameCipher"
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                />
                <p className="text-[10px] text-[#64748B] mt-1">
                  {seoAnalysis.titleLen} chars · {seoAnalysis.goodTitle ? (
                    <span className="text-emerald-600 font-semibold">optimal (40–65)</span>
                  ) : seoAnalysis.titleLen > 65 ? (
                    <span className="text-amber-600 font-semibold">too long (max 65)</span>
                  ) : (
                    <span className="text-amber-600 font-semibold">too short (min 40)</span>
                  )}
                </p>
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Meta Description
                </label>
                <textarea
                  rows={3}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Describe the author's expertise, agency role and specialties in 120–160 characters..."
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                />
                <p className="text-[10px] text-[#64748B] mt-1">
                  {seoAnalysis.descLen} chars · {seoAnalysis.goodDesc ? (
                    <span className="text-emerald-600 font-semibold">optimal (120–160)</span>
                  ) : seoAnalysis.descLen > 160 ? (
                    <span className="text-amber-600 font-semibold">too long (max 160)</span>
                  ) : (
                    <span className="text-amber-600 font-semibold">too short (min 120)</span>
                  )}
                </p>
              </div>
              <div>
                <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#64748B] mb-1.5">
                  Focus Keyword
                </label>
                <input
                  type="text"
                  value={focusKeyword}
                  onChange={(e) => setFocusKeyword(e.target.value)}
                  placeholder="e.g. webflow growth strategist"
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>

              {/* Live SERP preview */}
              <div className="rounded-xl bg-white border border-[#E2E8F0] p-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#64748B]">
                    Google SERP Preview
                  </span>
                  <Eye className="h-3.5 w-3.5 text-[#94A3B8]" />
                </div>
                <div className="text-[11px] text-emerald-700 font-medium truncate">
                  {SITE_URL}/authors/{finalSlug}
                </div>
                <div className="text-sm text-[#1D4ED8] leading-snug line-clamp-2 font-medium">
                  {seoTitle || `${name || "Author"} — ${jobTitle || "FrameCipher"} — FrameCipher`}
                </div>
                <div className="text-[11px] text-[#64748B] leading-snug line-clamp-2">
                  {metaDescription || shortBio || "Author profile for FrameCipher contributors."}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#94A3B8] pt-1">
                  {seoAnalysis.kwInTitle && (
                    <span className="text-emerald-600 font-semibold">✓ Keyword in title</span>
                  )}
                  {seoAnalysis.kwInMeta && (
                    <span className="text-emerald-600 font-semibold">✓ Keyword in meta</span>
                  )}
                  {focusKeyword && !seoAnalysis.kwInTitle && !seoAnalysis.kwInMeta && (
                    <AlertTriangle className="h-3 w-3 text-amber-500" />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#64748B]">
                  SEO Score
                </span>
                <span
                  className={`font-mono font-bold text-xs px-2.5 py-0.5 rounded-full border ${
                    seoAnalysis.score >= 80
                      ? "bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]"
                      : seoAnalysis.score >= 60
                      ? "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]"
                      : "bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]"
                  }`}
                >
                  {seoAnalysis.score} / 100
                </span>
              </div>
            </div>

            {/* Auto Person Schema */}
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                  <BrainCircuit className="h-4 w-4 text-[#8B5CF6]" />
                  Auto Person Schema
                </h3>
                <button
                  onClick={handleCopySchema}
                  className="p-1.5 rounded-lg bg-[#EFF6FF] text-[#1D4ED8] hover:bg-[#DBEAFE] transition-colors"
                  title="Copy JSON-LD"
                >
                  {copiedSchema ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="text-[10px] text-[#64748B]">
                Generated automatically from the fields above — no manual markup needed. Emits
                schema.org <code className="font-mono text-[#8B5CF6] bg-[#F5F3FF] px-1 rounded">Person</code>{" "}
                with <code className="font-mono">sameAs</code>,{" "}
                <code className="font-mono">worksFor</code>,{" "}
                <code className="font-mono">knowsAbout</code>.
              </p>
              <pre className="rounded-xl bg-[#0F172A] text-[#A5B4FC] text-[10px] leading-relaxed p-3.5 overflow-x-auto max-h-64 overflow-y-auto font-mono whitespace-pre">
                {schemaJson}
              </pre>
              {copiedSchema && (
                <p className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> JSON-LD copied to clipboard
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Media Library Modal */}
      <MediaLibraryModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
        onSelectMedia={handleSelectMedia}
        title="Author Profile Image"
        buttonLabel="Use this image"
      />
    </div>
  );
}