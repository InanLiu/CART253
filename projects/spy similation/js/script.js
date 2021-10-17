"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let state=`start`

let title={
  string:`Paper please`,
  x:300,
  y:250,
};
let begin={
  string:`press to begin`,
  x:300,
  y:450,
  sizeC:0.035,
  size:32,
  colour:255,
  colourC:3.5,
};
// setup()
//
// Description of setup() goes here.
function setup() {
   createCanvas(600,600);

}

// draw()
//
// Description of draw() goes here.
function draw() {

   background(0);

   push()

  fill(192, 209, 196)

   rect(60,210,480,80);
   rectMode(CENTER);



   pop()

   push();
   textAlign(CENTER,CENTER);
   textSize(64);
   textStyle(BOLD);

   fill(156, 5, 32);

   text(title.string,title.x,title.y);

   pop();

   push()

    begin.colour-=begin.colourC
    if(begin.size>35){
     begin.colourC=-begin.colourC
    }
    else if(begin.size<32){
    begin.colourC=-begin.colourC
    }

   begin.size=begin.size+begin.sizeC

   if(begin.size>35){
     begin.sizeC=-begin.sizeC
   }
   else if(begin.size<32){
     begin.sizeC=-begin.sizeC
   }
   textAlign(CENTER,CENTER);
   textSize(begin.size);

   fill(begin.colour);

   text(begin.string,begin.x,begin.y);
   pop()








}
