// The source documents contain editorial instructions as well as customer copy.
// Normalize once at the data boundary so page text, metadata and JSON-LD agree.
export function cleanServiceText(value) {
  return String(value ?? '')
    .replace(/\[PLACEHOLDER\b[^\]]*\]/gi, '')
    .replace(/(?:^|\n)[ \t]*Notes? for you before publishing:[\s\S]*$/i, '')
    .replace(/^[ \t]*_{3,}[ \t]*$/gm, '')
    .replace(/^[ \t]*\[(?:get|book|request|talk|see|start|view)[^\]\n]*\][ \t]*$/gim, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\s+What We Do\s+/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export function isPlaceholderPrice(value) {
  return /[৳$€£]\s*X[\dX,.+–—\-\s]*|\b(?:TBD|TBC)\b/i.test(String(value ?? ''))
}

export function normalizePricingTable(table) {
  if (!table?.headers?.length || !table.rows?.length) return null

  const flattened = table.headers.length === 2 && !table.headers[0] &&
    table.rows.every((row) => row.length === 2 && !row[0])
  if (!flattened) {
    return {
      ...table,
      headers: table.headers.map(cleanServiceText),
      rows: table.rows.map((row) => row.map(cleanPricingCell)),
      note: cleanServiceText(table.note),
    }
  }

  // The document export puts successive cells in a single column. The first
  // label identifies a two-column range list or a four-column comparison.
  const cells = [table.headers[1], ...table.rows.map((row) => row[1])]
  const rangeList = /^Typical Range$/i.test(cells[0])
  const columns = rangeList ? 2 : 4
  const firstHeader = rangeList ? 'Service' :
    /^(Starting Price|Management Fee)$/i.test(cells[0]) ? 'Package' : 'Features'
  const headers = [firstHeader, ...cells.splice(0, columns - 1)].map(cleanServiceText)
  const trailingCount = cells.length % columns
  const trailing = trailingCount ? cells.splice(-trailingCount) : []
  // Standalone document CTA cells and unfinished section headings aren't notes.
  const note = trailing.filter((cell) =>
    !/^(Order Now|Included at every tier:?)$/i.test(cell.trim())
  ).map(cleanServiceText).join(' ')
  const rows = []
  for (let index = 0; index < cells.length; index += columns) {
    rows.push(cells.slice(index, index + columns).map(cleanPricingCell))
  }
  return { headers, rows, note }
}

function cleanPricingCell(value) {
  return isPlaceholderPrice(value) ? 'Request a quote' : cleanServiceText(value)
}

function cleanTree(value) {
  if (typeof value === 'string') return cleanServiceText(value)
  if (Array.isArray(value)) return value.map(cleanTree).filter((item) => item !== '')
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, cleanTree(item)]))
  }
  return value
}

export function normalizeServicePage(source) {
  const page = cleanTree(source)
  // Captions, CTA labels and truncated fragments were incorrectly imported as
  // pull quotes. Keep complete editorial quotes, omit the corrupted fragments.
  const quote = page.quote || ''
  page.quote = quote.length >= 75 && /^[A-Z]/.test(quote) && /[.!?]$/.test(quote) &&
    !/\bexamples? showing\b|Notes? for you before publishing/i.test(quote)
    ? quote : ''

  if (source.pricing) {
    const table = normalizePricingTable(source.pricing.table)
    page.pricing = {
      ...page.pricing,
      table,
      packages: (page.pricing.packages || []).map((pkg) => {
        const column = table?.headers.indexOf(pkg.name) ?? -1
        const priceRow = table?.rows.find((row) => /^Starting Price$/i.test(row[0]))
        const pageCountRow = table?.rows.find((row) => /^Page Count$/i.test(row[0]))
        return {
          ...pkg,
          price: isPlaceholderPrice(pkg.price)
            ? (column > 0 && priceRow?.[column]) || 'Request a quote' : pkg.price,
          features: (pkg.features || []).map((feature) => feature.replace(
            /\(up to X pages\)/i,
            column > 0 && pageCountRow?.[column] ? `(${pageCountRow[column]})` : '(scope agreed before work begins)'
          )),
        }
      }),
    }
  }
  return page
}
