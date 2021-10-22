"use strict";

/**************************************************
project 1 spy simulation
Liu Shanqi

Here is a description of this template p5 project.
**************************************************/


let state =`beginningLine`

let beginningLines = { // beginningLines
  string1:"U are a spy",
  string2:"try to get 6 secret documents and send it back",
  string3:"be cautious with          (agents) they got hounds",
  // postion of lines
  x:300,
  y:250,
  y2:350,
  y3:500,
  // fade effects
  colour1:1,
  colour2:1,
  colour3:0,
  colourC1:2,
  colourC2:1,
  colourC3:1,
  //P of clown
  imageX:400,
  imageY:450,
};


let title = {
  //strings of title
  string1:`Paper please`,
  string2:`Hey!!!!`,
  //p of title
  x:300,
  y:250,
  x1:240,
  y1:140,
};

let begin= {
  //strings of begin
  string:`press to begin`,
  //p of begin
  x:300,
  y:450,
  // shining effect
  sizeC:0.035,
  size:32,
  colour:255,
  colourC:3.5,
};

//object control by player
let player = {
  x:300, //p of player
  y:450,
  size:45,
  ax:0, //movement of player
  ay:0,
  vx:0,
  vy:0,
  firction:0.8 ,
  maxSp:2,// maxium speed
};

 //patrol enemy
 let patrol = {
   x:20,   //p of patrol enemy
   y:150,
   size:30,
   speed:3,
 };

 //random patrol enemies
 let agentRandom = {
   //p of random patrol enemies
   x:500,
   x1:100,
   y:300,
   y1:300,
   size:50,
   iSize:60,
   //movement of random patrol enemies
   vx:0,
   vy:0,
   vx1:0,
   vy1:0,
   speed:1,
   speed1:2,
   contrainXL:30, //contrain X left
   contrainXR:570, //contrain X right
   contrainYU:303, //contrain y up
   contrainYD:570, //contrain y down
 };
 //documents
 let documents = {
   //p of documents
   x:300,
   y:80,
   size:40,
   contrainLU:30, //contrain  left up
   contrainRD:570,//contrain  right  down
   distance:250,
 };

 //dialogs
 let dialogS = {
   string:`try to use arrows to start; care agents and beholders`,
   dOA1:`be careful!`,
   dOA2:`stay away !`,
   dOA3:`WAHT THE HECK ARE U DOING?`,
   dOA4:`GO GET MISSION DOWN`,
   dOC1:`good job, keep goging on `,
   dOC2:`several more are needed` ,
   dOC3:`keep working`,
   dOC4:`U are the only hope`,
   dOD1:`DEATH of NO.1984 DETECTED，SEND NO.1985`,
   vx:0.1,
   vy:0.1,
 };
 // An object representing dialog box
let dialogBox = {  //codes from example
  // Position on screen
  x: undefined,
  y: undefined,
  // Current string to display
  string: `try to use arrows to start; care agents and beholders`,
  // Whether it's currently visible on the canvas
  visible: true,
  // Dimensions
  width: 200,
  height: 100,
  // Padding
  padding: 20,
  // the showing speed
  vw:3,
};
 //p of endLInes
 let endLines = {
   string:`congratulation, mission complete, but the war is just begin`,
   x:80,
   y:700,
   vy:-0.5,
   padding:500
 };

 //p of maingif in simulation1
 let mainG = {
   x :712,
   y :380,
   w :225,
   h :400,
 };
  //p of ending backgound in end2
 let endPic = {
   x :0,
   y :0,
   w :600,
   h :700,
 };

 //variables
 let beginningLine2Visible = false; //speed of pop of beginningLine2

 let beginningline3Visible = false; //speed of pop of beginningLine3

 let barkSFX = undefined;

 let agentS = undefined;

 let agentB = undefined;

 let doc = undefined;

 let mainGif = undefined;

 let deadGif =undefined;

 let bgImage = undefined;

 let bgMusic = undefined;

 let theEnd = undefined;

 let score = 0; //data to calculate the time player near the enemies

 let score1 = 0; // amount of documents

function preload(){
  barkSFX = loadSound(`assets/sounds/bark.wav`);   // sound effect of get caught
  bgMusic = loadSound(`assets/sounds/background.mp3`); // backgound muisc from paper please

  agentS = loadImage(`assets/images/clown60.png`); //clown
  agentB = loadImage(`assets/images/clown60.png`)
  doc = loadImage(`assets/images/doc.png`) ;// pixel art by myself
  bgImage = loadImage(`assets/images/background.png`); // pixel art by myself
  mainGif = loadImage(`assets/images/maingif.gif`);//gif fanart by Sorapoi
  deadGif = loadImage(`assets/images/dead.gif`); // gif from game paper please

  theEnd = loadImage(`assets/images/the end.jpg`);// pixel art by Nikita Solo
  //Adventure_game_mockup_by_angrysnail___nikita-solo-scaryatticend3-export
}
// setup()
//
// Description of setup() goes here.
function setup() {
   createCanvas(600,600);

   setTimeout(showBL2, 2000); // show the beginningLine1

   setTimeout(showBL3, 5000); // show the beginningLine2

   setTimeout(showstart,14000); // change state
}

function showBL2(){  // time out of lines pop out
  beginningLine2Visible = true;
}
function showBL3(){ // time out of lines pop out
  beginningline3Visible = true;
}
// change state
function showstart(){
  state = `start` ;
}
// draw()
//
// Description of draw() goes here.
function draw() {    //states:
     if (state === `beginningLine`){
       beginningLine()
     }
     else if (state === `start`){
       start();
     }else if (state === `simulation1`){
       simulation1();
     }else if (state === `end1`){
       end1();
     }else if (state === `end2`){
       end2();
     }
}
//state of start
function start(){
   background(0);

   displayShape(); //backgound dress up
   displayTexts(); // title of paper please
   textFade(); // effect of textfade
}

//backgound dress up
function displayShape(){
  push();

  fill(192, 209, 196);

  rect(60,210,480,80);
  rectMode(CENTER);

  pop();
}

//show the text
function displayTexts(){
  push();

  //text of red to gain presure      negative atmosphere
  textAlign(CENTER,CENTER);
  textSize(64);
  textStyle(BOLD);

  fill(156, 5, 32);
  text(title.string1,title.x,title.y);

  pop();

  //text of click to start
  push();
  //style
  textAlign(CENTER,CENTER);
  textSize(32);

  fill(192, 209, 196);
  text(title.string2,title.x1,title.y1);
  pop();

  //preparation of fading effct
  push();
  textAlign(CENTER,CENTER);
  textSize(begin.size);

  fill(begin.colour);

  text(begin.string,begin.x,begin.y);
  pop();

}

//effct of text fading
// use the size of text to control the brightness
//make it in endless loop effct
function textFade(){
  begin.colour-=begin.colourC;
  if(begin.size>35){
   begin.colourC=-begin.colourC;
  }
  else if(begin.size<32){
  begin.colourC=-begin.colourC;
  }

 begin.size=begin.size+begin.sizeC;

 if(begin.size>35){
   begin.sizeC=-begin.sizeC;
 }
 else if(begin.size<32){
   begin.sizeC=-begin.sizeC;
 }

}

//show beginningLine in the beginning
function beginningLine(){
  background(0);

  line1();
  line2();
  line3();
  image(agentB,beginningLines.imageX,beginningLines.imageY); // image of symbol
 }

//line1 with fadding effcts
function line1(){


   push();
   textAlign(CENTER,CENTER); // style
   textSize(64);
   textStyle(BOLD);

   fill(beginningLines.colour1);
   text(beginningLines.string1,beginningLines.x,beginningLines.y); // postion of line1

   beginningLines.colour1+=beginningLines.colourC1;  //fading effct made with brightness
   if(beginningLines.colour1===255){
     beginningLines.colourC1=-beginningLines.colourC1
   }
   pop();


   }
//line2 with fadding effcts
function line2(){
   if (beginningLine2Visible){
     push();

     textAlign(CENTER,CENTER);// style
     textSize(32);
     textStyle(BOLD);


     beginningLines.colour2+=beginningLines.colourC2;

      if(beginningLines.colour2===255){
       beginningLines.colourC2=-beginningLines.colourC2 //fading effct made with brightness
     }

     fill(beginningLines.colour2);
     rectMode(CENTER);
     text(beginningLines.string2,beginningLines.x,beginningLines.y2,500,250); // postion of line2

     pop();


   }
 }
 //line3 with fadding effct
 function line3(){
   if (beginningline3Visible){
     push();

    textAlign(CENTER,CENTER); // style
    textSize(32);
    textStyle(BOLD);


    beginningLines.colour3+=beginningLines.colourC3;

     if(beginningLines.colour3===255){
      beginningLines.colourC3=-beginningLines.colourC3 //fading effct made with brightness
    }

    fill(beginningLines.colour3);
    rectMode(CENTER);
    text(beginningLines.string3,beginningLines.x,beginningLines.y3,500,250); // postion of line2
    pop();
   }

 }
 //playing stage
 function simulation1(){  //s: simulation


    resizeCanvas(820, 600);
    background(1);
    image (bgImage,300,300); // background image

    displayPlayer(); //display the object that play can control
    handleInput(); // mechanic of control the player object
    movePlayer(); // logic of player object moving
    moveAgentRandom1();// moving enemy
    moveAgentRandom2(); // moving enemy
    patrolAgent();// moving enemy
    displayDocuments(); // the goal for player to contact
    changeDialog(); // mata dialog during the game
    displayDialog();// mata dialog during the game
    displayDialogBox();// mata dialog during the game
    displayScore();// show the number the goal for player to contact
    displayGif(); // just gif to make sence looks good and full
    checkCollisionOfAgent(); // check the player object caught by enemies or not
    checkCollisionOfdoc();//check the player object contact the goal or not
    // enoughDoc();
    if (score1 === 6){    // chaning to state end2 ( good ending ? maybe)
    state = `end2`  }
 }
 function displayDialogBox(){
   dialogBox.x = 710;
   dialogBox.y = 100;
 }
 function handleInput(){   // mechanic of control the player object

    player.ay = 0;
    player.ax = 0; //stop
    //way of control the object
    if (keyIsDown(RIGHT_ARROW)){
      player.ax = 0.5;
    }
   if (keyIsDown(LEFT_ARROW))  {
      player.ax = -0.5;
    }
    if (keyIsDown(UP_ARROW)) {
      player.ay = -0.5;
    }
   if (keyIsDown(DOWN_ARROW)) {
      player.ay = 0.5;
    }
 }
  // logic of player object moving
 function movePlayer(){     //moving like a character (speed up and slow down)

    //apply acceleration
    player.vx += player.ax;
    player.vy += player.ay;

    //apply firction   idk what happened
    player.vy *= player.firction;
    player.vx *= player.firction;

    //contrain speed
    player.vx = constrain(player.vx, -player.maxSp, player.maxSp);
    player.vy = constrain(player.vy, -player.maxSp, player.maxSp);

    //apply speed
    player.x += player.vx;
    player.y += player.vy;

    // Constrain position to the canvas
    player.x = constrain(player.x , 30, 570);
    player.y = constrain(player.y , 30, 570);
 }

 function displayPlayer(){ //display the object that play can control
   push();
   noStroke();
   fill(255);
   ellipse(player.x,player.y,player.size)
   pop();
 }

 // the goal for player to contact
 function displayDocuments(){

   push();
   noStroke();
   noFill();
   ellipse(documents.x,documents.y,documents.size); // p of documents
   pop();

   imageMode(CENTER);
   image(doc,documents.x,documents.y,documents.size,documents.size);

 }
 // moving enemy
 function moveAgentRandom1() {

   push();
   let change = random();
   if (change < 0.02){
     agentRandom.vx = random(-agentRandom.speed,agentRandom.speed);
     agentRandom.vy = random(-agentRandom.speed,agentRandom.speed); //auto moving energy
   }
   agentRandom.x += agentRandom.vx;
   agentRandom.y += agentRandom.vy; // speed up of enemgy

   stayInCanvas(); //function that makes enemies stay in canvas

   //style and p of moving enemy
   noStroke();
   noFill();
   ellipse(agentRandom.x,agentRandom.y,agentRandom.size);
   imageMode(CENTER);
   image(agentB,agentRandom.x,agentRandom.y,agentRandom.iSize,agentRandom.iSize);

   pop();
 }

//moving enemy
 function moveAgentRandom2() {

   push();
   let change = random();
   if (change < 0.01){
     agentRandom.vx1 = random(-agentRandom.speed1,agentRandom.speed1);
     agentRandom.vy1 = random(-agentRandom.speed1,agentRandom.speed1);//auto moving energy
   }

   agentRandom.x1 += agentRandom.vx1;
   agentRandom.y1 += agentRandom.vy1;// speed up of enemgy


   stayInCanvas();//function that makes enemies stay in canvas
   //style and p of moving enemy
   noStroke();
   noFill();
   ellipse(agentRandom.x1,agentRandom.y1,agentRandom.size);


   imageMode(CENTER);
   image(agentB,agentRandom.x1,agentRandom.y1,agentRandom.iSize,agentRandom.iSize);
   pop();
 }

//moving enemy
 function patrolAgent(){

   push();
   patrol.x += patrol.speed  //patrol mechanic
   if (patrol.x > 570){
     patrol.speed = -patrol.speed
   }
   else if (patrol.x < 0) {
     patrol.speed = -patrol.speed
   }
   //style and p of patroagent
   noStroke();
   noFill();
   ellipse(patrol.x,patrol.y,patrol.size);
   pop();

   push();
   imageMode(CENTER);
   image(agentS,patrol.x,patrol.y,patrol.size,patrol.size);
   pop();


 }
 // check the player object caught by enemies or not
 function checkCollisionOfAgent(){ // ?????????  pippin wrote in class (not sure)
   let d = dist (player.x,player.y,agentRandom.x,agentRandom.y);
   if (d < player.size/2 + agentRandom.size/2 ){
     barkSFX.play();
     // Undo the last move by subtracting velocity
    player.x -= player.vx;
    player.y -= player.vy;
    // Zero the velocity and acceleration
   freeze();

   }
   let d1 = dist (player.x,player.y,agentRandom.x1,agentRandom.y1);
   if (d1 < player.size/2 + agentRandom.size/2 ){
     barkSFX.play();
     // Undo the last move by subtracting velocity
    player.x -= player.vx;
    player.y -= player.vy;
    // Zero the velocity and acceleration
   freeze();

   }

   let d2 = dist (player.x,player.y,patrol.x,patrol.y);
   if (d2 < player.size/2 + patrol.size/2 ){
     barkSFX.play();
     // Undo the last move by subtracting velocity
    player.x -= player.vx;
    player.y -= player.vy;
    // Zero the velocity and acceleration
   freeze();

   }
 }
 //check the player object contact the goal or not
 function checkCollisionOfdoc(){
   let d = dist (player.x,player.y,documents.x,documents.y); //when playobject contact doc, doc disappear and generate a new one.
   if (d < player.size/2 + documents.size/2 ){
     score1 ++
    documents.x = random( documents.contrainLU,documents.contrainRD);
    documents.y = random(documents.contrainLU, documents.contrainRD);

   let d1 = (player.x,player.y,documents.x,documents.y);
   if (d1 < documents.distance){
     documents.x = random( documents.contrainLU,documents.contrainRD);   // new doc should be some distace to the playobject
     documents.y = random(documents.contrainLU, documents.contrainRD);
   }
 }
}
 //restrict energies in the canvas
 function stayInCanvas(){   //contrain of random agent
   agentRandom.x = constrain(agentRandom.x , agentRandom.contrainXL, agentRandom.contrainXR);
   agentRandom.y = constrain(agentRandom.y , agentRandom.contrainYU, agentRandom.contrainYD);

   agentRandom.x1 = constrain(agentRandom.x1 , agentRandom.contrainXL, agentRandom.contrainXR);
   agentRandom.y1 = constrain(agentRandom.y1 , agentRandom.contrainYU, agentRandom.contrainYD);
 }

 // stop all changes music and change to nest state"end1 (bad )"
 function freeze(){

   bgMusic.stop();

   state = `end1`;
 }

 // show the number the goal for player to contact
 function displayScore() { //code from example
   push();
   fill(255);   //style
   textAlign(LEFT, TOP);
   textSize(32);
   text(score1, width / 8, height / 8);
   pop();
}

function displayDialog() { // code from example of dialog
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

    push();
    dialogAttributes();


    pop();



    push();

    dialogAttributes();// chage style with the total time that playobject stay nearby energies
    rectMode(CENTER);
    // Now draw the text inside the box
    text(dialogBox.string, dialogBox.x, dialogBox.y, dialogBox.width - dialogBox.padding, dialogBox.height - dialogBox.padding);
    pop();
  }
}
 //dialog chaing base on time that playobject stay nearby energies
 function changeDialog(){  // mata dialog during the game
   let d = dist (player.x,player.y,agentRandom.x,agentRandom.y);
   let d1 = dist (player.x,player.y,agentRandom.x1,agentRandom.y1); // identify the distace between playerobject and enemies
   let d2 = dist (player.x,player.y,patrol.x,patrol.y);
   if (d < 140 || d2 < 140 || d1 < 140) {
     dialogBox.string = dialogS.dOA1
     score ++                                    // stardard
   }else { dialogBox.string = dialogS.string
     score --                              // stardard
  }

     if (score < 0) {
     score = 0;
   }else if (score > 100 && score < 200){         // stardand goes high the string change
     dialogBox.string = dialogS.dOA2
   }else if (score > 200 && score < 400){
     dialogBox.string = dialogS.dOA3
   }else if (score > 400 ){
     dialogBox.string = dialogS.dOA4
   }
 }

 //longer time that playobject stay nearby energies the speaker will be more angery
 function dialogAttributes(){    // style change base on the string
   if (dialogBox.string === dialogS.dOA1){
     textSize(24)                                        //bigger
   }else if (dialogBox.string === dialogS.dOA2){
     textSize(36)                                        //bigger
   }else if (dialogBox.string === dialogS.dOA3){
     textSize(20)
     fill(143, 73, 73)                                   //get red
   }else if (dialogBox.string === dialogS.dOA4){
     textSize(20);
     fill(207, 12, 12);                             //get red
     dialogBox.x+=random(-3,3);
     dialogBox.y+=random(-3,3);                       // get shake
   }if (dialogBox.y === 450) {
     textSize(30);
     fill(207, 12, 12);
     dialogBox.string = dialogS.dOD1
   }
 }
  //function that display the background gif for the simulation1
  function displayGif(){
    image(mainGif,mainG.x,mainG.y,mainG.w, mainG.h);
  }

  //state of end1 ( bad end)
  function end1(){
  resizeCanvas(690, 600);
  background(100);
  moveDialogBox(); // effect that like news
  displayDialog();
  displayDialogBox();

  push();
  imageMode(CORNER);
  image(deadGif,0,100);  // gid that show the end of main character
  pop();
 }

 // effect that like news
  function moveDialogBox(){


     dialogBox.width += dialogBox.vw
     dialogBox.y = 450
     if (dialogBox.width > 1420){
       dialogBox.vw = 0
     }
  }
  //state of end2 ( good end)
 function end2(){
   resizeCanvas(600, 1000)
   push();
   background(100);
   imageMode(CORNER);
   image(theEnd,endPic.x,endPic.y,endPic.w,endPic.h); //(background image)
   if (endLines.y < 600){
   filter(GRAY);              // when text up the background image get darker
   if (endLines.y <200){
     endLines.vy = 0
   }
}


   textAlign(CENTER,CENTER);
   textSize(64);
   textStyle(BOLD);          // text style

   endLines.y += endLines.vy;
   fill(148, 129, 179);
   text(endLines.string,endLines.x,endLines.y,endLines.padding); // text that moving up

   pop();
 }

 function mousePressed(){ //changging states //
  if (state === `start`){
  state = `simulation1`;
  bgMusic.play();

  if (!dialogBox.visible) {            //code from example (dialog boxes)
   // Set it to visible to it displays
   dialogBox.visible = true;
   // Set the string in the dialog box to the current string
   dialogBox.string = `try to use arrows to start; care agents and beholders`


  }
  }
 }
 //change states
 function enoughDoc(){
   if (socre1 === 6){
   state = `end2`
 }
}
