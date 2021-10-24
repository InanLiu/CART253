"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let user = {
  x: 0,
  y: 0,
  size: 100
};
//fish food object
let food1 = {
  x: 250,
  y: 300,
  size: 50,
  eaten: false,  //track whether the user has eaten the food1
};

//Second food object
let food2 = {
  x: 350,
  y: 300,
  size: 50,
  alive: false
};
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  //move the user (with the mouse)
  moveUser();

  //Check whether the user has eaten either food
  checkFood1();
  checkFood2();

  //display the user and foods
  displayUser();
  displayFood1();
  displayFood2();
}

// sets the user position to the mouse position
function moveUser(){
  user.x = mouseX;
  user.y = mouseY;
}

// Checks if the user overlaps the food1 object and eats it if so
function checkFood1(){
  if(!food1.eaten){
    let d = dist (user.x,user.y,food1.x,food1.y)
    if (d < user.size / 2 + food1.size / 2){
      food1.eaten = true
    }
  }
}
// same as food1
function checkFood2(){
  if(!food2.eaten){
    let d = dist (user.x,user.y,food2.x,food2.y)
    if (d < user.size / 2 + food2.size / 2){
      food2.eaten = true
    }
   }
  }

  //Draw the user as a circle
  function displayUser(){
    push();
    fill(255);
    ellipse(user.x,user.y,user.size);
    pop();
  }

  // fraw food1 as a circle
  function displayFood1(){
    if (!food1.eaten){
      push();
      fill(255,100,100);
      ellipse(food1.x,food1.y,food1.size);
      pop();
    }
  }

  function displayFood2(){
    if (!food2.eaten){
      push();
      fill(255,100,100);
      ellipse(food2.x,food2.y,food2.size);
      pop();
    }
  }
