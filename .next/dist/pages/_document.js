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

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/pages/_document.js?entry';


var ColeDocument = function (_Document) {
  (0, _inherits3.default)(ColeDocument, _Document);

  function ColeDocument() {
    (0, _classCallCheck3.default)(this, ColeDocument);

    return (0, _possibleConstructorReturn3.default)(this, (ColeDocument.__proto__ || (0, _getPrototypeOf2.default)(ColeDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(ColeDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, this.title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('meta', { name: 'viewport',
        content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('meta', { name: 'description',
        content: 'Cole Inman Full Stack Software Developer Resume and Project showcase', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Playfair+Display+SC', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), this.props.styleTags), _react2.default.createElement('body', { style: { margin: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, (0, _extends3.default)({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })));
        };
      });
      var styleTags = sheet.getStyleElement();
      return (0, _extends3.default)({}, page, { styleTags: styleTags });
    }
  }]);

  return ColeDocument;
}(_document2.default);

exports.default = ColeDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiU2VydmVyU3R5bGVTaGVldCIsIkNvbGVEb2N1bWVudCIsInRpdGxlIiwicHJvcHMiLCJzdHlsZVRhZ3MiLCJtYXJnaW4iLCJyZW5kZXJQYWdlIiwic2hlZXQiLCJwYWdlIiwiY29sbGVjdFN0eWxlcyIsImdldFN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBUzs7Ozs7OztJLEFBRVk7Ozs7Ozs7Ozs7OzZCQVVWLEFBQ1A7NkJBQ0UsY0FBQSxVQUFNLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQURGLEFBQ0UsQUFDUSxBQUVSLGdEQUFNLFNBQU4sQUFBYztvQkFBZDtzQkFKRixBQUlFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsQUFDTDtpQkFETixBQUNjO29CQURkO3NCQUxGLEFBS0UsQUFFQTtBQUZBO2tEQUVNLE1BQU4sQUFBVyxBQUNMO2lCQUROLEFBQ2M7b0JBRGQ7c0JBUEYsQUFPRSxBQUVBO0FBRkE7a0RBRU0sTUFBTixBQUFXLCtEQUE4RCxLQUF6RSxBQUE2RTtvQkFBN0U7c0JBVEYsQUFTRSxBQUVDO0FBRkQ7ZUFFQyxBQUFLLE1BWlYsQUFDRSxBQVdjLEFBSWQsNEJBQUEsY0FBQSxVQUFNLE9BQU8sRUFBRSxRQUFmLEFBQWEsQUFBVTtvQkFBdkI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBbkJOLEFBQ0UsQUFnQkUsQUFFRSxBQUtQO0FBTE87QUFBQTs7OzswQ0E1QitCO1VBQWQsQUFBYyxrQkFBZCxBQUFjLEFBQ3JDOztVQUFNLFFBQU4sQUFBYyxBQUFJLEFBQ2xCO1VBQU0sa0JBQ0osZUFBQTtlQUFPLGlCQUFBO3VCQUFTLEFBQU0sNENBQWMsQUFBQyxnQ0FBRCxBQUFTOzt3QkFBVDswQkFBN0IsQUFBUyxBQUFvQjtBQUFBO0FBQUEsWUFBQSxDQUFwQjtBQUFoQjtBQURGLEFBQWEsQUFFYixPQUZhO1VBRVAsWUFBWSxNQUFsQixBQUFrQixBQUFNLEFBQ3hCO3dDQUFBLEFBQVksUUFBTSxXQUFsQixBQUNEOzs7OztBQVJ1QyxBOztrQkFBckIsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvbGVpbm1hbi9Qcm9ncmFtcy9jb2xlLWlubWFuIn0=