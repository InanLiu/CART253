
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

    // Starts out alive, but can die!
    this.sounds:false
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
  handleIsaac() {
    if (keyIsDown(LEFT_ARROW)) {
    if (isaac.sounds === true){
      let level = mic.getLevel() // question why I have to call it in here to make it work
      isaac.vy = -level * 5
    }else{
      isaac.vy = 1
      }
  }

  /**
  Add velocity to position
  */
  move() {
    // isaac.x += isaac.vx
    // isaac.y += isaac.vy
  }

  /**
  Displays the pedestrian as a circle
  */
  display() {
    push();
    ellipse(this.x,this.y,this.size)
    fill(255)
    pop();
  }
}
