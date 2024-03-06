function checkAnswer(button) {
    var userAnswer = button.textContent;
    var correctAnswer = button.closest('.question').querySelector('h2').textContent;
    var feedback = button.nextElementSibling;

    // Desactivar los botones después de seleccionar una respuesta
    var buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    if (userAnswer === correctAnswer) {
        feedback.textContent = '¡Correcto!';
        feedback.style.color = 'green';
        button.style.backgroundColor = 'green';
    } else {
        feedback.textContent = 'Incorrecto. La respuesta correcta es: ' + correctAnswer;
        feedback.style.color = 'red';
        button.style.backgroundColor = 'red';
    }
}
