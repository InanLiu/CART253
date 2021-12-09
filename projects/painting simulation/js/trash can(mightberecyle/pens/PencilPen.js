class PencilPen{
    constructor(x,y){
    this.px = pmouseX;;
    this.py = pmouseY;
    this.x = mouseX;
    this.y = mouseY;
    this.size = random(10,20)
    this.hue = 0
    this.opacity = map(this.life, 1, 0, 255, 0)
}
show (){


  push();
  colorMode(HSB, 255);
  noStroke()
  this.hue += 10
  fill(color(this.hue, 255, 255,))
  ellipse(this.x, this.y, this.size)
  pop();


}
}
