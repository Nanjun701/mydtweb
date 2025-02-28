let my1Hobby=["📱","📺","🎸","🎮","🥢","💤","💬","🚽"]
let my2Hobby=["📱","📺","🛍","🎸","🍳","🥢","💬","🚽"]
let my3Hobby=["📱","📺","🎸","🎮","🥢","💤","💬","🚽"]
let my4Hobby=["📱","📺","🎸","🎮","🥢","💃","💤","💬"]
let my5Hobby=["📱","📺","🛍","🎸","🎮","🥢","💃","💬"]
let my6Hobby=["📱","🛍","🎮","🍳","🥢","💃","💤","🚽"]
let my7Hobby=["📱","📺","🎮","🍳","🥢","💃","💬","🚽"]

let hobbies=[my1Hobby,my2Hobby,my3Hobby,my4Hobby,my5Hobby,my6Hobby,my7Hobby]
let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let counter=0
let displayText=false
let currentDay=""
let currentHobby=[]
let switchSpeed=100

function setup(){
createCanvas(600,600)
frameRate(5)
}

function draw(){
background('rgb(244,220,224)')
angleMode(DEGREES)
fill("rgb(247,225,104)")
strokeWeight(3)
stroke("rgb(246,204,73)")
circle(width/2,height/2,200)

fill("white")
ellipse(260,280,30,45)
ellipse(340,280,30,45)

noStroke()
fill('black')
ellipse(255,280,15,30)
ellipse(335,280,15,30)

noFill()
strokeWeight(3)
stroke("rgb(187,145,13)")
arc(300,340,70,30,0,180)

fill("rgb(250,166,180)")
strokeWeight(3)
stroke("rgb(253,134,154)")
ellipse(230,300,20,10)
ellipse(370,300,20,10)

if(displayText){
textSize(80)
text(currentDay,30,80)
textSize(100)
text(currentHobby[counter],mouseX,mouseY)
counter++
if(counter>=currentHobby.length){
counter=0
}
}
}

function keyPressed(){
if(key>="1"&&key<="7"){
let dayIndex=key-1
currentDay=days[dayIndex]
currentHobby=hobbies[dayIndex]
displayText=true
counter=0
}
}
