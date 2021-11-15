class Toolbox{
  constructor(x,y){
    //position
    this.x = x;
    this.y = y;
    //Dimensions
    this.height = 40;
    this.width = 40;
    this.space = 10;
    this.brightness = 0;
    //to check is this tool is clicked by user or not
    this.active = false;
  }
  InsideOfBoxes(){  //need improve of use golbal virables in class
    let d = dist(mouseX, mouseY, this.x,this.y)
    if (d < this.height){
      this.brightness = 255;   //why It is not work
    }
  }
  display(){
    push();
    rectMode(CENTER);
    strokeWeight(2);
    stroke(51)
    fill(this.brightness,125)
    rect(this.x,this.y,this.width,this.height);
    pop();

  }




}
