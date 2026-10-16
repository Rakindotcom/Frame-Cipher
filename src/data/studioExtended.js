// Merged studio extended content: unique BDT pricing + long-form sections.
// Import per-cluster files to keep bundles small; this index merges them.
import extendedA from './studioExtendedA'
import extendedB from './studioExtendedB'
import extendedC from './studioExtendedC'
import extendedD from './studioExtendedD'

export const studioExtended = {
  ...extendedA,
  ...extendedB,
  ...extendedC,
  ...extendedD,
}

export function getStudioExtended(slug) {
  return studioExtended[slug] || null
}

export default studioExtended
