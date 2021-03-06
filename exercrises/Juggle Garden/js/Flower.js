

   class Flower{

   constructor(x, y, size, stemLength, petalColor){
      //p and size of flower
     this.x =  x;
     this.y =  y;
     this.size =  size;
     this.maxSize = 80;
     this.stemLength = stemLength; //all pop which made flower
     this.stemThickness = 10;
     this.petalThickness = 10;
     this.maxPetalThickness = 10;
     this.maxStemLength = 120;
     //colour
     this.stemColor = {
       r : 50,
       g : 150,
       b : 50
     }
     this.petalColor = petalColor
     this.centreColor = {
       r : 50,
       g : 0,
       b : 0
     };
     this.alive = true; //decide where flower is smaller than 40 or not
     this.mature = false; //decide where flower is bugger than 80 or not
   }

    grow() {//flower will automatically growing up
      let growth = random(0, 0.05);
      this.size += growth;
      this.petalThickness = this.petalThickness + growth/20;
      this.stemLength += growth * 1.3;

      if(this.size <= 40 || this.petalThickness <= 2){//decide where flower is smaller than 40 or not
        this.alive = false;
        death.play();
        scoreD ++;
      }
      if(this.size >= this.maxSize){ //decide where flower is bugger than 80 or not
        this.mature = true;
        scoreM ++;
        grow.play();
      }
      //apply constrain
      this.size = constrain(this.size,0,this.maxSize);
      this.petalThickness = constrain(this.petalThickness,0,this.maxPetalThickness)
      this.stemLength = constrain(this.stemLength,0,this.maxStemLength)

    }
    // beMature(){  // wanna a pitcture replace mature flower (not sure how to do it)
        //   if (this.mature){
        //     image(grow,this.x, this.y, this.size)
        //   }
        // }
    mothEaten(){ //fower get smaller when touched by locust
      let eaten = random(0,0.5)
      this.size = this.size - eaten
      this.petalThickness =   this.petalThickness - eaten/20 ;



    }
    display(){ //display flower
      push();
      //draw stem
      strokeWeight(this.stemThickness);
      stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
      line(this.x, this.y, this.x, this.y + this.stemLength);
      //drawing flowers
      strokeWeight(this.petalThickness);
      fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
      stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
      ellipse(this.x, this.y, this.size);
      pop();
    }

    mousePressed(){
      let d = dist(this.x,this.y,mouseX,mouseY);
      if (d < this.size/2 + this.petalThickness){
        this.stemLength = this.stemLength + 5;
        this.y = this.y - 5;
      }
    }

  }
