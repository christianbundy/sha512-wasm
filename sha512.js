
module.exports = loadWebAssembly

loadWebAssembly.supported = typeof WebAssembly !== 'undefined'

function loadWebAssembly (opts) {
  if (!loadWebAssembly.supported) return null

  var imp = opts && opts.imports
  var wasm = toUint8Array('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IQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAQfEHAACkDCHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCARfEHAACkDEHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCASfEHAACkDGHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCATfEHAACkDIHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAUfEHAACkDKHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAVfEHAACkDMHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAWfEHAACkDOHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAXfEHAACkDQHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAYfEHAACkDSHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAZfEHAACkDUHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAafEHAACkDWHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAbfEHAACkDYHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAcfEHAACkDaHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqFIAVCKYqFIQ4gCCALfCAOfCAdfEHAACkDcHwhCSANIAx8IQogByEIIAYhByAFIQYgBCAJfCEFIAMhBCACIQMgASECIAkgCnwhASAFIAYgBxAKIQsgASACIAMQCyEMIAFCHIogAUIiioUgAUInioUhDSAFQg6KIAVCEoqF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')
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
