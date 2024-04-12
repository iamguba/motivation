const startTs = new Date('April 10, 2024 12:00:00').getTime(); // Hardcoded start timestamp

function updateTimer() {
  const now = new Date().getTime();
  const diff = now - startTs;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('timer').textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateTimer, 1000);
