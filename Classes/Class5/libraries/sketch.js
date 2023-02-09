let mikeImg;
let x = 200;
let y = 200;
let r = 0;

function preload() {
  mikeImg = loadImage("assets/Drakeee.webp");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(x, y);
  rotate(r);
  r += 5;
  scale(-0.25, 0.25);

  image(mikeImg, 0, 0);
}
