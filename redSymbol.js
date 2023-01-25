function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
        background(255);
        
        noStroke();
        fill(color(0,0,139));
        rect(25, 25, 150, 150);
        
        fill(color(255,255,255));
        ellipse(100, 100, 80, 80);
        
        fill('green');
        ellipse(100, 100, 75, 75);
        
        // top tip
        fill(color(255,255,255));
        triangle(85, 90, //left
                 100, 57, //top
                 115, 90); // right
        
        
        //tip left and right
        fill(color(255,255,255));
        triangle(58.5, 85, //left
                 100, 115, // bottom
                 140.5, 85); //right
        
        //top covering
        fill(color(255,0,0));
        triangle(83, 100, //left
                 100, 61, //top
                 117, 100); // righ
        
        //tip left bottom
        fill(color(255,255,255));
        triangle(87, 85, // left
                70, 131,  // bott
                 100, 115); //right
        
        //tip bottom right
        fill(color(255,255,255));
        triangle(112, 85, // righ
                 130, 131, // bott
                 100, 115); // left
        
        //tip left / right
        fill(color(255,0,0));
        triangle(63.5, 87, //left
                 100, 112, // bottom
                 135.5, 87); //right
        
         //cover tip left bottom
        fill(color(255,0,0));
        triangle(89, 85, // left
                73, 127,  // bott
                 100.75, 113); //right
        
        //cover tip bottom right
        fill(color(255,0,0));
        triangle(111, 88, // righ
                 127, 128, // bott
                 100, 113); // left 
      
    }