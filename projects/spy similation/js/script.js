"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/


let state =`simulation1`

let beginningLines = { // beginningLines
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
let player = {
  x:300,
  y:450,
  size:45,
  ax:0,
  ay:0,
  vx:0,
  vy:0,
  firction:0.8 ,
  maxSp:2,
};
 let agentRandom = {
   x:300,
   y:150,
   size:60,
   vx:0,
   vy:0,
   speed:2,
   acceleration:0.5,
 };

 let barkSFX = undefined
// setup()
//
// Description of setup() goes here.
function preload(){
  barkSFX = loadsound(`assets/sounds/bark.wav`)
}

function setup() {
   createCanvas(600,600);

   setTimeout(showBL2, 2000);

   setTimeout(showBL3, 5000);

   // setTimeout(showstart,15000)
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

// function start(){
//      background(0);
//
//      push();
//
//     fill(192, 209, 196);
//
//      rect(60,210,480,80);
//      rectMode(CENTER);
//
//
//
//      pop();
//
//      push();
//      textAlign(CENTER,CENTER);
//      textSize(64);
//      textStyle(BOLD);
//
//      fill(156, 5, 32);
//
//      text(title.string,title.x,title.y);
//
//      pop();
//
//      push();
//
//       begin.colour-=begin.colourC;
//       if(begin.size>35){
//        begin.colourC=-begin.colourC;
//       }
//       else if(begin.size<32){
//       begin.colourC=-begin.colourC;
//       }
//
//      begin.size=begin.size+begin.sizeC;
//
//      if(begin.size>35){
//        begin.sizeC=-begin.sizeC;
//      }
//      else if(begin.size<32){
//        begin.sizeC=-begin.sizeC;
//      }
//      textAlign(CENTER,CENTER);
//      textSize(begin.size);
//
//      fill(begin.colour);
//
//      text(begin.string,begin.x,begin.y);
//      pop();
//      }
//  function beginningLine(){
//      background(0);
//      push();
//
//      textAlign(CENTER,CENTER);
//      textSize(64);
//      textStyle(BOLD);
//
//      beginningLines.colour1+=beginningLines.colourC1
//      if(beginningLines.colour1===255){
//        beginningLines.colourC1=-beginningLines.colourC1;
//      }
//      fill(beginningLines.colour1);
//
//      text(beginningLines.string1,beginningLines.x,beginningLines.y);
//      pop();
//
//      if (beginningLine2Visible){
//        push();
//
//        textAlign(CENTER,CENTER);
//        textSize(32);
//        textStyle(BOLD);
//
//
//        beginningLines.colour2+=beginningLines.colourC2;
//
//         if(beginningLines.colour2===255){
//          beginningLines.colourC2=-beginningLines.colourC2;
//        }
//
//        fill(beginningLines.colour2);
//        rectMode(CENTER);
//        text(beginningLines.string2,beginningLines.x,beginningLines.y2,500,250);
//        pop();
//
//
//      }
//
//      if (beginningline3Visible){
//        push();
//
//       textAlign(CENTER,CENTER);
//       textSize(32);
//       textStyle(BOLD);
//
//
//       beginningLines.colour3+=beginningLines.colourC3;
//
//        if(beginningLines.colour3===255){
//         beginningLines.colourC3=-beginningLines.colourC3;
//       }
//
//       fill(beginningLines.colour3);
//       rectMode(CENTER);
//       text(beginningLines.string3,beginningLines.x,beginningLines.y3,500,250);
//       pop();
//      }
//
//
//  }
 function simulation1(){  //stage: simulation
    background(50);


    displayShape();
    handleInput();
    movePlayer();
    moveAgentRandom();

 }
 function handleInput(){   // control of player
    if (keyIsDown(RIGHT_ARROW)){
      player.ax = 0.5;
    }
    else if (keyIsDown(LEFT_ARROW))  {
      player.ax = -0.5;
    }
    else if (keyIsDown(UP_ARROW)) {
      player.ay = -0.5;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      player.ay = 0.5;
    }
    else {
        player.ax = 0;
 }

 }
 function movePlayer(){     //moving like a character (speed up and slow down)

    player.vx += player.ax;
    player.vy += player.ay;

    //apply firction   idk what happened
    // player.vx *= player.firction
    // player.vy *= player.firction

    //contrain speed
    player.vx = constrain(player.vx, -player.maxSp, player.maxSp);
    player.vy = constrain(player.vy, -player.maxSp, player.maxSp);


    //apply speed
    player.x += player.vx;
    player.y += player.vy;


    // Constrain position to the canvas
    player.x = constrain(player.x , 0, width);
    player.y = constrain(player.y , 0, height);
 }

 function displayShape(){ //player
   push();
   noStroke();
   fill(255);
   ellipse(player.x,player.y,player.size)
   pop();
 }

 function moveAgentRandom() {

   let change = random();
   if (change < 0.05){
     agentRandom.vx = random(-agentRandom.speed,agentRandom.speed);
     agentRandom.vy = random(-agentRandom.speed,agentRandom.speed);
   }
   agentRandom.x += agentRandom.vx
   agentRandom.y += agentRandom.vy

   stayInCanvas();

   ellipse(agentRandom.x,agentRandom.y,agentRandom.size);
 }


 // function checkCollision(){  ?????????  pippin wrote in class (not sure)
 //   let d = dist (player.x,player.y,agentRandom.x,agentRandom.y);
 //   if (d < player.size/2 + agentRandom.size/2 ){
 //     barkSFX.play();
 //   }
 // }

 function stayInCanvas(){   //???????
   agentRandom.x = constrain(agentRandom.x , 0, width);
   agentRandom.y = constrain(agentRandom.y , 0, height);
 }

 function simulation2(){

 }

 function end1(){

 }

 function end2(){

 }

 function mousePressed(){ //changging state
  if (state === `start`)
  state = `simulation1`;
 }
