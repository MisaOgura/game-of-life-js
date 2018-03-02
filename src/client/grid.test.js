import Grid from './grid'

describe('Grid', () => {
  const width = 10
  const height = 20
  const initPopulation = 70
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
      grid.populate(initPopulation)
      expect(grid.numOfDeadCells).toEqual(totalNumOfCells - initPopulation)
      expect(grid.numOfLiveCells).toEqual(initPopulation)
    })
  })

  describe('evolve', () => {
    it('updates the grid for the next generation', () => {
      grid.populate(initPopulation)
      grid.evolve()
      console.log(grid)
      grid.evolve()
      console.log(grid)
    })
  })
})
