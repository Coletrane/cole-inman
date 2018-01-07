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

var _webshots = require('../../../util/webshots');

var _webshots2 = _interopRequireDefault(_webshots);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

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