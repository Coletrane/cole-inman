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

var _styles = require("../../../util/styles");

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/coleinman/Programs/cole-inman/components/sections/skills/Skill.js";

// Components


var Skill = function (_Component) {
  (0, _inherits3.default)(Skill, _Component);

  function Skill() {
    (0, _classCallCheck3.default)(this, Skill);

    return (0, _possibleConstructorReturn3.default)(this, (Skill.__proto__ || (0, _getPrototypeOf2.default)(Skill)).apply(this, arguments));
  }

  (0, _createClass3.default)(Skill, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { style: listItemStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_reactResponsive2.default, { query: _styles.mediaQueries.mobileAndDesktop.mobile, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("img", { src: this.imgSrc,
        style: skillImgStyle({
          width: this.props.mobile
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement(_reactResponsive2.default, { query: _styles.mediaQueries.mobileAndDesktop.desktop, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement("img", { src: this.imgSrc,
        style: skillImgStyle({
          width: this.props.desktop
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), _react2.default.createElement("div", { style: skillTitleStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, " ", this.props.name, " "));
    }
  }, {
    key: "imgSrc",
    get: function get() {
      var filename = void 0;
      if (this.props.name.includes("(")) {
        filename = this.props.name.split(" ")[0].toLowerCase();
      } else {
        filename = this.props.name.split(" ").join("").toLowerCase();
      }

      return "/static/img/logos/" + filename + ".png";
    }
  }]);

  return Skill;
}(_react.Component);

Skill.propTypes = {
  name: _propTypes2.default.string.isRequired,
  desktop: _propTypes2.default.string.isRequired,
  mobile: _propTypes2.default.string.isRequired
};
exports.default = Skill;


var listItemStyle = {
  padding: "5px",
  borderRadius: "5px"
};

var skillTitleStyle = {
  margin: "0"
};

var skillImgStyle = function skillImgStyle(props) {
  width: props.width;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvc2tpbGxzL1NraWxsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibWVkaWFRdWVyaWVzIiwiTWVkaWFRdWVyeSIsIlNraWxsIiwibGlzdEl0ZW1TdHlsZSIsIm1vYmlsZUFuZERlc2t0b3AiLCJtb2JpbGUiLCJpbWdTcmMiLCJza2lsbEltZ1N0eWxlIiwid2lkdGgiLCJwcm9wcyIsImRlc2t0b3AiLCJza2lsbFRpdGxlU3R5bGUiLCJuYW1lIiwiZmlsZW5hbWUiLCJpbmNsdWRlcyIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJqb2luIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUNQLEFBQVEsQUFBbUI7O0FBRzNCLEFBQU87Ozs7Ozs7O0FBRFA7OztJQUdxQixBOzs7Ozs7Ozs7Ozs2QkFtQlYsQUFDUDs2QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsMkNBQVcsT0FBTyxxQkFBQSxBQUFhLGlCQUFoQyxBQUFpRDtvQkFBakQ7c0JBQUEsQUFDQTtBQURBO2dEQUNLLEtBQUssS0FBVixBQUFlLEFBQ1Y7O2lCQUNTLEtBQUEsQUFBSyxNQUZuQixBQUNZLEFBQWMsQUFDRDtBQURDLEFBQ25CLFNBREs7b0JBRFo7c0JBRkYsQUFDRSxBQUNBLEFBS0E7QUFMQTsyQkFLQSxBQUFDLDJDQUFXLE9BQU8scUJBQUEsQUFBYSxpQkFBaEMsQUFBaUQ7b0JBQWpEO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxLQUFLLEtBQVYsQUFBZSxBQUNWOztpQkFDUyxLQUFBLEFBQUssTUFGbkIsQUFDWSxBQUFjLEFBQ0Q7QUFEQyxBQUNuQixTQURLO29CQURaO3NCQVJKLEFBT0UsQUFDRSxBQUtGO0FBTEU7MkJBS0YsY0FBQSxTQUFLLE9BQUwsQUFBWTtvQkFBWjtzQkFBQTtBQUFBO1NBQStCLFVBQUEsQUFBSyxNQUFwQyxBQUEwQyxNQWQ5QyxBQUNFLEFBYUUsQUFHTDs7Ozt3QkE3QlksQUFDWDtVQUFJLGdCQUFKLEFBQ0E7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsU0FBcEIsQUFBSSxBQUF5QixNQUFNLEFBQ2pDO21CQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixNQUFoQixBQUFzQixLQUF0QixBQUEyQixHQUF0QyxBQUFXLEFBQThCLEFBQzFDO0FBRkQsYUFFTyxBQUNMO21CQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixNQUFoQixBQUFzQixLQUF0QixBQUEyQixLQUEzQixBQUFnQyxJQUEzQyxBQUFXLEFBQW9DLEFBQ2hEO0FBRUQ7O29DQUFBLEFBQTRCLFdBQzdCOzs7OztBQWpCZ0MsQTs7QSxBQUFkLE1BRVosQTtRQUNDLG9CQUFBLEFBQVUsT0FEQyxBQUNNLEFBQ3ZCO1dBQVMsb0JBQUEsQUFBVSxPQUZGLEFBRVMsQUFDMUI7VUFBUSxvQkFBQSxBQUFVLE9BSEQsQUFHUSxBO0FBSFIsQUFDakI7a0JBSGlCLEE7OztBQXdDckIsSUFBTTtXQUFnQixBQUNYLEFBQ1Q7Z0JBRkYsQUFBc0IsQUFFTjtBQUZNLEFBQ3BCOztBQUlGLElBQU07VUFBTixBQUF3QixBQUNkO0FBRGMsQUFDdEI7O0FBR0YsSUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0IsY0FBQSxBQUFDLE9BQVUsQUFDL0I7U0FBTyxNQUFBLEFBQU0sQUFDZDtBQUZEIiwiZmlsZSI6IlNraWxsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9