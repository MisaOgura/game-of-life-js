import GameOfLife from './GameOfLife'
import './index.css'
import { SPEED, WIDTH, HEIGHT, ALIVE, BLACK, WHITE } from './constants'

const gameOfLife = new GameOfLife(WIDTH, HEIGHT)

const ctx = document.getElementById('canvas').getContext('2d')
let imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT)
mapGridToCanvas(gameOfLife.grid, imageData, ctx)

setInterval(evolve, SPEED)

function evolve () {
  console.time('evolution')
  gameOfLife.evolve()
  mapGridToCanvas(gameOfLife.grid, imageData, ctx)
  console.timeEnd('evolution')
}

function mapGridToCanvas (grid, imageData, ctx) {
  for (let i=0; i<HEIGHT; i++) {
    for (let j=0, flag=i%2 ; j<WIDTH; j++) {
    const isCellAlive = gameOfLife.grid[i][j] === ALIVE
    imageData.data[(i*WIDTH+j)*4 + 3] = isCellAlive ? BLACK : WHITE
    }
  }
  ctx.putImageData(imageData, 0, 0)
}
