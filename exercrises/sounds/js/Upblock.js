class Upbolck{
  constructor(x,y,blockH){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = blockH;
    this.vx = 1;
    this.vy = 0;
  }
  move(){
    this.x -= this.vx
    this.y += this.vy
  }

  wrap(){
  if (this.x < 0){
    this.x = width;
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
