"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mobileWidth = exports.mobileWidth = 600;

var isMobile = exports.isMobile = function isMobile() {
  // Normally this would be done using @media queries
  // but I am demonstrating React/JS knowledge with this project

  // Additionally, this shows the split between client and server side
  // code by checking if we are in the browser or server
  if (process.browser) {
    return document.documentElement.clientWidth < mobileWidth;
  } else {
    return false;
  }
};

var getComponent = exports.getComponent = function getComponent(props, slot) {
  return props.children.filter(function (comp) {
    return comp.slot === slot;
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbIm1vYmlsZVdpZHRoIiwiaXNNb2JpbGUiLCJwcm9jZXNzIiwiYnJvd3NlciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJnZXRDb21wb25lbnQiLCJwcm9wcyIsInNsb3QiLCJjaGlsZHJlbiIsImZpbHRlciIsImNvbXAiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTSxvQ0FBTixBQUFvQixBQUUzQjs7QUFBTyxJQUFNLDhCQUFXLFNBQVgsQUFBVyxXQUFNLEFBQzVCO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO01BQUksUUFBSixBQUFZLFNBQVMsQUFDbkI7V0FBTyxTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsY0FBaEMsQUFBOEMsQUFDL0M7QUFGRCxTQUVPLEFBQ0w7V0FBQSxBQUFPLEFBQ1I7QUFDRjtBQVhNLEFBY1A7O0FBQU8sSUFBTSxzQ0FBZSxTQUFmLEFBQWUsYUFBQSxBQUFDLE9BQUQsQUFBUSxNQUFTLEFBQzNDO2VBQU8sQUFBTSxTQUFOLEFBQWUsT0FBUSxVQUFBLEFBQUMsTUFBUyxBQUN0QztXQUFPLEtBQUEsQUFBSyxTQUFaLEFBQXFCLEFBQ3RCO0FBRkQsQUFBTyxBQUdSLEdBSFE7QUFERiIsImZpbGUiOiJmdW5jdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvbGVpbm1hbi9Qcm9ncmFtcy9jb2xlLWlubWFuIn0=