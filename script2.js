let squares = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
   for( let y = 0; y < 300; y += 5 ) {
 		for( let x = 0; x < 500; x += 5 ) {
       squares.push( new Square(y + (y % 2) * (x%3), x + (x % 2) * (y%3)) );

    }
   }
}

function draw() {
  for( let s of squares ) {
    s.act();
  }
}