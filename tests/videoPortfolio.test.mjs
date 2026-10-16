import assert from 'node:assert/strict'
import {
  longVideos,
  shortVideos,
  allVideos,
  getVideosByCategory,
} from '../src/data/videoProjects.js'

console.log('Testing videoProjects database and category resolvers...')

// 1. Verify counts
assert.equal(longVideos.length, 5, 'Should have 5 long videos')
assert.equal(shortVideos.length, 16, 'Should have 16 short videos (9 product promos + 7 podcast/creator shorts)')
assert.equal(allVideos.length, 21, 'Total video count should be 21')

// 2. Verify all user provided YouTube IDs are present
const expectedUserIds = [
  'rAJrl33t60c',
  'ZoZPZ-th318',
  'x0BlMjfWDaA',
  'TFh5MQoNy-s',
  'Fm8iJWOLByM',
  'CTBJ3ZiYerI',
  'Ocf0FoD_bPw',
  '1_4E__15qlQ',
  'S7NU0YdlS_Q',
]

expectedUserIds.forEach((id) => {
  const found = shortVideos.find((v) => v.videoId === id)
  assert.ok(found, `User video ID ${id} must exist in shortVideos`)
  assert.equal(found.isShort, true, `Video ${id} must have isShort = true`)
  assert.ok(found.thumbnailUrl.includes(id), `Thumbnail URL must match video ID ${id}`)
})

// 3. Verify no duplicate IDs within shortVideos
const shortIds = shortVideos.map((v) => v.videoId)
const uniqueShortIds = new Set(shortIds)
assert.equal(shortIds.length, uniqueShortIds.size, 'There should be no duplicate video IDs in shortVideos')

// 4. Test Category Resolvers
const productPromos = getVideosByCategory('product-promotion', 10)
assert.ok(productPromos.length >= 8, 'Product promotion category should return matching reels')
console.log('Product Promos count:', productPromos.length)

const podcastVideos = getVideosByCategory('podcast', 10)
assert.ok(podcastVideos.length >= 5, 'Podcast category should return podcast videos')
console.log('Podcast Videos count:', podcastVideos.length)

const commercialVideos = getVideosByCategory('commercial', 10)
assert.ok(commercialVideos.length >= 5, 'Commercial category should return commercial videos')
console.log('Commercial Videos count:', commercialVideos.length)

console.log('All video projects and category tests passed successfully!')
