'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _navigation = require('./navigation.js');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/Layout.js';

// Components


var MOBILE_WIDTH = 600;

var isMobile = exports.isMobile = function isMobile() {
  // Normally this would be done using @media queries
  // but I am demonstrating React/JS knowledge with this project

  // Additionally, this shows the split between client and server side
  // code by checking if we are in the browser or server
  if (process.browser) {
    return document.documentElement.clientWidth < MOBILE_WIDTH;
  } else {
    return false;
  }
};

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_AppBar2.default, { position: 'static', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_Toolbar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'title', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.title), _react2.default.createElement(_navigation2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), _react2.default.createElement('div', { className: 'main-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, this.props.children), _react2.default.createElement(_navigation2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }));
    }
  }, {
    key: 'title',
    get: function get() {
      return "Cole Inman";
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJOYXZpZ2F0aW9uIiwiTU9CSUxFX1dJRFRIIiwiaXNNb2JpbGUiLCJwcm9jZXNzIiwiYnJvd3NlciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJMYXlvdXQiLCJ0aXRsZSIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUdmLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7Ozs7O0FBSnZCOzs7QUFNQSxJQUFNLGVBQU4sQUFBcUIsQUFFckI7O0FBQU8sSUFBTSw4QkFBVyxTQUFYLEFBQVcsV0FBTSxBQUM1QjtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtNQUFJLFFBQUosQUFBWSxTQUFTLEFBQ25CO1dBQU8sU0FBQSxBQUFTLGdCQUFULEFBQXlCLGNBQWhDLEFBQThDLEFBQy9DO0FBRkQsU0FFTyxBQUNMO1dBQUEsQUFBTyxBQUNSO0FBQ0Y7QUFYTTs7SUFhYyxBOzs7Ozs7Ozs7Ozs2QkFNVixBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxrQ0FBTyxVQUFSLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO29CQUFqQjtzQkFBQSxBQUNHO0FBREg7Y0FERixBQUNFLEFBQ1EsQUFFUix3QkFBQSxBQUFDOztvQkFBRDtzQkFOTixBQUNFLEFBQ0UsQUFJRSxBQUlKO0FBSkk7QUFBQSw0QkFJSixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0k7QUFESjtjQUNJLEFBQUssTUFYWCxBQVVFLEFBQ2UsQUFHZiwyQkFBQSxBQUFDOztvQkFBRDtzQkFmSixBQUNFLEFBY0UsQUFJTDtBQUpLO0FBQUE7Ozs7d0JBcEJNLEFBQ1Y7YUFBQSxBQUFPLEFBQ1I7Ozs7O0FBSmlDLEE7O2tCQUFmLEE7O0FBMkJwQiIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvbGVpbm1hbi9Qcm9ncmFtcy9jb2xlLWlubWFuIn0=