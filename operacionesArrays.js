//(...) spreed operador = operador de desarme 
//permite pasar un numero indefinido de parametros a una función
//en este caso devuelve un array con la cantidad de parametros que se le pasa a la función

/**********Usando ciclo for***************/

function suma(...numeros){
	console.log(numeros)

	let acum = 0
	for(let i = 0; i < numeros.length; i++)
	{
		acum = acum += numeros[i]
	};

	return acum
}

function dobles(...numeros){
	console.log(numeros)
	const resultado = []

	for (let i = 0; i < numeros.length; i++) 
	{
		//push es un metodo para agregar elementos a un array
		resultado.push(numeros[i] * 2)
	};

	return resultado
}

function pares(...numeros){
	const resultado = []
	const length = numeros.length

	for (let i = 0; i < length; i++) 
	{
		const numero = numeros[i]

		if (numero % 2 == 0) 
			{
				resultado.push(numero)
			};
	};

	return resultado
}

suma(4, 8, 12,894, 69)
dobles(1, 2, 3)
pares(1,2,3,4,5,6,7,8,9,10,20,30,40,50)
/****************************************/

/*********Utilizando metodos de los arrays**********/
//reduce
function suma(...numeros){
	console.log(numeros)

	//El método reduce() aplica una función a un acumulador 
	//y a cada valor de un array (de izquierda a derecha) 
	//para reducirlo a un único valor.
	//En este caso sumanarlos
	
	return	numeros.reduce(function (acum, numero){
		acum += numero
		return acum
	}, 0/*valor inicial)*/)
}

//map 
// El método map() crea un nuevo array 
// con los resultados de la llamada a la función indicada 
// aplicados a cada uno de sus elementos.
function dobles (...numeros){
	console.log(numeros)

	return numeros.map(function (numero){
		return numero * 2
	})
}

//misma funcion con arrow function
const dobles = (...numeros) => numeros.map(numero => numero * 2)


//filter
//El método filter() crea un nuevo array con todos los elementos 
//que cumplan la condición implementada por la función dada.

function pares(...numeros){
	console.log(numeros)
	
	return numeros.filter(function (numero){
		return numero % 2 == 0
	})
}

//misma funcion usando arrow function
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)

/*********************************************************/

//Los metodos de los arrayas no modifican en el array en si, 
//crea un nuevo array con los resultados de la operacion aplicada
//sobre el array original

suma(4, 8, 12,894, 69)
dobles(1, 2, 3)