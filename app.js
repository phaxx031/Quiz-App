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

function setTextPerQuestion() {
  $('#question').text(STORE.questions[STORE.questionNumber].question);
  $('#first_answer').text(STORE.questions[STORE.questionNumber].answers[0]);
  $('#second_answer').text(STORE.questions[STORE.questionNumber].answers[1]);
  $('#third_answer').text(STORE.questions[STORE.questionNumber].answers[2]);
  $('#fourth_answer').text(STORE.questions[STORE.questionNumber].answers[3]);
}

  function startQuiz() {
    $('#start-btn').click(function(event) {
      console.log('Started');
      $('#start-quiz-container').hide();
      $('#question-container').show();
    });
  }

  function handleSubmit() {
    $('form').submit(function(event) {
      event.preventDefault();
      $('#quiz-score span').text(STORE.score);
      console.log('Submitted');
      if ($('input[type=radio]:checked').siblings().text() == STORE.questions[STORE.questionNumber].correctAnswer) {
        alert("That's correct!");
        STORE.score++;
      } else {
        alert('You selected the incorrect answer.');
      }
      showNextQuestion();
    });
  }

  function showNextQuestion() {
    STORE.questionNumber++;
    if (STORE.questionNumber < STORE.questions.length) {
      setTextPerQuestion();
    } else {
      setQuizResults();
      optionalRefreshQuiz();
    }
  }

  function setQuizResults() {
    alert(`You scored ${STORE.score} out of 5`);
  }

  function optionalRefreshQuiz() {
    let optionalRefreshQuiz = confirm('Do you want to take the Quiz again?');
    if (optionalRefreshQuiz) {
    // generally we could do that if optionalRefreshQuiz is true then it'll reset but this is a shortcut because if they click ok then it's
    // assumed to be true anyways, "confirm" in yellow above pops up an alert for user to confirm or decline
      STORE.score = 0;
      STORE.questionNumber = 0;
      $('#start-quiz-container').show();
      $('#question-container').hide();
      setTextPerQuestion();
    }
  }

  function init() {
    startQuiz();
    handleSubmit();
    setTextPerQuestion(0);
  }
  $(init);