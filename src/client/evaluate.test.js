import { shouldLive } from './evaluate'

describe('shouldLive', () => {
  const cellOne = [1, 1]

  describe('returns true when', () => {
    it('a cell has two neighbours', () => {
      const grid = [
        [1, 0, 0],
        [1, 0, 0],
        [0, 0, 0]
      ]

      expect(shouldLive(grid, cellOne)).toEqual(true)
    })

    it('a cell has three neighbours', () => {
      const grid = [
        [1, 0, 1],
        [0, 0, 0],
        [0, 0, 1]
      ]

      expect(shouldLive(grid, cellOne)).toEqual(true)
    })
  })

  describe('returns false when', () => {
    it('a cell has less than two neighbours', () => {
      const grid = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]

      expect(shouldLive(grid, cellOne)).toEqual(false)
    })

    it('a cell has more than three neighbours', () => {
      const grid = [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
      ]

      expect(shouldLive(grid, cellOne)).toEqual(false)
    })
  })
})
