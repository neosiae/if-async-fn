# if-async-fn

[![Build Status](https://travis-ci.com/neosiae/if-async-fn.svg?branch=master)](https://travis-ci.com/neosiae/if-async-fn)

Check if given function is asynchronous function or not.

## Install

> $ npm install if-async-fn

## Usage

```javascript
const ifAsyncFn = require('if-async-fn');

ifAsyncFn(async () => ()) // true

ifAsyncFn(() => ()) // false
```
