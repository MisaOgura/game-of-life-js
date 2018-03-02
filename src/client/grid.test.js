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
    it('initialises with a grid with the given width and height', () => {
      const matrix = grid.matrix
      const numOfRow = matrix.length
      const nomOfColumn = matrix[0].length

      expect(numOfRow).toEqual(height)
      expect(nomOfColumn).toEqual(width)
    })

    it('initialises only with dead cells', () => {
      expect(grid.numOfDeadCells).toEqual(totalNumOfCells)
      expect(grid.numOfLiveCells).toEqual(0)
    })
  })
})
