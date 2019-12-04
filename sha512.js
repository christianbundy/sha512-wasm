
module.exports = loadWebAssembly

loadWebAssembly.supported = typeof WebAssembly !== 'undefined'

function loadWebAssembly (opts) {
  if (!loadWebAssembly.supported) return null

  var imp = opts && opts.imports
  var wasm = toUint8Array('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gp7khH9CAIU3A9ADIABBwABqQuzzkNOBwcDjjH9CAIU3A9gDIABBwABqQqi8jJui/7/fkH9CAIU3A+ADIABBwABqQun7ivS9nZuopH9CAIU3A+gDIABBwABqQpXymZb7/uj8vn9CAIU3A/ADIABBwABqQqumyZuunt64RkIAhTcD+AMgAEHAAGpCnMOZ0e7Zz5NKQgCFNwOABCAAQcAAakKHhIOO8piuw1FCAIU3A4gEIABBwABqQp7Wg+/sup/takIAhTcDkAQgAEHAAGpC+KK78/7v0751QgCFNwOYBCAAQcAAakK6392Qp/WZ+AZCAIU3A6AEIABBwABqQqaxopbauN+xCkIAhTcDqAQgAEHAAGpCrpvk98uA5p8RQgCFNwOwBCAAQcAAakKbjvGY0ebCuBtCAIU3A7gEIABBwABqQoT7kZjS/t3tKEIAhTcDwAQgAEHAAGpCk8mchrTvquUyQgCFNwPIBCAAQcAAakK8/aauocGvzzxCAIU3A9AEIABBwABqQsyawODJ+NmOwwBCAIU3A9gEIABBwABqQraF+dnsl/XizABCAIU3A+AEIABBwABqQqr8lePPs8q/2QBCAIU3A+gEIABBwABqQuz129az9dvl3wBCAIU3A/AEIABBwABqQpewndLEsYai7ABCAIU3A/gEIABBwAVqQgA3AwAgAEHABWpCADcDCCAAQcAFakIANwMQIABBwAVqQgA3AxggAEHABWpCADcDICAAQcAFakIANwMoIABBwAVqQgA3AzAgAEHABWpCADcDOCAAQcAFakIANwNAIABBwAVqQgA3A0ggAEHABWpCADcDUCAAQcAFakIANwNYIABBwAVqQgA3A2AgAEHABWpCADcDaCAAQcAFakIANwNwIABBwAVqQgA3A3ggAEF/NgLABiAAQQA2AsgGCxAAIAAgAYMgAEJ/hSACg4ULEwAgACABgyABIAKDhSAAIAKDhQsTACAAQhyKIABCIoqFIABCJ4qFCxMAIABCDoogAEISioUgAEIpioULEwAgAEIBiiAAQgiKhSAAQgeIhQsTACAAQhOKIABCPYqFIABCBoiFC4MBAQJ/IAAoAoABQX9GBEAgACABNgKAAQsgACACNgKEAUEHIQNBhwEhBAJAA0AgASACRg0BIAMgBEYEQCAEQYABaiEEIAAQEgwBCyAAIANBgAFwaiAB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')
  var ready = null

  var mod = {
    buffer: wasm,
    memory: null,
    exports: null,
    realloc: realloc,
    onload: onload
  }

  onload(function () {})

  return mod

  function realloc (size) {
    mod.exports.memory.grow(Math.max(0, Math.ceil(Math.abs(size - mod.memory.length) / 65536)))
    mod.memory = new Uint8Array(mod.exports.memory.buffer)
  }

  function onload (cb) {
    if (mod.exports) return cb()

    if (ready) {
      ready.then(cb.bind(null, null)).catch(cb)
      return
    }

    try {
      if (opts && opts.async) throw new Error('async')
      setup({instance: new WebAssembly.Instance(new WebAssembly.Module(wasm), imp)})
    } catch (err) {
      ready = WebAssembly.instantiate(wasm, imp).then(setup)
    }

    onload(cb)
  }

  function setup (w) {
    mod.exports = w.instance.exports
    mod.memory = mod.exports.memory && mod.exports.memory.buffer && new Uint8Array(mod.exports.memory.buffer)
  }
}

function toUint8Array (s) {
  if (typeof atob === 'function') return new Uint8Array(atob(s).split('').map(charCodeAt))
  return (require('buf' + 'fer').Buffer).from(s, 'base64')
}

function charCodeAt (c) {
  return c.charCodeAt(0)
}
