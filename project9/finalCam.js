let video, poseNet, noseX = null;
let pixelSize = 4;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  poseNet = ml5.poseNet(video, () => {
    console.log("ready");
  });
  poseNet.on("pose", gotPoses);
}

function gotPoses(poses) {
  if (poses.length > 0 && poses[0].pose.nose) {
    noseX = width - poses[0].pose.nose.x;
  }
}

function draw() {
  video.loadPixels();
  noStroke();

  let xPos = noseX !== null ? noseX : width / 2;

  let realMeRange = width * 0.2;
  let blendRange = width * 0.1;
  let center = width / 2;

  let wC = constrain(map(xPos, center - realMeRange/2 - blendRange, center - realMeRange/2, 1, 0), 0, 1);
  let wU = constrain(map(xPos, center + realMeRange/2, center + realMeRange/2 + blendRange, 0, 1), 0, 1);
  let wR = 1 - max(wC, wU);

  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      let i = (x + y * width) * 4;
      let r = video.pixels[i];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];
      let bright = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      let cC = getFilterColor("China", bright);
      let cU = getFilterColor("US", bright);
      let cR = getFilterColor("realMe", bright);

      let finalR = cC[0] * wC + cU[0] * wU + cR[0] * wR;
      let finalG = cC[1] * wC + cU[1] * wU + cR[1] * wR;
      let finalB = cC[2] * wC + cU[2] * wU + cR[2] * wR;

      fill(finalR, finalG, finalB);
      rect(x, y, pixelSize, pixelSize);
    }
  }

}

function filterChina(bright) {
  return bright < 140 ? [222, 41, 16] : [255, 222, 0];
}

function filterUS(bright) {
  if (bright < 85) return [0, 40, 104];
  else if (bright < 170) return [191, 10, 48];
  else return [255, 255, 255];
}

function filterRealMe(bright) {
  if (bright < 51) return [0, 50, 200];
  else if (bright < 102) return [111, 78, 55];
  else if (bright < 153) return [255, 222, 193];
  else return [255, 255, 224];
}

function getFilterColor(label, bright) {
  if (label === "China") return filterChina(bright);
  if (label === "US") return filterUS(bright);
  if (label === "realMe") return filterRealMe(bright);
  return [bright, bright, bright];
}
