// ============================================
// HINDI TUTOR APP - script.js
// ============================================

// ---------- QUESTION BANK ----------
const allQuestions = [
  {
    hindi: "नमस्ते",
    romanized: "(Namaste)",
    type: "translate-to-english",
    prompt: "What does this Hindi word mean in English?",
    correct: "Hello / Greetings",
    choices: ["Goodbye", "Hello / Greetings", "Thank you", "Please"]
  },
  {
    hindi: "धन्यवाद",
    romanized: "(Dhanyavaad)",
    type: "translate-to-english",
    prompt: "What does this mean in English?",
    correct: "Thank you",
    choices: ["Sorry", "Welcome", "Thank you", "Yes"]
  },
  {
    hindi: "हाँ",
    romanized: "(Haan)",
    type: "translate-to-english",
    prompt: "What does this mean in English?",
    correct: "Yes",
    choices: ["No", "Maybe", "Yes", "Okay"]
  },
  {
    hindi: "नहीं",
    romanized: "(Nahin)",
    type: "translate-to-english",
    prompt: "What does this mean in English?",
    correct: "No",
    choices: ["Yes", "No", "Stop", "Go"]
  },
  {
    hindi: "पानी",
    romanized: "(Paani)",
    type: "translate-to-english",
    prompt: "What does this Hindi word mean in English?",
    correct: "Water",
    choices: ["Food", "Fire", "Water", "Air"]
  },
  {
    hindi: "एक",
    romanized: "(Ek)",
    type: "translate-to-english",
    prompt: "Which number is this?",
    correct: "One (1)",
    choices: ["Two (2)", "Three (3)", "One (1)", "Four (4)"]
  },
  {
    hindi: "दो",
    romanized: "(Do)",
    type: "translate-to-english",
    prompt: "Which number is this?",
    correct: "Two (2)",
    choices: ["One (1)", "Two (2)", "Five (5)", "Ten (10)"]
  },
  {
    hindi: "लाल",
    romanized: "(Laal)",
    type: "translate-to-english",
    prompt: "What color does this word describe?",
    correct: "Red",
    choices: ["Blue", "Green", "Red", "Yellow"]
  },
  {
    hindi: "नीला",
    romanized: "(Neela)",
    type: "translate-to-english",
    prompt: "What color does this word describe?",
    correct: "Blue",
    choices: ["Red", "Blue", "White", "Black"]
  },
  {
    hindi: "माँ",
    romanized: "(Maa)",
    type: "translate-to-english",
    prompt: "What family member is this?",
    correct: "Mother",
    choices: ["Father", "Sister", "Mother", "Brother"]
  },
  {
    hindi: "घर",
    romanized: "(Ghar)",
    type: "translate-to-english",
    prompt: "What does this word mean in English?",
    correct: "Home / House",
    choices: ["School", "Home / House", "Market", "Garden"]
  },
  {
    hindi: "खाना",
    romanized: "(Khaana)",
    type: "translate-to-english",
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
  "Almost! The right answer was **{answer}** — you'll get it next time! 💙",
  "Not quite, but that's how we learn! It was **{answer}**. Keep going! 😊",
  "Good try! The answer was **{answer}**. You've got this! 🌱",
  "Don't worry — it was **{answer}**. Mistakes help us remember! 💡",
  "So close! The correct answer is **{answer}**. You'll nail it next round! 🎯"
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
  questions = shuffle(allQuestions).
