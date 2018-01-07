"use strict";

var bikeva = "bikeva.com";
var handsmith = "handsmith.org";
var coledrums = "coledrums.com";
var webjam = "web-jam.com";

var pages = {
  mtbva: {
    url: bikeva,
    options: {
      crop: true,
      filename: bikeva,
      scale: .5
    }
  },
  handsmith: {
    url: handsmith,
    options: {
      crop: true,
      filename: handsmith,
      scale: .5
    }
  }
};

var resolutions = ['1920x1080'];

var localSrc = function localSrc(page) {
  return "/static/img/webshots/" + page.url + ".png";
};

module.exports = {
  pages: pages,
  resolutions: resolutions,
  localSrc: localSrc
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvd2Vic2hvdHMuanMiXSwibmFtZXMiOlsiYmlrZXZhIiwiaGFuZHNtaXRoIiwiY29sZWRydW1zIiwid2ViamFtIiwicGFnZXMiLCJtdGJ2YSIsInVybCIsIm9wdGlvbnMiLCJjcm9wIiwiZmlsZW5hbWUiLCJzY2FsZSIsInJlc29sdXRpb25zIiwibG9jYWxTcmMiLCJwYWdlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQU4sQUFBZTtBQUNmLElBQU0sWUFBTixBQUFrQjtBQUNsQixJQUFNLFlBQU4sQUFBa0I7QUFDbEIsSUFBTSxTQUFOLEFBQWU7O0FBRWYsSUFBTTs7U0FDRyxBQUNBLEFBQ0w7O1lBQVMsQUFDRCxBQUNOO2dCQUZPLEFBRUcsQUFDVjthQU5RLEFBQ0wsQUFFSSxBQUdBLEFBR1g7QUFOVyxBQUNQO0FBSEcsQUFDTDs7U0FPUyxBQUNKLEFBQ0w7O1lBQVMsQUFDRCxBQUNOO2dCQUZPLEFBRUcsQUFDVjthQWROLEFBQWMsQUFTRCxBQUVBLEFBR0E7QUFIQSxBQUNQO0FBSE8sQUFDVDtBQVZVLEFBQ1o7O0FBa0JGLElBQU0sY0FBYyxDQUFwQixBQUFvQixBQUNsQjs7QUFHRixJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxNQUFTLEFBQ3pCO1NBQU8sMEJBQTBCLEtBQTFCLEFBQStCLE1BQXRDLEFBQTRDLEFBQzdDO0FBRkQ7O0FBSUEsT0FBQSxBQUFPO1NBQVUsQUFFZjtlQUZlLEFBR2Y7WUFIRixBQUFpQjtBQUFBLEFBQ2YiLCJmaWxlIjoid2Vic2hvdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvbGVpbm1hbi9Qcm9ncmFtcy9jb2xlLWlubWFuIn0=