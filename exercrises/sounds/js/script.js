"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let mic;

let isaac = {
  x: 20,
  y: 300,
  size:40,
  vx:0,
  vy:0,
  image:undefined,
  sounds:false,
};

let oscillator;

function preload(){


}
// setup()
//
// Description of setup() goes here.
function setup() {
   createCanvas(600,600);
   userStartAudio();
   // oscillator = new p5.Oscillator(440,`sine`)
   // oscillator.amp(0.1)

   mic = new p5.AudioIn() // mic to stand the p5 audioIn
   mic.start(); //user option of turning the mic


}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  let level = mic.getLevel()

  // console.log(level)

  // let level
  // let newFreq = map(mouseY,height,0,10,22000);
  // let sinAngle = sin(angle);
  // let newFreq = map(sinAngle,-1,1,440,880)
  // oscillator.freq(newFreq);
  //
  checkAudioIn()
  displayIsaac()
  movementOfIsaac()

  // let newRate = map(mouseX,0,width,-3,3)
  // backSFX.rate(newRate);
}

// function mousePressed(){
//
//
// }
// function mouseReleased(){
//
// }
function checkAudioIn(){
  let level = mic.getLevel() // question why I have to call it in here to make it work

  if (mic.getLevel() > 0.01){
    isaac.sounds = true;
  }else{
    isaac.sounds = false;
  }
}

function movementOfIsaac(){
  if (isaac.sounds === true){
  let level = mic.getLevel() // question why I have to call it in here to make it work
  isaac.vy = -level * 5
}else{
  isaac.vy = 1
}

  //move the isaac
  // isaac.x += isaac.vx
  // isaac.y += isaac.vy


}

function displayIsaac(){
  push();
  ellipse(isaac.x,isaac.y,isaac.size)
  fill(255)
  pop();
}
