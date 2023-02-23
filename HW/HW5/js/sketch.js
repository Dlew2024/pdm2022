
let sounds = new Tone.Players({

  "Liability": "sounds/DrakeLiability.mp3",
  "Major Distribution": "sounds/DrakeMajorDistribution.mp3",
  "Marvins Room": "sounds/DrakeMarvinsRoom.mp3",
  "Time Flies": "sounds/DrakeTimeFlies.mp3",
  "Yebbas Heartbreak": "sounds/DrakeYebbasHeartbreak.mp3"

})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["Liability", "Major Distribution", "Marvins Room", "Time Flies", "Yebbas Heartbreak"];
let buttons = [];

let dSlider;
let fSlider;
let wSlider;
let mSlider;
let rSlider;

// let button1, button2, button3;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(9, (index*50)+10);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value();
  })
  dSlider.position(35, 300);

  fSlider = createSlider(0., 1., 0.5, 0.05);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })
  fSlider.position(200, 300);

  wSlider = createSlider(0., 1., 0.5, 0.05);
  wSlider.mouseReleased( () => {
    delay.wet.value = wSlider.value();
  })
  wSlider.position(35, 340);

  fSlider = createSlider(0., 1., 0.5, 0.05);
  fSlider.mouseReleased( () => {
    delay.frequency.value = fSlider.value();
  })
  fSlider.position(200, 340);

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.mouseReleased( () => {
    delay.depth.value = dSlider.value();
  })
  dSlider.position(120, 380);
}

function draw() {
  background(220, 120, 180);
  text('press the buttons for song', 1, 40);
  text('press the buttons for song', 1, 92.5);
  text('press the buttons for song', 1, 140);
  text('press the buttons for song', 1, 191);
  text('press the buttons for song', 1, 242);

  text('Delay slider', 60, 290);
  text('Feedback slider', 220, 290);
  text('Wet Mix slider', 60, 330);
  text('Frequency slider', 219, 330);
  text('Depth slider', 145, 370);
}

function buttonSound(whichSound) {
    sounds.player(whichSound).start();
}