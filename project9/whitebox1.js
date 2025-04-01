let video;
let pixelSize = 6;

function setup() {
  createCanvas(640, 480);
  noSmooth();
  video = createCapture(VIDEO);
  video.size(width / pixelSize, height / pixelSize);
  video.hide();
}

function draw() {
  background(0);
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();

  loadPixels();
  let threshold = 140;
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i+1];
    let b = pixels[i+2];
    let bright = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    
    if (bright < threshold) {
      pixels[i] = 222;
      pixels[i+1] = 41;
      pixels[i+2] = 16;
    } else {
      pixels[i] = 255;
      pixels[i+1] = 222;
      pixels[i+2] = 0;
    }
  }
  
  updatePixels();
 
}

