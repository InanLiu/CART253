//color buttons
function ColorButton(X, Y, W, H, givenR, givenG, givenB) {
    //pos
  this.x = X;
  this.y = Y;
  //size
  this.w = W;
  this.h = H;
  //col
  this.r = givenR;
  this.g = givenG;
  this.b = givenB;
}

// add function to check if mouse is in the button or not
ColorButton.prototype.isMouseInButton = function() {
  if (mouseX >= this.x && mouseX <= this.x + this.w &&
    mouseY >= this.y && mouseY <= this.y + this.h) {
    return true;
  } else {
    return false;
  }
}

//add function to reacte with the cilcking
ColorButton.prototype.clickButton = function() {
  R = this.r;
  G = this.g;
  B = this.b;
  if (brushType == "ERASER" || brushType == "TIMER") {
    brushType = pbrushType;
  }
}
//function to display the color buttons
ColorButton.prototype.displayButton = function() {
  stroke(0);
  strokeWeight(1);
  fill(this.r * 1.5, this.g * 1.5, this.b * 1.5);
  rect(this.x, this.y, this.w, this.h, 5);
}
