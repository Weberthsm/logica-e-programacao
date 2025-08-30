function somarDoisNumeros(valor1, valor2) {
 const resultado = valor1 + valor2;
    return resultado;
}


function calcularMediaDeDoisNumeros(valor1, valor2) {
    //soma todos os valores
    const resultadoSomaDeDoisNumeros = somarDoisNumeros(valor1, valor2);
   
    //divide pelaq quantidade de valores passados
    const resultadoMediaDeDoisNumeros = resultadoSomaDeDoisNumeros / 2;     
    
        
    return resultadoMediaDeDoisNumeros;
    
}

module.exports={
    somarDoisNumeros,
    calcularMediaDeDoisNumeros
}