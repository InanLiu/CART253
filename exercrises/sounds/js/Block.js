class Blocks{
  constructor(x,y,blockH){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = blockH;
    this.vx = 0;
    this.vy = 0;
  }
  move(){   //movement of block
    this.x -= this.vx
    this.y += this.vy
  }

  wrap(){   //block repeating
  if (this.x < 0){
    this.x = width;
  }
}

  display(){
    //Define in the subclasses
  }











}
