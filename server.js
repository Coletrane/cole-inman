const express = require('express')
const next = require('next')
const app = next('.', { dev: true })
const handle = app.getRequestHandler()
const Pageres = require('pageres')

const pages = {
  mtbva: "bikeva.com",
  handsmith: "handsmith.org",
  coleInman: "coledrums.com",
}

const pageresInstance = new Pageres({delay: 2})
  .src(pages.mtbva)
  .dest(__dirname + '/static/img/webshots')

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000)
  })
