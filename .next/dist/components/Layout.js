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

var _styles = require('../util/styles.js');

var _functions = require('../util/functions');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Navigation = require('./Navigation.js');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Header = require('./Header');

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