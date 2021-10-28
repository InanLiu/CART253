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
  //background colour
  grassColor:{
    r:120,
    g:180,
    b:120,
  };
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);

  //create flowers by for loop
  for(let i = 0; i < garden.numFowers; i++){
    //creat a new flower
    let flower = createFlower();
    garden.flowers.push(flower);
  }
}

function createFlower(){
  let flower = {
    //p and size of flower
    x: random(0, width),
    y: random(0, height),
    size: 50,
    stemLength:75,
    stemThickness:10,
    patalThickness:10,
    //colour
    stemColor:{
      r:50,
      g:150,
      b:50,
    },
    petalColor:{
      r:50,
      g:150,
      b:50,
    },
    centreColor:{
      r:50,
      g:150,
      b:50,
    },
  };
  return flowe;
}
// draw()
//
// Description of draw() goes here.
function draw() {

}
