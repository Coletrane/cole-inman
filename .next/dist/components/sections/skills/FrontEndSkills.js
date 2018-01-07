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

var _Skill = require('./Skill');

var _Skill2 = _interopRequireDefault(_Skill);

var _SkillsList = require('./SkillsList');

var _SkillsList2 = _interopRequireDefault(_SkillsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/sections/skills/FrontEndSkills.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0;\n'], ['\n  margin: 0;\n']);

// Components


var FrontEndSkills = function (_Component) {
  (0, _inherits3.default)(FrontEndSkills, _Component);

  function FrontEndSkills() {
    (0, _classCallCheck3.default)(this, FrontEndSkills);

    return (0, _possibleConstructorReturn3.default)(this, (FrontEndSkills.__proto__ || (0, _getPrototypeOf2.default)(FrontEndSkills)).apply(this, arguments));
  }

  (0, _createClass3.default)(FrontEndSkills, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(FrontEndSkillsTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Front End'), _react2.default.createElement(_SkillsList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, this.jsSkills));
    }
  }, {
    key: 'jsSkills',
    get: function get() {
      var skills = [_react2.default.createElement(Html, { key: 'html', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement(Css, { key: 'css', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement(Jquery, { key: 'jquery', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement(Javascript, { key: 'javascript', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement(Typescript, { key: 'typescript', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(Aurelia, { key: 'aurelia', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement(ReactLolNameCollision, { key: 'react', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement(Redux, { key: 'redux', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(Angular, { key: 'angular', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(Vue, { key: 'vue', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement(Node, { key: 'node', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(Webpack, { key: 'webpack', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement(Express, { key: 'express', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(Rails, { key: 'rails', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })];

      var indexed = [];
      skills.forEach(function (skill, i, arr) {
        indexed.push((0, _react.cloneElement)(skill, { className: '' + i }));
      });

      return indexed;
    }
  }]);

  return FrontEndSkills;
}(_react.Component);

// Styles


exports.default = FrontEndSkills;

var FrontEndSkillsTitle = _styledComponents2.default.h3(_templateObject);

// Skill Components
// TODO: align the text and images
function Html() {
  return _react2.default.createElement(_Skill2.default, { name: 'HTML',
    desktop: '56px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  });
}

function Css() {
  return _react2.default.createElement(_Skill2.default, { name: 'CSS',
    desktop: '45px',
    mobile: '30px', __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  });
}

function Jquery() {
  return _react2.default.createElement(_Skill2.default, { name: 'jQuery',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  });
}

function Javascript() {
  return _react2.default.createElement(_Skill2.default, { name: 'Javascript',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  });
}

function Typescript() {
  return _react2.default.createElement(_Skill2.default, { name: 'Typescript',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  });
}

function ReactLolNameCollision() {
  return _react2.default.createElement(_Skill2.default, { name: 'React (What this site is written in)',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  });
}

function Angular() {
  return _react2.default.createElement(_Skill2.default, { name: 'Angular',
    desktop: '59px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  });
}

function Vue() {
  return _react2.default.createElement(_Skill2.default, { name: 'Vue',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  });
}

function Aurelia() {
  return _react2.default.createElement(_Skill2.default, { name: 'Aurelia',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  });
}

function Node() {
  return _react2.default.createElement(_Skill2.default, { name: 'Node.js',
    desktop: '55px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    }
  });
}

function Webpack() {
  return _react2.default.createElement(_Skill2.default, { name: 'Webpack',
    desktop: '55px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  });
}

function Redux() {
  return _react2.default.createElement(_Skill2.default, { name: 'Redux',
    desktop: '50px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  });
}

function Express() {
  return _react2.default.createElement(_Skill2.default, { name: 'Express.js',
    desktop: '52px',
    mobile: '33px', __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  });
}

function Rails() {
  return _react2.default.createElement(_Skill2.default, { name: 'Ruby on Rails',
    desktop: '55px',
    mobile: '35px', __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VjdGlvbnMvc2tpbGxzL0Zyb250RW5kU2tpbGxzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY2xvbmVFbGVtZW50Iiwic3R5bGVkIiwiU2tpbGwiLCJTa2lsbHNMaXN0IiwiRnJvbnRFbmRTa2lsbHMiLCJqc1NraWxscyIsInNraWxscyIsImluZGV4ZWQiLCJmb3JFYWNoIiwic2tpbGwiLCJpIiwiYXJyIiwicHVzaCIsImNsYXNzTmFtZSIsIkZyb250RW5kU2tpbGxzVGl0bGUiLCJoMyIsIkh0bWwiLCJDc3MiLCJKcXVlcnkiLCJKYXZhc2NyaXB0IiwiVHlwZXNjcmlwdCIsIlJlYWN0TG9sTmFtZUNvbGxpc2lvbiIsIkFuZ3VsYXIiLCJWdWUiLCJBdXJlbGlhIiwiTm9kZSIsIldlYnBhY2siLCJSZWR1eCIsIkV4cHJlc3MiLCJSYWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTLEFBQVc7Ozs7QUFDM0IsQUFBTzs7OztBQUdQLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWdCOzs7Ozs7Ozs7O0FBRnZCOzs7SUFJcUIsQTs7Ozs7Ozs7Ozs7NkJBNEJWLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFFQTtBQUZBO0FBQUEsT0FBQSxrQkFFQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGQSxBQUVBLEFBR0EsOEJBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FORixBQUNFLEFBS0EsQUFDUSxBQUtYOzs7O3dCQXZDYyxBQUNiO1VBQUksd0NBQ0YsQUFBQyxRQUFLLEtBQU4sQUFBVTtvQkFBVjtzQkFEVyxBQUNYO0FBQUE7T0FBQSxDQURXLGdDQUVYLEFBQUMsT0FBSSxLQUFMLEFBQVM7b0JBQVQ7c0JBRlcsQUFFWDtBQUFBO09BQUEsaUNBQ0EsQUFBQyxVQUFPLEtBQVIsQUFBWTtvQkFBWjtzQkFIVyxBQUdY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QUFNSixTQUFBLEFBQVMsVUFBVSxBQUNqQjt5QkFDRSxBQUFDLGlDQUFNLE1BQVAsQUFBWSxBQUNMO2FBRFAsQUFDZSxBQUNSO1lBRlAsQUFFYztnQkFGZDtrQkFERixBQUNFLEFBSUg7QUFKRztHQUFBOzs7QUFNSixTQUFBLEFBQVMsT0FBTyxBQUNkO3lCQUNFLEFBQUMsaUNBQU0sTUFBUCxBQUFZLEFBQ0w7YUFEUCxBQUNlLEFBQ1I7WUFGUCxBQUVjO2dCQUZkO2tCQURGLEFBQ0UsQUFJSDtBQUpHO0dBQUE7OztBQU1KLFNBQUEsQUFBUyxVQUFVLEFBQ2pCO3lCQUNFLEFBQUMsaUNBQU0sTUFBUCxBQUFZLEFBQ0w7YUFEUCxBQUNlLEFBQ1I7WUFGUCxBQUVjO2dCQUZkO2tCQURGLEFBQ0UsQUFJSDtBQUpHO0dBQUE7OztBQU1KLFNBQUEsQUFBUyxRQUFRLEFBQ2Y7eUJBQ0UsQUFBQyxpQ0FBTSxNQUFQLEFBQVksQUFDTDthQURQLEFBQ2UsQUFDUjtZQUZQLEFBRWM7Z0JBRmQ7a0JBREYsQUFDRSxBQUlIO0FBSkc7R0FBQTs7O0FBTUosU0FBQSxBQUFTLFVBQVUsQUFDakI7eUJBQ0UsQUFBQyxpQ0FBTSxNQUFQLEFBQVksQUFDTDthQURQLEFBQ2UsQUFDUjtZQUZQLEFBRWM7Z0JBRmQ7a0JBREYsQUFDRSxBQUlIO0FBSkc7R0FBQTs7O0FBT0osU0FBQSxBQUFTLFFBQVEsQUFDZjt5QkFDRSxBQUFDLGlDQUFNLE1BQVAsQUFBWSxBQUNMO2FBRFAsQUFDZSxBQUNSO1lBRlAsQUFFYztnQkFGZDtrQkFERixBQUNFLEFBSUg7QUFKRztHQUFBIiwiZmlsZSI6IkZyb250RW5kU2tpbGxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9