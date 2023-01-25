function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
    
    
    
    noStroke();
    let c = color(50, 255, 50);
    // 0 255 0
    fill(c);
    rect(30, 50, 200, 100);
    
    stroke(1);
    c = color(255, 255, 255);
    fill(c);
    circle(79, 100, 86);
    
    c = color(255, 255, 255);
    fill(c);
    square(135, 57, 86);
    
  }
