function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(30);
}

function draw() {
  background(220);
  fill(139,124,148);
  rect(0,0,400,400);
  let center=(width/2)
  
// face
  let faceW=mouseY;
  let faceH=mouseX;
  let faceWpara=constrain(mouseY,100,150);
  let faceHpara=constrain(mouseX,100,150);
  
  stroke(122,106,86);
  strokeWeight(2);
  fill(201, 160, 99);
  ellipse(200,200,faceWpara,faceHpara);
  
 // cheek 
  if(mouseX>=width/2,mouseY<=width/2){
  strokeWeight(0);
//   l
  fill(228,0,127);
  ellipse(center-44-(faceWpara/5),212,faceHpara/5,faceWpara/5);
//   r
  fill(228,0,127);
  ellipse(center+16+(faceWpara/5),213,faceHpara/5,faceWpara/5);
  }
  
  else{
  strokeWeight(0);
//   l
  fill(228,0,127);
  ellipse(center-44-(faceWpara/5),212,40,40);
//   r
  fill(228,0,127);
  ellipse(center+16+(faceWpara/5),213,40,40);
  }
  
  if(mouseIsPressed){
    //openeye
    strokeWeight(0);
    //l
    fill("black")
    circle(160,200,faceWpara/4.5);
    fill("white")
    circle(random(158,160),198,faceWpara/12);
    circle(random(156,158),207,faceWpara/20);
    circle(random(166,168),204,faceWpara/19);
    //r
    fill("black")
    circle(208,200,faceWpara/3.5);
    fill("white")
    circle(random(205,207),198,faceWpara/10);
    circle(random(204,206),209,faceWpara/19);
    circle(random(214,216),206,faceWpara/18);
    
    let a=random(0,400);
    let b=random(0,400);
    textSize(60);
    text("✨",a,b);
         
         
  }
  else{
    // eyeL
  push()
  rotate(20)
  translate(203,-40)
  noFill();
  stroke("black");
  strokeWeight(3);
  arc(50, 150, faceWpara/5*2, faceHpara/5, 0, 100);
  pop()
  
// eyeR
  push()
  rotate(20)
  translate(160,-22);
  noFill();
  stroke("black");
  strokeWeight(3);
  arc(50, 150, faceWpara/10*3+faceWpara/50, faceHpara/10+faceHpara/20, 0, 100);
  pop()
  }
  
//   mouth
  rotate(20)
  translate(195,-2);
  noFill();
  stroke("black");
  strokeWeight(3);
  arc(50, 150, faceWpara/5,faceHpara/10, 0, 100);
  
  
  
  
  
  
  
}