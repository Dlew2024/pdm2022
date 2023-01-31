const x = 2;  // Space of canvas.
const y = 20; // Space for top bar.
const size = 20; // Size of the squares.

var lines = []; // Empty array for the lines.
let px, py; // Values to later track x - y value movement.
let rgbValue1, rgbValue2, rgbValue3; // 3 RGB Values.
let extraCanvas; // Extra canvas for color palette.
let colorPalette; // Array of color palette.
let paintColor; // Color for the painted lines.

function setup() {
  createCanvas(600, 400); // First canvas to paint on.
  background(220); // Makes background color grey.
  extraCanvas = createGraphics(600, 400); // Second canvas for palette.
  extraCanvas.clear(); // Makes canvas transparent.
  
  /*/ Creates the color palette array that way we can easily create
      objects to be stored inside of an array. ColorValue is used
      when you have the string name for the color. Ex. 'red'. 
      Color RGB is used when you want to use the three RGB values
      to create color. Ex. (124, 252, 0) = Light Green
  */
  colorPalette = [
    new ColorValue(x, y, size, 'red'), // Red
    new ColorValue(x, (y * 2) + 2, size, 'orange'), // Orange
    new ColorValue(x, (y * 3) + 4, size, 'yellow'), // Yellow
    new ColorRGB(x, (y * 4) + 6, size, 124, 252, 0), // Green
    new ColorValue(x, (y * 5) + 8, size, 'cyan'), // Cyan
    new ColorValue(x, (y * 6) + 10, size, 'blue'), // Dark Blue
    new ColorValue(x, (y * 7) + 12, size, 'magenta'), // Light Purple
    new ColorRGB(x, (y * 8) + 14, size, 150, 75, 0), // Brown
    new ColorValue(x, (y * 9) + 16, size, 'white'), // White
    new ColorValue(x, (y * 10) + 18, size, 'black'), // Black
  ]
}

function draw() {
  strokeWeight(10); // Makes lines stroke weight different sizes.
  /* If the mouse is pressed it creates a new line and adds it 
     to the array of lines we intiatied above.
  */
  if (mouseIsPressed) { 
    let line = new Line(paintColor); // Receives paint color from the click.
    lines.push(line);
  }
  // Displays the lines on the array of lines. 
  for (var line of lines) {
    line.show();
  }
  image(extraCanvas, 0, 0); // Transparent canvas on top.
  
  // Draws pallette above the background canvas.
  for(let i = 0; i < colorPalette.length; i++){
    colorPalette[i].draw();
  }
}
// Finds the current palette that was clicked on.
function mousePressed() {
  for(let i = 0; i < colorPalette.length; i++){
    colorPalette[i].mousePressed();
  }
}
// Creates the line we will be painting.
class Line {
  // Grabs the position of the mouse and color at the postion.
  constructor(paintColor) {
    this.px = pwinMouseX;
    this.py = pwinMouseY;
    this.x = winMouseX;
    this.y = winMouseY;

    this.paintColor = paintColor;
  }
  // Paints the line using the specific color.
  show() {
    stroke(this.paintColor);
    line(this.px, this.py, this.x, this.y);
  }
}
// Creates colors
class Color {
  // All colors in the palette have a location and size. 
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;

    this.colorIsWord = null; // Differentiates colorValue and colorRGB colors.
  }
  // Draws the colors on the platte depending if they have a number or word color value.
  draw() {
    if (this.colorIsWord === true) {
    // Makes the color inside the square.
    fill(color(this.color));
    noStroke();
    square(this.x, this.y, this.size); 
    }
    else {
    // Makes the color inside the square.
    fill(color(this.rgbValue1, this.rgbValue2, this.rgbValue3));
    noStroke();
    square(this.x, this.y, this.size); 
    }
  }
  // Function to determine if the mouse is inside a color palette.
  contains(x, y) {
    let insideX = mouseX >= this.x && mouseX <= this.x + this.size;
    let insideY = mouseY >= this.y && mouseX <= this.y + this.size;

    let inside = insideX && insideY;
    return inside;
  }
  // Function checks to see if the mouse is inside a color palette then
  // updates the global paint color variable to line constuctor.
  mousePressed() {
    let inside = this.contains(mouseX, mouseY);
    if(inside) {
      if(this.colorIsWord) { // If its colorVal.
        return paintColor = this.color;
      }
      else { // Or if its colorRGB
        return paintColor = color(this.rgbValue1, this.rgbValue2, this.rgbValue3);
      }
    }
  }
}
// Class constructor for when the color is a colorValue color
class ColorValue extends Color {
  constructor(x, y, size, color) {
    super(x, y, size);
    this.color = color;
    this.colorIsWord = true; // colorValue is set to true because the value is a word.
  }
}
class ColorRGB extends Color {
  constructor(x, y, size, rgbValue1, rgbValue2, rgbValue3) {
    super(x, y, size);
    this.rgbValue1 = rgbValue1;
    this.rgbValue2 = rgbValue2;
    this.rgbValue3 = rgbValue3;
    this.colorIsWord = false; // colorValue is set to true because the value is a RGB.
  }
}
