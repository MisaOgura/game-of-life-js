import { shouldDie, shouldRevive } from './evaluate'
import { ALIVE, DEAD } from './constants'

class GameOfLife {
  constructor (width, height) {
    this.width = width
    this.height = height
    this.grid = initialiseCheckerBoard(this.width, this.height)
  }

  evolve () {
    let nextGeneration = []

    for (let i=0; i<this.height; i++) {
      nextGeneration.push(this.grid[i].map((cell, j) => {
        const isCellAlive = cell === ALIVE

        if (isCellAlive && shouldDie(this.grid, [i, j])) {
          return DEAD
        } else if (!isCellAlive && shouldRevive(this.grid, [i, j])) {
          return ALIVE
        } else {
          return cell
        }
      }))
    }

    this.grid = nextGeneration
  }
}

function initialiseCheckerBoard (w, h) {
  console.time('initialisation')
  let grid = []

  for (let i=0; i<h; i++) {
    grid.push([])
    for (let j=0, flag=i%2 ; j<w; j++) {
      grid[i][j] = flag
      flag = 1 - flag
    }
  }
  console.timeEnd('initialisation')
  return grid
}

export default GameOfLife
