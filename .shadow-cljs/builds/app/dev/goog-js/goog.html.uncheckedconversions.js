["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/html/uncheckedconversions.js"],"~:js","goog.provide(\"goog.html.uncheckedconversions\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.html.SafeHtml\");\ngoog.require(\"goog.html.SafeScript\");\ngoog.require(\"goog.html.SafeStyle\");\ngoog.require(\"goog.html.SafeStyleSheet\");\ngoog.require(\"goog.html.SafeUrl\");\ngoog.require(\"goog.html.TrustedResourceUrl\");\ngoog.require(\"goog.string.Const\");\ngoog.require(\"goog.string.internal\");\ngoog.requireType(\"goog.i18n.bidi.Dir\");\ngoog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(justification, html, opt_dir) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(html, opt_dir || null);\n};\ngoog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(justification, script) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(script);\n};\ngoog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(justification, style) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);\n};\ngoog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(justification, styleSheet) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);\n};\ngoog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(justification, url) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);\n};\ngoog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(justification, url) {\n  goog.asserts.assertString(goog.string.Const.unwrap(justification), \"must provide justification\");\n  goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(justification)), \"must provide non-empty justification\");\n  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Unchecked conversions to create values of goog.html types from\n * plain strings.  Use of these functions could potentially result in instances\n * of goog.html types that violate their type contracts, and hence result in\n * security vulnerabilties.\n *\n * Therefore, all uses of the methods herein must be carefully security\n * reviewed.  Avoid use of the methods in this file whenever possible; instead\n * prefer to create instances of goog.html types using inherently safe builders\n * or template systems.\n *\n *\n */\n\n\ngoog.provide('goog.html.uncheckedconversions');\n\ngoog.require('goog.asserts');\ngoog.require('goog.html.SafeHtml');\ngoog.require('goog.html.SafeScript');\ngoog.require('goog.html.SafeStyle');\ngoog.require('goog.html.SafeStyleSheet');\ngoog.require('goog.html.SafeUrl');\ngoog.require('goog.html.TrustedResourceUrl');\ngoog.require('goog.string.Const');\ngoog.require('goog.string.internal');\ngoog.requireType('goog.i18n.bidi.Dir');\n\n\n/**\n * Performs an \"unchecked conversion\" to SafeHtml from a plain string that is\n * known to satisfy the SafeHtml type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `html` satisfies the SafeHtml type contract in all\n * possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} html A string that is claimed to adhere to the SafeHtml\n *     contract.\n * @param {?goog.i18n.bidi.Dir=} opt_dir The optional directionality of the\n *     SafeHtml to be constructed. A null or undefined value signifies an\n *     unknown directionality.\n * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml\n *     object.\n */\ngoog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =\n    function(justification, html, opt_dir) {\n  'use strict';\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(\n      html, opt_dir || null);\n};\n\n\n/**\n * Performs an \"unchecked conversion\" to SafeScript from a plain string that is\n * known to satisfy the SafeScript type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `script` satisfies the SafeScript type contract in\n * all possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} script The string to wrap as a SafeScript.\n * @return {!goog.html.SafeScript} The value of `script`, wrapped in a\n *     SafeScript object.\n */\ngoog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =\n    function(justification, script) {\n  'use strict';\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\n      script);\n};\n\n\n/**\n * Performs an \"unchecked conversion\" to SafeStyle from a plain string that is\n * known to satisfy the SafeStyle type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `style` satisfies the SafeStyle type contract in all\n * possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} style The string to wrap as a SafeStyle.\n * @return {!goog.html.SafeStyle} The value of `style`, wrapped in a\n *     SafeStyle object.\n */\ngoog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =\n    function(justification, style) {\n  'use strict';\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(\n      style);\n};\n\n\n/**\n * Performs an \"unchecked conversion\" to SafeStyleSheet from a plain string\n * that is known to satisfy the SafeStyleSheet type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `styleSheet` satisfies the SafeStyleSheet type\n * contract in all possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} styleSheet The string to wrap as a SafeStyleSheet.\n * @return {!goog.html.SafeStyleSheet} The value of `styleSheet`, wrapped\n *     in a SafeStyleSheet object.\n */\ngoog.html.uncheckedconversions\n    .safeStyleSheetFromStringKnownToSatisfyTypeContract = function(\n    justification, styleSheet) {\n  'use strict';\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.SafeStyleSheet\n      .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);\n};\n\n\n/**\n * Performs an \"unchecked conversion\" to SafeUrl from a plain string that is\n * known to satisfy the SafeUrl type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `url` satisfies the SafeUrl type contract in all\n * possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} url The string to wrap as a SafeUrl.\n * @return {!goog.html.SafeUrl} The value of `url`, wrapped in a SafeUrl\n *     object.\n */\ngoog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =\n    function(justification, url) {\n  'use strict';\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);\n};\n\n\n/**\n * Performs an \"unchecked conversion\" to TrustedResourceUrl from a plain string\n * that is known to satisfy the TrustedResourceUrl type contract.\n *\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\n * that the value of `url` satisfies the TrustedResourceUrl type contract\n * in all possible program states.\n *\n *\n * @param {!goog.string.Const} justification A constant string explaining why\n *     this use of this method is safe. May include a security review ticket\n *     number.\n * @param {string} url The string to wrap as a TrustedResourceUrl.\n * @return {!goog.html.TrustedResourceUrl} The value of `url`, wrapped in\n *     a TrustedResourceUrl object.\n */\ngoog.html.uncheckedconversions\n    .trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(\n    justification, url) {\n  'use strict';\n  // unwrap() called inside an assert so that justification can be optimized\n  // away in production code.\n  goog.asserts.assertString(\n      goog.string.Const.unwrap(justification), 'must provide justification');\n  goog.asserts.assert(\n      !goog.string.internal.isEmptyOrWhitespace(\n          goog.string.Const.unwrap(justification)),\n      'must provide non-empty justification');\n  return goog.html.TrustedResourceUrl\n      .createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);\n};\n","~:compiled-at",1653072314534,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.html.uncheckedconversions.js\",\n\"lineCount\":42,\n\"mappings\":\"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\",\n\"sources\":[\"goog/html/uncheckedconversions.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Unchecked conversions to create values of goog.html types from\\n * plain strings.  Use of these functions could potentially result in instances\\n * of goog.html types that violate their type contracts, and hence result in\\n * security vulnerabilties.\\n *\\n * Therefore, all uses of the methods herein must be carefully security\\n * reviewed.  Avoid use of the methods in this file whenever possible; instead\\n * prefer to create instances of goog.html types using inherently safe builders\\n * or template systems.\\n *\\n *\\n */\\n\\n\\ngoog.provide('goog.html.uncheckedconversions');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.html.SafeHtml');\\ngoog.require('goog.html.SafeScript');\\ngoog.require('goog.html.SafeStyle');\\ngoog.require('goog.html.SafeStyleSheet');\\ngoog.require('goog.html.SafeUrl');\\ngoog.require('goog.html.TrustedResourceUrl');\\ngoog.require('goog.string.Const');\\ngoog.require('goog.string.internal');\\ngoog.requireType('goog.i18n.bidi.Dir');\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to SafeHtml from a plain string that is\\n * known to satisfy the SafeHtml type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `html` satisfies the SafeHtml type contract in all\\n * possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} html A string that is claimed to adhere to the SafeHtml\\n *     contract.\\n * @param {?goog.i18n.bidi.Dir=} opt_dir The optional directionality of the\\n *     SafeHtml to be constructed. A null or undefined value signifies an\\n *     unknown directionality.\\n * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml\\n *     object.\\n */\\ngoog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =\\n    function(justification, html, opt_dir) {\\n  'use strict';\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(\\n      html, opt_dir || null);\\n};\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to SafeScript from a plain string that is\\n * known to satisfy the SafeScript type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `script` satisfies the SafeScript type contract in\\n * all possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} script The string to wrap as a SafeScript.\\n * @return {!goog.html.SafeScript} The value of `script`, wrapped in a\\n *     SafeScript object.\\n */\\ngoog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =\\n    function(justification, script) {\\n  'use strict';\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\\n      script);\\n};\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to SafeStyle from a plain string that is\\n * known to satisfy the SafeStyle type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `style` satisfies the SafeStyle type contract in all\\n * possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} style The string to wrap as a SafeStyle.\\n * @return {!goog.html.SafeStyle} The value of `style`, wrapped in a\\n *     SafeStyle object.\\n */\\ngoog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =\\n    function(justification, style) {\\n  'use strict';\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(\\n      style);\\n};\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to SafeStyleSheet from a plain string\\n * that is known to satisfy the SafeStyleSheet type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `styleSheet` satisfies the SafeStyleSheet type\\n * contract in all possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} styleSheet The string to wrap as a SafeStyleSheet.\\n * @return {!goog.html.SafeStyleSheet} The value of `styleSheet`, wrapped\\n *     in a SafeStyleSheet object.\\n */\\ngoog.html.uncheckedconversions\\n    .safeStyleSheetFromStringKnownToSatisfyTypeContract = function(\\n    justification, styleSheet) {\\n  'use strict';\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.SafeStyleSheet\\n      .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);\\n};\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to SafeUrl from a plain string that is\\n * known to satisfy the SafeUrl type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `url` satisfies the SafeUrl type contract in all\\n * possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} url The string to wrap as a SafeUrl.\\n * @return {!goog.html.SafeUrl} The value of `url`, wrapped in a SafeUrl\\n *     object.\\n */\\ngoog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =\\n    function(justification, url) {\\n  'use strict';\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);\\n};\\n\\n\\n/**\\n * Performs an \\\"unchecked conversion\\\" to TrustedResourceUrl from a plain string\\n * that is known to satisfy the TrustedResourceUrl type contract.\\n *\\n * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure\\n * that the value of `url` satisfies the TrustedResourceUrl type contract\\n * in all possible program states.\\n *\\n *\\n * @param {!goog.string.Const} justification A constant string explaining why\\n *     this use of this method is safe. May include a security review ticket\\n *     number.\\n * @param {string} url The string to wrap as a TrustedResourceUrl.\\n * @return {!goog.html.TrustedResourceUrl} The value of `url`, wrapped in\\n *     a TrustedResourceUrl object.\\n */\\ngoog.html.uncheckedconversions\\n    .trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(\\n    justification, url) {\\n  'use strict';\\n  // unwrap() called inside an assert so that justification can be optimized\\n  // away in production code.\\n  goog.asserts.assertString(\\n      goog.string.Const.unwrap(justification), 'must provide justification');\\n  goog.asserts.assert(\\n      !goog.string.internal.isEmptyOrWhitespace(\\n          goog.string.Const.unwrap(justification)),\\n      'must provide non-empty justification');\\n  return goog.html.TrustedResourceUrl\\n      .createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"html\",\"uncheckedconversions\",\"safeHtmlFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract\",\"justification\",\"opt_dir\",\"asserts\",\"assertString\",\"string\",\"Const\",\"unwrap\",\"assert\",\"internal\",\"isEmptyOrWhitespace\",\"SafeHtml\",\"createSafeHtmlSecurityPrivateDoNotAccessOrElse\",\"safeScriptFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract\",\"script\",\"SafeScript\",\"createSafeScriptSecurityPrivateDoNotAccessOrElse\",\"safeStyleFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract\",\"style\",\"SafeStyle\",\"createSafeStyleSecurityPrivateDoNotAccessOrElse\",\"safeStyleSheetFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract\",\"styleSheet\",\"SafeStyleSheet\",\"createSafeStyleSheetSecurityPrivateDoNotAccessOrElse\",\"safeUrlFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract\",\"url\",\"SafeUrl\",\"createSafeUrlSecurityPrivateDoNotAccessOrElse\",\"trustedResourceUrlFromStringKnownToSatisfyTypeContract\",\"goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract\",\"TrustedResourceUrl\",\"createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse\"]\n}\n"]