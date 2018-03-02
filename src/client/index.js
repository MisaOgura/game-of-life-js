import './index.css'

const generation = 250
const width = 100
const height = 100

const ctx = document.getElementById('canvas').getContext('2d')

const alive = '#000000'

ctx.fillStyle = alive
ctx.fillRect(0, 0, 1, 1)
ctx.fillRect(1, 0, 1, 1)

function evolve () {
  let imageData = ctx.getImageData(0, 0, width, height)
  console.log(imageData)

  imageData.data[3] -= 10

  ctx.putImageData(imageData, 0, 0)
  console.log(imageData)
}

setInterval(evolve, generation)
