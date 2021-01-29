/* GLOBAL VARIABLES */ 

// Variables to keep track of quiz state..................................................................................................................

// index's for question loop
var currentQuestionIndex = 0;
// var ref in timerCountdown event (start timer at 75s)
var time = 75;
var timer;




// Variables for DOM references..........................................................................................................................

var timerCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#start-quiz-btn");
var initialBtn = document.querySelector("#initials-submit-button");
var titleScreen = document.querySelector("#start-quiz");
var quizScreen = document.querySelector("#quiz-section");
var initialsEl = document.querySelector("#initials");
var feedbackKey = document.querySelector("#key");
var answersEl = document.querySelector("#answers");
var highscoreScreen = document.querySelector("#highscore")
var scoreDisplay = document.querySelector("#highscore-display")
var hideHighScoresLink = document.querySelector("#view-highscores")
var hideTime = document.querySelector(".time")



// function to hide uneeded screens on load screen
function pageLoad() {
  //only show start page. Hide other content.
  highscoreScreen.setAttribute("class", "hide");
  quizScreen.setAttribute("class", "hide");
  scoreDisplay.setAttribute("class", "hide");

  if (startQuiz == true){
    return;
  }

}



/* GLOBAL FUNCTIONS */



// function to hide uneeded screens on load screen
function pageLoad() {
  //only show start page. Hide other content.
  highscoreScreen.setAttribute("class", "hide");
  quizScreen.setAttribute("class", "hide");
  scoreDisplay.setAttribute("class", "hide");

  if (startQuiz == true){
    return;
  }

}



/* GLOBAL FUNCTIONS */

// timer countdowns one second at a time function
function countdown() {
  time--;
  timerCountdown.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}



// function to get the question
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion)

  // update title with current questions
  var titleEl = document.getElementById("quiz-question");
  titleEl.textContent = currentQuestion.quizQuestion;

  // clear out any old question choices
  answersEl.innerHTML = "";

  // Loop over choices
  currentQuestion.answers.forEach(function(answer, i) {
    // create new button for each choice
    var answerNode = document.createElement("button");
    answerNode.setAttribute("class", "btn");
    answerNode.setAttribute("value", answer)

    answerNode.textContent = i +1 + ". " + answer;

    // attach click event listener to each answer
    answerNode.onclick = questionClick;

    // display on the page 
    answersEl.appendChild(answerNode);
  });
   
  
};


