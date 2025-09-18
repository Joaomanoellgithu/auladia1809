
document.getElementById('idadeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const idade = parseInt(document.getElementById('idadeInput').value, 10);
    const resultado = document.getElementById('resultado');

    if (isNaN(idade)) {
        resultado.textContent = 'Por favor, insira uma idade válida.';
    } else if (idade >= 18) {
        resultado.textContent = 'Você é maior de idade.';
    } else {
        resultado.textContent = 'Você é menor de idade.';
    }
});