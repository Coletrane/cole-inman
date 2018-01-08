"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require("material-ui/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Card = require("../../generic/Card");

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/sections/projects/AbstractProject.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    width: 50%;\n    height: auto;\n"], ["\n    width: 50%;\n    height: auto;\n"]);
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
      }, _react2.default.createElement(SiteImg, { src: this.props.imgSrc,
        alt: this.props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), this.props.children, _react2.default.createElement(ProjectButton, { url: "http://" + this.props.liveSite,
        text: "Live Site", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(ProjectButton, { url: this.props.gitHub,
        text: "Github Repo", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
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
        lineNumber: 37
      }
    }, _react2.default.createElement(_Button2.default, { raised: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }, _react2.default.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, props.text)));
  } else {
    return null;
  }
}

// Styles
var SiteImg = _styledComponents2.default.img(_templateObject);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvcHJvamVjdHMvQWJzdHJhY3RQcm9qZWN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiUHJvcFR5cGVzIiwiQnV0dG9uIiwiQ2FyZCIsIkFic3RyYWN0UHJvamVjdCIsInByb3BzIiwiaW1nU3JjIiwidGl0bGUiLCJjaGlsZHJlbiIsImxpdmVTaXRlIiwiZ2l0SHViIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInN1YmhlYWRlciIsIlByb2plY3RCdXR0b24iLCJ1cmwiLCJ0ZXh0IiwiU2l0ZUltZyIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFGakI7OztJLEFBSXFCOzs7Ozs7Ozs7Ozs2QkFRVixBQUVQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUdFO0FBSEY7QUFBQSxPQUFBLGdDQUdFLEFBQUMsV0FBUSxLQUFLLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUNoQjthQUFLLEtBQUEsQUFBSyxNQURuQixBQUN5QjtvQkFEekI7c0JBSEYsQUFHRSxBQUVDO0FBRkQ7ZUFFQyxBQUFLLE1BTFIsQUFLYyxBQUNaLHdDQUFBLEFBQUMsaUJBQWMsS0FBSyxZQUFZLEtBQUEsQUFBSyxNQUFyQyxBQUEyQyxBQUM1QjtjQURmLEFBQ29CO29CQURwQjtzQkFORixBQU1FLEFBRUE7QUFGQTt3Q0FFQSxBQUFDLGlCQUFjLEtBQUssS0FBQSxBQUFLLE1BQXpCLEFBQStCLEFBQ2hCO2NBRGYsQUFDb0I7b0JBRHBCO3NCQVRKLEFBQ0UsQUFRRSxBQUlMO0FBSks7Ozs7OztBLEFBbkJxQzs7QSxBQUF4QixnQixBQUVaO1NBQ0Usb0JBQUEsQUFBVSxPQURBLEFBQ08sQUFDeEI7YUFBVyxvQkFBQSxBQUFVLE9BRkosQUFFVyxBQUM1QjtVQUFRLG9CQUFBLEFBQVUsTyxBQUhELEFBR1E7QUFIUixBQUNqQjtrQixBQUhpQjs7O0FBMEJyQixTQUFBLEFBQVMsY0FBVCxBQUF1QixPQUFPLEFBQzVCO01BQUksTUFBQSxBQUFNLE9BQU8sTUFBakIsQUFBdUIsTUFBTSxBQUMzQjsyQkFDRSxjQUFBLE9BQUcsTUFBTSxNQUFULEFBQWU7a0JBQWY7b0JBQUEsQUFDRTtBQURGO0tBQUEsa0JBQ0UsQUFBQyxrQ0FBTyxRQUFSO2tCQUFBO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBOztrQkFBQTtvQkFBQSxBQUNHO0FBREg7QUFBQSxhQUhOLEFBQ0UsQUFDRSxBQUNFLEFBQ1MsQUFLaEI7QUFWRCxTQVVPLEFBQ0w7V0FBQSxBQUFRLEFBQ1Q7QUFDRjs7O0FBRUQ7QUFDQSxJQUFNLFVBQVUsMkJBQVYsQUFBaUIsSUFBdkIiLCJmaWxlIjoiQWJzdHJhY3RQcm9qZWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9