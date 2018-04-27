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
    while (this.numOfLiveCells < initPopulation) {
      let coord = generateRandomCoord(this.width, this.height)
      this.grid[coord[0]][coord[1]] = 1
    }
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
    grid.push([])
  }

  grid.map((row, rowIndex) => {
    if (rowIndex == 0) { // first row
      for (let cellIndex = 0; cellIndex < w; cellIndex++) {
        row[cellIndex-1] == 0 ? row.push(1) : row.push(0)
      }
    } else {
      for (let cellIndex = 0; cellIndex < w; cellIndex++) {
        if (cellIndex == 0) { // first cell of each row
          grid[rowIndex-1][0] == 0 ? row.push(1) : row.push(0)
        } else {
          row[cellIndex-1] == 0 ? row.push(1) : row.push(0)
        }
      }
    }
  })

  return grid
}

function getBiasedRnd (bias, influence) {
  const rnd = Math.random() * (ALIVE - DEAD) + DEAD    // randomly generate 0 or 1
  const mix = Math.random() * influence                // random mixer
  const biasedRnd = rnd * (1 - mix) + bias * mix       // mix full range and bias
  return Math.floor(biasedRnd * Math.floor(2))
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
