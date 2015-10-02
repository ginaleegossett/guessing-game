var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");

var questions = ['Do you live in Montana?', 'Is autumn the best season?', 'Is Harry Potter your favorite book series?']
var answers = ['YES', 'Y','NO', 'N']
var userScore = 0


function ques1() {
  var question1 = prompt(questions[0]);

  if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
  	one.innerHTML='Lucky you! What a beautiful place to live!';
  	userScore++;
  } else {
  	one.innerHTML='No? You are missing out!';
  }
  console.log('Does user live in Montana ' + question1);
}

function ques2() {
  var question2 = prompt(questions[1]);

  if (question2.toUpperCase() === answers[0] || question2.toUpperCase() === answers[1]) {
  	two.innerHTML='You are correct! Autumn is the best season!';
  	userScore++;
  } else {
  	two.innerHTML='Sorry, you are wrong. Autumn means sweaters and boots and Pumpkin Spiced Lattes!';
  }
  console.log('Is autumn the best season? ' + question2);
}

function ques3() {
  var question3 = prompt(questions[2]);

  if (question3.toUpperCase() === answers[0] || question3.toUpperCase() === answers[1]) {
  	three.innerHTML='Yes! You are a pretty cool person!';
  	userScore++;
  } else {
  	three.innerHTML='It is not? You need to rethink your answer.';
  }
  console.log('Is Harry Potter favorite book series? ' + question3);
}

ques1();
ques2();
ques3();

alert('Thanks for playing! You got ' + userScore + ' answers correct! You are pretty awesome!');





