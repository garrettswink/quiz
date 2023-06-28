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


// Quiz Questions
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
            "If X than Y",
            "0",
            "False",
            "Mac is better than PC",
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
        ],
    },
];

// Click Functions
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener('click', (displayNext = () =>{
    questionCount += 1;


if(questionCount == quizArray.length){
    displayContainer.classList.add("hide");
    scoreContainer.classList.remove('hide');
    userScore.innerHTML = "You scored " + scoreCount + " out of " + questionCount;
}
else{
    countofQuestion.innerHTML = questionCount + 1 + ' of ' + quizArray.length + ' Question';

    quizDisplay(questionCount);
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    }
})
);

// Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = '${count}s';
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

// Quiz Generator -- This feels like the most likely thing to break
function quizCreater() {
    quizArray.sort(() => Math.random() - 0.5);

    for(let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement('div');
        div.classList.add('container-mid', 'hide');

        countofQuestion.innerHTML = 1 + ' of ' + quizArray.length + ' Question';

        let question_DIV = document.createElement('p');
        question_DIV.classList.add('question');
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innterHTML += `
        <button class='option-div' onclick-'checker(this)'>
        ${i.options[0]} </button>`

        <button class='option-div' onclick-'checker(this)'>
        ${i.options[1]} </button>

        <button class='option-div' onclick-'checker(this)'>
        ${i.options[2]} </button>

        <button class='option-div' onclick-'checker(this)'>
        ${i.options[3]} </button>`

        quizContainer.appendChild(div);
    }
};

function checker (userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementByClassName('container-mid')[questionCount];
    let options = question.querySelectorAll('.option-div');

    if(userSolution === quizArray[questionCount].correct) {
        userOption.classList.add('correct');
        scoreCount++;
        } 
        else {
            userOption.classList.add('incorrect');
            
            options.forEach((element) => {
            if ((element.innerText = quizArray[questionCount].correct)) {
                element.classList.add('correct');
            }
        });
    
    clearInterval(countdown);
    options.forEach((element) => {
            element.disabled = true;
        });
}

function initial () 
    quizContainer.innerHTML = '';
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

startButton.addEventListener('click', () => {
    startScreen.classList.add('hide');
    displayContainer.classList.remove('hide');
    initial();
});

window.onload = () => {
    startScreen.classList.add('hide');
    displayContainer.classList.remove('hide');
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};


