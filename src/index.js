import GameOfLife from './GameOfLife'
import './index.css'
import { SPEED, WIDTH, HEIGHT, ALIVE, INITPOPULATION } from './constants'

const ctx = document.getElementById('canvas').getContext('2d')

console.time('initialisation')
const gameOfLife = new GameOfLife(WIDTH, HEIGHT)
console.log(`num of initial population: ${gameOfLife.numOfLiveCells}`)
console.timeEnd('initialisation')

mapGridToCanvas(gameOfLife.grid, ctx)

function evolve () {
  console.time('evolution')
  gameOfLife.evolve()
  mapGridToCanvas(gameOfLife.grid, ctx)
  console.timeEnd('evolution')
}

setInterval(evolve, SPEED)

function mapGridToCanvas (grid, ctx) {
  let imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT)

  for (let i=0; i<HEIGHT; i++) {
    for (let j=0, flag=i%2 ; j<WIDTH; j++) {
    const isCellAlive = gameOfLife.grid[i][j] === ALIVE
    imageData.data[(i*WIDTH+j)*4 + 3] = isCellAlive ? 255 : 0
    }
  }
  ctx.putImageData(imageData, 0, 0)
}
