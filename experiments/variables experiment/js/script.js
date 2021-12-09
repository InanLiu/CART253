
//全局变量
var objs = [];  //已画图形存放
var btns = [];  //已画按钮存放
var FPS = 60;   //帧率
var timepast = 0;   //时间记录

//画笔色
var R = 200;
var G = 150;
var B = 50;
//背景色
var bR = 0;
var bG = 0;
var bB = 50;

var eraserRange = 20;         //消除范围大小
var timerRange = 50;          //时停范围大小
var controlRange=20;
var brushType = "CIRCLE";     //当前画笔模式
var pbrushType = "CIRCLE";    //之前画笔模式
var isPlaying = true;         //是否暂停
var isMenuHide = false;       //菜单是否隐藏
var wind=10;
var isWindR=false;
var isWindL=false;
var isBlackHOle=false;
var isreleased=false;
//功能按钮函数
function FuncBtn(X, Y, W, H, CMD) {
    //位置
    this.x = X;
    this.y = Y;
    //大小
    this.w = W;
    this.h = H;
    //模式
    this.cmd = CMD;
  }

  //为FuncBtn添加isMouseInBtn（）函数,判断鼠标是否在按钮上
  FuncBtn.prototype.isMouseInBtn = function() {
    if (mouseX >= this.x && mouseX <= this.x + this.w &&
      mouseY >= this.y && mouseY <= this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }
  //为FuncBtn添加clickBtn（）函数,判断鼠标按下了哪个按钮
  FuncBtn.prototype.clickBtn = function() {
    print("ClickBtn!");
    if (this.cmd == "sun") {
        //背景色改为白天，切换图标改为黑夜
      bR = 200;
      bG = 255;
      bB = 255;
      this.cmd = "moon";

    } else if (this.cmd == "moon") {
        //背景色改为黑夜，切换图片改为白天
      bR = 0;
      bG = 0;
      bB = 50;
      this.cmd = "setcolor";
    } else if (this.cmd == "setcolor") {
      //背景色改为黑夜，切换图片改为白天
    bR = R;
    bG = G;
    bB = B;
    this.cmd = "sun";
  } else if (this.cmd == "pause") {
        //停止所有已有图像的运动，切换图标改为播放
      isPlaying = false;
      for (var i = 0; i < objs.length; i++) {
        objs[i].isPlaying = false;
      }
      this.cmd = "play";

    } else if (this.cmd == "play") {
        //解除所有图像的运动限制，切换图标改为暂停
      isPlaying = true;
      for (var i = 0; i < objs.length; i++) {
        objs[i].isPlaying = true;
      }
      this.cmd = "pause";

    } else if (this.cmd == "timer") {
        //画笔类型改为时间画笔
      brushType = "TIMER";

    } else if (this.cmd == "eraser") {
        //画笔类型改为消除
      brushType = "ERASER";
    } else if (this.cmd == "clear") {
        //清空画布
      objs = [];
   } else if (this.cmd == "save") {
       //保存当前画布的图像
       saveCanvas("Painting", "png")
    } else if (this.cmd == "wind") {
      //清空画布
      if(isWindR==false&&isWindL==false){
        isWindR=true;
        wind=10;
      }
      else if(isWindR==true&&isWindL==false){
        isWindL=true;
        isWindR=false;
        wind=-10;
      }
      else if(isWindL==true&&isWindR==false)
        isWindL=false;
   } else if (this.cmd == "blackhole") {
    //清空画布
      if(!isBlackHOle&&!isreleased)
        isBlackHOle=true;
      else if(isBlackHOle&&!isreleased){
        isBlackHOle=false;
        isreleased=true;
      }else{
        isreleased=false;
      }
    }else if (this.cmd == "control") {
      brushType = "CONTROL";

      }else if (this.cmd == "circle") {
        //画笔由圆形切换至三角形
      brushType = "TRIANGLE";
      pbrushType = "CIRCLE";
      this.cmd = "triangle";

    } else if (this.cmd == "triangle") {
        //画笔由三角形切换至直线
      brushType = "LINES";
      pbrushType = "TRIANGLE";
      this.cmd = "lines";

    } else if (this.cmd == "lines") {

      brushType = "CUBE";
      pbrushType = "LINES";
      this.cmd = "cube";
    }else if (this.cmd == "cube") {

    brushType = "BALL";
    pbrushType = "CUBE";
    this.cmd = "ball";
    }else if (this.cmd == "ball") {

    brushType = "SNOW";
    pbrushType = "BALL";
    this.cmd = "snow";
    }else if (this.cmd == "snow") {

    brushType = "CIRCLE";
    pbrushType = "SNOW";
    this.cmd = "circle";
    }
    else if (this.cmd == "star") {

    brushType = "STAR";
    this.cmd="sakura";
    }else if (this.cmd == "sakura") {

    brushType = "SAKURA";
    this.cmd="hanabi";
    }else if (this.cmd == "hanabi") {

    brushType = "HANABI";
    this.cmd="star";
    }

  }
//为FuncBtn添加displayBtn（）函数,显示按钮
  FuncBtn.prototype.displayBtn = function() {
      //在指定位置画出按钮
    stroke(0);
    strokeWeight(1);
    fill(255, 255, 255);
    rect(this.x, this.y, this.w, this.h, 5);


    if (this.cmd == "sun") {
        //画出太阳形状
      fill(255, 50, 50);
      translate(this.x + this.w / 2, this.y + this.h / 2);
      for (var i = 0; i < 8; i++) {
        rotate(PI / 4.0);
        line(0, 0, 8, 8);
      }
      resetMatrix();
      ellipse(this.x + this.w / 2, this.y + this.h / 2, 15, 15);


    } else if (this.cmd == "moon") {
        //画出月亮
      fill(255, 255, 50);
      translate(this.x + this.w / 2, this.y + this.h / 2);
      arc(-5, 0, 25, 25, PI + HALF_PI, HALF_PI, CHORD);
      resetMatrix();

    } else if (this.cmd == "setcolor") {
    fill(R, G, B);
    translate(this.x + this.w / 2, this.y + this.h / 2);
   rect(-7.5,-7.5,15,15);
    resetMatrix();

  } else if (this.cmd == "pause") {
        //画出暂停形状
      fill(0);
      translate(this.x + this.w / 2, this.y + this.h / 2);
      rectMode(CENTER);
      rect(-4, 0, 4, 15);
      rect(4, 0, 4, 15);
      rectMode(CORNER);
      resetMatrix();
    } else if (this.cmd == "play") {
      fill(0);
      translate(this.x + this.w / 2, this.y + this.h / 2);
      triangle(-2, -8, -2, 8, 6, 0);
      resetMatrix();
    } else if (this.cmd == "timer") {

      translate(this.x + this.w / 2, this.y + this.h / 2);
      noFill();
      ellipse(0, 0, 22, 22);
      ellipse(0, 0, 25, 25);
      fill(0);
      ellipse(0, 0, 3, 3);
      strokeWeight(2);
      line(0, 0, 5, 0);
      line(0, 0, 0, -7);
      resetMatrix();
    } else if (this.cmd == "control") {

      translate(this.x + this.w / 2, this.y + this.h / 2);
      fill(0,0,0);
      rect(-8.5, -2, 16, 4);
      rect(-2.5, -8, 4,16);
      triangle(-3,-8,3,-8,0,-12);
      triangle(-3,8,3,8,0,12);
      triangle(7.5,3.5,7.5,-2.5,12,0.5);
      triangle(-7.5,3.5,-7.5,-2.5,-12,0.5);

      resetMatrix();
    }else if (this.cmd == "eraser") {
      fill(0);
      noStroke();
      translate(this.x + this.w / 2, this.y + this.h / 2);
      textSize(25);
      textAlign(CENTER);
      textStyle(BOLD);
      text("E", 0, 8);
      resetMatrix();
    } else if (this.cmd == "clear") {

      fill(0);
      noStroke();
      translate(this.x + this.w / 2, this.y + this.h / 2);
      textSize(25);
      textAlign(CENTER);
      textStyle(BOLD);
      text("C", 0, 8);
      resetMatrix();
  } else if (this.cmd == "save") {

      fill(0);
      noStroke();
      translate(this.x + this.w / 2, this.y + this.h / 2);
      textSize(25);
      textAlign(CENTER);
      textStyle(BOLD);
      text("S", 0, 8);
      resetMatrix();
    } else if (this.cmd == "wind") {

      fill(0);
      noStroke();
      translate(this.x + this.w / 2, this.y + this.h / 2);
      textSize(25);
      textAlign(CENTER);
      textStyle(BOLD);
      text("W", 0, 8);
      resetMatrix();
    }else if (this.cmd == "blackhole") {

      fill(0);
      noStroke();
      translate(this.x + this.w / 2, this.y + this.h / 2);
      textSize(25);
      textAlign(CENTER);
      textStyle(BOLD);
      text("B", 0, 8);
      resetMatrix();
    }else if (this.cmd == "circle") {

      fill(0);
      translate(this.x + this.w / 2, this.y + this.h / 2);
      ellipse(6, -2, 10, 10);
      ellipse(-5, -5, 5, 5);
      ellipse(3, 8, 4, 4);
      resetMatrix();

    } else if (this.cmd == "triangle") {

      fill(0);
      translate(this.x + this.w / 2, this.y + this.h / 2);
      triangle(0, 0, 10, 0, 5, -8);
      triangle(-5, 8, 5, 8, 0, 0);
      triangle(-8, -5, -3, -5, -5.5, -9);
      resetMatrix();

    } else if (this.cmd == "lines") {

      fill(0);
      strokeWeight(2);
      translate(this.x + this.w / 2, this.y + this.h / 2);
      line(-5, -10, 5, 0);
      line(-10, -10, 10, 10);
      line(-5, 0, 5, 10);
      resetMatrix();

    } else if (this.cmd == "cube") {

      fill(0);
      strokeWeight(2);
      translate(this.x + this.w / 2-5, this.y + this.h / 2-5);
      //rectMode(CENTER);
      rect(0, 0, 10, 10);
      resetMatrix();

    }else if (this.cmd == "ball") {

      fill(0);
      strokeWeight(2);
      translate(this.x + this.w / 2, this.y + this.h / 2);
      //rectMode(CENTER);
      ellipse(-5, -5, 10, 10);
      line(3, 3, 10, 10);
      line(2, -3,10, 5);
      line(-3, 4, 7, 14);
      resetMatrix();

    }else if (this.cmd == "snow") {

      fill(0);
      strokeWeight(2);
      translate(this.x + this.w / 2, this.y + this.h / 2);
      snow(0,0,10);
      resetMatrix();

    }else if (this.cmd == "star") {

      translate(this.x + this.w / 2, this.y + this.h / 2);
      star(0,0,10,0,0,0);
      resetMatrix();

    }else if (this.cmd == "sakura") {

      translate(this.x + this.w / 2, this.y + this.h / 2);
      sakura(0,0,10,0,0,0);
      resetMatrix();

    }else if (this.cmd == "hanabi") {

      translate(this.x + this.w / 2, this.y + this.h / 2);
      fill(0,0,0);
      ellipse(-5,-5,5,5)
      ellipse(5,-5,5,5)
      ellipse(-5,0,5,5)
      ellipse(5,0,5,5)
      resetMatrix();

    }

  }


  //颜色按钮
  function ColorBtn(X, Y, W, H, givenR, givenG, givenB) {
      //位置
    this.x = X;
    this.y = Y;
    //大小
    this.w = W;
    this.h = H;
    //颜色
    this.r = givenR;
    this.g = givenG;
    this.b = givenB;
  }
  //添加判断鼠标是否在按钮范围内函数
  ColorBtn.prototype.isMouseInBtn = function() {
    if (mouseX >= this.x && mouseX <= this.x + this.w &&
      mouseY >= this.y && mouseY <= this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }
  //添加点击响应函数
  ColorBtn.prototype.clickBtn = function() {
    R = this.r;
    G = this.g;
    B = this.b;
    if (brushType == "ERASER" || brushType == "TIMER") {
      brushType = pbrushType;
    }
  }
  //添加显示按钮函数
  ColorBtn.prototype.displayBtn = function() {
    stroke(0);
    strokeWeight(1);
    fill(this.r * 1.5, this.g * 1.5, this.b * 1.5);
    rect(this.x, this.y, this.w, this.h, 5);
  }


  //图形结点函数
  function Node(position, givenSize, givenR, givenG, givenB) {
      //颜色
    this.R = givenR;
    this.G = givenG;
    this.B = givenB;
    //位置
    this.position = createVector(position.x, position.y);
    this.position.x += (random(20) - 10);
    this.position.y += (random(20) - 10);
    //大小
    this.size = createVector(0, 0);
    this.sizeScale = 0.5;
    var randomSize = givenSize / 2 + random(10);
    this.baseSize = createVector(randomSize, randomSize);

    this.timepast = 0;
    this.isPlaying = isPlaying;
    this.rotateAngle = random(2 * PI);
    this.shapeType = brushType;
    this.pmouseX = pmouseX;
    this.pmouseY = pmouseY;
    this.mouseX = mouseX;
    this.mouseY = mouseY;

    this.ballx=mouseX;
    this.bally=mouseY;
    this.vx=(random(4) - 2);
    this.vy=(random(6) - 3);

    this.snowx=mouseX;
    this.snowy=mouseY;
    this.snowg=2;
    this.snowSize=random(5)+5;
    this.snowAngle=0.005*PI;
    this.snowTurn=random(1);
    this.snowColor=random(1.5)+1;

    this.starx=mouseX;
    this.stary=mouseY;
    this.starsize=50;
    this.startime=0;
    this.starAngle=random(2)*PI;

    this.rleasedX=(random(10)-5);
    this.rleasedY=(random(10)-5);

    this.isControled=false;

    this.sakuraX=mouseX;
    this.sakuraY=mouseY;
    this.sakuraG=2;
    this.sakuraSize=random(10)+5;
    this.sakuraAngle=0.005*PI;
    this.sakuraTurn=random(1);
    this.sakuraColor=random(1.5)+1;
    this.sakuraType=random(1)-0.5;

  }
  //添加drawing函数
  Node.prototype.drawing = function() {
    noStroke();
    if (this.shapeType == "CIRCLE") {
      if(isBlackHOle){
        this.position.x+=(mouseX-this.position.x)/200;
        this.position.y+=(mouseY-this.position.y)/200;
      }
      else if(isreleased){
        this.position.x+=this.rleasedX/10;
        this.position.y+=this.rleasedY/10;
      }

      if(this.isControled){
        this.position.x+=(mouseX-this.position.x)/10;
        this.position.y+=(mouseY-this.position.y)/10;
      }
      translate(this.position.x, this.position.y);
      fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, round(sin(this.timepast) * 128));
      ellipse(sin(this.timepast) * this.baseSize.x, cos(this.timepast) * this.baseSize.y, this.size.x * 1.25, this.size.y * 1.25);
      fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, 255);
      ellipse(sin(this.timepast) * this.baseSize.x, cos(this.timepast) * this.baseSize.y, this.size.x, this.size.y);
      resetMatrix();


    } else if (this.shapeType == "TRIANGLE") {
      if(isBlackHOle){
        this.position.x+=(mouseX-this.position.x)/200;
        this.position.y+=(mouseY-this.position.y)/200;
      }
      else if(isreleased){
        this.position.x+=this.rleasedX/10;
        this.position.y+=this.rleasedY/10;
      }

      if(this.isControled){
        this.position.x+=(mouseX-this.position.x)/10;
        this.position.y+=(mouseY-this.position.y)/10;
      }
      translate(this.position.x, this.position.y);
      rotate(this.rotateAngle);
      fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, round(sin(this.timepast) * 128));
      triangle(sin(this.timepast) * this.baseSize.x - this.size.x * 1.5 * 0.5,
        cos(this.timepast) * this.baseSize.y - this.size.y * 1.5 * 0.5,

        sin(this.timepast) * this.baseSize.x + this.size.x * 1.5 * 0.5,
        cos(this.timepast) * this.baseSize.y - this.size.y * 1.5 * 0.5,

        sin(this.timepast) * this.baseSize.x * 0.5,
        cos(this.timepast) * this.baseSize.y + this.size.y * 1.5 * 0.9 * 0.5);

      fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, 255);
      triangle(sin(this.timepast) * this.baseSize.x - this.size.x * 0.5,
        cos(this.timepast) * this.baseSize.y - this.size.y * 0.5,

        sin(this.timepast) * this.baseSize.x + this.size.x * 0.5,
        cos(this.timepast) * this.baseSize.y - this.size.y * 0.5,

        sin(this.timepast) * this.baseSize.x * 0.5,
        cos(this.timepast) * this.baseSize.y + this.size.y * 0.9 * 0.5);
      resetMatrix();


    } else if (this.shapeType == "LINES") {


      strokeWeight(2 + this.size.x / 1.5 * 0.75);
      stroke(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, round(sin(this.timepast) * 128));
      line(this.pmouseX, this.pmouseY, this.mouseX, this.mouseY);
      strokeWeight(1.5 + this.size.x / 1.5 * 0.5);
      stroke(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, 255);
      line(this.pmouseX, this.pmouseY, this.mouseX, this.mouseY);


    }else if (this.shapeType == "CUBE") {
      if(isBlackHOle){
        this.position.x+=(mouseX-this.position.x)/200;
        this.position.y+=(mouseY-this.position.y)/200;
      }
      else if(isreleased){
        this.position.x+=this.rleasedX/10;
        this.position.y+=this.rleasedY/10;
      }

      if(this.isControled){
        this.position.x+=(mouseX-this.position.x)/10;
        this.position.y+=(mouseY-this.position.y)/10;
      }
      translate(this.position.x, this.position.y);
      rotate(this.rotateAngle);
      fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, round(sin(this.timepast) * 128));
      rect(sin(this.timepast) * this.baseSize.x+5, cos(this.timepast) * this.baseSize.y+5, this.size.x * 1.25, this.size.y * 1.25);
      rotate(this.rotateAngle);
      fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, 255);
      rect(sin(this.timepast) * this.baseSize.x, cos(this.timepast) * this.baseSize.y, this.size.x, this.size.y);
      resetMatrix();

    }else if (this.shapeType == "BALL") {
      if(this.isControled){
        this.ballx+=(mouseX-this.ballx)/10;
        this.bally+=(mouseY-this.bally)/10;
      }
      translate(this.ballx, this.bally);
      fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10);
      ellipse(0, 0, this.size.x * 1.25, this.size.y * 1.25);
      if(this.isPlaying){
      this.ballx+=this.vx;
      this.bally+=this.vy;

	    if(this.ballx>width||this.ballx<0)
		    this.vx*=-1;

      if(this.bally>height||this.bally<0)
		    this.vy*=-1;
      }
      resetMatrix();
    }else if (this.shapeType == "SNOW") {
      translate(this.snowx, this.snowy);
      rotate(this.snowAngle);
      if(this.snowTurn<0.5)
        this.snowTurn=-1*this.snowTurn;

      stroke( this.R*this.snowColor, this.G*this.snowColor,  this.B*this.snowColor );
      snow(0, 0,this.snowSize);

      if(this.isPlaying){
      this.snowy+=this.snowg*this.snowSize/5;

      if(!isWindR&&!isWindL)
        this.snowx+=sin(this.timepast) * this.snowSize/15*this.snowTurn;
      else if(isWindR||isWindL)
      {
        if(this.snowSize<5)
          this.snowx+=wind/5;
        else
          this.snowx+=wind/this.snowSize*2;
      }

      if(this.snowy>height)
        this.snowy=0;
      if(this.snowx>width)
        this.snowx=0;
      if(this.snowx<0)
        this.snowx=width;

        this.snowAngle+=0.005*PI;
        if(this.snowAngle>2*PI)
          this.snowAngle=0.005*PI;
    }
      resetMatrix();

    }else if (this.shapeType == "STAR") {
      if(this.isControled){
        this.starx+=(mouseX-this.starx)/10;
        this.stary+=(mouseY-this.stary)/10;
      }

      translate(this.starx, this.stary);
      rotate(this.starAngle);

      star(0,0,this.starsize*1.2,this.R*2,this.G*2,this.B*2);
      if((0.9+this.startime)>1.2)
        star(0,0,this.starsize*1.2,this.R*0.5,this.G*0.5,this.B*0.5);
      else
      star(0,0,this.starsize*(0.9+this.startime),this.R*0.5,this.G*0.5,this.B*0.5);
      star(0,0,this.starsize*(0.6+this.startime),this.R*2,this.G*2,this.B*2);
      star(0,0,this.starsize*(0.3+this.startime),this.R*0.5,this.G*0.5,this.B*0.5);
      star(0,0,this.starsize*(0.0+this.startime),this.R*2,this.G*2,this.B*2);
      if(this.starsize*(-0.3+this.startime>0))
        star(0,0,this.starsize*(-0.3+this.startime),this.R*0.5,this.G*0.5,this.B*0.5);

      if(this.isPlaying){
        this.startime+=0.005;
        if(this.startime>0.6)
        this.startime=0
      }

      resetMatrix();
    }else if (this.shapeType == "SAKURA") {
      if(this.sakuraType<0)
        this.sakuraType=-1;
      else
        this.sakuraType=1;
      translate(this.sakuraX, this.sakuraY);
      rotate(this.sakuraAngle);
      if(this.sakuraTurn<0.5)
        this.sakuraTurn=-1*this.sakuraTurn;

      sakura(0, 0,this.sakuraSize*this.sakuraType,this.R*this.sakuraColor, this.G*this.sakuraColor,  this.B*this.sakuraColor);

      if(this.isPlaying){
      this.sakuraY+=this.sakuraG*0.5*this.sakuraSize/5;

      if(!isWindR&&!isWindL)
        this.sakuraX+=sin(this.timepast) * this.sakuraSize/15*this.sakuraTurn;
      else if(isWindR||isWindL)
      {
        if(this.sakuraSize<5)
          this.sakuraX+=wind/5;
        else
          this.sakuraX+=wind/this.sakuraSize*2;
      }

      if(this.sakuraY>height)
        this.sakuraY=0;
      if(this.sakuraX>width)
        this.sakuraX=0;
      if(this.sakuraX<0)
        this.sakuraX=width;

        this.sakuraAngle+=0.005*PI;
        if(this.sakuraAngle>2*PI)
          this.sakuraAngle=0.005*PI;
    }
      resetMatrix();

    }
}
  //添加update（）函数，用于更新所画图形
  Node.prototype.update = function() {
    this.size = createVector(this.baseSize.x + sin(this.timepast) * this.baseSize.x * this.sizeScale,
      this.baseSize.y + sin(this.timepast) * this.baseSize.y * this.sizeScale);
    if (this.isPlaying) {
      this.timepast += 1 / FPS;
    }
  }


//设置画布，绘出按钮
  function setup() {
    frameRate(FPS);
    createCanvas(600, 700);
    createColorPicker()
    createSlider()
    noCursor();//隐藏鼠标
    strokeCap(PROJECT); //设置线条类型为扩展性
    //加载颜色按钮
    btns.push(new ColorBtn(5, 5 + 30 * 0, 30, 30, 200, 50, 50));
    btns.push(new ColorBtn(5, 5 + 30 * 1, 30, 30, 200, 100, 50));
    btns.push(new ColorBtn(5, 5 + 30 * 2, 30, 30, 200, 150, 50));

    btns.push(new ColorBtn(5, 5 + 30 * 3, 30, 30, 150, 200, 50));
    btns.push(new ColorBtn(5, 5 + 30 * 4, 30, 30, 100, 200, 50));
    btns.push(new ColorBtn(5, 5 + 30 * 5, 30, 30, 50, 200, 50));

    btns.push(new ColorBtn(5, 5 + 30 * 6, 30, 30, 50, 150, 200));
    btns.push(new ColorBtn(5, 5 + 30 * 7, 30, 30, 50, 100, 200));
    btns.push(new ColorBtn(5, 5 + 30 * 8, 30, 30, 50, 50, 200));

    btns.push(new ColorBtn(5, 5 + 30 * 9, 30, 30, 100, 50, 200));
    btns.push(new ColorBtn(5, 5 + 30 * 10, 30, 30, 150, 50, 200));
    btns.push(new ColorBtn(5, 5 + 30 * 11, 30, 30, 200, 50, 200));

    //加载功能按钮
    btns.push(new FuncBtn(5, 5 + 30 * 12, 30, 30, "sun"));
    btns.push(new FuncBtn(5, 5 + 30 * 13, 30, 30, "circle"));
    btns.push(new FuncBtn(5, 5 + 30 * 14, 30, 30, "star"));
    if(isPlaying){
      btns.push(new FuncBtn(5, 5 + 30 * 15, 30, 30, "pause"));
    }else{
      btns.push(new FuncBtn(5, 5 + 30 * 15, 30, 30, "play"));
    }
    btns.push(new FuncBtn(5, 5 + 30 * 16, 30, 30, "timer"));
    btns.push(new FuncBtn(5, 5 + 30 * 17, 30, 30, "eraser"));
    btns.push(new FuncBtn(5, 5 + 30 * 18, 30, 30, "clear"));
    btns.push(new FuncBtn(5, 5 + 30 * 19, 30, 30, "save"));
    btns.push(new FuncBtn(5, 5 + 30 * 20, 30, 30, "wind"));
    btns.push(new FuncBtn(5, 5 + 30 * 21, 30, 30, "blackhole"));
    btns.push(new FuncBtn(5, 5 + 30 * 22, 30, 30, "control"));

  }


  //画图函数
  function draw() {
      //设置背景色
    background(bR, bG, bB);
    //计时
    timepast += 1 / FPS;
    //提示
    if (!isMenuHide) {
      if (timepast < 2) {
        noStroke();
        textAlign(LEFT);
        textSize(15);
        fill(255 - bR);
        text("Floating Light v1.0 - Made By Shangjing Lin(Stanley)", 10, height - 10);
      } else if (timepast < 5) {
        noStroke();
        textAlign(LEFT);
        textSize(15);
        fill(255 - bR);
        text("Press Left Shift to hide Menu, Press S to save canvas to PNG.", 10, height - 10);
      }
    }
    //绘图
    if (mouseIsPressed && (mouseX > 40 || isMenuHide)) {
      if (brushType == "CIRCLE" || brushType == "LINES" || brushType == "TRIANGLE"||
       brushType=="CUBE"||brushType=="BALL"||brushType=="SNOW"||brushType=="SAKURA") {
        var position = createVector(mouseX, mouseY);
        //将新画的图像存入数组中，设置位置，大小（滑动越快越大），颜色
        objs.push(new Node(position, sqrt(sq(mouseX - pmouseX) + sq(mouseY - pmouseY)), R, G, B));
      }else if (brushType == "HANABI") {
        objs.push(new hanabi(mouseX,mouseY,R, G, B));
      }
      //Eraser
      else if (brushType == "ERASER" && objs.length > 0) {
        for (var i = 0; i < objs.length; i++) {
            //删除某个图像
          if (sqrt(sq(objs[i].position.x - mouseX) + sq(objs[i].position.y - mouseY)) <= eraserRange) {
            objs.splice(i, 1);
            break;

          }
        }
      } else if (brushType == "TIMER" && objs.length > 0) {
        for (var i = 0; i < objs.length; i++) {
          if (sqrt(sq(objs[i].position.x - mouseX) + sq(objs[i].position.y - mouseY)) <= timerRange) {
            objs[i].timepast += 2 / FPS;
            objs[i].isPlaying = false;
          }
        }
      }else if (brushType == "CONTROL" && objs.length > 0) {
        for (var i = 0; i < objs.length; i++) {
          if(objs[i].shapeType=="STAR"){
            if (sqrt(sq(objs[i].starx - mouseX) + sq(objs[i].stary - mouseY)) <=controlRange) {
              objs[i].isControled=true;
            }
          }else if(objs[i].shapeType=="BALL"){
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
      for (var i = 0; i < objs.length; i++) {
        objs[i].isControled=false;
      }
    }
    //将数组中存储的数据全部画出来
    for (var i = 0; i < objs.length; i++) {
      objs[i].drawing();
      objs[i].update();
    }


    //鼠标图像
    stroke(0);
    strokeWeight(2);
    if (!isMenuHide) {
      for (var i = 0; i < btns.length; i++) {
        //绘制按钮
        btns[i].displayBtn();
        //判断是否在按钮上，是则呈现手型
        if (btns[i].isMouseInBtn()) {
          cursor(HAND);
        }
      }
    }

    //Canvas
    if (mouseX > 40 || isMenuHide) {
      noCursor();
      fill(R * 1.5, G * 1.5, B * 1.5);
      stroke(R * 1.5, G * 1.5, B * 1.5);
      if (brushType == "CIRCLE"||brushType == "BALL"||brushType == "HANABI") {
        ellipse(mouseX, mouseY, 10, 10);
      } else if (brushType == "TRIANGLE") {
        triangle(mouseX - 5, mouseY + 3, mouseX + 5, mouseY + 3, mouseX, mouseY - 5);
      } else if (brushType == "LINES") {
        translate(mouseX, mouseY);
        noFill();
        stroke(255 - bR);
        ellipse(0, 0, 20, 20);
        fill(R * 1.5, G * 1.5, B * 1.5);
        noStroke();
        ellipse(0, 0, 6, 6);
        resetMatrix();
      } else if (brushType == "CUBE") {
        translate(mouseX, mouseY);
        rect(-5,-5,10,10);
        resetMatrix();
      } else if (brushType == "SNOW") {
        translate(mouseX, mouseY);
        snow(0,0,10);
        resetMatrix();
      } else if (brushType == "STAR") {
        translate(mouseX, mouseY);
        star(0,0,10,R,G,B);
        resetMatrix();
      }else if (brushType == "SAKURA") {
        translate(mouseX, mouseY);
        sakura(0,0,10,R,G,B);
        resetMatrix();
      }else if (brushType == "ERASER") {
        translate(mouseX, mouseY);
        noFill();
        stroke(255 - bR);
        ellipse(0, 0, eraserRange, eraserRange);
        resetMatrix();

      } else if (brushType == "TIMER") {
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
      }else if(brushType=="CONTROL"){
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

    if (!isMenuHide) {
      for (var i = 0; i < btns.length; i++) {
        if (btns[i].isMouseInBtn()) {
          btns[i].clickBtn();
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


    var size2=size/1.8;

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
    if (this.shapeType == "HANABI") {
		if(!this.lock){
			for(var i=0;i<this.num;i++){
				this.fws[i]=(new p5.Vector(0,0));
				this.speed[i]=(new p5.Vector(random(5)-2.5,random(5)-2.5));
			}
			this.lock=true;
		}
			push();
			translate(this.centerx,this.centery);
			noStroke();
			for(var i=0;i<this.fws.length;i++){
				fill((random(1)+1)*this.R+random(100),(random(1)+1)*this.G+random(100),(random(1)+1)*this.B+random(100));
				ellipse(this.fws[i].x,this.fws[i].y,this.size/15,this.size/15);
			}
			pop();
  this.timecount+=1;
    }
}
hanabi.prototype.update = function() {

			for(var i=0;i<this.fws.length;i++){
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
    if (keyCode == 66) { //B
      btns[21].clickBtn();
    }
    if (keyCode == 32) { //Space
      R=random(255);
      G=random(255);
      B=random(255);
    }
    if (keyCode == 16) { //Shift L
      isMenuHide = !isMenuHide;
    }
    if (keyCode == 83) { //S
      btns[18].clickBtn();
    }
  }
