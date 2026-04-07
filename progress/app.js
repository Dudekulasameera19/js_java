const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<p>"
        ],
        answer: "<a>"
    },
    {
        question: "Which CSS property is used to change text color?",
        options: [
            "font-style",
            "background-color",
            "color",
            "text-align"
        ],
        answer: "color"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "//",
            "##",
            "<!-- -->",
            "**"
        ],
        answer: "//"
    },
    {
        question: "Which method is used to print something in the console?",
        options: [
            "console.print()",
            "log.console()",
            "console.log()",
            "print.console()"
        ],
        answer: "console.log()"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = "";
let timeLeft = 10;
let timer;

const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");
const timerText = document.getElementById("timer");
const message = document.getElementById("message");
const resultBox = document.getElementById("resultBox");
const finalScore = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");
const quizBox = document.querySelector(".quiz-box");

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    startTimer();

    selectedOption = "";
    message.textContent = "";
    nextBtn.disabled = false;

    const currentData = questions[currentQuestion];

    questionText.textContent = currentData.question;
    progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

    optionsBox.innerHTML = "";

    currentData.options.forEach(function(option) {
        const div = document.createElement("div");
        div.classList.add("option");
        div.textContent = option;

        div.addEventListener("click", function() {
            if (nextBtn.disabled) {
                return;
            }

            const allOptions = document.querySelectorAll(".option");
            allOptions.forEach(function(item) {
                item.classList.remove("selected");
            });

            div.classList.add("selected");
            selectedOption = option;
        });

        optionsBox.appendChild(div);
    });

    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = "Submit";
    } else {
        nextBtn.textContent = "Next";
    }
}

function startTimer() {
    timerText.textContent = `Time Left: ${timeLeft}s`;

    timer = setInterval(function() {
        timeLeft--;
        timerText.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer(true);
        }
    }, 1000);
}

function checkAnswer(timeUp = false) {
    nextBtn.disabled = true;

    const allOptions = document.querySelectorAll(".option");
    const correctAnswer = questions[currentQuestion].answer;

    allOptions.forEach(function(item) {
        if (item.textContent === correctAnswer) {
            item.classList.add("correct");
        }

        if (selectedOption !== "" && item.textContent === selectedOption && selectedOption !== correctAnswer) {
            item.classList.add("wrong");
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        message.textContent = "Correct Answer";
        message.style.color = "green";
    } else {
        if (timeUp) {
            message.textContent = `Time is up! Correct answer: ${correctAnswer}`;
        } else {
            message.textContent = `Wrong Answer. Correct answer: ${correctAnswer}`;
        }
        message.style.color = "red";
    }

    setTimeout(function() {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

nextBtn.addEventListener("click", function() {
    clearInterval(timer);

    if (selectedOption === "") {
        alert("Please select an option");
        startTimer();
        return;
    }

    checkAnswer(false);
});

function showResult() {
    quizBox.style.display = "none";
    resultBox.style.display = "block";
    finalScore.textContent = `You scored ${score}/${questions.length}`;
}

restartBtn.addEventListener("click", function() {
    clearInterval(timer);
    currentQuestion = 0;
    score = 0;
    selectedOption = "";
    quizBox.style.display = "block";
    resultBox.style.display = "none";
    loadQuestion();
});

loadQuestion();