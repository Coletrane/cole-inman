'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColeDocument = function (_Document) {
  (0, _inherits3.default)(ColeDocument, _Document);

  function ColeDocument() {
    (0, _classCallCheck3.default)(this, ColeDocument);

    return (0, _possibleConstructorReturn3.default)(this, (ColeDocument.__proto__ || (0, _getPrototypeOf2.default)(ColeDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(ColeDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { lang: 'en' }, _react2.default.createElement(_document.Head, null, _react2.default.createElement('title', null, this.title), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { name: 'viewport',
        content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('meta', { name: 'description',
        content: 'Cole Inman Full Stack Software Developer Resume and Project showcase' }), this.props.styleTags), _react2.default.createElement('body', { style: { margin: 0 } }, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null)));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, props));
        };
      });
      var styleTags = sheet.getStyleElement();
      return (0, _extends3.default)({}, page, { styleTags: styleTags });
    }
  }]);

  return ColeDocument;
}(_document2.default);

exports.default = ColeDocument;