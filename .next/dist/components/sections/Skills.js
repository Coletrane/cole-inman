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

var _functions = require('../../util/functions');

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Skill = require('./skills/Skill');

var _Skill2 = _interopRequireDefault(_Skill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/sections/Skills.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  img {\n    height: auto;\n  }\n'], ['\n  img {\n    height: auto;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  @media (min-width: ', ') {\n    width: ', ';\n  }\n  @media (max-width: ', ') {\n    width: ', ';\n  }\n'], ['\n  @media (min-width: ', ') {\n    width: ', ';\n  }\n  @media (max-width: ', ') {\n    width: ', ';\n  }\n']);

var minWidth = _functions.mobileWidth - 1 + 'px';
var maxWidth = _functions.mobileWidth + 'px';
// Components


var Skills = function (_Component) {
  (0, _inherits3.default)(Skills, _Component);

  function Skills() {
    (0, _classCallCheck3.default)(this, Skills);

    return (0, _possibleConstructorReturn3.default)(this, (Skills.__proto__ || (0, _getPrototypeOf2.default)(Skills)).apply(this, arguments));
  }

  (0, _createClass3.default)(Skills, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, ' Skills'), _react2.default.createElement(_Card2.default, { title: 'Javascript', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(SkillsStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(JsSkills, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }))));
    }
  }]);

  return Skills;
}(_react.Component);

exports.default = Skills;


var SkillsStyle = _styledComponents2.default.div(_templateObject);

var Img = _styledComponents2.default.img(_templateObject2, minWidth, function (props) {
  return props.desktop;
}, maxWidth, function (props) {
  return props.mobile;
});

function SkillListItem(props) {
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement('h6', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, ' ', props.name, ' '), _react2.default.createElement(Img, { src: props.imgSrc,
    desktop: props.desktop,
    mobile: props.mobile, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }));
}

function JsSkills() {
  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(Typescript, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), _react2.default.createElement(ReactLolNameCollision, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), _react2.default.createElement(Angular, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }));
}

function Typescript() {

  return _react2.default.createElement(SkillListItem, { name: 'Typescript',
    imgSrc: '/static/img/logos/ts.png',
    desktop: '10%',
    mobile: '15%', __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  });
}

function ReactLolNameCollision() {

  return _react2.default.createElement(SkillListItem, { name: 'React',
    imgSrc: '/static/img/logos/react.png',
    desktop: '10%',
    mobile: '15%', __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  });
}

function Angular() {

  return _react2.default.createElement(SkillListItem, { name: 'Angular',
    imgSrc: '/static/img/logos/angular.png',
    desktop: '10%',
    mobile: '15%', __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  });
}
//
//       // function GeneralSkills() {
// //   return (
// //
// //   )
// // }
//       //
//       // function BackendSkills() {
// //   return (
// //
// //   )
// // }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvU2tpbGxzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwibW9iaWxlV2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRBY3Rpb25zIiwiU2tpbGwiLCJTa2lsbHMiLCJTa2lsbHNTdHlsZSIsImRpdiIsIkltZyIsImltZyIsInByb3BzIiwiZGVza3RvcCIsIm1vYmlsZSIsIlNraWxsTGlzdEl0ZW0iLCJuYW1lIiwiaW1nU3JjIiwiSnNTa2lsbHMiLCJUeXBlc2NyaXB0IiwiUmVhY3RMb2xOYW1lQ29sbGlzaW9uIiwiQW5ndWxhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFFUCxBQUFTLEFBQW1COztBQUs1QixBQUFPLEFBRUwsQUFDQSxBQUNBOzs7O0FBRUYsQUFBTyxBQUFXOzs7Ozs7Ozs7OztBQVRsQixJQUFNLFdBQVkseUJBQUQsQUFBZSxJQUFoQyxBQUFxQztBQUNyQyxJQUFNLFdBQVcseUJBQWpCLEFBQStCO0FBQy9COzs7SSxBQVVxQjs7Ozs7Ozs7Ozs7NkJBRVYsQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFFQSw0QkFBQSxBQUFDLGdDQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsdUNBQ0UsQUFBQzs7b0JBQUQ7c0JBTlIsQUFDRSxBQUdFLEFBQ0UsQUFDRSxBQUtUO0FBTFM7QUFBQTs7Ozs7QSxBQVR3Qjs7a0IsQUFBZjs7O0FBaUJyQixJQUFNLGNBQWMsMkJBQWQsQUFBcUIsSUFBM0I7O0FBTUEsSUFBTSxpQ0FBQSxBQUFhLHNCQUFiLEFBQ2lCLFVBQ1YsaUJBQUE7U0FBUyxNQUFULEFBQWU7QUFGdEIsQ0FBTSxFQUFOLEFBSWlCLFVBQ1YsaUJBQUE7U0FBUyxNQUFULEFBQWU7QUFMNUIsQUFBTTs7QUFTTixTQUFBLEFBQVMsY0FBVCxBQUF1QixPQUFPLEFBQzVCO3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQU0sV0FBTixBQUFZLE1BRGQsQUFDRSxBQUNBLG9DQUFBLEFBQUMsT0FBSSxLQUFLLE1BQVYsQUFBZ0IsQUFDWDthQUFTLE1BRGQsQUFDb0IsQUFDZjtZQUFRLE1BRmIsQUFFbUI7Z0JBRm5CO2tCQUhKLEFBQ0UsQUFFRSxBQUtMO0FBTEs7Ozs7QUFRTixTQUFBLEFBQVMsV0FBVyxBQUNsQjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGdDQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsb0NBQ0EsQUFBQzs7Z0JBQUQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSxvQ0FDQSxBQUFDOztnQkFBRDtrQkFKSixBQUNFLEFBR0UsQUFJTDtBQUpLO0FBQUE7OztBQU1OLFNBQUEsQUFBUyxhQUFhLEFBRXBCOzt1Q0FDRSxBQUFDLGlCQUFjLE1BQWYsQUFBb0IsQUFDTDtZQURmLEFBQ3NCLEFBQ1A7YUFGZixBQUV1QixBQUNSO1lBSGYsQUFHc0I7Z0JBSHRCO2tCQURGLEFBQ0UsQUFLSDtBQUxHO0dBQUE7OztBQU9KLFNBQUEsQUFBUyx3QkFBd0IsQUFFL0I7O3VDQUNFLEFBQUMsaUJBQWMsTUFBZixBQUFvQixBQUNMO1lBRGYsQUFDc0IsQUFDUDthQUZmLEFBRXVCLEFBQ1I7WUFIZixBQUdzQjtnQkFIdEI7a0JBREYsQUFDRSxBQUtIO0FBTEc7R0FBQTs7O0FBT0osU0FBQSxBQUFTLFVBQVUsQUFFakI7O3VDQUNFLEFBQUMsaUJBQWMsTUFBZixBQUFvQixBQUNMO1lBRGYsQUFDc0IsQUFDUDthQUZmLEFBRXVCLEFBQ1I7WUFIZixBQUdzQjtnQkFIdEI7a0JBREYsQUFDRSxBQUtIO0FBTEc7R0FBQTs7QUFNSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiU2tpbGxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9