let score = 0;
let cps = 0;
let cpsInterval;

const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const cpsDisplay = document.getElementById('cps');
const buyCpsButton10 = document.getElementById('buyCpsButton10');
const buyCpsButton100 = document.getElementById('buyCpsButton100');
const buyCpsButton1000 = document.getElementById('buyCpsButton1000');
const buyCpsButton10000 = document.getElementById('buyCpsButton10000');
const buyCpsButton100000 = document.getElementById('buyCpsButton100000');

clickButton.addEventListener('click', () => {
  score++;
  updateScore();
});

function updateScore() {
  scoreDisplay.textContent = numberWithCommas(score);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function buyCpsUpgrade(cost, cpsIncrease) {
  if (score >= cost) {
    score -= cost;
    cps += cpsIncrease;
    updateScore();
    cpsDisplay.textContent = numberWithCommas(cps);
    if (!cpsInterval) {
      cpsInterval = setInterval(() => {
        score += cps;
        updateScore();
      }, 1000);
    }
  } else {
    alert('Not enough score to buy CPS upgrade!');
  }
}

buyCpsButton10.addEventListener('click', () => {
  buyCpsUpgrade(10, 10);
});

buyCpsButton100.addEventListener('click', () => {
  buyCpsUpgrade(100, 100);
});

buyCpsButton1000.addEventListener('click', () => {
  buyCpsUpgrade(1000, 1000);
});

buyCpsButton10000.addEventListener('click', () => {
  buyCpsUpgrade(10000, 10000);
});

buyCpsButton100000.addEventListener('click', () => {
  buyCpsUpgrade(100000, 100000);
});
