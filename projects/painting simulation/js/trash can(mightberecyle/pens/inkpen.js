class InkPen{
    constructor(x,y){
    this.distance = 10;
    this.spring = 0.5;
    this.friction = 0.5;
    this.size = 25;
    this.diff = this.size/8;
    this.x = this.y = this.ax = this.ay = this.a = this.r  = 0;
    this.mX = mouseX;
  this.mX = mouseY;
}
show (){
  this.oldR = this.r;
    if(!this.f) {
      this.f = 1;
      this.x = this.mX;
      this.y = this.mY;
    }
    this.ax += ( this.mX - this.x ) * this.spring;
    this.ay += (this.mY - this.y ) * this.spring;
    this.ax *= this.friction;
    this.ay *= this.friction;
    this.a += sqrt( this.ax*this.ax + this.ay*this.ay ) - this.a;
    this.a *= 0.6;
    this.r = this.size - this.a;

    for( this.i = 0; this.i < this.distance; this.i++ ) {
  this.oldX = this.x;
  this.oldY = this.y;
  this.x += this.ax / this.distance;
  this.y += this.ay / this.distance;
  this.oldR += ( this.r - this.oldR ) / this.distance;
  if(this.oldR < 1) this.oldR = 1;
  strokeWeight( this.oldR+this.diff );
  line(this.x, this.y, this.mX, this.oldY);
  strokeWeight( this.oldR );
  // line( x+diff*2,  y+diff*2, oldX+diff*2, oldY+diff*2 );
  // line( x-diff, y-diff, oldX-diff, oldY-diff );
     }
    }
}
