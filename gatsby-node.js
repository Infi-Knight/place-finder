const fs = require('fs')
const path = require('path')

const readJsonAsync = (filepath, callback) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', function(err, data) {
      if (err) {
        reject(err)
      } else {
        const result = JSON.parse(data)
        if (result) {
          resolve(result)
        } else {
          throw new Error('Json parse error')
        }
      }
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const templateComponent = path.resolve(`src/templates/place.js`)

    readJsonAsync(path.resolve(`src/data/placesData.json`)).then(data => {
      data.forEach(placeData => {
        const pagePath = placeData.pagePath
        createPage({
          path: pagePath,
          component: templateComponent,
          context: placeData,
        })
      })
      resolve()
    })
  })
}
