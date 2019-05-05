module.exports = ifAsyncFn

const AsyncFunction = async function () {}.constructor

function ifAsyncFn (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('The function provided is not a function.')
  }

  return fn instanceof AsyncFunction
}
