function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES);
  background('#BDE1E6');
}

function draw() {
  bearfoot();
  vasebody();
  catface();
  
 
  
  
  // strokeWeight(1)
  // stroke('black')
  // line(0,200,400,200)
  // line(0,400,400,400)
 
}

function vasebody(){
  push()
  translate(0,-10)
  noStroke()
  fill('rgb(241,241,189)')
  ellipse(200,385,160,60)
  fill('rgb(209,205,205)')
  rect(120,230,160,140)
  strokeWeight(1)
  stroke('black')
  line(120,230,120,370)
  line(280,230,280,370)
  arc(200,370,160,60,0,180)
  ellipse(200,230,160,30)  
  noStroke()
  fill('rgb(243,243,170)')
  ellipse(200,220,160,30)
  
  strokeWeight(2)
  stroke('black')
  rect(155,280,20,10)
  push()
  translate(width,0)
  scale(-1,1)
  strokeWeight(2)
  stroke('black')
  rect(155,280,20,10)
  pop()
  pop()
  
}

function catface(){ 
  push()
  //face
  strokeWeight(0)
  fill('orange')
  ellipse(200,130,179,160)
  
  //ear
  triangle(140,10,180,58,130,80)
  push()
  translate(width, 0)
  scale(-1, 1);
  triangle(140, 10, 180, 58, 130, 80)
  pop()
  
  push()
  fill('rgb(241,104,196)')
  translate(74,24)
  scale(0.5)
  triangle(140, 10, 180, 58, 130, 80)
  pop()
  
  push()
  translate(width,0)
  scale(-1,1)
  push()
  fill('rgb(241,104,196)')
  translate(74,24)
  scale(0.5)
  triangle(140, 10, 180, 58, 130, 80)
  pop()
  pop()
  
  //lefteye
  fill('white')
  circle(160,110,35)
  
  push()
  fill('black')
  translate(76,55)
  scale(0.5)
  circle(160,110,35)
  pop()
  
  //righteye
  push()
  translate(75,0)
  fill('white')
  circle(160,110,35)
  
  push()
  fill('black')
  translate(76,55)
  scale(0.5)
  circle(160,110,35)
  pop()
  pop()
  
  //nose&mouth
  push()
  strokeWeight(4)
  stroke('rgb(81,104,81)')
  noFill()
  line(200,154.8,200,175)
  arc(187.5,175,25,20,0,190)
  
  push()
  translate(width,0)
  scale(-1,1)
  strokeWeight(4)
  stroke('rgb(81,104,81)')
  noFill()
  line(200,154.8,200,175)
  arc(187.5,175,25,20,0,190)
  pop()
  pop()
  // fill('rgb(241,104,196)')
  // ellipse(200,140,30,20)
  push()
  translate(-64,-30)
  scale(1.3)
  beginShape()
  fill('rgb(241,104,196)')
  curveVertex(190,135)
  
  curveVertex(195,138)
  
  curveVertex(198,144)
  curveVertex(208,144)
  
  curveVertex(211,137)

  curveVertex(216,135)
  curveVertex(212,132)
  
  curveVertex(203,128)
  curveVertex(194,132)
  
  curveVertex(191,134)
  
  endShape(CLOSE)
  pop()
  
  //beard
  strokeWeight(2)
  stroke('black')
  line(88,120,143,140)
  line(98,150,133,153)
  line(97,175,138,165)
  
  push()
  translate(width,0)
  scale(-1,1)
  strokeWeight(2)
  stroke('black')
  line(88,120,143,140)
  line(98,150,133,153)
  line(97,175,138,165)
  pop()
  
  
  pop()
}

function bearfoot(){
  //fill
  noStroke()
  fill('#AB8C6E')
  rect(120,385,157,79)
  triangle(200,385,280,385,278,385+79)
  rect(210,400,68,98)
  rect(270,402,40,18)
  rect(270,402,20,28)
  triangle(320,397,297,410,287,401)
  
  //draw
  strokeWeight(4)
  stroke('#FF9EA4')
  fill('#AB8C6E')
  //foot
  line(120,385,120,413)
  
  arc(135,445,70,70,30,270)
  line(167,445+35/2,240,445+35/2)
  line(280,430,278,495)
  arc(242,480,85,55,23,205)
  
  line(280,385,280,402)
  
  //tail
  push()
  translate(-175,560)
  rotate(-75)
  arc(285,410,80,50,60,185,open)
  pop()
  
  noFill()
  arc(282,353,100,100,38,92,)
  
  //pocket
  fill('#F7DECF')
  arc(200,384,80,60,20,160,open)
}


