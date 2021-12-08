class PencilPen{
    constructor(x,y){
    this.px = pmouseX;;
    this.py = pmouseY;
    this.x = mouseX;
    this.y = mouseY;
    this.size = 10
}
show (){


  push();
  strokeWeight(3)
  stroke(234, 250, 7 ,15)
  ellipse(this.x, this.y, this.size)
  pop();

  push();
  strokeWeight(2)
  stroke(255)
  line(this.px, this.py, this.x , this.y)
  pop();
}
}
