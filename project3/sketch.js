let opacity = 180
let minOpacity = 0
let maxOpacity = 180
let minSec = 0
let maxSec = 60

function setup() {
  createCanvas(600, 600)
}

function draw() {
  background('white')
  let s = second()
  
  if (opacity > minOpacity) {
    opacity = map(s, minSec, maxSec, maxOpacity, minOpacity)
  } else {
    opacity = minOpacity
    second = 1
  }
 
console.log(opacity, second())
  
  noStroke()
  
  fill(255, 200, 160)
  rect(100, 150, 400, 30)

  fill(255, 230, 200)
  rect(100, 180, 400, 20)
  
  fill(230, 90, 90)
  rect(100, 200, 400, 30)

  fill(255, 230, 200)
  rect(100, 230, 400, 30)
  
  fill(210, 70, 70)
  rect(100, 260, 400, 20)

  fill(255, 230, 200)
  rect(100, 280, 400, 20)
  
  fill(230, 90, 90)
  rect(100, 300, 400, 50)
  
  push()
  stroke(135, 206, 250,opacity)
  strokeWeight(3)
  fill(173, 216, 230, opacity)
  rect(90, 140, 420, 220)
  pop()
}

