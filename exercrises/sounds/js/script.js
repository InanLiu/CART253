"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let mic;

let synth;

let notes = [`F4`,`A3`,`E3`,`Bb4`,`Eb3`,`D3`,`Ab4`,`F#3`];

let state = `simulation`;

let blocks = [];

let numBlocks = 100;

let space = 150;

let addUpBlockInterval = 20;

let oscillator;

let user;

function preload(){
}
// setup()

function setup() {
   createCanvas(1200,600);
   userStartAudio();

   for(let i = 0; i < numBlocks; i++){
     let x = random(0,width);
     let y = 0;
     let blockH = random(0,height/2);
     let upBlock = new Upbolck(i*space,y,blockH);
     blocks.push(upBlock);

   }

   for(let i = 0; i < numBlocks; i++){
     let x = random(0,width);
     let y = height;
     let blockH = random(height/2,height);
     let downBlock = new Downbolck(i*space,y,blockH);
     blocks.push(downBlock);

   }
   synth = new p5.PolySynth();
   mic = new p5.AudioIn(); // mic to stand the p5 audioIn
   mic.start(); //user option of turning the mic

   userStartAudio();

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
  user.checkAudioIn();
  user.handleIsaac();
  user.move();
  user.displayIsaac();


  //polymorphism of arrary of my blocks
  for (let i = 0; i < blocks.length;i++){
    let block = blocks[i]
    block.move();
    block.display();
    // user.checkHit();

  }
}
 function mousePressed(){
   //start bgm
   setInterval(playNote,400)
 }
 function playNote(){
   let randomNote = random(notes);
   synth.play(randomNote,0.3,0.5,0.2)
 }
