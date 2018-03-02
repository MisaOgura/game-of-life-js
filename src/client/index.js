import Grid from './grid'
import './index.css'
import { ALIVE } from './constants'

const speed = 250
const width = 100
const height = 100

const ctx = document.getElementById('canvas').getContext('2d')

let imageData = ctx.getImageData(0, 0, width, height)

const grid = new Grid(width, height)
grid.populate(3000)

// flatten grid
const flattenedGrid = grid.grid.reduce((accum, currentValue) => accum.concat(currentValue))

const data = []
flattenedGrid.map(cell => {
  const isCellAlive = cell === ALIVE
  isCellAlive ? data.push(0, 0, 0, 255) : data.push(0, 0, 0, 0)
})

for (let i = 0; i < imageData.data.length; i += 4) {
  imageData.data[i] = data[i]
  imageData.data[i + 1] = data[i + 1]
  imageData.data[i + 2] = data[i + 2]
  imageData.data[i + 3] = data[i + 3]
}

ctx.putImageData(imageData, 0, 0)

function evolve () {
  grid.evolve()

  const flattenedGrid = grid.grid.reduce((accum, currentValue) => accum.concat(currentValue))

  const data = []
  flattenedGrid.map(cell => {
    const isCellAlive = cell === ALIVE
    isCellAlive ? data.push(0, 0, 0, 255) : data.push(0, 0, 0, 0)
  })

  for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] = data[i]
    imageData.data[i + 1] = data[i + 1]
    imageData.data[i + 2] = data[i + 2]
    imageData.data[i + 3] = data[i + 3]
  }

  ctx.putImageData(imageData, 0, 0)
}

setInterval(evolve, speed)
