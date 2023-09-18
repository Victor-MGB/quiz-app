const QuizData = [
  {
    question: "what is the capital of nigeria",
    option: ["oakland", "las vegas", "berlin", "Abuja"],
    answer: "Abuja",
  },
  {
    question: "Which planet is the largest",
    option: ["Jupiter", "mars", "saturn", "mercury"],
    answer: "Jupiter",
  },
  {
    question: "In which sport does Serena Williams excel?",
    option: ["Golf", "Tennis", "Swimming", "Basketball"],
    answer: "Tennis",
  },
  {
    question: "Which country won the FIFA World Cup in 2018?",
    option: ["Brazil", "Germany", "France", "Argentina"],
    answer: "france",
  },
  {
    question:
      "Who played the character of Tony Stark in the Marvel Cinematic Universe?",
    option: [
      "Chris Hemsworth",
      " Chris Pratt",
      "Robert Downey Jr.",
      " Chris Evans",
    ],
    answer: "Robert Downey Jr.",
  },
  {
    question:
      "What is the name of the fictional wizarding school in the Harry Potter series?",
    option: [
      "Elmsworth School of Witchcraft and Wizardry",
      "Salem Institute for the Magical Arts",
      "Hogwarts School of Witchcraft and Wizardry",
      " Durmstrang Institute",
    ],
    answer: "Hogwarts School of Witchcraft and Wizardry",
  },
  {
    question: "In which year did World War II end?",
    option: ["1945", "1918", "1939", " 1950"],
    answer: "1945",
  },
  {
    question: "Who was the first President of the United States?",
    option: [
      "Thomas Jefferson",
      " Benjamin Franklin",
      "George Washington",
      "Joe Biden",
    ],
    answer: "Joe Biden",
  },

  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    option: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon dioxide",
  },
  {
    question: "Which river is the longest in the world?",
    option: [
      " Amazon River",
      "Nile River",
      "Mississippi River",
      "Yangtze River",
    ],
    answer: "Nile River",
  },
  {
    question: "What is the highest mountain in the world?",
    option: [
      "Mount Kilimanjaro",
      "Mount Everest",
      "Mount McKinley",
      "Mount Fuji",
    ],
  },
];

const quizContainer = document.querySelector(".quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("button");
const retryButton = document.getElementById("retry");
const showAnswerButton = document.getElementById("showAnswer");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = QuizData[currentQuestionIndex];
  const optionsHTML = currentQuestion.option
    .map((option, index) => {
      return `
                    <label class="block my-2">
                        <input type="radio" name="quiz" value="${option}">
                        ${option}
                    </label>
                `;
    })
    .join("");

  quizContainer.innerHTML = `
                <p class="text-xl">${currentQuestion.question}</p>
                <form id="quiz-form">${optionsHTML}</form>
            `;
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const userAnswer = selectedOption.value;
    const correctAnswer = QuizData[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
      score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < QuizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.innerHTML = "";
  submitButton.classList.add("hide");
  retryButton.classList.remove("hide");
  showAnswerButton.classList.remove("hide");

  resultContainer.innerHTML = `
                <p class="text-2xl">You scored ${score} out of ${QuizData.length} questions!</p>
            `;
}

displayQuestion();

submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.innerHTML = "";
  submitButton.classList.remove("hide");
  retryButton.classList.add("hide");
  showAnswerButton.classList.add("hide");
  displayQuestion();
});
showAnswerButton.addEventListener("click", () => {
  resultContainer.innerHTML = `
                <p class="text-2xl">The correct answer is: ${
                  QuizData[currentQuestionIndex - 1].answer
                }</p>
            `;
});