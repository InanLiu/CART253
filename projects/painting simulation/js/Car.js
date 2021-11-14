class Car{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 20;
    this.vx = 5;
    this.vy = 0;
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
