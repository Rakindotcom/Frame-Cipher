"use client";

import React, { useState, useEffect, useRef } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import {
  INITIAL_MEDIA_ITEMS,
  MediaItem,
} from "@/components/admin/cms/MediaLibraryModal";
import {
  UploadCloud,
  Search,
  Grid,
  List,
  Copy,
  Check,
  Trash2,
  Image as ImageIcon,
  HardDrive,
  FileImage,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Layers,
  CheckSquare,
  Square,
  X,
} from "lucide-react";

const STORAGE_KEY = "framecipher_media_library";

export default function AdminMediaPage() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Bulk Selection State
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load persistent media library on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
          setSelectedItem(parsed[0] || null);
          return;
        }
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MEDIA_ITEMS));
        setItems(INITIAL_MEDIA_ITEMS);
        setSelectedItem(INITIAL_MEDIA_ITEMS[0] || null);
        return;
      }
    } catch {}
    setItems([]);
    setSelectedItem(null);
  }, []);

  // Save changes to localStorage
  const persistItems = (updated: MediaItem[]) => {
    setItems(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn("Storage quota exceeded or error", e);
    }
  };

  const readFileAsDataUrl = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const newItems: MediaItem[] = [];

    for (const file of Array.from(files)) {
      try {
        const url = await readFileAsDataUrl(file);
        const sizeKB = (file.size / 1024).toFixed(0);

        const newItem: MediaItem = {
          id: `media-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
          filename: file.name,
          url: url,
          alt: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ") + " engineering diagram",
          caption: "Uploaded technical diagram asset",
          description: `Direct upload ${file.name} (${file.type})`,
          uploadedAt: new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
          fileSize: `${sizeKB} KB`,
          dimensions: "1200 × 630",
          type: file.type || "image/png",
        };
        newItems.unshift(newItem);
      } catch (err) {
        console.warn("Failed to read uploaded file:", err);
      }
    }

    if (newItems.length > 0) {
      const combined = [...newItems, ...items];
      persistItems(combined);
      setSelectedItem(newItems[0]);
    }
    setIsUploading(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpdateSelected = (field: keyof MediaItem, value: string) => {
    if (!selectedItem) return;
    const updated = { ...selectedItem, [field]: value };
    setSelectedItem(updated);
    const updatedList = items.map((item) =>
      item.id === selectedItem.id ? updated : item
    );
    persistItems(updatedList);
    setSaveStatus("Saved changes");
    setTimeout(() => setSaveStatus(null), 2000);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this media asset permanently?")) return;
    const remaining = items.filter((item) => item.id !== id);
    persistItems(remaining);
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    if (selectedItem?.id === id) {
      setSelectedItem(remaining[0] || null);
    }
  };

  // Bulk Selection Handlers
  const toggleSelectOne = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === filteredItems.length && filteredItems.length > 0) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredItems.map((item) => item.id)));
    }
  };

  const handleBulkDelete = () => {
    const count = selectedIds.size;
    if (count === 0) return;
    if (!confirm(`Are you sure you want to permanently delete ${count} selected media assets?`)) return;

    const remaining = items.filter((item) => !selectedIds.has(item.id));
    persistItems(remaining);
    setSelectedIds(new Set());
    if (selectedItem && selectedIds.has(selectedItem.id)) {
      setSelectedItem(remaining[0] || null);
    }
  };

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.filename.toLowerCase().includes(search.toLowerCase()) ||
      item.alt.toLowerCase().includes(search.toLowerCase())
  );

  const isAllSelected =
    filteredItems.length > 0 && selectedIds.size === filteredItems.length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body relative overflow-x-hidden pb-16">
      <AdminHeader
        title="Media Library"
        subtitle="Manage uploaded diagrams, schematics, and Google Image SEO metadata"
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-6 space-y-6 relative z-10 max-w-7xl mx-auto">
        {/* Top 4 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Total Assets</span>
            <div className="my-2">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">{items.length}</div>
            </div>
            <span className="text-xs font-heading font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full self-start whitespace-nowrap">
              Verified Local &amp; CDN
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Alt Text Coverage</span>
            <div className="my-2">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">
                {Math.round(
                  (items.filter((i) => i.alt && i.alt.trim().length > 0).length /
                    (items.length || 1)) *
                    100
                )}
                %
              </div>
            </div>
            <span className="text-xs font-heading font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full self-start whitespace-nowrap">
              Google Image SEO Ready
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Format Standard</span>
            <div className="my-2">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">WebP</div>
            </div>
            <span className="text-xs font-heading font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full self-start whitespace-nowrap">
              Zero Cumulative Layout Shift
            </span>
          </div>

          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs flex flex-col justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B]">Schema Graph</span>
            <div className="my-2">
              <div className="text-3xl font-heading font-bold text-[#0F172A] tracking-tight">100%</div>
            </div>
            <span className="text-xs font-heading font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full self-start whitespace-nowrap">
              TechArticle Linked
            </span>
          </div>
        </div>

        {/* Action Toolbar & Bulk Controls */}
        <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search media by name or alt text..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-colors"
              />
            </div>
            <div className="flex items-center bg-[#F8FAFC] p-1 rounded-xl border border-[#CBD5E1]">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-white text-[#1D4ED8] shadow-sm border border-[#E2E8F0]"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
                title="Grid View"
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-white text-[#1D4ED8] shadow-sm border border-[#E2E8F0]"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
                title="List View"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
            {/* Select All Toggle Button */}
            <button
              onClick={toggleSelectAll}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-heading font-bold uppercase tracking-wider transition-colors ${
                isAllSelected
                  ? "bg-[#FEF2F2] border-[#FECACA] text-[#DC2626]"
                  : "bg-[#F8FAFC] border-[#CBD5E1] text-[#64748B]"
              }`}
            >
              {isAllSelected ? (
                <CheckSquare className="h-4 w-4 text-[#DC2626]" />
              ) : (
                <Square className="h-4 w-4 text-[#64748B]" />
              )}
              <span>{isAllSelected ? "Deselect All" : "Select All"}</span>
            </button>

            {/* Upload Button */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#1D4ED8] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs"
            >
              <UploadCloud className="h-4 w-4" />
              <span>{isUploading ? "Uploading..." : "Upload New Media"}</span>
            </button>
          </div>
        </div>

        {/* Floating / Sticky Bulk Actions Bar when items are selected */}
        {selectedIds.size > 0 && (
          <div className="p-3.5 px-5 rounded-2xl bg-[#FEF2F2] border border-[#FECACA] shadow-xs flex items-center justify-between text-xs animate-in fade-in slide-in-from-top duration-200">
            <div className="flex items-center gap-2.5 text-[#DC2626] font-heading font-bold uppercase tracking-wider">
              <CheckSquare className="h-4 w-4 text-[#DC2626]" />
              <span>{selectedIds.size} media {selectedIds.size === 1 ? "asset" : "assets"} selected</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedIds(new Set())}
                className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#475569] text-xs font-heading font-bold uppercase tracking-wider"
              >
                Cancel
              </button>
              <button
                onClick={handleBulkDelete}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#DC2626] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-xs"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Delete Selected ({selectedIds.size})</span>
              </button>
            </div>
          </div>
        )}

        {/* Media Grid / List Layout & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Media Items Container */}
          <div className="lg:col-span-8 rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs">
            {filteredItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <ImageIcon className="h-12 w-12 text-[#94A3B8] mx-auto" />
                <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A]">No media files found</h4>
                <p className="text-xs text-[#64748B]">
                  Try adjusting your search query or upload a new engineering diagram.
                </p>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredItems.map((item) => {
                  const isSelected = selectedItem?.id === item.id;
                  const isChecked = selectedIds.has(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className={`group relative rounded-xl overflow-hidden cursor-pointer border ${
                        isChecked
                          ? "border-[#DC2626] ring-2 ring-[#DC2626]/30 bg-[#FEF2F2]/30"
                          : isSelected
                          ? "border-[#1D4ED8] ring-2 ring-[#1D4ED8]/30 bg-[#EFF6FF]/40"
                          : "border-[#E2E8F0] bg-[#F8FAFC]"
                      }`}
                    >
                      {/* Bulk Checkbox Overlay */}
                      <div
                        onClick={(e) => toggleSelectOne(item.id, e)}
                        className={`absolute top-2 left-2 z-10 h-6 w-6 rounded-lg flex items-center justify-center ${
                          isChecked
                            ? "bg-[#DC2626] text-white shadow-xs"
                            : "bg-white/90 border border-[#CBD5E1] text-[#0F172A]"
                        }`}
                        title={isChecked ? "Deselect" : "Select for bulk delete"}
                      >
                        {isChecked ? (
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        ) : (
                          <Square className="h-3.5 w-3.5 text-[#64748B]" />
                        )}
                      </div>

                      <div className="aspect-square bg-white relative flex items-center justify-center p-2">
                        {item.url.startsWith("/") ||
                        item.url.startsWith("blob:") ||
                        item.url.startsWith("data:") ? (
                          <div className="relative w-full h-full">
                            <img
                              src={item.url}
                              alt={item.alt || item.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="text-center p-3">
                            <ImageIcon className="h-8 w-8 text-[#1D4ED8] mx-auto mb-1" />
                            <span className="text-[10px] text-[#64748B] line-clamp-1">
                              {item.filename}
                            </span>
                          </div>
                        )}
                        {isSelected && !isChecked && (
                          <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shadow-xs">
                            <Check className="h-3 w-3" />
                          </div>
                        )}
                      </div>
                      <div className="p-2.5 border-t border-[#E2E8F0] bg-[#F8FAFC]">
                        <p className="text-xs font-bold text-[#0F172A] truncate">
                          {item.title}
                        </p>
                        <div className="flex items-center justify-between text-[10px] text-[#64748B] mt-1 font-mono">
                          <span>{item.dimensions}</span>
                          <span>{item.fileSize}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-xs text-[#334155]">
                  <thead className="bg-[#F8FAFC] text-[11px] font-heading font-bold uppercase tracking-wider text-[#475569] border-b border-[#E2E8F0]">
                    <tr>
                      <th className="py-2.5 px-3 w-8">
                        <input
                          type="checkbox"
                          checked={isAllSelected}
                          onChange={toggleSelectAll}
                          className="rounded border-[#CBD5E1] text-[#1D4ED8] focus:ring-0 cursor-pointer"
                        />
                      </th>
                      <th className="py-2.5 px-3">Thumbnail</th>
                      <th className="py-2.5 px-3">Title &amp; Filename</th>
                      <th className="py-2.5 px-3">Alt Text Status</th>
                      <th className="py-2.5 px-3">Dimensions</th>
                      <th className="py-2.5 px-3">Size</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F1F5F9]">
                    {filteredItems.map((item) => {
                      const isSelected = selectedItem?.id === item.id;
                      const isChecked = selectedIds.has(item.id);

                      return (
                        <tr
                          key={item.id}
                          onClick={() => setSelectedItem(item)}
                          className={`cursor-pointer transition-colors ${
                            isChecked
                              ? "bg-[#FEF2F2]/50 text-[#0F172A]"
                              : isSelected
                              ? "bg-[#EFF6FF] text-[#0F172A]"
                              : "hover:bg-[#F8FAFC]"
                          }`}
                        >
                          <td className="py-2 px-3">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onClick={(e) => e.stopPropagation()}
                              onChange={() => toggleSelectOne(item.id)}
                              className="rounded border-[#CBD5E1] text-[#1D4ED8] focus:ring-0 cursor-pointer"
                            />
                          </td>
                          <td className="py-2 px-3">
                            <div className="h-10 w-10 rounded-lg bg-white border border-[#E2E8F0] overflow-hidden relative flex items-center justify-center">
                              {item.url.startsWith("/") ||
                              item.url.startsWith("blob:") ||
                              item.url.startsWith("data:") ? (
                                <img
                                  src={item.url}
                                  alt={item.alt || item.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <ImageIcon className="h-5 w-5 text-[#1D4ED8]" />
                              )}
                            </div>
                          </td>
                          <td className="py-2 px-3">
                            <div className="font-bold text-[#0F172A] truncate max-w-xs">
                              {item.title}
                            </div>
                            <div className="text-[10px] text-[#64748B] font-mono">
                              {item.filename}
                            </div>
                          </td>
                          <td className="py-2 px-3">
                            {item.alt ? (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full border border-[#BBF7D0]">
                                <Check className="h-2.5 w-2.5" /> Alt Added
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#D97706] bg-[#FEF3C7] px-2 py-0.5 rounded-full border border-[#FDE68A]">
                                <AlertCircle className="h-2.5 w-2.5" /> Missing Alt
                              </span>
                            )}
                          </td>
                          <td className="py-2 px-3 font-mono text-[11px] text-[#64748B]">
                            {item.dimensions}
                          </td>
                          <td className="py-2 px-3 font-mono text-[11px] text-[#64748B]">
                            {item.fileSize}
                          </td>
                          <td className="py-2 px-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopyUrl(item.url, item.id);
                                }}
                                className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                                title="Copy URL"
                              >
                                {copiedId === item.id ? (
                                  <Check className="h-3.5 w-3.5 text-[#16A34A]" />
                                ) : (
                                  <Copy className="h-3.5 w-3.5" />
                                )}
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(item.id);
                                }}
                                className="p-1.5 rounded-lg text-[#64748B] hover:text-[#DC2626] hover:bg-rose-50 transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Right Detail / Attachment Metadata Drawer */}
          <div className="lg:col-span-4 rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs space-y-4">
            {selectedItem ? (
              <>
                <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                  <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                    <ImageIcon className="h-4 w-4 text-[#1D4ED8]" />
                    <span>Attachment Details</span>
                  </h4>
                  {saveStatus && (
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#16A34A] animate-pulse">
                      {saveStatus}
                    </span>
                  )}
                </div>

                {/* Preview Thumbnail */}
                <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden flex items-center justify-center p-4 relative min-h-[160px]">
                  {selectedItem.url.startsWith("/") ||
                  selectedItem.url.startsWith("blob:") ||
                  selectedItem.url.startsWith("data:") ? (
                    <div className="relative w-full h-40">
                      <img
                        src={selectedItem.url}
                        alt={selectedItem.alt || selectedItem.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <ImageIcon className="h-16 w-16 text-[#CBD5E1]" />
                  )}
                </div>

                {/* Read-only File Metadata */}
                <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0] font-mono">
                  <div>
                    <span className="text-[#64748B] block text-[9px] font-heading font-bold uppercase tracking-wider">
                      File name
                    </span>
                    <span className="text-[#0F172A] font-bold truncate block">{selectedItem.filename}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[9px] font-heading font-bold uppercase tracking-wider">
                      Dimensions
                    </span>
                    <span className="text-[#0F172A] font-bold">{selectedItem.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[9px] font-heading font-bold uppercase tracking-wider">
                      File Size
                    </span>
                    <span className="text-[#0F172A] font-bold">{selectedItem.fileSize}</span>
                  </div>
                  <div>
                    <span className="text-[#64748B] block text-[9px] font-heading font-bold uppercase tracking-wider">
                      Date Uploaded
                    </span>
                    <span className="text-[#0F172A] font-bold">{selectedItem.uploadedAt}</span>
                  </div>
                </div>

                {/* Editable SEO Metadata Fields */}
                <div className="space-y-3 pt-1">
                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#475569] mb-1 flex items-center justify-between">
                      <span>Alternative Text (Alt text)</span>
                      <span className="text-[10px] text-[#1D4ED8]">
                        Crucial for Google SEO
                      </span>
                    </label>
                    <input
                      type="text"
                      value={selectedItem.alt}
                      onChange={(e) => handleUpdateSelected("alt", e.target.value)}
                      placeholder="Describe the purpose of the image..."
                      className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#475569] mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={selectedItem.title}
                      onChange={(e) => handleUpdateSelected("title", e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#475569] mb-1">
                      Caption
                    </label>
                    <textarea
                      rows={2}
                      value={selectedItem.caption}
                      onChange={(e) => handleUpdateSelected("caption", e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#475569] mb-1">
                      File URL
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="text"
                        readOnly
                        value={selectedItem.url}
                        className="flex-1 px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] text-[#64748B] font-mono focus:outline-none cursor-default"
                      />
                      <button
                        onClick={() => handleCopyUrl(selectedItem.url, selectedItem.id)}
                        className="px-3 py-1.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs"
                        title="Copy to clipboard"
                      >
                        {copiedId === selectedItem.id ? (
                          <Check className="h-3.5 w-3.5 text-[#16A34A]" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                  <button
                    onClick={() => handleDelete(selectedItem.id)}
                    className="text-xs font-heading font-bold uppercase tracking-wider text-[#DC2626] flex items-center gap-1"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Delete Permanently</span>
                  </button>
                  <a
                    href={selectedItem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-heading font-bold uppercase tracking-wider text-[#1D4ED8] flex items-center gap-1"
                  >
                    <span>View original</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </>
            ) : (
              <div className="py-12 text-center text-[#64748B] text-xs">
                Select an image from the library to inspect its details and edit SEO tags.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
