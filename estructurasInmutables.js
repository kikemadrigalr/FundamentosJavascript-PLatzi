// estructurasInmutables.js

// se define un objeto 
let carlos = {nombre: 'carlos', apellido: 'madrigal', edad: 28}

//se dclara una variable y se le asigna el objeto anterior
let otroCarlos = carlos

//se hace la comparacion de valor y tipo de dato de ambos objets
//usando el operador ===
otroCarlos === carlos
//devuelve true

//se cambia la propiedad edad al objeto otroCarlos
otroCarlos.edad = 27

//se verifican los valores de los objetos
carlos
otroCarlos
//ambos devuelven {nombre: "carlos", apellido: "madrigal", edad: 27}
/*
	apellido
:
"madrigal"
edad
:
27
nombre
:
"carlos"
__proto__
:
Object
*/

//se define un funcion cumpleaños que reciba un objeto persona
//para modificar el valor edad
function cumple(persona){
	persona.edad++
}
//esta funcion esta modificando variables que no son locales a la funcion
//efecto de lado; esto queremos evitarlo
//queremos hacer que los parametro se envian a traves de la funcion sean inalterables
//es decir inmmutables

//se llama ala funcion cumple pasando el objeto carlos
cumple(carlos)

//se verifican las propiedades
carlos
otroCarlos
//devuelve{nombre: "carlos", apellido: "madrigal", edad: 28}


//reescribimos la funcion cumpleaños de la siguiente manera
//para evitar modificar el objeto persona que llega a la funcion
//vamos a copiar ese objeto (clone) y se hace un llamado al metodo 
//assingn del prototipo Object que recibe dos parametros 2 objetos
//asignando al primero todas las propiedades que tiene el segundo
//al clone se le suma la edad y se retorna
cumpleanos = function (persona){
	const clone = Object.assign({}, persona)
	return clone
}

//se llama a la funcion cumpleanos pasandole el objeto
cumpleanos(carlos)
//esto va a devolver por cada llamado a la funcion un nuevo objeto 
//con los mismas propiedades (nombr, apellido) pero la edad siempre sera la mismas 
//la que recibe mas 1
//porque recibe siempre la misma edad al llamar la funcion 

//se declara una variable y se le asigna la funcion cumpleanos con el parametro carlos
const carlosViejo = cumpleanos(carlos)

//se verifican los valores de las propiedades
carlos
otroCarlos
carlosViejo

//se comparan los objeto con ===
carlos === carlosViejo
//esto devuelve false

//la funcion fue transformada en una funcion pura. estas no tienen efecto de lado
//modifican solo variables locales y no modifican los parametros que reciben
//cada llamado a la funcion es como si pudiese reemplarse por lo que devuelve
