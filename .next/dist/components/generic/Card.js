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

var _styles = require("../../util/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/generic/Card.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  box-shadow: ", ";\n  padding: 1rem;\n  margin: 1rem;\n"], ["\n  box-shadow: ", ";\n  padding: 1rem;\n  margin: 1rem;\n"]);

var Card = function (_Component) {
  (0, _inherits3.default)(Card, _Component);

  function Card() {
    (0, _classCallCheck3.default)(this, Card);

    return (0, _possibleConstructorReturn3.default)(this, (Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).apply(this, arguments));
  }

  (0, _createClass3.default)(Card, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(CardContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, this.props.children);
    }
  }]);

  return Card;
}(_react.Component);

exports.default = Card;


var CardContainer = _styledComponents2.default.div(_templateObject, _styles.boxShadow);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2VuZXJpYy9DYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiYm94U2hhZG93IiwiQ2FyZCIsInByb3BzIiwiY2hpbGRyZW4iLCJDYXJkQ29udGFpbmVyIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBUSxBQUFnQjs7Ozs7Ozs7SSxBQUVIOzs7Ozs7Ozs7Ozs2QkFFVixBQUNQOzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsT0FDRyxBQUFLLE1BRlYsQUFDRSxBQUNjLEFBR2pCOzs7OztBQVIrQixBOztrQixBQUFiOzs7QUFXckIsSUFBTSxnQkFBZ0IsMkJBQWhCLEFBQXVCLElBQTdCLEFBQU0sQUFDVSIsImZpbGUiOiJDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9