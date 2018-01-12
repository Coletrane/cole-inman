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

var _styles = require("../util/styles.js");

var _Navigation = require("./Navigation");

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/Header.js";
// Components


var title = "COLE INMAN";

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("header", { style: headerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement("h1", { style: titleStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, title), _react2.default.createElement(_Navigation2.default, { bottom: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }));
    }
  }]);

  return Header;
}(_react.Component);

// Styles


exports.default = Header;

var headerStyle = {
  color: _styles.colors.barFontColor,
  textAlign: "center",
  backgroundColor: _styles.colors.barColor,
  boxShadow: _styles.boxShadow,
  position: "fixed",
  left: "0px",
  top: "0px",
  width: "100%"
};

var titleStyle = {
  margin: 0
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiYm94U2hhZG93IiwiY29sb3JzIiwiTmF2aWdhdGlvbiIsInRpdGxlIiwiSGVhZGVyIiwiaGVhZGVyU3R5bGUiLCJ0aXRsZVN0eWxlIiwiY29sb3IiLCJiYXJGb250Q29sb3IiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYXJDb2xvciIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsIndpZHRoIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUVmLEFBQVEsQUFBVyxBQUFhOztBQUVoQyxBQUFPLEFBQWdCOzs7Ozs7O0FBRHZCOzs7QUFHQSxJQUFNLFFBQU4sQUFBYzs7SSxBQUVPOzs7Ozs7Ozs7Ozs2QkFFVixBQUNQOzZCQUNJLGNBQUEsWUFBUSxPQUFSLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxRQUFJLE9BQUosQUFBVztvQkFBWDtzQkFBQSxBQUNHO0FBREg7U0FERixBQUNFLEFBR0Esd0JBQUEsQUFBQyxzQ0FBVyxRQUFaLEFBQW9CO29CQUFwQjtzQkFMTixBQUNJLEFBSUUsQUFHUDtBQUhPOzs7Ozs7QSxBQVIwQjs7QUFjcEM7OztrQixBQWRxQjs7QUFlckIsSUFBTTtTQUNHLGVBRFcsQUFDSixBQUNkO2FBRmtCLEFBRVAsQUFDWDttQkFBaUIsZUFIQyxBQUdNLEFBQ3hCO0FBSmtCLEFBSVAsQUFDWDtZQUxrQixBQUtSLEFBQ1Y7UUFOa0IsQUFNWixBQUNOO09BUGtCLEFBT2IsQUFDTDtTQVJGLEFBQW9CLEFBUVg7QUFSVyxBQUNsQjs7QUFVRixJQUFNO1VBQU4sQUFBbUIsQUFDVDtBQURTLEFBQ2pCIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29sZWlubWFuL1Byb2dyYW1zL2NvbGUtaW5tYW4ifQ==