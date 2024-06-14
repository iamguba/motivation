const T_MINUTES = 60;
const T_HOURS = 60 * T_MINUTES;
const T_DAYS = 24 * T_HOURS;
const T_MONTHS = 30 * T_DAYS;

const startTs = new Date("Mon Apr 15 2024 10:05:32 GMT+0300").getTime(); // Hardcoded start timestamp
const goal = 4 * T_MONTHS;

function updateTimer() {
  const now = new Date().getTime();
  const diff = now - startTs;

  const totalSeconds = Math.floor(diff / 1000);
  const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
  const days = Math.floor(
    (totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60)
  );
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  let displayText = "";
  if (months > 0) displayText += `${months} months `;
  if (days > 0) displayText += `${days} days `;
  if (hours > 0) displayText += `${hours} hours `;
  if (minutes > 0) displayText += `${minutes} minutes `;
  if (seconds > 0) displayText += `${seconds} seconds`;

  document.getElementById("timer").textContent = displayText;
  updateProgressBar(totalSeconds, goal);
}

function updateProgressBar(currentSeconds, goalSeconds) {
  const progressPercentage = Math.min(
    (currentSeconds / goalSeconds) * 100,
    100
  );
  const progressBar = document.getElementById("progress-bar");
  const percentageText = document.getElementById("progress-percentage");

  progressBar.style.width = `${progressPercentage}%`;
  percentageText.textContent = `${progressPercentage.toFixed(0)}%`;

  // Color interpolation from red to green using HSL
  const hue = progressPercentage * 1.2; // 0 (red) to 120 (green)
  progressBar.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}

setInterval(updateTimer, 1000);
window.onload = updateTimer; // Ensure everything is properly initialized
