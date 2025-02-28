function draw(){
  
   switch(currentScene){
    case 0:
      scene000()
      break
    case 1:
      scene001()
      break
    case 2:
      scene010()
      break
    case 3:
      scene011()
      break
    case 4:
      scene020()
      break
    case 5:
      scene021()
      break
    case 6:
      scene030()
      break
    case 7:
      scene031()
      break
    case 8:
      scene040()
      break
    case 9:
      scene041()
      break
    case 10:
      scene042()
      break
    case 11:
      scene043()
      break
    case 12:
      scene050()
      break
    case 13:
      scene051()
      break
    case 14:
      scene052()
      break
    
 }

//points
 if (currentScene!== 0 && currentScene !== 1) {
   push()
   noStroke()
   fill('rgba(255,206,214,0.7)')
   rect(width-110,15,100,30)
   pop()
   
  fill(0)
  textSize(16)
  text(`Points: ${points}`,width-60,30)
 }
//mecam  
  if(mecam==true){
    image(meCam,meX,meY,105,80)
    if (isFlashing) {
    image(flashing,meX+37,meY+43,20,20)
  }
  }
}