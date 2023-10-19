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

var startButton = document.getElementById ("start-button");
var questionContainer = document.getElementById ("question-container");
var questionElement = document.getElementById ("questions");
var choicesElement = document.getElementById ("choices");
var resultElement = document.getElementById ("result");

//event click so the quiz can start

var questions = [
  {question: "Commonly used data types DO not include:",
  choices: ["strings", "booleans", "alerts", "numbers"],
  correctanswer: "booleans"
  },
  
  {question: "The condition in an if/else statement is enclosed with _______.",
  choices: ["strings", "booleans", "alerts", "numbers"],
  correctanswer: "booleans"
  },
  
  {question: "",
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
  startButton.addEventListener ("click", startQuiz);


//hide the start button once the user clicks startquiz
function startQuiz(){
  startButton.style.display = "none";
  questionContainer.classList.remove("hidden");
  displayQuestion(currentQuestionIndex);



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


 function checkAnswer(selectedAnswer, correctAnswer, questionsIndex){
  if (selectedAnswer === correctAnswer) {
    console.log ("correct!");
  }
  else {
    console.log ("incorrect!")}
var nextQuestionIndex = questionsIndex +1;  //the next question after 
 if (nextQuestionIndex < questions.length) {
  displayQuestion(nextQuestionIndex);

 }
 else {
  console.log("All done")
 }
  }


var startQuizButton = document.getElementById ('button');
var questionContainer = document.getElementById("quesstions-container");

startQuizButton.addEventListener('click', function() {
for (let i = 0; i < questions.length; i++){
  var questionElement = document.createElement ('h2');
  questionElement.textContent = question [i].question;
  document.body.appendChild(questionElement);

}

});







  
  //<button class="button">Start Quiz</button> 
  // <a href="/timedassessment.html" class="button">Start Quiz</a>