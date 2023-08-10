// script.js
const questionText = document.getElementById('questionText');
const answerInput = document.getElementById('answerInput');
const checkButton = document.getElementById('checkButton');

const questions = [
    {
        question: 'Apa ibu kota Indonesia?',
        answer: 'jakarta'
    },
    {
        question: 'Berapa hasil dari 21 + 12?',
        answer: '33'
    },
    {
        question: '1 Makanan Kesukaan Pacarmu',
        answer: 'Seblak'
    },
    {
        question: 'Nama Pacarmu Siapa?',
        answer: 'Riko Febri Setiawan'
    },
    {
        question: 'Sejak Kapan Pacaran?',
        answer: '16 September 2022'
    },
    {
        question: '3 Warna Kesukaan Pacarmu?',
        answer: 'Hitam, Putih, Biru'
    },
    {
        question: 'Tanggal Lahir Pacarmu?',
        answer: '01 April 2004'
    },
    {
        question: 'Hal Apa Yang Pacarmu Senang Lakukan?',
        answer: 'Tidur'
    },
    {
        question: 'Hal Apa Yang Pacarmu Takutkan',
        answer: 'Takut Kehilanganku'
    },
    {
        question: 'Apa Yang Pacar Kamu Sukai?',
        answer: 'Aku'
    },
];

let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
    } else {
        questionText.textContent = 'YEY.. AY MENJAWAB SEMUA DENGAN BENAR.';
        answerInput.style.display = 'none';
        checkButton.style.display = 'none';
        setTimeout(() => {
            window.location.href = 'reward.html';
        }, 2000);
    }
}

checkButton.addEventListener('click', () => {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        currentQuestionIndex++;
        displayQuestion();
        answerInput.value = '';
    } else {
        alert('Salah Ay!!! Jawab Lagi Sana');
    }
});

displayQuestion();
