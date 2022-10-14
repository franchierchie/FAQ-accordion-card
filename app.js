const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

// Funciona a medias. Haces click en una pregunta y muestra todas las respuestas
questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        answers[index].classList.toggle('hidden');
    });
});