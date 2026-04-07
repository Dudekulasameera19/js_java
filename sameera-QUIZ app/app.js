const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyperlinks and Text Markup Language",
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Tool Multi Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to display an image?",
        options: [
            "<image>",
            "<img>",
            "<pic>",
            "<src>"
        ],
        answer: "<img>"
    },
    {
        question: "Which HTML tag is used to define a paragraph?",
        options: [
            "<para>",
            "<p>",
            "<paragraph>",
            "<text>"
        ],
        answer: "<p>"
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: [
            "<heading>",
            "<h6>",
            "<h1>",
            "<head>"
        ],
        answer: "<h1>"
    },
    {
        question: "Which attribute is used to provide an alternative text for an image?",
        options: [
            "title",
            "alt",
            "src",
            "href"
        ],
        answer: "alt"
    },
    {
        question: "Which tag is used to create a line break?",
        options: [
            "<break>",
            "<lb>",
            "<br>",
            "<line>"
        ],
        answer: "<br>"
    },
    {
        question: "Where is the correct place to insert a <title> tag?",
        options: [
            "Inside <body>",
            "Inside <head>",
            "After <html>",
            "Inside <footer>"
        ],
        answer: "Inside <head>"
    },
    {
        question: "Which input type is used for email in HTML5?",
        options: [
            "text",
            "mail",
            "email",
            "input-email"
        ],
        answer: "email"
    },
    {
        question: "Which HTML5 element is semantic and used for independent content?",
        options: [
            "<div>",
            "<article>",
            "<span>",
            "<section>"
        ],
        answer: "<article>"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        answer: "<a>"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = "";
let timeLeft = 10;
let timer;
let answered = false;
let attemptedQuestions = 0;

const startBox = document.getElementById("start-box");
const startBtn = document.getElementById("start-btn");
const questionText = document.getElementById("question");
const options = document.getElementById("options");
const nextbtn = document.getElementById("nextbtn");
const exitBtn = document.getElementById("exit-btn");
const progress = document.getElementById("progress");
const time = document.getElementById("Time");
const message = document.getElementById("message");
const resultBox = document.getElementById("result-box");
const finalScore = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");
const quizBox = document.getElementById("quiz-box");

quizBox.style.display = "none";
resultBox.style.display = "none";

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    answered = false;
    selectedOption = "";
    message.textContent = "";

    const currentData = questions[currentQuestion];
    questionText.textContent = currentData.question;
    progress.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    time.textContent = `Timer : ${timeLeft}s`;

    options.innerHTML = "";

    currentData.options.forEach(function (option) {
        const div = document.createElement("div");
        div.classList.add("option");
        div.textContent = option;

        div.addEventListener("click", function () {
            if (answered) return;

            const allOptions = document.querySelectorAll(".option");
            allOptions.forEach(function (item) {
                item.classList.remove("selected");
            });

            div.classList.add("selected");
            selectedOption = option;
        });

        options.appendChild(div);
    });

    if (currentQuestion === questions.length - 1) {
        nextbtn.textContent = "Submit";
    } else {
        nextbtn.textContent = "Next";
    }

    startTimer();
}

function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        time.textContent = `Timer : ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer(true);
        }
    }, 1000);
}

function checkAnswer(isTimeUp = false) {
    answered = true;
    attemptedQuestions++;

    const correctAnswer = questions[currentQuestion].answer;
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach(function (item) {
        item.style.pointerEvents = "none";

        if (item.textContent === correctAnswer) {
            item.classList.add("correct");
        }

        if (
            selectedOption &&
            item.textContent === selectedOption &&
            selectedOption !== correctAnswer
        ) {
            item.classList.add("wrong");
        }
    });

    if (isTimeUp) {
        message.textContent = "Time's up!";
        message.style.color = "red";

        setTimeout(function () {
            goToNextQuestion();
        }, 1000);
    } else if (selectedOption === correctAnswer) {
        score++;
        message.textContent = "Correct Answer!";
        message.style.color = "green";
    } else {
        message.textContent = "Wrong Answer!";
        message.style.color = "red";
    }
}

function goToNextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult(false);
    }
}

function showResult(exitedEarly = false) {
    clearInterval(timer);
    quizBox.style.display = "none";
    resultBox.style.display = "block";

    if (exitedEarly) {
        finalScore.textContent = `You exited the quiz. Correct Answers: ${score} | Attempted: ${attemptedQuestions} / ${questions.length}`;
    } else {
        finalScore.textContent = `Quiz Completed! Correct Answers: ${score} | Attempted: ${attemptedQuestions} / ${questions.length}`;
    }
}

startBtn.addEventListener("click", function () {
    startBox.style.display = "none";
    quizBox.style.display = "block";
    loadQuestion();
});

nextbtn.addEventListener("click", function () {
    if (answered) return;

    if (selectedOption === "") {
        message.textContent = "Please select an option!";
        message.style.color = "orange";
        return;
    }

    clearInterval(timer);
    checkAnswer(false);

    setTimeout(function () {
        goToNextQuestion();
    }, 1000);
});

exitBtn.addEventListener("click", function () {
    const confirmExit = confirm("Are you sure you want to exit the quiz?");
    if (confirmExit) {
        showResult(true);
    }
});

restartBtn.addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    selectedOption = "";
    timeLeft = 10;
    answered = false;
    attemptedQuestions = 0;

    resultBox.style.display = "none";
    startBox.style.display = "block";
});