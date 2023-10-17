// var Wrong = document.getElementById ("wrong")


// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector(".start.button");

// var timer;
// var timerCount;



// function startTimer() {
//   timerCount--;
//   timerElement.textContent = timerCount;
//   if (timerCount >=0){
//     clearInterval(timer);
//     winGame();
//   }
// }
// if (timerCount === 0){
//   clearInterval(timer);
//   loseGame();
// }

var questions = [
{question: "Commonly used data types DO not include:",
choices: ["strings", "booleans", "alerts", "numbers"],
correctanswer: "booleans"
},

{question: "Commonly used data types DO not include:",
choices: ["strings", "booleans", "alerts", "numbers"],
correctanswer: "booleans"
},

{question: "Commonly used data types DO not include:",
choices: ["strings", "booleans", "alerts", "numbers"],
correctanswer: "booleans"
},

{question: "Commonly used data types DO not include:",
choices: ["strings", "booleans", "alerts", "numbers"],
correctanswer: "booleans"
},

{question: "Commonly used data types DO not include:",
choices: ["strings", "booleans", "alerts", "numbers"],
correctanswer: "booleans"
},

]

var startButton = document.getElementById ("start-button");
var questionContainer = document.getElementById ("question-container");
var questionElement = document.getElementById ("questions");
var choicesElement = document.getElementById ("choices");

//event click so the quiz can start
startButton.addEventListener ("click", startQuiz);

//hide the start button once the user clicks startquiz
function startQuiz(){
  startButton.style.display = "none";

displayQuestion(0);
} 
//this displays the first question 
var questions = questions [questionsIndex];
questionsElement.textContent = question.question;

choicesElement.innerHTML = "";
question.choices.forEach(choices => {
  var choiceButton = document.createElement("button"); //setting the variable button in choicebutton
  choiceButton.textContent = choices;
  choiceButton.addEventListener ("click", () => {
    checkAnswer (choices, question.correctanswer, questionsIndex);
  });
  choicesElement.appendChild(choiceButton);

});
 questionContainer.style.display = "block";
