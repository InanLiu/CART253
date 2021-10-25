"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let school = []
let schoolSize = 1

let user = {
  x: 0,
  y: 0,
  size: 60,
  growth:5,
  vx:0,
  vy:0,
  speed:2,
};
//fishs

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(1400, 600);


  for (let i = 0; i < schoolSize; i++){
   school[i] = createFish(random(0, width), random(0,height),random(20,100));
  }

}

function createFish(x,y,size){
  let fish = {
    x: x,
    y: y,
    size: size,
    vx:0,
    vy:0,
    alive: false,
    speed:2,
  };
  return fish;
}
// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  //move the user (with the mouse)
  moveUser();

  displayUser();


  for (let i = 0; i < school.length; i++){
    moveFish(school[i])
    displayFish(school[i])
    checkFish(school[i])
  }
}


// sets the user position to the mouse position
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

function moveFish(fish){
  // choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
  fish.vx = random(-fish.speed, fish.speed);
  fish.vy = random(-fish.speed, fish.speed);
}
  fish.x += fish.vx
  fish.y += fish.vy

  //constrain of the fish
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

function checkFish(fish){
  if(!fish.eaten){
    let d = dist (user.x,user.y,fish.x,fish.y)
    if (d < user.size / 2 + fish.size / 2 && user.size > fish.size){ //user object eaten smaller fish
      fish.eaten = true;
      user.size += user.growth
    }
  }
}
// // Checks if the user overlaps the fish1 object and eats it if so
// function checkFish1(){
//   if(!fish1.eaten){
//     let d = dist (user.x,user.y,fish1.x,fish1.y)
//     if (d < user.size / 2 + fish1.size / 2){
//       fish1.eaten = true
//     }
//   }
// }
// // same as fish1
// function checkFish2(){
//   if(!fish2.eaten){
//     let d = dist (user.x,user.y,fish2.x,fish2.y)
//     if (d < user.size / 2 + fish2.size / 2){
//       fish2.eaten = true
//     }
//    }
//   }

  //Draw the user as a circle
  function displayUser(){
    push();
    fill(255);
    ellipse(user.x,user.y,user.size);
    pop();
  }

  function displayFish(fish){
     if(!fish.eaten){
       push();
       fill(255,100,100);
       ellipse(fish.x,fish.y,fish.size);
       pop();
     }

  function mousePressed(){
    let fish = createFish()
    school.push(fish)
  }
  // // draw fish1 as a circle
  // function displayFish1(){
  //   if (!fish1.eaten){
  //     push();
  //     fill(255,100,100);
  //     ellipse(fish1.x,fish1.y,fish1.size);
  //     pop();
  //   }
  // }
  //
  // function displayFish2(){
  //   if (!fish2.eaten){
  //     push();
  //     fill(255,100,100);
  //     ellipse(fish2.x,fish2.y,fish2.size);
  //     pop();
  //   }
  }
