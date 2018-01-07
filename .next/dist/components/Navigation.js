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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  float: right;\n  text-align: right;\n'], ['\n  float: right;\n  text-align: right;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: center;\n  height: 56px;\n  position: static;\n  flex-shrink: 0;\n  background-color: ', ';\n  box-shadow: ', ';\n'], ['\n  display: flex;\n  justify-content: center;\n  height: 56px;\n  position: static;\n  flex-shrink: 0;\n  background-color: ', ';\n  box-shadow: ', ';\n']);

// Components


// Icon Components


var LINKEDIN = 'https://www.linkedin.com/in/cole-inman-61738565/';
var GITHUB = 'https://github.com/coletrane/';
var FACEBOOK = 'https://www.facebook.com/uhmcole';
var EMAIL = 'eloc49@gmail.com';

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
        return _react2.default.createElement(TopNav, null, _react2.default.createElement(NavButtons, { iconColor: this.iconColor }));
      } else if (this.displayBottomNav) {
        return _react2.default.createElement(BottomNav, null, _react2.default.createElement(NavButtons, { iconColor: this.iconColor }));
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

exports.default = Navigation;


function NavButtons() {
  return _react2.default.createElement('div', null, _react2.default.createElement('a', { href: LINKEDIN }, _react2.default.createElement(_IconButton2.default, { 'aria-label': 'LinkedIn' }, _react2.default.createElement(_fa.FaLinkedinSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions }))), _react2.default.createElement('a', { href: GITHUB }, _react2.default.createElement(_IconButton2.default, { 'aria-label': 'Github' }, _react2.default.createElement(_fa.FaGithubSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions }))), _react2.default.createElement('a', { href: FACEBOOK }, _react2.default.createElement(_IconButton2.default, { 'aria-label': 'Facebook' }, _react2.default.createElement(_fa.FaFacebookSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions }))), _react2.default.createElement('a', { href: 'mailto:' + EMAIL }, _react2.default.createElement(_IconButton2.default, { 'aria-label': 'Email' }, _react2.default.createElement(_fa.FaEnvelopeSquare, { fill: iconColor,
    height: iconDimensions,
    width: iconDimensions }))));
}

// Styles
var TopNav = _styledComponents2.default.div(_templateObject);

// TODO: get them equidistant from eachother
var BottomNav = _styledComponents2.default.div(_templateObject2, _styles.colors.barColor, _styles.boxShadow);