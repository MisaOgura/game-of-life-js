import Grid from './grid'

describe('Grid', () => {
  const width = 10
  const height = 20
  const totalNumOfCells = width * height

  let grid

  beforeEach(() => {
    grid = new Grid(width, height)
  })

  describe('On initialisation', () => {
    it('is a grid with the given width and height', () => {
      const matrix = grid.matrix
      const numOfRow = matrix.length
      const nomOfColumn = matrix[0].length

      expect(numOfRow).toEqual(height)
      expect(nomOfColumn).toEqual(width)
    })

    it('contains only dead cells', () => {
      expect(grid.numOfDeadCells).toEqual(totalNumOfCells)
      expect(grid.numOfLiveCells).toEqual(0)
    })
  })

  describe('populate', () => {
    it('populates with a given number of live cells', () => {
      const numOfInitLiveCells = 35
      grid.populate(numOfInitLiveCells)
      expect(grid.numOfDeadCells).toEqual(totalNumOfCells - numOfInitLiveCells)
      expect(grid.numOfLiveCells).toEqual(numOfInitLiveCells)
    })
  })
})
