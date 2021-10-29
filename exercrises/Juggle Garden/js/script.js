"use strict";

/**************************************************
Template p5 exercrises
Liu Shanqi

Here is a description of this template p5 project.

player control a farmer(use mouse)
 to dispel locust (when farmer get closer locust will run away)
 and protect flowers to grow up(flower will growup automatically)
**************************************************/
let state = `start`
let garden = {
  //an array to store the flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 15,
  //an array of locusts
  locusts:[],
  //Howmany locusts in the garden
  numBees:10,
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
let openningStrings = [ //opning lines  idea from UT , make some surprise of the tone
`It's a beautiful day outside.`,
`birds are singing, flowers are blooming...`,
`on days like these, kids like you...`,
`S h o u l d `,
`help flowers to grow`
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
  length:5,
};

let pressStart = `press anykey to eat fish! `;
let goodEndLine = `U saved our garden! `;
let badEndLine = `I hate Locusts!`;
let scoreM = 0;
let scoreD = 0;
let deathLimit = 5;
let goal = 10;
let bgImage = undefined;
let bgMusic = undefined;
let putFish = undefined;
let eat = undefined;
let death  = undefined;
let grow = undefined;

//preload
function  preload(){
bgMusic = loadSound(`assets/sounds/bgMusic.wav`);//bgmusic
//sound effect
eat = loadSound(`assets/sounds/eat.wav`);
death = loadSound(`assets/sounds/death.wav`);
grow = loadSound(`assets/sounds/grow.wav`);

}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(1400,600);

  textAlign(CENTER,CENTER); //text style
  textSize(32);
  fill(0);

  // Position the dialog box with its centre in the centre of the canvas
  dialogBox.x = width/2;
  dialogBox.y = height/2;
  //create flowers by for loop
  for(let i = 0; i < garden.numFlowers; i++){
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 75);
    let stemLength = random(50,100);
    let petalColor ={
      r: random(100, 255),
      g: random(50, 100),
      b: random(50, 100),
    }
    //creat a new flower
    let flower = new Flower(x, y, size, stemLength, petalColor);
    //add the flower to the array
    garden.flowers.push(flower);
  }

  //create the locusts
   for (let i = 0; i < garden.numBees; i++){
    let locust = new Locust(random(0, width),random(0,height))
    garden.locusts.push(locust);
  }
}
// draw()
//
// Description of draw() goes here.
function draw() {

  if (state === `start`){//start lines
     start();
    }
    else if (state === `simulation`){ //state: simulation (where the playing going on)
      simulation();
    }
    else if (state === `goodEnd`){//goodEnd when the 10 flowers get mature
      goodEnd();
    }
    else if (state === `badEnd`){//badEnd when the death limit of flwer is reached
      badEnd();
    }

}
//start lines
function start(){
  // The black void
  background(0);

  // Display the dialog box
  displayDialog();
}
//stage of whole simulation going on
function simulation(){
  // background of grass colour
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b)


  displayFarmer(); // display player control object
  moveFarmer();//the way player control object move (use backup plan) (can be improve after asking pippin or mads XD)
  stateChecker();//check which state it should go
  // flower stuff during the simulation
  for (let i = 0; i < garden.flowers.length; i++){
    let flower = garden.flowers[i];
    if (flower.alive && ! flower.mature){
    flower.display(); //display flower
    flower.grow();// flowers will automatically grow
    // flower.beMature();
  }
}
//locust stuff in the simulation
  for (let i = 0; i < garden.locusts.length; i++){
    let locust = garden.locusts[i]
    if (locust.alive){
      locust.move(); // random movement of locust
      locust.display(); // display locust
      locust.checkDispelLocust() // if the locust get dispell by farmer
      // locust.checkDispelLocust();

      //make locust can makes flower smaller
      for (let j = 0; j < garden.flowers.length; j++){
        let flower = garden.flowers[j];
        if(flower.alive){
        locust.tryToMothEaten(flower); //check if locust touch flower
       }
     }
    }
  }
  displayScore() //the score represet the number of mature flowers
}

//state of goodending
function goodEnd(){
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);

  background(0);
  text(goodEndLine, width/2, height/2)
  pop();
 }
 //state of badending
function badEnd(){
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);

  background(0);
  text(badEndLine, width/2, height/2)
  pop();
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
     fill(255);
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
          bgMusic.play()
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
function displayScore() { //code from example
 push();
 fill(255);   //style
 textAlign(LEFT, TOP);
 textSize(32);
 text(scoreM, width / 8, height / 8);
 pop();
}
 function moveFarmer(){ // use mouseX and Y to control the farmer( again can be improve)
   user.x = mouseX;
   user.y = mouseY;
   /*
   effects that need farmer be a class
   */
   // let dx = user.x - mouseX; //define the position of user object
   // let dy = user.y - mouseY;
   //
   // // user object move toward to the mouse position
   // if (dx < 0){
   //   user.vx = user.speed;
   // }
   // else if (dx > 0){
   //   user.vx = -user.speed;
   // }
   //
   // if (dy < 0){
   //   user.vy = user.speed;
   // }
   // else if (dy > 0){
   //   user.vy = -user.speed;
   // }
   // //apply speed
   // user.x += user.vx;
   // user.y += user.vy;
 }

 function displayFarmer(){ // display the player control object
   push();
   fill(210,0,0);
   ellipse(user.x,user.y,user.size);
   noStroke();
   pop();
 }
 function stateChecker(){ // check the state
   if (scoreD === deathLimit ){
     state = `badEnd`
   }
   if (scoreM === goal){
     state = `goodEnd`
   }
 }
