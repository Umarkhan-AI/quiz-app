var questions = [
  {
      question: "Q1 : HTML Stands for",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
  },
  {
      question: "Q2 : CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
  },
  {
      question: "Q3 : Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
  },
  {
      question: "Q4 : Which tag is used to make element unique",
      option1: "id",
      option2: "class",
      option3: "label",
      corrAnswer: "id",
  },
  {
      question: "Q5 : Any element assigned with id, can be get in css",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
  },
];

var btn = document.getElementById("btn");
var qus = document.getElementById('qus');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var next = 0;
var score = 0;

function loadQuestion() {
 
  qus.innerText = questions[next].question;
  q1.innerText = questions[next].option1;
  q2.innerText = questions[next].option2;
  q3.innerText = questions[next].option3;
}

function nextQus() {
   
  var radio = document.getElementsByClassName("radio");
  for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
          var selectedOpt = radio[i].value;
          var selectedAnswer = questions[next][`option${selectedOpt}`];
          var corrAnswer = questions[next]["corrAnswer"];

           
          if (selectedAnswer === corrAnswer) {
              score++;
          }
          radio[i].checked = false; 
    
        }
    }
      
 
    next++;
   
  if (next >= questions.length) {
    
      alert("Your Score is " + score + "/" + questions.length);
      window.location.href = "quiz.html";
  } else {
      loadQuestion();
      btn.disabled = true; 
  }
}


function clicked() {
  btn.disabled = false;
}

 
loadQuestion();

 
