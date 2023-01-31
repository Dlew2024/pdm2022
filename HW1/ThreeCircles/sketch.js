function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  //Red
  noStroke();
  c = color(255, 0, 0, 100);
  fill(c);
  circle(119, 100, 86);
  
  //Green
  c = color(0, 255, 0, 100);
  fill(c);
  circle(149, 150, 86);
  
  // Blue
  c = color(0, 0, 255, 100);
  fill(c);
  circle(89, 150, 86);

}
