const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let shuffledQuestions, currentQuestionIndex;
let score = 0;

const questions = [
    {"question": "What is 1 + 1?", "answers": [{"text": "2", "correct": true}, {"text": "3", "correct": false}, {"text": "1", "correct": false}, {"text": "4", "correct": false}]},
    {"question": "What is 2 + 2?", "answers": [{"text": "4", "correct": true}, {"text": "5", "correct": false}, {"text": "3", "correct": false}, {"text": "6", "correct": false}]},
    {"question": "What is 3 + 3?", "answers": [{"text": "6", "correct": true}, {"text": "7", "correct": false}, {"text": "5", "correct": false}, {"text": "8", "correct": false}]},
    {"question": "What is 4 + 4?", "answers": [{"text": "8", "correct": true}, {"text": "9", "correct": false}, {"text": "7", "correct": false}, {"text": "10", "correct": false}]},
    {"question": "What is 5 + 5?", "answers": [{"text": "10", "correct": true}, {"text": "11", "correct": false}, {"text": "9", "correct": false}, {"text": "12", "correct": false}]},
    {"question": "What is 6 + 6?", "answers": [{"text": "12", "correct": true}, {"text": "13", "correct": false}, {"text": "11", "correct": false}, {"text": "14", "correct": false}]},
    {"question": "What is 7 + 7?", "answers": [{"text": "14", "correct": true}, {"text": "15", "correct": false}, {"text": "13", "correct": false}, {"text": "16", "correct": false}]},
    {"question": "What is 8 + 8?", "answers": [{"text": "16", "correct": true}, {"text": "17", "correct": false}, {"text": "15", "correct": false}, {"text": "18", "correct": false}]},
    {"question": "What is 9 + 9?", "answers": [{"text": "18", "correct": true}, {"text": "19", "correct": false}, {"text": "17", "correct": false}, {"text": "20", "correct": false}]},
    {"question": "What is 10 + 10?", "answers": [{"text": "20", "correct": true}, {"text": "21", "correct": false}, {"text": "19", "correct": false}, {"text": "22", "correct": false}]}
];

startGame();

function startGame() {
    score = 0;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    nextQuestion();
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        nextQuestion();
    } else {
        alert(`Quiz finished! Your score is ${score} out of ${questions.length}. Restarting...`);
        startGame();
    }
}
