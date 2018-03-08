import GameOfLife from './GameOfLife'
import './index.css'
import { SPEED, WIDTH, HEIGHT, ALIVE, INITPOPULATION } from './constants'

const ctx = document.getElementById('canvas').getContext('2d')

let imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT)

const gameOfLife = new GameOfLife(WIDTH, HEIGHT)
gameOfLife.populate(INITPOPULATION)

// flatten grid
const flattenedGrid = gameOfLife.grid.reduce((accum, currentValue) => accum.concat(currentValue))

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
  gameOfLife.evolve()

  const flattenedGrid = gameOfLife.grid.reduce((accum, currentValue) => accum.concat(currentValue))

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

setInterval(evolve, SPEED)
