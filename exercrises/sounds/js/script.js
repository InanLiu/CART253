"use strict";

/**************************************************
make some noise


**************************************************/
let mic;

let synth;

let notes = [`F4`,`A3`,`E3`,`Bb4`,`Eb3`,`D3`,`Ab4`,`F#3`];

let state = `title`;

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
   //arrary of the blocks
   for(let i = 0; i < numBlocks; i++){
     let x = random(0,width);   // the length of blocks will be random (with some limition-- can be better)
     let y = 0;
     let blockH = random(0,height/2);
     let upBlock = new Upbolck(i*space,y,blockH); // blocks will be place in same distance
     blocks.push(upBlock);

   }

   for(let i = 0; i < numBlocks; i++){
     let x = random(0,width);  // the length of blocks will be random (with some limition-- can be better)
     let y = height;
     let blockH = random(height/2,height);
     let downBlock = new Downbolck(i*space,y,blockH); // blocks will be place in same distance
     blocks.push(downBlock);

   }
   synth = new p5.PolySynth(); // apply of polysynth
   mic = new p5.AudioIn(); // mic to stand the p5 audioIn
   mic.start(); //user option of turning the mic

   userStartAudio();

   let x = 20; // the user object
   let y = height/2;
   user = new User(x,y);  //introduce user object

}

// draw()
function draw() {
  background(0);

  if (state === `title`) {  // should be five state
    title();
  } else if (state === `simulation`) { // the simulartion going on
    simulation();
  } else if (state === `success`) { // when user survival amout of time
    success();
  } else if (state === `dead`) { // whem user object hit blocks  //because of the bug
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
function title() {
  displayText(`SING SOMETHING!`); // opening lines
}

function simulation(){

  let level = mic.getLevel(); // check the mic level make sure the data is reasonable

  console.log(level);

  //simulation the basics of user object
  user.checkAudioIn(); //  check if user make any sound or not
  user.handleIsaac();  //the handle of userobject (with the audioin)  (gravity)
  user.move();   //simple movement
  user.displayIsaac();  //display user obect (circle)


  //polymorphism of arrary of my blocks
  for (let i = 0; i < blocks.length;i++){
    let block = blocks[i]
    block.move();
    block.display();
    // user.checkHit();  //have problems of why it can be defined    [ask on Thursday]

  }
}
//the text style will be use in title and ending
function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  text(string, width / 2, height / 2);
  pop();
}
function mousePressed() {
  if (state === `title`) {
    // If we're in the title go to the simulation
    setInterval(playNote,400)
    state = `simulation`;
  }
}
 function playNote(){ //play randomly note with first click
   let randomNote = random(notes);
   synth.play(randomNote,0.3,0.5,0.2)
 }
