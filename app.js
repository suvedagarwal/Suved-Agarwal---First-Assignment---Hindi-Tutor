// ========== QUESTION BANKS ==========
var lessonData = {
  greetings: [
    { hindi: "नमस्ते", roman: "(Namaste)", answer: "Hello", choices: ["Goodbye", "Hello", "Thank you", "Sorry"] },
    { hindi: "धन्यवाद", roman: "(Dhanyavaad)", answer: "Thank you", choices: ["Sorry", "Welcome", "Thank you", "Yes"] },
    { hindi: "हाँ", roman: "(Haan)", answer: "Yes", choices: ["No", "Maybe", "Yes", "Okay"] },
    { hindi: "नहीं", roman: "(Nahin)", answer: "No", choices: ["Yes", "No", "Stop", "Go"] },
    { hindi: "अलविदा", roman: "(Alvida)", answer: "Goodbye", choices: ["Hello", "Goodbye", "Please", "Welcome"] },
    { hindi: "कृपया", roman: "(Kripaya)", answer: "Please", choices: ["Please", "Thanks", "Hello", "Yes"] },
    { hindi: "माफ़ कीजिए", roman: "(Maaf Kijiye)", answer: "Sorry", choices: ["Thank you", "Sorry", "Hello", "Goodbye"] },
    { hindi: "स्वागत है", roman: "(Swaagat Hai)", answer: "Welcome", choices: ["Goodbye", "Sorry", "Please", "Welcome"] },
    { hindi: "शुभ प्रभात", roman: "(Shubh Prabhaat)", answer: "Good morning", choices: ["Good night", "Good morning", "Good evening", "Goodbye"] },
    { hindi: "शुभ रात्रि", roman: "(Shubh Raatri)", answer: "Good night", choices: ["Good morning", "Hello", "Good night", "Thank you"] }
  ],
  numbers: [
    { hindi: "एक", roman: "(Ek)", answer: "One", choices: ["One", "Two", "Three", "Four"] },
    { hindi: "दो", roman: "(Do)", answer: "Two", choices: ["One", "Two", "Five", "Ten"] },
    { hindi: "तीन", roman: "(Teen)", answer: "Three", choices: ["Three", "Four", "Six", "Eight"] },
    { hindi: "चार", roman: "(Chaar)", answer: "Four", choices: ["Two", "Seven", "Four", "Nine"] },
    { hindi: "पाँच", roman: "(Paanch)", answer: "Five", choices: ["Three", "Five", "Six", "One"] },
    { hindi: "छह", roman: "(Chhah)", answer: "Six", choices: ["Six", "Seven", "Eight", "Five"] },
    { hindi: "सात", roman: "(Saat)", answer: "Seven", choices: ["Nine", "Four", "Seven", "Two"] },
    { hindi: "आठ", roman: "(Aath)", answer: "Eight", choices: ["Eight", "Six", "Ten", "Three"] },
    { hindi: "नौ", roman: "(Nau)", answer: "Nine", choices: ["Seven", "Nine", "One", "Five"] },
    { hindi: "दस", roman: "(Das)", answer: "Ten", choices: ["Ten", "Eight", "Two", "Four"] }
  ],
  colors: [
    { hindi: "लाल", roman: "(Laal)", answer: "Red", choices: ["Blue", "Red", "Green", "Yellow"] },
    { hindi: "नीला", roman: "(Neela)", answer: "Blue", choices: ["Red", "Blue", "White", "Black"] },
    { hindi: "हरा", roman: "(Hara)", answer: "Green", choices: ["Green", "Yellow", "Black", "Red"] },
    { hindi: "पीला", roman: "(Peela)", answer: "Yellow", choices: ["White", "Yellow", "Orange", "Blue"] },
    { hindi: "काला", roman: "(Kaala)", answer: "Black", choices: ["White", "Red", "Black", "Brown"] },
    { hindi: "सफ़ेद", roman: "(Safed)", answer: "White", choices: ["Black", "White", "Yellow", "Blue"] },
    { hindi: "नारंगी", roman: "(Naarangi)", answer: "Orange", choices: ["Orange", "Red", "Yellow", "Pink"] },
    { hindi: "गुलाबी", roman: "(Gulaabi)", answer: "Pink", choices: ["Purple", "Red", "Pink", "Orange"] },
    { hindi: "बैंगनी", roman: "(Baingani)", answer: "Purple", choices: ["Blue", "Pink", "Green", "Purple"] },
    { hindi: "भूरा", roman: "(Bhoora)", answer: "Brown", choices: ["Brown", "Black", "Red", "Orange"] }
  ],
  food: [
    { hindi: "पानी", roman: "(Paani)", answer: "Water", choices: ["Water", "Milk", "Tea", "Rice"] },
    { hindi: "चाय", roman: "(Chai)", answer: "Tea", choices: ["Coffee", "Tea", "Water", "Juice"] },
    { hindi: "दूध", roman: "(Doodh)", answer: "Milk", choices: ["Water", "Bread", "Milk", "Sugar"] },
    { hindi: "चावल", roman: "(Chaaval)", answer: "Rice", choices: ["Bread", "Rice", "Fruit", "Vegetable"] },
    { hindi: "रोटी", roman: "(Roti)", answer: "Bread", choices: ["Rice", "Milk", "Bread", "Tea"] },
    { hindi: "फल", roman: "(Phal)", answer: "Fruit", choices: ["Vegetable", "Fruit", "Water", "Sugar"] },
    { hindi: "सब्ज़ी", roman: "(Sabzi)", answer: "Vegetable", choices: ["Fruit", "Rice", "Bread", "Vegetable"] },
    { hindi: "चीनी", roman: "(Cheeni)", answer: "Sugar", choices: ["Salt", "Sugar", "Tea", "Milk"] },
    { hindi: "नमक", roman: "(Namak)", answer: "Salt", choices: ["Sugar", "Water", "Salt", "Bread"] },
    { hindi: "खाना", roman: "(Khaana)", answer: "Food", choices: ["Sleep", "Food", "Play", "Walk"] }
  ]
};

// ========== FEEDBACK MESSAGES ==========
var correctMsgs = [
  "🌟 Bahut accha! (Very good!)",
  "🎉 Shabash! That's exactly right!",
  "🔥 You're on fire! Correct!",
  "✨ Perfect! You're picking this up fast!",
  "👏 Wah wah! (Bravo!) That's correct!",
  "💪 Excellent work! Keep going!",
  "🌺 That's right! You're doing amazing!",
  "🚀 Correct! You're a natural!"
];

var wrongMsgs = [
  "Almost! The right answer was \"{answer}\" — you'll get it next time! 💙",
  "Not quite, but that's how we learn! It was \"{answer}\". Keep going! 😊",
  "Good try! The answer was \"{answer}\". You've got this! 🌱",
  "Don't worry — it was \"{answer}\". Mistakes help us remember! 💡",
  "So close! The correct answer is \"{answer}\". You'll nail it next round! 🎯"
];

var streakMsgs = {
  3: "🔥 3 in a row! You're on a roll!",
  5: "🌟🌟🌟 5 in a row! Incredible streak!",
  7: "⭐⭐⭐ 7 in a row! You're a Hindi star!",
  10: "🏆🎊 10 in a row!! LEGENDARY!"
};

// ========== GAME STATE ==========
var questions = [];
var currentIndex = 0;
var score = 0;
var streak = 0;
var bestStreak = 0;
var answered = false;
var currentLessonKey = "mixed";
var totalXP = 0;
var lessonsDone = 0;

// ========== INIT ON PAGE LOAD ==========
loadProgress();

function loadProgress() {
  var savedXP = localStorage.getItem("hindiXP");
  var savedLessons = localStorage.getItem("hindiLessons");
  totalXP = savedXP ? parseInt(savedXP) : 0;
  lessonsDone = savedLessons ? parseInt(savedLessons) : 0;
  document.getElementById("total-xp").textContent = totalXP;
  document.getElementById("lessons-done").textContent = lessonsDone;
}

function saveProgress(earnedXP) {
  totalXP += earnedXP;
  lessonsDone += 1;
  localStorage.setItem("hindiXP", totalXP);
  localStorage.setItem("hindiLessons", lessonsDone);
  document.getElementById("total-xp").textContent = totalXP;
  document.getElementById("lessons-done").textContent = lessonsDone;
}

// ========== SCREEN NAVIGATION ==========
function showScreen(id) {
  var screens = document.querySelectorAll(".screen");
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove("active");
  }
  document.getElementById(id).classList.add("active");
}

function goHome() {
  loadProgress();
  showScreen("home-screen");
}

// ========== SHUFFLE ==========
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

// ========== RANDOM PICK FROM ARRAY ==========
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ========== START LESSON ==========
function startLesson(lessonKey) {
  currentLessonKey = lessonKey;

  if (lessonKey === "mixed") {
    var all = [];
    for (var key in lessonData) {
      all = all.concat(lessonData[key]);
    }
    questions = shuffle(all).slice(0, 10);
  } else {
    questions = shuffle(lessonData[lessonKey]).slice(0, 10);
  }

  currentIndex = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  answered = false;

  document.getElementById("current-score").textContent = "0";
  document.getElementById("current-streak").textContent = "0";

  showScreen("quiz-screen");
  showQuestion();
}

function restartLesson() {
  startLesson(currentLessonKey);
}

// ========== SHOW QUESTION ==========
function showQuestion() {
  answered = false;

  var q = questions[currentIndex];
  var total = questions.length;

  // Update counter and progress bar
  document.getElementById("question-counter").textContent = (currentIndex + 1) + "/" + total;
  document.getElementById("progress-bar").style.width = ((currentIndex / total) * 100) + "%";

  // Decide if this is type-in or multiple choice (every 4th question is type-in)
  var isTypeQuestion = (currentIndex % 4 === 3);

  // Set question display
  document.getElementById("hindi-display").textContent = q.hindi;
  document.getElementById("question-prompt").textContent = q.roman;

  if (isTypeQuestion) {
    document.getElementById("question-type-label").textContent = "Type the English meaning:";
    document.getElementById("mc-section").classList.add("hidden");
    document.getElementById("type-section").classList.remove("hidden");
    document.getElementById("type-input").value = "";
    document.getElementById("type-input").focus();
  } else {
    document.getElementById("question-type-label").textContent = "Choose the correct meaning:";
    document.getElementById("mc-section").classList.remove("hidden");
    document.getElementById("type-section").classList.add("hidden");
    renderChoices(q);
  }

  // Hide feedback
  document.getElementById("feedback-box").classList.add("hidden");
  document.getElementById("feedback-box").classList.remove("correct-feedback", "wrong-feedback");
}

// ========== RENDER MULTIPLE CHOICE ==========
function renderChoices(q) {
  var container = document.getElementById("choices-container");
  container.innerHTML = "";

  var shuffledChoices = shuffle(q.choices);

  for (var i = 0; i < shuffledChoices.length; i++) {
    var btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = shuffledChoices[i];
    btn.onclick = (function(choice) {
      return function() {
        checkAnswer(choice);
      };
    })(shuffledChoices[i]);
    container.appendChild(btn);
  }
}

// ========== CHECK MULTIPLE CHOICE ANSWER ==========
function checkAnswer(selected) {
  if (answered) return;
  answered = true;

  var q = questions[currentIndex];
  var isCorrect = (selected === q.answer);

  // Highlight buttons
  var buttons = document.querySelectorAll(".choice-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    if (buttons[i].textContent === q.answer) {
      buttons[i].classList.add("correct");
    }
    if (buttons[i].textContent === selected && !isCorrect) {
      buttons[i].classList.add("wrong");
    }
  }

  processResult(isCorrect, q.answer);
}

// ========== CHECK TYPED ANSWER ==========
function checkTypedAnswer() {
  if (answered) return;
  answered = true;

  var q = questions[currentIndex];
  var userInput = document.getElementById("type-input").value.trim().toLowerCase();
  var correctAnswer = q.answer.toLowerCase();

  var isCorrect = (userInput === correctAnswer);

  processResult(isCorrect, q.answer);
}

// ========== PROCESS RESULT ==========
function processResult(isCorrect, correctAnswer) {
  var feedbackBox = document.getElementById("feedback-box");
  var feedbackText = document.getElementById("feedback-text");

  feedbackBox.classList.remove("hidden", "correct-feedback", "wrong-feedback");

  if (isCorrect) {
    score++;
    streak++;
    if (streak > bestStreak) {
      bestStreak = streak;
    }

    var msg = randomPick(correctMsgs);

    // Check for streak milestone
    if (streakMsgs[streak]) {
      msg = streakMsgs[streak] + "\n" + msg;
    }

    feedbackText.textContent = msg;
    feedbackBox.classList.add("correct-feedback");
  } else {
    streak = 0;
    var wrongMsg = randomPick(wrongMsgs).replace("{answer}", correctAnswer);
    feedbackText.textContent = wrongMsg;
    feedbackBox.classList.add("wrong-feedback");
  }

  document.getElementById("current-score").textContent = score;
  document.getElementById("current-streak").textContent = streak;
}

// ========== NEXT QUESTION ==========
function nextQuestion() {
  currentIndex++;

  if (currentIndex >= questions.length) {
    showResults();
  } else {
    showQuestion();
  }
}

// ========== SHOW RESULTS ==========
function showResults() {
  var total = questions.length;
  var xpEarned = (score * 10) + (bestStreak * 5);

  saveProgress(xpEarned);

  document.getElementById("final-score").textContent = score + " / " + total;
  document.getElementById("final-xp").textContent = "+" + xpEarned;
  document.getElementById("final-streak").textContent = bestStreak + " 🔥";

  // Update progress bar to 100%
  document.getElementById("progress-bar").style.width = "100%";

  // Results title and message
  var pct = Math.round((score / total) * 100);
  var title, message;

  if (pct === 100) {
    title = "🏆 Perfect Score!";
    message = "Incredible! You got every single one right. You're a Hindi superstar!";
  } else if (pct >= 80) {
    title = "🎉 Amazing Job!";
    message = "You really know your stuff! Just a little more practice and you'll be perfect.";
  } else if (pct >= 60) {
    title = "👏 Nice Work!";
    message = "You're making great progress! Keep practicing and you'll master these words.";
  } else if (pct >= 40) {
    title = "🌱 Good Start!";
    message = "Every expert was once a beginner. Try this lesson again — you'll do even better!";
  } else {
    title = "💪 Keep Going!";
    message = "Learning takes time, and you're on the right path. Try again — practice makes perfect!";
  }

  document.getElementById("results-title").textContent = title;
  document.getElementById("results-message").textContent = message;

  showScreen("results-screen");
}
