webpackHotUpdate(5,{

/***/ 1168:
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

var _Skill = __webpack_require__(1161);

var _Skill2 = _interopRequireDefault(_Skill);

var _SkillsList = __webpack_require__(1182);

var _SkillsList2 = _interopRequireDefault(_SkillsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/sections/skills/FrontEndSkills.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0;\n'], ['\n  margin: 0;\n']);

// Components


var FrontEndSkills = function (_Component) {
  (0, _inherits3.default)(FrontEndSkills, _Component);

  function FrontEndSkills() {
    (0, _classCallCheck3.default)(this, FrontEndSkills);

    return (0, _possibleConstructorReturn3.default)(this, (FrontEndSkills.__proto__ || (0, _getPrototypeOf2.default)(FrontEndSkills)).apply(this, arguments));
  }

  (0, _createClass3.default)(FrontEndSkills, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(FrontEndSkillsTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Front End'), _react2.default.createElement(_SkillsList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.jsSkills));
    }
  }, {
    key: 'jsSkills',
    get: function get() {
      var skills = [_react2.default.createElement(Html, { key: 'html', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement(Css, { key: 'css', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement(Jquery, { key: 'jquery', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement(Javascript, { key: 'javascript', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement(Typescript, { key: 'typescript', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(Aurelia, { key: 'aurelia', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement(ReactLolNameCollision, { key: 'react', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement(Redux, { key: 'redux', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(Angular, { key: 'angular', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(Vue, { key: 'vue', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement(Node, { key: 'node', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(Webpack, { key: 'webpack', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement(Express, { key: 'express', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(Rails, { key: 'rails', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })];

      var indexed = [];
      skills.forEach(function (skill, i, arr) {
        indexed.push((0, _react.cloneElement)(skill, { className: '' + i }));
      });

      return indexed;
    }
  }]);

  return FrontEndSkills;
}(_react.Component);

// Styles


exports.default = FrontEndSkills;

var FrontEndSkillsTitle = _styledComponents2.default.h3(_templateObject);

// Skill Components
// TODO: align the text and images
function Html() {
  return _react2.default.createElement(_Skill2.default, { name: 'HTML',
    desktop: '56px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  });
}

function Css() {
  return _react2.default.createElement(_Skill2.default, { name: 'CSS',
    desktop: '45px',
    mobile: '30px', __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  });
}

function Jquery() {
  return _react2.default.createElement(_Skill2.default, { name: 'jQuery',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  });
}

function Javascript() {
  return _react2.default.createElement(_Skill2.default, { name: 'Javascript',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  });
}

function Typescript() {
  return _react2.default.createElement(_Skill2.default, { name: 'Typescript',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  });
}

function ReactLolNameCollision() {
  return _react2.default.createElement(_Skill2.default, { name: 'React (What this site is written in)',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  });
}

function Angular() {
  return _react2.default.createElement(_Skill2.default, { name: 'Angular',
    desktop: '59px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  });
}

function Vue() {
  return _react2.default.createElement(_Skill2.default, { name: 'Vue',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  });
}

function Aurelia() {
  return _react2.default.createElement(_Skill2.default, { name: 'Aurelia',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  });
}

function Node() {
  return _react2.default.createElement(_Skill2.default, { name: 'Node.js',
    desktop: '55px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    }
  });
}

function Webpack() {
  return _react2.default.createElement(_Skill2.default, { name: 'Webpack',
    desktop: '55px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  });
}

function Redux() {
  return _react2.default.createElement(_Skill2.default, { name: 'Redux',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  });
}

function Express() {
  return _react2.default.createElement(_Skill2.default, { name: 'Express.js',
    desktop: '52px',
    mobile: '33px', __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  });
}

function Rails() {
  return _react2.default.createElement(_Skill2.default, { name: 'Ruby on Rails',
    desktop: '55px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvc2tpbGxzL0Zyb250RW5kU2tpbGxzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY2xvbmVFbGVtZW50Iiwic3R5bGVkIiwiU2tpbGwiLCJTa2lsbHNMaXN0IiwiRnJvbnRFbmRTa2lsbHMiLCJqc1NraWxscyIsInNraWxscyIsImluZGV4ZWQiLCJmb3JFYWNoIiwic2tpbGwiLCJpIiwiYXJyIiwicHVzaCIsImNsYXNzTmFtZSIsIkZyb250RW5kU2tpbGxzVGl0bGUiLCJoMyIsIkh0bWwiLCJDc3MiLCJKcXVlcnkiLCJKYXZhc2NyaXB0IiwiVHlwZXNjcmlwdCIsIlJlYWN0TG9sTmFtZUNvbGxpc2lvbiIsIkFuZ3VsYXIiLCJWdWUiLCJBdXJlbGlhIiwiTm9kZSIsIldlYnBhY2siLCJSZWR1eCIsIkV4cHJlc3MiLCJSYWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTLEFBQVc7Ozs7QUFDM0IsQUFBTzs7OztBQUdQLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWdCOzs7Ozs7Ozs7O0FBRnZCOzs7SUFJcUIsQTs7Ozs7Ozs7Ozs7NkJBNEJWLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFFQTtBQUZBO0FBQUEsT0FBQSxrQkFFQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGQSxBQUVBLEFBR0EsOEJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FORixBQUNFLEFBS0EsQUFDUSxBQUtYOzs7O3dCQXZDYyxBQUNiO1VBQUksd0NBQ0YsQUFBQyxRQUFLLEtBQU4sQUFBVTtvQkFBVjtzQkFEVyxBQUNYO0FBQUE7T0FBQSxDQURXLGdDQUVYLEFBQUMsT0FBSSxLQUFMLEFBQVM7b0JBQVQ7c0JBRlcsQUFFWDtBQUFBO09BQUEsaUNBQ0EsQUFBQyxVQUFPLEtBQVIsQUFBWTtvQkFBWjtzQkFIVyxBQUdY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QUFNSixTQUFBLEFBQVMsVUFBVSxBQUNqQjt5QkFDRSxBQUFDLGlDQUFNLE1BQVAsQUFBWSxBQUNMO2FBRFAsQUFDZSxBQUNSO1lBRlAsQUFFYztnQkFGZDtrQkFERixBQUNFLEFBSUg7QUFKRztHQUFBOzs7QUFNSixTQUFBLEFBQVMsT0FBTyxBQUNkO3lCQUNFLEFBQUMsaUNBQU0sTUFBUCxBQUFZLEFBQ0w7YUFEUCxBQUNlLEFBQ1I7WUFGUCxBQUVjO2dCQUZkO2tCQURGLEFBQ0UsQUFJSDtBQUpHO0dBQUE7OztBQU1KLFNBQUEsQUFBUyxVQUFVLEFBQ2pCO3lCQUNFLEFBQUMsaUNBQU0sTUFBUCxBQUFZLEFBQ0w7YUFEUCxBQUNlLEFBQ1I7WUFGUCxBQUVjO2dCQUZkO2tCQURGLEFBQ0UsQUFJSDtBQUpHO0dBQUE7OztBQU1KLFNBQUEsQUFBUyxRQUFRLEFBQ2Y7eUJBQ0UsQUFBQyxpQ0FBTSxNQUFQLEFBQVksQUFDTDthQURQLEFBQ2UsQUFDUjtZQUZQLEFBRWM7Z0JBRmQ7a0JBREYsQUFDRSxBQUlIO0FBSkc7R0FBQTs7O0FBTUosU0FBQSxBQUFTLFVBQVUsQUFDakI7eUJBQ0UsQUFBQyxpQ0FBTSxNQUFQLEFBQVksQUFDTDthQURQLEFBQ2UsQUFDUjtZQUZQLEFBRWM7Z0JBRmQ7a0JBREYsQUFDRSxBQUlIO0FBSkc7R0FBQTs7O0FBT0osU0FBQSxBQUFTLFFBQVEsQUFDZjt5QkFDRSxBQUFDLGlDQUFNLE1BQVAsQUFBWSxBQUNMO2FBRFAsQUFDZSxBQUNSO1lBRlAsQUFFYztnQkFGZDtrQkFERixBQUNFLEFBSUg7QUFKRztHQUFBIiwiZmlsZSI6IkZyb250RW5kU2tpbGxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/coleinman/Programs/cole-inman/components/sections/skills/FrontEndSkills.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/coleinman/Programs/cole-inman/components/sections/skills/FrontEndSkills.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kN2I2NGRmNzFjNDIwMWE3NTYwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWN0aW9ucy9za2lsbHMvRnJvbnRFbmRTa2lsbHMuanM/OTUxZDUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBTa2lsbCBmcm9tICcuL1NraWxsJ1xuaW1wb3J0IFNraWxsc0xpc3QgZnJvbSAnLi9Ta2lsbHNMaXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcm9udEVuZFNraWxscyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgZ2V0IGpzU2tpbGxzKCkge1xuICAgIGxldCBza2lsbHMgPSBbXG4gICAgICA8SHRtbCBrZXk9XCJodG1sXCIvPixcbiAgICAgIDxDc3Mga2V5PVwiY3NzXCIvPixcbiAgICAgIDxKcXVlcnkga2V5PVwianF1ZXJ5XCIvPixcbiAgICAgIDxKYXZhc2NyaXB0IGtleT1cImphdmFzY3JpcHRcIi8+LFxuICAgICAgPFR5cGVzY3JpcHQga2V5PVwidHlwZXNjcmlwdFwiLz4sXG4gICAgICA8QXVyZWxpYSBrZXk9XCJhdXJlbGlhXCIvPixcbiAgICAgIDxSZWFjdExvbE5hbWVDb2xsaXNpb24ga2V5PVwicmVhY3RcIi8+LFxuICAgICAgPFJlZHV4IGtleT1cInJlZHV4XCIvPixcbiAgICAgIDxBbmd1bGFyIGtleT1cImFuZ3VsYXJcIi8+LFxuICAgICAgPFZ1ZSBrZXk9XCJ2dWVcIi8+LFxuICAgICAgPE5vZGUga2V5PVwibm9kZVwiLz4sXG4gICAgICA8V2VicGFjayBrZXk9XCJ3ZWJwYWNrXCIvPixcbiAgICAgIDxFeHByZXNzIGtleT1cImV4cHJlc3NcIi8+LFxuICAgICAgPFJhaWxzIGtleT1cInJhaWxzXCIvPixcbiAgICBdXG5cbiAgICBsZXQgaW5kZXhlZCA9IFtdXG4gICAgc2tpbGxzLmZvckVhY2goKHNraWxsLCBpLCBhcnIpID0+IHtcbiAgICAgIGluZGV4ZWQucHVzaChjbG9uZUVsZW1lbnQoc2tpbGwsIHtjbGFzc05hbWU6IGAke2l9YH0pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5kZXhlZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG4gICAgICA8RnJvbnRFbmRTa2lsbHNUaXRsZT5cbiAgICAgICAgRnJvbnQgRW5kXG4gICAgICA8L0Zyb250RW5kU2tpbGxzVGl0bGU+XG4gICAgICA8U2tpbGxzTGlzdD5cbiAgICAgICAge3RoaXMuanNTa2lsbHN9XG4gICAgICA8L1NraWxsc0xpc3Q+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBTdHlsZXNcbmNvbnN0IEZyb250RW5kU2tpbGxzVGl0bGUgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbjogMDtcbmBcblxuLy8gU2tpbGwgQ29tcG9uZW50c1xuLy8gVE9ETzogYWxpZ24gdGhlIHRleHQgYW5kIGltYWdlc1xuZnVuY3Rpb24gSHRtbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8U2tpbGwgbmFtZT1cIkhUTUxcIlxuICAgICAgICAgICBkZXNrdG9wPVwiNTZweFwiXG4gICAgICAgICAgIG1vYmlsZT1cIjM1cHhcIi8+XG4gIClcbn1cblxuZnVuY3Rpb24gQ3NzKCkge1xuICByZXR1cm4gKFxuICAgIDxTa2lsbCBuYW1lPVwiQ1NTXCJcbiAgICAgICAgICAgZGVza3RvcD1cIjQ1cHhcIlxuICAgICAgICAgICBtb2JpbGU9XCIzMHB4XCIvPlxuICApXG59XG5cbmZ1bmN0aW9uIEpxdWVyeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8U2tpbGwgbmFtZT1cImpRdWVyeVwiXG4gICAgICAgICAgIGRlc2t0b3A9XCI1MHB4XCJcbiAgICAgICAgICAgbW9iaWxlPVwiMzVweFwiLz5cbiAgKVxufVxuXG5mdW5jdGlvbiBKYXZhc2NyaXB0KCkge1xuICByZXR1cm4gKFxuICAgIDxTa2lsbCBuYW1lPVwiSmF2YXNjcmlwdFwiXG4gICAgICAgICAgIGRlc2t0b3A9XCI1MHB4XCJcbiAgICAgICAgICAgbW9iaWxlPVwiMzVweFwiLz5cbiAgKVxufVxuXG5mdW5jdGlvbiBUeXBlc2NyaXB0KCkge1xuICByZXR1cm4gKFxuICAgIDxTa2lsbCBuYW1lPVwiVHlwZXNjcmlwdFwiXG4gICAgICAgICAgIGRlc2t0b3A9XCI1MHB4XCJcbiAgICAgICAgICAgbW9iaWxlPVwiMzVweFwiLz5cbiAgKVxufVxuXG5mdW5jdGlvbiBSZWFjdExvbE5hbWVDb2xsaXNpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPFNraWxsIG5hbWU9XCJSZWFjdCAoV2hhdCB0aGlzIHNpdGUgaXMgd3JpdHRlbiBpbilcIlxuICAgICAgICAgICBkZXNrdG9wPVwiNTBweFwiXG4gICAgICAgICAgIG1vYmlsZT1cIjM1cHhcIi8+XG4gIClcbn1cblxuZnVuY3Rpb24gQW5ndWxhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8U2tpbGwgbmFtZT1cIkFuZ3VsYXJcIlxuICAgICAgICAgICBkZXNrdG9wPVwiNTlweFwiXG4gICAgICAgICAgIG1vYmlsZT1cIjM1cHhcIi8+XG4gIClcbn1cblxuZnVuY3Rpb24gVnVlKCkge1xuICByZXR1cm4gKFxuICAgIDxTa2lsbCBuYW1lPVwiVnVlXCJcbiAgICAgICAgICAgZGVza3RvcD1cIjUwcHhcIlxuICAgICAgICAgICBtb2JpbGU9XCIzNXB4XCIvPlxuICApXG59XG5cbmZ1bmN0aW9uIEF1cmVsaWEoKSB7XG4gIHJldHVybiAoXG4gICAgPFNraWxsIG5hbWU9XCJBdXJlbGlhXCJcbiAgICAgICAgICAgZGVza3RvcD1cIjUwcHhcIlxuICAgICAgICAgICBtb2JpbGU9XCIzNXB4XCIvPlxuICApXG59XG5cbmZ1bmN0aW9uIE5vZGUoKSB7XG4gIHJldHVybiAoXG4gICAgPFNraWxsIG5hbWU9XCJOb2RlLmpzXCJcbiAgICAgICAgICAgZGVza3RvcD1cIjU1cHhcIlxuICAgICAgICAgICBtb2JpbGU9XCIzNXB4XCIvPlxuICApXG59XG5cbmZ1bmN0aW9uIFdlYnBhY2soKSB7XG4gIHJldHVybiAoXG4gICAgPFNraWxsIG5hbWU9XCJXZWJwYWNrXCJcbiAgICAgICAgICAgZGVza3RvcD1cIjU1cHhcIlxuICAgICAgICAgICBtb2JpbGU9XCIzNXB4XCIvPlxuICApXG59XG5cbmZ1bmN0aW9uIFJlZHV4KCkge1xuICByZXR1cm4gKFxuICAgIDxTa2lsbCBuYW1lPVwiUmVkdXhcIlxuICAgICAgICAgICBkZXNrdG9wPVwiNTBweFwiXG4gICAgICAgICAgIG1vYmlsZT1cIjM1cHhcIi8+XG4gIClcbn1cblxuZnVuY3Rpb24gRXhwcmVzcygpIHtcbiAgcmV0dXJuIChcbiAgICA8U2tpbGwgbmFtZT1cIkV4cHJlc3MuanNcIlxuICAgICAgICAgICBkZXNrdG9wPVwiNTJweFwiXG4gICAgICAgICAgIG1vYmlsZT1cIjMzcHhcIi8+XG4gIClcbn1cblxuXG5mdW5jdGlvbiBSYWlscygpIHtcbiAgcmV0dXJuIChcbiAgICA8U2tpbGwgbmFtZT1cIlJ1Ynkgb24gUmFpbHNcIlxuICAgICAgICAgICBkZXNrdG9wPVwiNTVweFwiXG4gICAgICAgICAgIG1vYmlsZT1cIjM1cHhcIi8+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VjdGlvbnMvc2tpbGxzL0Zyb250RW5kU2tpbGxzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFIQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQStCQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBaENBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBOzs7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU1BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7OztBQU9BO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQUE7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=