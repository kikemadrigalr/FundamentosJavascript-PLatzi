/**********callBackServidor.js***********/
/*********Callback a un servidor externo*********/

//hacer un request del tipo HTTP sin utilizar ninguna libreria

//recibe url y como segundo parametro un callback
function get(URL, callback){
//se crea un objeto xrh
const xhr = new XMLHttpRequest();

//onreadystatechange paopiedad del objeto xhr que recibe una funcion
//esa funcion es la que se va a ejecutar cuando el request se complete
xhr.onreadystatechange = function (){
	//variable para manejar los errores
	const DONE = 4 //se realizo bien el request
	const OK =200 //si el status es 200 no hubo error

	if(this.readyState === DONE)
	{
		if(this.status === OK)
		{   //todo OK
			
			//para llamar al callback el primer parametro que se pasa es el error
			//el o los siguientes parametros que se pasan, son los parametros de resultado
			//como no hay error el primer parametro es null
			callback(null, JSON.parse(this.responseText))
			//this.responseText como segundo parametro contiene el resultado del request
			//contiene los datos que se piden en el request en forma de texto
			//JSON.parse convierte el resultado del reuqest de un string con formato json a un objeto Json utilizable en Javascript
		}
		else
		{  //hubo error

			//para llamar al callback el primer parametro que se pasa es el error
			//el o los siguientes parametros que se pasan, son los parametros de resultado
			//si hay error n hay resultado, asi que se envia solo el primer parametro
			callback(new Error(`Se produjo un error al realizar el request: ${this.status}`))
			//this apunta al objeto xhr por lo tanto (this.status == xhr.status)
		}
	}
}

//open al objeto xhr pasandole una url con el metodo get
xhr.open('GET', URL);
xhr.send(null); //aqui se ejecuta el request

}

function handleError(error){
	console.log(`Request Fallido: ${error}`)
}

//llamado a la funcion get
get('https://swapi.co/api/people/1/', function onResponse(error, luke){
//este callback recibe dos parametro, el primer parametroel errory elsegundo elobjeto que queremos (luke)

//manejar el error
	if(error)
	{
		return handleError(error)	
	} 

	//obtener planeta
	get(luke.homeworld, function onHomeworldResponse(error, homeworld){
		if(error)
		{
			return handleError(error)	
		} 

		luke.homeworld = homeworld
		console.log(`${luke.name} nació en ${luke.homeworld.name}`)
	})

	get(luke.species, function onSpecies(error, species){
		if(error)
		{
			return handleError(error)
		}

		luke.species = species
		console.log(`Pertenezco a la especie ${luke.species.name}`)
	})

	// get(luke.vehicles, function onVehicles(error, naves){
	// 	if (error) 
	// 	{
	// 		return handleError(error)
	// 	};

	// 	luke.vehicles = naves
	// 	console.log(`Se volar ${luke.naves.name}`)
	// })

	//request exitoso
	//console.log(`Request Exitoso`)
	//console.log('luke', luke) //string luke, objeto luke
})