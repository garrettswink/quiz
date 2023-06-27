// Variables
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementByID("container");
let nextBtn = document.getElementById("next-button");
let countofQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

// Quiz Array
const quizArray = [
    {
        id: "0",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Historic Task Meneuvering Lexicon",
            "Hard Terminal Management Layer",
            "It doesn't stand for anything...like KFC."
        ],
        correct: "Hyper Text Markup Language",
    },
    {
        id: "1",
        question: "What does CSS stand for?",
        options: [
            "Cat Supervision Strategies",
            "Cascading Style Sheets",
            "Crystal Solvent Solution",
            "Clairvoyant Search Selectors",
        ],
        correct: "Cascading Style Sheets",
    },
    {
        id: "2",
        question: "Which language adds interactivity to a website?",
        options: [
            "HTML",
            "CSS",
            "French",
            "JavaScript",
        ],
        correct: "JavaScript",
    },
    {
        id: "3",
        question: "Which of the following is truthy",
        options: [
            "Bananas are clones",
            "0",
            "False is True, man",
            "Mac is Better than PC",
        ]
    },
    {
        id: "4",
        question: "A JavaScript variable is _____",
        options: [
            "The mysterious force that animates gif files",
            "JavaScript doesn't use variables",
            "A container that holds a value",
            "The part of the code that does the thing",
        ]
    }
]