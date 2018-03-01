import { shouldLive } from './evaluate'

describe('shouldLive', () => {
  const grid = [
    [0, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0]
  ]

  describe('returns true when', () => {
    it('a cell has two neighbours', () => {
      expect(shouldLive(grid, [1, 1])).toEqual(true)
    })

    it('a cell has three neighbours', () => {
      expect(shouldLive(grid, [3, 1])).toEqual(true)
    })
  })

  describe('returns false when', () => {
    it('a cell has less than two neighbours', () => {
      expect(shouldLive(grid, [0, 0])).toEqual(false)
    })

    it('a cell has more than three neighbours', () => {
      expect(shouldLive(grid, [4, 3])).toEqual(false)
    })
  })
})
