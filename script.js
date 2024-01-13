const resultado = document.getElementById('resultado');

function insert(num){
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado + num;
}

function resetar(){
    resultado.innerHTML = '';
}

function deletar(){
    if (!resultado.innerText) return;
    const caracteres = resultado.innerText.split('');//separou
    caracteres.splice(-1, 1);//removeu
    resultado.innerText = caracteres.join('');//juntou
}

function soma(a,b){
    return a + b;
}
function subtrair(a,b){
    return a - b;
}
function multiplicar(a,b){
    return a * b;
}
function dividir(a,b){
    return a / b;
}

function calcular(){
   const resultado = document.getElementById('resultado').innerHTML;
    if(resultado.includes('+')){
        const [operando1, operando2] = resultado.split('+').map(Number);
        const resultadoFinal = soma(operando1, operando2);
        document.getElementById('resultado').innerHTML = resultadoFinal;
    };
    if(resultado.includes('-')){
        const [operando1, operando2] = resultado.split('-').map(Number);
        const resultadoFinal = subtrair(operando1, operando2);
        document.getElementById('resultado').innerHTML = resultadoFinal;
    };
    if(resultado.includes('/')){
        const [operando1, operando2] = resultado.split('/').map(valor => Number(valor));//o map esta fazendo o loop para transformar em numero
        const resultadoFinal = dividir(operando1, operando2);
        document.getElementById('resultado').innerHTML = resultadoFinal;
    };
    if(resultado.includes('*')){
        const [operando1, operando2] = resultado.split('*').map(Number);
        const resultadoFinal = multiplicar(operando1, operando2);
        document.getElementById('resultado').innerHTML = resultadoFinal;
    };
        
    
}