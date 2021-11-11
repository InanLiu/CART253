"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let mic;

let state = `simulation`

let upBlocks = [];

let numBlocks = 10;

let addUpBlockInterval = 20;

let oscillator;

function preload(){
}
// setup()

function setup() {
   createCanvas(600,600);
   userStartAudio();

   for(let i = 0; i < numBlocks; i++){
     let x = random(0,width)
     let y = 0;
     let upblock = new Upbolck(x,y)
     upBlocks.push(upblock)

   }

   mic = new p5.AudioIn() // mic to stand the p5 audioIn
   mic.start(); //user option of turning the mic

   // let x = 20
   // let y = height/2
   //  let isaac = new User();

}

// draw()
function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `success`) {
    success();
  } else if (state === `dead`) {
    dead();
  }


  // let level
  // let newFreq = map(mouseY,height,0,10,22000);
  // let sinAngle = sin(angle);
  // let newFreq = map(sinAngle,-1,1,440,880)
  // oscillator.freq(newFreq);


  // let newRate = map(mouseX,0,width,-3,3)
  // backSFX.rate(newRate);
}

function simulation(){

  //simulation the basics of user object
  // isaac.checkAudioIn()
  // isaac.displayIsaac()
  // isaac.movementOfIsaac()

  //upblock
  for (let i = 0; i <  upblocks.length; i++){
    let upblock = upblocks[i]
    upbolck.move();
    upbolck.wrap();
    upbolck.display();
  }
}
