let slider;

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

const reverb = new Tone.JCReverb(0.4);
const dist = new Tone.Distortion(1.8).toDestination();
synth.connect(dist);

const osc = new Tone.OmniOscillator("C#4", "pwm").start();

const ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.7,
  decay: 0.8,
  sustain: 0.5,
  release: 0.6
})

let notes = {
  'q': 'C4',
  'w': 'D4',
  'e': 'E4',
  'r': 'F4',
  't': 'G4',
  'y': 'A4',
  'u': 'B4',
  'i': 'C5'
}

function setup() {
  createCanvas(400, 400);

  slider = new Nexus.Slider("#slider");
  dist.toDestination();

  synth.release = 2;
  synth.resonance = 0.50;
  // synth.harmonicity.value = 1.25;
  //play a middle 'C' for the duration of an 8th note
  // synth.triggerAttackRelease("C4", "8n");

  slider.on('change', (v) =>  {
    dist.wet.value = v;
  }); 

  osc.connect(ampEnv);
  ampEnv.connect(dist);
}

function draw() {
  background(220);
  textAlign(CENTER);
  textFont('futura');
  text("First click the spacebar then ", 175, 200);
  text("click to Q, W, E, R, T, Y, U, or I to play sound.", 175, 225);
}

function keyPressed() {
  Tone.start();
  let toPlay = notes[key];
  console.log(toPlay);

  osc.frequency.value = toPlay;
  ampEnv.triggerAttackRelease('8n');

  // synth.triggerAttackRelease(toPlay, 0.5);
  // metal.triggerAttackRelease("C3", "8n", '+0.5');
  // drum.triggerAttackRelease("C2", "8n", '+1');
}
