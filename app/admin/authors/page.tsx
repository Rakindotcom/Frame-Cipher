"use client";

import React, { useState, useEffect } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AuthorProfile } from "@/types/author";
import {
  getAuthorProfilesFromFirestore,
  saveAuthorProfileToFirestore,
  deleteAuthorProfileFromFirestore,
} from "@/lib/firebase";
import { personSchemaToJson } from "@/lib/schema/personSchema";
import { revalidateSitemaps } from "@/lib/actions/revalidateSitemap";
import { CANONICAL_AUTHORS } from "@/lib/authors/canonicalAuthors";
import { AuthorProfileEditor } from "@/components/admin/authors/AuthorProfileEditor";
import {
  Users,
  Plus,
  Edit,
  Trash2,
  Search,
  CheckCircle2,
  Copy,
  Check,
  BrainCircuit,
  Eye,
  ExternalLink,
  Sparkles,
  X,
} from "lucide-react";

const STORAGE_KEY = "framecipher_admin_author_profiles";

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function mergeCanonicalWithCustom(customList: AuthorProfile[]): AuthorProfile[] {
  const customMap = new Map<string, AuthorProfile>();
  customList.forEach((item) => {
    if (item.slug) customMap.set(item.slug, item);
    if (item.id) customMap.set(item.id, item);
  });

  const merged: AuthorProfile[] = [];
  CANONICAL_AUTHORS.forEach((c) => {
    const override = customMap.get(c.slug) || customMap.get(c.id);
    if (override) {
      merged.push({ ...c, ...override });
      customMap.delete(c.slug);
      customMap.delete(c.id);
    } else {
      merged.push(c);
    }
  });

  customMap.forEach((item) => {
    if (!merged.some((m) => m.id === item.id || m.slug === item.slug)) {
      merged.push(item);
    }
  });

  return merged;
}

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<AuthorProfile[]>(CANONICAL_AUTHORS);
  const [activeTab, setActiveTab] = useState<"all" | "published" | "draft">("all");
  const [search, setSearch] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingAuthor, setEditingAuthor] = useState<Partial<AuthorProfile> | null>(null);
  const [schemaAuthor, setSchemaAuthor] = useState<AuthorProfile | null>(null);
  const [copiedSchemaId, setCopiedSchemaId] = useState<string>("");

  useEffect(() => {
    async function loadAuthors() {
      try {
        const firestoreAuthors = await getAuthorProfilesFromFirestore();
        if (firestoreAuthors && firestoreAuthors.length > 0) {
          setAuthors(mergeCanonicalWithCustom(firestoreAuthors));
          return;
        }
      } catch (err) {
        console.warn("Firestore authors fetch error:", err);
      }

      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setAuthors(mergeCanonicalWithCustom(parsed));
            return;
          }
        }
      } catch {}

      setAuthors(CANONICAL_AUTHORS);
    }
    loadAuthors();
  }, []);

  const persistAuthors = (updatedList: AuthorProfile[]) => {
    setAuthors(updatedList);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    } catch {}

    updatedList.forEach((a) => {
      saveAuthorProfileToFirestore(a).catch(() => {});
    });

    // Regenerate the author sitemap so published profile changes land immediately.
    revalidateSitemaps(["author"]).catch(() => {});
  };

  const handleOpenNew = () => {
    setEditingAuthor({
      name: "",
      slug: "",
      jobTitle: "Contributor",
      image: { url: "", alt: "", hasAlt: false },
      shortBio: "",
      bio: "",
      email: "",
      website: "",
      worksFor: "FrameCipher",
      socialLinks: {},
      status: "published",
      publishDate: new Date().toISOString().split("T")[0],
      seoTitle: "",
      metaDescription: "",
      focusKeyword: "",
      tags: [],
    });
    setIsEditorOpen(true);
  };

  const handleEditAuthor = (author: AuthorProfile) => {
    setEditingAuthor(author);
    setIsEditorOpen(true);
  };

  const handleDeleteAuthor = (id: string) => {
    if (confirm("Are you sure you want to permanently delete this author profile? Person schema will be removed with it.")) {
      const updated = authors.filter((a) => a.id !== id);
      persistAuthors(updated);
      deleteAuthorProfileFromFirestore(id).catch(() => {});
      if (schemaAuthor?.id === id) setSchemaAuthor(null);
    }
  };

  const handleSaveFromEditor = (savedAuthor: AuthorProfile) => {
    const existingIndex = authors.findIndex((a) => a.id === savedAuthor.id);
    let updated: AuthorProfile[];
    if (existingIndex >= 0) {
      updated = [...authors];
      updated[existingIndex] = savedAuthor;
    } else {
      updated = [savedAuthor, ...authors];
    }
    persistAuthors(updated);
    setIsEditorOpen(false);
  };

  const handleCopySchema = (author: AuthorProfile) => {
    navigator.clipboard.writeText(personSchemaToJson(author));
    setCopiedSchemaId(author.id);
    setTimeout(() => setCopiedSchemaId(""), 2000);
  };

  const filteredAuthors = authors.filter((a) => {
    const matchesTab = activeTab === "all" || a.status === activeTab;
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
      a.tags.join(" ").toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const publishedCount = authors.filter((a) => a.status === "published").length;
  const schemaCoverage = Math.round(
    (authors.filter((a) => a.slug && a.name).length / (authors.length || 1)) * 100
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body relative overflow-x-hidden pb-16 lg:pb-0">
      <AdminHeader
        title="Author Profiles & E-E-A-T"
        subtitle="Create author profiles with image, SEO metadata and auto-generated Person schema (JSON-LD)"
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-6 space-y-6 relative z-10 max-w-7xl mx-auto">
        {/* Top 4 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">
              Total Authors
            </span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">
                {authors.length}
              </div>
            </div>
            <span className="text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full self-start">
              {publishedCount} Published
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">
              Schema Coverage
            </span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">
                {schemaCoverage}%
              </div>
            </div>
            <span className="text-xs font-bold text-[#8B5CF6] bg-[#F5F3FF] px-2.5 py-0.5 rounded-full self-start">
              Person JSON-LD
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">
              Total Published Articles
            </span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">
                {authors.reduce((sum, a) => sum + (a.postsCount || 0), 0).toLocaleString()}
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full self-start">
              E-E-A-T Signal
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">
              Profile Photo Coverage
            </span>
            <div className="my-1.5">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">
                {Math.round(
                  (authors.filter((a) => a.image && a.image.url && a.image.hasAlt).length /
                    (authors.length || 1)) *
                    100
                )}
                %
              </div>
            </div>
            <span className="text-xs font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full self-start">
              Alt Text Compliance
            </span>
          </div>
        </div>

        {/* Action Toolbar & Filters */}
        <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1 min-w-0">
            <div className="flex items-center p-1 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] shrink-0 overflow-x-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                  activeTab === "all" ? "bg-white text-[#1D4ED8] shadow-xs" : "text-[#64748B]"
                }`}
              >
                All ({authors.length})
              </button>
              <button
                onClick={() => setActiveTab("published")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                  activeTab === "published"
                    ? "bg-white text-[#1D4ED8] shadow-xs"
                    : "text-[#64748B]"
                }`}
              >
                Published ({publishedCount})
              </button>
              <button
                onClick={() => setActiveTab("draft")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                  activeTab === "draft" ? "bg-white text-[#1D4ED8] shadow-xs" : "text-[#64748B]"
                }`}
              >
                Drafts (
                {authors.filter((a) => a.status === "draft").length})
              </button>
            </div>

            <div className="relative flex-1 max-w-sm">
              <Search className="h-4 w-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search authors, roles or topics..."
                className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-medium text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1D4ED8] focus:bg-white"
              />
            </div>
          </div>

          <button
            onClick={handleOpenNew}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs transition-colors shrink-0"
          >
            <Plus className="h-4 w-4" />
            <span>Create Author Profile</span>
          </button>
        </div>

        {/* Author Cards Grid */}
        {filteredAuthors.length === 0 ? (
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-12 shadow-xs text-center">
            <Users className="h-10 w-10 text-[#CBD5E1] mx-auto mb-3" />
            <p className="text-sm font-heading font-bold uppercase tracking-wider text-[#64748B]">
              No author profiles found
            </p>
            <p className="text-xs text-[#94A3B8] mt-1">
              Create your first author profile — Person schema will be auto-generated.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredAuthors.map((author) => {
              const hasImage = Boolean(author.image?.url);
              const schemaJson = personSchemaToJson(author);
              return (
                <div
                  key={author.id}
                  className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Card header */}
                  <div className="p-5 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {hasImage ? (
                        <div className="w-12 h-12 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] overflow-hidden shrink-0 flex items-center justify-center">
                          <img
                            src={author.image.url}
                            alt={author.image.alt || author.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "/logo.png";
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-frame-accent border border-purple-400 flex items-center justify-center text-white font-heading font-bold text-sm shrink-0 shadow-xs">
                          {initialsOf(author.name)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="font-bold text-[#0F172A] text-sm truncate">{author.name}</div>
                        <div className="text-[11px] text-[#64748B] truncate">{author.jobTitle}</div>
                        <div className="text-[10px] text-[#8B5CF6] font-semibold mt-0.5">
                          {author.worksFor}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                        author.status === "published"
                          ? "bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0]"
                          : "bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]"
                      }`}
                    >
                      {author.status}
                    </span>
                  </div>

                  {/* Short bio */}
                  <div className="px-5 pb-4">
                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                      {author.shortBio ||
                        author.bio ||
                        "No bio added yet — Person schema uses the short bio as its description."}
                    </p>
                  </div>

                  {/* Schema ready bar */}
                  <div className="px-5 pb-4 flex items-center justify-between gap-2 min-w-0">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#8B5CF6] bg-[#F5F3FF] px-2.5 py-1 rounded-full border border-[#DDD6FE] shrink-0">
                      <BrainCircuit className="h-3 w-3" />
                      Person Schema Auto
                    </span>
                    <span className="text-[10px] font-mono text-[#64748B] truncate">
                      /authors/{author.slug}
                    </span>
                  </div>

                  {/* Tags */}
                  {author.tags && author.tags.length > 0 && (
                    <div className="px-5 pb-4 flex flex-wrap gap-1.5">
                      {author.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold text-[#475569] bg-[#F1F5F9] border border-[#E2E8F0] px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {author.tags.length > 3 && (
                        <span className="text-[10px] font-semibold text-[#64748B]">
                          +{author.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="px-5 py-3.5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap items-center gap-1.5">
                    <button
                      onClick={() => handleEditAuthor(author)}
                      className="p-2 rounded-lg bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] transition-colors"
                      title="Edit profile"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setSchemaAuthor(author)}
                      className="p-2 rounded-lg bg-white border border-[#CBD5E1] text-[#8B5CF6] hover:bg-[#F5F3FF] hover:border-[#DDD6FE] transition-colors"
                      title="View Person schema"
                    >
                      <BrainCircuit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleCopySchema(author)}
                      className="p-2 rounded-lg bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] transition-colors"
                      title="Copy JSON-LD"
                    >
                      {copiedSchemaId === author.id ? (
                        <Check className="h-4 w-4 text-emerald-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                    <a
                      href={`/authors/${author.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] transition-colors"
                      title="View live profile"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <div className="flex-1" />
                    <button
                      onClick={() => handleDeleteAuthor(author.id)}
                      className="p-2 rounded-lg bg-white border border-[#CBD5E1] text-[#475569] hover:text-[#DC2626] hover:bg-[#FEF2F2] transition-colors"
                      title="Delete profile"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Auto-schema informational banner */}
        <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] text-[#8B5CF6] flex items-center justify-center shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A]">
              Automatic Person Schema (JSON-LD)
            </h3>
            <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
              Every author profile automatically emits a schema.org{" "}
              <code className="font-mono text-[#8B5CF6] bg-[#F5F3FF] px-1 rounded">Person</code>{" "}
              structured-data block (with <code className="font-mono">sameAs</code>,{" "}
              <code className="font-mono">worksFor</code>, <code className="font-mono">knowsAbout</code>,
              profile <code className="font-mono">image</code> and{" "}
              <code className="font-mono">description</code>). No manual markup required — open the
              editor and the live schema updates as you type.
            </p>
          </div>
        </div>
      </div>

      {/* Editor Modal */}
      {isEditorOpen && editingAuthor && (
        <AuthorProfileEditor
          author={editingAuthor}
          onSave={handleSaveFromEditor}
          onClose={() => setIsEditorOpen(false)}
        />
      )}

      {/* Person Schema Viewer Modal */}
      {schemaAuthor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-300/60 backdrop-blur-sm p-3 sm:p-6 animate-in fade-in duration-150">
          <div className="bg-[#F8FAFC] text-[#0F172A] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E2E8F0] flex flex-col overflow-hidden font-body">
            <div className="h-14 px-6 bg-white border-b border-[#E2E8F0] flex items-center justify-between shrink-0">
              <h2 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <BrainCircuit className="h-4 w-4 text-[#8B5CF6]" />
                {schemaAuthor.name} — Person Schema
              </h2>
              <button
                onClick={() => setSchemaAuthor(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-[#F1F5F9] transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-xs text-[#64748B] mb-4">
                Auto-generated structured data for{" "}
                <code className="font-mono text-[#8B5CF6] bg-[#F5F3FF] px-1 rounded">
                  /authors/{schemaAuthor.slug}
                </code>
                . Paste into{" "}
                <a
                  href="https://search.google.com/test/rich-results"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1D4ED8] font-semibold underline underline-offset-2"
                >
                  Rich Results Test
                </a>{" "}
                to validate.
              </p>
              <pre className="rounded-xl bg-[#0F172A] text-[#A5B4FC] text-[11px] leading-relaxed p-4 overflow-x-auto max-h-96 overflow-y-auto font-mono whitespace-pre">
                {personSchemaToJson(schemaAuthor)}
              </pre>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-full border border-[#BBF7D0]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Valid schema.org Person — auto-generated
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={`/authors/${schemaAuthor.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-[#CBD5E1] text-[#475569] text-xs font-semibold hover:bg-[#F1F5F9] transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Preview
                  </a>
                  <button
                    onClick={() => handleCopySchema(schemaAuthor)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs transition-colors"
                  >
                    {copiedSchemaId === schemaAuthor.id ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    Copy JSON-LD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}