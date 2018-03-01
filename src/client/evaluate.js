export function shouldLive (grid, coord) {
  const x = coord[0]
  const y = coord[1]
  const isCellAlive = grid[x][y] === 1

  const neighbouringGrid = calculateNeighbouringGrid(grid, x, y)

  const totalCellsAlive = neighbouringGrid.map(filterLiveCells).reduce(flattenArray, 0)
  const neighbours = isCellAlive ? totalCellsAlive - 1 : totalCellsAlive

  const underPopulated = neighbours < 2
  const overPopulated = neighbours > 3

  return !underPopulated && !overPopulated
}

function filterLiveCells (row) {
  return row.filter(cell => cell === 1)
}

function flattenArray (accumulator, currentValue) {
  return accumulator + currentValue.length
}

function calculateNeighbouringGrid (grid, x, y) {
  const gridX = grid.length - 1
  const gridY = grid[0].length - 1

  const beginRow = foo(x)
  const endRow = bar(x, gridX)

  const beginColumn = foo(y)
  const endColumn = bar(y, gridY)

  return grid.slice(beginRow, endRow).map(row => row.slice(beginColumn, endColumn))
}

function foo (loc) {
  return loc - 1 < 0 ? loc : loc - 1
}

function bar (loc, max) {
  return loc + 1 > max ? loc + 1 : loc + 2
}

// TODO - implement with the chain of responsibility
//
// Steps to decide whether the cell should live or die
// 1. Any live cell with fewer than two live neighbors dies
// 2. Any live cell with two or three live neighbors lives
// 3. Any live cell with more than three live neighbors dies
// 4. Any dead cell with exactly three live neighbors becomes a live cell
