// ============================================
// HINDI TUTOR APP - script.js
// ============================================

// ---------- QUESTION BANK ----------
const allQuestions = [
  {
    hindi: "नमस्ते",
    romanized: "(Namaste)",
    prompt: "What does this Hindi word mean in English?",
    correct: "Hello / Greetings",
    choices: ["Goodbye", "Hello / Greetings", "Thank you", "Please"]
  },
  {
    hindi: "धन्यवाद",
    romanized: "(Dhanyavaad)",
    prompt: "What does this mean in English?",
    correct: "Thank you",
    choices: ["Sorry", "Welcome", "Thank you", "Yes"]
  },
  {
    hindi: "हाँ",
    romanized: "(Haan)",
    prompt: "What does this mean in English?",
    correct: "Yes",
    choices: ["No", "Maybe", "Yes", "Okay"]
  },
  {
    hindi: "नहीं",
    romanized: "(Nahin)",
    prompt: "What does this mean in English?",
    correct: "No",
    choices: ["Yes", "No", "Stop", "Go"]
  },
  {
    hindi: "पानी",
    romanized: "(Paani)",
    prompt: "What does this Hindi word mean in English?",
    correct: "Water",
    choices: ["Food", "Fire", "Water", "Air"]
  },
  {
    hindi: "एक",
    romanized: "(Ek)",
    prompt: "Which number is this?",
    correct: "One (1)",
    choices: ["Two (2)", "Three (3)", "One (1)", "Four (4)"]
  },
  {
    hindi: "दो",
    romanized: "(Do)",
    prompt: "Which number is this?",
    correct: "Two (2)",
    choices: ["One (1)", "Two (2)", "Five (5)", "Ten (10)"]
  },
  {
    hindi: "लाल",
    romanized: "(Laal)",
    prompt: "What color does this word describe?",
    correct: "Red",
    choices: ["Blue", "Green", "Red", "Yellow"]
  },
  {
    hindi: "नीला",
    romanized: "(Neela)",
    prompt: "What color does this word describe?",
    correct: "Blue",
    choices: ["Red", "Blue", "White", "Black"]
  },
  {
    hindi: "माँ",
    romanized: "(Maa)",
    prompt: "What family member is this?",
    correct: "Mother",
    choices: ["Father", "Sister", "Mother", "Brother"]
  },
  {
    hindi: "घर",
    romanized: "(Ghar)",
    prompt: "What does this word mean in English?",
    correct: "Home / House",
    choices: ["School", "Home / House", "Market", "Garden"]
  },
  {
    hindi: "खाना",
    romanized: "(Khaana)",
    prompt: "What does this word mean in English?",
    correct: "Food",
    choices: ["Sleep", "Food", "Play", "Walk"]
  }
];

// ---------- ENCOURAGEMENT MESSAGES ----------
const correctMessages = [
  "Bahut accha! (Very good!) 🌟 Keep it up!",
  "Shabash! That's exactly right! 🎉",
  "You're on fire! Correct! 🔥",
  "Perfect! You're picking this up so fast! ✨",
  "Wah wah! (Bravo!) That's correct! 👏",
  "Excellent work! Hindi is coming naturally to you! 💪",
  "That's right! You're doing amazing! 🌺",
  "Correct! Every right answer brings you closer to fluency! 🚀"
];

const wrongMessages = [
  "Almost! The right answer was {answer} — you'll get it next time! 💙",
  "Not quite, but that's how we learn! It was {answer}. Keep going! 😊",
  "Good try! The answer was {answer}. You've got this! 🌱",
  "Don't worry — it was {answer}. Mistakes help us remember! 💡",
  "So close! The correct answer is {answer}. You'll nail it next round! 🎯"
];

const streakMessages = {
  3: "3 in a row! You're on a roll! 🔥",
  5: "5 in a row! Incredible streak! 🌟🌟🌟",
  7: "7 in a row! You're a Hindi star! ⭐⭐⭐",
  10: "10 in a row!! LEGENDARY! 🏆🎊"
};

// ---------- GAME STATE ----------
let questions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let totalXP = 0;
let answered = false;

// ---------- LOAD / SAVE XP ----------
function loadXP() {
  const saved = localStorage.getItem('hindiTutorXP');
  totalXP = saved ? parseInt(saved) : 0;
  document.getElementById('total-xp').textContent = totalXP;
}

function saveXP(earned) {
  totalXP += earned;
  localStorage.setItem('hindiTutorXP', totalXP);
  document.getElementById('total-xp').textContent = totalXP;
}

// ---------- SCREEN NAVIGATION ----------
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showInfo() {
  showScreen('info-screen');
}

// ---------- SHUFFLE HELPER ----------
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------- START QUIZ ----------
function startQuiz() {
  questions = shuffle(allQuestions).slice(0, 10);
  currentIndex = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  answered = false;
  showScreen('quiz-screen');
  loadQuestion();
}

// ---------- LOAD QUESTION ----------
function loadQuestion() {
  answered = false;
  const q = questions[currentIndex];

  // Update progress bar
  const pct = (currentIndex / questions.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';

  // Update counters
  document.getElementById('score-display').textContent = score;
  document.getElementById('streak-display').textContent = streak;
  document.getElementById('question-counter').textContent =
    'Q ' + (currentIndex + 1) + ' / ' + questions.length;

  // Update question card
  document.getElementById('question-text').textContent = q.hindi;
  document.getElementById('question-sub').textContent = q.romanized;
  document.getElementById('tutor-hint').textContent = q.prompt;

  // Hide feedback
  const fb = document.getElementById('feedback-box');
  fb.classList.add('hidden');
  fb.classList.remove('correct-fb', 'wrong-fb');

  // Build choices
  const container = document.getElementById('choices-container');
  container.innerHTML = '';
  const shuffledChoices = shuffle(q.choices);
  shuffledChoices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice, btn);
    container.appendChild(btn);
  });
}

// ---------- SELECT ANSWER ----------
function selectAnswer(choice, btn) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const isCorrect = choice === q.correct;

  // Disable all buttons and highlight
  document.querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === q.correct) b.classList.add('correct');
  });

  if (!isCorrect) {
    btn.classList.add('wrong');
  }

  // Update score and streak
  const fb = document.getElementById('feedback-box');
  const fbIcon = document.getElementById('feedback-icon');
  const fbMsg = document.getElementById('feedback-message');

  if (isCorrect) {
    score++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;

    fb.classList.remove('hidden');
    fb.classList.add('correct-fb');
    fbIcon.textContent = '✅';

    // Check for streak milestone first
    let msg = '';
    if (streakMessages[streak]) {
      msg = streakMessages[streak] + '<br>';
    }
    const randomCorrect = correctMessages[Math.floor(Math.random() * correctMessages.length)];
    fbMsg.innerHTML = msg + randomCorrect;

  } else {
    streak = 0;
    fb.classList.remove('hidden');
    fb.classList.add('wrong-fb');
    fbIcon.textContent = '💙';

    const randomWrong = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
    fbMsg.innerHTML = randomWrong.replace('{answer}', '<strong>' + q.correct + '</strong>');
  }

  // Update displays
  document.getElementById('score-display').textContent = score;
  document.getElementById('streak-display').textContent = streak;
}

// ---------- NEXT QUESTION ----------
function nextQuestion() {
  currentIndex++;
  if (currentIndex >= questions.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

// ---------- SHOW RESULTS ----------
function showResults() {
  const xpEarned = score * 10 + bestStreak * 5;
  saveXP(xpEarned);

  document.getElementById('final-score').textContent = score + '/' + questions.length;
  document.getElementById('final-streak').textContent = bestStreak;
  document.getElementById('xp-earned').textContent = xpEarned;

  // Pick emoji and title based on score
  let emoji, title, message;
  const pct = score / questions.length;

  if (pct === 1) {
    emoji = '🏆'; title = 'Perfect Score!';
    message = 'Absolutely amazing! You got every single one right. You are a true Hindi learner! 🌟';
  } else if (pct >= 0.8) {
    emoji = '🎉'; title = 'Excellent Work!';
    message = 'Bahut accha! You did really well. A little more practice and you\'ll be perfect! 💪';
  } else if (pct >= 0.6) {
    emoji = '😊'; title = 'Good Job!';
    message = 'You\'re making great progress! Every lesson brings you closer to fluency. Keep going! 🌱';
  } else {
    emoji = '💙'; title = 'Keep Practicing!';
    message = 'Don\'t worry — learning takes time and you\'re doing great just by trying! Play again to improve! 🚀';
  }

  document.getElementById('results-emoji').textContent = emoji;
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-message').textContent = message;

  showScreen('results-screen');
}

// ---------- INIT ----------
window.onload = function() {
  loadXP();
  showScreen('home-screen');
};
