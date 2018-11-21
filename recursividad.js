// recursividad.js
let contador = 1;

function fibonacci(num){
	contador++;
	//cado base: Caso que corta la recursividad
	if(num == 1) return 0;
	if(num == 2) return 1;

	return fibonacci(num - 1) + fibonacci(num - 2)
}

fibonacci(1)
