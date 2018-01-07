webpackHotUpdate(5,{

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(402);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = __webpack_require__(33);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(387);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = __webpack_require__(52);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(411);

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
        filename = this.props.name.split(" ").join("").toLowerCase();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvc2tpbGxzL1NraWxsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiUHJvcFR5cGVzIiwic2tpbGxNZWRpYVF1ZXJpZXMiLCJTa2lsbCIsImltZ1NyYyIsInByb3BzIiwiZGVza3RvcCIsIm1vYmlsZSIsIm5hbWUiLCJmaWxlbmFtZSIsImluY2x1ZGVzIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiTGlzdEl0ZW0iLCJkaXYiLCJTa2lsbFRpdGxlIiwiSW1nIiwiaW1nIiwibWluV2lkdGgiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUSxBQUF3Qjs7Ozs7Ozs7OztBQUVoQzs7SSxBQUVxQjs7Ozs7Ozs7Ozs7NkJBbUJWLEFBQ1A7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxnQ0FDRSxBQUFDLE9BQUksS0FBSyxLQUFWLEFBQWUsQUFDVjtpQkFBUyxLQUFBLEFBQUssTUFEbkIsQUFDeUIsQUFDcEI7Z0JBQVEsS0FBQSxBQUFLLE1BRmxCLEFBRXdCO29CQUZ4QjtzQkFERixBQUNFLEFBR0E7QUFIQTswQkFHQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBYyxVQUFBLEFBQUssTUFBbkIsQUFBeUIsTUFMN0IsQUFDRSxBQUlFLEFBR0w7Ozs7d0JBcEJZLEFBQ1g7VUFBSSxnQkFBSixBQUNBO1VBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLFNBQXBCLEFBQUksQUFBeUIsTUFBTSxBQUNqQzttQkFBVyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFBaEIsQUFBc0IsS0FBdEIsQUFBMkIsR0FBdEMsQUFBVyxBQUE4QixBQUMxQztBQUZELGFBRU8sQUFDTDttQkFBVyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFBaEIsQUFBc0IsS0FBdEIsQUFBMkIsS0FBM0IsQUFBZ0MsSUFBM0MsQUFBVyxBQUFvQyxBQUNoRDtBQUVEOztvQ0FBQSxBQUE0QixXQUM3Qjs7Ozs7QUFqQmdDLEE7O0FBQWQsQSxNQUVaLEE7UUFDQyxvQkFBQSxBQUFVLE9BREMsQUFDTSxBQUN2QjtXQUFTLG9CQUFBLEFBQVUsT0FGRixBQUVTLEFBQzFCO1VBQVEsb0JBQUEsQUFBVSxPQUhELEFBR1EsQTtBQUhSLEFBQ2pCO2tCLEFBSGlCOzs7QUErQnJCLElBQU0sV0FBVywyQkFBWCxBQUFrQixJQUF4Qjs7QUFLQSxJQUFNLGFBQWEsMkJBQWIsQUFBb0IsSUFBMUI7O0FBSUEsSUFBTSxpQ0FBQSxBQUFhLHNCQUNJLDBCQURqQixBQUNtQyxVQUM1QixpQkFBQTtTQUFTLE1BQVQsQUFBZTtBQUZ0QixDQUFNLEVBSVcsMEJBSmpCLEFBSW1DLFVBQzVCLGlCQUFBO1NBQVMsTUFBVCxBQUFlO0FBTDVCLEFBQU0iLCJmaWxlIjoiU2tpbGwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvbGVpbm1hbi9Qcm9ncmFtcy9jb2xlLWlubWFuIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/coleinman/Programs/cole-inman/components/sections/skills/Skill.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/coleinman/Programs/cole-inman/components/sections/skills/Skill.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zMzZmNjRlMTM0ZDlhZjc2N2IxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWN0aW9ucy9za2lsbHMvU2tpbGwuanM/M2I0ZTE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtza2lsbE1lZGlhUXVlcmllc30gZnJvbSAnLi4vLi4vLi4vdXRpbC9zdHlsZXMnXG5cbi8vIENvbXBvbmVudHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlc2t0b3A6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBtb2JpbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9XG5cbiAgZ2V0IGltZ1NyYygpIHtcbiAgICBsZXQgZmlsZW5hbWVcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lLmluY2x1ZGVzKFwiKFwiKSkge1xuICAgICAgZmlsZW5hbWUgPSB0aGlzLnByb3BzLm5hbWUuc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKClcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsZW5hbWUgPSB0aGlzLnByb3BzLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIHJldHVybiBgL3N0YXRpYy9pbWcvbG9nb3MvJHtmaWxlbmFtZX0ucG5nYFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW0+XG4gICAgICAgIDxJbWcgc3JjPXt0aGlzLmltZ1NyY31cbiAgICAgICAgICAgICBkZXNrdG9wPXt0aGlzLnByb3BzLmRlc2t0b3B9XG4gICAgICAgICAgICAgbW9iaWxlPXt0aGlzLnByb3BzLm1vYmlsZX0vPlxuICAgICAgICA8U2tpbGxUaXRsZT4ge3RoaXMucHJvcHMubmFtZX0gPC9Ta2lsbFRpdGxlPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbmBcblxuY29uc3QgU2tpbGxUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMDtcbmBcblxuY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7c2tpbGxNZWRpYVF1ZXJpZXMubWluV2lkdGh9KSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMuZGVza3RvcH07XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7c2tpbGxNZWRpYVF1ZXJpZXMubWF4V2lkdGh9KSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubW9iaWxlfTtcbiAgfVxuYFxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlY3Rpb25zL3NraWxscy9Ta2lsbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFoQkE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQURBOzs7Ozs7OztBQWJBO0FBQ0E7QUFDQTtBQUZBOzs7O0FBNEJBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFFQTtBQUZBO0FBS0E7QUFMQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9