/*las promesas son objetos*/
/*
en el constructor se le pasa una funcion que recibe dos parametros
*/
const promise = new Promise(function (resolve, reject){
	/*tarea asincrona*/
	setTimeOut(function(){
		/*en el cuerpo de la funcion se debe llamar 
		a alguno de los dos parametros*/
		/*si se cumple*/
		resolve()

		/*Si se presenta error*/
		reject(new Error('Se Produjo un Error'))
	}, 1000)
})

promise
	.then(function(){
		/*si la tarea se realizo de manera exitosa*/
	})
	.catch(function (error){
		/*si se produjó un error*/
	})



/**********************************************************/
/***********************************************************/
/*********promesasLuke.js********/
/*Request HTTP Utilizando Promesas*/
/***problema luke api starWars utilizando promesas***/	

/*utilizando promesas solo necesita unparametro (url)*/
function get(URL){
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function (){
		
			const DONE = 4
			const OK =200

			if(this.readyState === DONE)
			{
				if(this.status === OK)
				{
					/*sin errore, se llama a resolve*/
					resolve(JSON.parse(this.responseText))
				}
				else
				{
					/*si ocurrio un error se llama a reject*/
					reject(new Error(`Se Produjo un Error al realizarel request: ${this.status}`))
				}
			}
		}
		xhr.open('GET',URL);
		xhr.send(null);
	})
}

let luke
/*llamada a la funcion get*/
get('https://swapi.co/api/people/1/')
	.then((response) => { /*then retorna una promesa*/ 
		/*esta funcion recibe el resultado cuando la promesa fue exitosa*/
		luke = response
		/*nuevo request para buscar el homeworld*/
		return get(luke.homeworld)
	})
	/*como el primer then retorna una promesa se puede encadenar otro debajo*/
	.then((homeworld) => {
		/* se recibe el resultado del primerafuncion get, lo que retorna la primera promesa*/
		luke.homeworld = homeworld
		console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
		return get(luke.species)
	})
	.then((especie) => {
		luke.species = especie 
		console.log(`Pertenezco a la Especie: ${luke.species.name}`) 
	}) 
	.catch(error => handleError(error))



	/*************************************************************************/
	/*************************************************************************/
	/*Utilizando la Funcion Fetch*/


	function get(URL){
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function (){
		
			const DONE = 4
			const OK =200

			if(this.readyState === DONE)
			{
				if(this.status === OK)
				{
					/*sin errore, se llama a resolve*/
					resolve(JSON.parse(this.responseText))
				}
				else
				{
					/*si ocurrio un error se llama a reject*/
					reject(new Error(`Se Produjo un Error al realizarel request: ${this.status}`))
				}
			}
		}
		xhr.open('GET',URL);
		xhr.send(null);
	})
}

let luke

fetch('https://swapi.co/api/people/1/')
	.then(response => response.json())
	.then((json) => {
		luke = json
		return fetch(luke.homeworld)
	})
	.then(response => response.json())
	.then((json) => {
		
		luke.homeworld = json
		console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
		return fetch(luke.species)
	})
	.then(response => response.json())
	.then((json) => {

		luke.species = json 
		console.log(`Pertenezco a la Especie: ${luke.species.name}`) 
	}) 
	.catch(error => handleError(error))