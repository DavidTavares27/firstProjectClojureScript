["^ ","~:resource-id",["~:shadow.build.classpath/resource","shadow/js.js"],"~:js","goog.provide(\"shadow.js\");\nshadow.js.files = {};\nshadow.js.nativeRequires = {};\nshadow.js.NODE_ENV = goog.define(\"shadow.js.NODE_ENV\", \"development\");\nshadow.js.requireStack = [];\nshadow.js.add_native_require = function(name, obj) {\n  shadow.js.nativeRequires[name] = obj;\n};\nshadow.js.jsRequire = function(name, opts) {\n  var nativeObj = shadow.js.nativeRequires[name];\n  if (nativeObj !== undefined) {\n    return nativeObj;\n  }\n  try {\n    if (goog.DEBUG) {\n      if (name instanceof String && name.indexOf(\"/\") != -1) {\n        console.warn(\"Tried to dynamically require '\" + name + \"' from '\" + shadow.js.requireStack[shadow.js.requireStack.length - 1] + \"'. This is not supported and may cause issues.\");\n      }\n    }\n    shadow.js.requireStack.push(name);\n    var module = shadow.js.files[name];\n    var moduleFn = shadow$provide[name];\n    if (module === undefined) {\n      if (moduleFn === undefined) {\n        throw \"Module not provided: \" + name;\n      }\n      module = {};\n      module[\"exports\"] = {};\n      shadow.js.files[name] = module;\n    }\n    if (moduleFn) {\n      delete shadow$provide[name];\n      try {\n        moduleFn.call(module, goog.global, shadow.js.jsRequire, module, module[\"exports\"]);\n      } catch (e) {\n        console.warn(\"shadow-cljs - failed to load\", name);\n        throw e;\n      }\n      if (opts) {\n        var globals = opts[\"globals\"];\n        if (globals) {\n          for (var i = 0; i < globals.length; i++) {\n            window[globals[i]] = module[\"exports\"];\n          }\n        }\n      }\n    }\n  } finally {\n    shadow.js.requireStack.pop();\n  }\n  return module[\"exports\"];\n};\nshadow.js.jsRequire.cache = {};\nshadow.js.jsRequire.resolve = function(name) {\n  return name;\n};\nshadow.js.modules = {};\nshadow.js.require = function(name, opts) {\n  return shadow.js.jsRequire(name, opts);\n};\n","~:source","goog.provide(\"shadow.js\");\n\n/**\n * @dict\n */\nshadow.js.files = {};\n\n/**\n * @dict\n */\nshadow.js.nativeRequires = {};\n\n/**\n * @define {string}\n * all occurences should be removed by NodeEnvInline but for safety we keep it arround\n */\nshadow.js.NODE_ENV = goog.define(\"shadow.js.NODE_ENV\", \"development\");\n\nshadow.js.requireStack = [];\n\nshadow.js.add_native_require = function(name, obj) {\n  shadow.js.nativeRequires[name] = obj;\n};\n\n/**\n * @return {ShadowJS}\n */\nshadow.js.jsRequire = function(name, opts) {\n  var nativeObj = shadow.js.nativeRequires[name];\n  if (nativeObj !== undefined) {\n    return nativeObj;\n  }\n\n  try {\n    if (goog.DEBUG) {\n      if (name instanceof String && name.indexOf(\"/\") != -1) {\n        console.warn(\n          \"Tried to dynamically require '\" +\n            name +\n            \"' from '\" +\n            shadow.js.requireStack[shadow.js.requireStack.length - 1] +\n            \"'. This is not supported and may cause issues.\"\n        );\n      }\n    }\n\n    shadow.js.requireStack.push(name);\n\n    var module = shadow.js.files[name];\n    var moduleFn = shadow$provide[name];\n\n    // module must be created before calling moduleFn due to circular deps\n    if (module === undefined) {\n      if (moduleFn === undefined) {\n        throw (\"Module not provided: \" + name);\n      }\n      module = {};\n      module[\"exports\"] = {};\n      shadow.js.files[name] = module;\n    }\n\n    if (moduleFn) {\n      delete shadow$provide[name];\n\n      try {\n        moduleFn.call(\n          module,\n          goog.global,\n          shadow.js.jsRequire,\n          module,\n          module[\"exports\"]\n        );\n      } catch (e) {\n        console.warn(\"shadow-cljs - failed to load\", name);\n        throw e;\n      }\n\n      if (opts) {\n        var globals = opts[\"globals\"];\n        if (globals) {\n          for (var i = 0; i < globals.length; i++) {\n            window[globals[i]] = module[\"exports\"];\n          }\n        }\n      }\n    }\n  } finally {\n    shadow.js.requireStack.pop();\n  }\n\n  return module[\"exports\"];\n};\n\n// work around issues where libraries try to manipulate require at runtime\n//   codemirror/addon/runmode/runmode.node.js\n// will attempt to replace all\n//   codemirror/lib/codemirror.js\n// requires with itself. in webpack this actually reconfigures require at runtime\n// but does not prevent webpack from including the original codemirror.js in the bundle\n// output. just nothing ever accesses assuming runmode.node.js is loaded first\n// in shadow-cljs this is handled via :package-overrides in the build config\n// which actually prevents including the unwanted file and properly redirects\n// making the runtime calls do nothing instead\nshadow.js.jsRequire.cache = {};\nshadow.js.jsRequire.resolve = function(name) { return name };\n\n/**\n * @dict\n */\nshadow.js.modules = {};\n\nshadow.js.require = function(name, opts) {\n  return shadow.js.jsRequire(name, opts);\n  /*\n  var mod = shadow.js.modules[name];\n\n  if (typeof(mod) == 'undefined') {\n    var exports = shadow.js.jsRequire(name, opts);\n\n    if (exports && exports[\"__esModule\"]) {\n        mod = exports;\n    } else {\n        mod = {\"default\":exports};\n    }\n\n    shadow.js.modules[name] = mod;\n  }\n\n  return mod;\n  */\n};\n","~:compiled-at",1653072314694,"~:source-map-json","{\n\"version\":3,\n\"file\":\"shadow.js.js\",\n\"lineCount\":61,\n\"mappings\":\"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\",\n\"sources\":[\"shadow/js.js\"],\n\"sourcesContent\":[\"goog.provide(\\\"shadow.js\\\");\\n\\n/**\\n * @dict\\n */\\nshadow.js.files = {};\\n\\n/**\\n * @dict\\n */\\nshadow.js.nativeRequires = {};\\n\\n/**\\n * @define {string}\\n * all occurences should be removed by NodeEnvInline but for safety we keep it arround\\n */\\nshadow.js.NODE_ENV = goog.define(\\\"shadow.js.NODE_ENV\\\", \\\"development\\\");\\n\\nshadow.js.requireStack = [];\\n\\nshadow.js.add_native_require = function(name, obj) {\\n  shadow.js.nativeRequires[name] = obj;\\n};\\n\\n/**\\n * @return {ShadowJS}\\n */\\nshadow.js.jsRequire = function(name, opts) {\\n  var nativeObj = shadow.js.nativeRequires[name];\\n  if (nativeObj !== undefined) {\\n    return nativeObj;\\n  }\\n\\n  try {\\n    if (goog.DEBUG) {\\n      if (name instanceof String && name.indexOf(\\\"/\\\") != -1) {\\n        console.warn(\\n          \\\"Tried to dynamically require '\\\" +\\n            name +\\n            \\\"' from '\\\" +\\n            shadow.js.requireStack[shadow.js.requireStack.length - 1] +\\n            \\\"'. This is not supported and may cause issues.\\\"\\n        );\\n      }\\n    }\\n\\n    shadow.js.requireStack.push(name);\\n\\n    var module = shadow.js.files[name];\\n    var moduleFn = shadow$provide[name];\\n\\n    // module must be created before calling moduleFn due to circular deps\\n    if (module === undefined) {\\n      if (moduleFn === undefined) {\\n        throw (\\\"Module not provided: \\\" + name);\\n      }\\n      module = {};\\n      module[\\\"exports\\\"] = {};\\n      shadow.js.files[name] = module;\\n    }\\n\\n    if (moduleFn) {\\n      delete shadow$provide[name];\\n\\n      try {\\n        moduleFn.call(\\n          module,\\n          goog.global,\\n          shadow.js.jsRequire,\\n          module,\\n          module[\\\"exports\\\"]\\n        );\\n      } catch (e) {\\n        console.warn(\\\"shadow-cljs - failed to load\\\", name);\\n        throw e;\\n      }\\n\\n      if (opts) {\\n        var globals = opts[\\\"globals\\\"];\\n        if (globals) {\\n          for (var i = 0; i < globals.length; i++) {\\n            window[globals[i]] = module[\\\"exports\\\"];\\n          }\\n        }\\n      }\\n    }\\n  } finally {\\n    shadow.js.requireStack.pop();\\n  }\\n\\n  return module[\\\"exports\\\"];\\n};\\n\\n// work around issues where libraries try to manipulate require at runtime\\n//   codemirror/addon/runmode/runmode.node.js\\n// will attempt to replace all\\n//   codemirror/lib/codemirror.js\\n// requires with itself. in webpack this actually reconfigures require at runtime\\n// but does not prevent webpack from including the original codemirror.js in the bundle\\n// output. just nothing ever accesses assuming runmode.node.js is loaded first\\n// in shadow-cljs this is handled via :package-overrides in the build config\\n// which actually prevents including the unwanted file and properly redirects\\n// making the runtime calls do nothing instead\\nshadow.js.jsRequire.cache = {};\\nshadow.js.jsRequire.resolve = function(name) { return name };\\n\\n/**\\n * @dict\\n */\\nshadow.js.modules = {};\\n\\nshadow.js.require = function(name, opts) {\\n  return shadow.js.jsRequire(name, opts);\\n  /*\\n  var mod = shadow.js.modules[name];\\n\\n  if (typeof(mod) == 'undefined') {\\n    var exports = shadow.js.jsRequire(name, opts);\\n\\n    if (exports && exports[\\\"__esModule\\\"]) {\\n        mod = exports;\\n    } else {\\n        mod = {\\\"default\\\":exports};\\n    }\\n\\n    shadow.js.modules[name] = mod;\\n  }\\n\\n  return mod;\\n  */\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"shadow\",\"js\",\"files\",\"nativeRequires\",\"NODE_ENV\",\"define\",\"requireStack\",\"add_native_require\",\"shadow.js.add_native_require\",\"name\",\"obj\",\"jsRequire\",\"shadow.js.jsRequire\",\"opts\",\"nativeObj\",\"undefined\",\"DEBUG\",\"String\",\"indexOf\",\"console\",\"warn\",\"length\",\"push\",\"module\",\"moduleFn\",\"shadow$provide\",\"call\",\"global\",\"e\",\"globals\",\"i\",\"window\",\"pop\",\"cache\",\"resolve\",\"shadow.js.jsRequire.resolve\",\"modules\",\"require\",\"shadow.js.require\"]\n}\n"]