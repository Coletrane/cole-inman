"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gitHub = undefined;

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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require("../util/styles.js");

var _functions = require("../util/functions.js");

var _IconButton = require("material-ui/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _fa = require("react-icons/lib/fa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/Navigation.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  \n"], ["\n  \n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  width: 100%;\n    \n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  \n  background-color: ", ";\n  box-shadow: ", ";\n  \n"], ["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  width: 100%;\n    \n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  \n  background-color: ", ";\n  box-shadow: ", ";\n  \n"]);
// Components

// Icon Components


var linkedIn = "https://www.linkedin.com/in/cole-inman-61738565/";
var gitHub = exports.gitHub = "https://github.com/coletrane/"; // exporting this for constructing github links in components
var facebook = "https://www.facebook.com/uhmcole";
var email = "eloc49@gmail.com";

var iconColor = "white";

var iconDimensions = "1.5em";

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
    key: "onResize",
    value: function onResize() {
      this.setState({
        mobile: (0, _functions.isMobile)()
      });
    }

    // Lifecycle

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (process.browser) {
        window.addEventListener("resize", this.onResize.bind(this));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (process.browser) {
        window.removeEventListener("resize", this.onResize.bind(this));
      }
    }

    // Check if we are under the mobile threshold to avoid needless calls to render

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _functions.isMobile)() !== this.state.mobile;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.displayTopNav) {
        return _react2.default.createElement(TopNav, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, _react2.default.createElement(NavButtons, { iconColor: this.iconColor, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }));
      } else if (this.displayBottomNav) {
        return _react2.default.createElement(BottomNav, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, _react2.default.createElement(NavButtons, { iconColor: this.iconColor, __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "displayTopNav",
    get: function get() {
      return !this.state.mobile && !this.props.bottom;
    }
  }, {
    key: "displayBottomNav",
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
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, _react2.default.createElement("a", { href: linkedIn, __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, _react2.default.createElement(_IconButton2.default, { "aria-label": "LinkedIn", __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, _react2.default.createElement(_fa.FaLinkedinSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions, __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }))), _react2.default.createElement("a", { href: gitHub, __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, _react2.default.createElement(_IconButton2.default, { "aria-label": "Github", __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, _react2.default.createElement(_fa.FaGithubSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions, __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }))), _react2.default.createElement("a", { href: facebook, __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, _react2.default.createElement(_IconButton2.default, { "aria-label": "Facebook", __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, _react2.default.createElement(_fa.FaFacebookSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions, __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }))), _react2.default.createElement("a", { href: "mailto:" + email, __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, _react2.default.createElement(_IconButton2.default, { "aria-label": "Email", __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, _react2.default.createElement(_fa.FaEnvelopeSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions, __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }))));
}

// Styles
var TopNav = _styledComponents2.default.div(_templateObject);

// TODO: get them equidistant from eachother
var BottomNav = _styledComponents2.default.div(_templateObject2, _styles.colors.barColor, _styles.boxShadow);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImJveFNoYWRvdyIsImNvbG9ycyIsImlzTW9iaWxlIiwiSWNvbkJ1dHRvbiIsIkZhRW52ZWxvcGVTcXVhcmUiLCJGYUZhY2Vib29rU3F1YXJlIiwiRmFHaXRodWJTcXVhcmUiLCJGYUxpbmtlZGluU3F1YXJlIiwibGlua2VkSW4iLCJnaXRIdWIiLCJmYWNlYm9vayIsImVtYWlsIiwiaWNvbkNvbG9yIiwiaWNvbkRpbWVuc2lvbnMiLCJOYXZpZ2F0aW9uIiwicHJvcHMiLCJzdGF0ZSIsIm1vYmlsZSIsInNldFN0YXRlIiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25SZXNpemUiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsImRpc3BsYXlUb3BOYXYiLCJkaXNwbGF5Qm90dG9tTmF2IiwiYm90dG9tIiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJOYXZCdXR0b25zIiwiVG9wTmF2IiwiZGl2IiwiQm90dG9tTmF2IiwiYmFyQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQVEsQUFBVyxBQUFhOztBQUNoQyxBQUFRLEFBQWU7O0FBRXZCLEFBQU87Ozs7QUFFUCxBQUFRLEFBQWtCLEFBQWtCLEFBQWdCOzs7Ozs7OztBQUg1RDs7QUFFQTs7O0FBR0EsSUFBTSxXQUFOLEFBQWlCLEFBQ2pCO0FBQU8sSUFBTSwwQkFBTixBLEFBQWUsaUNBQWdDO0FBQ3RELElBQU0sV0FBTixBQUFpQjtBQUNqQixJQUFNLFFBQU4sQUFBYzs7QUFFZCxJQUFNLFlBQU4sQUFBa0I7O0FBRWxCLElBQU0saUJBQU4sQUFBdUI7O0ksQUFFRjtzQ0FNbkI7O3NCQUFBLEFBQVksT0FBTzt3Q0FBQTs7OElBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7Y0FGWSxBQUVqQixBQUFhLEFBQ0g7QUFERyxBQUNYO1dBRUg7Ozs7OytCQVVVLEFBQ1Q7V0FBQSxBQUFLO2dCQUFMLEFBQWMsQUFDSixBQUVYO0FBSGUsQUFDWjtBQUlKOzs7Ozs7d0NBQ29CLEFBQ2xCO1VBQUksUUFBSixBQUFZLFNBQVMsQUFDbkI7ZUFBQSxBQUFPLGlCQUFQLEFBQXdCLFVBQVUsS0FBQSxBQUFLLFNBQUwsQUFBYyxLQUFoRCxBQUFrQyxBQUFtQixBQUN0RDtBQUNGOzs7OzJDQUVzQixBQUNyQjtVQUFJLFFBQUosQUFBWSxTQUFTLEFBQ25CO2VBQUEsQUFBTyxvQkFBUCxBQUEyQixVQUFVLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBbkQsQUFBcUMsQUFBbUIsQUFDekQ7QUFDRjtBQUVEOzs7Ozs7MEMsQUFDc0IsV0FBVyxBLFdBQVcsQUFDMUM7YUFBUSwrQkFBZSxLQUFBLEFBQUssTUFBNUIsQUFBa0MsQUFDbkM7Ozs7NkJBRVEsQUFDUDtVQUFJLEtBQUosQUFBUyxlQUFlLEFBQ3RCOytCQUNHLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLFNBQUEsZ0NBQ0UsQUFBQyxjQUFXLFdBQVcsS0FBdkIsQUFBNEI7c0JBQTVCO3dCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7O0FBSE4saUJBTVcsS0FBSixBQUFTLGtCQUFrQixBQUNoQzsrQkFDRyxjQUFEOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGdDQUNFLEFBQUMsY0FBVyxXQUFXLEtBQXZCLEFBQTRCO3NCQUE1Qjt3QkFGSixBQUNFLEFBQ0UsQUFHTDtBQUhLOztBQUhDLE9BQUEsTUFNQSxBQUNMO2VBQUEsQUFBUSxBQUNUO0FBQ0Y7Ozs7d0JBaERtQixBQUNsQjthQUFPLENBQUMsS0FBQSxBQUFLLE1BQU4sQUFBWSxVQUFVLENBQUMsS0FBQSxBQUFLLE1BQW5DLEFBQXlDLEFBQzFDOzs7O3dCQUVzQixBQUNyQjthQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBVSxLQUFBLEFBQUssTUFBakMsQUFBdUMsQUFDeEM7Ozs7O0EsQUFuQnFDOztBQUFuQixBLFdBRVosQTtVQUNHLG9CQUFBLEFBQVUsS0FERCxBQUNNLEE7QUFETixBQUNqQjtrQkFIaUIsQTs7O0FBZ0VyQixTQUFBLEFBQVMsYUFBYSxBQUNwQjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVM7Z0JBQVQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsc0NBQVcsY0FBWixBQUF1QjtnQkFBdkI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsc0NBQWlCLE1BQWxCLEFBQXdCLEFBQ047WUFEbEIsQUFDMEIsQUFDUjtXQUZsQixBQUV5QjtnQkFGekI7a0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFLSjtBQUxJO3dCQUtKLGNBQUEsT0FBRyxNQUFILEFBQVM7Z0JBQVQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsc0NBQVcsY0FBWixBQUF1QjtnQkFBdkI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsb0NBQWUsTUFBaEIsQUFBc0IsQUFDTjtZQURoQixBQUN3QixBQUNSO1dBRmhCLEFBRXVCO2dCQUZ2QjtrQkFWTixBQVFFLEFBQ0UsQUFDRSxBQUtKO0FBTEk7d0JBS0osY0FBQSxPQUFHLE1BQUgsQUFBUztnQkFBVDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxzQ0FBVyxjQUFaLEFBQXVCO2dCQUF2QjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxzQ0FBaUIsTUFBbEIsQUFBd0IsQUFDTjtZQURsQixBQUMwQixBQUNSO1dBRmxCLEFBRXlCO2dCQUZ6QjtrQkFqQk4sQUFlRSxBQUNFLEFBQ0UsQUFLSjtBQUxJO3dCQUtKLGNBQUEsT0FBRyxNQUFNLFlBQVQsQUFBcUI7Z0JBQXJCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHNDQUFXLGNBQVosQUFBdUI7Z0JBQXZCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHNDQUFpQixNQUFsQixBQUF3QixBQUNOO1lBRGxCLEFBQzBCLEFBQ1I7V0FGbEIsQUFFeUI7Z0JBRnpCO2tCQXpCUixBQUNFLEFBc0JFLEFBQ0UsQUFDRSxBQU9UO0FBUFM7Ozs7QUFTVjtBQUNBLElBQU0sU0FBUywyQkFBVCxBQUFnQixJQUF0Qjs7QUFJQTtBQUNBLElBQU0sWUFBWSwyQkFBWixBQUFtQixzQkFVSCxlQVZ0QixBQUFNLEFBVXVCLEFBQ2IiLCJmaWxlIjoiTmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29sZWlubWFuL1Byb2dyYW1zL2NvbGUtaW5tYW4ifQ==