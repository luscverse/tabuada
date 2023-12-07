//VARIÁVEIS
const numero = document.querySelector('#numero');
const result = document.querySelector('#resultado');

//EXIBIÇÃO
document.getElementById('calcular').addEventListener('click', () => {
    const numeroValue = parseFloat(numero.value);

//FÓRMULA
if (!isNaN(numeroValue)) {
    result.innerHTML = '';
    
    //Calcular e exibir resultados
    for(let i = 1; i <= 10; i++) {
        const resultadoMultiplicacao = numeroValue * i;
        result.innerHTML += `${numeroValue} x ${i} = ${resultadoMultiplicacao}<br>`;
        result.style.textAlign = 'center';
    }} else { 
        result.innerHTML = 'Por favor, digite um número válido.';
        result.style.textAlign = 'center';
    }
});