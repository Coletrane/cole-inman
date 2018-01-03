webpackHotUpdate(5,{

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

var _toCss = __webpack_require__(1125);

var _toCss2 = _interopRequireDefault(_toCss);

var _toCssValue = __webpack_require__(1120);

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleRule = function () {
  function StyleRule(key, style, options) {
    _classCallCheck(this, StyleRule);

    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer,
        selector = options.selector;

    this.key = key;
    this.options = options;
    this.style = style;
    if (selector) this.selectorText = selector;
    this.renderer = sheet ? sheet.renderer : new Renderer();
  }

  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  _createClass(StyleRule, [{
    key: 'prop',


    /**
     * Get or set a style property.
     */
    value: function prop(name, nextValue) {
      // It's a setter.
      if (nextValue != null) {
        // Don't do anything if the value has not changed.
        if (this.style[name] !== nextValue) {
          nextValue = this.options.jss.plugins.onChangeValue(nextValue, name, this);
          this.style[name] = nextValue;

          // Renderable is defined if StyleSheet option `link` is true.
          if (this.renderable) this.renderer.setStyle(this.renderable, name, nextValue);else {
            var sheet = this.options.sheet;

            if (sheet && sheet.attached) {
              (0, _warning2['default'])(false, 'Rule is not linked. Missing sheet option "link: true".');
            }
          }
        }
        return this;
      }

      return this.style[name];
    }

    /**
     * Apply rule to an element inline.
     */

  }, {
    key: 'applyTo',
    value: function applyTo(renderable) {
      var json = this.toJSON();
      for (var prop in json) {
        this.renderer.setStyle(renderable, prop, json[prop]);
      }return this;
    }

    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = {};
      for (var prop in this.style) {
        var value = this.style[prop];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
      }
      return json;
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var sheet = this.options.sheet;

      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, { allowEmpty: true }) : options;
      return (0, _toCss2['default'])(this.selector, this.style, opts);
    }
  }, {
    key: 'selector',
    set: function set(selector) {
      if (selector === this.selectorText) return;

      this.selectorText = selector;

      if (this.renderable) {
        var hasChanged = this.renderer.setSelector(this.renderable, selector);

        // If selector setter is not implemented, rerender the rule.
        if (!hasChanged && this.renderable) {
          var renderable = this.renderer.replaceRule(this.renderable, this);
          if (renderable) this.renderable = renderable;
        }
      }
    }

    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}();

exports['default'] = StyleRule;

/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createRule = __webpack_require__(1121);

var _createRule2 = _interopRequireDefault(_createRule);

var _linkRule = __webpack_require__(1132);

var _linkRule2 = _interopRequireDefault(_linkRule);

var _StyleRule = __webpack_require__(1118);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _escape = __webpack_require__(1150);

var _escape2 = _interopRequireDefault(_escape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Contains rules objects and allows adding/removing etc.
 * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
 */
var RuleList = function () {

  // Original styles object.
  function RuleList(options) {
    _classCallCheck(this, RuleList);

    this.map = {};
    this.raw = {};
    this.index = [];

    this.options = options;
    this.classes = options.classes;
  }

  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  // Used to ensure correct rules order.

  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.


  _createClass(RuleList, [{
    key: 'add',
    value: function add(name, decl, options) {
      var _options = this.options,
          parent = _options.parent,
          sheet = _options.sheet,
          jss = _options.jss,
          Renderer = _options.Renderer,
          generateClassName = _options.generateClassName;


      options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateClassName: generateClassName
      }, options);

      if (!options.selector && this.classes[name]) {
        options.selector = '.' + (0, _escape2['default'])(this.classes[name]);
      }

      this.raw[name] = decl;

      var rule = (0, _createRule2['default'])(name, decl, options);

      var className = void 0;

      if (!options.selector && rule instanceof _StyleRule2['default']) {
        className = generateClassName(rule, sheet);
        rule.selector = '.' + (0, _escape2['default'])(className);
      }

      this.register(rule, className);

      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);

      return rule;
    }

    /**
     * Get a rule.
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this.map[name];
    }

    /**
     * Delete a rule.
     */

  }, {
    key: 'remove',
    value: function remove(rule) {
      this.unregister(rule);
      this.index.splice(this.indexOf(rule), 1);
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.index.indexOf(rule);
    }

    /**
     * Run `onProcessRule()` plugins on every rule.
     */

  }, {
    key: 'process',
    value: function process() {
      var plugins = this.options.jss.plugins;
      // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
    }

    /**
     * Register a rule in `.map` and `.classes` maps.
     */

  }, {
    key: 'register',
    value: function register(rule, className) {
      this.map[rule.key] = rule;
      if (rule instanceof _StyleRule2['default']) {
        this.map[rule.selector] = rule;
        if (className) this.classes[rule.key] = className;
      }
    }

    /**
     * Unregister a rule.
     */

  }, {
    key: 'unregister',
    value: function unregister(rule) {
      delete this.map[rule.key];
      if (rule instanceof _StyleRule2['default']) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      }
    }

    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'update',
    value: function update(name, data) {
      var _options2 = this.options,
          plugins = _options2.jss.plugins,
          sheet = _options2.sheet;

      if (typeof name === 'string') {
        plugins.onUpdate(data, this.get(name), sheet);
        return;
      }

      for (var index = 0; index < this.index.length; index++) {
        plugins.onUpdate(name, this.index[index], sheet);
      }
    }

    /**
     * Link renderable rules with CSSRuleList.
     */

  }, {
    key: 'link',
    value: function link(cssRules) {
      var map = this.options.sheet.renderer.getUnescapedKeysMap(this.index);

      for (var i = 0; i < cssRules.length; i++) {
        var cssRule = cssRules[i];
        var _key = this.options.sheet.renderer.getKey(cssRule);
        if (map[_key]) _key = map[_key];
        var rule = this.map[_key];
        if (rule) (0, _linkRule2['default'])(rule, cssRule);
      }
    }

    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var str = '';
      var sheet = this.options.sheet;

      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options);

        // No need to render an empty rule.
        if (!css && !link) continue;

        if (str) str += '\n';
        str += css;
      }

      return str;
    }
  }]);

  return RuleList;
}();

exports['default'] = RuleList;

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCssValue;
var join = function join(value, by) {
  var result = '';
  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }
  return result;
};

/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */
function toCssValue(value) {
  var ignoreImportant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!Array.isArray(value)) return value;

  var cssValue = '';

  // Support space separated values via `[['5px', '10px']]`.
  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', ');

  // Add !important, because it was ignored.
  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createRule;

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

var _StyleRule = __webpack_require__(1118);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _cloneStyle = __webpack_require__(1146);

var _cloneStyle2 = _interopRequireDefault(_cloneStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Create a rule instance.
 */
function createRule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
  var decl = arguments[1];
  var options = arguments[2];
  var jss = options.jss;

  var declCopy = (0, _cloneStyle2['default'])(decl);

  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule;

  // It is an at-rule and it has no instance.
  if (name[0] === '@') {
    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
  }

  return new _StyleRule2['default'](name, declCopy, options);
}

/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
	var clone = !optionsArgument || optionsArgument.clone !== false;

	return (clone && isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, optionsArgument)
		: value
}

function defaultArrayMerge(target, source, optionsArgument) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, optionsArgument)
	})
}

function mergeObject(target, source, optionsArgument) {
	var destination = {};
	if (isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], optionsArgument);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], optionsArgument);
		} else {
			destination[key] = deepmerge(target[key], source[key], optionsArgument);
		}
	});
	return destination
}

function deepmerge(target, source, optionsArgument) {
	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, optionsArgument)
	} else if (sourceIsArray) {
		var arrayMerge = options.arrayMerge || defaultArrayMerge;
		return arrayMerge(target, source, optionsArgument)
	} else {
		return mergeObject(target, source, optionsArgument)
	}
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, optionsArgument)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(85);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCss;

var _toCssValue = __webpack_require__(1120);

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';
  for (var index = 0; index < indent; index++) {
    result += '  ';
  }return result + str;
}

/**
 * Converts a Rule to CSS string.
 */

function toCss(selector, style) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var result = '';

  if (!style) return result;

  var _options$indent = options.indent,
      indent = _options$indent === undefined ? 0 : _options$indent;
  var fallbacks = style.fallbacks;


  indent++;

  // Apply fallbacks first.
  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
          }
        }
      }
    }
    // Object syntax {fallbacks: {prop: value}}
    else {
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];
          if (_value != null) {
            result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
          }
        }
      }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];
    if (_value2 != null && _prop2 !== 'fallbacks') {
      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
    }
  }

  // Allow empty style in this case, because properties will be added dynamically.
  if (!result && !options.allowEmpty) return result;

  indent--;
  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

  return result;
}

/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SheetsRegistry = __webpack_require__(1130);

var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */
exports['default'] = new _SheetsRegistry2['default']();

/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInBrowser = __webpack_require__(1122);

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var js = ''; /**
              * Export javascript style and css style vendor prefixes.
              * Based on "transform" support test.
              */

var css = '';

// We should not do anything if required serverside.
if (_isInBrowser2['default']) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    // IE did it wrong again ...
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
}

/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String}}
 * @api public
 */
exports['default'] = { js: js, css: css };

/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Namespaces to avoid conflicts on the context.
 */
var jss = exports.jss = '64a55d578f856d258dc345b094a2a2b3';
var sheetsRegistry = exports.sheetsRegistry = 'd4bd0baacbc52bbd48bbb9eb24344ecd';
var managers = exports.managers = 'b768b78919504fba9de2c03545c5cd3a';
var sheetOptions = exports.sheetOptions = '6fc570d6bd61383819d0f9e7407c452d';

/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.createGenerateClassName = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.toCssValue = exports.getDynamicStyles = undefined;

var _getDynamicStyles = __webpack_require__(1144);

Object.defineProperty(exports, 'getDynamicStyles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getDynamicStyles)['default'];
  }
});

var _toCssValue = __webpack_require__(1120);

Object.defineProperty(exports, 'toCssValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toCssValue)['default'];
  }
});

var _SheetsRegistry = __webpack_require__(1130);

Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsRegistry)['default'];
  }
});

var _SheetsManager = __webpack_require__(1145);

Object.defineProperty(exports, 'SheetsManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsManager)['default'];
  }
});

var _RuleList = __webpack_require__(1119);

Object.defineProperty(exports, 'RuleList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RuleList)['default'];
  }
});

var _sheets = __webpack_require__(1126);

Object.defineProperty(exports, 'sheets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sheets)['default'];
  }
});

var _createGenerateClassName = __webpack_require__(1133);

Object.defineProperty(exports, 'createGenerateClassName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createGenerateClassName)['default'];
  }
});

var _Jss = __webpack_require__(1152);

var _Jss2 = _interopRequireDefault(_Jss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Creates a new instance of Jss.
 */
var create = exports.create = function create(options) {
  return new _Jss2['default'](options);
};

/**
 * A global Jss instance.
 */
exports['default'] = create();

/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry = function () {
  function SheetsRegistry() {
    _classCallCheck(this, SheetsRegistry);

    this.registry = [];
  }

  _createClass(SheetsRegistry, [{
    key: 'add',


    /**
     * Register a Style Sheet.
     */
    value: function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;


      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      }

      // Find a position.
      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }

    /**
     * Reset the registry.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.registry = [];
    }

    /**
     * Remove a Style Sheet.
     */

  }, {
    key: 'remove',
    value: function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }

    /**
     * Convert all attached sheets to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.registry.filter(function (sheet) {
        return sheet.attached;
      }).map(function (sheet) {
        return sheet.toString(options);
      }).join('\n');
    }
  }, {
    key: 'index',


    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

exports['default'] = SheetsRegistry;

/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbolObservable = __webpack_require__(1147);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (value) {
  return value && value[_symbolObservable2['default']] && value === value[_symbolObservable2['default']]();
};

/***/ }),

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = linkRule;
/**
 * Link rule with CSSStyleRule and nested rules with corresponding nested cssRules if both exists.
 */
function linkRule(rule, cssRule) {
  rule.renderable = cssRule;
  if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
}

/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

var _StyleSheet = __webpack_require__(1134);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _moduleId = __webpack_require__(1151);

var _moduleId2 = _interopRequireDefault(_moduleId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var maxRules = 1e10;


var env = "development";

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

exports['default'] = function () {
  var ruleCounter = 0;
  var defaultPrefix = env === 'production' ? 'c' : '';

  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      (0, _warning2['default'])(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
    }

    var prefix = defaultPrefix;
    var jssId = '';

    if (sheet) {
      prefix = sheet.options.classNamePrefix || defaultPrefix;
      if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
    }

    if (env === 'production') {
      return '' + prefix + _moduleId2['default'] + jssId + ruleCounter;
    }

    return prefix + rule.key + '-' + _moduleId2['default'] + (jssId && '-' + jssId) + '-' + ruleCounter;
  };
};

/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _linkRule = __webpack_require__(1132);

var _linkRule2 = _interopRequireDefault(_linkRule);

var _RuleList = __webpack_require__(1119);

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleSheet = function () {
  function StyleSheet(styles, options) {
    _classCallCheck(this, StyleSheet);

    this.attached = false;
    this.deployed = false;
    this.linked = false;
    this.classes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes
    });
    this.renderer = new options.Renderer(this);
    this.rules = new _RuleList2['default'](this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  /**
   * Attach renderable to the render tree.
   */


  _createClass(StyleSheet, [{
    key: 'attach',
    value: function attach() {
      if (this.attached) return this;
      if (!this.deployed) this.deploy();
      this.renderer.attach();
      if (!this.linked && this.options.link) this.link();
      this.attached = true;
      return this;
    }

    /**
     * Remove renderable from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      if (!this.attached) return this;
      this.renderer.detach();
      this.attached = false;
      return this;
    }

    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, decl, options) {
      var queue = this.queue;

      // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];

      var rule = this.rules.add(name, decl, options);
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule;
        // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.
        if (queue) queue.push(rule);else {
          this.insertRule(rule);
          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      }

      // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.
      this.deployed = false;

      return rule;
    }

    /**
     * Insert rule into the StyleSheet
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule) {
      var renderable = this.renderer.insertRule(rule);
      if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
    }

    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */

  }, {
    key: 'addRules',
    value: function addRules(styles, options) {
      var added = [];
      for (var name in styles) {
        added.push(this.addRule(name, styles[name], options));
      }
      return added;
    }

    /**
     * Get a rule by name.
     */

  }, {
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(name) {
      var rule = this.rules.get(name);

      if (!rule) return false;

      this.rules.remove(rule);

      if (this.attached && rule.renderable) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Deploy pure CSS string to a renderable.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      this.renderer.deploy();
      this.deployed = true;
      return this;
    }

    /**
     * Link renderable CSS rules from sheet with their corresponding models.
     */

  }, {
    key: 'link',
    value: function link() {
      var cssRules = this.renderer.getRules();

      // Is undefined when VirtualRenderer is used.
      if (cssRules) this.rules.link(cssRules);
      this.linked = true;
      return this;
    }

    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'update',
    value: function update(name, data) {
      this.rules.update(name, data);
      return this;
    }

    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.rules.toString(options);
    }
  }]);

  return StyleSheet;
}();

exports['default'] = StyleSheet;

/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Typography = __webpack_require__(1136);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Typography).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(1124);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(393);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(1137);

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__(1138);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__(1191);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'block',
      margin: 0
    },
    display4: theme.typography.display4,
    display3: theme.typography.display3,
    display2: theme.typography.display2,
    display1: theme.typography.display1,
    headline: theme.typography.headline,
    title: theme.typography.title,
    subheading: theme.typography.subheading,
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    alignLeft: {
      textAlign: 'left'
    },
    alignCenter: {
      textAlign: 'center'
    },
    alignRight: {
      textAlign: 'right'
    },
    alignJustify: {
      textAlign: 'justify'
    },
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    gutterBottom: {
      marginBottom: '0.35em'
    },
    paragraph: {
      marginBottom: theme.spacing.unit * 2
    },
    colorInherit: {
      color: 'inherit'
    },
    colorPrimary: {
      color: theme.palette.primary[500]
    },
    colorSecondary: {
      color: theme.palette.text.secondary
    },
    colorAccent: {
      color: theme.palette.secondary.A400
    },
    colorError: {
      color: theme.palette.error.A400
    }
  };
};

function Typography(props) {
  var _classNames;

  var align = props.align,
      classes = props.classes,
      classNameProp = props.className,
      componentProp = props.component,
      color = props.color,
      gutterBottom = props.gutterBottom,
      headlineMapping = props.headlineMapping,
      noWrap = props.noWrap,
      paragraph = props.paragraph,
      type = props.type,
      other = (0, _objectWithoutProperties3.default)(props, ['align', 'classes', 'className', 'component', 'color', 'gutterBottom', 'headlineMapping', 'noWrap', 'paragraph', 'type']);


  var className = (0, _classnames2.default)(classes.root, classes[type], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes['color' + (0, _helpers.capitalizeFirstLetter)(color)], color !== 'default'), (0, _defineProperty3.default)(_classNames, classes.noWrap, noWrap), (0, _defineProperty3.default)(_classNames, classes.gutterBottom, gutterBottom), (0, _defineProperty3.default)(_classNames, classes.paragraph, paragraph), (0, _defineProperty3.default)(_classNames, classes['align' + (0, _helpers.capitalizeFirstLetter)(align)], align !== 'inherit'), _classNames), classNameProp);

  var Component = componentProp || (paragraph ? 'p' : headlineMapping[type]) || 'span';

  return _react2.default.createElement(Component, (0, _extends3.default)({ className: className }, other));
}

Typography.propTypes =  true ? {
  /**
   * Set the text-align on the component.
   */
  align: _propTypes2.default.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: _propTypes2.default.oneOf(['inherit', 'primary', 'secondary', 'accent', 'error', 'default']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default we map the type to a good default headline component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: _propTypes2.default.bool,
  /**
   * We are empirically mapping the type property to a range of different DOM element type.
   * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   */
  headlineMapping: _propTypes2.default.object,
  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: _propTypes2.default.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: _propTypes2.default.bool,
  /**
   * Applies the theme typography styles.
   */
  type: _propTypes2.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
} : {};

Typography.defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  headlineMapping: {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading: 'h3',
    body2: 'aside',
    body1: 'p'
  },
  noWrap: false,
  paragraph: false,
  type: 'body1'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTypography' })(Typography);

/***/ }),

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 1138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sheetsManager = exports.preset = undefined;

var _keys = __webpack_require__(159);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _objectWithoutProperties2 = __webpack_require__(393);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _map = __webpack_require__(382);

var _map2 = _interopRequireDefault(_map);

var _minSafeInteger = __webpack_require__(1139);

var _minSafeInteger2 = _interopRequireDefault(_minSafeInteger);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

var _hoistNonReactStatics = __webpack_require__(232);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _getDisplayName = __webpack_require__(443);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _contextTypes = __webpack_require__(1142);

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _jss = __webpack_require__(1129);

var _jssGlobal = __webpack_require__(1165);

var _jssGlobal2 = _interopRequireDefault(_jssGlobal);

var _jssNested = __webpack_require__(1166);

var _jssNested2 = _interopRequireDefault(_jssNested);

var _jssCamelCase = __webpack_require__(1167);

var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

var _jssDefaultUnit = __webpack_require__(1168);

var _jssDefaultUnit2 = _interopRequireDefault(_jssDefaultUnit);

var _jssVendorPrefixer = __webpack_require__(1170);

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _jssPropsSort = __webpack_require__(1175);

var _jssPropsSort2 = _interopRequireDefault(_jssPropsSort);

var _ns = __webpack_require__(1128);

var ns = _interopRequireWildcard(_ns);

var _createMuiTheme = __webpack_require__(1176);

var _createMuiTheme2 = _interopRequireDefault(_createMuiTheme);

var _themeListener = __webpack_require__(1188);

var _themeListener2 = _interopRequireDefault(_themeListener);

var _createGenerateClassName = __webpack_require__(1189);

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _getStylesCreator = __webpack_require__(1190);

var _getStylesCreator2 = _interopRequireDefault(_getStylesCreator);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preset = exports.preset = function preset() {
  return {
    plugins: [(0, _jssGlobal2.default)(), (0, _jssNested2.default)(), (0, _jssCamelCase2.default)(), (0, _jssDefaultUnit2.default)(), (0, _jssVendorPrefixer2.default)(), (0, _jssPropsSort2.default)()]
  };
};

// New JSS instance.
var jss = (0, _jss.create)(preset());

// Use a singleton or the provided one by the context.
var generateClassName = (0, _createGenerateClassName2.default)();

// Global index counter to preserve source order.
// As we create the style sheet during componentWillMount lifecycle,
// children are handled after the parents, so the order of style elements would
// be parent->child. It is a problem though when a parent passes a className
// which needs to override any childs styles. StyleSheet of the child has a higher
// specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
var indexCounter = _minSafeInteger2.default;

var sheetsManager = exports.sheetsManager = new _map2.default();

// We use the same empty object to ref count the styles that don't need a theme object.
var noopTheme = {};

// In order to have self-supporting components, we rely on default theme when not provided.
var defaultTheme = void 0;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme2.default)();
  return defaultTheme;
}

// Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.
var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === undefined ? false : _options$withTheme,
        _options$flip = options.flip,
        flip = _options$flip === undefined ? null : _options$flip,
        name = options.name,
        styleSheetOptions = (0, _objectWithoutProperties3.default)(options, ['withTheme', 'flip', 'name']);

    var stylesCreator = (0, _getStylesCreator2.default)(stylesOrCreator);
    var listenToTheme = stylesCreator.themingEnabled || withTheme || typeof name === 'string';

    indexCounter += 1;
    stylesCreator.options.index = indexCounter;

     true ? (0, _warning2.default)(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join(' ')) : void 0;

    var WithStyles = function (_React$Component) {
      (0, _inherits3.default)(WithStyles, _React$Component);

      function WithStyles(props, context) {
        (0, _classCallCheck3.default)(this, WithStyles);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WithStyles.__proto__ || (0, _getPrototypeOf2.default)(WithStyles)).call(this, props, context));

        _this.state = {};
        _this.disableStylesGeneration = false;
        _this.jss = null;
        _this.sheetOptions = null;
        _this.sheetsManager = sheetsManager;
        _this.stylesCreatorSaved = null;
        _this.theme = null;
        _this.unsubscribeId = null;


        _this.jss = _this.context[ns.jss] || jss;

        var muiThemeProviderOptions = _this.context.muiThemeProviderOptions;

        if (muiThemeProviderOptions) {
          if (muiThemeProviderOptions.sheetsManager) {
            _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
          }

          _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
        }

        // Attach the stylesCreator to the instance of the component as in the context
        // of react-hot-loader the hooks can be executed in a different closure context:
        // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
        _this.stylesCreatorSaved = stylesCreator;
        _this.sheetOptions = (0, _extends3.default)({
          generateClassName: generateClassName
        }, _this.context[ns.sheetOptions]);
        // We use || as the function call is lazy evaluated.
        _this.theme = listenToTheme ? _themeListener2.default.initial(context) || getDefaultTheme() : noopTheme;
        return _this;
      }

      (0, _createClass3.default)(WithStyles, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.attach(this.theme);
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          if (!listenToTheme) {
            return;
          }

          this.unsubscribeId = _themeListener2.default.subscribe(this.context, function (theme) {
            var oldTheme = _this2.theme;
            _this2.theme = theme;
            _this2.attach(_this2.theme);

            // Rerender the component so the underlying component gets the theme update.
            // By theme update we mean receiving and applying the new class names.
            _this2.setState({}, function () {
              _this2.detach(oldTheme);
            });
          });
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
          // react-hot-loader specific logic
          if (this.stylesCreatorSaved === stylesCreator || "development" === 'production') {
            return;
          }

          this.detach(this.theme);
          this.stylesCreatorSaved = stylesCreator;
          this.attach(this.theme);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.detach(this.theme);

          if (this.unsubscribeId !== null) {
            _themeListener2.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: 'attach',
        value: function attach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var stylesCreatorSaved = this.stylesCreatorSaved;
          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);

          if (!sheetManager) {
            sheetManager = new _map2.default();
            this.sheetsManager.set(stylesCreatorSaved, sheetManager);
          }

          var sheetManagerTheme = sheetManager.get(theme);

          if (!sheetManagerTheme) {
            sheetManagerTheme = {
              refs: 0,
              sheet: null
            };
            sheetManager.set(theme, sheetManagerTheme);
          }

          if (sheetManagerTheme.refs === 0) {
            var styles = stylesCreatorSaved.create(theme, name);
            var meta = name;

            if ("development" !== 'production' && !meta) {
              meta = (0, _getDisplayName2.default)(Component);
            }

            var sheet = this.jss.createStyleSheet(styles, (0, _extends3.default)({
              meta: meta,
              classNamePrefix: meta,
              flip: typeof flip === 'boolean' ? flip : theme.direction === 'rtl',
              link: false
            }, this.sheetOptions, stylesCreatorSaved.options, {
              name: name
            }, styleSheetOptions));

            sheetManagerTheme.sheet = sheet;
            sheet.attach();

            var sheetsRegistry = this.context[ns.sheetsRegistry];
            if (sheetsRegistry) {
              sheetsRegistry.add(sheet);
            }
          }

          sheetManagerTheme.refs += 1;
        }
      }, {
        key: 'detach',
        value: function detach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var stylesCreatorSaved = this.stylesCreatorSaved;
          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);
          var sheetManagerTheme = sheetManager.get(theme);

          sheetManagerTheme.refs -= 1;

          if (sheetManagerTheme.refs === 0) {
            sheetManager.delete(theme);
            this.jss.removeStyleSheet(sheetManagerTheme.sheet);
            var sheetsRegistry = this.context[ns.sheetsRegistry];
            if (sheetsRegistry) {
              sheetsRegistry.remove(sheetManagerTheme.sheet);
            }
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          var _props = this.props,
              classesProp = _props.classes,
              innerRef = _props.innerRef,
              other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'innerRef']);


          var classes = void 0;
          var renderedClasses = {};

          if (!this.disableStylesGeneration) {
            var sheetManager = this.sheetsManager.get(this.stylesCreatorSaved);
            var sheetsManagerTheme = sheetManager.get(this.theme);
            renderedClasses = sheetsManagerTheme.sheet.classes;
          }

          if (classesProp) {
            classes = (0, _extends3.default)({}, renderedClasses, (0, _keys2.default)(classesProp).reduce(function (accumulator, key) {
               true ? (0, _warning2.default)(renderedClasses[key] || _this3.disableStylesGeneration, ['Material-UI: the key `' + key + '` ' + ('provided to the classes property is not implemented in ' + (0, _getDisplayName2.default)(Component) + '.'), 'You can only override one of the following: ' + (0, _keys2.default)(renderedClasses).join(',')].join('\n')) : void 0;

               true ? (0, _warning2.default)(!classesProp[key] || typeof classesProp[key] === 'string', ['Material-UI: the key `' + key + '` ' + ('provided to the classes property is not valid for ' + (0, _getDisplayName2.default)(Component) + '.'), 'You need to provide a non empty string instead of: ' + classesProp[key] + '.'].join('\n')) : void 0;

              if (classesProp[key]) {
                accumulator[key] = renderedClasses[key] + ' ' + classesProp[key];
              }

              return accumulator;
            }, {}));
          } else {
            classes = renderedClasses;
          }

          var more = {};

          // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order Component.
          if (withTheme) {
            more.theme = this.theme;
          }

          return _react2.default.createElement(Component, (0, _extends3.default)({ classes: classes }, more, other, { ref: innerRef }));
        }
      }]);
      return WithStyles;
    }(_react2.default.Component);

    WithStyles.propTypes =  true ? {
      /**
       * Useful to extend the style applied to components.
       */
      classes: _propTypes2.default.object,
      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes2.default.func
    } : {};

    WithStyles.contextTypes = (0, _extends3.default)({
      muiThemeProviderOptions: _propTypes2.default.object
    }, _contextTypes2.default, listenToTheme ? _themeListener2.default.contextTypes : {});

    (0, _hoistNonReactStatics2.default)(WithStyles, Component);

    if (true) {
      // Exposed for test purposes.
      WithStyles.Naked = Component;
      WithStyles.options = options;
    }

    return WithStyles;
  };
};

exports.default = withStyles;

/***/ }),

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1140), __esModule: true };

/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1141);
module.exports = -0x1fffffffffffff;


/***/ }),

/***/ 1141:
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(1);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns$jss$ns$sheetOptio;

var _propTypes = __webpack_require__(58);

var _ns = __webpack_require__(1128);

var ns = _interopRequireWildcard(_ns);

var _propTypes2 = __webpack_require__(1143);

var _propTypes3 = _interopRequireDefault(_propTypes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports['default'] = (_ns$jss$ns$sheetOptio = {}, _defineProperty(_ns$jss$ns$sheetOptio, ns.jss, _propTypes3['default'].jss), _defineProperty(_ns$jss$ns$sheetOptio, ns.sheetOptions, _propTypes.object), _defineProperty(_ns$jss$ns$sheetOptio, ns.sheetsRegistry, _propTypes3['default'].registry), _defineProperty(_ns$jss$ns$sheetOptio, ns.managers, _propTypes.object), _ns$jss$ns$sheetOptio);

/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(58);

exports['default'] = {
  jss: (0, _propTypes.shape)({
    options: (0, _propTypes.shape)({
      createGenerateClassName: _propTypes.func.isRequired
    }).isRequired,
    createStyleSheet: _propTypes.func.isRequired,
    removeStyleSheet: _propTypes.func.isRequired
  }),
  registry: (0, _propTypes.shape)({
    add: _propTypes.func.isRequired,
    toString: _propTypes.func.isRequired
  })
};

/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Extracts a styles object with only props that contain function values.
 */
exports['default'] = function (styles) {
  // eslint-disable-next-line no-shadow
  function extract(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = extract(value);
        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }

  return extract(styles);
};

/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager = function () {
  function SheetsManager() {
    _classCallCheck(this, SheetsManager);

    this.sheets = [];
    this.refs = [];
    this.keys = [];
  }

  _createClass(SheetsManager, [{
    key: 'get',
    value: function get(key) {
      var index = this.keys.indexOf(key);
      return this.sheets[index];
    }
  }, {
    key: 'add',
    value: function add(key, sheet) {
      var sheets = this.sheets,
          refs = this.refs,
          keys = this.keys;

      var index = sheets.indexOf(sheet);

      if (index !== -1) return index;

      sheets.push(sheet);
      refs.push(0);
      keys.push(key);

      return sheets.length - 1;
    }
  }, {
    key: 'manage',
    value: function manage(key) {
      var index = this.keys.indexOf(key);
      var sheet = this.sheets[index];
      if (this.refs[index] === 0) sheet.attach();
      this.refs[index]++;
      if (!this.keys[index]) this.keys.splice(index, 0, key);
      return sheet;
    }
  }, {
    key: 'unmanage',
    value: function unmanage(key) {
      var index = this.keys.indexOf(key);
      if (index === -1) {
        // eslint-ignore-next-line no-console
        (0, _warning2['default'])(false, 'SheetsManager: can\'t find sheet to unmanage');
        return;
      }
      if (this.refs[index] > 0) {
        this.refs[index]--;
        if (this.refs[index] === 0) this.sheets[index].detach();
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this.keys.length;
    }
  }]);

  return SheetsManager;
}();

exports['default'] = SheetsManager;

/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = cloneStyle;

var _isObservable = __webpack_require__(1131);

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var isArray = Array.isArray;
function cloneStyle(style) {
  // Support empty values in case user ends up with them by accident.
  if (style == null) return style;

  // Support string value for SimpleRule.
  var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);

  if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
    return style;
  }

  // Support array for FontFaceRule.
  if (isArray(style)) return style.map(cloneStyle);

  // Support Observable styles.  Observables are immutable, so we don't need to
  // copy them.
  if ((0, _isObservable2['default'])(style)) return style;

  var newStyle = {};
  for (var name in style) {
    var value = style[name];
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      newStyle[name] = cloneStyle(value);
      continue;
    }
    newStyle[name] = value;
  }

  return newStyle;
}

/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1148);


/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(1149);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(180), __webpack_require__(98)(module)))

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = global.CSS;

var env = "development";

var escapeRegex = /([[\].#*$><+~=|^:(),"'`])/g;

exports['default'] = function (str) {
  // We don't need to escape it in production, because we are not using user's
  // input for selectors, we are generating a valid selector.
  if (env === 'production') return str;

  if (!CSS || !CSS.escape) {
    return str.replace(escapeRegex, '\\$1');
  }

  return CSS.escape(str);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(180)))

/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (global[ns] == null) global[ns] = 0;

// Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.
exports['default'] = global[ns]++;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(180)))

/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isInBrowser = __webpack_require__(1122);

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _StyleSheet = __webpack_require__(1134);

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _PluginsRegistry = __webpack_require__(1153);

var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

var _rules = __webpack_require__(1154);

var _rules2 = _interopRequireDefault(_rules);

var _observables = __webpack_require__(1160);

var _observables2 = _interopRequireDefault(_observables);

var _functions = __webpack_require__(1161);

var _functions2 = _interopRequireDefault(_functions);

var _sheets = __webpack_require__(1126);

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__(1118);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createGenerateClassName = __webpack_require__(1133);

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _createRule2 = __webpack_require__(1121);

var _createRule3 = _interopRequireDefault(_createRule2);

var _DomRenderer = __webpack_require__(1163);

var _DomRenderer2 = _interopRequireDefault(_DomRenderer);

var _VirtualRenderer = __webpack_require__(1164);

var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultPlugins = _rules2['default'].concat([_observables2['default'], _functions2['default']]);

var instanceCounter = 0;

var Jss = function () {
  function Jss(options) {
    _classCallCheck(this, Jss);

    this.id = instanceCounter++;
    this.version = "9.5.0";
    this.plugins = new _PluginsRegistry2['default']();
    this.options = {
      createGenerateClassName: _createGenerateClassName2['default'],
      Renderer: _isInBrowser2['default'] ? _DomRenderer2['default'] : _VirtualRenderer2['default'],
      plugins: []
    };
    this.generateClassName = (0, _createGenerateClassName2['default'])();

    // eslint-disable-next-line prefer-spread
    this.use.apply(this, defaultPlugins);
    this.setup(options);
  }

  _createClass(Jss, [{
    key: 'setup',
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.createGenerateClassName) {
        this.options.createGenerateClassName = options.createGenerateClassName;
        // $FlowFixMe
        this.generateClassName = options.createGenerateClassName();
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;
      if (options.virtual || options.Renderer) {
        this.options.Renderer = options.Renderer || (options.virtual ? _VirtualRenderer2['default'] : _DomRenderer2['default']);
      }

      // eslint-disable-next-line prefer-spread
      if (options.plugins) this.use.apply(this, options.plugins);

      return this;
    }

    /**
     * Create a Style Sheet.
     */

  }, {
    key: 'createStyleSheet',
    value: function createStyleSheet(styles) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var index = options.index;
      if (typeof index !== 'number') {
        index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
      }
      var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
        jss: this,
        generateClassName: options.generateClassName || this.generateClassName,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);

      return sheet;
    }

    /**
     * Detach the Style Sheet and remove it from the registry.
     */

  }, {
    key: 'removeStyleSheet',
    value: function removeStyleSheet(sheet) {
      sheet.detach();
      _sheets2['default'].remove(sheet);
      return this;
    }

    /**
     * Create a rule without a Style Sheet.
     */

  }, {
    key: 'createRule',
    value: function createRule(name) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // Enable rule without name for inline styles.
      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        options = style;
        style = name;
        name = undefined;
      }

      // Cast from RuleFactoryOptions to RuleOptions
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var ruleOptions = options;

      ruleOptions.jss = this;
      ruleOptions.Renderer = this.options.Renderer;
      if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      var rule = (0, _createRule3['default'])(name, style, ruleOptions);

      if (!ruleOptions.selector && rule instanceof _StyleRule2['default']) {
        rule.selector = '.' + ruleOptions.generateClassName(rule);
      }

      this.plugins.onProcessRule(rule);

      return rule;
    }

    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */

  }, {
    key: 'use',
    value: function use() {
      var _this = this;

      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }

      plugins.forEach(function (plugin) {
        // Avoids applying same plugin twice, at least based on ref.
        if (_this.options.plugins.indexOf(plugin) === -1) {
          _this.options.plugins.push(plugin);
          _this.plugins.use(plugin);
        }
      });

      return this;
    }
  }]);

  return Jss;
}();

exports['default'] = Jss;

/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginsRegistry = function () {
  function PluginsRegistry() {
    _classCallCheck(this, PluginsRegistry);

    this.hooks = {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []

      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */
    };
  }

  _createClass(PluginsRegistry, [{
    key: 'onCreateRule',
    value: function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
        var rule = this.hooks.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }
      return null;
    }

    /**
     * Call `onProcessRule` hooks.
     */

  }, {
    key: 'onProcessRule',
    value: function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
        this.hooks.onProcessRule[i](rule, sheet);
      }

      // $FlowFixMe
      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);

      rule.isProcessed = true;
    }

    /**
     * Call `onProcessStyle` hooks.
     */

  }, {
    key: 'onProcessStyle',
    value: function onProcessStyle(style, rule, sheet) {
      var nextStyle = style;

      for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
        nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet);
        // $FlowFixMe
        rule.style = nextStyle;
      }
    }

    /**
     * Call `onProcessSheet` hooks.
     */

  }, {
    key: 'onProcessSheet',
    value: function onProcessSheet(sheet) {
      for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
        this.hooks.onProcessSheet[i](sheet);
      }
    }

    /**
     * Call `onUpdate` hooks.
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(data, rule, sheet) {
      for (var i = 0; i < this.hooks.onUpdate.length; i++) {
        this.hooks.onUpdate[i](data, rule, sheet);
      }
    }

    /**
     * Call `onChangeValue` hooks.
     */

  }, {
    key: 'onChangeValue',
    value: function onChangeValue(value, prop, rule) {
      var processedValue = value;
      for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
        processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
      }
      return processedValue;
    }

    /**
     * Register a plugin.
     * If function is passed, it is a shortcut for `{onProcessRule}`.
     */

  }, {
    key: 'use',
    value: function use(plugin) {
      for (var name in plugin) {
        if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
      }
    }
  }]);

  return PluginsRegistry;
}();

exports['default'] = PluginsRegistry;

/***/ }),

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SimpleRule = __webpack_require__(1155);

var _SimpleRule2 = _interopRequireDefault(_SimpleRule);

var _KeyframesRule = __webpack_require__(1156);

var _KeyframesRule2 = _interopRequireDefault(_KeyframesRule);

var _ConditionalRule = __webpack_require__(1157);

var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);

var _FontFaceRule = __webpack_require__(1158);

var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);

var _ViewportRule = __webpack_require__(1159);

var _ViewportRule2 = _interopRequireDefault(_ViewportRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var classes = {
  '@charset': _SimpleRule2['default'],
  '@import': _SimpleRule2['default'],
  '@namespace': _SimpleRule2['default'],
  '@keyframes': _KeyframesRule2['default'],
  '@media': _ConditionalRule2['default'],
  '@supports': _ConditionalRule2['default'],
  '@font-face': _FontFaceRule2['default'],
  '@viewport': _ViewportRule2['default'],
  '@-ms-viewport': _ViewportRule2['default']

  /**
   * Generate plugins which will register all rules.
   */
};
exports['default'] = Object.keys(classes).map(function (key) {
  // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
  var re = new RegExp('^' + key);
  var onCreateRule = function onCreateRule(name, decl, options) {
    return re.test(name) ? new classes[key](name, decl, options) : null;
  };
  return { onCreateRule: onCreateRule };
});

/***/ }),

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleRule = function () {
  function SimpleRule(key, value, options) {
    _classCallCheck(this, SimpleRule);

    this.type = 'simple';
    this.isProcessed = false;

    this.key = key;
    this.value = value;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  _createClass(SimpleRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';
        for (var index = 0; index < this.value.length; index++) {
          str += this.key + ' ' + this.value[index] + ';';
          if (this.value[index + 1]) str += '\n';
        }
        return str;
      }

      return this.key + ' ' + this.value + ';';
    }
  }]);

  return SimpleRule;
}();

exports['default'] = SimpleRule;

/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RuleList = __webpack_require__(1119);

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Rule for @keyframes
 */
var KeyframesRule = function () {
  function KeyframesRule(key, frames, options) {
    _classCallCheck(this, KeyframesRule);

    this.type = 'keyframes';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, this.options, {
        parent: this,
        selector: name
      }));
    }

    this.rules.process();
  }

  /**
   * Generates a CSS string.
   */


  _createClass(KeyframesRule, [{
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      if (inner) inner += '\n';
      return this.key + ' {\n' + inner + '}';
    }
  }]);

  return KeyframesRule;
}();

exports['default'] = KeyframesRule;

/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RuleList = __webpack_require__(1119);

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Conditional rule for @media, @supports
 */
var ConditionalRule = function () {
  function ConditionalRule(key, styles, options) {
    _classCallCheck(this, ConditionalRule);

    this.type = 'conditional';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  /**
   * Get a rule.
   */


  _createClass(ConditionalRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      return inner ? this.key + ' {\n' + inner + '\n}' : '';
    }
  }]);

  return ConditionalRule;
}();

exports['default'] = ConditionalRule;

/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toCss = __webpack_require__(1125);

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontFaceRule = function () {
  function FontFaceRule(key, style, options) {
    _classCallCheck(this, FontFaceRule);

    this.type = 'font-face';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */


  _createClass(FontFaceRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';
        for (var index = 0; index < this.style.length; index++) {
          str += (0, _toCss2['default'])(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }
        return str;
      }

      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return FontFaceRule;
}();

exports['default'] = FontFaceRule;

/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toCss = __webpack_require__(1125);

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewportRule = function () {
  function ViewportRule(key, style, options) {
    _classCallCheck(this, ViewportRule);

    this.type = 'viewport';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */


  _createClass(ViewportRule, [{
    key: 'toString',
    value: function toString(options) {
      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return ViewportRule;
}();

exports['default'] = ViewportRule;

/***/ }),

/***/ 1160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyleRule = __webpack_require__(1118);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__(1121);

var _createRule2 = _interopRequireDefault(_createRule);

var _isObservable = __webpack_require__(1131);

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (!(0, _isObservable2['default'])(decl)) return null;

    // Cast `decl` to `Observable`, since it passed the type guard.
    var style$ = decl;

    var rule = (0, _createRule2['default'])(name, {}, options);

    // TODO
    // Call `stream.subscribe()` returns a subscription, which should be explicitly
    // unsubscribed from when we know this sheet is no longer needed.
    style$.subscribe(function (style) {
      for (var prop in style) {
        rule.prop(prop, style[prop]);
      }
    });

    return rule;
  },
  onProcessRule: function onProcessRule(rule) {
    if (!(rule instanceof _StyleRule2['default'])) return;
    var styleRule = rule;
    var style = styleRule.style;

    var _loop = function _loop(prop) {
      var value = style[prop];
      if (!(0, _isObservable2['default'])(value)) return 'continue';
      delete style[prop];
      value.subscribe({
        next: function next(nextValue) {
          styleRule.prop(prop, nextValue);
        }
      });
    };

    for (var prop in style) {
      var _ret = _loop(prop);

      if (_ret === 'continue') continue;
    }
  }
};

/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RuleList = __webpack_require__(1119);

var _RuleList2 = _interopRequireDefault(_RuleList);

var _StyleRule = __webpack_require__(1118);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _kebabCase = __webpack_require__(1162);

var _kebabCase2 = _interopRequireDefault(_kebabCase);

var _createRule = __webpack_require__(1121);

var _createRule2 = _interopRequireDefault(_createRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// A symbol replacement.
var now = Date.now();
var fnValuesNs = 'fnValues' + now;
var fnStyleNs = 'fnStyle' + ++now;

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (typeof decl !== 'function') return null;
    var rule = (0, _createRule2['default'])(name, {}, options);
    rule[fnStyleNs] = decl;
    return rule;
  },
  onProcessStyle: function onProcessStyle(style, rule) {
    var fn = {};
    for (var prop in style) {
      var value = style[prop];
      if (typeof value !== 'function') continue;
      delete style[prop];
      fn[(0, _kebabCase2['default'])(prop)] = value;
    }
    rule = rule;
    rule[fnValuesNs] = fn;
    return style;
  },
  onUpdate: function onUpdate(data, rule) {
    // It is a rules container like for e.g. ConditionalRule.
    if (rule.rules instanceof _RuleList2['default']) {
      rule.rules.update(data);
      return;
    }
    if (!(rule instanceof _StyleRule2['default'])) return;

    rule = rule;

    // If we have a fn values map, it is a rule with function values.
    if (rule[fnValuesNs]) {
      for (var prop in rule[fnValuesNs]) {
        rule.prop(prop, rule[fnValuesNs][prop](data));
      }
    }

    rule = rule;

    var fnStyle = rule[fnStyleNs];

    // If we have a style function, the entire rule is dynamic and style object
    // will be returned from that function.
    if (fnStyle) {
      var style = fnStyle(data);
      for (var _prop in style) {
        rule.prop(_prop, style[_prop]);
      }
    }
  }
};

/***/ }),

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var regExp = /([A-Z])/g;
var replace = function replace(str) {
  return "-" + str.toLowerCase();
};

exports["default"] = function (str) {
  return str.replace(regExp, replace);
};

/***/ }),

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

var _sheets = __webpack_require__(1126);

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__(1118);

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _toCssValue = __webpack_require__(1120);

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Get a style property.
 */
function getStyle(cssRule, prop) {
  try {
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}

/**
 * Set a style property.
 */
function setStyle(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = (0, _toCssValue2['default'])(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    }

    cssRule.style.setProperty(prop, cssValue);
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }
  return true;
}

var CSSRuleTypes = {
  STYLE_RULE: 1,
  KEYFRAMES_RULE: 7

  /**
   * Get the CSS Rule key.
   */

};var getKey = function () {
  var extractKey = function extractKey(cssText) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return cssText.substr(from, cssText.indexOf('{') - 1);
  };

  return function (cssRule) {
    if (cssRule.type === CSSRuleTypes.STYLE_RULE) return cssRule.selectorText;
    if (cssRule.type === CSSRuleTypes.KEYFRAMES_RULE) {
      var name = cssRule.name;

      if (name) return '@keyframes ' + name;

      // There is no rule.name in the following browsers:
      // - IE 9
      // - Safari 7.1.8
      // - Mobile Safari 9.0.0
      var cssText = cssRule.cssText;

      return '@' + extractKey(cssText, cssText.indexOf('keyframes'));
    }

    // Conditionals.
    return extractKey(cssRule.cssText);
  };
}();

/**
 * Set the selector.
 */
function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText;

  // Return false if setter was not successful.
  // Currently works in chrome only.
  return cssRule.selectorText === selectorText;
}

/**
 * Gets the `head` element upon the first call and caches it.
 */
var getHead = function () {
  var head = void 0;
  return function () {
    if (!head) head = document.head || document.getElementsByTagName('head')[0];
    return head;
  };
}();

/**
 * Gets a map of rule keys, where the property is an unescaped key and value
 * is a potentially escaped one.
 * It is used to identify CSS rules and the corresponding JSS rules. As an identifier
 * for CSSStyleRule we normally use `selectorText`. Though if original selector text
 * contains escaped code points e.g. `:not(#\\20)`, CSSOM will compile it to `:not(# )`
 * and so CSS rule's `selectorText` won't match JSS rule selector.
 *
 * https://www.w3.org/International/questions/qa-escapes#cssescapes
 */
var getUnescapedKeysMap = function () {
  var style = void 0;
  var isAttached = false;

  return function (rules) {
    var map = {};
    // https://github.com/facebook/flow/issues/2696
    if (!style) style = document.createElement('style');
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (!(rule instanceof _StyleRule2['default'])) continue;
      var selector = rule.selector;
      // Only unescape selector over CSSOM if it contains a back slash.

      if (selector && selector.indexOf('\\') !== -1) {
        // Lazilly attach when needed.
        if (!isAttached) {
          getHead().appendChild(style);
          isAttached = true;
        }
        style.textContent = selector + ' {}';
        var _style = style,
            sheet = _style.sheet;

        if (sheet) {
          var cssRules = sheet.cssRules;

          if (cssRules) map[cssRules[0].selectorText] = rule.key;
        }
      }
    }
    if (isAttached) {
      getHead().removeChild(style);
      isAttached = false;
    }
    return map;
  };
}();

/**
 * Find attached sheet with an index higher than the passed one.
 */
function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

/**
 * Find attached sheet with the highest index.
 */
function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

/**
 * Find a comment with "jss" inside.
 */
function findCommentNode(text) {
  var head = getHead();
  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = _sheets2['default'].registry;


  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);
    if (sheet) return sheet.renderer.element;

    // Otherwise insert after the last attached.
    sheet = findHighestSheet(registry, options);
    if (sheet) return sheet.renderer.element.nextElementSibling;
  }

  // Try to find a comment placeholder if registry is empty.
  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);
    if (comment) return comment.nextSibling;
    // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.
    (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
  }

  return null;
}

/**
 * Insert style element into the DOM.
 */
function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;

  var prevNode = findPrevNode(options);

  if (prevNode) {
    var parentNode = prevNode.parentNode;

    if (parentNode) parentNode.insertBefore(style, prevNode);
    return;
  }

  // Works with iframes and any node types.
  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var _parentNode = insertionPointElement.parentNode;

    if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
    return;
  }

  getHead().insertBefore(style, prevNode);
}

var DomRenderer = function () {
  function DomRenderer(sheet) {
    _classCallCheck(this, DomRenderer);

    this.getStyle = getStyle;
    this.setStyle = setStyle;
    this.setSelector = setSelector;
    this.getKey = getKey;
    this.getUnescapedKeysMap = getUnescapedKeysMap;
    this.hasInsertedRules = false;

    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) _sheets2['default'].add(sheet);

    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || document.createElement('style');
    this.element.type = 'text/css';
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    // eslint-disable-next-line no-underscore-dangle
    var nonce = global.__webpack_nonce__;
    if (nonce) this.element.setAttribute('nonce', nonce);
  }

  /**
   * Insert style element into render tree.
   */


  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696


  _createClass(DomRenderer, [{
    key: 'attach',
    value: function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return;

      // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // browsers remove those rules.
      // TODO figure out if its a bug and if it is known.
      // Workaround is to redeploy the sheet before attaching as a string.
      if (this.hasInsertedRules) {
        this.deploy();
        this.hasInsertedRules = false;
      }

      insertStyle(this.element, this.sheet.options);
    }

    /**
     * Remove style element from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      this.element.parentNode.removeChild(this.element);
    }

    /**
     * Inject CSS string into element.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      if (!this.sheet) return;
      this.element.textContent = '\n' + this.sheet.toString() + '\n';
    }

    /**
     * Insert a rule into element.
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      var sheet = this.element.sheet;
      var cssRules = sheet.cssRules;

      var str = rule.toString();
      if (!index) index = cssRules.length;

      if (!str) return false;

      try {
        sheet.insertRule(str, index);
      } catch (err) {
        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
        return false;
      }
      this.hasInsertedRules = true;

      return cssRules[index];
    }

    /**
     * Delete a rule.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(cssRule) {
      var sheet = this.element.sheet;

      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }

    /**
     * Get index of a CSS Rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var _index = 0; _index < cssRules.length; _index++) {
        if (cssRule === cssRules[_index]) return _index;
      }
      return -1;
    }

    /**
     * Generate a new CSS rule and replace the existing one.
     */

  }, {
    key: 'replaceRule',
    value: function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      var newCssRule = this.insertRule(rule, index);
      this.element.sheet.deleteRule(index);
      return newCssRule;
    }

    /**
     * Get all rules elements.
     */

  }, {
    key: 'getRules',
    value: function getRules() {
      return this.element.sheet.cssRules;
    }
  }]);

  return DomRenderer;
}();

exports['default'] = DomRenderer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(180)))

/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */

/**
 * Rendering backend to do nothing in nodejs.
 */
var VirtualRenderer = function () {
  function VirtualRenderer() {
    _classCallCheck(this, VirtualRenderer);
  }

  _createClass(VirtualRenderer, [{
    key: 'setStyle',
    value: function setStyle() {
      return true;
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      return '';
    }
  }, {
    key: 'setSelector',
    value: function setSelector() {
      return true;
    }
  }, {
    key: 'getKey',
    value: function getKey() {
      return '';
    }
  }, {
    key: 'attach',
    value: function attach() {}
  }, {
    key: 'detach',
    value: function detach() {}
  }, {
    key: 'deploy',
    value: function deploy() {}
  }, {
    key: 'insertRule',
    value: function insertRule() {
      return false;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule() {
      return true;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule() {
      return false;
    }
  }, {
    key: 'getRules',
    value: function getRules() {}
  }, {
    key: 'indexOf',
    value: function indexOf() {
      return -1;
    }
  }]);

  return VirtualRenderer;
}();

exports['default'] = VirtualRenderer;

/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports['default'] = jssGlobal;

var _jss = __webpack_require__(1129);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var propKey = '@global';
var prefixKey = '@global ';

var GlobalContainerRule = function () {
  function GlobalContainerRule(key, styles, options) {
    _classCallCheck(this, GlobalContainerRule);

    this.type = 'global';

    this.key = key;
    this.options = options;
    this.rules = new _jss.RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector], { selector: selector });
    }

    this.rules.process();
  }

  /**
   * Get a rule.
   */


  _createClass(GlobalContainerRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.rules.toString();
    }
  }]);

  return GlobalContainerRule;
}();

var GlobalPrefixedRule = function () {
  function GlobalPrefixedRule(name, style, options) {
    _classCallCheck(this, GlobalPrefixedRule);

    this.name = name;
    this.options = options;
    var selector = name.substr(prefixKey.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this,
      selector: selector
    }));
  }

  _createClass(GlobalPrefixedRule, [{
    key: 'toString',
    value: function toString(options) {
      return this.rule.toString(options);
    }
  }]);

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + ' ' + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }
  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;

  var rules = style[propKey];

  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[propKey];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop.substr(0, propKey.length) !== propKey) continue;

    var selector = addScope(prop.substr(propKey.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}

/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (name === propKey) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;


    if (parent) {
      if (parent.type === 'global' || parent.options.parent.type === 'global') {
        options.global = true;
      }
    }

    if (options.global) options.selector = name;

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;

    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return { onCreateRule: onCreateRule, onProcessRule: onProcessRule };
}

/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = jssNested;

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;

/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container) {
    return function (match, key) {
      var rule = container.getRule(key);
      if (rule) return rule.selector;
      (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
      return key;
    };
  }

  var hasAnd = function hasAnd(str) {
    return str.indexOf('&') !== -1;
  };

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);

    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', ';
        // Replace all & by the parent or prefix & with the parent.
        result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, options) {
    // Options has been already created, now we only increase index.
    if (options) return _extends({}, options, { index: options.index + 1 });

    var nestingLevel = rule.options.nestingLevel;

    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    return _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1
    });
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    var container = rule.options.parent;
    var options = void 0;
    var replaceRef = void 0;
    for (var prop in style) {
      var isNested = hasAnd(prop);
      var isNestedConditional = prop[0] === '@';

      if (!isNested && !isNestedConditional) continue;

      options = getOptions(rule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, rule.selector
        // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.
        );if (!replaceRef) replaceRef = getReplaceRef(container
        // Replace all $refs.
        );selector = selector.replace(refRegExp, replaceRef);

        container.addRule(selector, style[prop], _extends({}, options, { selector: selector }));
      } else if (isNestedConditional) {
        container
        // Place conditional right after the parent rule to ensure right ordering.
        .addRule(prop, null, options).addRule(rule.key, style[prop], { selector: rule.selector });
      }

      delete style[prop];
    }

    return style;
  }

  return { onProcessStyle: onProcessStyle };
}

/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = camelCase;
var regExp = /([A-Z])/g;

/**
 * Replace a string passed from String#replace.
 * @param {String} str
 * @return {String}
 */
function replace(str) {
  return "-" + str.toLowerCase();
}

/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */
function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    converted[prop.replace(regExp, replace)] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}

/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */
function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }
      return style;
    }

    return convertCase(style);
  }

  return { onProcessStyle: onProcessStyle };
}

/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = defaultUnit;

var _defaultUnits = __webpack_require__(1169);

var _defaultUnits2 = _interopRequireDefault(_defaultUnits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;
  var replace = function replace(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }
  return newObj;
}

var units = addCamelCasedVersion(_defaultUnits2['default']);

/**
 * Recursive deep style passing function
 *
 * @param {String} current property
 * @param {(Object|Array|Number|String)} property value
 * @param {Object} options
 * @return {(Object|Array|Number|String)} resulting value
 */
function iterate(prop, value, options) {
  if (!value) return value;

  var convertedValue = value;

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type === 'object' && Array.isArray(value)) type = 'array';

  switch (type) {
    case 'object':
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
        break;
      }
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
      }
      break;
    case 'array':
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
      break;
    case 'number':
      if (value !== 0) {
        convertedValue = value + (options[prop] || units[prop] || '');
      }
      break;
    default:
      break;
  }

  return convertedValue;
}

/**
 * Add unit to numeric values.
 */
function defaultUnit() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generated jss-default-unit CSS property units
 *
 * @type object
 */
exports['default'] = {
  'animation-delay': 'ms',
  'animation-duration': 'ms',
  'background-position': 'px',
  'background-position-x': 'px',
  'background-position-y': 'px',
  'background-size': 'px',
  border: 'px',
  'border-bottom': 'px',
  'border-bottom-left-radius': 'px',
  'border-bottom-right-radius': 'px',
  'border-bottom-width': 'px',
  'border-left': 'px',
  'border-left-width': 'px',
  'border-radius': 'px',
  'border-right': 'px',
  'border-right-width': 'px',
  'border-spacing': 'px',
  'border-top': 'px',
  'border-top-left-radius': 'px',
  'border-top-right-radius': 'px',
  'border-top-width': 'px',
  'border-width': 'px',
  'border-after-width': 'px',
  'border-before-width': 'px',
  'border-end-width': 'px',
  'border-horizontal-spacing': 'px',
  'border-start-width': 'px',
  'border-vertical-spacing': 'px',
  bottom: 'px',
  'box-shadow': 'px',
  'column-gap': 'px',
  'column-rule': 'px',
  'column-rule-width': 'px',
  'column-width': 'px',
  'flex-basis': 'px',
  'font-size': 'px',
  'font-size-delta': 'px',
  height: 'px',
  left: 'px',
  'letter-spacing': 'px',
  'logical-height': 'px',
  'logical-width': 'px',
  margin: 'px',
  'margin-after': 'px',
  'margin-before': 'px',
  'margin-bottom': 'px',
  'margin-left': 'px',
  'margin-right': 'px',
  'margin-top': 'px',
  'max-height': 'px',
  'max-width': 'px',
  'margin-end': 'px',
  'margin-start': 'px',
  'mask-position-x': 'px',
  'mask-position-y': 'px',
  'mask-size': 'px',
  'max-logical-height': 'px',
  'max-logical-width': 'px',
  'min-height': 'px',
  'min-width': 'px',
  'min-logical-height': 'px',
  'min-logical-width': 'px',
  motion: 'px',
  'motion-offset': 'px',
  outline: 'px',
  'outline-offset': 'px',
  'outline-width': 'px',
  padding: 'px',
  'padding-bottom': 'px',
  'padding-left': 'px',
  'padding-right': 'px',
  'padding-top': 'px',
  'padding-after': 'px',
  'padding-before': 'px',
  'padding-end': 'px',
  'padding-start': 'px',
  'perspective-origin-x': '%',
  'perspective-origin-y': '%',
  perspective: 'px',
  right: 'px',
  'shape-margin': 'px',
  size: 'px',
  'text-indent': 'px',
  'text-stroke': 'px',
  'text-stroke-width': 'px',
  top: 'px',
  'transform-origin': '%',
  'transform-origin-x': '%',
  'transform-origin-y': '%',
  'transform-origin-z': '%',
  'transition-delay': 'ms',
  'transition-duration': 'ms',
  'vertical-align': 'px',
  width: 'px',
  'word-spacing': 'px',
  // Not existing properties.
  // Used to avoid issues with jss-expand intergration.
  'box-shadow-x': 'px',
  'box-shadow-y': 'px',
  'box-shadow-blur': 'px',
  'box-shadow-spread': 'px',
  'font-line-height': 'px',
  'text-shadow-x': 'px',
  'text-shadow-y': 'px',
  'text-shadow-blur': 'px'
};

/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssVendorPrefixer;

var _cssVendor = __webpack_require__(1171);

var vendor = _interopRequireWildcard(_cssVendor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 * Add vendor prefix to a property name when needed.
 *
 * @param {Rule} rule
 * @api public
 */
function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      rule.key = '@' + vendor.prefix.css + rule.key.substr(1);
    }
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      var value = style[prop];

      var changeProp = false;
      var supportedProp = vendor.supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;

      var changeValue = false;
      var supportedValue = vendor.supportedValue(supportedProp, value);
      if (supportedValue && supportedValue !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue || value;
      }
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return vendor.supportedValue(prop, value);
  }

  return { onProcessRule: onProcessRule, onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;

var _prefix = __webpack_require__(1127);

var _prefix2 = _interopRequireDefault(_prefix);

var _supportedProperty = __webpack_require__(1172);

var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

var _supportedValue = __webpack_require__(1174);

var _supportedValue2 = _interopRequireDefault(_supportedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  prefix: _prefix2['default'],
  supportedProperty: _supportedProperty2['default'],
  supportedValue: _supportedValue2['default']
}; /**
    * CSS Vendor prefix detection and property feature testing.
    *
    * @copyright Oleg Slobodskoi 2015
    * @website https://github.com/jsstyles/css-vendor
    * @license MIT
    */

exports.prefix = _prefix2['default'];
exports.supportedProperty = _supportedProperty2['default'];
exports.supportedValue = _supportedValue2['default'];

/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedProperty;

var _isInBrowser = __webpack_require__(1122);

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__(1127);

var _prefix2 = _interopRequireDefault(_prefix);

var _camelize = __webpack_require__(1173);

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var el = void 0;
var cache = {};

if (_isInBrowser2['default']) {
  el = document.createElement('p');

  /**
   * We test every property on vendor prefix requirement.
   * Once tested, result is cached. It gives us up to 70% perf boost.
   * http://jsperf.com/element-style-object-access-vs-plain-object
   *
   * Prefill cache with known css properties to reduce amount of
   * properties we need to feature test at runtime.
   * http://davidwalsh.name/vendor-prefix
   */
  var computed = window.getComputedStyle(document.documentElement, '');
  for (var key in computed) {
    if (!isNaN(key)) cache[computed[key]] = computed[key];
  }
}

/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @return {String|Boolean}
 * @api public
 */
function supportedProperty(prop) {
  // For server-side rendering.
  if (!el) return prop;

  // We have not tested this prop yet, lets do the test.
  if (cache[prop] != null) return cache[prop];

  // Camelization is required because we can't test using
  // css syntax for e.g. in FF.
  // Test if property is supported as it is.
  if ((0, _camelize2['default'])(prop) in el.style) {
    cache[prop] = prop;
  }
  // Test if property is supported with vendor prefix.
  else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
      cache[prop] = _prefix2['default'].css + prop;
    } else {
      cache[prop] = false;
    }

  return cache[prop];
}

/***/ }),

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelize;
var regExp = /[-\s]+(.)?/g;

/**
 * Convert dash separated strings to camel cased.
 *
 * @param {String} str
 * @return {String}
 */
function camelize(str) {
  return str.replace(regExp, toUpper);
}

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}

/***/ }),

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedValue;

var _isInBrowser = __webpack_require__(1122);

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__(1127);

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cache = {};
var el = void 0;

if (_isInBrowser2['default']) el = document.createElement('p');

/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */
function supportedValue(property, value) {
  // For server-side rendering.
  if (!el) return value;

  // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

  var cacheKey = property + value;

  if (cache[cacheKey] != null) return cache[cacheKey];

  // IE can even throw an error in some cases, for e.g. style.content = 'bar'
  try {
    // Test value as it is.
    el.style[property] = value;
  } catch (err) {
    cache[cacheKey] = false;
    return false;
  }

  // Value is supported as it is.
  if (el.style[property] !== '') {
    cache[cacheKey] = value;
  } else {
    // Test value with vendor prefix.
    value = _prefix2['default'].css + value;

    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
    if (value === '-ms-flex') value = '-ms-flexbox';

    el.style[property] = value;

    // Value is supported with vendor prefix.
    if (el.style[property] !== '') cache[cacheKey] = value;
  }

  if (!cache[cacheKey]) cache[cacheKey] = false;

  // Reset style value.
  el.style[property] = '';

  return cache[cacheKey];
}

/***/ }),

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssPropsSort;
/**
 * Sort props by length.
 */
function jssPropsSort() {
  function sort(prop0, prop1) {
    return prop0.length - prop1.length;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    var newStyle = {};
    var props = Object.keys(style).sort(sort);
    for (var prop in props) {
      newStyle[props[prop]] = style[props[prop]];
    }
    return newStyle;
  }

  return { onProcessStyle: onProcessStyle };
}

/***/ }),

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(393);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _deepmerge = __webpack_require__(1123);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

var _createTypography = __webpack_require__(1177);

var _createTypography2 = _interopRequireDefault(_createTypography);

var _createBreakpoints = __webpack_require__(1178);

var _createBreakpoints2 = _interopRequireDefault(_createBreakpoints);

var _createPalette = __webpack_require__(1179);

var _createPalette2 = _interopRequireDefault(_createPalette);

var _createMixins = __webpack_require__(1186);

var _createMixins2 = _interopRequireDefault(_createMixins);

var _shadows = __webpack_require__(1187);

var _shadows2 = _interopRequireDefault(_shadows);

var _transitions = __webpack_require__(394);

var _transitions2 = _interopRequireDefault(_transitions);

var _zIndex = __webpack_require__(412);

var _zIndex2 = _interopRequireDefault(_zIndex);

var _spacing = __webpack_require__(403);

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$palette = options.palette,
      paletteInput = _options$palette === undefined ? {} : _options$palette,
      _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === undefined ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === undefined ? {} : _options$mixins,
      _options$typography = options.typography,
      typographyInput = _options$typography === undefined ? {} : _options$typography,
      shadowsInput = options.shadows,
      other = (0, _objectWithoutProperties3.default)(options, ['palette', 'breakpoints', 'mixins', 'typography', 'shadows']);


  var palette = (0, _createPalette2.default)(paletteInput);
  var breakpoints = (0, _createBreakpoints2.default)(breakpointsInput);

  var muiTheme = (0, _extends3.default)({
    direction: 'ltr',
    palette: palette,
    typography: (0, _createTypography2.default)(palette, typographyInput),
    mixins: (0, _createMixins2.default)(breakpoints, _spacing2.default, mixinsInput),
    breakpoints: breakpoints,
    shadows: shadowsInput || _shadows2.default
  }, (0, _deepmerge2.default)({
    transitions: _transitions2.default,
    spacing: _spacing2.default,
    zIndex: _zIndex2.default
  }, other));

   true ? (0, _warning2.default)(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.') : void 0;

  return muiTheme;
} // < 1kb payload overhead when lodash/merge is > 3kb.
exports.default = createMuiTheme;

/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(393);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = createTypography;

var _deepmerge = __webpack_require__(1123);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// < 1kb payload overhead when lodash/merge is > 3kb.

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === undefined ? '"Roboto", "Helvetica", "Arial", sans-serif' : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === undefined ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === undefined ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === undefined ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === undefined ? 500 : _ref$fontWeightMedium,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === undefined ? 16 : _ref$htmlFontSize,
      other = (0, _objectWithoutProperties3.default)(_ref, ['fontFamily', 'fontSize', 'fontWeightLight', 'fontWeightRegular', 'fontWeightMedium', 'htmlFontSize']);

  function pxToRem(value) {
    return value / htmlFontSize + 'rem';
  }

  return (0, _deepmerge2.default)({
    pxToRem: pxToRem,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    display4: {
      fontSize: pxToRem(112),
      fontWeight: fontWeightLight,
      fontFamily: fontFamily,
      letterSpacing: '-.04em',
      lineHeight: round(128 / 112) + 'em',
      marginLeft: '-.06em',
      color: palette.text.secondary
    },
    display3: {
      fontSize: pxToRem(56),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      letterSpacing: '-.02em',
      lineHeight: round(73 / 56) + 'em',
      marginLeft: '-.04em',
      color: palette.text.secondary
    },
    display2: {
      fontSize: pxToRem(45),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(48 / 45) + 'em',
      marginLeft: '-.04em',
      color: palette.text.secondary
    },
    display1: {
      fontSize: pxToRem(34),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(41 / 34) + 'em',
      marginLeft: '-.04em',
      color: palette.text.secondary
    },
    headline: {
      fontSize: pxToRem(24),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(32.5 / 24) + 'em',
      color: palette.text.primary
    },
    title: {
      fontSize: pxToRem(21),
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: round(24.5 / 21) + 'em',
      color: palette.text.primary
    },
    subheading: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(24 / 16) + 'em',
      color: palette.text.primary
    },
    body2: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: round(24 / 14) + 'em',
      color: palette.text.primary
    },
    body1: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(20.5 / 14) + 'em',
      color: palette.text.primary
    },
    caption: {
      fontSize: pxToRem(12),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(16.5 / 12) + 'em',
      color: palette.text.secondary
    },
    button: {
      fontSize: pxToRem(fontSize),
      textTransform: 'uppercase',
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily
    }
  }, other, {
    clone: false // No need to clone deep
  });
}

/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = undefined;

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(393);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = createBreakpoints;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = exports.keys = ['xs', 'sm', 'md', 'lg', 'xl'];

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === undefined ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === undefined ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === undefined ? 5 : _breakpoints$step,
      other = (0, _objectWithoutProperties3.default)(breakpoints, ['values', 'unit', 'step']);


  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return '@media (min-width:' + value + unit + ')';
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return '@media (max-width:' + (value - step / 100) + unit + ')';
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return '@media (min-width:' + values[start] + unit + ') and ' + ('(max-width:' + (values[keys[endIndex]] - step / 100) + unit + ')');
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return (0, _extends3.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark = exports.light = undefined;

var _keys = __webpack_require__(159);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(393);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = createPalette;

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

var _deepmerge = __webpack_require__(1123);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _indigo = __webpack_require__(1180);

var _indigo2 = _interopRequireDefault(_indigo);

var _pink = __webpack_require__(1181);

var _pink2 = _interopRequireDefault(_pink);

var _grey = __webpack_require__(1182);

var _grey2 = _interopRequireDefault(_grey);

var _red = __webpack_require__(1183);

var _red2 = _interopRequireDefault(_red);

var _common = __webpack_require__(1184);

var _common2 = _interopRequireDefault(_common);

var _colorManipulator = __webpack_require__(1185);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// < 1kb payload overhead when lodash/merge is > 3kb.
var light = exports.light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    icon: 'rgba(0, 0, 0, 0.38)',
    divider: 'rgba(0, 0, 0, 0.12)',
    lightDivider: 'rgba(0, 0, 0, 0.075)'
  },
  input: {
    bottomLine: 'rgba(0, 0, 0, 0.42)',
    helperText: 'rgba(0, 0, 0, 0.54)',
    labelText: 'rgba(0, 0, 0, 0.54)',
    inputText: 'rgba(0, 0, 0, 0.87)',
    disabled: 'rgba(0, 0, 0, 0.42)'
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)'
  },
  background: {
    default: _grey2.default[50],
    paper: _common2.default.white,
    appBar: _grey2.default[100],
    contentFrame: _grey2.default[200],
    chip: _grey2.default[300]
  },
  line: {
    stepper: _grey2.default[400]
  }
};

var dark = exports.dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    divider: 'rgba(255, 255, 255, 0.12)',
    lightDivider: 'rgba(255, 255, 255, 0.075)'
  },
  input: {
    bottomLine: 'rgba(255, 255, 255, 0.7)',
    helperText: 'rgba(255, 255, 255, 0.7)',
    labelText: 'rgba(255, 255, 255, 0.7)',
    inputText: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.5)'
  },
  action: {
    active: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.3)'
  },
  background: {
    default: '#303030',
    paper: _grey2.default[800],
    appBar: _grey2.default[900],
    contentFrame: _grey2.default[900],
    chip: _grey2.default[800]
  },
  line: {
    // TODO: What should the dark theme have for stepper line? Not stated in style guide
    stepper: _grey2.default[400]
  }
};

function getContrastText(hue) {
  if ((0, _colorManipulator.getContrastRatio)(hue, _common2.default.black) < 7) {
    return dark.text.primary;
  }
  return light.text.primary;
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === undefined ? _indigo2.default : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === undefined ? _pink2.default : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === undefined ? _red2.default : _palette$error,
      _palette$type = palette.type,
      type = _palette$type === undefined ? 'light' : _palette$type,
      other = (0, _objectWithoutProperties3.default)(palette, ['primary', 'secondary', 'error', 'type']);

  var shades = { dark: dark, light: light };

   true ? (0, _warning2.default)(Boolean(shades[type]), 'Material-UI: the palette type `' + type + '` is not supported.') : void 0;

  var paletteOutput = (0, _deepmerge2.default)({
    common: _common2.default,
    type: type,
    primary: primary,
    secondary: secondary,
    error: error,
    grey: _grey2.default,
    shades: shades,
    text: shades[type].text,
    input: shades[type].input,
    action: shades[type].action,
    background: shades[type].background,
    line: shades[type].line,
    getContrastText: getContrastText
  }, other, {
    clone: false // No need to clone deep
  });

  // Dev warnings
  if (true) {
    var difference = function difference(base, compare) {
      if (!compare) {
        compare = {};
      }

      return (0, _keys2.default)(base).filter(function (hue) {
        return !compare[hue];
      });
    };

    var paletteColorError = function paletteColorError(name, base, compare) {
      var missing = difference(base, compare);
       true ? (0, _warning2.default)(missing.length === 0, ['Material-UI: ' + name + ' color is missing the following hues: ' + missing.join(','), 'See the default colors, indigo, or pink, as exported from material-ui/colors.'].join('\n')) : void 0;
    };

    paletteColorError('primary', _indigo2.default, paletteOutput.primary);
    paletteColorError('secondary', _pink2.default, paletteOutput.secondary);
    paletteColorError('error', _red2.default, paletteOutput.error);
    paletteColorError('grey', _red2.default, paletteOutput.grey);
  }

  return paletteOutput;
}

/***/ }),

/***/ 1180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe',
  contrastDefaultColor: 'light'
};

exports.default = indigo;

/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162',
  contrastDefaultColor: 'light'
};

exports.default = pink;

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161',
  contrastDefaultColor: 'dark'
};

exports.default = grey;

/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000',
  contrastDefaultColor: 'light'
};

exports.default = red;

/***/ }),

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var common = {
  black: '#000',
  white: '#fff',
  transparent: 'rgba(0, 0, 0, 0)',
  fullBlack: 'rgba(0, 0, 0, 1)',
  darkBlack: 'rgba(0, 0, 0, 0.87)',
  lightBlack: 'rgba(0, 0, 0, 0.54)',
  minBlack: 'rgba(0, 0, 0, 0.26)',
  faintBlack: 'rgba(0, 0, 0, 0.12)',
  fullWhite: 'rgba(255, 255, 255, 1)',
  darkWhite: 'rgba(255, 255, 255, 0.87)',
  lightWhite: 'rgba(255, 255, 255, 0.54)'
};

exports.default = common;

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertColorToString = convertColorToString;
exports.convertHexToRGB = convertHexToRGB;
exports.decomposeColor = decomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;
//  weak
/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function convertColorToString(color) {
  var type = color.type,
      values = color.values;


  if (type.indexOf('rgb') > -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    for (var i = 0; i < 3; i += 1) {
      values[i] = parseInt(values[i], 10);
    }
  }

  var colorString = void 0;

  if (type.indexOf('hsl') > -1) {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
  } else {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
  }

  if (values.length === 4) {
    colorString += ', ' + color.values[3] + ')';
  } else {
    colorString += ')';
  }

  return colorString;
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */
function convertHexToRGB(color) {
  if (color.length === 4) {
    var extendedColor = '#';
    for (var i = 1; i < color.length; i += 1) {
      extendedColor += color.charAt(i) + color.charAt(i);
    }
    color = extendedColor;
  }

  var values = {
    r: parseInt(color.substr(1, 2), 16),
    g: parseInt(color.substr(3, 2), 16),
    b: parseInt(color.substr(5, 2), 16)
  };

  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */
function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  return { type: type, values: values };
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
 */
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);

  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  var decomposedColor = decomposeColor(color);

  if (decomposedColor.type.indexOf('rgb') > -1) {
    var rgb = decomposedColor.values.map(function (val) {
      val /= 255; // normalized
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  } else if (decomposedColor.type.indexOf('hsl') > -1) {
    return decomposedColor.values[2] / 100;
  }

  throw new Error('Material-UI: unsupported `' + color + '` color.');
}

/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value, 0, 1);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  color.values[3] = value;

  return convertColorToString(color);
}

/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return convertColorToString(color);
}

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return convertColorToString(color);
}

/***/ }),

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1124);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(105);

var _extends4 = _interopRequireDefault(_extends3);

exports.default = createMixins;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0, _extends4.default)({
    gutters: function gutters(styles) {
      return (0, _extends4.default)({
        paddingLeft: spacing.unit * 2,
        paddingRight: spacing.unit * 2
      }, styles, (0, _defineProperty3.default)({}, breakpoints.up('sm'), (0, _extends4.default)({
        paddingLeft: spacing.unit * 3,
        paddingRight: spacing.unit * 3
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0, _defineProperty3.default)(_toolbar, breakpoints.up('xs') + ' and (orientation: landscape)', {
      minHeight: 48
    }), (0, _defineProperty3.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return [(arguments.length <= 0 ? undefined : arguments[0]) + 'px ' + (arguments.length <= 1 ? undefined : arguments[1]) + 'px ' + (arguments.length <= 2 ? undefined : arguments[2]) + 'px ' + (arguments.length <= 3 ? undefined : arguments[3]) + 'px rgba(0, 0, 0, ' + shadowKeyUmbraOpacity + ')', (arguments.length <= 4 ? undefined : arguments[4]) + 'px ' + (arguments.length <= 5 ? undefined : arguments[5]) + 'px ' + (arguments.length <= 6 ? undefined : arguments[6]) + 'px ' + (arguments.length <= 7 ? undefined : arguments[7]) + 'px rgba(0, 0, 0, ' + shadowKeyPenumbraOpacity + ')', (arguments.length <= 8 ? undefined : arguments[8]) + 'px ' + (arguments.length <= 9 ? undefined : arguments[9]) + 'px ' + (arguments.length <= 10 ? undefined : arguments[10]) + 'px ' + (arguments.length <= 11 ? undefined : arguments[11]) + 'px rgba(0, 0, 0, ' + shadowAmbientShadowOpacity + ')'].join(',');
}

var shadows = ['none', createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1), createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2), createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

exports.default = shadows;

/***/ }),

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANNEL = undefined;

var _defineProperty2 = __webpack_require__(1124);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Same value used by react-jss
var CHANNEL = exports.CHANNEL = '__THEMING__';

var themeListener = {
  contextTypes: (0, _defineProperty3.default)({}, CHANNEL, _propTypes2.default.object),
  initial: function initial(context) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].getState();
  },
  subscribe: function subscribe(context, cb) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].subscribe(cb);
  },
  unsubscribe: function unsubscribe(context, subscriptionId) {
    if (context[CHANNEL]) {
      context[CHANNEL].unsubscribe(subscriptionId);
    }
  }
};

exports.default = themeListener;

/***/ }),

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGenerateClassName;

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generatorCounter = 0;

// Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js
function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$dangerouslyU = options.dangerouslyUseGlobalCSS,
      dangerouslyUseGlobalCSS = _options$dangerouslyU === undefined ? false : _options$dangerouslyU,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === undefined ? 'jss' : _options$productionPr;

  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var ruleCounter = 0;

  // - HMR can lead to many class name generators being instantiated,
  // so the warning is only triggered in production.
  // - We expect a class name generator to be instantiated per new request on the server,
  // so the warning is only triggered client side.
  // - You can get away with having multiple class name generators
  // by modifying the `productionPrefix`.
  if (false) {
    generatorCounter += 1;

    if (generatorCounter > 2) {
      // eslint-disable-next-line no-console
      console.error(['Material-UI: we have detected more than needed creation of the class name generator.', 'You should only use one class name generator on the client side.', 'If you do otherwise, you take the risk to have conflicting class names in production.'].join('\n'));
    }
  }

  return function (rule, styleSheet) {
    ruleCounter += 1;
     true ? (0, _warning2.default)(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join('')) : void 0;

    // Code branch the whole block at the expense of more code.
    if (dangerouslyUseGlobalCSS) {
      if (styleSheet && styleSheet.options.classNamePrefix) {
        var prefix = styleSheet.options.classNamePrefix;
        // Sanitize the string as will be used to prefix the generated class name.
        prefix = prefix.replace(escapeRegex, '-');

        if (prefix.match(/^Mui/)) {
          return prefix + '-' + rule.key;
        }

        if (true) {
          return prefix + '-' + rule.key + '-' + ruleCounter;
        }
      }

      if (false) {
        return '' + productionPrefix + ruleCounter;
      }

      return rule.key + '-' + ruleCounter;
    }

    if (false) {
      return '' + productionPrefix + ruleCounter;
    }

    if (styleSheet && styleSheet.options.classNamePrefix) {
      var _prefix = styleSheet.options.classNamePrefix;
      // Sanitize the string as will be used to prefix the generated class name.
      _prefix = _prefix.replace(escapeRegex, '-');

      return _prefix + '-' + rule.key + '-' + ruleCounter;
    }

    return rule.key + '-' + ruleCounter;
  };
}

/***/ }),

/***/ 1190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(159);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

var _deepmerge = __webpack_require__(1123);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// < 1kb payload overhead when lodash/merge is > 3kb.

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  function create(theme, name) {
    var styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;

    if (!theme.overrides || !name || !theme.overrides[name]) {
      return styles;
    }

    var overrides = theme.overrides[name];
    var stylesWithOverrides = (0, _extends3.default)({}, styles);

    (0, _keys2.default)(overrides).forEach(function (key) {
       true ? (0, _warning2.default)(stylesWithOverrides[key], ['Material-UI: you are trying to override a style that does not exist.', 'Fix the `' + key + '` key of `theme.overrides.' + name + '`.'].join('\n')) : void 0;
      stylesWithOverrides[key] = (0, _deepmerge2.default)(stylesWithOverrides[key], overrides[key]);
    });

    return stylesWithOverrides;
  }

  return {
    create: create,
    options: {},
    themingEnabled: themingEnabled
  };
}

exports.default = getStylesCreator;

/***/ }),

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(55);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(159);

var _keys2 = _interopRequireDefault(_keys);

exports.capitalizeFirstLetter = capitalizeFirstLetter;
exports.contains = contains;
exports.findIndex = findIndex;
exports.find = find;
exports.createChainedFunction = createChainedFunction;

var _warning = __webpack_require__(397);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function capitalizeFirstLetter(string) {
   true ? (0, _warning2.default)(typeof string === 'string', 'Material-UI: capitalizeFirstLetter(string) expects a string argument.') : void 0;

  return string.charAt(0).toUpperCase() + string.slice(1);
} //  weak

function contains(obj, pred) {
  return (0, _keys2.default)(pred).every(function (key) {
    return obj.hasOwnProperty(key) && obj[key] === pred[key];
  });
}

function findIndex(arr, pred) {
  var predType = typeof pred === 'undefined' ? 'undefined' : (0, _typeof3.default)(pred);
  for (var i = 0; i < arr.length; i += 1) {
    if (predType === 'function' && !!pred(arr[i], i, arr) === true) {
      return i;
    }
    if (predType === 'object' && contains(arr[i], pred)) {
      return i;
    }
    if (['string', 'number', 'boolean'].indexOf(predType) !== -1) {
      return arr.indexOf(pred);
    }
  }
  return -1;
}

function find(arr, pred) {
  var index = findIndex(arr, pred);
  return index > -1 ? arr[index] : undefined;
}

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (func) {
    return func != null;
  }).reduce(function (acc, func) {
     true ? (0, _warning2.default)(typeof func === 'function', 'Material-UI: invalid Argument Type, must only provide functions, undefined, or null.') : void 0;

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _AppBar = __webpack_require__(421);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(448);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(1135);

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = __webpack_require__(406);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _BottomNavigation = __webpack_require__(453);

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _fa = __webpack_require__(456);

var _fa2 = _interopRequireDefault(_fa);

var _colors = __webpack_require__(395);

var _MuiThemeProvider = __webpack_require__(1086);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(401);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/layout.js';

// Components


// Icon Components


// Theme stuff

var muiTheme = (0, _getMuiTheme2.default)({
  palette: {
    accent1Color: _colors.blue300
  }
});

var MOBILE_WIDTH = 600;

var LINKEDIN = 'https://www.linkedin.com/in/cole-inman-61738565/';
var GITHUB = 'https://github.com/coletrane/';
var FACEBOOK = 'https://www.facebook.com/uhmcole';
var EMAIL = 'eloc49@gmail.com';

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'isMobile',

    // Utils
    value: function isMobile() {
      // Normally this would be done using @media queries
      // but I am demonstrating React/JS knowledge with this project
      return document.documentElement.clientWidth < MOBILE_WIDTH;
    }
  }, {
    key: 'navPressed',
    value: function navPressed(event, value) {
      console.log(event);
      console.log(value);
    }

    // Lifecycle

  }, {
    key: 'mount',
    value: function mount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'title', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Cole Inman')), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), _react2.default.createElement(_AppBar2.default, { position: 'static', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_Toolbar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Cole Inman')), _react2.default.createElement('div', { 'class': 'main-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.props.children), _react2.default.createElement(_BottomNavigation2.default, { isMobile: true, onChange: this.navPressed, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { icon: _fa2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { icon: _fa2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { icon: _fa2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { icon: _fa2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIkFwcEJhciIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiSWNvbkJ1dHRvbiIsIkJvdHRvbU5hdmlnYXRpb24iLCJCb3R0b21OYXZpZ2F0aW9uQnV0dG9uIiwiRmFMaW5rZWRpblNxdWFyZSIsIkZhR2l0aHViU3F1YXJlIiwiRmFGYWNlYm9va1NxdWFyZSIsIkZhRW52ZWxvcGVTcXVhcmUiLCJibHVlMzAwIiwiTXVpVGhlbWVQcm92aWRlciIsImdldE11aVRoZW1lIiwibXVpVGhlbWUiLCJwYWxldHRlIiwiYWNjZW50MUNvbG9yIiwiTU9CSUxFX1dJRFRIIiwiTElOS0VESU4iLCJHSVRIVUIiLCJGQUNFQk9PSyIsIkVNQUlMIiwiTGF5b3V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImV2ZW50IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJjaGlsZHJlbiIsIm5hdlByZXNzZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBR2YsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQW1COzs7O0FBRzFCLEFBQU8sQUFDUCxBQUFPLEFBQ1AsQUFBTyxBQUNQLEFBQU87Ozs7QUFHUCxBQUFROztBQUNSLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7OztBQWpCUDs7O0FBUUE7OztBQU1BOztBQUlBLElBQU07O0FBQU4sQUFBaUIsQUFBWSxBQUNsQixBQUNPO0FBRFAsQUFDUDtBQUZ5QixBQUMzQixDQURlOztBQU1qQixJQUFNLGVBQU4sQUFBcUI7O0FBRXJCLElBQU0sV0FBTixBQUFpQjtBQUNqQixJQUFNLFNBQU4sQUFBZTtBQUNmLElBQU0sV0FBTixBQUFpQjtBQUNqQixJQUFNLFFBQU4sQUFBYzs7SSxBQUVPOzs7Ozs7Ozs7O1NBRW5COzs7K0JBQ1csQUFDVDtBQUNBO0FBQ0E7YUFBTyxTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsY0FBaEMsQUFBOEMsQUFDL0M7Ozs7K0IsQUFFVSxPQUFPLEEsT0FBTyxBQUN2QjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBRUQ7Ozs7Ozs0QkFDUSxBQUVQOzs7NkJBRVEsQUFDUDs2QkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsNENBQWlCLFVBQWxCLEFBQTRCO29CQUE1QjtzQkFBQSxBQUVBO0FBRkE7eUJBRUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO29CQUFqQjtzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBSUYsd0RBQU0sU0FBTixBQUFjO29CQUFkO3NCQU5GLEFBTUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFURixBQUVBLEFBT0UsQUFHRjtBQUhFOzJCQUdGLEFBQUMsa0NBQU8sVUFBUixBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQWJGLEFBWUEsQUFDRSxBQU1GLGdDQUFBLGNBQUEsU0FBSyxTQUFMLEFBQVc7b0JBQVg7c0JBQUEsQUFDSTtBQURKO2NBQ0ksQUFBSyxNQXBCVCxBQW1CQSxBQUNlLEFBR2YsMkJBQUEsQUFBQyw0Q0FBaUIsVUFBbEIsTUFBMkIsVUFBVSxLQUFyQyxBQUEwQztvQkFBMUM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMERBQUQsQUFBd0IsQUFBTTtvQkFBOUI7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQywwREFBRCxBQUF3QixBQUFNO29CQUE5QjtzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLDBEQUFELEFBQXdCLEFBQU07b0JBQTlCO3NCQUhGLEFBR0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsMERBQUQsQUFBd0IsQUFBTTtvQkFBOUI7c0JBN0JSLEFBQ0ksQUFDRSxBQXVCQSxBQUlFLEFBTVQ7QUFOUzs7Ozs7O0FBakR3QixBOztrQkFBZixBOztBQXdEcEIiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/coleinman/Programs/cole-inman/components/layout.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/coleinman/Programs/cole-inman/components/layout.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lNTQyZmQ0Mjk2NTYyNmU0MjBmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcnVsZXMvU3R5bGVSdWxlLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvUnVsZUxpc3QuanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzL2xpYi91dGlscy90b0Nzc1ZhbHVlLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvdXRpbHMvY3JlYXRlUnVsZS5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1pbi1icm93c2VyL2Rpc3QvbW9kdWxlLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlZXBtZXJnZS9kaXN0L2VzLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MvbGliL3V0aWxzL3RvQ3NzLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvc2hlZXRzLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy12ZW5kb3IvbGliL3ByZWZpeC5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1qc3MvbGliL25zLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvaW5kZXguanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzL2xpYi9TaGVldHNSZWdpc3RyeS5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MvbGliL3V0aWxzL2lzT2JzZXJ2YWJsZS5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MvbGliL3V0aWxzL2xpbmtSdWxlLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvdXRpbHMvY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUuanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzL2xpYi9TdHlsZVNoZWV0LmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1R5cG9ncmFwaHkvaW5kZXguanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5LmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL3dpdGhTdHlsZXMuanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL251bWJlci9taW4tc2FmZS1pbnRlZ2VyLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9udW1iZXIvbWluLXNhZmUtaW50ZWdlci5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXIuanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtanNzL2xpYi9jb250ZXh0VHlwZXMuanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtanNzL2xpYi9wcm9wVHlwZXMuanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzL2xpYi91dGlscy9nZXREeW5hbWljU3R5bGVzLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvU2hlZXRzTWFuYWdlci5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MvbGliL3V0aWxzL2Nsb25lU3R5bGUuanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MvbGliL3V0aWxzL2VzY2FwZS5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MvbGliL3V0aWxzL21vZHVsZUlkLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvSnNzLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvUGx1Z2luc1JlZ2lzdHJ5LmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcGx1Z2lucy9ydWxlcy5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MvbGliL3J1bGVzL1NpbXBsZVJ1bGUuanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzL2xpYi9ydWxlcy9LZXlmcmFtZXNSdWxlLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcnVsZXMvQ29uZGl0aW9uYWxSdWxlLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcnVsZXMvRm9udEZhY2VSdWxlLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcnVsZXMvVmlld3BvcnRSdWxlLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcGx1Z2lucy9vYnNlcnZhYmxlcy5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MvbGliL3BsdWdpbnMvZnVuY3Rpb25zLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvdXRpbHMva2ViYWJDYXNlLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcmVuZGVyZXJzL0RvbVJlbmRlcmVyLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcmVuZGVyZXJzL1ZpcnR1YWxSZW5kZXJlci5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtZ2xvYmFsL2xpYi9pbmRleC5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtbmVzdGVkL2xpYi9pbmRleC5qcz84ZTA0MzFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtY2FtZWwtY2FzZS9saWIvaW5kZXguanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLWRlZmF1bHQtdW5pdC9saWIvaW5kZXguanM/OGUwNDMxYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLWRlZmF1bHQtdW5pdC9saWIvZGVmYXVsdFVuaXRzLmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy12ZW5kb3ItcHJlZml4ZXIvbGliL2luZGV4LmpzPzhlMDQzMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy12ZW5kb3IvbGliL2luZGV4LmpzP2Q0NjU0NWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy12ZW5kb3IvbGliL3N1cHBvcnRlZC1wcm9wZXJ0eS5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtdmVuZG9yL2xpYi9jYW1lbGl6ZS5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtdmVuZG9yL2xpYi9zdXBwb3J0ZWQtdmFsdWUuanM/ZDQ2NTQ1ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXByb3BzLXNvcnQvbGliL2luZGV4LmpzP2Q0NjU0NWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N0eWxlcy9jcmVhdGVNdWlUaGVtZS5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlVHlwb2dyYXBoeS5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlQnJlYWtwb2ludHMuanM/ZDQ2NTQ1ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL2NyZWF0ZVBhbGV0dGUuanM/ZDQ2NTQ1ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvY29sb3JzL2luZGlnby5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9jb2xvcnMvcGluay5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9jb2xvcnMvZ3JleS5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9jb2xvcnMvcmVkLmpzP2Q0NjU0NWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2NvbG9ycy9jb21tb24uanM/ZDQ2NTQ1ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanM/ZDQ2NTQ1ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL2NyZWF0ZU1peGlucy5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvc2hhZG93cy5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvdGhlbWVMaXN0ZW5lci5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUuanM/ZDQ2NTQ1ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL2dldFN0eWxlc0NyZWF0b3IuanM/ZDQ2NTQ1ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvdXRpbHMvaGVscGVycy5qcz9kNDY1NDVmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzEwMjc1MWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX3RvQ3NzID0gcmVxdWlyZSgnLi4vdXRpbHMvdG9Dc3MnKTtcblxudmFyIF90b0NzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0Nzcyk7XG5cbnZhciBfdG9Dc3NWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL3RvQ3NzVmFsdWUnKTtcblxudmFyIF90b0Nzc1ZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQ3NzVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBTdHlsZVJ1bGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlUnVsZSk7XG5cbiAgICB0aGlzLnR5cGUgPSAnc3R5bGUnO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB2YXIgc2hlZXQgPSBvcHRpb25zLnNoZWV0LFxuICAgICAgICBSZW5kZXJlciA9IG9wdGlvbnMuUmVuZGVyZXIsXG4gICAgICAgIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcjtcblxuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIGlmIChzZWxlY3RvcikgdGhpcy5zZWxlY3RvclRleHQgPSBzZWxlY3RvcjtcbiAgICB0aGlzLnJlbmRlcmVyID0gc2hlZXQgPyBzaGVldC5yZW5kZXJlciA6IG5ldyBSZW5kZXJlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzZWxlY3RvciBzdHJpbmcuXG4gICAqIEF0dGVudGlvbjogdXNlIHRoaXMgd2l0aCBjYXV0aW9uLiBNb3N0IGJyb3dzZXJzIGRpZG4ndCBpbXBsZW1lbnRcbiAgICogc2VsZWN0b3JUZXh0IHNldHRlciwgc28gdGhpcyBtYXkgcmVzdWx0IGluIHJlcmVuZGVyaW5nIG9mIGVudGlyZSBTdHlsZSBTaGVldC5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoU3R5bGVSdWxlLCBbe1xuICAgIGtleTogJ3Byb3AnLFxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgb3Igc2V0IGEgc3R5bGUgcHJvcGVydHkuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByb3AobmFtZSwgbmV4dFZhbHVlKSB7XG4gICAgICAvLyBJdCdzIGEgc2V0dGVyLlxuICAgICAgaWYgKG5leHRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIHRoZSB2YWx1ZSBoYXMgbm90IGNoYW5nZWQuXG4gICAgICAgIGlmICh0aGlzLnN0eWxlW25hbWVdICE9PSBuZXh0VmFsdWUpIHtcbiAgICAgICAgICBuZXh0VmFsdWUgPSB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnMub25DaGFuZ2VWYWx1ZShuZXh0VmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMuc3R5bGVbbmFtZV0gPSBuZXh0VmFsdWU7XG5cbiAgICAgICAgICAvLyBSZW5kZXJhYmxlIGlzIGRlZmluZWQgaWYgU3R5bGVTaGVldCBvcHRpb24gYGxpbmtgIGlzIHRydWUuXG4gICAgICAgICAgaWYgKHRoaXMucmVuZGVyYWJsZSkgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnJlbmRlcmFibGUsIG5hbWUsIG5leHRWYWx1ZSk7ZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2hlZXQgPSB0aGlzLm9wdGlvbnMuc2hlZXQ7XG5cbiAgICAgICAgICAgIGlmIChzaGVldCAmJiBzaGVldC5hdHRhY2hlZCkge1xuICAgICAgICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGZhbHNlLCAnUnVsZSBpcyBub3QgbGlua2VkLiBNaXNzaW5nIHNoZWV0IG9wdGlvbiBcImxpbms6IHRydWVcIi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnN0eWxlW25hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHJ1bGUgdG8gYW4gZWxlbWVudCBpbmxpbmUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FwcGx5VG8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBseVRvKHJlbmRlcmFibGUpIHtcbiAgICAgIHZhciBqc29uID0gdGhpcy50b0pTT04oKTtcbiAgICAgIGZvciAodmFyIHByb3AgaW4ganNvbikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJlbmRlcmFibGUsIHByb3AsIGpzb25bcHJvcF0pO1xuICAgICAgfXJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgcnVsZS5cbiAgICAgKiBGYWxsYmFja3MgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICogVXNlZnVsIGZvciBpbmxpbmUgc3R5bGVzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd0b0pTT04nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgICB2YXIganNvbiA9IHt9O1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3R5bGVbcHJvcF07XG4gICAgICAgIGlmICgodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpICE9PSAnb2JqZWN0JykganNvbltwcm9wXSA9IHZhbHVlO2Vsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSBqc29uW3Byb3BdID0gKDAsIF90b0Nzc1ZhbHVlMlsnZGVmYXVsdCddKSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcblxuICAgICAgdmFyIGxpbmsgPSBzaGVldCA/IHNoZWV0Lm9wdGlvbnMubGluayA6IGZhbHNlO1xuICAgICAgdmFyIG9wdHMgPSBsaW5rID8gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHsgYWxsb3dFbXB0eTogdHJ1ZSB9KSA6IG9wdGlvbnM7XG4gICAgICByZXR1cm4gKDAsIF90b0NzczJbJ2RlZmF1bHQnXSkodGhpcy5zZWxlY3RvciwgdGhpcy5zdHlsZSwgb3B0cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VsZWN0b3InLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHNlbGVjdG9yKSB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09IHRoaXMuc2VsZWN0b3JUZXh0KSByZXR1cm47XG5cbiAgICAgIHRoaXMuc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3I7XG5cbiAgICAgIGlmICh0aGlzLnJlbmRlcmFibGUpIHtcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSB0aGlzLnJlbmRlcmVyLnNldFNlbGVjdG9yKHRoaXMucmVuZGVyYWJsZSwgc2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIElmIHNlbGVjdG9yIHNldHRlciBpcyBub3QgaW1wbGVtZW50ZWQsIHJlcmVuZGVyIHRoZSBydWxlLlxuICAgICAgICBpZiAoIWhhc0NoYW5nZWQgJiYgdGhpcy5yZW5kZXJhYmxlKSB7XG4gICAgICAgICAgdmFyIHJlbmRlcmFibGUgPSB0aGlzLnJlbmRlcmVyLnJlcGxhY2VSdWxlKHRoaXMucmVuZGVyYWJsZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKHJlbmRlcmFibGUpIHRoaXMucmVuZGVyYWJsZSA9IHJlbmRlcmFibGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VsZWN0b3Igc3RyaW5nLlxuICAgICAqL1xuICAgICxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdG9yVGV4dDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGVSdWxlO1xufSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTdHlsZVJ1bGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi9ydWxlcy9TdHlsZVJ1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDExMThcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NyZWF0ZVJ1bGUgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZVJ1bGUnKTtcblxudmFyIF9jcmVhdGVSdWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJ1bGUpO1xuXG52YXIgX2xpbmtSdWxlID0gcmVxdWlyZSgnLi91dGlscy9saW5rUnVsZScpO1xuXG52YXIgX2xpbmtSdWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmtSdWxlKTtcblxudmFyIF9TdHlsZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGVzL1N0eWxlUnVsZScpO1xuXG52YXIgX1N0eWxlUnVsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdHlsZVJ1bGUpO1xuXG52YXIgX2VzY2FwZSA9IHJlcXVpcmUoJy4vdXRpbHMvZXNjYXBlJyk7XG5cbnZhciBfZXNjYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VzY2FwZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBDb250YWlucyBydWxlcyBvYmplY3RzIGFuZCBhbGxvd3MgYWRkaW5nL3JlbW92aW5nIGV0Yy5cbiAqIElzIHVzZWQgZm9yIGUuZy4gYnkgYFN0eWxlU2hlZXRgIG9yIGBDb25kaXRpb25hbFJ1bGVgLlxuICovXG52YXIgUnVsZUxpc3QgPSBmdW5jdGlvbiAoKSB7XG5cbiAgLy8gT3JpZ2luYWwgc3R5bGVzIG9iamVjdC5cbiAgZnVuY3Rpb24gUnVsZUxpc3Qob3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSdWxlTGlzdCk7XG5cbiAgICB0aGlzLm1hcCA9IHt9O1xuICAgIHRoaXMucmF3ID0ge307XG4gICAgdGhpcy5pbmRleCA9IFtdO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmNsYXNzZXMgPSBvcHRpb25zLmNsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCByZWdpc3RlciBydWxlLlxuICAgKlxuICAgKiBXaWxsIG5vdCByZW5kZXIgYWZ0ZXIgU3R5bGUgU2hlZXQgd2FzIHJlbmRlcmVkIHRoZSBmaXJzdCB0aW1lLlxuICAgKi9cblxuXG4gIC8vIFVzZWQgdG8gZW5zdXJlIGNvcnJlY3QgcnVsZXMgb3JkZXIuXG5cbiAgLy8gUnVsZXMgcmVnaXN0cnkgZm9yIGFjY2VzcyBieSAuZ2V0KCkgbWV0aG9kLlxuICAvLyBJdCBjb250YWlucyB0aGUgc2FtZSBydWxlIHJlZ2lzdGVyZWQgYnkgbmFtZSBhbmQgYnkgc2VsZWN0b3IuXG5cblxuICBfY3JlYXRlQ2xhc3MoUnVsZUxpc3QsIFt7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBfb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBwYXJlbnQgPSBfb3B0aW9ucy5wYXJlbnQsXG4gICAgICAgICAgc2hlZXQgPSBfb3B0aW9ucy5zaGVldCxcbiAgICAgICAgICBqc3MgPSBfb3B0aW9ucy5qc3MsXG4gICAgICAgICAgUmVuZGVyZXIgPSBfb3B0aW9ucy5SZW5kZXJlcixcbiAgICAgICAgICBnZW5lcmF0ZUNsYXNzTmFtZSA9IF9vcHRpb25zLmdlbmVyYXRlQ2xhc3NOYW1lO1xuXG5cbiAgICAgIG9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzZXM6IHRoaXMuY2xhc3NlcyxcbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgICAganNzOiBqc3MsXG4gICAgICAgIFJlbmRlcmVyOiBSZW5kZXJlcixcbiAgICAgICAgZ2VuZXJhdGVDbGFzc05hbWU6IGdlbmVyYXRlQ2xhc3NOYW1lXG4gICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgaWYgKCFvcHRpb25zLnNlbGVjdG9yICYmIHRoaXMuY2xhc3Nlc1tuYW1lXSkge1xuICAgICAgICBvcHRpb25zLnNlbGVjdG9yID0gJy4nICsgKDAsIF9lc2NhcGUyWydkZWZhdWx0J10pKHRoaXMuY2xhc3Nlc1tuYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmF3W25hbWVdID0gZGVjbDtcblxuICAgICAgdmFyIHJ1bGUgPSAoMCwgX2NyZWF0ZVJ1bGUyWydkZWZhdWx0J10pKG5hbWUsIGRlY2wsIG9wdGlvbnMpO1xuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gdm9pZCAwO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuc2VsZWN0b3IgJiYgcnVsZSBpbnN0YW5jZW9mIF9TdHlsZVJ1bGUyWydkZWZhdWx0J10pIHtcbiAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUocnVsZSwgc2hlZXQpO1xuICAgICAgICBydWxlLnNlbGVjdG9yID0gJy4nICsgKDAsIF9lc2NhcGUyWydkZWZhdWx0J10pKGNsYXNzTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVnaXN0ZXIocnVsZSwgY2xhc3NOYW1lKTtcblxuICAgICAgdmFyIGluZGV4ID0gb3B0aW9ucy5pbmRleCA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbmRleC5sZW5ndGggOiBvcHRpb25zLmluZGV4O1xuICAgICAgdGhpcy5pbmRleC5zcGxpY2UoaW5kZXgsIDAsIHJ1bGUpO1xuXG4gICAgICByZXR1cm4gcnVsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBydWxlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwW25hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhIHJ1bGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShydWxlKSB7XG4gICAgICB0aGlzLnVucmVnaXN0ZXIocnVsZSk7XG4gICAgICB0aGlzLmluZGV4LnNwbGljZSh0aGlzLmluZGV4T2YocnVsZSksIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2luZGV4T2YnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmluZGV4LmluZGV4T2YocnVsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGBvblByb2Nlc3NSdWxlKClgIHBsdWdpbnMgb24gZXZlcnkgcnVsZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncHJvY2VzcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG4gICAgICB2YXIgcGx1Z2lucyA9IHRoaXMub3B0aW9ucy5qc3MucGx1Z2lucztcbiAgICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgYXJyYXkgYmVjYXVzZSBpZiB3ZSBtb2RpZnkgdGhlIGluZGV4IHNvbWV3aGVyZSBlbHNlIGR1cmluZyBhIGxvb3BcbiAgICAgIC8vIHdlIGVuZCB1cCB3aXRoIHZlcnkgaGFyZC10by10cmFjay1kb3duIHNpZGUgZWZmZWN0cy5cblxuICAgICAgdGhpcy5pbmRleC5zbGljZSgwKS5mb3JFYWNoKHBsdWdpbnMub25Qcm9jZXNzUnVsZSwgcGx1Z2lucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBydWxlIGluIGAubWFwYCBhbmQgYC5jbGFzc2VzYCBtYXBzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKHJ1bGUsIGNsYXNzTmFtZSkge1xuICAgICAgdGhpcy5tYXBbcnVsZS5rZXldID0gcnVsZTtcbiAgICAgIGlmIChydWxlIGluc3RhbmNlb2YgX1N0eWxlUnVsZTJbJ2RlZmF1bHQnXSkge1xuICAgICAgICB0aGlzLm1hcFtydWxlLnNlbGVjdG9yXSA9IHJ1bGU7XG4gICAgICAgIGlmIChjbGFzc05hbWUpIHRoaXMuY2xhc3Nlc1tydWxlLmtleV0gPSBjbGFzc05hbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlciBhIHJ1bGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VucmVnaXN0ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnJlZ2lzdGVyKHJ1bGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm1hcFtydWxlLmtleV07XG4gICAgICBpZiAocnVsZSBpbnN0YW5jZW9mIF9TdHlsZVJ1bGUyWydkZWZhdWx0J10pIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubWFwW3J1bGUuc2VsZWN0b3JdO1xuICAgICAgICBkZWxldGUgdGhpcy5jbGFzc2VzW3J1bGUua2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGZ1bmN0aW9uIHZhbHVlcyB3aXRoIGEgbmV3IGRhdGEuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShuYW1lLCBkYXRhKSB7XG4gICAgICB2YXIgX29wdGlvbnMyID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIHBsdWdpbnMgPSBfb3B0aW9uczIuanNzLnBsdWdpbnMsXG4gICAgICAgICAgc2hlZXQgPSBfb3B0aW9uczIuc2hlZXQ7XG5cbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGx1Z2lucy5vblVwZGF0ZShkYXRhLCB0aGlzLmdldChuYW1lKSwgc2hlZXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmluZGV4Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBwbHVnaW5zLm9uVXBkYXRlKG5hbWUsIHRoaXMuaW5kZXhbaW5kZXhdLCBzaGVldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGluayByZW5kZXJhYmxlIHJ1bGVzIHdpdGggQ1NTUnVsZUxpc3QuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2xpbmsnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rKGNzc1J1bGVzKSB7XG4gICAgICB2YXIgbWFwID0gdGhpcy5vcHRpb25zLnNoZWV0LnJlbmRlcmVyLmdldFVuZXNjYXBlZEtleXNNYXAodGhpcy5pbmRleCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3NzUnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNzc1J1bGUgPSBjc3NSdWxlc1tpXTtcbiAgICAgICAgdmFyIF9rZXkgPSB0aGlzLm9wdGlvbnMuc2hlZXQucmVuZGVyZXIuZ2V0S2V5KGNzc1J1bGUpO1xuICAgICAgICBpZiAobWFwW19rZXldKSBfa2V5ID0gbWFwW19rZXldO1xuICAgICAgICB2YXIgcnVsZSA9IHRoaXMubWFwW19rZXldO1xuICAgICAgICBpZiAocnVsZSkgKDAsIF9saW5rUnVsZTJbJ2RlZmF1bHQnXSkocnVsZSwgY3NzUnVsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBydWxlcyB0byBhIENTUyBzdHJpbmcuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuXG4gICAgICB2YXIgbGluayA9IHNoZWV0ID8gc2hlZXQub3B0aW9ucy5saW5rIDogZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmluZGV4Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgcnVsZSA9IHRoaXMuaW5kZXhbaW5kZXhdO1xuICAgICAgICB2YXIgY3NzID0gcnVsZS50b1N0cmluZyhvcHRpb25zKTtcblxuICAgICAgICAvLyBObyBuZWVkIHRvIHJlbmRlciBhbiBlbXB0eSBydWxlLlxuICAgICAgICBpZiAoIWNzcyAmJiAhbGluaykgY29udGludWU7XG5cbiAgICAgICAgaWYgKHN0cikgc3RyICs9ICdcXG4nO1xuICAgICAgICBzdHIgKz0gY3NzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSdWxlTGlzdDtcbn0oKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gUnVsZUxpc3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi9SdWxlTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSB0b0Nzc1ZhbHVlO1xudmFyIGpvaW4gPSBmdW5jdGlvbiBqb2luKHZhbHVlLCBieSkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBSZW1vdmUgIWltcG9ydGFudCBmcm9tIHRoZSB2YWx1ZSwgaXQgd2lsbCBiZSByZWFkZGVkIGxhdGVyLlxuICAgIGlmICh2YWx1ZVtpXSA9PT0gJyFpbXBvcnRhbnQnKSBicmVhaztcbiAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gYnk7XG4gICAgcmVzdWx0ICs9IHZhbHVlW2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGFycmF5IHZhbHVlcyB0byBzdHJpbmcuXG4gKlxuICogYG1hcmdpbjogW1snNXB4JywgJzEwcHgnXV1gID4gYG1hcmdpbjogNXB4IDEwcHg7YFxuICogYGJvcmRlcjogWycxcHgnLCAnMnB4J11gID4gYGJvcmRlcjogMXB4LCAycHg7YFxuICogYG1hcmdpbjogW1snNXB4JywgJzEwcHgnXSwgJyFpbXBvcnRhbnQnXWAgPiBgbWFyZ2luOiA1cHggMTBweCAhaW1wb3J0YW50O2BcbiAqIGBjb2xvcjogWydyZWQnLCAhaW1wb3J0YW50XWAgPiBgY29sb3I6IHJlZCAhaW1wb3J0YW50O2BcbiAqL1xuZnVuY3Rpb24gdG9Dc3NWYWx1ZSh2YWx1ZSkge1xuICB2YXIgaWdub3JlSW1wb3J0YW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG5cbiAgdmFyIGNzc1ZhbHVlID0gJyc7XG5cbiAgLy8gU3VwcG9ydCBzcGFjZSBzZXBhcmF0ZWQgdmFsdWVzIHZpYSBgW1snNXB4JywgJzEwcHgnXV1gLlxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZVswXSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVbaV0gPT09ICchaW1wb3J0YW50JykgYnJlYWs7XG4gICAgICBpZiAoY3NzVmFsdWUpIGNzc1ZhbHVlICs9ICcsICc7XG4gICAgICBjc3NWYWx1ZSArPSBqb2luKHZhbHVlW2ldLCAnICcpO1xuICAgIH1cbiAgfSBlbHNlIGNzc1ZhbHVlID0gam9pbih2YWx1ZSwgJywgJyk7XG5cbiAgLy8gQWRkICFpbXBvcnRhbnQsIGJlY2F1c2UgaXQgd2FzIGlnbm9yZWQuXG4gIGlmICghaWdub3JlSW1wb3J0YW50ICYmIHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnIWltcG9ydGFudCcpIHtcbiAgICBjc3NWYWx1ZSArPSAnICFpbXBvcnRhbnQnO1xuICB9XG5cbiAgcmV0dXJuIGNzc1ZhbHVlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvdXRpbHMvdG9Dc3NWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVSdWxlO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9TdHlsZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlcy9TdHlsZVJ1bGUnKTtcblxudmFyIF9TdHlsZVJ1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3R5bGVSdWxlKTtcblxudmFyIF9jbG9uZVN0eWxlID0gcmVxdWlyZSgnLi4vdXRpbHMvY2xvbmVTdHlsZScpO1xuXG52YXIgX2Nsb25lU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xvbmVTdHlsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGUgYSBydWxlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSdWxlKCkge1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ3VubmFtZWQnO1xuICB2YXIgZGVjbCA9IGFyZ3VtZW50c1sxXTtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG4gIHZhciBqc3MgPSBvcHRpb25zLmpzcztcblxuICB2YXIgZGVjbENvcHkgPSAoMCwgX2Nsb25lU3R5bGUyWydkZWZhdWx0J10pKGRlY2wpO1xuXG4gIHZhciBydWxlID0ganNzLnBsdWdpbnMub25DcmVhdGVSdWxlKG5hbWUsIGRlY2xDb3B5LCBvcHRpb25zKTtcbiAgaWYgKHJ1bGUpIHJldHVybiBydWxlO1xuXG4gIC8vIEl0IGlzIGFuIGF0LXJ1bGUgYW5kIGl0IGhhcyBubyBpbnN0YW5jZS5cbiAgaWYgKG5hbWVbMF0gPT09ICdAJykge1xuICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoZmFsc2UsICdbSlNTXSBVbmtub3duIGF0LXJ1bGUgJXMnLCBuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgX1N0eWxlUnVsZTJbJ2RlZmF1bHQnXShuYW1lLCBkZWNsQ29weSwgb3B0aW9ucyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi91dGlscy9jcmVhdGVSdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0IHZhciBpc0Jyb3dzZXIgPSAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSBcIm9iamVjdFwiICYmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihkb2N1bWVudCkpID09PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5ub2RlVHlwZSA9PT0gOTtcblxuZXhwb3J0IGRlZmF1bHQgaXNCcm93c2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXMtaW4tYnJvd3Nlci9kaXN0L21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuXHR2YXIgY2xvbmUgPSAhb3B0aW9uc0FyZ3VtZW50IHx8IG9wdGlvbnNBcmd1bWVudC5jbG9uZSAhPT0gZmFsc2U7XG5cblx0cmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpXG5cdFx0PyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuXHRyZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnNBcmd1bWVudClcblx0fSlcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuXHR2YXIgZGVzdGluYXRpb24gPSB7fTtcblx0aWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcblx0XHRPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodGFyZ2V0W2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG5cdFx0fSk7XG5cdH1cblx0T2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcblx0dmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG5cdHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuXHR2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG5cdHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuXHRpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG5cdH0gZWxzZSBpZiAoc291cmNlSXNBcnJheSkge1xuXHRcdHZhciBhcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXHRcdHJldHVybiBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG5cdH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpXG5cdH1cblxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnNBcmd1bWVudClcblx0fSwge30pXG59O1xuXG52YXIgZGVlcG1lcmdlXzEgPSBkZWVwbWVyZ2U7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZXBtZXJnZV8xO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGVlcG1lcmdlL2Rpc3QvZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExMjNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHRvQ3NzO1xuXG52YXIgX3RvQ3NzVmFsdWUgPSByZXF1aXJlKCcuL3RvQ3NzVmFsdWUnKTtcblxudmFyIF90b0Nzc1ZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQ3NzVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICogSW5kZW50IGEgc3RyaW5nLlxuICogaHR0cDovL2pzcGVyZi5jb20vYXJyYXktam9pbi12cy1mb3JcbiAqL1xuZnVuY3Rpb24gaW5kZW50U3RyKHN0ciwgaW5kZW50KSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGluZGVudDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCArPSAnICAnO1xuICB9cmV0dXJuIHJlc3VsdCArIHN0cjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIFJ1bGUgdG8gQ1NTIHN0cmluZy5cbiAqL1xuXG5mdW5jdGlvbiB0b0NzcyhzZWxlY3Rvciwgc3R5bGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gIHZhciByZXN1bHQgPSAnJztcblxuICBpZiAoIXN0eWxlKSByZXR1cm4gcmVzdWx0O1xuXG4gIHZhciBfb3B0aW9ucyRpbmRlbnQgPSBvcHRpb25zLmluZGVudCxcbiAgICAgIGluZGVudCA9IF9vcHRpb25zJGluZGVudCA9PT0gdW5kZWZpbmVkID8gMCA6IF9vcHRpb25zJGluZGVudDtcbiAgdmFyIGZhbGxiYWNrcyA9IHN0eWxlLmZhbGxiYWNrcztcblxuXG4gIGluZGVudCsrO1xuXG4gIC8vIEFwcGx5IGZhbGxiYWNrcyBmaXJzdC5cbiAgaWYgKGZhbGxiYWNrcykge1xuICAgIC8vIEFycmF5IHN5bnRheCB7ZmFsbGJhY2tzOiBbe3Byb3A6IHZhbHVlfV19XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmFsbGJhY2tzKSkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGZhbGxiYWNrcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGZhbGxiYWNrID0gZmFsbGJhY2tzW2luZGV4XTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBmYWxsYmFjaykge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGZhbGxiYWNrW3Byb3BdO1xuICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcbicgKyBpbmRlbnRTdHIocHJvcCArICc6ICcgKyAoMCwgX3RvQ3NzVmFsdWUyWydkZWZhdWx0J10pKHZhbHVlKSArICc7JywgaW5kZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gT2JqZWN0IHN5bnRheCB7ZmFsbGJhY2tzOiB7cHJvcDogdmFsdWV9fVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBfcHJvcCBpbiBmYWxsYmFja3MpIHtcbiAgICAgICAgICB2YXIgX3ZhbHVlID0gZmFsbGJhY2tzW19wcm9wXTtcbiAgICAgICAgICBpZiAoX3ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFxuJyArIGluZGVudFN0cihfcHJvcCArICc6ICcgKyAoMCwgX3RvQ3NzVmFsdWUyWydkZWZhdWx0J10pKF92YWx1ZSkgKyAnOycsIGluZGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfcHJvcDIgaW4gc3R5bGUpIHtcbiAgICB2YXIgX3ZhbHVlMiA9IHN0eWxlW19wcm9wMl07XG4gICAgaWYgKF92YWx1ZTIgIT0gbnVsbCAmJiBfcHJvcDIgIT09ICdmYWxsYmFja3MnKSB7XG4gICAgICByZXN1bHQgKz0gJ1xcbicgKyBpbmRlbnRTdHIoX3Byb3AyICsgJzogJyArICgwLCBfdG9Dc3NWYWx1ZTJbJ2RlZmF1bHQnXSkoX3ZhbHVlMikgKyAnOycsIGluZGVudCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWxsb3cgZW1wdHkgc3R5bGUgaW4gdGhpcyBjYXNlLCBiZWNhdXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhZGRlZCBkeW5hbWljYWxseS5cbiAgaWYgKCFyZXN1bHQgJiYgIW9wdGlvbnMuYWxsb3dFbXB0eSkgcmV0dXJuIHJlc3VsdDtcblxuICBpbmRlbnQtLTtcbiAgcmVzdWx0ID0gaW5kZW50U3RyKHNlbGVjdG9yICsgJyB7JyArIHJlc3VsdCArICdcXG4nLCBpbmRlbnQpICsgaW5kZW50U3RyKCd9JywgaW5kZW50KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvdXRpbHMvdG9Dc3MuanNcbi8vIG1vZHVsZSBpZCA9IDExMjVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1NoZWV0c1JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9TaGVldHNSZWdpc3RyeScpO1xuXG52YXIgX1NoZWV0c1JlZ2lzdHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NoZWV0c1JlZ2lzdHJ5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIFRoaXMgaXMgYSBnbG9iYWwgc2hlZXRzIHJlZ2lzdHJ5LiBPbmx5IERvbVJlbmRlcmVyIHdpbGwgYWRkIHNoZWV0cyB0byBpdC5cbiAqIE9uIHRoZSBzZXJ2ZXIgb25lIHNob3VsZCB1c2UgYW4gb3duIFNoZWV0c1JlZ2lzdHJ5IGluc3RhbmNlIGFuZCBhZGQgdGhlXG4gKiBzaGVldHMgdG8gaXQsIGJlY2F1c2UgeW91IG5lZWQgdG8gbWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyByZWdpc3RyeSBmb3JcbiAqIGVhY2ggcmVxdWVzdCBpbiBvcmRlciB0byBub3QgbGVhayBzaGVldHMgYWNyb3NzIHJlcXVlc3RzLlxuICovXG5leHBvcnRzWydkZWZhdWx0J10gPSBuZXcgX1NoZWV0c1JlZ2lzdHJ5MlsnZGVmYXVsdCddKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi9zaGVldHMuanNcbi8vIG1vZHVsZSBpZCA9IDExMjZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzSW5Ccm93c2VyID0gcmVxdWlyZSgnaXMtaW4tYnJvd3NlcicpO1xuXG52YXIgX2lzSW5Ccm93c2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSW5Ccm93c2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIganMgPSAnJzsgLyoqXG4gICAgICAgICAgICAgICogRXhwb3J0IGphdmFzY3JpcHQgc3R5bGUgYW5kIGNzcyBzdHlsZSB2ZW5kb3IgcHJlZml4ZXMuXG4gICAgICAgICAgICAgICogQmFzZWQgb24gXCJ0cmFuc2Zvcm1cIiBzdXBwb3J0IHRlc3QuXG4gICAgICAgICAgICAgICovXG5cbnZhciBjc3MgPSAnJztcblxuLy8gV2Ugc2hvdWxkIG5vdCBkbyBhbnl0aGluZyBpZiByZXF1aXJlZCBzZXJ2ZXJzaWRlLlxuaWYgKF9pc0luQnJvd3NlcjJbJ2RlZmF1bHQnXSkge1xuICAvLyBPcmRlciBtYXR0ZXJzLiBXZSBuZWVkIHRvIGNoZWNrIFdlYmtpdCB0aGUgbGFzdCBvbmUgYmVjYXVzZVxuICAvLyBvdGhlciB2ZW5kb3JzIHVzZSB0byBhZGQgV2Via2l0IHByZWZpeGVzIHRvIHNvbWUgcHJvcGVydGllc1xuICB2YXIganNDc3NNYXAgPSB7XG4gICAgTW96OiAnLW1vei0nLFxuICAgIC8vIElFIGRpZCBpdCB3cm9uZyBhZ2FpbiAuLi5cbiAgICBtczogJy1tcy0nLFxuICAgIE86ICctby0nLFxuICAgIFdlYmtpdDogJy13ZWJraXQtJ1xuICB9O1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGU7XG4gIHZhciB0ZXN0UHJvcCA9ICdUcmFuc2Zvcm0nO1xuXG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAganMgPSBrZXk7XG4gICAgICBjc3MgPSBqc0Nzc01hcFtrZXldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVmVuZG9yIHByZWZpeCBzdHJpbmcgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKlxuICogQHR5cGUge3tqczogU3RyaW5nLCBjc3M6IFN0cmluZ319XG4gKiBAYXBpIHB1YmxpY1xuICovXG5leHBvcnRzWydkZWZhdWx0J10gPSB7IGpzOiBqcywgY3NzOiBjc3MgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtdmVuZG9yL2xpYi9wcmVmaXguanNcbi8vIG1vZHVsZSBpZCA9IDExMjdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBOYW1lc3BhY2VzIHRvIGF2b2lkIGNvbmZsaWN0cyBvbiB0aGUgY29udGV4dC5cbiAqL1xudmFyIGpzcyA9IGV4cG9ydHMuanNzID0gJzY0YTU1ZDU3OGY4NTZkMjU4ZGMzNDViMDk0YTJhMmIzJztcbnZhciBzaGVldHNSZWdpc3RyeSA9IGV4cG9ydHMuc2hlZXRzUmVnaXN0cnkgPSAnZDRiZDBiYWFjYmM1MmJiZDQ4YmJiOWViMjQzNDRlY2QnO1xudmFyIG1hbmFnZXJzID0gZXhwb3J0cy5tYW5hZ2VycyA9ICdiNzY4Yjc4OTE5NTA0ZmJhOWRlMmMwMzU0NWM1Y2QzYSc7XG52YXIgc2hlZXRPcHRpb25zID0gZXhwb3J0cy5zaGVldE9wdGlvbnMgPSAnNmZjNTcwZDZiZDYxMzgzODE5ZDBmOWU3NDA3YzQ1MmQnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWpzcy9saWIvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDExMjhcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGUgPSBleHBvcnRzLmNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lID0gZXhwb3J0cy5zaGVldHMgPSBleHBvcnRzLlJ1bGVMaXN0ID0gZXhwb3J0cy5TaGVldHNNYW5hZ2VyID0gZXhwb3J0cy5TaGVldHNSZWdpc3RyeSA9IGV4cG9ydHMudG9Dc3NWYWx1ZSA9IGV4cG9ydHMuZ2V0RHluYW1pY1N0eWxlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9nZXREeW5hbWljU3R5bGVzID0gcmVxdWlyZSgnLi91dGlscy9nZXREeW5hbWljU3R5bGVzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0RHluYW1pY1N0eWxlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldER5bmFtaWNTdHlsZXMpWydkZWZhdWx0J107XG4gIH1cbn0pO1xuXG52YXIgX3RvQ3NzVmFsdWUgPSByZXF1aXJlKCcuL3V0aWxzL3RvQ3NzVmFsdWUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0b0Nzc1ZhbHVlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Dc3NWYWx1ZSlbJ2RlZmF1bHQnXTtcbiAgfVxufSk7XG5cbnZhciBfU2hlZXRzUmVnaXN0cnkgPSByZXF1aXJlKCcuL1NoZWV0c1JlZ2lzdHJ5Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2hlZXRzUmVnaXN0cnknLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TaGVldHNSZWdpc3RyeSlbJ2RlZmF1bHQnXTtcbiAgfVxufSk7XG5cbnZhciBfU2hlZXRzTWFuYWdlciA9IHJlcXVpcmUoJy4vU2hlZXRzTWFuYWdlcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NoZWV0c01hbmFnZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TaGVldHNNYW5hZ2VyKVsnZGVmYXVsdCddO1xuICB9XG59KTtcblxudmFyIF9SdWxlTGlzdCA9IHJlcXVpcmUoJy4vUnVsZUxpc3QnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSdWxlTGlzdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1J1bGVMaXN0KVsnZGVmYXVsdCddO1xuICB9XG59KTtcblxudmFyIF9zaGVldHMgPSByZXF1aXJlKCcuL3NoZWV0cycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3NoZWV0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoZWV0cylbJ2RlZmF1bHQnXTtcbiAgfVxufSk7XG5cbnZhciBfY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSlbJ2RlZmF1bHQnXTtcbiAgfVxufSk7XG5cbnZhciBfSnNzID0gcmVxdWlyZSgnLi9Kc3MnKTtcblxudmFyIF9Kc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSnNzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgSnNzLlxuICovXG52YXIgY3JlYXRlID0gZXhwb3J0cy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUob3B0aW9ucykge1xuICByZXR1cm4gbmV3IF9Kc3MyWydkZWZhdWx0J10ob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEEgZ2xvYmFsIEpzcyBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogU2hlZXRzIHJlZ2lzdHJ5IHRvIGFjY2VzcyB0aGVtIGFsbCBhdCBvbmUgcGxhY2UuXG4gKi9cbnZhciBTaGVldHNSZWdpc3RyeSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2hlZXRzUmVnaXN0cnkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNoZWV0c1JlZ2lzdHJ5KTtcblxuICAgIHRoaXMucmVnaXN0cnkgPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTaGVldHNSZWdpc3RyeSwgW3tcbiAgICBrZXk6ICdhZGQnLFxuXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIFN0eWxlIFNoZWV0LlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoc2hlZXQpIHtcbiAgICAgIHZhciByZWdpc3RyeSA9IHRoaXMucmVnaXN0cnk7XG4gICAgICB2YXIgaW5kZXggPSBzaGVldC5vcHRpb25zLmluZGV4O1xuXG5cbiAgICAgIGlmIChyZWdpc3RyeS5pbmRleE9mKHNoZWV0KSAhPT0gLTEpIHJldHVybjtcblxuICAgICAgaWYgKHJlZ2lzdHJ5Lmxlbmd0aCA9PT0gMCB8fCBpbmRleCA+PSB0aGlzLmluZGV4KSB7XG4gICAgICAgIHJlZ2lzdHJ5LnB1c2goc2hlZXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgYSBwb3NpdGlvbi5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJlZ2lzdHJ5W2ldLm9wdGlvbnMuaW5kZXggPiBpbmRleCkge1xuICAgICAgICAgIHJlZ2lzdHJ5LnNwbGljZShpLCAwLCBzaGVldCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHJlZ2lzdHJ5LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZXNldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5yZWdpc3RyeSA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIFN0eWxlIFNoZWV0LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoc2hlZXQpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMucmVnaXN0cnkuaW5kZXhPZihzaGVldCk7XG4gICAgICB0aGlzLnJlZ2lzdHJ5LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhbGwgYXR0YWNoZWQgc2hlZXRzIHRvIGEgQ1NTIHN0cmluZy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5maWx0ZXIoZnVuY3Rpb24gKHNoZWV0KSB7XG4gICAgICAgIHJldHVybiBzaGVldC5hdHRhY2hlZDtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoc2hlZXQpIHtcbiAgICAgICAgcmV0dXJuIHNoZWV0LnRvU3RyaW5nKG9wdGlvbnMpO1xuICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5kZXgnLFxuXG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGhpZ2hlc3QgaW5kZXggbnVtYmVyLlxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnkubGVuZ3RoID09PSAwID8gMCA6IHRoaXMucmVnaXN0cnlbdGhpcy5yZWdpc3RyeS5sZW5ndGggLSAxXS5vcHRpb25zLmluZGV4O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTaGVldHNSZWdpc3RyeTtcbn0oKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2hlZXRzUmVnaXN0cnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi9TaGVldHNSZWdpc3RyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3ltYm9sT2JzZXJ2YWJsZSA9IHJlcXVpcmUoJ3N5bWJvbC1vYnNlcnZhYmxlJyk7XG5cbnZhciBfc3ltYm9sT2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2xPYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlW19zeW1ib2xPYnNlcnZhYmxlMlsnZGVmYXVsdCddXSAmJiB2YWx1ZSA9PT0gdmFsdWVbX3N5bWJvbE9ic2VydmFibGUyWydkZWZhdWx0J11dKCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvdXRpbHMvaXNPYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBsaW5rUnVsZTtcbi8qKlxuICogTGluayBydWxlIHdpdGggQ1NTU3R5bGVSdWxlIGFuZCBuZXN0ZWQgcnVsZXMgd2l0aCBjb3JyZXNwb25kaW5nIG5lc3RlZCBjc3NSdWxlcyBpZiBib3RoIGV4aXN0cy5cbiAqL1xuZnVuY3Rpb24gbGlua1J1bGUocnVsZSwgY3NzUnVsZSkge1xuICBydWxlLnJlbmRlcmFibGUgPSBjc3NSdWxlO1xuICBpZiAocnVsZS5ydWxlcyAmJiBjc3NSdWxlLmNzc1J1bGVzKSBydWxlLnJ1bGVzLmxpbmsoY3NzUnVsZS5jc3NSdWxlcyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi91dGlscy9saW5rUnVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX1N0eWxlU2hlZXQgPSByZXF1aXJlKCcuLi9TdHlsZVNoZWV0Jyk7XG5cbnZhciBfU3R5bGVTaGVldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdHlsZVNoZWV0KTtcblxudmFyIF9tb2R1bGVJZCA9IHJlcXVpcmUoJy4vbW9kdWxlSWQnKTtcblxudmFyIF9tb2R1bGVJZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb2R1bGVJZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIG1heFJ1bGVzID0gMWUxMDtcblxuXG52YXIgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyB1bmlxdWUgY2xhc3MgbmFtZXMgYmFzZWQgb24gY291bnRlcnMuXG4gKiBXaGVuIG5ldyBnZW5lcmF0b3IgZnVuY3Rpb24gaXMgY3JlYXRlZCwgcnVsZSBjb3VudGVyIGlzIHJlc2V0ZWQuXG4gKiBXZSBuZWVkIHRvIHJlc2V0IHRoZSBydWxlIGNvdW50ZXIgZm9yIFNTUiBmb3IgZWFjaCByZXF1ZXN0LlxuICovXG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJ1bGVDb3VudGVyID0gMDtcbiAgdmFyIGRlZmF1bHRQcmVmaXggPSBlbnYgPT09ICdwcm9kdWN0aW9uJyA/ICdjJyA6ICcnO1xuXG4gIHJldHVybiBmdW5jdGlvbiAocnVsZSwgc2hlZXQpIHtcbiAgICBydWxlQ291bnRlciArPSAxO1xuXG4gICAgaWYgKHJ1bGVDb3VudGVyID4gbWF4UnVsZXMpIHtcbiAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoZmFsc2UsICdbSlNTXSBZb3UgbWlnaHQgaGF2ZSBhIG1lbW9yeSBsZWFrLiBSdWxlIGNvdW50ZXIgaXMgYXQgJXMuJywgcnVsZUNvdW50ZXIpO1xuICAgIH1cblxuICAgIHZhciBwcmVmaXggPSBkZWZhdWx0UHJlZml4O1xuICAgIHZhciBqc3NJZCA9ICcnO1xuXG4gICAgaWYgKHNoZWV0KSB7XG4gICAgICBwcmVmaXggPSBzaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCB8fCBkZWZhdWx0UHJlZml4O1xuICAgICAgaWYgKHNoZWV0Lm9wdGlvbnMuanNzLmlkICE9IG51bGwpIGpzc0lkICs9IHNoZWV0Lm9wdGlvbnMuanNzLmlkO1xuICAgIH1cblxuICAgIGlmIChlbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuICcnICsgcHJlZml4ICsgX21vZHVsZUlkMlsnZGVmYXVsdCddICsganNzSWQgKyBydWxlQ291bnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZml4ICsgcnVsZS5rZXkgKyAnLScgKyBfbW9kdWxlSWQyWydkZWZhdWx0J10gKyAoanNzSWQgJiYgJy0nICsganNzSWQpICsgJy0nICsgcnVsZUNvdW50ZXI7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvdXRpbHMvY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDExMzNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2xpbmtSdWxlID0gcmVxdWlyZSgnLi91dGlscy9saW5rUnVsZScpO1xuXG52YXIgX2xpbmtSdWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmtSdWxlKTtcblxudmFyIF9SdWxlTGlzdCA9IHJlcXVpcmUoJy4vUnVsZUxpc3QnKTtcblxudmFyIF9SdWxlTGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SdWxlTGlzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlU2hlZXQpO1xuXG4gICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVwbG95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxpbmtlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xhc3NlcyA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBzaGVldDogdGhpcyxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIGNsYXNzZXM6IHRoaXMuY2xhc3Nlc1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgb3B0aW9ucy5SZW5kZXJlcih0aGlzKTtcbiAgICB0aGlzLnJ1bGVzID0gbmV3IF9SdWxlTGlzdDJbJ2RlZmF1bHQnXSh0aGlzLm9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHJlbmRlcmFibGUgdG8gdGhlIHJlbmRlciB0cmVlLlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBbe1xuICAgIGtleTogJ2F0dGFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICAgIGlmICh0aGlzLmF0dGFjaGVkKSByZXR1cm4gdGhpcztcbiAgICAgIGlmICghdGhpcy5kZXBsb3llZCkgdGhpcy5kZXBsb3koKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXR0YWNoKCk7XG4gICAgICBpZiAoIXRoaXMubGlua2VkICYmIHRoaXMub3B0aW9ucy5saW5rKSB0aGlzLmxpbmsoKTtcbiAgICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHJlbmRlcmFibGUgZnJvbSByZW5kZXIgdHJlZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoKCkge1xuICAgICAgaWYgKCF0aGlzLmF0dGFjaGVkKSByZXR1cm4gdGhpcztcbiAgICAgIHRoaXMucmVuZGVyZXIuZGV0YWNoKCk7XG4gICAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBydWxlIHRvIHRoZSBjdXJyZW50IHN0eWxlc2hlZXQuXG4gICAgICogV2lsbCBpbnNlcnQgYSBydWxlIGFsc28gYWZ0ZXIgdGhlIHN0eWxlc2hlZXQgaGFzIGJlZW4gcmVuZGVyZWQgZmlyc3QgdGltZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkUnVsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZTtcblxuICAgICAgLy8gUGx1Z2lucyBjYW4gY3JlYXRlIHJ1bGVzLlxuICAgICAgLy8gSW4gb3JkZXIgdG8gcHJlc2VydmUgdGhlIHJpZ2h0IG9yZGVyLCB3ZSBuZWVkIHRvIHF1ZXVlIGFsbCBgLmFkZFJ1bGVgIGNhbGxzLFxuICAgICAgLy8gd2hpY2ggaGFwcGVuIGFmdGVyIHRoZSBmaXJzdCBgcnVsZXMuYWRkKClgIGNhbGwuXG5cbiAgICAgIGlmICh0aGlzLmF0dGFjaGVkICYmICFxdWV1ZSkgdGhpcy5xdWV1ZSA9IFtdO1xuXG4gICAgICB2YXIgcnVsZSA9IHRoaXMucnVsZXMuYWRkKG5hbWUsIGRlY2wsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG5cbiAgICAgIGlmICh0aGlzLmF0dGFjaGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5kZXBsb3llZCkgcmV0dXJuIHJ1bGU7XG4gICAgICAgIC8vIERvbid0IGluc2VydCBydWxlIGRpcmVjdGx5IGlmIHRoZXJlIGlzIG5vIHN0cmluZ2lmaWVkIHZlcnNpb24geWV0LlxuICAgICAgICAvLyBJdCB3aWxsIGJlIGluc2VydGVkIGFsbCB0b2dldGhlciB3aGVuIC5hdHRhY2ggaXMgY2FsbGVkLlxuICAgICAgICBpZiAocXVldWUpIHF1ZXVlLnB1c2gocnVsZSk7ZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbnNlcnRSdWxlKHJ1bGUpO1xuICAgICAgICAgIGlmICh0aGlzLnF1ZXVlKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLmZvckVhY2godGhpcy5pbnNlcnRSdWxlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucXVldWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydWxlO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBjYW4ndCBhZGQgcnVsZXMgdG8gYSBkZXRhY2hlZCBzdHlsZSBub2RlLlxuICAgICAgLy8gV2Ugd2lsbCByZWRlcGxveSB0aGUgc2hlZXQgb25jZSB1c2VyIHdpbGwgYXR0YWNoIGl0LlxuICAgICAgdGhpcy5kZXBsb3llZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gcnVsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgcnVsZSBpbnRvIHRoZSBTdHlsZVNoZWV0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2luc2VydFJ1bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUpIHtcbiAgICAgIHZhciByZW5kZXJhYmxlID0gdGhpcy5yZW5kZXJlci5pbnNlcnRSdWxlKHJ1bGUpO1xuICAgICAgaWYgKHJlbmRlcmFibGUgJiYgdGhpcy5vcHRpb25zLmxpbmspICgwLCBfbGlua1J1bGUyWydkZWZhdWx0J10pKHJ1bGUsIHJlbmRlcmFibGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgYWRkIHJ1bGVzLlxuICAgICAqIFdpbGwgcmVuZGVyIGFsc28gYWZ0ZXIgU3R5bGUgU2hlZXQgd2FzIHJlbmRlcmVkIHRoZSBmaXJzdCB0aW1lLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGRSdWxlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFJ1bGVzKHN0eWxlcywgb3B0aW9ucykge1xuICAgICAgdmFyIGFkZGVkID0gW107XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHN0eWxlcykge1xuICAgICAgICBhZGRlZC5wdXNoKHRoaXMuYWRkUnVsZShuYW1lLCBzdHlsZXNbbmFtZV0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhZGRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBydWxlIGJ5IG5hbWUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFJ1bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYSBydWxlIGJ5IG5hbWUuXG4gICAgICogUmV0dXJucyBgdHJ1ZWA6IGlmIHJ1bGUgaGFzIGJlZW4gZGVsZXRlZCBmcm9tIHRoZSBET00uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2RlbGV0ZVJ1bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVSdWxlKG5hbWUpIHtcbiAgICAgIHZhciBydWxlID0gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG5cbiAgICAgIGlmICghcnVsZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICB0aGlzLnJ1bGVzLnJlbW92ZShydWxlKTtcblxuICAgICAgaWYgKHRoaXMuYXR0YWNoZWQgJiYgcnVsZS5yZW5kZXJhYmxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmRlbGV0ZVJ1bGUocnVsZS5yZW5kZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaW5kZXhPZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucnVsZXMuaW5kZXhPZihydWxlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBsb3kgcHVyZSBDU1Mgc3RyaW5nIHRvIGEgcmVuZGVyYWJsZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGVwbG95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVwbG95KCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5kZXBsb3koKTtcbiAgICAgIHRoaXMuZGVwbG95ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGluayByZW5kZXJhYmxlIENTUyBydWxlcyBmcm9tIHNoZWV0IHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyBtb2RlbHMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2xpbmsnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rKCkge1xuICAgICAgdmFyIGNzc1J1bGVzID0gdGhpcy5yZW5kZXJlci5nZXRSdWxlcygpO1xuXG4gICAgICAvLyBJcyB1bmRlZmluZWQgd2hlbiBWaXJ0dWFsUmVuZGVyZXIgaXMgdXNlZC5cbiAgICAgIGlmIChjc3NSdWxlcykgdGhpcy5ydWxlcy5saW5rKGNzc1J1bGVzKTtcbiAgICAgIHRoaXMubGlua2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZnVuY3Rpb24gdmFsdWVzIHdpdGggYSBuZXcgZGF0YS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKG5hbWUsIGRhdGEpIHtcbiAgICAgIHRoaXMucnVsZXMudXBkYXRlKG5hbWUsIGRhdGEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBydWxlcyB0byBhIENTUyBzdHJpbmcuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMucnVsZXMudG9TdHJpbmcob3B0aW9ucyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0eWxlU2hlZXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi9TdHlsZVNoZWV0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9UeXBvZ3JhcGh5ID0gcmVxdWlyZSgnLi9UeXBvZ3JhcGh5Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGVmYXVsdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R5cG9ncmFwaHkpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1R5cG9ncmFwaHkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExMzVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zdHlsZXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfd2l0aFN0eWxlcyA9IHJlcXVpcmUoJy4uL3N0eWxlcy93aXRoU3R5bGVzJyk7XG5cbnZhciBfd2l0aFN0eWxlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoU3R5bGVzKTtcblxudmFyIF9oZWxwZXJzID0gcmVxdWlyZSgnLi4vdXRpbHMvaGVscGVycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc3R5bGVzID0gZXhwb3J0cy5zdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbWFyZ2luOiAwXG4gICAgfSxcbiAgICBkaXNwbGF5NDogdGhlbWUudHlwb2dyYXBoeS5kaXNwbGF5NCxcbiAgICBkaXNwbGF5MzogdGhlbWUudHlwb2dyYXBoeS5kaXNwbGF5MyxcbiAgICBkaXNwbGF5MjogdGhlbWUudHlwb2dyYXBoeS5kaXNwbGF5MixcbiAgICBkaXNwbGF5MTogdGhlbWUudHlwb2dyYXBoeS5kaXNwbGF5MSxcbiAgICBoZWFkbGluZTogdGhlbWUudHlwb2dyYXBoeS5oZWFkbGluZSxcbiAgICB0aXRsZTogdGhlbWUudHlwb2dyYXBoeS50aXRsZSxcbiAgICBzdWJoZWFkaW5nOiB0aGVtZS50eXBvZ3JhcGh5LnN1YmhlYWRpbmcsXG4gICAgYm9keTI6IHRoZW1lLnR5cG9ncmFwaHkuYm9keTIsXG4gICAgYm9keTE6IHRoZW1lLnR5cG9ncmFwaHkuYm9keTEsXG4gICAgY2FwdGlvbjogdGhlbWUudHlwb2dyYXBoeS5jYXB0aW9uLFxuICAgIGJ1dHRvbjogdGhlbWUudHlwb2dyYXBoeS5idXR0b24sXG4gICAgYWxpZ25MZWZ0OiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0J1xuICAgIH0sXG4gICAgYWxpZ25DZW50ZXI6IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuICAgIGFsaWduUmlnaHQ6IHtcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xuICAgIH0sXG4gICAgYWxpZ25KdXN0aWZ5OiB7XG4gICAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5J1xuICAgIH0sXG4gICAgbm9XcmFwOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgIH0sXG4gICAgZ3V0dGVyQm90dG9tOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICcwLjM1ZW0nXG4gICAgfSxcbiAgICBwYXJhZ3JhcGg6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZy51bml0ICogMlxuICAgIH0sXG4gICAgY29sb3JJbmhlcml0OiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnXG4gICAgfSxcbiAgICBjb2xvclByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnlbNTAwXVxuICAgIH0sXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gICAgfSxcbiAgICBjb2xvckFjY2VudDoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LkE0MDBcbiAgICB9LFxuICAgIGNvbG9yRXJyb3I6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLkE0MDBcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBUeXBvZ3JhcGh5KHByb3BzKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lUHJvcCA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbXBvbmVudFByb3AgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgZ3V0dGVyQm90dG9tID0gcHJvcHMuZ3V0dGVyQm90dG9tLFxuICAgICAgaGVhZGxpbmVNYXBwaW5nID0gcHJvcHMuaGVhZGxpbmVNYXBwaW5nLFxuICAgICAgbm9XcmFwID0gcHJvcHMubm9XcmFwLFxuICAgICAgcGFyYWdyYXBoID0gcHJvcHMucGFyYWdyYXBoLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKHByb3BzLCBbJ2FsaWduJywgJ2NsYXNzZXMnLCAnY2xhc3NOYW1lJywgJ2NvbXBvbmVudCcsICdjb2xvcicsICdndXR0ZXJCb3R0b20nLCAnaGVhZGxpbmVNYXBwaW5nJywgJ25vV3JhcCcsICdwYXJhZ3JhcGgnLCAndHlwZSddKTtcblxuXG4gIHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKGNsYXNzZXMucm9vdCwgY2xhc3Nlc1t0eXBlXSwgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jbGFzc05hbWVzLCBjbGFzc2VzWydjb2xvcicgKyAoMCwgX2hlbHBlcnMuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKShjb2xvcildLCBjb2xvciAhPT0gJ2RlZmF1bHQnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NsYXNzTmFtZXMsIGNsYXNzZXMubm9XcmFwLCBub1dyYXApLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KShfY2xhc3NOYW1lcywgY2xhc3Nlcy5ndXR0ZXJCb3R0b20sIGd1dHRlckJvdHRvbSksICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF9jbGFzc05hbWVzLCBjbGFzc2VzLnBhcmFncmFwaCwgcGFyYWdyYXBoKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX2NsYXNzTmFtZXMsIGNsYXNzZXNbJ2FsaWduJyArICgwLCBfaGVscGVycy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIpKGFsaWduKV0sIGFsaWduICE9PSAnaW5oZXJpdCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZVByb3ApO1xuXG4gIHZhciBDb21wb25lbnQgPSBjb21wb25lbnRQcm9wIHx8IChwYXJhZ3JhcGggPyAncCcgOiBoZWFkbGluZU1hcHBpbmdbdHlwZV0pIHx8ICdzcGFuJztcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgb3RoZXIpKTtcbn1cblxuVHlwb2dyYXBoeS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHRleHQtYWxpZ24gb24gdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGFsaWduOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnaW5oZXJpdCcsICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcsICdqdXN0aWZ5J10pLFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBVc2VmdWwgdG8gZXh0ZW5kIHRoZSBzdHlsZSBhcHBsaWVkIHRvIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzc2VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCdzIHVzaW5nIHRoZSB0aGVtZSBwYWxldHRlIHdoZW4gdGhhdCBtYWtlcyBzZW5zZS5cbiAgICovXG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICdhY2NlbnQnLCAnZXJyb3InLCAnZGVmYXVsdCddKSxcbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIERPTSBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKiBCeSBkZWZhdWx0IHdlIG1hcCB0aGUgdHlwZSB0byBhIGdvb2QgZGVmYXVsdCBoZWFkbGluZSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXSksXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgaGF2ZSBhIGJvdHRvbSBtYXJnaW4uXG4gICAqL1xuICBndXR0ZXJCb3R0b206IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFdlIGFyZSBlbXBpcmljYWxseSBtYXBwaW5nIHRoZSB0eXBlIHByb3BlcnR5IHRvIGEgcmFuZ2Ugb2YgZGlmZmVyZW50IERPTSBlbGVtZW50IHR5cGUuXG4gICAqIEZvciBpbnN0YW5jZSwgaDEgdG8gaDYuIElmIHlvdSB3aXNoIHRvIGNoYW5nZSB0aGF0IG1hcHBpbmcsIHlvdSBjYW4gcHJvdmlkZSB5b3VyIG93bi5cbiAgICogQWx0ZXJuYXRpdmVseSwgeW91IGNhbiB1c2UgdGhlIGBjb21wb25lbnRgIHByb3BlcnR5LlxuICAgKi9cbiAgaGVhZGxpbmVNYXBwaW5nOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRleHQgd2lsbCBub3Qgd3JhcCwgYnV0IGluc3RlYWQgd2lsbCB0cnVuY2F0ZSB3aXRoIGFuIGVsbGlwc2lzLlxuICAgKi9cbiAgbm9XcmFwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgaGF2ZSBhIGJvdHRvbSBtYXJnaW4uXG4gICAqL1xuICBwYXJhZ3JhcGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIHRoZW1lIHR5cG9ncmFwaHkgc3R5bGVzLlxuICAgKi9cbiAgdHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2Rpc3BsYXk0JywgJ2Rpc3BsYXkzJywgJ2Rpc3BsYXkyJywgJ2Rpc3BsYXkxJywgJ2hlYWRsaW5lJywgJ3RpdGxlJywgJ3N1YmhlYWRpbmcnLCAnYm9keTInLCAnYm9keTEnLCAnY2FwdGlvbicsICdidXR0b24nXSlcbn0gOiB7fTtcblxuVHlwb2dyYXBoeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduOiAnaW5oZXJpdCcsXG4gIGNvbG9yOiAnZGVmYXVsdCcsXG4gIGd1dHRlckJvdHRvbTogZmFsc2UsXG4gIGhlYWRsaW5lTWFwcGluZzoge1xuICAgIGRpc3BsYXk0OiAnaDEnLFxuICAgIGRpc3BsYXkzOiAnaDEnLFxuICAgIGRpc3BsYXkyOiAnaDEnLFxuICAgIGRpc3BsYXkxOiAnaDEnLFxuICAgIGhlYWRsaW5lOiAnaDEnLFxuICAgIHRpdGxlOiAnaDInLFxuICAgIHN1YmhlYWRpbmc6ICdoMycsXG4gICAgYm9keTI6ICdhc2lkZScsXG4gICAgYm9keTE6ICdwJ1xuICB9LFxuICBub1dyYXA6IGZhbHNlLFxuICBwYXJhZ3JhcGg6IGZhbHNlLFxuICB0eXBlOiAnYm9keTEnXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX3dpdGhTdHlsZXMyLmRlZmF1bHQpKHN0eWxlcywgeyBuYW1lOiAnTXVpVHlwb2dyYXBoeScgfSkoVHlwb2dyYXBoeSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNoZWV0c01hbmFnZXIgPSBleHBvcnRzLnByZXNldCA9IHVuZGVmaW5lZDtcblxudmFyIF9rZXlzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzJyk7XG5cbnZhciBfa2V5czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlzKTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX21pblNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL251bWJlci9taW4tc2FmZS1pbnRlZ2VyJyk7XG5cbnZhciBfbWluU2FmZUludGVnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWluU2FmZUludGVnZXIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaG9pc3ROb25SZWFjdFN0YXRpY3MpO1xuXG52YXIgX2dldERpc3BsYXlOYW1lID0gcmVxdWlyZSgncmVjb21wb3NlL2dldERpc3BsYXlOYW1lJyk7XG5cbnZhciBfZ2V0RGlzcGxheU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0RGlzcGxheU5hbWUpO1xuXG52YXIgX2NvbnRleHRUeXBlcyA9IHJlcXVpcmUoJ3JlYWN0LWpzcy9saWIvY29udGV4dFR5cGVzJyk7XG5cbnZhciBfY29udGV4dFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRleHRUeXBlcyk7XG5cbnZhciBfanNzID0gcmVxdWlyZSgnanNzJyk7XG5cbnZhciBfanNzR2xvYmFsID0gcmVxdWlyZSgnanNzLWdsb2JhbCcpO1xuXG52YXIgX2pzc0dsb2JhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qc3NHbG9iYWwpO1xuXG52YXIgX2pzc05lc3RlZCA9IHJlcXVpcmUoJ2pzcy1uZXN0ZWQnKTtcblxudmFyIF9qc3NOZXN0ZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanNzTmVzdGVkKTtcblxudmFyIF9qc3NDYW1lbENhc2UgPSByZXF1aXJlKCdqc3MtY2FtZWwtY2FzZScpO1xuXG52YXIgX2pzc0NhbWVsQ2FzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qc3NDYW1lbENhc2UpO1xuXG52YXIgX2pzc0RlZmF1bHRVbml0ID0gcmVxdWlyZSgnanNzLWRlZmF1bHQtdW5pdCcpO1xuXG52YXIgX2pzc0RlZmF1bHRVbml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pzc0RlZmF1bHRVbml0KTtcblxudmFyIF9qc3NWZW5kb3JQcmVmaXhlciA9IHJlcXVpcmUoJ2pzcy12ZW5kb3ItcHJlZml4ZXInKTtcblxudmFyIF9qc3NWZW5kb3JQcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qc3NWZW5kb3JQcmVmaXhlcik7XG5cbnZhciBfanNzUHJvcHNTb3J0ID0gcmVxdWlyZSgnanNzLXByb3BzLXNvcnQnKTtcblxudmFyIF9qc3NQcm9wc1NvcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanNzUHJvcHNTb3J0KTtcblxudmFyIF9ucyA9IHJlcXVpcmUoJ3JlYWN0LWpzcy9saWIvbnMnKTtcblxudmFyIG5zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX25zKTtcblxudmFyIF9jcmVhdGVNdWlUaGVtZSA9IHJlcXVpcmUoJy4vY3JlYXRlTXVpVGhlbWUnKTtcblxudmFyIF9jcmVhdGVNdWlUaGVtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVNdWlUaGVtZSk7XG5cbnZhciBfdGhlbWVMaXN0ZW5lciA9IHJlcXVpcmUoJy4vdGhlbWVMaXN0ZW5lcicpO1xuXG52YXIgX3RoZW1lTGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGhlbWVMaXN0ZW5lcik7XG5cbnZhciBfY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUgPSByZXF1aXJlKCcuL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lJyk7XG5cbnZhciBfY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUpO1xuXG52YXIgX2dldFN0eWxlc0NyZWF0b3IgPSByZXF1aXJlKCcuL2dldFN0eWxlc0NyZWF0b3InKTtcblxudmFyIF9nZXRTdHlsZXNDcmVhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFN0eWxlc0NyZWF0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJlc2V0ID0gZXhwb3J0cy5wcmVzZXQgPSBmdW5jdGlvbiBwcmVzZXQoKSB7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogWygwLCBfanNzR2xvYmFsMi5kZWZhdWx0KSgpLCAoMCwgX2pzc05lc3RlZDIuZGVmYXVsdCkoKSwgKDAsIF9qc3NDYW1lbENhc2UyLmRlZmF1bHQpKCksICgwLCBfanNzRGVmYXVsdFVuaXQyLmRlZmF1bHQpKCksICgwLCBfanNzVmVuZG9yUHJlZml4ZXIyLmRlZmF1bHQpKCksICgwLCBfanNzUHJvcHNTb3J0Mi5kZWZhdWx0KSgpXVxuICB9O1xufTtcblxuLy8gTmV3IEpTUyBpbnN0YW5jZS5cbnZhciBqc3MgPSAoMCwgX2pzcy5jcmVhdGUpKHByZXNldCgpKTtcblxuLy8gVXNlIGEgc2luZ2xldG9uIG9yIHRoZSBwcm92aWRlZCBvbmUgYnkgdGhlIGNvbnRleHQuXG52YXIgZ2VuZXJhdGVDbGFzc05hbWUgPSAoMCwgX2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lMi5kZWZhdWx0KSgpO1xuXG4vLyBHbG9iYWwgaW5kZXggY291bnRlciB0byBwcmVzZXJ2ZSBzb3VyY2Ugb3JkZXIuXG4vLyBBcyB3ZSBjcmVhdGUgdGhlIHN0eWxlIHNoZWV0IGR1cmluZyBjb21wb25lbnRXaWxsTW91bnQgbGlmZWN5Y2xlLFxuLy8gY2hpbGRyZW4gYXJlIGhhbmRsZWQgYWZ0ZXIgdGhlIHBhcmVudHMsIHNvIHRoZSBvcmRlciBvZiBzdHlsZSBlbGVtZW50cyB3b3VsZFxuLy8gYmUgcGFyZW50LT5jaGlsZC4gSXQgaXMgYSBwcm9ibGVtIHRob3VnaCB3aGVuIGEgcGFyZW50IHBhc3NlcyBhIGNsYXNzTmFtZVxuLy8gd2hpY2ggbmVlZHMgdG8gb3ZlcnJpZGUgYW55IGNoaWxkcyBzdHlsZXMuIFN0eWxlU2hlZXQgb2YgdGhlIGNoaWxkIGhhcyBhIGhpZ2hlclxuLy8gc3BlY2lmaWNpdHksIGJlY2F1c2Ugb2YgdGhlIHNvdXJjZSBvcmRlci5cbi8vIFNvIG91ciBzb2x1dGlvbiBpcyB0byByZW5kZXIgc2hlZXRzIHRoZW0gaW4gdGhlIHJldmVyc2Ugb3JkZXIgY2hpbGQtPnNoZWV0LCBzb1xuLy8gdGhhdCBwYXJlbnQgaGFzIGEgaGlnaGVyIHNwZWNpZmljaXR5LlxudmFyIGluZGV4Q291bnRlciA9IF9taW5TYWZlSW50ZWdlcjIuZGVmYXVsdDtcblxudmFyIHNoZWV0c01hbmFnZXIgPSBleHBvcnRzLnNoZWV0c01hbmFnZXIgPSBuZXcgX21hcDIuZGVmYXVsdCgpO1xuXG4vLyBXZSB1c2UgdGhlIHNhbWUgZW1wdHkgb2JqZWN0IHRvIHJlZiBjb3VudCB0aGUgc3R5bGVzIHRoYXQgZG9uJ3QgbmVlZCBhIHRoZW1lIG9iamVjdC5cbnZhciBub29wVGhlbWUgPSB7fTtcblxuLy8gSW4gb3JkZXIgdG8gaGF2ZSBzZWxmLXN1cHBvcnRpbmcgY29tcG9uZW50cywgd2UgcmVseSBvbiBkZWZhdWx0IHRoZW1lIHdoZW4gbm90IHByb3ZpZGVkLlxudmFyIGRlZmF1bHRUaGVtZSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFRoZW1lKCkge1xuICBpZiAoZGVmYXVsdFRoZW1lKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRUaGVtZTtcbiAgfVxuXG4gIGRlZmF1bHRUaGVtZSA9ICgwLCBfY3JlYXRlTXVpVGhlbWUyLmRlZmF1bHQpKCk7XG4gIHJldHVybiBkZWZhdWx0VGhlbWU7XG59XG5cbi8vIExpbmsgYSBzdHlsZSBzaGVldCB3aXRoIGEgY29tcG9uZW50LlxuLy8gSXQgZG9lcyBub3QgbW9kaWZ5IHRoZSBjb21wb25lbnQgcGFzc2VkIHRvIGl0O1xuLy8gaW5zdGVhZCwgaXQgcmV0dXJucyBhIG5ldyBjb21wb25lbnQsIHdpdGggYSBgY2xhc3Nlc2AgcHJvcGVydHkuXG52YXIgd2l0aFN0eWxlcyA9IGZ1bmN0aW9uIHdpdGhTdHlsZXMoc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICB2YXIgX29wdGlvbnMkd2l0aFRoZW1lID0gb3B0aW9ucy53aXRoVGhlbWUsXG4gICAgICAgIHdpdGhUaGVtZSA9IF9vcHRpb25zJHdpdGhUaGVtZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfb3B0aW9ucyR3aXRoVGhlbWUsXG4gICAgICAgIF9vcHRpb25zJGZsaXAgPSBvcHRpb25zLmZsaXAsXG4gICAgICAgIGZsaXAgPSBfb3B0aW9ucyRmbGlwID09PSB1bmRlZmluZWQgPyBudWxsIDogX29wdGlvbnMkZmxpcCxcbiAgICAgICAgbmFtZSA9IG9wdGlvbnMubmFtZSxcbiAgICAgICAgc3R5bGVTaGVldE9wdGlvbnMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShvcHRpb25zLCBbJ3dpdGhUaGVtZScsICdmbGlwJywgJ25hbWUnXSk7XG5cbiAgICB2YXIgc3R5bGVzQ3JlYXRvciA9ICgwLCBfZ2V0U3R5bGVzQ3JlYXRvcjIuZGVmYXVsdCkoc3R5bGVzT3JDcmVhdG9yKTtcbiAgICB2YXIgbGlzdGVuVG9UaGVtZSA9IHN0eWxlc0NyZWF0b3IudGhlbWluZ0VuYWJsZWQgfHwgd2l0aFRoZW1lIHx8IHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJztcblxuICAgIGluZGV4Q291bnRlciArPSAxO1xuICAgIHN0eWxlc0NyZWF0b3Iub3B0aW9ucy5pbmRleCA9IGluZGV4Q291bnRlcjtcblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoaW5kZXhDb3VudGVyIDwgMCwgWydNYXRlcmlhbC1VSTogeW91IG1pZ2h0IGhhdmUgYSBtZW1vcnkgbGVhay4nLCAnVGhlIGluZGV4Q291bnRlciBpcyBub3Qgc3VwcG9zZWQgdG8gZ3JvdyB0aGF0IG11Y2guJ10uam9pbignICcpKSA6IHZvaWQgMDtcblxuICAgIHZhciBXaXRoU3R5bGVzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFdpdGhTdHlsZXMsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBXaXRoU3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFdpdGhTdHlsZXMpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKFdpdGhTdHlsZXMuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFdpdGhTdHlsZXMpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgX3RoaXMuZGlzYWJsZVN0eWxlc0dlbmVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuanNzID0gbnVsbDtcbiAgICAgICAgX3RoaXMuc2hlZXRPcHRpb25zID0gbnVsbDtcbiAgICAgICAgX3RoaXMuc2hlZXRzTWFuYWdlciA9IHNoZWV0c01hbmFnZXI7XG4gICAgICAgIF90aGlzLnN0eWxlc0NyZWF0b3JTYXZlZCA9IG51bGw7XG4gICAgICAgIF90aGlzLnRoZW1lID0gbnVsbDtcbiAgICAgICAgX3RoaXMudW5zdWJzY3JpYmVJZCA9IG51bGw7XG5cblxuICAgICAgICBfdGhpcy5qc3MgPSBfdGhpcy5jb250ZXh0W25zLmpzc10gfHwganNzO1xuXG4gICAgICAgIHZhciBtdWlUaGVtZVByb3ZpZGVyT3B0aW9ucyA9IF90aGlzLmNvbnRleHQubXVpVGhlbWVQcm92aWRlck9wdGlvbnM7XG5cbiAgICAgICAgaWYgKG11aVRoZW1lUHJvdmlkZXJPcHRpb25zKSB7XG4gICAgICAgICAgaWYgKG11aVRoZW1lUHJvdmlkZXJPcHRpb25zLnNoZWV0c01hbmFnZXIpIHtcbiAgICAgICAgICAgIF90aGlzLnNoZWV0c01hbmFnZXIgPSBtdWlUaGVtZVByb3ZpZGVyT3B0aW9ucy5zaGVldHNNYW5hZ2VyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLmRpc2FibGVTdHlsZXNHZW5lcmF0aW9uID0gbXVpVGhlbWVQcm92aWRlck9wdGlvbnMuZGlzYWJsZVN0eWxlc0dlbmVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRhY2ggdGhlIHN0eWxlc0NyZWF0b3IgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgYXMgaW4gdGhlIGNvbnRleHRcbiAgICAgICAgLy8gb2YgcmVhY3QtaG90LWxvYWRlciB0aGUgaG9va3MgY2FuIGJlIGV4ZWN1dGVkIGluIGEgZGlmZmVyZW50IGNsb3N1cmUgY29udGV4dDpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dhZWFyb24vcmVhY3QtaG90LWxvYWRlci9ibG9iL21hc3Rlci9zcmMvcGF0Y2guZGV2LmpzI0wxMDdcbiAgICAgICAgX3RoaXMuc3R5bGVzQ3JlYXRvclNhdmVkID0gc3R5bGVzQ3JlYXRvcjtcbiAgICAgICAgX3RoaXMuc2hlZXRPcHRpb25zID0gKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgZ2VuZXJhdGVDbGFzc05hbWU6IGdlbmVyYXRlQ2xhc3NOYW1lXG4gICAgICAgIH0sIF90aGlzLmNvbnRleHRbbnMuc2hlZXRPcHRpb25zXSk7XG4gICAgICAgIC8vIFdlIHVzZSB8fCBhcyB0aGUgZnVuY3Rpb24gY2FsbCBpcyBsYXp5IGV2YWx1YXRlZC5cbiAgICAgICAgX3RoaXMudGhlbWUgPSBsaXN0ZW5Ub1RoZW1lID8gX3RoZW1lTGlzdGVuZXIyLmRlZmF1bHQuaW5pdGlhbChjb250ZXh0KSB8fCBnZXREZWZhdWx0VGhlbWUoKSA6IG5vb3BUaGVtZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShXaXRoU3R5bGVzLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgIHRoaXMuYXR0YWNoKHRoaXMudGhlbWUpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgaWYgKCFsaXN0ZW5Ub1RoZW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy51bnN1YnNjcmliZUlkID0gX3RoZW1lTGlzdGVuZXIyLmRlZmF1bHQuc3Vic2NyaWJlKHRoaXMuY29udGV4dCwgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgICAgICB2YXIgb2xkVGhlbWUgPSBfdGhpczIudGhlbWU7XG4gICAgICAgICAgICBfdGhpczIudGhlbWUgPSB0aGVtZTtcbiAgICAgICAgICAgIF90aGlzMi5hdHRhY2goX3RoaXMyLnRoZW1lKTtcblxuICAgICAgICAgICAgLy8gUmVyZW5kZXIgdGhlIGNvbXBvbmVudCBzbyB0aGUgdW5kZXJseWluZyBjb21wb25lbnQgZ2V0cyB0aGUgdGhlbWUgdXBkYXRlLlxuICAgICAgICAgICAgLy8gQnkgdGhlbWUgdXBkYXRlIHdlIG1lYW4gcmVjZWl2aW5nIGFuZCBhcHBseWluZyB0aGUgbmV3IGNsYXNzIG5hbWVzLlxuICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5kZXRhY2gob2xkVGhlbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgICAgIC8vIHJlYWN0LWhvdC1sb2FkZXIgc3BlY2lmaWMgbG9naWNcbiAgICAgICAgICBpZiAodGhpcy5zdHlsZXNDcmVhdG9yU2F2ZWQgPT09IHN0eWxlc0NyZWF0b3IgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuZGV0YWNoKHRoaXMudGhlbWUpO1xuICAgICAgICAgIHRoaXMuc3R5bGVzQ3JlYXRvclNhdmVkID0gc3R5bGVzQ3JlYXRvcjtcbiAgICAgICAgICB0aGlzLmF0dGFjaCh0aGlzLnRoZW1lKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICB0aGlzLmRldGFjaCh0aGlzLnRoZW1lKTtcblxuICAgICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlSWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF90aGVtZUxpc3RlbmVyMi5kZWZhdWx0LnVuc3Vic2NyaWJlKHRoaXMuY29udGV4dCwgdGhpcy51bnN1YnNjcmliZUlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnYXR0YWNoJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF0dGFjaCh0aGVtZSkge1xuICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVTdHlsZXNHZW5lcmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHN0eWxlc0NyZWF0b3JTYXZlZCA9IHRoaXMuc3R5bGVzQ3JlYXRvclNhdmVkO1xuICAgICAgICAgIHZhciBzaGVldE1hbmFnZXIgPSB0aGlzLnNoZWV0c01hbmFnZXIuZ2V0KHN0eWxlc0NyZWF0b3JTYXZlZCk7XG5cbiAgICAgICAgICBpZiAoIXNoZWV0TWFuYWdlcikge1xuICAgICAgICAgICAgc2hlZXRNYW5hZ2VyID0gbmV3IF9tYXAyLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hlZXRzTWFuYWdlci5zZXQoc3R5bGVzQ3JlYXRvclNhdmVkLCBzaGVldE1hbmFnZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzaGVldE1hbmFnZXJUaGVtZSA9IHNoZWV0TWFuYWdlci5nZXQodGhlbWUpO1xuXG4gICAgICAgICAgaWYgKCFzaGVldE1hbmFnZXJUaGVtZSkge1xuICAgICAgICAgICAgc2hlZXRNYW5hZ2VyVGhlbWUgPSB7XG4gICAgICAgICAgICAgIHJlZnM6IDAsXG4gICAgICAgICAgICAgIHNoZWV0OiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2hlZXRNYW5hZ2VyLnNldCh0aGVtZSwgc2hlZXRNYW5hZ2VyVGhlbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzaGVldE1hbmFnZXJUaGVtZS5yZWZzID09PSAwKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGVzID0gc3R5bGVzQ3JlYXRvclNhdmVkLmNyZWF0ZSh0aGVtZSwgbmFtZSk7XG4gICAgICAgICAgICB2YXIgbWV0YSA9IG5hbWU7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFtZXRhKSB7XG4gICAgICAgICAgICAgIG1ldGEgPSAoMCwgX2dldERpc3BsYXlOYW1lMi5kZWZhdWx0KShDb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc2hlZXQgPSB0aGlzLmpzcy5jcmVhdGVTdHlsZVNoZWV0KHN0eWxlcywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgICAgIG1ldGE6IG1ldGEsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZVByZWZpeDogbWV0YSxcbiAgICAgICAgICAgICAgZmxpcDogdHlwZW9mIGZsaXAgPT09ICdib29sZWFuJyA/IGZsaXAgOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnLFxuICAgICAgICAgICAgICBsaW5rOiBmYWxzZVxuICAgICAgICAgICAgfSwgdGhpcy5zaGVldE9wdGlvbnMsIHN0eWxlc0NyZWF0b3JTYXZlZC5vcHRpb25zLCB7XG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgIH0sIHN0eWxlU2hlZXRPcHRpb25zKSk7XG5cbiAgICAgICAgICAgIHNoZWV0TWFuYWdlclRoZW1lLnNoZWV0ID0gc2hlZXQ7XG4gICAgICAgICAgICBzaGVldC5hdHRhY2goKTtcblxuICAgICAgICAgICAgdmFyIHNoZWV0c1JlZ2lzdHJ5ID0gdGhpcy5jb250ZXh0W25zLnNoZWV0c1JlZ2lzdHJ5XTtcbiAgICAgICAgICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgICAgICAgICBzaGVldHNSZWdpc3RyeS5hZGQoc2hlZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNoZWV0TWFuYWdlclRoZW1lLnJlZnMgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXRhY2gnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoKHRoZW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZVN0eWxlc0dlbmVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzQ3JlYXRvclNhdmVkID0gdGhpcy5zdHlsZXNDcmVhdG9yU2F2ZWQ7XG4gICAgICAgICAgdmFyIHNoZWV0TWFuYWdlciA9IHRoaXMuc2hlZXRzTWFuYWdlci5nZXQoc3R5bGVzQ3JlYXRvclNhdmVkKTtcbiAgICAgICAgICB2YXIgc2hlZXRNYW5hZ2VyVGhlbWUgPSBzaGVldE1hbmFnZXIuZ2V0KHRoZW1lKTtcblxuICAgICAgICAgIHNoZWV0TWFuYWdlclRoZW1lLnJlZnMgLT0gMTtcblxuICAgICAgICAgIGlmIChzaGVldE1hbmFnZXJUaGVtZS5yZWZzID09PSAwKSB7XG4gICAgICAgICAgICBzaGVldE1hbmFnZXIuZGVsZXRlKHRoZW1lKTtcbiAgICAgICAgICAgIHRoaXMuanNzLnJlbW92ZVN0eWxlU2hlZXQoc2hlZXRNYW5hZ2VyVGhlbWUuc2hlZXQpO1xuICAgICAgICAgICAgdmFyIHNoZWV0c1JlZ2lzdHJ5ID0gdGhpcy5jb250ZXh0W25zLnNoZWV0c1JlZ2lzdHJ5XTtcbiAgICAgICAgICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgICAgICAgICBzaGVldHNSZWdpc3RyeS5yZW1vdmUoc2hlZXRNYW5hZ2VyVGhlbWUuc2hlZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgIGNsYXNzZXNQcm9wID0gX3Byb3BzLmNsYXNzZXMsXG4gICAgICAgICAgICAgIGlubmVyUmVmID0gX3Byb3BzLmlubmVyUmVmLFxuICAgICAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjbGFzc2VzJywgJ2lubmVyUmVmJ10pO1xuXG5cbiAgICAgICAgICB2YXIgY2xhc3NlcyA9IHZvaWQgMDtcbiAgICAgICAgICB2YXIgcmVuZGVyZWRDbGFzc2VzID0ge307XG5cbiAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZVN0eWxlc0dlbmVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBzaGVldE1hbmFnZXIgPSB0aGlzLnNoZWV0c01hbmFnZXIuZ2V0KHRoaXMuc3R5bGVzQ3JlYXRvclNhdmVkKTtcbiAgICAgICAgICAgIHZhciBzaGVldHNNYW5hZ2VyVGhlbWUgPSBzaGVldE1hbmFnZXIuZ2V0KHRoaXMudGhlbWUpO1xuICAgICAgICAgICAgcmVuZGVyZWRDbGFzc2VzID0gc2hlZXRzTWFuYWdlclRoZW1lLnNoZWV0LmNsYXNzZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNsYXNzZXNQcm9wKSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgcmVuZGVyZWRDbGFzc2VzLCAoMCwgX2tleXMyLmRlZmF1bHQpKGNsYXNzZXNQcm9wKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBrZXkpIHtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShyZW5kZXJlZENsYXNzZXNba2V5XSB8fCBfdGhpczMuZGlzYWJsZVN0eWxlc0dlbmVyYXRpb24sIFsnTWF0ZXJpYWwtVUk6IHRoZSBrZXkgYCcgKyBrZXkgKyAnYCAnICsgKCdwcm92aWRlZCB0byB0aGUgY2xhc3NlcyBwcm9wZXJ0eSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gJyArICgwLCBfZ2V0RGlzcGxheU5hbWUyLmRlZmF1bHQpKENvbXBvbmVudCkgKyAnLicpLCAnWW91IGNhbiBvbmx5IG92ZXJyaWRlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiAnICsgKDAsIF9rZXlzMi5kZWZhdWx0KShyZW5kZXJlZENsYXNzZXMpLmpvaW4oJywnKV0uam9pbignXFxuJykpIDogdm9pZCAwO1xuXG4gICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIWNsYXNzZXNQcm9wW2tleV0gfHwgdHlwZW9mIGNsYXNzZXNQcm9wW2tleV0gPT09ICdzdHJpbmcnLCBbJ01hdGVyaWFsLVVJOiB0aGUga2V5IGAnICsga2V5ICsgJ2AgJyArICgncHJvdmlkZWQgdG8gdGhlIGNsYXNzZXMgcHJvcGVydHkgaXMgbm90IHZhbGlkIGZvciAnICsgKDAsIF9nZXREaXNwbGF5TmFtZTIuZGVmYXVsdCkoQ29tcG9uZW50KSArICcuJyksICdZb3UgbmVlZCB0byBwcm92aWRlIGEgbm9uIGVtcHR5IHN0cmluZyBpbnN0ZWFkIG9mOiAnICsgY2xhc3Nlc1Byb3Bba2V5XSArICcuJ10uam9pbignXFxuJykpIDogdm9pZCAwO1xuXG4gICAgICAgICAgICAgIGlmIChjbGFzc2VzUHJvcFtrZXldKSB7XG4gICAgICAgICAgICAgICAgYWNjdW11bGF0b3Jba2V5XSA9IHJlbmRlcmVkQ2xhc3Nlc1trZXldICsgJyAnICsgY2xhc3Nlc1Byb3Bba2V5XTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgICAgIH0sIHt9KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzZXMgPSByZW5kZXJlZENsYXNzZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG1vcmUgPSB7fTtcblxuICAgICAgICAgIC8vIFByb3ZpZGUgdGhlIHRoZW1lIHRvIHRoZSB3cmFwcGVkIGNvbXBvbmVudC5cbiAgICAgICAgICAvLyBTbyB3ZSBkb24ndCBoYXZlIHRvIHVzZSB0aGUgYHdpdGhUaGVtZSgpYCBIaWdoZXItb3JkZXIgQ29tcG9uZW50LlxuICAgICAgICAgIGlmICh3aXRoVGhlbWUpIHtcbiAgICAgICAgICAgIG1vcmUudGhlbWUgPSB0aGlzLnRoZW1lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoeyBjbGFzc2VzOiBjbGFzc2VzIH0sIG1vcmUsIG90aGVyLCB7IHJlZjogaW5uZXJSZWYgfSkpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG4gICAgICByZXR1cm4gV2l0aFN0eWxlcztcbiAgICB9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG4gICAgV2l0aFN0eWxlcy5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gICAgICAvKipcbiAgICAgICAqIFVzZWZ1bCB0byBleHRlbmQgdGhlIHN0eWxlIGFwcGxpZWQgdG8gY29tcG9uZW50cy5cbiAgICAgICAqL1xuICAgICAgY2xhc3NlczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgICAvKipcbiAgICAgICAqIFVzZSB0aGF0IHByb3BlcnR5IHRvIHBhc3MgYSByZWYgY2FsbGJhY2sgdG8gdGhlIGRlY29yYXRlZCBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICAgIGlubmVyUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbiAgICB9IDoge307XG5cbiAgICBXaXRoU3R5bGVzLmNvbnRleHRUeXBlcyA9ICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgbXVpVGhlbWVQcm92aWRlck9wdGlvbnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gICAgfSwgX2NvbnRleHRUeXBlczIuZGVmYXVsdCwgbGlzdGVuVG9UaGVtZSA/IF90aGVtZUxpc3RlbmVyMi5kZWZhdWx0LmNvbnRleHRUeXBlcyA6IHt9KTtcblxuICAgICgwLCBfaG9pc3ROb25SZWFjdFN0YXRpY3MyLmRlZmF1bHQpKFdpdGhTdHlsZXMsIENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gRXhwb3NlZCBmb3IgdGVzdCBwdXJwb3Nlcy5cbiAgICAgIFdpdGhTdHlsZXMuTmFrZWQgPSBDb21wb25lbnQ7XG4gICAgICBXaXRoU3R5bGVzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoU3R5bGVzO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFN0eWxlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvd2l0aFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbnVtYmVyL21pbi1zYWZlLWludGVnZXJcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvbnVtYmVyL21pbi1zYWZlLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExMzlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXInKTtcbm1vZHVsZS5leHBvcnRzID0gLTB4MWZmZmZmZmZmZmZmZmY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbnVtYmVyL21pbi1zYWZlLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExNDBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLy8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHsgTUlOX1NBRkVfSU5URUdFUjogLTB4MWZmZmZmZmZmZmZmZmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExNDFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX25zJGpzcyRucyRzaGVldE9wdGlvO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9ucyA9IHJlcXVpcmUoJy4vbnMnKTtcblxudmFyIG5zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX25zKTtcblxudmFyIF9wcm9wVHlwZXMyID0gcmVxdWlyZSgnLi9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gKF9ucyRqc3MkbnMkc2hlZXRPcHRpbyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX25zJGpzcyRucyRzaGVldE9wdGlvLCBucy5qc3MsIF9wcm9wVHlwZXMzWydkZWZhdWx0J10uanNzKSwgX2RlZmluZVByb3BlcnR5KF9ucyRqc3MkbnMkc2hlZXRPcHRpbywgbnMuc2hlZXRPcHRpb25zLCBfcHJvcFR5cGVzLm9iamVjdCksIF9kZWZpbmVQcm9wZXJ0eShfbnMkanNzJG5zJHNoZWV0T3B0aW8sIG5zLnNoZWV0c1JlZ2lzdHJ5LCBfcHJvcFR5cGVzM1snZGVmYXVsdCddLnJlZ2lzdHJ5KSwgX2RlZmluZVByb3BlcnR5KF9ucyRqc3MkbnMkc2hlZXRPcHRpbywgbnMubWFuYWdlcnMsIF9wcm9wVHlwZXMub2JqZWN0KSwgX25zJGpzcyRucyRzaGVldE9wdGlvKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1qc3MvbGliL2NvbnRleHRUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIGpzczogKDAsIF9wcm9wVHlwZXMuc2hhcGUpKHtcbiAgICBvcHRpb25zOiAoMCwgX3Byb3BUeXBlcy5zaGFwZSkoe1xuICAgICAgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWU6IF9wcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBjcmVhdGVTdHlsZVNoZWV0OiBfcHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZW1vdmVTdHlsZVNoZWV0OiBfcHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9KSxcbiAgcmVnaXN0cnk6ICgwLCBfcHJvcFR5cGVzLnNoYXBlKSh7XG4gICAgYWRkOiBfcHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0b1N0cmluZzogX3Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSlcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtanNzL2xpYi9wcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExNDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbi8qKlxuICogRXh0cmFjdHMgYSBzdHlsZXMgb2JqZWN0IHdpdGggb25seSBwcm9wcyB0aGF0IGNvbnRhaW4gZnVuY3Rpb24gdmFsdWVzLlxuICovXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoc3R5bGVzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgZnVuY3Rpb24gZXh0cmFjdChzdHlsZXMpIHtcbiAgICB2YXIgdG8gPSBudWxsO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoIXRvKSB0byA9IHt9O1xuICAgICAgICB0b1trZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YXIgZXh0cmFjdGVkID0gZXh0cmFjdCh2YWx1ZSk7XG4gICAgICAgIGlmIChleHRyYWN0ZWQpIHtcbiAgICAgICAgICBpZiAoIXRvKSB0byA9IHt9O1xuICAgICAgICAgIHRvW2tleV0gPSBleHRyYWN0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG4gIH1cblxuICByZXR1cm4gZXh0cmFjdChzdHlsZXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qc3MvbGliL3V0aWxzL2dldER5bmFtaWNTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExNDRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIFNoZWV0c01hbmFnZXIgaXMgbGlrZSBhIFdlYWtNYXAgd2hpY2ggaXMgZGVzaWduZWQgdG8gY291bnQgU3R5bGVTaGVldFxuICogaW5zdGFuY2VzIGFuZCBhdHRhY2gvZGV0YWNoIGF1dG9tYXRpY2FsbHkuXG4gKi9cbnZhciBTaGVldHNNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTaGVldHNNYW5hZ2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaGVldHNNYW5hZ2VyKTtcblxuICAgIHRoaXMuc2hlZXRzID0gW107XG4gICAgdGhpcy5yZWZzID0gW107XG4gICAgdGhpcy5rZXlzID0gW107XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2hlZXRzTWFuYWdlciwgW3tcbiAgICBrZXk6ICdnZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgcmV0dXJuIHRoaXMuc2hlZXRzW2luZGV4XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoa2V5LCBzaGVldCkge1xuICAgICAgdmFyIHNoZWV0cyA9IHRoaXMuc2hlZXRzLFxuICAgICAgICAgIHJlZnMgPSB0aGlzLnJlZnMsXG4gICAgICAgICAga2V5cyA9IHRoaXMua2V5cztcblxuICAgICAgdmFyIGluZGV4ID0gc2hlZXRzLmluZGV4T2Yoc2hlZXQpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSByZXR1cm4gaW5kZXg7XG5cbiAgICAgIHNoZWV0cy5wdXNoKHNoZWV0KTtcbiAgICAgIHJlZnMucHVzaCgwKTtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuXG4gICAgICByZXR1cm4gc2hlZXRzLmxlbmd0aCAtIDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWFuYWdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFuYWdlKGtleSkge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5rZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuc2hlZXRzW2luZGV4XTtcbiAgICAgIGlmICh0aGlzLnJlZnNbaW5kZXhdID09PSAwKSBzaGVldC5hdHRhY2goKTtcbiAgICAgIHRoaXMucmVmc1tpbmRleF0rKztcbiAgICAgIGlmICghdGhpcy5rZXlzW2luZGV4XSkgdGhpcy5rZXlzLnNwbGljZShpbmRleCwgMCwga2V5KTtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bm1hbmFnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVubWFuYWdlKGtleSkge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5rZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgLy8gZXNsaW50LWlnbm9yZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGZhbHNlLCAnU2hlZXRzTWFuYWdlcjogY2FuXFwndCBmaW5kIHNoZWV0IHRvIHVubWFuYWdlJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJlZnNbaW5kZXhdID4gMCkge1xuICAgICAgICB0aGlzLnJlZnNbaW5kZXhdLS07XG4gICAgICAgIGlmICh0aGlzLnJlZnNbaW5kZXhdID09PSAwKSB0aGlzLnNoZWV0c1tpbmRleF0uZGV0YWNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2l6ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5rZXlzLmxlbmd0aDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2hlZXRzTWFuYWdlcjtcbn0oKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2hlZXRzTWFuYWdlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qc3MvbGliL1NoZWV0c01hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExNDVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNsb25lU3R5bGU7XG5cbnZhciBfaXNPYnNlcnZhYmxlID0gcmVxdWlyZSgnLi9pc09ic2VydmFibGUnKTtcblxudmFyIF9pc09ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNPYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBjbG9uZVN0eWxlKHN0eWxlKSB7XG4gIC8vIFN1cHBvcnQgZW1wdHkgdmFsdWVzIGluIGNhc2UgdXNlciBlbmRzIHVwIHdpdGggdGhlbSBieSBhY2NpZGVudC5cbiAgaWYgKHN0eWxlID09IG51bGwpIHJldHVybiBzdHlsZTtcblxuICAvLyBTdXBwb3J0IHN0cmluZyB2YWx1ZSBmb3IgU2ltcGxlUnVsZS5cbiAgdmFyIHR5cGVPZlN0eWxlID0gdHlwZW9mIHN0eWxlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzdHlsZSk7XG5cbiAgaWYgKHR5cGVPZlN0eWxlID09PSAnc3RyaW5nJyB8fCB0eXBlT2ZTdHlsZSA9PT0gJ251bWJlcicgfHwgdHlwZU9mU3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICAvLyBTdXBwb3J0IGFycmF5IGZvciBGb250RmFjZVJ1bGUuXG4gIGlmIChpc0FycmF5KHN0eWxlKSkgcmV0dXJuIHN0eWxlLm1hcChjbG9uZVN0eWxlKTtcblxuICAvLyBTdXBwb3J0IE9ic2VydmFibGUgc3R5bGVzLiAgT2JzZXJ2YWJsZXMgYXJlIGltbXV0YWJsZSwgc28gd2UgZG9uJ3QgbmVlZCB0b1xuICAvLyBjb3B5IHRoZW0uXG4gIGlmICgoMCwgX2lzT2JzZXJ2YWJsZTJbJ2RlZmF1bHQnXSkoc3R5bGUpKSByZXR1cm4gc3R5bGU7XG5cbiAgdmFyIG5ld1N0eWxlID0ge307XG4gIGZvciAodmFyIG5hbWUgaW4gc3R5bGUpIHtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVtuYW1lXTtcbiAgICBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG5ld1N0eWxlW25hbWVdID0gY2xvbmVTdHlsZSh2YWx1ZSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbmV3U3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdHlsZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qc3MvbGliL3V0aWxzL2Nsb25lU3R5bGUuanNcbi8vIG1vZHVsZSBpZCA9IDExNDZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNDdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BvbnlmaWxsID0gcmVxdWlyZSgnLi9wb255ZmlsbC5qcycpO1xuXG52YXIgX3BvbnlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvbnlmaWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgcm9vdDsgLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9ICgwLCBfcG9ueWZpbGwyWydkZWZhdWx0J10pKHJvb3QpO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVzdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgX1N5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChfU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0X1N5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgQ1NTID0gZ2xvYmFsLkNTUztcblxudmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuXG52YXIgZXNjYXBlUmVnZXggPSAvKFtbXFxdLiMqJD48K349fF46KCksXCInYF0pL2c7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgLy8gV2UgZG9uJ3QgbmVlZCB0byBlc2NhcGUgaXQgaW4gcHJvZHVjdGlvbiwgYmVjYXVzZSB3ZSBhcmUgbm90IHVzaW5nIHVzZXInc1xuICAvLyBpbnB1dCBmb3Igc2VsZWN0b3JzLCB3ZSBhcmUgZ2VuZXJhdGluZyBhIHZhbGlkIHNlbGVjdG9yLlxuICBpZiAoZW52ID09PSAncHJvZHVjdGlvbicpIHJldHVybiBzdHI7XG5cbiAgaWYgKCFDU1MgfHwgIUNTUy5lc2NhcGUpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoZXNjYXBlUmVnZXgsICdcXFxcJDEnKTtcbiAgfVxuXG4gIHJldHVybiBDU1MuZXNjYXBlKHN0cik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvdXRpbHMvZXNjYXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBucyA9ICcyZjFhY2M2YzNhNjA2YjA4MmU1ZWVmNWU1NDQxNGZmYic7XG5pZiAoZ2xvYmFsW25zXSA9PSBudWxsKSBnbG9iYWxbbnNdID0gMDtcblxuLy8gQnVuZGxlIG1heSBjb250YWluIG11bHRpcGxlIEpTUyB2ZXJzaW9ucyBhdCB0aGUgc2FtZSB0aW1lLiBJbiBvcmRlciB0byBpZGVudGlmeVxuLy8gdGhlIGN1cnJlbnQgdmVyc2lvbiB3aXRoIGp1c3Qgb25lIHNob3J0IG51bWJlciBhbmQgdXNlIGl0IGZvciBjbGFzc2VzIGdlbmVyYXRpb25cbi8vIHdlIHVzZSBhIGNvdW50ZXIuIEFsc28gaXQgaXMgbW9yZSBhY2N1cmF0ZSwgYmVjYXVzZSB1c2VyIGNhbiBtYW51YWxseSByZWV2YWx1YXRlXG4vLyB0aGUgbW9kdWxlLlxuZXhwb3J0c1snZGVmYXVsdCddID0gZ2xvYmFsW25zXSsrO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvdXRpbHMvbW9kdWxlSWQuanNcbi8vIG1vZHVsZSBpZCA9IDExNTFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfaXNJbkJyb3dzZXIgPSByZXF1aXJlKCdpcy1pbi1icm93c2VyJyk7XG5cbnZhciBfaXNJbkJyb3dzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJbkJyb3dzZXIpO1xuXG52YXIgX1N0eWxlU2hlZXQgPSByZXF1aXJlKCcuL1N0eWxlU2hlZXQnKTtcblxudmFyIF9TdHlsZVNoZWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0eWxlU2hlZXQpO1xuXG52YXIgX1BsdWdpbnNSZWdpc3RyeSA9IHJlcXVpcmUoJy4vUGx1Z2luc1JlZ2lzdHJ5Jyk7XG5cbnZhciBfUGx1Z2luc1JlZ2lzdHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BsdWdpbnNSZWdpc3RyeSk7XG5cbnZhciBfcnVsZXMgPSByZXF1aXJlKCcuL3BsdWdpbnMvcnVsZXMnKTtcblxudmFyIF9ydWxlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydWxlcyk7XG5cbnZhciBfb2JzZXJ2YWJsZXMgPSByZXF1aXJlKCcuL3BsdWdpbnMvb2JzZXJ2YWJsZXMnKTtcblxudmFyIF9vYnNlcnZhYmxlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlcyk7XG5cbnZhciBfZnVuY3Rpb25zID0gcmVxdWlyZSgnLi9wbHVnaW5zL2Z1bmN0aW9ucycpO1xuXG52YXIgX2Z1bmN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mdW5jdGlvbnMpO1xuXG52YXIgX3NoZWV0cyA9IHJlcXVpcmUoJy4vc2hlZXRzJyk7XG5cbnZhciBfc2hlZXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoZWV0cyk7XG5cbnZhciBfU3R5bGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlcy9TdHlsZVJ1bGUnKTtcblxudmFyIF9TdHlsZVJ1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3R5bGVSdWxlKTtcblxudmFyIF9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSA9IHJlcXVpcmUoJy4vdXRpbHMvY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUnKTtcblxudmFyIF9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSk7XG5cbnZhciBfY3JlYXRlUnVsZTIgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZVJ1bGUnKTtcblxudmFyIF9jcmVhdGVSdWxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJ1bGUyKTtcblxudmFyIF9Eb21SZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL0RvbVJlbmRlcmVyJyk7XG5cbnZhciBfRG9tUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRG9tUmVuZGVyZXIpO1xuXG52YXIgX1ZpcnR1YWxSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL1ZpcnR1YWxSZW5kZXJlcicpO1xuXG52YXIgX1ZpcnR1YWxSZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WaXJ0dWFsUmVuZGVyZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBkZWZhdWx0UGx1Z2lucyA9IF9ydWxlczJbJ2RlZmF1bHQnXS5jb25jYXQoW19vYnNlcnZhYmxlczJbJ2RlZmF1bHQnXSwgX2Z1bmN0aW9uczJbJ2RlZmF1bHQnXV0pO1xuXG52YXIgaW5zdGFuY2VDb3VudGVyID0gMDtcblxudmFyIEpzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSnNzKG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSnNzKTtcblxuICAgIHRoaXMuaWQgPSBpbnN0YW5jZUNvdW50ZXIrKztcbiAgICB0aGlzLnZlcnNpb24gPSBcIjkuNS4wXCI7XG4gICAgdGhpcy5wbHVnaW5zID0gbmV3IF9QbHVnaW5zUmVnaXN0cnkyWydkZWZhdWx0J10oKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZTogX2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lMlsnZGVmYXVsdCddLFxuICAgICAgUmVuZGVyZXI6IF9pc0luQnJvd3NlcjJbJ2RlZmF1bHQnXSA/IF9Eb21SZW5kZXJlcjJbJ2RlZmF1bHQnXSA6IF9WaXJ0dWFsUmVuZGVyZXIyWydkZWZhdWx0J10sXG4gICAgICBwbHVnaW5zOiBbXVxuICAgIH07XG4gICAgdGhpcy5nZW5lcmF0ZUNsYXNzTmFtZSA9ICgwLCBfY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUyWydkZWZhdWx0J10pKCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgIHRoaXMudXNlLmFwcGx5KHRoaXMsIGRlZmF1bHRQbHVnaW5zKTtcbiAgICB0aGlzLnNldHVwKG9wdGlvbnMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEpzcywgW3tcbiAgICBrZXk6ICdzZXR1cCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICBpZiAob3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUgPSBvcHRpb25zLmNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lO1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDbGFzc05hbWUgPSBvcHRpb25zLmNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmluc2VydGlvblBvaW50ICE9IG51bGwpIHRoaXMub3B0aW9ucy5pbnNlcnRpb25Qb2ludCA9IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQ7XG4gICAgICBpZiAob3B0aW9ucy52aXJ0dWFsIHx8IG9wdGlvbnMuUmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLlJlbmRlcmVyID0gb3B0aW9ucy5SZW5kZXJlciB8fCAob3B0aW9ucy52aXJ0dWFsID8gX1ZpcnR1YWxSZW5kZXJlcjJbJ2RlZmF1bHQnXSA6IF9Eb21SZW5kZXJlcjJbJ2RlZmF1bHQnXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICBpZiAob3B0aW9ucy5wbHVnaW5zKSB0aGlzLnVzZS5hcHBseSh0aGlzLCBvcHRpb25zLnBsdWdpbnMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBTdHlsZSBTaGVldC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlU3R5bGVTaGVldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXQoc3R5bGVzKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIHZhciBpbmRleCA9IG9wdGlvbnMuaW5kZXg7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpbmRleCA9IF9zaGVldHMyWydkZWZhdWx0J10uaW5kZXggPT09IDAgPyAwIDogX3NoZWV0czJbJ2RlZmF1bHQnXS5pbmRleCArIDE7XG4gICAgICB9XG4gICAgICB2YXIgc2hlZXQgPSBuZXcgX1N0eWxlU2hlZXQyWydkZWZhdWx0J10oc3R5bGVzLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICBqc3M6IHRoaXMsXG4gICAgICAgIGdlbmVyYXRlQ2xhc3NOYW1lOiBvcHRpb25zLmdlbmVyYXRlQ2xhc3NOYW1lIHx8IHRoaXMuZ2VuZXJhdGVDbGFzc05hbWUsXG4gICAgICAgIGluc2VydGlvblBvaW50OiB0aGlzLm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQsXG4gICAgICAgIFJlbmRlcmVyOiB0aGlzLm9wdGlvbnMuUmVuZGVyZXIsXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfSkpO1xuICAgICAgdGhpcy5wbHVnaW5zLm9uUHJvY2Vzc1NoZWV0KHNoZWV0KTtcblxuICAgICAgcmV0dXJuIHNoZWV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGFjaCB0aGUgU3R5bGUgU2hlZXQgYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSByZWdpc3RyeS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlU3R5bGVTaGVldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVN0eWxlU2hlZXQoc2hlZXQpIHtcbiAgICAgIHNoZWV0LmRldGFjaCgpO1xuICAgICAgX3NoZWV0czJbJ2RlZmF1bHQnXS5yZW1vdmUoc2hlZXQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcnVsZSB3aXRob3V0IGEgU3R5bGUgU2hlZXQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZVJ1bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSdWxlKG5hbWUpIHtcbiAgICAgIHZhciBzdHlsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICAgIC8vIEVuYWJsZSBydWxlIHdpdGhvdXQgbmFtZSBmb3IgaW5saW5lIHN0eWxlcy5cbiAgICAgIGlmICgodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5hbWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0aW9ucyA9IHN0eWxlO1xuICAgICAgICBzdHlsZSA9IG5hbWU7XG4gICAgICAgIG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIENhc3QgZnJvbSBSdWxlRmFjdG9yeU9wdGlvbnMgdG8gUnVsZU9wdGlvbnNcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxMzI4NzI4L2ZvcmNlLWNhc3RpbmctaW4tZmxvd1xuICAgICAgdmFyIHJ1bGVPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgcnVsZU9wdGlvbnMuanNzID0gdGhpcztcbiAgICAgIHJ1bGVPcHRpb25zLlJlbmRlcmVyID0gdGhpcy5vcHRpb25zLlJlbmRlcmVyO1xuICAgICAgaWYgKCFydWxlT3B0aW9ucy5nZW5lcmF0ZUNsYXNzTmFtZSkgcnVsZU9wdGlvbnMuZ2VuZXJhdGVDbGFzc05hbWUgPSB0aGlzLmdlbmVyYXRlQ2xhc3NOYW1lO1xuICAgICAgaWYgKCFydWxlT3B0aW9ucy5jbGFzc2VzKSBydWxlT3B0aW9ucy5jbGFzc2VzID0ge307XG4gICAgICB2YXIgcnVsZSA9ICgwLCBfY3JlYXRlUnVsZTNbJ2RlZmF1bHQnXSkobmFtZSwgc3R5bGUsIHJ1bGVPcHRpb25zKTtcblxuICAgICAgaWYgKCFydWxlT3B0aW9ucy5zZWxlY3RvciAmJiBydWxlIGluc3RhbmNlb2YgX1N0eWxlUnVsZTJbJ2RlZmF1bHQnXSkge1xuICAgICAgICBydWxlLnNlbGVjdG9yID0gJy4nICsgcnVsZU9wdGlvbnMuZ2VuZXJhdGVDbGFzc05hbWUocnVsZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGx1Z2lucy5vblByb2Nlc3NSdWxlKHJ1bGUpO1xuXG4gICAgICByZXR1cm4gcnVsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBwbHVnaW4uIFBhc3NlZCBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgd2l0aCBhIHJ1bGUgaW5zdGFuY2UuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVzZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIHBsdWdpbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIC8vIEF2b2lkcyBhcHBseWluZyBzYW1lIHBsdWdpbiB0d2ljZSwgYXQgbGVhc3QgYmFzZWQgb24gcmVmLlxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5wbHVnaW5zLmluZGV4T2YocGx1Z2luKSA9PT0gLTEpIHtcbiAgICAgICAgICBfdGhpcy5vcHRpb25zLnBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgICAgICAgIF90aGlzLnBsdWdpbnMudXNlKHBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSnNzO1xufSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBKc3M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi9Kc3MuanNcbi8vIG1vZHVsZSBpZCA9IDExNTJcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUGx1Z2luc1JlZ2lzdHJ5ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQbHVnaW5zUmVnaXN0cnkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsdWdpbnNSZWdpc3RyeSk7XG5cbiAgICB0aGlzLmhvb2tzID0ge1xuICAgICAgb25DcmVhdGVSdWxlOiBbXSxcbiAgICAgIG9uUHJvY2Vzc1J1bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzU3R5bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzU2hlZXQ6IFtdLFxuICAgICAgb25DaGFuZ2VWYWx1ZTogW10sXG4gICAgICBvblVwZGF0ZTogW11cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIGBvbkNyZWF0ZVJ1bGVgIGhvb2tzIGFuZCByZXR1cm4gYW4gb2JqZWN0IGlmIHJldHVybmVkIGJ5IGEgaG9vay5cbiAgICAgICAqL1xuICAgIH07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGx1Z2luc1JlZ2lzdHJ5LCBbe1xuICAgIGtleTogJ29uQ3JlYXRlUnVsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShuYW1lLCBkZWNsLCBvcHRpb25zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaG9va3Mub25DcmVhdGVSdWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBydWxlID0gdGhpcy5ob29rcy5vbkNyZWF0ZVJ1bGVbaV0obmFtZSwgZGVjbCwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChydWxlKSByZXR1cm4gcnVsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgYG9uUHJvY2Vzc1J1bGVgIGhvb2tzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvblByb2Nlc3NSdWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Qcm9jZXNzUnVsZShydWxlKSB7XG4gICAgICBpZiAocnVsZS5pc1Byb2Nlc3NlZCkgcmV0dXJuO1xuICAgICAgdmFyIHNoZWV0ID0gcnVsZS5vcHRpb25zLnNoZWV0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaG9va3Mub25Qcm9jZXNzUnVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmhvb2tzLm9uUHJvY2Vzc1J1bGVbaV0ocnVsZSwgc2hlZXQpO1xuICAgICAgfVxuXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBpZiAocnVsZS5zdHlsZSkgdGhpcy5vblByb2Nlc3NTdHlsZShydWxlLnN0eWxlLCBydWxlLCBzaGVldCk7XG5cbiAgICAgIHJ1bGUuaXNQcm9jZXNzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgYG9uUHJvY2Vzc1N0eWxlYCBob29rcy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb25Qcm9jZXNzU3R5bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSwgc2hlZXQpIHtcbiAgICAgIHZhciBuZXh0U3R5bGUgPSBzdHlsZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhvb2tzLm9uUHJvY2Vzc1N0eWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5leHRTdHlsZSA9IHRoaXMuaG9va3Mub25Qcm9jZXNzU3R5bGVbaV0obmV4dFN0eWxlLCBydWxlLCBzaGVldCk7XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgcnVsZS5zdHlsZSA9IG5leHRTdHlsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIGBvblByb2Nlc3NTaGVldGAgaG9va3MuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ29uUHJvY2Vzc1NoZWV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Qcm9jZXNzU2hlZXQoc2hlZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ob29rcy5vblByb2Nlc3NTaGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmhvb2tzLm9uUHJvY2Vzc1NoZWV0W2ldKHNoZWV0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIGBvblVwZGF0ZWAgaG9va3MuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ29uVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25VcGRhdGUoZGF0YSwgcnVsZSwgc2hlZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ob29rcy5vblVwZGF0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmhvb2tzLm9uVXBkYXRlW2ldKGRhdGEsIHJ1bGUsIHNoZWV0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIGBvbkNoYW5nZVZhbHVlYCBob29rcy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb25DaGFuZ2VWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3AsIHJ1bGUpIHtcbiAgICAgIHZhciBwcm9jZXNzZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhvb2tzLm9uQ2hhbmdlVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvY2Vzc2VkVmFsdWUgPSB0aGlzLmhvb2tzLm9uQ2hhbmdlVmFsdWVbaV0ocHJvY2Vzc2VkVmFsdWUsIHByb3AsIHJ1bGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2Nlc3NlZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgcGx1Z2luLlxuICAgICAqIElmIGZ1bmN0aW9uIGlzIHBhc3NlZCwgaXQgaXMgYSBzaG9ydGN1dCBmb3IgYHtvblByb2Nlc3NSdWxlfWAuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVzZShwbHVnaW4pIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gcGx1Z2luKSB7XG4gICAgICAgIGlmICh0aGlzLmhvb2tzW25hbWVdKSB0aGlzLmhvb2tzW25hbWVdLnB1c2gocGx1Z2luW25hbWVdKTtlbHNlICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoZmFsc2UsICdbSlNTXSBVbmtub3duIGhvb2sgXCIlc1wiLicsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQbHVnaW5zUmVnaXN0cnk7XG59KCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFBsdWdpbnNSZWdpc3RyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qc3MvbGliL1BsdWdpbnNSZWdpc3RyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfU2ltcGxlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGVzL1NpbXBsZVJ1bGUnKTtcblxudmFyIF9TaW1wbGVSdWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NpbXBsZVJ1bGUpO1xuXG52YXIgX0tleWZyYW1lc1J1bGUgPSByZXF1aXJlKCcuLi9ydWxlcy9LZXlmcmFtZXNSdWxlJyk7XG5cbnZhciBfS2V5ZnJhbWVzUnVsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9LZXlmcmFtZXNSdWxlKTtcblxudmFyIF9Db25kaXRpb25hbFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlcy9Db25kaXRpb25hbFJ1bGUnKTtcblxudmFyIF9Db25kaXRpb25hbFJ1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29uZGl0aW9uYWxSdWxlKTtcblxudmFyIF9Gb250RmFjZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlcy9Gb250RmFjZVJ1bGUnKTtcblxudmFyIF9Gb250RmFjZVJ1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9udEZhY2VSdWxlKTtcblxudmFyIF9WaWV3cG9ydFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlcy9WaWV3cG9ydFJ1bGUnKTtcblxudmFyIF9WaWV3cG9ydFJ1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmlld3BvcnRSdWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgY2xhc3NlcyA9IHtcbiAgJ0BjaGFyc2V0JzogX1NpbXBsZVJ1bGUyWydkZWZhdWx0J10sXG4gICdAaW1wb3J0JzogX1NpbXBsZVJ1bGUyWydkZWZhdWx0J10sXG4gICdAbmFtZXNwYWNlJzogX1NpbXBsZVJ1bGUyWydkZWZhdWx0J10sXG4gICdAa2V5ZnJhbWVzJzogX0tleWZyYW1lc1J1bGUyWydkZWZhdWx0J10sXG4gICdAbWVkaWEnOiBfQ29uZGl0aW9uYWxSdWxlMlsnZGVmYXVsdCddLFxuICAnQHN1cHBvcnRzJzogX0NvbmRpdGlvbmFsUnVsZTJbJ2RlZmF1bHQnXSxcbiAgJ0Bmb250LWZhY2UnOiBfRm9udEZhY2VSdWxlMlsnZGVmYXVsdCddLFxuICAnQHZpZXdwb3J0JzogX1ZpZXdwb3J0UnVsZTJbJ2RlZmF1bHQnXSxcbiAgJ0AtbXMtdmlld3BvcnQnOiBfVmlld3BvcnRSdWxlMlsnZGVmYXVsdCddXG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHBsdWdpbnMgd2hpY2ggd2lsbCByZWdpc3RlciBhbGwgcnVsZXMuXG4gICAqL1xufTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE9iamVjdC5rZXlzKGNsYXNzZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gIC8vIGh0dHBzOi8vanNwZXJmLmNvbS9pbmRleG9mLXZzLXN1YnN0ci12cy1yZWdleC1hdC10aGUtYmVnaW5uaW5nLTNcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnXicgKyBrZXkpO1xuICB2YXIgb25DcmVhdGVSdWxlID0gZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmUudGVzdChuYW1lKSA/IG5ldyBjbGFzc2VzW2tleV0obmFtZSwgZGVjbCwgb3B0aW9ucykgOiBudWxsO1xuICB9O1xuICByZXR1cm4geyBvbkNyZWF0ZVJ1bGU6IG9uQ3JlYXRlUnVsZSB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi9wbHVnaW5zL3J1bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNpbXBsZVJ1bGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNpbXBsZVJ1bGUoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaW1wbGVSdWxlKTtcblxuICAgIHRoaXMudHlwZSA9ICdzaW1wbGUnO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gIF9jcmVhdGVDbGFzcyhTaW1wbGVSdWxlLCBbe1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy52YWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBzdHIgKz0gdGhpcy5rZXkgKyAnICcgKyB0aGlzLnZhbHVlW2luZGV4XSArICc7JztcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZVtpbmRleCArIDFdKSBzdHIgKz0gJ1xcbic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMua2V5ICsgJyAnICsgdGhpcy52YWx1ZSArICc7JztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2ltcGxlUnVsZTtcbn0oKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2ltcGxlUnVsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qc3MvbGliL3J1bGVzL1NpbXBsZVJ1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDExNTVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1J1bGVMaXN0ID0gcmVxdWlyZSgnLi4vUnVsZUxpc3QnKTtcblxudmFyIF9SdWxlTGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SdWxlTGlzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBSdWxlIGZvciBAa2V5ZnJhbWVzXG4gKi9cbnZhciBLZXlmcmFtZXNSdWxlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBLZXlmcmFtZXNSdWxlKGtleSwgZnJhbWVzLCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleWZyYW1lc1J1bGUpO1xuXG4gICAgdGhpcy50eXBlID0gJ2tleWZyYW1lcyc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnJ1bGVzID0gbmV3IF9SdWxlTGlzdDJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7fSwgb3B0aW9ucywgeyBwYXJlbnQ6IHRoaXMgfSkpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBmcmFtZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKG5hbWUsIGZyYW1lc1tuYW1lXSwgX2V4dGVuZHMoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIHNlbGVjdG9yOiBuYW1lXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoS2V5ZnJhbWVzUnVsZSwgW3tcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHsgaW5kZW50OiAxIH07XG5cbiAgICAgIHZhciBpbm5lciA9IHRoaXMucnVsZXMudG9TdHJpbmcob3B0aW9ucyk7XG4gICAgICBpZiAoaW5uZXIpIGlubmVyICs9ICdcXG4nO1xuICAgICAgcmV0dXJuIHRoaXMua2V5ICsgJyB7XFxuJyArIGlubmVyICsgJ30nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBLZXlmcmFtZXNSdWxlO1xufSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBLZXlmcmFtZXNSdWxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcnVsZXMvS2V5ZnJhbWVzUnVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfUnVsZUxpc3QgPSByZXF1aXJlKCcuLi9SdWxlTGlzdCcpO1xuXG52YXIgX1J1bGVMaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1J1bGVMaXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIENvbmRpdGlvbmFsIHJ1bGUgZm9yIEBtZWRpYSwgQHN1cHBvcnRzXG4gKi9cbnZhciBDb25kaXRpb25hbFJ1bGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbmRpdGlvbmFsUnVsZShrZXksIHN0eWxlcywgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25kaXRpb25hbFJ1bGUpO1xuXG4gICAgdGhpcy50eXBlID0gJ2NvbmRpdGlvbmFsJztcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucnVsZXMgPSBuZXcgX1J1bGVMaXN0MlsnZGVmYXVsdCddKF9leHRlbmRzKHt9LCBvcHRpb25zLCB7IHBhcmVudDogdGhpcyB9KSk7XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGVzW25hbWVdKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBydWxlLlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDb25kaXRpb25hbFJ1bGUsIFt7XG4gICAga2V5OiAnZ2V0UnVsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJ1bGUobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucnVsZXMuZ2V0KG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2luZGV4T2YnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGVzLmluZGV4T2YocnVsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCByZWdpc3RlciBydWxlLCBydW4gcGx1Z2lucy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkUnVsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFJ1bGUobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBydWxlID0gdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGUsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgICByZXR1cm4gcnVsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHsgaW5kZW50OiAxIH07XG5cbiAgICAgIHZhciBpbm5lciA9IHRoaXMucnVsZXMudG9TdHJpbmcob3B0aW9ucyk7XG4gICAgICByZXR1cm4gaW5uZXIgPyB0aGlzLmtleSArICcge1xcbicgKyBpbm5lciArICdcXG59JyA6ICcnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25kaXRpb25hbFJ1bGU7XG59KCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IENvbmRpdGlvbmFsUnVsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qc3MvbGliL3J1bGVzL0NvbmRpdGlvbmFsUnVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdG9Dc3MgPSByZXF1aXJlKCcuLi91dGlscy90b0NzcycpO1xuXG52YXIgX3RvQ3NzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQ3NzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRm9udEZhY2VSdWxlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGb250RmFjZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb250RmFjZVJ1bGUpO1xuXG4gICAgdGhpcy50eXBlID0gJ2ZvbnQtZmFjZSc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRm9udEZhY2VSdWxlLCBbe1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zdHlsZSkpIHtcbiAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBzdHIgKz0gKDAsIF90b0NzczJbJ2RlZmF1bHQnXSkodGhpcy5rZXksIHRoaXMuc3R5bGVbaW5kZXhdKTtcbiAgICAgICAgICBpZiAodGhpcy5zdHlsZVtpbmRleCArIDFdKSBzdHIgKz0gJ1xcbic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfdG9Dc3MyWydkZWZhdWx0J10pKHRoaXMua2V5LCB0aGlzLnN0eWxlLCBvcHRpb25zKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRm9udEZhY2VSdWxlO1xufSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBGb250RmFjZVJ1bGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi9ydWxlcy9Gb250RmFjZVJ1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDExNThcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3RvQ3NzID0gcmVxdWlyZSgnLi4vdXRpbHMvdG9Dc3MnKTtcblxudmFyIF90b0NzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0Nzcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFZpZXdwb3J0UnVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmlld3BvcnRSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmlld3BvcnRSdWxlKTtcblxuICAgIHRoaXMudHlwZSA9ICd2aWV3cG9ydCc7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVmlld3BvcnRSdWxlLCBbe1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgICAgcmV0dXJuICgwLCBfdG9Dc3MyWydkZWZhdWx0J10pKHRoaXMua2V5LCB0aGlzLnN0eWxlLCBvcHRpb25zKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmlld3BvcnRSdWxlO1xufSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBWaWV3cG9ydFJ1bGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzL2xpYi9ydWxlcy9WaWV3cG9ydFJ1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDExNTlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1N0eWxlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGVzL1N0eWxlUnVsZScpO1xuXG52YXIgX1N0eWxlUnVsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdHlsZVJ1bGUpO1xuXG52YXIgX2NyZWF0ZVJ1bGUgPSByZXF1aXJlKCcuLi91dGlscy9jcmVhdGVSdWxlJyk7XG5cbnZhciBfY3JlYXRlUnVsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSdWxlKTtcblxudmFyIF9pc09ic2VydmFibGUgPSByZXF1aXJlKCcuLi91dGlscy9pc09ic2VydmFibGUnKTtcblxudmFyIF9pc09ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNPYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICBpZiAoISgwLCBfaXNPYnNlcnZhYmxlMlsnZGVmYXVsdCddKShkZWNsKSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBDYXN0IGBkZWNsYCB0byBgT2JzZXJ2YWJsZWAsIHNpbmNlIGl0IHBhc3NlZCB0aGUgdHlwZSBndWFyZC5cbiAgICB2YXIgc3R5bGUkID0gZGVjbDtcblxuICAgIHZhciBydWxlID0gKDAsIF9jcmVhdGVSdWxlMlsnZGVmYXVsdCddKShuYW1lLCB7fSwgb3B0aW9ucyk7XG5cbiAgICAvLyBUT0RPXG4gICAgLy8gQ2FsbCBgc3RyZWFtLnN1YnNjcmliZSgpYCByZXR1cm5zIGEgc3Vic2NyaXB0aW9uLCB3aGljaCBzaG91bGQgYmUgZXhwbGljaXRseVxuICAgIC8vIHVuc3Vic2NyaWJlZCBmcm9tIHdoZW4gd2Uga25vdyB0aGlzIHNoZWV0IGlzIG5vIGxvbmdlciBuZWVkZWQuXG4gICAgc3R5bGUkLnN1YnNjcmliZShmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgcnVsZS5wcm9wKHByb3AsIHN0eWxlW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9LFxuICBvblByb2Nlc3NSdWxlOiBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUpIHtcbiAgICBpZiAoIShydWxlIGluc3RhbmNlb2YgX1N0eWxlUnVsZTJbJ2RlZmF1bHQnXSkpIHJldHVybjtcbiAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTtcbiAgICB2YXIgc3R5bGUgPSBzdHlsZVJ1bGUuc3R5bGU7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChwcm9wKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wXTtcbiAgICAgIGlmICghKDAsIF9pc09ic2VydmFibGUyWydkZWZhdWx0J10pKHZhbHVlKSkgcmV0dXJuICdjb250aW51ZSc7XG4gICAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgICB2YWx1ZS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KG5leHRWYWx1ZSkge1xuICAgICAgICAgIHN0eWxlUnVsZS5wcm9wKHByb3AsIG5leHRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKHByb3ApO1xuXG4gICAgICBpZiAoX3JldCA9PT0gJ2NvbnRpbnVlJykgY29udGludWU7XG4gICAgfVxuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcGx1Z2lucy9vYnNlcnZhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfUnVsZUxpc3QgPSByZXF1aXJlKCcuLi9SdWxlTGlzdCcpO1xuXG52YXIgX1J1bGVMaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1J1bGVMaXN0KTtcblxudmFyIF9TdHlsZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlcy9TdHlsZVJ1bGUnKTtcblxudmFyIF9TdHlsZVJ1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3R5bGVSdWxlKTtcblxudmFyIF9rZWJhYkNhc2UgPSByZXF1aXJlKCcuLi91dGlscy9rZWJhYkNhc2UnKTtcblxudmFyIF9rZWJhYkNhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2ViYWJDYXNlKTtcblxudmFyIF9jcmVhdGVSdWxlID0gcmVxdWlyZSgnLi4vdXRpbHMvY3JlYXRlUnVsZScpO1xuXG52YXIgX2NyZWF0ZVJ1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUnVsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLy8gQSBzeW1ib2wgcmVwbGFjZW1lbnQuXG52YXIgbm93ID0gRGF0ZS5ub3coKTtcbnZhciBmblZhbHVlc05zID0gJ2ZuVmFsdWVzJyArIG5vdztcbnZhciBmblN0eWxlTnMgPSAnZm5TdHlsZScgKyArK25vdztcblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShuYW1lLCBkZWNsLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBkZWNsICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgcnVsZSA9ICgwLCBfY3JlYXRlUnVsZTJbJ2RlZmF1bHQnXSkobmFtZSwge30sIG9wdGlvbnMpO1xuICAgIHJ1bGVbZm5TdHlsZU5zXSA9IGRlY2w7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0sXG4gIG9uUHJvY2Vzc1N0eWxlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIHZhciBmbiA9IHt9O1xuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BdO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykgY29udGludWU7XG4gICAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgICBmblsoMCwgX2tlYmFiQ2FzZTJbJ2RlZmF1bHQnXSkocHJvcCldID0gdmFsdWU7XG4gICAgfVxuICAgIHJ1bGUgPSBydWxlO1xuICAgIHJ1bGVbZm5WYWx1ZXNOc10gPSBmbjtcbiAgICByZXR1cm4gc3R5bGU7XG4gIH0sXG4gIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShkYXRhLCBydWxlKSB7XG4gICAgLy8gSXQgaXMgYSBydWxlcyBjb250YWluZXIgbGlrZSBmb3IgZS5nLiBDb25kaXRpb25hbFJ1bGUuXG4gICAgaWYgKHJ1bGUucnVsZXMgaW5zdGFuY2VvZiBfUnVsZUxpc3QyWydkZWZhdWx0J10pIHtcbiAgICAgIHJ1bGUucnVsZXMudXBkYXRlKGRhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIShydWxlIGluc3RhbmNlb2YgX1N0eWxlUnVsZTJbJ2RlZmF1bHQnXSkpIHJldHVybjtcblxuICAgIHJ1bGUgPSBydWxlO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIGZuIHZhbHVlcyBtYXAsIGl0IGlzIGEgcnVsZSB3aXRoIGZ1bmN0aW9uIHZhbHVlcy5cbiAgICBpZiAocnVsZVtmblZhbHVlc05zXSkge1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBydWxlW2ZuVmFsdWVzTnNdKSB7XG4gICAgICAgIHJ1bGUucHJvcChwcm9wLCBydWxlW2ZuVmFsdWVzTnNdW3Byb3BdKGRhdGEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBydWxlID0gcnVsZTtcblxuICAgIHZhciBmblN0eWxlID0gcnVsZVtmblN0eWxlTnNdO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHN0eWxlIGZ1bmN0aW9uLCB0aGUgZW50aXJlIHJ1bGUgaXMgZHluYW1pYyBhbmQgc3R5bGUgb2JqZWN0XG4gICAgLy8gd2lsbCBiZSByZXR1cm5lZCBmcm9tIHRoYXQgZnVuY3Rpb24uXG4gICAgaWYgKGZuU3R5bGUpIHtcbiAgICAgIHZhciBzdHlsZSA9IGZuU3R5bGUoZGF0YSk7XG4gICAgICBmb3IgKHZhciBfcHJvcCBpbiBzdHlsZSkge1xuICAgICAgICBydWxlLnByb3AoX3Byb3AsIHN0eWxlW19wcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcGx1Z2lucy9mdW5jdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDExNjFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgcmVnRXhwID0gLyhbQS1aXSkvZztcbnZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShzdHIpIHtcbiAgcmV0dXJuIFwiLVwiICsgc3RyLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvdXRpbHMva2ViYWJDYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfc2hlZXRzID0gcmVxdWlyZSgnLi4vc2hlZXRzJyk7XG5cbnZhciBfc2hlZXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoZWV0cyk7XG5cbnZhciBfU3R5bGVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZXMvU3R5bGVSdWxlJyk7XG5cbnZhciBfU3R5bGVSdWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0eWxlUnVsZSk7XG5cbnZhciBfdG9Dc3NWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL3RvQ3NzVmFsdWUnKTtcblxudmFyIF90b0Nzc1ZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQ3NzVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogR2V0IGEgc3R5bGUgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlKGNzc1J1bGUsIHByb3ApIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gY3NzUnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBJRSBtYXkgdGhyb3cgaWYgcHJvcGVydHkgaXMgdW5rbm93bi5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgYSBzdHlsZSBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGUoY3NzUnVsZSwgcHJvcCwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgY3NzVmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY3NzVmFsdWUgPSAoMCwgX3RvQ3NzVmFsdWUyWydkZWZhdWx0J10pKHZhbHVlLCB0cnVlKTtcblxuICAgICAgaWYgKHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnIWltcG9ydGFudCcpIHtcbiAgICAgICAgY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBjc3NWYWx1ZSwgJ2ltcG9ydGFudCcpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjc3NSdWxlLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIGNzc1ZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSUUgbWF5IHRocm93IGlmIHByb3BlcnR5IGlzIHVua25vd24uXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgQ1NTUnVsZVR5cGVzID0ge1xuICBTVFlMRV9SVUxFOiAxLFxuICBLRVlGUkFNRVNfUlVMRTogN1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIENTUyBSdWxlIGtleS5cbiAgICovXG5cbn07dmFyIGdldEtleSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGV4dHJhY3RLZXkgPSBmdW5jdGlvbiBleHRyYWN0S2V5KGNzc1RleHQpIHtcbiAgICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICByZXR1cm4gY3NzVGV4dC5zdWJzdHIoZnJvbSwgY3NzVGV4dC5pbmRleE9mKCd7JykgLSAxKTtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKGNzc1J1bGUpIHtcbiAgICBpZiAoY3NzUnVsZS50eXBlID09PSBDU1NSdWxlVHlwZXMuU1RZTEVfUlVMRSkgcmV0dXJuIGNzc1J1bGUuc2VsZWN0b3JUZXh0O1xuICAgIGlmIChjc3NSdWxlLnR5cGUgPT09IENTU1J1bGVUeXBlcy5LRVlGUkFNRVNfUlVMRSkge1xuICAgICAgdmFyIG5hbWUgPSBjc3NSdWxlLm5hbWU7XG5cbiAgICAgIGlmIChuYW1lKSByZXR1cm4gJ0BrZXlmcmFtZXMgJyArIG5hbWU7XG5cbiAgICAgIC8vIFRoZXJlIGlzIG5vIHJ1bGUubmFtZSBpbiB0aGUgZm9sbG93aW5nIGJyb3dzZXJzOlxuICAgICAgLy8gLSBJRSA5XG4gICAgICAvLyAtIFNhZmFyaSA3LjEuOFxuICAgICAgLy8gLSBNb2JpbGUgU2FmYXJpIDkuMC4wXG4gICAgICB2YXIgY3NzVGV4dCA9IGNzc1J1bGUuY3NzVGV4dDtcblxuICAgICAgcmV0dXJuICdAJyArIGV4dHJhY3RLZXkoY3NzVGV4dCwgY3NzVGV4dC5pbmRleE9mKCdrZXlmcmFtZXMnKSk7XG4gICAgfVxuXG4gICAgLy8gQ29uZGl0aW9uYWxzLlxuICAgIHJldHVybiBleHRyYWN0S2V5KGNzc1J1bGUuY3NzVGV4dCk7XG4gIH07XG59KCk7XG5cbi8qKlxuICogU2V0IHRoZSBzZWxlY3Rvci5cbiAqL1xuZnVuY3Rpb24gc2V0U2VsZWN0b3IoY3NzUnVsZSwgc2VsZWN0b3JUZXh0KSB7XG4gIGNzc1J1bGUuc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3JUZXh0O1xuXG4gIC8vIFJldHVybiBmYWxzZSBpZiBzZXR0ZXIgd2FzIG5vdCBzdWNjZXNzZnVsLlxuICAvLyBDdXJyZW50bHkgd29ya3MgaW4gY2hyb21lIG9ubHkuXG4gIHJldHVybiBjc3NSdWxlLnNlbGVjdG9yVGV4dCA9PT0gc2VsZWN0b3JUZXh0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGBoZWFkYCBlbGVtZW50IHVwb24gdGhlIGZpcnN0IGNhbGwgYW5kIGNhY2hlcyBpdC5cbiAqL1xudmFyIGdldEhlYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkID0gdm9pZCAwO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghaGVhZCkgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICByZXR1cm4gaGVhZDtcbiAgfTtcbn0oKTtcblxuLyoqXG4gKiBHZXRzIGEgbWFwIG9mIHJ1bGUga2V5cywgd2hlcmUgdGhlIHByb3BlcnR5IGlzIGFuIHVuZXNjYXBlZCBrZXkgYW5kIHZhbHVlXG4gKiBpcyBhIHBvdGVudGlhbGx5IGVzY2FwZWQgb25lLlxuICogSXQgaXMgdXNlZCB0byBpZGVudGlmeSBDU1MgcnVsZXMgYW5kIHRoZSBjb3JyZXNwb25kaW5nIEpTUyBydWxlcy4gQXMgYW4gaWRlbnRpZmllclxuICogZm9yIENTU1N0eWxlUnVsZSB3ZSBub3JtYWxseSB1c2UgYHNlbGVjdG9yVGV4dGAuIFRob3VnaCBpZiBvcmlnaW5hbCBzZWxlY3RvciB0ZXh0XG4gKiBjb250YWlucyBlc2NhcGVkIGNvZGUgcG9pbnRzIGUuZy4gYDpub3QoI1xcXFwyMClgLCBDU1NPTSB3aWxsIGNvbXBpbGUgaXQgdG8gYDpub3QoIyApYFxuICogYW5kIHNvIENTUyBydWxlJ3MgYHNlbGVjdG9yVGV4dGAgd29uJ3QgbWF0Y2ggSlNTIHJ1bGUgc2VsZWN0b3IuXG4gKlxuICogaHR0cHM6Ly93d3cudzMub3JnL0ludGVybmF0aW9uYWwvcXVlc3Rpb25zL3FhLWVzY2FwZXMjY3NzZXNjYXBlc1xuICovXG52YXIgZ2V0VW5lc2NhcGVkS2V5c01hcCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0eWxlID0gdm9pZCAwO1xuICB2YXIgaXNBdHRhY2hlZCA9IGZhbHNlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAocnVsZXMpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI2OTZcbiAgICBpZiAoIXN0eWxlKSBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJ1bGUgPSBydWxlc1tpXTtcbiAgICAgIGlmICghKHJ1bGUgaW5zdGFuY2VvZiBfU3R5bGVSdWxlMlsnZGVmYXVsdCddKSkgY29udGludWU7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBydWxlLnNlbGVjdG9yO1xuICAgICAgLy8gT25seSB1bmVzY2FwZSBzZWxlY3RvciBvdmVyIENTU09NIGlmIGl0IGNvbnRhaW5zIGEgYmFjayBzbGFzaC5cblxuICAgICAgaWYgKHNlbGVjdG9yICYmIHNlbGVjdG9yLmluZGV4T2YoJ1xcXFwnKSAhPT0gLTEpIHtcbiAgICAgICAgLy8gTGF6aWxseSBhdHRhY2ggd2hlbiBuZWVkZWQuXG4gICAgICAgIGlmICghaXNBdHRhY2hlZCkge1xuICAgICAgICAgIGdldEhlYWQoKS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgaXNBdHRhY2hlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzZWxlY3RvciArICcge30nO1xuICAgICAgICB2YXIgX3N0eWxlID0gc3R5bGUsXG4gICAgICAgICAgICBzaGVldCA9IF9zdHlsZS5zaGVldDtcblxuICAgICAgICBpZiAoc2hlZXQpIHtcbiAgICAgICAgICB2YXIgY3NzUnVsZXMgPSBzaGVldC5jc3NSdWxlcztcblxuICAgICAgICAgIGlmIChjc3NSdWxlcykgbWFwW2Nzc1J1bGVzWzBdLnNlbGVjdG9yVGV4dF0gPSBydWxlLmtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNBdHRhY2hlZCkge1xuICAgICAgZ2V0SGVhZCgpLnJlbW92ZUNoaWxkKHN0eWxlKTtcbiAgICAgIGlzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbiAgfTtcbn0oKTtcblxuLyoqXG4gKiBGaW5kIGF0dGFjaGVkIHNoZWV0IHdpdGggYW4gaW5kZXggaGlnaGVyIHRoYW4gdGhlIHBhc3NlZCBvbmUuXG4gKi9cbmZ1bmN0aW9uIGZpbmRIaWdoZXJTaGVldChyZWdpc3RyeSwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNoZWV0ID0gcmVnaXN0cnlbaV07XG4gICAgaWYgKHNoZWV0LmF0dGFjaGVkICYmIHNoZWV0Lm9wdGlvbnMuaW5kZXggPiBvcHRpb25zLmluZGV4ICYmIHNoZWV0Lm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgPT09IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRmluZCBhdHRhY2hlZCBzaGVldCB3aXRoIHRoZSBoaWdoZXN0IGluZGV4LlxuICovXG5mdW5jdGlvbiBmaW5kSGlnaGVzdFNoZWV0KHJlZ2lzdHJ5LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSByZWdpc3RyeS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBzaGVldCA9IHJlZ2lzdHJ5W2ldO1xuICAgIGlmIChzaGVldC5hdHRhY2hlZCAmJiBzaGVldC5vcHRpb25zLmluc2VydGlvblBvaW50ID09PSBvcHRpb25zLmluc2VydGlvblBvaW50KSB7XG4gICAgICByZXR1cm4gc2hlZXQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEZpbmQgYSBjb21tZW50IHdpdGggXCJqc3NcIiBpbnNpZGUuXG4gKi9cbmZ1bmN0aW9uIGZpbmRDb21tZW50Tm9kZSh0ZXh0KSB7XG4gIHZhciBoZWFkID0gZ2V0SGVhZCgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGhlYWQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBub2RlID0gaGVhZC5jaGlsZE5vZGVzW2ldO1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4ICYmIG5vZGUubm9kZVZhbHVlLnRyaW0oKSA9PT0gdGV4dCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEZpbmQgYSBub2RlIGJlZm9yZSB3aGljaCB3ZSBjYW4gaW5zZXJ0IHRoZSBzaGVldC5cbiAqL1xuZnVuY3Rpb24gZmluZFByZXZOb2RlKG9wdGlvbnMpIHtcbiAgdmFyIHJlZ2lzdHJ5ID0gX3NoZWV0czJbJ2RlZmF1bHQnXS5yZWdpc3RyeTtcblxuXG4gIGlmIChyZWdpc3RyeS5sZW5ndGggPiAwKSB7XG4gICAgLy8gVHJ5IHRvIGluc2VydCBiZWZvcmUgdGhlIG5leHQgaGlnaGVyIHNoZWV0LlxuICAgIHZhciBzaGVldCA9IGZpbmRIaWdoZXJTaGVldChyZWdpc3RyeSwgb3B0aW9ucyk7XG4gICAgaWYgKHNoZWV0KSByZXR1cm4gc2hlZXQucmVuZGVyZXIuZWxlbWVudDtcblxuICAgIC8vIE90aGVyd2lzZSBpbnNlcnQgYWZ0ZXIgdGhlIGxhc3QgYXR0YWNoZWQuXG4gICAgc2hlZXQgPSBmaW5kSGlnaGVzdFNoZWV0KHJlZ2lzdHJ5LCBvcHRpb25zKTtcbiAgICBpZiAoc2hlZXQpIHJldHVybiBzaGVldC5yZW5kZXJlci5lbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIC8vIFRyeSB0byBmaW5kIGEgY29tbWVudCBwbGFjZWhvbGRlciBpZiByZWdpc3RyeSBpcyBlbXB0eS5cbiAgdmFyIGluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcblxuICBpZiAoaW5zZXJ0aW9uUG9pbnQgJiYgdHlwZW9mIGluc2VydGlvblBvaW50ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBjb21tZW50ID0gZmluZENvbW1lbnROb2RlKGluc2VydGlvblBvaW50KTtcbiAgICBpZiAoY29tbWVudCkgcmV0dXJuIGNvbW1lbnQubmV4dFNpYmxpbmc7XG4gICAgLy8gSWYgdXNlciBzcGVjaWZpZXMgYW4gaW5zZXJ0aW9uIHBvaW50IGFuZCBpdCBjYW4ndCBiZSBmb3VuZCBpbiB0aGUgZG9jdW1lbnQgLVxuICAgIC8vIGJhZCBzcGVjaWZpY2l0eSBpc3N1ZXMgbWF5IGFwcGVhci5cbiAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGluc2VydGlvblBvaW50ID09PSAnanNzJywgJ1tKU1NdIEluc2VydGlvbiBwb2ludCBcIiVzXCIgbm90IGZvdW5kLicsIGluc2VydGlvblBvaW50KTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEluc2VydCBzdHlsZSBlbGVtZW50IGludG8gdGhlIERPTS5cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGUoc3R5bGUsIG9wdGlvbnMpIHtcbiAgdmFyIGluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcblxuICB2YXIgcHJldk5vZGUgPSBmaW5kUHJldk5vZGUob3B0aW9ucyk7XG5cbiAgaWYgKHByZXZOb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBwcmV2Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlLCBwcmV2Tm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gV29ya3Mgd2l0aCBpZnJhbWVzIGFuZCBhbnkgbm9kZSB0eXBlcy5cbiAgaWYgKGluc2VydGlvblBvaW50ICYmIHR5cGVvZiBpbnNlcnRpb25Qb2ludC5ub2RlVHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MTMyODcyOC9mb3JjZS1jYXN0aW5nLWluLWZsb3dcbiAgICB2YXIgaW5zZXJ0aW9uUG9pbnRFbGVtZW50ID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgdmFyIF9wYXJlbnROb2RlID0gaW5zZXJ0aW9uUG9pbnRFbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICBpZiAoX3BhcmVudE5vZGUpIF9wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZSwgaW5zZXJ0aW9uUG9pbnRFbGVtZW50Lm5leHRTaWJsaW5nKTtlbHNlICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoZmFsc2UsICdbSlNTXSBJbnNlcnRpb24gcG9pbnQgaXMgbm90IGluIHRoZSBET00uJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZ2V0SGVhZCgpLmluc2VydEJlZm9yZShzdHlsZSwgcHJldk5vZGUpO1xufVxuXG52YXIgRG9tUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERvbVJlbmRlcmVyKHNoZWV0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERvbVJlbmRlcmVyKTtcblxuICAgIHRoaXMuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiAgICB0aGlzLnNldFN0eWxlID0gc2V0U3R5bGU7XG4gICAgdGhpcy5zZXRTZWxlY3RvciA9IHNldFNlbGVjdG9yO1xuICAgIHRoaXMuZ2V0S2V5ID0gZ2V0S2V5O1xuICAgIHRoaXMuZ2V0VW5lc2NhcGVkS2V5c01hcCA9IGdldFVuZXNjYXBlZEtleXNNYXA7XG4gICAgdGhpcy5oYXNJbnNlcnRlZFJ1bGVzID0gZmFsc2U7XG5cbiAgICAvLyBUaGVyZSBpcyBubyBzaGVldCB3aGVuIHRoZSByZW5kZXJlciBpcyB1c2VkIGZyb20gYSBzdGFuZGFsb25lIFN0eWxlUnVsZS5cbiAgICBpZiAoc2hlZXQpIF9zaGVldHMyWydkZWZhdWx0J10uYWRkKHNoZWV0KTtcblxuICAgIHRoaXMuc2hlZXQgPSBzaGVldDtcblxuICAgIHZhciBfcmVmID0gdGhpcy5zaGVldCA/IHRoaXMuc2hlZXQub3B0aW9ucyA6IHt9LFxuICAgICAgICBtZWRpYSA9IF9yZWYubWVkaWEsXG4gICAgICAgIG1ldGEgPSBfcmVmLm1ldGEsXG4gICAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgdGhpcy5lbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanNzJywgJycpO1xuICAgIGlmIChtZWRpYSkgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgaWYgKG1ldGEpIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWV0YScsIG1ldGEpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIHZhciBub25jZSA9IGdsb2JhbC5fX3dlYnBhY2tfbm9uY2VfXztcbiAgICBpZiAobm9uY2UpIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBzdHlsZSBlbGVtZW50IGludG8gcmVuZGVyIHRyZWUuXG4gICAqL1xuXG5cbiAgLy8gSFRNTFN0eWxlRWxlbWVudCBuZWVkcyBmaXhpbmcgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI2OTZcblxuXG4gIF9jcmVhdGVDbGFzcyhEb21SZW5kZXJlciwgW3tcbiAgICBrZXk6ICdhdHRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgICAvLyBJbiB0aGUgY2FzZSB0aGUgZWxlbWVudCBub2RlIGlzIGV4dGVybmFsIGFuZCBpdCBpcyBhbHJlYWR5IGluIHRoZSBET00uXG4gICAgICBpZiAodGhpcy5lbGVtZW50LnBhcmVudE5vZGUgfHwgIXRoaXMuc2hlZXQpIHJldHVybjtcblxuICAgICAgLy8gV2hlbiBydWxlcyBhcmUgaW5zZXJ0ZWQgdXNpbmcgYGluc2VydFJ1bGVgIEFQSSwgYWZ0ZXIgYHNoZWV0LmRldGFjaCgpLmF0dGFjaCgpYFxuICAgICAgLy8gYnJvd3NlcnMgcmVtb3ZlIHRob3NlIHJ1bGVzLlxuICAgICAgLy8gVE9ETyBmaWd1cmUgb3V0IGlmIGl0cyBhIGJ1ZyBhbmQgaWYgaXQgaXMga25vd24uXG4gICAgICAvLyBXb3JrYXJvdW5kIGlzIHRvIHJlZGVwbG95IHRoZSBzaGVldCBiZWZvcmUgYXR0YWNoaW5nIGFzIGEgc3RyaW5nLlxuICAgICAgaWYgKHRoaXMuaGFzSW5zZXJ0ZWRSdWxlcykge1xuICAgICAgICB0aGlzLmRlcGxveSgpO1xuICAgICAgICB0aGlzLmhhc0luc2VydGVkUnVsZXMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaW5zZXJ0U3R5bGUodGhpcy5lbGVtZW50LCB0aGlzLnNoZWV0Lm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBzdHlsZSBlbGVtZW50IGZyb20gcmVuZGVyIHRyZWUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2RldGFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IENTUyBzdHJpbmcgaW50byBlbGVtZW50LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZXBsb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXBsb3koKSB7XG4gICAgICBpZiAoIXRoaXMuc2hlZXQpIHJldHVybjtcbiAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdcXG4nICsgdGhpcy5zaGVldC50b1N0cmluZygpICsgJ1xcbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgcnVsZSBpbnRvIGVsZW1lbnQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2luc2VydFJ1bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLmVsZW1lbnQuc2hlZXQ7XG4gICAgICB2YXIgY3NzUnVsZXMgPSBzaGVldC5jc3NSdWxlcztcblxuICAgICAgdmFyIHN0ciA9IHJ1bGUudG9TdHJpbmcoKTtcbiAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gY3NzUnVsZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoIXN0cikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICB0cnkge1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHN0ciwgaW5kZXgpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoZmFsc2UsICdbSlNTXSBDYW4gbm90IGluc2VydCBhbiB1bnN1cHBvcnRlZCBydWxlIFxcblxcciVzJywgcnVsZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFzSW5zZXJ0ZWRSdWxlcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiBjc3NSdWxlc1tpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGEgcnVsZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGVsZXRlUnVsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoY3NzUnVsZSkge1xuICAgICAgdmFyIHNoZWV0ID0gdGhpcy5lbGVtZW50LnNoZWV0O1xuXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YoY3NzUnVsZSk7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpbmRleCBvZiBhIENTUyBSdWxlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbmRleE9mJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5kZXhPZihjc3NSdWxlKSB7XG4gICAgICB2YXIgY3NzUnVsZXMgPSB0aGlzLmVsZW1lbnQuc2hlZXQuY3NzUnVsZXM7XG5cbiAgICAgIGZvciAodmFyIF9pbmRleCA9IDA7IF9pbmRleCA8IGNzc1J1bGVzLmxlbmd0aDsgX2luZGV4KyspIHtcbiAgICAgICAgaWYgKGNzc1J1bGUgPT09IGNzc1J1bGVzW19pbmRleF0pIHJldHVybiBfaW5kZXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSBuZXcgQ1NTIHJ1bGUgYW5kIHJlcGxhY2UgdGhlIGV4aXN0aW5nIG9uZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVwbGFjZVJ1bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlUnVsZShjc3NSdWxlLCBydWxlKSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YoY3NzUnVsZSk7XG4gICAgICB2YXIgbmV3Q3NzUnVsZSA9IHRoaXMuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgICByZXR1cm4gbmV3Q3NzUnVsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHJ1bGVzIGVsZW1lbnRzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSdWxlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJ1bGVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5zaGVldC5jc3NSdWxlcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRG9tUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IERvbVJlbmRlcmVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcmVuZGVyZXJzL0RvbVJlbmRlcmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG4vKipcbiAqIFJlbmRlcmluZyBiYWNrZW5kIHRvIGRvIG5vdGhpbmcgaW4gbm9kZWpzLlxuICovXG52YXIgVmlydHVhbFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWaXJ0dWFsUmVuZGVyZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpcnR1YWxSZW5kZXJlcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmlydHVhbFJlbmRlcmVyLCBbe1xuICAgIGtleTogJ3NldFN0eWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U3R5bGUoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTdHlsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0eWxlKCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFNlbGVjdG9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRLZXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRLZXkoKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYXR0YWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXR0YWNoKCkge31cbiAgfSwge1xuICAgIGtleTogJ2RldGFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXBsb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXBsb3koKSB7fVxuICB9LCB7XG4gICAga2V5OiAnaW5zZXJ0UnVsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydFJ1bGUoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVsZXRlUnVsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXBsYWNlUnVsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2VSdWxlKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFJ1bGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UnVsZXMoKSB7fVxuICB9LCB7XG4gICAga2V5OiAnaW5kZXhPZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluZGV4T2YoKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZpcnR1YWxSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gVmlydHVhbFJlbmRlcmVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy9saWIvcmVuZGVyZXJzL1ZpcnR1YWxSZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGpzc0dsb2JhbDtcblxudmFyIF9qc3MgPSByZXF1aXJlKCdqc3MnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHByb3BLZXkgPSAnQGdsb2JhbCc7XG52YXIgcHJlZml4S2V5ID0gJ0BnbG9iYWwgJztcblxudmFyIEdsb2JhbENvbnRhaW5lclJ1bGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdsb2JhbENvbnRhaW5lclJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xvYmFsQ29udGFpbmVyUnVsZSk7XG5cbiAgICB0aGlzLnR5cGUgPSAnZ2xvYmFsJztcblxuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5ydWxlcyA9IG5ldyBfanNzLlJ1bGVMaXN0KF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBzZWxlY3RvciBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKHNlbGVjdG9yLCBzdHlsZXNbc2VsZWN0b3JdLCB7IHNlbGVjdG9yOiBzZWxlY3RvciB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBydWxlLlxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhHbG9iYWxDb250YWluZXJSdWxlLCBbe1xuICAgIGtleTogJ2dldFJ1bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUsIHJ1biBwbHVnaW5zLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGRSdWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgICAgdmFyIHJ1bGUgPSB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnMub25Qcm9jZXNzUnVsZShydWxlKTtcbiAgICAgIHJldHVybiBydWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2luZGV4T2YnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGVzLmluZGV4T2YocnVsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGVzLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdsb2JhbENvbnRhaW5lclJ1bGU7XG59KCk7XG5cbnZhciBHbG9iYWxQcmVmaXhlZFJ1bGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdsb2JhbFByZWZpeGVkUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHbG9iYWxQcmVmaXhlZFJ1bGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHZhciBzZWxlY3RvciA9IG5hbWUuc3Vic3RyKHByZWZpeEtleS5sZW5ndGgpO1xuICAgIHRoaXMucnVsZSA9IG9wdGlvbnMuanNzLmNyZWF0ZVJ1bGUoc2VsZWN0b3IsIHN0eWxlLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgfSkpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdsb2JhbFByZWZpeGVkUnVsZSwgW3tcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGUudG9TdHJpbmcob3B0aW9ucyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdsb2JhbFByZWZpeGVkUnVsZTtcbn0oKTtcblxudmFyIHNlcGFyYXRvclJlZ0V4cCA9IC9cXHMqLFxccyovZztcblxuZnVuY3Rpb24gYWRkU2NvcGUoc2VsZWN0b3IsIHNjb3BlKSB7XG4gIHZhciBwYXJ0cyA9IHNlbGVjdG9yLnNwbGl0KHNlcGFyYXRvclJlZ0V4cCk7XG4gIHZhciBzY29wZWQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIHNjb3BlZCArPSBzY29wZSArICcgJyArIHBhcnRzW2ldLnRyaW0oKTtcbiAgICBpZiAocGFydHNbaSArIDFdKSBzY29wZWQgKz0gJywgJztcbiAgfVxuICByZXR1cm4gc2NvcGVkO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVOZXN0ZWRHbG9iYWxDb250YWluZXJSdWxlKHJ1bGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBydWxlLm9wdGlvbnMsXG4gICAgICBzdHlsZSA9IHJ1bGUuc3R5bGU7XG5cbiAgdmFyIHJ1bGVzID0gc3R5bGVbcHJvcEtleV07XG5cbiAgaWYgKCFydWxlcykgcmV0dXJuO1xuXG4gIGZvciAodmFyIG5hbWUgaW4gcnVsZXMpIHtcbiAgICBvcHRpb25zLnNoZWV0LmFkZFJ1bGUobmFtZSwgcnVsZXNbbmFtZV0sIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBzZWxlY3RvcjogYWRkU2NvcGUobmFtZSwgcnVsZS5zZWxlY3RvcilcbiAgICB9KSk7XG4gIH1cblxuICBkZWxldGUgc3R5bGVbcHJvcEtleV07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByZWZpeGVkR2xvYmFsUnVsZShydWxlKSB7XG4gIHZhciBvcHRpb25zID0gcnVsZS5vcHRpb25zLFxuICAgICAgc3R5bGUgPSBydWxlLnN0eWxlO1xuXG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICBpZiAocHJvcC5zdWJzdHIoMCwgcHJvcEtleS5sZW5ndGgpICE9PSBwcm9wS2V5KSBjb250aW51ZTtcblxuICAgIHZhciBzZWxlY3RvciA9IGFkZFNjb3BlKHByb3Auc3Vic3RyKHByb3BLZXkubGVuZ3RoKSwgcnVsZS5zZWxlY3Rvcik7XG4gICAgb3B0aW9ucy5zaGVldC5hZGRSdWxlKHNlbGVjdG9yLCBzdHlsZVtwcm9wXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxuICAgIH0pKTtcbiAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IG5lc3RlZCBydWxlcyB0byBzZXBhcmF0ZSwgcmVtb3ZlIHRoZW0gZnJvbSBvcmlnaW5hbCBzdHlsZXMuXG4gKlxuICogQHBhcmFtIHtSdWxlfSBydWxlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBqc3NHbG9iYWwoKSB7XG4gIGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShuYW1lLCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAobmFtZSA9PT0gcHJvcEtleSkge1xuICAgICAgcmV0dXJuIG5ldyBHbG9iYWxDb250YWluZXJSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVbMF0gPT09ICdAJyAmJiBuYW1lLnN1YnN0cigwLCBwcmVmaXhLZXkubGVuZ3RoKSA9PT0gcHJlZml4S2V5KSB7XG4gICAgICByZXR1cm4gbmV3IEdsb2JhbFByZWZpeGVkUnVsZShuYW1lLCBzdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcblxuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnZ2xvYmFsJyB8fCBwYXJlbnQub3B0aW9ucy5wYXJlbnQudHlwZSA9PT0gJ2dsb2JhbCcpIHtcbiAgICAgICAgb3B0aW9ucy5nbG9iYWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmdsb2JhbCkgb3B0aW9ucy5zZWxlY3RvciA9IG5hbWU7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybjtcblxuICAgIGhhbmRsZU5lc3RlZEdsb2JhbENvbnRhaW5lclJ1bGUocnVsZSk7XG4gICAgaGFuZGxlUHJlZml4ZWRHbG9iYWxSdWxlKHJ1bGUpO1xuICB9XG5cbiAgcmV0dXJuIHsgb25DcmVhdGVSdWxlOiBvbkNyZWF0ZVJ1bGUsIG9uUHJvY2Vzc1J1bGU6IG9uUHJvY2Vzc1J1bGUgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qc3MtZ2xvYmFsL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGpzc05lc3RlZDtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzZXBhcmF0b3JSZWdFeHAgPSAvXFxzKixcXHMqL2c7XG52YXIgcGFyZW50UmVnRXhwID0gLyYvZztcbnZhciByZWZSZWdFeHAgPSAvXFwkKFtcXHctXSspL2c7XG5cbi8qKlxuICogQ29udmVydCBuZXN0ZWQgcnVsZXMgdG8gc2VwYXJhdGUsIHJlbW92ZSB0aGVtIGZyb20gb3JpZ2luYWwgc3R5bGVzLlxuICpcbiAqIEBwYXJhbSB7UnVsZX0gcnVsZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24ganNzTmVzdGVkKCkge1xuICAvLyBHZXQgYSBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciAkcmVmIHJlcGxhY2VtZW50LlxuICBmdW5jdGlvbiBnZXRSZXBsYWNlUmVmKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWF0Y2gsIGtleSkge1xuICAgICAgdmFyIHJ1bGUgPSBjb250YWluZXIuZ2V0UnVsZShrZXkpO1xuICAgICAgaWYgKHJ1bGUpIHJldHVybiBydWxlLnNlbGVjdG9yO1xuICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ1tKU1NdIENvdWxkIG5vdCBmaW5kIHRoZSByZWZlcmVuY2VkIHJ1bGUgJXMgaW4gJXMuJywga2V5LCBjb250YWluZXIub3B0aW9ucy5tZXRhIHx8IGNvbnRhaW5lcik7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH07XG4gIH1cblxuICB2YXIgaGFzQW5kID0gZnVuY3Rpb24gaGFzQW5kKHN0cikge1xuICAgIHJldHVybiBzdHIuaW5kZXhPZignJicpICE9PSAtMTtcbiAgfTtcblxuICBmdW5jdGlvbiByZXBsYWNlUGFyZW50UmVmcyhuZXN0ZWRQcm9wLCBwYXJlbnRQcm9wKSB7XG4gICAgdmFyIHBhcmVudFNlbGVjdG9ycyA9IHBhcmVudFByb3Auc3BsaXQoc2VwYXJhdG9yUmVnRXhwKTtcbiAgICB2YXIgbmVzdGVkU2VsZWN0b3JzID0gbmVzdGVkUHJvcC5zcGxpdChzZXBhcmF0b3JSZWdFeHApO1xuXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRTZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXJlbnQgPSBwYXJlbnRTZWxlY3RvcnNbaV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmVzdGVkU2VsZWN0b3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBuZXN0ZWQgPSBuZXN0ZWRTZWxlY3RvcnNbal07XG4gICAgICAgIGlmIChyZXN1bHQpIHJlc3VsdCArPSAnLCAnO1xuICAgICAgICAvLyBSZXBsYWNlIGFsbCAmIGJ5IHRoZSBwYXJlbnQgb3IgcHJlZml4ICYgd2l0aCB0aGUgcGFyZW50LlxuICAgICAgICByZXN1bHQgKz0gaGFzQW5kKG5lc3RlZCkgPyBuZXN0ZWQucmVwbGFjZShwYXJlbnRSZWdFeHAsIHBhcmVudCkgOiBwYXJlbnQgKyAnICcgKyBuZXN0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9wdGlvbnMocnVsZSwgY29udGFpbmVyLCBvcHRpb25zKSB7XG4gICAgLy8gT3B0aW9ucyBoYXMgYmVlbiBhbHJlYWR5IGNyZWF0ZWQsIG5vdyB3ZSBvbmx5IGluY3JlYXNlIGluZGV4LlxuICAgIGlmIChvcHRpb25zKSByZXR1cm4gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHsgaW5kZXg6IG9wdGlvbnMuaW5kZXggKyAxIH0pO1xuXG4gICAgdmFyIG5lc3RpbmdMZXZlbCA9IHJ1bGUub3B0aW9ucy5uZXN0aW5nTGV2ZWw7XG5cbiAgICBuZXN0aW5nTGV2ZWwgPSBuZXN0aW5nTGV2ZWwgPT09IHVuZGVmaW5lZCA/IDEgOiBuZXN0aW5nTGV2ZWwgKyAxO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBydWxlLm9wdGlvbnMsIHtcbiAgICAgIG5lc3RpbmdMZXZlbDogbmVzdGluZ0xldmVsLFxuICAgICAgaW5kZXg6IGNvbnRhaW5lci5pbmRleE9mKHJ1bGUpICsgMVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUpIHtcbiAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG4gICAgdmFyIGNvbnRhaW5lciA9IHJ1bGUub3B0aW9ucy5wYXJlbnQ7XG4gICAgdmFyIG9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdmFyIHJlcGxhY2VSZWYgPSB2b2lkIDA7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmFyIGlzTmVzdGVkID0gaGFzQW5kKHByb3ApO1xuICAgICAgdmFyIGlzTmVzdGVkQ29uZGl0aW9uYWwgPSBwcm9wWzBdID09PSAnQCc7XG5cbiAgICAgIGlmICghaXNOZXN0ZWQgJiYgIWlzTmVzdGVkQ29uZGl0aW9uYWwpIGNvbnRpbnVlO1xuXG4gICAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhydWxlLCBjb250YWluZXIsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAoaXNOZXN0ZWQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gcmVwbGFjZVBhcmVudFJlZnMocHJvcCwgcnVsZS5zZWxlY3RvclxuICAgICAgICAvLyBMYXppbHkgY3JlYXRlIHRoZSByZWYgcmVwbGFjZXIgZnVuY3Rpb24ganVzdCBvbmNlIGZvclxuICAgICAgICAvLyBhbGwgbmVzdGVkIHJ1bGVzIHdpdGhpbiB0aGUgc2hlZXQuXG4gICAgICAgICk7aWYgKCFyZXBsYWNlUmVmKSByZXBsYWNlUmVmID0gZ2V0UmVwbGFjZVJlZihjb250YWluZXJcbiAgICAgICAgLy8gUmVwbGFjZSBhbGwgJHJlZnMuXG4gICAgICAgICk7c2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKHJlZlJlZ0V4cCwgcmVwbGFjZVJlZik7XG5cbiAgICAgICAgY29udGFpbmVyLmFkZFJ1bGUoc2VsZWN0b3IsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywgeyBzZWxlY3Rvcjogc2VsZWN0b3IgfSkpO1xuICAgICAgfSBlbHNlIGlmIChpc05lc3RlZENvbmRpdGlvbmFsKSB7XG4gICAgICAgIGNvbnRhaW5lclxuICAgICAgICAvLyBQbGFjZSBjb25kaXRpb25hbCByaWdodCBhZnRlciB0aGUgcGFyZW50IHJ1bGUgdG8gZW5zdXJlIHJpZ2h0IG9yZGVyaW5nLlxuICAgICAgICAuYWRkUnVsZShwcm9wLCBudWxsLCBvcHRpb25zKS5hZGRSdWxlKHJ1bGUua2V5LCBzdHlsZVtwcm9wXSwgeyBzZWxlY3RvcjogcnVsZS5zZWxlY3RvciB9KTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHJldHVybiB7IG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZSB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy1uZXN0ZWQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjYW1lbENhc2U7XG52YXIgcmVnRXhwID0gLyhbQS1aXSkvZztcblxuLyoqXG4gKiBSZXBsYWNlIGEgc3RyaW5nIHBhc3NlZCBmcm9tIFN0cmluZyNyZXBsYWNlLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiByZXBsYWNlKHN0cikge1xuICByZXR1cm4gXCItXCIgKyBzdHIudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGNhbWVsIGNhc2VkIHByb3BlcnR5IG5hbWVzIHRvIGRhc2ggc2VwYXJhdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBjb252ZXJ0Q2FzZShzdHlsZSkge1xuICB2YXIgY29udmVydGVkID0ge307XG5cbiAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgIGNvbnZlcnRlZFtwcm9wLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlKV0gPSBzdHlsZVtwcm9wXTtcbiAgfVxuXG4gIGlmIChzdHlsZS5mYWxsYmFja3MpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZS5mYWxsYmFja3MpKSBjb252ZXJ0ZWQuZmFsbGJhY2tzID0gc3R5bGUuZmFsbGJhY2tzLm1hcChjb252ZXJ0Q2FzZSk7ZWxzZSBjb252ZXJ0ZWQuZmFsbGJhY2tzID0gY29udmVydENhc2Uoc3R5bGUuZmFsbGJhY2tzKTtcbiAgfVxuXG4gIHJldHVybiBjb252ZXJ0ZWQ7XG59XG5cbi8qKlxuICogQWxsb3cgY2FtZWwgY2FzZWQgcHJvcGVydHkgbmFtZXMgYnkgY29udmVydGluZyB0aGVtIGJhY2sgdG8gZGFzaGVyaXplZC5cbiAqXG4gKiBAcGFyYW0ge1J1bGV9IHJ1bGVcbiAqL1xuZnVuY3Rpb24gY2FtZWxDYXNlKCkge1xuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlKSkge1xuICAgICAgLy8gSGFuZGxlIHJ1bGVzIGxpa2UgQGZvbnQtZmFjZSwgd2hpY2ggY2FuIGhhdmUgbXVsdGlwbGUgc3R5bGVzIGluIGFuIGFycmF5XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHN0eWxlW2luZGV4XSA9IGNvbnZlcnRDYXNlKHN0eWxlW2luZGV4XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnZlcnRDYXNlKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiB7IG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZSB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzcy1jYW1lbC1jYXNlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZGVmYXVsdFVuaXQ7XG5cbnZhciBfZGVmYXVsdFVuaXRzID0gcmVxdWlyZSgnLi9kZWZhdWx0VW5pdHMnKTtcblxudmFyIF9kZWZhdWx0VW5pdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdFVuaXRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIENsb25lcyB0aGUgb2JqZWN0IGFuZCBhZGRzIGEgY2FtZWwgY2FzZWQgcHJvcGVydHkgdmVyc2lvbi5cbiAqL1xuZnVuY3Rpb24gYWRkQ2FtZWxDYXNlZFZlcnNpb24ob2JqKSB7XG4gIHZhciByZWdFeHAgPSAvKC1bYS16XSkvZztcbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHN0cikge1xuICAgIHJldHVybiBzdHJbMV0udG9VcHBlckNhc2UoKTtcbiAgfTtcbiAgdmFyIG5ld09iaiA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICBuZXdPYmpba2V5LnJlcGxhY2UocmVnRXhwLCByZXBsYWNlKV0gPSBvYmpba2V5XTtcbiAgfVxuICByZXR1cm4gbmV3T2JqO1xufVxuXG52YXIgdW5pdHMgPSBhZGRDYW1lbENhc2VkVmVyc2lvbihfZGVmYXVsdFVuaXRzMlsnZGVmYXVsdCddKTtcblxuLyoqXG4gKiBSZWN1cnNpdmUgZGVlcCBzdHlsZSBwYXNzaW5nIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGN1cnJlbnQgcHJvcGVydHlcbiAqIEBwYXJhbSB7KE9iamVjdHxBcnJheXxOdW1iZXJ8U3RyaW5nKX0gcHJvcGVydHkgdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHsoT2JqZWN0fEFycmF5fE51bWJlcnxTdHJpbmcpfSByZXN1bHRpbmcgdmFsdWVcbiAqL1xuZnVuY3Rpb24gaXRlcmF0ZShwcm9wLCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG5cbiAgdmFyIGNvbnZlcnRlZFZhbHVlID0gdmFsdWU7XG5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKTtcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB0eXBlID0gJ2FycmF5JztcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHByb3AgPT09ICdmYWxsYmFja3MnKSB7XG4gICAgICAgIGZvciAodmFyIGlubmVyUHJvcCBpbiB2YWx1ZSkge1xuICAgICAgICAgIHZhbHVlW2lubmVyUHJvcF0gPSBpdGVyYXRlKGlubmVyUHJvcCwgdmFsdWVbaW5uZXJQcm9wXSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBfaW5uZXJQcm9wIGluIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlW19pbm5lclByb3BdID0gaXRlcmF0ZShwcm9wICsgJy0nICsgX2lubmVyUHJvcCwgdmFsdWVbX2lubmVyUHJvcF0sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZVtpXSA9IGl0ZXJhdGUocHJvcCwgdmFsdWVbaV0sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgICBjb252ZXJ0ZWRWYWx1ZSA9IHZhbHVlICsgKG9wdGlvbnNbcHJvcF0gfHwgdW5pdHNbcHJvcF0gfHwgJycpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGNvbnZlcnRlZFZhbHVlO1xufVxuXG4vKipcbiAqIEFkZCB1bml0IHRvIG51bWVyaWMgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBkZWZhdWx0VW5pdCgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBjYW1lbENhc2VkT3B0aW9ucyA9IGFkZENhbWVsQ2FzZWRWZXJzaW9uKG9wdGlvbnMpO1xuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgc3R5bGVbcHJvcF0gPSBpdGVyYXRlKHByb3AsIHN0eWxlW3Byb3BdLCBjYW1lbENhc2VkT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWx1ZSwgcHJvcCkge1xuICAgIHJldHVybiBpdGVyYXRlKHByb3AsIHZhbHVlLCBjYW1lbENhc2VkT3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4geyBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsIG9uQ2hhbmdlVmFsdWU6IG9uQ2hhbmdlVmFsdWUgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qc3MtZGVmYXVsdC11bml0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIEdlbmVyYXRlZCBqc3MtZGVmYXVsdC11bml0IENTUyBwcm9wZXJ0eSB1bml0c1xuICpcbiAqIEB0eXBlIG9iamVjdFxuICovXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gICdhbmltYXRpb24tZGVsYXknOiAnbXMnLFxuICAnYW5pbWF0aW9uLWR1cmF0aW9uJzogJ21zJyxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAncHgnLFxuICAnYmFja2dyb3VuZC1wb3NpdGlvbi14JzogJ3B4JyxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24teSc6ICdweCcsXG4gICdiYWNrZ3JvdW5kLXNpemUnOiAncHgnLFxuICBib3JkZXI6ICdweCcsXG4gICdib3JkZXItYm90dG9tJzogJ3B4JyxcbiAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnOiAncHgnLFxuICAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnOiAncHgnLFxuICAnYm9yZGVyLWJvdHRvbS13aWR0aCc6ICdweCcsXG4gICdib3JkZXItbGVmdCc6ICdweCcsXG4gICdib3JkZXItbGVmdC13aWR0aCc6ICdweCcsXG4gICdib3JkZXItcmFkaXVzJzogJ3B4JyxcbiAgJ2JvcmRlci1yaWdodCc6ICdweCcsXG4gICdib3JkZXItcmlnaHQtd2lkdGgnOiAncHgnLFxuICAnYm9yZGVyLXNwYWNpbmcnOiAncHgnLFxuICAnYm9yZGVyLXRvcCc6ICdweCcsXG4gICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJzogJ3B4JyxcbiAgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJzogJ3B4JyxcbiAgJ2JvcmRlci10b3Atd2lkdGgnOiAncHgnLFxuICAnYm9yZGVyLXdpZHRoJzogJ3B4JyxcbiAgJ2JvcmRlci1hZnRlci13aWR0aCc6ICdweCcsXG4gICdib3JkZXItYmVmb3JlLXdpZHRoJzogJ3B4JyxcbiAgJ2JvcmRlci1lbmQtd2lkdGgnOiAncHgnLFxuICAnYm9yZGVyLWhvcml6b250YWwtc3BhY2luZyc6ICdweCcsXG4gICdib3JkZXItc3RhcnQtd2lkdGgnOiAncHgnLFxuICAnYm9yZGVyLXZlcnRpY2FsLXNwYWNpbmcnOiAncHgnLFxuICBib3R0b206ICdweCcsXG4gICdib3gtc2hhZG93JzogJ3B4JyxcbiAgJ2NvbHVtbi1nYXAnOiAncHgnLFxuICAnY29sdW1uLXJ1bGUnOiAncHgnLFxuICAnY29sdW1uLXJ1bGUtd2lkdGgnOiAncHgnLFxuICAnY29sdW1uLXdpZHRoJzogJ3B4JyxcbiAgJ2ZsZXgtYmFzaXMnOiAncHgnLFxuICAnZm9udC1zaXplJzogJ3B4JyxcbiAgJ2ZvbnQtc2l6ZS1kZWx0YSc6ICdweCcsXG4gIGhlaWdodDogJ3B4JyxcbiAgbGVmdDogJ3B4JyxcbiAgJ2xldHRlci1zcGFjaW5nJzogJ3B4JyxcbiAgJ2xvZ2ljYWwtaGVpZ2h0JzogJ3B4JyxcbiAgJ2xvZ2ljYWwtd2lkdGgnOiAncHgnLFxuICBtYXJnaW46ICdweCcsXG4gICdtYXJnaW4tYWZ0ZXInOiAncHgnLFxuICAnbWFyZ2luLWJlZm9yZSc6ICdweCcsXG4gICdtYXJnaW4tYm90dG9tJzogJ3B4JyxcbiAgJ21hcmdpbi1sZWZ0JzogJ3B4JyxcbiAgJ21hcmdpbi1yaWdodCc6ICdweCcsXG4gICdtYXJnaW4tdG9wJzogJ3B4JyxcbiAgJ21heC1oZWlnaHQnOiAncHgnLFxuICAnbWF4LXdpZHRoJzogJ3B4JyxcbiAgJ21hcmdpbi1lbmQnOiAncHgnLFxuICAnbWFyZ2luLXN0YXJ0JzogJ3B4JyxcbiAgJ21hc2stcG9zaXRpb24teCc6ICdweCcsXG4gICdtYXNrLXBvc2l0aW9uLXknOiAncHgnLFxuICAnbWFzay1zaXplJzogJ3B4JyxcbiAgJ21heC1sb2dpY2FsLWhlaWdodCc6ICdweCcsXG4gICdtYXgtbG9naWNhbC13aWR0aCc6ICdweCcsXG4gICdtaW4taGVpZ2h0JzogJ3B4JyxcbiAgJ21pbi13aWR0aCc6ICdweCcsXG4gICdtaW4tbG9naWNhbC1oZWlnaHQnOiAncHgnLFxuICAnbWluLWxvZ2ljYWwtd2lkdGgnOiAncHgnLFxuICBtb3Rpb246ICdweCcsXG4gICdtb3Rpb24tb2Zmc2V0JzogJ3B4JyxcbiAgb3V0bGluZTogJ3B4JyxcbiAgJ291dGxpbmUtb2Zmc2V0JzogJ3B4JyxcbiAgJ291dGxpbmUtd2lkdGgnOiAncHgnLFxuICBwYWRkaW5nOiAncHgnLFxuICAncGFkZGluZy1ib3R0b20nOiAncHgnLFxuICAncGFkZGluZy1sZWZ0JzogJ3B4JyxcbiAgJ3BhZGRpbmctcmlnaHQnOiAncHgnLFxuICAncGFkZGluZy10b3AnOiAncHgnLFxuICAncGFkZGluZy1hZnRlcic6ICdweCcsXG4gICdwYWRkaW5nLWJlZm9yZSc6ICdweCcsXG4gICdwYWRkaW5nLWVuZCc6ICdweCcsXG4gICdwYWRkaW5nLXN0YXJ0JzogJ3B4JyxcbiAgJ3BlcnNwZWN0aXZlLW9yaWdpbi14JzogJyUnLFxuICAncGVyc3BlY3RpdmUtb3JpZ2luLXknOiAnJScsXG4gIHBlcnNwZWN0aXZlOiAncHgnLFxuICByaWdodDogJ3B4JyxcbiAgJ3NoYXBlLW1hcmdpbic6ICdweCcsXG4gIHNpemU6ICdweCcsXG4gICd0ZXh0LWluZGVudCc6ICdweCcsXG4gICd0ZXh0LXN0cm9rZSc6ICdweCcsXG4gICd0ZXh0LXN0cm9rZS13aWR0aCc6ICdweCcsXG4gIHRvcDogJ3B4JyxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnJScsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXgnOiAnJScsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXknOiAnJScsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXonOiAnJScsXG4gICd0cmFuc2l0aW9uLWRlbGF5JzogJ21zJyxcbiAgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiAnbXMnLFxuICAndmVydGljYWwtYWxpZ24nOiAncHgnLFxuICB3aWR0aDogJ3B4JyxcbiAgJ3dvcmQtc3BhY2luZyc6ICdweCcsXG4gIC8vIE5vdCBleGlzdGluZyBwcm9wZXJ0aWVzLlxuICAvLyBVc2VkIHRvIGF2b2lkIGlzc3VlcyB3aXRoIGpzcy1leHBhbmQgaW50ZXJncmF0aW9uLlxuICAnYm94LXNoYWRvdy14JzogJ3B4JyxcbiAgJ2JveC1zaGFkb3cteSc6ICdweCcsXG4gICdib3gtc2hhZG93LWJsdXInOiAncHgnLFxuICAnYm94LXNoYWRvdy1zcHJlYWQnOiAncHgnLFxuICAnZm9udC1saW5lLWhlaWdodCc6ICdweCcsXG4gICd0ZXh0LXNoYWRvdy14JzogJ3B4JyxcbiAgJ3RleHQtc2hhZG93LXknOiAncHgnLFxuICAndGV4dC1zaGFkb3ctYmx1cic6ICdweCdcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzLWRlZmF1bHQtdW5pdC9saWIvZGVmYXVsdFVuaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGpzc1ZlbmRvclByZWZpeGVyO1xuXG52YXIgX2Nzc1ZlbmRvciA9IHJlcXVpcmUoJ2Nzcy12ZW5kb3InKTtcblxudmFyIHZlbmRvciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jc3NWZW5kb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG4vKipcbiAqIEFkZCB2ZW5kb3IgcHJlZml4IHRvIGEgcHJvcGVydHkgbmFtZSB3aGVuIG5lZWRlZC5cbiAqXG4gKiBAcGFyYW0ge1J1bGV9IHJ1bGVcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGpzc1ZlbmRvclByZWZpeGVyKCkge1xuICBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUpIHtcbiAgICBpZiAocnVsZS50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgcnVsZS5rZXkgPSAnQCcgKyB2ZW5kb3IucHJlZml4LmNzcyArIHJ1bGUua2V5LnN1YnN0cigxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcblxuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BdO1xuXG4gICAgICB2YXIgY2hhbmdlUHJvcCA9IGZhbHNlO1xuICAgICAgdmFyIHN1cHBvcnRlZFByb3AgPSB2ZW5kb3Iuc3VwcG9ydGVkUHJvcGVydHkocHJvcCk7XG4gICAgICBpZiAoc3VwcG9ydGVkUHJvcCAmJiBzdXBwb3J0ZWRQcm9wICE9PSBwcm9wKSBjaGFuZ2VQcm9wID0gdHJ1ZTtcblxuICAgICAgdmFyIGNoYW5nZVZhbHVlID0gZmFsc2U7XG4gICAgICB2YXIgc3VwcG9ydGVkVmFsdWUgPSB2ZW5kb3Iuc3VwcG9ydGVkVmFsdWUoc3VwcG9ydGVkUHJvcCwgdmFsdWUpO1xuICAgICAgaWYgKHN1cHBvcnRlZFZhbHVlICYmIHN1cHBvcnRlZFZhbHVlICE9PSB2YWx1ZSkgY2hhbmdlVmFsdWUgPSB0cnVlO1xuXG4gICAgICBpZiAoY2hhbmdlUHJvcCB8fCBjaGFuZ2VWYWx1ZSkge1xuICAgICAgICBpZiAoY2hhbmdlUHJvcCkgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICAgICAgICBzdHlsZVtzdXBwb3J0ZWRQcm9wIHx8IHByb3BdID0gc3VwcG9ydGVkVmFsdWUgfHwgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWx1ZSwgcHJvcCkge1xuICAgIHJldHVybiB2ZW5kb3Iuc3VwcG9ydGVkVmFsdWUocHJvcCwgdmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHsgb25Qcm9jZXNzUnVsZTogb25Qcm9jZXNzUnVsZSwgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlLCBvbkNoYW5nZVZhbHVlOiBvbkNoYW5nZVZhbHVlIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzLXZlbmRvci1wcmVmaXhlci9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNzBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zdXBwb3J0ZWRWYWx1ZSA9IGV4cG9ydHMuc3VwcG9ydGVkUHJvcGVydHkgPSBleHBvcnRzLnByZWZpeCA9IHVuZGVmaW5lZDtcblxudmFyIF9wcmVmaXggPSByZXF1aXJlKCcuL3ByZWZpeCcpO1xuXG52YXIgX3ByZWZpeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXgpO1xuXG52YXIgX3N1cHBvcnRlZFByb3BlcnR5ID0gcmVxdWlyZSgnLi9zdXBwb3J0ZWQtcHJvcGVydHknKTtcblxudmFyIF9zdXBwb3J0ZWRQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdXBwb3J0ZWRQcm9wZXJ0eSk7XG5cbnZhciBfc3VwcG9ydGVkVmFsdWUgPSByZXF1aXJlKCcuL3N1cHBvcnRlZC12YWx1ZScpO1xuXG52YXIgX3N1cHBvcnRlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N1cHBvcnRlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIHByZWZpeDogX3ByZWZpeDJbJ2RlZmF1bHQnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IF9zdXBwb3J0ZWRQcm9wZXJ0eTJbJ2RlZmF1bHQnXSxcbiAgc3VwcG9ydGVkVmFsdWU6IF9zdXBwb3J0ZWRWYWx1ZTJbJ2RlZmF1bHQnXVxufTsgLyoqXG4gICAgKiBDU1MgVmVuZG9yIHByZWZpeCBkZXRlY3Rpb24gYW5kIHByb3BlcnR5IGZlYXR1cmUgdGVzdGluZy5cbiAgICAqXG4gICAgKiBAY29weXJpZ2h0IE9sZWcgU2xvYm9kc2tvaSAyMDE1XG4gICAgKiBAd2Vic2l0ZSBodHRwczovL2dpdGh1Yi5jb20vanNzdHlsZXMvY3NzLXZlbmRvclxuICAgICogQGxpY2Vuc2UgTUlUXG4gICAgKi9cblxuZXhwb3J0cy5wcmVmaXggPSBfcHJlZml4MlsnZGVmYXVsdCddO1xuZXhwb3J0cy5zdXBwb3J0ZWRQcm9wZXJ0eSA9IF9zdXBwb3J0ZWRQcm9wZXJ0eTJbJ2RlZmF1bHQnXTtcbmV4cG9ydHMuc3VwcG9ydGVkVmFsdWUgPSBfc3VwcG9ydGVkVmFsdWUyWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLXZlbmRvci9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNzFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3VwcG9ydGVkUHJvcGVydHk7XG5cbnZhciBfaXNJbkJyb3dzZXIgPSByZXF1aXJlKCdpcy1pbi1icm93c2VyJyk7XG5cbnZhciBfaXNJbkJyb3dzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJbkJyb3dzZXIpO1xuXG52YXIgX3ByZWZpeCA9IHJlcXVpcmUoJy4vcHJlZml4Jyk7XG5cbnZhciBfcHJlZml4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeCk7XG5cbnZhciBfY2FtZWxpemUgPSByZXF1aXJlKCcuL2NhbWVsaXplJyk7XG5cbnZhciBfY2FtZWxpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZWxpemUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBlbCA9IHZvaWQgMDtcbnZhciBjYWNoZSA9IHt9O1xuXG5pZiAoX2lzSW5Ccm93c2VyMlsnZGVmYXVsdCddKSB7XG4gIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIC8qKlxuICAgKiBXZSB0ZXN0IGV2ZXJ5IHByb3BlcnR5IG9uIHZlbmRvciBwcmVmaXggcmVxdWlyZW1lbnQuXG4gICAqIE9uY2UgdGVzdGVkLCByZXN1bHQgaXMgY2FjaGVkLiBJdCBnaXZlcyB1cyB1cCB0byA3MCUgcGVyZiBib29zdC5cbiAgICogaHR0cDovL2pzcGVyZi5jb20vZWxlbWVudC1zdHlsZS1vYmplY3QtYWNjZXNzLXZzLXBsYWluLW9iamVjdFxuICAgKlxuICAgKiBQcmVmaWxsIGNhY2hlIHdpdGgga25vd24gY3NzIHByb3BlcnRpZXMgdG8gcmVkdWNlIGFtb3VudCBvZlxuICAgKiBwcm9wZXJ0aWVzIHdlIG5lZWQgdG8gZmVhdHVyZSB0ZXN0IGF0IHJ1bnRpbWUuXG4gICAqIGh0dHA6Ly9kYXZpZHdhbHNoLm5hbWUvdmVuZG9yLXByZWZpeFxuICAgKi9cbiAgdmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnJyk7XG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIGlmICghaXNOYU4oa2V5KSkgY2FjaGVbY29tcHV0ZWRba2V5XV0gPSBjb21wdXRlZFtrZXldO1xuICB9XG59XG5cbi8qKlxuICogVGVzdCBpZiBhIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgcmV0dXJucyBzdXBwb3J0ZWQgcHJvcGVydHkgd2l0aCB2ZW5kb3JcbiAqIHByZWZpeCBpZiByZXF1aXJlZC4gUmV0dXJucyBgZmFsc2VgIGlmIG5vdCBzdXBwb3J0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgZGFzaCBzZXBhcmF0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAvLyBGb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nLlxuICBpZiAoIWVsKSByZXR1cm4gcHJvcDtcblxuICAvLyBXZSBoYXZlIG5vdCB0ZXN0ZWQgdGhpcyBwcm9wIHlldCwgbGV0cyBkbyB0aGUgdGVzdC5cbiAgaWYgKGNhY2hlW3Byb3BdICE9IG51bGwpIHJldHVybiBjYWNoZVtwcm9wXTtcblxuICAvLyBDYW1lbGl6YXRpb24gaXMgcmVxdWlyZWQgYmVjYXVzZSB3ZSBjYW4ndCB0ZXN0IHVzaW5nXG4gIC8vIGNzcyBzeW50YXggZm9yIGUuZy4gaW4gRkYuXG4gIC8vIFRlc3QgaWYgcHJvcGVydHkgaXMgc3VwcG9ydGVkIGFzIGl0IGlzLlxuICBpZiAoKDAsIF9jYW1lbGl6ZTJbJ2RlZmF1bHQnXSkocHJvcCkgaW4gZWwuc3R5bGUpIHtcbiAgICBjYWNoZVtwcm9wXSA9IHByb3A7XG4gIH1cbiAgLy8gVGVzdCBpZiBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQgd2l0aCB2ZW5kb3IgcHJlZml4LlxuICBlbHNlIGlmIChfcHJlZml4MlsnZGVmYXVsdCddLmpzICsgKDAsIF9jYW1lbGl6ZTJbJ2RlZmF1bHQnXSkoJy0nICsgcHJvcCkgaW4gZWwuc3R5bGUpIHtcbiAgICAgIGNhY2hlW3Byb3BdID0gX3ByZWZpeDJbJ2RlZmF1bHQnXS5jc3MgKyBwcm9wO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZVtwcm9wXSA9IGZhbHNlO1xuICAgIH1cblxuICByZXR1cm4gY2FjaGVbcHJvcF07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLXZlbmRvci9saWIvc3VwcG9ydGVkLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNhbWVsaXplO1xudmFyIHJlZ0V4cCA9IC9bLVxcc10rKC4pPy9nO1xuXG4vKipcbiAqIENvbnZlcnQgZGFzaCBzZXBhcmF0ZWQgc3RyaW5ncyB0byBjYW1lbCBjYXNlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UocmVnRXhwLCB0b1VwcGVyKTtcbn1cblxuZnVuY3Rpb24gdG9VcHBlcihtYXRjaCwgYykge1xuICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy12ZW5kb3IvbGliL2NhbWVsaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN1cHBvcnRlZFZhbHVlO1xuXG52YXIgX2lzSW5Ccm93c2VyID0gcmVxdWlyZSgnaXMtaW4tYnJvd3NlcicpO1xuXG52YXIgX2lzSW5Ccm93c2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSW5Ccm93c2VyKTtcblxudmFyIF9wcmVmaXggPSByZXF1aXJlKCcuL3ByZWZpeCcpO1xuXG52YXIgX3ByZWZpeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBjYWNoZSA9IHt9O1xudmFyIGVsID0gdm9pZCAwO1xuXG5pZiAoX2lzSW5Ccm93c2VyMlsnZGVmYXVsdCddKSBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuLyoqXG4gKiBSZXR1cm5zIHByZWZpeGVkIHZhbHVlIGlmIG5lZWRlZC4gUmV0dXJucyBgZmFsc2VgIGlmIHZhbHVlIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gc3VwcG9ydGVkVmFsdWUocHJvcGVydHksIHZhbHVlKSB7XG4gIC8vIEZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gIGlmICghZWwpIHJldHVybiB2YWx1ZTtcblxuICAvLyBJdCBpcyBhIHN0cmluZyBvciBhIG51bWJlciBhcyBhIHN0cmluZyBsaWtlICcxJy5cbiAgLy8gV2Ugd2FudCBvbmx5IHByZWZpeGFibGUgdmFsdWVzIGhlcmUuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8ICFpc05hTihwYXJzZUludCh2YWx1ZSwgMTApKSkgcmV0dXJuIHZhbHVlO1xuXG4gIHZhciBjYWNoZUtleSA9IHByb3BlcnR5ICsgdmFsdWU7XG5cbiAgaWYgKGNhY2hlW2NhY2hlS2V5XSAhPSBudWxsKSByZXR1cm4gY2FjaGVbY2FjaGVLZXldO1xuXG4gIC8vIElFIGNhbiBldmVuIHRocm93IGFuIGVycm9yIGluIHNvbWUgY2FzZXMsIGZvciBlLmcuIHN0eWxlLmNvbnRlbnQgPSAnYmFyJ1xuICB0cnkge1xuICAgIC8vIFRlc3QgdmFsdWUgYXMgaXQgaXMuXG4gICAgZWwuc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNhY2hlW2NhY2hlS2V5XSA9IGZhbHNlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFZhbHVlIGlzIHN1cHBvcnRlZCBhcyBpdCBpcy5cbiAgaWYgKGVsLnN0eWxlW3Byb3BlcnR5XSAhPT0gJycpIHtcbiAgICBjYWNoZVtjYWNoZUtleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUZXN0IHZhbHVlIHdpdGggdmVuZG9yIHByZWZpeC5cbiAgICB2YWx1ZSA9IF9wcmVmaXgyWydkZWZhdWx0J10uY3NzICsgdmFsdWU7XG5cbiAgICAvLyBIYXJkY29kZSB0ZXN0IHRvIGNvbnZlcnQgXCJmbGV4XCIgdG8gXCItbXMtZmxleGJveFwiIGZvciBJRTEwLlxuICAgIGlmICh2YWx1ZSA9PT0gJy1tcy1mbGV4JykgdmFsdWUgPSAnLW1zLWZsZXhib3gnO1xuXG4gICAgZWwuc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG5cbiAgICAvLyBWYWx1ZSBpcyBzdXBwb3J0ZWQgd2l0aCB2ZW5kb3IgcHJlZml4LlxuICAgIGlmIChlbC5zdHlsZVtwcm9wZXJ0eV0gIT09ICcnKSBjYWNoZVtjYWNoZUtleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGlmICghY2FjaGVbY2FjaGVLZXldKSBjYWNoZVtjYWNoZUtleV0gPSBmYWxzZTtcblxuICAvLyBSZXNldCBzdHlsZSB2YWx1ZS5cbiAgZWwuc3R5bGVbcHJvcGVydHldID0gJyc7XG5cbiAgcmV0dXJuIGNhY2hlW2NhY2hlS2V5XTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtdmVuZG9yL2xpYi9zdXBwb3J0ZWQtdmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDExNzRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0ganNzUHJvcHNTb3J0O1xuLyoqXG4gKiBTb3J0IHByb3BzIGJ5IGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24ganNzUHJvcHNTb3J0KCkge1xuICBmdW5jdGlvbiBzb3J0KHByb3AwLCBwcm9wMSkge1xuICAgIHJldHVybiBwcm9wMC5sZW5ndGggLSBwcm9wMS5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcblxuICAgIHZhciBuZXdTdHlsZSA9IHt9O1xuICAgIHZhciBwcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlKS5zb3J0KHNvcnQpO1xuICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcbiAgICAgIG5ld1N0eWxlW3Byb3BzW3Byb3BdXSA9IHN0eWxlW3Byb3BzW3Byb3BdXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHsgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNzLXByb3BzLXNvcnQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9kZWVwbWVyZ2UgPSByZXF1aXJlKCdkZWVwbWVyZ2UnKTtcblxudmFyIF9kZWVwbWVyZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVlcG1lcmdlKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfY3JlYXRlVHlwb2dyYXBoeSA9IHJlcXVpcmUoJy4vY3JlYXRlVHlwb2dyYXBoeScpO1xuXG52YXIgX2NyZWF0ZVR5cG9ncmFwaHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVHlwb2dyYXBoeSk7XG5cbnZhciBfY3JlYXRlQnJlYWtwb2ludHMgPSByZXF1aXJlKCcuL2NyZWF0ZUJyZWFrcG9pbnRzJyk7XG5cbnZhciBfY3JlYXRlQnJlYWtwb2ludHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQnJlYWtwb2ludHMpO1xuXG52YXIgX2NyZWF0ZVBhbGV0dGUgPSByZXF1aXJlKCcuL2NyZWF0ZVBhbGV0dGUnKTtcblxudmFyIF9jcmVhdGVQYWxldHRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVBhbGV0dGUpO1xuXG52YXIgX2NyZWF0ZU1peGlucyA9IHJlcXVpcmUoJy4vY3JlYXRlTWl4aW5zJyk7XG5cbnZhciBfY3JlYXRlTWl4aW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZU1peGlucyk7XG5cbnZhciBfc2hhZG93cyA9IHJlcXVpcmUoJy4vc2hhZG93cycpO1xuXG52YXIgX3NoYWRvd3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93cyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX3pJbmRleCA9IHJlcXVpcmUoJy4vekluZGV4Jyk7XG5cbnZhciBfekluZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3pJbmRleCk7XG5cbnZhciBfc3BhY2luZyA9IHJlcXVpcmUoJy4vc3BhY2luZycpO1xuXG52YXIgX3NwYWNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3BhY2luZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZU11aVRoZW1lKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBfb3B0aW9ucyRwYWxldHRlID0gb3B0aW9ucy5wYWxldHRlLFxuICAgICAgcGFsZXR0ZUlucHV0ID0gX29wdGlvbnMkcGFsZXR0ZSA9PT0gdW5kZWZpbmVkID8ge30gOiBfb3B0aW9ucyRwYWxldHRlLFxuICAgICAgX29wdGlvbnMkYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHNJbnB1dCA9IF9vcHRpb25zJGJyZWFrcG9pbnRzID09PSB1bmRlZmluZWQgPyB7fSA6IF9vcHRpb25zJGJyZWFrcG9pbnRzLFxuICAgICAgX29wdGlvbnMkbWl4aW5zID0gb3B0aW9ucy5taXhpbnMsXG4gICAgICBtaXhpbnNJbnB1dCA9IF9vcHRpb25zJG1peGlucyA9PT0gdW5kZWZpbmVkID8ge30gOiBfb3B0aW9ucyRtaXhpbnMsXG4gICAgICBfb3B0aW9ucyR0eXBvZ3JhcGh5ID0gb3B0aW9ucy50eXBvZ3JhcGh5LFxuICAgICAgdHlwb2dyYXBoeUlucHV0ID0gX29wdGlvbnMkdHlwb2dyYXBoeSA9PT0gdW5kZWZpbmVkID8ge30gOiBfb3B0aW9ucyR0eXBvZ3JhcGh5LFxuICAgICAgc2hhZG93c0lucHV0ID0gb3B0aW9ucy5zaGFkb3dzLFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShvcHRpb25zLCBbJ3BhbGV0dGUnLCAnYnJlYWtwb2ludHMnLCAnbWl4aW5zJywgJ3R5cG9ncmFwaHknLCAnc2hhZG93cyddKTtcblxuXG4gIHZhciBwYWxldHRlID0gKDAsIF9jcmVhdGVQYWxldHRlMi5kZWZhdWx0KShwYWxldHRlSW5wdXQpO1xuICB2YXIgYnJlYWtwb2ludHMgPSAoMCwgX2NyZWF0ZUJyZWFrcG9pbnRzMi5kZWZhdWx0KShicmVha3BvaW50c0lucHV0KTtcblxuICB2YXIgbXVpVGhlbWUgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIHBhbGV0dGU6IHBhbGV0dGUsXG4gICAgdHlwb2dyYXBoeTogKDAsIF9jcmVhdGVUeXBvZ3JhcGh5Mi5kZWZhdWx0KShwYWxldHRlLCB0eXBvZ3JhcGh5SW5wdXQpLFxuICAgIG1peGluczogKDAsIF9jcmVhdGVNaXhpbnMyLmRlZmF1bHQpKGJyZWFrcG9pbnRzLCBfc3BhY2luZzIuZGVmYXVsdCwgbWl4aW5zSW5wdXQpLFxuICAgIGJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcbiAgICBzaGFkb3dzOiBzaGFkb3dzSW5wdXQgfHwgX3NoYWRvd3MyLmRlZmF1bHRcbiAgfSwgKDAsIF9kZWVwbWVyZ2UyLmRlZmF1bHQpKHtcbiAgICB0cmFuc2l0aW9uczogX3RyYW5zaXRpb25zMi5kZWZhdWx0LFxuICAgIHNwYWNpbmc6IF9zcGFjaW5nMi5kZWZhdWx0LFxuICAgIHpJbmRleDogX3pJbmRleDIuZGVmYXVsdFxuICB9LCBvdGhlcikpO1xuXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkobXVpVGhlbWUuc2hhZG93cy5sZW5ndGggPT09IDI1LCAnTWF0ZXJpYWwtVUk6IHRoZSBzaGFkb3dzIGFycmF5IHByb3ZpZGVkIHRvIGNyZWF0ZU11aVRoZW1lIHNob3VsZCBzdXBwb3J0IDI1IGVsZXZhdGlvbnMuJykgOiB2b2lkIDA7XG5cbiAgcmV0dXJuIG11aVRoZW1lO1xufSAvLyA8IDFrYiBwYXlsb2FkIG92ZXJoZWFkIHdoZW4gbG9kYXNoL21lcmdlIGlzID4gM2tiLlxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlTXVpVGhlbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL2NyZWF0ZU11aVRoZW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUeXBvZ3JhcGh5O1xuXG52YXIgX2RlZXBtZXJnZSA9IHJlcXVpcmUoJ2RlZXBtZXJnZScpO1xuXG52YXIgX2RlZXBtZXJnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwbWVyZ2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyA8IDFrYiBwYXlsb2FkIG92ZXJoZWFkIHdoZW4gbG9kYXNoL21lcmdlIGlzID4gM2tiLlxuXG5mdW5jdGlvbiByb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDFlNSkgLyAxZTU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeSkge1xuICB2YXIgX3JlZiA9IHR5cGVvZiB0eXBvZ3JhcGh5ID09PSAnZnVuY3Rpb24nID8gdHlwb2dyYXBoeShwYWxldHRlKSA6IHR5cG9ncmFwaHksXG4gICAgICBfcmVmJGZvbnRGYW1pbHkgPSBfcmVmLmZvbnRGYW1pbHksXG4gICAgICBmb250RmFtaWx5ID0gX3JlZiRmb250RmFtaWx5ID09PSB1bmRlZmluZWQgPyAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyA6IF9yZWYkZm9udEZhbWlseSxcbiAgICAgIF9yZWYkZm9udFNpemUgPSBfcmVmLmZvbnRTaXplLFxuICAgICAgZm9udFNpemUgPSBfcmVmJGZvbnRTaXplID09PSB1bmRlZmluZWQgPyAxNCA6IF9yZWYkZm9udFNpemUsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRMaWdodCA9IF9yZWYuZm9udFdlaWdodExpZ2h0LFxuICAgICAgZm9udFdlaWdodExpZ2h0ID0gX3JlZiRmb250V2VpZ2h0TGlnaHQgPT09IHVuZGVmaW5lZCA/IDMwMCA6IF9yZWYkZm9udFdlaWdodExpZ2h0LFxuICAgICAgX3JlZiRmb250V2VpZ2h0UmVndWxhID0gX3JlZi5mb250V2VpZ2h0UmVndWxhcixcbiAgICAgIGZvbnRXZWlnaHRSZWd1bGFyID0gX3JlZiRmb250V2VpZ2h0UmVndWxhID09PSB1bmRlZmluZWQgPyA0MDAgOiBfcmVmJGZvbnRXZWlnaHRSZWd1bGEsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRNZWRpdW0gPSBfcmVmLmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBmb250V2VpZ2h0TWVkaXVtID0gX3JlZiRmb250V2VpZ2h0TWVkaXVtID09PSB1bmRlZmluZWQgPyA1MDAgOiBfcmVmJGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBfcmVmJGh0bWxGb250U2l6ZSA9IF9yZWYuaHRtbEZvbnRTaXplLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZiRodG1sRm9udFNpemUgPT09IHVuZGVmaW5lZCA/IDE2IDogX3JlZiRodG1sRm9udFNpemUsXG4gICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9yZWYsIFsnZm9udEZhbWlseScsICdmb250U2l6ZScsICdmb250V2VpZ2h0TGlnaHQnLCAnZm9udFdlaWdodFJlZ3VsYXInLCAnZm9udFdlaWdodE1lZGl1bScsICdodG1sRm9udFNpemUnXSk7XG5cbiAgZnVuY3Rpb24gcHhUb1JlbSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAvIGh0bWxGb250U2l6ZSArICdyZW0nO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfZGVlcG1lcmdlMi5kZWZhdWx0KSh7XG4gICAgcHhUb1JlbTogcHhUb1JlbSxcbiAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiBmb250U2l6ZSxcbiAgICBmb250V2VpZ2h0TGlnaHQ6IGZvbnRXZWlnaHRMaWdodCxcbiAgICBmb250V2VpZ2h0UmVndWxhcjogZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgZm9udFdlaWdodE1lZGl1bTogZm9udFdlaWdodE1lZGl1bSxcbiAgICBkaXNwbGF5NDoge1xuICAgICAgZm9udFNpemU6IHB4VG9SZW0oMTEyKSxcbiAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHRMaWdodCxcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS4wNGVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6IHJvdW5kKDEyOCAvIDExMikgKyAnZW0nLFxuICAgICAgbWFyZ2luTGVmdDogJy0uMDZlbScsXG4gICAgICBjb2xvcjogcGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sXG4gICAgZGlzcGxheTM6IHtcbiAgICAgIGZvbnRTaXplOiBweFRvUmVtKDU2KSxcbiAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHRSZWd1bGFyLFxuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjAyZW0nLFxuICAgICAgbGluZUhlaWdodDogcm91bmQoNzMgLyA1NikgKyAnZW0nLFxuICAgICAgbWFyZ2luTGVmdDogJy0uMDRlbScsXG4gICAgICBjb2xvcjogcGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sXG4gICAgZGlzcGxheTI6IHtcbiAgICAgIGZvbnRTaXplOiBweFRvUmVtKDQ1KSxcbiAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHRSZWd1bGFyLFxuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIGxpbmVIZWlnaHQ6IHJvdW5kKDQ4IC8gNDUpICsgJ2VtJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICctLjA0ZW0nLFxuICAgICAgY29sb3I6IHBhbGV0dGUudGV4dC5zZWNvbmRhcnlcbiAgICB9LFxuICAgIGRpc3BsYXkxOiB7XG4gICAgICBmb250U2l6ZTogcHhUb1JlbSgzNCksXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0UmVndWxhcixcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBsaW5lSGVpZ2h0OiByb3VuZCg0MSAvIDM0KSArICdlbScsXG4gICAgICBtYXJnaW5MZWZ0OiAnLS4wNGVtJyxcbiAgICAgIGNvbG9yOiBwYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gICAgfSxcbiAgICBoZWFkbGluZToge1xuICAgICAgZm9udFNpemU6IHB4VG9SZW0oMjQpLFxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgbGluZUhlaWdodDogcm91bmQoMzIuNSAvIDI0KSArICdlbScsXG4gICAgICBjb2xvcjogcGFsZXR0ZS50ZXh0LnByaW1hcnlcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogcHhUb1JlbSgyMSksXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0TWVkaXVtLFxuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIGxpbmVIZWlnaHQ6IHJvdW5kKDI0LjUgLyAyMSkgKyAnZW0nLFxuICAgICAgY29sb3I6IHBhbGV0dGUudGV4dC5wcmltYXJ5XG4gICAgfSxcbiAgICBzdWJoZWFkaW5nOiB7XG4gICAgICBmb250U2l6ZTogcHhUb1JlbSgxNiksXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0UmVndWxhcixcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBsaW5lSGVpZ2h0OiByb3VuZCgyNCAvIDE2KSArICdlbScsXG4gICAgICBjb2xvcjogcGFsZXR0ZS50ZXh0LnByaW1hcnlcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250U2l6ZTogcHhUb1JlbSgxNCksXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0TWVkaXVtLFxuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIGxpbmVIZWlnaHQ6IHJvdW5kKDI0IC8gMTQpICsgJ2VtJyxcbiAgICAgIGNvbG9yOiBwYWxldHRlLnRleHQucHJpbWFyeVxuICAgIH0sXG4gICAgYm9keTE6IHtcbiAgICAgIGZvbnRTaXplOiBweFRvUmVtKDE0KSxcbiAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHRSZWd1bGFyLFxuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIGxpbmVIZWlnaHQ6IHJvdW5kKDIwLjUgLyAxNCkgKyAnZW0nLFxuICAgICAgY29sb3I6IHBhbGV0dGUudGV4dC5wcmltYXJ5XG4gICAgfSxcbiAgICBjYXB0aW9uOiB7XG4gICAgICBmb250U2l6ZTogcHhUb1JlbSgxMiksXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0UmVndWxhcixcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBsaW5lSGVpZ2h0OiByb3VuZCgxNi41IC8gMTIpICsgJ2VtJyxcbiAgICAgIGNvbG9yOiBwYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGZvbnRTaXplOiBweFRvUmVtKGZvbnRTaXplKSxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHlcbiAgICB9XG4gIH0sIG90aGVyLCB7XG4gICAgY2xvbmU6IGZhbHNlIC8vIE5vIG5lZWQgdG8gY2xvbmUgZGVlcFxuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlVHlwb2dyYXBoeS5qc1xuLy8gbW9kdWxlIGlkID0gMTE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmtleXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUJyZWFrcG9pbnRzO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBTb3J0ZWQgQVNDIGJ5IHNpemUuIFRoYXQncyBpbXBvcnRhbnQuXG4vLyBJdCBjYW4ndCBiZSBjb25maWd1cmVkIGFzIGl0J3MgdXNlZCBzdGF0aWNhbGx5IGZvciBwcm9wVHlwZXMuXG52YXIga2V5cyA9IGV4cG9ydHMua2V5cyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXTtcblxuLy8gS2VlcCBpbiBtaW5kIHRoYXQgQG1lZGlhIGlzIGluY2x1c2l2ZSBieSB0aGUgQ1NTIHNwZWNpZmljYXRpb24uXG5mdW5jdGlvbiBjcmVhdGVCcmVha3BvaW50cyhicmVha3BvaW50cykge1xuICB2YXIgX2JyZWFrcG9pbnRzJHZhbHVlcyA9IGJyZWFrcG9pbnRzLnZhbHVlcyxcbiAgICAgIHZhbHVlcyA9IF9icmVha3BvaW50cyR2YWx1ZXMgPT09IHVuZGVmaW5lZCA/IHtcbiAgICB4czogMCxcbiAgICBzbTogNjAwLFxuICAgIG1kOiA5NjAsXG4gICAgbGc6IDEyODAsXG4gICAgeGw6IDE5MjBcbiAgfSA6IF9icmVha3BvaW50cyR2YWx1ZXMsXG4gICAgICBfYnJlYWtwb2ludHMkdW5pdCA9IGJyZWFrcG9pbnRzLnVuaXQsXG4gICAgICB1bml0ID0gX2JyZWFrcG9pbnRzJHVuaXQgPT09IHVuZGVmaW5lZCA/ICdweCcgOiBfYnJlYWtwb2ludHMkdW5pdCxcbiAgICAgIF9icmVha3BvaW50cyRzdGVwID0gYnJlYWtwb2ludHMuc3RlcCxcbiAgICAgIHN0ZXAgPSBfYnJlYWtwb2ludHMkc3RlcCA9PT0gdW5kZWZpbmVkID8gNSA6IF9icmVha3BvaW50cyRzdGVwLFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShicmVha3BvaW50cywgWyd2YWx1ZXMnLCAndW5pdCcsICdzdGVwJ10pO1xuXG5cbiAgZnVuY3Rpb24gdXAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHZhbHVlc1trZXldID09PSAnbnVtYmVyJyA/IHZhbHVlc1trZXldIDoga2V5O1xuICAgIHJldHVybiAnQG1lZGlhIChtaW4td2lkdGg6JyArIHZhbHVlICsgdW5pdCArICcpJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd24oa2V5KSB7XG4gICAgdmFyIGVuZEluZGV4ID0ga2V5cy5pbmRleE9mKGtleSkgKyAxO1xuICAgIHZhciB1cHBlcmJvdW5kID0gdmFsdWVzW2tleXNbZW5kSW5kZXhdXTtcblxuICAgIGlmIChlbmRJbmRleCA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgIC8vIHhsIGRvd24gYXBwbGllcyB0byBhbGwgc2l6ZXNcbiAgICAgIHJldHVybiB1cCgneHMnKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSB0eXBlb2YgdXBwZXJib3VuZCA9PT0gJ251bWJlcicgJiYgZW5kSW5kZXggPiAwID8gdXBwZXJib3VuZCA6IGtleTtcbiAgICByZXR1cm4gJ0BtZWRpYSAobWF4LXdpZHRoOicgKyAodmFsdWUgLSBzdGVwIC8gMTAwKSArIHVuaXQgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBiZXR3ZWVuKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2YoZW5kKSArIDE7XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IGtleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdXAoc3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiAnQG1lZGlhIChtaW4td2lkdGg6JyArIHZhbHVlc1tzdGFydF0gKyB1bml0ICsgJykgYW5kICcgKyAoJyhtYXgtd2lkdGg6JyArICh2YWx1ZXNba2V5c1tlbmRJbmRleF1dIC0gc3RlcCAvIDEwMCkgKyB1bml0ICsgJyknKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ubHkoa2V5KSB7XG4gICAgcmV0dXJuIGJldHdlZW4oa2V5LCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2lkdGgoa2V5KSB7XG4gICAgcmV0dXJuIHZhbHVlc1trZXldO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgIGtleXM6IGtleXMsXG4gICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgdXA6IHVwLFxuICAgIGRvd246IGRvd24sXG4gICAgYmV0d2VlbjogYmV0d2VlbixcbiAgICBvbmx5OiBvbmx5LFxuICAgIHdpZHRoOiB3aWR0aFxuICB9LCBvdGhlcik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGFyayA9IGV4cG9ydHMubGlnaHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO1xuXG52YXIgX2tleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUGFsZXR0ZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfZGVlcG1lcmdlID0gcmVxdWlyZSgnZGVlcG1lcmdlJyk7XG5cbnZhciBfZGVlcG1lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZXBtZXJnZSk7XG5cbnZhciBfaW5kaWdvID0gcmVxdWlyZSgnLi4vY29sb3JzL2luZGlnbycpO1xuXG52YXIgX2luZGlnbzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRpZ28pO1xuXG52YXIgX3BpbmsgPSByZXF1aXJlKCcuLi9jb2xvcnMvcGluaycpO1xuXG52YXIgX3BpbmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGluayk7XG5cbnZhciBfZ3JleSA9IHJlcXVpcmUoJy4uL2NvbG9ycy9ncmV5Jyk7XG5cbnZhciBfZ3JleTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmV5KTtcblxudmFyIF9yZWQgPSByZXF1aXJlKCcuLi9jb2xvcnMvcmVkJyk7XG5cbnZhciBfcmVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZCk7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZSgnLi4vY29sb3JzL2NvbW1vbicpO1xuXG52YXIgX2NvbW1vbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21tb24pO1xuXG52YXIgX2NvbG9yTWFuaXB1bGF0b3IgPSByZXF1aXJlKCcuL2NvbG9yTWFuaXB1bGF0b3InKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gPCAxa2IgcGF5bG9hZCBvdmVyaGVhZCB3aGVuIGxvZGFzaC9tZXJnZSBpcyA+IDNrYi5cbnZhciBsaWdodCA9IGV4cG9ydHMubGlnaHQgPSB7XG4gIHRleHQ6IHtcbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICBoaW50OiAncmdiYSgwLCAwLCAwLCAwLjM4KScsXG4gICAgaWNvbjogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIGRpdmlkZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgICBsaWdodERpdmlkZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMDc1KSdcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBib3R0b21MaW5lOiAncmdiYSgwLCAwLCAwLCAwLjQyKScsXG4gICAgaGVscGVyVGV4dDogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIGxhYmVsVGV4dDogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIGlucHV0VGV4dDogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjQyKSdcbiAgfSxcbiAgYWN0aW9uOiB7XG4gICAgYWN0aXZlOiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjYpJ1xuICB9LFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgZGVmYXVsdDogX2dyZXkyLmRlZmF1bHRbNTBdLFxuICAgIHBhcGVyOiBfY29tbW9uMi5kZWZhdWx0LndoaXRlLFxuICAgIGFwcEJhcjogX2dyZXkyLmRlZmF1bHRbMTAwXSxcbiAgICBjb250ZW50RnJhbWU6IF9ncmV5Mi5kZWZhdWx0WzIwMF0sXG4gICAgY2hpcDogX2dyZXkyLmRlZmF1bHRbMzAwXVxuICB9LFxuICBsaW5lOiB7XG4gICAgc3RlcHBlcjogX2dyZXkyLmRlZmF1bHRbNDAwXVxuICB9XG59O1xuXG52YXIgZGFyayA9IGV4cG9ydHMuZGFyayA9IHtcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBpY29uOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBkaXZpZGVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgbGlnaHREaXZpZGVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3NSknXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgYm90dG9tTGluZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScsXG4gICAgaGVscGVyVGV4dDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScsXG4gICAgbGFiZWxUZXh0OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJyxcbiAgICBpbnB1dFRleHQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSdcbiAgfSxcbiAgYWN0aW9uOiB7XG4gICAgYWN0aXZlOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyknXG4gIH0sXG4gIGJhY2tncm91bmQ6IHtcbiAgICBkZWZhdWx0OiAnIzMwMzAzMCcsXG4gICAgcGFwZXI6IF9ncmV5Mi5kZWZhdWx0WzgwMF0sXG4gICAgYXBwQmFyOiBfZ3JleTIuZGVmYXVsdFs5MDBdLFxuICAgIGNvbnRlbnRGcmFtZTogX2dyZXkyLmRlZmF1bHRbOTAwXSxcbiAgICBjaGlwOiBfZ3JleTIuZGVmYXVsdFs4MDBdXG4gIH0sXG4gIGxpbmU6IHtcbiAgICAvLyBUT0RPOiBXaGF0IHNob3VsZCB0aGUgZGFyayB0aGVtZSBoYXZlIGZvciBzdGVwcGVyIGxpbmU/IE5vdCBzdGF0ZWQgaW4gc3R5bGUgZ3VpZGVcbiAgICBzdGVwcGVyOiBfZ3JleTIuZGVmYXVsdFs0MDBdXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldENvbnRyYXN0VGV4dChodWUpIHtcbiAgaWYgKCgwLCBfY29sb3JNYW5pcHVsYXRvci5nZXRDb250cmFzdFJhdGlvKShodWUsIF9jb21tb24yLmRlZmF1bHQuYmxhY2spIDwgNykge1xuICAgIHJldHVybiBkYXJrLnRleHQucHJpbWFyeTtcbiAgfVxuICByZXR1cm4gbGlnaHQudGV4dC5wcmltYXJ5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWxldHRlKHBhbGV0dGUpIHtcbiAgdmFyIF9wYWxldHRlJHByaW1hcnkgPSBwYWxldHRlLnByaW1hcnksXG4gICAgICBwcmltYXJ5ID0gX3BhbGV0dGUkcHJpbWFyeSA9PT0gdW5kZWZpbmVkID8gX2luZGlnbzIuZGVmYXVsdCA6IF9wYWxldHRlJHByaW1hcnksXG4gICAgICBfcGFsZXR0ZSRzZWNvbmRhcnkgPSBwYWxldHRlLnNlY29uZGFyeSxcbiAgICAgIHNlY29uZGFyeSA9IF9wYWxldHRlJHNlY29uZGFyeSA9PT0gdW5kZWZpbmVkID8gX3BpbmsyLmRlZmF1bHQgOiBfcGFsZXR0ZSRzZWNvbmRhcnksXG4gICAgICBfcGFsZXR0ZSRlcnJvciA9IHBhbGV0dGUuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wYWxldHRlJGVycm9yID09PSB1bmRlZmluZWQgPyBfcmVkMi5kZWZhdWx0IDogX3BhbGV0dGUkZXJyb3IsXG4gICAgICBfcGFsZXR0ZSR0eXBlID0gcGFsZXR0ZS50eXBlLFxuICAgICAgdHlwZSA9IF9wYWxldHRlJHR5cGUgPT09IHVuZGVmaW5lZCA/ICdsaWdodCcgOiBfcGFsZXR0ZSR0eXBlLFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShwYWxldHRlLCBbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ2Vycm9yJywgJ3R5cGUnXSk7XG5cbiAgdmFyIHNoYWRlcyA9IHsgZGFyazogZGFyaywgbGlnaHQ6IGxpZ2h0IH07XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShCb29sZWFuKHNoYWRlc1t0eXBlXSksICdNYXRlcmlhbC1VSTogdGhlIHBhbGV0dGUgdHlwZSBgJyArIHR5cGUgKyAnYCBpcyBub3Qgc3VwcG9ydGVkLicpIDogdm9pZCAwO1xuXG4gIHZhciBwYWxldHRlT3V0cHV0ID0gKDAsIF9kZWVwbWVyZ2UyLmRlZmF1bHQpKHtcbiAgICBjb21tb246IF9jb21tb24yLmRlZmF1bHQsXG4gICAgdHlwZTogdHlwZSxcbiAgICBwcmltYXJ5OiBwcmltYXJ5LFxuICAgIHNlY29uZGFyeTogc2Vjb25kYXJ5LFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBncmV5OiBfZ3JleTIuZGVmYXVsdCxcbiAgICBzaGFkZXM6IHNoYWRlcyxcbiAgICB0ZXh0OiBzaGFkZXNbdHlwZV0udGV4dCxcbiAgICBpbnB1dDogc2hhZGVzW3R5cGVdLmlucHV0LFxuICAgIGFjdGlvbjogc2hhZGVzW3R5cGVdLmFjdGlvbixcbiAgICBiYWNrZ3JvdW5kOiBzaGFkZXNbdHlwZV0uYmFja2dyb3VuZCxcbiAgICBsaW5lOiBzaGFkZXNbdHlwZV0ubGluZSxcbiAgICBnZXRDb250cmFzdFRleHQ6IGdldENvbnRyYXN0VGV4dFxuICB9LCBvdGhlciwge1xuICAgIGNsb25lOiBmYWxzZSAvLyBObyBuZWVkIHRvIGNsb25lIGRlZXBcbiAgfSk7XG5cbiAgLy8gRGV2IHdhcm5pbmdzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIGRpZmZlcmVuY2UgPSBmdW5jdGlvbiBkaWZmZXJlbmNlKGJhc2UsIGNvbXBhcmUpIHtcbiAgICAgIGlmICghY29tcGFyZSkge1xuICAgICAgICBjb21wYXJlID0ge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoMCwgX2tleXMyLmRlZmF1bHQpKGJhc2UpLmZpbHRlcihmdW5jdGlvbiAoaHVlKSB7XG4gICAgICAgIHJldHVybiAhY29tcGFyZVtodWVdO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBwYWxldHRlQ29sb3JFcnJvciA9IGZ1bmN0aW9uIHBhbGV0dGVDb2xvckVycm9yKG5hbWUsIGJhc2UsIGNvbXBhcmUpIHtcbiAgICAgIHZhciBtaXNzaW5nID0gZGlmZmVyZW5jZShiYXNlLCBjb21wYXJlKTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkobWlzc2luZy5sZW5ndGggPT09IDAsIFsnTWF0ZXJpYWwtVUk6ICcgKyBuYW1lICsgJyBjb2xvciBpcyBtaXNzaW5nIHRoZSBmb2xsb3dpbmcgaHVlczogJyArIG1pc3Npbmcuam9pbignLCcpLCAnU2VlIHRoZSBkZWZhdWx0IGNvbG9ycywgaW5kaWdvLCBvciBwaW5rLCBhcyBleHBvcnRlZCBmcm9tIG1hdGVyaWFsLXVpL2NvbG9ycy4nXS5qb2luKCdcXG4nKSkgOiB2b2lkIDA7XG4gICAgfTtcblxuICAgIHBhbGV0dGVDb2xvckVycm9yKCdwcmltYXJ5JywgX2luZGlnbzIuZGVmYXVsdCwgcGFsZXR0ZU91dHB1dC5wcmltYXJ5KTtcbiAgICBwYWxldHRlQ29sb3JFcnJvcignc2Vjb25kYXJ5JywgX3BpbmsyLmRlZmF1bHQsIHBhbGV0dGVPdXRwdXQuc2Vjb25kYXJ5KTtcbiAgICBwYWxldHRlQ29sb3JFcnJvcignZXJyb3InLCBfcmVkMi5kZWZhdWx0LCBwYWxldHRlT3V0cHV0LmVycm9yKTtcbiAgICBwYWxldHRlQ29sb3JFcnJvcignZ3JleScsIF9yZWQyLmRlZmF1bHQsIHBhbGV0dGVPdXRwdXQuZ3JleSk7XG4gIH1cblxuICByZXR1cm4gcGFsZXR0ZU91dHB1dDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlUGFsZXR0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgaW5kaWdvID0ge1xuICA1MDogJyNlOGVhZjYnLFxuICAxMDA6ICcjYzVjYWU5JyxcbiAgMjAwOiAnIzlmYThkYScsXG4gIDMwMDogJyM3OTg2Y2InLFxuICA0MDA6ICcjNWM2YmMwJyxcbiAgNTAwOiAnIzNmNTFiNScsXG4gIDYwMDogJyMzOTQ5YWInLFxuICA3MDA6ICcjMzAzZjlmJyxcbiAgODAwOiAnIzI4MzU5MycsXG4gIDkwMDogJyMxYTIzN2UnLFxuICBBMTAwOiAnIzhjOWVmZicsXG4gIEEyMDA6ICcjNTM2ZGZlJyxcbiAgQTQwMDogJyMzZDVhZmUnLFxuICBBNzAwOiAnIzMwNGZmZScsXG4gIGNvbnRyYXN0RGVmYXVsdENvbG9yOiAnbGlnaHQnXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpbmRpZ287XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvY29sb3JzL2luZGlnby5qc1xuLy8gbW9kdWxlIGlkID0gMTE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgcGluayA9IHtcbiAgNTA6ICcjZmNlNGVjJyxcbiAgMTAwOiAnI2Y4YmJkMCcsXG4gIDIwMDogJyNmNDhmYjEnLFxuICAzMDA6ICcjZjA2MjkyJyxcbiAgNDAwOiAnI2VjNDA3YScsXG4gIDUwMDogJyNlOTFlNjMnLFxuICA2MDA6ICcjZDgxYjYwJyxcbiAgNzAwOiAnI2MyMTg1YicsXG4gIDgwMDogJyNhZDE0NTcnLFxuICA5MDA6ICcjODgwZTRmJyxcbiAgQTEwMDogJyNmZjgwYWInLFxuICBBMjAwOiAnI2ZmNDA4MScsXG4gIEE0MDA6ICcjZjUwMDU3JyxcbiAgQTcwMDogJyNjNTExNjInLFxuICBjb250cmFzdERlZmF1bHRDb2xvcjogJ2xpZ2h0J1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcGluaztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9jb2xvcnMvcGluay5qc1xuLy8gbW9kdWxlIGlkID0gMTE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZ3JleSA9IHtcbiAgNTA6ICcjZmFmYWZhJyxcbiAgMTAwOiAnI2Y1ZjVmNScsXG4gIDIwMDogJyNlZWVlZWUnLFxuICAzMDA6ICcjZTBlMGUwJyxcbiAgNDAwOiAnI2JkYmRiZCcsXG4gIDUwMDogJyM5ZTllOWUnLFxuICA2MDA6ICcjNzU3NTc1JyxcbiAgNzAwOiAnIzYxNjE2MScsXG4gIDgwMDogJyM0MjQyNDInLFxuICA5MDA6ICcjMjEyMTIxJyxcbiAgQTEwMDogJyNkNWQ1ZDUnLFxuICBBMjAwOiAnI2FhYWFhYScsXG4gIEE0MDA6ICcjMzAzMDMwJyxcbiAgQTcwMDogJyM2MTYxNjEnLFxuICBjb250cmFzdERlZmF1bHRDb2xvcjogJ2RhcmsnXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBncmV5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2NvbG9ycy9ncmV5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciByZWQgPSB7XG4gIDUwOiAnI2ZmZWJlZScsXG4gIDEwMDogJyNmZmNkZDInLFxuICAyMDA6ICcjZWY5YTlhJyxcbiAgMzAwOiAnI2U1NzM3MycsXG4gIDQwMDogJyNlZjUzNTAnLFxuICA1MDA6ICcjZjQ0MzM2JyxcbiAgNjAwOiAnI2U1MzkzNScsXG4gIDcwMDogJyNkMzJmMmYnLFxuICA4MDA6ICcjYzYyODI4JyxcbiAgOTAwOiAnI2I3MWMxYycsXG4gIEExMDA6ICcjZmY4YTgwJyxcbiAgQTIwMDogJyNmZjUyNTInLFxuICBBNDAwOiAnI2ZmMTc0NCcsXG4gIEE3MDA6ICcjZDUwMDAwJyxcbiAgY29udHJhc3REZWZhdWx0Q29sb3I6ICdsaWdodCdcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9jb2xvcnMvcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjb21tb24gPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHdoaXRlOiAnI2ZmZicsXG4gIHRyYW5zcGFyZW50OiAncmdiYSgwLCAwLCAwLCAwKScsXG4gIGZ1bGxCbGFjazogJ3JnYmEoMCwgMCwgMCwgMSknLFxuICBkYXJrQmxhY2s6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgbGlnaHRCbGFjazogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICBtaW5CbGFjazogJ3JnYmEoMCwgMCwgMCwgMC4yNiknLFxuICBmYWludEJsYWNrOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gIGZ1bGxXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxuICBkYXJrV2hpdGU6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpJyxcbiAgbGlnaHRXaGl0ZTogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCknXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjb21tb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvY29sb3JzL2NvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gMTE4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbnZlcnRDb2xvclRvU3RyaW5nID0gY29udmVydENvbG9yVG9TdHJpbmc7XG5leHBvcnRzLmNvbnZlcnRIZXhUb1JHQiA9IGNvbnZlcnRIZXhUb1JHQjtcbmV4cG9ydHMuZGVjb21wb3NlQ29sb3IgPSBkZWNvbXBvc2VDb2xvcjtcbmV4cG9ydHMuZ2V0Q29udHJhc3RSYXRpbyA9IGdldENvbnRyYXN0UmF0aW87XG5leHBvcnRzLmdldEx1bWluYW5jZSA9IGdldEx1bWluYW5jZTtcbmV4cG9ydHMuZW1waGFzaXplID0gZW1waGFzaXplO1xuZXhwb3J0cy5mYWRlID0gZmFkZTtcbmV4cG9ydHMuZGFya2VuID0gZGFya2VuO1xuZXhwb3J0cy5saWdodGVuID0gbGlnaHRlbjtcbi8vICB3ZWFrXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjbGFtcGVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBsb3dlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiB0aGUgcmFuZ2UgW21pbiwgbWF4XVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB3aXRoIHR5cGUgYW5kIHZhbHVlcyB0byBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29sb3IgLSBEZWNvbXBvc2VkIGNvbG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IudHlwZSAtIE9uZSBvZiwgJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ1xuICogQHBhcmFtIHthcnJheX0gY29sb3IudmFsdWVzIC0gW24sbixuXSBvciBbbixuLG4sbl1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjb252ZXJ0Q29sb3JUb1N0cmluZyhjb2xvcikge1xuICB2YXIgdHlwZSA9IGNvbG9yLnR5cGUsXG4gICAgICB2YWx1ZXMgPSBjb2xvci52YWx1ZXM7XG5cblxuICBpZiAodHlwZS5pbmRleE9mKCdyZ2InKSA+IC0xKSB7XG4gICAgLy8gT25seSBjb252ZXJ0IHRoZSBmaXJzdCAzIHZhbHVlcyB0byBpbnQgKGkuZS4gbm90IGFscGhhKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICB2YWx1ZXNbaV0gPSBwYXJzZUludCh2YWx1ZXNbaV0sIDEwKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29sb3JTdHJpbmcgPSB2b2lkIDA7XG5cbiAgaWYgKHR5cGUuaW5kZXhPZignaHNsJykgPiAtMSkge1xuICAgIGNvbG9yU3RyaW5nID0gY29sb3IudHlwZSArICcoJyArIHZhbHVlc1swXSArICcsICcgKyB2YWx1ZXNbMV0gKyAnJSwgJyArIHZhbHVlc1syXSArICclJztcbiAgfSBlbHNlIHtcbiAgICBjb2xvclN0cmluZyA9IGNvbG9yLnR5cGUgKyAnKCcgKyB2YWx1ZXNbMF0gKyAnLCAnICsgdmFsdWVzWzFdICsgJywgJyArIHZhbHVlc1syXTtcbiAgfVxuXG4gIGlmICh2YWx1ZXMubGVuZ3RoID09PSA0KSB7XG4gICAgY29sb3JTdHJpbmcgKz0gJywgJyArIGNvbG9yLnZhbHVlc1szXSArICcpJztcbiAgfSBlbHNlIHtcbiAgICBjb2xvclN0cmluZyArPSAnKSc7XG4gIH1cblxuICByZXR1cm4gY29sb3JTdHJpbmc7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyBoZXggZm9ybWF0IHRvIENTUyByZ2IgZm9ybWF0LlxuICpcbiAqICBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBIZXggY29sb3IsIGkuZS4gI25ubiBvciAjbm5ubm5uXG4gKiAgQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjb252ZXJ0SGV4VG9SR0IoY29sb3IpIHtcbiAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gNCkge1xuICAgIHZhciBleHRlbmRlZENvbG9yID0gJyMnO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgY29sb3IubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGV4dGVuZGVkQ29sb3IgKz0gY29sb3IuY2hhckF0KGkpICsgY29sb3IuY2hhckF0KGkpO1xuICAgIH1cbiAgICBjb2xvciA9IGV4dGVuZGVkQ29sb3I7XG4gIH1cblxuICB2YXIgdmFsdWVzID0ge1xuICAgIHI6IHBhcnNlSW50KGNvbG9yLnN1YnN0cigxLCAyKSwgMTYpLFxuICAgIGc6IHBhcnNlSW50KGNvbG9yLnN1YnN0cigzLCAyKSwgMTYpLFxuICAgIGI6IHBhcnNlSW50KGNvbG9yLnN1YnN0cig1LCAyKSwgMTYpXG4gIH07XG5cbiAgcmV0dXJuICdyZ2IoJyArIHZhbHVlcy5yICsgJywgJyArIHZhbHVlcy5nICsgJywgJyArIHZhbHVlcy5iICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgYW5kIHZhbHVlcyBvZiBhIGNvbG9yLlxuICpcbiAqIE5vdGU6IERvZXMgbm90IHN1cHBvcnQgcmdiICUgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHt7dHlwZTogc3RyaW5nLCB2YWx1ZXM6IG51bWJlcltdfX0gQSBNVUkgY29sb3Igb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGRlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIGlmIChjb2xvci5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHJldHVybiBkZWNvbXBvc2VDb2xvcihjb252ZXJ0SGV4VG9SR0IoY29sb3IpKTtcbiAgfVxuXG4gIHZhciBtYXJrZXIgPSBjb2xvci5pbmRleE9mKCcoJyk7XG4gIHZhciB0eXBlID0gY29sb3Iuc3Vic3RyaW5nKDAsIG1hcmtlcik7XG4gIHZhciB2YWx1ZXMgPSBjb2xvci5zdWJzdHJpbmcobWFya2VyICsgMSwgY29sb3IubGVuZ3RoIC0gMSkuc3BsaXQoJywnKTtcbiAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB7IHR5cGU6IHR5cGUsIHZhbHVlczogdmFsdWVzIH07XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY29udHJhc3QgcmF0aW8gYmV0d2VlbiB0d28gY29sb3JzLlxuICpcbiAqIEZvcm11bGE6IGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jY29udHJhc3QtcmF0aW9kZWZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9yZWdyb3VuZCAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYWNrZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gQSBjb250cmFzdCByYXRpbyB2YWx1ZSBpbiB0aGUgcmFuZ2UgMCAtIDIxIHdpdGggMiBkaWdpdCBwcmVjaXNpb24uXG4gKi9cbmZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8oZm9yZWdyb3VuZCwgYmFja2dyb3VuZCkge1xuICB2YXIgbHVtQSA9IGdldEx1bWluYW5jZShmb3JlZ3JvdW5kKTtcbiAgdmFyIGx1bUIgPSBnZXRMdW1pbmFuY2UoYmFja2dyb3VuZCk7XG4gIHZhciBjb250cmFzdFJhdGlvID0gKE1hdGgubWF4KGx1bUEsIGx1bUIpICsgMC4wNSkgLyAoTWF0aC5taW4obHVtQSwgbHVtQikgKyAwLjA1KTtcblxuICByZXR1cm4gTnVtYmVyKGNvbnRyYXN0UmF0aW8udG9GaXhlZCgyKSk7IC8vIFRydW5jYXRlIGF0IHR3byBkaWdpdHNcbn1cblxuLyoqXG4gKiBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiBhbnkgcG9pbnQgaW4gYSBjb2xvciBzcGFjZSxcbiAqIG5vcm1hbGl6ZWQgdG8gMCBmb3IgZGFya2VzdCBibGFjayBhbmQgMSBmb3IgbGlnaHRlc3Qgd2hpdGUuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1dBSS9HTC93aWtpL1JlbGF0aXZlX2x1bWluYW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZWxhdGl2ZSBicmlnaHRuZXNzIG9mIHRoZSBjb2xvciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqL1xuZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIHZhciBkZWNvbXBvc2VkQ29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG5cbiAgaWYgKGRlY29tcG9zZWRDb2xvci50eXBlLmluZGV4T2YoJ3JnYicpID4gLTEpIHtcbiAgICB2YXIgcmdiID0gZGVjb21wb3NlZENvbG9yLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgdmFsIC89IDI1NTsgLy8gbm9ybWFsaXplZFxuICAgICAgcmV0dXJuIHZhbCA8PSAwLjAzOTI4ID8gdmFsIC8gMTIuOTIgOiBNYXRoLnBvdygodmFsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgfSk7XG4gICAgLy8gVHJ1bmNhdGUgYXQgMyBkaWdpdHNcbiAgICByZXR1cm4gTnVtYmVyKCgwLjIxMjYgKiByZ2JbMF0gKyAwLjcxNTIgKiByZ2JbMV0gKyAwLjA3MjIgKiByZ2JbMl0pLnRvRml4ZWQoMykpO1xuICB9IGVsc2UgaWYgKGRlY29tcG9zZWRDb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpID4gLTEpIHtcbiAgICByZXR1cm4gZGVjb21wb3NlZENvbG9yLnZhbHVlc1syXSAvIDEwMDtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignTWF0ZXJpYWwtVUk6IHVuc3VwcG9ydGVkIGAnICsgY29sb3IgKyAnYCBjb2xvci4nKTtcbn1cblxuLyoqXG4gKiBEYXJrZW4gb3IgbGlnaHRlbiBhIGNvbG91ciwgZGVwZW5kaW5nIG9uIGl0cyBsdW1pbmFuY2UuXG4gKiBMaWdodCBjb2xvcnMgYXJlIGRhcmtlbmVkLCBkYXJrIGNvbG9ycyBhcmUgbGlnaHRlbmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudD0wLjE1IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cbmZ1bmN0aW9uIGVtcGhhc2l6ZShjb2xvcikge1xuICB2YXIgY29lZmZpY2llbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDAuMTU7XG5cbiAgcmV0dXJuIGdldEx1bWluYW5jZShjb2xvcikgPiAwLjUgPyBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSA6IGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlcyBhcmUgb3ZlcndyaXR0ZW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdmFsdWUgdG8gc2V0IHRoZSBhbHBoYSBjaGFubmVsIHRvIGluIHRoZSByYW5nZSAwIC0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5mdW5jdGlvbiBmYWRlKGNvbG9yLCB2YWx1ZSkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFsdWUgPSBjbGFtcCh2YWx1ZSwgMCwgMSk7XG5cbiAgaWYgKGNvbG9yLnR5cGUgPT09ICdyZ2InIHx8IGNvbG9yLnR5cGUgPT09ICdoc2wnKSB7XG4gICAgY29sb3IudHlwZSArPSAnYSc7XG4gIH1cbiAgY29sb3IudmFsdWVzWzNdID0gdmFsdWU7XG5cbiAgcmV0dXJuIGNvbnZlcnRDb2xvclRvU3RyaW5nKGNvbG9yKTtcbn1cblxuLyoqXG4gKiBEYXJrZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cbmZ1bmN0aW9uIGRhcmtlbihjb2xvciwgY29lZmZpY2llbnQpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIGNvZWZmaWNpZW50ID0gY2xhbXAoY29lZmZpY2llbnQsIDAsIDEpO1xuXG4gIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpID4gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgPiAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udmVydENvbG9yVG9TdHJpbmcoY29sb3IpO1xufVxuXG4vKipcbiAqIExpZ2h0ZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cbmZ1bmN0aW9uIGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50LCAwLCAxKTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSA+IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICs9ICgxMDAgLSBjb2xvci52YWx1ZXNbMl0pICogY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSA+IC0xKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGNvbG9yLnZhbHVlc1tpXSArPSAoMjU1IC0gY29sb3IudmFsdWVzW2ldKSAqIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb252ZXJ0Q29sb3JUb1N0cmluZyhjb2xvcik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExODVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfZXh0ZW5kczMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczMpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVNaXhpbnM7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zKSB7XG4gIHZhciBfdG9vbGJhcjtcblxuICByZXR1cm4gKDAsIF9leHRlbmRzNC5kZWZhdWx0KSh7XG4gICAgZ3V0dGVyczogZnVuY3Rpb24gZ3V0dGVycyhzdHlsZXMpIHtcbiAgICAgIHJldHVybiAoMCwgX2V4dGVuZHM0LmRlZmF1bHQpKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcudW5pdCAqIDIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy51bml0ICogMlxuICAgICAgfSwgc3R5bGVzLCAoMCwgX2RlZmluZVByb3BlcnR5My5kZWZhdWx0KSh7fSwgYnJlYWtwb2ludHMudXAoJ3NtJyksICgwLCBfZXh0ZW5kczQuZGVmYXVsdCkoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZy51bml0ICogMyxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLnVuaXQgKiAzXG4gICAgICB9LCBzdHlsZXNbYnJlYWtwb2ludHMudXAoJ3NtJyldKSkpO1xuICAgIH0sXG4gICAgdG9vbGJhcjogKF90b29sYmFyID0ge1xuICAgICAgbWluSGVpZ2h0OiA1NlxuICAgIH0sICgwLCBfZGVmaW5lUHJvcGVydHkzLmRlZmF1bHQpKF90b29sYmFyLCBicmVha3BvaW50cy51cCgneHMnKSArICcgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsIHtcbiAgICAgIG1pbkhlaWdodDogNDhcbiAgICB9KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoX3Rvb2xiYXIsIGJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDY0XG4gICAgfSksIF90b29sYmFyKVxuICB9LCBtaXhpbnMpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N0eWxlcy9jcmVhdGVNaXhpbnMuanNcbi8vIG1vZHVsZSBpZCA9IDExODZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbnZhciBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xudmFyIHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZG93KCkge1xuICByZXR1cm4gWyhhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0pICsgJ3B4ICcgKyAoYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdKSArICdweCAnICsgKGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXSkgKyAncHggJyArIChhcmd1bWVudHMubGVuZ3RoIDw9IDMgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbM10pICsgJ3B4IHJnYmEoMCwgMCwgMCwgJyArIHNoYWRvd0tleVVtYnJhT3BhY2l0eSArICcpJywgKGFyZ3VtZW50cy5sZW5ndGggPD0gNCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s0XSkgKyAncHggJyArIChhcmd1bWVudHMubGVuZ3RoIDw9IDUgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNV0pICsgJ3B4ICcgKyAoYXJndW1lbnRzLmxlbmd0aCA8PSA2ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzZdKSArICdweCAnICsgKGFyZ3VtZW50cy5sZW5ndGggPD0gNyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s3XSkgKyAncHggcmdiYSgwLCAwLCAwLCAnICsgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ICsgJyknLCAoYXJndW1lbnRzLmxlbmd0aCA8PSA4ID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzhdKSArICdweCAnICsgKGFyZ3VtZW50cy5sZW5ndGggPD0gOSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s5XSkgKyAncHggJyArIChhcmd1bWVudHMubGVuZ3RoIDw9IDEwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzEwXSkgKyAncHggJyArIChhcmd1bWVudHMubGVuZ3RoIDw9IDExID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzExXSkgKyAncHggcmdiYSgwLCAwLCAwLCAnICsgc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkgKyAnKSddLmpvaW4oJywnKTtcbn1cblxudmFyIHNoYWRvd3MgPSBbJ25vbmUnLCBjcmVhdGVTaGFkb3coMCwgMSwgMywgMCwgMCwgMSwgMSwgMCwgMCwgMiwgMSwgLTEpLCBjcmVhdGVTaGFkb3coMCwgMSwgNSwgMCwgMCwgMiwgMiwgMCwgMCwgMywgMSwgLTIpLCBjcmVhdGVTaGFkb3coMCwgMSwgOCwgMCwgMCwgMywgNCwgMCwgMCwgMywgMywgLTIpLCBjcmVhdGVTaGFkb3coMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDEpLCBjcmVhdGVTaGFkb3coMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMiksIGNyZWF0ZVNoYWRvdygwLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyKSwgY3JlYXRlU2hhZG93KDAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzKSwgY3JlYXRlU2hhZG93KDAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzKSwgY3JlYXRlU2hhZG93KDAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0KSwgY3JlYXRlU2hhZG93KDAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0KSwgY3JlYXRlU2hhZG93KDAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0KSwgY3JlYXRlU2hhZG93KDAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1KSwgY3JlYXRlU2hhZG93KDAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDUpLCBjcmVhdGVTaGFkb3coMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2KSwgY3JlYXRlU2hhZG93KDAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNiksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4KSwgY3JlYXRlU2hhZG93KDAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDgpXTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2hhZG93cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvc2hhZG93cy5qc1xuLy8gbW9kdWxlIGlkID0gMTE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNIQU5ORUwgPSB1bmRlZmluZWQ7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFNhbWUgdmFsdWUgdXNlZCBieSByZWFjdC1qc3NcbnZhciBDSEFOTkVMID0gZXhwb3J0cy5DSEFOTkVMID0gJ19fVEhFTUlOR19fJztcblxudmFyIHRoZW1lTGlzdGVuZXIgPSB7XG4gIGNvbnRleHRUeXBlczogKDAsIF9kZWZpbmVQcm9wZXJ0eTMuZGVmYXVsdCkoe30sIENIQU5ORUwsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgaW5pdGlhbDogZnVuY3Rpb24gaW5pdGlhbChjb250ZXh0KSB7XG4gICAgaWYgKCFjb250ZXh0W0NIQU5ORUxdKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dFtDSEFOTkVMXS5nZXRTdGF0ZSgpO1xuICB9LFxuICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShjb250ZXh0LCBjYikge1xuICAgIGlmICghY29udGV4dFtDSEFOTkVMXSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHRbQ0hBTk5FTF0uc3Vic2NyaWJlKGNiKTtcbiAgfSxcbiAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGNvbnRleHQsIHN1YnNjcmlwdGlvbklkKSB7XG4gICAgaWYgKGNvbnRleHRbQ0hBTk5FTF0pIHtcbiAgICAgIGNvbnRleHRbQ0hBTk5FTF0udW5zdWJzY3JpYmUoc3Vic2NyaXB0aW9uSWQpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdGhlbWVMaXN0ZW5lcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvdGhlbWVMaXN0ZW5lci5qc1xuLy8gbW9kdWxlIGlkID0gMTE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZW5lcmF0b3JDb3VudGVyID0gMDtcblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyB1bmlxdWUgY2xhc3MgbmFtZXMgYmFzZWQgb24gY291bnRlcnMuXG4vLyBXaGVuIG5ldyBnZW5lcmF0b3IgZnVuY3Rpb24gaXMgY3JlYXRlZCwgcnVsZSBjb3VudGVyIGlzIHJlc2V0LlxuLy8gV2UgbmVlZCB0byByZXNldCB0aGUgcnVsZSBjb3VudGVyIGZvciBTU1IgZm9yIGVhY2ggcmVxdWVzdC5cbi8vXG4vLyBJdCdzIGluc3BpcmVkIGJ5XG4vLyBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvYmxvYi80ZTZhMDVkZDNmN2I2NTcyZmRkM2FiMjE2ODYxZDllNDQ2YzIwMzMxL3NyYy91dGlscy9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZS5qc1xuZnVuY3Rpb24gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIF9vcHRpb25zJGRhbmdlcm91c2x5VSA9IG9wdGlvbnMuZGFuZ2Vyb3VzbHlVc2VHbG9iYWxDU1MsXG4gICAgICBkYW5nZXJvdXNseVVzZUdsb2JhbENTUyA9IF9vcHRpb25zJGRhbmdlcm91c2x5VSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfb3B0aW9ucyRkYW5nZXJvdXNseVUsXG4gICAgICBfb3B0aW9ucyRwcm9kdWN0aW9uUHIgPSBvcHRpb25zLnByb2R1Y3Rpb25QcmVmaXgsXG4gICAgICBwcm9kdWN0aW9uUHJlZml4ID0gX29wdGlvbnMkcHJvZHVjdGlvblByID09PSB1bmRlZmluZWQgPyAnanNzJyA6IF9vcHRpb25zJHByb2R1Y3Rpb25QcjtcblxuICB2YXIgZXNjYXBlUmVnZXggPSAvKFtbXFxdLiMqJD48K349fF46KCksXCInYFxcc10pL2c7XG4gIHZhciBydWxlQ291bnRlciA9IDA7XG5cbiAgLy8gLSBITVIgY2FuIGxlYWQgdG8gbWFueSBjbGFzcyBuYW1lIGdlbmVyYXRvcnMgYmVpbmcgaW5zdGFudGlhdGVkLFxuICAvLyBzbyB0aGUgd2FybmluZyBpcyBvbmx5IHRyaWdnZXJlZCBpbiBwcm9kdWN0aW9uLlxuICAvLyAtIFdlIGV4cGVjdCBhIGNsYXNzIG5hbWUgZ2VuZXJhdG9yIHRvIGJlIGluc3RhbnRpYXRlZCBwZXIgbmV3IHJlcXVlc3Qgb24gdGhlIHNlcnZlcixcbiAgLy8gc28gdGhlIHdhcm5pbmcgaXMgb25seSB0cmlnZ2VyZWQgY2xpZW50IHNpZGUuXG4gIC8vIC0gWW91IGNhbiBnZXQgYXdheSB3aXRoIGhhdmluZyBtdWx0aXBsZSBjbGFzcyBuYW1lIGdlbmVyYXRvcnNcbiAgLy8gYnkgbW9kaWZ5aW5nIHRoZSBgcHJvZHVjdGlvblByZWZpeGAuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHByb2R1Y3Rpb25QcmVmaXggPT09ICdqc3MnKSB7XG4gICAgZ2VuZXJhdG9yQ291bnRlciArPSAxO1xuXG4gICAgaWYgKGdlbmVyYXRvckNvdW50ZXIgPiAyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiB3ZSBoYXZlIGRldGVjdGVkIG1vcmUgdGhhbiBuZWVkZWQgY3JlYXRpb24gb2YgdGhlIGNsYXNzIG5hbWUgZ2VuZXJhdG9yLicsICdZb3Ugc2hvdWxkIG9ubHkgdXNlIG9uZSBjbGFzcyBuYW1lIGdlbmVyYXRvciBvbiB0aGUgY2xpZW50IHNpZGUuJywgJ0lmIHlvdSBkbyBvdGhlcndpc2UsIHlvdSB0YWtlIHRoZSByaXNrIHRvIGhhdmUgY29uZmxpY3RpbmcgY2xhc3MgbmFtZXMgaW4gcHJvZHVjdGlvbi4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChydWxlLCBzdHlsZVNoZWV0KSB7XG4gICAgcnVsZUNvdW50ZXIgKz0gMTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHJ1bGVDb3VudGVyIDwgMWUxMCwgWydNYXRlcmlhbC1VSTogeW91IG1pZ2h0IGhhdmUgYSBtZW1vcnkgbGVhay4nLCAnVGhlIHJ1bGVDb3VudGVyIGlzIG5vdCBzdXBwb3NlZCB0byBncm93IHRoYXQgbXVjaC4nXS5qb2luKCcnKSkgOiB2b2lkIDA7XG5cbiAgICAvLyBDb2RlIGJyYW5jaCB0aGUgd2hvbGUgYmxvY2sgYXQgdGhlIGV4cGVuc2Ugb2YgbW9yZSBjb2RlLlxuICAgIGlmIChkYW5nZXJvdXNseVVzZUdsb2JhbENTUykge1xuICAgICAgaWYgKHN0eWxlU2hlZXQgJiYgc3R5bGVTaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCkge1xuICAgICAgICB2YXIgcHJlZml4ID0gc3R5bGVTaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeDtcbiAgICAgICAgLy8gU2FuaXRpemUgdGhlIHN0cmluZyBhcyB3aWxsIGJlIHVzZWQgdG8gcHJlZml4IHRoZSBnZW5lcmF0ZWQgY2xhc3MgbmFtZS5cbiAgICAgICAgcHJlZml4ID0gcHJlZml4LnJlcGxhY2UoZXNjYXBlUmVnZXgsICctJyk7XG5cbiAgICAgICAgaWYgKHByZWZpeC5tYXRjaCgvXk11aS8pKSB7XG4gICAgICAgICAgcmV0dXJuIHByZWZpeCArICctJyArIHJ1bGUua2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gcHJlZml4ICsgJy0nICsgcnVsZS5rZXkgKyAnLScgKyBydWxlQ291bnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gJycgKyBwcm9kdWN0aW9uUHJlZml4ICsgcnVsZUNvdW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBydWxlLmtleSArICctJyArIHJ1bGVDb3VudGVyO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9kdWN0aW9uUHJlZml4ICsgcnVsZUNvdW50ZXI7XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlU2hlZXQgJiYgc3R5bGVTaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCkge1xuICAgICAgdmFyIF9wcmVmaXggPSBzdHlsZVNoZWV0Lm9wdGlvbnMuY2xhc3NOYW1lUHJlZml4O1xuICAgICAgLy8gU2FuaXRpemUgdGhlIHN0cmluZyBhcyB3aWxsIGJlIHVzZWQgdG8gcHJlZml4IHRoZSBnZW5lcmF0ZWQgY2xhc3MgbmFtZS5cbiAgICAgIF9wcmVmaXggPSBfcHJlZml4LnJlcGxhY2UoZXNjYXBlUmVnZXgsICctJyk7XG5cbiAgICAgIHJldHVybiBfcHJlZml4ICsgJy0nICsgcnVsZS5rZXkgKyAnLScgKyBydWxlQ291bnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZS5rZXkgKyAnLScgKyBydWxlQ291bnRlcjtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDExODlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2tleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTtcblxudmFyIF9rZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfZGVlcG1lcmdlID0gcmVxdWlyZSgnZGVlcG1lcmdlJyk7XG5cbnZhciBfZGVlcG1lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZXBtZXJnZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIDwgMWtiIHBheWxvYWQgb3ZlcmhlYWQgd2hlbiBsb2Rhc2gvbWVyZ2UgaXMgPiAza2IuXG5cbmZ1bmN0aW9uIGdldFN0eWxlc0NyZWF0b3Ioc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciB0aGVtaW5nRW5hYmxlZCA9IHR5cGVvZiBzdHlsZXNPckNyZWF0b3IgPT09ICdmdW5jdGlvbic7XG5cbiAgZnVuY3Rpb24gY3JlYXRlKHRoZW1lLCBuYW1lKSB7XG4gICAgdmFyIHN0eWxlcyA9IHRoZW1pbmdFbmFibGVkID8gc3R5bGVzT3JDcmVhdG9yKHRoZW1lKSA6IHN0eWxlc09yQ3JlYXRvcjtcblxuICAgIGlmICghdGhlbWUub3ZlcnJpZGVzIHx8ICFuYW1lIHx8ICF0aGVtZS5vdmVycmlkZXNbbmFtZV0pIHtcbiAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuXG4gICAgdmFyIG92ZXJyaWRlcyA9IHRoZW1lLm92ZXJyaWRlc1tuYW1lXTtcbiAgICB2YXIgc3R5bGVzV2l0aE92ZXJyaWRlcyA9ICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHN0eWxlcyk7XG5cbiAgICAoMCwgX2tleXMyLmRlZmF1bHQpKG92ZXJyaWRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0eWxlc1dpdGhPdmVycmlkZXNba2V5XSwgWydNYXRlcmlhbC1VSTogeW91IGFyZSB0cnlpbmcgdG8gb3ZlcnJpZGUgYSBzdHlsZSB0aGF0IGRvZXMgbm90IGV4aXN0LicsICdGaXggdGhlIGAnICsga2V5ICsgJ2Aga2V5IG9mIGB0aGVtZS5vdmVycmlkZXMuJyArIG5hbWUgKyAnYC4nXS5qb2luKCdcXG4nKSkgOiB2b2lkIDA7XG4gICAgICBzdHlsZXNXaXRoT3ZlcnJpZGVzW2tleV0gPSAoMCwgX2RlZXBtZXJnZTIuZGVmYXVsdCkoc3R5bGVzV2l0aE92ZXJyaWRlc1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3R5bGVzV2l0aE92ZXJyaWRlcztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgb3B0aW9uczoge30sXG4gICAgdGhlbWluZ0VuYWJsZWQ6IHRoZW1pbmdFbmFibGVkXG4gIH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldFN0eWxlc0NyZWF0b3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL2dldFN0eWxlc0NyZWF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExOTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG52YXIgX2tleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTtcblxudmFyIF9rZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO1xuXG5leHBvcnRzLmNhcGl0YWxpemVGaXJzdExldHRlciA9IGNhcGl0YWxpemVGaXJzdExldHRlcjtcbmV4cG9ydHMuY29udGFpbnMgPSBjb250YWlucztcbmV4cG9ydHMuZmluZEluZGV4ID0gZmluZEluZGV4O1xuZXhwb3J0cy5maW5kID0gZmluZDtcbmV4cG9ydHMuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnLCAnTWF0ZXJpYWwtVUk6IGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIGV4cGVjdHMgYSBzdHJpbmcgYXJndW1lbnQuJykgOiB2b2lkIDA7XG5cbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn0gLy8gIHdlYWtcblxuZnVuY3Rpb24gY29udGFpbnMob2JqLCBwcmVkKSB7XG4gIHJldHVybiAoMCwgX2tleXMyLmRlZmF1bHQpKHByZWQpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gb2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgb2JqW2tleV0gPT09IHByZWRba2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIHByZWQpIHtcbiAgdmFyIHByZWRUeXBlID0gdHlwZW9mIHByZWQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkocHJlZCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHByZWRUeXBlID09PSAnZnVuY3Rpb24nICYmICEhcHJlZChhcnJbaV0sIGksIGFycikgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICBpZiAocHJlZFR5cGUgPT09ICdvYmplY3QnICYmIGNvbnRhaW5zKGFycltpXSwgcHJlZCkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICBpZiAoWydzdHJpbmcnLCAnbnVtYmVyJywgJ2Jvb2xlYW4nXS5pbmRleE9mKHByZWRUeXBlKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihwcmVkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBmaW5kKGFyciwgcHJlZCkge1xuICB2YXIgaW5kZXggPSBmaW5kSW5kZXgoYXJyLCBwcmVkKTtcbiAgcmV0dXJuIGluZGV4ID4gLTEgPyBhcnJbaW5kZXhdIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFNhZmUgY2hhaW5lZCBmdW5jdGlvblxuICpcbiAqIFdpbGwgb25seSBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgbmVlZGVkLFxuICogb3RoZXJ3aXNlIHdpbGwgcGFzcyBiYWNrIGV4aXN0aW5nIGZ1bmN0aW9ucyBvciBudWxsLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmN0aW9ucyB0byBjaGFpblxuICogQHJldHVybnMge2Z1bmN0aW9ufG51bGx9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3MuZmlsdGVyKGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmMgIT0gbnVsbDtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZ1bmMpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nLCAnTWF0ZXJpYWwtVUk6IGludmFsaWQgQXJndW1lbnQgVHlwZSwgbXVzdCBvbmx5IHByb3ZpZGUgZnVuY3Rpb25zLCB1bmRlZmluZWQsIG9yIG51bGwuJykgOiB2b2lkIDA7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICgpIHt9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS91dGlscy9oZWxwZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdtYXRlcmlhbC11aS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnbWF0ZXJpYWwtdWkvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdtYXRlcmlhbC11aS9UeXBvZ3JhcGh5JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb24sIHtCb3R0b21OYXZpZ2F0aW9uQnV0dG9ufSBmcm9tICdtYXRlcmlhbC11aS9Cb3R0b21OYXZpZ2F0aW9uJztcblxuLy8gSWNvbiBDb21wb25lbnRzXG5pbXBvcnQgRmFMaW5rZWRpblNxdWFyZSBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEnO1xuaW1wb3J0IEZhR2l0aHViU3F1YXJlIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYSc7XG5pbXBvcnQgRmFGYWNlYm9va1NxdWFyZSBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEnO1xuaW1wb3J0IEZhRW52ZWxvcGVTcXVhcmUgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhJztcblxuLy8gVGhlbWUgc3R1ZmZcbmltcG9ydCB7Ymx1ZTMwMH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9ycyc7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcbmNvbnN0IG11aVRoZW1lID0gZ2V0TXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgYWNjZW50MUNvbG9yOiBibHVlMzAwXG4gIH1cbn0pXG5cbmNvbnN0IE1PQklMRV9XSURUSCA9IDYwMDtcblxuY29uc3QgTElOS0VESU4gPSAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2NvbGUtaW5tYW4tNjE3Mzg1NjUvJztcbmNvbnN0IEdJVEhVQiA9ICdodHRwczovL2dpdGh1Yi5jb20vY29sZXRyYW5lLyc7XG5jb25zdCBGQUNFQk9PSyA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vdWhtY29sZSc7XG5jb25zdCBFTUFJTCA9ICdlbG9jNDlAZ21haWwuY29tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvLyBVdGlsc1xuICBpc01vYmlsZSgpIHtcbiAgICAvLyBOb3JtYWxseSB0aGlzIHdvdWxkIGJlIGRvbmUgdXNpbmcgQG1lZGlhIHF1ZXJpZXNcbiAgICAvLyBidXQgSSBhbSBkZW1vbnN0cmF0aW5nIFJlYWN0L0pTIGtub3dsZWRnZSB3aXRoIHRoaXMgcHJvamVjdFxuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCBNT0JJTEVfV0lEVEg7XG4gIH1cblxuICBuYXZQcmVzc2VkKGV2ZW50LCB2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIH1cblxuICAvLyBMaWZlY3ljbGVcbiAgbW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIG11aVRoZW1lPXttdWlUaGVtZX0+XG5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdHlwZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgQ29sZSBJbm1hblxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XG4gICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgIENvbGUgSW5tYW5cbiAgICAgICAgICAgICAgey8qPEljb25CdXR0b24gY29sb3I9XCJjb250cmFzdFwiICovfVxuICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgIDwvQXBwQmFyPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uIGlzTW9iaWxlIG9uQ2hhbmdlPXt0aGlzLm5hdlByZXNzZWR9PlxuICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25CdXR0b24gaWNvbj17RmFMaW5rZWRpblNxdWFyZX0vPlxuICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25CdXR0b24gaWNvbj17RmFHaXRodWJTcXVhcmV9Lz5cbiAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQnV0dG9uIGljb249e0ZhRmFjZWJvb2tTcXVhcmV9Lz5cbiAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQnV0dG9uIGljb249e0ZhRW52ZWxvcGVTcXVhcmV9Lz5cbiAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG5cbiAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNKQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdGFBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlDQTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDOWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQWxCQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7O0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUNBO0FBR0E7QUFDQTs7Ozs7QUFFQTs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFNQTtBQU5BOzs7Ozs7Ozs7O0FBT0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==