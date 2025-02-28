let rings = [];
let numRings = 50;
let maxRadius = 450;
let angleOffset = 0;

function setup() {
  createCanvas(600, 600);
  strokeWeight(2)
  stroke('blue');
  noFill();

//半径
  for (let i = 0; i < numRings; i++) {
    let r = map(i, 0, numRings - 1, maxRadius, 20); // 半径逐渐变小
    rings.push(r);
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

//画圆
  for (let i = 0; i < rings.length; i++) {
    let r = rings[i];
    let offset = sin(angleOffset + i * 0.3) * map(i, 0, rings.length - 1, 50, 5);
    ellipse(offset, 0, r * 2, r * 2); 
  }


  angleOffset += 0.04;
}

