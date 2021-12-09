//global var
let objs = [];  //all the shapes
let boxes = [];  //all the bottons
let FPS = 60;   //frame
let timepast = 0;   //time records

//brush color
let R = 200;
let G = 150;
let B = 50;
//bg color
let bR = 0;
let bG = 0;
let bB = 50;

let eraserRange = 20;         //the range of the clearer
let timerRange = 50;          //the range of the time stop
let controlRange=20;
let brushType = "CIRCLE";     //current brush mode
let pbrushType = "CIRCLE";    //last brush mode
let isPlaying = true;         //check the pause is active or not
let isMenuHide = false;       //show the menu or not
let wind=10;                  // power of the wind
let isWindR=false;            // wind to right mode
let isWindL=false;            // wind to left mode
let isBlackHOle=false;        // black hole mode
let isreleased=false;

let picSun = undefined;
let picMoon = undefined;
let picNightfall = undefined;
let picTimer = undefined;
let picEraser = undefined;
let picSave = undefined;
let picWind = undefined;
let picCircle = undefined;
let picTri = undefined;
let picLines = undefined;
let picCube = undefined;
let picStar = undefined;
let picPause = undefined;
let picStart = undefined;
let picClear = undefined;
let picSakura = undefined;
let picSnow = undefined;
let picHand = undefined;
let picBlackhole = undefined;
//set the canvas and display all the buttons
  function preload(){
  picSun = loadImage(`assets/images/sun1.png`);
  picMoon = loadImage(`assets/images/moon.png`);
  picNightfall = loadImage(`assets/images/nightfall.png`);
  picTimer = loadImage(`assets/images/clock.png`);
  picEraser = loadImage(`assets/images/eraser.png`);
  picSave = loadImage(`assets/images/save.png`);
  picWind = loadImage(`assets/images/wind.png`);
  picCircle = loadImage(`assets/images/circle.png`);
  picTri = loadImage(`assets/images/triangle.png`);
  picLines= loadImage(`assets/images/line.png`);
  picCube= loadImage(`assets/images/cube.png`);
  picStar = loadImage(`assets/images/star.png`);
  picPause = loadImage(`assets/images/pause.png`);
  picStart = loadImage(`assets/images/start.png`);
  picClear = loadImage(`assets/images/clear.png`);
  picSakura = loadImage(`assets/images/sakura.png`);
  picSnow = loadImage(`assets/images/snow.png`);
  picHand = loadImage(`assets/images/hand.png`);
  picBlackhole = loadImage(`assets/images/blackhole.png`);
  }
  function setup() {
    frameRate(FPS);
    createCanvas(1200, 700);
    noCursor();//hide the mouse
    strokeCap(PROJECT); //make the lines project way

    // abondond part of colour picker
		// let options = createDiv()
		// let optionsValue = createDiv().parent(options)
		// penColor = createColorPicker(`#ffffff`)
		// bgColor = createColorPicker(`#ffffff`)

    //push all the colour buttons
    boxes.push(new ColorButton(5, 5 + 30 * 0, 100, 30, 200, 50, 50));
    boxes.push(new ColorButton(5, 5 + 30 * 1, 100, 30, 200, 100, 50));
    boxes.push(new ColorButton(5, 5 + 30 * 2, 100, 30, 200, 150, 50));

    boxes.push(new ColorButton(5, 5 + 30 * 3, 100, 30, 150, 200, 50));
    boxes.push(new ColorButton(5, 5 + 30 * 4, 100, 30, 100, 200, 50));
    boxes.push(new ColorButton(5, 5 + 30 * 5, 100, 30, 50, 200, 50));

    boxes.push(new ColorButton(5, 5 + 30 * 6, 100, 30, 50, 150, 200));
    boxes.push(new ColorButton(5, 5 + 30 * 7, 100, 30, 50, 100, 200));
    boxes.push(new ColorButton(5, 5 + 30 * 8, 100, 30, 50, 50, 200));

    boxes.push(new ColorButton(5, 5 + 30 * 9, 100, 30, 100, 50, 200));
    boxes.push(new ColorButton(5, 5 + 30 * 10, 100, 30, 150, 50, 200));
    boxes.push(new ColorButton(5, 5 + 30 * 11, 100, 30, 200, 50, 200));

    //push all the function buttons
    boxes.push(new FuncButton(5, 5 + 30 * 12, 100, 30, "sun"));
    boxes.push(new FuncButton(5, 5 + 30 * 13, 100, 30, "circle"));
    boxes.push(new FuncButton(5, 5 + 30 * 14, 100, 30, "star"));
    if(isPlaying){
      boxes.push(new FuncButton(5, 5 + 30 * 15, 100, 30, "pause"));
    }else{
      boxes.push(new FuncButton(5, 5 + 30 * 15, 100, 30, "play"));
    }
    boxes.push(new FuncButton(5, 5 + 30 * 16, 100, 30, "timer"));
    boxes.push(new FuncButton(5, 5 + 30 * 17, 100, 30, "eraser"));
    boxes.push(new FuncButton(5, 5 + 30 * 18, 100, 30, "clear"));
    boxes.push(new FuncButton(5, 5 + 30 * 19, 100, 30, "save"));
    boxes.push(new FuncButton(5, 5 + 30 * 20, 100, 30, "wind"));
    boxes.push(new FuncButton(5, 5 + 30 * 21, 100, 30, "blackhole"));
    boxes.push(new FuncButton(5, 5 + 30 * 22, 100, 30, "control"));

  }


  //drawing
  function draw() {
      //set the background colour
    background(bR, bG, bB);
    //timer
    timepast += 1 / FPS;

    //drawing
    if (mouseIsPressed && (mouseX > 110 || isMenuHide)) {
      if (brushType === "CIRCLE" || brushType === "LINES" || brushType === "TRIANGLE"||
       brushType==="CUBE"||brushType==="BALL"||brushType==="SNOW"||brushType==="SAKURA") {
        let position = createVector(mouseX, mouseY);
        //put the newest image in to arrary and set pos size and colour()
        objs.push(new Bursh(position, sqrt(sq(mouseX - pmouseX) + sq(mouseY - pmouseY)), R, G, B));
      }else if (brushType === "HANABI") {
        objs.push(new hanabi(mouseX,mouseY,R, G, B));
      }
      //Eraser  (use delete image to make the eraser)
      else if (brushType === "ERASER" && objs.length > 0) {
        for (let i = 0; i < objs.length; i++) {
            //delete specified brush
          if (sqrt(sq(objs[i].position.x - mouseX) + sq(objs[i].position.y - mouseY)) <= eraserRange) {
            objs.splice(i, 1);
            break;

          }
        }
      } else if (brushType === "TIMER" && objs.length > 0) {   // if the timer is on pause all the animation and dynamic effect
        for (let i = 0; i < objs.length; i++) {
          if (sqrt(sq(objs[i].position.x - mouseX) + sq(objs[i].position.y - mouseY)) <= timerRange) {
            objs[i].timepast += 2 / FPS;
            objs[i].isPlaying = false;
          }
        }
      }else if (brushType === "CONTROL" && objs.length > 0) { //specified part let usar moving the drawing
        for (let i = 0; i < objs.length; i++) {
          if(objs[i].shapeType==="STAR"){
            if (sqrt(sq(objs[i].starx - mouseX) + sq(objs[i].stary - mouseY)) <=controlRange) {
              objs[i].isControled=true;
            }
          }else if(objs[i].shapeType==="BALL"){
            if (sqrt(sq(objs[i].ballx - mouseX) + sq(objs[i].bally - mouseY)) <=controlRange) {
              objs[i].isControled=true;
            }
          }else{
            if (sqrt(sq(objs[i].position.x - mouseX) + sq(objs[i].position.y - mouseY)) <=controlRange) {
            objs[i].isControled=true;
          }
          }
        }
      }
    }else{
      for (let i = 0; i < objs.length; i++) {
        objs[i].isControled=false;
      }
    }
    //use array to draw all the data
    for (let i = 0; i < objs.length; i++) {
      objs[i].drawing();
      objs[i].update();
    }


    //mouse image
    stroke(0);
    strokeWeight(2);
    if (!isMenuHide) {
      for (let i = 0; i < boxes.length; i++) {
        //display  all the buttons
        boxes[i].displayButton();
        //check it the mouse is on the button , if yes become a hand
        if (boxes[i].isMouseInButton()) {
          cursor(HAND);
        }
      }
    }

    //Canvas and brush Generate part
    //should be improve with more virables
    if (mouseX > 110 || isMenuHide) {
      noCursor();
      fill(R * 1.5, G * 1.5, B * 1.5);
      stroke(R * 1.5, G * 1.5, B * 1.5);
      if (brushType === "CIRCLE"||brushType === "BALL"||brushType === "HANABI") {
        ellipse(mouseX, mouseY, 10, 10);
      } else if (brushType === "TRIANGLE") {
        triangle(mouseX - 5, mouseY + 3, mouseX + 5, mouseY + 3, mouseX, mouseY - 5);
      } else if (brushType === "LINES") {
        translate(mouseX, mouseY);
        noFill();
        stroke(255 - bR);
        ellipse(0, 0, 20, 20);
        fill(R * 1.5, G * 1.5, B * 1.5);
        noStroke();
        ellipse(0, 0, 6, 6);
        resetMatrix();
      } else if (brushType === "CUBE") {
        translate(mouseX, mouseY);
        rect(-5,-5,10,10);
        resetMatrix();
      } else if (brushType === "SNOW") {
        translate(mouseX, mouseY);
        snow(0,0,10);
        resetMatrix();
      } else if (brushType === "STAR") {
        translate(mouseX, mouseY);
        star(0,0,10,R,G,B);
        resetMatrix();
      }else if (brushType === "SAKURA") {
        translate(mouseX, mouseY);
        sakura(0,0,10,R,G,B);
        resetMatrix();
      }else if (brushType === "ERASER") {
        translate(mouseX, mouseY);
        noFill();
        stroke(255 - bR);
        ellipse(0, 0, eraserRange, eraserRange);
        resetMatrix();

      } else if (brushType === "TIMER") {
        translate(mouseX, mouseY);
        stroke(255 - bR);
        noFill();
        ellipse(0, 0, timerRange, timerRange);
        ellipse(0, 0, 22, 22);
        ellipse(0, 0, 25, 25);
        fill(255 - bR);
        ellipse(0, 0, 3, 3);
        strokeWeight(2);
        line(0, 0, 5, 0);
        line(0, 0, 0, -7);
        resetMatrix();
      }else if(brushType==="CONTROL"){
        translate(mouseX, mouseY);
        rect(-8.5, -2, 16, 4);
        rect(-2.5, -8, 4,16);
        triangle(-3,-8,3,-8,0,-12);
        triangle(-3,8,3,8,0,12);
        triangle(7.5,3.5,7.5,-2.5,12,0.5);
        triangle(-7.5,3.5,-7.5,-2.5,-12,0.5);
        resetMatrix();
      }
    }
  }

  //鼠标点击事件
  function mouseClicked() {
    if (brushType==="STAR"&&mouseX>110) {
      let position = createVector(mouseX, mouseY);
      //将新画的图像存入数组中，设置位置，大小（滑动越快越大），颜色
      objs.push(new Bursh(position, sqrt(sq(mouseX - pmouseX) + sq(mouseY - pmouseY)), R, G, B));
    }
    if(mouseX>=-252&&mouseX<=-55&&mouseY>=28&&mouseY<=225)
      {
        R=RGBcolor.r;
        B=RGBcolor.b;
        G=RGBcolor.g;
      }
    if (!isMenuHide) {
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].isMouseInButton()) {
          boxes[i].clickButton();
        }
      }
    }
    return false;
  }

  function snow(x,y,size){
    //stroke(color(0, 0, 255));
    //drawing of the snow
    // inspire by https://openprocessing.org/sketch/1212872 by Jukku
	  strokeCap(ROUND);
    strokeWeight(size/8);
    line(x, y, x+size, y);
    line(x, y, x+size/2, y+size*sqrt(3)/2);
    line(x, y, x-size/2, y+size*sqrt(3)/2);
    line(x, y, x-size, y);
    line(x, y, x-size/2, y-size*sqrt(3)/2);
    line(x, y, x+size/2, y-size*sqrt(3)/2);
    strokeWeight(size/12)
    line(x+size/2,y,x+size*(sqrt(3)/4+1/2),y+size*1/4);
    line(x+size/2,y,x+size*(sqrt(3)/4+1/2),y-size*1/4);

    line(x-size/2,y,x-size*(sqrt(3)/4+1/2),y+size*1/4);
    line(x-size/2,y,x-size*(sqrt(3)/4+1/2),y-size*1/4);

    line(x+size*(1/4),y+size*(sqrt(3)/4),x+size*(1/4),y+size*(1/2+sqrt(3)/4));
    line(x+size*(1/4),y+size*(sqrt(3)/4),x+size*(1+sqrt(3))/4,y+size*(sqrt(3)/4+1/4));

    line(x-size*(1/4),y+size*(sqrt(3)/4),x-size*(1/4),y+size*(1/2+sqrt(3)/4));
    line(x-size*(1/4),y+size*(sqrt(3)/4),x-size*(1+sqrt(3))/4,y+size*(sqrt(3)/4+1/4));

    line(x+size*(1/4),y-size*(sqrt(3)/4),x+size*(1/4),y-size*(1/2+sqrt(3)/4));
    line(x+size*(1/4),y-size*(sqrt(3)/4),x+size*(1+sqrt(3))/4,y-size*(sqrt(3)/4+1/4));

    line(x-size*(1/4),y-size*(sqrt(3)/4),x-size*(1/4),y-size*(1/2+sqrt(3)/4));
    line(x-size*(1/4),y-size*(sqrt(3)/4),x-size*(1+sqrt(3))/4,y-size*(sqrt(3)/4+1/4));

		line(x+size*(1/5),y,x+size*(1/5+sqrt(2)/6),y+size*(sqrt(2)/6));
		line(x+size*(1/5),y,x+size*(1/5+sqrt(2)/6),y-size*(sqrt(2)/6));
		push();
		translate(x,y);
		rotate(1/3*PI);
		line(size*(1/5),0,size*(1/5+sqrt(2)/6),size*(sqrt(2)/6));
		line(size*(1/5),0,size*(1/5+sqrt(2)/6),-size*(sqrt(2)/6));
		rotate(1/3*PI);
		line(size*(1/5),0,size*(1/5+sqrt(2)/6),size*(sqrt(2)/6));
		line(size*(1/5),0,size*(1/5+sqrt(2)/6),-size*(sqrt(2)/6));
		rotate(1/3*PI);
		line(size*(1/5),0,size*(1/5+sqrt(2)/6),size*(sqrt(2)/6));
		line(size*(1/5),0,size*(1/5+sqrt(2)/6),-size*(sqrt(2)/6));
		rotate(1/3*PI);
		line(x+size*(1/5),y,x+size*(1/5+sqrt(2)/6),y+size*(sqrt(2)/6));
		line(size*(1/5),0,size*(1/5+sqrt(2)/6),size*(sqrt(2)/6));
		line(size*(1/5),0,size*(1/5+sqrt(2)/6),-size*(sqrt(2)/6));
		rotate(1/3*PI);
		line(size*(1/5),0,size*(1/5+sqrt(2)/6),size*(sqrt(2)/6));
		line(size*(1/5),0,size*(1/5+sqrt(2)/6),-size*(sqrt(2)/6));
		pop();

  }

  function star(x,y,size,r,g,b){

    //drawing of the star
    //idea from person5 art book
    let size2=size/1.8;

		fill(r,g,b);
    beginShape();

    vertex(x-size2*sin(36/180*PI),y-size2*cos(36/180*PI));
		vertex(x,y-size);

		vertex(x,y-size);
		vertex(x+size2*sin(36/180*PI),y-size2*cos(36/180*PI));

		vertex(x+size2*sin(36/180*PI),y-size2*cos(36/180*PI));
		vertex(x+size*sin(72/180*PI),y-size*cos(72/180*PI));

		vertex(x+size*sin(72/180*PI),y-size*cos(72/180*PI));
		vertex(x+size2*sin(108/180*PI),y-size2*cos(108/180*PI));

		vertex(x+size2*sin(108/180*PI),y-size2*cos(108/180*PI));
		vertex(x+size*sin(72/360*PI),y+size*cos(72/360*PI));

		vertex(x+size*sin(72/360*PI),y+size*cos(72/360*PI));
		vertex(x,y+size2);

		vertex(x,y+size2);
		vertex(x-size*sin(72/360*PI),y+size*cos(72/360*PI));

		vertex(x-size*sin(72/360*PI),y+size*cos(72/360*PI));
		vertex(x-size2*sin(108/180*PI),y-size2*cos(108/180*PI));

		vertex(x-size2*sin(108/180*PI),y-size2*cos(108/180*PI));
		vertex(x-size*sin(72/180*PI),y-size*cos(72/180*PI));

		vertex(x-size*sin(72/180*PI),y-size*cos(72/180*PI));
		vertex(x-size2*sin(36/180*PI),y-size2*cos(36/180*PI));

  	endShape(CLOSE);
  }

  function sakura(x,y,size,r,g,b){
    //draw of sakura
    fill(r,g,b);
    noStroke();
    translate(x,y);
    beginShape();
    vertex(-size, 0);
    bezierVertex(-size/6,size/2,size/2,size/2, size, 0);

    vertex(size, 0);
    bezierVertex(size/4*3,-size/6,size/3,-size/6,size/3,-size/6);

    vertex(-size, 0);
    bezierVertex(-size/2,-size/6,size/3,-size/3*2,size,-size/5);

    vertex(size,-size/5);
    bezierVertex(size/4*3,-size/4,size/2,-size/6,size/3,-size/6);
    endShape();
  }

  function hanabi(x,y,R,G,B) { // extra mading brush , not 100 persent Satisfied
    this.lock=false;
	  this.centerx=x;
		this.centery=y;
		this.size=60;
		this.num=10;
		this.fws=[];
		this.speed=[];
		this.gravity=0.05;
		this.timecount=0;
		this.upSpeed=-10;
    this.bombY=0;
    this.R=R;
    this.G=G;
    this.B=B;
    this.shapeType=brushType;
}

hanabi.prototype.drawing = function() {
  noStroke();
    if (this.shapeType === "HANABI") {
		if(!this.lock){
			for(let i=0;i<this.num;i++){
				this.fws[i]=(new p5.Vector(0,0));
				this.speed[i]=(new p5.Vector(random(5)-2.5,random(5)-2.5));
			}
			this.lock=true;
		}
			push();
			translate(this.centerx,this.centery);
			noStroke();
			for(let i=0;i<this.fws.length;i++){
				fill((random(1)+1)*this.R+random(100),(random(1)+1)*this.G+random(100),(random(1)+1)*this.B+random(100));
				ellipse(this.fws[i].x,this.fws[i].y,this.size/15,this.size/15);
			}
			pop();
  this.timecount+=1;
    }
}
hanabi.prototype.update = function() {

			for(let i=0;i<this.fws.length;i++){
				if(this.timecount<=50){
					this.upSpeed+=0.01;
					this.fws[i].y+=this.upSpeed;
					this.bombY=this.fws[i].y;
				}
				else if(this.timecount<=120){
					this.speed[i].y+=this.gravity;
					this.fws[i].x+=this.speed[i].x;
					this.fws[i].y+=this.speed[i].y;
				}else{
					this.fws.splice(i, 1);
					this.speed.splice(i, 1);
				}

    }
  }
 // hot keys
  function keyPressed() {
    if (keyCode === 66) { //B
      boxes[21].clickButton();
    }
    if (keyCode === 32) { //Space to random the rgb
      R=random(255);
      G=random(255);
      B=random(255);
    }
    if (keyCode === 16) { //Shift L to hide the menw
      isMenuHide = !isMenuHide;
    }
    if (keyCode === 83) { //S to sabe the picture
      boxes[18].clickButton();
    }
  }
