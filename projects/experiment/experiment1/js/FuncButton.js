function FuncButton(X, Y, W, H, CMD) {
    //位置
    this.x = X;
    this.y = Y;
    //大小
    this.w = W;
    this.h = H;
    //模式
    this.cmd = CMD;
  }
  FuncButton.prototype.isMouseInButton = function() {
    if (mouseX >= this.x && mouseX <= this.x + this.w &&
      mouseY >= this.y && mouseY <= this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }
  //为FuncButton添加clickButton（）函数,判断鼠标按下了哪个按钮
  FuncButton.prototype.clickButton = function() {
    print("ClickButton!");
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
  //为FuncButton添加displayButton（）函数,显示按钮
  FuncButton.prototype.displayButton = function() {
      //在指定位置画出按钮
    stroke(0);
    strokeWeight(1);
    fill(255, 255, 255);
    rect(this.x, this.y, this.w, this.h, 5);


    if (this.cmd == "sun") {
        //画出太阳形状

      image(picSave,this.x+33, this.y , 30, 30);

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
