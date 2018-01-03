'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _BottomNavigation = require('material-ui/BottomNavigation');

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _fa = require('react-icons/lib/fa');

var _fa2 = _interopRequireDefault(_fa);

var _colors = require('material-ui/styles/colors');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/coleinman/Programs/cole-inman/components/layout.js';

// Components


// Icon Components


// Theme stuff

var muiTheme = (0, _getMuiTheme2.default)({
  palette: {
    accent1Color: _colors.blue300
  }
});

var MOBILE_WIDTH = 600;

var LINKEDIN = 'https://www.linkedin.com/in/cole-inman-61738565/';
var GITHUB = 'https://github.com/coletrane/';
var FACEBOOK = 'https://www.facebook.com/uhmcole';
var EMAIL = 'eloc49@gmail.com';

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'isMobile',

    // Utils
    value: function isMobile() {
      // Normally this would be done using @media queries
      // but I am demonstrating React/JS knowledge with this project
      return document.documentElement.clientWidth < MOBILE_WIDTH;
    }
  }, {
    key: 'navPressed',
    value: function navPressed(event, value) {
      console.log(event);
      console.log(value);
    }

    // Lifecycle

  }, {
    key: 'mount',
    value: function mount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'title', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Cole Inman')), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), _react2.default.createElement(_AppBar2.default, { position: 'static', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_Toolbar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Cole Inman')), _react2.default.createElement('div', { 'class': 'main-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.props.children), _react2.default.createElement(_BottomNavigation2.default, { isMobile: true, onChange: this.navPressed, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { icon: _fa2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { icon: _fa2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { icon: _fa2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement(_BottomNavigation.BottomNavigationButton, { icon: _fa2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZCIsIkFwcEJhciIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiSWNvbkJ1dHRvbiIsIkJvdHRvbU5hdmlnYXRpb24iLCJCb3R0b21OYXZpZ2F0aW9uQnV0dG9uIiwiRmFMaW5rZWRpblNxdWFyZSIsIkZhR2l0aHViU3F1YXJlIiwiRmFGYWNlYm9va1NxdWFyZSIsIkZhRW52ZWxvcGVTcXVhcmUiLCJibHVlMzAwIiwiTXVpVGhlbWVQcm92aWRlciIsImdldE11aVRoZW1lIiwibXVpVGhlbWUiLCJwYWxldHRlIiwiYWNjZW50MUNvbG9yIiwiTU9CSUxFX1dJRFRIIiwiTElOS0VESU4iLCJHSVRIVUIiLCJGQUNFQk9PSyIsIkVNQUlMIiwiTGF5b3V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImV2ZW50IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJjaGlsZHJlbiIsIm5hdlByZXNzZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBR2YsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQW1COzs7O0FBRzFCLEFBQU8sQUFDUCxBQUFPLEFBQ1AsQUFBTyxBQUNQLEFBQU87Ozs7QUFHUCxBQUFROztBQUNSLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7OztBQWpCUDs7O0FBUUE7OztBQU1BOztBQUlBLElBQU07O0FBQU4sQUFBaUIsQUFBWSxBQUNsQixBQUNPO0FBRFAsQUFDUDtBQUZ5QixBQUMzQixDQURlOztBQU1qQixJQUFNLGVBQU4sQUFBcUI7O0FBRXJCLElBQU0sV0FBTixBQUFpQjtBQUNqQixJQUFNLFNBQU4sQUFBZTtBQUNmLElBQU0sV0FBTixBQUFpQjtBQUNqQixJQUFNLFFBQU4sQUFBYzs7SSxBQUVPOzs7Ozs7Ozs7O1NBRW5COzs7K0JBQ1csQUFDVDtBQUNBO0FBQ0E7YUFBTyxTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsY0FBaEMsQUFBOEMsQUFDL0M7Ozs7K0IsQUFFVSxPQUFPLEEsT0FBTyxBQUN2QjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBRUQ7Ozs7Ozs0QkFDUSxBQUVQOzs7NkJBRVEsQUFDUDs2QkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsNENBQWlCLFVBQWxCLEFBQTRCO29CQUE1QjtzQkFBQSxBQUVBO0FBRkE7eUJBRUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO29CQUFqQjtzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBSUYsd0RBQU0sU0FBTixBQUFjO29CQUFkO3NCQU5GLEFBTUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFURixBQUVBLEFBT0UsQUFHRjtBQUhFOzJCQUdGLEFBQUMsa0NBQU8sVUFBUixBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQWJGLEFBWUEsQUFDRSxBQU1GLGdDQUFBLGNBQUEsU0FBSyxTQUFMLEFBQVc7b0JBQVg7c0JBQUEsQUFDSTtBQURKO2NBQ0ksQUFBSyxNQXBCVCxBQW1CQSxBQUNlLEFBR2YsMkJBQUEsQUFBQyw0Q0FBaUIsVUFBbEIsTUFBMkIsVUFBVSxLQUFyQyxBQUEwQztvQkFBMUM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMERBQUQsQUFBd0IsQUFBTTtvQkFBOUI7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQywwREFBRCxBQUF3QixBQUFNO29CQUE5QjtzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLDBEQUFELEFBQXdCLEFBQU07b0JBQTlCO3NCQUhGLEFBR0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsMERBQUQsQUFBd0IsQUFBTTtvQkFBOUI7c0JBN0JSLEFBQ0ksQUFDRSxBQXVCQSxBQUlFLEFBTVQ7QUFOUzs7Ozs7O0FBakR3QixBOztrQkFBZixBOztBQXdEcEIiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9