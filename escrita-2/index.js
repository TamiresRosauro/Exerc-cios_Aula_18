
/**
 * 
 * Considere que voc� tenha acesso a um "array" que � composto somente de n�meros. 
 * Crie uma fun��o para cada um dos itens abaixo, realizando as opera��es pedidas: **/

/*1) Escreva uma fun��o que imprime cada valor do "array" em uma linha. */

const numeros = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]

    function imprimirLista (numeros){
        for(let i=0; i<numeros.length; i++)
            
    console.log(numeros[i])
} 
imprimirLista(numeros)



/*2) Escreva uma fun��o que imprime cada um dos valores do "array" divididos por 10.*/

const numeros = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]

function imprimirValoresDivididos (numeros) {
    for(let i=0; i<numeros.length; i++)
        
    console.log(numeros [i] / 10)       
}
imprimirValoresDivididos(numeros)



/* 3) Escreva uma fun��o que cria um novo array contendo somente os n�meros pares do "array original" e, 
* depois, imprima esse novo array. */

const numeros = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]

function filtrarNumerosPares(numeros) {
    let numerosPares = []

    for(let i=0; i<numeros.length; i++){
        if(numeros[i] % 2 === 0 ){
        numerosPares.push(numeros[i])
        
        }
    }
    console.log(numerosPares)
}
filtrarNumerosPares(numeros) 




/*4) Escreva uma fun��o que cria um novo array contendo strings no seguinte formato: 
* "O elemento do �ndice 'i' �: 'numero'". Depois, imprima esse novo array. */

const numeros = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]

function identificarElementos(numeros) {
    let elementosIdentificados = []

    for(let i=0; i<numeros.length; i++){
        elementosIdentificados.push("O elemento do índice '" + i + "' é: '" + numeros[i] + "'")
    }

    for(let i=0; i<elementosIdentificados.length; i++){
        console.log(elementosIdentificados[i])
    }
} 

identificarElementos(numeros)




/* 5) Função para imprimir no console o maior e o menor números contidos no "array original" */

const numeros = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ] 

// Declarando uma função com o nome imprimirMaiorMenor que recebe como parâmetro a variável "numeros", que é um array de números
function imprimirMaiorMenor(numeros) {

    // Declarando a variável com nome numeroMaior, usando "let" pois ela pode mudar posteriormente
    // Essa variável recebe inicialmente o primeiro número do array, que é 80 
    let numeroMaior = numeros[0]

    // Declarando a variável com nome numeroMenor, usando "let" pois ela pode mudar posteriormente
    // Essa variável recebe inicialmente o primeiro número do array, que é 80 
    let numeroMenor = numeros[0]
    
    // Usando o laço "for" que inicializa em "1" pois o valor do índice 0 já pegamos anteriormente
    // Esse laço vai se repetir enquanto a variável "i" for menor que o tamanho do array, dessa forma percorrendo todos os elementos do array
    // Ao final de cada repetição, o "i" incrementa em 1
    for(let i=1; i<numeros.length; i++){
        // Testando se o próximo valor do array é maior do que o valor que armazenamos anteriormente na variável numeroMaior
        if(numeros[i] > numeroMaior){
            // Se sim, atribui o novo valor na variável numeroMaior
            numeroMaior = numeros[i]
        }
        // Testando se o próximo valor do array é menor do que o valor que armazenamos anteriormente na variável numeroMenor
        if(numeros[i] < numeroMenor){
            // Se sim, atribui o novo valor na variável numeroMenor
            numeroMenor = numeros[i]
        }
    }
  
    console.log("O maior numero é " + numeroMaior)
    console.log("O menor número é " + numeroMenor)
}

// Chamando a função para execução
imprimirMaiorMenor(numeros)


   





