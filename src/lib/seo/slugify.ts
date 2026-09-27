import { useState } from "react";

/**
 * Builds a lowercase, URL-safe slug.
 *
 * Used by the admin dashboard so blog and author URLs are generated
 * automatically from the heading/name, and stay lowercase.
 */
export function slugify(value: string, fallback = ""): string {
  const slug = (value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || fallback;
}

/**
 * Keeps a manually typed slug lowercase and URL-safe while the user types.
 * Looser than `slugify` so leading/trailing hyphens are not fought with
 * mid-edit; the value is fully normalized when editing is committed.
 */
export function sanitizeSlugInput(value: string): string {
  return (value || "").toLowerCase().replace(/[^a-z0-9-]/g, "-");
}

interface UseAutoSlugOptions {
  /** Heading or name the slug is derived from. */
  source: string;
  /** Slug that already exists, if the record is being edited. */
  initialSlug?: string;
  /** Used when the slug ends up empty. */
  fallback?: string;
}

/**
 * Slug state that follows a heading until it is overridden by hand.
 *
 * - New record: the slug tracks `source` live as it is typed.
 * - Existing record: the stored slug is kept, so editing a heading does not
 *   silently change a published URL.
 * - Manual edit: `startEditing` reveals an input; the value is sanitized to
 *   lowercase as it is typed and normalized when editing is committed. It may be
 *   made any length, shorter or longer than the generated one.
 * - `resetToAuto` hands control back to `source`.
 */
export function useAutoSlug({ source, initialSlug = "", fallback = "" }: UseAutoSlugOptions) {
  const [manualSlug, setManualSlug] = useState<string | null>(initialSlug.trim() || null);
  const [isEditing, setIsEditing] = useState(false);

  const autoSlug = slugify(source);
  const slug = manualSlug === null ? autoSlug : manualSlug;
  const finalSlug = slug || fallback;

  const startEditing = () => {
    if (manualSlug === null) setManualSlug(autoSlug);
    setIsEditing(true);
  };

  const setSlug = (value: string) => {
    setManualSlug(sanitizeSlugInput(value));
  };

  const stopEditing = () => {
    setManualSlug((current) => slugify(current || "") || null);
    setIsEditing(false);
  };

  const resetToAuto = () => {
    setManualSlug(null);
  };

  return {
    slug,
    finalSlug,
    autoSlug,
    isEditing,
    isOverridden: manualSlug !== null,
    setSlug,
    startEditing,
    stopEditing,
    resetToAuto,
  };
}
