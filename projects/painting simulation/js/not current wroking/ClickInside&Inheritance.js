class Game {

  contructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }
  //return the point information//
  isPointInside(x,y){
      return (x >= this.x &&
          y >= this.y &&
          x < this.x + this.width &&
          y < this.y + this.height);
  }

  move(){
    //handled in son classes//
  }

  interact(){
    //handled in son classes//
  }
}
