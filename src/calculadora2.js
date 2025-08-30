function somarDoisNumeros(a, b) {
    return a + b;
}   


function mediaDeDoisNumeros(a, b) {
    
    const resultado = somarDoisNumeros(a, b);
    return resultado /2;
}   

function subtrairDoisNumeros(a, b) {
    return a - b;
}   

function multiplicarDoisNumeros(a, b) {
    return a * b;
}   

function dividirDoisNumeros(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}

const resultadosoma = somarDoisNumeros(5, 3);
console.log('O resultado da soma é: ${resultadosoma}'); 


const resultadosubtracao = subtrairDoisNumeros(10, 4);
console.log('O resultado da subtração é: ${resultadosubtracao}');

const resultadomultiplicacao = multiplicarDoisNumeros(6, 7);
console.log('O resultado da multiplicação é: ${resultadomultiplicacao}');   

const resultadodivisao = dividirDoisNumeros(20, 4);
console.log('O resultado da divisão é: ${resultadodivisao}');
