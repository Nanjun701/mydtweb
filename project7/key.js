function keyPressed() {
  if(keyCode===LEFT_ARROW){
    move.left=true
  }else if(keyCode===RIGHT_ARROW){
    move.right=true
  }else if(keyCode=== UP_ARROW) {
    move.up=true
  }else if(keyCode===DOWN_ARROW){
    move.down=true
  }
  
  if(key===" "&&buyCam){ 
    bought=true
    points=0
  }
  if(key==='s'||key==='S'){
    sKeyPressCount++
    shutterSound.play()
    isFlashing = true
    setTimeout(() => {
    isFlashing=false
    }, 300)
  }
}
  



function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    move.left = false;
  } else if (keyCode === RIGHT_ARROW) {
    move.right = false;
  } else if (keyCode === UP_ARROW) {
    move.up = false;
  } else if (keyCode === DOWN_ARROW) {
    move.down = false;
  }
}