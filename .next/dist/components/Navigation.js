"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gitHub = undefined;

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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("../util/styles.js");

var _functions = require("../util/functions.js");

var _IconButton = require("material-ui/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _fa = require("react-icons/lib/fa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/Navigation.js";

// Components


var linkedIn = "https://www.linkedin.com/in/cole-inman-61738565/";
var gitHub = exports.gitHub = "https://github.com/coletrane/"; // exporting this for constructing github links in components
var facebook = "https://www.facebook.com/uhmcole";
var email = "eloc49@gmail.com";

var Navigation = function (_Component) {
  (0, _inherits3.default)(Navigation, _Component);

  function Navigation() {
    (0, _classCallCheck3.default)(this, Navigation);

    return (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).apply(this, arguments));
  }

  (0, _createClass3.default)(Navigation, [{
    key: "render",
    value: function render() {
      _react2.default.createElement("div", { style: svgStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_reactResponsive2.default, { query: _styles.mediaQueries.mobileAndDesktop.mobile, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(NavLinks, { style: bottomNav, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), _react2.default.createElement(_reactResponsive2.default, { query: _styles.mediaQueries.mobileAndDesktop.desktop, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(NavLinks, { style: topNav, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })));
    }
  }, {
    key: "iconColor",
    get: function get() {}
  }]);

  return Navigation;
}(_react.Component);

Navigation.propTypes = {
  bottom: _propTypes2.default.bool.isRequired
};
exports.default = Navigation;


var NavLinks = function (_Component2) {
  (0, _inherits3.default)(NavLinks, _Component2);

  function NavLinks() {
    (0, _classCallCheck3.default)(this, NavLinks);

    return (0, _possibleConstructorReturn3.default)(this, (NavLinks.__proto__ || (0, _getPrototypeOf2.default)(NavLinks)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavLinks, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement("a", { href: linkedIn, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_IconButton2.default, { "aria-label": "LinkedIn", __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_fa.FaLinkedinSquare, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }))), _react2.default.createElement("a", { href: gitHub, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_IconButton2.default, { "aria-label": "Github", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_fa.FaGithubSquare, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), _react2.default.createElement("a", { href: facebook, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_IconButton2.default, { "aria-label": "Facebook", __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_fa.FaFacebookSquare, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))), _react2.default.createElement("a", { href: "mailto:" + email, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_IconButton2.default, { "aria-label": "Email", __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_fa.FaEnvelopeSquare, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }))));
    }
  }]);

  return NavLinks;
}(_react.Component);

// Styles


var svgStyle = {
  width: "1.5rem",
  height: "1.5rem",
  fill: "white"
};

var topNav = {};

var bottomNav = {
  display: "flex",
  flexShrink: "0",
  justifyContent: "center",
  width: "100%",
  position: "fixed",
  left: "0px",
  bottom: "0px",
  backgroundColor: _styles.colors.barColor,
  boxShadow: _styles.boxShadow

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImJveFNoYWRvdyIsImNvbG9ycyIsIm1lZGlhUXVlcmllcyIsImlzTW9iaWxlIiwiSWNvbkJ1dHRvbiIsIk1lZGlhUXVlcnkiLCJGYUVudmVsb3BlU3F1YXJlIiwiRmFGYWNlYm9va1NxdWFyZSIsIkZhR2l0aHViU3F1YXJlIiwiRmFMaW5rZWRpblNxdWFyZSIsImxpbmtlZEluIiwiZ2l0SHViIiwiZmFjZWJvb2siLCJlbWFpbCIsIk5hdmlnYXRpb24iLCJzdmdTdHlsZSIsIm1vYmlsZUFuZERlc2t0b3AiLCJtb2JpbGUiLCJib3R0b21OYXYiLCJkZXNrdG9wIiwidG9wTmF2IiwicHJvcFR5cGVzIiwiYm90dG9tIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJOYXZMaW5rcyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsImRpc3BsYXkiLCJmbGV4U2hyaW5rIiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYXJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUVQLEFBQVEsQUFBVyxBQUFRLEFBQW1COztBQUM5QyxBQUFRLEFBQWU7O0FBR3ZCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFDRSxBQUNBLEFBQ0EsQUFDQTs7Ozs7O0FBUEY7OztBQVVBLElBQU0sV0FBTixBQUFpQixBQUNqQjtBQUFPLElBQU0sMEJBQU4sQUFBZSxBLGlDQUFnQztBQUN0RCxJQUFNLFdBQU4sQUFBaUI7QUFDakIsSUFBTSxRQUFOLEFBQWM7O0lBRU8sQTs7Ozs7Ozs7Ozs7NkJBVVYsQUFDUDtzQkFBQSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDJDQUFXLE9BQU8scUJBQUEsQUFBYSxpQkFBaEMsQUFBaUQ7b0JBQWpEO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLFlBQVMsT0FBVixBQUFpQjtvQkFBakI7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixBQUFDLDJDQUFXLE9BQU8scUJBQUEsQUFBYSxpQkFBaEMsQUFBaUQ7b0JBQWpEO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLFlBQVMsT0FBVixBQUFpQjtvQkFBakI7c0JBTEosQUFJRSxBQUNFLEFBR0w7QUFISzs7Ozs7d0JBVlUsQUFFZjs7OztBQVJxQyxBOztBQUFuQixBLFcsQUFFWjtVQUNHLG9CQUFBLEFBQVUsS0FERCxBQUNNLEE7QUFETixBQUNqQjtrQixBQUhpQjs7O0ksQUFzQmY7Ozs7Ozs7Ozs7OzZCQUNLLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLE9BQUcsTUFBSCxBQUFTO29CQUFUO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHNDQUFXLGNBQVosQUFBdUI7b0JBQXZCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFITixBQUNFLEFBQ0UsQUFDRSxBQUdKO0FBSEk7QUFBQSw0QkFHSixjQUFBLE9BQUcsTUFBSCxBQUFTO29CQUFUO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHNDQUFXLGNBQVosQUFBdUI7b0JBQXZCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFSTixBQU1FLEFBQ0UsQUFDRSxBQUdKO0FBSEk7QUFBQSw0QkFHSixjQUFBLE9BQUcsTUFBSCxBQUFTO29CQUFUO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHNDQUFXLGNBQVosQUFBdUI7b0JBQXZCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFiTixBQVdFLEFBQ0UsQUFDRSxBQUdKO0FBSEk7QUFBQSw0QkFHSixjQUFBLE9BQUcsTUFBTSxZQUFULEFBQXFCO29CQUFyQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxzQ0FBVyxjQUFaLEFBQXVCO29CQUF2QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBbkJSLEFBQ0UsQUFnQkUsQUFDRSxBQUNFLEFBS1Q7QUFMUztBQUFBOzs7OztBLEFBckJXOztBQTZCdkI7OztBQUNBLElBQU07U0FBVyxBQUNSLEFBQ0w7VUFGYSxBQUVMLEFBQ1I7UUFISixBQUFpQixBQUdQO0FBSE8sQUFDZjs7QUFLRixJQUFNLFNBQU4sQUFBZTs7QUFJZixJQUFNO1dBQVksQUFDUCxBQUNUO2NBRmdCLEFBRUosQUFDWjtrQkFIZ0IsQUFHQSxBQUNoQjtTQUpnQixBQUlULEFBQ1A7WUFMZ0IsQUFLTixBQUNWO1FBTmdCLEFBTVYsQUFDTjtVQVBnQixBQU9SLEFBQ1I7bUJBQWlCLGVBUkQsQUFRUSxBQUN4QjtBQVRGLEFBQWtCLEFBU0w7O0FBVEssQUFDaEIiLCJmaWxlIjoiTmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29sZWlubWFuL1Byb2dyYW1zL2NvbGUtaW5tYW4ifQ==