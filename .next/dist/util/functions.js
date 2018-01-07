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