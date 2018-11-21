/*This hace referencia a un objeto y su valor depende de donde lo usemos, por ejemplo*/

class Persona {
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos(){
		const _this = this
		this.amigos.forEach(function (amigo){
			//en este contexto, this no recuerda quien es el onjeto que contiene this.nombre
			//se puede hacer una referencia asignando _this = this / self = this
			//asi _this tiene algo definido
			console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${_this.amigos}`)
		})
	}
}

const carlos = new Persona("Carlos", ["Argenis", "Luis", "José", "Klenier"])

/***************OTRA SOLUCION************/
/********Utilizando la funcion bind*********/

/*
Método bind: metodo que tienen todas las funciones 
que  sirve para setear el valor de this para esa funcion 
(define el contexto de esa funcion)
*/


class Persona {
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos(){
		this.amigos.forEach(function (amigo){
			//en este contexto, this no recuerda quien es el onjeto que contiene this.nombre
			//se puede hacer una referencia asignando _this = this / self = this
			//asi _this tiene algo definido
			console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${this.amigos}`)
		}.bind(this))
	}
}

const carlos = new Persona("Carlos", ["Argenis", "Luis", "José", "Klenier"])

/***************OTRA SOLUCION************/
/********Utilizando Arrow Function*********/

/*
las arrow function hacen el bind de manera automatica, 
cuadno se define una arrow function this toma el valor 
que tiene this fuera del contexto de la funcion
*/


class Persona {
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos(){
		this.amigos.forEach( (amigo) => {
			console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${this.amigos}`)
		})
	}
}

const carlos = new Persona("Carlos", ["Argenis", "Luis", "José", "Klenier"])

carlos.listarAmigos()