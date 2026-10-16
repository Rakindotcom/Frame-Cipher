export function extractYouTubeVideoId(input: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  const iframeMatch = trimmed.match(/<iframe\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/i);
  const targetUrl = iframeMatch ? iframeMatch[1] : trimmed;

  try {
    const parsed = new URL(targetUrl.startsWith("http") ? targetUrl : `https://${targetUrl}`);
    const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
    if (!["youtube.com", "youtu.be", "youtube-nocookie.com", "m.youtube.com"].includes(host)) {
      return null;
    }

    if (parsed.searchParams.has("v")) {
      const v = parsed.searchParams.get("v");
      if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v;
    }

    if (host === "youtu.be") {
      const pathId = parsed.pathname.slice(1).split("/")[0];
      if (pathId && /^[a-zA-Z0-9_-]{11}$/.test(pathId)) return pathId;
    }

    const pathParts = parsed.pathname.split("/").filter(Boolean);
    if (pathParts.length >= 2 && ["embed", "shorts", "v"].includes(pathParts[0])) {
      const id = pathParts[1];
      if (id && /^[a-zA-Z0-9_-]{11}$/.test(id)) return id;
    }
  } catch {
    const match = trimmed.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    if (match && match[1]) return match[1];
  }

  return null;
}

export function isValidFontSize(value: string): boolean {
  if (!value) return false;
  const clean = value.trim().toLowerCase();
  // Validates px, rem, em, %, pt, or plain integer between 8 and 120
  return /^(?:[8-9]|[1-9][0-9]|1[0-1][0-9]|120)(?:\.[0-9]+)?(?:px|rem|em|pt|%)?$/i.test(clean);
}

export function normalizeFontSize(value: string | number): string {
  const str = String(value).trim().toLowerCase();
  if (!str) return "";
  if (/^\d+(?:\.\d+)?$/.test(str)) {
    return `${str}px`;
  }
  return str;
}

export function isValidLinkUrl(url: string): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  // Disallow javascript:, data:, vbscript: schemes
  if (/^(?:javascript|data|vbscript):/i.test(trimmed)) return false;
  // Allow relative URLs, fragments, mailto, tel, http, https
  if (/^(\/|#|\?|mailto:|tel:|https?:\/\/)/i.test(trimmed)) return true;
  // If it's a domain-like string (e.g. example.com), allow it
  return !/^[a-z0-9+.-]+:/i.test(trimmed) || /^https?:\/\//i.test(trimmed);
}

const ALLOWED_TAGS = /<(?!\/?(?:p|div|span|br|strong|b|em|i|u|s|sub|sup|h1|h2|h3|h4|h5|h6|ul|ol|li|blockquote|pre|code|figure|figcaption|img|a|hr|table|caption|colgroup|col|thead|tbody|tfoot|tr|th|td|iframe)\b)[^>]*>/gi;

/** Join a pasted sentence that a document editor split into two paragraphs. */
export function mergePastedParagraphBreaks(html: string): string {
  const adjacentParagraphs = /(<p\b[^>]*>[\s\S]*?)(<\/p>)(\s*)(<p\b[^>]*>)([\s\S]*?<\/p>)/gi;
  let result = html;
  let previous: string;

  do {
    previous = result;
    result = result.replace(adjacentParagraphs, (match, first, _closing, _space, _opening, second) => {
      const before = first.replace(/<[^>]+>/g, "").replace(/&nbsp;/gi, " ").trimEnd();
      const after = second.replace(/<[^>]+>/g, "").replace(/&nbsp;/gi, " ");
      if (!before || /[.!?;:।॥…][\s"'”’)]*$/.test(before) || !/^[\s\u00a0]+[a-z]/i.test(after)) {
        return match;
      }
      return `${first}${second}`;
    });
  } while (result !== previous);

  return result;
}

/** Ensures all tables are wrapped in a horizontally scrollable responsive container on mobile. */
export function wrapTablesWithResponsiveContainer(html: string): string {
  if (!html || !html.includes("<table")) return html;

  // Unwrap any previous wrapper structure to avoid nested duplicates
  const unwrapped = html.replace(
    /<div[^>]*class=["'][^"']*blog-table-wrapper[^"']*["'][^>]*>\s*<div[^>]*class=["'][^"']*blog-table-scroll[^"']*["'][^>]*>([\s\S]*?<\/table>)\s*<\/div>(?:\s*<div[^>]*class=["'][^"']*blog-table-hint[^"']*["'][\s\S]*?<\/div>)?\s*<\/div>/gi,
    "$1"
  );

  return unwrapped.replace(
    /(<table\b[\s\S]*?<\/table>)/gi,
    '<div class="blog-table-wrapper"><div class="blog-table-scroll">$1</div><div class="blog-table-hint"><span>↔ Scroll horizontally to view full table</span></div></div>'
  );
}

/** Keep editor HTML useful while removing executable markup and event handlers. */
export function sanitizeBlogHtml(html: string): string {
  if (!html) return "";

  // Sanitize iframes: restrict solely to approved YouTube hosts and normalize attributes
  let processed = html.replace(/<iframe\b([^>]*)>(?:<\/iframe>)?/gi, (_match, attrs) => {
    const srcMatch = attrs.match(/\bsrc=["']([^"']+)["']/i);
    if (!srcMatch) return "";
    const videoId = extractYouTubeVideoId(srcMatch[1]);
    if (!videoId) return "";
    return `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`;
  });

  const cleaned = mergePastedParagraphBreaks(processed
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s(?:href|src)\s*=\s*(["'])\s*javascript:[\s\S]*?\1/gi, "")
    .replace(/\sstyle\s*=\s*(["'])([\s\S]*?)\1/gi, (match, _quote, styleContent) => {
      // Disallow dangerous CSS expressions and URL imports
      if (/(?:expression|javascript|behavior|@import|url\s*\()/i.test(styleContent)) {
        return "";
      }

      // Remove black / dark inline text colors and external formatting from Google Docs/Word
      let cleanedStyle = styleContent
        .replace(/color\s*:\s*(?:rgb\(\s*0\s*,\s*0\s*,\s*0\s*\)|rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*[^)]+\)|#000(?:000)?\b|black\b|rgb\(\s*(?:[0-9]|[1-4][0-9]|5[0-9])\s*,\s*(?:[0-9]|[1-4][0-9]|5[0-9])\s*,\s*(?:[0-9]|[1-4][0-9]|5[0-9])\s*\))\s*;?/gi, "")
        .replace(/background(?:-color)?\s*:\s*(?:transparent|#fff(?:fff)?\b|white\b|rgb\(\s*255\s*,\s*255\s*,\s*255\s*\))\s*;?/gi, "")
        .replace(/font-family\s*:\s*[^;]+;?/gi, "")
        .replace(/font-size\s*:\s*(?:[0-9.]+pt|[0-9.]+px)\s*;?/gi, "")
        .replace(/line-height\s*:\s*[^;]+;?/gi, "")
        .replace(/text-align\s*:\s*justify\s*;?/gi, "")
        .replace(/margin-(?:top|bottom|left|right)\s*:\s*[^;]+;?/gi, "")
        .replace(/white-space\s*:\s*[^;]+;?/gi, "")
        .replace(/(?:min-|max-)?width\s*:\s*(?:[0-9.]+(?:px|pt|em|rem|vw)|auto|max-content|min-content)\s*;?/gi, "")
        .replace(/overflow(?:-[xy])?\s*:\s*[^;]+;?/gi, "")
        .replace(/vertical-align\s*:\s*baseline;?/gi, "")
        .replace(/font-variant\s*:\s*[^;]+;?/gi, "")
        .replace(/letter-spacing\s*:\s*[^;]+;?/gi, "")
        .replace(/word-spacing\s*:\s*[^;]+;?/gi, "")
        .trim();

      // Clean dangling semicolons
      cleanedStyle = cleanedStyle.replace(/^;+|;+$/g, "").trim();

      if (!cleanedStyle) return "";
      return ` style="${cleanedStyle}"`;
    })
    .replace(ALLOWED_TAGS, "")
    .replace(/javascript:/gi, "")
    .replace(/\btext-\[#1D4ED8\]\b/g, "text-[#A855F7]"));

  return wrapTablesWithResponsiveContainer(cleaned);
}
