var winterScore = 0;
var summerScore = 0;
var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", function() {
  summer();
  disableBtnQ1();
});

q1a2.addEventListener("click" , function() {
  winter();
  disableBtnQ1();
});

q2a1.addEventListener("click" , function() {
  winter();
  disableBtnQ2();
});

q2a2.addEventListener("click" , function() {
  summer();
  disableBtnQ2();
});

q3a1.addEventListener("click" , function() {
  summer();
  disableBtnQ3();
});

q3a2.addEventListener("click" , function() {
  winter();
  disableBtnQ3();
});

restart.addEventListener("click" , restartQuiz);


function summer() {
  summerScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " summerScore = " + summerScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function winter() {
  winterScore += 1;
  questionCount += 1;
  
  console.log("questionCount = " + questionCount + " winterScore = " + winterScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult() {
  if (summerScore >= 2) {
    result.innerHTML = "You are a summer person!";
    console.log("You are a summer person!");
  } else if (winterScore >= 2) {
    result.innerHTML = "You are a winter person!";
    console.log("You are a winter person!");
  }
}

function restartQuiz() {
  winterScore = 0;
  summerScore = 0;
  questionCount = 0;
  console.log("questionCount = " + questionCount + " winterScore = " + winterScore + " summerScore = " + summerScore)
  result.innerHTML = "Your result is...";
  enableBtn();
}

function disableBtnQ1() {
  q1a1.disabled = true;
    q1a2.disabled = true;
}

function disableBtnQ2() {
  q2a1.disabled = true;
    q2a2.disabled = true;
}

function disableBtnQ3() {
  q3a1.disabled = true;
    q3a2.disabled = true;
}

function enableBtn() {
    q1a1.disabled = false;
    q1a2.disabled = false;
    q2a1.disabled = false;
    q2a2.disabled = false;
    q3a1.disabled = false;
    q3a2.disabled = false;
}