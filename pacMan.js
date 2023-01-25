function setup() {
    createCanvas(400, 400);
  }

function draw() {
    background(255);
     
    // Black Background
    c = color(0, 0, 0);
    fill(c);
    rect(33, 51, 200, 100);
    
    //PacMan
    noStroke();
    c = color(255, 255, 0, 240);
    fill(c);
    ellipse(80, 100, 80, 80);
    
    // Mouth
    noStroke();
    c = color(0, 0, 0);
    fill(c);
    triangle(33, 145, 33, 56, 82, 100);
    //.       first   second  third
    
    // Round Head
    noStroke();
    c = color(255, 0, 0, 245);
    fill(c);
    ellipse(185, 100, 80.3, 80);
    
    //Red Body
    noStroke();
    c = color(255, 0, 0, 255);
    fill(c);
    rect(145, 95, 80, 48);
    
    // White Left eye
    noStroke();
    c = color('white')
    fill(c);
    ellipse(165, 100, 25, 25);
    
    //Blue Left eye
    noStroke();
    c = color('blue')
    fill(c);
    ellipse(165, 100, 15, 15);
    
    // White right eye
    noStroke();
    c = color('white')
    fill(c);
    ellipse(205, 100, 25, 25);
    
    //Blue right eye
    noStroke();
    c = color('blue')
    fill(c);
    ellipse(205, 100, 15, 15);
    
  }