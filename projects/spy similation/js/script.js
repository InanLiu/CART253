"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/


let state =`beginningLine`

let beginningLines = {
  string1:"U are a spy",
  string2:"try to get secret documents and send it back",
  string3:"be cautious with          (agent) they got hounds",
  x:300,
  y:250,
  y2:350,
  y3:500,
  colour1:1,
  colour2:1,
  colour3:0,
  colourC1:2,
  colourC2:1,
  colourC3:1,
};

let beginningLine2Visible = false;

let beginningline3Visible = false
let title = {
  string:`Paper please`,
  x:300,
  y:250,
};
let begin= {
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

   setTimeout(showBL2, 2000);

   setTimeout(showBL3, 5000);

   setTimeout(showstart,15000)
}

function showBL2(){
  beginningLine2Visible = true;
}

function showBL3(){
  beginningline3Visible = true;
}

function showstart(){
  state = `start`
}
// draw()
//
// Description of draw() goes here.
function draw() {
     if (state === `beginningLine`){
       beginningLine()
     }
     else if (state === `start`){
       start();
     }else if (state === `simulation1`){
       simulation1();
     }else if (state === `simulation2`){
       simulation2()
     }else if (state === `end1`){
       end1()
     }else if (state === `end2`){
       end2()
     }
}

function start(){
     background(0);

     push();

    fill(192, 209, 196);

     rect(60,210,480,80);
     rectMode(CENTER);



     pop();

     push();
     textAlign(CENTER,CENTER);
     textSize(64);
     textStyle(BOLD);

     fill(156, 5, 32);

     text(title.string,title.x,title.y);

     pop();

     push()

      begin.colour-=begin.colourC;
      if(begin.size>35){
       begin.colourC=-begin.colourC;
      }
      else if(begin.size<32){
      begin.colourC=-begin.colourC;
      }

     begin.size=begin.size+begin.sizeC;

     if(begin.size>35){
       begin.sizeC=-begin.sizeC;
     }
     else if(begin.size<32){
       begin.sizeC=-begin.sizeC;
     }
     textAlign(CENTER,CENTER);
     textSize(begin.size);

     fill(begin.colour);

     text(begin.string,begin.x,begin.y);
     pop();
     }
 function beginningLine(){
     background(0)
     push()

     textAlign(CENTER,CENTER);
     textSize(64);
     textStyle(BOLD);

     beginningLines.colour1+=beginningLines.colourC1
     if(beginningLines.colour1===255){
       beginningLines.colourC1=-beginningLines.colourC1
     }
     fill(beginningLines.colour1)

     text(beginningLines.string1,beginningLines.x,beginningLines.y)
     pop()

     if (beginningLine2Visible){
       push()

       textAlign(CENTER,CENTER);
       textSize(32);
       textStyle(BOLD);


       beginningLines.colour2+=beginningLines.colourC2

        if(beginningLines.colour2===255){
         beginningLines.colourC2=-beginningLines.colourC2
       }

       fill(beginningLines.colour2)
       rectMode(CENTER)
       text(beginningLines.string2,beginningLines.x,beginningLines.y2,500,250)
       pop()


     }
     // push()
     //
     // textAlign(CENTER,CENTER);
     // textSize(32);
     // textStyle(BOLD);
     //
     //
     // beginningLines.colour2+=beginningLines.colourC2
     //
     //  if(beginningLines.colour2===255){
     //   beginningLines.colourC2=-beginningLines.colourC2
     // }
     //
     // fill(beginningLines.colour2)
     // rectMode(CENTER)
     // text(beginningLines.string2,beginningLines.x,beginningLines.y2,500,250)
     // pop()
     //
     if (beginningline3Visible){
       push()

      textAlign(CENTER,CENTER);
      textSize(32);
      textStyle(BOLD);


      beginningLines.colour3+=beginningLines.colourC3

       if(beginningLines.colour3===255){
        beginningLines.colourC3=-beginningLines.colourC3
      }

      fill(beginningLines.colour3)
      rectMode(CENTER)
      text(beginningLines.string3,beginningLines.x,beginningLines.y3,500,250)
      pop()
     }
     //  push()
     //
     // textAlign(CENTER,CENTER);
     // textSize(32);
     // textStyle(BOLD);
     //
     //
     // beginningLines.colour3+=beginningLines.colourC3
     //
     //  if(beginningLines.colour3===255){
     //   beginningLines.colourC3=-beginningLines.colourC3
     // }
     //
     // fill(beginningLines.colour3)
     // rectMode(CENTER)
     // text(beginningLines.string3,beginningLines.x,beginningLines.y3,500,250)
     // pop()


 }
 function simulation1(){
    background(0);
 }
 function simulation2(){

 }
 function end1(){

 }
 function end2(){

 }
 function mousePressed(){
  if (state === `start`)
  state = `simulation1`
 }
