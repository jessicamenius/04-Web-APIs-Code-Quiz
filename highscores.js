window.score = 0;
var start = document.getElementById("start");
var answer = [true, false];

start.addEventListener("click", function () {
  displayTimer();
  displayQuestion();
  displayScore();
  start.parentNode.removeChild(start);
});

function displayScore() {
  if (answer == true) window++;
  document.getElementById("score").innerHTML = "Score: " + window.score;
}
