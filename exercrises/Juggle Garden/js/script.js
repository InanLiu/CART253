"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let state = `simulation`
let garden = {
  //an array to store the flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 15,
  //an array of bees
  bees:[],
  //Howmany bees in the garden
  numBees:7,
  //background colour
  grassColor:{
    r:120,
    g:180,
    b:120,
  }
}
let user = {   //uesr object
  x: 0,  //p of user object
  y: 0,
  size: 60,
  growth:5, // uesr object is getting bigger
  vx:0,
  vy:0,
  speed:2, //moving speed
};
let openningStrings = [
`It's a beautiful day outside.`,
`birds are singing, flowers are blooming...`,
`on days like these, kids like you...`,
`S h o u l d `,
`help flower to grow`
];
let currentOpenningString = 0;

let dialogBox = { //code from example
  // Position on screen (will set in setup())
  x: undefined,
  y: undefined,
  // Current string to display (starts empty)
  string: ``,
  // Whether it's currently visible on the canvas
  visible: false,
  // Dimensions
  width: 400,
  height: 100,
  // Padding
  padding: 40,
  // How long the dialog box should display before auto-closing
  duration: 2000,
  //change the state
  length:5
};

let pressStart = `press anykey to eat fish! `
let goodEndLine = `U are a mature and big fish now! `
let badEndLine = `try again and avoid the bigger fish`
let score = 0
let bgImage = undefined;
let bgMusic = undefined;
let putFish = undefined;
let eat = undefined;
let death  = undefined;
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(1400,600);

  // Position the dialog box with its centre in the centre of the canvas
  dialogBox.x = width/2;
  dialogBox.y = height/2;
  //create flowers by for loop
  for(let i = 0; i < garden.numFlowers; i++){
    let x = random(0, width);
    let y = random(0, height);
    let size = random(41, 80);
    let stemLength = random(50,100);
    let petalColor ={
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
    }
    //creat a new flower
    let flower = new Flower(x, y, size, stemLength, petalColor);
    //add the flower to the array
    garden.flowers.push(flower);
  }

  //create the bees
   for (let i = 0; i < garden.numBees; i++){
    let bee = new Bee(random(0, width),random(0,height))
    garden.bees.push(bee);
  }
}
// draw()
//
// Description of draw() goes here.
function draw() {
  if (state === `start`){
     start();
    }
    else if (state === `simulation`){ //state: simulation (where the playing going on)
      simulation();
    }
    else if (state === `goodEnd`){//goodEnd when the userobject get big enough
      goodEnd();
    }
    else if (state === `badEnd`){//badEnd when userobject is eaten by bigger fish
      badEnd();
    }

}
function start(){
  // The black void
  background(0);

  // Display the dialog box
  displayDialog();
}
function simulation(){

  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b)
  displayUser();
  moveUser();
  for (let i = 0; i < garden.flowers.length; i++){
    let flower = garden.flowers[i];
    if (flower.alive){
    flower.display();
    flower.grow();
  }
}
  for (let i = 0; i < garden.bees.length; i++){
    let bee = garden.bees[i]
    if (bee.alive){
      bee.shrink();
      bee.move();
      bee.display();

      for (let j = 0; j < garden.flowers.length; j++){
        let flower = garden.flowers[j];
        if(flower.alive){
        bee.tryToMothEaten(flower);
       }
     }
    }
  }
}

//state of goodending
function goodEnd(){

  background(0);
  text(goodEndLine, width/2, height/2)
 }
 //state of badending
function badEnd(){

  background(0);
  text(badEndLine, width/2, height/2)
 }


 function displayDialog() { //code from example
   // We only display the dialog box if it's set to be visible
   if (dialogBox.visible) {
     // First draw the box part
     push();
     // Make it easier to centre the box
     rectMode(CENTER);
     // Red outline
     stroke(255,0,0);
     // Thicker than usual
     strokeWeight(5);
     // Draw a rectangle based on the box's position and dimensions
     rect(dialogBox.x, dialogBox.y, dialogBox.width, dialogBox.height);
     pop();

     // Now draw the text inside the box
     push();
     // automatically fit inside a defined rectangle
     rectMode(CENTER);
     // Display the current string at the same position as the box
     textSize(20)
     text(dialogBox.string, dialogBox.x, dialogBox.y, dialogBox.width - dialogBox.padding, dialogBox.height - dialogBox.padding);
     pop();
   }
 }
 function mousePressed() { //code from example
     // We display the dialog box if the mouse gets clicked
     // but only if it isn't already visible
      if (!dialogBox.visible) {
     // Set it to visible to it displays
        dialogBox.visible = true;
     // Set the string in the dialog box to the current string
        dialogBox.string = openningStrings[currentOpenningString];
     // Set a timer to hide the dialog box by calling the hideDialog()
        setTimeout(hideDialog, dialogBox.duration);

        if (currentOpenningString === dialogBox.length  ) {
          state = `simulation` ;
        }
   }
 }
 function hideDialog() {
  // Set the dialog to be invisible
  dialogBox.visible = false;
  // Increase the string index by one so we display the next one
  // next time
  currentOpenningString += 1;
  // But if we hit the end of the array of strings, then just
  // stay on the final string


}
 function moveUser(){
   // user.x = mouseX;
   // user.y = mouseY;

   let dx = user.x - mouseX; //define the position of user object
   let dy = user.y - mouseY;

   // user object move toward to the mouse position
   if (dx < 0){
     user.vx = user.speed;
   }
   else if (dx > 0){
     user.vx = -user.speed;
   }

   if (dy < 0){
     user.vy = user.speed;
   }
   else if (dy > 0){
     user.vy = -user.speed;
   }
   //apply speed
   user.x += user.vx;
   user.y += user.vy;
 }

 function displayUser(){
   push();
   fill(210,0,0);
   ellipse(user.x,user.y,user.size);
   noStroke();
   pop();
 }
