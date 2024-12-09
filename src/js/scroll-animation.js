window.addEventListener('scroll', function () {
    const element = document.querySelector('.container-lateral-produtos');
    const position = element.getBoundingClientRect();

    if (position.top < 0) {
        element.classList.remove('appear'); // Remove a classe quando sai por cima
 // Remove a classe quando sai por cima
    } else {
// Adiciona a classe quando está na tela
        element.classList.add('appear'); // Adiciona a classe quando está na tela
    }
});

