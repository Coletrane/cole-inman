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

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Navigation = require('./Navigation.js');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _styles2 = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  //background-color: #001880;\n  // background-image: url(\'../static/img/dark-wood.png\');\n  \n  header {\n    background-color: ', ';\n  }\n'], ['\n  //background-color: #001880;\n  // background-image: url(\'../static/img/dark-wood.png\');\n  \n  header {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: white;\n  text-align: center;\n'], ['\n  color: white;\n  text-align: center;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  \n'], ['\n  \n']);

// Components


var TITLE = 'Cole Inman';

var theme = (0, _styles2.createMuiTheme)({
  palette: {
    type: 'dark'
  }
});

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Wrapper, null, _react2.default.createElement(_AppBar2.default, { className: 'app-bar',
        position: 'static' }, _react2.default.createElement(_Toolbar2.default, null, _react2.default.createElement(_Typography2.default, { type: 'title' }, _react2.default.createElement(Title, null, TITLE)), _react2.default.createElement(_Navigation2.default, { bottom: false }))), _react2.default.createElement(MainContent, null, this.props.children), _react2.default.createElement(_Navigation2.default, { bottom: true }));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

;

// Styles
var Wrapper = _styledComponents2.default.div(_templateObject, _styles.colors.barColor);

var Title = _styledComponents2.default.div(_templateObject2);

var MainContent = _styledComponents2.default.div(_templateObject3);