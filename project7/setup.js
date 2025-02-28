//按钮
let startButton
let okButton
let gotitButton
let fileButton
let backButton
let postButton
let resetButton
let plan1Button
let plan2Button
let plan3Button

//基本
let points=20
let me
let currentScene=0

//地点
let cameraStore
let centralPark
let westVillage
let dumbo
let prospectPark
let NYU
let columbiaU
let timeSquare

//事件
let buyCam=false
let bought
let tutorial=false
let halloween=true
let showme=true
let isVisible=true
let blinkInterval=20
let isFlashing = false
let mecam=false

//移动
let speed=1
let move={left:false,right:false,up:false,down:false}

//计次
let sKeyPressCount=0

//照片
let photo=[]
let photoNum=24

//外部资源
let mapImg
let customer
let meCam
let pixelFont
let camera
let file
let flashing
let shutterSound
let bgm

function preload(){
  mapImg= loadImage('NYCmap.png')
  customer=loadImage('character/customer.png')
  file=loadImage('file.png')
  me=loadImage('character/me.png')
  meCam=loadImage('character/meCam.png')
  pixelFont=loadFont('textfont/pixelFont.ttf')
  camera=loadImage('camera.png')
  soundFormats('mp3','wav')
  shutterSound=loadSound('shutter.mp3')
  flashing=loadImage('character/flashlight.png')
  bgm=loadSound('bgm.mp3')
  
  for(let i=0;i<photoNum;i++){
    photo[i]=loadImage(`album/photo${i + 1}.jpg`)
  }
}

function setup() {
  createCanvas(400, 650);
  angleMode(DEGREES)
  textAlign(CENTER, CENTER)
  textFont(pixelFont)
  textStyle(BOLD)
  bgm.loop()
  bgm.setVolume(0.3)
  // me=createVector(width/2,height/2)
  meX=width/2
  meY=height/2
  meCamX=meX
  meCamY=meY
  meFlashX=meX
  meFlashY=meY
  
  cameraStore=createVector(150,250)
  centralPark=createVector(200,200)
  westVillage=createVector(120,360)
  dumbo=createVector(160,450)
  prospectPark=createVector(220,620)
  NYU=createVector(150,360)
  columbiaU=createVector(210,130)
  timeSquare=createVector(200,240)
  
  
//开始按钮
  startButton=createButton("START GAME")
  startButton.position(125,400)
  startButton.style('background-color','#000000') 
  startButton.style('color','#FFFFFF')          
  startButton.style('font-size','20px')       
  startButton.style('padding','10px 20px')      
  startButton.style('border','none')
  startButton.style('font-family', pixelFont)
  
//ok按钮
  okButton=createButton("OK!")
  okButton.position(165,400)
  okButton.style('background-color','#000000')
  okButton.style('color','white')     
  okButton.style('font-size','20px')       
  okButton.style('padding','10px 20px')   
  okButton.style('border','none')
//gotit按钮
  gotitButton=createButton("Got It!")
  gotitButton.position(165,400)
  gotitButton.style('background-color','#000000')
  gotitButton.style('color','white')
  gotitButton.style('font-size','20px') 
  gotitButton.style('padding','10px 20px')
  gotitButton.style('border','none')
//file按钮
  fileButton=createButton('')
  fileButton.style('background-image','url("file.png")')
  fileButton.style('background-color','transparent')
  fileButton.style('background-size','cover')
  fileButton.style('border','none')
  fileButton.style('width','90px')
  fileButton.style('height','90px')
  fileButton.position(30,30)
//back按钮
  backButton=createButton("Back")
  backButton.position(20,10)
  backButton.style('background-color','#000000')
  backButton.style('color','white')
  backButton.style('font-size','10px')        
  backButton.style('padding','10px 20px')    
  backButton.style('border','none')
//post按钮
  postButton=createButton("Post")
  postButton.position(165,400)
  postButton.style('background-color','#000000') 
  postButton.style('color','white') 
  postButton.style('font-size','20px')        
  postButton.style('padding','10px 20px')    
  postButton.style('border','none')
//reset按钮
  resetButton=createButton("REPLAY")
  resetButton.position(150,height/1.8)
  resetButton.style('background-color','#000000')
  resetButton.style('color','white') 
  resetButton.style('font-size','20px')        
  resetButton.style('padding','10px 20px')    
  resetButton.style('border','none')
//plan按钮
  plan1Button=createButton("Buy a new camera! 30 Points")
  plan1Button.position(125,height/2)
  plan1Button.style('background-color','#000000')
  plan1Button.style('color','white') 
  plan1Button.style('font-size','10px')        
  plan1Button.style('padding','5px 10px')    
  plan1Button.style('border','none')
  
  plan2Button=createButton("Take professional photography classes! 30 Points")
  plan2Button.position(125,height/1.8)
  plan2Button.style('background-color','#000000') 
  plan2Button.style('color','white')             
  plan2Button.style('font-size','10px')      
  plan2Button.style('padding','5px 10px')   
  plan2Button.style('border','none')
  
  plan3Button=createButton("Both!!! 60 Points")
  plan3Button.position(125,height/1.6)
  plan3Button.style('background-color','#000000')
  plan3Button.style('color','white') 
  plan3Button.style('font-size','10px')        
  plan3Button.style('padding','5px 10px')    
  plan3Button.style('border','none')
  
  
for (let i=0;i<photoNum;i++){
    // 每张照片对应一个Photo对象
    photo[i]=new Photo(random(width),random(height),1,photo[i]);
  }
}

