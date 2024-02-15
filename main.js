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
let selectedAnswer = 0;

const showQuestion = (qNumber) => {
    question.textContent = data[qNumber].question
    answers.innerHTML = data[qNumber].answers.map((item, index) =>
        `
        <div class="game__content--answers__answer">
            <input name="answer" type="radio" id= ${index} value=${item.isCorrect}>
            <label for= ${index}>${item.answer}</label>
        </div>
        `
    ).join("");
};

showQuestion(qIndex);

