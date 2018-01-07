'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gitHub = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../util/styles.js');

var _functions = require('../util/functions.js');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _fa = require('react-icons/lib/fa');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/Navigation.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  float: right;\n  text-align: right;\n'], ['\n  float: right;\n  text-align: right;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  width: 100%;\n    \n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  \n  background-color: ', ';\n  box-shadow: ', ';\n  \n'], ['\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  width: 100%;\n    \n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  \n  background-color: ', ';\n  box-shadow: ', ';\n  \n']);

// Components


// Icon Components


var linkedIn = 'https://www.linkedin.com/in/cole-inman-61738565/';
var gitHub = exports.gitHub = 'https://github.com/coletrane/'; // exporting this for constructing github links in components
var facebook = 'https://www.facebook.com/uhmcole';
var email = 'eloc49@gmail.com';

var iconColor = 'white';

var iconDimensions = '1.5em';

var Navigation = function (_Component) {
  (0, _inherits3.default)(Navigation, _Component);

  function Navigation(props) {
    (0, _classCallCheck3.default)(this, Navigation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call(this, props));

    _this.state = {
      mobile: (0, _functions.isMobile)()
    };
    return _this;
  }

  (0, _createClass3.default)(Navigation, [{
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
        window.addEventListener('resize', this.onResize.bind(this));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (process.browser) {
        window.removeEventListener('resize', this.onResize.bind(this));
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
      if (this.displayTopNav) {
        return _react2.default.createElement(TopNav, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _react2.default.createElement(NavButtons, { iconColor: this.iconColor, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }));
      } else if (this.displayBottomNav) {
        return _react2.default.createElement(BottomNav, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, _react2.default.createElement(NavButtons, { iconColor: this.iconColor, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }));
      } else {
        return null;
      }
    }
  }, {
    key: 'displayTopNav',
    get: function get() {
      return !this.state.mobile && !this.props.bottom;
    }
  }, {
    key: 'displayBottomNav',
    get: function get() {
      return this.state.mobile && this.props.bottom;
    }
  }]);

  return Navigation;
}(_react.Component);

Navigation.propTypes = {
  bottom: _propTypes2.default.bool.isRequired
};
exports.default = Navigation;


function NavButtons() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, _react2.default.createElement('a', { href: linkedIn, __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, _react2.default.createElement(_IconButton2.default, { 'aria-label': 'LinkedIn', __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, _react2.default.createElement(_fa.FaLinkedinSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions, __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }))), _react2.default.createElement('a', { href: gitHub, __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, _react2.default.createElement(_IconButton2.default, { 'aria-label': 'Github', __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, _react2.default.createElement(_fa.FaGithubSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions, __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }))), _react2.default.createElement('a', { href: facebook, __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, _react2.default.createElement(_IconButton2.default, { 'aria-label': 'Facebook', __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, _react2.default.createElement(_fa.FaFacebookSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions, __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }))), _react2.default.createElement('a', { href: 'mailto:' + email, __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, _react2.default.createElement(_IconButton2.default, { 'aria-label': 'Email', __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, _react2.default.createElement(_fa.FaEnvelopeSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions, __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }))));
}

// Styles
var TopNav = _styledComponents2.default.div(_templateObject);

// TODO: get them equidistant from eachother
var BottomNav = _styledComponents2.default.div(_templateObject2, _styles.colors.barColor, _styles.boxShadow);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNvbG9ycyIsImJveFNoYWRvdyIsImlzTW9iaWxlIiwiSWNvbkJ1dHRvbiIsIkZhTGlua2VkaW5TcXVhcmUiLCJGYUdpdGh1YlNxdWFyZSIsIkZhRmFjZWJvb2tTcXVhcmUiLCJGYUVudmVsb3BlU3F1YXJlIiwibGlua2VkSW4iLCJnaXRIdWIiLCJmYWNlYm9vayIsImVtYWlsIiwiaWNvbkNvbG9yIiwiaWNvbkRpbWVuc2lvbnMiLCJOYXZpZ2F0aW9uIiwicHJvcHMiLCJzdGF0ZSIsIm1vYmlsZSIsInNldFN0YXRlIiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25SZXNpemUiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsImRpc3BsYXlUb3BOYXYiLCJkaXNwbGF5Qm90dG9tTmF2IiwiYm90dG9tIiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJOYXZCdXR0b25zIiwiVG9wTmF2IiwiZGl2IiwiQm90dG9tTmF2IiwiYmFyQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFTLEFBQVEsQUFBaUI7O0FBQ2xDLEFBQVMsQUFBZ0I7O0FBR3pCLEFBQU87Ozs7QUFHUCxBQUFTLEFBQ1QsQUFBUyxBQUNULEFBQVMsQUFDVCxBQUFTOzs7Ozs7Ozs7QUFQVDs7O0FBR0E7OztBQU1BLElBQU0sV0FBTixBQUFpQixBQUNqQjtBQUFPLElBQU0sMEJBQVMsQSxBQUFmLGlDQUErQztBQUN0RCxJQUFNLFdBQU4sQUFBaUI7QUFDakIsSUFBTSxRQUFOLEFBQWM7O0FBRWQsSUFBTSxZQUFOLEFBQWtCOztBQUVsQixJQUFNLGlCQUFOLEFBQXVCOztJQUVGLEE7c0NBTW5COztzQkFBQSxBQUFZLE9BQU87d0NBQUE7OzhJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2NBRlksQUFFakIsQUFBYSxBQUNIO0FBREcsQUFDWDtXQUVIOzs7OzsrQkFVVSxBQUNUO1dBQUEsQUFBSztnQkFBTCxBQUFjLEFBQ0osQUFFWDtBQUhlLEFBQ1o7QUFJSjs7Ozs7O3dDQUNvQixBQUNsQjtVQUFJLFFBQUosQUFBWSxTQUFTLEFBQ25CO2VBQUEsQUFBTyxpQkFBUCxBQUF3QixVQUFVLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBaEQsQUFBa0MsQUFBbUIsQUFDdEQ7QUFDRjs7OzsyQ0FFc0IsQUFDckI7VUFBSSxRQUFKLEFBQVksU0FBUyxBQUNuQjtlQUFBLEFBQU8sb0JBQVAsQUFBMkIsVUFBVSxLQUFBLEFBQUssU0FBTCxBQUFjLEtBQW5ELEFBQXFDLEFBQW1CLEFBQ3pEO0FBQ0Y7QUFFRDs7Ozs7OzBDLEFBQ3NCLFdBQVcsQSxXQUFXLEFBQzFDO2FBQVEsK0JBQWUsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLEFBQ25DOzs7OzZCQUVRLEFBQ1A7VUFBSSxLQUFKLEFBQVMsZUFBZSxBQUN0QjsrQkFDRyxjQUFEOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGdDQUNFLEFBQUMsY0FBVyxXQUFXLEtBQXZCLEFBQTRCO3NCQUE1Qjt3QkFGSixBQUNFLEFBQ0UsQUFHTDtBQUhLOztBQUhOLGlCQU1XLEtBQUosQUFBUyxrQkFBa0IsQUFDaEM7K0JBQ0csY0FBRDs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxnQ0FDRSxBQUFDLGNBQVcsV0FBVyxLQUF2QixBQUE0QjtzQkFBNUI7d0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISzs7QUFIQyxPQUFBLE1BTUEsQUFDTDtlQUFBLEFBQVEsQUFDVDtBQUNGOzs7O3dCQWhEbUIsQUFDbEI7YUFBTyxDQUFDLEtBQUEsQUFBSyxNQUFOLEFBQVksVUFBVSxDQUFDLEtBQUEsQUFBSyxNQUFuQyxBQUF5QyxBQUMxQzs7Ozt3QkFFc0IsQUFDckI7YUFBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVUsS0FBQSxBQUFLLE1BQWpDLEFBQXVDLEFBQ3hDOzs7OztBLEFBbkJxQzs7QUFBbkIsQSxXQUVaLEE7VUFDRyxvQkFBQSxBQUFVLEtBREQsQUFDTSxBO0FBRE4sQUFDakI7a0JBSGlCLEE7OztBQWdFckIsU0FBQSxBQUFTLGFBQWEsQUFDcEI7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBLE9BQUcsTUFBSCxBQUFTO2dCQUFUO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHNDQUFXLGNBQVosQUFBdUI7Z0JBQXZCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHNDQUFpQixNQUFsQixBQUF3QixBQUNOO1lBRGxCLEFBQzBCLEFBQ1I7V0FGbEIsQUFFeUI7Z0JBRnpCO2tCQUhOLEFBQ0UsQUFDRSxBQUNFLEFBS0o7QUFMSTt3QkFLSixjQUFBLE9BQUcsTUFBSCxBQUFTO2dCQUFUO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHNDQUFXLGNBQVosQUFBdUI7Z0JBQXZCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLG9DQUFlLE1BQWhCLEFBQXNCLEFBQ047WUFEaEIsQUFDd0IsQUFDUjtXQUZoQixBQUV1QjtnQkFGdkI7a0JBVk4sQUFRRSxBQUNFLEFBQ0UsQUFLSjtBQUxJO3dCQUtKLGNBQUEsT0FBRyxNQUFILEFBQVM7Z0JBQVQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsc0NBQVcsY0FBWixBQUF1QjtnQkFBdkI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsc0NBQWlCLE1BQWxCLEFBQXdCLEFBQ047WUFEbEIsQUFDMEIsQUFDUjtXQUZsQixBQUV5QjtnQkFGekI7a0JBakJOLEFBZUUsQUFDRSxBQUNFLEFBS0o7QUFMSTt3QkFLSixjQUFBLE9BQUcsTUFBTSxZQUFULEFBQXFCO2dCQUFyQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxzQ0FBVyxjQUFaLEFBQXVCO2dCQUF2QjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxzQ0FBaUIsTUFBbEIsQUFBd0IsQUFDTjtZQURsQixBQUMwQixBQUNSO1dBRmxCLEFBRXlCO2dCQUZ6QjtrQkF6QlIsQUFDRSxBQXNCRSxBQUNFLEFBQ0UsQUFPVDtBQVBTOzs7O0FBU1Y7QUFDQSxJQUFNLFNBQVMsMkJBQVQsQUFBZ0IsSUFBdEI7O0FBS0E7QUFDQSxJQUFNLFlBQVksMkJBQVosQUFBbUIsc0JBVUgsZUFWdEIsQUFBTSxBQVV1QixBQUNiIiwiZmlsZSI6Ik5hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvbGVpbm1hbi9Qcm9ncmFtcy9jb2xlLWlubWFuIn0=