// memoizacion.js

let contador2 = 1
function fibonacciMemo(num, memoria = {}){
	
	contador2++;
	if(memoria[num])return memoria[num];

	if(num == 1) return 0;
	if(num == 2) return 1;

	return memoria[num] = fibonacciMemo(num -1, memoria) + fibonacciMemo(num - 2, memoria);
}

console.log(contador)
fibonacciMemo(4)

