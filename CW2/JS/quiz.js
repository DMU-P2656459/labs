var myQuestions = [ // Variable for the questions within the quiz
  {
    question: "What is B.B. King's Real Name?", // First question in the quiz
    answers: {
      a: 'Bob', // First option
      b: 'Riley', // Second option
      c: 'Dan' // Third option
    },
    correctAnswer: 'b' // Correct answer
  },
  {
    question: "Where was Les Paul Born?", // Second question in the quiz
    answers: {
      a: 'New York', // First option
      b: 'Maryland', // Second option
      c: 'Wisconsin' // Third option
    },
    correctAnswer: 'c' // Correct answer
  }
];

var quizContainer = document.getElementById('quiz'); // Variable for the quiz
var resultsContainer = document.getElementById('results'); // Variable for the results container
var submitButton = document.getElementById('submit'); // Variable for the submit button

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton); //

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){ //

  function showQuestions(questions, quizContainer){
    // Thi stores the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){

      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // this adds a html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join(''); // This connects the output list to the html code
  }


  function showResults(questions, quizContainer, resultsContainer){

    // This gathers answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // This keeps track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // This adds to the number of correct answers
        numCorrect++;

        answerContainers[i].style.color = 'lightgreen'; // This colours the answers green if answer is correct
      }

      else{
        answerContainers[i].style.color = 'red'; // This colours the answers red if answer is wrong
      }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }   // This shows users the number of correct answers they got

  // This show questions right away
  showQuestions(questions, quizContainer);

  // on submit, this show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}
// Used this tutorial online to guide me through the procces of making a quiz then implemented own design and questions https://simplestepscode.com/javascript-quiz-tutorial/
