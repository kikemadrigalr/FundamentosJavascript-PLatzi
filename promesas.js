function get(URL){
	return new Promise((resolve, reject) =>{ //promesa, recibe dos parametros resolve para el request exitoso y reject para fallido
		const xhr = new XMLHttpRequest();	

		xhr.onreadystatechange = function () {
			const DONE = 4
			const OK =  200

			if(this.readyState === DONE){
				if(this.status === OK){
					resolve(JSON.parse(this.responseText)) //request exitoso
				}
				else
				{
					reject(new Error(`Se produjo un error al realizar el request: ${this.status}`)) //request fallido
			}
		}

    xhr.open('GET', URL);
    xhr.send(null);
	})
}

function handleError(err){
  console.log(`Request failed: ${err}`)
}

let luke

get('https://swapi.co/api/people/1/')
  .then(response => {
    return get(luke.homeworld)
  })
  .then(homeworld => {
    luke.homeworld = homeworld
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
  })
  .catch(err => handleError(err))