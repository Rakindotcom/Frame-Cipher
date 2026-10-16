import test from 'node:test'
import assert from 'node:assert/strict'
import React from 'react'
import {
  renderContextualParagraph,
  CONTEXTUAL_LINK_RULES,
} from '../src/lib/seo/contextualParagraphLinks.jsx'

test('CONTEXTUAL_LINK_RULES is populated with valid links and non-empty phrases', () => {
  assert.ok(CONTEXTUAL_LINK_RULES.length > 20, 'Expected >20 contextual linking rules')
  for (const rule of CONTEXTUAL_LINK_RULES) {
    assert.ok(rule.href.startsWith('/'), `Rule href must start with /: ${rule.href}`)
    assert.ok(rule.phrases.length > 0, `Rule must have phrases: ${rule.href}`)
  }
})

test('renderContextualParagraph returns raw text if no match or empty', () => {
  assert.equal(renderContextualParagraph(''), '')
  assert.equal(renderContextualParagraph(null), null)
  assert.equal(
    renderContextualParagraph('A plain sentence with no digital keywords at all.'),
    'A plain sentence with no digital keywords at all.'
  )
})

test('renderContextualParagraph converts keyword into Link and preserves case', () => {
  const input = 'We build high-converting landing pages for direct-to-consumer brands.'
  const res = renderContextualParagraph(input, { currentSlug: 'meta-ads' })

  // Since it returns <>{nodes}</>, check its children
  assert.ok(React.isValidElement(res), 'Result should be a React element')
  const children = React.Children.toArray(res.props.children)
  assert.ok(children.length >= 2, 'Should contain text slices and a link')

  const linkEl = children.find((c) => React.isValidElement(c) && c.props.href)
  assert.ok(linkEl, 'Should contain a Link element')
  assert.equal(linkEl.props.href, '/services/website-design-development/landing-pages')
  assert.equal(linkEl.props.children, 'high-converting landing pages')
})

test('renderContextualParagraph does not self-link when currentSlug matches', () => {
  const input = 'We build high-converting landing pages for direct-to-consumer brands.'
  const res = renderContextualParagraph(input, {
    currentSlug: 'website-design-development/landing-pages',
  })
  // Should NOT link to landing-pages
  assert.equal(res, input)
})

test('renderContextualParagraph respects maxLinks parameter', () => {
  const input =
    'Our agency combines Meta ads, Google ads, and video production under one roof.'
  const res = renderContextualParagraph(input, { maxLinks: 1 })
  assert.ok(React.isValidElement(res))
  const children = React.Children.toArray(res.props.children)
  const links = children.filter((c) => React.isValidElement(c) && c.props.href)
  assert.equal(links.length, 1, 'Should only inject 1 link when maxLinks=1')
})
