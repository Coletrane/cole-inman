"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Button = require("material-ui/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Card = require("../../generic/Card");

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/sections/projects/AbstractProject.js";

// Components


var AbstractProject = function (_Component) {
  (0, _inherits3.default)(AbstractProject, _Component);

  function AbstractProject() {
    (0, _classCallCheck3.default)(this, AbstractProject);

    return (0, _possibleConstructorReturn3.default)(this, (AbstractProject.__proto__ || (0, _getPrototypeOf2.default)(AbstractProject)).apply(this, arguments));
  }

  (0, _createClass3.default)(AbstractProject, [{
    key: "render",
    value: function render() {

      return _react2.default.createElement(_Card2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("img", { src: this.props.imgSrc,
        alt: this.props.title,
        style: projectImgStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), this.props.children, _react2.default.createElement(ProjectButton, { url: "http://" + this.props.liveSite,
        text: "Live Site", __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(ProjectButton, { url: this.props.gitHub,
        text: "Github Repo", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }));
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
    return _react2.default.createElement("a", { href: props.url, __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }, _react2.default.createElement(_Button2.default, { raised: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, _react2.default.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, props.text)));
  } else {
    return null;
  }
}

// Styles
var projectImgStyle = {
  width: "50%",
  height: "auto"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvcHJvamVjdHMvQWJzdHJhY3RQcm9qZWN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQnV0dG9uIiwiQ2FyZCIsIkFic3RyYWN0UHJvamVjdCIsInByb3BzIiwiaW1nU3JjIiwidGl0bGUiLCJwcm9qZWN0SW1nU3R5bGUiLCJjaGlsZHJlbiIsImxpdmVTaXRlIiwiZ2l0SHViIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInN1YmhlYWRlciIsIlByb2plY3RCdXR0b24iLCJ1cmwiLCJ0ZXh0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUdQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7O0FBRmpCOzs7SSxBQUlxQjs7Ozs7Ozs7Ozs7NkJBUVYsQUFFUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFHRTtBQUhGO0FBQUEsT0FBQSx5Q0FHTyxLQUFLLEtBQUEsQUFBSyxNQUFmLEFBQXFCLEFBQ2hCO2FBQUssS0FBQSxBQUFLLE1BRGYsQUFDcUIsQUFDaEI7ZUFGTCxBQUVZO29CQUZaO3NCQUhGLEFBR0UsQUFHQztBQUhEO2VBR0MsQUFBSyxNQU5SLEFBTWMsQUFDWix3Q0FBQSxBQUFDLGlCQUFjLEtBQUssWUFBWSxLQUFBLEFBQUssTUFBckMsQUFBMkMsQUFDNUI7Y0FEZixBQUNvQjtvQkFEcEI7c0JBUEYsQUFPRSxBQUVBO0FBRkE7d0NBRUEsQUFBQyxpQkFBYyxLQUFLLEtBQUEsQUFBSyxNQUF6QixBQUErQixBQUNoQjtjQURmLEFBQ29CO29CQURwQjtzQkFWSixBQUNFLEFBU0UsQUFJTDtBQUpLOzs7Ozs7QSxBQXBCcUM7O0EsQUFBeEIsZ0JBRVosQTtTQUNFLG9CQUFBLEFBQVUsT0FEQSxBQUNPLEFBQ3hCO2FBQVcsb0JBQUEsQUFBVSxPQUZKLEFBRVcsQUFDNUI7VUFBUSxvQkFBQSxBQUFVLE9BSEQsQUFHUSxBO0FBSFIsQUFDakI7a0IsQUFIaUI7OztBQTJCckIsU0FBQSxBQUFTLGNBQVQsQUFBdUIsT0FBTyxBQUM1QjtNQUFJLE1BQUEsQUFBTSxPQUFPLE1BQWpCLEFBQXVCLE1BQU0sQUFDM0I7MkJBQ0UsY0FBQSxPQUFHLE1BQU0sTUFBVCxBQUFlO2tCQUFmO29CQUFBLEFBQ0U7QUFERjtLQUFBLGtCQUNFLEFBQUMsa0NBQU8sUUFBUjtrQkFBQTtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRztBQURIO0FBQUEsYUFITixBQUNFLEFBQ0UsQUFDRSxBQUNTLEFBS2hCO0FBVkQsU0FVTyxBQUNMO1dBQUEsQUFBUSxBQUNUO0FBQ0Y7OztBQUVEO0FBQ0EsSUFBTTtTQUFrQixBQUNmLEFBQ1A7VUFGRixBQUF3QixBQUVkO0FBRmMsQUFDdEIiLCJmaWxlIjoiQWJzdHJhY3RQcm9qZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9