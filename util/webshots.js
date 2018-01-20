// This file exists to expose webshots urls and src's to both the
// app and the build system

const bikeva = "bikeva.com"
const handsmith = "handsmith.org"
const paddlemax = "github.com/coletrane/paddlemax-api"
const coledrums = "coledrums.com"
const webjam = "web-jam.com"

const paddlemaxFilename = () => {
  const max = paddlemax.split("/")
  return max[max.length - 1]
}

const pages = {
  mtbva: {
    url: bikeva,
    options: {
      crop: true,
      filename: bikeva,
      scale: .5,
      timeout: 9999
    }
  },
  handsmith: {
    url: handsmith,
    options: {
      crop: true,
      filename: handsmith,
      scale: .5,
      timeout: 9999
    }
  },
  paddlemax: {
    url: paddlemax,
    options: {
      crop: true,
      filename: paddlemaxFilename(),
      scale: .5,
      timeout: 9999
    }
  }
}

const resolutions = [
  '1920x1080'
]

const localSrc = (page) => {
  return "/static/img/webshots/" + page.url + ".png"
}

module.exports = {
  pages,
  resolutions,
  localSrc
}
