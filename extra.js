const input = document.getElementById('campo-pesquisa');
const texto = document.getElementById('texto');

input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
        texto.style.opacity = 1;
    } else {
        texto.style.opacity = 0;
    }
});

input.addEventListener('focus', () => {
    texto.style.opacity  = 1;
    input.placeholder = '';
});
