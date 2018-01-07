webpackHotUpdate(5,{

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _webshots = __webpack_require__(410);

var _webshots2 = _interopRequireDefault(_webshots);

var _Card = __webpack_require__(436);

var _Card2 = _interopRequireDefault(_Card);

var _Button = __webpack_require__(1165);

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = __webpack_require__(52);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/sections/projects/AbstractProject.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  img {\n    width: 50%;\n    height: auto;\n  }\n'], ['\n  img {\n    width: 50%;\n    height: auto;\n  }\n']);

// Components


var AbstractProject = function (_Component) {
  (0, _inherits3.default)(AbstractProject, _Component);

  function AbstractProject() {
    (0, _classCallCheck3.default)(this, AbstractProject);

    return (0, _possibleConstructorReturn3.default)(this, (AbstractProject.__proto__ || (0, _getPrototypeOf2.default)(AbstractProject)).apply(this, arguments));
  }

  (0, _createClass3.default)(AbstractProject, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Card2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_Card.CardHeader, { title: this.props.title,
        subheader: this.props.subheader, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(SiteImg, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('img', { src: this.props.imgSrc,
        alt: this.props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement(_Card.CardContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.props.children), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(ProjectButton, { url: "http://" + this.props.liveSite,
        text: 'Live Site', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement(ProjectButton, { url: this.props.gitHub,
        text: 'Github Repo', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })));
    }
  }]);

  return AbstractProject;
}(_react.Component);

AbstractProject.propTypes = {
  title: _propTypes2.default.string.isRequired,
  subheader: _propTypes2.default.string.isRequired,
  imgSrc: _propTypes2.default.string.isRequired
};
exports.default = AbstractProject;


function ProjectButton(props) {
  if (props.url && props.text) {
    return _react2.default.createElement('a', { href: props.url, __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      }
    }, _react2.default.createElement(_Button2.default, { raised: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    }, _react2.default.createElement('span', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }, props.text)));
  } else {
    return null;
  }
}

// Styles
var SiteImg = _styledComponents2.default.div(_templateObject);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvcHJvamVjdHMvQWJzdHJhY3RQcm9qZWN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwid2Vic2hvdHMiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZEFjdGlvbnMiLCJCdXR0b24iLCJQcm9wVHlwZXMiLCJBYnN0cmFjdFByb2plY3QiLCJwcm9wcyIsInRpdGxlIiwic3ViaGVhZGVyIiwiaW1nU3JjIiwiY2hpbGRyZW4iLCJsaXZlU2l0ZSIsImdpdEh1YiIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJQcm9qZWN0QnV0dG9uIiwidXJsIiwidGV4dCIsIlNpdGVJbWciLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBR3JCLEFBQU8sQUFFTCxBQUNBLEFBQ0E7Ozs7QUFFRixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztBQVJQOzs7SUFVcUIsQTs7Ozs7Ozs7Ozs7NkJBUVYsQUFFUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLGtDQUFXLE9BQU8sS0FBQSxBQUFLLE1BQXhCLEFBQThCLEFBQ2xCO21CQUFXLEtBQUEsQUFBSyxNQUQ1QixBQUNrQztvQkFEbEM7c0JBREYsQUFDRSxBQUdBO0FBSEE7MEJBR0MsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBSyxLQUFBLEFBQUssTUFBZixBQUFxQixBQUNoQjthQUFLLEtBQUEsQUFBSyxNQURmLEFBQ3FCO29CQURyQjtzQkFMSixBQUlFLEFBQ0UsQUFJRjtBQUpFOzJCQUlGLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQVZWLEFBU0UsQUFDYyxBQUdkLDJCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHVDQUNFLEFBQUMsaUJBQWMsS0FBSyxZQUFZLEtBQUEsQUFBSyxNQUFyQyxBQUEyQyxBQUM1QjtjQURmLEFBQ29CO29CQURwQjtzQkFERixBQUNFLEFBRUE7QUFGQTt3Q0FFQSxBQUFDLGlCQUFjLEtBQUssS0FBQSxBQUFLLE1BQXpCLEFBQStCLEFBQ2hCO2NBRGYsQUFDb0I7b0JBRHBCO3NCQWpCTixBQUNFLEFBYUUsQUFHRSxBQU1QO0FBTk87Ozs7OztBLEFBM0JtQzs7QSxBQUF4QixnQixBQUVaO1NBQ0Usb0JBQUEsQUFBVSxPQURBLEFBQ08sQUFDeEI7YUFBVyxvQkFBQSxBQUFVLE9BRkosQUFFVyxBQUM1QjtVQUFRLG9CQUFBLEFBQVUsTyxBQUhELEFBR1E7QUFIUixBQUNqQjtrQkFIaUIsQTs7O0FBb0NyQixTQUFBLEFBQVMsY0FBVCxBQUF1QixPQUFPLEFBQzVCO01BQUksTUFBQSxBQUFNLE9BQU8sTUFBakIsQUFBdUIsTUFBTSxBQUMzQjsyQkFDRSxjQUFBLE9BQUcsTUFBTSxNQUFULEFBQWU7a0JBQWY7b0JBQUEsQUFDRTtBQURGO0tBQUEsa0JBQ0UsQUFBQyxrQ0FBTyxRQUFSO2tCQUFBO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBOztrQkFBQTtvQkFBQSxBQUNHO0FBREg7QUFBQSxhQUhOLEFBQ0UsQUFDRSxBQUNFLEFBQ1MsQUFLaEI7QUFWRCxTQVVPLEFBQ0w7V0FBQSxBQUFRLEFBQ1Q7QUFDRjs7O0FBRUQ7QUFDQSxJQUFNLFVBQVUsMkJBQVYsQUFBaUIsSUFBdkIiLCJmaWxlIjoiQWJzdHJhY3RQcm9qZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/coleinman/Programs/cole-inman/components/sections/projects/AbstractProject.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/coleinman/Programs/cole-inman/components/sections/projects/AbstractProject.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xYjBmNmIxNzdlY2I0NmJiM2VkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWN0aW9ucy9wcm9qZWN0cy9BYnN0cmFjdFByb2plY3QuanM/M2NhYzNkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHdlYnNob3RzIGZyb20gJy4uLy4uLy4uL3V0aWwvd2Vic2hvdHMnXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBDYXJkLFxue1xuICBDYXJkQ29udGVudCxcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZEFjdGlvbnNcbn0gZnJvbSAnbWF0ZXJpYWwtdWkvQ2FyZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFByb2plY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzdWJoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbWdTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkPlxuICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgc3ViaGVhZGVyPXt0aGlzLnByb3BzLnN1YmhlYWRlcn0vPlxuXG4gICAgICAgIDxTaXRlSW1nPlxuICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltZ1NyY31cbiAgICAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy50aXRsZX0vPlxuICAgICAgICA8L1NpdGVJbWc+XG5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0NhcmRDb250ZW50PlxuXG4gICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICA8UHJvamVjdEJ1dHRvbiB1cmw9e1wiaHR0cDovL1wiICsgdGhpcy5wcm9wcy5saXZlU2l0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiTGl2ZSBTaXRlXCIvPlxuICAgICAgICAgIDxQcm9qZWN0QnV0dG9uIHVybD17dGhpcy5wcm9wcy5naXRIdWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkdpdGh1YiBSZXBvXCIvPlxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxuXG4gICAgICA8L0NhcmQ+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIFByb2plY3RCdXR0b24ocHJvcHMpIHtcbiAgaWYgKHByb3BzLnVybCAmJiBwcm9wcy50ZXh0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3Byb3BzLnVybH0+XG4gICAgICAgIDxCdXR0b24gcmFpc2VkPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge3Byb3BzLnRleHR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvYT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChudWxsKVxuICB9XG59XG5cbi8vIFN0eWxlc1xuY29uc3QgU2l0ZUltZyA9IHN0eWxlZC5kaXZgXG4gIGltZyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJvamVjdHMvQWJzdHJhY3RQcm9qZWN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFNQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFUQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQURBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFEQTtBQUlBO0FBSkE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBREE7QUFFQTtBQUZBO0FBRUE7QUFDQTtBQURBO0FBTUE7QUFOQTs7Ozs7Ozs7O0FBeEJBO0FBQ0E7QUFDQTtBQUZBOzs7O0FBaUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFKQTtBQVlBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==