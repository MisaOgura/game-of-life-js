import './index.css'

function draw () {
  const ctx = document.getElementById('canvas').getContext('2d')

  const alive = '#000000'
  const dead = '#ffffff'

  ctx.fillStyle = ctx.fillStyle === alive ? dead : alive
  ctx.fillRect(10, 10, 2, 2)
}

setInterval(draw, 250)
