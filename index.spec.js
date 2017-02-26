'use strict'
/* global describe, it */

const { readJson } = require('./index')
const { assert } = require('chai')

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(readJson('./test.json', [ 'a' ]), [ 1 ])
    assert.deepEqual(readJson('./test.json', [ 'b', 'c.d' ]), [ 2, 3 ])
    assert.deepEqual(readJson('./test.json', [ 'c.e.f' ]), [ 4 ])
    assert.deepEqual(readJson('./test.json', [ 'c.e' ]), [ { f: 4 } ])
  })
})
