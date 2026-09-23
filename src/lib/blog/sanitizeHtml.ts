const ALLOWED_TAGS = /<(?!\/?(?:p|br|strong|b|em|i|u|s|h1|h2|h3|h4|h5|h6|ul|ol|li|blockquote|pre|code|figure|figcaption|img|a|hr)\b)[^>]*>/gi;

/** Keep editor HTML useful while removing executable markup and event handlers. */
export function sanitizeBlogHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s(?:href|src)\s*=\s*(["'])\s*javascript:[\s\S]*?\1/gi, "")
    .replace(ALLOWED_TAGS, "")
    .replace(/javascript:/gi, "");
}
