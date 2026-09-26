import fs from "node:fs";
import path from "node:path";
import { FRAMECIPHER_REGISTRY } from "@/lib/registry/servicesRegistry";

const SCAN_ROOTS = ["app", "src"];
const SCAN_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs"]);
const IGNORED_DIRECTORIES = new Set([
  "node_modules",
  ".next",
  ".git",
  "out",
  "dist",
  "coverage",
  ".turbo",
]);

/**
 * Dynamic segments render through a shared template, so schema support is a
 * property of the template, not of each individual slug.
 */
const SCHEMA_TEMPLATES: Record<string, string> = {
  "/services": "app/services/[...slug]/page.jsx",
  "/case-studies": "app/case-studies/[slug]/page.jsx",
  "/blog": "src/components/blog/BlogPostClientView.tsx",
  "/authors": "app/authors/[slug]/page.tsx",
};

export interface RouteAudit {
  href: string;
  title: string;
  pillar: string;
  type: string;
  inboundLinks: number;
  linkingFiles: string[];
  hasSchema: boolean;
  isOrphan: boolean;
  isBroken: boolean;
  brokenReason: string | null;
}

export interface SiteLinkAudit {
  routes: RouteAudit[];
  totalRoutes: number;
  brokenCount: number;
  orphanCount: number;
  routesWithSchema: number;
  totalInboundLinks: number;
  scannedFiles: number;
  generatedAt: string;
}

function walkFiles(root: string): string[] {
  const absoluteRoot = path.join(process.cwd(), root);
  if (!fs.existsSync(absoluteRoot)) return [];

  const found: string[] = [];
  const queue: string[] = [absoluteRoot];

  while (queue.length > 0) {
    const current = queue.pop() as string;
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (IGNORED_DIRECTORIES.has(entry.name)) continue;
        queue.push(full);
        continue;
      }
      if (entry.isFile() && SCAN_EXTENSIONS.has(path.extname(entry.name))) {
        found.push(full);
      }
    }
  }

  return found;
}

function toRepoPath(absolutePath: string): string {
  return path.relative(process.cwd(), absolutePath).split(path.sep).join("/");
}

const HREF_PATTERN = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*["'`]([^"'`]+)["'`]\s*\})/g;
const PUSH_PATTERN = /router\.push\(\s*["'`]([^"'`]+)["'`]\s*\)/g;
const CANONICAL_PATTERN = /canonical\s*[:=]\s*["'`]([^"'`]+)["'`]/g;

function isInternalLink(target: string): boolean {
  if (!target) return false;
  if (!target.startsWith("/")) return false;
  if (target.startsWith("//")) return false;
  if (target.startsWith("/api/")) return false;
  if (target.startsWith("/_next/")) return false;
  if (target.startsWith("/admin")) return false;
  if (target.includes("{") || target.includes("}") || target.includes("$")) return false;
  return true;
}

function normaliseTarget(target: string): string {
  const withoutQuery = target.split("?")[0].split("#")[0];
  if (withoutQuery.length > 1 && withoutQuery.endsWith("/")) {
    return withoutQuery.slice(0, -1);
  }
  return withoutQuery;
}

function collectInternalLinks(filePaths: string[]): Map<string, Set<string>> {
  const inbound = new Map<string, Set<string>>();

  for (const filePath of filePaths) {
    let contents: string;
    try {
      contents = fs.readFileSync(filePath, "utf-8");
    } catch {
      continue;
    }

    const repoPath = toRepoPath(filePath);
    const matches: string[] = [];

    for (const pattern of [HREF_PATTERN, PUSH_PATTERN, CANONICAL_PATTERN]) {
      pattern.lastIndex = 0;
      let match = pattern.exec(contents);
      while (match !== null) {
        const target = match[1] ?? match[2] ?? match[3];
        if (target && isInternalLink(target)) matches.push(normaliseTarget(target));
        match = pattern.exec(contents);
      }
    }

    for (const target of matches) {
      if (!inbound.has(target)) inbound.set(target, new Set());
      inbound.get(target)?.add(repoPath);
    }
  }

  return inbound;
}

function templateSupportsSchema(href: string, fileContents: Map<string, string>): boolean {
  const segment = `/${href.split("/")[1] || ""}`;
  const template = SCHEMA_TEMPLATES[segment];
  if (!template) return false;
  const contents = fileContents.get(template);
  if (!contents) return false;
  return contents.includes("application/ld+json");
}

function readFileMap(filePaths: string[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const filePath of filePaths) {
    try {
      map.set(toRepoPath(filePath), fs.readFileSync(filePath, "utf-8"));
    } catch {}
  }
  return map;
}

function loadBackingPaths(): Set<string> {
  const known = new Set<string>();

  const serviceDataPath = path.join(process.cwd(), "src", "data", "servicePagesData.json");
  if (fs.existsSync(serviceDataPath)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(serviceDataPath, "utf-8"));
      if (Array.isArray(parsed)) {
        for (const entry of parsed) {
          if (entry && typeof entry.fullPath === "string") {
            known.add(normaliseTarget(entry.fullPath));
          }
        }
      }
    } catch {}
  }

  return known;
}

/**
 * Walks the real repository to measure internal link equity and schema coverage.
 * Nothing here is estimated: inbound link counts come from actual `href`
 * occurrences, and schema support from actual JSON-LD in the rendering template.
 */
export function auditSiteLinks(): SiteLinkAudit {
  const filePaths = SCAN_ROOTS.flatMap((root) => walkFiles(root));
  const fileContents = readFileMap(filePaths);
  const inbound = collectInternalLinks(filePaths);
  const backingPaths = loadBackingPaths();

  const routes: RouteAudit[] = FRAMECIPHER_REGISTRY.map((item) => {
    const href = normaliseTarget(item.href);
    const linkingFiles = [...(inbound.get(href) ?? new Set<string>())].sort();
    const inboundLinks = linkingFiles.length;

    let isBroken = false;
    let brokenReason: string | null = null;

    if (href.startsWith("/services/") && backingPaths.size > 0 && !backingPaths.has(href)) {
      isBroken = true;
      brokenReason = "No matching record in src/data/servicePagesData.json";
    }

    return {
      href,
      title: item.title,
      pillar: item.category,
      type: item.type,
      inboundLinks,
      linkingFiles,
      hasSchema: templateSupportsSchema(href, fileContents),
      isOrphan: inboundLinks === 0,
      isBroken,
      brokenReason,
    };
  });

  return {
    routes,
    totalRoutes: routes.length,
    brokenCount: routes.filter((route) => route.isBroken).length,
    orphanCount: routes.filter((route) => route.isOrphan).length,
    routesWithSchema: routes.filter((route) => route.hasSchema).length,
    totalInboundLinks: routes.reduce((sum, route) => sum + route.inboundLinks, 0),
    scannedFiles: filePaths.length,
    generatedAt: new Date().toISOString(),
  };
}
