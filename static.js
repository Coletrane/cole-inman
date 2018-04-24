const express = require('express')
const app = express()

const dist = './out'
const port = 3001

app.use(express.static(dist))

app.listen(port, function () {
  console.log('Cole Inman serving static files from ' + dist +
    'On port: ' + port)
})
