const test = require('tape')
const ifAsyncFn = require('./index.js')

test('async function', t => {
  async function asyncFn () {}

  t.equal(ifAsyncFn(asyncFn), true)
  t.end()
})

test('anonymous async function', t => {
  t.equal(ifAsyncFn(async () => {}), true)
  t.end()
})

test('function', t => {
  function syncFn () {}

  t.equal(ifAsyncFn(syncFn), false)
  t.end()
})

test('anonymous function', t => {
  t.equal(ifAsyncFn(() => {}), false)
  t.end()
})

test('type error', t => {
  t.throws(() => ifAsyncFn(true))
  t.end()
})
