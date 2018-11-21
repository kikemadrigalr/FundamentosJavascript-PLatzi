// iteradores.js
//permiten hacer listas infinitas de elementos

function fibonacci(){
	//primeros dos numeros de la lista
	let a =0
	let b = 1

	//retornar funcion a la cual se le pediran los siguientes
	return{
		next: function(){
			let f = a;
			a = b;
			b = f + a;
			return {value: f, done: false}
		}
	}
}
const fibo = {}
fibo[Symbol.iterator] = fibonacci

//con Symbol.iteratos Javascriot lo interpreta como un iterador y poder usar dentro de un for
//usando [] nos referimos a una propiedad
//fibo[]
//fibo representa el objet que se retorna
//const fibo = fibonacci()
//metodo next es una propiedad del obejeto devuelve 2 cosas
//un valor, y dira si la funcion termino o no
//fibo.next().value

/*done: false representa que la funcion nun termina*/

//Javascript permite hacer ciclos for con iteradores

let i = 0;
for (let value of fibo){
	console.log(value)
		i++
		
		if(i > 20) break //para finalizar el ciclo
}

/**************************************************************/
/**************************************************************/

function fibonacci(){
	//primeros dos numeros de la 
	let a =0
	let b = 1

	//retornar funcion a la cual se le pediran los siguientes
	return{
		next: function(){
			let f = a;
			a = b;
			b = f + a;
			return {value: f, done: false}
		}
	}
}

const fibo = fibonacci()
fibo.next().value