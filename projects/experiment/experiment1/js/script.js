//全局变量
let objs = [];  //已画图形存放
let boxes = [];  //已画按钮存放
let FPS = 60;   //帧率
let timepast = 0;   //时间记录

//画笔色
let R = 200;
let G = 150;
let B = 50;
//背景色
let bR = 0;
let bG = 0;
let bB = 50;

let eraserRange = 20;         //消除范围大小
let timerRange = 50;          //时停范围大小
let controlRange=20;
let brushType = "CIRCLE";     //当前画笔模式
let pbrushType = "CIRCLE";    //之前画笔模式
let isPlaying = true;         //是否暂停
let isMenuHide = false;       //菜单是否隐藏
let wind=10;
let isWindR=false;
let isWindL=false;
let isBlackHOle=false;
let isreleased=false;




  //图形结点函数
//   function Bursh(position, givenSize, givenR, givenG, givenB) {
//       //颜色
//     this.R = givenR;
//     this.G = givenG;
//     this.B = givenB;
//     //位置
//     this.position = createVector(position.x, position.y);
//     this.position.x += (random(20) - 10);
//     this.position.y += (random(20) - 10);
//     //大小
//     this.size = createVector(0, 0);
//     this.sizeScale = 0.5;
//     let randomSize = givenSize / 2 + random(10);
//     this.baseSize = createVector(randomSize, randomSize);
//
//     this.timepast = 0;
//     this.isPlaying = isPlaying;
//     this.rotateAngle = random(2 * PI);
//     this.shapeType = brushType;
//     this.pmouseX = pmouseX;
//     this.pmouseY = pmouseY;
//     this.mouseX = mouseX;
//     this.mouseY = mouseY;
//
//     this.ballx=mouseX;
//     this.bally=mouseY;
//     this.vx=(random(4) - 2);
//     this.vy=(random(6) - 3);
//
//     this.snowx=mouseX;
//     this.snowy=mouseY;
//     this.snowg=2;
//     this.snowSize=random(5)+5;
//     this.snowAngle=0.005*PI;
//     this.snowTurn=random(1);
//     this.snowColor=random(1.5)+1;
//
//     this.starx=mouseX;
//     this.stary=mouseY;
//     this.starsize=50;
//     this.startime=0;
//     this.starAngle=random(2)*PI;
//
//     this.rleasedX=(random(10)-5);
//     this.rleasedY=(random(10)-5);
//
//     this.isControled=false;
//
//     this.sakuraX=mouseX;
//     this.sakuraY=mouseY;
//     this.sakuraG=2;
//     this.sakuraSize=random(10)+5;
//     this.sakuraAngle=0.005*PI;
//     this.sakuraTurn=random(1);
//     this.sakuraColor=random(1.5)+1;
//     this.sakuraType=random(1)-0.5;
//
//   }
//   //添加drawing函数
//   Bursh.prototype.drawing = function() {
//     noStroke();
//     if (this.shapeType === "CIRCLE") {
//       if(isBlackHOle){
//         this.position.x+=(mouseX-this.position.x)/200;
//         this.position.y+=(mouseY-this.position.y)/200;
//       }
//       else if(isreleased){
//         this.position.x+=this.rleasedX/10;
//         this.position.y+=this.rleasedY/10;
//       }
//
//       if(this.isControled){
//         this.position.x+=(mouseX-this.position.x)/10;
//         this.position.y+=(mouseY-this.position.y)/10;
//       }
//       translate(this.position.x, this.position.y);
//       fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, round(sin(this.timepast) * 128));
//       ellipse(sin(this.timepast) * this.baseSize.x, cos(this.timepast) * this.baseSize.y, this.size.x * 1.25, this.size.y * 1.25);
//       fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, 255);
//       ellipse(sin(this.timepast) * this.baseSize.x, cos(this.timepast) * this.baseSize.y, this.size.x, this.size.y);
//       resetMatrix();
//
//
//     } else if (this.shapeType === "TRIANGLE") {
//       if(isBlackHOle){
//         this.position.x+=(mouseX-this.position.x)/200;
//         this.position.y+=(mouseY-this.position.y)/200;
//       }
//       else if(isreleased){
//         this.position.x+=this.rleasedX/10;
//         this.position.y+=this.rleasedY/10;
//       }
//
//       if(this.isControled){
//         this.position.x+=(mouseX-this.position.x)/10;
//         this.position.y+=(mouseY-this.position.y)/10;
//       }
//       translate(this.position.x, this.position.y);
//       rotate(this.rotateAngle);
//       fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, round(sin(this.timepast) * 128));
//       triangle(sin(this.timepast) * this.baseSize.x - this.size.x * 1.5 * 0.5,
//         cos(this.timepast) * this.baseSize.y - this.size.y * 1.5 * 0.5,
//
//         sin(this.timepast) * this.baseSize.x + this.size.x * 1.5 * 0.5,
//         cos(this.timepast) * this.baseSize.y - this.size.y * 1.5 * 0.5,
//
//         sin(this.timepast) * this.baseSize.x * 0.5,
//         cos(this.timepast) * this.baseSize.y + this.size.y * 1.5 * 0.9 * 0.5);
//
//       fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, 255);
//       triangle(sin(this.timepast) * this.baseSize.x - this.size.x * 0.5,
//         cos(this.timepast) * this.baseSize.y - this.size.y * 0.5,
//
//         sin(this.timepast) * this.baseSize.x + this.size.x * 0.5,
//         cos(this.timepast) * this.baseSize.y - this.size.y * 0.5,
//
//         sin(this.timepast) * this.baseSize.x * 0.5,
//         cos(this.timepast) * this.baseSize.y + this.size.y * 0.9 * 0.5);
//       resetMatrix();
//
//
//     } else if (this.shapeType === "LINES") {
//
//
//       strokeWeight(2 + this.size.x / 1.5 * 0.75);
//       stroke(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, round(sin(this.timepast) * 128));
//       line(this.pmouseX, this.pmouseY, this.mouseX, this.mouseY);
//       strokeWeight(1.5 + this.size.x / 1.5 * 0.5);
//       stroke(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, 255);
//       line(this.pmouseX, this.pmouseY, this.mouseX, this.mouseY);
//
//
//     }else if (this.shapeType === "CUBE") {
//       if(isBlackHOle){
//         this.position.x+=(mouseX-this.position.x)/200;
//         this.position.y+=(mouseY-this.position.y)/200;
//       }
//       else if(isreleased){
//         this.position.x+=this.rleasedX/10;
//         this.position.y+=this.rleasedY/10;
//       }
//
//       if(this.isControled){
//         this.position.x+=(mouseX-this.position.x)/10;
//         this.position.y+=(mouseY-this.position.y)/10;
//       }
//       translate(this.position.x, this.position.y);
//       rotate(this.rotateAngle);
//       fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, round(sin(this.timepast) * 128));
//       rect(sin(this.timepast) * this.baseSize.x+5, cos(this.timepast) * this.baseSize.y+5, this.size.x * 1.25, this.size.y * 1.25);
//       rotate(this.rotateAngle);
//       fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, 255);
//       rect(sin(this.timepast) * this.baseSize.x, cos(this.timepast) * this.baseSize.y, this.size.x, this.size.y);
//       resetMatrix();
//
//     }else if (this.shapeType === "BALL") {
//       if(this.isControled){
//         this.ballx+=(mouseX-this.ballx)/10;
//         this.bally+=(mouseY-this.bally)/10;
//       }
//       translate(this.ballx, this.bally);
//       fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10);
//       ellipse(0, 0, this.size.x * 1.25, this.size.y * 1.25);
//       if(this.isPlaying){
//       this.ballx+=this.vx;
//       this.bally+=this.vy;
//
// 	    if(this.ballx>width||this.ballx<0)
// 		    this.vx*=-1;
//
//       if(this.bally>height||this.bally<0)
// 		    this.vy*=-1;
//       }
//       resetMatrix();
//     }else if (this.shapeType === "SNOW") {
//       translate(this.snowx, this.snowy);
//       rotate(this.snowAngle);
//       if(this.snowTurn<0.5)
//         this.snowTurn=-1*this.snowTurn;
//
//       stroke( this.R*this.snowColor, this.G*this.snowColor,  this.B*this.snowColor );
//       snow(0, 0,this.snowSize);
//
//       if(this.isPlaying){
//       this.snowy+=this.snowg*this.snowSize/5;
//
//       if(!isWindR&&!isWindL)
//         this.snowx+=sin(this.timepast) * this.snowSize/15*this.snowTurn;
//       else if(isWindR||isWindL)
//       {
//         if(this.snowSize<5)
//           this.snowx+=wind/5;
//         else
//           this.snowx+=wind/this.snowSize*2;
//       }
//
//       if(this.snowy>height)
//         this.snowy=0;
//       if(this.snowx>width)
//         this.snowx=0;
//       if(this.snowx<0)
//         this.snowx=width;
//
//         this.snowAngle+=0.005*PI;
//         if(this.snowAngle>2*PI)
//           this.snowAngle=0.005*PI;
//     }
//       resetMatrix();
//
//     }else if (this.shapeType === "STAR") {
//       if(this.isControled){
//         this.starx+=(mouseX-this.starx)/10;
//         this.stary+=(mouseY-this.stary)/10;
//       }
//
//       translate(this.starx, this.stary);
//       rotate(this.starAngle);
//
//       star(0,0,this.starsize*1.2,this.R*2,this.G*2,this.B*2);
//       if((0.9+this.startime)>1.2)
//         star(0,0,this.starsize*1.2,this.R*0.5,this.G*0.5,this.B*0.5);
//       else
//       star(0,0,this.starsize*(0.9+this.startime),this.R*0.5,this.G*0.5,this.B*0.5);
//       star(0,0,this.starsize*(0.6+this.startime),this.R*2,this.G*2,this.B*2);
//       star(0,0,this.starsize*(0.3+this.startime),this.R*0.5,this.G*0.5,this.B*0.5);
//       star(0,0,this.starsize*(0.0+this.startime),this.R*2,this.G*2,this.B*2);
//       if(this.starsize*(-0.3+this.startime>0))
//         star(0,0,this.starsize*(-0.3+this.startime),this.R*0.5,this.G*0.5,this.B*0.5);
//
//       if(this.isPlaying){
//         this.startime+=0.005;
//         if(this.startime>0.6)
//         this.startime=0
//       }
//
//       resetMatrix();
//     }else if (this.shapeType === "SAKURA") {
//       if(this.sakuraType<0)
//         this.sakuraType=-1;
//       else
//         this.sakuraType=1;
//       translate(this.sakuraX, this.sakuraY);
//       rotate(this.sakuraAngle);
//       if(this.sakuraTurn<0.5)
//         this.sakuraTurn=-1*this.sakuraTurn;
//
//       sakura(0, 0,this.sakuraSize*this.sakuraType,this.R*this.sakuraColor, this.G*this.sakuraColor,  this.B*this.sakuraColor);
//
//       if(this.isPlaying){
//       this.sakuraY+=this.sakuraG*0.5*this.sakuraSize/5;
//
//       if(!isWindR&&!isWindL)
//         this.sakuraX+=sin(this.timepast) * this.sakuraSize/15*this.sakuraTurn;
//       else if(isWindR||isWindL)
//       {
//         if(this.sakuraSize<5)
//           this.sakuraX+=wind/5;
//         else
//           this.sakuraX+=wind/this.sakuraSize*2;
//       }
//
//       if(this.sakuraY>height)
//         this.sakuraY=0;
//       if(this.sakuraX>width)
//         this.sakuraX=0;
//       if(this.sakuraX<0)
//         this.sakuraX=width;
//
//         this.sakuraAngle+=0.005*PI;
//         if(this.sakuraAngle>2*PI)
//           this.sakuraAngle=0.005*PI;
//     }
//       resetMatrix();
//
//     }
// }
//   //添加update（）函数，用于更新所画图形
//   Bursh.prototype.update = function() {
//     this.size = createVector(this.baseSize.x + sin(this.timepast) * this.baseSize.x * this.sizeScale,
//       this.baseSize.y + sin(this.timepast) * this.baseSize.y * this.sizeScale);
//     if (this.isPlaying) {
//       this.timepast += 1 / FPS;
//     }
//   }


//设置画布，绘出按钮
  function setup() {
    frameRate(FPS);
    createCanvas(330, 300);
    noCursor();//隐藏鼠标
    strokeCap(PROJECT); //设置线条类型为扩展性

		let options = createDiv()
		let optionsValue = createDiv().parent(options)
		penColor = createColorPicker(`#ffffff`)
		bgColor = createColorPicker(`#ffffff`)
    //加载颜色按钮
    boxes.push(new ColorButton(5, 5 + 30 * 0, 30, 30, 200, 50, 50));
    boxes.push(new ColorButton(5, 5 + 30 * 1, 30, 30, 200, 100, 50));
    boxes.push(new ColorButton(5, 5 + 30 * 2, 30, 30, 200, 150, 50));

    boxes.push(new ColorButton(5, 5 + 30 * 3, 30, 30, 150, 200, 50));
    boxes.push(new ColorButton(5, 5 + 30 * 4, 30, 30, 100, 200, 50));
    boxes.push(new ColorButton(5, 5 + 30 * 5, 30, 30, 50, 200, 50));

    boxes.push(new ColorButton(5, 5 + 30 * 6, 30, 30, 50, 150, 200));
    boxes.push(new ColorButton(5, 5 + 30 * 7, 30, 30, 50, 100, 200));
    boxes.push(new ColorButton(5, 5 + 30 * 8, 30, 30, 50, 50, 200));

    boxes.push(new ColorButton(5, 5 + 30 * 9, 30, 30, 100, 50, 200));
    boxes.push(new ColorButton(5, 5 + 30 * 10, 30, 30, 150, 50, 200));
    boxes.push(new ColorButton(5, 5 + 30 * 11, 30, 30, 200, 50, 200));

    //加载功能按钮
    boxes.push(new FuncButton(5, 5 + 30 * 12, 30, 30, "sun"));
    boxes.push(new FuncButton(5, 5 + 30 * 13, 30, 30, "circle"));
    boxes.push(new FuncButton(5, 5 + 30 * 14, 30, 30, "star"));
    if(isPlaying){
      boxes.push(new FuncButton(5, 5 + 30 * 15, 30, 30, "pause"));
    }else{
      boxes.push(new FuncButton(5, 5 + 30 * 15, 30, 30, "play"));
    }
    boxes.push(new FuncButton(5, 5 + 30 * 16, 100, 30, "timer"));
    boxes.push(new FuncButton(5, 5 + 30 * 17, 30, 30, "eraser"));
    boxes.push(new FuncButton(5, 5 + 30 * 18, 30, 30, "clear"));
    boxes.push(new FuncButton(5, 5 + 30 * 19, 30, 30, "save"));
    boxes.push(new FuncButton(5, 5 + 30 * 20, 30, 30, "wind"));
    boxes.push(new FuncButton(5, 5 + 30 * 21, 30, 30, "blackhole"));
    boxes.push(new FuncButton(5, 5 + 30 * 22, 30, 30, "control"));

  }


  //画图函数
  function draw() {
      //设置背景色
    background(bR, bG, bB);
    //计时
    timepast += 1 / FPS;

    //绘图
    if (mouseIsPressed && (mouseX > 110 || isMenuHide)) {
      if (brushType === "CIRCLE" || brushType === "LINES" || brushType === "TRIANGLE"||
       brushType==="CUBE"||brushType==="BALL"||brushType==="SNOW"||brushType==="SAKURA") {
        let position = createVector(mouseX, mouseY);
        //将新画的图像存入数组中，设置位置，大小（滑动越快越大），颜色
        objs.push(new Bursh(position, sqrt(sq(mouseX - pmouseX) + sq(mouseY - pmouseY)), R, G, B));
      }else if (brushType === "HANABI") {
        objs.push(new hanabi(mouseX,mouseY,R, G, B));
      }
      //Eraser
      else if (brushType === "ERASER" && objs.length > 0) {
        for (let i = 0; i < objs.length; i++) {
            //删除某个图像
          if (sqrt(sq(objs[i].position.x - mouseX) + sq(objs[i].position.y - mouseY)) <= eraserRange) {
            objs.splice(i, 1);
            break;

          }
        }
      } else if (brushType === "TIMER" && objs.length > 0) {
        for (let i = 0; i < objs.length; i++) {
          if (sqrt(sq(objs[i].position.x - mouseX) + sq(objs[i].position.y - mouseY)) <= timerRange) {
            objs[i].timepast += 2 / FPS;
            objs[i].isPlaying = false;
          }
        }
      }else if (brushType === "CONTROL" && objs.length > 0) {
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
    //将数组中存储的数据全部画出来
    for (let i = 0; i < objs.length; i++) {
      objs[i].drawing();
      objs[i].update();
    }


    //鼠标图像
    stroke(0);
    strokeWeight(2);
    if (!isMenuHide) {
      for (let i = 0; i < boxes.length; i++) {
        //绘制按钮
        boxes[i].displayButton();
        //判断是否在按钮上，是则呈现手型
        if (boxes[i].isMouseInButton()) {
          cursor(HAND);
        }
      }
    }

    //Canvas
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

  function hanabi(x,y,R,G,B) {
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

  function keyPressed() {
    if (keyCode === 66) { //B
      boxes[21].clickButton();
    }
    if (keyCode === 32) { //Space
      R=random(255);
      G=random(255);
      B=random(255);
    }
    if (keyCode === 16) { //Shift L
      isMenuHide = !isMenuHide;
    }
    if (keyCode === 83) { //S
      boxes[18].clickButton();
    }
  }
