let spriteSheet;

let walkingAnimation;

function preload() {
  spriteSheet = loadImage("assets/Sprite.png");
  chronoSheet = loadImage("assets/Sprite.png");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);

  chronoSheet.loadPixels();
  let pixels = chronoSheet.pixels
  for (let i = 0; i < pixels.length; i += 4) {
    if (pixels[i] === pixels[0] && pixels[i+1] === pixels[1] && pixels[i+2] === pixels[i+3] === 0){

    }
  }

  chronoSheet.updatePixels();

  walkingAnimation = new WalkingAnimation(spriteSheet, 80, 80, 200, 200, 9);
  walkingAnimation2 = new WalkingAnimation(spriteSheet, 80, 80, 200, 200, 9);

}


function draw() {
  background(220);

  walkingAnimation.draw();
  walkingAnimation2.draw();

  if (moving != 0){
    u = currentFrame % animationLength;
  }
  else {
    u = 0;
  }
  
  translate(this.dx, this.dy);
  scale(this.xDirection, 1);

  image(spriteSheet, 0, 0, 80, 80, u * sw, v * sh, sw, sh);
  
  if (frameCount % 6 == 0){
    this.currentFrame++;
  }

   this.dx += this.moving;
}

function KeyPressed() {
  walkingAnimation.KeyPressed(RIGHT_ARROW, LEFT_ARROW);
}

function KeyReleased() {
  walkingAnimation.KeyReleased();
}

class WalkingAnimation {
  constructor (spriteSheet, sw, sh, dx, dy, animationLength) {
    this.spriteSheet = spriteSheet;
    this.sw = sw;
    this.sh = sh;
    this.dx = dx;
    this.dy = dy;
    this.u = 0; 
    this.v = 0;
    this.animationLength = animationLength;
    this.currentFrame = 0;
    this.x = 200;
    this.moving = 0;
    this.xDirection = 1;
  }

  draw() {
  
    if (this.moving != 0){
      this.u = this.currentFrame * this.animationLength;
    }
    push();
    translate(this.dx, this.dy);
    scale(this.xDirection, 1);

  image(this.spriteSheet, this.dx, 0, 80, 80, u * sw, v * sh, sw, sh);
  
  if (frameCount % 60 == 0){
    currentFrame++;
  }

   x += moving;

  }
}

  function KeyPressed(right, left) {
    if (keyCode === right) {
      moving = 1;
      xDirection = 1;
      currentFrame = 0;
    }
    else if (keyCode === left) {
      moving = -1;
      xDirection = -1;
      currentFrame = 0;
    }
  }
  
  function KeyReleased() {
    if (keyCode === RIGHT_ARROW || keyCode === RIGHT_ARROW) {
      moving = 0;
    }
  }

