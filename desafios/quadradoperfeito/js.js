// JS

function calcularQuadradoPerfeito(num) {
    //retira a raiz quadrada, valor inteiro
    const raizQ = parseInt(Math.sqrt(num));
    //verifica se a raiz quadrada elevado ao quadrado é um valor exato
    return (raizQ * raizQ) == num;
}

function validaEntrada(num) {
    if (num == "" || num <= 0) {
        return false;
    }
    return true;
}

const botao = document.getElementById('button');

const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = document.getElementById("num").value;

    if (!validaEntrada(value)) {
        alert('Insirar algum número maior que zero');
    } else if (calcularQuadradoPerfeito(value)) {
        alert('É Quadrado perfeito');
    } else {
        alert('Não é quadrado perfeito');
    }
});