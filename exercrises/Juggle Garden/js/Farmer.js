
/**************************************************
abandoned class

try to get famer in in the oop, However some unknown bug happened.

question: I do not think single object need ues for loop to the main Description
what I did
farmer = new.farmer

farmer.moveFarmer()
bug happened  can not identify "farmer"
**************************************************/
  class Farmer{

    constructor(){

       //uesr object
        this.x =  0;  //p of this object
        this.y =  0;
        this.size =  60;
        this.growth = 5; // uesr object is getting bigger
        this.vx = 0;
        this.vy = 0;
        this.speed = 2; //moving speed
    }

     moveFarmer(){
      // user.x = mouseX;
      // user.y = mouseY;

      let dx = this.x - mouseX; //define the position of this object
      let dy = this.y - mouseY;

      // this object move toward to the mouse position
      if (dx < 0){
        this.vx = this.speed;
      }
      else if (dx > 0){
        this.vx = -this.speed;
      }

      if (dy < 0){
        this.vy = this.speed;
      }
      else if (dy > 0){
        this.vy = -this.speed;
      }
      //apply speed
      this.x += this.vx;
      this.y += this.vy;
    }


 displayFarmer(){
  push();
  fill(210,0,0);
  ellipse(this.x,this.y,this.size);
  noStroke();
  pop();
}

}
