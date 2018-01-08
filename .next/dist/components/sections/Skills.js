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

var _Section = require("../generic/Section");

var _Section2 = _interopRequireDefault(_Section);

var _GeneralSkills = require("./skills/GeneralSkills");

var _GeneralSkills2 = _interopRequireDefault(_GeneralSkills);

var _FrontEndSkills = require("./skills/FrontEndSkills");

var _FrontEndSkills2 = _interopRequireDefault(_FrontEndSkills);

var _BackEndSkills = require("./skills/BackEndSkills");

var _BackEndSkills2 = _interopRequireDefault(_BackEndSkills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/sections/Skills.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  img {\n    height: auto;\n  }\n"], ["\n  img {\n    height: auto;\n  }\n"]);
// Components


var Skills = function (_Component) {
  (0, _inherits3.default)(Skills, _Component);

  function Skills() {
    (0, _classCallCheck3.default)(this, Skills);

    return (0, _possibleConstructorReturn3.default)(this, (Skills.__proto__ || (0, _getPrototypeOf2.default)(Skills)).apply(this, arguments));
  }

  (0, _createClass3.default)(Skills, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_Section2.default, { title: "Skills", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(SkillsStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_GeneralSkills2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(_FrontEndSkills2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement(_BackEndSkills2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }))));
    }
  }]);

  return Skills;
}(_react.Component);

exports.default = Skills;


var SkillsStyle = _styledComponents2.default.div(_templateObject);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvU2tpbGxzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiU2VjdGlvbiIsIkdlbmVyYWxTa2lsbHMiLCJGcm9udEVuZFNraWxscyIsIkJhY2tFbmRTa2lsbHMiLCJTa2lsbHMiLCJTa2lsbHNTdHlsZSIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUVQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFtQjs7Ozs7Ozs7O0FBSjFCOzs7SSxBQU1xQjs7Ozs7Ozs7Ozs7NkJBRVYsQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsbUNBQVEsT0FBVCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBTlIsQUFDRSxBQUNFLEFBQ0UsQUFHRSxBQUtUO0FBTFM7QUFBQTs7Ozs7QUFUd0IsQTs7a0JBQWYsQTs7O0FBaUJyQixJQUFNLGNBQWMsMkJBQWQsQUFBcUIsSUFBM0IiLCJmaWxlIjoiU2tpbGxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9