// Selecionando o botão de verificação
const botaoValidacao = document.getElementById('botao-validacao');
        
// Adicionando um ouvinte de evento para o clique no botão
botaoValidacao.addEventListener('click', function() {
    // Obtendo os valores dos campos A e B
    const valorA = parseFloat(document.getElementById('campoa').value);
    const valorB = parseFloat(document.getElementById('campob').value);
    
    // Verificando se B é maior que A
    if (valorB > valorA) {
        // Se for, exibimos uma mensagem positiva
        document.getElementById('mensagem').textContent = 'Formulário válido!';
        document.getElementById('mensagem').style.color = 'green';
    } else {
        // Se não for, exibimos uma mensagem negativa
        document.getElementById('mensagem').textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
        document.getElementById('mensagem').style.color = 'red';
    }
});