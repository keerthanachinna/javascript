// Set the countdown date (e.g., 1 minute from now)
const countdownDate = new Date().getTime() + 60000;

// Update the countdown every second
const timer = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const distance = countdownDate - now;

  // Calculate minutes and seconds
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown timer
  const timerElement = document.getElementById('timer');
  timerElement.textContent = `${minutes}m ${seconds}s`;

  // When the countdown is finished
  if (distance < 0) {
    clearInterval(timer);
    timerElement.textContent = 'Countdown Finished!';
  }
}, 1000);
