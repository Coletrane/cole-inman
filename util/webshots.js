// This file exists to expose webshots urls and src's to both the
// app and the build system

const bikeva = "bikeva.com"
const luvtrails = "luvtrails.com"
const paddlemax = "github.com/coletrane/paddlemax-api"
const effectiveBalance = "github.com/coletrane/effective-balance-python"
const bikevaRaceUtils = "github.com/Coletrane/bikeva.com-race-utils"
const coledrums = "coledrums.com"
const webjam = "web-jam.com"
const soundiizApiExtensions = "github.com/coletrane/soundiiz-api-extensions"

const lastPathOfUrl = str => {
  const split = str.split("/")
  return split[split.length - 1]
}

const pages = {
  soundiizApiExtensions: {
    url: soundiizApiExtensions,
    options: {
      crop: true,
      filename: lastPathOfUrl(soundiizApiExtensions),
      scale: 1,
      timeout: 120
    }
  },
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
      filename: lastPathOfUrl(paddlemax),
      scale: 1,
      timeout: 120
    }
  },
  effectiveBalance: {
    url: effectiveBalance,
    options: {
      crop: true,
      filename: lastPathOfUrl(effectiveBalance),
      scale: 1,
      timeout: 120
    }
  },
  bikevaRaceUtils: {
    url: bikevaRaceUtils,
    options: {
      crop: true,
      filename: lastPathOfUrl(bikevaRaceUtils),
      scale: 1,
      timeout: 120
    }
  }
}

const resolutions = ["1920x1080"]

const localSrc = page => {
  return "/static/img/webshots/" + lastPathOfUrl(page.url) + ".png"
}

module.exports = {
  pages,
  resolutions,
  localSrc
}
