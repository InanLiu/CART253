//颜色按钮
function ColorButton(X, Y, W, H, givenR, givenG, givenB) {
    //位置
  this.x = X;
  this.y = Y;
  //大小
  this.w = W;
  this.h = H;
  //颜色
  this.r = givenR;
  this.g = givenG;
  this.b = givenB;
}
//添加判断鼠标是否在按钮范围内函数
ColorButton.prototype.isMouseInButton = function() {
  if (mouseX >= this.x && mouseX <= this.x + this.w &&
    mouseY >= this.y && mouseY <= this.y + this.h) {
    return true;
  } else {
    return false;
  }
}
//添加点击响应函数
ColorButton.prototype.clickButton = function() {
  R = this.r;
  G = this.g;
  B = this.b;
  if (brushType == "ERASER" || brushType == "TIMER") {
    brushType = pbrushType;
  }
}
//添加显示按钮函数
ColorButton.prototype.displayButton = function() {
  stroke(0);
  strokeWeight(1);
  fill(this.r * 1.5, this.g * 1.5, this.b * 1.5);
  rect(this.x, this.y, this.w, this.h, 5);
}
