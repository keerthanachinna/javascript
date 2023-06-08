// Array of questions, options, and correct answers
const quiz = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
      question: "Which country won the FIFA World Cup in 2018?",
      options: ["France", "Brazil", "Germany", "Spain"],
      answer: "France"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Function to display the current question and options
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    
    // Clear previous question and options
    questionElement.textContent = '';
    optionsElement.textContent = '';
  
    // Display current question
    questionElement.textContent = quiz[currentQuestion].question;
  
    // Display options
    quiz[currentQuestion].options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => {
        checkAnswer(option);
      });
      optionsElement.appendChild(button);
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedAnswer) {
    const correctAnswer = quiz[currentQuestion].answer;
  
    if (selectedAnswer === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quiz.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  // Function to display the final score
  function showResult() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementsByTagName('button')[0];
  
    // Hide options and next button
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
  
    // Display final score
    questionElement.textContent = `You scored ${score} out of ${quiz.length}!`;
  }
  
  // Function to move to the next question
  function nextQuestion() {
    currentQuestion++;
  
    if (currentQuestion < quiz.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  // Display the first question
  displayQuestion();
  