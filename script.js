const startTs = new Date('April 10, 2024 12:00:00').getTime(); // Hardcoded start timestamp

function updateTimer() {
  const now = new Date().getTime();
  const diff = now - startTs;
  
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)); // Assuming 30 days per month
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  let displayText = '';
  if (months > 0) displayText += `${months} months `;
  if (days > 0) displayText += `${days} days `;
  if (hours > 0) displayText += `${hours} hours `;
  if (minutes > 0) displayText += `${minutes} minutes `;
  if (seconds > 0) displayText += `${seconds} seconds`;

  document.getElementById('timer').textContent = displayText;
}

setInterval(updateTimer, 1000);
window.onload = updateTimer; // Adjust the font size immediately on load
