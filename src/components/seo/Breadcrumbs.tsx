import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbItem } from "@/types/seo";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8 ${className}`}
    >
      <ol className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto list-none p-0 m-0">
        {items.map((crumb, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={crumb.url || idx} className="flex items-center gap-2 shrink-0">
              {idx > 0 && (
                <ChevronRight className="h-3 w-3 text-frame-muted shrink-0" aria-hidden="true" />
              )}
              {isLast ? (
                <span
                  className="text-frame-fg font-bold truncate max-w-[200px] sm:max-w-xs"
                  aria-current="page"
                >
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.url}
                  className="transition hover:text-frame-fg truncate max-w-[150px] sm:max-w-none"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
