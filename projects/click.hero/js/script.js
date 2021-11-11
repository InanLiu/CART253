"use strict";

let cars = [];
let numCars = 10;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numCars; i++){
    let x = random(0,width);
    let y = random(0,height);
    let car = new Car(x,y);
    cars.push(car)
  }
}
// draw()
//
// Description of draw() goes here.
function draw() {
 background(0)

 for (let i = 0; i < cars.length; i++){
   let car = cars[i];
   car.move();
   car.wrap();
   car.display();
 }
}
