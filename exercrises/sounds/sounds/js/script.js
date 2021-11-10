"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let barkSFX;
let oscillator;
let angle = 2 ;

function preload(){
  // soundFormats('mp3', 'ogg')
   barkSFX = loadSound(`assets/sounds/bark.wav`);
}
// setup()
//
// Description of setup() goes here.
function setup() {
   createCanvas(600,600);
   userStartAudio();
   oscillator = new p5.Oscillator(440,`sine`)
   oscillator.amp(0.1)
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // let newFreq = map(mouseY,height,0,10,22000);
  let sinAngle = sin(angle);
  let newFreq = map(sinAngle,-1,1,440,880)
  oscillator.freq(newFreq);

  angle = angle + 1;
  //
  // push();
  // textSize(32);
  // textAlign(LEFT,CENTER);
  // fill(255);
  // text(newFreq,100,height/2);
  // pop();


  // let newRate = map(mouseX,0,width,-3,3)
  // backSFX.rate(newRate);
}

function mousePressed(){
  oscillator.start();
  // barkSFX.play();
}
function mouseReleased(){
  oscillator.stop();
}
