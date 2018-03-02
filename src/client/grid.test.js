import Grid from './grid'
import { DEAD } from './constants'

describe('Grid', () => {
  const width = 10
  const height = 20

  let grid

  beforeEach(() => {
    grid = new Grid(width, height)
  })

  it('initialises with a grid with the given width and height', () => {
    const matrix = grid.matrix
    const numOfRow = matrix.length
    const nomOfColumn = matrix[0].length

    expect(numOfRow).toEqual(height)
    expect(nomOfColumn).toEqual(width)
  })

  it('initialises with dead cells', () => {
    const matrix = grid.matrix

    matrix.forEach(row => {
      expect(row.filter(isCellDead).length).toEqual(width)
    })
  })
})

function isCellDead (cell) {
  return cell === DEAD
}
