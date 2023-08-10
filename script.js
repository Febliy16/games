// script.js
const submitButton = document.getElementById('submitGuess');
const message = document.getElementById('message');

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

submitButton.addEventListener('click', () => {
    const guessInput = document.getElementById('guessInput');
    const userGuess = parseInt(guessInput.value);

    attempts++;

    if (userGuess === targetNumber) {
        message.textContent = `YEY AY BERHASIL, PINTER BANGET WALAUPUN ANGKANYA ${targetNumber} DALAM ${attempts} PERCOBAAN.`;
        setTimeout(() => {
            window.location.href = 'game2.html';
        }, 2000); // Pengalihan ke halaman selanjutnya setelah 2 detik
    } else if (userGuess < targetNumber) {
        message.textContent = 'ANGKANYA TERLALU RENDAH AY';
    } else {
        message.textContent = 'KETINGGIAN SAMA KEK HARAPANNYA AY:)';
    }

    guessInput.value = '';
});


const targetElement = document.getElementById('main');

targetElement.addEventListener('mouseenter', () => {
    targetElement.classList.add('h1');
});

targetElement.addEventListener('mouseleave', () => {
    targetElement.classList.remove('h1');
});

