const express = require('express')
const next = require('next')
const app = next('.', { dev: true })
const handle = app.getRequestHandler()
const Pageres = require('pageres')
const webshots = require('./util/webshots')

console.log('Capturing pages:\n')
for (page in webshots.pages) {
  if (webshots.pages.hasOwnProperty(page)) {
    console.log(webshots.pages[page].url)
  }
}
console.log('\n')

const pageresInstance = new Pageres({delay: 2})
  .src(
    webshots.pages.mtbva.url,
    webshots.resolutions,
    webshots.pages.mtbva.options)
  .src(
    webshots.pages.handsmith.url,
    webshots.resolutions,
    webshots.pages.handsmith.options)
  // .src(pages.coledrums)
  // .src(pages.webjam)
  .dest(__dirname + '/static/img/webshots')
  .run()
  .then(() => {
    console.log('Page capture done.\n')

    console.log('Starting app')
    app.prepare()
      .then(() => {
        const server = express()

        server.get('*', (req, res) => {
          return handle(req, res)
        })

        server.listen(3000, function () {
          console.log('Cole Inman listening on port 3000!')
        })
      })
  })
