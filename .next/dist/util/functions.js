'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponent = exports.isMobile = undefined;

var _styles = require('./styles');

var isMobile = exports.isMobile = function isMobile() {
  // Normally this would be done using @media queries
  // but I am demonstrating React/JS knowledge with this project

  // Additionally, this shows the split between client and server side
  // code by checking if we are in the browser or server
  if (process.browser) {
    return document.documentElement.clientWidth < _styles.mobileWidth;
  } else {
    return false;
  }
};

var getComponent = exports.getComponent = function getComponent(props, slot) {
  return props.children.filter(function (comp) {
    return comp.slot === slot;
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbIm1vYmlsZVdpZHRoIiwiaXNNb2JpbGUiLCJwcm9jZXNzIiwiYnJvd3NlciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJnZXRDb21wb25lbnQiLCJwcm9wcyIsInNsb3QiLCJjaGlsZHJlbiIsImZpbHRlciIsImNvbXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFRLEFBQWtCLEFBRTFCOztBQUFPLElBQU0sOEJBQVcsU0FBWCxBQUFXLFdBQU0sQUFDNUI7QUFDQTtBQUVBOztBQUNBO0FBQ0E7TUFBSSxRQUFKLEFBQVksU0FBUyxBQUNuQjtXQUFPLFNBQUEsQUFBUyxnQkFBaEIsQUFBTyxBQUF5QixBQUFjLEFBQy9DO0FBRkQsU0FFTyxBQUNMO1dBQUEsQUFBTyxBQUNSO0FBQ0Y7QUFYTSxBQWNQOztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLGFBQUEsQUFBQyxPQUFELEFBQVEsTUFBUyxBQUMzQztlQUFPLEFBQU0sU0FBTixBQUFlLE9BQVEsVUFBQSxBQUFDLE1BQVMsQUFDdEM7V0FBTyxLQUFBLEFBQUssU0FBWixBQUFxQixBQUN0QjtBQUZELEFBQU8sQUFHUixHQUhRO0FBREYiLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlaW5tYW4vUHJvZ3JhbXMvY29sZS1pbm1hbiJ9