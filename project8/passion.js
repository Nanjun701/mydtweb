let font, particles = [], isBurning = false;
let textTop, textBottom;
let fontSize = 110;  // 根据画布大小适当调整字体大小

function preload() {
  font = loadFont('Wishcar Moundy.otf'); // 预加载字体
}

function setup() {
  createCanvas(600, 600);
  textSize(fontSize);

  // 获取文字的边界信息
  let bounds = font.textBounds('Passion', 0, 0, fontSize);
  // 计算居中显示的 x,y 坐标（注意 bounds.x 可能不为0）
  let x = (width - bounds.w) / 2 - bounds.x;
  let y = (height + bounds.h) / 2 - bounds.y;
  
  // 用于后续映射抖动与颜色效果的上下边界
  textTop = y + bounds.y;
  textBottom = textTop + bounds.h;
  
  // 将文字轮廓转化为点集
  let textPoints = font.textToPoints('Passion', x, y, fontSize, { sampleFactor: 0.2 });
  for (let p of textPoints) {
    particles.push(new Particle(p.x, p.y));
  }
}

function draw() {
  background(20);
  for (let particle of particles) {
    particle.update().display();
  }
}

function mousePressed() {
  isBurning = !isBurning;
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.offset = random(1000);
  }

  update() {
    if (isBurning) {
      // 根据文字的垂直边界调整抖动效果：文字上部（靠近 textTop）抖动更强
      let heightFactor = map(this.baseY, textBottom, textTop, 0.5, 2);
      this.x = this.baseX + sin(frameCount * 0.1 + this.offset) * 5 * heightFactor;
      this.y = this.baseY + cos(frameCount * 0.15 + this.offset) * 3 * heightFactor;
    } else {
      this.x = this.baseX;
      this.y = this.baseY;
    }
    return this;
  }

  display() {
    // 根据粒子在文字中的位置，计算颜色的渐变
    let t = map(this.y, textBottom, textTop, 0, 1);
    t = constrain(t, 0, 1);
    let flameColor = isBurning 
      ? lerpColor(color(255, 100, 50), color(255, 200, 50), t) 
      : color(255);

    fill(flameColor);
    noStroke();
    let w = isBurning ? random(3, 5) : 3;
    let h = isBurning ? random(10, 15) : 10;
    rect(this.x, this.y, w, h); // 竖着的长方形
  }
}
