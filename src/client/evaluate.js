export function shouldLive (grid, coord) {
  const x = coord[0]
  const y = coord[1]

  const isCellAlive = grid[x][y] === 1

  const totalCellsAlive = grid
    .map(filterLiveCells).reduce(flattenArray).length

  const neighbours = isCellAlive ? totalCellsAlive - 1 : totalCellsAlive

  const underPopulated = neighbours < 2
  const overPopulated = neighbours > 3

  return !underPopulated && !overPopulated
}
