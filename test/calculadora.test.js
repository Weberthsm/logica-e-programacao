const { expect } = require('chai');
const {somarDoisNumeros} = require('../src/calculadora');


describe('Testes da função de soma', function(){            //Função do mocha (O describe representa um grupo de testes)
    it('Somar dois numeros positivos', function(){          // Representa um teste específico

        const resultadoSoma = somarDoisNumeros(7, 4);  
        expect(resultadoSoma).to.equal(11);                 //chai para comparar 2 valores
    });

    it('Somar um número positivo e um negativo', function(){ // Representa um teste específico
         
         const resultadoSoma = somarDoisNumeros( 17, -3);
         expect(resultadoSoma).to.equal(14);                //chai para comparar 2 valores
    });

    it('Somar dois números negativos', function(){          // Representa um teste específico
         const resultadoSoma = somarDoisNumeros(-7, -3);
         expect(resultadoSoma).to.equal(-10);
     });
    
     it('Somar dois números zerados', function(){           // Representa um teste específico
        // Coleta o resultado da função
         const resultadoSoma = somarDoisNumeros(0, 0);
         expect(resultadoSoma).to.equal(0);                 //chai para comparar 2 valores
     });

}); 







