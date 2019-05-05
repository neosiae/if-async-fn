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

test('sync function', t => {
  function syncFn () {}

  t.equal(ifAsyncFn(syncFn), false)
  t.end()
})

test('anonymous sync function', t => {
  t.equal(ifAsyncFn(() => {}), false)
  t.end()
})
