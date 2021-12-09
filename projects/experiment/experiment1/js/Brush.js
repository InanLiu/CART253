function Bursh(position, givenSize, givenR, givenG, givenB) {
    //color
  this.R = givenR;
  this.G = givenG;
  this.B = givenB;
  //pos
  this.position = createVector(position.x, position.y);
  this.position.x += (random(20) - 10);
  this.position.y += (random(20) - 10);
  //size
  this.size = createVector(0, 0);
  this.sizeScale = 0.5;
  var randomSize = givenSize / 2 + random(10);
  this.baseSize = createVector(randomSize, randomSize);

  this.timepast = 0;  // timer
  this.isPlaying = isPlaying; //check the pause
  this.rotateAngle = random(2 * PI);  //moveing angele
  this.shapeType = brushType;
  this.pmouseX = pmouseX;
  this.pmouseY = pmouseY;
  this.mouseX = mouseX;
  this.mouseY = mouseY;

  this.ballx=mouseX;  // p of balls
  this.bally=mouseY;
  this.vx=(random(4) - 2); // random moving speed
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
//add drawing function
Bursh.prototype.drawing = function() {
  noStroke();
  if (this.shapeType === "CIRCLE") {
    if(isBlackHOle){  //circle movement under the blackhole mode
      this.position.x+=(mouseX-this.position.x)/200;
      this.position.y+=(mouseY-this.position.y)/200;
    }
    else if(isreleased){ //circle movement under the release mode
      this.position.x+=this.rleasedX/10;
      this.position.y+=this.rleasedY/10;
    }

    if(this.isControled){  //circle movement under the isControled mode
      this.position.x+=(mouseX-this.position.x)/10;
      this.position.y+=(mouseY-this.position.y)/10;
    }
    translate(this.position.x, this.position.y);
    fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, round(sin(this.timepast) * 128));
    ellipse(sin(this.timepast) * this.baseSize.x, cos(this.timepast) * this.baseSize.y, this.size.x * 1.25, this.size.y * 1.25);
    fill(this.size.x * this.R / 10, this.size.x * this.G / 10, this.size.x * this.B / 10, 255);
    ellipse(sin(this.timepast) * this.baseSize.x, cos(this.timepast) * this.baseSize.y, this.size.x, this.size.y);
    resetMatrix();


  } else if (this.shapeType === "TRIANGLE") {
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


  } else if (this.shapeType === "LINES") {


    strokeWeight(2 + this.size.x / 1.5 * 0.75);
    stroke(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, round(sin(this.timepast) * 128));
    line(this.pmouseX, this.pmouseY, this.mouseX, this.mouseY);
    strokeWeight(1.5 + this.size.x / 1.5 * 0.5);
    stroke(this.size.x * this.R / 8, this.size.x * this.G / 8, this.size.x * this.B / 8, 255);
    line(this.pmouseX, this.pmouseY, this.mouseX, this.mouseY);


  }else if (this.shapeType === "CUBE") {
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

  }else if (this.shapeType === "BALL") {
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
  }else if (this.shapeType === "SNOW") {
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

  }else if (this.shapeType === "STAR") {
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
  }else if (this.shapeType === "SAKURA") {
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
Bursh.prototype.update = function() {
  this.size = createVector(this.baseSize.x + sin(this.timepast) * this.baseSize.x * this.sizeScale,
    this.baseSize.y + sin(this.timepast) * this.baseSize.y * this.sizeScale);
  if (this.isPlaying) {
    this.timepast += 1 / FPS;
  }
}
