import { renderContextualParagraph } from '../../lib/seo/contextualParagraphLinks'

/**
 * Server-side wrapper that upgrades a paragraph's text with contextual
 * internal links. It is deliberately tiny so it can be dropped around any
 * existing paragraph child without changing the markup:
 *
 *   <p className="…"><AutoLinks currentPath="/services/seo">{text}</AutoLinks></p>
 *
 * It renders the exact same string when there is nothing to link, so adding it
 * is visually a no-op. Anchors are resolved from `internalLinkIndex.js` and the
 * curated tier-3 dictionary; `allowed` optionally restricts the paragraph to a
 * page-level plan so a destination is linked at most once per page.
 */
export function AutoLinks({ currentPath = '', allowed = null, maxLinks = 1, theme = 'frame', children }) {
  if (typeof children !== 'string' || !children.trim()) return children
  return renderContextualParagraph(children, { currentPath, allowed, maxLinks, theme })
}

export default AutoLinks
