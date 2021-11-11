"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let mic;

let state = `simulation`

let upBlocks = [];
let downBlocks = [];

let numBlocks = 5;

let addUpBlockInterval = 20;

let oscillator;

let user

function preload(){
}
// setup()

function setup() {
   createCanvas(600,600);
   userStartAudio();

   for(let i = 0; i < numBlocks; i++){
     let x = random(0,width)
     let y = 0
     let blockH = random(0,height/2)
     let upBlock = new Upbolck(x,y,blockH)
     upBlocks.push(upBlock)

   }

   for(let i = 0; i < numBlocks; i++){
     let x = random(0,width)
     let y = height
     let blockH = random(height/2,height)
     let downBlock = new Downbolck(x,y,blockH)
     downBlocks.push(downBlock)

   }

   mic = new p5.AudioIn() // mic to stand the p5 audioIn
   mic.start(); //user option of turning the mic

   let x = 20
   let y = height/2
    user = new User(x,y);

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

  // let level = mic.getLevel()
  //
  // console.log(level)

  //simulation the basics of user object
  user.checkAudioIn()
  user.handleIsaac()
  user.move()
  user.displayIsaac()

  //upblock
  for (let i = 0; i <  upBlocks.length; i++){
    let upBlock = upBlocks[i]
    upBlock.move();
    upBlock.wrap();
    upBlock.display();
  }

  for (let i = 0; i <  downBlocks.length; i++){
    let downBlock = downBlocks[i]
    downBlock.move();
    downBlock.wrap();
    downBlock.display();
  }
}
