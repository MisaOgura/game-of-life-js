import GameOfLife from './GameOfLife'

describe('GameOfLife', () => {
  const width = 10
  const height = 20
  const initPopulation = 70
  const totalNumOfCells = width * height

  let gameOfLife

  beforeEach(() => {
    gameOfLife = new GameOfLife(width, height)
  })

  describe.only('On initialisation', () => {
    it('is a grid with the given width and height', () => {
      const grid = gameOfLife.grid
      const numOfRow = grid.length
      const nomOfColumn = grid[0].length

      expect(numOfRow).toEqual(height)
      expect(nomOfColumn).toEqual(width)
    })

    it('contains only dead cells', () => {
      expect(gameOfLife.numOfDeadCells).toEqual(totalNumOfCells)
      expect(gameOfLife.numOfLiveCells).toEqual(0)
    })
  })

  describe('populate', () => {
    it('populates with a given number of live cells', () => {
      gameOfLife.populate(initPopulation)
      expect(gameOfLife.numOfDeadCells).toEqual(totalNumOfCells - initPopulation)
      expect(gameOfLife.numOfLiveCells).toEqual(initPopulation)
    })
  })

  describe('evolve', () => {
    it('updates the grid for the next generation', () => {
      gameOfLife.populate(initPopulation)
      gameOfLife.evolve()
      gameOfLife.evolve()
    })
  })
})
