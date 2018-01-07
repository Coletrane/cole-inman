const express = require('express')
const next = require('next')
const app = next('.', { dev: true })
const handle = app.getRequestHandler()
const Pageres = require('pageres')

const pages = {
  mtbva: "bikeva.com",
  handsmith: "handsmith.org",
  coledrums: "coledrums.com",
  webjam: "web-jam.com"
}

const resolutions = [
  '1024x768'
]

console.log("Capturing pages:\n")
for (page in pages) {
  if (pages.hasOwnProperty(page)) {
    console.log(pages[page])
  }
}
console.log("\n")

const pageresInstance = new Pageres({delay: 2})
  .src(pages.mtbva, resolutions)
  .src(pages.handsmith)
  .src(pages.coledrums)
  .src(pages.webjam)
  .dest(__dirname + '/static/img/webshots')
  .run()
  .then(() => {
    console.log("Page capture done.\n")

    console.log("Starting app")
    app.prepare()
      .then(() => {
        const server = express()

        server.get('*', (req, res) => {
          return handle(req, res)
        })

        server.listen(3000, function() {
          console.log("Cole Inman listening on port 3000!")
        })
      })
  })


