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
  noStroke();
  for( i =0; i <10; i = i +0.5)  {
  fill( _Color , _Color , _Color , I );
  ellipse( the mouseX , mouseY , _size /10* I , _size /10* i ); }
  pop();
  //
  // push();
  // strokeWeight(2)
  // stroke(255)
  // line(this.px, this.py, this.x , this.y)
  // pop();
}
}
