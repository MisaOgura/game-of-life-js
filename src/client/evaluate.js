import { ALIVE, DEAD } from './constants'

export function shouldDie (grid, coord) {
  const x = coord[0]
  const y = coord[1]
  const isCellDead = grid[x][y] === DEAD

  // TODO - should it call shouldRevive instead of throwing?
  if (isCellDead) throw Error()

  const neighbouringGrid = cropNeighbouringGrid(grid, x, y)
  const totalCellsAlive = neighbouringGrid.map(filterLiveCells).reduce(sumOfCells, 0)

  const neighbours = totalCellsAlive - 1
  const underPopulated = neighbours < 2
  const overPopulated = neighbours > 3

  return underPopulated || overPopulated
}

export function shouldRevive (grid, coord) {
  const x = coord[0]
  const y = coord[1]
  const isCellAlive = grid[x][y] === ALIVE

  // TODO - should it call shouldDie instead of throwing?
  if (isCellAlive) throw Error()

  const neighbouringGrid = cropNeighbouringGrid(grid, x, y)
  const neighbours = neighbouringGrid.map(filterLiveCells).reduce(sumOfCells, 0)

  return neighbours === 3
}

function filterLiveCells (row) {
  return row.filter(cell => cell === ALIVE)
}

function sumOfCells (accumulator, currentValue) {
  return accumulator + currentValue.length
}

function cropNeighbouringGrid (grid, x, y) {
  const gridX = grid.length - 1
  const gridY = grid[0].length - 1

  const beginRow = minIndexAlong(x)
  const endRow = maxIndexAlong(x, gridX)

  const beginColumn = minIndexAlong(y)
  const endColumn = maxIndexAlong(y, gridY)

  return grid.slice(beginRow, endRow).map(row => row.slice(beginColumn, endColumn))
}

function minIndexAlong (loc) {
  return loc - 1 < 0 ? loc : loc - 1
}

function maxIndexAlong (loc, max) {
  return loc + 1 > max ? loc + 1 : loc + 2
}

// TODO - implement with the chain of responsibility
//
// Steps to decide whether the cell should live or die
// 1. Any live cell with fewer than two live neighbors dies
// 2. Any live cell with two or three live neighbors lives
// 3. Any live cell with more than three live neighbors dies
// 4. Any dead cell with exactly three live neighbors becomes a live cell
