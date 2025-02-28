function scene000(){
  background('#CFF5F7');
  
  startButton.show()
  okButton.hide()
  gotitButton.hide()
  backButton.hide()
  postButton.hide()
  resetButton.hide()
  fileButton.hide()
  plan1Button.hide()
  plan2Button.hide()
  plan3Button.hide()
  
  // noStroke()
  // rect(20,20,width-40,height-40)//bg image
  image(mapImg,0,0,width,height)
  
  
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(20,(height-450-30),360,(height-450+50+15)-(height-450-10))
  pop()
  
  textSize(50)
  //fill()
  text("Lens Journey",width/2,height-450)
  
  image(meCam,125,270,165,130)

  push()
  // fill('grey')
  // rect(150,290,100,100)
  pop()
   if(frameCount % blinkInterval===0){
    isVisible=!isVisible
  }
  if(isVisible){
    image(flashing,185,350,20,20)
  }
  
  startButton.mousePressed(startGame)
  }

function startGame(){
  currentScene=1
}

function scene001(){
  background('#CDE7E7');
  image(mapImg,0,0,width,height)
  
  startButton.hide()
  okButton.show()
  gotitButton.hide()
  
  push()
  noStroke()
  fill('rgb(253,228,232)')
  rect(0,130,400,(height-375)-(height-500)+40)
  pop()
  
  text("Hello!",width/2,height-500)
  textSize(20)
  text("Do you want to start your",width/2,height-475)
  text("Lens Journey",width/2,height-450)
  text("in NYC?",width/2,height-425)
  text("I will help you to be",width/2,height-400)
  text("A Successful Photographer!",width/2,height-375)
  okButton.mousePressed(goscene010)
  }

function goscene010(){
  currentScene = 2
}

function scene010(){
  background('#CDE7E7');
  image(mapImg,0,0,width,height)
  
  startButton.hide()
  okButton.hide()
  gotitButton.show()
  
  push()
  noStroke()
  fill('rgb(253,228,232)')
  rect(0,height-475-20,400,(height-350)-(height-475)+40)
  pop()
  
  text("To Start,",width/2,height-475)
  text("let us go to the camera store",width/2,height-450)
  text("and buy your First Camera!",width/2,height-425)
  text("Tip:",width/2,height-375)
  text("Press arrow keys to control the character.",width/2,height-350)
  
  
  gotitButton.mousePressed(goscene011)
}
 
function goscene011(){
  currentScene=3
}
function scene011(){
  background('#EDF0F0');
  
  startButton.hide()
  okButton.hide()
  gotitButton.hide()
  
  image(mapImg,0,0,width,height)
  
  meX=constrain(meX,15,width-15)
  meY=constrain(meY,15,height-15)
  
//camera store
  noStroke()
  fill('#F44E36')
  ellipse(cameraStore.x,cameraStore.y,15)
  push()
  fill('black')
  textSize(12)
  text("Camera Store",cameraStore.x-5,cameraStore.y+10)
  pop()
//me
  if(showme){
  image(me,meX,meY,40,50)
  }
  
  if (dist(meX+20,meY+25,cameraStore.x,cameraStore.y)<20){
    buyCam=true
  }else{
    buyCam=false
  }

  if (buyCam&& !bought) {
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(0,height/2-10,400,(height/1.8)-height/2+30)
  pop()
    fill(0)
    textSize(16)
    text("Welcome!",width/2,height/2);
    text("use your original points to get a used Fuji XT-4!",width/2,height/1.8)
    text("Press space key,",width/2,height/1.9)
    image(camera,cameraStore.x-80,cameraStore.y,70,70)

  }
  if(bought){
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(0,height/2.2-10,400,(height/1.75)-height/2.2+30)
  pop()
    fill(0)
    textSize(16)
    text("Congratulations!",width/2,height/2.2)
    text("You have completed the first step,",width/2,height/2.05)
    text("now, try taking pictures of people for free",width/2,height/1.9)
    text("and work on your photography skills!",width/2,height/1.75)
    showme=false
    image(meCam,meX-3,meY-33,130,100)
    
    okButton.show()
    okButton.mousePressed(null)
    okButton.mousePressed(goscene020)
}

  if(move.left){
    meX-=speed
  }
  if(move.right){
    meX+=speed
  }
  if(move.up){
    meY-=speed
  }
  if(move.down){
    meY+=speed
  }
}

function goscene020(){
  currentScene=4
}
function scene020(){
background('#EDF0F0');
okButton.hide()
  
  image(mapImg,0,0,width,height)

  fill('#F44E36')
  ellipse(centralPark.x,centralPark.y,15)
  
  push()
  fill('black')
  textSize(12)
  text("Central Park",centralPark.x-5,centralPark.y+10)
  pop()
  mecam=true
  // image(meCam,meX,meY,105,80)
  // fill('pink')
  // ellipse(me.x,me.y,10)
   if(move.left){
    meX-=speed
  }
  if(move.right){
    meX+=speed
  }
  if(move.up){
    meY-=speed
  }
  if(move.down){
    meY+=speed
  }
//   if (dist(meX+20,meY+25,centralPark.x,centralPark.y)<15){
      
//   }
  if(halloween){
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(0,height/5-20,400,(height/4.8)-(height/5)+40)
  pop()
    
  push()
  fill('black')
  text("Halloween Events Here!",width/2,height/5.2)
  text("Catch your first chance!",width/2,height/4.6)
  pop()
  }
  
  if(dist(meX+40,meY+35,centralPark.x,centralPark.y)<20){
    tutorial=true
    halloween=false
    image(customer,centralPark.x-70,centralPark.y,50,50)
  }else{
    tutorial=false
    halloween=true
  }

  if(tutorial) {
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(0,height/2-10,400,(height/1.8)-height/2+30)
  pop()
    fill(0)
    textSize(16)
    text("Press s to take photo",width/2,height/2)
    text("and Press for 5 times to get Points!",width/2,height/1.8)
    //被拍的人加上
    gotitButton.show()
    gotitButton.mousePressed(null)
    gotitButton.mousePressed(gotitButton.hide())
  }
  if (sKeyPressCount >= 5) {
   goscene021()
   sKeyPressCount = 0
  }
}

function goscene021(){
  currentScene=5
}
function scene021(){
background('#EDF0F0');
  image(mapImg,0,0,width,height)
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(0,height/2.5-10,400,(height/2.1)-height/2.5+30)
  pop()
  mecam=false
  text("Good job!!",width/2,height/2.5)
  text("Explore New York City!",width/2,height/2.3)
  text("Continue your Lens Journey!",width/2,height/2.1)
  
  okButton.show()
  okButton.mousePressed(null)
  okButton.mousePressed(goscene030)
}
function goscene030(){
  currentScene=6
}
function scene030(){
background('#EDF0F0');
  image(mapImg,0,0,width,height)

  okButton.hide()
  
   if(move.left){
    meX-=speed
  }
  if(move.right){
    meX+=speed
  }
  if(move.up){
    meY-=speed
  }
  if(move.down){
    meY+=speed
  }
  
  fill('#F44E36')
  ellipse(westVillage.x,westVillage.y,15)
  push()
  fill('black')
  textSize(12)
  text("West Village",westVillage.x-5,westVillage.y+10)
  pop()
  
  if(dist(meX+40,meY+35,westVillage.x,westVillage.y)<20){
  image(customer,westVillage.x-70,westVillage.y,50,50)
    
  if(sKeyPressCount>=5){
  sKeyPressCount=0
  points+=5 
  }
  }

  
  fill('#F44E36')
  ellipse(dumbo.x,dumbo.y,15)
  push()
  fill('black')
  textSize(12)
  text("Dumbo",dumbo.x-3,dumbo.y+10)
  pop()
  
   if(dist(meX+40,meY+35,dumbo.x,dumbo.y)<20){
      image(customer,dumbo.x-70,dumbo.y,50,50)
        
      if(sKeyPressCount>=5){
      sKeyPressCount=0
      points+=5 
  }
  }
  
  fill('#F44E36')
  ellipse(prospectPark.x,prospectPark.y,15)
  push()
  fill('black')
  textSize(12)
  text("Prospect Park",prospectPark.x-3,prospectPark.y-12)
  pop()
  
   if(dist(meX+40,meY+35,prospectPark.x,prospectPark.y)<20){
      image(customer,prospectPark.x-70,prospectPark.y-20,50,50)
       
      if(sKeyPressCount>=5){
      sKeyPressCount=0
      points+=5 
  }
  }
 
  fill('#F44E36')
  ellipse(NYU.x,NYU.y,15)
  push()
  fill('black')
  textSize(12)
  text("NYU",NYU.x-3,NYU.y-10)
  pop()
  
   if(dist(meX+40,meY+35,NYU.x,NYU.y)<20){
     image(customer,NYU.x-70,NYU.y,50,50)
     
     if(sKeyPressCount>=5){
     sKeyPressCount=0
     points+=5
  }
  }

  fill('#F44E36')
  ellipse(columbiaU.x,columbiaU.y,15)
  push()
  fill('black')
  textSize(12)
  text("Columbia University",columbiaU.x-5,columbiaU.y+10)
  pop()
  
   if(dist(meX+40,meY+35,columbiaU.x,columbiaU.y)<20){
     image(customer,columbiaU.x-70,columbiaU.y,50,50) 
       
     if(sKeyPressCount>=5){
     sKeyPressCount=0
     points+=5 
  }
  }
 
  fill('#F44E36')
  ellipse(timeSquare.x,timeSquare.y,15)
  push()
  fill('black')
  textSize(12)
  text("Time Square",timeSquare.x-5,timeSquare.y+10)
  pop()
   if(dist(meX+40,meY+35,timeSquare.x,timeSquare.y)<20){
     image(customer,timeSquare.x-70,timeSquare.y,50,50)
       
     if(sKeyPressCount>=5){
     sKeyPressCount=0
     points+=5 
}
}
  // fill('pink')
  // ellipse(me.x,me.y,10)
// image(meCam,meX,meY,105,80)  
  mecam=true
  if(points==30){
    goscene031()
  }
}
function goscene031(){
  currentScene=7
}

function scene031(){
  background('#EDF0F0');
  image(mapImg,0,0,width,height)
  mecam=false
  okButton.show()
  
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(0,height/2.5-10,400,(height/2.3)-height/2.5+30)
  pop()
  
  text("Thank you for working hard!",width/2,height/2.5)
  text("Let us go to the album, and look what you have!",width/2,height/2.3)
      
  okButton.mousePressed(null)
  okButton.mousePressed(goscene040)
}
function goscene040(){
  currentScene=8
}

function scene040(){
  background('#EDF0F0');
  image(mapImg,0,0,width,height)

  okButton.hide()
  fileButton.show()

  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(20,140-10,120,25)
  pop()
  text("Lens Journey",80,140)
  fileButton.mousePressed(goscene041)
}
function goscene041(){
  currentScene=9
}

function scene041(){
  background('#DDE5E7');
  backButton.show()
  fileButton.hide()
  postButton.hide()
  mecam=false
  for(let i=0;i<photo.length;i++){
    photo[i].render()
    photo[i].move()
}
  backButton.mousePressed(goscene042)
}

class Photo{
  constructor(x,y,speed,img){
	this.x=x
	this.y=y
    this.speed=speed
    this.img=img
  }

  render(){
    image(this.img,this.x,this.y,90,120)
  }
    
  move(){
    if (this.x < -90){
      this.x=width + 50
      this.y=random(40,610)
    }else{
      this.x-=this.speed
    }
  }	
}
function goscene042(){
  currentScene=10
}

function scene042(){
  background('#EDF0F0');
  image(mapImg,0,0,width,height)
  mecam=false
  okButton.hide()
  backButton.hide()
  postButton.show()
  fileButton.show()
  

  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(20,140-10,120,25)
  pop()
  text("Lens Journey",80,140)
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(0,360-15,400,30)
  pop()
  text("Post your work for another 30 points!",width/2,360)
  fileButton.mousePressed(goscene041)
  postButton.mousePressed(goscene043)
}
function goscene043(){
  currentScene=11
  points=60
}

function scene043(){
  background('#EDF0F0');
  okButton.hide()
  backButton.hide()
  postButton.hide()
  fileButton.hide()
  plan1Button.show()
  plan2Button.show()
  plan3Button.show()
    mecam=false
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  image(mapImg,0,0,width,height)
  points=60
  rect(0,height/2.6-10,400,(height/2.2)-height/2.6+30)
  pop()
  text("Yay! You earned 60 points!",width/2,height/2.6)
  text("Let us plan the next part of our journey!",width/2,height/2.4)
  text("How will you spend your points?",width/2,height/2.2)
  
  plan1Button.mousePressed(goscene050)
  
  plan2Button.mousePressed(goscene051)
  
  plan3Button.mousePressed(goscene052)
}

function goscene050(){
  currentScene=12
  points=30
}
function scene050(){
  image(mapImg,0,0,width,height)
  plan1Button.hide()
  plan2Button.hide()
  plan3Button.hide()
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(0,height/2.2-10,400,(height/2)-height/2.2+30)
  pop()
    mecam=false

  text("You got a new camera!",width/2,height/2.2)
  text("Try it in your new journey!",width/2,height/2)
  resetButton.show()
  resetButton.mousePressed(goscene000)
}

function goscene051(){
  currentScene=13
  points=30
}
function scene051(){
  image(mapImg,0,0,width,height)
  plan1Button.hide()
  plan2Button.hide()
  plan3Button.hide()
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(0,height/2.2-10,400,(height/2)-height/2.2+30)
  pop()
  text("Good Luck!",width/2,height/2.2)
  text("Enjoy and get more photography skills!",width/2,height/2)
  resetButton.show()
  resetButton.mousePressed(goscene000)
    mecam=false

}

function goscene052(){
  currentScene=14
  points=0
}
function scene052(){
  image(mapImg,0,0,width,height)
  plan1Button.hide()
  plan2Button.hide()
  plan3Button.hide()
  push()
  noStroke()
  fill('rgba(255,206,214,0.7)')
  rect(0,height/2.2-10,400,(height/2)-height/2.2+30)
  pop()
  text("Congrats",width/2,height/2.2)
  text("Wish you have fun during the rest of Lens Journey!",width/2,height/2)
  resetButton.show()
    mecam=false

  resetButton.mousePressed(goscene000)
}

function goscene000(){
  currentScene=0
  points=20
  sKeyPressCount=0
  buyCam=false
  bought = false;
  showme = true;
  meX = 100
  meY = 100;
  gotitButton.show()
  gotitButton.mousePressed(goscene011)

}