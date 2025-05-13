// DOM 
const cover      = document.getElementById("cover");
const startBtn   = document.getElementById("start");
const main       = document.getElementById("main");
const restartBtn = document.getElementById("restart");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");

const spiritBtns  = document.querySelectorAll("[data-spirit]");
const elementBtns = document.querySelectorAll("[data-element]");

const resultEl   = document.getElementById("result");
const handsImg   = document.getElementById("handsImg");
const handsTitle = document.getElementById("handsTitle");

let chosenSpirit  = null;
let chosenElement = null;

// 罪行映射
const offenseMapping = {
  deer: {
    metal: "Arrogance and Belligerence",
    wood: "Frivolity and Playfulness",
    water: "Apathy and Aloofness",
    fire: "Cruelty and Destruction",
    earth: "Laziness and Indolence"
  },
  dragon: {
    metal: "Tyranny and Greed",
    wood: "Mockery and Vanity",
    water: "Numbness and Indifference",
    fire: "Violence and Brutality",
    earth: "Sloth and Complacency"
  },
  crane: {
    metal: "Conceit and Arrogance",
    wood: "Ignorance and Rudeness",
    water: "Isolation and Coldness",
    fire: "Destruction and Cruelty",
    earth: "Laziness and Selfishness"
  }
};

// 切换步骤（支持 step1-step4）
function showStep(stepId) {
  [step1, step2, step3, step4].forEach(s => {
    s.classList.toggle("active", s.id === stepId);
  });
}

// Start 按钮：切换背景 & 显示 Step1
startBtn.addEventListener("click", () => {
  document.body.classList.replace("cover-bg", "main-bg");
  cover.style.display = "none";
  main.style.display  = "block";
  showStep("step1");
});

// Step1：守护灵选择 → Step2
spiritBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    chosenSpirit = btn.dataset.spirit;
    spiritBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    showStep("step2");
  });
});

// Step2：元素选择 → Step4 → 10s后淡出 → Step3
elementBtns.forEach(btn => {
  btn.addEventListener("click", async () => {
    chosenElement = btn.dataset.element;
    elementBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // 加载并随机选职衔
    const resp = await fetch("positions1.json");
    const positions = await resp.json();
    const list  = positions[chosenSpirit][chosenElement];
    const title = list[Math.floor(Math.random() * list.length)];

    // 生成结果文本
    const offense = offenseMapping[chosenSpirit][chosenElement];
    resultEl.textContent = `
You once held the office of ${title} under the Jade Court,
for the offense of ${offense},
banished to the mortal realm to undergo trial. Once you have endured the Seven Sufferings of life—birth, aging, illness, death, encounters with those you despise, partings from those you love, and unfulfilled desires—you may return to the Jade Court.


`.trim();

    showStep("step4");

    setTimeout(() => {
      handsImg.style.opacity   = "0";
      handsTitle.style.opacity = "0";
      setTimeout(() => showStep("step3"), 2000);
    }, 10000);
  });
});

restartBtn.addEventListener("click", () => {
  chosenSpirit = chosenElement = null;
  spiritBtns.forEach(b => b.classList.remove("active"));
  elementBtns.forEach(b => b.classList.remove("active"));
  resultEl.textContent    = "";
  handsImg.style.opacity   = "1";
  handsTitle.style.opacity = "1";

  document.body.classList.replace("main-bg", "cover-bg");
  main.style.display  = "none";
  cover.style.display = "flex";
});

document.body.classList.add("cover-bg");
showStep(null);
