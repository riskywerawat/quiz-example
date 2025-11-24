// ===== State Management =====
let quizData = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let shuffledQuestions = [];

// ===== DOM Elements =====
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");

const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const retryBtn = document.getElementById("retry-btn");
const reviewBtn = document.getElementById("review-btn");
const backToResultBtn = document.getElementById("back-to-result-btn");

const totalQuestionsWelcome = document.getElementById("total-questions");
const totalQuestionsQuiz = document.getElementById("total-questions-quiz");
const currentQuestionSpan = document.getElementById("current-question");
const progressPercentage = document.getElementById("progress-percentage");
const progressFill = document.getElementById("progress-fill");
const qNumber = document.getElementById("q-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

// ===== Initialization =====
async function init() {
  try {
    const response = await fetch("example.json");
    quizData = await response.json();
    totalQuestionsWelcome.textContent = quizData.length;
    console.log(`✅ Loaded ${quizData.length} questions successfully!`);
  } catch (error) {
    console.error("❌ Error loading quiz data:", error);
    questionText.textContent =
      "ไม่สามารถโหลดข้อมูลคำถามได้ กรุณาลองใหม่อีกครั้ง";
  }
}

// ===== Utility Functions =====
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function showScreen(screen) {
  [welcomeScreen, quizScreen, resultScreen, reviewScreen].forEach((s) => {
    s.classList.remove("active");
  });
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== Quiz Functions =====
function startQuiz() {
  shuffledQuestions = shuffleArray(quizData);
  currentQuestionIndex = 0;
  userAnswers = new Array(shuffledQuestions.length).fill(null);

  totalQuestionsQuiz.textContent = shuffledQuestions.length;

  showScreen(quizScreen);
  displayQuestion();
}

function displayQuestion() {
  const question = shuffledQuestions[currentQuestionIndex];

  // Update question number and progress
  const questionNum = currentQuestionIndex + 1;
  currentQuestionSpan.textContent = questionNum;
  qNumber.textContent = questionNum;

  const progress = (questionNum / shuffledQuestions.length) * 100;
  progressPercentage.textContent = Math.round(progress) + "%";
  progressFill.style.width = progress + "%";

  // Display question text
  questionText.textContent = question.question;

  // Display options
  optionsContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option";
    optionDiv.innerHTML = `
            <div class="option-radio"></div>
            <div class="option-text">${option}</div>
        `;

    // Check if this option was previously selected
    if (userAnswers[currentQuestionIndex] === option) {
      optionDiv.classList.add("selected");
    }

    optionDiv.addEventListener("click", () => selectOption(option, optionDiv));
    optionsContainer.appendChild(optionDiv);
  });

  // Update navigation buttons
  updateNavigationButtons();
}

function selectOption(option, optionElement) {
  // Remove selected class from all options
  document.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("selected");
  });

  // Add selected class to clicked option
  optionElement.classList.add("selected");

  // Save user answer
  userAnswers[currentQuestionIndex] = option;

  // Enable next/submit button
  updateNavigationButtons();
}

function updateNavigationButtons() {
  // Previous button
  prevBtn.disabled = currentQuestionIndex === 0;

  // Next/Submit button
  const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;
  const hasAnswer = userAnswers[currentQuestionIndex] !== null;

  if (isLastQuestion) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "flex";
    submitBtn.disabled = !hasAnswer;
  } else {
    nextBtn.style.display = "flex";
    submitBtn.style.display = "none";
    nextBtn.disabled = !hasAnswer;
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  }
}

function submitQuiz() {
  // Calculate score
  let correctCount = 0;
  shuffledQuestions.forEach((question, index) => {
    if (userAnswers[index] === question.answer) {
      correctCount++;
    }
  });

  const totalQuestions = shuffledQuestions.length;
  const wrongCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Display results
  displayResults(correctCount, wrongCount, totalQuestions, percentage);
  showScreen(resultScreen);
}

function displayResults(correct, wrong, total, percentage) {
  // Update score number
  document.getElementById("score-number").textContent = correct;
  document.getElementById("score-total").textContent = total;

  // Update stats
  document.getElementById("correct-count").textContent = correct;
  document.getElementById("wrong-count").textContent = wrong;
  document.getElementById("percentage").textContent = percentage + "%";

  // Animate score ring
  const circumference = 2 * Math.PI * 85;
  const offset = circumference - (percentage / 100) * circumference;

  // Add SVG gradient if not exists
  if (!document.querySelector("#scoreGradient")) {
    const svg = document.querySelector(".score-ring");
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const gradient = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "linearGradient"
    );
    gradient.setAttribute("id", "scoreGradient");
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "100%");

    const stop1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "stop"
    );
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "hsl(250, 85%, 60%)");

    const stop2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "stop"
    );
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "hsl(320, 80%, 60%)");

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.insertBefore(defs, svg.firstChild);
  }

  const scoreRingFill = document.getElementById("score-ring-fill");
  setTimeout(() => {
    scoreRingFill.style.strokeDashoffset = offset;
  }, 100);

  // Update result icon and title
  const resultIcon = document.getElementById("result-icon");
  const resultTitle = document.getElementById("result-title");

  if (percentage === 100) {
    resultIcon.textContent = "🏆";
    resultTitle.textContent = "ยอดเยี่ยม! คะแนนเต็ม!";
  } else if (percentage >= 80) {
    resultIcon.textContent = "🎉";
    resultTitle.textContent = "เยี่ยมมาก!";
  } else if (percentage >= 60) {
    resultIcon.textContent = "👍";
    resultTitle.textContent = "ผ่าน!";
  } else if (percentage >= 40) {
    resultIcon.textContent = "📚";
    resultTitle.textContent = "ต้องพัฒนาอีกนิดนะ";
  } else {
    resultIcon.textContent = "💪";
    resultTitle.textContent = "ไม่เป็นไร ลองใหม่อีกครั้ง!";
  }
}

function showReview() {
  const reviewContent = document.getElementById("review-content");
  reviewContent.innerHTML = "";

  shuffledQuestions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.answer;

    const reviewItem = document.createElement("div");
    reviewItem.className = "review-item";
    reviewItem.innerHTML = `
            <div class="review-item-header">
                <div class="review-item-number">คำถามที่ ${index + 1}</div>
                <div class="review-item-status ${
                  isCorrect ? "correct" : "wrong"
                }">
                    ${isCorrect ? "✓ ถูกต้อง" : "✗ ผิด"}
                </div>
            </div>
            <div class="review-question">${question.question}</div>
            <div class="review-answers">
                ${
                  userAnswer
                    ? `<div class="review-answer your-answer">${userAnswer}</div>`
                    : '<div class="review-answer your-answer">ไม่ได้ตอบ</div>'
                }
                ${
                  !isCorrect
                    ? `<div class="review-answer correct-answer">${question.answer}</div>`
                    : ""
                }
            </div>
        `;

    reviewContent.appendChild(reviewItem);
  });

  showScreen(reviewScreen);
}

function retryQuiz() {
  startQuiz();
}

function backToResult() {
  showScreen(resultScreen);
}

// ===== Event Listeners =====
startBtn.addEventListener("click", startQuiz);
prevBtn.addEventListener("click", previousQuestion);
nextBtn.addEventListener("click", nextQuestion);
submitBtn.addEventListener("click", submitQuiz);
retryBtn.addEventListener("click", retryQuiz);
reviewBtn.addEventListener("click", showReview);
backToResultBtn.addEventListener("click", backToResult);

// ===== Initialize App =====
init();
