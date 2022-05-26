["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/collections/maps.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.collections.maps\");\n  goog.module.declareLegacyNamespace();\n  class MapLike {\n    constructor() {\n      this.size;\n    }\n    set(key, val) {\n    }\n    get(key) {\n    }\n    keys() {\n    }\n    values() {\n    }\n    has(key) {\n    }\n  }\n  exports.MapLike = MapLike;\n  function setAll(map, entries) {\n    if (!entries) {\n      return;\n    }\n    for (const [k, v] of entries) {\n      map.set(k, v);\n    }\n  }\n  exports.setAll = setAll;\n  function hasValue(map, val, valueEqualityFn = defaultEqualityFn) {\n    for (const v of map.values()) {\n      if (valueEqualityFn(v, val)) {\n        return true;\n      }\n    }\n    return false;\n  }\n  exports.hasValue = hasValue;\n  const defaultEqualityFn = (a, b) => a === b;\n  function equals(map, otherMap, valueEqualityFn = defaultEqualityFn) {\n    if (map === otherMap) {\n      return true;\n    }\n    if (map.size !== otherMap.size) {\n      return false;\n    }\n    for (const key of map.keys()) {\n      if (!otherMap.has(key)) {\n        return false;\n      }\n      if (!valueEqualityFn(map.get(key), otherMap.get(key))) {\n        return false;\n      }\n    }\n    return true;\n  }\n  exports.equals = equals;\n  function transpose(map) {\n    const transposed = new Map();\n    for (const key of map.keys()) {\n      const val = map.get(key);\n      transposed.set(val, key);\n    }\n    return transposed;\n  }\n  exports.transpose = transpose;\n  function toObject(map) {\n    const obj = {};\n    for (const key of map.keys()) {\n      obj[key] = map.get(key);\n    }\n    return obj;\n  }\n  exports.toObject = toObject;\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Helper methods that operate on Map-like objects (e.g. ES6\n * Maps).\n */\n\ngoog.module('goog.collections.maps');\ngoog.module.declareLegacyNamespace();\n\n/**\n * A MapLike implements the same public interface as an ES6 Map, without tying\n * the underlying code directly to the implementation. Any additions to this\n * type should also be present on ES6 Maps.\n * @template K,V\n * @record\n */\nclass MapLike {\n  constructor() {\n    /** @const {number} The number of items in this map. */\n    this.size;\n  }\n\n  /**\n   * @param {K} key The key to set in the map.\n   * @param {V} val The value to set for the given key in the map.\n   */\n  set(key, val) {};\n\n  /**\n   * @param {K} key The key to retrieve from the map.\n   * @return {V|undefined} The value for this key, or undefined if the key is\n   *     not present in the map.\n   */\n  get(key) {};\n\n  /**\n   * @return {!IteratorIterable<K>} An ES6 Iterator that iterates over the keys\n   *     in the map.\n   */\n  keys() {};\n\n  /**\n   * @return {!IteratorIterable<V>} An ES6 Iterator that iterates over the\n   *     values in the map.\n   */\n  values() {};\n\n  /**\n   * @param {K} key The key to check.\n   * @return {boolean} True iff this key is present in the map.\n   */\n  has(key) {};\n}\nexports.MapLike = MapLike;\n\n/**\n * Iterates over each entry in the given entries and sets the entry in\n * the map, overwriting any existing entries for the key.\n * @param {!MapLike<K,V>} map The map to set entries on.\n * @param {?Iterable<!Array<K|V>>} entries The iterable of entries. This\n *     iterable should really be of type Iterable<Array<[K,V]>>, but the tuple\n *     type is not representable in the Closure Type System.\n * @template K,V\n */\nfunction setAll(map, entries) {\n  if (!entries) return;\n  for (const [k, v] of entries) {\n    map.set(k, v);\n  }\n}\nexports.setAll = setAll;\n\n/**\n * Determines if a given map contains the given value, optionally using\n * a custom comparison function.\n * @param {!MapLike<?,V1>} map The map whose values to check.\n * @param {V2} val The value to check for.\n * @param {(function(V1,V2): boolean)=} valueEqualityFn The comparison function\n *     used to determine if the given value is equivalent to any of the values\n *     in the map. If no function is provided, defaults to strict equality\n *     (===).\n * @return {boolean} True iff the given map contains the given value according\n *     to the comparison function.\n * @template V1,V2\n */\nfunction hasValue(map, val, valueEqualityFn = defaultEqualityFn) {\n  for (const v of map.values()) {\n    if (valueEqualityFn(v, val)) return true;\n  }\n  return false;\n}\nexports.hasValue = hasValue;\n\n/** @const {function(?,?): boolean} */\nconst defaultEqualityFn = (a, b) => a === b;\n\n/**\n * Compares two maps using their public APIs to determine if they have\n * equal contents, optionally using a custom comparison function when comaring\n * values.\n * @param {!MapLike<K,V1>} map The first map\n * @param {!MapLike<K,V2>} otherMap The other map\n * @param {(function(V1,V2): boolean)=} valueEqualityFn The comparison function\n *     used to determine if the values obtained from each map are equivalent. If\n *     no function is provided, defaults to strict equality (===).\n * @return {boolean}\n * @template K,V1,V2\n */\nfunction equals(map, otherMap, valueEqualityFn = defaultEqualityFn) {\n  if (map === otherMap) return true;\n  if (map.size !== otherMap.size) return false;\n  for (const key of map.keys()) {\n    if (!otherMap.has(key)) return false;\n    if (!valueEqualityFn(map.get(key), otherMap.get(key))) return false;\n  }\n  return true;\n}\nexports.equals = equals;\n\n/**\n * Returns a new ES6 Map in which all the keys and values from the\n * given map are interchanged (keys become values and values become keys). If\n * multiple keys in the given map to the same value, the resulting value in the\n * transposed map is implementation-dependent.\n *\n * It acts very similarly to {goog.object.transpose(Object)}.\n * @param {!MapLike<K,V>} map The map to transpose.\n * @return {!Map<V,K>} A transposed version of the given map.\n * @template K,V\n */\nfunction transpose(map) {\n  const /** !Map<V,K> */ transposed = new Map();\n  for (const key of map.keys()) {\n    const val = map.get(key);\n    transposed.set(val, key);\n  }\n  return transposed;\n}\nexports.transpose = transpose;\n\n/**\n * ToObject returns a new object whose properties are the keys from the Map.\n * @param {!MapLike<K,V>} map The map to convert into an object.\n * @return {!Object<K,V>} An object representation of the Map.\n * @template K,V\n */\nfunction toObject(map) {\n  const /** !Object<K,V> */ obj = {};\n  for (const key of map.keys()) {\n    obj[key] = map.get(key);\n  }\n  return obj;\n}\nexports.toObject = toObject;\n","~:compiled-at",1653504793863,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.collections.maps.js\",\n\"lineCount\":77,\n\"mappings\":\"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\",\n\"sources\":[\"goog/collections/maps.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Helper methods that operate on Map-like objects (e.g. ES6\\n * Maps).\\n */\\n\\ngoog.module('goog.collections.maps');\\ngoog.module.declareLegacyNamespace();\\n\\n/**\\n * A MapLike implements the same public interface as an ES6 Map, without tying\\n * the underlying code directly to the implementation. Any additions to this\\n * type should also be present on ES6 Maps.\\n * @template K,V\\n * @record\\n */\\nclass MapLike {\\n  constructor() {\\n    /** @const {number} The number of items in this map. */\\n    this.size;\\n  }\\n\\n  /**\\n   * @param {K} key The key to set in the map.\\n   * @param {V} val The value to set for the given key in the map.\\n   */\\n  set(key, val) {};\\n\\n  /**\\n   * @param {K} key The key to retrieve from the map.\\n   * @return {V|undefined} The value for this key, or undefined if the key is\\n   *     not present in the map.\\n   */\\n  get(key) {};\\n\\n  /**\\n   * @return {!IteratorIterable<K>} An ES6 Iterator that iterates over the keys\\n   *     in the map.\\n   */\\n  keys() {};\\n\\n  /**\\n   * @return {!IteratorIterable<V>} An ES6 Iterator that iterates over the\\n   *     values in the map.\\n   */\\n  values() {};\\n\\n  /**\\n   * @param {K} key The key to check.\\n   * @return {boolean} True iff this key is present in the map.\\n   */\\n  has(key) {};\\n}\\nexports.MapLike = MapLike;\\n\\n/**\\n * Iterates over each entry in the given entries and sets the entry in\\n * the map, overwriting any existing entries for the key.\\n * @param {!MapLike<K,V>} map The map to set entries on.\\n * @param {?Iterable<!Array<K|V>>} entries The iterable of entries. This\\n *     iterable should really be of type Iterable<Array<[K,V]>>, but the tuple\\n *     type is not representable in the Closure Type System.\\n * @template K,V\\n */\\nfunction setAll(map, entries) {\\n  if (!entries) return;\\n  for (const [k, v] of entries) {\\n    map.set(k, v);\\n  }\\n}\\nexports.setAll = setAll;\\n\\n/**\\n * Determines if a given map contains the given value, optionally using\\n * a custom comparison function.\\n * @param {!MapLike<?,V1>} map The map whose values to check.\\n * @param {V2} val The value to check for.\\n * @param {(function(V1,V2): boolean)=} valueEqualityFn The comparison function\\n *     used to determine if the given value is equivalent to any of the values\\n *     in the map. If no function is provided, defaults to strict equality\\n *     (===).\\n * @return {boolean} True iff the given map contains the given value according\\n *     to the comparison function.\\n * @template V1,V2\\n */\\nfunction hasValue(map, val, valueEqualityFn = defaultEqualityFn) {\\n  for (const v of map.values()) {\\n    if (valueEqualityFn(v, val)) return true;\\n  }\\n  return false;\\n}\\nexports.hasValue = hasValue;\\n\\n/** @const {function(?,?): boolean} */\\nconst defaultEqualityFn = (a, b) => a === b;\\n\\n/**\\n * Compares two maps using their public APIs to determine if they have\\n * equal contents, optionally using a custom comparison function when comaring\\n * values.\\n * @param {!MapLike<K,V1>} map The first map\\n * @param {!MapLike<K,V2>} otherMap The other map\\n * @param {(function(V1,V2): boolean)=} valueEqualityFn The comparison function\\n *     used to determine if the values obtained from each map are equivalent. If\\n *     no function is provided, defaults to strict equality (===).\\n * @return {boolean}\\n * @template K,V1,V2\\n */\\nfunction equals(map, otherMap, valueEqualityFn = defaultEqualityFn) {\\n  if (map === otherMap) return true;\\n  if (map.size !== otherMap.size) return false;\\n  for (const key of map.keys()) {\\n    if (!otherMap.has(key)) return false;\\n    if (!valueEqualityFn(map.get(key), otherMap.get(key))) return false;\\n  }\\n  return true;\\n}\\nexports.equals = equals;\\n\\n/**\\n * Returns a new ES6 Map in which all the keys and values from the\\n * given map are interchanged (keys become values and values become keys). If\\n * multiple keys in the given map to the same value, the resulting value in the\\n * transposed map is implementation-dependent.\\n *\\n * It acts very similarly to {goog.object.transpose(Object)}.\\n * @param {!MapLike<K,V>} map The map to transpose.\\n * @return {!Map<V,K>} A transposed version of the given map.\\n * @template K,V\\n */\\nfunction transpose(map) {\\n  const /** !Map<V,K> */ transposed = new Map();\\n  for (const key of map.keys()) {\\n    const val = map.get(key);\\n    transposed.set(val, key);\\n  }\\n  return transposed;\\n}\\nexports.transpose = transpose;\\n\\n/**\\n * ToObject returns a new object whose properties are the keys from the Map.\\n * @param {!MapLike<K,V>} map The map to convert into an object.\\n * @return {!Object<K,V>} An object representation of the Map.\\n * @template K,V\\n */\\nfunction toObject(map) {\\n  const /** !Object<K,V> */ obj = {};\\n  for (const key of map.keys()) {\\n    obj[key] = map.get(key);\\n  }\\n  return obj;\\n}\\nexports.toObject = toObject;\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"MapLike\",\"constructor\",\"size\",\"set\",\"key\",\"val\",\"get\",\"keys\",\"values\",\"has\",\"exports\",\"setAll\",\"map\",\"entries\",\"k\",\"v\",\"hasValue\",\"valueEqualityFn\",\"defaultEqualityFn\",\"a\",\"b\",\"equals\",\"otherMap\",\"transpose\",\"transposed\",\"Map\",\"toObject\",\"obj\"]\n}\n"]