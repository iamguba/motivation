const GOALS = ["weed", "alco"];

const T_MINUTES = 60;
const T_HOURS = 60 * T_MINUTES;
const T_DAYS = 24 * T_HOURS;
const T_MONTHS = 30 * T_DAYS;

function update() {
  GOALS.forEach((goal) => {
    const { el, goalMonths, goalSeconds, totalSeconds, startDate } =
      getGoalSectionWithData(goal);

    const displayText = getTextForProgress(totalSeconds);
    const percents = getPercentsWithForProgress(totalSeconds, goalSeconds);

    updateGoalSectionWithData(el, {
      startDate,
      displayText,
      goalMonths,
      percents,
    });
  });
}

function getGoalSectionWithData(id) {
  const el = document.getElementById(id);
  const goalMonths = Number(el.dataset.goalMonths);
  const goalSeconds = goalMonths * T_MONTHS;

  const startDate = new Date(el.dataset.startDate);
  const totalSeconds = Math.floor(
    (new Date().getTime() - startDate.getTime()) / 1000,
  );

  return { el, goalMonths, goalSeconds, totalSeconds, startDate };
}

function updateGoalSectionWithData(
  el,
  { startDate, displayText, goalMonths, percents },
) {
  const date = startDate.toISOString().slice(0, "YYYY-MM-DD".length);
  el.querySelector(".start-date").textContent = `starts at ${date}`;
  el.querySelector(".time-progress").textContent = displayText;
  el.querySelector(".goal").textContent = `goal: ${goalMonths} months`;
  el.querySelector(".percent-progress").textContent = `${percents}%`;

  const progressBar = el.querySelector("progress");
  progressBar.value = percents;
}

function getTextForProgress(totalSeconds) {
  const months = Math.floor(totalSeconds / T_MONTHS);
  const days = Math.floor((totalSeconds % T_MONTHS) / T_DAYS);
  const hours = Math.floor((totalSeconds % T_DAYS) / T_HOURS);
  const minutes = Math.floor((totalSeconds % T_HOURS) / T_MINUTES);
  const seconds = totalSeconds % T_MINUTES;

  let displayText = "";
  if (months > 0) displayText += `${months}M `;
  if (days > 0) displayText += `${days}D `;
  if (hours > 0) displayText += `${hours}h `;
  if (minutes > 0) displayText += `${minutes}m `;
  if (seconds > 0) displayText += `${seconds}s`;

  return displayText;
}

function getPercentsWithForProgress(totalSeconds, goalSeconds) {
  return Math.floor(Math.min((totalSeconds / goalSeconds) * 100, 100));
}

setInterval(update, 1000);
window.onload = update;
