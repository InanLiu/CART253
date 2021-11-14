
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
    this.sounds = false;
    this.alive = true;
  }

  /**
  Checks whether the Isaac's centre-point overlaps
  the provided block
  */
  checkHit(block) {

    if (this.x > block.x - block.width/2 &&
        this.x < block.x + block.width/2 &&
        this.y > block.y - block.height/2 &&
        this.y < block.y + block.height/2) {
      // If there's an overlap the Isaac is DEAD
      this.alive = false;
    }
  }

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
