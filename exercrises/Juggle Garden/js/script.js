"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let garden = {
  //an array to store the flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 20,
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
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);

  //create flowers by for loop
  for(let i = 0; i < garden.numFlowers; i++){
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
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
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b)

    for (let i = 0; i < garden.flowers.length; i++){
      let flower = garden.flowers[i];
      if (flower.alive){
      flower.display();
      flower.shrink();
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
          bee.tryToPollinate(flower);
        }
      }
    }

}
function mousePressed(){
  for (let i = 0; i < garden.flowers.length; i++){
    let flower = garden.flowers[i];
    flower.mousePressed();
  }
 }
