class Locust{

  //constructor() sets up properties
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 40;
    this.minSize = 10; //death limitation
    this.maxSize = 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;
    this.growRate = 0.05;
    this.shrinkRate = 0; //getting smaller
    this.jitteriness = 0.1; //direction
    this.alive = true; // bee start out alive
    this.distanceBetween = 120;
    this.farmerIsNear = false; // check is the farmer is near to dispel or not
  }

  tryToMothEaten(flower){
    let d = dist(this.x,this.y,flower.x,flower.y)
    if (d < this.size/2 + flower.size/2 + flower.petalThickness){
      this.grow();
      flower.mothEaten();
      // eat.play()  (get question of how to make it only trigger one)
    }
  }
  grow(){ // locust will get bigger when it eat some flower
    this.size = this.size + this.growRate;
    this.size = constrain(this.size, this.minSize, this.maxSize)
  }
  move(){ // lotcust will move randomly before farmer get cloer
  if (!this.farmerIsNear){
    let r = random(0, 2);
    if (r < this.jitteriness){
      this.vx= random(-this.speed, this.speed); //speed constrain
      this.vy= random(-this.speed, this.speed);
    }
    this.x += this.vx; //apply velociety
    this.y += this.vy;
}
    this.x = constrain(this.x,0 ,width);  //apply constrain
    this.y = constrain(this.y,0 ,height);
  }

  checkDispelLocust(){  //check the farmer is near locust or not
    let d = dist(this.x, this.y, mouseX, mouseY)
    if ( d < this.distanceBetween){
    this.farmerIsNear = true;
     this.dispelLocust()

   }  else  {
      this.farmerIsNear = false;
    }

}

 dispelLocust(){  // locust will try to avoid farmer
   let dx = this.x - mouseX
   let dy = this.y - mouseY

   if (dx < 0){
     this.vx = -this.speed
   }else if (dx > 0){
     this.vx = this.speed
   }
   if (dy < 0){
     this.vy = -this.speed
   }else if (dy > 0){
     this.vy = this.speed
   }

   this.x += this.vx;
   this.y += this.vy;

 }
   display(){  //display of the locust
     push();

     fill(222,222,225);
     noStroke();
     ellipse(this.x - this.size / 2, this.y , this.size/2);
     ellipse(this.x + this.size / 2, this.y , this.size/2);
     pop();

     push();
     fill(21, 21, 50);
     noStroke();
     ellipse(this.x, this.y, this.size);
     pop();

     push();
     fill(120,120,120);
     noStroke();
     ellipse(this.x - this.size / 10, this.y , this.size/10);
     ellipse(this.x + this.size / 10, this.y , this.size/10);
     pop();
   }
}
