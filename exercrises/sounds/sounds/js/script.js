"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let barkSFX;

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
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
}

function mousePressed(){
   barkSFX.play();
}
