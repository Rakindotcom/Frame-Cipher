const ALLOWED_TAGS = /<(?!\/?(?:p|div|span|br|strong|b|em|i|u|s|h1|h2|h3|h4|h5|h6|ul|ol|li|blockquote|pre|code|figure|figcaption|img|a|hr|table|caption|colgroup|col|thead|tbody|tfoot|tr|th|td)\b)[^>]*>/gi;

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

/** Keep editor HTML useful while removing executable markup and event handlers. */
export function sanitizeBlogHtml(html: string): string {
  return mergePastedParagraphBreaks(html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s(?:href|src)\s*=\s*(["'])\s*javascript:[\s\S]*?\1/gi, "")
    .replace(ALLOWED_TAGS, "")
    .replace(/javascript:/gi, ""));
}
