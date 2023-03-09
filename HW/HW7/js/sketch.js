let sounds = new Tone.Players({

  "Siren": "audio/Siren.mp3"

})

const synth = new Tone.PluckSynth({
  "oscillator": {
    "type": "fatsine4",
    "spread" : 24,
    "count" : 2
},
"envelope": {
    "attack": 0.001,
    "decay": 0.1,
    "sustain": 1.1,
    "attackCurve" : "sine",
    "releaseCurve" : "sine",
    "release": 0.6
}
});

const dist = new Tone.Distortion(1.8).toDestination();
synth.connect(dist);
const osc = new Tone.OmniOscillator("C#4", "pwm").start();

const ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.7,
  decay: 0.8,
  sustain: 0.5,
  release: 0.6
})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["Siren"];

clicking = false;

let imageURL = "images/ambulance.jpeg";
let images = [];

function preload() {
  for (var i = 0; i < 1; i++) {
    images[i] = loadImage(imageURL);
    console.log("1");
  }
}

function setup() {
  createCanvas(500, 300);
  sounds.connect(delay);
  delay.connect(dist)
  dist.toDestination();

  osc.connect(ampEnv);
  ampEnv.connect(dist);
}

function draw() {
  textAlign(CENTER);
  textFont('futura');
  text("Click to play sound.", 100, 100);
}

function mousePressed() {
  Tone.start();
  if(!clicking) { // true
    console.log("clicked");
    clear();
    for (var i=0;i<images.length;i++){
      image(images[i],200,0,images[i].width,images[i].height);
    }
  sounds.player("Siren").start();
  }
  clicking = true;
}