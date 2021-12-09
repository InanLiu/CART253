function FuncButton(X, Y, W, H, CMD) {
    //postion
    this.x = X;
    this.y = Y;
    //size
    this.w = W;
    this.h = H;
    //mode
    this.cmd = CMD;
  }
  // function that check if the mouse is in the function buttons or not
  FuncButton.prototype.isMouseInButton = function() {
    if (mouseX >= this.x && mouseX <= this.x + this.w &&
      mouseY >= this.y && mouseY <= this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }

  // to check which button is clicked on
  FuncButton.prototype.clickButton = function() {
    print("ClickButton!");
    if (this.cmd == "sun") {
        //backgour color to day，change the label chage to night
      bR = 200;
      bG = 255;
      bB = 255;
      this.cmd = "moon";

    } else if (this.cmd == "moon") {
        //bgc change to night , change the label chage to afternoon
      bR = 0;
      bG = 0;
      bB = 50;
      this.cmd = "nightfall";
    } else if (this.cmd == "nightfall") {
      //bgc change to afternoon , change the label chage to day
    bR = 245;
    bG = 156;
    bB = 115;
    this.cmd = "sun";
  } else if (this.cmd == "pause") {
        //stop all the animation and movement , change label to play
      isPlaying = false;
      for (var i = 0; i < objs.length; i++) {
        objs[i].isPlaying = false;
      }
      this.cmd = "play";

    } else if (this.cmd == "play") {
        //cancel all the limation of movement , change label to pause
      isPlaying = true;
      for (var i = 0; i < objs.length; i++) {
        objs[i].isPlaying = true;
      }
      this.cmd = "pause";

    } else if (this.cmd == "timer") {
        //brushtybe to timer
      brushType = "TIMER";

    } else if (this.cmd == "eraser") {
        //brushType to eraser
      brushType = "ERASER";
    } else if (this.cmd == "clear") {
        //clean the canvas
      objs = [];
   } else if (this.cmd == "save") {
       //save the canvas into image
       saveCanvas("Painting", "png")
    } else if (this.cmd == "wind") {
      //active the wind effect
      if(isWindR==false&&isWindL==false){  // wind effect to right
        isWindR=true;
        wind=10;
      }
      else if(isWindR==true&&isWindL==false){  // wind effect to left
        isWindL=true;
        isWindR=false;
        wind=-10;
      }
      else if(isWindL==true&&isWindR==false)
        isWindL=false; // cancel the wind effect
   } else if (this.cmd == "blackhole") {
    //active the blackhole mode
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
       // actvie the control mode (allow user to drag the elements )
      }else if (this.cmd == "circle") {
        //brush mode and label change to triangle ,
      brushType = "TRIANGLE";
      pbrushType = "CIRCLE";
      this.cmd = "triangle";

    } else if (this.cmd == "triangle") {
      //brush mode and label change  to  lines
      brushType = "LINES";
      pbrushType = "TRIANGLE";
      this.cmd = "lines";

    } else if (this.cmd == "lines") {
        //brush mode and label change  to cube
      brushType = "CUBE";
      pbrushType = "LINES";
      this.cmd = "cube";
    }else if (this.cmd == "cube") {
     //brush mode and label change to ball
    brushType = "BALL";
    pbrushType = "CUBE";
    this.cmd = "ball";
    }else if (this.cmd == "ball") {
       //brush mode and label change to snow
    brushType = "SNOW";
    pbrushType = "BALL";
    this.cmd = "snow";
    }else if (this.cmd == "snow") {
       //brush mode and label change to to circle, one circulaiton compelete
    brushType = "CIRCLE";
    pbrushType = "SNOW";
    this.cmd = "circle";
    }
    else if (this.cmd == "star") {
        //brush mode and label change to star
    brushType = "STAR";
    this.cmd="sakura";
    }else if (this.cmd == "sakura") {
       //brush mode and label change to ssakura
    brushType = "SAKURA";
    this.cmd="hanabi";
    }else if (this.cmd == "hanabi") {
      //brush mode and label change to hanabi
    brushType = "HANABI";
    this.cmd="star";
    }
      //brush mode and label change to star
  }
  //function to display the button
  FuncButton.prototype.displayButton = function() {
      //在指定位置画出按钮
    stroke(0);
    strokeWeight(1);
    fill(255, 255, 255);
    rect(this.x, this.y, this.w, this.h, 5);


    if (this.cmd == "sun") {
        //picture of sun

      image(picSun,this.x+33, this.y , 30, 30);

    } else if (this.cmd == "moon") {
        //
      image(picMoon,this.x+33, this.y , 30, 30);

    } else if (this.cmd == "nightfall") {
      image(picNightfall,this.x+33, this.y+2 , 25, 25);

  } else if (this.cmd == "pause") {

      image(picPause,this.x+25, this.y-10 , 50,50);
    } else if (this.cmd == "play") {
      image(picStart,this.x+33, this.y+2 , 25, 25);
    } else if (this.cmd == "timer") {

      image(picTimer,this.x+36, this.y+2 , 25, 25);
    } else if (this.cmd == "control") {
      image(picHand,this.x+36, this.y+2 , 25, 25);

    }else if (this.cmd == "eraser") {
      image(picEraser,this.x+33, this.y , 30, 30);
    } else if (this.cmd == "clear") {

      image(picClear,this.x+25, this.y - 10 , 60, 60);
  } else if (this.cmd == "save") {

      image(picSave,this.x+25, this.y - 15 , 60, 60);
    } else if (this.cmd == "wind") {

      image(picWind,this.x+25, this.y - 12 , 60, 60);
    }else if (this.cmd == "blackhole") {

     image(picBlackhole,this.x+25, this.y - 12 , 60, 60);
    }else if (this.cmd == "circle") {

      image(picCircle,this.x+15, this.y - 12 , 60, 60);

    } else if (this.cmd == "triangle") {

      image(picTri,this.x+25, this.y - 12 , 40, 40);

    } else if (this.cmd == "lines") {

      image(picLines,this.x+15, this.y - 12 , 60, 60);

    } else if (this.cmd == "cube") {

      image(picCube,this.x+25, this.y  , 30, 30);

    }else if (this.cmd == "ball") {
      //draw the ball's label
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

    image(picSnow,this.x+23, this.y - 12 , 50, 50);

    }else if (this.cmd == "star") {

      image(picStar,this.x+25, this.y - 10 , 40,40);

    }else if (this.cmd == "sakura") {

      image(picSakura,this.x+30, this.y  , 30, 30);

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
