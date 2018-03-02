class Grid {
  constructor (width, height) {
    this.width = width
    this.height = height
    this.grid = this.initialiseMatrix()
  }

  get matrix () {
    return this.grid
  }

  initialiseMatrix () {
    return new Array(this.height).fill(new Array(this.width).fill(0))
  }
}

export default Grid
