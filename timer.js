window.timer = 120;
var start = document.getElementById("start");

start.addEventListener("click", function () {
  displayTimer();
  displayQuestion();
  start.parentNode.removeChild(start);
});

function displayTimer() {
  window.createTimer = setInterval(function () {
    window.timer -= 1;
    document.getElementById("timer").innerHTML =
      "Time Remaining: " + window.timer;

    if (window.timer === 0) {
      endQuiz();
    }
  }, 1000);
}
