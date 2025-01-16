document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.remove('open');
        } else {
            answer.style.display = 'block';
            icon.classList.add('open');
        }
    });
});


