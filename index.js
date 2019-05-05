module.exports = ifAsyncFn

const AsyncFunction = async function () {}.constructor
const AsyncGenerator = async function * () {}.constructor

function ifAsyncFn (fn) {
  return fn instanceof AsyncFunction || fn instanceof AsyncGenerator
}
