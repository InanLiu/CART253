function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	// background(0,1)
	// var count = int(random(5,15))
	// var r = random(50,200)
	// for( var i=0;i<count;i++){
	// 	fill(random(255,200),random(188,255),random(100,200))
	// 	noStroke()
	// 	// noFill()
	// 	// stroke(random(255,200),random(255),random(100,200))
	// 	ellipse(mouseX +i*5,mouseY-i*5,r)
	// 	r*=0.9
	// }
}
var mode = 1
function mousePressed(){
	mode++
	// print(mode)
	if (mode>3){
		mode=1
	}

}
function mouseMoved(){
	var count = int(random(50,250))
	var r = random(2,20)
	noStroke()
	var delta = sqrt(dist(pmouseX,pmouseY,mouseX,mouseY))*5
	//  變數 = sqrt 開根號 dist 之前滑鼠位置 和現在滑鼠位置 的距離 *5
	if (mode==1){
		for( var i=0;i<count;i++){
			fill(random(frameCount%255+mouseY),random(200,255),random(255,155))
			ellipse(mouseX +random(-delta,delta),mouseY-random(-delta,delta),r)
			r*=0.9
		}
	}else if ( mode==2){

			fill(random(255,200),random(255),random(100,200))
			ellipse(mouseX +random(-30,30),mouseY-random(-30,30),r)

	}else{
		noFill()
		stroke(random(255,200),random(188,255),random(100,200))
		ellipse(mouseX +random(-30,30),mouseY-random(-30,30),r)

	}
}
