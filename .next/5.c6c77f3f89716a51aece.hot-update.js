webpackHotUpdate(5,{

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(405);

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

var _styles = __webpack_require__(417);

var _functions = __webpack_require__(418);

var _AppBar = __webpack_require__(448);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(505);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Navigation = __webpack_require__(432);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Header = __webpack_require__(1170);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/Layout.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  //background-color: #001880;\n  // background-image: url(\'../static/img/dark-wood.png\');\n  \n  header {\n    background-color: ', ';\n  }\n'], ['\n  //background-color: #001880;\n  // background-image: url(\'../static/img/dark-wood.png\');\n  \n  header {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  \n'], ['\n  \n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  color: white;\n  text-align: center;\n'], ['\n  color: white;\n  text-align: center;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 100px;\n  margin-bottom: 60px;\n'], ['\n  margin-top: 100px;\n  margin-bottom: 60px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 60px;\n  margin-bottom: 60px;\n'], ['\n  margin-top: 60px;\n  margin-bottom: 60px;\n']);

// Components


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(AppWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(MainContent, { children: this.props.children, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(_Navigation2.default, { bottom: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

;

var MainContent = function (_Component2) {
  (0, _inherits3.default)(MainContent, _Component2);

  function MainContent(props) {
    (0, _classCallCheck3.default)(this, MainContent);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (MainContent.__proto__ || (0, _getPrototypeOf2.default)(MainContent)).call(this, props));

    _this2.onResize = _this2.onResize.bind(_this2);
    _this2.state = {
      mobile: (0, _functions.isMobile)()
    };
    return _this2;
  }

  (0, _createClass3.default)(MainContent, [{
    key: 'onResize',
    value: function onResize() {
      this.setState({
        mobile: (0, _functions.isMobile)()
      });
    }

    // Lifecycle

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (process.browser) {
        window.addEventListener('resize', this.onResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (process.browser) {
        window.removeEventListener('resize', this.onResize);
      }
    }

    // Check if we are under the mobile threshold to avoid needless calls to render

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _functions.isMobile)() !== this.state.mobile;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.mobile) {
        return _react2.default.createElement(MainContentDesktop, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, this.props.children);
      } else {
        return _react2.default.createElement(MainContentMobile, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, this.props.children);
      }
    }
  }]);

  return MainContent;
}(_react.Component);

// Styles


var AppWrapper = _styledComponents2.default.div(_templateObject, _styles.colors.barColor);
var AppBarWrapper = _styledComponents2.default.div(_templateObject2);

var Title = _styledComponents2.default.div(_templateObject3);

var MainContentDesktop = _styledComponents2.default.div(_templateObject4);

var MainContentMobile = _styledComponents2.default.div(_templateObject5);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiY29sb3JzIiwiaXNNb2JpbGUiLCJBcHBCYXIiLCJUb29sYmFyIiwiTmF2aWdhdGlvbiIsIkhlYWRlciIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJNYWluQ29udGVudCIsIm9uUmVzaXplIiwiYmluZCIsInN0YXRlIiwibW9iaWxlIiwic2V0U3RhdGUiLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwiQXBwV3JhcHBlciIsImRpdiIsImJhckNvbG9yIiwiQXBwQmFyV3JhcHBlciIsIlRpdGxlIiwiTWFpbkNvbnRlbnREZXNrdG9wIiwiTWFpbkNvbnRlbnRNb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBRVAsQUFBUyxBQUFjOztBQUN2QixBQUFTLEFBQWdCOztBQUd6QixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFZOzs7Ozs7Ozs7Ozs7OztBQUpuQjs7O0lBT3FCLEE7Ozs7Ozs7Ozs7OzZCQUVWLEFBQ1A7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFFRTtBQUZGO0FBQUEsT0FBQSxrQkFFRSxBQUFDOztvQkFBRDtzQkFGRixBQUVFLEFBRUE7QUFGQTtBQUFBLHdDQUVBLEFBQUMsZUFBWSxVQUFVLEtBQUEsQUFBSyxNQUE1QixBQUFrQztvQkFBbEM7c0JBSkYsQUFJRSxBQUVBO0FBRkE7MEJBRUEsQUFBQyxzQ0FBVyxRQUFaLEFBQW9CO29CQUFwQjtzQkFQSixBQUNFLEFBTUUsQUFJTDtBQUpLOzs7Ozs7QSxBQVY0Qjs7a0JBQWYsQTs7QUFlcEI7O0ksQUFFSzt1Q0FFSjs7dUJBQUEsQUFBWSxPQUFPO3dDQUFBOztpSkFBQSxBQUNYLEFBQ047O1dBQUEsQUFBSyxXQUFXLE9BQUEsQUFBSyxTQUFMLEFBQWMsS0FBOUIsQUFDQTtXQUFBLEFBQUs7Y0FIWSxBQUdqQixBQUFhLEFBQ0g7QUFERyxBQUNYO1dBRUg7Ozs7OytCQUVVLEFBQ1Q7V0FBQSxBQUFLO2dCQUFMLEFBQWMsQUFDSixBQUVYO0FBSGUsQUFDWjtBQUlKOzs7Ozs7d0NBQ29CLEFBQ2xCO1VBQUksUUFBSixBQUFZLFNBQVMsQUFDbkI7ZUFBQSxBQUFPLGlCQUFQLEFBQXdCLFVBQVUsS0FBbEMsQUFBdUMsQUFDeEM7QUFDRjs7OzsyQ0FFc0IsQUFDckI7VUFBSSxRQUFKLEFBQVksU0FBUyxBQUNuQjtlQUFBLEFBQU8sb0JBQVAsQUFBMkIsVUFBVSxLQUFyQyxBQUEwQyxBQUMzQztBQUNGO0FBRUQ7Ozs7OzswQyxBQUNzQixXQUFXLEEsV0FBVyxBQUMxQzthQUFRLCtCQUFlLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxBQUNuQzs7Ozs2QkFFUSxBQUNQO1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBVixBQUFnQixRQUFRLEFBQ3RCOytCQUNHLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLFNBQUEsT0FDRyxBQUFLLE1BRlYsQUFDRSxBQUNjLEFBR2pCO0FBTkQsYUFNTyxBQUNMOytCQUNHLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDtBQUFBLFNBQUEsT0FDRyxBQUFLLE1BRlYsQUFDRSxBQUNjLEFBR2pCO0FBQ0Y7Ozs7O0FBaER1QixBOztBQW1EMUI7OztBQUNBLElBQU0sYUFBYSwyQkFBYixBQUFvQixxQkFLRixlQUx4QixBQUFNLEFBS3lCO0FBRy9CLElBQU0sZ0JBQWdCLDJCQUFoQixBQUF1QixJQUE3Qjs7QUFJQSxJQUFNLFFBQVEsMkJBQVIsQUFBZSxJQUFyQjs7QUFLQSxJQUFNLHFCQUFxQiwyQkFBckIsQUFBNEIsSUFBbEM7O0FBS0EsSUFBTSxvQkFBb0IsMkJBQXBCLEFBQTJCLElBQWpDIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29sZWlubWFuL1Byb2dyYW1zL2NvbGUtaW5tYW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/coleinman/Programs/cole-inman/components/Layout.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/coleinman/Programs/cole-inman/components/Layout.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jNmM3N2YzZjg5NzE2YTUxYWVjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ZWY4NTlhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi91dGlsL3N0eWxlcy5qcydcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnLi4vdXRpbC9mdW5jdGlvbnMnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBBcHBCYXIgZnJvbSAnbWF0ZXJpYWwtdWkvQXBwQmFyJ1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnbWF0ZXJpYWwtdWkvVG9vbGJhcidcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbi5qcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHBXcmFwcGVyPlxuXG4gICAgICAgIDxIZWFkZXIvPlxuXG4gICAgICAgIDxNYWluQ29udGVudCBjaGlsZHJlbj17dGhpcy5wcm9wcy5jaGlsZHJlbn0vPlxuXG4gICAgICAgIDxOYXZpZ2F0aW9uIGJvdHRvbT17dHJ1ZX0vPlxuXG4gICAgICA8L0FwcFdyYXBwZXI+XG4gICAgKVxuICB9XG59O1xuXG5jbGFzcyBNYWluQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vYmlsZTogaXNNb2JpbGUoKSxcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vYmlsZTogaXNNb2JpbGUoKVxuICAgIH0pXG4gIH1cblxuICAvLyBMaWZlY3ljbGVcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd2UgYXJlIHVuZGVyIHRoZSBtb2JpbGUgdGhyZXNob2xkIHRvIGF2b2lkIG5lZWRsZXNzIGNhbGxzIHRvIHJlbmRlclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gKGlzTW9iaWxlKCkgIT09IHRoaXMuc3RhdGUubW9iaWxlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5tb2JpbGUpIHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPE1haW5Db250ZW50RGVza3RvcD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9NYWluQ29udGVudERlc2t0b3A+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPE1haW5Db250ZW50TW9iaWxlPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L01haW5Db250ZW50TW9iaWxlPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG4vLyBTdHlsZXNcbmNvbnN0IEFwcFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAvL2JhY2tncm91bmQtY29sb3I6ICMwMDE4ODA7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3RhdGljL2ltZy9kYXJrLXdvb2QucG5nJyk7XG4gIFxuICBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmJhckNvbG9yfTtcbiAgfVxuYFxuY29uc3QgQXBwQmFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIFxuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBNYWluQ29udGVudERlc2t0b3AgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbmBcblxuY29uc3QgTWFpbkNvbnRlbnRNb2JpbGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuYFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUxBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFJQTtBQUpBOzs7Ozs7Ozs7O0FBS0E7QUFDQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBR0E7QUFBQTtBQUdBO0FBRkE7QUFJQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7OztBQUNBO0FBQUE7Ozs7QUFJQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFGQTtBQVFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUlBOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9