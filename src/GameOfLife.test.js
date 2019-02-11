import GameOfLife from './GameOfLife'

describe('GameOfLife', () => {
  const width = 10
  const height = 20

  let gameOfLife

  beforeEach(() => {
    gameOfLife = new GameOfLife(width, height)
  })

  describe('On initialisation', () => {
    it('is a grid with the given width and height', () => {
      const numOfRow = gameOfLife.grid.length
      const nomOfColumn = gameOfLife.grid[0].length

      expect(numOfRow).toEqual(height)
      expect(nomOfColumn).toEqual(width)
    })
  })
})
