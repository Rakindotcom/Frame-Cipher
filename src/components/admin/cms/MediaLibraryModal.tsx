"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AlertCircle, Check, ChevronDown, Loader2, Search, UploadCloud, X } from "lucide-react";
import {
  MAX_MEDIA_IMAGE_BYTES,
  listMediaFromFirestore,
  uploadMediaImage,
  type MediaRecord,
} from "@/lib/firebase";

export type MediaItem = MediaRecord;

export const INITIAL_MEDIA_ITEMS: MediaItem[] = [];

const ALLOWED_IMAGE_TYPES = new Set(["image/png", "image/jpeg", "image/webp", "image/gif", "image/avif"]);

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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [libraryError, setLibraryError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showExisting, setShowExisting] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const loadLibrary = useCallback(async () => {
    setIsLoading(true);
    setLibraryError(null);
    try {
      setMediaList(await listMediaFromFirestore());
    } catch {
      setLibraryError("Could not load previously uploaded images.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen && showExisting) void loadLibrary();
  }, [isOpen, showExisting, loadLibrary]);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const close = () => {
    if (isUploading) return;
    setFile(null);
    setDescription("");
    setSearch("");
    setSelectedId("");
    setShowExisting(false);
    setError(null);
    onClose();
  };

  const chooseFile = (nextFile: File | null) => {
    setFile(nextFile);
    setSelectedId("");
    setError(
      nextFile && (nextFile.size === 0 || nextFile.size > MAX_MEDIA_IMAGE_BYTES)
        ? "Choose an image that is 100 KB or smaller."
        : nextFile && nextFile.type && !ALLOWED_IMAGE_TYPES.has(nextFile.type)
          ? "Choose a PNG, JPEG, WebP, GIF, or AVIF image."
        : null
    );
  };

  const uploadAndInsert = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file || file.size === 0 || file.size > MAX_MEDIA_IMAGE_BYTES) return;
    setError(null);
    setIsUploading(true);
    const result = await uploadMediaImage(file, description);
    setIsUploading(false);
    if (!result.success || !result.item) {
      setError(result.error || "Could not upload image.");
      return;
    }
    onSelectMedia(result.item);
    setFile(null);
    setDescription("");
    setShowExisting(false);
    onClose();
  };

  const selectedItem = mediaList.find((item) => item.id === selectedId);
  const visibleItems = (search.trim()
    ? mediaList.filter((item) =>
        `${item.title} ${item.filename} ${item.alt}`.toLowerCase().includes(search.trim().toLowerCase())
      )
    : mediaList.slice(0, 8));
  const validFile = Boolean(file && file.size > 0 && file.size <= MAX_MEDIA_IMAGE_BYTES && (!file.type || ALLOWED_IMAGE_TYPES.has(file.type)));

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-3 backdrop-blur-sm sm:p-6"
      onKeyDown={(event) => {
        if (event.key === "Escape") close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="media-dialog-title"
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-7">
          <div>
            <h2 id="media-dialog-title" className="font-heading text-lg font-bold text-slate-950">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">Choose an image and add it in one step.</p>
          </div>
          <button type="button" onClick={close} disabled={isUploading} aria-label="Close dialog" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 disabled:opacity-50">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 overflow-y-auto bg-slate-50 px-5 py-5 sm:px-7 sm:py-6">
          <form onSubmit={uploadAndInsert} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="font-heading text-sm font-bold text-slate-950">Upload new image</h3>
                <p className="mt-0.5 text-xs text-slate-500">PNG, JPEG, WebP, GIF, or AVIF · 100 KB maximum</p>
              </div>
              <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">ImageKit</span>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif,image/avif"
              className="sr-only"
              onChange={(event) => {
                chooseFile(event.target.files?.[0] || null);
                event.currentTarget.value = "";
              }}
            />
            <div
              onDragOver={(event) => { event.preventDefault(); setIsDragging(true); }}
              onDragLeave={(event) => { event.preventDefault(); setIsDragging(false); }}
              onDrop={(event) => {
                event.preventDefault();
                setIsDragging(false);
                chooseFile(event.dataTransfer.files?.[0] || null);
              }}
              className={`rounded-xl border-2 border-dashed p-5 transition-colors ${isDragging ? "border-blue-500 bg-blue-50" : "border-slate-300 bg-slate-50"}`}
            >
              {file ? (
                <div className="flex items-center gap-4">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                    {previewUrl && <img src={previewUrl} alt="Selected image preview" className="h-full w-full object-contain" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-900" title={file.name}>{file.name}</p>
                    <p className={`mt-1 text-xs ${validFile ? "text-slate-500" : "font-semibold text-red-600"}`}>
                      {(file.size / 1024).toFixed(1)} KB of 100 KB maximum
                    </p>
                    <button type="button" onClick={() => fileInputRef.current?.click()} disabled={isUploading} className="mt-3 text-xs font-semibold text-blue-700 hover:underline disabled:opacity-50">Choose another image</button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center py-3 text-center">
                  <UploadCloud className="h-9 w-9 text-blue-600" />
                  <p className="mt-3 text-sm font-semibold text-slate-900">Drag an image here</p>
                  <p className="mt-1 text-xs text-slate-500">or choose a file from your computer</p>
                  <button type="button" onClick={() => fileInputRef.current?.click()} className="mt-4 rounded-lg border border-blue-200 bg-white px-4 py-2 text-xs font-bold text-blue-700 hover:bg-blue-50">Choose image</button>
                </div>
              )}
            </div>

            {file && (
              <label className="mt-4 block text-xs font-semibold text-slate-700">
                Image description <span className="font-normal text-slate-400">(optional)</span>
                <input
                  type="text"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="What does this image show?"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
                />
                <span className="mt-1 block font-normal text-slate-500">Used as the image title and alt text.</span>
              </label>
            )}

            {error && (
              <p role="alert" className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
                <AlertCircle className="h-4 w-4 shrink-0" /> {error}
              </p>
            )}

            <button type="submit" disabled={!validFile || isUploading} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-45">
              {isUploading && <Loader2 className="h-4 w-4 animate-spin" />}
              {isUploading ? "Uploading…" : `Upload and ${buttonLabel.toLowerCase()}`}
            </button>
          </form>

          <div className="text-center">
            <button type="button" onClick={() => setShowExisting((current) => !current)} aria-expanded={showExisting} className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:underline">
              Use a previously uploaded image
              <ChevronDown className={`h-4 w-4 transition-transform ${showExisting ? "rotate-180" : ""}`} />
            </button>
          </div>

          {showExisting && <section aria-labelledby="existing-images-heading" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 id="existing-images-heading" className="font-heading text-sm font-bold text-slate-950">Already uploaded</h3>
                <p className="mt-0.5 text-xs text-slate-500">Choose an existing image without uploading it again.</p>
              </div>
              {mediaList.length > 0 && (
                <div className="relative w-full sm:w-48">
                  <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find an image" aria-label="Find an uploaded image" className="w-full rounded-lg border border-slate-300 py-2 pl-8 pr-3 text-xs focus:border-blue-500 focus:outline-none" />
                </div>
              )}
            </div>
            {libraryError ? <p className="mt-4 text-xs text-red-600">{libraryError}</p> : isLoading ? (
              <p className="mt-4 text-xs text-slate-500">Loading images…</p>
            ) : visibleItems.length === 0 ? (
              <p className="mt-4 text-xs text-slate-500">{search ? "No matching images." : "No images uploaded yet."}</p>
            ) : (
              <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {visibleItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => { setSelectedId(item.id); setFile(null); setError(null); }}
                    aria-pressed={selectedId === item.id}
                    title={item.title}
                    className={`relative overflow-hidden rounded-lg border-2 text-left ${selectedId === item.id ? "border-blue-600 ring-2 ring-blue-100" : "border-slate-200 hover:border-blue-300"}`}
                  >
                    <img src={item.url} alt={item.alt || item.title} className="aspect-square w-full bg-slate-100 object-cover" />
                    <span className="block truncate px-2 py-1.5 text-[11px] font-medium text-slate-700">{item.title}</span>
                    {selectedId === item.id && <span className="absolute right-1.5 top-1.5 rounded-full bg-blue-700 p-1 text-white"><Check className="h-3 w-3" /></span>}
                  </button>
                ))}
              </div>
            )}
            {selectedItem && (
              <button type="button" onClick={() => { onSelectMedia(selectedItem); close(); }} className="mt-4 w-full rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-800">
                {buttonLabel}
              </button>
            )}
          </section>}
        </div>
      </div>
    </div>
  );
}
