window.timer = 100;
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
      "Time Remaning: " + window.timer;
    if (window.timer === 0) {
      endQuiz();
    }
  }, 1000);
}
