var index = 0;

var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button")

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
var choicesBtnEl;
var time;


// function init() {
//     saveWins();
//     saveLosses();
// }

// The startQuiz function starts the timer and loads the first quiz question
function startQuiz() {
    timerCount = 60;
    quizQuestions();
    startTimer();
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 30000);
}

// List of questions (object - arrays)

function quizQuestions() {
    var questionList = [{
        question: "What is the heaviest organ in the human body?",
        answers: ["Brain", "Liver", "Heart", "Skin"],
        correctAnswer: [1]
    }, {
        question: "What type of food holds the world record for being the most stolen around the world?",
        answers: ["Waygu beef, cheese, chocolate, coffee"],
        correctAnswer: [1]
    }, {
        question: "On average, how many seeds are located on the outside of a strawberry",
        answers: ["500, 300, 200, 100"],
        correctAnswer: [2]
    }, {
        question: "What is the highest-grossing video game franchise to date?",
        answers: ["Pokemon, Mario, Call of Duty, Street Fighter"],
        correctAnswer: [0]
    }, {
        question: "Which country’s national animal is a unicorn?",
        answers: ["Denmark, France, New Zealand, Scotland"],
        correctAnswer: [3]
    }]

    for (var i = 0; i < questionList[0].answers.length; i++) {
        var questionDisplay = document.createElement("questions")
        questionDisplay.innerHTML = questionList[0].question[i]

    }
    for (var i = 0; i < questionList[0].answers.length; i++) {
        var answerButton = document.createElement("button")
        answerButton.innerHTML = questionList[0].answers[i]
        document.getElementById("answers").append(answerButton)
        console.log(quizQuestions);
    }

    choicesBtnEl.addEventListener("click", function (event) {
        if (event.target.textContent === quizQuestions[index].correctAnswer) {
            quizQuestions();
        } else {
            time = time - 5;
        }
        index++;
    })
}

startButton.addEventListener("click", startQuiz);

// Updates win count on screen to local storage
function saveWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen to local storage
function saveLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}


// The winGame function is called when the win condition is met
function winGame() {
    winCounter++
    startQuiz.disabled = false;
    saveWins()
}

// The loseGame function is called when time reaches 0
function loseGame() {
    loseCounter++
    startQuiz.disabled = false;
    saveLosses()
}