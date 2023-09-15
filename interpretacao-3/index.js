
// Qual seria o resultado impresso no console, se o usu�rio digitasse o n�mero "4"?

// /*Se digitar o número "4", o código  imprime o um padrão de asteriscos no console.log:
//*
//**
//***
//****

/*O código está usando um loop while para construir linhas com asteriscos. Começando com uma linha vazia e, em seguida, 
adicionando um asterisco a cada linha, resultando  um padrão crescente de asteriscos. O número total de linhas é determinado pela entrada do usuário,
 que neste caso é "4". 
Portanto, ele imprimirá quatro linhas com a quantidade de asteriscos correspondente a cada linha, conforme mostrado acima.*/

let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas"))

while (quantidadeAtual < quantidadeTotal) {
	let linha = ""

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		linha += "*"
	}

	console.log(linha)

	quantidadeAtual++
}

