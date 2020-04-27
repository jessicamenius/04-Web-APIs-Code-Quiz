// countdown timer from 100 sections

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
      "Time Remaining: " + window.timer;

    if (window.timer === 0) {
      endQuiz();
    }
  }, 1000);
}

function imstructions

// create an array of questions with choices and the answer
// each group in the array has 3 keys and 3 variables

var questions = [
  {
    title: "Which country is famous for pyramids?",
    choices: ["Egypt", "China", "Sudan", "Peru"],
    answer: 0,
  },

  {
    title: "Where is the Eiffel Tower?",
    choices: ["New York", "Las Vegas ", "Tokyo", "Paris"],
    answer: 3,
  },

  {
    title: "Which city in China are the Terracota Warriors ",
    choices: ["Chendu", "Xian", "Beijing", "Nanchang"],
    answer: 1,
  },

  {
    title: "Which country is the Leaning Tower of Pisa located?",
    choices: ["Spain", "Brazil", "Italy", "Scotland"],
    answer: 2,
  },

  {
    title: "Which president is not on Mt. Rushmore?",
    choices: [
      "Grover Cleveland",
      "Teddy Roosevelt",
      "Abraham Lincoln",
      "Thomas Jefferson",
    ],
    answer: 0,
  },

  {
    title: "Where is Machu Picchu?",
    choices: [
      "Australia",
      "Peru",
      "Greece",
      "Democratic Republic of the Congo",
    ],
    answer: 1,
  },
  {
    title: "Which city on is known as the Mistake on the Lake?",
    choices: ["Chicago", "Cleveland", "Salt Lake City", "Tahoe"],
    answer: 1,
  },

  {
    title: "what is last name of the Queen of England?",
    choices: ["Mountbatten-Windsor", "Mountbatten", "Windsor", "Nothing"],
    answer: 2,
  },

  {
    title: "Which ckty is the Gateway to the West?",
    choices: [
      "Independence, MO",
      "Kansas City, KS",
      "Little Rock, AK",
      "St. Louis, MO",
    ],
    answer: 3,
  },

  {
    title: "Which National Park is not in California?",
    choices: ["Yosemite", "Death Valley", "Yellowstone", "Joshua Tree"],
    answer: 2,
  },
];

var currentQuestion = 0;
window.score = 0;

function displayQuestion() {
  document.getElementById("questions").innerHTML =
    questions[currentQuestion].title;
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
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
}

//display questions on page

var currentQuestion = 0;
window.score = 0;

function displayQuestion() {
  document.getElementById("question").innerHTML =
    questions[currentQuestion].title;
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
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

// function displayScore() {
//   document.getElementById("score").innerHTML = score;
//   for (var i = 0; i < scorelength; i++) {
//     var button = document.createElement("button");
//     button.type = "button";
//     button.value = i;
//     button.innerHTML = questions[currentQuestion].choices[i];
//     button.addEventListener("click", function (event) {
//       var buttonValue = event.target.value;

//       if (buttonValue == questions[currentQuestion].answer) {
//         // the answer is correct
//         // add to their score here
//         window.score += 1;
//         document.getElementById("score").innerHTML = "Score: " + window.score;
//       } else {
//         // the answer is wrong
//         window.timer -= 10;
//       }

//       // move onto next question
//       document.getElementById("answers").innerHTML = "";

//       // last question
//       if (currentQuestion === questions.length - 1) {
//         endQuiz();
//       } else {
//         currentQuestion += 1;
//         displayQuestion();
//       }
//     });
//     document.getElementById("answers").append(button);
//   }
// }

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
  window.timer = 120;
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
