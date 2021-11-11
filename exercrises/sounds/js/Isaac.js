
class User {

  // Constructor sets basic user object

  constructor(x,y) {
    // Position
    this.x = x;
    this.y = y;
    // Dimensions
    this.size = 40;
    // Movement
    this.vx = 0;
    this.vy = 0;
    this.sounds = false
  }

  /**
  Checks whether the pedestrian's centre-point overlaps
  the provided vehicle
  */
  // checkHit(vehicle) {
  //   if (this.x > vehicle.x - vehicle.width/2 &&
  //       this.x < vehicle.x + vehicle.width/2 &&
  //       this.y > vehicle.y - vehicle.height/2 &&
  //       this.y < vehicle.y + vehicle.height/2) {
  //     // If there's an overlap the pedestrian is DEAD
  //     this.alive = false;
  //   }
  // }

  /**
  Checks arrow keys and sets velocity appropriately
  */
  checkAudioIn(){
    let level = mic.getLevel() // question why I have to call it in here to make it work

    if (mic.getLevel() > 0.01){
      this.sounds = true;
    }else{
      this.sounds = false;
    }
  }
  handleIsaac(){

    if (this.sounds === true){
      let level = mic.getLevel() // question why I have to call it in here to make it work
      this.vy = -level * 5
    }else{
      this.vy =1
      }


  }
  move(){
    // this.x += this.vx
    // this.y += this.vy
  }
  displayIsaac(){
    push();
    ellipse(this.x,this.y,this.size)
    fill(255)
    pop();
  }
}
