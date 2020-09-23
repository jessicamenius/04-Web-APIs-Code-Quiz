// tally score
// enter initials
// list highscore

function handleEndQuiz() {
  var existingScores = JSON.parse(localStorage.getItem("scores"));
  if (existingScores === null) {
    existingScores = [];
  }
  existingScores.push(window.score);
  document.getElementById("question").innerHTML = "";
  document.getElementById("score").innerHTML = window.score;
  document.getElementById("timer").innerHTML = "";
  window.score = 0;
  localStorage.setItem("scores", JSON.stringify(existingScores));
  // list the existing scores in html
  for (var i = 0; i < existingScores.length; i++) {
    // display the scores on the page using
    var listItem = document.createElement("li");
    listItem.innerHTML = existingScores[i];
    document.getElementById("score").append(listItem);
  }
  window.timer = 90;
  currentQuestion = 0;
  var startAgain = document.createElement("button");
  startAgain.setAttribute("id", "start-again");
  startAgain.innerHTML = "Start Again";

  startAgain.addEventListener("click", function () {
    displayTimer();
    displayQuestion();
    startAgain.parentNode.removeChild(startAgain);
    document.getElementById("score").innerHTML = "";
  });
  document.querySelector("#prompt_display").appendChild(startAgain);
}
