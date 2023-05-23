var timerElement = document.querySelector('.timer');
var seconds = 0;
var intervalId;

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  updateTimer();
}

function updateTimer() {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;

  var timerText = hours.toString().padStart(2, '0') + ':' +
                  minutes.toString().padStart(2, '0') + ':' +
                  remainingSeconds.toString().padStart(2, '0');
  
  timerElement.textContent = timerText;
  seconds++;
}

startTimer(); // Start the timer automatically