"use strict";

/**************************************************
project 1 spy simulation
Liu Shanqi

Here is a description of this template p5 project.
**************************************************/


let state =`simulation1`

let beginningLines = { // beginningLines
  string1:"U are a spy",
  string2:"try to get secret documents and send it back",
  string3:"be cautious with          (agent) they got hounds",
  // postion of lines
  x:300,
  y:250,
  y2:350,
  y3:500,
  // fade effects
  colour1:1,
  colour2:1,
  colour3:0,
  colourC1:2,
  colourC2:1,
  colourC3:1,
};


let title = {
  string:`Paper please`,
  x:300,
  y:250,
};

let begin= {
  string:`press to begin`,
  x:300,
  y:450,
  // shining effect
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

 let patrol = {
   x:20,
   y:150,
   size:30,
   speed:3,
 };

 let agentRandom = {
   x:500,
   x1:100,
   y:300,
   y1:300,
   size:50,
   iSize:60,
   vx:0,
   vy:0,
   vx1:0,
   vy1:0,
   speed:1,
   speed1:2,
   contrainXL:30,
   contrainXR:570,
   contrainYU:303,
   contrainYD:570,
 };
 let documents = {
   x:300,
   y:80,
   size:40,
 }


 let beginningLine2Visible = false;

 let beginningline3Visible = false;

 let barkSFX = undefined;

 let agentS = undefined;

 let agentB = undefined;

 let doc = undefined;
// setup()
//
// Description of setup() goes here.
function preload(){
  barkSFX = loadSound(`assets/sounds/bark.wav`)   // sound effect of get caught
  agentS = loadImage(`assets/images/clown60.png`)
  agentB = loadImage(`assets/images/clown60.png`)
  doc = loadImage(`assets/images/doc.png`)
}

function setup() {
   createCanvas(600,600);

   setTimeout(showBL2, 2000); // show the beginningLine1

   setTimeout(showBL3, 5000); // show the beginningLine2

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
function draw() {    //states:
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
    moveAgentRandom1();
    moveAgentRandom2();
    patrolAgent();
    displayDocuments();
    checkCollisionOfAgent();


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
        player.ay = 0;
        player.ax = 0;
 }

 }
 function movePlayer(){     //moving like a character (speed up and slow down)

    //apply acceleration
    player.vx += player.ax;
    player.vy += player.ay;

    //apply firction   idk what happened
    player.vy *= player.firction
    player.vx *= player.firction

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
 function displayDocuments(){
   ellipse(documents.x,documents.y,documents.size)
 }
 function moveAgentRandom1() {

   push();
   let change = random();
   if (change < 0.02){
     agentRandom.vx = random(-agentRandom.speed,agentRandom.speed);
     agentRandom.vy = random(-agentRandom.speed,agentRandom.speed);
   }
   agentRandom.x += agentRandom.vx
   agentRandom.y += agentRandom.vy

   stayInCanvas();

   noStroke();
   noFill();
   ellipse(agentRandom.x,agentRandom.y,agentRandom.size);
   imageMode(CENTER);
   image(agentB,agentRandom.x,agentRandom.y,agentRandom.iSize,agentRandom.iSize);

   pop();
 }

 function moveAgentRandom2() {

   push();
   let change = random();
   if (change < 0.01){
     agentRandom.vx1 = random(-agentRandom.speed1,agentRandom.speed1);
     agentRandom.vy1 = random(-agentRandom.speed1,agentRandom.speed1);
   }

   agentRandom.x1 += agentRandom.vx1;
   agentRandom.y1 += agentRandom.vy1;

   stayInCanvas();
   noStroke();
   noFill();
   ellipse(agentRandom.x1,agentRandom.y1,agentRandom.size);


    imageMode(CENTER);
    image(agentB,agentRandom.x1,agentRandom.y1,agentRandom.iSize,agentRandom.iSize);
   pop();
 }

 function patrolAgent(){

   push();
   patrol.x += patrol.speed
   if (patrol.x > width ){
     patrol.speed = -patrol.speed
   }
   else if (patrol.x < 0) {
     patrol.speed = -patrol.speed
   }
   noStroke();
   noFill();
   ellipse(patrol.x,patrol.y,patrol.size);
   pop();

   imageMode(CENTER);
   image(agentS,patrol.x,patrol.y,patrol.size,patrol.size);
   pop();


 }

 function checkCollisionOfAgent(){ // ?????????  pippin wrote in class (not sure)
   let d = dist (player.x,player.y,agentRandom.x,agentRandom.y);
   if (d < player.size/2 + agentRandom.size/2 ){
     barkSFX.play();
     // Undo the last move by subtracting velocity
    player.x -= player.vx;
    player.y -= player.vy;
    // Zero the velocity and acceleration
   freeze();

   }
   let d1 = dist (player.x,player.y,agentRandom.x1,agentRandom.y1);
   if (d1 < player.size/2 + agentRandom.size/2 ){
     barkSFX.play();
     // Undo the last move by subtracting velocity
    player.x -= player.vx;
    player.y -= player.vy;
    // Zero the velocity and acceleration
   freeze();

   }

   let d2 = dist (player.x,player.y,patrol.x,patrol.y);
   if (d2 < player.size/2 + patrol.size/2 ){
     barkSFX.play();
     // Undo the last move by subtracting velocity
    player.x -= player.vx;
    player.y -= player.vy;
    // Zero the velocity and acceleration
   freeze();

   }
 }

 function stayInCanvas(){   //contrain of random agent
   agentRandom.x = constrain(agentRandom.x , agentRandom.contrainXL, agentRandom.contrainXR);
   agentRandom.y = constrain(agentRandom.y , agentRandom.contrainYU, agentRandom.contrainYD);

   agentRandom.x1 = constrain(agentRandom.x1 , agentRandom.contrainXL, agentRandom.contrainXR);
   agentRandom.y1 = constrain(agentRandom.y1 , agentRandom.contrainYU, agentRandom.contrainYD);
 }

 function freeze(){
   player.vx = 0;
   player.vy = 0;
   player.ax = 0;
   player.ay = 0;
   change = 0 ;
 }

 function displayScore() {
   push();
   fill(255);
   textAlign(LEFT, TOP);
   textSize(32);
   text(score, width / 8, height / 8);
   pop();
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
