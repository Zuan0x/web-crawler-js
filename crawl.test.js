const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
const { argv } = require('node:process');

test('normalizeURL protocol', () => {
  const input = 'https://blog.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL slash', () => {
  const input = 'https://blog.boot.dev/path/'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
  const input = 'https://BLOG.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL http', () => {
  const input = 'http://BLOG.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL www', () => {
  const input = 'http://www.BLOG.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})

test('getURLsFromHTML', () => {
  const input = `
	<html>
	  <body>
		<a href="https://blog.boot.dev/path">Link</a>
	  </body>
	</html>
  `
  const actual = getURLsFromHTML(input)
  const expected = ['https://blog.boot.dev/path']
  expect(actual).toEqual(expected)
})
