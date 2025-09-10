// Pool de questions plus large
const allQuestions = [
  // --- Très facile (1 à 10) ---
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
  {
    question: "Combien y a-t-il de jours dans une semaine ?",
    answers: ["5", "7", "10", "12"],
    correct: 1,
  },
  {
    question: "De quelle couleur est le ciel par temps clair ?",
    answers: ["Rouge", "Bleu", "Vert", "Jaune"],
    correct: 1,
  },
  {
    question: "Combien font 2 + 2 ?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    question: "Quelle planète est la plus proche du Soleil ?",
    answers: ["Terre", "Mercure", "Mars", "Jupiter"],
    correct: 1,
  },
  {
    question: "Quelle est la première lettre de l’alphabet ?",
    answers: ["Z", "B", "A", "C"],
    correct: 2,
  },
  {
    question: "Quel animal miaule ?",
    answers: ["Chien", "Chat", "Oiseau", "Poisson"],
    correct: 1,
  },
  {
    question: "Combien font 10 ÷ 2 ?",
    answers: ["2", "3", "5", "10"],
    correct: 2,
  },

  // --- Facile (11 à 20) ---
  {
    question: "Quelle est la capitale de l’Espagne ?",
    answers: ["Lisbonne", "Madrid", "Barcelone", "Séville"],
    correct: 1,
  },
  {
    question: "Combien y a-t-il de continents sur Terre ?",
    answers: ["5", "6", "7", "8"],
    correct: 2,
  },
  {
    question: "Quel océan borde la côte ouest des États-Unis ?",
    answers: ["Atlantique", "Pacifique", "Arctique", "Indien"],
    correct: 1,
  },
  {
    question: "Combien font 9 × 9 ?",
    answers: ["81", "72", "99", "90"],
    correct: 0,
  },
  {
    question: "Quelle est la langue officielle du Brésil ?",
    answers: ["Espagnol", "Portugais", "Français", "Italien"],
    correct: 1,
  },
  {
    question: "Quel est l’animal le plus rapide du monde ?",
    answers: ["Guépard", "Lion", "Tigre", "Léopard"],
    correct: 0,
  },
  {
    question: "Qui a peint la Joconde ?",
    answers: ["Picasso", "Léonard de Vinci", "Van Gogh", "Michel-Ange"],
    correct: 1,
  },
  {
    question: "Quelle est la capitale de l’Italie ?",
    answers: ["Milan", "Venise", "Rome", "Florence"],
    correct: 2,
  },
  {
    question: "Quel métal est utilisé pour fabriquer les canettes ?",
    answers: ["Fer", "Aluminium", "Cuivre", "Plomb"],
    correct: 1,
  },
  {
    question: "Quel est l’organe principal de la respiration ?",
    answers: ["Cœur", "Poumons", "Foie", "Estomac"],
    correct: 1,
  },

  // --- Moyen (21 à 30) ---
  {
    question: "En quelle année l’homme a-t-il marché sur la Lune ?",
    answers: ["1965", "1969", "1971", "1975"],
    correct: 1,
  },
  {
    question: "Qui a écrit 'Les Misérables' ?",
    answers: ["Molière", "Victor Hugo", "Voltaire", "Balzac"],
    correct: 1,
  },
  {
    question: "Quelle est la capitale du Canada ?",
    answers: ["Toronto", "Ottawa", "Vancouver", "Montréal"],
    correct: 1,
  },
  {
    question: "Combien de côtés a un octogone ?",
    answers: ["6", "7", "8", "9"],
    correct: 2,
  },
  {
    question: "Quel est le plus grand océan du monde ?",
    answers: ["Atlantique", "Indien", "Pacifique", "Arctique"],
    correct: 2,
  },
  {
    question: "Quelle est la formule chimique de l’eau ?",
    answers: ["O2", "CO2", "H2O", "HO2"],
    correct: 2,
  },
  {
    question: "Qui a découvert l’Amérique en 1492 ?",
    answers: ["Marco Polo", "Christophe Colomb", "Magellan", "Vasco de Gama"],
    correct: 1,
  },
  {
    question: "Quel est le symbole chimique de l’or ?",
    answers: ["Ag", "Au", "O", "Fe"],
    correct: 1,
  },
  {
    question: "Dans quel pays se trouve la Grande Muraille ?",
    answers: ["Inde", "Chine", "Japon", "Corée"],
    correct: 1,
  },
  {
    question: "Qui a inventé la théorie de la relativité ?",
    answers: ["Newton", "Einstein", "Galilée", "Tesla"],
    correct: 1,
  },

  // --- Difficile (31 à 40) ---
  {
    question: "Combien de dents a un adulte en moyenne ?",
    answers: ["28", "30", "32", "36"],
    correct: 2,
  },
  {
    question: "Quel pays a le plus d’habitants au monde ?",
    answers: ["Inde", "Chine", "États-Unis", "Indonésie"],
    correct: 0,
  },
  {
    question: "Quelle est la langue la plus parlée au monde ?",
    answers: ["Anglais", "Espagnol", "Mandarin", "Hindi"],
    correct: 2,
  },
  {
    question: "Quel est le désert le plus vaste du monde ?",
    answers: ["Sahara", "Arctique", "Antarctique", "Gobi"],
    correct: 2,
  },
  {
    question: "Quelle planète est surnommée l’étoile du berger ?",
    answers: ["Mars", "Jupiter", "Vénus", "Mercure"],
    correct: 2,
  },
  {
    question: "Quel est le plus long fleuve du monde ?",
    answers: ["Nil", "Amazone", "Yangzi Jiang", "Mississippi"],
    correct: 1,
  },
  {
    question: "Qui a écrit 'La Divine Comédie' ?",
    answers: ["Dante", "Shakespeare", "Hugo", "Cervantès"],
    correct: 0,
  },
  {
    question: "Quelle est la capitale de l’Australie ?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
  },
  {
    question: "Quel scientifique a découvert la pénicilline ?",
    answers: ["Pasteur", "Darwin", "Fleming", "Curie"],
    correct: 2,
  },
  {
    question: "Quel est le plus haut sommet du monde ?",
    answers: ["Mont Fuji", "K2", "Everest", "Kilimandjaro"],
    correct: 2,
  },

  // --- Très difficile à impossible (41 à 50) ---
  {
    question: "Combien de chromosomes possède l’être humain ?",
    answers: ["42", "44", "46", "48"],
    correct: 2,
  },
  {
    question: "En quelle année a eu lieu la chute de l’Empire romain d’Occident ?",
    answers: ["395", "410", "476", "500"],
    correct: 2,
  },
  {
    question: "Quelle est la capitale du Bhoutan ?",
    answers: ["Thimphou", "Katmandou", "New Delhi", "Colombo"],
    correct: 0,
  },
  {
    question: "Quel est l’élément le plus abondant dans l’univers ?",
    answers: ["Oxygène", "Hélium", "Hydrogène", "Carbone"],
    correct: 2,
  },
  {
    question: "Quelle est la distance moyenne Terre-Lune ?",
    answers: ["150 000 km", "284 000 km", "384 000 km", "500 000 km"],
    correct: 2,
  },
  {
    question: "Qui a écrit 'À la recherche du temps perdu' ?",
    answers: ["Flaubert", "Proust", "Zola", "Maupassant"],
    correct: 1,
  },
  {
    question: "Quel est l’organe le plus lourd du corps humain ?",
    answers: ["Cœur", "Cerveau", "Foie", "Poumons"],
    correct: 2,
  },
  {
    question: "Quel est le langage le plus ancien encore parlé aujourd’hui ?",
    answers: ["Hébreu", "Chinois", "Grec", "Tamoul"],
    correct: 3,
  },
  {
    question: "Quelle est la formule chimique de l’ozone ?",
    answers: ["O2", "O3", "CO2", "NO2"],
    correct: 1,
  },
  {
    question: "Quelle est la constante d’Avogadro (arrondie) ?",
    answers: ["6,02 × 10^23", "9,81 m/s²", "3,14", "1,61"],
    correct: 0,
  },
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

