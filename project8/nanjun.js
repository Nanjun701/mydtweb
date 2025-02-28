let font, particles = [];
let isAnimating = false;
let currentOrder = 0; // 当前已放大的粒子序号
let fontSize = 100;   // 字体大小

function preload() {
  font = loadFont('Wishcar Moundy.otf'); // 预加载字体
}

function setup() {
  createCanvas(600, 600);
  textSize(fontSize);
  // 计算文字 "nanjun" 的边界，以便居中显示
  let bounds = font.textBounds("nanjun", 0, 0, fontSize);
  let offsetX = (width - bounds.w) / 2 - bounds.x;
  let offsetY = (height - bounds.h) / 2 - bounds.y;
  
  // 获取 "nanjun" 的点阵，并居中显示
  let pts = font.textToPoints("nanjun", offsetX, offsetY, fontSize, { sampleFactor: 0.2 });
  for (let pt of pts) {
    particles.push(new Particle(pt.x, pt.y));
  }
  
  // 根据垂直位置（上面的先放大），再根据水平位置排序，模拟笔画顺序
  particles.sort((a, b) => {
    if (a.baseY === b.baseY) return a.baseX - b.baseX;
    return a.baseY - b.baseY;
  });
  
  // 为每个粒子分配顺序索引
  for (let i = 0; i < particles.length; i++) {
    particles[i].order = i;
  }
}

function draw() {
  background(20);
  for (let p of particles) {
    p.update();
    p.display();
  }
  // 动画进行时依次放大粒子，加快 currentOrder 的增长速度
  if (isAnimating && currentOrder < particles.length) {
    currentOrder += 4;
  }
}

function mousePressed() {
  // 点击后启动动画，放大的粒子保持放大状态
  if (!isAnimating) {
    isAnimating = true;
    currentOrder = 0;
    for (let p of particles) {
      p.scale = 1; // 重置每个粒子的尺寸
    }
  }
}

class Particle {
  constructor(x, y) {
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.scale = 1; // 初始尺寸倍率
    this.order = 0;
  }
  
  update() {
    // 如果动画进行且该粒子的顺序小于 currentOrder，则逐渐放大到目标倍率（2倍）
    if (isAnimating && this.order < currentOrder) {
      this.scale = lerp(this.scale, 2, 0.2);
    }
    return this;
  }
  
  display() {
    noStroke();
    push();
    translate(this.baseX, this.baseY);
    scale(this.scale);
    // 对于已放大的粒子，设置渐变色和发光效果；未放大的保持白色
    if (isAnimating && this.order < currentOrder) {
      let t = map(this.baseY, 200, 400, 0, 1);
      t = constrain(t, 0, 1);
      // 渐变色从淡粉色到淡橙粉色（注意颜色值需在 0-255 范围内）
      let gradColor = lerpColor(color(255, 270, 190), color(255, 210, 290), t);
      fill(gradColor);
      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = gradColor;
    } else {
      fill(255);
      drawingContext.shadowBlur = 0;
    }
    // 绘制为圆形点
    ellipse(0, 0, 5, 5);
    pop();
  }
}
