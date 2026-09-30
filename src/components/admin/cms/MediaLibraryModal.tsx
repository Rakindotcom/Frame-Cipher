"use client";

import React, { useState, useCallback } from "react";
import {
  X,
  Check,
  Search,
  Image as ImageIcon,
  Copy,
  CheckCircle2,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import {
  addMediaByUrl,
  listMediaFromFirestore,
  saveMediaMetadata,
  deleteMediaItem,
  type MediaRecord,
} from "@/lib/firebase";

export type MediaItem = MediaRecord;

export const INITIAL_MEDIA_ITEMS: MediaItem[] = [];

interface MediaLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedia: (item: MediaItem) => void;
  title?: string;
  buttonLabel?: string;
}

export function MediaLibraryModal({
  isOpen,
  onClose,
  onSelectMedia,
  title = "Featured Image",
  buttonLabel = "Set featured image",
}: MediaLibraryModalProps) {
  const [activeTab, setActiveTab] = useState<"add" | "library">("library");
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSavingUrl, setIsSavingUrl] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Firestore stores URL references and metadata, never image files.
  const loadLibrary = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const items = await listMediaFromFirestore();
      setMediaList(items);
      setSelectedId((prev) => (prev && items.some((item) => item.id === prev) ? prev : items[0]?.id || ""));
    } catch (error: any) {
      setError(error?.message || "Could not load media from Firestore.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    if (isOpen) loadLibrary();
  }, [isOpen, loadLibrary]);

  const persistMedia = async (updated: MediaItem[]) => {
    setMediaList(updated);
  };

  if (!isOpen) return null;

  const selectedItem = mediaList.find((m) => m.id === selectedId) || mediaList[0] || null;

  const filteredItems = mediaList.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpdateItem = async (field: keyof MediaItem, value: string) => {
    if (!selectedItem) return;
    const updated = mediaList.map((item) =>
      item.id === selectedItem.id ? { ...item, [field]: value } : item
    );
    const result = await saveMediaMetadata({ ...selectedItem, [field]: value });
    if (result.success) await persistMedia(updated);
    else setError(result.error || "Could not save media metadata.");
  };

  const handleAddUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSavingUrl(true);
    const result = await addMediaByUrl(newUrl, newTitle);
    setIsSavingUrl(false);

    if (!result.success || !result.item) {
      setError(result.error || "Could not save image URL.");
      return;
    }

    setMediaList((prev) => [result.item as MediaItem, ...prev]);
    setSelectedId(result.item.id);
    setNewUrl("");
    setNewTitle("");
    setActiveTab("library");
  };

  const handleCopyUrl = () => {
    if (selectedItem) {
      navigator.clipboard.writeText(selectedItem.url);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  const handleDeleteItem = async (id: string) => {
    const target = mediaList.find((item) => item.id === id);
    if (!target) return;
    if (!confirm("Remove this image reference from the library? The hosted image itself will not be deleted.")) return;

    const result = await deleteMediaItem(target);
    if (!result.success) {
      setError(result.error || "Delete failed.");
      return;
    }

    const remaining = mediaList.filter((m) => m.id !== id);
    setMediaList(remaining);
    setSelectedId(remaining[0]?.id || "");
  };

  const handleConfirmSelection = () => {
    if (selectedItem) {
      onSelectMedia(selectedItem);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-300/60 backdrop-blur-sm p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-[#F8FAFC] text-[#0F172A] w-full max-w-6xl h-[90vh] rounded-2xl shadow-2xl border border-[#E2E8F0] flex flex-col overflow-hidden font-body">
        {/* Modal Top Bar */}
        <div className="h-14 px-6 bg-white border-b border-[#E2E8F0] flex items-center justify-between shrink-0">
          <h2 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A]">{title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-[#F1F5F9] transition-colors"
            title="Close dialog"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Header */}
        <div className="h-11 px-6 bg-white border-b border-[#E2E8F0] flex items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveTab("add")}
            className={`h-full px-4 text-xs font-heading font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === "add"
                ? "border-[#1D4ED8] text-[#1D4ED8]"
                : "border-transparent text-slate-500 hover:text-[#0F172A]"
            }`}
          >
            Add image URL
          </button>
          <button
            onClick={() => setActiveTab("library")}
            className={`h-full px-4 text-xs font-heading font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === "library"
                ? "border-[#1D4ED8] text-[#1D4ED8]"
                : "border-transparent text-slate-500 hover:text-[#0F172A]"
            }`}
          >
            Media Library ({mediaList.length})
          </button>
        </div>

        {error && (
          <div role="alert" className="px-6 py-2 border-b border-red-200 bg-red-50 text-xs font-semibold text-red-700 flex items-center gap-2">
            <AlertTriangle className="h-3.5 w-3.5" /> {error}
          </div>
        )}

        {/* Modal Main Area */}
        <div className="flex-1 flex overflow-hidden">
          {activeTab === "add" ? (
            /* Add a reference to an already-hosted image. */
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[#F8FAFC]">
              <form onSubmit={handleAddUrl} className="w-full max-w-lg p-8 border border-[#CBD5E1] rounded-2xl bg-white space-y-4">
                <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A]">Use an existing image</h3>
                <p className="text-xs text-[#64748B]">Paste an HTTPS image URL or a path to an image already deployed with this site. No file is uploaded.</p>
                <label className="block text-xs font-semibold text-[#475569]">
                  Image URL or site path
                  <input type="text" required value={newUrl} onChange={(e) => setNewUrl(e.target.value)} placeholder="https://example.com/photo.webp or /images/photo.webp" className="mt-1 w-full p-2.5 rounded-lg border border-[#CBD5E1] text-[#0F172A]" />
                </label>
                <label className="block text-xs font-semibold text-[#475569]">
                  Title
                  <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Optional image title" className="mt-1 w-full p-2.5 rounded-lg border border-[#CBD5E1] text-[#0F172A]" />
                </label>
                <button type="submit" disabled={isSavingUrl} className="px-4 py-2 rounded-lg bg-[#1D4ED8] text-white text-xs font-bold disabled:opacity-50">
                  {isSavingUrl ? "Saving..." : "Save image URL"}
                </button>
              </form>
            </div>
          ) : (
            /* Tab 2: Media Library (Grid + Details Sidebar) */
            <div className="flex-1 flex overflow-hidden">
              {/* Left Column: Thumbnail Grid */}
              <div className="flex-1 flex flex-col overflow-hidden bg-white border-r border-[#E2E8F0]">
                {/* Filter Toolbar */}
                <div className="p-3 bg-[#F8FAFC] border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 shrink-0">
                  <span className="text-[11px] text-[#64748B] font-semibold">
                    {isLoading ? "Loading library…" : `${mediaList.length} image reference${mediaList.length === 1 ? "" : "s"}`}
                  </span>
                  <div className="relative">
                    <Search className="h-3.5 w-3.5 text-[#94A3B8] absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search media..."
                      className="text-xs pl-8 pr-3 py-1 bg-white border border-[#CBD5E1] rounded-lg text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1D4ED8]"
                    />
                  </div>
                </div>

                {/* Grid */}
                <div className="flex-1 p-4 overflow-y-auto">
                  {!isLoading && filteredItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center gap-2 py-12">
                      <ImageIcon className="h-8 w-8 text-[#CBD5E1]" />
                      <p className="text-sm font-semibold text-[#64748B]">No image references yet</p>
                      <p className="text-xs text-[#94A3B8] max-w-sm">
                        Add an existing image URL in the Add image URL tab. No Firebase Storage is required.
                      </p>
                    </div>
                  ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {filteredItems.map((item) => {
                      const isSelected = item.id === selectedId;
                      return (
                        <div
                          key={item.id}
                          onClick={() => setSelectedId(item.id)}
                          className={`relative aspect-square rounded-xl cursor-pointer overflow-hidden border-2 bg-[#F1F5F9] flex items-center justify-center ${
                            isSelected
                              ? "border-[#1D4ED8] ring-2 ring-[#1D4ED8]/30 shadow-xs"
                              : "border-[#E2E8F0]"
                          }`}
                        >
                          <div className="w-full h-full flex flex-col items-center justify-center text-center bg-[#F8FAFC]">
                            <img
                              src={item.url}
                              alt={item.alt || item.title}
                              className="w-full h-full object-cover"
                              onError={(event) => {
                                event.currentTarget.src = "/logo.png";
                              }}
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-white/95 border-t border-[#E2E8F0] p-1.5 backdrop-blur-xs">
                              <span className="text-[10px] font-bold text-[#0F172A] line-clamp-1 px-1 block">
                                {item.title}
                              </span>
                              <span className="text-[9px] text-[#1D4ED8] font-mono block">
                                {item.dimensions}
                              </span>
                            </div>
                          </div>

                          {/* Selected Checkmark Badge */}
                          {isSelected && (
                            <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-[#1D4ED8] text-white rounded-md flex items-center justify-center shadow-xs">
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  )}
                </div>
              </div>

              {/* Right Column: Attachment Details Sidebar */}
              {selectedItem && (
                <div className="w-72 sm:w-80 lg:w-96 bg-[#F8FAFC] border-l border-[#E2E8F0] p-4 overflow-y-auto flex flex-col gap-4 text-xs shrink-0">
                  <h3 className="font-heading font-bold uppercase text-[11px] text-[#0F172A] tracking-wider border-b border-[#E2E8F0] pb-2">
                    Attachment Details
                  </h3>

                  {/* Thumbnail & File Metadata */}
                  <div className="flex gap-3">
                    <div className="w-20 h-20 bg-white rounded-lg border border-[#E2E8F0] shrink-0 overflow-hidden flex flex-col items-center justify-center">
                      <img
                        src={selectedItem.url}
                        alt={selectedItem.alt || selectedItem.title}
                        className="w-full h-full object-cover"
                        onError={(event) => {
                          event.currentTarget.src = "/logo.png";
                        }}
                      />
                    </div>
                    <div className="min-w-0 space-y-0.5 text-[11px] text-[#64748B]">
                      <div className="font-bold text-[#0F172A] truncate" title={selectedItem.filename}>
                        {selectedItem.filename}
                      </div>
                      <div>{selectedItem.uploadedAt}</div>
                      <div>{selectedItem.fileSize}</div>
                      <div>{selectedItem.dimensions} pixels</div>
                      <div className="pt-1 flex items-center gap-2">
                        <button
                          onClick={() => handleDeleteItem(selectedItem.id)}
                          className="text-rose-600 hover:underline font-semibold flex items-center gap-1"
                        >
                          <Trash2 className="h-3 w-3" />
                          <span>Remove reference</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Metadata Fields */}
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
                        Alt Text (Image SEO)
                      </label>
                      <input
                        type="text"
                        value={selectedItem.alt}
                        onChange={(e) => handleUpdateItem("alt", e.target.value)}
                        placeholder="Explain what the image depicts..."
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                      />
                      <p className="text-[10px] text-[#64748B] mt-1">
                        Read by search engines and screen readers. Essential for technical figures.
                      </p>
                    </div>

                    <div>
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        value={selectedItem.title}
                        onChange={(e) => handleUpdateItem("title", e.target.value)}
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
                        Caption
                      </label>
                      <textarea
                        rows={2}
                        value={selectedItem.caption}
                        onChange={(e) => handleUpdateItem("caption", e.target.value)}
                        placeholder="Optional caption displayed under image..."
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
                        Description
                      </label>
                      <textarea
                        rows={2}
                        value={selectedItem.description}
                        onChange={(e) => handleUpdateItem("description", e.target.value)}
                        placeholder="Detailed technical description..."
                        className="w-full p-2 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
                        File URL
                      </label>
                      <div className="flex gap-1">
                        <input
                          type="text"
                          readOnly
                          value={selectedItem.url}
                          className="w-full p-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[11px] font-mono text-[#0F172A] truncate select-all"
                        />
                        <button
                          onClick={handleCopyUrl}
                          className="px-2.5 py-1 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg text-[#1D4ED8] font-semibold flex items-center gap-1 shrink-0"
                          title="Copy link"
                        >
                          {copiedUrl ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="h-16 px-6 bg-white border-t border-[#E2E8F0] flex items-center justify-between shrink-0">
          <div className="text-xs text-[#64748B]">
            {selectedItem ? (
              <span>
                Selected: <strong className="text-[#0F172A]">{selectedItem.filename}</strong>
              </span>
            ) : (
              <span>No image selected</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white hover:bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1] text-xs font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmSelection}
              disabled={!selectedItem}
              className="px-5 py-2 rounded-lg bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors shadow-xs disabled:opacity-40"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
