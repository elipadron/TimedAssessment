var Wrong = document.getElementById ("wrong")


var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start.button");

var timer;
var timerCount;



function startTimer() {
  timerCount--;
  timerElement.textContent = timerCount;
  if (timerCount >=0){
    clearInterval(timer);
    winGame();
  }
}
if (timerCount === 0){
  clearInterval(timer);
  loseGame();
}