["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/nexttick.js"],"~:js","goog.provide(\"goog.async.nextTick\");\ngoog.require(\"goog.debug.entryPointRegistry\");\ngoog.require(\"goog.dom\");\ngoog.require(\"goog.dom.TagName\");\ngoog.require(\"goog.functions\");\ngoog.require(\"goog.labs.userAgent.browser\");\ngoog.require(\"goog.labs.userAgent.engine\");\ngoog.async.nextTick = function(callback, opt_context, opt_useSetImmediate) {\n  var cb = callback;\n  if (opt_context) {\n    cb = goog.bind(callback, opt_context);\n  }\n  cb = goog.async.nextTick.wrapCallback_(cb);\n  if (typeof goog.global.setImmediate === \"function\" && (opt_useSetImmediate || goog.async.nextTick.useSetImmediate_())) {\n    goog.global.setImmediate(cb);\n    return;\n  }\n  if (!goog.async.nextTick.setImmediate_) {\n    goog.async.nextTick.setImmediate_ = goog.async.nextTick.getSetImmediateEmulator_();\n  }\n  goog.async.nextTick.setImmediate_(cb);\n};\ngoog.async.nextTick.useSetImmediate_ = function() {\n  if (!goog.global.Window || !goog.global.Window.prototype) {\n    return true;\n  }\n  if (goog.labs.userAgent.browser.isEdge() || goog.global.Window.prototype.setImmediate != goog.global.setImmediate) {\n    return true;\n  }\n  return false;\n};\ngoog.async.nextTick.setImmediate_;\ngoog.async.nextTick.getSetImmediateEmulator_ = function() {\n  var Channel = goog.global[\"MessageChannel\"];\n  if (typeof Channel === \"undefined\" && typeof window !== \"undefined\" && window.postMessage && window.addEventListener && !goog.labs.userAgent.engine.isPresto()) {\n    Channel = function() {\n      var iframe = goog.dom.createElement(goog.dom.TagName.IFRAME);\n      iframe.style.display = \"none\";\n      document.documentElement.appendChild(iframe);\n      var win = iframe.contentWindow;\n      var doc = win.document;\n      doc.open();\n      doc.close();\n      var message = \"callImmediate\" + Math.random();\n      var origin = win.location.protocol == \"file:\" ? \"*\" : win.location.protocol + \"//\" + win.location.host;\n      var onmessage = goog.bind(function(e) {\n        if (origin != \"*\" && e.origin != origin || e.data != message) {\n          return;\n        }\n        this[\"port1\"].onmessage();\n      }, this);\n      win.addEventListener(\"message\", onmessage, false);\n      this[\"port1\"] = {};\n      this[\"port2\"] = {postMessage:function() {\n        win.postMessage(message, origin);\n      }};\n    };\n  }\n  if (typeof Channel !== \"undefined\" && !goog.labs.userAgent.browser.isIE()) {\n    var channel = new Channel();\n    var head = {};\n    var tail = head;\n    channel[\"port1\"].onmessage = function() {\n      if (head.next !== undefined) {\n        head = head.next;\n        var cb = head.cb;\n        head.cb = null;\n        cb();\n      }\n    };\n    return function(cb) {\n      tail.next = {cb:cb};\n      tail = tail.next;\n      channel[\"port2\"].postMessage(0);\n    };\n  }\n  return function(cb) {\n    goog.global.setTimeout(cb, 0);\n  };\n};\ngoog.async.nextTick.wrapCallback_ = goog.functions.identity;\ngoog.debug.entryPointRegistry.register(function(transformer) {\n  goog.async.nextTick.wrapCallback_ = transformer;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Provides a function to schedule running a function as soon\n * as possible after the current JS execution stops and yields to the event\n * loop.\n */\n\ngoog.provide('goog.async.nextTick');\n\ngoog.require('goog.debug.entryPointRegistry');\ngoog.require('goog.dom');\ngoog.require('goog.dom.TagName');\ngoog.require('goog.functions');\ngoog.require('goog.labs.userAgent.browser');\ngoog.require('goog.labs.userAgent.engine');\n\n\n/**\n * Fires the provided callbacks as soon as possible after the current JS\n * execution context. setTimeout(…, 0) takes at least 4ms when called from\n * within another setTimeout(…, 0) for legacy reasons.\n *\n * This will not schedule the callback as a microtask (i.e. a task that can\n * preempt user input or networking callbacks). It is meant to emulate what\n * setTimeout(_, 0) would do if it were not throttled. If you desire microtask\n * behavior, use {@see goog.Promise} instead.\n *\n * @param {function(this:SCOPE)} callback Callback function to fire as soon as\n *     possible.\n * @param {SCOPE=} opt_context Object in whose scope to call the listener.\n * @param {boolean=} opt_useSetImmediate Avoid the IE workaround that\n *     ensures correctness at the cost of speed. See comments for details.\n * @template SCOPE\n */\ngoog.async.nextTick = function(callback, opt_context, opt_useSetImmediate) {\n  'use strict';\n  var cb = callback;\n  if (opt_context) {\n    cb = goog.bind(callback, opt_context);\n  }\n  cb = goog.async.nextTick.wrapCallback_(cb);\n  // Note we do allow callers to also request setImmediate if they are willing\n  // to accept the possible tradeoffs of incorrectness in exchange for speed.\n  // The IE fallback of readystate change is much slower. See useSetImmediate_\n  // for details.\n  if (typeof goog.global.setImmediate === 'function' &&\n      (opt_useSetImmediate || goog.async.nextTick.useSetImmediate_())) {\n    goog.global.setImmediate(cb);\n    return;\n  }\n\n  // Look for and cache the custom fallback version of setImmediate.\n  if (!goog.async.nextTick.setImmediate_) {\n    goog.async.nextTick.setImmediate_ =\n        goog.async.nextTick.getSetImmediateEmulator_();\n  }\n  goog.async.nextTick.setImmediate_(cb);\n};\n\n\n/**\n * Returns whether should use setImmediate implementation currently on window.\n *\n * window.setImmediate was introduced and currently only supported by IE10+,\n * but due to a bug in the implementation it is not guaranteed that\n * setImmediate is faster than setTimeout nor that setImmediate N is before\n * setImmediate N+1. That is why we do not use the native version if\n * available. We do, however, call setImmediate if it is a non-native function\n * because that indicates that it has been replaced by goog.testing.MockClock\n * which we do want to support.\n * See\n * http://connect.microsoft.com/IE/feedback/details/801823/setimmediate-and-messagechannel-are-broken-in-ie10\n *\n * @return {boolean} Whether to use the implementation of setImmediate defined\n *     on Window.\n * @private\n * @suppress {missingProperties} For \"Window.prototype.setImmediate\"\n */\ngoog.async.nextTick.useSetImmediate_ = function() {\n  'use strict';\n  // Not a browser environment.\n  if (!goog.global.Window || !goog.global.Window.prototype) {\n    return true;\n  }\n\n  // MS Edge has window.setImmediate natively, but it's not on Window.prototype.\n  // Also, there's no clean way to detect if the goog.global.setImmediate has\n  // been replaced by mockClock as its replacement also shows up as \"[native\n  // code]\" when using toString. Therefore, just always use\n  // goog.global.setImmediate for Edge. It's unclear if it suffers the same\n  // issues as IE10/11, but based on\n  // https://dev.modern.ie/testdrive/demos/setimmediatesorting/\n  // it seems they've been working to ensure it's WAI.\n  if (goog.labs.userAgent.browser.isEdge() ||\n      goog.global.Window.prototype.setImmediate != goog.global.setImmediate) {\n    // Something redefined setImmediate in which case we decide to use it (This\n    // is so that we use the mockClock setImmediate).\n    return true;\n  }\n\n  return false;\n};\n\n\n/**\n * Cache for the setImmediate implementation.\n * @type {function(function())}\n * @private\n */\ngoog.async.nextTick.setImmediate_;\n\n\n/**\n * Determines the best possible implementation to run a function as soon as\n * the JS event loop is idle.\n * @return {function(function())} The \"setImmediate\" implementation.\n * @private\n */\ngoog.async.nextTick.getSetImmediateEmulator_ = function() {\n  'use strict';\n  // Create a private message channel and use it to postMessage empty messages\n  // to ourselves.\n  /** @type {!Function|undefined} */\n  var Channel = goog.global['MessageChannel'];\n  // If MessageChannel is not available and we are in a browser, implement\n  // an iframe based polyfill in browsers that have postMessage and\n  // document.addEventListener. The latter excludes IE8 because it has a\n  // synchronous postMessage implementation.\n  if (typeof Channel === 'undefined' && typeof window !== 'undefined' &&\n      window.postMessage && window.addEventListener &&\n      // Presto (The old pre-blink Opera engine) has problems with iframes\n      // and contentWindow.\n      !goog.labs.userAgent.engine.isPresto()) {\n    /** @constructor */\n    Channel = function() {\n      'use strict';\n      // Make an empty, invisible iframe.\n      var iframe = goog.dom.createElement(goog.dom.TagName.IFRAME);\n      iframe.style.display = 'none';\n      document.documentElement.appendChild(iframe);\n      var win = iframe.contentWindow;\n      var doc = win.document;\n      doc.open();\n      doc.close();\n      // Do not post anything sensitive over this channel, as the workaround for\n      // pages with file: origin could allow that information to be modified or\n      // intercepted.\n      var message = 'callImmediate' + Math.random();\n      // The same origin policy rejects attempts to postMessage from file: urls\n      // unless the origin is '*'.\n      var origin = win.location.protocol == 'file:' ?\n          '*' :\n          win.location.protocol + '//' + win.location.host;\n      var onmessage = goog.bind(function(e) {\n        'use strict';\n        // Validate origin and message to make sure that this message was\n        // intended for us. If the origin is set to '*' (see above) only the\n        // message needs to match since, for example, '*' != 'file://'. Allowing\n        // the wildcard is ok, as we are not concerned with security here.\n        if ((origin != '*' && e.origin != origin) || e.data != message) {\n          return;\n        }\n        this['port1'].onmessage();\n      }, this);\n      win.addEventListener('message', onmessage, false);\n      this['port1'] = {};\n      this['port2'] = {\n        postMessage: function() {\n          'use strict';\n          win.postMessage(message, origin);\n        }\n      };\n    };\n  }\n  if (typeof Channel !== 'undefined' && !goog.labs.userAgent.browser.isIE()) {\n    // Exclude all of IE due to\n    // http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/\n    // which allows starving postMessage with a busy setTimeout loop.\n    // This currently affects IE10 and IE11 which would otherwise be able\n    // to use the postMessage based fallbacks.\n    var channel = new Channel();\n    // Use a fifo linked list to call callbacks in the right order.\n    var head = {};\n    var tail = head;\n    channel['port1'].onmessage = function() {\n      'use strict';\n      if (head.next !== undefined) {\n        head = head.next;\n        var cb = head.cb;\n        head.cb = null;\n        cb();\n      }\n    };\n    return function(cb) {\n      'use strict';\n      tail.next = {cb: cb};\n      tail = tail.next;\n      channel['port2'].postMessage(0);\n    };\n  }\n  // Fall back to setTimeout with 0. In browsers this creates a delay of 5ms\n  // or more.\n  // NOTE(user): This fallback is used for IE.\n  return function(cb) {\n    'use strict';\n    goog.global.setTimeout(/** @type {function()} */ (cb), 0);\n  };\n};\n\n\n/**\n * Helper function that is overrided to protect callbacks with entry point\n * monitor if the application monitors entry points.\n * @param {function()} callback Callback function to fire as soon as possible.\n * @return {function()} The wrapped callback.\n * @private\n */\ngoog.async.nextTick.wrapCallback_ = goog.functions.identity;\n\n\n// Register the callback function as an entry point, so that it can be\n// monitored for exception handling, etc. This has to be done in this file\n// since it requires special code to handle all browsers.\ngoog.debug.entryPointRegistry.register(\n    /**\n     * @param {function(!Function): !Function} transformer The transforming\n     *     function.\n     */\n    function(transformer) {\n      'use strict';\n      goog.async.nextTick.wrapCallback_ = transformer;\n    });\n","~:compiled-at",1653072314570,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.nexttick.js\",\n\"lineCount\":85,\n\"mappings\":\"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\",\n\"sources\":[\"goog/async/nexttick.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Provides a function to schedule running a function as soon\\n * as possible after the current JS execution stops and yields to the event\\n * loop.\\n */\\n\\ngoog.provide('goog.async.nextTick');\\n\\ngoog.require('goog.debug.entryPointRegistry');\\ngoog.require('goog.dom');\\ngoog.require('goog.dom.TagName');\\ngoog.require('goog.functions');\\ngoog.require('goog.labs.userAgent.browser');\\ngoog.require('goog.labs.userAgent.engine');\\n\\n\\n/**\\n * Fires the provided callbacks as soon as possible after the current JS\\n * execution context. setTimeout(\\u2026, 0) takes at least 4ms when called from\\n * within another setTimeout(\\u2026, 0) for legacy reasons.\\n *\\n * This will not schedule the callback as a microtask (i.e. a task that can\\n * preempt user input or networking callbacks). It is meant to emulate what\\n * setTimeout(_, 0) would do if it were not throttled. If you desire microtask\\n * behavior, use {@see goog.Promise} instead.\\n *\\n * @param {function(this:SCOPE)} callback Callback function to fire as soon as\\n *     possible.\\n * @param {SCOPE=} opt_context Object in whose scope to call the listener.\\n * @param {boolean=} opt_useSetImmediate Avoid the IE workaround that\\n *     ensures correctness at the cost of speed. See comments for details.\\n * @template SCOPE\\n */\\ngoog.async.nextTick = function(callback, opt_context, opt_useSetImmediate) {\\n  'use strict';\\n  var cb = callback;\\n  if (opt_context) {\\n    cb = goog.bind(callback, opt_context);\\n  }\\n  cb = goog.async.nextTick.wrapCallback_(cb);\\n  // Note we do allow callers to also request setImmediate if they are willing\\n  // to accept the possible tradeoffs of incorrectness in exchange for speed.\\n  // The IE fallback of readystate change is much slower. See useSetImmediate_\\n  // for details.\\n  if (typeof goog.global.setImmediate === 'function' &&\\n      (opt_useSetImmediate || goog.async.nextTick.useSetImmediate_())) {\\n    goog.global.setImmediate(cb);\\n    return;\\n  }\\n\\n  // Look for and cache the custom fallback version of setImmediate.\\n  if (!goog.async.nextTick.setImmediate_) {\\n    goog.async.nextTick.setImmediate_ =\\n        goog.async.nextTick.getSetImmediateEmulator_();\\n  }\\n  goog.async.nextTick.setImmediate_(cb);\\n};\\n\\n\\n/**\\n * Returns whether should use setImmediate implementation currently on window.\\n *\\n * window.setImmediate was introduced and currently only supported by IE10+,\\n * but due to a bug in the implementation it is not guaranteed that\\n * setImmediate is faster than setTimeout nor that setImmediate N is before\\n * setImmediate N+1. That is why we do not use the native version if\\n * available. We do, however, call setImmediate if it is a non-native function\\n * because that indicates that it has been replaced by goog.testing.MockClock\\n * which we do want to support.\\n * See\\n * http://connect.microsoft.com/IE/feedback/details/801823/setimmediate-and-messagechannel-are-broken-in-ie10\\n *\\n * @return {boolean} Whether to use the implementation of setImmediate defined\\n *     on Window.\\n * @private\\n * @suppress {missingProperties} For \\\"Window.prototype.setImmediate\\\"\\n */\\ngoog.async.nextTick.useSetImmediate_ = function() {\\n  'use strict';\\n  // Not a browser environment.\\n  if (!goog.global.Window || !goog.global.Window.prototype) {\\n    return true;\\n  }\\n\\n  // MS Edge has window.setImmediate natively, but it's not on Window.prototype.\\n  // Also, there's no clean way to detect if the goog.global.setImmediate has\\n  // been replaced by mockClock as its replacement also shows up as \\\"[native\\n  // code]\\\" when using toString. Therefore, just always use\\n  // goog.global.setImmediate for Edge. It's unclear if it suffers the same\\n  // issues as IE10/11, but based on\\n  // https://dev.modern.ie/testdrive/demos/setimmediatesorting/\\n  // it seems they've been working to ensure it's WAI.\\n  if (goog.labs.userAgent.browser.isEdge() ||\\n      goog.global.Window.prototype.setImmediate != goog.global.setImmediate) {\\n    // Something redefined setImmediate in which case we decide to use it (This\\n    // is so that we use the mockClock setImmediate).\\n    return true;\\n  }\\n\\n  return false;\\n};\\n\\n\\n/**\\n * Cache for the setImmediate implementation.\\n * @type {function(function())}\\n * @private\\n */\\ngoog.async.nextTick.setImmediate_;\\n\\n\\n/**\\n * Determines the best possible implementation to run a function as soon as\\n * the JS event loop is idle.\\n * @return {function(function())} The \\\"setImmediate\\\" implementation.\\n * @private\\n */\\ngoog.async.nextTick.getSetImmediateEmulator_ = function() {\\n  'use strict';\\n  // Create a private message channel and use it to postMessage empty messages\\n  // to ourselves.\\n  /** @type {!Function|undefined} */\\n  var Channel = goog.global['MessageChannel'];\\n  // If MessageChannel is not available and we are in a browser, implement\\n  // an iframe based polyfill in browsers that have postMessage and\\n  // document.addEventListener. The latter excludes IE8 because it has a\\n  // synchronous postMessage implementation.\\n  if (typeof Channel === 'undefined' && typeof window !== 'undefined' &&\\n      window.postMessage && window.addEventListener &&\\n      // Presto (The old pre-blink Opera engine) has problems with iframes\\n      // and contentWindow.\\n      !goog.labs.userAgent.engine.isPresto()) {\\n    /** @constructor */\\n    Channel = function() {\\n      'use strict';\\n      // Make an empty, invisible iframe.\\n      var iframe = goog.dom.createElement(goog.dom.TagName.IFRAME);\\n      iframe.style.display = 'none';\\n      document.documentElement.appendChild(iframe);\\n      var win = iframe.contentWindow;\\n      var doc = win.document;\\n      doc.open();\\n      doc.close();\\n      // Do not post anything sensitive over this channel, as the workaround for\\n      // pages with file: origin could allow that information to be modified or\\n      // intercepted.\\n      var message = 'callImmediate' + Math.random();\\n      // The same origin policy rejects attempts to postMessage from file: urls\\n      // unless the origin is '*'.\\n      var origin = win.location.protocol == 'file:' ?\\n          '*' :\\n          win.location.protocol + '//' + win.location.host;\\n      var onmessage = goog.bind(function(e) {\\n        'use strict';\\n        // Validate origin and message to make sure that this message was\\n        // intended for us. If the origin is set to '*' (see above) only the\\n        // message needs to match since, for example, '*' != 'file://'. Allowing\\n        // the wildcard is ok, as we are not concerned with security here.\\n        if ((origin != '*' && e.origin != origin) || e.data != message) {\\n          return;\\n        }\\n        this['port1'].onmessage();\\n      }, this);\\n      win.addEventListener('message', onmessage, false);\\n      this['port1'] = {};\\n      this['port2'] = {\\n        postMessage: function() {\\n          'use strict';\\n          win.postMessage(message, origin);\\n        }\\n      };\\n    };\\n  }\\n  if (typeof Channel !== 'undefined' && !goog.labs.userAgent.browser.isIE()) {\\n    // Exclude all of IE due to\\n    // http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/\\n    // which allows starving postMessage with a busy setTimeout loop.\\n    // This currently affects IE10 and IE11 which would otherwise be able\\n    // to use the postMessage based fallbacks.\\n    var channel = new Channel();\\n    // Use a fifo linked list to call callbacks in the right order.\\n    var head = {};\\n    var tail = head;\\n    channel['port1'].onmessage = function() {\\n      'use strict';\\n      if (head.next !== undefined) {\\n        head = head.next;\\n        var cb = head.cb;\\n        head.cb = null;\\n        cb();\\n      }\\n    };\\n    return function(cb) {\\n      'use strict';\\n      tail.next = {cb: cb};\\n      tail = tail.next;\\n      channel['port2'].postMessage(0);\\n    };\\n  }\\n  // Fall back to setTimeout with 0. In browsers this creates a delay of 5ms\\n  // or more.\\n  // NOTE(user): This fallback is used for IE.\\n  return function(cb) {\\n    'use strict';\\n    goog.global.setTimeout(/** @type {function()} */ (cb), 0);\\n  };\\n};\\n\\n\\n/**\\n * Helper function that is overrided to protect callbacks with entry point\\n * monitor if the application monitors entry points.\\n * @param {function()} callback Callback function to fire as soon as possible.\\n * @return {function()} The wrapped callback.\\n * @private\\n */\\ngoog.async.nextTick.wrapCallback_ = goog.functions.identity;\\n\\n\\n// Register the callback function as an entry point, so that it can be\\n// monitored for exception handling, etc. This has to be done in this file\\n// since it requires special code to handle all browsers.\\ngoog.debug.entryPointRegistry.register(\\n    /**\\n     * @param {function(!Function): !Function} transformer The transforming\\n     *     function.\\n     */\\n    function(transformer) {\\n      'use strict';\\n      goog.async.nextTick.wrapCallback_ = transformer;\\n    });\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"async\",\"nextTick\",\"goog.async.nextTick\",\"callback\",\"opt_context\",\"opt_useSetImmediate\",\"cb\",\"bind\",\"wrapCallback_\",\"global\",\"setImmediate\",\"useSetImmediate_\",\"setImmediate_\",\"getSetImmediateEmulator_\",\"goog.async.nextTick.useSetImmediate_\",\"Window\",\"prototype\",\"labs\",\"userAgent\",\"browser\",\"isEdge\",\"goog.async.nextTick.getSetImmediateEmulator_\",\"Channel\",\"window\",\"postMessage\",\"addEventListener\",\"engine\",\"isPresto\",\"iframe\",\"dom\",\"createElement\",\"TagName\",\"IFRAME\",\"style\",\"display\",\"document\",\"documentElement\",\"appendChild\",\"win\",\"contentWindow\",\"doc\",\"open\",\"close\",\"message\",\"Math\",\"random\",\"origin\",\"location\",\"protocol\",\"host\",\"onmessage\",\"e\",\"data\",\"isIE\",\"channel\",\"head\",\"tail\",\"next\",\"undefined\",\"setTimeout\",\"functions\",\"identity\",\"debug\",\"entryPointRegistry\",\"register\",\"transformer\"]\n}\n"]