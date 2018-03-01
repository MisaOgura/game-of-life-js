export function shouldLive (grid, coord) {
  const x = coord[0]
  const y = coord[1]
  const isCellAlive = grid[x][y] === 1

  const neighbouringGrid = calculateNeighbouringGrid(grid, x, y)

  const totalCellsAlive = neighbouringGrid
    .map(filterLiveCells).reduce(flattenArray, []).length

  const neighbours = isCellAlive ? totalCellsAlive - 1 : totalCellsAlive

  const underPopulated = neighbours < 2
  const overPopulated = neighbours > 3

  return !underPopulated && !overPopulated
}

function filterLiveCells (row) {
  return row.filter(cell => cell === 1)
}

function flattenArray (accumulator, currentValue) {
  return currentValue.concat(accumulator)
}

function calculateNeighbouringGrid (grid, x, y) {
  return grid.slice(x - 1, x + 2).map(row => row.slice(y - 1, y + 2))
}

// TODO - implement with the chain of responsibility
//
// Steps to decide whether the cell should live or die
// 1. Any live cell with fewer than two live neighbors dies
// 2. Any live cell with two or three live neighbors lives
// 3. Any live cell with more than three live neighbors dies
// 4. Any dead cell with exactly three live neighbors becomes a live cell
