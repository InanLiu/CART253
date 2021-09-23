"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let backgroundShade = 0;
let circle={
  x:0,
  y:250,
  size:100,
  speed:1,
  fill:255,
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {
  background(backgroundShade);


  circle.x=circle.x+circle.speed;
  circle.x=constrain(circle.x,0,width)

  circle.fill= map(circle.x,0,width,0,255);
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);


}
