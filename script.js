// Pool de questions plus large
const allQuestions = [
  {
    question: "Quelle est la capitale de la France ?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "Combien font 5 × 3 ?",
    answers: ["8", "15", "10", "12"],
    correct: 1,
  },
  {
    question: "Quel langage s'exécute dans le navigateur ?",
    answers: ["Python", "Java", "JavaScript", "C++"],
    correct: 2,
  },
  // ... (toutes les autres questions)
];

// Fonction pour mélanger un tableau
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Sélection aléatoire de 10 questions
let questions = shuffleArray(allQuestions).slice(0, 10);

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");

let currentIndex = 0;
let score = 0;
let timer;
const TIME_LIMIT = 30; // secondes
let timeLeft = TIME_LIMIT;

function startTimer() {
  clearInterval(timer);
  timeLeft = TIME_LIMIT;
  timerEl.textContent = `${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      disableAnswers();
      nextBtn.classList.remove("hidden");
    }
  }, 1000);
}

function disableAnswers() {
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));
}

function showQuestion() {
  const currentQ = questions[currentIndex];
  questionEl.textContent = currentQ.question;
  answersEl.innerHTML = "";

  currentQ.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.className =
      "bg-white py-3 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition transform text-gray-900 font-medium";
    btn.onclick = () => checkAnswer(index, btn);
    answersEl.appendChild(btn);
  });

  // Mettre à jour la barre de progression
  const progressPercent = (currentIndex / questions.length) * 100;
  progressEl.style.width = `${progressPercent}%`;

  // Démarrer timer
  startTimer();

  nextBtn.classList.add("hidden");
}

function checkAnswer(index, btnClicked) {
  clearInterval(timer);
  const correct = questions[currentIndex].correct;
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) {
      btn.classList.remove("bg-white", "hover:scale-105", "hover:shadow-lg");
      btn.classList.add("bg-green-500", "text-white", "shadow-xl", "scale-105");
    }
    if (i === index && i !== correct) {
      btn.classList.remove("bg-white", "hover:scale-105", "hover:shadow-lg");
      btn.classList.add("bg-red-500", "text-white", "shadow-xl", "scale-105");
    }
  });

  if (index === correct) score++;
  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

restartBtn.onclick = () => {
  currentIndex = 0;
  score = 0;
  restartBtn.classList.add("hidden");
  questions = shuffleArray(allQuestions).slice(0, 10);
  showQuestion();
};

function getEncouragement(score, total) {
  const percentage = (score / total) * 100;

  if (percentage === 100) {
    return "🎉 Parfait ! Vous êtes un vrai génie du quiz !";
  } else if (percentage >= 80) {
    return "👏 Excellent travail ! Vous maîtrisez très bien le sujet.";
  } else if (percentage >= 50) {
    return "🙂 Pas mal ! Continuez à vous entraîner et vous ferez encore mieux.";
  } else {
    return "💪 Ne vous découragez pas ! Chaque essai vous rapproche du succès.";
  }
}

function showResult() {
  const message = getEncouragement(score, questions.length);

  questionEl.textContent = `Quiz terminé ! 🎉`;
  answersEl.innerHTML = `
    <div class="text-center text-lg font-bold text-gray-900 bg-gradient-to-r from-green-100 via-green-200 to-green-100 p-4 rounded-2xl shadow-lg">
      Ton score : ${score} / ${questions.length}
    </div>
    <div class="mt-4 text-center text-gray-800 font-medium">${message}</div>
  `;

  nextBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden");
  progressEl.style.width = `100%`;
}

showQuestion();
