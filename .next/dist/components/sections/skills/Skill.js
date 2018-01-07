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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('../../../util/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/sections/skills/Skill.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 5px;\n  border-radius: 5px;\n'], ['\n  padding: 5px;\n  border-radius: 5px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0;\n'], ['\n  margin: 0;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  @media (min-width: ', ') {\n    width: ', ';\n  }\n  @media (max-width: ', ') {\n    width: ', ';\n  }\n'], ['\n  @media (min-width: ', ') {\n    width: ', ';\n  }\n  @media (max-width: ', ') {\n    width: ', ';\n  }\n']);

// Components

var Skill = function (_Component) {
  (0, _inherits3.default)(Skill, _Component);

  function Skill() {
    (0, _classCallCheck3.default)(this, Skill);

    return (0, _possibleConstructorReturn3.default)(this, (Skill.__proto__ || (0, _getPrototypeOf2.default)(Skill)).apply(this, arguments));
  }

  (0, _createClass3.default)(Skill, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(ListItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(Img, { src: this.imgSrc,
        desktop: this.props.desktop,
        mobile: this.props.mobile, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(SkillTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, ' ', this.props.name, ' '));
    }
  }, {
    key: 'imgSrc',
    get: function get() {
      var filename = void 0;
      if (this.props.name.includes("(")) {
        filename = this.props.name.split(" ")[0].toLowerCase();
      } else {
        filename = this.props.name.split(" ").join("");
      }

      return '/static/img/logos/' + filename + '.png';
    }
  }]);

  return Skill;
}(_react.Component);

Skill.propTypes = {
  name: _propTypes2.default.string.isRequired,
  desktop: _propTypes2.default.string.isRequired,
  mobile: _propTypes2.default.string.isRequired
};
exports.default = Skill;


var ListItem = _styledComponents2.default.div(_templateObject);

var SkillTitle = _styledComponents2.default.div(_templateObject2);

var Img = _styledComponents2.default.img(_templateObject3, _styles.skillMediaQueries.minWidth, function (props) {
  return props.desktop;
}, _styles.skillMediaQueries.maxWidth, function (props) {
  return props.mobile;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvc2tpbGxzL1NraWxsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiUHJvcFR5cGVzIiwic2tpbGxNZWRpYVF1ZXJpZXMiLCJTa2lsbCIsImltZ1NyYyIsInByb3BzIiwiZGVza3RvcCIsIm1vYmlsZSIsIm5hbWUiLCJmaWxlbmFtZSIsImluY2x1ZGVzIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiTGlzdEl0ZW0iLCJkaXYiLCJTa2lsbFRpdGxlIiwiSW1nIiwiaW1nIiwibWluV2lkdGgiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUSxBQUF3Qjs7Ozs7Ozs7OztBQUVoQzs7SSxBQUVxQjs7Ozs7Ozs7Ozs7NkJBbUJWLEFBQ1A7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxnQ0FDRSxBQUFDLE9BQUksS0FBSyxLQUFWLEFBQWUsQUFDVjtpQkFBUyxLQUFBLEFBQUssTUFEbkIsQUFDeUIsQUFDcEI7Z0JBQVEsS0FBQSxBQUFLLE1BRmxCLEFBRXdCO29CQUZ4QjtzQkFERixBQUNFLEFBR0E7QUFIQTswQkFHQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBYyxVQUFBLEFBQUssTUFBbkIsQUFBeUIsTUFMN0IsQUFDRSxBQUlFLEFBR0w7Ozs7d0JBcEJZLEFBQ1g7VUFBSSxnQkFBSixBQUNBO1VBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLFNBQXBCLEFBQUksQUFBeUIsTUFBTSxBQUNqQzttQkFBVyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFBaEIsQUFBc0IsS0FBdEIsQUFBMkIsR0FBdEMsQUFBVyxBQUE4QixBQUMxQztBQUZELGFBRU8sQUFDTDttQkFBVyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFBaEIsQUFBc0IsS0FBdEIsQUFBMkIsS0FBdEMsQUFBVyxBQUFnQyxBQUM1QztBQUVEOztvQ0FBQSxBQUE0QixXQUM3Qjs7Ozs7QUFqQmdDLEE7O0EsQUFBZCxNQUVaLEE7UUFDQyxvQkFBQSxBQUFVLE9BREMsQUFDTSxBQUN2QjtXQUFTLG9CQUFBLEFBQVUsT0FGRixBQUVTLEFBQzFCO1VBQVEsb0JBQUEsQUFBVSxPQUhELEFBR1EsQTtBQUhSLEFBQ2pCO2tCLEFBSGlCOzs7QUErQnJCLElBQU0sV0FBVywyQkFBWCxBQUFrQixJQUF4Qjs7QUFLQSxJQUFNLGFBQWEsMkJBQWIsQUFBb0IsSUFBMUI7O0FBSUEsSUFBTSxpQ0FBQSxBQUFhLHNCQUNJLDBCQURqQixBQUNtQyxVQUM1QixpQkFBQTtTQUFTLE1BQVQsQUFBZTtBQUZ0QixDQUFNLEVBSVcsMEJBSmpCLEFBSW1DLFVBQzVCLGlCQUFBO1NBQVMsTUFBVCxBQUFlO0FBTDVCLEFBQU0iLCJmaWxlIjoiU2tpbGwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvbGVpbm1hbi9Qcm9ncmFtcy9jb2xlLWlubWFuIn0=