module.exports = ifAsyncFn

const AsyncFunction = async function () {}.constructor

function ifAsyncFn (fn) {
  return fn instanceof AsyncFunction
}
