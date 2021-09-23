"use strict";

/**************************************************
I like to move it
Liu Shanqi

Here is a description of this template p5 project.
I am in a tough time.  So I make a "The Scream" of "P5 version" to express my
felling right now. Shout to Edvard Munch "be creative in tough time"
**************************************************/

let backgroundShade = 0;

let circle={
  x1:0,
  x2:0,
  y:120,
  w:36,
  speed:1,
  fill:255,
};

let mouth={
  x:250,
  y:250,
  w:55,
  h:55,
};
// setup()
//
// Description of setup() goes here.
function setup() {

}
/**
Description of draw()
*/
function draw() {
  createCanvas(500,500);

  background(backgroundShade);
//mouth
  mouth.w+=random(-3,3);//mouth changing
  mouth.h+=random(-3,3);//mouth changing
  rectMode(CENTER);
  rect(mouth.x,mouth.y, mouth.w, mouth.h);//drawing of mouth
  mouth.w=constrain(mouth.w,10,100);//restriction of mouth (It will go extremely hilarious without restriction)
  mouth.h=constrain(mouth.h,10,100);//
//eyes
  circle.w=map(mouseY,height,0,36,50);// mouth size control by mouseY
  circle.fill=map(mouseX,0,width,50,255)// colour control by mouseX
  fill(circle.fill);

  circle.x1+=circle.speed;//movemengt of a eye
  circle.x1=constrain(circle.x1,0,width/3);//stop point of the eye


  ellipse(circle.x1, circle.y, circle.w,);//drawing of a eye

  circle.x2+=circle.speed;//movemengt of a eye
  ellipse(circle.x2, circle.y, circle.w,);//stop point of the eye

  circle.x2=constrain(circle.x2,0,width/1.5);//drawing of a eye

//arms

stroke(255);//arm colour
strokeWeight(5);//arm weight
line(50, 200, 100, 400);//left arm
line(450,200, 400, 400);//right arm


}
