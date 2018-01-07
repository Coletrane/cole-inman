webpackHotUpdate(5,{

/***/ 1155:
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

var _functions = __webpack_require__(418);

var _Card = __webpack_require__(416);

var _Card2 = _interopRequireDefault(_Card);

var _Skill = __webpack_require__(1161);

var _Skill2 = _interopRequireDefault(_Skill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/sections/Skills.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  img {\n    height: auto;\n  }\n'], ['\n  img {\n    height: auto;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  @media (min-width: ', ') {\n    width: ', ';\n  }\n  @media (max-width: ', ') {\n    width: ', ';\n  }\n'], ['\n  @media (min-width: ', ') {\n    width: ', ';\n  }\n  @media (max-width: ', ') {\n    width: ', ';\n  }\n']);

var minWidth = _functions.mobileWidth - 1 + 'px';
var maxWidth = _functions.mobileWidth + 'px';
// Components


var Skills = function (_Component) {
  (0, _inherits3.default)(Skills, _Component);

  function Skills() {
    (0, _classCallCheck3.default)(this, Skills);

    return (0, _possibleConstructorReturn3.default)(this, (Skills.__proto__ || (0, _getPrototypeOf2.default)(Skills)).apply(this, arguments));
  }

  (0, _createClass3.default)(Skills, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, ' Skills'), _react2.default.createElement(_Card2.default, { title: 'Javascript', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(SkillsStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(JsSkills, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }))));
    }
  }]);

  return Skills;
}(_react.Component);

exports.default = Skills;


var SkillsStyle = _styledComponents2.default.div(_templateObject);

var Img = _styledComponents2.default.img(_templateObject2, minWidth, function (props) {
  return props.desktop;
}, maxWidth, function (props) {
  return props.mobile;
});

function SkillListItem(props) {
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement('h6', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, ' ', props.name, ' '), _react2.default.createElement(Img, { src: props.imgSrc,
    desktop: props.desktop,
    mobile: props.mobile, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }));
}

function JsSkills() {
  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(Typescript, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), _react2.default.createElement(ReactLolNameCollision, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), _react2.default.createElement(Angular, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }));
}

function Typescript() {

  return _react2.default.createElement(SkillListItem, { name: 'Typescript',
    imgSrc: '/static/img/logos/ts.png',
    desktop: '10%',
    mobile: '15%', __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  });
}

function ReactLolNameCollision() {

  return _react2.default.createElement(SkillListItem, { name: 'React',
    imgSrc: '/static/img/logos/react.png',
    desktop: '10%',
    mobile: '15%', __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  });
}

function Angular() {

  return _react2.default.createElement(SkillListItem, { name: 'Angular',
    imgSrc: '/static/img/logos/angular.png',
    desktop: '10%',
    mobile: '15%', __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  });
}
//
//       // function GeneralSkills() {
// //   return (
// //
// //   )
// // }
//       //
//       // function BackendSkills() {
// //   return (
// //
// //   )
// // }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvU2tpbGxzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwibW9iaWxlV2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRBY3Rpb25zIiwiU2tpbGwiLCJTa2lsbHMiLCJTa2lsbHNTdHlsZSIsImRpdiIsIkltZyIsImltZyIsInByb3BzIiwiZGVza3RvcCIsIm1vYmlsZSIsIlNraWxsTGlzdEl0ZW0iLCJuYW1lIiwiaW1nU3JjIiwiSnNTa2lsbHMiLCJUeXBlc2NyaXB0IiwiUmVhY3RMb2xOYW1lQ29sbGlzaW9uIiwiQW5ndWxhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFFUCxBQUFTLEFBQW1COztBQUs1QixBQUFPLEFBRUwsQUFDQSxBQUNBOzs7O0FBRUYsQUFBTyxBQUFXOzs7Ozs7Ozs7OztBQVRsQixJQUFNLFdBQVkseUJBQUQsQUFBZSxJQUFoQyxBQUFxQztBQUNyQyxJQUFNLFdBQVcseUJBQWpCLEFBQStCO0FBQy9COzs7SSxBQVVxQjs7Ozs7Ozs7Ozs7NkJBRVYsQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFFQSw0QkFBQSxBQUFDLGdDQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsdUNBQ0UsQUFBQzs7b0JBQUQ7c0JBTlIsQUFDRSxBQUdFLEFBQ0UsQUFDRSxBQUtUO0FBTFM7QUFBQTs7Ozs7QSxBQVR3Qjs7a0IsQUFBZjs7O0FBaUJyQixJQUFNLGNBQWMsMkJBQWQsQUFBcUIsSUFBM0I7O0FBTUEsSUFBTSxpQ0FBQSxBQUFhLHNCQUFiLEFBQ2lCLFVBQ1YsaUJBQUE7U0FBUyxNQUFULEFBQWU7QUFGdEIsQ0FBTSxFQUFOLEFBSWlCLFVBQ1YsaUJBQUE7U0FBUyxNQUFULEFBQWU7QUFMNUIsQUFBTTs7QUFTTixTQUFBLEFBQVMsY0FBVCxBQUF1QixPQUFPLEFBQzVCO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQU0sV0FBTixBQUFZLE1BRGQsQUFDRSxBQUNBLG9DQUFBLEFBQUMsT0FBSSxLQUFLLE1BQVYsQUFBZ0IsQUFDWDthQUFTLE1BRGQsQUFDb0IsQUFDZjtZQUFRLE1BRmIsQUFFbUI7Z0JBRm5CO2tCQUhKLEFBQ0UsQUFFRSxBQUtMO0FBTEs7Ozs7QUFRTixTQUFBLEFBQVMsV0FBVyxBQUNsQjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGdDQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsb0NBQ0EsQUFBQzs7Z0JBQUQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSxvQ0FDQSxBQUFDOztnQkFBRDtrQkFKSixBQUNFLEFBR0UsQUFJTDtBQUpLO0FBQUE7OztBQU1OLFNBQUEsQUFBUyxhQUFhLEFBRXBCOzt1Q0FDRSxBQUFDLGlCQUFjLE1BQWYsQUFBb0IsQUFDTDtZQURmLEFBQ3NCLEFBQ1A7YUFGZixBQUV1QixBQUNSO1lBSGYsQUFHc0I7Z0JBSHRCO2tCQURGLEFBQ0UsQUFLSDtBQUxHO0dBQUE7OztBQU9KLFNBQUEsQUFBUyx3QkFBd0IsQUFFL0I7O3VDQUNFLEFBQUMsaUJBQWMsTUFBZixBQUFvQixBQUNMO1lBRGYsQUFDc0IsQUFDUDthQUZmLEFBRXVCLEFBQ1I7WUFIZixBQUdzQjtnQkFIdEI7a0JBREYsQUFDRSxBQUtIO0FBTEc7R0FBQTs7O0FBT0osU0FBQSxBQUFTLFVBQVUsQUFFakI7O3VDQUNFLEFBQUMsaUJBQWMsTUFBZixBQUFvQixBQUNMO1lBRGYsQUFDc0IsQUFDUDthQUZmLEFBRXVCLEFBQ1I7WUFIZixBQUdzQjtnQkFIdEI7a0JBREYsQUFDRSxBQUtIO0FBTEc7R0FBQTs7QUFNSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiU2tpbGxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/coleinman/Programs/cole-inman/components/sections/Skills.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/coleinman/Programs/cole-inman/components/sections/Skills.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44MGRhYWE2ZWEzMTY1OGNiOTExNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Ta2lsbHMuanM/ODU5YTk5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBtb2JpbGVXaWR0aCB9IGZyb20gJy4uLy4uL3V0aWwvZnVuY3Rpb25zJ1xuXG5jb25zdCBtaW5XaWR0aCA9IChtb2JpbGVXaWR0aCAtIDEpICsgJ3B4J1xuY29uc3QgbWF4V2lkdGggPSBtb2JpbGVXaWR0aCArICdweCdcbi8vIENvbXBvbmVudHNcbmltcG9ydCBDYXJkLFxue1xuICBDYXJkQ29udGVudCxcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZEFjdGlvbnNcbn0gZnJvbSAnbWF0ZXJpYWwtdWkvQ2FyZCdcbmltcG9ydCBTa2lsbCBmcm9tICcuL3NraWxscy9Ta2lsbCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTa2lsbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPiBTa2lsbHM8L2gxPlxuXG4gICAgICAgIDxDYXJkIHRpdGxlPVwiSmF2YXNjcmlwdFwiPlxuICAgICAgICAgIDxTa2lsbHNTdHlsZT5cbiAgICAgICAgICAgIDxKc1NraWxscy8+XG4gICAgICAgICAgPC9Ta2lsbHNTdHlsZT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IFNraWxsc1N0eWxlID0gc3R5bGVkLmRpdmBcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmBcblxuY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7bWluV2lkdGh9KSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMuZGVza3RvcH07XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7bWF4V2lkdGh9KSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMubW9iaWxlfTtcbiAgfVxuYFxuXG5mdW5jdGlvbiBTa2lsbExpc3RJdGVtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPGg2PiB7cHJvcHMubmFtZX0gPC9oNj5cbiAgICAgIDxJbWcgc3JjPXtwcm9wcy5pbWdTcmN9XG4gICAgICAgICAgIGRlc2t0b3A9e3Byb3BzLmRlc2t0b3B9XG4gICAgICAgICAgIG1vYmlsZT17cHJvcHMubW9iaWxlfS8+XG4gICAgPC9saT5cbiAgKVxufVxuXG5cbmZ1bmN0aW9uIEpzU2tpbGxzKCkge1xuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIDxUeXBlc2NyaXB0Lz5cbiAgICAgIDxSZWFjdExvbE5hbWVDb2xsaXNpb24vPlxuICAgICAgPEFuZ3VsYXIvPlxuICAgIDwvdWw+XG5cbiAgKVxufVxuXG5mdW5jdGlvbiBUeXBlc2NyaXB0KCkge1xuXG4gIHJldHVybiAoXG4gICAgPFNraWxsTGlzdEl0ZW0gbmFtZT1cIlR5cGVzY3JpcHRcIlxuICAgICAgICAgICAgICAgICAgIGltZ1NyYz1cIi9zdGF0aWMvaW1nL2xvZ29zL3RzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgZGVza3RvcD1cIjEwJVwiXG4gICAgICAgICAgICAgICAgICAgbW9iaWxlPVwiMTUlXCIvPlxuICApXG59XG5cbmZ1bmN0aW9uIFJlYWN0TG9sTmFtZUNvbGxpc2lvbigpIHtcblxuICByZXR1cm4gKFxuICAgIDxTa2lsbExpc3RJdGVtIG5hbWU9XCJSZWFjdFwiXG4gICAgICAgICAgICAgICAgICAgaW1nU3JjPVwiL3N0YXRpYy9pbWcvbG9nb3MvcmVhY3QucG5nXCJcbiAgICAgICAgICAgICAgICAgICBkZXNrdG9wPVwiMTAlXCJcbiAgICAgICAgICAgICAgICAgICBtb2JpbGU9XCIxNSVcIi8+XG4gIClcbn1cblxuZnVuY3Rpb24gQW5ndWxhcigpIHtcblxuICByZXR1cm4gKFxuICAgIDxTa2lsbExpc3RJdGVtIG5hbWU9XCJBbmd1bGFyXCJcbiAgICAgICAgICAgICAgICAgICBpbWdTcmM9XCIvc3RhdGljL2ltZy9sb2dvcy9hbmd1bGFyLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgZGVza3RvcD1cIjEwJVwiXG4gICAgICAgICAgICAgICAgICAgbW9iaWxlPVwiMTUlXCIvPlxuICApXG59XG4vL1xuLy8gICAgICAgLy8gZnVuY3Rpb24gR2VuZXJhbFNraWxscygpIHtcbi8vIC8vICAgcmV0dXJuIChcbi8vIC8vXG4vLyAvLyAgIClcbi8vIC8vIH1cbi8vICAgICAgIC8vXG4vLyAgICAgICAvLyBmdW5jdGlvbiBCYWNrZW5kU2tpbGxzKCkge1xuLy8gLy8gICByZXR1cm4gKFxuLy8gLy9cbi8vIC8vICAgKVxuLy8gLy8gfVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VjdGlvbnMvU2tpbGxzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUtBO0FBTEE7QUFBQTs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFLQTtBQUVBO0FBRkE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFMQTs7OztBQVFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBS0E7QUFMQTtBQUFBOzs7QUFPQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFIQTtBQUtBO0FBTEE7QUFBQTs7O0FBT0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBSEE7QUFLQTtBQUxBO0FBQUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=