const STORE = {
  questions: [
    {
      question: 'What is the best selling video game console of all time?',
      answers: [
        'Playstation 4',
        'Xbox',
        'Nintendo Wii',
        'Playstation 2'
      ],
      correctAnswer: 'Playstation 2'
    },
    {
      question: 'Who was ranked as the best video game character of all time on IGN in 2020?',
      answers: [
        'Mario',
        'Link',
        'Master Chief',
        'Cloud Strife'
      ],
      correctAnswer: 'Mario'
    },
    {
      question: 'What is the most profitable video game of all time to date?',
      answers: [
        'Honor of Kings',
        'Monster Strike',
        'Fortnite',
        'Pokemon Go'
      ],
      correctAnswer: 'Monster Strike'
    },
    {
      question: 'What is the average age of a gamer in the USA according to Wikipedia?',
      answers: [
        '9',
        '16',
        '35',
        '45'
      ],
      correctAnswer: '35'
    },
    {
      question: 'How much was first place grand prize money at the 2019 Fortnite World Cup?',
      answers: [
        '$1 million',
        '$3 million',
        '$5 million',
        '$10 million'
      ],
      correctAnswer: '$3 million'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit-btn');
const startButton = document.getElementById('start-btn');

function setTextPerQuestion(questionNumber) {
  $('#question').text(STORE.questions[questionNumber].question);
  $('#first_answer').text(STORE.questions[questionNumber].answers[0]);
  $('#second_answer').text(STORE.questions[questionNumber].answers[1]);
  $('#third_answer').text(STORE.questions[questionNumber].answers[2]);
  $('#fourth_answer').text(STORE.questions[questionNumber].answers[3]);
  $('#quiz_score').text(STORE.score);
}

  function startQuiz() {
    let questionNumber = 0;
    $('#start-btn').click(function(event) {
      console.log('Started');
      $('#start-btn').hide();
      $('.border').hide();
      setTextPerQuestion(questionNumber);
      $('.hide').toggle();
    });
  }

  function answerQuestion() {
    let questionNumber = 0;
    let score = 0;
      $('form').submit(function(event) {
        event.preventDefault();
        console.log('Submitted');
        if ($('input[type=radio]:checked').siblings().text() == STORE.questions[questionNumber].correctAnswer) {
          alert("That's correct!");
          score++;
        } else {
          alert('You selected the incorrect answer.');
        }
        questionNumber++;
        setTextPerQuestion(questionNumber);
      });
    }

  function init() {
    startQuiz();
    answerQuestion();
    setTextPerQuestion();
  }
  $(init);

  // now keep track of score and display the final score at the end in addition to keeping track of score per question and add CSS