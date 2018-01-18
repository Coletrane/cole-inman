const bikeva = "bikeva.com"
const handsmith = "handsmith.org"
const coledrums = "coledrums.com"
const webjam = "web-jam.com"

const pages = {
  mtbva: {
    url: bikeva,
    options: {
      crop: true,
      filename: bikeva,
      scale: .5,
      timeout: 120
    }
  },
  handsmith: {
    url: handsmith,
    options: {
      crop: true,
      filename: handsmith,
      scale: .5,
      timeout: 120
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
