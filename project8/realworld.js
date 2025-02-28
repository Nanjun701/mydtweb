let font;
let textEffect;

function preload() {
  font = loadFont('Wishcar Moundy.otf');
}

function setup() {
  createCanvas(600, 600);
  let fontSize = 70; // 调整后的字体大小
  // 计算文字边界，用于居中显示
  let bounds = font.textBounds('Real World', 0, 0, fontSize);
  let x = (width - bounds.w) / 2 - bounds.x;
  let y = (height - bounds.h) / 2 - bounds.y;  // 修改后：居中计算
  textEffect = new TextEffect('Real World', font, x, y, fontSize);
}

function draw() {
  background(lerpColor(color(30), color(240), textEffect.fadeFactor));
  textEffect.update();
  textEffect.display();
}

class TextEffect {
  constructor(text, font, x, y, size) {
    this.text = text;
    this.font = font;
    this.x = x;
    this.y = y;
    this.size = size;
    this.points = font.textToPoints(text, x, y, size, {
      sampleFactor: 0.2,
      simplifyThreshold: 0,
    });
    this.noiseOffset = [];
    this.fadeFactor = 0;

    for (let i = 0; i < this.points.length; i++) {
      this.noiseOffset.push(random(1000));
    }
  }

  update() {
    let mouseDist = dist(mouseX, mouseY, width / 2, height / 2);
    this.fadeFactor = constrain(map(mouseDist, 0, width / 2, 1, 0), 0, 1);
  }

  display() {
    fill(lerpColor(color(255, 50, 50), color(150, 150, 200), this.fadeFactor));
    noStroke();

    for (let i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      let offsetX = noise(this.noiseOffset[i]) * 50 * this.fadeFactor;
      let offsetY = noise(this.noiseOffset[i] + 100) * 50 * this.fadeFactor;

      let displayX = lerp(p.x + offsetX, p.x, 1 - this.fadeFactor);
      let displayY = lerp(p.y + offsetY, p.y, 1 - this.fadeFactor);

      rect(displayX, displayY, 4, 4);
      this.noiseOffset[i] += 0.02;
    }
  }
}
