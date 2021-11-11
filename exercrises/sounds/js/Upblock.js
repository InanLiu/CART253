class Upbolck extends Block{
  constructor(x,y,blockH){
    super(x,y,blockH)
    this.width = 20;
    this.vx = 1;

  }
  display(){ // display the upblock 
    push();
    rectMode(CENTER);
    noStroke();
    fill(255,0,0)
    rect(this.x,this.y,this.width,this.height);
    pop();

  }
}
