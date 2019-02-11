import { shouldDie, shouldRevive } from './rules'

const grid = [
  [0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0], // 0
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1], // 1
  [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0], // 2
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1], // 3
  [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1], // 4
  [1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1], // 5
  [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0], // 6
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], // 7
  [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0], // 8
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0], // 9
  [1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1]  // 10
]

describe('evaluate', () => {
  describe('shouldDie', () => {
    describe('returns false for', () => {
      ;[[2, 1], [4, 2], [2, 1], [0, 9]].forEach(coord => {
        it(`a live cell at [${coord}] which has 2 neighbours`, () => {
          expect(shouldDie(grid, coord)).toEqual(false)
        })
      })

      ;[[10, 0], [6, 4], [10, 10], [8, 10]].forEach(coord => {
        it(`a live cell at [${coord}] which has 3 neighbours`, () => {
          expect(shouldDie(grid, coord)).toEqual(false)
        })
      })
    })

    describe('returns true for', () => {
      ;[[1, 0], [2, 7], [1, 11], [6, 7]].forEach(coord => {
        it(`a live cell at [${coord}] which has less than 2 neighbours`, () => {
          expect(shouldDie(grid, coord)).toEqual(true)
        })
      })

      ;[[4, 10], [6, 2], [3, 4], [4, 11]].forEach(coord => {
        it(`a live cell at [${coord}] which has more than 3 neighbours`, () => {
          expect(shouldDie(grid, coord)).toEqual(true)
        })
      })
    })

    describe('throws an error when', () => {
      it('the cell is dead', () => {

      })

      it('coord that is outsize of the grid range is provided', () => {

      })

      it('missing a coord', () => {

      })

      it('missing a grid', () => {

      })
    })
  })

  describe('shouldRevive', () => {
    describe('returns true for', () => {
      ;[[1, 1], [3, 6], [2, 8], [8, 11]].forEach(coord => {
        it(`a dead cell at [${coord}] which has 3 neighbours`, () => {
          expect(shouldRevive(grid, coord)).toEqual(true)
        })
      })
    })

    describe('returns false for', () => {
      ;[[0, 0], [7, 8], [10, 6], [0, 11]].forEach(coord => {
        it(`a cell at [${coord}] which does not have 3 neighbours`, () => {
          expect(shouldRevive(grid, coord)).toEqual(false)
        })
      })
    })
  })
})
