"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require("../util/styles.js");

var _Navigation = require("./Navigation");

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/Header.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  color: ", ";\n  text-align: center;\n  \n  background-color: ", ";\n  box-shadow: ", ";\n  \n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n"], ["\n  color: ", ";\n  text-align: center;\n  \n  background-color: ", ";\n  box-shadow: ", ";\n  \n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  margin: 0;\n"], ["\n  margin: 0;\n"]);
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
      return _react2.default.createElement(HeaderWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, title), _react2.default.createElement(_Navigation2.default, { bottom: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })));
    }
  }]);

  return Header;
}(_react.Component);

// Styles


exports.default = Header;

var HeaderWrapper = _styledComponents2.default.div(_templateObject, _styles.colors.barFontColor, _styles.colors.barColor, _styles.boxShadow);

var Title = _styledComponents2.default.h1(_templateObject2);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiYm94U2hhZG93IiwiY29sb3JzIiwiTmF2aWdhdGlvbiIsInRpdGxlIiwiSGVhZGVyIiwiSGVhZGVyV3JhcHBlciIsImRpdiIsImJhckZvbnRDb2xvciIsImJhckNvbG9yIiwiVGl0bGUiLCJoMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUVQLEFBQVEsQUFBVyxBQUFhOztBQUVoQyxBQUFPLEFBQWdCOzs7Ozs7Ozs7O0FBRHZCOzs7QUFHQSxJQUFNLFFBQU4sQUFBYzs7SSxBQUVPOzs7Ozs7Ozs7Ozs2QkFFVixBQUNQOzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsU0FERixBQUNFLEFBR0Esd0JBQUEsQUFBQyxzQ0FBVyxRQUFaLEFBQW9CO29CQUFwQjtzQkFOTixBQUNFLEFBQ0UsQUFJRSxBQUlQO0FBSk87Ozs7OztBQVQwQixBOztBQWdCcEM7OztrQixBQWhCcUI7O0FBaUJyQixJQUFNLGdCQUFnQiwyQkFBaEIsQUFBdUIscUJBQ2xCLGVBREwsQUFDWSxjQUdJLGVBSnRCLEFBQU0sQUFJdUIsQUFDYjs7QUFRaEIsSUFBTSxRQUFRLDJCQUFSLEFBQWUsR0FBckIiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9