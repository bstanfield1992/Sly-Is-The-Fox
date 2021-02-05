/* GLOBAL VARIABLES */

// Variables for DOM references..........................................................................................................................
var timerCountdown = document.querySelector("#time");
var startQuizBtn = document.querySelector("#start-quiz-btn");
var initialBtn = document.querySelector("#initials-submit-button");
var titleScreen = document.querySelector("#start-quiz");
var quizScreen = document.querySelector("#quiz-section");
var initialsEl = document.querySelector("#initials");
var feedbackKey = document.querySelector("#key");
var answersEl = document.querySelector("#answers");
var highscoreScreen = document.querySelector("#highscore");
var scoreDisplay = document.querySelector("#highscore-display");
var hideHighScoresLink = document.querySelector("#view-highscores");
var highscoreClick = document.querySelector(".hi-score-title");
var hideTime = document.querySelector(".time");

// element selector to add random colors for the question cards
var quizCard = document.querySelector("#quiz-q-card")

// array for random question card classes
var randomCardColorClass = ["card-bg-1", "card-bg-2", "card-bg-2", "card-bg-4", "card-bg-5", "card-bg-6", "card-bg-7", "card-bg-8", "card-bg-9", "card-bg-10"]

/* GLOBAL FUNCTIONS */

// function to hide uneeded screens on load screen
function pageLoad() {
  //only show start page. Hide other content.
  highscoreScreen.setAttribute("class", "hide");
  quizScreen.setAttribute("class", "hide");
  scoreDisplay.setAttribute("class", "hide");
}


fetch('https://opentdb.com/api.php?amount=10&category=10&type=multiple')
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    /* Variables to keep track of quiz state */
    var questionResults = response.results;
    var questions = [];
    // index's for question loop
    var currentQuestionIndex = 0;
    // var ref in timerCountdown event (start timer at 75s)
    var time = 75;
    var timer;


    // start quiz/game function 
    function startQuiz() {
      //hide start screen and high score screen
      titleScreen.setAttribute("class", "hide");
      highscoreScreen.setAttribute("class", "hide");
      scoreDisplay.setAttribute("class", "hide");
      //unhide questions section 
      quizScreen.setAttribute("class", "show");
      // start timer 
      timer = setInterval(countdown, 1000);
      // show starting time
      var time = 75;
      timerCountdown.textContent = time;
      console.log(questions);
      
      getQuestion();
    }


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
      // call function to decide the color of the card.
      buildCard();
      // pull information from API.
      for (var i = 0; i < 10; i++) {
        var answersVar = [];
        var questionsString = questionResults[i].question;
        for (var q = 0; q < 3; q++) {
          answersVar.push(questionResults[i].incorrect_answers[q]);
        }
        answersVar.push(questionResults[i].correct_answer);
        var randomAnswers = randomizeAnswers(answersVar);
        // console.log(randomAnswers);
        questions[i] = {
          // fill array with questions/answers/correct answer. also format everything.
          quizQuestion: questionsString.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'').replace(/&eacute;/g, 'é').replace(/&uuml;/g, 'ü').replace(/&ouml;/g, 'ö').replace(/&amp;/g, '&').replace(/&iacute;/g, 'í').replace(/&Delta;/g, 'Δ').replace(/&aacute;/g, 'á').replace(/&oacute;/g, 'ó').replace(/&ntilde;/g, 'ñ').replace(/&uacute;/g, 'ú').replace(/&ocric;/g, 'ô') ,
          correct: questionResults[i].correct_answer.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'').replace(/&eacute;/g, 'é').replace(/&uuml;/g, 'ü').replace(/&ouml;/g, 'ö').replace(/&amp;/g, '&').replace(/&iacute;/g, 'í').replace(/&Delta;/g, 'Δ').replace(/&aacute;/g, 'á').replace(/&oacute;/g, 'ó').replace(/&ntilde;/g, 'ñ').replace(/&uacute;/g, 'ú').replace(/&ocric;/g, 'ô') ,
          answers: randomAnswers
        }
        // console.log(typeof questionResults[i].correct_answer);
      }
      var currentQuestion = questions[currentQuestionIndex];
      // console.log(currentQuestion)
      // update title with current questions
      var titleEl = document.getElementById("quiz-question");
      titleEl.textContent = currentQuestion.quizQuestion;
      // clear out any old question choices
      answersEl.innerHTML = "";
      // Loop over choices
      currentQuestion.answers.forEach(function (answers, i) {
        // create new button for each choice
        var answerNode = document.createElement("button");
        answerNode.setAttribute("class", "btn-custom");
        answerNode.setAttribute("value", answers);
        answerNode.textContent = i + 1 + ". " + answers;
        // attach click event listener to each answer
        answerNode.onclick = questionClick;
        // display on the page 
        answersEl.appendChild(answerNode);
      });
    };


    // function to increase or decrease time with quesiton answer button click
    function questionClick() {
      // check if guessed wrong
      var test = this.value;
      console.log(test);
      if (this.value != questions[currentQuestionIndex].correct) {
        //penalize time
        time -= 10;
        if (time < 0) {
          time = 0;
        }
        // display new time on page
        timerCountdown.textContent = time;
        feedbackKey.textContent = "Wrong!";
      } if (this.value === questions[currentQuestionIndex].correct) {
        //Give extra time
        time += 10;
        if (time < 0) {
          time = 0;
          clearInterval(timer);
        }
        // display new time on page
        timerCountdown.textContent = time;
        feedbackKey.textContent = "Correct!";
      };
      // flash right/wrong feedback on page
      feedbackKey.setAttribute("class", "key");
      setTimeout(function () {
        feedbackKey.setAttribute("class", "key hide");
      }, 1000);
      // move to next question
      currentQuestionIndex++;
      // check if we've run out of questions
      if (currentQuestionIndex == questions.length) {
        quizEnd();
      } else {
        getQuestion();
      }
    }


    // end quiz function 
    function quizEnd() {
      confetti.start()
      // stop timer
      clearInterval(timer);
      //show end screen
      highscoreScreen.setAttribute("class", "show");
      // show final score 
      var finalScore = document.querySelector("#final-score");
      finalScore.textContent = time;
      // hide questions section
      quizScreen.setAttribute("class", "hide");
    }


    // function to save highscore 
    function saveHighscore() {
      // get value of input box
      var initials = initialsEl.value
      //make sure value wasn't empty 
      if (initials !== "") {
        // get saved scores from localStorage, or if not any set to empty array
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        // format new score object for current user 
        var newScore = {
          score: time,
          initials: initials
        };
        // save to localStorage 
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
      }
      printHighscores();
    }
    function checkForEnter(event) {
      if (event.key === "Enter") {
        saveHighscore();
      }
    }


    // function to display high scores 
    function printHighscores() {
      confetti.start()
      //redirect to display screen
      titleScreen.setAttribute("class", "hide");
      quizScreen.setAttribute("class", "hide");
      highscoreScreen.setAttribute("class", "hide");
      hideHighScoresLink.setAttribute("class", "hide");
      hideTime.setAttribute("class", "hide");
      scoreDisplay.setAttribute("class", "show");
      // either get scores from localstorage or set to empty array
      var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
      // sort highscores by score property in descending order
      highscores.sort(function (a, b) {
        return b.score - a.score;
      });
      highscores.forEach(function (score) {
        // create li tag for each high score
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;
        // display on page
        var olEl = document.getElementById("display-scores");
        olEl.appendChild(liTag);
      });
    }

    
    // function to clear high scores
    function clearHighscores() {
      window.localStorage.removeItem("highscores");
      window.location.reload();
    }

    // onClick for clear high scores btn 
    document.getElementById("clear-btn").onclick = clearHighscores;
    // event listener for view high scores screen 
    highscoreClick.addEventListener("click", printHighscores);
    // user clicks button to submit initials
    initialBtn.onclick = saveHighscore;
    // user clicks button to start quiz
    startQuizBtn.onclick = startQuiz;
    initials.onkeyup = checkForEnter;
    
    console.log(response);
  })

  // function to randomize the answers.
  function randomizeAnswers(answers) {
    var random = [];
    for (var i = 0; i < 4; i++) {
      // creates random number
      var randomNumber = Math.floor(Math.random() * answers.length);
      // uses random number to push to the random array where all the new answers will be.
      random.push(answers[randomNumber].replace(/&quot;/g, '\"').replace(/&#039;/g, '\'').replace(/&eacute;/g, 'é').replace(/&uuml;/g, 'ü').replace(/&ouml;/g, 'ö').replace(/&amp;/g, '&').replace(/&iacute;/g, 'í').replace(/&Delta;/g, 'Δ').replace(/&aacute;/g, 'á').replace(/&oacute;/g, 'ó').replace(/&ntilde;/g, 'ñ').replace(/&uacute;/g, 'ú').replace(/&ocric;/g, 'ô'));
      // delete the option so answers aren't duplicated.
      answers.splice(randomNumber, 1);
    }
    return random;
  }

  // function to change the color of the cards that the questions are on.
  function buildCard() {

    quizCard.removeAttribute("class");
    var randomNumber = Math.floor(Math.random() * randomCardColorClass.length);
    quizCard.classList.add("card-panel", randomCardColorClass[randomNumber]);
    console.log(randomCardColorClass[randomNumber]);
    randomCardColorClass.splice(randomNumber, 1);
    // console.log(randomCardColorClass);
  }

  pageLoad();
