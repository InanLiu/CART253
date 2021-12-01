"use strict";
// An array of buttons

let autoRotate = true;
let manualRotationAngle = 0;
let autoHue = true;
let manualHue = 0;
let state = `canvas`;//ada
//random dot for the water ink state
let colorfilling = [`rgba(228,138,160,0.5)`,`rgba(59,134,122,0.5)`,`rgba(57,79,133,0.5)`,
  `rgba(139,158,154,0.5)`,`rgba(169,188,167,0.5,)`,`rgba(245,210,83,0.5)`]

let toolBoxes = []; //stuff should be in the toolBoxes:3brushes , color change , eraser
//,drawing style change (time bases, speed bases,resting), dots effect, change the background color

let numToolBoxes = 8
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
    let toolBox = new Toolbox(0,i*40+20); // boxes will be place in same distance and touched
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
   }else if (state === `puzzle`){
     puzzle()
   }else if (state === `end`){
     end();
   }
}
function mainCanvas(){
//  colourfulBrush(); // the temporary need be improve
  displayToolbox();  // indivual interaction need be made
}

function displayToolbox(){ //show the toolboxes
  for (let i = 0; i < toolBoxes.length;i++){
  let toolBox = toolBoxes[i]
  toolBox.CheckInside(mouseX,mouseY);
  toolBox.over();
  toolBox.display();
  }
}

function colourfulBrush(){   // brush which is not satisfy (on mood) need be improve
  // all virables should be contorlable by user
  // the color change should only be in gray and black


  push()
  colorMode(HSB)
  if(autoHue === true){   // changeing hue base on the frame
    hue = frameCount % 360
  }
  fill(hue,100,100)
  translate(mouseX, mouseY);
  rotate(frameCount/40)  // the "line" rotate
  for (let i = -30; i <= 30 ; i += 4){
  ellipse(i, 0, 2, 2 );
}
  pop()
}
// start different brushes
function keyPressed(event){   //should be in the button in the future
   switch(event.key){ //switch event (will be use alot in toolboxes and part 2)  // learn from   Dave Briccetti
     case'H':
       autoHue = ! autoHue;
       break;
   }
}
