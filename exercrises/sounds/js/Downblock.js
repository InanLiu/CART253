class Downbolck extends Blocks{

  constructor(x,y,blockH){
    super(x,y,blockH)
    this.width = 20;
    this.height = blockH;
    this.vx = 1;
  }
  display(){
    push();
    rectMode(CENTER);
    noStroke();
    fill(0,0,255)
    rect(this.x,this.y,this.width,this.height);
    pop();

  }




}
