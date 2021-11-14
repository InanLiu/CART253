
class Colourfulbrush{
  constructor(x,y){
    //postion of the brush
    this.x = x;
    this.y = y;
    //the colour of the brush
    this.hue = hue
    this.width = 2;
    this.height = 2;

  }
  move(){
    this.x += this.vx
    this.y += this.vy
  }

  wrap(){
    if (this.x > width){
      this.x -=width;
    }
  }
  display(){
    push();
    rectMode(CENTER);
    noStroke();
    fill(255,0,0)
    rect(this.x,this.y,this.width,this.height);
    pop();

  }




}
