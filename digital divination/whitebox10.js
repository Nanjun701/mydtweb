const step1        = document.getElementById("step1");
const step2        = document.getElementById("step2");
const step3        = document.getElementById("step3");
const restartBtn   = document.getElementById("restart");

const spiritBtns   = document.querySelectorAll("[data-spirit]");
const elementBtns  = document.querySelectorAll("[data-element]");
const resultEl     = document.getElementById("result");

let chosenSpirit  = null;
let chosenElement = null;

function showStep(stepId) {
  [step1, step2, step3].forEach(s => s.id === stepId
    ? s.classList.add("active")
    : s.classList.remove("active")
  );
}
spiritBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    chosenSpirit = btn.dataset.spirit;
    spiritBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    showStep("step2");
  });
});

const offenseMapping = {
  deer: {
    metal:  "Arrogance and Belligerence",
    wood:   "Frivolity and Playfulness",
    water:  "Aloofness and Detachment",
    fire:   "Cruelty and Destruction",
    earth:  "Negligence and Laziness"
  },
  dragon: {
    metal:  "Cruelty and Greed",
    wood:   "Mockery and Vanity",
    water:  "Numbness and Indifference",
    fire:   "Violence and Brutality",
    earth:  "Laziness and Complacency"
  },
  crane: {
    metal:  "Conceit and Arrogance",
    wood:   "Ignorance and Rudeness",
    water:  "Isolation and Coldness",
    fire:   "Destruction and Cruelty",
    earth:  "Laziness and Selfishness"
  }
};

elementBtns.forEach(btn => {
  btn.addEventListener("click", async () => {
    chosenElement = btn.dataset.element;
    elementBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const resp = await fetch("/digital divination/positions.json");
    const positions = await resp.json();

    const list  = positions[chosenSpirit][chosenElement];
    const title = list[Math.floor(Math.random() * list.length)];

    const offense = offenseMapping[chosenSpirit][chosenElement];
    const meaning = elementMeaning[chosenElement];

    const text = `
You once held the office of ${title} under the Jade Court,
for the offense of ${offense},
you were banished to the mortal realm to undergo your trial.
`.trim();

    resultEl.textContent = text;
    showStep("step3");
  });
});

restartBtn.addEventListener("click", () => {
  chosenSpirit = null;
  chosenElement = null;

  spiritBtns.forEach(b => b.classList.remove("active"));
  elementBtns.forEach(b => b.classList.remove("active"));
  resultEl.textContent = "";

  showStep("step1");
});

showStep("step1");
