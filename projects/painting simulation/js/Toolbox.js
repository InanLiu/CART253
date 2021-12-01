class Toolbox{
  constructor(x,y){
    //position
    this.x = x;
    this.y = y;
    //Dimensions
    this.height = 40;
    this.width = 90;
    this.space = 10;
    this.brightness = 0;
    //to check is this tool is clicked by user or not
    this.inside = false;
    this.active = false;
  }
  CheckInside(px,py){  //need improve of use golbal virables in class

    if ((px > this.x) && (px < (this.x +this.width) ) && (py > this.y) && (py < (this.y + this.height)) ){
      this.inside = true;   //why It is not work
    }else {
      this.inside = false;
    }
  }
  ClickInside(){
    
  }
  over(){
    if (this.inside === true){
      this.brightness = 200
    }else{
      this.brightness = 0
    }

  }

  checkClickAndState(){  //fill in subclass

  }
  display(){
    push();

    strokeWeight(2);
    stroke(51)
    fill(this.brightness,125)
    rect(this.x,this.y,this.width,this.height);
    pop();

  }





}
