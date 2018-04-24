const express = require('express')
const Pageres = require('pageres')
const webshots = require('./util/webshots')

console.log('Capturing pages:\n')
for (page in webshots.pages) {
  if (webshots.pages.hasOwnProperty(page)) {
    console.log(webshots.pages[page].url)
  }
}
console.log('\n')

// TODO: make this take arguments
const pageresInstance = new Pageres({delay: 10})
  // .src(
  //   webshots.pages.mtbva.url,
  //   webshots.resolutions,
  //   webshots.pages.mtbva.options)
  // .src(
  //   webshots.pages.handsmith.url,
  //   webshots.resolutions,
  //   webshots.pages.handsmith.options)
  .src(
    webshots.pages.paddlemax.url,
    webshots.resolutions,
    webshots.pages.paddlemax.options)
  // .src(pages.coledrums)
  // .src(pages.webjam)
  .dest(__dirname + '/static/img/webshots')
  .run()
  .then(() => {
    console.log('Page capture done.\n')
  })
