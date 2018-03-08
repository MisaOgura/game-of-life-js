import { shouldDie, shouldRevive } from './evaluate'
import { ALIVE, DEAD } from './constants'

class GameOfLife {
  constructor (width, height) {
    this.width = width
    this.height = height
    this.grid = initialiseMatrix(this.width, this.height)
  }

  get numOfLiveCells () {
    return this.grid.map(filterLiveCells).reduce(sum, 0)
  }

  get numOfDeadCells () {
    const totalNumOfCells = this.width * this.height
    return totalNumOfCells - this.numOfLiveCells
  }

  populate (initPopulation) {
    console.time('populate')
    while (this.numOfLiveCells < initPopulation) {
      let coord = generateRandomCoord(this.width, this.height)
      this.grid[coord[0]][coord[1]] = 1
    }
    console.timeEnd('populate')
  }

  evolve () {
    let nextGeneration = []
    for (let i = 0; i < this.height; i++) {
      nextGeneration.push(this.grid[i].map((cell, j) => {
        const isCellAlive = cell === ALIVE
        if (isCellAlive && shouldDie(this.grid, [i, j])) return 0
        if (!isCellAlive && shouldRevive(this.grid, [i, j])) return 1

        return cell
      }))
    }

    this.grid = nextGeneration
  }
}

function initialiseMatrix (w, h) {
  let grid = []
  for (let i = 0; i < h; i++) {
    grid.push(new Array(w).fill(DEAD))
  }

  return grid
}

function generateRandomCoord (w, h) {
  const x = Math.floor(Math.random() * Math.floor(h))
  const y = Math.floor(Math.random() * Math.floor(w))
  return [x, y]
}

function filterLiveCells (row) {
  return row.filter(cell => cell === ALIVE)
}

function sum (accumulator, currentValue) {
  return accumulator + currentValue.length
}

export default GameOfLife
