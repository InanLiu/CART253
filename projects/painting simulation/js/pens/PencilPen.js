class PencilPen{
    constructor(x,y){
    this.px = pmouseX;;
    this.py = pmouseY;
    this.x = mouseX;
    this.y = mouseY;
}
show (){
  push();
  stroke(255)
  line(this.px, this.py, this.x , this.y)
  pop();

  push();

  stroke(234, 250, 7)
  line(this.px + 10, this.py+10, this.x + 10 , this.y+10)
  pop();

}
}
