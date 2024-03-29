const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ]
    },

    {
        id: 2,
        question: "A pickle is made from which vegetable?",
        answers: [
            { answer: "Potato", isCorrect: false },
            { answer: "Carrot", isCorrect: false },
            { answer: "Cucumber", isCorrect: true },
            { answer: "Cabbage", isCorrect: false },
        ]
    },

    {
        id: 3,
        question: "How many sides does a triangle have?",
        answers: [
            { answer: "1", isCorrect: false },
            { answer: "3", isCorrect: true },
            { answer: "4", isCorrect: false },
            { answer: "2", isCorrect: false },
        ]
    },

    {
        id: 4,
        question: "Who painted the Mona Lisa?",
        answers: [
            { answer: "Amedeo Modighliani", isCorrect: false },
            { answer: "Vincent Van Gogh", isCorrect: false },
            { answer: "Gustav Klimt", isCorrect: false },
            { answer: "Leonardo Da Vinchi", isCorrect: true },
        ],
    },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".game__content--question");
const answers = document.querySelector(".game__content--answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".result__play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
};

play.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    playAgain();
})

const showResult = () => {
    resultScreen.style.display = 'block';
    gameScreen.style.display = 'none';

    resultScreen.querySelector(".result__correct").textContent =
    `Correct Answers: ${correctCount}`;

    resultScreen.querySelector(".result__wrong").textContent =
    `Wrong Answers: ${wrongCount}`;

    resultScreen.querySelector(".result__score").textContent =
    `Total Score: ${(correctCount - wrongCount) * 10}`;
}

const showQuestion = (qNumber) => {
    if (qIndex == data.length) {
        return showResult();
    }
    selectedAnswer = null;
    question.textContent = data[qNumber].question; 
    answers.innerHTML = data[qNumber].answers.map((item, index) =>
        `
        <div class="game__content--answers__answer">
            <input name="answer" type="radio" id= ${index} value=${item.isCorrect}>
            <label for= ${index}>${item.answer}</label>
        </div>
        `
    ).join("");

    selectAnswer();
};

const selectAnswer = () => {
    answers.querySelectorAll("input").forEach(el => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });
    });
};

const submitAnswer = () => {
    submit.addEventListener('click', () => {
        if (selectedAnswer !== null) {
            selectedAnswer === 'true' ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        }
        else {
            alert('please select an answer');
        }
    });
};

showQuestion(qIndex);
submitAnswer();
