//saludarFamilia.js
 /*closures */


/************Utilizando Funciones*************/
function saludarGomez(nombre){
	console.log(`Hola ${nombre} Gómez`)
}

function saludarPerez(nombre){
	console.log(`Hola ${nombre} Perez`)
}
/********************************************/

/***************Closures*********************/
//funcion externa
function saludarFamilia(apellido)
{
	//funcion interna
	return function saludarMiembroDeFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")
const saludarMadrigal = saludarFamilia("Madrigal")

//En ambos casos con funciones o clousure el llamada es igual
saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Luis")

saludarPerez("Manuel")
saludarPerez("José")

saludarMadrigal("Carlos")
saludarMadrigal("Eduardo")

/*******************************************************************/
/*****************Prefijos Desafio Clase***************************/

//Usando Funciones
function crearPrefijo(prefijo){
	return function ponerPrefijo(palabra){
		console.log(`${prefijo}${palabra}`)
	}
}

//USando Arrow Fnction
const crearPrefijo = (prefijo) => ponerPrefijo = (palabra) => console.log((`${prefijo}${palabra}`))

const prefijoRE = crearPrefijo("RE")

prefijoRE("bueno")
prefijoIN("creible")

