export function shouldLive (grid, coord) {
  const isCellAlive = grid[coord[0]][coord[1]] === 1

  let numOfCellsAlive = 0
  grid.forEach(row => {
    numOfCellsAlive += row.filter(cell => cell === 1).length
  })

  const neighbours = isCellAlive ? numOfCellsAlive - 1 : numOfCellsAlive

  const underPopulated = neighbours < 2
  const overPopulated = neighbours > 3

  return !underPopulated && !overPopulated
}
