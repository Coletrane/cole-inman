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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require("./Card");

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/generic/Section.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\n"], ["\n\n"]);
// Components


var Section = function (_Component) {
  (0, _inherits3.default)(Section, _Component);

  function Section() {
    (0, _classCallCheck3.default)(this, Section);

    return (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || (0, _getPrototypeOf2.default)(Section)).apply(this, arguments));
  }

  (0, _createClass3.default)(Section, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, this.props.title), _react2.default.createElement(_Card2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, this.props.children));
    }
  }]);

  return Section;
}(_react.Component);

// Styles


Section.propTypes = {
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.any.isRequired
};
exports.default = Section;

var Title = _styledComponents2.default.h1(_templateObject);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2VuZXJpYy9TZWN0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiUHJvcFR5cGVzIiwiQ2FyZCIsIlNlY3Rpb24iLCJwcm9wcyIsInRpdGxlIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYW55IiwiVGl0bGUiLCJoMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVU7Ozs7Ozs7OztBQURqQjs7O0ksQUFHcUI7Ozs7Ozs7Ozs7OzZCQU9WLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFGVixBQUNFLEFBQ2MsQUFFZCx3QkFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFOWixBQUNFLEFBSUUsQUFDYyxBQUluQjs7Ozs7QSxBQWxCa0M7O0FBcUJyQzs7O0FBckJxQixBLFEsQUFFWjtTQUNFLG9CQUFBLEFBQVUsT0FEQSxBQUNPLEFBQ3hCO1lBQVUsb0JBQUEsQUFBVSxJQUZILEFBRU8sQTtBQUZQLEFBQ2pCO2tCQUhpQixBOztBQXNCckIsSUFBTSxRQUFRLDJCQUFSLEFBQWUsR0FBckIiLCJmaWxlIjoiU2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29sZWlubWFuL1Byb2dyYW1zL2NvbGUtaW5tYW4ifQ==