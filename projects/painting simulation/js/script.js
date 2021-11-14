"use strict";

let state = `colourfulBrush`;
//random dot for the water ink state
let colorfilling = [`rgba(228,138,160,0.5)`,`rgba(59,134,122,0.5)`,`rgba(57,79,133,0.5)`,
  `rgba(139,158,154,0.5)`,`rgba(169,188,167,0.5,)`,`rgba(245,210,83,0.5)`]
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();

}
// draw()
//
// Description of draw() goes here.

// shall be at least of 3 stages to creative painting
function draw() {
  //
  if (state === `beginningLine`){
     beginningLine()
   }
   else if (state === `waterInk`){
     start();
   }else if (state === `colourfulBrush`){
     colourfulBrush();
   }else if (state === `end1`){
     end1();
   }else if (state === `end2`){
     end2();
   }




}
function colourfulBrush(){
  // all virables should be contorlable by user
  push()
  colorMode(HSB)
  fill(frameCount % 360,100,100)
  translate(mouseX, mouseY);
  rotate(frameCount/40)
  for (let i = -30; i <= 30 ; i += 4){
  ellipse(i, 0, 2, 2 );
}
  pop()
}
// start different brushes
function mousePressed(){

}
