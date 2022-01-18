class Square {

constructor(x,y) {
  
  this.position = [x,y];
  this.color = {
    r: (0),
   g: (0),
   b: (0)
  }
}

act() {
  // this.update();
  square(this.position[0], this.position[1], 3);
  // draw();
}

update() {
  this.colorRed();
  this.colorBlue();
}

colorRed() {
  this.color = {
    r: random(186,243),
    g: random(31,87),
    b: random(0,35)
  }
  }

colorBlue() {
  
  this.color = {
    r: random(0,35),
    g: random(130,190),
    b: random(236,255)
  }
  
}




}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    fill("blue");
    draw();
  }
  else if(keyCode == RIGHT_ARROW){
    fill("red");
    draw();
  }
}
