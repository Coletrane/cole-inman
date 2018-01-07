"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mobileWidth = 600;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvZnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbIm1vYmlsZVdpZHRoIiwiaXNNb2JpbGUiLCJwcm9jZXNzIiwiYnJvd3NlciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJnZXRDb21wb25lbnQiLCJwcm9wcyIsInNsb3QiLCJjaGlsZHJlbiIsImZpbHRlciIsImNvbXAiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxjQUFOLEFBQW9CLEFBRXBCOztBQUFPLElBQU0sOEJBQVcsU0FBWCxBQUFXLFdBQU0sQUFDNUI7QUFDQTtBQUVBOztBQUNBO0FBQ0E7TUFBSSxRQUFKLEFBQVksU0FBUyxBQUNuQjtXQUFPLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixjQUFoQyxBQUE4QyxBQUMvQztBQUZELFNBRU8sQUFDTDtXQUFBLEFBQU8sQUFDUjtBQUNGO0FBWE0sQUFjUDs7QUFBTyxJQUFNLHNDQUFlLFNBQWYsQUFBZSxhQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVMsQUFDM0M7ZUFBTyxBQUFNLFNBQU4sQUFBZSxPQUFRLFVBQUEsQUFBQyxNQUFTLEFBQ3RDO1dBQU8sS0FBQSxBQUFLLFNBQVosQUFBcUIsQUFDdEI7QUFGRCxBQUFPLEFBR1IsR0FIUTtBQURGIiwiZmlsZSI6ImZ1bmN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY29sZWlubWFuL1Byb2dyYW1zL2NvbGUtaW5tYW4ifQ==