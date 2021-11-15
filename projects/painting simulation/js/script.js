"use strict";

let state = `canvas`;
//random dot for the water ink state
let colorfilling = [`rgba(228,138,160,0.5)`,`rgba(59,134,122,0.5)`,`rgba(57,79,133,0.5)`,
  `rgba(139,158,154,0.5)`,`rgba(169,188,167,0.5,)`,`rgba(245,210,83,0.5)`]

let toolBoxes = [];
let numToolBoxes = 15
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(110);
  noStroke();

  // need find the way make it out of the setup or organization
  //arrary of the toolboxs
  for(let i = 0; i < numToolBoxes; i++){
    let toolBox = new Toolbox(20,i*40+20); // boxes will be place in same distance and touched
    toolBoxes.push(toolBox);
}
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
   else if (state === `canvas`){
     mainCanvas();
   }else if (state === `qqqq`){
     qqqq();
   }else if (state === `end`){
     end();
   }
}
function mainCanvas(){
  colourfulBrush(); // the temporary need be improve
  displayToolbox();  // indivual interaction need be made
}

function displayToolbox(){ 
  for (let i = 0; i < toolBoxes.length;i++){
  let toolBox = toolBoxes[i]
  toolBox.display();
  }
}

function colourfulBrush(){   // brush which is not satisfy (on mood) need be improve
  // all virables should be contorlable by user
  // the color change should only be in gray and black
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
