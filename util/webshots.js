// This file exists to expose webshots urls and src's to both the
// app and the build system

const bikeva = "bikeva.com"
const luvtrails = "luvtrails.com"
const paddlemax = "github.com/coletrane/paddlemax-api"
const effectiveBalance = "github.com/coletrane/effective-balance-python"
const coledrums = "coledrums.com"
const webjam = "web-jam.com"

const noSlashes = str => {
  const split = str.split("/")
  return split[split.length - 1]
}

const pages = {
  luvtrails: {
    url: luvtrails,
    options: {
      crop: true,
      filename: bikeva,
      scale: 0.5,
      timeout: 120
    }
  },
  mtbva: {
    url: bikeva,
    options: {
      crop: true,
      filename: bikeva,
      scale: 0.5,
      timeout: 120
    }
  },
  paddlemax: {
    url: paddlemax,
    options: {
      crop: true,
      filename: noSlashes(paddlemax),
      scale: 1,
      timeout: 120
    }
  },
  effectiveBalance: {
    url: effectiveBalance,
    options: {
      crop: true,
      filename: noSlashes(effectiveBalance),
      scale: 1,
      timeout: 120
    }
  }
}

const resolutions = ["1920x1080"]

const localSrc = page => {
  return "/static/img/webshots/" + noSlashes(page.url) + ".png"
}

module.exports = {
  pages,
  resolutions,
  localSrc
}
