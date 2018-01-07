'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../util/styles.js');

var _functions = require('../util/functions.js');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Navigation = require('./Navigation.js');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/Layout.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  //background-color: #001880;\n  // background-image: url(\'../static/img/dark-wood.png\');\n  \n  header {\n    background-color: ', ';\n  }\n'], ['\n  //background-color: #001880;\n  // background-image: url(\'../static/img/dark-wood.png\');\n  \n  header {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n'], ['\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  color: white;\n  text-align: center;\n'], ['\n  color: white;\n  text-align: center;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  \n'], ['\n  \n']);

// Components


var title = 'COLE INMAN';

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(AppWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(AppBarWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_AppBar2.default, { className: 'app-bar',
        position: 'static', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_Toolbar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, title)), _react2.default.createElement(_Navigation2.default, { bottom: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })))), _react2.default.createElement(MainContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, this.props.children), _react2.default.createElement(_Navigation2.default, { bottom: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

;

// Styles
var AppWrapper = _styledComponents2.default.div(_templateObject, _styles.colors.barColor);
var AppBarWrapper = _styledComponents2.default.div(_templateObject2);

var Title = _styledComponents2.default.div(_templateObject3);

var MainContent = _styledComponents2.default.div(_templateObject4);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiY29sb3JzIiwiaXNNb2JpbGUiLCJBcHBCYXIiLCJUb29sYmFyIiwiTmF2aWdhdGlvbiIsInRpdGxlIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiIsIkFwcFdyYXBwZXIiLCJkaXYiLCJiYXJDb2xvciIsIkFwcEJhcldyYXBwZXIiLCJUaXRsZSIsIk1haW5Db250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUVQLEFBQVMsQUFBYzs7QUFDdkIsQUFBUyxBQUFnQjs7QUFHekIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7Ozs7Ozs7Ozs7O0FBSHZCOzs7QUFLQSxJQUFNLFFBQU4sQUFBYzs7SUFFTyxBOzs7Ozs7Ozs7Ozs2QkFFVixBQUNQOzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBRUU7QUFGRjtBQUFBLE9BQUEsa0JBRUcsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxrQ0FBTyxXQUFSLEFBQWtCLEFBQ1Y7a0JBRFIsQUFDaUI7b0JBRGpCO3NCQUFBLEFBRUU7QUFGRjt5QkFFRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUlGLHlCQUFBLEFBQUMsc0NBQVcsUUFBWixBQUFvQjtvQkFBcEI7c0JBWFIsQUFFRSxBQUNFLEFBRUUsQUFNRSxBQUtOO0FBTE07NkJBS0wsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BakJWLEFBZ0JFLEFBQ2MsQUFHZCwyQkFBQSxBQUFDLHNDQUFXLFFBQVosQUFBb0I7b0JBQXBCO3NCQXJCSixBQUNFLEFBb0JFLEFBR0w7QUFISzs7Ozs7O0FBeEI0QixBOztrQkFBZixBOztBQTRCcEI7O0FBRUQ7QUFDQSxJQUFNLGFBQWEsMkJBQWIsQUFBb0IscUJBS0YsZUFMeEIsQUFBTSxBQUt5QjtBQUcvQixJQUFNLGdCQUFnQiwyQkFBaEIsQUFBdUIsSUFBN0I7O0FBT0EsSUFBTSxRQUFRLDJCQUFSLEFBQWUsSUFBckI7O0FBS0EsSUFBTSxjQUFjLDJCQUFkLEFBQXFCLElBQTNCIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29sZWlubWFuL1Byb2dyYW1zL2NvbGUtaW5tYW4ifQ==