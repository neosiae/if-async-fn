module.exports = ifAsyncFn

const AsyncFunction = async function () {}.constructor

function ifAsyncFn (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function, but got: ${typeof fn}`)
  }

  return fn instanceof AsyncFunction
}
