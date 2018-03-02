import { ALIVE } from './constants'

class Grid {
  constructor (width, height) {
    this.width = width
    this.height = height
    this.grid = this._initialiseMatrix()
  }

  get matrix () {
    return this.grid
  }

  get numOfLiveCells () {
    return this.grid.map(filterLiveCells).reduce(sum, 0)
  }

  get numOfDeadCells () {
    const totalNumOfCells = this.width * this.height
    return totalNumOfCells - this.numOfLiveCells
  }

  _initialiseMatrix () {
    return new Array(this.height).fill(new Array(this.width).fill(0))
  }
}

function filterLiveCells (row) {
  return row.filter(cell => cell === ALIVE)
}

function sum (accumulator, currentValue) {
  return accumulator + currentValue.length
}

export default Grid
