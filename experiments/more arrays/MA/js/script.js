"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let  soliloquy = [
  `To be or not to be`,
  `That is the question.`,
  `Whether 'tis nobler in the mind`,
  `To suffer the slings and arrows`,
  `Of outrageous fortune`,
  `Or to take arms`,
  `Against a sea of sorrows`,
  `And by apposing end them`
];

let currentIndex = 0;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  text(soliloquy[currentIndex], width/2, height/2);
}

function mousePressed(){
  currentIndex += 1;

  if (currentIndex === soliloquy.length){
    currentIndex = soliloquy.length - 1
  }
}
