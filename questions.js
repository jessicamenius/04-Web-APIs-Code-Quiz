// countdown timer from 120 sections

window.timer = 120;
var start = document.getElementById("start");

start.addEventListener("click", function () {
  displayTimer();
  removeInstructions();
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

// create an array of questions with choices and the answer
// each group in the array has 3 keys and 3 variables

var question = [
  {
    title: "Inside which HTML element does the the JavaScript link go?",
    choices: ["<script>", "<javascript>", "<js>", "<script>"],
    answer: 0,
  },

  {
    title: "What type of brackets are used to create a block of code?",
    choices: ["[]", "{}", "()", "||"],
    answer: 1,
  },

  {
    title: "How do you create a function in JavaScript?",
    choices: [
      "function - myFunction()",
      "function:myFunction",
      "function myFunction()",
      "function=myfunction",
    ],
    answer: 2,
  },

  {
    title: "How do you call a function named myFunction?",
    choices: [
      "myFunction()",
      "console.log(myFunction()",
      "On the phone",
      "Come here myFunction())",
    ],
    answer: 0,
  },

  {
    title: "Where is the correct place to insert a JavaScript?",
    choices: ["<head>", "<body>", "Both", "Neither"],
    answer: 1,
  },

  {
    title: "What was not used to create this quiz?",
    choices: ["HTML", "Python", "Bootstap", "CSS?"],
    answer: 2,
  },

  {
    title: "Which is not a data type?",
    choices: ["Boolean", "Numbers", "Letters", "String"],
    answer: 3,
  },
];

var currentQuestion = 0;
window.score = 0;

function displayQuestion() {
  document.getElementById("question").innerHTML =
    questions[currentQuestion].title;
  for (var i = 0; i < questions[currentQuestion].choices.length; i += 1) {
    var button = document.createElement("button");
    button.type = "button";
    button.value = i;
    button.innerHTML = questions[currentQuestion].choices[i];
    button.addEventListener("click", function (event) {
      var buttonValue = event.target.value;

      if (buttonValue == questions[currentQuestion].answer) {
        // the answer is correct
        // add to their score here
        window.score += 1;
        document.getElementById("score").innerHTML = "Score: " + window.score;
      } else {
        // the answer is wrong
        window.timer -= 10;
      }

      // move onto next question
      document.getElementById("answers").innerHTML = "";

      // last question
      if (currentQuestion === questions.length - 1) {
        endQuiz();
      } else {
        currentQuestion += 1;
        displayQuestion();
      }
    });
    document.getElementById("answers").append(button);
  }
}

// finish off the quiz
function endQuiz() {
  // clear the question
  // save the score in localStorage
  clearInterval(window.createTimer);
  document.getElementById("question").innerHTML = "";
  handleEndQuiz();
}

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
