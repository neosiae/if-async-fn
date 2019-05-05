# if-async-fn
Check if given function is asynchronous function or not.

## Install

> $ npm install if-async-fn

## Usage

```javascript
const ifAsyncFn = require('if-async-fn');

ifAsyncFn(async () => ()) // true

ifAsyncFn(() => ()) // false
```
