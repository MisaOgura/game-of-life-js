import { shouldLive } from './evaluate'

describe('shouldLive', () => {
  const grid = [
    [0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0], // 0
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1], // 1
    [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1], // 3
    [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0], // 4
    [1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1], // 5
    [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0], // 6
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], // 7
    [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0], // 8
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], // 9
    [1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1]  // 10
  ]

  describe('returns true for', () => {
    ;[[1, 1], [4, 2], [2, 0], [0, 11]].forEach(coord => {
      it(`a cell at [${coord}] which has 2 neighbours`, () => {
        expect(shouldLive(grid, coord)).toEqual(true)
      })
    })

    ;[[3, 1], [7, 6], [10, 9], [6, 11]].forEach(coord => {
      it(`a cell at [${coord}] which has 3 neighbours`, () => {
        expect(shouldLive(grid, coord)).toEqual(true)
      })
    })
  })

  describe('returns false for', () => {
    ;[[0, 0], [7, 8], [10, 6], [4, 6]].forEach(coord => {
      it(`a cell at [${coord}] which has less than 2 neighbours`, () => {
        expect(shouldLive(grid, coord)).toEqual(false)
      })
    })

    ;[[4, 3], [7, 1], [4, 11], [0, 10]].forEach(coord => {
      it(`a cell at [${coord}] which has more than 3 neighbours`, () => {
        expect(shouldLive(grid, coord)).toEqual(false)
      })
    })
  })

  describe('throws an error when', () => {
    it('coord that is outsize of the grid range is provided', () => {

    })

    it('missing a coord', () => {

    })

    it('missing a grid', () => {

    })
  })
})
