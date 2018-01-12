"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _styles = require("../util/styles.js");

var _functions = require("../util/functions");

var _Navigation = require("./Navigation.js");

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/Layout.js";

// Components


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { style: appStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(_reactResponsive2.default, { query: _styles.mediaQueries.mobileAndDesktop.mobile, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement("div", { style: mainContentStyle.mobile, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, this.props.children)), _react2.default.createElement(_reactResponsive2.default, { query: _styles.mediaQueries.mobileAndDesktop.desktop, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("div", { style: mainContentStyle.desktop, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, this.props.children)), _react2.default.createElement(_Navigation2.default, { bottom: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

;

// Styles
var appStyle = {
  header: {
    backgroundColor: _styles.colors.barColor
  }
};

var titleStyle = {
  color: "white",
  textAlign: "center"
};

var mainContentStyle = {
  desktop: {
    marginTop: "100px",
    marginBottom: "60px"
  },
  mobile: {
    marginTop: "60px",
    marginBottom: "60px"
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVkaWFRdWVyeSIsImNvbG9ycyIsIm1lZGlhUXVlcmllcyIsImlzTW9iaWxlIiwiTmF2aWdhdGlvbiIsIkhlYWRlciIsIkxheW91dCIsImFwcFN0eWxlIiwibW9iaWxlQW5kRGVza3RvcCIsIm1vYmlsZSIsIm1haW5Db250ZW50U3R5bGUiLCJwcm9wcyIsImNoaWxkcmVuIiwiZGVza3RvcCIsImhlYWRlciIsImJhY2tncm91bmRDb2xvciIsImJhckNvbG9yIiwidGl0bGVTdHlsZSIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU87Ozs7QUFDUCxBQUFRLEFBQVEsQUFBbUI7O0FBQ25DLEFBQVEsQUFBZTs7QUFHdkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVk7Ozs7Ozs7O0FBRm5COzs7SSxBQUtxQjs7Ozs7Ozs7Ozs7NkJBRVYsQUFDUDs2QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQywyQ0FBVyxPQUFPLHFCQUFBLEFBQWEsaUJBQWhDLEFBQWlEO29CQUFqRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLE9BQU8saUJBQVosQUFBNkI7b0JBQTdCO3NCQUFBLEFBQ0c7QUFESDtjQUNHLEFBQUssTUFKWixBQUVFLEFBQ0UsQUFDYyxBQUdoQiw0QkFBQSxBQUFDLDJDQUFXLE9BQU8scUJBQUEsQUFBYSxpQkFBaEMsQUFBaUQ7b0JBQWpEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssT0FBTyxpQkFBWixBQUE2QjtvQkFBN0I7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxNQVRaLEFBT0UsQUFDRSxBQUNjLEFBR2hCLDRCQUFBLEFBQUMsc0NBQVcsUUFBWixBQUFvQjtvQkFBcEI7c0JBYkosQUFDRSxBQVlFLEFBR0w7QUFISzs7Ozs7O0FBaEI0QixBOztrQkFBZixBOztBQW9CcEI7O0FBRUQ7QUFDQSxJQUFNOztxQkFFZSxlQUZyQixBQUFpQixBQUNQLEFBQ2tCO0FBRGxCLEFBQ047QUFGYSxBQUNmOztBQUtGLElBQU07U0FBYSxBQUNWLEFBQ1A7YUFGRixBQUFtQixBQUVOO0FBRk0sQUFDakI7O0FBSUYsSUFBTTs7ZUFDSyxBQUNJLEFBQ1g7a0JBSHFCLEFBQ2QsQUFFTyxBQUVoQjtBQUpTLEFBQ1A7O2VBR00sQUFDSyxBQUNYO2tCQVBKLEFBQXlCLEFBS2YsQUFFUTtBQUZSLEFBQ047QUFOcUIsQUFDdkIiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9